import { randomUUID } from 'node:crypto';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore, Timestamp } from 'firebase-admin/firestore';
import { onCall, HttpsError } from 'firebase-functions/v2/https';
import { onDocumentUpdated } from 'firebase-functions/v2/firestore';
import { adminDb } from './lib/firebase-admin';
import { ConvitesRepositoryFirestore } from './modules/convites/repository';
import { buildInviteEmailPayload, buildMilestoneEmailPayload, createEmailService } from './modules/convites/email.service';
import { ConvitesServiceFirestore } from './modules/convites/service';

type AcademiaPlano = 'starter' | 'pro' | 'enterprise';
type ResponsavelRole = 'admin' | 'professor';

interface ProvisionAcademiaInput {
  nome: string;
  plano: AcademiaPlano;
  responsavelEmail: string;
  responsavelNome?: string;
  responsavelRole?: ResponsavelRole;
}

interface InviteStudentInput {
  nome: string;
  email: string;
}

type BroadcastAvisoInput = {
  tenantId: string;
  professorId: string;
  titulo: string;
  mensagem: string;
  tipo?: 'info' | 'alerta';
};

interface SeedItem {
  id: string;
  tenantId: string;
  kind: 'faixas' | 'categorias_falhas' | 'tecnicas_iniciais';
  title: string;
  items: string[];
  createdAt: Date;
  updatedAt: Date;
}

interface AlunoMilestoneDocument {
  tenantId?: string;
  nome?: string;
  email?: string;
  horasTotais?: number;
  status?: string;
  faixa?: string;
  grau?: number;
  milestoneNotifiedHours?: number[];
}

interface AcademyContext {
  professorId: string;
  academyName: string;
  professorEmail: string;
  professorName: string;
}

interface ActiveStudentDoc {
  id: string;
  tenantId?: string;
  nome?: string;
  email?: string;
}

const FAIXAS_PADRAO = ['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta'];
const MILESTONE_HOURS = 40;
const CATEGORIAS_FALHAS = [
  'Defesa de Queda',
  'Retencao de Guarda',
  'Defesa de Finalizacao',
  'Posicionamento',
  'Gas',
  'Mental',
];
const TECNICAS_INICIAIS = [
  'Passagem de Guarda',
  'Retencao de Guarda',
  'Raspagem',
  'Montada',
  'Controle de Costas',
  'Kimura',
  'Triangulo',
  'Chave de Braco',
];

function initAdminApp() {
  if (getApps().length) {
    return;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error('Credenciais administrativas ausentes para inicializar o Firebase Admin SDK.');
  }

  initializeApp({
    credential: cert({
      projectId,
      clientEmail,
      privateKey,
    }),
  });
}

function validateInput(data: Partial<ProvisionAcademiaInput>): asserts data is ProvisionAcademiaInput {
  if (!data.nome?.trim()) {
    throw new HttpsError('invalid-argument', 'O nome da academia é obrigatório.');
  }

  if (!data.responsavelEmail?.trim()) {
    throw new HttpsError('invalid-argument', 'O email do administrador responsável é obrigatório.');
  }

  if (!data.plano || !['starter', 'pro', 'enterprise'].includes(data.plano)) {
    throw new HttpsError('invalid-argument', 'Plano inválido.');
  }

  if (data.responsavelRole && !['admin', 'professor'].includes(data.responsavelRole)) {
    throw new HttpsError('invalid-argument', 'Role do responsável inválida.');
  }
}

function createSeeds(tenantId: string): SeedItem[] {
  const now = new Date();

  return [
    {
      id: 'faixas-padrao',
      tenantId,
      kind: 'faixas',
      title: 'Faixas padrão',
      items: FAIXAS_PADRAO,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'categorias-falhas',
      tenantId,
      kind: 'categorias_falhas',
      title: 'Categorias de falhas',
      items: CATEGORIAS_FALHAS,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'tecnicas-iniciais',
      tenantId,
      kind: 'tecnicas_iniciais',
      title: 'Técnicas iniciais',
      items: TECNICAS_INICIAIS,
      createdAt: now,
      updatedAt: now,
    },
  ];
}

