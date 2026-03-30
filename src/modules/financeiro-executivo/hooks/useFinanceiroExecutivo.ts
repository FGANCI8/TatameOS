import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { financeiroExecutivoService } from '../../instances';
import type { ResumoFinanceiroExecutivo } from '../types';

function getDefaultPeriod() {
  const now = new Date();
  return {
    mes: now.getMonth() + 1,
    ano: now.getFullYear(),
  };
}

export function useFinanceiroExecutivo() {
  const { tenantId, isProfessorOrAdmin } = useAuth();
  const defaultPeriod = useMemo(() => getDefaultPeriod(), []);
  const [mes, setMes] = useState(defaultPeriod.mes);
  const [ano, setAno] = useState(defaultPeriod.ano);
  const [resumo, setResumo] = useState<ResumoFinanceiroExecutivo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregarResumo = useCallback(
    async (mesAtual = mes, anoAtual = ano) => {
      if (!tenantId || !isProfessorOrAdmin) {
        setResumo(null);
        setError('Apenas professor ou admin podem acessar o financeiro executivo.');
        setLoading(false);
        return false;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await financeiroExecutivoService.obterResumoExecutivoFinanceiro(
          tenantId,
          isProfessorOrAdmin,
          mesAtual,
          anoAtual,
        );

        if (!result.success || !result.data) {
          setResumo(null);
          setError(result.error || 'Falha ao carregar o dashboard financeiro executivo.');
          return false;
        }

        setResumo(result.data);
        return true;
      } catch (err: any) {
        setResumo(null);
        setError(err?.message || 'Falha ao carregar o dashboard financeiro executivo.');
        return false;
      } finally {
        setLoading(false);
      }
    },
    [ano, isProfessorOrAdmin, mes, tenantId],
  );

  useEffect(() => {
    void carregarResumo(mes, ano);
  }, [carregarResumo, mes, ano]);

  return {
    resumo,
    loading,
    error,
    mes,
    ano,
    setMes,
    setAno,
    carregarResumo,
  };
}
