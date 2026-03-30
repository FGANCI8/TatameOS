import type { ServiceResult } from '../core/types';
import type { AlunoRepositoryFirestore } from '../aluno/aluno.repository';
import type {
  RegistrarPagamentoInput,
  RegistrarPagamentoResult,
  ListarPagamentosFiltro,
  ListarPagamentosResult,
  IPagamentosService,
  ResumoFinanceiro,
  FaturamentoMensalItem,
  AlunoInadimplenteFinanceiro,
  ProjecaoFinanceiraTrimestral,
} from './types';
import type { PagamentosRepositoryFirestore } from './repository';

function formatMesReferencia(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

function calcularReferenciaDia(date: Date, vencimentoMensalidade: number): Date {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const day = Math.min(Math.max(vencimentoMensalidade, 1), lastDay);
  return new Date(date.getFullYear(), date.getMonth(), day, 23, 59, 59, 999);
}

function formatMesReferenciaFromParts(year: number, month: number): string {
  return `${year}-${String(month).padStart(2, '0')}`;
}

function getRollingThreeMonthReferences(baseDate: Date = new Date()): string[] {
  const references: string[] = [];
  for (let offset = 2; offset >= 0; offset -= 1) {
    const referenceDate = new Date(baseDate.getFullYear(), baseDate.getMonth() - offset, 1);
    references.push(formatMesReferenciaFromParts(referenceDate.getFullYear(), referenceDate.getMonth() + 1));
  }
  return references;
}

function getFiscalYearsForReferences(references: string[]): number[] {
  const years = new Set<number>();
  references.forEach((reference) => {
    const [year] = reference.split('-').map(Number);
    if (Number.isFinite(year)) {
      years.add(year);
    }
  });
  return Array.from(years).sort((a, b) => a - b);
}

export class PagamentosServiceImpl implements IPagamentosService {
  constructor(
    private repo: PagamentosRepositoryFirestore,
    private alunoRepository: AlunoRepositoryFirestore,
  ) {}

  async registrarPagamento(
    input: RegistrarPagamentoInput,
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
  ): Promise<ServiceResult<RegistrarPagamentoResult>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem registrar pagamentos.' };
      }

      if (!tenantId) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!input.alunoId?.trim()) {
        return { success: false, error: 'Aluno é obrigatório.' };
      }

      const aluno = await this.alunoRepository.getById(input.alunoId.trim(), tenantId);
      if (!aluno) {
        return { success: false, error: 'Aluno não encontrado ou fora do tenant.' };
      }

      if (!Number.isFinite(Number(input.valor)) || Number(input.valor) <= 0) {
        return { success: false, error: 'Valor do pagamento inválido.' };
      }

      if (!input.metodo) {
        return { success: false, error: 'Método de pagamento é obrigatório.' };
      }

      const mesReferencia = input.mesReferencia?.trim() || formatMesReferencia(input.dataPagamento || new Date());
      if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(mesReferencia)) {
        return { success: false, error: 'Mês de referência inválido. Use o formato YYYY-MM.' };
      }

      const pagamento = await this.repo.registrarPagamento(
        {
          alunoId: input.alunoId.trim(),
          valor: Number(input.valor),
          dataPagamento: input.dataPagamento || new Date(),
          mesReferencia,
          metodo: input.metodo,
        },
        tenantId,
      );

      return { success: true, data: { pagamento } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao registrar pagamento.' };
    }
  }

  async listarPagamentos(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
    filtros: ListarPagamentosFiltro = {},
  ): Promise<ServiceResult<ListarPagamentosResult>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem consultar pagamentos.' };
      }

      if (!tenantId) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const pagamentos = await this.repo.listarPagamentos(tenantId, filtros);
      return { success: true, data: { pagamentos } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar pagamentos.' };
    }
  }

  async calcularProjecaoTrimestral(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
  ): Promise<ServiceResult<ProjecaoFinanceiraTrimestral>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem acessar projeções financeiras.' };
      }

      if (!tenantId) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const monthReferences = getRollingThreeMonthReferences();
      const yearsConsidered = getFiscalYearsForReferences(monthReferences);

      const [alunosAtivos, ...pagamentosPorAno] = await Promise.all([
        this.alunoRepository.listAtivos(tenantId),
        ...yearsConsidered.map((year) => this.repo.listarPagamentosDoAno(tenantId, year)),
      ]);

      const receitaEsperadaMensal = alunosAtivos
        .filter((aluno) => aluno.status === 'Ativo' && aluno.statusFinanceiro !== 'isento')
        .reduce((sum, aluno) => sum + Number(aluno.valorMensalidade || 0), 0);

      const pagamentosByMes = new Map<string, number>();

      pagamentosPorAno.flat().forEach((pagamento) => {
        pagamentosByMes.set(
          pagamento.mesReferencia,
          (pagamentosByMes.get(pagamento.mesReferencia) || 0) + Number(pagamento.valor || 0),
        );
      });

      const inadimplenciaHistoricaMensal = monthReferences.map((mesReferencia) => {
        const realizadoMes = pagamentosByMes.get(mesReferencia) || 0;
        return Math.max(receitaEsperadaMensal - realizadoMes, 0);
      });

      const mediaInadimplenciaHistorica = inadimplenciaHistoricaMensal.length > 0
        ? Number((inadimplenciaHistoricaMensal.reduce((sum, value) => sum + value, 0) / inadimplenciaHistoricaMensal.length).toFixed(2))
        : 0;

      const receitaEsperadaTrimestral = Number((receitaEsperadaMensal * 3).toFixed(2));
      const projecaoLiquidaTrimestral = Number(Math.max(0, receitaEsperadaTrimestral - mediaInadimplenciaHistorica).toFixed(2));
      const percentualReceitaProjetada = receitaEsperadaTrimestral > 0
        ? Number(((projecaoLiquidaTrimestral / receitaEsperadaTrimestral) * 100).toFixed(1))
        : 0;

      return {
        success: true,
        data: {
          receitaEsperadaMensal: Number(receitaEsperadaMensal.toFixed(2)),
          receitaEsperadaTrimestral,
          mediaInadimplenciaHistorica,
          projecaoLiquidaTrimestral,
          percentualReceitaProjetada,
          mesesConsiderados: monthReferences,
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao calcular projeção trimestral.' };
    }
  }

  async obterResumoFinanceiro(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
    mes: number,
    ano: number,
  ): Promise<ServiceResult<ResumoFinanceiro>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem acessar o financeiro.' };
      }

      if (!tenantId) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const mesSeguro = Number.isInteger(mes) && mes >= 1 && mes <= 12 ? mes : new Date().getMonth() + 1;
      const anoSeguro = Number.isInteger(ano) && ano > 2000 ? ano : new Date().getFullYear();
      const mesReferencia = `${anoSeguro}-${String(mesSeguro).padStart(2, '0')}`;

      const [alunosAtivos, alunosInadimplentesBase, pagamentosAno, projecaoTrimestral] = await Promise.all([
        this.alunoRepository.listAtivos(tenantId),
        this.alunoRepository.listAll(tenantId, 'atrasado'),
        this.repo.listarPagamentosDoAno(tenantId, anoSeguro),
        this.calcularProjecaoTrimestral(tenantId, isProfessorOrAdmin),
      ]);

      const pagamentosDoMes = pagamentosAno.filter((pagamento) => pagamento.mesReferencia === mesReferencia);
      const totalArrecadado = pagamentosDoMes.reduce((sum, pagamento) => sum + Number(pagamento.valor || 0), 0);
      const receitaEsperada = alunosAtivos
        .filter((aluno) => aluno.statusFinanceiro !== 'isento')
        .reduce((sum, aluno) => sum + Number(aluno.valorMensalidade || 0), 0);
      const percentualReceitaRealizada = receitaEsperada > 0
        ? Number(((totalArrecadado / receitaEsperada) * 100).toFixed(1))
        : 0;

      const faturamentoMapa = new Map<string, { total: number; quantidadePagamentos: number }>();
      pagamentosAno.forEach((pagamento) => {
        const current = faturamentoMapa.get(pagamento.mesReferencia) || { total: 0, quantidadePagamentos: 0 };
        current.total += Number(pagamento.valor || 0);
        current.quantidadePagamentos += 1;
        faturamentoMapa.set(pagamento.mesReferencia, current);
      });

      const faturamentoMensal: FaturamentoMensalItem[] = Array.from(faturamentoMapa.entries())
        .map(([mesReferenciaItem, resumo]) => ({
          mesReferencia: mesReferenciaItem,
          total: Number(resumo.total.toFixed(2)),
          quantidadePagamentos: resumo.quantidadePagamentos,
        }))
        .sort((a, b) => a.mesReferencia.localeCompare(b.mesReferencia));

      const pagamentosMaisRecentesPorAluno = new Map<string, number>();
      pagamentosAno.forEach((pagamento) => {
        if (!pagamentosMaisRecentesPorAluno.has(pagamento.alunoId)) {
          pagamentosMaisRecentesPorAluno.set(pagamento.alunoId, Number(pagamento.valor || 0));
        }
      });

      const alunosInadimplentes: AlunoInadimplenteFinanceiro[] = alunosInadimplentesBase.map((aluno) => ({
        id: aluno.id,
        tenantId: aluno.tenantId,
        nome: aluno.nome,
        email: aluno.email,
        faixa: aluno.faixa,
        grau: aluno.grau,
        horasTotais: aluno.horasTotais,
        statusFinanceiro: aluno.statusFinanceiro,
        valorReferencia: Number(aluno.valorMensalidade || pagamentosMaisRecentesPorAluno.get(aluno.id) || 0),
        valorMensalidade: Number(aluno.valorMensalidade || 0),
        vencimentoMensalidade: aluno.vencimentoMensalidade,
      }));

      const totalPendente = alunosInadimplentes.reduce((sum, aluno) => sum + Number(aluno.valorMensalidade || aluno.valorReferencia || 0), 0);
      const totalAtivos = alunosAtivos.length;
      const totalAtrasados = alunosInadimplentesBase.length;
      const taxaInadimplencia = totalAtivos > 0 ? Number(((totalAtrasados / totalAtivos) * 100).toFixed(1)) : 0;

      return {
        success: true,
        data: {
          periodo: {
            mes: mesSeguro,
            ano: anoSeguro,
            mesReferencia,
          },
          totalArrecadado: Number(totalArrecadado.toFixed(2)),
          totalPendente: Number(totalPendente.toFixed(2)),
          receitaEsperada: Number(receitaEsperada.toFixed(2)),
          percentualReceitaRealizada,
          taxaInadimplencia,
          totalAtivos,
          totalAtrasados,
          faturamentoMensal,
          alunosInadimplentes,
          projecaoTrimestral: projecaoTrimestral.success && projecaoTrimestral.data
            ? projecaoTrimestral.data
            : {
              receitaEsperadaMensal: Number(receitaEsperada.toFixed(2)),
              receitaEsperadaTrimestral: Number((receitaEsperada * 3).toFixed(2)),
              mediaInadimplenciaHistorica: 0,
              projecaoLiquidaTrimestral: Number((receitaEsperada * 3).toFixed(2)),
              percentualReceitaProjetada: 100,
              mesesConsiderados: [mesReferencia],
            },
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao obter resumo financeiro.' };
    }
  }
}
