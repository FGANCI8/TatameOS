import { SnapshotMensalRepositoryFirestore } from './repository';
import { SnapshotMensalService } from './service';
import type { SnapshotMensalPeriodo } from './types';

function formatMesReferencia(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function getPeriodoMesAnterior(referenciaAtual: Date): SnapshotMensalPeriodo {
  const dataReferencia = new Date(
    referenciaAtual.getFullYear(),
    referenciaAtual.getMonth(),
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

export interface SnapshotMensalTenantProcessingLog {
  tenantId: string;
  tenantNome: string;
  mesReferencia: string;
  status: 'created' | 'skipped' | 'error';
  message: string;
}

export interface SnapshotMensalBatchLog {
  periodo: SnapshotMensalPeriodo;
  totalTenants: number;
  created: number;
  skipped: number;
  failed: number;
  tenants: SnapshotMensalTenantProcessingLog[];
}

export async function executarSnapshotsMensaisCron(now = new Date()): Promise<SnapshotMensalBatchLog> {
  const repository = new SnapshotMensalRepositoryFirestore();
  const service = new SnapshotMensalService(repository);
  const periodo = getPeriodoMesAnterior(now);
  const tenants = await repository.listarTenantsAtivos();
  const tenantsLogs: SnapshotMensalTenantProcessingLog[] = [];

  console.log(JSON.stringify({
    level: 'info',
    event: 'snapshots_mensais_start',
    periodo,
    totalTenants: tenants.length,
  }));

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const tenant of tenants) {
    try {
      const result = await service.gerarSnapshotMensal(tenant.tenantId, periodo.dataReferencia);
      created += result.criado ? 1 : 0;
      skipped += result.criado ? 0 : 1;

      tenantsLogs.push({
        tenantId: tenant.tenantId,
        tenantNome: tenant.nome,
        mesReferencia: periodo.mesReferencia,
        status: result.criado ? 'created' : 'skipped',
        message: result.criado
          ? 'Snapshot mensal persistido com sucesso.'
          : 'Snapshot já existia para o período.',
      });

      console.log(JSON.stringify({
        level: 'info',
        event: 'snapshots_mensais_tenant_success',
        tenantId: tenant.tenantId,
        tenantNome: tenant.nome,
        mesReferencia: periodo.mesReferencia,
        alunosAtivos: result.alunosAtivos,
        alunosInadimplentes: result.alunosInadimplentes,
        valorMensalidadeTotal: result.valorMensalidadeTotal,
        criado: result.criado,
      }));
    } catch (error) {
      failed += 1;
      const message = error instanceof Error ? error.message : 'Erro desconhecido.';

      tenantsLogs.push({
        tenantId: tenant.tenantId,
        tenantNome: tenant.nome,
        mesReferencia: periodo.mesReferencia,
        status: 'error',
        message,
      });

      console.error(JSON.stringify({
        level: 'error',
        event: 'snapshots_mensais_tenant_error',
        tenantId: tenant.tenantId,
        tenantNome: tenant.nome,
        mesReferencia: periodo.mesReferencia,
        message,
      }));
    }
  }

  console.log(JSON.stringify({
    level: 'info',
    event: 'snapshots_mensais_finish',
    periodo,
    totalTenants: tenants.length,
    created,
    skipped,
    failed,
  }));

  return {
    periodo,
    totalTenants: tenants.length,
    created,
    skipped,
    failed,
    tenants: tenantsLogs,
  };
}
