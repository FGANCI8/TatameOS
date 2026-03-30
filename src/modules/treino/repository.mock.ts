import { Treino } from './types';

export class TreinoRepositoryMock {
  private treinos: Treino[] = [];

  async save(treino: Treino): Promise<Treino> {
    this.treinos.push(treino);
    return treino;
  }
}
