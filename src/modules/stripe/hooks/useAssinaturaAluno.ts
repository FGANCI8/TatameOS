import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { stripeService } from '../../instances';
import type { StripePortalAssinaturaResumo } from '../types';

type AssinaturaAlunoState = {
  portal: StripePortalAssinaturaResumo | null;
  loading: boolean;
  error: string | null;
  actions: {
    refresh: () => Promise<void>;
  };
};

export function useAssinaturaAluno(): AssinaturaAlunoState {
  const { tenantId, userId, isAuthenticated } = useAuth();
  const [portal, setPortal] = useState<StripePortalAssinaturaResumo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregar = useCallback(async () => {
    if (!isAuthenticated || !tenantId || !userId) {
      setPortal(null);
      setError('Você precisa estar autenticado para acessar a assinatura.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const result = await stripeService.obterPortalAssinaturaAluno(tenantId, userId);
    if (!result.success || !result.data) {
      setPortal(null);
      setError(result.error || 'Falha ao carregar a assinatura.');
      setLoading(false);
      return;
    }

    setPortal(result.data);
    setLoading(false);
  }, [isAuthenticated, tenantId, userId]);

  useEffect(() => {
    void carregar();
  }, [carregar]);

  return {
    portal,
    loading,
    error,
    actions: {
      refresh: carregar,
    },
  };
}
