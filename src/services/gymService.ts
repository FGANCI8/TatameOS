import { collection, doc, getDoc, getDocs, query, Timestamp, where } from 'firebase/firestore';
import { db } from '../lib/firebase/client';
import type { Academia } from '../modules/academias/types';

function isFirestoreTimestamp(value: unknown): value is Timestamp {
  return Boolean(value) && typeof value === 'object' && typeof (value as Timestamp).toDate === 'function';
}

function toDate(value: unknown): Date {
  if (value instanceof Date) {
    return value;
  }

  if (isFirestoreTimestamp(value)) {
    return value.toDate();
  }

  if (typeof value === 'string' || typeof value === 'number') {
    const parsed = new Date(value);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed;
    }
  }

  return new Date();
}

function toAcademia(data: Record<string, unknown>, tenantId: string): Academia | null {
  if (
    typeof data.nome !== 'string' ||
    typeof data.plano !== 'string' ||
    typeof data.status !== 'string' ||
    typeof data.administradorResponsavelId !== 'string' ||
    typeof data.administradorResponsavelEmail !== 'string'
  ) {
    return null;
  }

  const normalizedTenantId = typeof data.tenantId === 'string' && data.tenantId.trim() ? data.tenantId.trim() : tenantId;

  return {
    id: normalizedTenantId,
    tenantId: normalizedTenantId,
    nome: data.nome.trim(),
    plano: data.plano as Academia['plano'],
    status: data.status as Academia['status'],
    dataAtivacao: toDate(data.dataAtivacao),
    administradorResponsavelId: data.administradorResponsavelId.trim(),
    administradorResponsavelEmail: data.administradorResponsavelEmail.trim(),
    administradorResponsavelNome:
      typeof data.administradorResponsavelNome === 'string' && data.administradorResponsavelNome.trim()
        ? data.administradorResponsavelNome.trim()
        : undefined,
    seedVersion: Number.isFinite(Number(data.seedVersion)) ? Number(data.seedVersion) : 0,
    seedApplied: Boolean(data.seedApplied),
    createdAt: toDate(data.createdAt),
    updatedAt: toDate(data.updatedAt),
  };
}

export class GymService {
  private isValidId(value: string): boolean {
    return typeof value === 'string' && value.trim().length > 0;
  }

  async getGymDetails(id: string): Promise<Academia | null> {
    const gymId = id.trim();

    if (!this.isValidId(gymId)) {
      throw new Error('ID da academia inválido.');
    }

    const snapshot = await getDoc(doc(db, 'academias', gymId));
    if (!snapshot.exists()) {
      return null;
    }

    const data = snapshot.data() as Record<string, unknown>;
    if (typeof data.tenantId === 'string' && data.tenantId.trim() !== gymId) {
      return null;
    }

    return toAcademia(data, gymId);
  }

  async getUserGyms(ownerId: string): Promise<Academia[]> {
    const normalizedOwnerId = ownerId.trim();

    if (!this.isValidId(normalizedOwnerId)) {
      throw new Error('ID do usuário inválido.');
    }

    const snapshot = await getDocs(
      query(collection(db, 'academias'), where('administradorResponsavelId', '==', normalizedOwnerId)),
    );

    return snapshot.docs
      .map((document) => toAcademia(document.data() as Record<string, unknown>, document.id))
      .sort((left, right) => right.createdAt.getTime() - left.createdAt.getTime())
      .filter((academia): academia is Academia => Boolean(academia));
  }
}

export const gymService = new GymService();
