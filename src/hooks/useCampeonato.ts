import { useState, useEffect, useCallback } from 'react';
import { campeonatoService } from '../modules/instances';
import { ResumoCompetitivo, Luta, TipoFinalizacao, TipoResultado } from '../modules/campeonato/types';
import { useAuth } from './useAuth';

export function useCampeonato() {
  const { userId, tenantId } = useAuth();
  const [resumo, setResumo] = useState<ResumoCompetitivo | null>(null);
  const [desempenho, setDesempenho] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    if (!userId || !tenantId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);

    const [resumoReq, desempenhoReq] = await Promise.all([
      campeonatoService.gerarResumoCompetitivo(userId, tenantId),
      campeonatoService.calcularDesempenho(userId, tenantId)
    ]);

    if (!resumoReq.success || !desempenhoReq.success) {
      setError(resumoReq.error || desempenhoReq.error || 'Erro inesperado.');
    } else {
      setResumo(resumoReq.data || null);
      setDesempenho(desempenhoReq.data !== undefined ? desempenhoReq.data : null);
    }

    setLoading(false);
  }, [userId, tenantId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const registrarLuta = async (
    campeonatoId: string,
    resultado: TipoResultado,
    pontosPro: number,
    pontosContra: number,
    finalizacaoAplicada: TipoFinalizacao,
    finalizacaoSofrida: TipoFinalizacao,
    padraoErroAluno?: string
  ) => {
    if (!userId || !tenantId) return false;
    setLoading(true);
    const result = await campeonatoService.registrarLuta({
      alunoId: userId,
      campeonatoId,
      resultado,
      finalizacaoAplicada,
      finalizacaoSofrida,
      pontosPro,
      pontosContra,
      padraoErroAluno
    }, tenantId);

    if (!result.success) {
      setError(result.error || 'Falha ao registrar.');
      setLoading(false);
      return false;
    }

    await fetchData();
    return true;
  };

  return {
    resumo,
    desempenho,
    loading,
    error,
    actions: {
      registrarLuta,
      getResumo: fetchData,
      getDesempenho: fetchData
    }
  };
}
