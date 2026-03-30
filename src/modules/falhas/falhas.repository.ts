import { collection, doc, setDoc, query, where, getDocs, Firestore, Timestamp } from 'firebase/firestore';
import { Falha } from './types';

export interface IFalhasRepository {
  save(falha: Falha, tenantId: string): Promise<Falha>;
  findByAlunoId(alunoId: string, tenantId: string): Promise<Falha[]>;
}

export class FalhasRepository implements IFalhasRepository {
  constructor(private db: Firestore) {}

  async save(falha: Falha, tenantId: string): Promise<Falha> {
    const ref = doc(this.db, 'falhas', falha.id);
    const payload: Record<string, unknown> = {
      id: falha.id,
      tenantId,
      alunoId: falha.alunoId,
      categoria: falha.categoria,
      descricao: falha.descricao,
      gravidade: falha.gravidade,
      data: Timestamp.fromDate(falha.data)
    };

    if (falha.lutaId) {
      payload.lutaId = falha.lutaId;
    }

    await setDoc(ref, payload);
    return falha;
  }

  async findByAlunoId(alunoId: string, tenantId: string): Promise<Falha[]> {
    const q = query(collection(this.db, 'falhas'), where('tenantId', '==', tenantId), where('alunoId', '==', alunoId));
    const qs = await getDocs(q);
    return qs.docs.map(d => {
      const data = d.data();
      return {
        tenantId: data.tenantId || tenantId,
        ...data,
        data: data.data.toDate()
      } as Falha;
    });
  }
}
