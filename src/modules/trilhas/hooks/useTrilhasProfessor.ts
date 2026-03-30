import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { trilhasService } from '../../instances';
import type { Tecnica } from '../../tecnica/types';
import type { SalvarTrilhaInput, TrilhaComTecnicas } from '../types';

export function useTrilhasProfessor() {
  const { tenantId, isProfessorOrAdmin } = useAuth();
  const [trilhas, setTrilhas] = useState<TrilhaComTecnicas[]>([]);
  const [tecnicasDisponiveis, setTecnicasDisponiveis] = useState<Tecnica[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const carregar = useCallback(async () => {
    if (!tenantId || !isProfessorOrAdmin) {
      setTrilhas([]);
      setTecnicasDisponiveis([]);
      setLoading(false);
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const [trilhasResult, tecnicasResult] = await Promise.all([
        trilhasService.listarTrilhasProfessor(tenantId),
        trilhasService.listarTecnicasDisponiveis(),
      ]);

      if (!trilhasResult.success || !trilhasResult.data) {
        setTrilhas([]);
        setTecnicasDisponiveis([]);
        setError(trilhasResult.error || 'Falha ao carregar trilhas.');
        return false;
      }

      if (!tecnicasResult.success || !tecnicasResult.data) {
        setTecnicasDisponiveis([]);
      } else {
        setTecnicasDisponiveis(tecnicasResult.data);
      }

      setTrilhas(trilhasResult.data);
      return true;
    } catch (err: any) {
      setTrilhas([]);
      setTecnicasDisponiveis([]);
      setError(err?.message || 'Falha ao carregar trilhas.');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isProfessorOrAdmin, tenantId]);

  const salvarTrilha = useCallback(
    async (input: SalvarTrilhaInput) => {
      if (!tenantId || !isProfessorOrAdmin) {
        setError('Apenas professor ou admin podem gerenciar trilhas.');
        return false;
      }

      setSaving(true);
      setError(null);

      try {
        const result = await trilhasService.salvarTrilha(input, tenantId, isProfessorOrAdmin);

        if (!result.success || !result.data) {
          setError(result.error || 'Falha ao salvar trilha.');
          return false;
        }

        await carregar();
        return true;
      } catch (err: any) {
        setError(err?.message || 'Falha ao salvar trilha.');
        return false;
      } finally {
        setSaving(false);
      }
    },
    [carregar, isProfessorOrAdmin, tenantId],
  );

  const removerTrilha = useCallback(
    async (id: string) => {
      if (!tenantId || !isProfessorOrAdmin) {
        setError('Apenas professor ou admin podem remover trilhas.');
        return false;
      }

      setSaving(true);
      setError(null);

      try {
        const result = await trilhasService.removerTrilha(id, tenantId, isProfessorOrAdmin);

        if (!result.success) {
          setError(result.error || 'Falha ao remover trilha.');
          return false;
        }

        await carregar();
        return true;
      } catch (err: any) {
        setError(err?.message || 'Falha ao remover trilha.');
        return false;
      } finally {
        setSaving(false);
      }
    },
    [carregar, isProfessorOrAdmin, tenantId],
  );

  useEffect(() => {
    void carregar();
  }, [carregar]);

  return {
    trilhas,
    tecnicasDisponiveis,
    loading,
    saving,
    error,
    actions: {
      refresh: carregar,
      salvarTrilha,
      removerTrilha,
    },
  };
}
