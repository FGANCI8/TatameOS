import { Timestamp } from 'firebase-admin/firestore';

export interface SnapshotMensalPeriodo {
  mes: number;
  ano: number;
  mesReferencia: string;
  dataReferencia: Date;
}

export interface SnapshotMensalTenantAtivo {
  tenantId: string;
  nome: string;
}

export interface SnapshotMensalAlunoOperacional {
  status?: string;
  statusFinanceiro?: string;
  valorMensalidade?: number;
}

export interface SnapshotMensalRegistro {
  id: string;
  tenantId: string;
  periodo: SnapshotMensalPeriodo;
  dataRegistro: Date;
  alunosAtivos: number;
  alunosInadimplentes: number;
  valorMensalidadeTotal: number;
  totalAlunos: number;
}

export interface SnapshotMensalFirestoreDocument {
  id: string;
  tenantId: string;
  mes: number;
  ano: number;
  mesReferencia: string;
  dataReferencia: Timestamp;
  dataRegistro: Timestamp;
  alunosAtivos: number;
  alunosInadimplentes: number;
  valorMensalidadeTotal: number;
  totalAlunos: number;
}

export interface SnapshotMensalResumo {
  tenantId: string;
  periodo: SnapshotMensalPeriodo;
  dataRegistro: Date;
  alunosAtivos: number;
  alunosInadimplentes: number;
  valorMensalidadeTotal: number;
  totalAlunos: number;
}

export interface SnapshotMensalProcessamentoResultado extends SnapshotMensalResumo {
  criado: boolean;
}
