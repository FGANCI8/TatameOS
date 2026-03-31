import { createClient } from '@supabase/supabase-js';

declare const process: {
  env: {
    NEXT_PUBLIC_SUPABASE_URL?: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  };
};

function requireEnv(name: string, value: string | undefined): string {
  const trimmed = value?.trim();

  if (!trimmed) {
    throw new Error(`Variável obrigatória ausente: ${name}.`);
  }

  const normalized = trimmed.toLowerCase();
  if (normalized.startsWith('sua_') || normalized.includes('placeholder') || normalized.startsWith('dummy')) {
    throw new Error(`Variável ${name} contém placeholder e não pode ser usada como config válida.`);
  }

  return trimmed;
}

const supabaseUrl = requireEnv('NEXT_PUBLIC_SUPABASE_URL', process.env.NEXT_PUBLIC_SUPABASE_URL);
const supabaseAnonKey = requireEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
