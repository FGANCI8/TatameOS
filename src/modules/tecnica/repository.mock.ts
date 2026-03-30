import { Tecnica } from './types';

export class TecnicaRepositoryMock {
  private tecnicas: Tecnica[] = [];

  async save(tecnica: Tecnica): Promise<Tecnica> {
    this.tecnicas.push(tecnica);
    return tecnica;
  }

  async findById(id: string): Promise<Tecnica | undefined> {
    return this.tecnicas.find((t) => t.id === id);
  }

  async findByTenant(tenantId: string): Promise<Tecnica[]> {
    return this.tecnicas.filter((tecnica) => tecnica.tenantId === tenantId);
  }
}
