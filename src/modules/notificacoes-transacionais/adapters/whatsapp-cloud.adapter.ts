import type { ServiceResult } from '../../core/types';
import type {
  EnviarAdapterNotificacaoInput,
  INotificacaoAdapter,
  ResultadoAdapterNotificacao,
} from '../types';

export interface WhatsAppCloudAdapterConfig {
  accessToken?: string;
  phoneNumberId?: string;
  apiVersion?: string;
}

function normalizePhone(value: string): string {
  return value.replace(/[^\d]/g, '');
}

export class WhatsAppCloudAdapterTatameOS implements INotificacaoAdapter {
  canal = 'whatsapp' as const;

  constructor(private readonly config: WhatsAppCloudAdapterConfig = {}) {}

  async enviar(input: EnviarAdapterNotificacaoInput): Promise<ServiceResult<ResultadoAdapterNotificacao>> {
    if (!this.config.accessToken || !this.config.phoneNumberId) {
      return {
        success: false,
        error: 'WhatsApp Cloud API não configurada. Informe accessToken e phoneNumberId no adaptador.',
      };
    }

    const destino = normalizePhone(input.destino || '');
    if (!destino) {
      return { success: false, error: 'Destino de WhatsApp ausente.' };
    }

    const version = this.config.apiVersion || 'v19.0';

    try {
      const response = await fetch(`https://graph.facebook.com/${version}/${this.config.phoneNumberId}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.config.accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to: destino,
          type: 'text',
          text: {
            preview_url: false,
            body: input.mensagem,
          },
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as Record<string, unknown>;

      if (!response.ok) {
        const errorMessage =
          (typeof payload.error === 'object' && payload.error && 'message' in payload.error
            ? String((payload.error as Record<string, unknown>).message || '')
            : '') ||
          (typeof payload.message === 'string' && payload.message) ||
          `Falha ao enviar mensagem via WhatsApp Cloud (${response.status}).`;
        return { success: false, error: errorMessage };
      }

      const messageId =
        Array.isArray(payload.messages) && payload.messages.length > 0 && payload.messages[0] && typeof payload.messages[0] === 'object'
          ? String((payload.messages[0] as Record<string, unknown>).id || '')
          : '';

      return {
        success: true,
        data: {
          messageId,
        },
      };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || 'Falha silenciosa ao enviar mensagem via WhatsApp.',
      };
    }
  }
}
