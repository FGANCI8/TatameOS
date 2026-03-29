import { db } from '@/src/lib/firebase/client';
import { collection, addDoc, query, where, getDocs, orderBy, Timestamp } from 'firebase/firestore';

export interface TreinoInput {
  alunoId: string;
  tecnicaFoco: string;
  dificuldade: number;
  data: Date;
}

export const TreinoRepository = {
  async criarTreino(dados: TreinoInput) {
    return await addDoc(collection(db, 'treinos'), {
      ...dados,
      data: Timestamp.fromDate(dados.data),
    });
  },

  async buscarTreinosPorAluno(alunoId: string) {
    const q = query(
      collection(db, 'treinos'),
      where('alunoId', '==', alunoId),
      orderBy('data', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
};
