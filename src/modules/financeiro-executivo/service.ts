import type { ServiceResult } from '../core/types';
import type {
  FluxoCaixaProjetadoItem,
  FinanceiroRiscoStatus,
  IFinanceiroExecutivoRepository,
  IFinanceiroExecutivoService,
  ResumoFinanceiroExecutivo,
} from './types';

const MONTHS_PT = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

function formatMesReferencia(year: number, monthIndex: number): string {
  return `${year}-${String(monthIndex + 1).padStart(2, '0')}`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function average(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function nextMonthReferences(
  baseDate: Date,
  count: number,
): Array<{ mes: number; ano: number; mesReferencia: string; label: string }> {
  const result: Array<{ mes: number; ano: number; mesReferencia: string; label: string }> = [];

  for (let i = 1; i <= count; i += 1) {
    const future = new Date(baseDate.getFullYear(), baseDate.getMonth() + i, 1);
    const mes = future.getMonth() + 1;
    const ano = future.getFullYear();

    result.push({
      mes,
      ano,
      mesReferencia: formatMesReferencia(ano, future.getMonth()),
      label: `${MONTHS_PT[future.getMonth()]} / ${ano}`,
    });
  }

  return result;
}

function previousMonthReferences(baseDate: Date, count: number): string[] {
  const result: string[] = [];

  for (let i = count; i >= 1; i -= 1) {
    const previous = new Date(baseDate.getFullYear(), baseDate.getMonth() - i, 1);
    result.push(formatMesReferencia(previous.getFullYear(), previous.getMonth()));
  }

  return result;
}

function sumMonthlyPayments(payments: Array<{ mesReferencia: string; valor: number }>): Map<string, { total: number; quantidadePagamentos: number }> {
  const map = new Map<string, { total: number; quantidadePagamentos: number }>();

  payments.forEach((pagamento) => {
    const current = map.get(pagamento.mesReferencia) || { total: 0, quantidadePagamentos: 0 };
    current.total += Number(pagamento.valor || 0);
    current.quantidadePagamentos += 1;
    map.set(pagamento.mesReferencia, current);
  });

  return map;
}

function buildAlertas(saldoMensal: number, taxaInadimplencia: number, indice: number): string | null {
  if (taxaInadimplencia >= 30 || saldoMensal <= 0) {
    return 'Risco crítico';
  }

  if (taxaInadimplencia >= 18 || (indice <= 2 && saldoMensal < 0)) {
    return 'Acompanhar cobrança';
  }

  if (saldoMensal < 0) {
    return 'Saldo pressionado';
  }

  return null;
}

function calcularTaxaRealizacaoHistorica(
  pagamentosPorMes: Map<string, { total: number; quantidadePagamentos: number }>,
  receitaBaseMensal: number,
  referencias: string[],
): number {
  if (receitaBaseMensal <= 0) {
    return 0;
  }

  const ratios = referencias.map((mesReferencia) => {
    const realizado = pagamentosPorMes.get(mesReferencia)?.total || 0;
    return clamp(realizado / receitaBaseMensal, 0, 1.3);
  });

  return Number(average(ratios).toFixed(2));
}

function construirFluxoCaixa(
  baseDate: Date,
  receitaBaseMensal: number,
  taxaInadimplencia: number,
  valorEmAtraso: number,
  coberturaHistoricaMedia: number,
): FluxoCaixaProjetadoItem[] {
  const proximosSeisMeses = nextMonthReferences(baseDate, 6);
  const fluxoCaixa: FluxoCaixaProjetadoItem[] = [];
  let saldoAcumulado = 0;

  proximosSeisMeses.forEach((mes, index) => {
    const crescimentoMensal = 1 + index * 0.015;
    const cobertura = clamp(coberturaHistoricaMedia || 0.9, 0.72, 1.05);
    const receitaBrutaProjetada = Number((receitaBaseMensal * crescimentoMensal * cobertura).toFixed(2));
    const taxaInadimplenciaProjetada = clamp((taxaInadimplencia / 100) + index * 0.008, 0, 0.45);
    const inadimplenciaProjetada = Number((receitaBrutaProjetada * taxaInadimplenciaProjetada).toFixed(2));
    const recuperacaoProjetada = Number(
      Math.min(valorEmAtraso, (valorEmAtraso * clamp(0.16 + index * 0.05, 0.1, 0.48)) / 6).toFixed(2),
    );
    const saldoMensal = Number((receitaBrutaProjetada - inadimplenciaProjetada + recuperacaoProjetada).toFixed(2));
    saldoAcumulado = Number((saldoAcumulado + saldoMensal).toFixed(2));

    fluxoCaixa.push({
      mesReferencia: mes.mesReferencia,
      mes: mes.mes,
      ano: mes.ano,
      label: mes.label,
      receitaBrutaProjetada,
      inadimplenciaProjetada,
      recuperacaoProjetada,
      saldoProjetado: saldoMensal,
      saldoAcumulado,
      alerta: buildAlertas(saldoMensal, taxaInadimplencia, index),
    });
  });

  return fluxoCaixa;
}

export class FinanceiroExecutivoService implements IFinanceiroExecutivoService {
  constructor(private repository: IFinanceiroExecutivoRepository) {}

  async obterResumoExecutivoFinanceiro(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
    mes: number,
    ano: number,
  ): Promise<ServiceResult<ResumoFinanceiroExecutivo>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem acessar o financeiro executivo.' };
      }

      const mesSeguro = Number.isInteger(mes) && mes >= 1 && mes <= 12 ? mes : new Date().getMonth() + 1;
      const anoSeguro = Number.isInteger(ano) && ano > 2000 ? ano : new Date().getFullYear();
      const periodoBase = {
        mes: mesSeguro,
        ano: anoSeguro,
        mesReferencia: `${anoSeguro}-${String(mesSeguro).padStart(2, '0')}`,
      };

      const base = await this.repository.carregarBaseOperacional(tenantId, anoSeguro);
      const receitaBaseMensal = base.alunosAtivos
        .filter((aluno) => aluno.status === 'Ativo' && aluno.statusFinanceiro !== 'isento')
        .reduce((sum, aluno) => sum + Number(aluno.valorMensalidade || 0), 0);

      const valorEmAtraso = base.alunosEmAtraso.reduce((sum, aluno) => sum + Number(aluno.valorMensalidade || 0), 0);

      const taxaInadimplencia = base.alunosAtivos.length > 0
        ? Number(((base.alunosEmAtraso.length / base.alunosAtivos.length) * 100).toFixed(1))
        : 0;

      const pagamentosMes = sumMonthlyPayments([...base.pagamentosAnoAnterior, ...base.pagamentosAnoAtual]);
      const referenciasHistoricas = previousMonthReferences(new Date(anoSeguro, mesSeguro - 1, 1), 6);
      const coberturaHistoricaMedia = calcularTaxaRealizacaoHistorica(
        pagamentosMes,
        receitaBaseMensal,
        referenciasHistoricas,
      );

      const faturamentoMensal = Array.from(pagamentosMes.entries())
        .map(([mesReferencia, resumo]) => ({
          mesReferencia,
          total: Number(resumo.total.toFixed(2)),
          quantidadePagamentos: resumo.quantidadePagamentos,
        }))
        .sort((a, b) => a.mesReferencia.localeCompare(b.mesReferencia));

      const fluxoCaixa6Meses = construirFluxoCaixa(
        new Date(anoSeguro, mesSeguro - 1, 1),
        receitaBaseMensal,
        taxaInadimplencia,
        valorEmAtraso,
        coberturaHistoricaMedia,
      );

      const saldoProjetado6Meses = Number(
        fluxoCaixa6Meses.reduce((sum, item) => sum + item.saldoProjetado, 0).toFixed(2),
      );

      const statusRisco: FinanceiroRiscoStatus = saldoProjetado6Meses < receitaBaseMensal * 2
        ? 'critico'
        : saldoProjetado6Meses < receitaBaseMensal * 4
          ? 'atencao'
          : 'saudavel';

      const observacoes: string[] = [];
      if (taxaInadimplencia >= 25) {
        observacoes.push('Inadimplência acima do patamar de segurança.');
      }
      if (valorEmAtraso > 0) {
        observacoes.push('Existe cobrança acumulada para recuperar.');
      }
      if (statusRisco === 'critico') {
        observacoes.push('Fluxo de caixa projetado exige ação imediata.');
      }

      return {
        success: true,
        data: {
          tenantId,
          periodoBase,
          alunosAtivos: base.alunosAtivos.length,
          alunosEmAtraso: base.alunosEmAtraso.length,
          valorMensalBase: Number(receitaBaseMensal.toFixed(2)),
          valorEmAtraso: Number(valorEmAtraso.toFixed(2)),
          taxaInadimplencia,
          coberturaHistoricaMedia,
          faturamentoMensal,
          fluxoCaixa6Meses,
          saldoProjetado6Meses,
          statusRisco,
          observacoes,
          alunosEmAtrasoDetalhes: base.alunosEmAtraso,
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao obter o dashboard financeiro executivo.' };
    }
  }
}
