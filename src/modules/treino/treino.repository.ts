import { collection, doc, setDoc, query, where, getDocs, Firestore, Timestamp, runTransaction } from 'firebase/firestore';
import { Treino } from './types';

export interface ITreinoRepository {
  createTreino(treino: Treino, tenantId: string): Promise<Treino>;
  registrarTreinoComHoras(treino: Treino, tenantId: string, horasAdicionais: number): Promise<Treino>;
  listTreinosByUser(userId: string, tenantId: string): Promise<Treino[]>;
}

export class TreinoRepositoryFirestore implements ITreinoRepository {
  constructor(private db: Firestore) {}

  async createTreino(treino: Treino, tenantId: string): Promise<Treino> {
    const ref = doc(this.db, 'treinos', treino.id);
    const payload = {
      id: treino.id,
      tenantId,
      alunoId: treino.alunoId,
      tecnicaFoco: treino.tecnicaId,
      dificuldade: treino.dificuldadePercebida,
      data: Timestamp.fromDate(treino.data),
      observacoes: treino.observacoes,
    };

    await setDoc(ref, payload);
    return treino;
  }

  async registrarTreinoComHoras(treino: Treino, tenantId: string, horasAdicionais: number): Promise<Treino> {
    const treinoRef = doc(this.db, 'treinos', treino.id);
    const alunoRef = doc(this.db, 'alunos', treino.alunoId);
    const payload = {
      id: treino.id,
      tenantId,
      alunoId: treino.alunoId,
      tecnicaFoco: treino.tecnicaId,
      dificuldade: treino.dificuldadePercebida,
      data: Timestamp.fromDate(treino.data),
      observacoes: treino.observacoes,
    };

    await runTransaction(this.db, async (transaction) => {
      const [treinoSnap, alunoSnap] = await Promise.all([
        transaction.get(treinoRef),
        transaction.get(alunoRef),
      ]);

      if (!alunoSnap.exists()) {
        throw new Error('Perfil do aluno não encontrado.');
      }

      if (alunoSnap.data()?.tenantId !== tenantId) {
        throw new Error('Aluno fora do tenant permitido.');
      }

      if (treinoSnap.exists()) {
        return;
      }

      const currentHours = Number(alunoSnap.data()?.horasTotais || 0);
      transaction.set(treinoRef, payload);
      transaction.update(alunoRef, {
        tenantId,
        horasTotais: Number((currentHours + horasAdicionais).toFixed(2)),
      });
    });

    return treino;
  }

  async listTreinosByUser(userId: string, tenantId: string): Promise<Treino[]> {
    const q = query(collection(this.db, 'treinos'), where('tenantId', '==', tenantId), where('alunoId', '==', userId));
    const snapshot = await getDocs(q);

    const treinos = snapshot.docs.map(doc => {
      const dbData = doc.data();
      return {
        id: dbData.id || doc.id,
        tenantId: dbData.tenantId || tenantId,
        alunoId: dbData.alunoId,
        tecnicaId: dbData.tecnicaFoco,
        dificuldadePercebida: dbData.dificuldade,
        data: dbData.data.toDate(),
        observacoes: dbData.observacoes || ''
      } as Treino;
    });

    return treinos.sort((a, b) => b.data.getTime() - a.data.getTime());
  }
}

export { TreinoRepositoryFirestore as TreinoRepository };
