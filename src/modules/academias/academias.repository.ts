import type { Academia, AcademiaSeedDocument } from './types';

export interface IAcademiasRepository {
  findByTenantId(tenantId: string): Promise<Academia | null>;
  provisionAcademia(academia: Academia, seeds: AcademiaSeedDocument[]): Promise<Academia>;
  rollbackAcademia(tenantId: string, seedIds: string[]): Promise<void>;
}

