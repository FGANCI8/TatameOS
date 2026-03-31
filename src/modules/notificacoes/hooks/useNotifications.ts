import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { notificacoesService } from '../../instances';
import type { Notificacao, NotificacoesResumo } from '../types';

export function useNotifications(limite = 5, gymId?: string | null) {
  const { tenantId, userId, isAuthenticated } = useAuth();
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scopeTenantId = gymId?.trim() || tenantId;

  const carregar = useCallback(async () => {
    if (!isAuthenticated || !scopeTenantId || !userId) {
      setNotificacoes([]);
      setLoading(false);
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await notificacoesService.listarNotificacoes({
        tenantId: scopeTenantId,
        destinatarioId: userId,
        limite,
      });

      if (!result.success || !result.data) {
        setNotificacoes([]);
        setError(result.error || 'Falha ao carregar notifica\u00e7\u00f5es.');
        return false;
      }

      setNotificacoes(result.data.notificacoes);
      return true;
    } catch (err: any) {
      setNotificacoes([]);
      setError(err?.message || 'Falha ao carregar notifica\u00e7\u00f5es.');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, limite, scopeTenantId, userId]);

  const marcarComoLida = useCallback(async (notificacaoId: string) => {
    if (!scopeTenantId || !userId) {
      return false;
    }

    const result = await notificacoesService.marcarComoLida({
      tenantId: scopeTenantId,
      destinatarioId: userId,
      notificacaoId,
    });

    if (!result.success) {
      setError(result.error || 'Falha ao marcar notifica\u00e7\u00e3o como lida.');
      return false;
    }

    setNotificacoes((current) => current.map((item) => (item.id === notificacaoId ? { ...item, lida: true } : item)));
    return true;
  }, [scopeTenantId, userId]);

  const marcarTodasComoLidas = useCallback(async () => {
    if (!scopeTenantId || !userId) {
      return false;
    }

    const result = await notificacoesService.marcarTodasComoLidas(scopeTenantId, userId);
    if (!result.success) {
      setError(result.error || 'Falha ao marcar notifica\u00e7\u00f5es como lidas.');
      return false;
    }

    setNotificacoes((current) => current.map((item) => ({ ...item, lida: true })));
    return true;
  }, [scopeTenantId, userId]);

  useEffect(() => {
    void carregar();
  }, [carregar]);

  const resumo = useMemo<NotificacoesResumo>(() => ({
    total: notificacoes.length,
    naoLidas: notificacoes.filter((item) => !item.lida).length,
    notificacoes,
  }), [notificacoes]);

  return {
    ...resumo,
    loading,
    error,
    actions: {
      refresh: carregar,
      marcarComoLida,
      marcarTodasComoLidas,
    },
  };
}
