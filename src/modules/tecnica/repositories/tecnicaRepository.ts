import { encontrarTecnicasPorIds, listarTecnicasBiblioteca } from '../catalog';
import type { Tecnica } from '../types';

export interface ITecnicaRepository {
  listarBiblioteca(): Promise<Tecnica[]>;
  encontrarPorId(id: string): Promise<Tecnica | null>;
  encontrarPorIds(ids: string[]): Promise<Tecnica[]>;
}

export class TecnicaRepository implements ITecnicaRepository {
  async listarBiblioteca(): Promise<Tecnica[]> {
    return listarTecnicasBiblioteca();
  }

  async encontrarPorId(id: string): Promise<Tecnica | null> {
    return listarTecnicasBiblioteca().find((tecnica) => tecnica.id === id) ?? null;
  }

  async encontrarPorIds(ids: string[]): Promise<Tecnica[]> {
    return encontrarTecnicasPorIds(ids);
  }
}