function createAcademiaDoc(tenantId: string, input: ProvisionAcademiaInput) {
  const now = new Date();
  return {
    id: tenantId,
    tenantId,
    nome: input.nome.trim(),
    plano: input.plano,
    status: 'pendente',
    dataAtivacao: Timestamp.fromDate(now),
    administradorResponsavelId: input.responsavelEmail.toLowerCase(),
    administradorResponsavelEmail: input.responsavelEmail.toLowerCase(),
    administradorResponsavelNome: input.responsavelNome?.trim() || undefined,
    seedVersion: 1,
    seedApplied: true,
    createdAt: Timestamp.fromDate(now),
    updatedAt: Timestamp.fromDate(now),
  };
}

async function getAcademyNameByTenantId(db = getFirestore(), tenantId: string): Promise<string> {
  const snap = await db.collection('academias').doc(tenantId).get();
  if (!snap.exists) {
    throw new HttpsError('not-found', 'Academia não encontrada para o tenant autenticado.');
  }

  const data = snap.data() as { nome?: string };
  return data.nome?.trim() || 'Academia';
}

async function getAcademyContext(tenantId: string): Promise<AcademyContext> {
  const snap = await adminDb.collection('academias').doc(tenantId).get();
  if (!snap.exists) {
    throw new HttpsError('not-found', 'Academia não encontrada para o tenant informado.');
  }

  const data = snap.data() as {
    nome?: string;
    administradorResponsavelId?: string;
    administradorResponsavelEmail?: string;
    administradorResponsavelNome?: string;
  };

  const academyName = data.nome?.trim() || 'Academia';
  const professorId = data.administradorResponsavelId?.trim() || '';
  const professorEmail = data.administradorResponsavelEmail?.trim() || '';
  const professorName = data.administradorResponsavelNome?.trim() || professorEmail || 'Professor(a)';

  if (!professorId || !professorEmail) {
    throw new HttpsError('failed-precondition', 'Responsável da academia não configurado.');
  }

  return {
    professorId,
    academyName,
    professorEmail,
    professorName,
  };
}

async function getActiveStudentsByTenant(tenantId: string): Promise<ActiveStudentDoc[]> {
  const snap = await adminDb.collection('alunos')
    .where('tenantId', '==', tenantId)
    .where('status', '==', 'Ativo')
    .get();

  return snap.docs.map((docSnap) => {
    const data = docSnap.data() as ActiveStudentDoc;
    const { id: _ignored, ...rest } = data;
    return {
      ...rest,
      id: docSnap.id,
    };
  });
}

