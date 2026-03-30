import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';
import type { INotificacoesTransacionaisService } from '../notificacoes-transacionais/types';
import type {
  CriarStripeSubscriptionInput,
  IStripeAdapter,
  IStripeRepository,
  IStripeService,
  ProcessarStripeWebhookInput,
  ProcessarStripeWebhookResult,
  SincronizarStripeCustomerInput,
  StripeCustomer,
  StripePortalAssinaturaResumo,
  StripeSubscription,
  StripeSubscriptionStatus,
  StripeWebhookAction,
  StripeWebhookEvent,
  StripeWebhookProcessingStatus,
} from './types';

type AlunoFinanceiroRepository = {
  getById(id: string, tenantId: string): Promise<Aluno | null>;
  patchAlunoCompleto(
    id: string,
    tenantId: string,
    perfil: Partial<Pick<Aluno, 'faixa' | 'grau' | 'status'>>,
    financeiro: Partial<Pick<Aluno, 'statusFinanceiro' | 'valorMensalidade' | 'vencimentoMensalidade'>>,
  ): Promise<void>;
  patchFinanceiroAluno(
    id: string,
    tenantId: string,
    patch: Partial<Pick<Aluno, 'statusFinanceiro' | 'valorMensalidade' | 'vencimentoMensalidade'>>,
  ): Promise<void>;
};

function getActionForType(type: string): StripeWebhookAction {
  switch (type) {
    case 'customer.subscription.created':
      return 'subscription_created';
    case 'customer.subscription.updated':
      return 'subscription_updated';
    case 'customer.subscription.deleted':
      return 'subscription_deleted';
    case 'invoice.payment_succeeded':
      return 'payment_succeeded';
    case 'invoice.payment_failed':
      return 'payment_failed';
    case 'customer.created':
      return 'customer_created';
    case 'customer.updated':
      return 'customer_updated';
    default:
      return 'ignored';
  }
}

function asRecord(value: unknown): Record<string, unknown> {
  return value && typeof value === 'object' ? (value as Record<string, unknown>) : {};
}

function getStripeObject(event: StripeWebhookEvent): Record<string, unknown> {
  const payload = asRecord(event.rawPayload);
  const data = asRecord(payload.data);
  return asRecord(data.object);
}

function getMetadata(object: Record<string, unknown>): Record<string, string> {
  const metadata = asRecord(object.metadata);
  return Object.fromEntries(
    Object.entries(metadata)
      .filter(([, value]) => typeof value === 'string')
      .map(([key, value]) => [key, value]),
  ) as Record<string, string>;
}

function toDateFromStripe(value: unknown): Date | undefined {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return new Date(value * 1000);
  }

  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value);
    if (!Number.isNaN(parsed)) {
      return new Date(parsed * 1000);
    }

    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return date;
    }
  }

  return undefined;
}

function mapSubscriptionStatusToAluno(
  status: StripeSubscriptionStatus | string | undefined,
): { status: Aluno['status']; statusFinanceiro: Aluno['statusFinanceiro'] } {
  switch (status) {
    case 'active':
    case 'trialing':
      return { status: 'Ativo', statusFinanceiro: 'em_dia' };
    case 'past_due':
    case 'unpaid':
    case 'paused':
    case 'incomplete':
      return { status: 'Suspenso', statusFinanceiro: 'atrasado' };
    case 'canceled':
      return { status: 'Inativo', statusFinanceiro: 'atrasado' };
    default:
      return { status: 'Ativo', statusFinanceiro: 'em_dia' };
  }
}

function normalizeStatus(status: StripeWebhookProcessingStatus): StripeWebhookProcessingStatus {
  return status;
}

