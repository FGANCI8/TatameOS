import type { Academia } from '../lib/supabase/repositories/gymRepository';
import { gymRepository, type GymRepository } from '../lib/supabase/repositories/gymRepository';

export class GymService {
  constructor(private readonly repository: GymRepository) {}

  private isValidId(value: string): boolean {
    return typeof value === 'string' && value.trim().length > 0;
  }

  async getGymDetails(id: string): Promise<Academia | null> {
    const gymId = id.trim();

    if (!this.isValidId(gymId)) {
      throw new Error('ID da academia inválido.');
    }

    return this.repository.getGymById(gymId);
  }

  async getUserGyms(ownerId: string): Promise<Academia[]> {
    const normalizedOwnerId = ownerId.trim();

    if (!this.isValidId(normalizedOwnerId)) {
      throw new Error('ID do usuário inválido.');
    }

    return this.repository.listGymsForOwner(normalizedOwnerId);
  }
}

export const gymService = new GymService(gymRepository);
