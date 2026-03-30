import { Timestamp } from 'firebase-admin/firestore';
import { adminDb } from '../../../lib/firebase/admin';
import type { IAcademiasRepository } from '../academias.repository';
import type {
  Academia,
  AcademiaFirestoreDocument,
  AcademiaSeedDocument,
  AcademiaSeedFirestoreDocument
} from '../types';

function toTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
}

function fromTimestamp(value: Timestamp | undefined): Date {
  return value ? value.toDate() : new Date();
}

function toAcademia(doc: AcademiaFirestoreDocument): Academia {
  return {
    id: doc.id,
    tenantId: doc.tenantId,
    nome: doc.nome,
    plano: doc.plano,
    status: doc.status,
    dataAtivacao: fromTimestamp(doc.dataAtivacao),
    administradorResponsavelId: doc.administradorResponsavelId,
    administradorResponsavelEmail: doc.administradorResponsavelEmail,
    administradorResponsavelNome: doc.administradorResponsavelNome,
    seedVersion: doc.seedVersion,
    seedApplied: doc.seedApplied,
    createdAt: fromTimestamp(doc.createdAt),
    updatedAt: fromTimestamp(doc.updatedAt),
  };
}

function toAcademiaDocument(academia: Academia): AcademiaFirestoreDocument {
  return {
    id: academia.id,
    tenantId: academia.tenantId,
    nome: academia.nome,
    plano: academia.plano,
    status: academia.status,
    dataAtivacao: toTimestamp(academia.dataAtivacao),
    administradorResponsavelId: academia.administradorResponsavelId,
    administradorResponsavelEmail: academia.administradorResponsavelEmail,
    administradorResponsavelNome: academia.administradorResponsavelNome,
    seedVersion: academia.seedVersion,
    seedApplied: academia.seedApplied,
    createdAt: toTimestamp(academia.createdAt),
    updatedAt: toTimestamp(academia.updatedAt),
  };
}

function toSeedDocument(seed: AcademiaSeedDocument): AcademiaSeedFirestoreDocument {
  return {
    id: seed.id,
    tenantId: seed.tenantId,
    kind: seed.kind,
    title: seed.title,
    items: seed.items,
    createdAt: toTimestamp(seed.createdAt),
    updatedAt: toTimestamp(seed.updatedAt),
  };
}

export class AcademiasRepositoryFirestore implements IAcademiasRepository {
  async findByTenantId(tenantId: string): Promise<Academia | null> {
    const snap = await adminDb.collection('academias').doc(tenantId).get();

    if (!snap.exists) {
      return null;
    }

    const data = snap.data() as AcademiaFirestoreDocument;
    if (data.tenantId !== tenantId) {
      return null;
    }

    return toAcademia(data);
  }

  async provisionAcademia(academia: Academia, seeds: AcademiaSeedDocument[]): Promise<Academia> {
    const rootRef = adminDb.collection('academias').doc(academia.id);
    const batch = adminDb.batch();

    batch.set(rootRef, toAcademiaDocument(academia));

    for (const seed of seeds) {
      const seedRef = rootRef.collection('seed').doc(seed.id);
      batch.set(seedRef, toSeedDocument(seed));
    }

    await batch.commit();
    return academia;
  }

  async rollbackAcademia(tenantId: string, seedIds: string[]): Promise<void> {
    const rootRef = adminDb.collection('academias').doc(tenantId);
    const batch = adminDb.batch();

    for (const seedId of seedIds) {
      batch.delete(rootRef.collection('seed').doc(seedId));
    }

    batch.delete(rootRef);
    await batch.commit();
  }
}