function chunkArray<T>(items: T[], size: number): T[][] {
  if (size <= 0) {
    return [items];
  }

  const chunks: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function getCrossedMilestones(previousHours: number, currentHours: number, alreadyNotifiedHours: number[]): number[] {
  const previousMilestone = Math.floor(Math.max(0, previousHours) / MILESTONE_HOURS);
  const currentMilestone = Math.floor(Math.max(0, currentHours) / MILESTONE_HOURS);
  const notifiedSet = new Set(alreadyNotifiedHours);
  const milestones: number[] = [];

  for (let milestoneIndex = previousMilestone + 1; milestoneIndex <= currentMilestone; milestoneIndex += 1) {
    const milestoneHours = milestoneIndex * MILESTONE_HOURS;
    if (!notifiedSet.has(milestoneHours)) {
      milestones.push(milestoneHours);
    }
  }

  return milestones;
}

async function markMilestoneAsNotified(alunoId: string, milestoneHours: number) {
  await adminDb.collection('alunos').doc(alunoId).update({
    milestoneNotifiedHours: FieldValue.arrayUnion(milestoneHours),
    lastMilestoneNotifiedHours: milestoneHours,
    updatedAt: Timestamp.now(),
  });
}

async function createInAppNotification(input: {
  tenantId: string;
  destinatarioId: string;
  titulo: string;
  mensagem: string;
  tipo: 'info' | 'sucesso' | 'alerta';
  idSeed: string;
}): Promise<void> {
  const notificationId = `${input.tenantId}-${input.destinatarioId}-${input.idSeed}`;

  try {
    await adminDb.collection('notificacoes').doc(notificationId).create({
      tenantId: input.tenantId,
      destinatarioId: input.destinatarioId,
      titulo: input.titulo,
      mensagem: input.mensagem,
      tipo: input.tipo,
      lida: false,
      createdAt: Timestamp.now(),
    });
  } catch (error: any) {
    const code = error?.code;
    if (code === 6 || code === 'already-exists') {
      return;
    }

    throw error;
  }
}

async function broadcastAvisoGeralInternal(input: BroadcastAvisoInput) {
  const tenantId = String(input.tenantId || '').trim();
  const professorId = String(input.professorId || '').trim();
  const titulo = String(input.titulo || '').trim();
  const mensagem = String(input.mensagem || '').trim();
  const tipo = input.tipo === 'alerta' ? 'alerta' : 'info';

  if (!tenantId || !professorId || !titulo || !mensagem) {
    throw new HttpsError('invalid-argument', 'Campos obrigatórios ausentes para o aviso geral.');
  }

  const { academyName } = await getAcademyContext(tenantId);
  const avisoId = randomUUID();
  const activeStudents = await getActiveStudentsByTenant(tenantId);
  const batches = chunkArray(activeStudents, 500);
  const createdAt = Timestamp.now();

  for (const batchStudents of batches) {
    const batch = adminDb.batch();

    batchStudents.forEach((student) => {
      const notificationId = `${avisoId}-${student.id}`;
      const notificationRef = adminDb.collection('notificacoes').doc(notificationId);
      batch.set(notificationRef, {
        id: notificationId,
        tenantId,
        destinatarioId: student.id,
        titulo,
        mensagem,
        tipo,
        lida: false,
        createdAt,
        origemTipo: 'broadcast',
        origemId: avisoId,
      });
    });

    await batch.commit();
  }

  await adminDb.collection('avisos').doc(avisoId).set({
    id: avisoId,
    tenantId,
    professorId,
    titulo,
    mensagem,
    tipo,
    destinatariosCount: activeStudents.length,
    academyName,
    createdAt,
    updatedAt: createdAt,
  });

  return {
    avisoId,
    avisosCriados: activeStudents.length,
  };
}

export const provisionAcademia = onCall(async (request) => {
  if (!request.auth || request.auth.token.role !== 'admin') {
    throw new HttpsError('permission-denied', 'Apenas administradores podem provisionar academias.');
  }

  initAdminApp();
  validateInput(request.data as Partial<ProvisionAcademiaInput>);

  const db = getFirestore();
  const emailService = createEmailService();
  const { nome, plano, responsavelEmail, responsavelNome, responsavelRole = 'admin' } = request.data as ProvisionAcademiaInput;

  const tenantId = randomUUID();
  const seeds = createSeeds(tenantId);
  const academiaDoc = createAcademiaDoc(tenantId, { nome, plano, responsavelEmail, responsavelNome, responsavelRole });
  const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000);
  const inviteToken = randomUUID();
  const inviteUrl = `${process.env.APP_URL}/ativar-conta?token=${encodeURIComponent(inviteToken)}`;
  const academiaRef = db.collection('academias').doc(tenantId);
  const inviteRef = db.collection('convites').doc(inviteToken);

  const batch = db.batch();
  batch.set(academiaRef, academiaDoc);
  for (const seed of seeds) {
    batch.set(academiaRef.collection('seed').doc(seed.id), {
      ...seed,
      createdAt: Timestamp.fromDate(seed.createdAt),
      updatedAt: Timestamp.fromDate(seed.updatedAt),
    });
  }
  batch.set(inviteRef, {
    id: inviteToken,
    token: inviteToken,
    email: responsavelEmail.toLowerCase(),
    tenantId,
    role: responsavelRole,
    academyName: nome.trim(),
    expiresAt: Timestamp.fromDate(expiresAt),
    status: 'pendente',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });

  await batch.commit();

  try {
    await emailService.sendInviteEmail(
      buildInviteEmailPayload({
        to: responsavelEmail,
        academyName: nome.trim(),
        inviteUrl,
      }),
    );
  } catch (emailError) {
    const rollback = db.batch();
    rollback.delete(academiaRef);
    rollback.delete(inviteRef);
    for (const seed of seeds) {
      rollback.delete(academiaRef.collection('seed').doc(seed.id));
    }
    await rollback.commit();
    throw new HttpsError('internal', 'Falha ao enviar o e-mail de convite.', emailError as Record<string, unknown>);
  }

  return {
    tenantId,
    convite: {
      email: responsavelEmail.toLowerCase(),
      expiresAt: expiresAt.toISOString(),
      status: 'pendente',
    },
    academia: {
      ...academiaDoc,
      dataAtivacao: academiaDoc.dataAtivacao.toDate().toISOString(),
      createdAt: academiaDoc.createdAt.toDate().toISOString(),
      updatedAt: academiaDoc.updatedAt.toDate().toISOString(),
    },
    seeds: seeds.map((seed) => ({
      id: seed.id,
      kind: seed.kind,
      title: seed.title,
      itemsCount: seed.items.length,
    })),
    responsavel: {
      uid: null,
      email: responsavelEmail.toLowerCase(),
      role: responsavelRole,
    },
    conviteEnviado: true,
  };
});

