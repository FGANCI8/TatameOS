import type { Timestamp } from 'firebase/firestore';
import type { CategoriaFalha } from '../falhas/types';

export type FeedbackOrigemTipo = 'falha' | 'treino' | 'luta' | 'campeonato';
export type FeedbackStatus =
  | 'aberto'
  | 'em_analise'
  | 'em_andamento'
  | 'aguardando_aluno'
  | 'corrigido'
  | 'encerrado'
  | 'descartado';

export type FeedbackGravidade = 1 | 2 | 3 | 4 | 5;
export type FeedbackPrioridade = 'baixa' | 'media' | 'alta' | 'critica';

export interface FeedbackMetricasAluno {
  total: number;
  aguardando: number;
  corrigidos: number;
  comResposta: number;
}

export interface FeedbackMetricasProfessor {
  total: number;
  abertos: number;
  pendentes: number;
  criticos: number;
  corrigidos: number;
}

export interface Feedback {
  id: string;
  tenantId: string;
  alunoId: string;
  professorId: string;
  origemTipo: FeedbackOrigemTipo;
  origemId: string;
  categoriaFalha?: CategoriaFalha;
  titulo: string;
  descricao: string;
  gravidade: FeedbackGravidade;
  prioridade: FeedbackPrioridade;
  status: FeedbackStatus;
  recomendacaoProfessor?: string;
  conclusaoAluno?: string;
  createdAt: Date;
  updatedAt: Date;
  reviewedAt?: Date;
  resolvedAt?: Date;
}

export interface FeedbackFirestoreDocument {
  id: string;
  tenantId: string;
  alunoId: string;
  professorId: string;
  origemTipo: FeedbackOrigemTipo;
  origemId: string;
  categoriaFalha?: CategoriaFalha;
  titulo: string;
  descricao: string;
  gravidade: FeedbackGravidade;
  prioridade: FeedbackPrioridade;
  status: FeedbackStatus;
  recomendacaoProfessor?: string;
  conclusaoAluno?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  reviewedAt?: Timestamp;
  resolvedAt?: Timestamp;
}

export interface CriarFeedbackInput {
  alunoId: string;
  professorId: string;
  origemTipo: FeedbackOrigemTipo;
  origemId: string;
  categoriaFalha?: CategoriaFalha;
  titulo: string;
  descricao: string;
  gravidade: FeedbackGravidade;
  prioridade?: FeedbackPrioridade;
}

export interface AtualizarFeedbackStatusInput {
  feedbackId: string;
  status: FeedbackStatus;
  professorId: string;
  recomendacaoProfessor?: string;
  conclusaoAluno?: string;
}

export interface FeedbackFiltroBase {
  alunoId?: string;
  professorId?: string;
  origemTipo?: FeedbackOrigemTipo;
  origemId?: string;
  status?: FeedbackStatus;
  prioridade?: FeedbackPrioridade;
}
