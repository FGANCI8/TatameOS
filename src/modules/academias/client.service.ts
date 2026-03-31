import type { ServiceResult } from '../core/types';
import type { IAcademiasClientRepository } from './client.repository';
import type { Academia } from './types';

export interface IAcademiasClientService {
  buscarAcademia(tenantId: string | null): Promise<ServiceResult<Academia | null>>;
}

export class AcademiasClientServiceImpl implements IAcademiasClientService {
  constructor(private readonly repository: IAcademiasClientRepository) {}

  async buscarAcademia(tenantId: string | null): Promise<ServiceResult<Academia | null>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente no contexto autenticado.' };
      }

      const academia = await this.repository.findByTenantId(tenantId);
      return { success: true, data: academia };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao carregar a academia.' };
    }
  }
}
