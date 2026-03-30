import { collection, doc, getDocs, orderBy, query, Timestamp, where, writeBatch, runTransaction } from 'firebase/firestore';
import { db } from '../../lib/firebase/client';
import type { ListarPagamentosFiltro, Pagamento, RegistrarPagamentoInput } from './types';
import type { Aluno } from '../aluno/types';

type PagamentoFirestoreDocument = Omit<Pagamento, 'dataPagamento'> & {
  dataPagamento: Timestamp;
};

function toDate(value: Timestamp | Date | undefined): Date {
  if (value instanceof Date) {
    return value;
  }

  return value?.toDate?.() || new Date();
}

function formatMesReferencia(value: Date): string {
  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

function toPagamento(docData: PagamentoFirestoreDocument, id: string): Pagamento {
  return {
    id,
    tenantId: docData.tenantId,
    alunoId: docData.alunoId,
    valor: Number(docData.valor || 0),
    dataPagamento: toDate(docData.dataPagamento),
    mesReferencia: docData.mesReferencia,
    metodo: docData.metodo,
  };
}

export class PagamentosRepositoryFirestore {
  async registrarPagamento(input: RegistrarPagamentoInput, tenantId: string): Promise<Pagamento> {
    const pagamentoId = doc(collection(db, 'pagamentos')).id;
    const dataPagamento = input.dataPagamento || new Date();
    const mesReferencia = input.mesReferencia || formatMesReferencia(dataPagamento);
    const alunoRef = doc(db, 'alunos', input.alunoId);
    const pagamentoRef = doc(db, 'pagamentos', pagamentoId);

    await runTransaction(db, async (transaction) => {
      const alunoSnap = await transaction.get(alunoRef);

      if (!alunoSnap.exists()) {
        throw new Error('Aluno não encontrado.');
      }

      if (alunoSnap.data()?.tenantId !== tenantId) {
        throw new Error('Aluno fora do tenant permitido.');
      }

      transaction.set(pagamentoRef, {
        id: pagamentoId,
        tenantId,
        alunoId: input.alunoId,
        valor: Number(input.valor),
        dataPagamento: Timestamp.fromDate(dataPagamento),
        mesReferencia,
        metodo: input.metodo,
      });

      transaction.update(alunoRef, {
        tenantId,
        statusFinanceiro: 'em_dia' as Aluno['statusFinanceiro'],
        updatedAt: Timestamp.now(),
      });
    });

    return {
      id: pagamentoId,
      tenantId,
      alunoId: input.alunoId,
      valor: Number(input.valor),
      dataPagamento,
      mesReferencia,
      metodo: input.metodo,
    };
  }

  async listarPagamentos(tenantId: string, filtros: ListarPagamentosFiltro = {}): Promise<Pagamento[]> {
    const constraints = [
      where('tenantId', '==', tenantId),
      orderBy('dataPagamento', 'desc'),
    ];

    if (filtros.alunoId) {
      constraints.unshift(where('alunoId', '==', filtros.alunoId));
    }

    if (filtros.mesReferencia) {
      constraints.unshift(where('mesReferencia', '==', filtros.mesReferencia));
    }

    const q = query(collection(db, 'pagamentos'), ...constraints);

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => toPagamento(docSnap.data() as PagamentoFirestoreDocument, docSnap.id));
  }

  async listarPagamentosDoMes(tenantId: string, mesReferencia: string): Promise<Pagamento[]> {
    return this.listarPagamentos(tenantId, { mesReferencia });
  }

  async listarPagamentosDoAno(tenantId: string, ano: number): Promise<Pagamento[]> {
    const start = new Date(ano, 0, 1, 0, 0, 0, 0);
    const end = new Date(ano, 11, 31, 23, 59, 59, 999);

    const q = query(
      collection(db, 'pagamentos'),
      where('tenantId', '==', tenantId),
      where('dataPagamento', '>=', Timestamp.fromDate(start)),
      where('dataPagamento', '<=', Timestamp.fromDate(end)),
      orderBy('dataPagamento', 'desc'),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => toPagamento(docSnap.data() as PagamentoFirestoreDocument, docSnap.id));
  }
}
