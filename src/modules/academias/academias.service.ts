import type { ServiceResult } from '../core/types';
import type { ProvisionarAcademiaInput, ProvisionarAcademiaResult } from './types';

export interface IAcademiasService {
  provisionarAcademia(input: ProvisionarAcademiaInput): Promise<ServiceResult<ProvisionarAcademiaResult>>;
  buscarAcademia(tenantId: string): Promise<ServiceResult<ProvisionarAcademiaResult['academia'] | null>>;
}

