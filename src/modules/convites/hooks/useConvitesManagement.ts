import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { convitesService } from '../../instances';
import type { ConviteListItem } from '../types';

export function useConvitesManagement() {
  const { isAdmin } = useAuth();
  const [convites, setConvites] = useState<ConviteListItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoadingToken, setActionLoadingToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const ordenarConvites = useCallback((items: ConviteListItem[]) => {
    return [...items].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, []);

  const carregarConvites = useCallback(async () => {
    if (!isAdmin) {
      setConvites([]);
      setLoading(false);
      setError('Apenas administradores podem acessar o painel de convites.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await convitesService.listarConvites(isAdmin);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao carregar convites.');
        setConvites([]);
        return;
      }

      setConvites(ordenarConvites(result.data.convites));
    } finally {
      setLoading(false);
    }
  }, [isAdmin, ordenarConvites]);

  const reenviarConvite = useCallback(async (token: string) => {
    if (!isAdmin) {
      return false;
    }

    setActionLoadingToken(token);
    setError(null);
    setSuccess(null);

    try {
      const result = await convitesService.reenviarConvite({ token }, isAdmin);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao reenviar convite.');
        return false;
      }

      setSuccess(`Convite reenviado para ${result.data.convite.email}.`);
      await carregarConvites();
      return true;
    } finally {
      setActionLoadingToken(null);
    }
  }, [carregarConvites, isAdmin]);

  const revogarConvite = useCallback(async (token: string) => {
    if (!isAdmin) {
      return false;
    }

    setActionLoadingToken(token);
    setError(null);
    setSuccess(null);

    try {
      const result = await convitesService.revogarConvite({ token }, isAdmin);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao revogar convite.');
        return false;
      }

      setSuccess(`Convite de ${result.data.convite.email} revogado.`);
      await carregarConvites();
      return true;
    } finally {
      setActionLoadingToken(null);
    }
  }, [carregarConvites, isAdmin]);

  useEffect(() => {
    void carregarConvites();
  }, [carregarConvites]);

  const metrics = useMemo(() => {
    const now = Date.now();
    const pending = convites.filter((convite) => convite.status === 'pendente' && new Date(convite.expiresAt).getTime() > now).length;
    const expired = convites.filter((convite) => convite.status === 'expirado' || (convite.status === 'pendente' && new Date(convite.expiresAt).getTime() <= now)).length;
    const accepted = convites.filter((convite) => convite.status === 'consumido').length;
    const revoked = convites.filter((convite) => convite.status === 'revogado').length;

    return {
      total: convites.length,
      pending,
      expired,
      accepted,
      revoked,
    };
  }, [convites]);

  return {
    isAdmin,
    convites,
    metrics,
    loading,
    actionLoadingToken,
    error,
    success,
    carregarConvites,
    reenviarConvite,
    revogarConvite,
  };
}
