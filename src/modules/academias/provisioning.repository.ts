import { httpsCallable } from 'firebase/functions';
import { functions } from '../../lib/firebase/client';
import type { ProvisionarAcademiaInput, AcademiaProvisionResult } from './provisioning.types';

export interface IAcademiaProvisioningRepository {
  provisionarAcademia(input: ProvisionarAcademiaInput): Promise<AcademiaProvisionResult>;
}

export class AcademiaProvisioningRepositoryFirebase implements IAcademiaProvisioningRepository {
  async provisionarAcademia(input: ProvisionarAcademiaInput): Promise<AcademiaProvisionResult> {
    const callable = httpsCallable(functions, 'provisionAcademia');
    const response = await callable(input);
    return response.data as AcademiaProvisionResult;
  }
}

