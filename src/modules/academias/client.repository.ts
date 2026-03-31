import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../lib/firebase/client';
import type { Academia, AcademiaFirestoreDocument } from './types';

export interface IAcademiasClientRepository {
  findByTenantId(tenantId: string): Promise<Academia | null>;
}

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

function toAcademia(data: Partial<AcademiaFirestoreDocument>, tenantId: string): Academia | null {
  if (!data.nome || !data.plano || !data.status || !data.administradorResponsavelId || !data.administradorResponsavelEmail) {
    return null;
  }

  const normalizedTenantId = typeof data.tenantId === 'string' && data.tenantId.trim() ? data.tenantId.trim() : tenantId;

  return {
    id: normalizedTenantId,
    tenantId: normalizedTenantId,
    nome: String(data.nome).trim(),
    plano: data.plano,
    status: data.status,
    dataAtivacao: toDate(data.dataAtivacao),
    administradorResponsavelId: String(data.administradorResponsavelId).trim(),
    administradorResponsavelEmail: String(data.administradorResponsavelEmail).trim(),
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

export class AcademiasFirestoreClientRepository implements IAcademiasClientRepository {
  async findByTenantId(tenantId: string): Promise<Academia | null> {
    const normalizedTenantId = tenantId.trim();
    if (!normalizedTenantId) {
      return null;
    }

    const snapshot = await getDoc(doc(db, 'academias', normalizedTenantId));

    if (!snapshot.exists()) {
      return null;
    }

    const data = snapshot.data() as Partial<AcademiaFirestoreDocument>;
    if (typeof data.tenantId === 'string' && data.tenantId.trim() !== normalizedTenantId) {
      return null;
    }

    return toAcademia(data, normalizedTenantId);
  }
}
