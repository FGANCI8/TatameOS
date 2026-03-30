import { useState, useEffect, useCallback, useMemo } from 'react';
import { alunoService, presencasService } from '../../instances';
import type { Aluno, ProntidaoGraduacao } from '../types';
import type { HistoricoPresencaItem } from '../../presencas/types';
import { useAuth } from '../../../hooks/useAuth';

export function useAluno() {
  const { user, userId, tenantId, isAuthenticated } = useAuth();
  const [perfil, setPerfil] = useState<Aluno | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [historicoRecente, setHistoricoRecente] = useState<HistoricoPresencaItem[]>([]);
  const [historicoLoading, setHistoricoLoading] = useState(true);
  const [historicoError, setHistoricoError] = useState<string | null>(null);

  const fetchPerfil = useCallback(async () => {
    if (!userId || !isAuthenticated || !tenantId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await alunoService.obterAluno(userId, tenantId);
      if (res.success && res.data) {
        setPerfil(res.data);
      } else {
        const initRes = await alunoService.inicializarAluno(userId, user?.email || '', user?.displayName || 'Atleta', tenantId);
        if (initRes.success && initRes.data) {
          setPerfil(initRes.data);
        } else {
          setError(res.error || 'Erro ao carregar perfil.');
        }
      }
    } catch (err: any) {
      setError(err.message || 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, tenantId, user, userId]);

  const prontidaoGraduacao = useMemo<ProntidaoGraduacao | null>(() => {
    if (!perfil) {
      return null;
    }

    return alunoService.calcularProntidaoGraduacao(perfil);
  }, [perfil]);

  const fetchHistoricoRecente = useCallback(async () => {
    if (!userId || !isAuthenticated || !tenantId) {
      setHistoricoRecente([]);
      setHistoricoLoading(false);
      return;
    }

    setHistoricoLoading(true);
    setHistoricoError(null);

    try {
      const result = await presencasService.listarHistoricoPresencas(
        tenantId,
        false,
        { alunoId: userId, limite: 5 },
        userId,
      );

      if (result.success && result.data) {
        setHistoricoRecente(result.data);
      } else {
        setHistoricoRecente([]);
        setHistoricoError(result.error || 'Erro ao carregar histórico recente.');
      }
    } catch (err: any) {
      setHistoricoRecente([]);
      setHistoricoError(err.message || 'Erro inesperado.');
    } finally {
      setHistoricoLoading(false);
    }
  }, [isAuthenticated, tenantId, userId]);

  useEffect(() => {
    fetchPerfil();
  }, [fetchPerfil]);

  useEffect(() => {
    fetchHistoricoRecente();
  }, [fetchHistoricoRecente]);

  return {
    perfil,
    prontidaoGraduacao,
    historicoRecente,
    historicoLoading,
    historicoError,
    loading,
    error,
    actions: {
      refresh: fetchPerfil,
      refreshHistorico: fetchHistoricoRecente,
    },
  };
}
