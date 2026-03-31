import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';
import type { ConviteListItem } from '../convites/types';
import type { Pagamento } from '../pagamentos/types';
import type { SnapshotMensalResumo } from '../snapshots-mensais/types';
import type {
  IRelatoriosGerenciaisRepository,
  IRelatoriosGerenciaisService,
  RelatorioConviteFunnel,
  RelatorioGerencialBase,
  RelatorioGerencialPeriodo,
  RelatorioGerencialResumo,
  RelatorioMotivoCancelamentoItem,
  RelatorioSerieMensalItem,
} from './types';

const MONTHS_PT = [
  'Janeiro',
  'Fevereiro',
  'MarÃ§o',
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

function formatMesReferencia(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function parseMesReferencia(value: string): { ano: number; mes: number } {
  const [ano, mes] = value.split('-').map((entry) => Number(entry));
  return {
    ano: Number.isFinite(ano) ? ano : new Date().getFullYear(),
    mes: Number.isFinite(mes) ? mes : 1,
  };
}

function previousMonthRef(mes: number, ano: number): string {
  const date = new Date(ano, mes - 2, 1);
  return formatMesReferencia(date);
}

function getMonthDate(ano: number, mes: number): Date {
  return new Date(ano, mes - 1, 1);
}

function buildMonthSeries(mes: number, ano: number, quantidade = 6): RelatorioGerencialPeriodo[] {
  const base = getMonthDate(ano, mes);
  return Array.from({ length: quantidade }).map((_, index) => {
    const date = new Date(base.getFullYear(), base.getMonth() - (quantidade - 1 - index), 1);
    return {
      mes: date.getMonth() + 1,
      ano: date.getFullYear(),
      mesReferencia: formatMesReferencia(date),
    };
  });
}

function monthLabel(mes: number, ano: number): string {
  return `${MONTHS_PT[mes - 1]} / ${ano}`;
}

function sumByMonth<T extends { mesReferencia: string; valor?: number; total?: number }>(
  items: T[],
): Map<string, number> {
  const map = new Map<string, number>();

  items.forEach((item) => {
    const value = Number(item.valor ?? item.total ?? 0);
    map.set(item.mesReferencia, (map.get(item.mesReferencia) || 0) + value);
  });

  return map;
}

function average(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function currency(value: number): number {
  return Number(value.toFixed(2));
}

function monthRefFromDate(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function toDate(value: string): Date {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date(0) : date;
}

function buildConviteFunnel(convites: ConviteListItem[], ano: number): RelatorioConviteFunnel {
  const convitesDoAno = convites.filter((convite) => toDate(convite.createdAt).getFullYear() === ano);
  const convitesAlunos = convitesDoAno.filter((convite) => convite.role === 'aluno');
  const convitesConsumidos = convitesAlunos.filter((convite) => convite.status === 'consumido').length;
  const convitesPendentes = convitesAlunos.filter((convite) => convite.status === 'pendente').length;

  return {
    totalConvites: convitesAlunos.length,
    convitesConsumidos,
    convitesPendentes,
    taxaConversaoPercentual: convitesAlunos.length > 0 ? Number(((convitesConsumidos / convitesAlunos.length) * 100).toFixed(1)) : 0,
  };
}

function buildCancelReasonDistribution(
  stripeEvents: Array<{ mesReferencia: string; action?: string; type: string; alunoId?: string }>,
  alunosById: Map<string, Aluno>,
): RelatorioMotivoCancelamentoItem[] {
  const buckets = new Map<string, { label: string; total: number }>();

  const add = (key: string, label: string) => {
    const current = buckets.get(key) || { label, total: 0 };
    current.total += 1;
    buckets.set(key, current);
  };

  stripeEvents.forEach((evento) => {
    if (evento.action === 'subscription_deleted' || evento.type === 'customer.subscription.deleted') {
      add('subscription_deleted', 'Cancelamento de assinatura');
      return;
    }

    if (evento.action === 'payment_failed' || evento.type === 'invoice.payment_failed') {
      add('payment_failed', 'Falha de pagamento');
      return;
    }

    const aluno = evento.alunoId ? alunosById.get(evento.alunoId) : undefined;
    if (aluno?.status === 'Suspenso' && aluno.statusFinanceiro === 'atrasado') {
      add('delinquency', 'InadimplÃªncia recorrente');
      return;
    }

    if (evento.type === 'customer.subscription.updated') {
      add('subscription_updated', 'Ajuste de assinatura');
      return;
    }

    add('unknown', 'Motivo nÃ£o informado');
  });

  const total = Array.from(buckets.values()).reduce((sum, item) => sum + item.total, 0);

  return Array.from(buckets.entries())
    .map(([key, value]) => ({
      chave: key,
      label: value.label,
      total: value.total,
      percentual: total > 0 ? Number(((value.total / total) * 100).toFixed(1)) : 0,
    }))
    .sort((a, b) => b.total - a.total);
}

function buildFallbackSerieMensal(
  series: RelatorioGerencialPeriodo[],
  pagamentosByMonth: Map<string, number>,
  stripeEventsByMonth: Map<string, Array<{ action?: string; type: string }>>,
  baseAtiva: number,
): RelatorioSerieMensalItem[] {
  return series.map((item) => {
    const cancelamentos = (stripeEventsByMonth.get(item.mesReferencia) || []).filter(
      (evento) => evento.action === 'subscription_deleted' || evento.type === 'customer.subscription.deleted',
    ).length;
    const receita = currency(pagamentosByMonth.get(item.mesReferencia) || 0);
    const baseAtivaEstimativa = Math.max(1, baseAtiva + cancelamentos);
    const churnRate = Number(((cancelamentos / baseAtivaEstimativa) * 100).toFixed(1));

    return {
      ...item,
      label: monthLabel(item.mes, item.ano),
      receita,
      cancelamentos,
      churnRate,
      baseAtivaEstimativa,
    };
  });
}

function groupStripeByMonth(
  events: Array<{ mesReferencia: string; action?: string; type: string; alunoId?: string }>,
): Map<string, Array<{ action?: string; type: string; alunoId?: string }>> {
  const map = new Map<string, Array<{ action?: string; type: string; alunoId?: string }>>();

  events.forEach((evento) => {
    const current = map.get(evento.mesReferencia) || [];
    current.push({
      action: evento.action,
      type: evento.type,
      alunoId: evento.alunoId,
    });
    map.set(evento.mesReferencia, current);
  });

  return map;
}

function buildSnapshotTicketMedio(snapshots: SnapshotMensalResumo[]): number {
  const tickets = snapshots
    .filter((snapshot) => snapshot.alunosAtivos > 0)
    .map((snapshot) => snapshot.valorMensalidadeTotal / snapshot.alunosAtivos)
    .filter((value) => Number.isFinite(value) && value > 0);

  return average(tickets);
}

function buildSnapshotSerie(
  series: RelatorioGerencialPeriodo[],
  snapshotsByRef: Map<string, SnapshotMensalResumo>,
  fallbackSeries: RelatorioSerieMensalItem[],
): RelatorioSerieMensalItem[] {
  return series.map((item, index) => {
    const fallback = fallbackSeries[index];
    const current = snapshotsByRef.get(item.mesReferencia) || null;
    const previous = snapshotsByRef.get(previousMonthRef(item.mes, item.ano)) || null;

    if (!current) {
      return fallback;
    }

    const receita = current.valorMensalidadeTotal;
    const baseAtivaEstimativa = current.alunosAtivos;

    if (!previous) {
      return {
        ...fallback,
        ...item,
        label: monthLabel(item.mes, item.ano),
        receita,
        baseAtivaEstimativa,
      };
    }

    const baseInicio = Math.max(1, previous.alunosAtivos);
    const cancelamentos = Math.max(0, previous.alunosAtivos - current.alunosAtivos);
    const churnRate = Number(((cancelamentos / baseInicio) * 100).toFixed(1));

    return {
      ...item,
      label: monthLabel(item.mes, item.ano),
      receita,
      cancelamentos,
      churnRate,
      baseAtivaEstimativa: previous.alunosAtivos,
    };
  });
}

function buildFallbackLtv(receitaBaseMensal: number, churnRateMensal: number): number {
  if (churnRateMensal > 0) {
    return Number((receitaBaseMensal / (churnRateMensal / 100)).toFixed(2));
  }

  return Number((receitaBaseMensal * 24).toFixed(2));
}

export class RelatoriosGerenciaisService implements IRelatoriosGerenciaisService {
  constructor(private readonly repository: IRelatoriosGerenciaisRepository) {}

  async obterResumo(
    tenantId: string | null,
    isAdmin: boolean,
    mes: number,
    ano: number,
  ): Promise<ServiceResult<RelatorioGerencialResumo>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!isAdmin) {
        return { success: false, error: 'Apenas administradores podem consultar relatÃ³rios gerenciais.' };
      }

      const mesSeguro = Number.isInteger(mes) && mes >= 1 && mes <= 12 ? mes : new Date().getMonth() + 1;
      const anoSeguro = Number.isInteger(ano) && ano > 2000 ? ano : new Date().getFullYear();

      const base: RelatorioGerencialBase = await this.repository.carregarBase(tenantId, anoSeguro);
      const alunosById = new Map(base.alunos.map((aluno) => [aluno.id, aluno]));
      const snapshotsByRef = new Map(base.snapshotsMensaisRecentes.map((snapshot) => [snapshot.periodo.mesReferencia, snapshot]));
      const orderedSnapshots = [...base.snapshotsMensaisRecentes].sort(
        (a, b) => a.periodo.dataReferencia.getTime() - b.periodo.dataReferencia.getTime(),
      );

      const pagamentosTodos = [...base.pagamentosAnoAnterior, ...base.pagamentosAnoAtual];
      const stripeTodos = [...base.stripeEventsAnoAnterior, ...base.stripeEventsAnoAtual].map((evento) => ({
        mesReferencia: monthRefFromDate(evento.receivedAt),
        action: evento.action,
        type: evento.type,
        alunoId: evento.alunoId,
      }));

      const pagamentosValorByMonth = sumByMonth(
        pagamentosTodos.map((pagamento) => ({
          mesReferencia: pagamento.mesReferencia,
          valor: pagamento.valor,
        })),
      );

      const currentPeriod = getMonthDate(anoSeguro, mesSeguro);
      const periodRef = monthRefFromDate(currentPeriod);
      const series = buildMonthSeries(mesSeguro, anoSeguro, 6);
      const baseAtiva = base.alunos.filter((aluno) => aluno.status === 'Ativo').length;
      const fallbackSeries = buildFallbackSerieMensal(series, pagamentosValorByMonth, groupStripeByMonth(stripeTodos), baseAtiva);
      const serie6Meses = buildSnapshotSerie(series, snapshotsByRef, fallbackSeries);

      const currentSnapshot = snapshotsByRef.get(periodRef) || null;
      const previousSnapshot = snapshotsByRef.get(previousMonthRef(mesSeguro, anoSeguro)) || null;
      const currentSeriesItem = serie6Meses[serie6Meses.length - 1] || fallbackSeries[fallbackSeries.length - 1];
      const fallbackCurrentItem = fallbackSeries[fallbackSeries.length - 1];

      const pagosPeriodo = pagamentosTodos.filter((pagamento) => pagamento.mesReferencia === periodRef);
      const receitaPeriodoFallback = currency(pagosPeriodo.reduce((sum, pagamento) => sum + Number(pagamento.valor || 0), 0));

      const alunosAtivos = currentSnapshot?.alunosAtivos ?? baseAtiva;
      const alunosSuspensos = base.alunos.filter((aluno) => aluno.status === 'Suspenso').length;
      const alunosInativos = base.alunos.filter((aluno) => aluno.status === 'Inativo').length;
      const inadimplentesAtivos = base.alunos.filter(
        (aluno) => aluno.status === 'Ativo' && aluno.statusFinanceiro === 'atrasado',
      ).length;

      const faturamentoMensal = currentSnapshot?.valorMensalidadeTotal ?? currentSeriesItem.receita ?? receitaPeriodoFallback;

      const churnRateMensal = currentSnapshot && previousSnapshot
        ? Number((((Math.max(0, previousSnapshot.alunosAtivos - currentSnapshot.alunosAtivos)) / Math.max(1, previousSnapshot.alunosAtivos)) * 100).toFixed(1))
        : currentSeriesItem.churnRate ?? fallbackCurrentItem.churnRate;

      const churnRateAcumulado6m = (() => {
        const realSnapshots = series
          .map((item) => snapshotsByRef.get(item.mesReferencia))
          .filter((snapshot): snapshot is SnapshotMensalResumo => !!snapshot);

        if (realSnapshots.length >= 2) {
          const first = realSnapshots[0];
          const last = realSnapshots[realSnapshots.length - 1];
          return first.alunosAtivos > 0
            ? Number((((first.alunosAtivos - last.alunosAtivos) / first.alunosAtivos) * 100).toFixed(1))
            : 0;
        }

        return Number(
          (
            serie6Meses.reduce((sum, item) => sum + item.cancelamentos, 0) /
            Math.max(1, baseAtiva * serie6Meses.length)
          ).toFixed(1),
        );
      })();

      const ticketMedioReal = buildSnapshotTicketMedio(orderedSnapshots);
      const receitaMediaMensal = Number(average(serie6Meses.map((item) => item.receita)).toFixed(2));
      const receitaMediaBase = alunosAtivos > 0 ? faturamentoMensal / alunosAtivos : receitaMediaMensal;
      const ltvEstimado = ticketMedioReal > 0
        ? (churnRateMensal > 0
          ? Number((ticketMedioReal / (churnRateMensal / 100)).toFixed(2))
          : Number((ticketMedioReal * 24).toFixed(2)))
        : buildFallbackLtv(receitaMediaBase, churnRateMensal);

      const cancelamentosNoPeriodo = currentSnapshot && previousSnapshot
        ? Math.max(0, previousSnapshot.alunosAtivos - currentSnapshot.alunosAtivos)
        : currentSeriesItem.cancelamentos;

      const convites = buildConviteFunnel(base.convitesEstudantes, anoSeguro);
      const motivosCancelamento = buildCancelReasonDistribution(stripeTodos, alunosById);
      const statusFinanceiroDistribuicao = [
        {
          label: 'Em dia',
          total: base.alunos.filter((aluno) => aluno.statusFinanceiro === 'em_dia').length,
        },
        {
          label: 'Atrasado',
          total: base.alunos.filter((aluno) => aluno.statusFinanceiro === 'atrasado').length,
        },
        {
          label: 'Isento',
          total: base.alunos.filter((aluno) => aluno.statusFinanceiro === 'isento').length,
        },
      ];
      const topSinaisRisco = [
        { label: 'Alunos inadimplentes', total: inadimplentesAtivos },
        { label: 'Cancelamentos no mÃªs', total: cancelamentosNoPeriodo },
        { label: 'Convites pendentes', total: convites.convitesPendentes },
      ].sort((a, b) => b.total - a.total);

      return {
        success: true,
        data: {
          tenantId,
          periodo: {
            mes: mesSeguro,
            ano: anoSeguro,
            mesReferencia: periodRef,
          },
          alunosAtivos,
          alunosSuspensos,
          alunosInativos,
          inadimplentesAtivos,
          faturamentoMensal,
          receitaMediaMensal,
          churnRateMensal,
          churnRateAcumulado6m,
          ltvEstimado,
          convites,
          cancelamentosNoPeriodo,
          motivosCancelamento,
          serie6Meses,
          statusFinanceiroDistribuicao,
          topSinaisRisco,
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao gerar relatÃ³rio gerencial.' };
    }
  }
}
