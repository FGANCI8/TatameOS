import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { frequenciaService } from '../../instances';
import type { FrequenciaAlunoPainel } from '../types';

export function useFrequenciaAluno() {
  const { tenantId, userId, isAuthenticated } = useAuth();
  const [painel, setPainel] = useState<FrequenciaAlunoPainel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregar = useCallback(async () => {
    if (!isAuthenticated || !tenantId || !userId) {
      setPainel(null);
      setError('Você precisa estar autenticado para acessar o check-in.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const result = await frequenciaService.obterPainelAluno(tenantId, userId);
    if (!result.success || !result.data) {
      setPainel(null);
      setError(result.error || 'Falha ao carregar o check-in.');
      setLoading(false);
      return;
    }

    setPainel(result.data);
    setLoading(false);
  }, [isAuthenticated, tenantId, userId]);

  useEffect(() => {
    void carregar();
  }, [carregar]);

  return {
    painel,
    loading,
    error,
    actions: {
      refresh: carregar,
    },
  };
}