export const validateInvite = onCall(async (request) => {
  initAdminApp();
  const token = String(request.data?.token || '').trim();
  if (!token) {
    throw new HttpsError('invalid-argument', 'Token de convite é obrigatório.');
  }

  const repo = new ConvitesRepositoryFirestore();
  const convite = await repo.buscarPorToken(token);
  if (!convite) {
    return { valid: false };
  }

  return repo.toValidarResult(convite);
});

export const inviteStudent = onCall(async (request) => {
  initAdminApp();

  if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
    throw new HttpsError('permission-denied', 'Apenas professor ou admin podem convidar alunos.');
  }

  const tenantId = String(request.auth.token.tenantId || '').trim();
  if (!tenantId) {
    throw new HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
  }

  const data = request.data as Partial<InviteStudentInput>;
  if (!data.nome?.trim()) {
    throw new HttpsError('invalid-argument', 'O nome do aluno é obrigatório.');
  }

  if (!data.email?.trim()) {
    throw new HttpsError('invalid-argument', 'O e-mail do aluno é obrigatório.');
  }

  const db = getFirestore();
  const repo = new ConvitesRepositoryFirestore();
  const service = new ConvitesServiceFirestore(repo, createEmailService());
  const academyName = await getAcademyNameByTenantId(db, tenantId);

  const convite = await service.criarConvite({
    email: data.email.trim().toLowerCase(),
    inviteeName: data.nome.trim(),
    tenantId,
    role: 'aluno',
    academyName,
    expiresAt: new Date(Date.now() + 48 * 60 * 60 * 1000),
  });

  return {
    convite: {
      id: convite.id,
      token: convite.token,
      email: convite.email,
      inviteeName: convite.inviteeName,
      tenantId: convite.tenantId,
      role: convite.role,
      academyName: convite.academyName,
      expiresAt: convite.expiresAt.toISOString(),
      status: convite.status,
      createdAt: convite.createdAt.toISOString(),
      updatedAt: convite.updatedAt.toISOString(),
    },
  };
});

export const listInvites = onCall(async (request) => {
  initAdminApp();

  if (!request.auth || request.auth.token.role !== 'admin') {
    throw new HttpsError('permission-denied', 'Apenas administradores podem listar convites.');
  }

  const repo = new ConvitesRepositoryFirestore();
  const service = new ConvitesServiceFirestore(repo);
  return service.listarConvites();
});

export const listStudentInvites = onCall(async (request) => {
  initAdminApp();

  if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
    throw new HttpsError('permission-denied', 'Apenas professor ou admin podem listar convites de alunos.');
  }

  const tenantId = String(request.auth.token.tenantId || '').trim();
  if (!tenantId) {
    throw new HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
  }

  const repo = new ConvitesRepositoryFirestore();
  const service = new ConvitesServiceFirestore(repo);
  return service.listarConvitesEstudantes(tenantId);
});

export const resendInvite = onCall(async (request) => {
  initAdminApp();

  if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
    throw new HttpsError('permission-denied', 'Apenas professor ou admin podem reenviar convites.');
  }

  const token = String(request.data?.token || '').trim();
  if (!token) {
    throw new HttpsError('invalid-argument', 'Token de convite é obrigatório.');
  }

  const tenantId = String(request.auth.token.tenantId || '').trim();
  if (!tenantId && request.auth.token.role !== 'admin') {
    throw new HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
  }

  const repo = new ConvitesRepositoryFirestore();
  const service = new ConvitesServiceFirestore(repo);
  if (request.auth.token.role === 'admin') {
    return service.reenviarConvite(token);
  }

  return service.reenviarConviteEscopo(token, tenantId, true);
});

export const revokeInvite = onCall(async (request) => {
  initAdminApp();

  if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
    throw new HttpsError('permission-denied', 'Apenas professor ou admin podem revogar convites.');
  }

  const token = String(request.data?.token || '').trim();
  if (!token) {
    throw new HttpsError('invalid-argument', 'Token de convite é obrigatório.');
  }

  const tenantId = String(request.auth.token.tenantId || '').trim();
  if (!tenantId && request.auth.token.role !== 'admin') {
    throw new HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
  }

  const repo = new ConvitesRepositoryFirestore();
  const service = new ConvitesServiceFirestore(repo);
  if (request.auth.token.role === 'admin') {
    return service.revogarConvite(token);
  }

  return service.revogarConviteEscopo(token, tenantId, true);
});

