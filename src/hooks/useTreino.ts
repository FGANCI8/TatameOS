import { useState, useEffect, useCallback } from 'react';
import { treinoService } from '../modules/instances';
import { Treino } from '../modules/treino/types';
import { useAuth } from './useAuth';

export function useTreino() {
  const { userId, tenantId } = useAuth();
  const [data, setData] = useState<Treino[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTreinos = useCallback(async () => {
    if (!userId || !tenantId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const result = await treinoService.listarTreinos(userId, tenantId);
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
  }, [userId, tenantId]);

  useEffect(() => {
    fetchTreinos();
  }, [fetchTreinos]);

  const registrarTreino = async (tecnicaId: string, observacoes: string, dificuldadePercebida: number) => {
    if (!userId || !tenantId) {
      setError('Usuário não autenticado.');
      return false;
    }
    setLoading(true);
    const result = await treinoService.registrarTreino({
      alunoId: userId,
      tecnicaId,
      observacoes,
      dificuldadePercebida
    }, tenantId);

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
