import { useState, useEffect, useCallback } from 'react';
import { alunoService } from '../../instances';
import { Aluno } from '../types';
import { useAuth } from '../../../hooks/useAuth';

export function useAlunos() {
  const { isProfessorOrAdmin, tenantId } = useAuth();
  const [data, setData] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAlunos = useCallback(async () => {
    if (!isProfessorOrAdmin || !tenantId) {
      setData([]);
      setError('Apenas professor ou admin pode acessar esta visão.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const res = await alunoService.listarTodosAlunos(tenantId);
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
  }, [isProfessorOrAdmin, tenantId]);

  useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);

  return {
    data,
    loading,
    error,
    actions: {
      refresh: fetchAlunos
    }
  };
}
