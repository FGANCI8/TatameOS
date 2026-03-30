import {
  collection,
  doc,
  getDoc,
  getDocs,
  getCountFromServer,
  query,
  setDoc,
  where,
  orderBy,
  limit,
  type Firestore,
  Timestamp,
  type QueryConstraint
} from 'firebase/firestore';
import type { IFeedbacksRepository } from '../feedbacks.repository';
import type {
  Feedback,
  FeedbackFiltroBase,
  FeedbackFirestoreDocument,
  FeedbackOrigemTipo,
  FeedbackStatus
} from '../types';

function toTimestamp(date: Date): Timestamp {
  return Timestamp.fromDate(date);
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

function toFirestoreDocument(feedback: Feedback): FeedbackFirestoreDocument {
  return {
    id: feedback.id,
    tenantId: feedback.tenantId,
    alunoId: feedback.alunoId,
    professorId: feedback.professorId,
    origemTipo: feedback.origemTipo,
    origemId: feedback.origemId,
    categoriaFalha: feedback.categoriaFalha,
    titulo: feedback.titulo,
    descricao: feedback.descricao,
    gravidade: feedback.gravidade,
    prioridade: feedback.prioridade,
    status: feedback.status,
    recomendacaoProfessor: feedback.recomendacaoProfessor,
    conclusaoAluno: feedback.conclusaoAluno,
    createdAt: toTimestamp(feedback.createdAt),
    updatedAt: toTimestamp(feedback.updatedAt),
    reviewedAt: feedback.reviewedAt ? toTimestamp(feedback.reviewedAt) : undefined,
    resolvedAt: feedback.resolvedAt ? toTimestamp(feedback.resolvedAt) : undefined
  };
}

function fromFirestoreDocument(data: FeedbackFirestoreDocument, fallbackId?: string): Feedback {
  return {
    id: data.id || fallbackId || '',
    tenantId: data.tenantId,
    alunoId: data.alunoId,
    professorId: data.professorId,
    origemTipo: data.origemTipo,
    origemId: data.origemId,
    categoriaFalha: data.categoriaFalha,
    titulo: data.titulo,
    descricao: data.descricao,
    gravidade: data.gravidade,
    prioridade: data.prioridade,
    status: data.status,
    recomendacaoProfessor: data.recomendacaoProfessor,
    conclusaoAluno: data.conclusaoAluno,
    createdAt: fromTimestamp(data.createdAt),
    updatedAt: fromTimestamp(data.updatedAt),
    reviewedAt: data.reviewedAt ? fromTimestamp(data.reviewedAt) : undefined,
    resolvedAt: data.resolvedAt ? fromTimestamp(data.resolvedAt) : undefined
  };
}

function fromDocData(data: Record<string, unknown>, fallbackId?: string): Feedback {
  return fromFirestoreDocument({
    id: typeof data.id === 'string' ? data.id : fallbackId || '',
    tenantId: String(data.tenantId),
    alunoId: String(data.alunoId),
    professorId: String(data.professorId),
    origemTipo: data.origemTipo as FeedbackOrigemTipo,
    origemId: String(data.origemId),
    categoriaFalha: data.categoriaFalha as Feedback['categoriaFalha'],
    titulo: String(data.titulo),
    descricao: String(data.descricao),
    gravidade: data.gravidade as Feedback['gravidade'],
    prioridade: data.prioridade as Feedback['prioridade'],
    status: data.status as FeedbackStatus,
    recomendacaoProfessor: data.recomendacaoProfessor as string | undefined,
    conclusaoAluno: data.conclusaoAluno as string | undefined,
    createdAt: data.createdAt as Timestamp,
    updatedAt: data.updatedAt as Timestamp,
    reviewedAt: data.reviewedAt as Timestamp | undefined,
    resolvedAt: data.resolvedAt as Timestamp | undefined
  }, fallbackId);
}

function buildFirestorePayload(feedback: Feedback): Record<string, unknown> {
  const payload: Record<string, unknown> = {
    id: feedback.id,
    tenantId: feedback.tenantId,
    alunoId: feedback.alunoId,
    professorId: feedback.professorId,
    origemTipo: feedback.origemTipo,
    origemId: feedback.origemId,
    titulo: feedback.titulo,
    descricao: feedback.descricao,
    gravidade: feedback.gravidade,
    prioridade: feedback.prioridade,
    status: feedback.status,
    createdAt: toTimestamp(feedback.createdAt),
    updatedAt: toTimestamp(feedback.updatedAt)
  };

  if (feedback.categoriaFalha) {
    payload.categoriaFalha = feedback.categoriaFalha;
  }

  if (feedback.recomendacaoProfessor) {
    payload.recomendacaoProfessor = feedback.recomendacaoProfessor;
  }

  if (feedback.conclusaoAluno) {
    payload.conclusaoAluno = feedback.conclusaoAluno;
  }

  if (feedback.reviewedAt) {
    payload.reviewedAt = toTimestamp(feedback.reviewedAt);
  }

  if (feedback.resolvedAt) {
    payload.resolvedAt = toTimestamp(feedback.resolvedAt);
  }

  return payload;
}

function buildFeedbackQueryConstraints(filters: FeedbackFiltroBase, tenantId: string): QueryConstraint[] {
  const constraints: QueryConstraint[] = [where('tenantId', '==', tenantId)];

  if (filters.alunoId) {
    constraints.push(where('alunoId', '==', filters.alunoId));
  }

  if (filters.professorId) {
    constraints.push(where('professorId', '==', filters.professorId));
  }

  if (filters.origemTipo) {
    constraints.push(where('origemTipo', '==', filters.origemTipo));
  }

  if (filters.origemId) {
    constraints.push(where('origemId', '==', filters.origemId));
  }

  if (filters.status) {
    constraints.push(where('status', '==', filters.status));
  }

  if (filters.prioridade) {
    constraints.push(where('prioridade', '==', filters.prioridade));
  }

  return constraints;
}

export class FeedbacksRepositoryFirestore implements IFeedbacksRepository {
  constructor(private db: Firestore) {}

  async save(feedback: Feedback, tenantId: string): Promise<Feedback> {
    const ref = doc(this.db, 'feedbacks', feedback.id);
    const normalized = feedback.tenantId === tenantId ? feedback : { ...feedback, tenantId };
    await setDoc(ref, buildFirestorePayload(normalized));
    return normalized;
  }

  async findById(id: string, tenantId: string): Promise<Feedback | null> {
    const ref = doc(this.db, 'feedbacks', id);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return null;
    }

    const data = snap.data() as Record<string, unknown>;

    if (String(data.tenantId) !== tenantId) {
      return null;
    }

    return fromDocData(data, snap.id);
  }

  async findByAlunoId(alunoId: string, tenantId: string): Promise<Feedback[]> {
    return this.findMany({ alunoId }, tenantId);
  }

  async findByProfessorId(professorId: string, tenantId: string): Promise<Feedback[]> {
    return this.findMany({ professorId }, tenantId);
  }

  async findByOrigem(origemTipo: FeedbackOrigemTipo, origemId: string, tenantId: string): Promise<Feedback[]> {
    return this.findMany({ origemTipo, origemId }, tenantId);
  }

  async findMany(filters: FeedbackFiltroBase, tenantId: string): Promise<Feedback[]> {
    const constraints = buildFeedbackQueryConstraints(filters, tenantId);
    constraints.push(orderBy('updatedAt', 'desc'));

    const q = query(collection(this.db, 'feedbacks'), ...constraints);
    const snap = await getDocs(q);

    return snap.docs.map((item) => fromDocData(item.data() as Record<string, unknown>, item.id));
  }

  async countMany(filters: FeedbackFiltroBase, tenantId: string): Promise<number> {
    const constraints = buildFeedbackQueryConstraints(filters, tenantId);
    const q = query(collection(this.db, 'feedbacks'), ...constraints);
    const snap = await getCountFromServer(q);
    return snap.data().count;
  }

  async findRecentByAlunoId(alunoId: string, tenantId: string, limitCount = 2): Promise<Feedback[]> {
    const q = query(
      collection(this.db, 'feedbacks'),
      where('tenantId', '==', tenantId),
      where('alunoId', '==', alunoId),
      orderBy('updatedAt', 'desc'),
      limit(limitCount)
    );

    const snap = await getDocs(q);
    return snap.docs.map((item) => fromDocData(item.data() as Record<string, unknown>, item.id));
  }

  async findRecentByProfessorId(professorId: string, tenantId: string, limitCount = 2): Promise<Feedback[]> {
    const q = query(
      collection(this.db, 'feedbacks'),
      where('tenantId', '==', tenantId),
      where('professorId', '==', professorId),
      orderBy('updatedAt', 'desc'),
      limit(limitCount)
    );

    const snap = await getDocs(q);
    return snap.docs.map((item) => fromDocData(item.data() as Record<string, unknown>, item.id));
  }

  async updateStatus(
    feedbackId: string,
    tenantId: string,
    status: FeedbackStatus,
    reviewedAt?: Date,
    resolvedAt?: Date,
    recomendacaoProfessor?: string,
    conclusaoAluno?: string
  ): Promise<Feedback> {
    const existing = await this.findById(feedbackId, tenantId);

    if (!existing) {
      throw new Error('Feedback não encontrado.');
    }

    const updated: Feedback = {
      ...existing,
      status,
      reviewedAt: reviewedAt ?? existing.reviewedAt,
      resolvedAt: resolvedAt ?? existing.resolvedAt,
      recomendacaoProfessor: recomendacaoProfessor ?? existing.recomendacaoProfessor,
      conclusaoAluno: conclusaoAluno ?? existing.conclusaoAluno,
      updatedAt: new Date(),
      tenantId
    };

    await setDoc(doc(this.db, 'feedbacks', feedbackId), buildFirestorePayload(updated));
    return updated;
  }
}
