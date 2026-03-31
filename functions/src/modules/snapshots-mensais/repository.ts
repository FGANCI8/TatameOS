import { Timestamp } from 'firebase-admin/firestore';
import { adminDb } from '../../lib/firebase-admin';
import type {
  SnapshotMensalAlunoOperacional,
  SnapshotMensalFirestoreDocument,
  SnapshotMensalPeriodo,
  SnapshotMensalRegistro,
  SnapshotMensalTenantAtivo,
} from './types';

function toDate(value: Timestamp | undefined): Date {
  return value ? value.toDate() : new Date(0);
}

function toSnapshotMensal(doc: SnapshotMensalFirestoreDocument): SnapshotMensalRegistro {
  return {
    id: doc.id,
    tenantId: doc.tenantId,
    periodo: {
      mes: doc.mes,
      ano: doc.ano,
      mesReferencia: doc.mesReferencia,
      dataReferencia: toDate(doc.dataReferencia),
    },
    dataRegistro: toDate(doc.dataRegistro),
    alunosAtivos: Number(doc.alunosAtivos || 0),
    alunosInadimplentes: Number(doc.alunosInadimplentes || 0),
    valorMensalidadeTotal: Number(doc.valorMensalidadeTotal || 0),
    totalAlunos: Number(doc.totalAlunos || 0),
  };
}

function snapshotId(tenantId: string, mesReferencia: string): string {
  return `${tenantId}_${mesReferencia}`;
}

export class SnapshotMensalRepositoryFirestore {
  async listarTenantsAtivos(): Promise<SnapshotMensalTenantAtivo[]> {
    const snap = await adminDb.collection('academias').where('status', '==', 'ativa').get();

    return snap.docs.map((docSnap) => {
      const data = docSnap.data() as { nome?: string };
      return {
        tenantId: docSnap.id,
        nome: data.nome?.trim() || 'Academia',
      };
    });
  }

  async listarAlunosDoTenant(tenantId: string): Promise<SnapshotMensalAlunoOperacional[]> {
    const snap = await adminDb.collection('alunos').where('tenantId', '==', tenantId).get();

    return snap.docs.map((docSnap) => {
      const data = docSnap.data() as SnapshotMensalAlunoOperacional;
      return {
        status: data.status,
        statusFinanceiro: data.statusFinanceiro,
        valorMensalidade: Number(data.valorMensalidade || 0),
      };
    });
  }

  async obterPorPeriodo(tenantId: string, mesReferencia: string): Promise<SnapshotMensalRegistro | null> {
    const snap = await adminDb.collection('snapshotsMensais').doc(snapshotId(tenantId, mesReferencia)).get();

    if (!snap.exists) {
      return null;
    }

    return toSnapshotMensal(snap.data() as SnapshotMensalFirestoreDocument);
  }

  async salvar(snapshot: SnapshotMensalRegistro): Promise<void> {
    const ref = adminDb.collection('snapshotsMensais').doc(snapshot.id);
    await ref.create({
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

  async listarPorTenant(tenantId: string): Promise<SnapshotMensalRegistro[]> {
    const snap = await adminDb
      .collection('snapshotsMensais')
      .where('tenantId', '==', tenantId)
      .get();

    return snap.docs
      .map((docSnap) => toSnapshotMensal(docSnap.data() as SnapshotMensalFirestoreDocument))
      .sort((a, b) => b.periodo.dataReferencia.getTime() - a.periodo.dataReferencia.getTime());
  }
}