export const broadcastAvisoGeral = onCall(async (request) => {
  initAdminApp();

  if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
    throw new HttpsError('permission-denied', 'Apenas professor ou admin podem enviar avisos.');
  }

  const tenantId = String(request.auth.token.tenantId || '').trim();
  if (!tenantId) {
    throw new HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
  }

  const professorId = String(request.data?.professorId || request.auth.uid || '').trim();
  if (professorId !== request.auth.uid && request.auth.token.role !== 'admin') {
    throw new HttpsError('permission-denied', 'Professor não autorizado para esse remetente.');
  }

  const result = await broadcastAvisoGeralInternal({
    tenantId,
    professorId,
    titulo: String(request.data?.titulo || ''),
    mensagem: String(request.data?.mensagem || ''),
    tipo: request.data?.tipo === 'alerta' ? 'alerta' : 'info',
  });

  return result;
});

export const activateInvite = onCall(async (request) => {
  initAdminApp();

  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'Faça login para ativar sua conta.');
  }

  const token = String(request.data?.token || '').trim();
  if (!token) {
    throw new HttpsError('invalid-argument', 'Token de convite é obrigatório.');
  }

  const repo = new ConvitesRepositoryFirestore();
  const service = new ConvitesServiceFirestore(repo);
  return service.ativarConvite(token, request.auth.uid);
});

export const onAlunoMilestoneReached = onDocumentUpdated('alunos/{alunoId}', async (event) => {
  initAdminApp();

  const before = event.data?.before.data() as AlunoMilestoneDocument | undefined;
  const after = event.data?.after.data() as AlunoMilestoneDocument | undefined;

  if (!before || !after) {
    return;
  }

  const previousHours = Number(before.horasTotais || 0);
  const currentHours = Number(after.horasTotais || 0);

  if (currentHours <= previousHours) {
    return;
  }

  const tenantId = String(after.tenantId || before.tenantId || '').trim();
  if (!tenantId) {
    return;
  }

  const alreadyNotifiedHours = Array.isArray(after.milestoneNotifiedHours)
    ? after.milestoneNotifiedHours.map((value) => Number(value)).filter((value) => Number.isFinite(value) && value > 0)
    : [];

  const milestones = getCrossedMilestones(previousHours, currentHours, alreadyNotifiedHours);
  if (milestones.length === 0) {
    return;
  }

  const { academyName, professorId, professorEmail, professorName } = await getAcademyContext(tenantId);
  const emailService = createEmailService();
  const alunoNome = after.nome?.trim() || 'Aluno';
  const alunoEmail = after.email?.trim() || '';

  for (const milestoneHours of milestones) {
    if (alunoEmail) {
      await emailService.sendMilestoneEmail(
        buildMilestoneEmailPayload({
          to: alunoEmail,
          recipientName: alunoNome,
          studentName: alunoNome,
          academyName,
          milestoneHours,
          isProfessor: false,
        }),
      );
    }

    await emailService.sendMilestoneEmail(
      buildMilestoneEmailPayload({
        to: professorEmail,
        recipientName: professorName,
        studentName: alunoNome,
        academyName,
        milestoneHours,
        isProfessor: true,
      }),
    );

    await createInAppNotification({
      tenantId,
      destinatarioId: event.params.alunoId,
      titulo: `Parabéns! Você atingiu ${milestoneHours}h`,
      mensagem: `Você atingiu ${milestoneHours} horas de treino na academia ${academyName}. Continue focado para alcançar o próximo grau.`,
      tipo: 'sucesso',
      idSeed: `aluno-${milestoneHours}`,
    });

    await createInAppNotification({
      tenantId,
      destinatarioId: professorId,
      titulo: `Aluno pronto para promoção`,
      mensagem: `O aluno ${alunoNome} atingiu ${milestoneHours} horas de prontidão na academia ${academyName} e entrou na fila de promoção.`,
      tipo: 'alerta',
      idSeed: `professor-${event.params.alunoId}-${milestoneHours}`,
    });

    await markMilestoneAsNotified(event.params.alunoId, milestoneHours);
  }
});
