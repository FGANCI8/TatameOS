import { useState, useEffect, useCallback } from 'react';
import { treinoService } from '../modules/instances';
import { Treino } from '../modules/treino/types';
import { useAuth } from './useAuth';

export function useTreino(gymId?: string | null) {
  const { userId, tenantId } = useAuth();
  const resolvedTenantId = gymId === undefined ? tenantId : gymId;
  const [data, setData] = useState<Treino[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTreinos = useCallback(async () => {
    if (!resolvedTenantId || !userId) {
      setData([]);
      setError(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const result = await treinoService.listarTreinos(userId, resolvedTenantId);
      if (result.success) {
        setData(result.data || []);
      } else {
        setError(result.error || 'Erro ao carregar treinos.');
      }
    } catch (err: any) {
      setError(err.message || 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  }, [resolvedTenantId, userId]);

  useEffect(() => {
    void fetchTreinos();
  }, [fetchTreinos, resolvedTenantId]);

  const registrarTreino = async (tecnicaId: string, observacoes: string, dificuldadePercebida: number) => {
    if (!resolvedTenantId || !userId) {
      setError('Usuário não autenticado.');
      return false;
    }
    setLoading(true);
    const result = await treinoService.registrarTreino({
      alunoId: userId,
      tecnicaId,
      observacoes,
      dificuldadePercebida
    }, resolvedTenantId);

    if (!result.success) {
      setError(result.error || 'Erro ao registrar.');
      setLoading(false);
      return false;
    }

    await fetchTreinos();
    return true;
  };

  return {
    data,
    loading,
    error,
    actions: {
      registrarTreino,
      listarTreinos: fetchTreinos
    }
  };
}
