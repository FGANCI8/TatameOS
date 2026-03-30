import { ServiceResult } from '../core/types';
import { Treino } from './types';

// Loose interface check via any or exact type.
// We will simply accept the unified repository instance
export class TreinoService {
  constructor(private treinoRepository: any, private alunoService?: any) {}

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
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async listarTreinos(alunoId: string, tenantId: string): Promise<ServiceResult<Treino[]>> {
    try {
      const treinos = await this.treinoRepository.listTreinosByUser(alunoId, tenantId);
      return { success: true, data: treinos };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}
