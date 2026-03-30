import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';

export type StripeSubscriptionStatus =
  | 'trialing'
  | 'active'
  | 'past_due'
  | 'canceled'
  | 'incomplete'
  | 'unpaid'
  | 'paused';

export type StripeWebhookType =
  | 'customer.subscription.created'
  | 'customer.subscription.updated'
  | 'customer.subscription.deleted'
  | 'invoice.payment_succeeded'
  | 'invoice.payment_failed'
  | 'customer.created'
  | 'customer.updated';

export type StripeWebhookAction =
  | 'subscription_created'
  | 'subscription_updated'
  | 'subscription_deleted'
  | 'payment_succeeded'
  | 'payment_failed'
  | 'customer_created'
  | 'customer_updated'
  | 'ignored';

export type StripeWebhookProcessingStatus = 'pending' | 'processed' | 'duplicate' | 'failed';

export interface StripeCustomer {
  id: string;
  tenantId: string;
  alunoId?: string;
  nome: string;
  email: string;
  externalReference?: string;
  metadata?: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface StripeSubscription {
  id: string;
  tenantId: string;
  customerId: string;
  alunoId?: string;
  priceId: string;
  status: StripeSubscriptionStatus;
  currentPeriodStart?: Date;
  currentPeriodEnd?: Date;
  cancelAtPeriodEnd?: boolean;
  metadata?: Record<string, string>;
  createdAt: Date;
  updatedAt: Date;
}

export interface StripeWebhookEvent {
  id: string;
  tenantId?: string;
  alunoId?: string;
  customerId?: string;
  subscriptionId?: string;
  type: StripeWebhookType | string;
  action?: StripeWebhookAction;
  livemode: boolean;
  receivedAt: Date;
  processedAt?: Date;
  status?: StripeWebhookProcessingStatus;
  errorMessage?: string;
  rawPayload: unknown;
}

export interface SincronizarStripeCustomerInput {
  tenantId: string;
  alunoId?: string;
  nome: string;
  email: string;
  externalReference?: string;
  metadata?: Record<string, string>;
}

export interface CriarStripeSubscriptionInput {
  tenantId: string;
  customerId: string;
  priceId: string;
  alunoId?: string;
  metadata?: Record<string, string>;
}

export interface ProcessarStripeWebhookInput {
  tenantId?: string;
  signature?: string | null;
  rawBody: string;
}

export interface ProcessarStripeWebhookResult {
  eventId: string;
  eventType: string;
  action: StripeWebhookAction;
  tenantId?: string;
  alunoId?: string;
  subscriptionId?: string;
  customerId?: string;
  processed: boolean;
  duplicated: boolean;
}

export interface StripePortalAssinaturaResumo {
  tenantId: string;
  alunoId: string;
  alunoNome: string;
  faixa: Aluno['faixa'];
  statusAluno: Aluno['status'];
  statusFinanceiro: Aluno['statusFinanceiro'];
  valorMensalidade: number;
  assinaturaAtual: StripeSubscription | null;
  customer: StripeCustomer | null;
  eventosRecentes: StripeWebhookEvent[];
  customerPortalUrl?: string;
}

export interface IStripeAdapter {
  sincronizarCliente(input: SincronizarStripeCustomerInput): Promise<ServiceResult<StripeCustomer>>;
  criarAssinatura(input: CriarStripeSubscriptionInput): Promise<ServiceResult<StripeSubscription>>;
  cancelarAssinatura(tenantId: string, subscriptionId: string): Promise<ServiceResult<{ canceled: boolean }>>;
  gerarCustomerPortalUrl(input: { tenantId: string; alunoId: string }): Promise<ServiceResult<{ url: string }>>;
  verificarWebhook(input: ProcessarStripeWebhookInput): Promise<ServiceResult<StripeWebhookEvent>>;
}

export interface IStripeRepository {
  registrarEventoSeNovo(evento: StripeWebhookEvent): Promise<{ created: boolean; duplicated: boolean }>;
  atualizarEventoProcessado(
    evento: StripeWebhookEvent,
    payload: Pick<StripeWebhookEvent, 'status' | 'action' | 'alunoId' | 'customerId' | 'subscriptionId' | 'errorMessage'>,
  ): Promise<void>;
  salvarCustomer(customer: StripeCustomer): Promise<StripeCustomer>;
  salvarSubscription(subscription: StripeSubscription): Promise<StripeSubscription>;
  obterCustomerPorAluno(tenantId: string, alunoId: string): Promise<StripeCustomer | null>;
  obterSubscriptionPorAluno(tenantId: string, alunoId: string): Promise<StripeSubscription | null>;
  listarEventosPorAluno(tenantId: string, alunoId: string, limite?: number): Promise<StripeWebhookEvent[]>;
  listarEventosDoAno(tenantId: string, ano: number, limite?: number): Promise<StripeWebhookEvent[]>;
}

export interface IStripeService {
  sincronizarCliente(input: SincronizarStripeCustomerInput): Promise<ServiceResult<StripeCustomer>>;
  criarAssinatura(input: CriarStripeSubscriptionInput): Promise<ServiceResult<StripeSubscription>>;
  cancelarAssinatura(tenantId: string, subscriptionId: string): Promise<ServiceResult<{ canceled: boolean }>>;
  gerarCustomerPortalUrl(input: { tenantId: string; alunoId: string }): Promise<ServiceResult<{ url: string }>>;
  processarWebhook(input: ProcessarStripeWebhookInput): Promise<ServiceResult<ProcessarStripeWebhookResult>>;
  obterPortalAssinaturaAluno(tenantId: string | null, alunoId: string | null): Promise<ServiceResult<StripePortalAssinaturaResumo>>;
}
