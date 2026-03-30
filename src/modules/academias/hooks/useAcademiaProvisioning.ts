import { useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { academiaProvisioningService } from '../../instances';
import type { AcademiaProvisionResult, ProvisionarAcademiaInput } from '../provisioning.types';

export function useAcademiaProvisioning() {
  const { isAdmin } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<AcademiaProvisionResult | null>(null);

  const provisionarAcademia = async (input: ProvisionarAcademiaInput) => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await academiaProvisioningService.provisionarAcademia(input, isAdmin);

      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao provisionar academia.');
        return result;
      }

      setSuccess(result.data);
      return result;
    } catch (error: any) {
      const message = error?.message || 'Falha ao provisionar academia.';
      setError(message);
      return { success: false, error: message };
    } finally {
      setLoading(false);
    }
  };

  return {
    isAdmin,
    loading,
    error,
    success,
    provisionarAcademia,
  };
}
