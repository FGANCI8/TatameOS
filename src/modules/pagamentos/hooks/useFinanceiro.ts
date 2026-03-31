import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { alunoService, pagamentosService } from '../../instances';
import type { ResumoFinanceiro } from '../types';
import type { AlunoEmRiscoEvasao } from '../../aluno/types';

function getDefaultPeriod() {
  const now = new Date();
  return {
    mes: now.getMonth() + 1,
    ano: now.getFullYear(),
  };
}

export function useFinanceiro(gymId?: string | null) {
  const { tenantId, isProfessorOrAdmin } = useAuth();
  const resolvedTenantId = gymId === undefined ? tenantId : gymId;
  const defaultPeriod = useMemo(() => getDefaultPeriod(), []);
  const [mes, setMes] = useState(defaultPeriod.mes);
  const [ano, setAno] = useState(defaultPeriod.ano);
  const [resumo, setResumo] = useState<ResumoFinanceiro | null>(null);
  const [alunosEmRisco, setAlunosEmRisco] = useState<AlunoEmRiscoEvasao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const carregarResumo = useCallback(async (mesAtual = mes, anoAtual = ano) => {
    if (!resolvedTenantId) {
      setResumo(null);
      setAlunosEmRisco([]);
      setError(null);
      setLoading(false);
      return false;
    }

    if (!isProfessorOrAdmin) {
      setResumo(null);
      setAlunosEmRisco([]);
      setError('Apenas professor ou admin podem acessar o financeiro.');
      setLoading(false);
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const [resumoResult, riscoResult] = await Promise.all([
        pagamentosService.obterResumoFinanceiro(resolvedTenantId, isProfessorOrAdmin, mesAtual, anoAtual),
        alunoService.identificarAlunosEmRisco(resolvedTenantId),
      ]);

      if (!resumoResult.success || !resumoResult.data) {
        setResumo(null);
        setAlunosEmRisco([]);
        setError(resumoResult.error || 'Falha ao carregar resumo financeiro.');
        return false;
      }

      setResumo(resumoResult.data);
      if (riscoResult.success && riscoResult.data) {
        setAlunosEmRisco(riscoResult.data);
      } else {
        setAlunosEmRisco([]);
      }
      return true;
    } catch (err: any) {
      setResumo(null);
      setAlunosEmRisco([]);
      setError(err?.message || 'Falha ao carregar resumo financeiro.');
      return false;
    } finally {
      setLoading(false);
    }
  }, [ano, isProfessorOrAdmin, mes, resolvedTenantId]);

  useEffect(() => {
    void carregarResumo(mes, ano);
  }, [carregarResumo, mes, ano, resolvedTenantId]);

  return {
    resumo,
    alunosEmRisco,
    loading,
    error,
    mes,
    ano,
    setMes,
    setAno,
    carregarResumo,
  };
}
