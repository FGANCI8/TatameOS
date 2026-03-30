import {
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  runTransaction,
  setDoc,
  Timestamp,
  type Firestore,
  where,
} from 'firebase/firestore';
import type { AlunoRepositoryFirestore } from '../aluno/aluno.repository';
import type { Aluno } from '../aluno/types';
import type { PresencasRepositoryFirestore } from '../presencas/presencas.repository';
import type { CheckinIntent, CriarCheckinIntencaoInput, IFrequenciaRepository } from './types';

type CheckinIntentDocument = Omit<CheckinIntent, 'issuedAt' | 'expiresAt' | 'consumedAt' | 'createdAt' | 'updatedAt'> & {
  issuedAt: Timestamp;
  expiresAt: Timestamp;
  consumedAt?: Timestamp;
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

function cleanObject<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => typeof entry !== 'undefined')) as T;
}

function toDocument(intent: CheckinIntent): CheckinIntentDocument {
  return cleanObject({
    ...intent,
    issuedAt: toTimestamp(intent.issuedAt),
    expiresAt: toTimestamp(intent.expiresAt),
    consumedAt: intent.consumedAt ? toTimestamp(intent.consumedAt) : undefined,
    createdAt: toTimestamp(intent.createdAt),
    updatedAt: toTimestamp(intent.updatedAt),
  });
}

function fromDocument(document: CheckinIntentDocument, fallbackId?: string): CheckinIntent {
  return {
    id: document.id || fallbackId || '',
    tenantId: document.tenantId,
    alunoId: document.alunoId,
    qrToken: document.qrToken,
    issuedAt: fromTimestamp(document.issuedAt),
    expiresAt: fromTimestamp(document.expiresAt),
    status: document.status,
    consumedAt: document.consumedAt ? fromTimestamp(document.consumedAt) : undefined,
    consumedByUid: document.consumedByUid,
    createdAt: fromTimestamp(document.createdAt),
    updatedAt: fromTimestamp(document.updatedAt),
  };
}

function startOfYear(year: number): Date {
  return new Date(year, 0, 1, 0, 0, 0, 0);
}

export class FrequenciaRepositoryFirestore implements IFrequenciaRepository {
  constructor(
    private readonly firestore: Firestore,
    private readonly alunoRepository: AlunoRepositoryFirestore,
    private readonly presencasRepository: PresencasRepositoryFirestore,
  ) {}

  listarAlunosAtivos(tenantId: string): Promise<Aluno[]> {
    return this.alunoRepository.listAtivos(tenantId);
  }

  obterAlunoPorId(tenantId: string, alunoId: string): Promise<Aluno | null> {
    return this.alunoRepository.getById(alunoId, tenantId);
  }

  listarPresencasDoAlunoDesde(
    tenantId: string,
    alunoId: string,
    dataInicio: Date,
  ): Promise<Array<{ id: string; data: Date; horasIncrementadas: number }>> {
    return this.presencasRepository.listHistoricoPresencas({
      tenantId,
      alunoId,
      dataInicio,
      limite: 200,
    });
  }

  listarPresencasRecentes(
    tenantId: string,
    limite = 10,
  ): Promise<Array<{ id: string; alunoId: string; alunoNome: string; data: Date; horasIncrementadas: number }>> {
    return this.presencasRepository.listHistoricoPresencas({
      tenantId,
      limite,
    });
  }

  async contarPresencasNoPeriodo(tenantId: string, dataInicio: Date, dataFim: Date): Promise<number> {
    const q = query(
      collection(this.firestore, 'presencas'),
      where('tenantId', '==', tenantId),
      where('data', '>=', Timestamp.fromDate(dataInicio)),
      where('data', '<=', Timestamp.fromDate(dataFim)),
    );

    const snapshot = await getDocs(q);
    return snapshot.size;
  }

  async criarOuReutilizarIntencao(input: CriarCheckinIntencaoInput): Promise<CheckinIntent> {
    const active = await this.obterIntencaoAtivaPorAluno(input.tenantId, input.alunoId);

    if (active) {
      return active;
    }

    const now = new Date();
    const intent: CheckinIntent = {
      id: input.id,
      tenantId: input.tenantId,
      alunoId: input.alunoId,
      qrToken: input.qrToken,
      issuedAt: input.issuedAt,
      expiresAt: input.expiresAt,
      status: 'pending',
      createdAt: now,
      updatedAt: now,
    };
    const ref = doc(this.firestore, 'checkinIntencoes', intent.id);
    await setDoc(ref, toDocument(intent), { merge: false });
    return intent;
  }

