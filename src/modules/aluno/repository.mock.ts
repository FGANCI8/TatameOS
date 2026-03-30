import { Aluno } from './types';

export class AlunoRepositoryMock {
  private alunos: Aluno[] = [];

  async save(aluno: Aluno): Promise<Aluno> {
    this.alunos.push(aluno);
    return aluno;
  }

  async findById(id: string): Promise<Aluno | undefined> {
    return this.alunos.find(a => a.id === id);
  }
}
