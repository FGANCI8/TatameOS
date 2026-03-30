import { applicationDefault, cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { config as loadEnv } from 'dotenv';

loadEnv();

type Role = 'professor' | 'admin';

interface ParsedArgs {
  uid?: string;
  email?: string;
  role: Role;
}

function getArgValue(name: string): string | undefined {
  const prefix = `--${name}=`;
  const match = process.argv.slice(2).find((arg) => arg.startsWith(prefix));
  return match?.slice(prefix.length);
}

function parseArgs(): ParsedArgs {
  const role = (getArgValue('role') || 'professor') as Role;
  if (role !== 'professor' && role !== 'admin') {
    throw new Error('Role inválido. Use apenas "professor" ou "admin".');
  }

  return {
    uid: getArgValue('uid'),
    email: getArgValue('email'),
    role,
  };
}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Variável de ambiente obrigatória ausente: ${name}`);
  }
  return value;
}

function initAdminApp() {
  const projectId = requireEnv('FIREBASE_PROJECT_ID');
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;

  if (privateKey && clientEmail) {
    return initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey: privateKey.replace(/\\n/g, '\n'),
      }),
      projectId,
    });
  }

  return initializeApp({
    credential: applicationDefault(),
    projectId,
  });
}

async function resolveTargetUser(uid?: string, email?: string) {
  const auth = getAuth();

  if (!uid && !email) {
    throw new Error('Informe --uid=... ou --email=... para identificar o usuário.');
  }

  if (uid) {
    const user = await auth.getUser(uid);
    return user;
  }

  const user = await auth.getUserByEmail(email as string);
  return user;
}

async function main() {
  const { uid, email, role } = parseArgs();

  if (!getApps().length) {
    initAdminApp();
  }

  const auth = getAuth();
  const user = await resolveTargetUser(uid, email);
  await auth.setCustomUserClaims(user.uid, { role });
  await auth.revokeRefreshTokens(user.uid);

  const refreshedUser = await auth.getUser(user.uid);

  console.log(JSON.stringify({
    uid: refreshedUser.uid,
    email: refreshedUser.email ?? null,
    customClaims: refreshedUser.customClaims ?? null,
    revokedAt: new Date().toISOString(),
    nextStep: 'Faça sign out/sign in ou chame refreshClaims no app para ler o novo token.',
  }, null, 2));
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`Falha ao provisionar role: ${message}`);
  process.exitCode = 1;
});
