export type NotificacaoTipo = 'info' | 'sucesso' | 'alerta';

export interface Notificacao {
  id: string;
  tenantId: string;
  destinatarioId: string;
  titulo: string;
  mensagem: string;
  tipo: NotificacaoTipo;
  lida: boolean;
  createdAt: Date;
}

export interface AvisoAcademia {
  id: string;
  tenantId: string;
  professorId: string;
  titulo: string;
  mensagem: string;
  tipo: NotificacaoTipo;
  destinatariosCount: number;
  createdAt: Date;
}

export interface CriarNotificacaoInput {
  tenantId: string;
  destinatarioId: string;
  titulo: string;
  mensagem: string;
  tipo: NotificacaoTipo;
}

export interface ListarNotificacoesParams {
  tenantId: string;
  destinatarioId: string;
  limite?: number;
}

export interface ListarAvisosParams {
  tenantId: string;
  professorId: string;
  limite?: number;
}

export interface EnviarAvisoGeralInput {
  tenantId: string;
  professorId: string;
  titulo: string;
  mensagem: string;
  tipo: NotificacaoTipo;
}

export interface MarcarNotificacaoLidaInput {
  tenantId: string;
  destinatarioId: string;
  notificacaoId: string;
}

export interface NotificacoesResumo {
  total: number;
  naoLidas: number;
  notificacoes: Notificacao[];
}
