import {
  collection,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
  runTransaction,
  setDoc,
  Timestamp,
  type Firestore,
  where,
} from 'firebase/firestore';
import { db } from '../../lib/firebase/client';
import type {
  INotificacoesTransacionaisRepository,
  NotificacaoTransacionalRegistro,
  StatusNotificacaoTransacional,
} from './types';

type NotificacaoTransacionalDocument = Omit<NotificacaoTransacionalRegistro, 'createdAt' | 'sentAt'> & {
  createdAt: Timestamp;
  sentAt?: Timestamp;
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

function toDocument(registro: NotificacaoTransacionalRegistro): NotificacaoTransacionalDocument {
  return cleanObject({
    ...registro,
    createdAt: toTimestamp(registro.createdAt),
    sentAt: registro.sentAt ? toTimestamp(registro.sentAt) : undefined,
  });
}

function fromDocument(document: NotificacaoTransacionalDocument, fallbackId?: string): NotificacaoTransacionalRegistro {
  return {
    id: document.id || fallbackId || '',
    tenantId: document.tenantId,
    alunoId: document.alunoId,
    eventoStripeId: document.eventoStripeId,
    motivo: document.motivo,
    canal: document.canal,
    destino: document.destino,
    assunto: document.assunto,
    mensagem: document.mensagem,
    status: document.status,
    providerMessageId: document.providerMessageId,
    errorMessage: document.errorMessage,
    metadata: document.metadata,
    createdAt: fromTimestamp(document.createdAt),
    sentAt: document.sentAt ? fromTimestamp(document.sentAt) : undefined,
  };
}

function mapStatus(status?: StatusNotificacaoTransacional): StatusNotificacaoTransacional {
  return status || 'pending';
}

export class NotificacoesTransacionaisRepositoryFirestore implements INotificacoesTransacionaisRepository {
  constructor(private readonly firestore: Firestore = db) {}

  async registrarSeNovo(
    registro: NotificacaoTransacionalRegistro,
  ): Promise<{ created: boolean; duplicated: boolean }> {
    const ref = doc(this.firestore, 'notificacoesEnviadas', registro.id);

    const result = await runTransaction(this.firestore, async (transaction) => {
      const snapshot = await transaction.get(ref);

      if (snapshot.exists()) {
        const data = snapshot.data() as Record<string, unknown>;
        if (String(data.tenantId || '') !== String(registro.tenantId || '')) {
          throw new Error('Notificação fora do tenant permitido.');
        }

        return { created: false, duplicated: true };
      }

      transaction.set(ref, toDocument({ ...registro, status: mapStatus(registro.status) }));
      return { created: true, duplicated: false };
    });

    return result;
  }

  async atualizarResultado(
    id: string,
    patch: Partial<Pick<NotificacaoTransacionalRegistro, 'status' | 'providerMessageId' | 'errorMessage' | 'sentAt'>>,
  ): Promise<void> {
    await setDoc(
      doc(this.firestore, 'notificacoesEnviadas', id),
      cleanObject({
        ...patch,
        sentAt: patch.sentAt ? toTimestamp(patch.sentAt) : undefined,
      }),
      { merge: true },
    );
  }

  async listarPorAluno(tenantId: string, alunoId: string, limite = 10): Promise<NotificacaoTransacionalRegistro[]> {
    const q = query(
      collection(this.firestore, 'notificacoesEnviadas'),
      where('tenantId', '==', tenantId),
      where('alunoId', '==', alunoId),
      orderBy('createdAt', 'desc'),
      limit(limite),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => fromDocument(docSnap.data() as NotificacaoTransacionalDocument, docSnap.id));
  }
}
