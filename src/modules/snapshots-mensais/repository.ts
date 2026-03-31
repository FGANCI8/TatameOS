import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc, where, Timestamp, type Firestore } from 'firebase/firestore';
import type { ISnapshotMensalRepository, SnapshotMensalRegistro, SnapshotMensalResumo } from './types';

function toSnapshotMensal(data: Record<string, any>, id: string): SnapshotMensalRegistro {
  return {
    id,
    tenantId: data.tenantId,
    periodo: {
      mes: Number(data.mes || 0),
      ano: Number(data.ano || 0),
      mesReferencia: data.mesReferencia,
      dataReferencia: data.dataReferencia?.toDate?.() || new Date(0),
    },
    dataRegistro: data.dataRegistro?.toDate?.() || new Date(0),
    alunosAtivos: Number(data.alunosAtivos || 0),
    alunosInadimplentes: Number(data.alunosInadimplentes || 0),
    valorMensalidadeTotal: Number(data.valorMensalidadeTotal || 0),
    totalAlunos: Number(data.totalAlunos || 0),
  };
}

function snapshotId(tenantId: string, mesReferencia: string): string {
  return `${tenantId}_${mesReferencia}`;
}

function toResumo(snapshot: SnapshotMensalRegistro): SnapshotMensalResumo {
  return {
    tenantId: snapshot.tenantId,
    periodo: snapshot.periodo,
    dataRegistro: snapshot.dataRegistro,
    alunosAtivos: snapshot.alunosAtivos,
    alunosInadimplentes: snapshot.alunosInadimplentes,
    valorMensalidadeTotal: snapshot.valorMensalidadeTotal,
    totalAlunos: snapshot.totalAlunos,
  };
}

export class SnapshotMensalRepositoryFirestore implements ISnapshotMensalRepository {
  constructor(private readonly db: Firestore) {}

  async salvar(snapshot: SnapshotMensalRegistro): Promise<void> {
    const ref = doc(this.db, 'snapshotsMensais', snapshot.id);

    await setDoc(ref, {
      id: snapshot.id,
      tenantId: snapshot.tenantId,
      mes: snapshot.periodo.mes,
      ano: snapshot.periodo.ano,
      mesReferencia: snapshot.periodo.mesReferencia,
      dataReferencia: Timestamp.fromDate(snapshot.periodo.dataReferencia),
      dataRegistro: Timestamp.fromDate(snapshot.dataRegistro),
      alunosAtivos: snapshot.alunosAtivos,
      alunosInadimplentes: snapshot.alunosInadimplentes,
      valorMensalidadeTotal: Number(snapshot.valorMensalidadeTotal.toFixed(2)),
      totalAlunos: snapshot.totalAlunos,
    });
  }

  async obterPorPeriodo(tenantId: string, mesReferencia: string): Promise<SnapshotMensalRegistro | null> {
    const ref = doc(this.db, 'snapshotsMensais', snapshotId(tenantId, mesReferencia));
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      return null;
    }

    const data = snap.data() as Record<string, any>;
    return toSnapshotMensal(data, snap.id);
  }

  async listarPorTenant(tenantId: string): Promise<SnapshotMensalRegistro[]> {
    const q = query(
      collection(this.db, 'snapshotsMensais'),
      where('tenantId', '==', tenantId),
      orderBy('dataReferencia', 'desc'),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => toSnapshotMensal(docSnap.data() as Record<string, any>, docSnap.id));
  }

  async listarRecentes(tenantId: string, limite = 13): Promise<SnapshotMensalResumo[]> {
    const q = query(
      collection(this.db, 'snapshotsMensais'),
      where('tenantId', '==', tenantId),
      orderBy('dataReferencia', 'desc'),
      limit(limite),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs
      .map((docSnap) => toSnapshotMensal(docSnap.data() as Record<string, any>, docSnap.id))
      .sort((a, b) => b.periodo.dataReferencia.getTime() - a.periodo.dataReferencia.getTime())
      .map(toResumo);
  }
}
