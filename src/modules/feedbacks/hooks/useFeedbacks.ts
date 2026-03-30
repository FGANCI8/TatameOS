import { useCallback, useEffect, useState } from 'react';
import { feedbacksService } from '../../instances';
import type {
  Feedback,
  FeedbackFiltroBase,
  FeedbackMetricasAluno,
  FeedbackMetricasProfessor,
  FeedbackPrioridade,
  FeedbackStatus
} from '../types';
import { useAuth } from '../../../hooks/useAuth';

type UseFeedbacksOptions = {
  autoLoad?: boolean;
  initialFilters?: FeedbackFiltroBase;
};

export function useFeedbacks(options: UseFeedbacksOptions = {}) {
  const { userId, tenantId } = useAuth();
  const [data, setData] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { autoLoad = true, initialFilters } = options;

  const runRequest = useCallback(async <T,>(request: () => Promise<{ success: boolean; data?: T; error?: string }>) => {
    setLoading(true);
    setError(null);

    try {
      const result = await request();
      if (!result.success) {
        setError(result.error || 'Erro inesperado.');
        return null;
      }
      return result.data ?? null;
    } catch (err: any) {
      setError(err.message || 'Erro inesperado.');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  const carregarMeusFeedbacks = useCallback(async () => {
    if (!userId || !tenantId) {
      setLoading(false);
      return;
    }

    const result = await runRequest(() => feedbacksService.listarFeedbacksPorAluno(userId, tenantId));
    if (result) {
      setData(result);
    }
  }, [runRequest, userId, tenantId]);

  const listarFeedbacksPorAluno = useCallback(async (alunoId?: string) => {
    const targetId = alunoId || userId;
    if (!targetId || !tenantId) {
      setLoading(false);
      return;
    }

    const result = await runRequest(() => feedbacksService.listarFeedbacksPorAluno(targetId, tenantId));
    if (result) {
      setData(result);
    }
  }, [runRequest, userId, tenantId]);

  const listarFeedbacksPorProfessor = useCallback(async (professorId?: string) => {
    const targetId = professorId || userId;
    if (!targetId || !tenantId) {
      setLoading(false);
      return;
    }

    const result = await runRequest(() => feedbacksService.listarFeedbacksPorProfessor(targetId, tenantId));
    if (result) {
      setData(result);
    }
  }, [runRequest, userId, tenantId]);

  const listarFeedbacks = useCallback(async (filters: FeedbackFiltroBase = {}) => {
    if (!tenantId) {
      setLoading(false);
      return;
    }

    const result = await runRequest(() => feedbacksService.listarFeedbacks(filters, tenantId));
    if (result) {
      setData(result);
    }
  }, [runRequest, tenantId]);

  const listarFeedbacksRecentesPorAluno = useCallback(async (alunoId?: string, limitCount = 2) => {
    const targetId = alunoId || userId;
    if (!targetId || !tenantId) {
      setLoading(false);
      return;
    }

    const result = await runRequest(() => feedbacksService.listarFeedbacksRecentesPorAluno(targetId, tenantId, limitCount));
    if (result) {
      setData(result);
    }
  }, [runRequest, userId, tenantId]);

  const listarFeedbacksRecentesPorProfessor = useCallback(async (professorId?: string, limitCount = 2) => {
    const targetId = professorId || userId;
    if (!targetId || !tenantId) {
      setLoading(false);
      return;
    }

    const result = await runRequest(() => feedbacksService.listarFeedbacksRecentesPorProfessor(targetId, tenantId, limitCount));
    if (result) {
      setData(result);
    }
  }, [runRequest, userId, tenantId]);

  const obterMetricasFeedbacksAluno = useCallback(async (alunoId?: string) => {
    const targetId = alunoId || userId;
    if (!targetId || !tenantId) {
      setLoading(false);
      return null;
    }

    return runRequest<FeedbackMetricasAluno>(() => feedbacksService.obterMetricasFeedbacksAluno(targetId, tenantId));
  }, [runRequest, userId, tenantId]);

  const obterMetricasFeedbacksProfessor = useCallback(async (professorId?: string) => {
    const targetId = professorId || userId;
    if (!targetId || !tenantId) {
      setLoading(false);
      return null;
    }

    return runRequest<FeedbackMetricasProfessor>(() => feedbacksService.obterMetricasFeedbacksProfessor(targetId, tenantId));
  }, [runRequest, userId, tenantId]);

  const criarFeedback = useCallback(async (
    payload: Parameters<typeof feedbacksService.criarFeedback>[0]
  ) => {
    if (!tenantId) {
      setError('Tenant não identificado.');
      return false;
    }

    const result = await runRequest(() => feedbacksService.criarFeedback(payload, tenantId));
    if (result) {
      await carregarMeusFeedbacks();
      return true;
    }
    return false;
  }, [carregarMeusFeedbacks, runRequest, tenantId]);

  const atualizarStatus = useCallback(async (
    feedbackId: string,
    status: FeedbackStatus,
    professorId: string,
    recomendacaoProfessor?: string,
    conclusaoAluno?: string
  ) => {
    if (!tenantId) {
      setError('Tenant não identificado.');
      return false;
    }

    const result = await runRequest(() =>
      feedbacksService.atualizarStatus({
        feedbackId,
        status,
        professorId,
        recomendacaoProfessor,
        conclusaoAluno
      }, tenantId)
    );

    if (result) {
      await carregarMeusFeedbacks();
      return true;
    }
    return false;
  }, [carregarMeusFeedbacks, runRequest, tenantId]);

  const atualizarPrioridade = useCallback(async (feedbackId: string, prioridade: FeedbackPrioridade) => {
    if (!tenantId) {
      setError('Tenant não identificado.');
      return false;
    }

    const result = await runRequest(() => feedbacksService.atualizarPrioridade(feedbackId, prioridade, tenantId));
    if (result) {
      await carregarMeusFeedbacks();
      return true;
    }
    return false;
  }, [carregarMeusFeedbacks, runRequest, tenantId]);

  const alterarStatusRapido = useCallback(async (feedbackId: string, status: FeedbackStatus) => {
    if (!tenantId) {
      setError('Tenant não identificado.');
      return false;
    }

    const result = await runRequest(() => feedbacksService.alterarStatusRapido(feedbackId, status, tenantId));
    if (result) {
      await carregarMeusFeedbacks();
      return true;
    }
    return false;
  }, [carregarMeusFeedbacks, runRequest, tenantId]);

  useEffect(() => {
    if (!autoLoad) {
      setLoading(false);
      return;
    }

    if (initialFilters) {
      listarFeedbacks(initialFilters);
      return;
    }

    carregarMeusFeedbacks();
  }, [autoLoad, carregarMeusFeedbacks, initialFilters, listarFeedbacks]);

  return {
    data,
    loading,
    error,
    actions: {
      carregarMeusFeedbacks,
      listarFeedbacksPorAluno,
      listarFeedbacksPorProfessor,
      listarFeedbacks,
      listarFeedbacksRecentesPorAluno,
      listarFeedbacksRecentesPorProfessor,
      obterMetricasFeedbacksAluno,
      obterMetricasFeedbacksProfessor,
      criarFeedback,
      atualizarStatus,
      atualizarPrioridade,
      alterarStatusRapido
    }
  };
}
