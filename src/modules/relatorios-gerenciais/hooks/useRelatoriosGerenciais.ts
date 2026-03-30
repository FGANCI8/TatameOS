import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { relatoriosGerenciaisService } from '../../instances';
import type { RelatorioGerencialResumo } from '../types';

function getDefaultPeriod() {
  const now = new Date();
  return {
    mes: now.getMonth() + 1,
    ano: now.getFullYear(),
  };
}

export function useRelatoriosGerenciais() {
  const { tenantId, isAdmin } = useAuth();
  const defaultPeriod = useMemo(() => getDefaultPeriod(), []);
  const [mes, setMes] = useState(defaultPeriod.mes);
  const [ano, setAno] = useState(defaultPeriod.ano);
  const [resumo, setResumo] = useState<RelatorioGerencialResumo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregarResumo = useCallback(
    async (mesAtual = mes, anoAtual = ano) => {
      if (!tenantId || !isAdmin) {
        setResumo(null);
        setError('Apenas administradores podem acessar os relatórios gerenciais.');
        setLoading(false);
        return false;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await relatoriosGerenciaisService.obterResumo(tenantId, isAdmin, mesAtual, anoAtual);

        if (!result.success || !result.data) {
          setResumo(null);
          setError(result.error || 'Falha ao carregar o relatório gerencial.');
          return false;
        }

        setResumo(result.data);
        return true;
      } catch (err: any) {
        setResumo(null);
        setError(err?.message || 'Falha ao carregar o relatório gerencial.');
        return false;
      } finally {
        setLoading(false);
      }
    },
    [ano, isAdmin, mes, tenantId],
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
