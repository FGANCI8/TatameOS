import type { ServiceResult } from '../core/types';
import { httpsCallable } from 'firebase/functions';
import { functions } from '../../lib/firebase/client';
import type { AvisoAcademia, EnviarAvisoGeralInput, ListarAvisosParams, ListarNotificacoesParams, MarcarNotificacaoLidaInput, NotificacoesResumo } from './types';
import { NotificacoesRepositoryFirestore } from './repository';

export interface INotificacoesService {
  listarNotificacoes(params: ListarNotificacoesParams): Promise<ServiceResult<NotificacoesResumo>>;
  marcarComoLida(input: MarcarNotificacaoLidaInput): Promise<ServiceResult<{ sucesso: boolean }>>;
  marcarTodasComoLidas(tenantId: string, destinatarioId: string): Promise<ServiceResult<{ quantidade: number }>>;
  listarAvisosProfessor(params: ListarAvisosParams): Promise<ServiceResult<AvisoAcademia[]>>;
  enviarAvisoGeral(input: EnviarAvisoGeralInput): Promise<ServiceResult<{ avisosCriados: number }>>;
}

export class NotificacoesServiceImpl implements INotificacoesService {
  constructor(private repo: NotificacoesRepositoryFirestore) {}

  async listarNotificacoes(params: ListarNotificacoesParams): Promise<ServiceResult<NotificacoesResumo>> {
    try {
      if (!params.tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!params.destinatarioId?.trim()) {
        return { success: false, error: 'Destinatário ausente.' };
      }

      const data = await this.repo.listar(params);
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar notificações.' };
    }
  }

  async marcarComoLida(input: MarcarNotificacaoLidaInput): Promise<ServiceResult<{ sucesso: boolean }>> {
    try {
      if (!input.tenantId?.trim() || !input.destinatarioId?.trim() || !input.notificacaoId?.trim()) {
        return { success: false, error: 'Dados inválidos para marcar notificação como lida.' };
      }

      const sucesso = await this.repo.marcarComoLida(input);
      return { success: sucesso, data: { sucesso } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao marcar notificação como lida.' };
    }
  }

  async marcarTodasComoLidas(tenantId: string, destinatarioId: string): Promise<ServiceResult<{ quantidade: number }>> {
    try {
      if (!tenantId?.trim() || !destinatarioId?.trim()) {
        return { success: false, error: 'Dados inválidos para atualização em lote.' };
      }

      const quantidade = await this.repo.marcarTodasComoLidas(tenantId, destinatarioId);
      return { success: true, data: { quantidade } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao atualizar notificações.' };
    }
  }

  async listarAvisosProfessor(params: ListarAvisosParams): Promise<ServiceResult<AvisoAcademia[]>> {
    try {
      if (!params.tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!params.professorId?.trim()) {
        return { success: false, error: 'Professor ausente.' };
      }

      const avisos = await this.repo.listarAvisos(params);
      return { success: true, data: avisos };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar avisos.' };
    }
  }

  async enviarAvisoGeral(input: EnviarAvisoGeralInput): Promise<ServiceResult<{ avisosCriados: number }>> {
    try {
      if (!input.tenantId?.trim() || !input.professorId?.trim() || !input.titulo?.trim() || !input.mensagem?.trim()) {
        return { success: false, error: 'Campos obrigatórios ausentes.' };
      }

      const callable = httpsCallable(functions, 'broadcastAvisoGeral');
      const result = await callable({
        tenantId: input.tenantId,
        professorId: input.professorId,
        titulo: input.titulo,
        mensagem: input.mensagem,
        tipo: input.tipo,
      });

      const data = result.data as { avisosCriados?: number };
      return { success: true, data: { avisosCriados: Number(data?.avisosCriados || 0) } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao enviar aviso geral.' };
    }
  }
}
