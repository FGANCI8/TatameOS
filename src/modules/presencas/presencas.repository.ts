import { collection, doc, getDocs, query, runTransaction, Timestamp, where, increment, orderBy, limit, Firestore, type QueryConstraint } from 'firebase/firestore';
import type { AlunoChamadaItem, HistoricoPresencaItem, Presenca, RegistrarPresencaResult } from './types';

type HistoricoPresencaQuery = {
  tenantId: string;
  alunoId?: string | null;
  dataInicio?: Date | null;
  dataFim?: Date | null;
  limite?: number;
};

export class PresencasRepositoryFirestore {
  constructor(private db: Firestore) {}

  async listAlunosParaChamada(tenantId: string): Promise<AlunoChamadaItem[]> {
    const q = query(collection(this.db, 'alunos'), where('tenantId', '==', tenantId), orderBy('nome'));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        nome: data.nome,
        faixa: data.faixa,
        grau: data.grau,
        status: data.status,
        email: data.email,
        horasTotais: Number(data.horasTotais || 0),
      };
    });
  }

  async listPresencasRecentes(tenantId: string, max = 10): Promise<Presenca[]> {
    const q = query(
      collection(this.db, 'presencas'),
      where('tenantId', '==', tenantId),
      orderBy('data', 'desc'),
      limit(max),
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        tenantId: data.tenantId,
        alunoId: data.alunoId,
        data: data.data?.toDate?.() || new Date(),
        duracaoPadrao: Number(data.duracaoPadrao || 1.5),
        horasIncrementadas: Number(data.horasIncrementadas || 1.5),
      };
    });
  }

  async listPresencasDesde(tenantId: string, dataInicio: Date): Promise<Presenca[]> {
    const q = query(
      collection(this.db, 'presencas'),
      where('tenantId', '==', tenantId),
      where('data', '>=', Timestamp.fromDate(dataInicio)),
      orderBy('data', 'desc'),
    );
    const snapshot = await getDocs(q);

    return snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        tenantId: data.tenantId,
        alunoId: data.alunoId,
        data: data.data?.toDate?.() || new Date(),
        duracaoPadrao: Number(data.duracaoPadrao || 1.5),
        horasIncrementadas: Number(data.horasIncrementadas || 1.5),
      };
    });
  }

  async listHistoricoPresencas(filtros: HistoricoPresencaQuery): Promise<HistoricoPresencaItem[]> {
    const constraints: QueryConstraint[] = [
      where('tenantId', '==', filtros.tenantId),
    ];

    if (filtros.alunoId?.trim()) {
      constraints.push(where('alunoId', '==', filtros.alunoId.trim()));
    }

    if (filtros.dataInicio) {
      constraints.push(where('data', '>=', Timestamp.fromDate(filtros.dataInicio)));
    }

    if (filtros.dataFim) {
      constraints.push(where('data', '<=', Timestamp.fromDate(filtros.dataFim)));
    }

    constraints.push(orderBy('data', 'desc'));
    constraints.push(limit(filtros.limite || 20));

    const q = query(collection(this.db, 'presencas'), ...constraints);
    const snapshot = await getDocs(q);

    return snapshot.docs.map((docSnap) => {
      const data = docSnap.data();
      return {
        id: docSnap.id,
        tenantId: data.tenantId,
        alunoId: data.alunoId,
        alunoNome: data.alunoNome || data.alunoId,
        data: data.data?.toDate?.() || new Date(),
        duracaoPadrao: Number(data.duracaoPadrao || 1.5),
        horasIncrementadas: Number(data.horasIncrementadas || 1.5),
      };
    });
  }

  async registrarPresenca(input: { alunoId: string; tenantId: string; duracaoPadrao: number }): Promise<RegistrarPresencaResult> {
    const presencaRef = doc(this.db, 'presencas', globalThis.crypto.randomUUID());
    const alunoRef = doc(this.db, 'alunos', input.alunoId);
    const now = new Date();
    const duracaoPadrao = input.duracaoPadrao;
    const presenca: Presenca = {
      id: presencaRef.id,
      tenantId: input.tenantId,
      alunoId: input.alunoId,
      data: now,
      duracaoPadrao,
      horasIncrementadas: duracaoPadrao,
    };

    await runTransaction(this.db, async (transaction) => {
      const alunoSnap = await transaction.get(alunoRef);
      if (!alunoSnap.exists()) {
        throw new Error('Aluno não encontrado.');
      }

      if (alunoSnap.data()?.tenantId !== input.tenantId) {
        throw new Error('Aluno fora do tenant permitido.');
      }

      transaction.set(presencaRef, {
        id: presenca.id,
        tenantId: presenca.tenantId,
        alunoId: presenca.alunoId,
        data: Timestamp.fromDate(presenca.data),
        duracaoPadrao: presenca.duracaoPadrao,
        horasIncrementadas: presenca.horasIncrementadas,
      });

      transaction.update(alunoRef, {
        tenantId: input.tenantId,
        horasTotais: increment(duracaoPadrao),
      });
    });

    return { presenca };
  }
}
