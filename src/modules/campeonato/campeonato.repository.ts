import { collection, doc, setDoc, query, where, getDocs, Firestore, Timestamp } from 'firebase/firestore';
import { Luta } from './types';

export interface ICampeonatoRepository {
  saveLuta(luta: Luta, tenantId: string): Promise<Luta>;
  findLutas(alunoId: string, tenantId: string, campeonatoId?: string): Promise<Luta[]>;
}

export class CampeonatoRepository implements ICampeonatoRepository {
  constructor(private db: Firestore) {}

  async saveLuta(luta: Luta, tenantId: string): Promise<Luta> {
    const ref = doc(this.db, 'lutas', luta.id);
    const payload: Record<string, unknown> = {
      id: luta.id,
      tenantId,
      campeonatoId: luta.campeonatoId,
      alunoId: luta.alunoId,
      resultado: luta.resultado,
      finalizacaoAplicada: luta.finalizacaoAplicada,
      finalizacaoSofrida: luta.finalizacaoSofrida,
      pontosPro: luta.pontosPro,
      pontosContra: luta.pontosContra,
      data: Timestamp.fromDate(luta.data)
    };

    if (luta.padraoErroInimigo) {
      payload.padraoErroInimigo = luta.padraoErroInimigo;
    }

    if (luta.padraoErroAluno) {
      payload.padraoErroAluno = luta.padraoErroAluno;
    }

    await setDoc(ref, payload);
    return luta;
  }

  async findLutas(alunoId: string, tenantId: string, campeonatoId?: string): Promise<Luta[]> {
    let q = query(collection(this.db, 'lutas'), where('tenantId', '==', tenantId), where('alunoId', '==', alunoId));

    if (campeonatoId) {
      q = query(collection(this.db, 'lutas'), where('tenantId', '==', tenantId), where('alunoId', '==', alunoId), where('campeonatoId', '==', campeonatoId));
    }

    const qs = await getDocs(q);
    return qs.docs.map(d => {
      const data = d.data();
      return {
        tenantId: data.tenantId || tenantId,
        ...data,
        data: data.data.toDate()
      } as Luta;
    });
  }
}
