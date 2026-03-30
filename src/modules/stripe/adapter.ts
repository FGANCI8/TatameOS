import type {
  CriarStripeSubscriptionInput,
  IStripeAdapter,
  ProcessarStripeWebhookInput,
  StripeCustomer,
  StripeSubscription,
  StripeWebhookEvent,
  SincronizarStripeCustomerInput,
} from './types';
import type { ServiceResult } from '../core/types';

function notReady<T>(message: string): ServiceResult<T> {
  return { success: false, error: message };
}

export class StripeAdapterTatameOS implements IStripeAdapter {
  constructor(
    private readonly config: {
      apiKey?: string;
      webhookSecret?: string;
      customerPortalUrl?: string;
    } = {},
  ) {}

  async sincronizarCliente(_input: SincronizarStripeCustomerInput): Promise<ServiceResult<StripeCustomer>> {
    if (!this.config.apiKey) {
      return notReady<StripeCustomer>(
        'Stripe ainda não configurado. Defina a chave privada no backend para ativar a sincronização.',
      );
    }

    return notReady<StripeCustomer>('Sincronização de cliente Stripe ainda não implementada nesta etapa.');
  }

  async criarAssinatura(_input: CriarStripeSubscriptionInput): Promise<ServiceResult<StripeSubscription>> {
    if (!this.config.apiKey) {
      return notReady<StripeSubscription>(
        'Stripe ainda não configurado. A criação de assinaturas será ativada na próxima fase.',
      );
    }

    return notReady<StripeSubscription>('Criação de assinatura Stripe ainda não implementada nesta etapa.');
  }

  async cancelarAssinatura(_tenantId: string, _subscriptionId: string): Promise<ServiceResult<{ canceled: boolean }>> {
    if (!this.config.apiKey) {
      return notReady<{ canceled: boolean }>(
        'Stripe ainda não configurado. O cancelamento será ativado na próxima fase.',
      );
    }

    return notReady<{ canceled: boolean }>('Cancelamento de assinatura Stripe ainda não implementado nesta etapa.');
  }

  async gerarCustomerPortalUrl(input: { tenantId: string; alunoId: string }): Promise<ServiceResult<{ url: string }>> {
    if (!input.tenantId?.trim() || !input.alunoId?.trim()) {
      return notReady<{ url: string }>('Tenant ou aluno ausente.');
    }

    if (!this.config.customerPortalUrl) {
      return notReady<{ url: string }>(
        'Portal do Stripe ainda não configurado. Defina a URL do Customer Portal no backend.',
      );
    }

    const url = new URL(this.config.customerPortalUrl);
    url.searchParams.set('tenantId', input.tenantId);
    url.searchParams.set('alunoId', input.alunoId);

    return { success: true, data: { url: url.toString() } };
  }

  async verificarWebhook(input: ProcessarStripeWebhookInput): Promise<ServiceResult<StripeWebhookEvent>> {
    if (!input.rawBody?.trim()) {
      return notReady<StripeWebhookEvent>('Payload de webhook vazio.');
    }

    if (!this.config.webhookSecret) {
      return notReady<StripeWebhookEvent>('Webhook Stripe ainda não configurado. Defina o segredo para ativar a validação.');
    }

    try {
      const parsed = JSON.parse(input.rawBody) as Record<string, unknown>;
      const id = typeof parsed.id === 'string' ? parsed.id : '';
      const type = typeof parsed.type === 'string' ? parsed.type : 'unknown';

      if (!id) {
        return notReady<StripeWebhookEvent>('Evento Stripe inválido.');
      }

      const dataObject = (parsed.data && typeof parsed.data === 'object'
        ? (parsed.data as Record<string, unknown>).object
        : undefined) as Record<string, unknown> | undefined;
      const metadata = (dataObject?.metadata && typeof dataObject.metadata === 'object'
        ? (dataObject.metadata as Record<string, unknown>)
        : undefined) as Record<string, string> | undefined;

      return {
        success: true,
        data: {
          id,
          tenantId: input.tenantId || metadata?.tenantId,
          alunoId: metadata?.alunoId,
          customerId: typeof dataObject?.customer === 'string' ? dataObject.customer : undefined,
          subscriptionId: typeof dataObject?.subscription === 'string' ? dataObject.subscription : undefined,
          type,
          livemode: Boolean(parsed.livemode),
          receivedAt: new Date(),
          rawPayload: parsed,
        },
      };
    } catch (error: any) {
      return notReady<StripeWebhookEvent>(error?.message || 'Falha ao interpretar webhook do Stripe.');
    }
  }
}
