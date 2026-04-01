"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnapshotMensalRepositoryFirestore = void 0;
const firestore_1 = require("firebase-admin/firestore");
const firebase_admin_1 = require("../../lib/firebase-admin");
function toDate(value) {
    return value ? value.toDate() : new Date(0);
}
function toSnapshotMensal(doc) {
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
function snapshotId(tenantId, mesReferencia) {
    return `${tenantId}_${mesReferencia}`;
}
class SnapshotMensalRepositoryFirestore {
    async listarTenantsAtivos() {
        const snap = await firebase_admin_1.adminDb.collection('academias').where('status', '==', 'ativa').get();
        return snap.docs.map((docSnap) => {
            const data = docSnap.data();
            return {
                tenantId: docSnap.id,
                nome: data.nome?.trim() || 'Academia',
            };
        });
    }
    async listarAlunosDoTenant(tenantId) {
        const snap = await firebase_admin_1.adminDb.collection('alunos').where('tenantId', '==', tenantId).get();
        return snap.docs.map((docSnap) => {
            const data = docSnap.data();
            return {
                status: data.status,
                statusFinanceiro: data.statusFinanceiro,
                valorMensalidade: Number(data.valorMensalidade || 0),
            };
        });
    }
    async obterPorPeriodo(tenantId, mesReferencia) {
        const snap = await firebase_admin_1.adminDb.collection('snapshotsMensais').doc(snapshotId(tenantId, mesReferencia)).get();
        if (!snap.exists) {
            return null;
        }
        return toSnapshotMensal(snap.data());
    }
    async salvar(snapshot) {
        const ref = firebase_admin_1.adminDb.collection('snapshotsMensais').doc(snapshot.id);
        await ref.create({
            id: snapshot.id,
            tenantId: snapshot.tenantId,
            mes: snapshot.periodo.mes,
            ano: snapshot.periodo.ano,
            mesReferencia: snapshot.periodo.mesReferencia,
            dataReferencia: firestore_1.Timestamp.fromDate(snapshot.periodo.dataReferencia),
            dataRegistro: firestore_1.Timestamp.fromDate(snapshot.dataRegistro),
            alunosAtivos: snapshot.alunosAtivos,
            alunosInadimplentes: snapshot.alunosInadimplentes,
            valorMensalidadeTotal: Number(snapshot.valorMensalidadeTotal.toFixed(2)),
            totalAlunos: snapshot.totalAlunos,
        });
    }
    async listarPorTenant(tenantId) {
        const snap = await firebase_admin_1.adminDb
            .collection('snapshotsMensais')
            .where('tenantId', '==', tenantId)
            .get();
        return snap.docs
            .map((docSnap) => toSnapshotMensal(docSnap.data()))
            .sort((a, b) => b.periodo.dataReferencia.getTime() - a.periodo.dataReferencia.getTime());
    }
}
exports.SnapshotMensalRepositoryFirestore = SnapshotMensalRepositoryFirestore;
