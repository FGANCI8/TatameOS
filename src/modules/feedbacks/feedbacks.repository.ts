import type { Feedback, FeedbackFiltroBase, FeedbackFirestoreDocument, FeedbackOrigemTipo, FeedbackStatus } from './types';

export interface IFeedbacksRepository {
  save(feedback: Feedback, tenantId: string): Promise<Feedback>;
  findById(id: string, tenantId: string): Promise<Feedback | null>;
  findByAlunoId(alunoId: string, tenantId: string): Promise<Feedback[]>;
  findByProfessorId(professorId: string, tenantId: string): Promise<Feedback[]>;
  findByOrigem(origemTipo: FeedbackOrigemTipo, origemId: string, tenantId: string): Promise<Feedback[]>;
  findMany(filters: FeedbackFiltroBase, tenantId: string): Promise<Feedback[]>;
  countMany(filters: FeedbackFiltroBase, tenantId: string): Promise<number>;
  findRecentByAlunoId(alunoId: string, tenantId: string, limitCount?: number): Promise<Feedback[]>;
  findRecentByProfessorId(professorId: string, tenantId: string, limitCount?: number): Promise<Feedback[]>;
  updateStatus(
    feedbackId: string,
    tenantId: string,
    status: FeedbackStatus,
    reviewedAt?: Date,
    resolvedAt?: Date,
    recomendacaoProfessor?: string,
    conclusaoAluno?: string
  ): Promise<Feedback>;
}

export type { FeedbackFirestoreDocument };
