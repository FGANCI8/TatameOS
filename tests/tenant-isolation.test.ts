import { config as loadEnv } from 'dotenv';
import assert from 'node:assert/strict';
import { initializeApp, deleteApp, type FirebaseApp } from 'firebase/app';
import {
  connectAuthEmulator,
  getIdTokenResult,
  inMemoryPersistence,
  initializeAuth,
  signInWithEmailAndPassword,
  type Auth,
} from 'firebase/auth';
import {
  collection,
  connectFirestoreEmulator,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  updateDoc,
  where,
  type Firestore,
} from 'firebase/firestore';
import { getApps as getAdminApps, initializeApp as initializeAdminApp } from 'firebase-admin/app';
import { getAuth as getAdminAuth } from 'firebase-admin/auth';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';

loadEnv();

type ScenarioResult = {
  id: string;
  title: string;
  pass: boolean;
  detail: string;
};

type ClientSession = {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  uid: string;
  email: string;
  tenantId: string;
  role: string;
};

const PROJECT_ID =
  process.env.FIREBASE_PROJECT_ID ||
  process.env.VITE_FIREBASE_PROJECT_ID ||
  'jj-emulator';

const FIREBASE_API_KEY =
  process.env.VITE_FIREBASE_API_KEY ||
  process.env.FIREBASE_API_KEY ||
  'demo-api-key';

const AUTH_EMULATOR_HOST = process.env.FIREBASE_AUTH_EMULATOR_HOST || '127.0.0.1:9099';
const FIRESTORE_EMULATOR_HOST = process.env.FIRESTORE_EMULATOR_HOST || '127.0.0.1:8080';

process.env.FIREBASE_AUTH_EMULATOR_HOST = AUTH_EMULATOR_HOST;
process.env.FIRESTORE_EMULATOR_HOST = FIRESTORE_EMULATOR_HOST;

const AUTH_EMULATOR_URL = `http://${AUTH_EMULATOR_HOST}`;
const [firestoreHost, firestorePortRaw] = FIRESTORE_EMULATOR_HOST.split(':');
const FIRESTORE_EMULATOR_PORT = Number(firestorePortRaw || '8080');

function createClientApp(name: string) {
  return initializeApp(
    {
      apiKey: FIREBASE_API_KEY,
      authDomain: `${PROJECT_ID}.firebaseapp.com`,
      projectId: PROJECT_ID,
    },
    name,
  );
}

function createClientDb(app: FirebaseApp) {
  const db = getFirestore(app);
  connectFirestoreEmulator(db, firestoreHost, FIRESTORE_EMULATOR_PORT);
  return db;
}

function createClientAuth(app: FirebaseApp) {
  const auth = initializeAuth(app, { persistence: inMemoryPersistence });
  connectAuthEmulator(auth, AUTH_EMULATOR_URL, { disableWarnings: true });
  return auth;
}

function ensureAdminApp() {
  if (!getAdminApps().length) {
    initializeAdminApp({ projectId: PROJECT_ID });
  }
}

function requirePermissionDenied(error: unknown, context: string) {
  const code =
    typeof error === 'object' && error !== null && 'code' in error
      ? String((error as { code: unknown }).code)
      : '';
  const message = error instanceof Error ? error.message : String(error);

  const isDenied =
    code === 'permission-denied' ||
    message.includes('permission-denied') ||
    message.includes('Missing or insufficient permissions');

  assert.ok(isDenied, `${context} deveria falhar com Permission Denied, mas recebeu: ${message}`);
}

async function ensureUser(email: string, password: string, tenantId: string, role: 'aluno' | 'professor') {
  ensureAdminApp();
  const auth = getAdminAuth();

  let user;
  try {
    user = await auth.getUserByEmail(email);
    await auth.updateUser(user.uid, { password });
  } catch {
    user = await auth.createUser({ email, password, emailVerified: true });
  }

  await auth.setCustomUserClaims(user.uid, { tenantId, role });
  await auth.revokeRefreshTokens(user.uid);

  return user.uid;
}

