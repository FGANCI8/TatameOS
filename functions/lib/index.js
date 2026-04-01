"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarSnapshotsMensaisAgendado = exports.onAlunoMilestoneReached = exports.activateInvite = exports.broadcastAvisoGeral = exports.revokeInvite = exports.resendInvite = exports.listStudentInvites = exports.listInvites = exports.inviteStudent = exports.validateInvite = exports.generateVisualExperienceImage = exports.provisionAcademia = void 0;
const node_crypto_1 = require("node:crypto");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const https_1 = require("firebase-functions/v2/https");
const firestore_2 = require("firebase-functions/v2/firestore");
const scheduler_1 = require("firebase-functions/v2/scheduler");
const firebase_admin_1 = require("./lib/firebase-admin");
const repository_1 = require("./modules/convites/repository");
const email_service_1 = require("./modules/convites/email.service");
const service_1 = require("./modules/convites/service");
const runner_1 = require("./modules/snapshots-mensais/runner");
const image_generation_service_1 = require("./services/visual-experience/image-generation.service");
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
const callableCooldowns = new Map();
const visualImageService = new image_generation_service_1.ImageGenerationService();
function isPlaceholderValue(value) {
    const normalized = value.toLowerCase();
    return (normalized.startsWith('dummy') ||
        normalized.includes('placeholder') ||
        normalized.startsWith('sua_') ||
        normalized.startsWith('seu_'));
}
function readRequiredServerEnv(name, value) {
    const normalized = value?.trim();
    if (!normalized) {
        throw new Error(`Variável obrigatória ausente: ${name}.`);
    }
    if (isPlaceholderValue(normalized)) {
        throw new Error(`Variável ${name} contém placeholder e não pode ser usada como configuração válida.`);
    }
    return normalized;
}
function assertCallableCooldown(scope, key, cooldownMs) {
    const cacheKey = `${scope}:${key}`;
    const now = Date.now();
    const lastRun = callableCooldowns.get(cacheKey);
    if (typeof lastRun === 'number' && now - lastRun < cooldownMs) {
        throw new https_1.HttpsError('resource-exhausted', 'Aguarde alguns segundos antes de repetir esta ação.');
    }
    callableCooldowns.set(cacheKey, now);
}
function initAdminApp() {
    if ((0, app_1.getApps)().length) {
        return;
    }
    const projectId = readRequiredServerEnv('FIREBASE_PROJECT_ID', process.env.FIREBASE_PROJECT_ID);
    const clientEmail = readRequiredServerEnv('FIREBASE_CLIENT_EMAIL', process.env.FIREBASE_CLIENT_EMAIL);
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    if (!projectId || !clientEmail || !privateKey) {
        throw new Error('Credenciais administrativas ausentes para inicializar o Firebase Admin SDK.');
    }
    (0, app_1.initializeApp)({
        credential: (0, app_1.cert)({
            projectId,
            clientEmail,
            privateKey,
        }),
    });
}
function validateInput(data) {
    if (!data.nome?.trim()) {
        throw new https_1.HttpsError('invalid-argument', 'O nome da academia é obrigatório.');
    }
    if (!data.responsavelEmail?.trim()) {
        throw new https_1.HttpsError('invalid-argument', 'O email do administrador responsável é obrigatório.');
    }
    if (!data.plano || !['starter', 'pro', 'enterprise'].includes(data.plano)) {
        throw new https_1.HttpsError('invalid-argument', 'Plano inválido.');
    }
    if (data.responsavelRole && !['admin', 'professor'].includes(data.responsavelRole)) {
        throw new https_1.HttpsError('invalid-argument', 'Role do responsável inválida.');
    }
}
function createSeeds(tenantId) {
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
function createAcademiaDoc(tenantId, input) {
    const now = new Date();
    return {
        id: tenantId,
        tenantId,
        nome: input.nome.trim(),
        plano: input.plano,
        status: 'pendente',
        dataAtivacao: firestore_1.Timestamp.fromDate(now),
        administradorResponsavelId: input.responsavelEmail.toLowerCase(),
        administradorResponsavelEmail: input.responsavelEmail.toLowerCase(),
        administradorResponsavelNome: input.responsavelNome?.trim() || undefined,
        seedVersion: 1,
        seedApplied: true,
        createdAt: firestore_1.Timestamp.fromDate(now),
        updatedAt: firestore_1.Timestamp.fromDate(now),
    };
}
async function getAcademyNameByTenantId(db = (0, firestore_1.getFirestore)(), tenantId) {
    const snap = await db.collection('academias').doc(tenantId).get();
    if (!snap.exists) {
        throw new https_1.HttpsError('not-found', 'Academia não encontrada para o tenant autenticado.');
    }
    const data = snap.data();
    return data.nome?.trim() || 'Academia';
}
async function getAcademyContext(tenantId) {
    const snap = await firebase_admin_1.adminDb.collection('academias').doc(tenantId).get();
    if (!snap.exists) {
        throw new https_1.HttpsError('not-found', 'Academia não encontrada para o tenant informado.');
    }
    const data = snap.data();
    const academyName = data.nome?.trim() || 'Academia';
    const professorId = data.administradorResponsavelId?.trim() || '';
    const professorEmail = data.administradorResponsavelEmail?.trim() || '';
    const professorName = data.administradorResponsavelNome?.trim() || professorEmail || 'Professor(a)';
    if (!professorId || !professorEmail) {
        throw new https_1.HttpsError('failed-precondition', 'Responsável da academia não configurado.');
    }
    return {
        professorId,
        academyName,
        professorEmail,
        professorName,
    };
}
async function getActiveStudentsByTenant(tenantId) {
    const snap = await firebase_admin_1.adminDb.collection('alunos')
        .where('tenantId', '==', tenantId)
        .where('status', '==', 'Ativo')
        .get();
    return snap.docs.map((docSnap) => {
        const data = docSnap.data();
        const { id: _ignored, ...rest } = data;
        return {
            ...rest,
            id: docSnap.id,
        };
    });
}
function chunkArray(items, size) {
    if (size <= 0) {
        return [items];
    }
    const chunks = [];
    for (let index = 0; index < items.length; index += size) {
        chunks.push(items.slice(index, index + size));
    }
    return chunks;
}
function getCrossedMilestones(previousHours, currentHours, alreadyNotifiedHours) {
    const previousMilestone = Math.floor(Math.max(0, previousHours) / MILESTONE_HOURS);
    const currentMilestone = Math.floor(Math.max(0, currentHours) / MILESTONE_HOURS);
    const notifiedSet = new Set(alreadyNotifiedHours);
    const milestones = [];
    for (let milestoneIndex = previousMilestone + 1; milestoneIndex <= currentMilestone; milestoneIndex += 1) {
        const milestoneHours = milestoneIndex * MILESTONE_HOURS;
        if (!notifiedSet.has(milestoneHours)) {
            milestones.push(milestoneHours);
        }
    }
    return milestones;
}
async function markMilestoneAsNotified(alunoId, milestoneHours) {
    await firebase_admin_1.adminDb.collection('alunos').doc(alunoId).update({
        milestoneNotifiedHours: firestore_1.FieldValue.arrayUnion(milestoneHours),
        lastMilestoneNotifiedHours: milestoneHours,
        updatedAt: firestore_1.Timestamp.now(),
    });
}
async function createInAppNotification(input) {
    const notificationId = `${input.tenantId}-${input.destinatarioId}-${input.idSeed}`;
    try {
        await firebase_admin_1.adminDb.collection('notificacoes').doc(notificationId).create({
            tenantId: input.tenantId,
            destinatarioId: input.destinatarioId,
            titulo: input.titulo,
            mensagem: input.mensagem,
            tipo: input.tipo,
            lida: false,
            createdAt: firestore_1.Timestamp.now(),
        });
    }
    catch (error) {
        const code = error?.code;
        if (code === 6 || code === 'already-exists') {
            return;
        }
        throw error;
    }
}
async function broadcastAvisoGeralInternal(input) {
    const tenantId = String(input.tenantId || '').trim();
    const professorId = String(input.professorId || '').trim();
    const titulo = String(input.titulo || '').trim();
    const mensagem = String(input.mensagem || '').trim();
    const tipo = input.tipo === 'alerta' ? 'alerta' : 'info';
    if (!tenantId || !professorId || !titulo || !mensagem) {
        throw new https_1.HttpsError('invalid-argument', 'Campos obrigatórios ausentes para o aviso geral.');
    }
    const { academyName } = await getAcademyContext(tenantId);
    const avisoId = (0, node_crypto_1.randomUUID)();
    const activeStudents = await getActiveStudentsByTenant(tenantId);
    const batches = chunkArray(activeStudents, 500);
    const createdAt = firestore_1.Timestamp.now();
    for (const batchStudents of batches) {
        const batch = firebase_admin_1.adminDb.batch();
        batchStudents.forEach((student) => {
            const notificationId = `${avisoId}-${student.id}`;
            const notificationRef = firebase_admin_1.adminDb.collection('notificacoes').doc(notificationId);
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
    await firebase_admin_1.adminDb.collection('avisos').doc(avisoId).set({
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
exports.provisionAcademia = (0, https_1.onCall)(async (request) => {
    if (!request.auth || request.auth.token.role !== 'admin') {
        throw new https_1.HttpsError('permission-denied', 'Apenas administradores podem provisionar academias.');
    }
    initAdminApp();
    assertCallableCooldown('provisionAcademia', request.auth.uid, 30000);
    validateInput(request.data);
    const db = (0, firestore_1.getFirestore)();
    const emailService = (0, email_service_1.createEmailService)();
    const { nome, plano, responsavelEmail, responsavelNome, responsavelRole = 'admin' } = request.data;
    const tenantId = (0, node_crypto_1.randomUUID)();
    const seeds = createSeeds(tenantId);
    const academiaDoc = createAcademiaDoc(tenantId, { nome, plano, responsavelEmail, responsavelNome, responsavelRole });
    const expiresAt = new Date(Date.now() + 48 * 60 * 60 * 1000);
    const inviteToken = (0, node_crypto_1.randomUUID)();
    const appUrl = readRequiredServerEnv('APP_URL', process.env.APP_URL);
    const inviteUrl = `${appUrl}/ativar-conta?token=${encodeURIComponent(inviteToken)}`;
    const academiaRef = db.collection('academias').doc(tenantId);
    const inviteRef = db.collection('convites').doc(inviteToken);
    const batch = db.batch();
    batch.set(academiaRef, academiaDoc);
    for (const seed of seeds) {
        batch.set(academiaRef.collection('seed').doc(seed.id), {
            ...seed,
            createdAt: firestore_1.Timestamp.fromDate(seed.createdAt),
            updatedAt: firestore_1.Timestamp.fromDate(seed.updatedAt),
        });
    }
    batch.set(inviteRef, {
        id: inviteToken,
        token: inviteToken,
        email: responsavelEmail.toLowerCase(),
        tenantId,
        role: responsavelRole,
        academyName: nome.trim(),
        expiresAt: firestore_1.Timestamp.fromDate(expiresAt),
        status: 'pendente',
        createdAt: firestore_1.Timestamp.now(),
        updatedAt: firestore_1.Timestamp.now(),
    });
    await batch.commit();
    try {
        await emailService.sendInviteEmail((0, email_service_1.buildInviteEmailPayload)({
            to: responsavelEmail,
            academyName: nome.trim(),
            inviteUrl,
        }));
    }
    catch (emailError) {
        const rollback = db.batch();
        rollback.delete(academiaRef);
        rollback.delete(inviteRef);
        for (const seed of seeds) {
            rollback.delete(academiaRef.collection('seed').doc(seed.id));
        }
        await rollback.commit();
        throw new https_1.HttpsError('internal', 'Falha ao enviar o e-mail de convite.', emailError);
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
exports.generateVisualExperienceImage = (0, https_1.onCall)(async (request) => {
    if (!request.auth) {
        throw new https_1.HttpsError('unauthenticated', 'Faça login para solicitar geração visual.');
    }
    const data = request.data;
    const imagePrompt = String(data?.imagePrompt || '').trim();
    const imageConcept = String(data?.imageConcept || '').trim();
    const screenId = String(data?.screenId || '').trim();
    const module = String(data?.module || '').trim();
    const tenantId = String(data?.tenantId || '').trim() || undefined;
    const stateType = String(data?.stateType || '').trim() || undefined;
    if (!imagePrompt || !imageConcept || !screenId || !module) {
        throw new https_1.HttpsError('invalid-argument', 'Campos obrigatórios ausentes para gerar a imagem.');
    }
    assertCallableCooldown('generateVisualExperienceImage', `${request.auth.uid}:${tenantId ?? 'no-tenant'}:${screenId}`, 15000);
    return visualImageService.generate({
        imagePrompt,
        imageConcept,
        screenId,
        module,
        tenantId,
        stateType,
    });
});
exports.validateInvite = (0, https_1.onCall)(async (request) => {
    initAdminApp();
    const token = String(request.data?.token || '').trim();
    if (!token) {
        throw new https_1.HttpsError('invalid-argument', 'Token de convite é obrigatório.');
    }
    const repo = new repository_1.ConvitesRepositoryFirestore();
    const convite = await repo.buscarPorToken(token);
    if (!convite) {
        return { valid: false };
    }
    return repo.toValidarResult(convite);
});
exports.inviteStudent = (0, https_1.onCall)(async (request) => {
    initAdminApp();
    if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
        throw new https_1.HttpsError('permission-denied', 'Apenas professor ou admin podem convidar alunos.');
    }
    const tenantId = String(request.auth.token.tenantId || '').trim();
    if (!tenantId) {
        throw new https_1.HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
    }
    assertCallableCooldown('inviteStudent', `${request.auth.uid}:${tenantId}`, 10000);
    const data = request.data;
    if (!data.nome?.trim()) {
        throw new https_1.HttpsError('invalid-argument', 'O nome do aluno é obrigatório.');
    }
    if (!data.email?.trim()) {
        throw new https_1.HttpsError('invalid-argument', 'O e-mail do aluno é obrigatório.');
    }
    const db = (0, firestore_1.getFirestore)();
    const repo = new repository_1.ConvitesRepositoryFirestore();
    const service = new service_1.ConvitesServiceFirestore(repo, (0, email_service_1.createEmailService)());
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
exports.listInvites = (0, https_1.onCall)(async (request) => {
    initAdminApp();
    if (!request.auth || request.auth.token.role !== 'admin') {
        throw new https_1.HttpsError('permission-denied', 'Apenas administradores podem listar convites.');
    }
    const repo = new repository_1.ConvitesRepositoryFirestore();
    const service = new service_1.ConvitesServiceFirestore(repo);
    return service.listarConvites();
});
exports.listStudentInvites = (0, https_1.onCall)(async (request) => {
    initAdminApp();
    if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
        throw new https_1.HttpsError('permission-denied', 'Apenas professor ou admin podem listar convites de alunos.');
    }
    const tenantId = String(request.auth.token.tenantId || '').trim();
    if (!tenantId) {
        throw new https_1.HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
    }
    const repo = new repository_1.ConvitesRepositoryFirestore();
    const service = new service_1.ConvitesServiceFirestore(repo);
    return service.listarConvitesEstudantes(tenantId);
});
exports.resendInvite = (0, https_1.onCall)(async (request) => {
    initAdminApp();
    if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
        throw new https_1.HttpsError('permission-denied', 'Apenas professor ou admin podem reenviar convites.');
    }
    const token = String(request.data?.token || '').trim();
    if (!token) {
        throw new https_1.HttpsError('invalid-argument', 'Token de convite é obrigatório.');
    }
    assertCallableCooldown('resendInvite', request.auth.uid, 10000);
    const tenantId = String(request.auth.token.tenantId || '').trim();
    if (!tenantId && request.auth.token.role !== 'admin') {
        throw new https_1.HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
    }
    const repo = new repository_1.ConvitesRepositoryFirestore();
    const service = new service_1.ConvitesServiceFirestore(repo);
    if (request.auth.token.role === 'admin') {
        return service.reenviarConvite(token);
    }
    return service.reenviarConviteEscopo(token, tenantId, true);
});
exports.revokeInvite = (0, https_1.onCall)(async (request) => {
    initAdminApp();
    if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
        throw new https_1.HttpsError('permission-denied', 'Apenas professor ou admin podem revogar convites.');
    }
    const token = String(request.data?.token || '').trim();
    if (!token) {
        throw new https_1.HttpsError('invalid-argument', 'Token de convite é obrigatório.');
    }
    assertCallableCooldown('revokeInvite', request.auth.uid, 10000);
    const tenantId = String(request.auth.token.tenantId || '').trim();
    if (!tenantId && request.auth.token.role !== 'admin') {
        throw new https_1.HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
    }
    const repo = new repository_1.ConvitesRepositoryFirestore();
    const service = new service_1.ConvitesServiceFirestore(repo);
    if (request.auth.token.role === 'admin') {
        return service.revogarConvite(token);
    }
    return service.revogarConviteEscopo(token, tenantId, true);
});
exports.broadcastAvisoGeral = (0, https_1.onCall)(async (request) => {
    initAdminApp();
    if (!request.auth || !['professor', 'admin'].includes(String(request.auth.token.role || ''))) {
        throw new https_1.HttpsError('permission-denied', 'Apenas professor ou admin podem enviar avisos.');
    }
    const tenantId = String(request.auth.token.tenantId || '').trim();
    if (!tenantId) {
        throw new https_1.HttpsError('permission-denied', 'Tenant ausente no token autenticado.');
    }
    assertCallableCooldown('broadcastAvisoGeral', `${request.auth.uid}:${tenantId}`, 10000);
    const professorId = String(request.data?.professorId || request.auth.uid || '').trim();
    if (professorId !== request.auth.uid && request.auth.token.role !== 'admin') {
        throw new https_1.HttpsError('permission-denied', 'Professor não autorizado para esse remetente.');
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
exports.activateInvite = (0, https_1.onCall)(async (request) => {
    initAdminApp();
    if (!request.auth) {
        throw new https_1.HttpsError('unauthenticated', 'Faça login para ativar sua conta.');
    }
    const token = String(request.data?.token || '').trim();
    if (!token) {
        throw new https_1.HttpsError('invalid-argument', 'Token de convite é obrigatório.');
    }
    const repo = new repository_1.ConvitesRepositoryFirestore();
    const service = new service_1.ConvitesServiceFirestore(repo);
    return service.ativarConvite(token, request.auth.uid);
});
exports.onAlunoMilestoneReached = (0, firestore_2.onDocumentUpdated)('alunos/{alunoId}', async (event) => {
    initAdminApp();
    const before = event.data?.before.data();
    const after = event.data?.after.data();
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
    const emailService = (0, email_service_1.createEmailService)();
    const alunoNome = after.nome?.trim() || 'Aluno';
    const alunoEmail = after.email?.trim() || '';
    for (const milestoneHours of milestones) {
        if (alunoEmail) {
            await emailService.sendMilestoneEmail((0, email_service_1.buildMilestoneEmailPayload)({
                to: alunoEmail,
                recipientName: alunoNome,
                studentName: alunoNome,
                academyName,
                milestoneHours,
                isProfessor: false,
            }));
        }
        await emailService.sendMilestoneEmail((0, email_service_1.buildMilestoneEmailPayload)({
            to: professorEmail,
            recipientName: professorName,
            studentName: alunoNome,
            academyName,
            milestoneHours,
            isProfessor: true,
        }));
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
exports.gerarSnapshotsMensaisAgendado = (0, scheduler_1.onSchedule)({
    schedule: '1 0 1 * *',
    timeZone: 'America/Sao_Paulo',
    region: 'southamerica-east1',
}, async () => {
    const startedAt = new Date();
    console.info(JSON.stringify({
        level: 'info',
        event: 'snapshots_mensais_scheduler_triggered',
        startedAt: startedAt.toISOString(),
    }));
    try {
        const summary = await (0, runner_1.executarSnapshotsMensaisCron)(startedAt);
        console.info(JSON.stringify({
            level: 'info',
            event: 'snapshots_mensais_scheduler_finished',
            startedAt: startedAt.toISOString(),
            finishedAt: new Date().toISOString(),
            summary,
        }));
    }
    catch (error) {
        const message = error instanceof Error ? error.message : 'Erro desconhecido.';
        console.error(JSON.stringify({
            level: 'error',
            event: 'snapshots_mensais_scheduler_failed',
            startedAt: startedAt.toISOString(),
            message,
        }));
        throw error;
    }
});
