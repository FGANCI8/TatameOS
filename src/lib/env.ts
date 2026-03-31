function normalizeEnvValue(value: string | undefined): string | null {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

function isPlaceholderValue(value: string): boolean {
  const normalized = value.toLowerCase();
  return (
    normalized.startsWith('dummy') ||
    normalized.includes('placeholder') ||
    normalized.startsWith('sua_') ||
    normalized.startsWith('seu_')
  );
}

export function readRequiredEnv(name: string, value: string | undefined): string {
  const normalized = normalizeEnvValue(value);

  if (!normalized) {
    throw new Error(`Variável obrigatória ausente: ${name}.`);
  }

  if (isPlaceholderValue(normalized)) {
    throw new Error(`Variável ${name} contém placeholder e não pode ser usada como config válida.`);
  }

  return normalized;
}

export function readOptionalEnv(name: string, value: string | undefined): string | undefined {
  const normalized = normalizeEnvValue(value);

  if (!normalized) {
    return undefined;
  }

  if (isPlaceholderValue(normalized)) {
    throw new Error(`Variável ${name} contém placeholder e não pode ser usada como config válida.`);
  }

  return normalized;
}