function daysUntil(date: Date): number {
  const diffMs = date.getTime() - Date.now();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export class StripeServiceTatameOS implements IStripeService {
  constructor(
    private readonly adapter: IStripeAdapter,
    private readonly repository: IStripeRepository,
    private readonly alunoRepository: AlunoFinanceiroRepository,
    private readonly notificacoesService?: INotificacoesTransacionaisService,
  ) {}

  sincronizarCliente(input: SincronizarStripeCustomerInput): Promise<ServiceResult<StripeCustomer>> {
    return this.adapter.sincronizarCliente(input);
  }

  criarAssinatura(input: CriarStripeSubscriptionInput): Promise<ServiceResult<StripeSubscription>> {
    return this.adapter.criarAssinatura(input);
  }

  cancelarAssinatura(tenantId: string, subscriptionId: string): Promise<ServiceResult<{ canceled: boolean }>> {
    return this.adapter.cancelarAssinatura(tenantId, subscriptionId);
  }

  gerarCustomerPortalUrl(input: { tenantId: string; alunoId: string }): Promise<ServiceResult<{ url: string }>> {
    return this.adapter.gerarCustomerPortalUrl(input);
  }

  private async aplicarEventoNoAluno(evento: StripeWebhookEvent): Promise<ServiceResult<{ alunoId?: string }>> {
    const object = getStripeObject(evento);
    const metadata = getMetadata(object);
    const alunoId = evento.alunoId || metadata.alunoId || metadata.userId || undefined;
    const tenantId = evento.tenantId || metadata.tenantId || undefined;

    if (!tenantId) {
      return { success: false, error: 'Tenant ausente no webhook do Stripe.' };
    }

    if (!alunoId) {
      return { success: false, error: 'Aluno ausente no webhook do Stripe.' };
    }

    const aluno = await this.alunoRepository.getById(alunoId, tenantId);
    if (!aluno) {
      return { success: false, error: 'Aluno não encontrado para o evento do Stripe.' };
    }

    const subscriptionState = String(object.status || object.subscription_status || evento.type);
    const mappedStatus = mapSubscriptionStatusToAluno(subscriptionState);
    const statusFinanceiro =
      evento.type === 'invoice.payment_failed'
        ? 'atrasado'
        : evento.type === 'invoice.payment_succeeded'
          ? 'em_dia'
          : evento.type === 'customer.subscription.deleted'
            ? 'atrasado'
            : mappedStatus.statusFinanceiro;

    const status =
      evento.type === 'invoice.payment_failed'
        ? 'Suspenso'
        : evento.type === 'invoice.payment_succeeded'
          ? 'Ativo'
          : evento.type === 'customer.subscription.deleted'
            ? 'Inativo'
            : mappedStatus.status;

    await this.alunoRepository.patchAlunoCompleto(
      alunoId,
      tenantId,
      { status },
      { statusFinanceiro },
    );

    return { success: true, data: { alunoId } };
  }

  private async dispararNotificacoesFinanceiras(evento: StripeWebhookEvent): Promise<void> {
    if (!this.notificacoesService) {
      return;
    }

    const object = getStripeObject(evento);
    const metadata = getMetadata(object);
    const tenantId = evento.tenantId || metadata.tenantId || undefined;
    const alunoId = evento.alunoId || metadata.alunoId || metadata.userId || undefined;

    if (!tenantId || !alunoId) {
      return;
    }

    const aluno = await this.alunoRepository.getById(alunoId, tenantId);
    if (!aluno) {
      return;
    }

    const telefone = typeof (aluno as Aluno & { telefone?: string }).telefone === 'string'
      ? (aluno as Aluno & { telefone?: string }).telefone
      : undefined;

    const sharedInput = {
      tenantId,
      alunoId,
      nomeAluno: aluno.nome,
      email: aluno.email,
      ...(telefone ? { telefone } : {}),
      eventoStripeId: evento.id,
      valorMensalidade: aluno.valorMensalidade,
      metadata,
    };

    if (evento.type === 'invoice.payment_failed') {
      await this.notificacoesService.notificarFalhaPagamento({
        ...sharedInput,
        motivo: 'payment_failed',
        assunto: 'Falha no pagamento - TatameOS',
        mensagem: `Olá, ${aluno.nome}. Identificamos uma falha no pagamento da sua mensalidade. Regularize o quanto antes para manter seu acesso ao tatame.`,
      });
      return;
    }

    if (
      evento.type === 'customer.subscription.created' ||
      evento.type === 'customer.subscription.updated' ||
      evento.type === 'invoice.payment_succeeded'
    ) {
      const subscription = await this.repository.obterSubscriptionPorAluno(tenantId, alunoId);
      const vencimento = subscription?.currentPeriodEnd;

      if (!vencimento) {
        return;
      }

      const diasRestantes = daysUntil(vencimento);
      if (diasRestantes < 0 || diasRestantes > 3) {
        return;
      }

      await this.notificacoesService.notificarVencimentoProximo({
        ...sharedInput,
        motivo: 'due_soon',
        diasRestantes,
        dataVencimento: vencimento,
        assunto: 'Vencimento próximo - TatameOS',
        mensagem: `Olá, ${aluno.nome}. Sua mensalidade vence em ${diasRestantes} dia(s). Regularize para evitar a suspensão do acesso.`,
      });
    }
  }

  private async aplicarSnapshotStripe(evento: StripeWebhookEvent): Promise<void> {
    const object = getStripeObject(evento);
    const metadata = getMetadata(object);
    const tenantId = evento.tenantId || metadata.tenantId;
    const alunoId = evento.alunoId || metadata.alunoId || metadata.userId;
    const now = new Date();

    if (
      evento.type === 'customer.created' ||
      evento.type === 'customer.updated' ||
      evento.type === 'customer.subscription.created' ||
      evento.type === 'customer.subscription.updated' ||
      evento.type === 'customer.subscription.deleted'
    ) {
      const customerId =
        evento.customerId ||
        (evento.type === 'customer.created' || evento.type === 'customer.updated'
          ? (typeof object.id === 'string' ? object.id : undefined)
          : undefined) ||
        (typeof object.customer === 'string' ? object.customer : undefined);
      const nome = typeof object.name === 'string' ? object.name : typeof object.email === 'string' ? object.email : 'Cliente Stripe';
      const email = typeof object.email === 'string' ? object.email : `${customerId}@stripe.local`;

      if (tenantId && customerId) {
        await this.repository.salvarCustomer({
          id: customerId,
          tenantId,
          alunoId,
          nome,
          email,
          externalReference: typeof metadata.externalReference === 'string' ? metadata.externalReference : undefined,
          metadata,
          createdAt: now,
          updatedAt: now,
        });
      }
    }

    if (
      evento.type === 'customer.subscription.created' ||
      evento.type === 'customer.subscription.updated' ||
      evento.type === 'customer.subscription.deleted' ||
      evento.type === 'invoice.payment_succeeded' ||
      evento.type === 'invoice.payment_failed'
    ) {
      const subscriptionId =
        evento.subscriptionId ||
        (evento.type.startsWith('customer.subscription') && typeof object.id === 'string' ? object.id : undefined) ||
        (typeof object.subscription === 'string' ? object.subscription : undefined);
      const customerId = evento.customerId || (typeof object.customer === 'string' ? object.customer : undefined);
      const status = String(object.status || 'active') as StripeSubscriptionStatus;

      if (tenantId && subscriptionId && customerId) {
        await this.repository.salvarSubscription({
          id: subscriptionId,
          tenantId,
          customerId,
          alunoId,
          priceId: typeof object.price === 'string' ? object.price : typeof object.plan === 'string' ? object.plan : 'default',
          status,
          currentPeriodStart: toDateFromStripe(object.current_period_start),
          currentPeriodEnd: toDateFromStripe(object.current_period_end),
          cancelAtPeriodEnd: Boolean(object.cancel_at_period_end),
          metadata,
          createdAt: now,
          updatedAt: now,
        });
      }
    }
  }

  async processarWebhook(input: ProcessarStripeWebhookInput): Promise<ServiceResult<ProcessarStripeWebhookResult>> {
    try {
      const eventResult = await this.adapter.verificarWebhook(input);
      if (!eventResult.success || !eventResult.data) {
        return { success: false, error: eventResult.error || 'Webhook Stripe inválido.' };
      }

      const evento = eventResult.data;
      const action = getActionForType(evento.type);
      const tenantId = evento.tenantId || input.tenantId;

      if (!tenantId) {
        return { success: false, error: 'Tenant ausente no webhook do Stripe.' };
      }

      const eventoNormalizado: StripeWebhookEvent = {
        ...evento,
        tenantId,
        action,
        status: 'pending',
      };

      const idem = await this.repository.registrarEventoSeNovo(eventoNormalizado);
      if (idem.duplicated) {
        await this.repository.atualizarEventoProcessado(eventoNormalizado, {
          status: 'duplicate',
          action,
          alunoId: eventoNormalizado.alunoId,
          customerId: eventoNormalizado.customerId,
          subscriptionId: eventoNormalizado.subscriptionId,
        });

        return {
          success: true,
          data: {
            eventId: eventoNormalizado.id,
            eventType: eventoNormalizado.type,
            action,
            tenantId,
            alunoId: eventoNormalizado.alunoId,
            subscriptionId: eventoNormalizado.subscriptionId,
            customerId: eventoNormalizado.customerId,
            processed: false,
            duplicated: true,
          },
        };
      }

      const webhookType = eventoNormalizado.type;

      if (webhookType === 'invoice.payment_succeeded' || webhookType === 'invoice.payment_failed' || webhookType === 'customer.subscription.updated' || webhookType === 'customer.subscription.deleted' || webhookType === 'customer.created' || webhookType === 'customer.updated' || webhookType === 'customer.subscription.created') {
        await this.aplicarSnapshotStripe(eventoNormalizado);
      }

      if (webhookType === 'invoice.payment_succeeded' || webhookType === 'invoice.payment_failed' || webhookType === 'customer.subscription.updated' || webhookType === 'customer.subscription.deleted') {
        const alunoUpdate = await this.aplicarEventoNoAluno(eventoNormalizado);
        if (!alunoUpdate.success) {
          await this.repository.atualizarEventoProcessado(eventoNormalizado, {
            status: 'failed',
            action,
            alunoId: eventoNormalizado.alunoId,
            customerId: eventoNormalizado.customerId,
            subscriptionId: eventoNormalizado.subscriptionId,
            errorMessage: alunoUpdate.error || 'Falha ao atualizar o aluno.',
          });

          return {
            success: false,
            error: alunoUpdate.error || 'Falha ao atualizar o aluno.',
          };
        }
      }

      await this.dispararNotificacoesFinanceiras(eventoNormalizado);

      await this.repository.atualizarEventoProcessado(eventoNormalizado, {
        status: normalizeStatus('processed'),
        action,
        alunoId: eventoNormalizado.alunoId,
        customerId: eventoNormalizado.customerId,
        subscriptionId: eventoNormalizado.subscriptionId,
      });

      return {
        success: true,
        data: {
          eventId: eventoNormalizado.id,
          eventType: eventoNormalizado.type,
          action,
          tenantId,
          alunoId: eventoNormalizado.alunoId,
          subscriptionId: eventoNormalizado.subscriptionId,
          customerId: eventoNormalizado.customerId,
          processed: true,
          duplicated: false,
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao processar webhook do Stripe.' };
    }
  }

  async obterPortalAssinaturaAluno(
    tenantId: string | null,
    alunoId: string | null,
  ): Promise<ServiceResult<StripePortalAssinaturaResumo>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!alunoId?.trim()) {
        return { success: false, error: 'Aluno ausente.' };
      }

      const aluno = await this.alunoRepository.getById(alunoId, tenantId);
      if (!aluno) {
        return { success: false, error: 'Aluno não encontrado.' };
      }

      const [customer, assinaturaAtual, eventosRecentes, portalUrlResult] = await Promise.all([
        this.repository.obterCustomerPorAluno(tenantId, alunoId),
        this.repository.obterSubscriptionPorAluno(tenantId, alunoId),
        this.repository.listarEventosPorAluno(tenantId, alunoId, 5),
        this.adapter.gerarCustomerPortalUrl({ tenantId, alunoId }),
      ]);

      return {
        success: true,
        data: {
          tenantId,
          alunoId,
          alunoNome: aluno.nome,
          faixa: aluno.faixa,
          statusAluno: aluno.status,
          statusFinanceiro: aluno.statusFinanceiro,
          valorMensalidade: aluno.valorMensalidade,
          assinaturaAtual,
          customer,
          eventosRecentes,
          customerPortalUrl: portalUrlResult.success ? portalUrlResult.data?.url : undefined,
        },
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao carregar o portal de assinatura.' };
    }
  }
}