async function seedData() {
  ensureAdminApp();
  const db = getAdminFirestore();

  const now = new Date();
  const later = new Date(now.getTime() + 60_000);

  const tenantA = 'tenant-a';
  const tenantB = 'tenant-b';

  const alunoA = await ensureUser('aluno-a@exemplo.com', 'Senha@123', tenantA, 'aluno');
  const alunoB = await ensureUser('aluno-b@exemplo.com', 'Senha@123', tenantA, 'aluno');
  const alunoC = await ensureUser('aluno-c@exemplo.com', 'Senha@123', tenantB, 'aluno');
  const professorA = await ensureUser('prof-a@exemplo.com', 'Senha@123', tenantA, 'professor');

  await db.collection('alunos').doc(alunoA).set({
    id: alunoA,
    tenantId: tenantA,
    nome: 'Aluno A',
    faixa: 'Azul',
    grau: 1,
    dataCadastro: now,
    horasTotais: 10.5,
    status: 'Ativo',
    email: 'aluno-a@exemplo.com',
  });

  await db.collection('alunos').doc(alunoB).set({
    id: alunoB,
    tenantId: tenantA,
    nome: 'Aluno B',
    faixa: 'Roxa',
    grau: 2,
    dataCadastro: now,
    horasTotais: 12,
    status: 'Ativo',
    email: 'aluno-b@exemplo.com',
  });

  await db.collection('alunos').doc(alunoC).set({
    id: alunoC,
    tenantId: tenantB,
    nome: 'Aluno C',
    faixa: 'Branca',
    grau: 0,
    dataCadastro: now,
    horasTotais: 6,
    status: 'Ativo',
    email: 'aluno-c@exemplo.com',
  });

  await db.collection('treinos').doc('treino-a1').set({
    id: 'treino-a1',
    tenantId: tenantA,
    alunoId: alunoA,
    tecnicaFoco: 'Passagem de guarda',
    dificuldade: 3,
    data: now,
    observacoes: 'Treino do aluno A no tenant A',
  });

  await db.collection('treinos').doc('treino-b1').set({
    id: 'treino-b1',
    tenantId: tenantA,
    alunoId: alunoB,
    tecnicaFoco: 'Finalizacao no monte',
    dificuldade: 4,
    data: now,
    observacoes: 'Treino do aluno B no tenant A',
  });

  await db.collection('treinos').doc('treino-c1').set({
    id: 'treino-c1',
    tenantId: tenantB,
    alunoId: alunoC,
    tecnicaFoco: 'Queda e controle',
    dificuldade: 2,
    data: now,
    observacoes: 'Treino do aluno C no tenant B',
  });

  await db.collection('feedbacks').doc('feedback-a1').set({
    id: 'feedback-a1',
    tenantId: tenantA,
    alunoId: alunoA,
    professorId: professorA,
    origemTipo: 'treino',
    origemId: 'treino-a1',
    titulo: 'Erro de base',
    descricao: 'Perdi estabilidade ao finalizar a passagem.',
    gravidade: 3,
    prioridade: 'media',
    status: 'aberto',
    createdAt: now,
    updatedAt: now,
  });

  await db.collection('feedbacks').doc('feedback-b1').set({
    id: 'feedback-b1',
    tenantId: tenantA,
    alunoId: alunoB,
    professorId: professorA,
    origemTipo: 'treino',
    origemId: 'treino-b1',
    titulo: 'Falha de postura',
    descricao: 'Ainda há queda de postura na entrada.',
    gravidade: 4,
    prioridade: 'alta',
    status: 'aberto',
    createdAt: now,
    updatedAt: now,
  });

  await db.collection('feedbacks').doc('feedback-c1').set({
    id: 'feedback-c1',
    tenantId: tenantB,
    alunoId: alunoC,
    professorId: professorA,
    origemTipo: 'treino',
    origemId: 'treino-c1',
    titulo: 'Erro de pegada',
    descricao: 'Pegada ainda fraca na entrada.',
    gravidade: 2,
    prioridade: 'baixa',
    status: 'aberto',
    createdAt: now,
    updatedAt: later,
  });

  return { tenantA, tenantB, alunoA, alunoB, alunoC, professorA };
}

