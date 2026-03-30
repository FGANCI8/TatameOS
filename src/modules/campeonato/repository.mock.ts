import { Campeonato, Luta } from './types';

export class CampeonatoRepositoryMock {
  private campeonatos: Campeonato[] = [];
  private lutas: Luta[] = [];

  async saveLuta(luta: Luta): Promise<Luta> {
    this.lutas.push(luta);
    return luta;
  }

  async findLutas(alunoId: string, campeonatoId?: string): Promise<Luta[]> {
    return this.lutas.filter(l => l.alunoId === alunoId && (!campeonatoId || l.campeonatoId === campeonatoId));
  }
}
