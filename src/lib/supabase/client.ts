import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { readOptionalEnv } from '../env';

declare const process: {
  env: {
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  };
};

let supabaseClient: SupabaseClient | null = null;

function resolveSupabaseConfig() {
  const supabaseUrl = readOptionalEnv('NEXT_PUBLIC_SUPABASE_URL', process.env.NEXT_PUBLIC_SUPABASE_URL);
  const supabaseAnonKey = readOptionalEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  if (!supabaseUrl || !supabaseAnonKey) {
    return null;
  }

  return { supabaseUrl, supabaseAnonKey };
}

export function isSupabaseConfigured(): boolean {
  return Boolean(resolveSupabaseConfig());
}

export function getSupabaseClient(): SupabaseClient {
  const config = resolveSupabaseConfig();

  if (!config) {
    throw new Error(
      'Supabase não está configurado neste ambiente. Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY antes de usar esse caminho legado.',
    );
  }

  if (!supabaseClient) {
    supabaseClient = createClient(config.supabaseUrl, config.supabaseAnonKey);
  }

  return supabaseClient;
}
