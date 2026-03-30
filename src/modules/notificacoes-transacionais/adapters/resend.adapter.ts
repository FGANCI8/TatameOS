import type { ServiceResult } from '../../core/types';
import type {
  EnviarAdapterNotificacaoInput,
  INotificacaoAdapter,
  ResultadoAdapterNotificacao,
} from '../types';

export interface ResendAdapterConfig {
  apiKey?: string;
  fromEmail?: string;
  fromName?: string;
  replyTo?: string;
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function toHtml(message: string): string {
  return `<div style="font-family: Inter, Arial, sans-serif; color: #09090b; line-height: 1.6;">${escapeHtml(
    message,
  ).replace(/\n/g, '<br />')}</div>`;
}

export class ResendAdapterTatameOS implements INotificacaoAdapter {
  canal = 'email' as const;

  constructor(private readonly config: ResendAdapterConfig = {}) {}

  async enviar(input: EnviarAdapterNotificacaoInput): Promise<ServiceResult<ResultadoAdapterNotificacao>> {
    if (!this.config.apiKey || !this.config.fromEmail) {
      return {
        success: false,
        error: 'Resend não configurado. Informe apiKey e fromEmail no adaptador de notificações.',
      };
    }

    if (!input.destino?.trim()) {
      return { success: false, error: 'Destino de e-mail ausente.' };
    }

    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: this.config.fromName
            ? `${this.config.fromName} <${this.config.fromEmail}>`
            : this.config.fromEmail,
          to: [input.destino],
          reply_to: this.config.replyTo ? [this.config.replyTo] : undefined,
          subject: input.assunto,
          text: input.mensagem,
          html: toHtml(input.mensagem),
          headers: {
            'X-TatameOS-Tenant': input.tenantId,
            'X-TatameOS-Aluno': input.alunoId,
          },
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as Record<string, unknown>;

      if (!response.ok) {
        const errorMessage =
          (typeof payload.message === 'string' && payload.message) ||
          (typeof payload.error === 'string' && payload.error) ||
          `Falha ao enviar e-mail via Resend (${response.status}).`;
        return { success: false, error: errorMessage };
      }

      const messageId = typeof payload.id === 'string' ? payload.id : '';

      return {
        success: true,
        data: {
          messageId,
        },
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || 'Falha silenciosa ao enviar e-mail via Resend.',
      };
    }
  }
}
