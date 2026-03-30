import { Firestore, doc, getDoc, setDoc, updateDoc, Timestamp, collection, getDocs, getCountFromServer, query, orderBy, where, runTransaction, writeBatch } from 'firebase/firestore';
import type { Aluno, AtualizarAlunoFinanceiroInput, AtualizarAlunoPerfilInput, GraduacaoLoteItem, GraduacaoLoteResultado, StatusFinanceiro } from './types';

function toAluno(data: Record<string, any>, id: string, tenantIdFallback: string): Aluno {
  return {
    id,
    tenantId: data.tenantId || tenantIdFallback,
    nome: data.nome,
    faixa: data.faixa,
    grau: Number(data.grau || 0),
    dataCadastro: data.dataCadastro?.toDate?.() || new Date(),
    horasTotais: Number(data.horasTotais || 0),
    status: data.status,
    statusFinanceiro: (data.statusFinanceiro as StatusFinanceiro) || 'em_dia',
    valorMensalidade: Number(data.valorMensalidade || 0),
    vencimentoMensalidade: typeof data.vencimentoMensalidade === 'number' ? data.vencimentoMensalidade : undefined,
    avatarUrl: data.avatarUrl,
    email: data.email,
  };
}

export class AlunoRepositoryFirestore {
  constructor(private db: Firestore) {}

  async getById(id: string, tenantId: string): Promise<Aluno | null> {
    const docRef = doc(this.db, 'alunos', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();

      if (data.tenantId !== tenantId) {
        return null;
      }

      return toAluno(data as Record<string, any>, docSnap.id, tenantId);
    }

    return null;
  }

  async create(aluno: Aluno, tenantId: string): Promise<void> {
    const docRef = doc(this.db, 'alunos', aluno.id);
    const payload: Record<string, unknown> = {
      id: aluno.id,
      tenantId,
      nome: aluno.nome,
      faixa: aluno.faixa,
      grau: aluno.grau,
      dataCadastro: Timestamp.fromDate(aluno.dataCadastro || new Date()),
      horasTotais: aluno.horasTotais,
      status: aluno.status,
      statusFinanceiro: aluno.statusFinanceiro || 'em_dia',
      valorMensalidade: Number(aluno.valorMensalidade || 0),
      email: aluno.email,
    };

    if (aluno.avatarUrl) {
      payload.avatarUrl = aluno.avatarUrl;
    }

    if (typeof aluno.vencimentoMensalidade === 'number') {
      payload.vencimentoMensalidade = aluno.vencimentoMensalidade;
    }

    await setDoc(docRef, payload);
  }

  async updateProgress(id: string, tenantId: string, update: Partial<Aluno>): Promise<void> {
    const docRef = doc(this.db, 'alunos', id);
    await updateDoc(docRef, { ...update, tenantId, updatedAt: Timestamp.now() });
  }

  async patchAluno(id: string, tenantId: string, patch: AtualizarAlunoPerfilInput): Promise<void> {
    const docRef = doc(this.db, 'alunos', id);
    const payload: Record<string, unknown> = {
      tenantId,
      updatedAt: Timestamp.now(),
    };

    if (typeof patch.faixa !== 'undefined') {
      payload.faixa = patch.faixa;
    }

    if (typeof patch.grau !== 'undefined') {
      payload.grau = patch.grau;
    }

    if (typeof patch.status !== 'undefined') {
      payload.status = patch.status;
    }

    await updateDoc(docRef, payload);
  }

  async patchFinanceiroAluno(id: string, tenantId: string, patch: AtualizarAlunoFinanceiroInput): Promise<void> {
    const docRef = doc(this.db, 'alunos', id);
    const payload: Record<string, unknown> = {
      tenantId,
      updatedAt: Timestamp.now(),
    };

    if (typeof patch.statusFinanceiro !== 'undefined') {
      payload.statusFinanceiro = patch.statusFinanceiro;
    }

    if (typeof patch.valorMensalidade !== 'undefined') {
      payload.valorMensalidade = patch.valorMensalidade;
    }

    if (typeof patch.vencimentoMensalidade !== 'undefined') {
      payload.vencimentoMensalidade = patch.vencimentoMensalidade;
    }

    await updateDoc(docRef, payload);
  }

  async patchAlunoCompleto(
    id: string,
    tenantId: string,
    perfil: Partial<AtualizarAlunoPerfilInput>,
    financeiro: Partial<AtualizarAlunoFinanceiroInput>,
  ): Promise<void> {
    const docRef = doc(this.db, 'alunos', id);
    const payload: Record<string, unknown> = {
      tenantId,
      updatedAt: Timestamp.now(),
    };

    if (typeof perfil.faixa !== 'undefined') {
      payload.faixa = perfil.faixa;
    }

    if (typeof perfil.grau !== 'undefined') {
      payload.grau = perfil.grau;
    }

    if (typeof perfil.status !== 'undefined') {
      payload.status = perfil.status;
    }

    if (typeof financeiro.statusFinanceiro !== 'undefined') {
      payload.statusFinanceiro = financeiro.statusFinanceiro;
    }

    if (typeof financeiro.valorMensalidade !== 'undefined') {
      payload.valorMensalidade = financeiro.valorMensalidade;
    }

    if (typeof financeiro.vencimentoMensalidade !== 'undefined') {
      payload.vencimentoMensalidade = financeiro.vencimentoMensalidade;
    }

    await updateDoc(docRef, payload);
  }

