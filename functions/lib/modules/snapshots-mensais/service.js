"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotMensalService = void 0;
function formatMesReferencia(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}
function getPeriodoReferencia(referencia) {
    const dataReferencia = new Date(referencia.getFullYear(), referencia.getMonth() + 1, 0, 23, 59, 59, 999);
    return {
        mes: dataReferencia.getMonth() + 1,
        ano: dataReferencia.getFullYear(),
        mesReferencia: formatMesReferencia(dataReferencia),
        dataReferencia,
    };
}
function toResumo(snapshot) {
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
class SnapshotMensalService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async gerarSnapshotMensal(tenantId, referencia) {
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
        const valorMensalidadeTotal = Number(alunosAtivos.reduce((sum, aluno) => sum + Number(aluno.valorMensalidade || 0), 0).toFixed(2));
        const snapshot = {
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
    async listarSnapshotsMensais(tenantId) {
        const snapshots = await this.repository.listarPorTenant(tenantId);
        return snapshots.map(toResumo);
    }
}
exports.SnapshotMensalService = SnapshotMensalService;