async function createSession(label: string, email: string, password: string, tenantId: string, role: 'aluno' | 'professor') {
  const app = createClientApp(`tenant-isolation-${label}`);
  const auth = createClientAuth(app);
  const db = createClientDb(app);

  const credential = await signInWithEmailAndPassword(auth, email, password);
  const token = await getIdTokenResult(credential.user, true);

  assert.equal(token.claims.tenantId, tenantId, `tenantId do token de ${email} deveria ser ${tenantId}`);
  assert.equal(token.claims.role, role, `role do token de ${email} deveria ser ${role}`);

  return {
    app,
    auth,
    db,
    uid: credential.user.uid,
    email,
    tenantId,
    role,
  } satisfies ClientSession;
}

async function expectDenied(title: string, fn: () => Promise<unknown>) {
  try {
    await fn();
    return { pass: false, detail: 'Operação foi permitida quando deveria ser negada.' };
  } catch (error) {
    requirePermissionDenied(error, title);
    return { pass: true, detail: 'Permission denied confirmado.' };
  }
}

async function main() {
  const seed = await seedData();

  const alunoA = await createSession('aluno-a', 'aluno-a@exemplo.com', 'Senha@123', seed.tenantA, 'aluno');
  const professorA = await createSession('professor-a', 'prof-a@exemplo.com', 'Senha@123', seed.tenantA, 'professor');

  const results: ScenarioResult[] = [];

  results.push({
    id: 'MT-01',
    title: 'Aluno A tenta ler treino do Aluno B na mesma academia',
    ...(await expectDenied('MT-01 GET treino do Aluno B na mesma academia', () =>
      getDoc(doc(alunoA.db, 'treinos', 'treino-b1')),
    )),
  });

  results.push({
    id: 'MT-02',
    title: 'Aluno A tenta ler treino do Aluno C em outra academia',
    ...(await expectDenied('MT-02 GET treino da outra academia', () =>
      getDoc(doc(alunoA.db, 'treinos', 'treino-c1')),
    )),
  });

  results.push({
    id: 'MT-03',
    title: 'Aluno A tenta criar treino injetando tenantId da Academia B',
    ...(await expectDenied('MT-03 CREATE treino com tenantId adulterado', () =>
      setDoc(doc(alunoA.db, 'treinos', 'treino-attack-b'), {
        id: 'treino-attack-b',
        tenantId: seed.tenantB,
        alunoId: alunoA.uid,
        tecnicaFoco: 'Entrada falsa',
        dificuldade: 3,
        data: new Date(),
        observacoes: 'Tentativa de salto de tenant',
      }),
    )),
  });

  results.push({
    id: 'MT-04',
    title: 'Professor da Academia A tenta listar alunos da Academia B',
    ...(await expectDenied('MT-04 LIST alunos da Academia B', () =>
      getDocs(query(collection(professorA.db, 'alunos'), where('tenantId', '==', seed.tenantB))),
    )),
  });

  results.push({
    id: 'MT-05',
    title: 'Tentativa de update trocando tenantId original por outro tenant',
    ...(await expectDenied('MT-05 UPDATE com troca de tenantId', () =>
      updateDoc(doc(professorA.db, 'feedbacks', 'feedback-a1'), {
        tenantId: seed.tenantB,
        status: 'em_analise',
        updatedAt: new Date(),
      }),
    )),
  });

  console.log('\n=== RELATÓRIO DE ISOLAMENTO MULTI-TENANT ===');
  for (const result of results) {
    console.log(`${result.pass ? 'PASSA' : 'NÃO PASSA'} | ${result.id} | ${result.title} | ${result.detail}`);
  }

  const failed = results.filter((result) => !result.pass);
  if (failed.length > 0) {
    console.error(`\nFalhas detectadas: ${failed.length}`);
    process.exitCode = 1;
  } else {
    console.log('\nVeredito: isolamento cross-tenant íntegro.');
  }

  await Promise.all([
    deleteApp(alunoA.app),
    deleteApp(professorA.app),
  ]);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.stack || error.message : String(error);
  console.error(`Falha na execução dos testes de isolamento: ${message}`);
  process.exitCode = 1;
});
