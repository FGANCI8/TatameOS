import { adminAuth } from '../src/lib/firebase/admin';
import { AcademiasRepositoryFirestore } from '../src/modules/academias/repositories/academiasRepositoryFirestore';
import { AcademiasServiceImpl } from '../src/modules/academias/services/academiasServiceImpl';
import type { AcademiaPlano, AcademiaResponsavelRole } from '../src/modules/academias/types';

type ParsedArgs = {
  nome?: string;
  plano: AcademiaPlano;
  responsavelUid?: string;
  responsavelEmail?: string;
  responsavelNome?: string;
  responsavelRole: AcademiaResponsavelRole;
};

function getArgValue(name: string): string | undefined {
  const prefix = `--${name}=`;
  const match = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return match?.slice(prefix.length);
}

function parseArgs(): ParsedArgs {
  const plano = (getArgValue('plano') || 'starter') as AcademiaPlano;
  const responsavelRole = (getArgValue('responsavelRole') || 'admin') as AcademiaResponsavelRole;

  return {
    nome: getArgValue('nome'),
    plano,
    responsavelUid: getArgValue('responsavelUid'),
    responsavelEmail: getArgValue('responsavelEmail'),
    responsavelNome: getArgValue('responsavelNome'),
    responsavelRole,
  };
}

async function resolveResponsavel(uid?: string, email?: string) {
  if (!uid && !email) {
    throw new Error('Informe --responsavelUid=... ou --responsavelEmail=... para identificar o responsável.');
  }

  if (uid) {
    return adminAuth.getUser(uid);
  }

  return adminAuth.getUserByEmail(email as string);
}

async function main() {
  const { nome, plano, responsavelUid, responsavelEmail, responsavelNome, responsavelRole } = parseArgs();
  const repo = new AcademiasRepositoryFirestore();
  const service = new AcademiasServiceImpl(repo);

  if (!nome?.trim()) {
    throw new Error('Informe --nome=... para a academia.');
  }

  const responsavel = await resolveResponsavel(responsavelUid, responsavelEmail);
  const result = await service.provisionarAcademia({
    nome,
    plano,
    responsavelUid: responsavel.uid,
    responsavelEmail: responsavel.email || responsavelEmail || '',
    responsavelNome: responsavelNome || responsavel.displayName || undefined,
    responsavelRole,
  });

  if (!result.success || !result.data) {
    throw new Error(result.error || 'Falha ao provisionar academia.');
  }

  console.log(JSON.stringify({
    success: true,
    tenantId: result.data.tenantId,
    academia: result.data.academia,
    seeds: result.data.seeds.map((seed) => ({
      id: seed.id,
      kind: seed.kind,
      title: seed.title,
      items: seed.items.length,
    })),
    responsavel: {
      uid: result.data.responsavelUid,
      email: result.data.responsavelEmail,
      role: result.data.responsavelRole,
    },
  }, null, 2));
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Falha ao provisionar academia: ${message}`);
  process.exitCode = 1;
});
