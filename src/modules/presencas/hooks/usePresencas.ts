import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { presencasService } from '../../instances';
import type { AlunoChamadaItem, HistoricoPresencaFiltro, HistoricoPresencaItem } from '../types';

export function usePresencas() {
  const { tenantId, isProfessorOrAdmin } = useAuth();
  const [alunos, setAlunos] = useState<AlunoChamadaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [registrandoId, setRegistrandoId] = useState<string | null>(null);
  const [historico, setHistorico] = useState<HistoricoPresencaItem[]>([]);
  const [historicoLoading, setHistoricoLoading] = useState(false);
  const [historicoError, setHistoricoError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const carregar = useCallback(async () => {
    if (!tenantId || !isProfessorOrAdmin) {
      setAlunos([]);
      setLoading(false);
      setError('Apenas professor ou admin podem acessar a chamada.');
      return;
    }

    setLoading(true);
    setError(null);

    const result = await presencasService.listarAlunosParaChamada(tenantId, isProfessorOrAdmin);
    if (!result.success || !result.data) {
      setAlunos([]);
      setError(result.error || 'Falha ao carregar alunos.');
      setLoading(false);
      return;
    }

    setAlunos(result.data);
    setLoading(false);
  }, [isProfessorOrAdmin, tenantId]);

  const registrarPresenca = useCallback(async (alunoId: string) => {
    if (!tenantId || !isProfessorOrAdmin) {
      return false;
    }

    setRegistrandoId(alunoId);
    setError(null);
    setSuccess(null);

    try {
      const result = await presencasService.registrarPresenca({ alunoId }, tenantId, isProfessorOrAdmin);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao registrar presença.');
        return false;
      }

      setSuccess('Presença registrada com sucesso.');
      await carregar();
      return true;
    } finally {
      setRegistrandoId(null);
    }
  }, [carregar, isProfessorOrAdmin, tenantId]);

  useEffect(() => {
    void carregar();
  }, [carregar]);

  const carregarHistorico = useCallback(async (filtros: HistoricoPresencaFiltro = {}) => {
    if (!tenantId || !isProfessorOrAdmin) {
      setHistorico([]);
      setHistoricoError('Apenas professor ou admin podem acessar o histórico.');
      return false;
    }

    setHistoricoLoading(true);
    setHistoricoError(null);

    try {
      const result = await presencasService.listarHistoricoPresencas(tenantId, isProfessorOrAdmin, filtros);
      if (!result.success || !result.data) {
        setHistorico([]);
        setHistoricoError(result.error || 'Falha ao carregar histórico.');
        return false;
      }

      setHistorico(result.data);
      return true;
    } finally {
      setHistoricoLoading(false);
    }
  }, [isProfessorOrAdmin, tenantId]);

  const metrics = useMemo(() => {
    return {
      total: alunos.length,
      prontos: alunos.filter((aluno) => aluno.status === 'Ativo').length,
    };
  }, [alunos]);

  return {
    isProfessorOrAdmin,
    alunos,
    loading,
    registrandoId,
    historico,
    historicoLoading,
    historicoError,
    error,
    success,
    metrics,
    carregar,
    carregarHistorico,
    registrarPresenca,
  };
}
