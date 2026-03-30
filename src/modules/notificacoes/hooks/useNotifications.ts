import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { notificacoesService } from '../../instances';
import type { Notificacao, NotificacoesResumo } from '../types';

export function useNotifications(limite = 5) {
  const { tenantId, userId, isAuthenticated } = useAuth();
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregar = useCallback(async () => {
    if (!isAuthenticated || !tenantId || !userId) {
      setNotificacoes([]);
      setLoading(false);
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await notificacoesService.listarNotificacoes({
        tenantId,
        destinatarioId: userId,
        limite,
      });

      if (!result.success || !result.data) {
        setNotificacoes([]);
        setError(result.error || 'Falha ao carregar notificações.');
        return false;
      }

      setNotificacoes(result.data.notificacoes);
      return true;
    } catch (err: any) {
      setNotificacoes([]);
      setError(err?.message || 'Falha ao carregar notificações.');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, limite, tenantId, userId]);

  const marcarComoLida = useCallback(async (notificacaoId: string) => {
    if (!tenantId || !userId) {
      return false;
    }

    const result = await notificacoesService.marcarComoLida({
      tenantId,
      destinatarioId: userId,
      notificacaoId,
    });

    if (!result.success) {
      setError(result.error || 'Falha ao marcar notificação como lida.');
      return false;
    }

    setNotificacoes((current) => current.map((item) => (item.id === notificacaoId ? { ...item, lida: true } : item)));
    return true;
  }, [tenantId, userId]);

  const marcarTodasComoLidas = useCallback(async () => {
    if (!tenantId || !userId) {
      return false;
    }

    const result = await notificacoesService.marcarTodasComoLidas(tenantId, userId);
    if (!result.success) {
      setError(result.error || 'Falha ao marcar notificações como lidas.');
      return false;
    }

    setNotificacoes((current) => current.map((item) => ({ ...item, lida: true })));
    return true;
  }, [tenantId, userId]);

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
