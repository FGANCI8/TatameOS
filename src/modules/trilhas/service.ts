import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';
import type { Tecnica } from '../tecnica/types';
import type { ITecnicaRepository } from '../tecnica/repositories/tecnicaRepository';
import type { ITrilhasRepository, SalvarTrilhaInput, Trilha, TrilhaComTecnicas, TrilhaStatus } from './types';

function uniqueIds(ids: string[]): string[] {
  return Array.from(new Set(ids.map((id) => id.trim()).filter(Boolean)));
}

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function validateStatus(status: TrilhaStatus): boolean {
  return status === 'rascunho' || status === 'publicada';
}

export class TrilhasService {
  constructor(
    private trilhasRepository: ITrilhasRepository,
    private tecnicaRepository: ITecnicaRepository,
  ) {}

  private montarTrilha(trilha: Trilha, tecnicas: Tecnica[]): TrilhaComTecnicas {
    return {
      ...trilha,
      tecnicas,
    };
  }

  private async resolverTecnicas(tecnicasIds: string[]): Promise<ServiceResult<Tecnica[]>> {
    const ids = uniqueIds(tecnicasIds);

    if (ids.length === 0) {
      return { success: false, error: 'Selecione pelo menos uma técnica.' };
    }

    const tecnicas = await this.tecnicaRepository.encontrarPorIds(ids);

    if (tecnicas.length !== ids.length) {
      return { success: false, error: 'Uma ou mais técnicas selecionadas não foram encontradas.' };
    }

    return { success: true, data: tecnicas };
  }

  private validarInput(input: SalvarTrilhaInput): ServiceResult<SalvarTrilhaInput> {
    const titulo = normalizeText(input.titulo);
    const descricao = normalizeText(input.descricao);
    const tecnicasIds = uniqueIds(input.tecnicasIds);

    if (!titulo) {
      return { success: false, error: 'Informe um título para a trilha.' };
    }

    if (!descricao) {
      return { success: false, error: 'Informe uma descrição para a trilha.' };
    }

    if (!input.faixaAlvo) {
      return { success: false, error: 'Selecione a faixa alvo.' };
    }

    if (!validateStatus(input.status)) {
      return { success: false, error: 'Status inválido para a trilha.' };
    }

    if (tecnicasIds.length === 0) {
      return { success: false, error: 'Adicione pelo menos uma técnica à trilha.' };
    }

    return {
      success: true,
      data: {
        ...input,
        titulo,
        descricao,
        tecnicasIds,
      },
    };
  }

  private async mapearTrilhas(trilhas: Trilha[]): Promise<TrilhaComTecnicas[]> {
    const tecnicas = await this.tecnicaRepository.listarBiblioteca();
    const tecnicasById = new Map(tecnicas.map((tecnica) => [tecnica.id, tecnica]));

    return trilhas.map((trilha) =>
      this.montarTrilha(
        trilha,
        trilha.tecnicasIds.map((id) => tecnicasById.get(id)).filter(Boolean) as Tecnica[],
      ),
    );
  }

  async listarTecnicasDisponiveis(): Promise<ServiceResult<Tecnica[]>> {
    try {
      const tecnicas = await this.tecnicaRepository.listarBiblioteca();
      return { success: true, data: tecnicas };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao carregar técnicas.' };
    }
  }

  async listarTrilhasProfessor(tenantId: string): Promise<ServiceResult<TrilhaComTecnicas[]>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const trilhas = await this.trilhasRepository.listar(tenantId);
      return { success: true, data: await this.mapearTrilhas(trilhas) };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar trilhas.' };
    }
  }

  async listarTrilhasPublicadasPorFaixa(
    tenantId: string,
    faixaAlvo: Aluno['faixa'],
  ): Promise<ServiceResult<TrilhaComTecnicas[]>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!faixaAlvo) {
        return { success: false, error: 'Faixa alvo ausente.' };
      }

      const trilhas = await this.trilhasRepository.listarPublicadasPorFaixa(tenantId, faixaAlvo);
      return { success: true, data: await this.mapearTrilhas(trilhas) };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar trilhas públicas.' };
    }
  }

  async salvarTrilha(
    input: SalvarTrilhaInput,
    tenantId: string,
    isProfessorOrAdmin: boolean,
  ): Promise<ServiceResult<TrilhaComTecnicas>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem salvar trilhas.' };
      }

      const validation = this.validarInput(input);
      if (!validation.success || !validation.data) {
        return { success: false, error: validation.error || 'Entrada inválida.' };
      }

      const tecnicaResult = await this.resolverTecnicas(validation.data.tecnicasIds);
      if (!tecnicaResult.success || !tecnicaResult.data) {
        return { success: false, error: tecnicaResult.error || 'Falha ao validar técnicas.' };
      }

      const now = new Date();
      const existing = validation.data.id ? await this.trilhasRepository.encontrarPorId(validation.data.id, tenantId) : null;

      const trilha: Trilha = existing
        ? {
            ...existing,
            titulo: validation.data.titulo,
            descricao: validation.data.descricao,
            faixaAlvo: validation.data.faixaAlvo,
            status: validation.data.status,
            tecnicasIds: validation.data.tecnicasIds,
            updatedAt: now,
          }
        : {
            id: globalThis.crypto.randomUUID(),
            tenantId,
            titulo: validation.data.titulo,
            descricao: validation.data.descricao,
            faixaAlvo: validation.data.faixaAlvo,
            status: validation.data.status,
            tecnicasIds: validation.data.tecnicasIds,
            createdAt: now,
            updatedAt: now,
          };

      const persisted = await this.trilhasRepository.salvar(trilha, tenantId);
      return { success: true, data: this.montarTrilha(persisted, tecnicaResult.data) };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao salvar trilha.' };
    }
  }

  async removerTrilha(
    id: string,
    tenantId: string,
    isProfessorOrAdmin: boolean,
  ): Promise<ServiceResult<{ removida: boolean }>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem remover trilhas.' };
      }

      if (!id?.trim()) {
        return { success: false, error: 'ID da trilha ausente.' };
      }

      const removida = await this.trilhasRepository.remover(id, tenantId);
      return { success: true, data: { removida } };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao remover trilha.' };
    }
  }
}
