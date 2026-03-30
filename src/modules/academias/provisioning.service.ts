import type { ServiceResult } from '../core/types';
import type { IAcademiaProvisioningRepository } from './provisioning.repository';
import type { AcademiaProvisionResult, ProvisionarAcademiaInput } from './provisioning.types';

export interface IAcademiaProvisioningService {
  provisionarAcademia(input: ProvisionarAcademiaInput, isAdmin: boolean): Promise<ServiceResult<AcademiaProvisionResult>>;
}

export class AcademiaProvisioningServiceImpl implements IAcademiaProvisioningService {
  constructor(private repo: IAcademiaProvisioningRepository) {}

  async provisionarAcademia(
    input: ProvisionarAcademiaInput,
    isAdmin: boolean,
  ): Promise<ServiceResult<AcademiaProvisionResult>> {
    try {
      if (!isAdmin) {
        return { success: false, error: 'Apenas administradores podem provisionar academias.' };
      }

      if (!input.nome?.trim()) {
        return { success: false, error: 'O nome da academia é obrigatório.' };
      }

      if (!input.responsavelEmail?.trim()) {
        return { success: false, error: 'O email do administrador responsável é obrigatório.' };
      }

      const data = await this.repo.provisionarAcademia({
        nome: input.nome.trim(),
        plano: input.plano,
        responsavelEmail: input.responsavelEmail.trim(),
        responsavelNome: input.responsavelNome?.trim() || undefined,
      });

      return { success: true, data };
    } catch (error: any) {
      return {
        success: false,
        error: error?.message || 'Falha ao provisionar academia.',
      };
    }
  }
}

