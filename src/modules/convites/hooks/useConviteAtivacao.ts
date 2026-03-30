import { useCallback, useEffect, useState } from 'react';
import { convitesService } from '../../instances';
import type { AtivarConviteResult, ValidarConviteResult } from '../types';

export function useConviteAtivacao(token: string | null) {
  const [loading, setLoading] = useState(true);
  const [validacao, setValidacao] = useState<ValidarConviteResult | null>(null);
  const [ativando, setAtivando] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<AtivarConviteResult | null>(null);

  const validar = useCallback(async () => {
    if (!token) {
      setLoading(false);
      setError('Token ausente.');
      return;
    }

    setLoading(true);
    setError(null);

    const result = await convitesService.validarConvite({ token });
    if (!result.success || !result.data) {
      setError(result.error || 'Falha ao validar convite.');
      setValidacao(null);
      setLoading(false);
      return;
    }

    setValidacao(result.data);
    setLoading(false);
  }, [token]);

  const ativar = useCallback(async () => {
    if (!token) {
      setError('Token ausente.');
      return false;
    }

    setAtivando(true);
    setError(null);

    const result = await convitesService.ativarConvite({ token });
    if (!result.success || !result.data) {
      setError(result.error || 'Falha ao ativar convite.');
      setAtivando(false);
      return false;
    }

    setSuccess(result.data);
    setAtivando(false);
    return true;
  }, [token]);

  useEffect(() => {
    void validar();
  }, [validar]);

  return {
    loading,
    validacao,
    ativando,
    error,
    success,
    validar,
    ativar,
    setError,
  };
}

