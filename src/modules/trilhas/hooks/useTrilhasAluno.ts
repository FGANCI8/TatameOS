import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { trilhasService } from '../../instances';
import type { FaixaAlvo, TrilhaComTecnicas } from '../types';

export function useTrilhasAluno(faixaAlvo?: FaixaAlvo | null) {
  const { tenantId } = useAuth();
  const [trilhas, setTrilhas] = useState<TrilhaComTecnicas[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregar = useCallback(
    async (faixaAtual: FaixaAlvo | null | undefined = faixaAlvo) => {
      if (!tenantId || !faixaAtual) {
        setTrilhas([]);
        setLoading(false);
        return false;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await trilhasService.listarTrilhasPublicadasPorFaixa(tenantId, faixaAtual);

        if (!result.success || !result.data) {
          setTrilhas([]);
          setError(result.error || 'Falha ao carregar trilhas.');
          return false;
        }

        setTrilhas(result.data);
        return true;
      } catch (err: any) {
        setTrilhas([]);
        setError(err?.message || 'Falha ao carregar trilhas.');
        return false;
      } finally {
        setLoading(false);
      }
    },
    [faixaAlvo, tenantId],
  );

  useEffect(() => {
    void carregar(faixaAlvo);
  }, [carregar, faixaAlvo]);

  return {
    trilhas,
    loading,
    error,
    actions: {
      refresh: carregar,
    },
  };
}
