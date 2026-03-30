import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';
import type {
  CanalNotificacaoTransacional,
  ContatoAlunoNotificacao,
  DisparoNotificacaoTransacionalInput,
  INotificacaoAdapter,
  INotificacoesTransacionaisRepository,
  INotificacoesTransacionaisService,
  MotivoNotificacaoTransacional,
  NotificacaoTransacionalRegistro,
  ResultadoAdapterNotificacao,
} from './types';

type AlunoContato = ContatoAlunoNotificacao['aluno'] & Partial<{ telefone: string }>;

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function formatCurrency(value: number): string {
  return Number(value || 0).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

function buildSubject(motivo: MotivoNotificacaoTransacional): string {
  switch (motivo) {
    case 'payment_failed':
      return 'Falha no pagamento - TatameOS';
    case 'due_soon':
      return 'Vencimento próximo - TatameOS';
    default:
      return 'Atualização financeira - TatameOS';
  }
}

function buildMessage(input: DisparoNotificacaoTransacionalInput): string {
  const nome = input.nomeAluno || 'atleta';
  const valor = typeof input.valorMensalidade === 'number' ? formatCurrency(input.valorMensalidade) : 'sua mensalidade';

  if (input.motivo === 'due_soon') {
    const dias = typeof input.diasRestantes === 'number' ? Math.max(0, input.diasRestantes) : 0;
    const vencimento = input.dataVencimento
      ? new Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format(input.dataVencimento)
      : 'em breve';

    return normalizeText(
      `Olá, ${nome}. Sua mensalidade vence ${dias === 0 ? 'hoje' : `em ${dias} dia(s)`} (${vencimento}). O valor previsto é ${valor}. Regularize para manter seu acesso ao tatame.`,
    );
  }

  return normalizeText(
    `Olá, ${nome}. Identificamos uma falha no pagamento de ${valor}. Regularize o quanto antes para evitar a suspensão do acesso e manter sua rotina de treino ativa.`,
  );
}

function buildRegistroId(input: DisparoNotificacaoTransacionalInput, canal: CanalNotificacaoTransacional): string {
  return [input.tenantId, input.alunoId, input.eventoStripeId, input.motivo, canal].join(':');
}

function buildRegistroBase(
  input: DisparoNotificacaoTransacionalInput,
  canal: CanalNotificacaoTransacional,
  destino: string,
  assunto: string,
  mensagem: string,
): NotificacaoTransacionalRegistro {
  return {
    id: buildRegistroId(input, canal),
    tenantId: input.tenantId,
    alunoId: input.alunoId,
    eventoStripeId: input.eventoStripeId,
    motivo: input.motivo,
    canal,
    destino,
    assunto,
    mensagem,
    status: 'pending',
    metadata: input.metadata,
    createdAt: new Date(),
  };
}

function pickAdapters(adapters: INotificacaoAdapter[], canal: CanalNotificacaoTransacional): INotificacaoAdapter[] {
  return adapters.filter((adapter) => adapter.canal === canal);
}

async function sendThroughAdapter(
  repository: INotificacoesTransacionaisRepository,
  adapter: INotificacaoAdapter,
  registro: NotificacaoTransacionalRegistro,
  destinationLabel: string,
  input: DisparoNotificacaoTransacionalInput,
): Promise<void> {
  try {
    const created = await repository.registrarSeNovo(registro);
    if (!created.created || created.duplicated) {
      await repository.atualizarResultado(registro.id, { status: 'duplicate' });
      return;
    }

    const result: ServiceResult<ResultadoAdapterNotificacao> = await adapter.enviar({
      tenantId: input.tenantId,
      alunoId: input.alunoId,
      destino: registro.destino,
      nomeAluno: input.nomeAluno,
      assunto: registro.assunto,
      mensagem: registro.mensagem,
      metadata: input.metadata,
    });

    if (result.success && result.data?.messageId) {
      await repository.atualizarResultado(registro.id, {
        status: 'sent',
        providerMessageId: result.data.messageId,
        sentAt: new Date(),
      });
      return;
    }

    await repository.atualizarResultado(registro.id, {
      status: 'failed',
      errorMessage: result.error || `Falha ao enviar ${destinationLabel}.`,
    });
  } catch (error: any) {
    try {
      await repository.atualizarResultado(registro.id, {
        status: 'failed',
        errorMessage: error?.message || `Falha silenciosa ao enviar ${destinationLabel}.`,
      });
    } catch {
      // Silencioso por design: a notificação nunca pode quebrar o fluxo principal.
    }
  }
}

export class NotificacoesTransacionaisService implements INotificacoesTransacionaisService {
  constructor(
    private readonly repository: INotificacoesTransacionaisRepository,
    private readonly adapters: INotificacaoAdapter[],
  ) {}

  private obterContato(aluno: AlunoContato): { email?: string; telefone?: string } {
    return {
      email: aluno.email?.trim() || undefined,
      telefone: aluno.telefone?.trim() || undefined,
    };
  }

  private async disparar(
    input: DisparoNotificacaoTransacionalInput,
    motivo: MotivoNotificacaoTransacional,
  ): Promise<void> {
    if (!input.tenantId?.trim() || !input.alunoId?.trim() || !input.eventoStripeId?.trim()) {
      return;
    }

    const assunto = normalizeText(input.assunto || buildSubject(motivo));
    const mensagem = normalizeText(input.mensagem || buildMessage({ ...input, motivo }));
    const contatos = this.obterContato({
      id: input.alunoId,
      tenantId: input.tenantId,
      nome: input.nomeAluno,
      email: input.email || '',
      valorMensalidade: input.valorMensalidade || 0,
      statusFinanceiro: 'em_dia',
      vencimentoMensalidade: input.dataVencimento ? input.dataVencimento.getDate() : undefined,
      ...(input.telefone ? { telefone: input.telefone } : {}),
    } as AlunoContato);

    const emailAdapters = pickAdapters(this.adapters, 'email');
    const whatsappAdapters = pickAdapters(this.adapters, 'whatsapp');

    if (contatos.email) {
      for (const adapter of emailAdapters) {
        const registro = buildRegistroBase(input, 'email', contatos.email, assunto, mensagem);
        await sendThroughAdapter(this.repository, adapter, registro, 'e-mail', input);
      }
    }

    if (contatos.telefone) {
      for (const adapter of whatsappAdapters) {
        const registro = buildRegistroBase(input, 'whatsapp', contatos.telefone, assunto, mensagem);
        await sendThroughAdapter(this.repository, adapter, registro, 'WhatsApp', input);
      }
    }
  }

  async notificarFalhaPagamento(input: DisparoNotificacaoTransacionalInput): Promise<void> {
    await this.disparar(input, 'payment_failed');
  }

  async notificarVencimentoProximo(input: DisparoNotificacaoTransacionalInput): Promise<void> {
    await this.disparar(input, 'due_soon');
  }

  listarPorAluno(tenantId: string, alunoId: string, limite?: number): Promise<NotificacaoTransacionalRegistro[]> {
    return this.repository.listarPorAluno(tenantId, alunoId, limite);
  }
}
