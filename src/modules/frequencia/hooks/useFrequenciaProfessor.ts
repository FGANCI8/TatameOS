import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { frequenciaService } from '../../instances';
import type { FrequenciaProfessorPainel } from '../types';

export function useFrequenciaProfessor() {
  const { tenantId, isProfessorOrAdmin, userId } = useAuth();
  const [painel, setPainel] = useState<FrequenciaProfessorPainel | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregar = useCallback(async () => {
    if (!tenantId || !isProfessorOrAdmin) {
      setPainel(null);
      setError('Apenas professor ou admin podem acessar a frequência.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    const result = await frequenciaService.obterPainelProfessor(tenantId, isProfessorOrAdmin);
    if (!result.success || !result.data) {
      setPainel(null);
      setError(result.error || 'Falha ao carregar a frequência.');
      setLoading(false);
      return;
    }

    setPainel(result.data);
    setLoading(false);
  }, [isProfessorOrAdmin, tenantId]);

  const validarQr = useCallback(
    async (qrToken: string) => frequenciaService.validarCheckinQr({ tenantId: tenantId || '', qrToken, professorUid: userId || '' }, isProfessorOrAdmin),
    [isProfessorOrAdmin, tenantId, userId],
  );

  const registrarManual = useCallback(
    async (alunoId: string) => frequenciaService.registrarCheckinManual({ tenantId: tenantId || '', alunoId, professorUid: userId || '' }, isProfessorOrAdmin),
    [isProfessorOrAdmin, tenantId, userId],
  );

  useEffect(() => {
    void carregar();
  }, [carregar]);

  return {
    painel,
    loading,
    error,
    actions: {
      refresh: carregar,
      validarQr,
      registrarManual,
    },
  };
}
