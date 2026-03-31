import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import { academiasService } from '../modules/instances';
import type { Academia } from '../modules/academias/types';

type GymContextValue = {
  availableGyms: Academia[];
  error: string | null;
  loading: boolean;
  selectedGym: Academia | null;
  setSelectedGym: (gym: Academia | null) => void;
};

const GymContext = createContext<GymContextValue | undefined>(undefined);
const STORAGE_KEY = 'tatameos:selectedGymId';

export function GymProvider({ children }: { children: ReactNode }) {
  const { isAuthenticated, loading: authLoading, tenantId } = useAuth();
  const [availableGyms, setAvailableGyms] = useState<Academia[]>([]);
  const [selectedGym, setSelectedGymState] = useState<Academia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const setSelectedGym = useCallback((gym: Academia | null) => {
    setSelectedGymState(gym);

    if (gym) {
      localStorage.setItem(STORAGE_KEY, gym.id);
      return;
    }

    localStorage.removeItem(STORAGE_KEY);
  }, []);

  useEffect(() => {
    let isMounted = true;

    async function hydrateGym() {
      if (authLoading) {
        setLoading(true);
        return;
      }

      if (!isAuthenticated) {
        if (isMounted) {
          setAvailableGyms([]);
          setSelectedGymState(null);
          setError(null);
          setLoading(false);
        }
        return;
      }

      if (!tenantId?.trim()) {
        if (isMounted) {
          setAvailableGyms([]);
          setSelectedGymState(null);
          setError('Usuário autenticado sem tenantId nas claims do Firebase.');
          setLoading(false);
        }
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await academiasService.buscarAcademia(tenantId);
        const storedGymId = localStorage.getItem(STORAGE_KEY);

        if (!isMounted) {
          return;
        }

        if (!result.success) {
          setAvailableGyms([]);
          setSelectedGymState(null);
          setError(result.error || 'Falha ao carregar a academia.');
          setLoading(false);
          return;
        }

        const loadedGym = result.data;
        const gyms = loadedGym ? [loadedGym] : [];
        setAvailableGyms(gyms);

        if (!loadedGym) {
          setSelectedGymState(null);
          localStorage.removeItem(STORAGE_KEY);
          setLoading(false);
          return;
        }

        if (storedGymId && storedGymId !== loadedGym.id) {
          localStorage.removeItem(STORAGE_KEY);
        }

        setSelectedGym(loadedGym);
        setLoading(false);
      } catch (loadError) {
        if (isMounted) {
          setAvailableGyms([]);
          setSelectedGymState(null);
          setError(loadError instanceof Error ? loadError.message : 'Falha ao carregar a academia.');
          setLoading(false);
        }
      }
    }

    void hydrateGym();

    return () => {
      isMounted = false;
    };
  }, [authLoading, isAuthenticated, setSelectedGym, tenantId]);

  return (
    <GymContext.Provider value={{ availableGyms, error, loading, selectedGym, setSelectedGym }}>
      {children}
    </GymContext.Provider>
  );
}

export function useGym() {
  const context = useContext(GymContext);

  if (!context) {
    throw new Error('useGym deve ser usado dentro de um GymProvider.');
  }

  return context;
}
