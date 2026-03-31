import { SnapshotMensalRepositoryFirestore } from './repository';
import type {
  SnapshotMensalPeriodo,
  SnapshotMensalProcessamentoResultado,
  SnapshotMensalRegistro,
  SnapshotMensalResumo,
} from './types';

function formatMesReferencia(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function getPeriodoReferencia(referencia: Date): SnapshotMensalPeriodo {
  const dataReferencia = new Date(
    referencia.getFullYear(),
    referencia.getMonth() + 1,
    0,
    23,
    59,
    59,
    999,
  );

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

export class SnapshotMensalService {
  constructor(private readonly repository: SnapshotMensalRepositoryFirestore) {}

  async gerarSnapshotMensal(
    tenantId: string,
    referencia: Date,
  ): Promise<SnapshotMensalProcessamentoResultado> {
    const periodo = getPeriodoReferencia(referencia);
    const existing = await this.repository.obterPorPeriodo(tenantId, periodo.mesReferencia);

    if (existing) {
      return {
        ...toResumo(existing),
        criado: false,
      };
    }

    const alunos = await this.repository.listarAlunosDoTenant(tenantId);
    const alunosAtivos = alunos.filter((aluno) => aluno.status === 'Ativo');
    const alunosInadimplentes = alunosAtivos.filter((aluno) => aluno.statusFinanceiro === 'atrasado');
    const valorMensalidadeTotal = Number(
      alunosAtivos.reduce((sum, aluno) => sum + Number(aluno.valorMensalidade || 0), 0).toFixed(2),
    );

    const snapshot: SnapshotMensalRegistro = {
      id: `${tenantId}_${periodo.mesReferencia}`,
      tenantId,
      periodo,
      dataRegistro: new Date(),
      alunosAtivos: alunosAtivos.length,
      alunosInadimplentes: alunosInadimplentes.length,
      valorMensalidadeTotal,
      totalAlunos: alunos.length,
    };

    await this.repository.salvar(snapshot);

    return {
      ...toResumo(snapshot),
      criado: true,
    };
  }

  async listarSnapshotsMensais(tenantId: string): Promise<SnapshotMensalResumo[]> {
    const snapshots = await this.repository.listarPorTenant(tenantId);
    return snapshots.map(toResumo);
  }
}
