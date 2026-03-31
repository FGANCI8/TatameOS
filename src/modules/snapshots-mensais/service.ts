import type { AlunoRepositoryFirestore } from '../aluno/aluno.repository';
import type { ServiceResult } from '../core/types';
import type {
  ISnapshotMensalRepository,
  ISnapshotMensalService,
  SnapshotMensalPeriodo,
  SnapshotMensalResumo,
  SnapshotMensalRegistro,
} from './types';

function formatMesReferencia(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function calcularFimDoMes(referencia: Date): Date {
  return new Date(
    referencia.getFullYear(),
    referencia.getMonth() + 1,
    0,
    23,
    59,
    59,
    999,
  );
}

function montarPeriodo(referencia: Date): SnapshotMensalPeriodo {
  const dataReferencia = calcularFimDoMes(referencia);
  return {
    mes: dataReferencia.getMonth() + 1,
    ano: dataReferencia.getFullYear(),
    mesReferencia: formatMesReferencia(dataReferencia),
    dataReferencia,
  };
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

function validarTenantId(tenantId: string | null): tenantId is string {
  return typeof tenantId === 'string' && tenantId.trim().length > 0;
}

export class SnapshotMensalService implements ISnapshotMensalService {
  constructor(
    private readonly alunoRepository: AlunoRepositoryFirestore,
    private readonly snapshotRepository: ISnapshotMensalRepository,
  ) {}

  async gerarSnapshotMensal(tenantId: string | null, referencia: Date = new Date()): Promise<ServiceResult<SnapshotMensalResumo>> {
    try {
      if (!validarTenantId(tenantId)) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const periodo = montarPeriodo(referencia);
      const dataRegistro = new Date();
      const mesReferencia = periodo.mesReferencia;

      const alunos = await this.alunoRepository.listAll(tenantId);
      const alunosAtivos = alunos.filter((aluno) => aluno.status === 'Ativo');
      const alunosInadimplentes = alunosAtivos.filter((aluno) => aluno.statusFinanceiro === 'atrasado');
      const valorMensalidadeTotal = Number(
        alunosAtivos.reduce((sum, aluno) => sum + Number(aluno.valorMensalidade || 0), 0).toFixed(2),
      );

      const snapshot: SnapshotMensalRegistro = {
        id: `${tenantId}_${mesReferencia}`,
        tenantId,
        periodo,
        dataRegistro,
        alunosAtivos: alunosAtivos.length,
        alunosInadimplentes: alunosInadimplentes.length,
        valorMensalidadeTotal,
        totalAlunos: alunos.length,
      };

      await this.snapshotRepository.salvar(snapshot);

      return { success: true, data: toResumo(snapshot) };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao gerar snapshot mensal.' };
    }
  }

  async obterSnapshotMensal(
    tenantId: string | null,
    mes: number,
    ano: number,
  ): Promise<ServiceResult<SnapshotMensalResumo>> {
    try {
      if (!validarTenantId(tenantId)) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!Number.isInteger(mes) || mes < 1 || mes > 12) {
        return { success: false, error: 'Mês inválido.' };
      }

      if (!Number.isInteger(ano) || ano < 2000) {
        return { success: false, error: 'Ano inválido.' };
      }

      const mesReferencia = `${ano}-${String(mes).padStart(2, '0')}`;
      const snapshot = await this.snapshotRepository.obterPorPeriodo(tenantId, mesReferencia);

      if (!snapshot) {
        return { success: false, error: 'Snapshot mensal não encontrado.' };
      }

      return { success: true, data: toResumo(snapshot) };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao obter snapshot mensal.' };
    }
  }

  async listarSnapshotsMensais(tenantId: string | null): Promise<ServiceResult<SnapshotMensalResumo[]>> {
    try {
      if (!validarTenantId(tenantId)) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const snapshots = await this.snapshotRepository.listarPorTenant(tenantId);
      return { success: true, data: snapshots.map(toResumo) };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar snapshots mensais.' };
    }
  }
}