  async obterIntencaoPorId(tenantId: string, intentId: string): Promise<CheckinIntent | null> {
    const snap = await getDoc(doc(this.firestore, 'checkinIntencoes', intentId));
    if (!snap.exists()) {
      return null;
    }

    const data = snap.data() as Record<string, unknown>;
    if (String(data.tenantId || '') !== tenantId) {
      return null;
    }

    return fromDocument(data as CheckinIntentDocument, snap.id);
  }

  async obterIntencaoAtivaPorAluno(tenantId: string, alunoId: string): Promise<CheckinIntent | null> {
    const q = query(
      collection(this.firestore, 'checkinIntencoes'),
      where('tenantId', '==', tenantId),
      where('alunoId', '==', alunoId),
      where('status', '==', 'pending'),
      where('expiresAt', '>', Timestamp.now()),
      orderBy('expiresAt', 'desc'),
      limit(1),
    );

    const snapshot = await getDocs(q);
    const docSnap = snapshot.docs[0];
    if (!docSnap) {
      return null;
    }

    return fromDocument(docSnap.data() as CheckinIntentDocument, docSnap.id);
  }

  async consumirIntencaoERegistrarPresenca(input: {
    tenantId: string;
    alunoId: string;
    intentId?: string;
    professorUid: string;
    origem: 'qr' | 'manual';
  }): Promise<{ id: string; tenantId: string; alunoId: string; data: Date; horasIncrementadas: number }> {
    const presencaRef = doc(collection(this.firestore, 'presencas'));
    const alunoRef = doc(this.firestore, 'alunos', input.alunoId);
    const intentRef = input.intentId ? doc(this.firestore, 'checkinIntencoes', input.intentId) : null;
    const now = new Date();
    const duracaoPadrao = 1.5;

    await runTransaction(this.firestore, async (transaction) => {
      const alunoSnap = await transaction.get(alunoRef);
      if (!alunoSnap.exists()) {
        throw new Error('Aluno não encontrado.');
      }

      if (String(alunoSnap.data()?.tenantId || '') !== input.tenantId) {
        throw new Error('Aluno fora do tenant permitido.');
      }

      if (intentRef) {
        const intentSnap = await transaction.get(intentRef);
        if (!intentSnap.exists()) {
          throw new Error('Intenção de check-in não encontrada.');
        }

        const intentData = intentSnap.data() as Record<string, unknown>;
        if (String(intentData.tenantId || '') !== input.tenantId) {
          throw new Error('Intenção fora do tenant permitido.');
        }

        if (String(intentData.alunoId || '') !== input.alunoId) {
          throw new Error('Intenção não corresponde ao aluno informado.');
        }

        if (String(intentData.status || '') !== 'pending') {
          throw new Error('Intenção de check-in já utilizada ou expirada.');
        }

        const expiresAt = fromTimestamp(intentData.expiresAt);
        if (expiresAt.getTime() < now.getTime()) {
          transaction.update(intentRef, {
            status: 'expired',
            updatedAt: Timestamp.now(),
          });
          throw new Error('QR Code expirado.');
        }

        transaction.update(intentRef, {
          status: 'consumed',
          consumedAt: Timestamp.now(),
          consumedByUid: input.professorUid,
          updatedAt: Timestamp.now(),
        });
      }

      transaction.set(presencaRef, {
        id: presencaRef.id,
        tenantId: input.tenantId,
        alunoId: input.alunoId,
        alunoNome: String(alunoSnap.data()?.nome || ''),
        data: Timestamp.fromDate(now),
        duracaoPadrao,
        horasIncrementadas: duracaoPadrao,
        origem: input.origem,
        registradoPorUid: input.professorUid,
        checkinIntentId: input.intentId || null,
      });

      transaction.update(alunoRef, {
        tenantId: input.tenantId,
        horasTotais: increment(duracaoPadrao),
        updatedAt: Timestamp.now(),
      });
    });

    return {
      id: presencaRef.id,
      tenantId: input.tenantId,
      alunoId: input.alunoId,
      data: now,
      horasIncrementadas: duracaoPadrao,
    };
  }

  async expirarIntencao(tenantId: string, intentId: string): Promise<void> {
    await runTransaction(this.firestore, async (transaction) => {
      const ref = doc(this.firestore, 'checkinIntencoes', intentId);
      const snapshot = await transaction.get(ref);

      if (!snapshot.exists()) {
        return;
      }

      const data = snapshot.data() as Record<string, unknown>;
      if (String(data.tenantId || '') !== tenantId) {
        throw new Error('Intenção fora do tenant permitido.');
      }

      if (String(data.status || '') === 'pending') {
        transaction.update(ref, {
          status: 'expired',
          updatedAt: Timestamp.now(),
        });
      }
    });
  }
}
