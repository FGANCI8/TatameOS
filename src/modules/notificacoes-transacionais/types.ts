import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';

export type CanalNotificacaoTransacional = 'email' | 'whatsapp';
export type MotivoNotificacaoTransacional = 'payment_failed' | 'due_soon';
export type StatusNotificacaoTransacional = 'pending' | 'sent' | 'failed' | 'skipped' | 'duplicate';

export interface NotificacaoTransacionalRegistro {
  id: string;
  tenantId: string;
  alunoId: string;
  eventoStripeId: string;
  motivo: MotivoNotificacaoTransacional;
  canal: CanalNotificacaoTransacional;
  destino: string;
  assunto: string;
  mensagem: string;
  status: StatusNotificacaoTransacional;
  providerMessageId?: string;
  errorMessage?: string;
  metadata?: Record<string, string>;
  createdAt: Date;
  sentAt?: Date;
}

export interface DisparoNotificacaoTransacionalInput {
  tenantId: string;
  alunoId: string;
  nomeAluno: string;
  email?: string;
  telefone?: string;
  eventoStripeId: string;
  motivo: MotivoNotificacaoTransacional;
  assunto?: string;
  mensagem?: string;
  metadata?: Record<string, string>;
  diasRestantes?: number;
  valorMensalidade?: number;
  dataVencimento?: Date | null;
}

export interface ResultadoAdapterNotificacao {
  messageId: string;
}

export interface EnviarAdapterNotificacaoInput {
  tenantId: string;
  alunoId: string;
  destino: string;
  nomeAluno: string;
  assunto: string;
  mensagem: string;
  metadata?: Record<string, string>;
}

export interface INotificacaoAdapter {
  canal: CanalNotificacaoTransacional;
  enviar(input: EnviarAdapterNotificacaoInput): Promise<ServiceResult<ResultadoAdapterNotificacao>>;
}

export interface INotificacoesTransacionaisRepository {
  registrarSeNovo(registro: NotificacaoTransacionalRegistro): Promise<{ created: boolean; duplicated: boolean }>;
  atualizarResultado(
    id: string,
    patch: Partial<Pick<NotificacaoTransacionalRegistro, 'status' | 'providerMessageId' | 'errorMessage' | 'sentAt'>>,
  ): Promise<void>;
  listarPorAluno(tenantId: string, alunoId: string, limite?: number): Promise<NotificacaoTransacionalRegistro[]>;
}

export interface INotificacoesTransacionaisService {
  notificarFalhaPagamento(input: DisparoNotificacaoTransacionalInput): Promise<void>;
  notificarVencimentoProximo(input: DisparoNotificacaoTransacionalInput): Promise<void>;
  listarPorAluno(tenantId: string, alunoId: string, limite?: number): Promise<NotificacaoTransacionalRegistro[]>;
}

export interface ContatoAlunoNotificacao {
  aluno: Pick<Aluno, 'id' | 'tenantId' | 'nome' | 'email' | 'valorMensalidade' | 'statusFinanceiro' | 'vencimentoMensalidade'> &
    Partial<{ telefone: string }>;
}
