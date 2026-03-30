import { Timestamp } from 'firebase-admin/firestore';
import { adminDb } from '../../lib/firebase-admin';
import type {
  AtivarConviteResult,
  Convite,
  ConviteFirestoreDocument,
  ConviteListItem,
  CriarConviteInput,
  ListarConvitesResult,
  ValidarConviteResult
} from './types';

function toTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
}

function fromTimestamp(value: Timestamp | undefined): Date {
  return value ? value.toDate() : new Date();
}

function getStoredStatus(doc: ConviteFirestoreDocument, now = new Date()): Convite['status'] {
  if (doc.status === 'pendente' && fromTimestamp(doc.expiresAt).getTime() < now.getTime()) {
    return 'expirado';
  }

  return doc.status;
}

function toConvite(doc: ConviteFirestoreDocument, now = new Date()): Convite {
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

function mapConviteToListItem(convite: Convite): ConviteListItem {
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

export class ConvitesRepositoryFirestore {
  async criarConvite(input: CriarConviteInput, token: string): Promise<Convite> {
    const now = new Date();
    const convite: Convite = {
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

    await adminDb.collection('convites').doc(token).set({
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

  async listarConvites(): Promise<Convite[]> {
    const snap = await adminDb.collection('convites').orderBy('createdAt', 'desc').get();
    const now = new Date();
    return snap.docs.map((doc) => toConvite(doc.data() as ConviteFirestoreDocument, now));
  }

  async listarConvitesEstudantes(tenantId: string): Promise<Convite[]> {
    const snap = await adminDb
      .collection('convites')
      .where('tenantId', '==', tenantId)
      .where('role', '==', 'aluno')
      .orderBy('createdAt', 'desc')
      .get();
    const now = new Date();
    return snap.docs.map((doc) => toConvite(doc.data() as ConviteFirestoreDocument, now));
  }

  async buscarPorToken(token: string): Promise<Convite | null> {
    const snap = await adminDb.collection('convites').doc(token).get();
    if (!snap.exists) {
      return null;
    }

    return toConvite(snap.data() as ConviteFirestoreDocument);
  }

  async buscarPorTokenEscopo(token: string, tenantId: string, role?: Convite['role']): Promise<Convite | null> {
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

  async reenviar(token: string, expiresAt: Date): Promise<Convite> {
    const ref = adminDb.collection('convites').doc(token);
    const current = await ref.get();
    if (!current.exists) {
      throw new Error('Convite não encontrado.');
    }

    const conviteAtual = toConvite(current.data() as ConviteFirestoreDocument);
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
      updatedAt: Timestamp.now(),
    });

    const updated = await ref.get();
    return toConvite(updated.data() as ConviteFirestoreDocument, now);
  }

  async marcarConsumido(token: string, uid: string): Promise<void> {
    const ref = adminDb.collection('convites').doc(token);
    await ref.update({
      status: 'consumido',
      consumedAt: Timestamp.now(),
      consumedByUid: uid,
      updatedAt: Timestamp.now(),
    });
  }

  async revogar(token: string): Promise<Convite> {
    const ref = adminDb.collection('convites').doc(token);
    const snap = await ref.get();
    if (!snap.exists) {
      throw new Error('Convite não encontrado.');
    }

    await ref.update({
      status: 'revogado',
      updatedAt: Timestamp.now(),
    });

    const updated = await ref.get();
    return toConvite(updated.data() as ConviteFirestoreDocument);
  }

  async atualizarStatusAcademia(
    tenantId: string,
    status: 'ativa' | 'pendente' | 'suspensa',
    administradorResponsavelId?: string,
    dataAtivacao?: Date,
  ): Promise<void> {
    await adminDb.collection('academias').doc(tenantId).update({
      status,
      ...(administradorResponsavelId ? { administradorResponsavelId } : {}),
      ...(dataAtivacao ? { dataAtivacao: toTimestamp(dataAtivacao) } : {}),
      updatedAt: Timestamp.now(),
    });
  }

  toValidarResult(convite: Convite): ValidarConviteResult {
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

  toAtivarResult(convite: Convite, alreadyActivated = false): AtivarConviteResult {
    return {
      tenantId: convite.tenantId,
      role: convite.role,
      email: convite.email,
      inviteeName: convite.inviteeName,
      academyName: convite.academyName,
      alreadyActivated,
    };
  }

  toListResult(convites: Convite[]): ListarConvitesResult {
    return {
      convites: convites.map((convite) => mapConviteToListItem(convite)),
    };
  }

  toListItem(convite: Convite): ConviteListItem {
    return mapConviteToListItem(convite);
  }

  toConviteFromDoc(doc: ConviteFirestoreDocument): Convite {
    return toConvite(doc);
  }

  async ensureConviteExists(token: string): Promise<Convite> {
    const convite = await this.buscarPorToken(token);
    if (!convite) {
      throw new Error('Convite não encontrado.');
    }

    return convite;
  }

  async atualizarEmailStatus(
    token: string,
    expiresAt: Date,
  ): Promise<Convite> {
    return this.reenviar(token, expiresAt);
  }

  async listarConvitesComoItens(): Promise<ConviteListItem[]> {
    const convites = await this.listarConvites();
    return convites.map((convite) => mapConviteToListItem(convite));
  }

  async revogarComoItem(token: string): Promise<ConviteListItem> {
    const convite = await this.revogar(token);
    return mapConviteToListItem(convite);
  }

  async reenviarComoItem(token: string, expiresAt: Date): Promise<ConviteListItem> {
    const convite = await this.reenviar(token, expiresAt);
    return mapConviteToListItem(convite);
  }
}
