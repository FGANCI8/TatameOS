"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvitesServiceFirestore = void 0;
const node_crypto_1 = require("node:crypto");
const firebase_admin_1 = require("../../lib/firebase-admin");
const email_service_1 = require("./email.service");
const INVITE_TTL_MS = 48 * 60 * 60 * 1000;
function buildInviteUrl(token) {
    return `${process.env.APP_URL}/ativar-conta?token=${encodeURIComponent(token)}`;
}
function toExpiresAt(now = new Date()) {
    return new Date(now.getTime() + INVITE_TTL_MS);
}
function toListItem(convite) {
    return {
        id: convite.id,
        token: convite.token,
        email: convite.email,
        tenantId: convite.tenantId,
        role: convite.role,
        academyName: convite.academyName,
        expiresAt: convite.expiresAt.toISOString(),
        status: convite.status,
        createdAt: convite.createdAt.toISOString(),
        updatedAt: convite.updatedAt.toISOString(),
        consumedAt: convite.consumedAt?.toISOString(),
        consumedByUid: convite.consumedByUid,
    };
}
class ConvitesServiceFirestore {
    repo;
    emailService;
    constructor(repo, emailService = (0, email_service_1.createEmailService)()) {
        this.repo = repo;
        this.emailService = emailService;
    }
    async sendInviteEmail(email, academyName, token, inviteeName) {
        const inviteUrl = buildInviteUrl(token);
        await this.emailService.sendInviteEmail((0, email_service_1.buildInviteEmailPayload)({
            to: email,
            inviteeName,
            academyName,
            inviteUrl,
        }));
    }
    async criarConvite(input) {
        const token = (0, node_crypto_1.randomUUID)();
        const convite = await this.repo.criarConvite(input, token);
        await this.sendInviteEmail(input.email, input.academyName, token, input.inviteeName);
        return convite;
    }
    async listarConvites() {
        const convites = await this.repo.listarConvites();
        return {
            convites: convites.map((convite) => toListItem(convite)),
        };
    }
    async listarConvitesEstudantes(tenantId) {
        const convites = await this.repo.listarConvitesEstudantes(tenantId);
        return {
            convites: convites.map((convite) => toListItem(convite)),
        };
    }
    async validarConvite(token) {
        const convite = await this.repo.buscarPorToken(token);
        if (!convite) {
            return {
                valid: false,
                expired: false,
                revoked: false,
                consumed: false,
                email: '',
                role: 'admin',
                academyName: '',
                expiresAt: '',
            };
        }
        return this.repo.toValidarResult(convite);
    }
    async ativarConvite(token, uid) {
        const convite = await this.repo.buscarPorToken(token);
        if (!convite) {
            throw new Error('Convite não encontrado.');
        }
        if (convite.status === 'revogado') {
            throw new Error('Convite revogado.');
        }
        const now = new Date();
        if (convite.expiresAt.getTime() < now.getTime()) {
            throw new Error('Convite expirado.');
        }
        if (convite.status === 'consumido') {
            if (convite.consumedByUid === uid) {
                return this.repo.toAtivarResult(convite, true);
            }
            throw new Error('Convite já utilizado.');
        }
        const user = await firebase_admin_1.adminAuth.getUser(uid);
        if (!user.email || user.email.toLowerCase() !== convite.email.toLowerCase()) {
            throw new Error('O e-mail autenticado não corresponde ao convite.');
        }
        const previousClaims = user.customClaims ?? {};
        await firebase_admin_1.adminAuth.setCustomUserClaims(uid, {
            ...previousClaims,
            tenantId: convite.tenantId,
            role: convite.role,
        });
        const activatedAt = new Date();
        await Promise.all([
            this.repo.marcarConsumido(token, uid),
            this.repo.atualizarStatusAcademia(convite.tenantId, 'ativa', uid, activatedAt),
        ]);
        return this.repo.toAtivarResult({
            ...convite,
            status: 'consumido',
            consumedAt: activatedAt,
            consumedByUid: uid,
        }, false);
    }
    async reenviarConvite(token) {
        const conviteAtual = await this.repo.buscarPorToken(token);
        if (!conviteAtual) {
            throw new Error('Convite não encontrado.');
        }
        if (conviteAtual.status === 'consumido') {
            throw new Error('Convite já utilizado.');
        }
        if (conviteAtual.status === 'revogado') {
            throw new Error('Convite revogado.');
        }
        const expiresAt = toExpiresAt();
        const conviteAtualizado = await this.repo.reenviar(token, expiresAt);
        await this.sendInviteEmail(conviteAtualizado.email, conviteAtualizado.academyName, token, conviteAtualizado.inviteeName);
        return {
            convite: toListItem(conviteAtualizado),
        };
    }
    async revogarConvite(token) {
        const convite = await this.repo.revogar(token);
        return {
            convite: toListItem(convite),
        };
    }
    async reenviarConviteEscopo(token, tenantId, isProfessorOrAdmin) {
        if (!isProfessorOrAdmin) {
            throw new Error('Apenas professor ou admin podem reenviar convites.');
        }
        const conviteAtual = await this.repo.buscarPorTokenEscopo(token, tenantId, 'aluno');
        if (!conviteAtual) {
            throw new Error('Convite não encontrado.');
        }
        if (conviteAtual.status === 'consumido') {
            throw new Error('Convite já utilizado.');
        }
        if (conviteAtual.status === 'revogado') {
            throw new Error('Convite revogado.');
        }
        const expiresAt = toExpiresAt();
        const conviteAtualizado = await this.repo.reenviar(token, expiresAt);
        if (conviteAtualizado.tenantId !== tenantId || conviteAtualizado.role !== 'aluno') {
            throw new Error('Convite fora do tenant permitido.');
        }
        await this.sendInviteEmail(conviteAtualizado.email, conviteAtualizado.academyName, token, conviteAtualizado.inviteeName);
        return { convite: toListItem(conviteAtualizado) };
    }
    async revogarConviteEscopo(token, tenantId, isProfessorOrAdmin) {
        if (!isProfessorOrAdmin) {
            throw new Error('Apenas professor ou admin podem revogar convites.');
        }
        const conviteAtual = await this.repo.buscarPorTokenEscopo(token, tenantId, 'aluno');
        if (!conviteAtual) {
            throw new Error('Convite não encontrado.');
        }
        if (conviteAtual.status === 'consumido') {
            throw new Error('Convite já utilizado.');
        }
        const convite = await this.repo.revogar(token);
        if (convite.tenantId !== tenantId || convite.role !== 'aluno') {
            throw new Error('Convite fora do tenant permitido.');
        }
        return { convite: toListItem(convite) };
    }
}
exports.ConvitesServiceFirestore = ConvitesServiceFirestore;
