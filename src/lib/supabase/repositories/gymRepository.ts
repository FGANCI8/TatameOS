import { getSupabaseClient } from '../client';

export interface Academia {
  id: string;
  name: string;
  owner_id: string;
  created_at: string;
}

export class GymRepository {
  async getGymById(gym_id: string): Promise<Academia | null> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('gyms')
      .select('id, name, owner_id, created_at')
      .eq('id', gym_id)
      .maybeSingle();

    if (error) {
      throw new Error(`Falha ao buscar academia por ID: ${error.message}`);
    }

    return data as Academia | null;
  }

  async listGymsForOwner(owner_id: string): Promise<Academia[]> {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase
      .from('gyms')
      .select('id, name, owner_id, created_at')
      .eq('owner_id', owner_id)
      .order('created_at', { ascending: false });

    if (error) {
      throw new Error(`Falha ao listar academias do responsável: ${error.message}`);
    }

    return (data ?? []) as Academia[];
  }
}

export const gymRepository = new GymRepository();
