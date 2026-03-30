import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  Timestamp,
  type Firestore,
  runTransaction,
  where,
} from 'firebase/firestore';
import { db } from '../../lib/firebase/client';
import type {
  IStripeRepository,
  StripeCustomer,
  StripeSubscription,
  StripeWebhookEvent,
  StripeWebhookProcessingStatus,
} from './types';

type StripeCustomerDocument = Omit<StripeCustomer, 'createdAt' | 'updatedAt'> & {
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

type StripeSubscriptionDocument = Omit<StripeSubscription, 'createdAt' | 'updatedAt'> & {
  createdAt: Timestamp;
  updatedAt: Timestamp;
};

type StripeWebhookEventDocument = Omit<StripeWebhookEvent, 'receivedAt' | 'processedAt'> & {
  receivedAt: Timestamp;
  processedAt?: Timestamp;
};

function toTimestamp(value: Date): Timestamp {
  return Timestamp.fromDate(value);
}

function cleanObject<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(Object.entries(value).filter(([, entry]) => typeof entry !== 'undefined')) as T;
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

function toCustomerDocument(customer: StripeCustomer): StripeCustomerDocument {
  return cleanObject({
    ...customer,
    createdAt: toTimestamp(customer.createdAt),
    updatedAt: toTimestamp(customer.updatedAt),
  });
}

function toSubscriptionDocument(subscription: StripeSubscription): StripeSubscriptionDocument {
  return cleanObject({
    ...subscription,
    createdAt: toTimestamp(subscription.createdAt),
    updatedAt: toTimestamp(subscription.updatedAt),
  });
}

function toEventDocument(evento: StripeWebhookEvent): StripeWebhookEventDocument {
  return cleanObject({
    ...evento,
    receivedAt: toTimestamp(evento.receivedAt),
    processedAt: evento.processedAt ? toTimestamp(evento.processedAt) : undefined,
  });
}

function fromCustomerDocument(document: StripeCustomerDocument, fallbackId?: string): StripeCustomer {
  return {
    id: document.id || fallbackId || '',
    tenantId: document.tenantId,
    alunoId: document.alunoId,
    nome: document.nome,
    email: document.email,
    externalReference: document.externalReference,
    metadata: document.metadata,
    createdAt: fromTimestamp(document.createdAt),
    updatedAt: fromTimestamp(document.updatedAt),
  };
}

function fromSubscriptionDocument(document: StripeSubscriptionDocument, fallbackId?: string): StripeSubscription {
  return {
    id: document.id || fallbackId || '',
    tenantId: document.tenantId,
    customerId: document.customerId,
    alunoId: document.alunoId,
    priceId: document.priceId,
    status: document.status,
    currentPeriodStart: document.currentPeriodStart ? fromTimestamp(document.currentPeriodStart) : undefined,
    currentPeriodEnd: document.currentPeriodEnd ? fromTimestamp(document.currentPeriodEnd) : undefined,
    cancelAtPeriodEnd: document.cancelAtPeriodEnd,
    metadata: document.metadata,
    createdAt: fromTimestamp(document.createdAt),
    updatedAt: fromTimestamp(document.updatedAt),
  };
}

function fromEventDocument(document: StripeWebhookEventDocument, fallbackId?: string): StripeWebhookEvent {
  return {
    id: document.id || fallbackId || '',
    tenantId: document.tenantId,
    alunoId: document.alunoId,
    customerId: document.customerId,
    subscriptionId: document.subscriptionId,
    type: document.type,
    action: document.action,
    livemode: document.livemode,
    receivedAt: fromTimestamp(document.receivedAt),
    processedAt: document.processedAt ? fromTimestamp(document.processedAt) : undefined,
    status: document.status,
    errorMessage: document.errorMessage,
    rawPayload: document.rawPayload,
  };
}

function mapStatus(status?: StripeWebhookProcessingStatus): StripeWebhookProcessingStatus {
  return status || 'pending';
}

function startOfYear(ano: number): Date {
  return new Date(ano, 0, 1, 0, 0, 0, 0);
}

function endOfYear(ano: number): Date {
  return new Date(ano, 11, 31, 23, 59, 59, 999);
}

export class StripeRepositoryFirestore implements IStripeRepository {
  constructor(private readonly firestore: Firestore = db) {}

  async registrarEventoSeNovo(evento: StripeWebhookEvent): Promise<{ created: boolean; duplicated: boolean }> {
    const ref = doc(this.firestore, 'stripeEvents', evento.id);

    const result = await runTransaction(this.firestore, async (transaction) => {
      const snapshot = await transaction.get(ref);

      if (snapshot.exists()) {
        const data = snapshot.data() as Record<string, unknown>;
        if (String(data.tenantId || '') !== String(evento.tenantId || '')) {
          throw new Error('Evento Stripe fora do tenant permitido.');
        }

        return { created: false, duplicated: true };
      }

      transaction.set(ref, toEventDocument({ ...evento, status: mapStatus(evento.status) }));
      return { created: true, duplicated: false };
    });

    return result;
  }

  async atualizarEventoProcessado(
    evento: StripeWebhookEvent,
    payload: Pick<StripeWebhookEvent, 'status' | 'action' | 'alunoId' | 'customerId' | 'subscriptionId' | 'errorMessage'>,
  ): Promise<void> {
    await setDoc(
      doc(this.firestore, 'stripeEvents', evento.id),
      {
        ...toEventDocument({
          ...evento,
          ...payload,
          receivedAt: evento.receivedAt,
          processedAt: payload.status === 'processed' ? new Date() : evento.processedAt,
        }),
      },
      { merge: true },
    );
  }

  async salvarCustomer(customer: StripeCustomer): Promise<StripeCustomer> {
    await setDoc(doc(this.firestore, 'stripeCustomers', customer.id), toCustomerDocument(customer), { merge: true });
    return customer;
  }

  async salvarSubscription(subscription: StripeSubscription): Promise<StripeSubscription> {
    await setDoc(
      doc(this.firestore, 'stripeSubscriptions', subscription.id),
      toSubscriptionDocument(subscription),
      { merge: true },
    );
    return subscription;
  }

  async obterCustomerPorAluno(tenantId: string, alunoId: string): Promise<StripeCustomer | null> {
    const q = query(
      collection(this.firestore, 'stripeCustomers'),
      where('tenantId', '==', tenantId),
      where('alunoId', '==', alunoId),
      limit(1),
    );

    const snapshot = await getDocs(q);
    const docSnap = snapshot.docs[0];
    if (!docSnap) return null;

    return fromCustomerDocument(docSnap.data() as StripeCustomerDocument, docSnap.id);
  }

  async obterSubscriptionPorAluno(tenantId: string, alunoId: string): Promise<StripeSubscription | null> {
    const q = query(
      collection(this.firestore, 'stripeSubscriptions'),
      where('tenantId', '==', tenantId),
      where('alunoId', '==', alunoId),
      orderBy('updatedAt', 'desc'),
      limit(1),
    );

    const snapshot = await getDocs(q);
    const docSnap = snapshot.docs[0];
    if (!docSnap) return null;

    return fromSubscriptionDocument(docSnap.data() as StripeSubscriptionDocument, docSnap.id);
  }

  async listarEventosPorAluno(tenantId: string, alunoId: string, limite = 5): Promise<StripeWebhookEvent[]> {
    const q = query(
      collection(this.firestore, 'stripeEvents'),
      where('tenantId', '==', tenantId),
      where('alunoId', '==', alunoId),
      orderBy('receivedAt', 'desc'),
      limit(limite),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => fromEventDocument(docSnap.data() as StripeWebhookEventDocument, docSnap.id));
  }

  async listarEventosDoAno(tenantId: string, ano: number, limite = 500): Promise<StripeWebhookEvent[]> {
    const q = query(
      collection(this.firestore, 'stripeEvents'),
      where('tenantId', '==', tenantId),
      where('receivedAt', '>=', Timestamp.fromDate(startOfYear(ano))),
      where('receivedAt', '<=', Timestamp.fromDate(endOfYear(ano))),
      orderBy('receivedAt', 'desc'),
      limit(limite),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => fromEventDocument(docSnap.data() as StripeWebhookEventDocument, docSnap.id));
  }
}
