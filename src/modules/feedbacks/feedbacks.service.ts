import type { ServiceResult } from '../core/types';
import type {
  AtualizarFeedbackStatusInput,
  CriarFeedbackInput,
  Feedback,
  FeedbackFiltroBase,
  FeedbackMetricasAluno,
  FeedbackMetricasProfessor,
  FeedbackPrioridade,
  FeedbackStatus
} from './types';

export interface IFeedbacksService {
  criarFeedback(input: CriarFeedbackInput, tenantId: string): Promise<ServiceResult<Feedback>>;
  listarFeedbacksPorAluno(alunoId: string, tenantId: string): Promise<ServiceResult<Feedback[]>>;
  listarFeedbacksPorProfessor(professorId: string, tenantId: string): Promise<ServiceResult<Feedback[]>>;
  listarFeedbacks(filters: FeedbackFiltroBase, tenantId: string): Promise<ServiceResult<Feedback[]>>;
  listarFeedbacksRecentesPorAluno(alunoId: string, tenantId: string, limitCount?: number): Promise<ServiceResult<Feedback[]>>;
  listarFeedbacksRecentesPorProfessor(professorId: string, tenantId: string, limitCount?: number): Promise<ServiceResult<Feedback[]>>;
  obterMetricasFeedbacksAluno(alunoId: string, tenantId: string): Promise<ServiceResult<FeedbackMetricasAluno>>;
  obterMetricasFeedbacksProfessor(professorId: string, tenantId: string): Promise<ServiceResult<FeedbackMetricasProfessor>>;
  obterFeedbackPorId(id: string, tenantId: string): Promise<ServiceResult<Feedback | null>>;
  atualizarStatus(input: AtualizarFeedbackStatusInput, tenantId: string): Promise<ServiceResult<Feedback>>;
  atualizarPrioridade(feedbackId: string, prioridade: FeedbackPrioridade, tenantId: string): Promise<ServiceResult<Feedback>>;
  alterarStatusRapido(feedbackId: string, status: FeedbackStatus, tenantId: string): Promise<ServiceResult<Feedback>>;
}
