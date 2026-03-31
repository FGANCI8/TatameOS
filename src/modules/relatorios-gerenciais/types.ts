import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';
import type { ConviteListItem } from '../convites/types';
import type { Pagamento } from '../pagamentos/types';
import type { SnapshotMensalResumo } from '../snapshots-mensais/types';
import type { StripeWebhookAction, StripeWebhookEvent } from '../stripe/types';

export interface RelatorioGerencialPeriodo {
  mes: number;
  ano: number;
  mesReferencia: string;
}

export interface RelatorioSerieMensalItem {
  mes: number;
  ano: number;
  mesReferencia: string;
  label: string;
  receita: number;
  cancelamentos: number;
  churnRate: number;
  baseAtivaEstimativa: number;
}

export interface RelatorioMotivoCancelamentoItem {
  chave: string;
  label: string;
  total: number;
  percentual: number;
}

export interface RelatorioConviteFunnel {
  totalConvites: number;
  convitesConsumidos: number;
  convitesPendentes: number;
  taxaConversaoPercentual: number;
}

export interface RelatorioGerencialResumo {
  tenantId: string;
  periodo: RelatorioGerencialPeriodo;
  alunosAtivos: number;
  alunosSuspensos: number;
  alunosInativos: number;
  inadimplentesAtivos: number;
  faturamentoMensal: number;
  receitaMediaMensal: number;
  churnRateMensal: number;
  churnRateAcumulado6m: number;
  ltvEstimado: number;
  convites: RelatorioConviteFunnel;
  cancelamentosNoPeriodo: number;
  motivosCancelamento: RelatorioMotivoCancelamentoItem[];
  serie6Meses: RelatorioSerieMensalItem[];
  statusFinanceiroDistribuicao: Array<{ label: string; total: number }>;
  topSinaisRisco: Array<{ label: string; total: number }>;
}

export interface RelatorioGerencialBase {
  alunos: Aluno[];
  pagamentosAnoAtual: Pagamento[];
  pagamentosAnoAnterior: Pagamento[];
  convitesEstudantes: ConviteListItem[];
  snapshotsMensaisRecentes: SnapshotMensalResumo[];
  stripeEventsAnoAtual: StripeWebhookEvent[];
  stripeEventsAnoAnterior: StripeWebhookEvent[];
}

export interface IRelatoriosGerenciaisRepository {
  carregarBase(tenantId: string, anoBase: number): Promise<RelatorioGerencialBase>;
}

export interface IRelatoriosGerenciaisService {
  obterResumo(
    tenantId: string | null,
    isAdmin: boolean,
    mes: number,
    ano: number,
  ): Promise<ServiceResult<RelatorioGerencialResumo>>;
}

export interface RelatorioEventoAnalitico {
  monthRef: string;
  action: StripeWebhookAction | string;
  alunoId?: string;
  receivedAt: Date;
}