  async incrementHours(id: string, tenantId: string, horas: number): Promise<void> {
    const docRef = doc(this.db, 'alunos', id);
    await runTransaction(this.db, async (transaction) => {
      const snap = await transaction.get(docRef);

      if (!snap.exists()) {
        throw new Error('Aluno não encontrado.');
      }

      if (snap.data()?.tenantId !== tenantId) {
        throw new Error('Aluno fora do tenant permitido.');
      }

      const currentHours = Number(snap.data()?.horasTotais || 0);
      transaction.update(docRef, {
        tenantId,
        horasTotais: Number((currentHours + horas).toFixed(2)),
        updatedAt: Timestamp.now(),
      });
    });
  }

  async graduarAlunosEmLote(tenantId: string, graduacoes: GraduacaoLoteItem[]): Promise<GraduacaoLoteResultado> {
    if (graduacoes.length > 500) {
      throw new Error('O lote de graduação excede o limite de 500 operações.');
    }

    const snapshots = await Promise.all(
      graduacoes.map(async (graduacao) => {
        const docRef = doc(this.db, 'alunos', graduacao.id);
        const snap = await getDoc(docRef);

        if (!snap.exists()) {
          throw new Error(`Aluno ${graduacao.id} não encontrado.`);
        }

        if (snap.data()?.tenantId !== tenantId) {
          throw new Error(`Aluno ${graduacao.id} fora do tenant permitido.`);
        }

        return { docRef, snap };
      }),
    );

    const batch = writeBatch(this.db);
    const updatedAt = Timestamp.now();

    graduacoes.forEach((graduacao, index) => {
      const { docRef } = snapshots[index];
      batch.update(docRef, {
        tenantId,
        faixa: graduacao.faixa,
        grau: graduacao.grau,
        updatedAt,
      });
    });

    await batch.commit();

    const alunosAtualizados: Aluno[] = snapshots.map(({ snap }, index) => {
      const data = snap.data();
      const graduacao = graduacoes[index];

      return {
        id: graduacao.id,
        tenantId,
        nome: data.nome,
        faixa: graduacao.faixa,
        grau: graduacao.grau,
        dataCadastro: data.dataCadastro?.toDate?.() || new Date(),
        horasTotais: Number(data.horasTotais || 0),
        status: data.status,
        statusFinanceiro: (data.statusFinanceiro as StatusFinanceiro) || 'em_dia',
        valorMensalidade: Number(data.valorMensalidade || 0),
        vencimentoMensalidade: typeof data.vencimentoMensalidade === 'number' ? data.vencimentoMensalidade : undefined,
        avatarUrl: data.avatarUrl,
        email: data.email,
      } as Aluno;
    });

    return { total: alunosAtualizados.length, alunos: alunosAtualizados };
  }

  async listAll(tenantId: string, statusFinanceiro?: Aluno['statusFinanceiro']): Promise<Aluno[]> {
    const constraints = [where('tenantId', '==', tenantId), orderBy('nome')];
    if (statusFinanceiro) {
      constraints.splice(1, 0, where('statusFinanceiro', '==', statusFinanceiro));
    }

    const q = query(collection(this.db, 'alunos'), ...constraints);
    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => toAluno(docSnap.data() as Record<string, any>, docSnap.id, tenantId));
  }

  async listAtivos(tenantId: string): Promise<Aluno[]> {
    const q = query(
      collection(this.db, 'alunos'),
      where('tenantId', '==', tenantId),
      where('status', '==', 'Ativo'),
      orderBy('nome'),
    );

    const snapshot = await getDocs(q);
    return snapshot.docs.map((docSnap) => toAluno(docSnap.data() as Record<string, any>, docSnap.id, tenantId));
  }

  async countAtivos(tenantId: string): Promise<number> {
    const q = query(collection(this.db, 'alunos'), where('tenantId', '==', tenantId), where('status', '==', 'Ativo'));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }

  async countInadimplentes(tenantId: string): Promise<number> {
    const q = query(collection(this.db, 'alunos'), where('tenantId', '==', tenantId), where('statusFinanceiro', '==', 'atrasado'));
    const snapshot = await getCountFromServer(q);
    return snapshot.data().count;
  }

  async bulkUpdateStatusFinanceiro(
    tenantId: string,
    updates: Array<{ id: string; statusFinanceiro: Aluno['statusFinanceiro'] }>,
  ): Promise<void> {
    if (updates.length === 0) {
      return;
    }

    const chunks: Array<Array<{ id: string; statusFinanceiro: Aluno['statusFinanceiro'] }>> = [];
    for (let index = 0; index < updates.length; index += 500) {
      chunks.push(updates.slice(index, index + 500));
    }

    for (const chunk of chunks) {
      const snapshots = await Promise.all(
        chunk.map(async (updateItem) => {
          const docRef = doc(this.db, 'alunos', updateItem.id);
          const snap = await getDoc(docRef);

        if (!snap.exists()) {
          throw new Error(`Aluno ${updateItem.id} não encontrado.`);
        }

          if (snap.data()?.tenantId !== tenantId) {
            throw new Error(`Aluno ${updateItem.id} fora do tenant permitido.`);
          }

        return docRef;
      }),
    );

      const batch = writeBatch(this.db);
      const updatedAt = Timestamp.now();

      chunk.forEach((updateItem, index) => {
        batch.update(snapshots[index], {
          tenantId,
          statusFinanceiro: updateItem.statusFinanceiro,
          updatedAt,
        });
      });

      await batch.commit();
    }
  }
}
