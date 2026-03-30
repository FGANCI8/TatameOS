import { Falha } from './types';

export class FalhasRepositoryMock {
  private falhas: Falha[] = [];

  async save(falha: Falha): Promise<Falha> {
    this.falhas.push(falha);
    return falha;
  }

  async findByAlunoId(alunoId: string): Promise<Falha[]> {
    return this.falhas.filter(f => f.alunoId === alunoId);
  }
}
