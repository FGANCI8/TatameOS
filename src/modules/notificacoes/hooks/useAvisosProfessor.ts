import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { notificacoesService } from '../../instances';
import type { AvisoAcademia, EnviarAvisoGeralInput } from '../types';

export function useAvisosProfessor() {
  const { tenantId, userId, isProfessorOrAdmin } = useAuth();
  const [avisos, setAvisos] = useState<AvisoAcademia[]>([]);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const carregar = useCallback(async () => {
    if (!tenantId || !userId || !isProfessorOrAdmin) {
      setAvisos([]);
      setLoading(false);
      return false;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await notificacoesService.listarAvisosProfessor({
        tenantId,
        professorId: userId,
        limite: 20,
      });

      if (!result.success || !result.data) {
        setAvisos([]);
        setError(result.error || 'Falha ao listar avisos.');
        return false;
      }

      setAvisos(result.data);
      return true;
    } catch (err: any) {
      setAvisos([]);
      setError(err?.message || 'Falha ao listar avisos.');
      return false;
    } finally {
      setLoading(false);
    }
  }, [isProfessorOrAdmin, tenantId, userId]);

  const enviarAvisoGeral = useCallback(
    async (input: Pick<EnviarAvisoGeralInput, 'titulo' | 'mensagem' | 'tipo'>) => {
      if (!tenantId || !userId || !isProfessorOrAdmin) {
        return false;
      }

      setSending(true);
      setError(null);
      setSuccess(null);

      try {
        const result = await notificacoesService.enviarAvisoGeral({
          tenantId,
          professorId: userId,
          titulo: input.titulo,
          mensagem: input.mensagem,
          tipo: input.tipo,
        });

        if (!result.success) {
          setError(result.error || 'Falha ao enviar aviso.');
          return false;
        }

        setSuccess(`Aviso enviado para a academia. ${result.data?.avisosCriados ?? 0} notificações geradas.`);
        await carregar();
        return true;
      } finally {
        setSending(false);
      }
    },
    [carregar, isProfessorOrAdmin, tenantId, userId],
  );

  useEffect(() => {
    void carregar();
  }, [carregar]);

  const metrics = useMemo(
    () => ({
      total: avisos.length,
      recentes: avisos.slice(0, 3),
    }),
    [avisos],
  );

  return {
    avisos,
    loading,
    sending,
    error,
    success,
    metrics,
    actions: {
      refresh: carregar,
      enviarAvisoGeral,
    },
  };
}
