"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConvitesRepositoryFirestore = void 0;
const firestore_1 = require("firebase-admin/firestore");
const firebase_admin_1 = require("../../lib/firebase-admin");
function toTimestamp(date) {
    return firestore_1.Timestamp.fromDate(date);
}
function fromTimestamp(value) {
    return value ? value.toDate() : new Date();
}
function getStoredStatus(doc, now = new Date()) {
    if (doc.status === 'pendente' && fromTimestamp(doc.expiresAt).getTime() < now.getTime()) {
        return 'expirado';
    }
    return doc.status;
}
function toConvite(doc, now = new Date()) {
    return {
        id: doc.id,
        token: doc.token,
        email: doc.email,
        inviteeName: doc.inviteeName,
        tenantId: doc.tenantId,
        role: doc.role,
        academyName: doc.academyName,
        expiresAt: fromTimestamp(doc.expiresAt),
        status: getStoredStatus(doc, now),
        createdAt: fromTimestamp(doc.createdAt),
        updatedAt: fromTimestamp(doc.updatedAt),
        consumedAt: doc.consumedAt ? fromTimestamp(doc.consumedAt) : undefined,
        consumedByUid: doc.consumedByUid,
    };
}
function mapConviteToListItem(convite) {
    return {
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
        consumedAt: convite.consumedAt?.toISOString(),
        consumedByUid: convite.consumedByUid,
    };
}
class ConvitesRepositoryFirestore {
    async criarConvite(input, token) {
        const now = new Date();
        const convite = {
            id: token,
            token,
            email: input.email,
            inviteeName: input.inviteeName?.trim() || undefined,
            tenantId: input.tenantId,
            role: input.role,
            academyName: input.academyName,
            expiresAt: input.expiresAt,
            status: 'pendente',
            createdAt: now,
            updatedAt: now,
        };
        await firebase_admin_1.adminDb.collection('convites').doc(token).set({
            id: convite.id,
            token: convite.token,
            email: convite.email,
            inviteeName: convite.inviteeName,
            tenantId: convite.tenantId,
            role: convite.role,
            academyName: convite.academyName,
            expiresAt: toTimestamp(convite.expiresAt),
            status: convite.status,
            createdAt: toTimestamp(convite.createdAt),
            updatedAt: toTimestamp(convite.updatedAt),
        });
        return convite;
    }
    async listarConvites() {
        const snap = await firebase_admin_1.adminDb.collection('convites').orderBy('createdAt', 'desc').get();
        const now = new Date();
        return snap.docs.map((doc) => toConvite(doc.data(), now));
    }
    async listarConvitesEstudantes(tenantId) {
        const snap = await firebase_admin_1.adminDb
            .collection('convites')
            .where('tenantId', '==', tenantId)
            .where('role', '==', 'aluno')
            .orderBy('createdAt', 'desc')
            .get();
        const now = new Date();
        return snap.docs.map((doc) => toConvite(doc.data(), now));
    }
    async buscarPorToken(token) {
        const snap = await firebase_admin_1.adminDb.collection('convites').doc(token).get();
        if (!snap.exists) {
            return null;
        }
        return toConvite(snap.data());
    }
    async buscarPorTokenEscopo(token, tenantId, role) {
        const convite = await this.buscarPorToken(token);
        if (!convite) {
            return null;
        }
        if (convite.tenantId !== tenantId) {
            return null;
        }
        if (role && convite.role !== role) {
            return null;
        }
        return convite;
    }
    async reenviar(token, expiresAt) {
        const ref = firebase_admin_1.adminDb.collection('convites').doc(token);
        const current = await ref.get();
        if (!current.exists) {
            throw new Error('Convite não encontrado.');
        }
        const conviteAtual = toConvite(current.data());
        const now = new Date();
        if (conviteAtual.status === 'consumido') {
            throw new Error('Convite já utilizado.');
        }
        if (conviteAtual.status === 'revogado') {
            throw new Error('Convite revogado.');
        }
        await ref.update({
            status: 'pendente',
            expiresAt: toTimestamp(expiresAt),
            updatedAt: firestore_1.Timestamp.now(),
        });
        const updated = await ref.get();
        return toConvite(updated.data(), now);
    }
    async marcarConsumido(token, uid) {
        const ref = firebase_admin_1.adminDb.collection('convites').doc(token);
        await ref.update({
            status: 'consumido',
            consumedAt: firestore_1.Timestamp.now(),
            consumedByUid: uid,
            updatedAt: firestore_1.Timestamp.now(),
        });
    }
    async revogar(token) {
        const ref = firebase_admin_1.adminDb.collection('convites').doc(token);
        const snap = await ref.get();
        if (!snap.exists) {
            throw new Error('Convite não encontrado.');
        }
        await ref.update({
            status: 'revogado',
            updatedAt: firestore_1.Timestamp.now(),
        });
        const updated = await ref.get();
        return toConvite(updated.data());
    }
    async atualizarStatusAcademia(tenantId, status, administradorResponsavelId, dataAtivacao) {
        await firebase_admin_1.adminDb.collection('academias').doc(tenantId).update({
            status,
            ...(administradorResponsavelId ? { administradorResponsavelId } : {}),
            ...(dataAtivacao ? { dataAtivacao: toTimestamp(dataAtivacao) } : {}),
            updatedAt: firestore_1.Timestamp.now(),
        });
    }
    toValidarResult(convite) {
        const now = new Date();
        const expired = convite.expiresAt.getTime() < now.getTime() || convite.status === 'expirado';
        const revoked = convite.status === 'revogado';
        return {
            valid: convite.status === 'pendente' && !expired && !revoked,
            expired,
            revoked,
            consumed: convite.status === 'consumido',
            email: convite.email,
            role: convite.role,
            academyName: convite.academyName,
            expiresAt: convite.expiresAt.toISOString(),
        };
    }
    toAtivarResult(convite, alreadyActivated = false) {
        return {
            tenantId: convite.tenantId,
            role: convite.role,
            email: convite.email,
            inviteeName: convite.inviteeName,
            academyName: convite.academyName,
            alreadyActivated,
        };
    }
    toListResult(convites) {
        return {
            convites: convites.map((convite) => mapConviteToListItem(convite)),
        };
    }
    toListItem(convite) {
        return mapConviteToListItem(convite);
    }
    toConviteFromDoc(doc) {
        return toConvite(doc);
    }
    async ensureConviteExists(token) {
        const convite = await this.buscarPorToken(token);
        if (!convite) {
            throw new Error('Convite não encontrado.');
        }
        return convite;
    }
    async atualizarEmailStatus(token, expiresAt) {
        return this.reenviar(token, expiresAt);
    }
    async listarConvitesComoItens() {
        const convites = await this.listarConvites();
        return convites.map((convite) => mapConviteToListItem(convite));
    }
    async revogarComoItem(token) {
        const convite = await this.revogar(token);
        return mapConviteToListItem(convite);
    }
    async reenviarComoItem(token, expiresAt) {
        const convite = await this.reenviar(token, expiresAt);
        return mapConviteToListItem(convite);
    }
}
exports.ConvitesRepositoryFirestore = ConvitesRepositoryFirestore;
