import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';

export type CheckinIntentStatus = 'pending' | 'consumed' | 'expired' | 'revoked';
export type CheckinOrigin = 'qr' | 'manual';

export interface CheckinQrPayload {
  version: 1;
  tenantId: string;
  alunoId: string;
  issuedAt: number;
  expiresAt: number;
  nonce: string;
}

export interface CheckinIntent {
  id: string;
  tenantId: string;
  alunoId: string;
  qrToken: string;
  issuedAt: Date;
  expiresAt: Date;
  status: CheckinIntentStatus;
  consumedAt?: Date;
  consumedByUid?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FrequenciaMarcosAluno {
  chave: string;
  titulo: string;
  meta: number;
  conquistado: boolean;
}

export interface FrequenciaResumoAluno {
  totalPresencasAno: number;
  sequenciaAtual: number;
  ultimoCheckin?: Date;
  marcos: FrequenciaMarcosAluno[];
  proximoMarco: FrequenciaMarcosAluno | null;
  qrToken: string;
  expiresAt: Date;
}

export interface FrequenciaResumoProfessor {
  alunosAtivos: number;
  checkinsHoje: number;
  checkinsMes: number;
  marcosConquistadosHoje: number;
}

export interface FrequenciaAlunoPainel {
  aluno: Aluno;
  resumo: FrequenciaResumoAluno;
  presencasRecentes: Array<{
    id: string;
    data: Date;
    horasIncrementadas: number;
  }>;
}

export interface FrequenciaProfessorPainel {
  resumo: FrequenciaResumoProfessor;
  alunosAtivos: Aluno[];
  presencasRecentes: Array<{
    id: string;
    alunoId: string;
    alunoNome: string;
    data: Date;
    horasIncrementadas: number;
  }>;
}

export interface GerarCheckinAlunoInput {
  tenantId: string;
  alunoId: string;
}

export interface CriarCheckinIntencaoInput {
  id: string;
  tenantId: string;
  alunoId: string;
  qrToken: string;
  issuedAt: Date;
  expiresAt: Date;
}

export interface ValidarCheckinQrInput {
  tenantId: string;
  qrToken: string;
  professorUid: string;
}

export interface RegistrarCheckinManualInput {
  tenantId: string;
  alunoId: string;
  professorUid: string;
}

export interface IFrequenciaRepository {
  listarAlunosAtivos(tenantId: string): Promise<Aluno[]>;
  obterAlunoPorId(tenantId: string, alunoId: string): Promise<Aluno | null>;
  listarPresencasDoAlunoDesde(tenantId: string, alunoId: string, dataInicio: Date): Promise<Array<{ id: string; data: Date; horasIncrementadas: number }>>;
  listarPresencasRecentes(tenantId: string, limite?: number): Promise<Array<{ id: string; alunoId: string; alunoNome: string; data: Date; horasIncrementadas: number }>>;
  contarPresencasNoPeriodo(tenantId: string, dataInicio: Date, dataFim: Date): Promise<number>;
  criarOuReutilizarIntencao(input: CriarCheckinIntencaoInput): Promise<CheckinIntent>;
  obterIntencaoPorId(tenantId: string, intentId: string): Promise<CheckinIntent | null>;
  obterIntencaoAtivaPorAluno(tenantId: string, alunoId: string): Promise<CheckinIntent | null>;
  consumirIntencaoERegistrarPresenca(
    input: {
      tenantId: string;
      alunoId: string;
      intentId?: string;
      professorUid: string;
      origem: CheckinOrigin;
    },
  ): Promise<{ id: string; tenantId: string; alunoId: string; data: Date; horasIncrementadas: number }>;
  expirarIntencao(tenantId: string, intentId: string): Promise<void>;
}

export interface IFrequenciaService {
  obterPainelAluno(tenantId: string | null, alunoId: string | null): Promise<ServiceResult<FrequenciaAlunoPainel>>;
  obterPainelProfessor(tenantId: string | null, isProfessorOrAdmin: boolean): Promise<ServiceResult<FrequenciaProfessorPainel>>;
  validarCheckinQr(input: ValidarCheckinQrInput, isProfessorOrAdmin: boolean): Promise<ServiceResult<{ presencaId: string }>>;
  registrarCheckinManual(input: RegistrarCheckinManualInput, isProfessorOrAdmin: boolean): Promise<ServiceResult<{ presencaId: string }>>;
}
