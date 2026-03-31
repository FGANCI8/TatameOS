import { useState, useEffect, useCallback } from 'react';
import { alunoService } from '../../instances';
import { Aluno } from '../types';
import { useAuth } from '../../../hooks/useAuth';

export function useAlunos(gymId?: string | null) {
  const { isProfessorOrAdmin, tenantId } = useAuth();
  const resolvedTenantId = gymId === undefined ? tenantId : gymId;
  const [data, setData] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlunos = useCallback(async () => {
    if (!resolvedTenantId) {
      setData([]);
      setError(null);
      setLoading(false);
      return;
    }

    if (!isProfessorOrAdmin) {
      setData([]);
      setError('Apenas professor ou admin pode acessar esta visão.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await alunoService.listarTodosAlunos(resolvedTenantId);
      if (res.success && res.data) {
        setData(res.data);
      } else {
        setError(res.error || 'Erro ao listar alunos.');
      }
    } catch (err: any) {
      setError(err.message || 'Erro inesperado.');
    } finally {
      setLoading(false);
    }
  }, [isProfessorOrAdmin, resolvedTenantId]);

  useEffect(() => {
    void fetchAlunos();
  }, [fetchAlunos, resolvedTenantId]);

  return {
    data,
    loading,
    error,
    actions: {
      refresh: fetchAlunos
    }
  };
}
