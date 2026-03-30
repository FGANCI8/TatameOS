import { useState, useEffect, useCallback } from 'react';
import { falhasService } from '../modules/instances';
import { MapaVulnerabilidade, CategoriaFalha } from '../modules/falhas/types';
import { useAuth } from './useAuth';

export function useFalhas() {
  const { userId, tenantId } = useAuth();
  const [mapa, setMapa] = useState<MapaVulnerabilidade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMapa = useCallback(async () => {
    if (!userId || !tenantId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    setError(null);
    const result = await falhasService.calcularMapaDeVulnerabilidade(userId, tenantId);
    if (!result.success) {
      setError(result.error || 'Erro inesperado');
    } else {
      setMapa(result.data || []);
    }
    setLoading(false);
  }, [userId, tenantId]);

  useEffect(() => {
    fetchMapa();
  }, [fetchMapa]);

  const registrarFalha = async (categoria: CategoriaFalha, descricao: string, gravidade: number) => {
    if (!userId || !tenantId) return false;
    setLoading(true);
    const result = await falhasService.registrarFalha({
      alunoId: userId,
      categoria,
      descricao,
      gravidade
    }, tenantId);

    if (!result.success) {
      setError(result.error || 'Erro ao registrar falha');
      setLoading(false);
      return false;
    }

    await fetchMapa();
    return true;
  };

  return {
    data: mapa,
    loading,
    error,
    actions: {
      registrarFalha,
      getMapaVulnerabilidade: fetchMapa
    }
  };
}
