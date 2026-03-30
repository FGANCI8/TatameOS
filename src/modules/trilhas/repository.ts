import {
  collection,
  doc,
  getDoc,
  getDocs,
  deleteDoc,
  limit,
  orderBy,
  query,
  setDoc,
  Timestamp,
  type Firestore,
  type QueryConstraint,
  where,
} from 'firebase/firestore';
import { db } from '../../lib/firebase/client';
import type { ITrilhasRepository, ListarTrilhasFiltro, Trilha, TrilhaStatus } from './types';

type TrilhaFirestoreDocument = Omit<Trilha, 'createdAt' | 'updatedAt'> & {
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

function toTimestamp(value: Date): Timestamp {
  return Timestamp.fromDate(value);
}

function fromTimestamp(value: unknown): Date {
  if (value instanceof Timestamp) {
    return value.toDate();
  }

  if (value && typeof value === 'object' && typeof (value as { toDate?: () => Date }).toDate === 'function') {
    return (value as { toDate: () => Date }).toDate();
  }

  return new Date(0);
}

function toFirestoreDocument(trilha: Trilha): TrilhaFirestoreDocument {
  return {
    id: trilha.id,
    tenantId: trilha.tenantId,
    titulo: trilha.titulo,
    descricao: trilha.descricao,
    faixaAlvo: trilha.faixaAlvo,
    status: trilha.status,
    tecnicasIds: trilha.tecnicasIds,
    createdAt: toTimestamp(trilha.createdAt),
    updatedAt: toTimestamp(trilha.updatedAt),
  };
}

function fromFirestoreDocument(document: TrilhaFirestoreDocument, fallbackId?: string): Trilha {
  return {
    id: document.id || fallbackId || '',
    tenantId: document.tenantId,
    titulo: document.titulo,
    descricao: document.descricao,
    faixaAlvo: document.faixaAlvo,
    status: document.status as TrilhaStatus,
    tecnicasIds: document.tecnicasIds || [],
    createdAt: fromTimestamp(document.createdAt),
    updatedAt: fromTimestamp(document.updatedAt),
  };
}

function fromDocData(data: Record<string, unknown>, fallbackId?: string): Trilha {
  return fromFirestoreDocument(
    {
      id: typeof data.id === 'string' ? data.id : fallbackId || '',
      tenantId: String(data.tenantId),
      titulo: String(data.titulo),
      descricao: String(data.descricao),
      faixaAlvo: data.faixaAlvo as Trilha['faixaAlvo'],
      status: data.status as TrilhaStatus,
      tecnicasIds: Array.isArray(data.tecnicasIds) ? data.tecnicasIds.map((value) => String(value)) : [],
      createdAt: data.createdAt as Timestamp,
      updatedAt: data.updatedAt as Timestamp,
    },
    fallbackId,
  );
}

function buildQueryConstraints(tenantId: string, filtros: ListarTrilhasFiltro = {}): QueryConstraint[] {
  const constraints: QueryConstraint[] = [where('tenantId', '==', tenantId)];

  if (filtros.status) {
    constraints.push(where('status', '==', filtros.status));
  }

  if (filtros.faixaAlvo) {
    constraints.push(where('faixaAlvo', '==', filtros.faixaAlvo));
  }

  constraints.push(orderBy('updatedAt', 'desc'));

  if (filtros.limite) {
    constraints.push(limit(filtros.limite));
  }

  return constraints;
}

export class TrilhasRepositoryFirestore implements ITrilhasRepository {
  constructor(private firestore: Firestore = db) {}

  async salvar(trilha: Trilha, tenantId: string): Promise<Trilha> {
    const normalized: Trilha = trilha.tenantId === tenantId ? trilha : { ...trilha, tenantId };
    await setDoc(doc(this.firestore, 'trilhas', normalized.id), toFirestoreDocument(normalized));
    return normalized;
  }

  async encontrarPorId(id: string, tenantId: string): Promise<Trilha | null> {
    const snap = await getDoc(doc(this.firestore, 'trilhas', id));

    if (!snap.exists()) {
      return null;
    }

    const data = snap.data() as Record<string, unknown>;
    if (String(data.tenantId) !== tenantId) {
      return null;
    }

    return fromDocData(data, snap.id);
  }

  async listar(tenantId: string, filtros: ListarTrilhasFiltro = {}): Promise<Trilha[]> {
    const snap = await getDocs(query(collection(this.firestore, 'trilhas'), ...buildQueryConstraints(tenantId, filtros)));
    return snap.docs.map((item) => fromDocData(item.data() as Record<string, unknown>, item.id));
  }

  async listarPublicadasPorFaixa(tenantId: string, faixaAlvo: Trilha['faixaAlvo']): Promise<Trilha[]> {
    return this.listar(tenantId, {
      status: 'publicada',
      faixaAlvo,
    });
  }

  async remover(id: string, tenantId: string): Promise<boolean> {
    const existing = await this.encontrarPorId(id, tenantId);

    if (!existing) {
      return false;
    }

    await deleteDoc(doc(this.firestore, 'trilhas', id));
    return true;
  }
}
