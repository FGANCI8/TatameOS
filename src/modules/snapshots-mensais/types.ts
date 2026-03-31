import type { ServiceResult } from '../core/types';

export interface SnapshotMensalPeriodo {
  mes: number;
  ano: number;
  mesReferencia: string;
  dataReferencia: Date;
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

export interface SnapshotMensalResumo {
  tenantId: string;
  periodo: SnapshotMensalPeriodo;
  dataRegistro: Date;
  alunosAtivos: number;
  alunosInadimplentes: number;
  valorMensalidadeTotal: number;
  totalAlunos: number;
}

export interface ISnapshotMensalRepository {
  salvar(snapshot: SnapshotMensalRegistro): Promise<void>;
  obterPorPeriodo(tenantId: string, mesReferencia: string): Promise<SnapshotMensalRegistro | null>;
  listarPorTenant(tenantId: string): Promise<SnapshotMensalRegistro[]>;
  listarRecentes(tenantId: string, limite?: number): Promise<SnapshotMensalResumo[]>;
}

export interface ISnapshotMensalService {
  gerarSnapshotMensal(tenantId: string | null, referencia?: Date): Promise<ServiceResult<SnapshotMensalResumo>>;
  obterSnapshotMensal(
    tenantId: string | null,
    mes: number,
    ano: number,
  ): Promise<ServiceResult<SnapshotMensalResumo>>;
  listarSnapshotsMensais(tenantId: string | null): Promise<ServiceResult<SnapshotMensalResumo[]>>;
}
