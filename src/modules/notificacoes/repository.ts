import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, Timestamp, updateDoc, where, writeBatch } from 'firebase/firestore';
import { db } from '../../lib/firebase/client';
import type { AvisoAcademia, CriarNotificacaoInput, ListarAvisosParams, ListarNotificacoesParams, MarcarNotificacaoLidaInput, Notificacao, NotificacoesResumo } from './types';

type NotificacaoFirestoreDocument = Omit<Notificacao, 'createdAt'> & {
  createdAt: Timestamp;
};

type AvisoFirestoreDocument = Omit<AvisoAcademia, 'createdAt'> & {
  createdAt: Timestamp;
};

function toDate(value: Timestamp | Date | undefined): Date {
  if (value instanceof Date) {
    return value;
  }

  return value?.toDate?.() || new Date();
}

function toNotification(docData: NotificacaoFirestoreDocument, id: string): Notificacao {
  return {
    id,
    tenantId: docData.tenantId,
    destinatarioId: docData.destinatarioId,
    titulo: docData.titulo,
    mensagem: docData.mensagem,
    tipo: docData.tipo,
    lida: Boolean(docData.lida),
    createdAt: toDate(docData.createdAt),
  };
}

function toAviso(docData: AvisoFirestoreDocument, id: string): AvisoAcademia {
  return {
    id,
    tenantId: docData.tenantId,
    professorId: docData.professorId,
    titulo: docData.titulo,
    mensagem: docData.mensagem,
    tipo: docData.tipo,
    destinatariosCount: Number(docData.destinatariosCount || 0),
    createdAt: toDate(docData.createdAt),
  };
}

export class NotificacoesRepositoryFirestore {
  async listar({ tenantId, destinatarioId, limite = 5 }: ListarNotificacoesParams): Promise<NotificacoesResumo> {
    const q = query(
      collection(db, 'notificacoes'),
      where('tenantId', '==', tenantId),
      where('destinatarioId', '==', destinatarioId),
      orderBy('createdAt', 'desc'),
      limit(Math.min(Math.max(limite, 1), 20)),
    );

    const snapshot = await getDocs(q);
    const notificacoes = snapshot.docs.map((docSnap) => toNotification(docSnap.data() as NotificacaoFirestoreDocument, docSnap.id));

    return {
      total: notificacoes.length,
      naoLidas: notificacoes.filter((item) => !item.lida).length,
      notificacoes,
    };
  }

  async criar(input: CriarNotificacaoInput): Promise<Notificacao> {
    const id = `${input.tenantId}-${input.destinatarioId}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const ref = doc(db, 'notificacoes', id);
    const payload = {
      tenantId: input.tenantId,
      destinatarioId: input.destinatarioId,
      titulo: input.titulo,
      mensagem: input.mensagem,
      tipo: input.tipo,
      lida: false,
      createdAt: Timestamp.now(),
    };

    await setDoc(ref, payload);

    return {
      id,
      tenantId: input.tenantId,
      destinatarioId: input.destinatarioId,
      titulo: input.titulo,
      mensagem: input.mensagem,
      tipo: input.tipo,
      lida: false,
      createdAt: new Date(),
    };
  }

  async listarAvisos({ tenantId, professorId, limite = 10 }: ListarAvisosParams): Promise<AvisoAcademia[]> {
    const q = query(
      collection(db, 'avisos'),
      where('tenantId', '==', tenantId),
      where('professorId', '==', professorId),
      orderBy('createdAt', 'desc'),
      limit(Math.min(Math.max(limite, 1), 20)),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => toAviso(docSnap.data() as AvisoFirestoreDocument, docSnap.id));
  }

  async marcarComoLida(input: MarcarNotificacaoLidaInput): Promise<boolean> {
    const ref = doc(db, 'notificacoes', input.notificacaoId);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      return false;
    }

    const current = snapshot.data() as { tenantId?: string; destinatarioId?: string; lida?: boolean };
    if (current.tenantId !== input.tenantId || current.destinatarioId !== input.destinatarioId) {
      return false;
    }

    if (current.lida) {
      return false;
    }

    await updateDoc(ref, {
      lida: true,
    });

    return true;
  }

  async marcarTodasComoLidas(tenantId: string, destinatarioId: string): Promise<number> {
    const q = query(
      collection(db, 'notificacoes'),
      where('tenantId', '==', tenantId),
      where('destinatarioId', '==', destinatarioId),
      where('lida', '==', false),
      orderBy('createdAt', 'desc'),
      limit(500),
    );

    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      return 0;
    }

    const batch = writeBatch(db);
    snapshot.docs.forEach((docSnap) => {
      batch.update(docSnap.ref, { lida: true });
    });
    await batch.commit();

    return snapshot.size;
  }
}
