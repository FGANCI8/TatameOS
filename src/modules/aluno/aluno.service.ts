import { AlunoRepositoryFirestore } from './aluno.repository';
import type {
  Aluno,
  AlunoComProntidao,
  AlunoEmRiscoEvasao,
  AtualizarAlunoFinanceiroInput,
  AtualizarAlunoPerfilInput,
  GraduacaoLoteItem,
  GraduacaoLoteResultado,
  ProntidaoGraduacao,
  StatusFinanceiro,
} from './types';
import type { PresencasRepositoryFirestore } from '../presencas/presencas.repository';
import type { PagamentosRepositoryFirestore } from '../pagamentos/repository';

const HORAS_POR_GRAU = 40;

export class AlunoService {
  constructor(
    private repo: AlunoRepositoryFirestore,
    private pagamentosRepo: PagamentosRepositoryFirestore,
    private presencasRepo: PresencasRepositoryFirestore,
  ) {}

  private obterMesReferencia(date: Date = new Date()): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year}-${month}`;
  }

  private calcularDataVencimento(reference: Date, vencimentoMensalidade: number): Date {
    const lastDay = new Date(reference.getFullYear(), reference.getMonth() + 1, 0).getDate();
    const day = Math.min(Math.max(vencimentoMensalidade, 1), lastDay);
    return new Date(reference.getFullYear(), reference.getMonth(), day, 23, 59, 59, 999);
  }

  private calcularDiasEntre(dataMenor: Date, dataMaior: Date): number {
    const diffMs = Math.max(0, dataMaior.getTime() - dataMenor.getTime());
    return Math.floor(diffMs / (1000 * 60 * 60 * 24));
  }

  calcularProntidaoGraduacao(aluno: Pick<Aluno, 'horasTotais' | 'grau' | 'faixa'>): ProntidaoGraduacao {
    const horasTotais = Math.max(0, Number(aluno.horasTotais || 0));
    const horasNoCicloAtual = horasTotais === 0 ? 0 : horasTotais % HORAS_POR_GRAU;
    const percentualConclusao = aluno.grau >= 4
      ? 100
      : horasTotais === 0
        ? 0
        : horasNoCicloAtual === 0
          ? 100
          : Number(((horasNoCicloAtual / HORAS_POR_GRAU) * 100).toFixed(1));
    const horasRestantes = aluno.grau >= 4
      ? 0
      : horasTotais === 0
        ? HORAS_POR_GRAU
        : horasNoCicloAtual === 0
          ? 0
          : Number((HORAS_POR_GRAU - horasNoCicloAtual).toFixed(1));
    const grauEstimadoPorHoras = Math.min(4, Math.floor(horasTotais / HORAS_POR_GRAU));
    const proximoGrau = aluno.grau >= 4 ? null : Math.min(4, aluno.grau + 1);

    let status: ProntidaoGraduacao['status'] = 'em_progresso';
    let label = 'Em evolução';

    if (aluno.grau >= 4) {
      status = 'faixa_maxima';
      label = 'Faixa máxima';
    } else if (percentualConclusao >= 100) {
      status = 'pronto';
      label = 'Pronto para avaliação';
    } else if (percentualConclusao >= 75) {
      status = 'quase_pronto';
      label = 'Quase pronto';
    }

    return {
      horasTotais,
      horasPorGrau: HORAS_POR_GRAU,
      horasNoCicloAtual,
      horasRestantes,
      percentualConclusao,
      grauAtualRegistrado: aluno.grau,
      grauEstimadoPorHoras,
      proximoGrau,
      status,
      label,
    };
  }

  async obterAluno(id: string, tenantId: string) {
    try {
      const aluno = await this.repo.getById(id, tenantId);
      if (!aluno) {
        return { success: false, error: 'Aluno não encontrado.' };
      }
      return { success: true, data: aluno };
    } catch (error: any) {
      console.error('Erro AlunoService (obterAluno):', error);
      return { success: false, error: 'Falha ao buscar dados do aluno.' };
    }
  }

  async inicializarAluno(id: string, email: string, nome: string, tenantId: string) {
    try {
      const exist = await this.repo.getById(id, tenantId);
      if (exist) return { success: true, data: exist };

      const novoAluno: Aluno = {
        id,
        tenantId,
        email,
        nome,
        faixa: 'Branca',
        grau: 0,
        horasTotais: 0,
        status: 'Ativo',
        statusFinanceiro: 'em_dia',
        valorMensalidade: 0,
        dataCadastro: new Date(),
      };

      await this.repo.create(novoAluno, tenantId);
      return { success: true, data: novoAluno };
    } catch (error: any) {
      console.error('Erro AlunoService (inicializar):', error);
      return { success: false, error: 'Falha ao inicializar aluno.' };
    }
  }

  async adicionarHoras(id: string, horas: number, tenantId: string) {
    try {
      await this.repo.incrementHours(id, tenantId, horas);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Erro ao atualizar horas.' };
    }
  }

  async listarTodosAlunos(tenantId: string) {
    try {
      const alunos = await this.repo.listAll(tenantId);
      return { success: true, data: alunos };
    } catch (error: any) {
      return { success: false, error: 'Erro ao listar alunos.' };
    }
  }

  async listarAlunosPromoviveis(tenantId: string) {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const alunos = await this.repo.listAll(tenantId);
      const promoviveis: AlunoComProntidao[] = alunos
        .filter((aluno) => aluno.status === 'Ativo')
        .map((aluno) => ({
          ...aluno,
          prontidaoGraduacao: this.calcularProntidaoGraduacao(aluno),
        }))
        .filter((aluno) => aluno.prontidaoGraduacao.status === 'pronto');

      return { success: true, data: promoviveis };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar alunos promovíveis.' };
    }
  }

  async graduarAlunosEmLote(tenantId: string, ids: string[]) {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const idsLimpos = Array.from(new Set((ids || []).map((id) => id.trim()).filter(Boolean)));
      if (idsLimpos.length === 0) {
        return { success: false, error: 'Selecione pelo menos um aluno.' };
      }

      if (idsLimpos.length > 500) {
        return { success: false, error: 'O lote não pode exceder 500 alunos.' };
      }

      const alunos = await Promise.all(idsLimpos.map((id) => this.repo.getById(id, tenantId)));
      const alunosValidos = alunos.filter((aluno): aluno is Aluno => !!aluno);

      if (alunosValidos.length !== idsLimpos.length) {
        return { success: false, error: 'Um ou mais alunos não foram encontrados no tenant.' };
      }

      const selecionadosPromoviveis = alunosValidos.filter((aluno) => aluno.status === 'Ativo').map((aluno) => ({
        ...aluno,
        prontidaoGraduacao: this.calcularProntidaoGraduacao(aluno),
      }));

      if (selecionadosPromoviveis.some((aluno) => aluno.prontidaoGraduacao.status !== 'pronto')) {
        return { success: false, error: 'Todos os alunos selecionados precisam estar com 100% de prontidão.' };
      }

      const graduacoes: GraduacaoLoteItem[] = selecionadosPromoviveis.map((aluno) => ({
        id: aluno.id,
        faixa: aluno.faixa,
        grau: aluno.grau >= 4 ? 4 : aluno.grau + 1,
      }));

      const resultado: GraduacaoLoteResultado = await this.repo.graduarAlunosEmLote(tenantId, graduacoes);
      return { success: true, data: resultado };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao graduar alunos em lote.' };
    }
  }

  async atualizarPerfilAluno(
    id: string,
    tenantId: string,
    patch: AtualizarAlunoPerfilInput,
  ) {
    try {
      if (!id?.trim()) {
        return { success: false, error: 'ID do aluno é obrigatório.' };
      }

      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const alunoAtual = await this.repo.getById(id, tenantId);
      if (!alunoAtual) {
        return { success: false, error: 'Aluno não encontrado.' };
      }

      if (typeof patch.grau !== 'undefined' && (!Number.isInteger(patch.grau) || patch.grau < 0 || patch.grau > 4)) {
        return { success: false, error: 'Grau inválido.' };
      }

      if (typeof patch.faixa !== 'undefined' && !['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta'].includes(patch.faixa)) {
        return { success: false, error: 'Faixa inválida.' };
      }

      if (typeof patch.status !== 'undefined' && !['Ativo', 'Inativo', 'Suspenso'].includes(patch.status)) {
        return { success: false, error: 'Status inválido.' };
      }

      await this.repo.patchAluno(id, tenantId, {
        faixa: patch.faixa,
        grau: patch.grau,
        status: patch.status,
      });

      return {
        success: true,
        data: {
          ...alunoAtual,
          ...(typeof patch.faixa !== 'undefined' ? { faixa: patch.faixa } : {}),
          ...(typeof patch.grau !== 'undefined' ? { grau: patch.grau } : {}),
          ...(typeof patch.status !== 'undefined' ? { status: patch.status } : {}),
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao atualizar aluno.' };
    }
  }

  async atualizarAlunoCompleto(
    id: string,
    tenantId: string,
    perfil: AtualizarAlunoPerfilInput,
    financeiro: AtualizarAlunoFinanceiroInput,
  ) {
    try {
      if (!id?.trim()) {
        return { success: false, error: 'ID do aluno é obrigatório.' };
      }

      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const alunoAtual = await this.repo.getById(id, tenantId);
      if (!alunoAtual) {
        return { success: false, error: 'Aluno não encontrado.' };
      }

      if (typeof perfil.grau !== 'undefined' && (!Number.isInteger(perfil.grau) || perfil.grau < 0 || perfil.grau > 4)) {
        return { success: false, error: 'Grau inválido.' };
      }

      if (typeof perfil.faixa !== 'undefined' && !['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta'].includes(perfil.faixa)) {
        return { success: false, error: 'Faixa inválida.' };
      }

      if (typeof perfil.status !== 'undefined' && !['Ativo', 'Inativo', 'Suspenso'].includes(perfil.status)) {
        return { success: false, error: 'Status inválido.' };
      }

      if (typeof financeiro.valorMensalidade !== 'undefined' && (!Number.isFinite(Number(financeiro.valorMensalidade)) || Number(financeiro.valorMensalidade) < 0)) {
        return { success: false, error: 'Valor da mensalidade inválido.' };
      }

      if (typeof financeiro.statusFinanceiro !== 'undefined' && !['em_dia', 'atrasado', 'isento'].includes(financeiro.statusFinanceiro)) {
        return { success: false, error: 'Status financeiro inválido.' };
      }

      if (typeof financeiro.vencimentoMensalidade !== 'undefined' && (!Number.isInteger(financeiro.vencimentoMensalidade) || financeiro.vencimentoMensalidade < 1 || financeiro.vencimentoMensalidade > 31)) {
        return { success: false, error: 'Vencimento mensalidade inválido.' };
      }

      await this.repo.patchAlunoCompleto(id, tenantId, perfil, financeiro);

      return {
        success: true,
        data: {
          ...alunoAtual,
          ...(typeof perfil.faixa !== 'undefined' ? { faixa: perfil.faixa } : {}),
          ...(typeof perfil.grau !== 'undefined' ? { grau: perfil.grau } : {}),
          ...(typeof perfil.status !== 'undefined' ? { status: perfil.status } : {}),
          ...(typeof financeiro.statusFinanceiro !== 'undefined' ? { statusFinanceiro: financeiro.statusFinanceiro } : {}),
          ...(typeof financeiro.valorMensalidade !== 'undefined' ? { valorMensalidade: Number(financeiro.valorMensalidade) } : {}),
          ...(typeof financeiro.vencimentoMensalidade !== 'undefined' ? { vencimentoMensalidade: financeiro.vencimentoMensalidade } : {}),
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao atualizar aluno.' };
    }
  }

  async verificarInadimplencia(tenantId: string) {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const alunos = await this.repo.listAll(tenantId);
      const mesReferenciaAtual = this.obterMesReferencia(new Date());
      const pagamentosMes = await this.pagamentosRepo.listarPagamentos(tenantId, {
        mesReferencia: mesReferenciaAtual,
      });
      const pagamentosPorAluno = new Set(pagamentosMes.map((pagamento) => pagamento.alunoId));
      const hoje = new Date();

      const atualizacoes = alunos
        .filter((aluno) => aluno.statusFinanceiro !== 'isento')
        .map((aluno) => {
          const vencimento = aluno.vencimentoMensalidade;
          if (!vencimento) {
            const proximoStatus: StatusFinanceiro = aluno.statusFinanceiro === 'atrasado' ? 'em_dia' : aluno.statusFinanceiro;
            return proximoStatus === aluno.statusFinanceiro ? null : { id: aluno.id, statusFinanceiro: proximoStatus };
          }

          const dataVencimento = this.calcularDataVencimento(hoje, vencimento);
          const temPagamentoMes = pagamentosPorAluno.has(aluno.id);
          const novoStatus: StatusFinanceiro = temPagamentoMes || hoje <= dataVencimento ? 'em_dia' : 'atrasado';

          if (aluno.statusFinanceiro === novoStatus) {
            return null;
          }

          return { id: aluno.id, statusFinanceiro: novoStatus };
        })
        .filter((item): item is { id: string; statusFinanceiro: StatusFinanceiro } => Boolean(item));

      if (atualizacoes.length > 0) {
        await this.repo.bulkUpdateStatusFinanceiro(tenantId, atualizacoes);
      }

      return { success: true, data: { totalAtualizados: atualizacoes.length } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao verificar inadimplência.' };
    }
  }

  async identificarAlunosEmRisco(tenantId: string) {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const [alunosAtivos, presencasRecentes] = await Promise.all([
        this.repo.listAtivos(tenantId),
        this.presencasRepo.listPresencasDesde(tenantId, new Date(Date.now() - 15 * 24 * 60 * 60 * 1000)),
      ]);

      const alunosAtrasados = alunosAtivos.filter((aluno) => aluno.status === 'Ativo' && aluno.statusFinanceiro === 'atrasado');
      const ultimaPresencaPorAluno = new Map<string, Date>();

      presencasRecentes.forEach((presenca) => {
        if (!ultimaPresencaPorAluno.has(presenca.alunoId)) {
          ultimaPresencaPorAluno.set(presenca.alunoId, presenca.data);
        }
      });

      const hoje = new Date();
      const alunosEmRisco: AlunoEmRiscoEvasao[] = [];

      alunosAtrasados.forEach((aluno) => {
        const ultimaPresenca = ultimaPresencaPorAluno.get(aluno.id);
        const diasSemPresenca = ultimaPresenca ? this.calcularDiasEntre(ultimaPresenca, hoje) : Number.POSITIVE_INFINITY;

        if (ultimaPresenca && diasSemPresenca <= 15) {
          return;
        }

        alunosEmRisco.push({
          id: aluno.id,
          tenantId: aluno.tenantId,
          nome: aluno.nome,
          faixa: aluno.faixa,
          grau: aluno.grau,
          email: aluno.email,
          statusFinanceiro: aluno.statusFinanceiro,
          valorMensalidade: aluno.valorMensalidade,
          vencimentoMensalidade: aluno.vencimentoMensalidade,
          horasTotais: aluno.horasTotais,
          ultimaPresencaEm: ultimaPresenca,
          diasSemPresenca: Number.isFinite(diasSemPresenca) ? diasSemPresenca : 999,
          motivo: ultimaPresenca
            ? `Sem presença há ${diasSemPresenca} dia(s) e com mensalidade em atraso.`
            : 'Sem presença recente registrada e com mensalidade em atraso.',
        });
      });

      alunosEmRisco.sort((a, b) => b.diasSemPresenca - a.diasSemPresenca);

      return { success: true, data: alunosEmRisco };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao identificar alunos em risco.' };
    }
  }
}
