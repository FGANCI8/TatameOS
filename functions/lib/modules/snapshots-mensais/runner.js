"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executarSnapshotsMensaisCron = executarSnapshotsMensaisCron;
const repository_1 = require("./repository");
const service_1 = require("./service");
function formatMesReferencia(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}
function getPeriodoMesAnterior(referenciaAtual) {
    const dataReferencia = new Date(referenciaAtual.getFullYear(), referenciaAtual.getMonth(), 0, 23, 59, 59, 999);
    return {
        mes: dataReferencia.getMonth() + 1,
        ano: dataReferencia.getFullYear(),
        mesReferencia: formatMesReferencia(dataReferencia),
        dataReferencia,
    };
}
async function executarSnapshotsMensaisCron(now = new Date()) {
    const repository = new repository_1.SnapshotMensalRepositoryFirestore();
    const service = new service_1.SnapshotMensalService(repository);
    const periodo = getPeriodoMesAnterior(now);
    const tenants = await repository.listarTenantsAtivos();
    const tenantsLogs = [];
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
        }
        catch (error) {
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
