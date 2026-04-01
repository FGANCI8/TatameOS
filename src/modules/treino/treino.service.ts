import { ServiceResult } from '../core/types';
import { Treino } from './types';

interface TreinoRepositoryLike {
  createTreino(treino: Treino, tenantId: string): Promise<Treino>;
  registrarTreinoComHoras?(treino: Treino, tenantId: string, horasAdicionais: number): Promise<Treino>;
  listTreinosByUser(userId: string, tenantId: string): Promise<Treino[]>;
}

interface AlunoServiceLike {
  adicionarHoras(alunoId: string, horas: number, tenantId: string): Promise<{ success: boolean; error?: string }>;
}

export class TreinoService {
  constructor(private treinoRepository: TreinoRepositoryLike, private alunoService?: AlunoServiceLike) {}

  async registrarTreino(data: Omit<Treino, 'id' | 'data' | 'tenantId'>, tenantId: string): Promise<ServiceResult<Treino>> {
    try {
      if (!data.tecnicaId) {
        return { success: false, error: 'A identificação da técnica é obrigatória.' };
      }

      if (data.dificuldadePercebida < 1 || data.dificuldadePercebida > 5) {
        return { success: false, error: 'A dificuldade deve ser validada entre 1 e 5.' };
      }

      const novoTreino: Treino = {
        ...data,
        tenantId,
        id: crypto.randomUUID(),
        data: new Date(),
      };

      const resultado = this.treinoRepository.registrarTreinoComHoras
        ? await this.treinoRepository.registrarTreinoComHoras(novoTreino, tenantId, 1.5)
        : await this.treinoRepository.createTreino(novoTreino, tenantId);

      if (!this.treinoRepository.registrarTreinoComHoras && this.alunoService) {
        await this.alunoService.adicionarHoras(data.alunoId, 1.5, tenantId);
      }

      return { success: true, data: resultado };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : 'Erro inesperado.' };
    }
  }

  async listarTreinos(alunoId: string, tenantId: string): Promise<ServiceResult<Treino[]>> {
    try {
      const treinos = await this.treinoRepository.listTreinosByUser(alunoId, tenantId);
      return { success: true, data: treinos };
    } catch (error: unknown) {
      return { success: false, error: error instanceof Error ? error.message : 'Erro inesperado.' };
    }
  }
}
