import { ServiceResult } from '../core/types';
import { Falha, MapaVulnerabilidade } from './types';

export class FalhasService {
  constructor(private falhasRepository: any) {}

  async registrarFalha(data: Omit<Falha, 'id' | 'data' | 'tenantId'>, tenantId: string): Promise<ServiceResult<Falha>> {
    try {
      if (!data.categoria) {
        return { success: false, error: 'A categoria da falha é obrigatória.' };
      }
      if (data.gravidade < 1 || data.gravidade > 5) {
        return { success: false, error: 'A gravidade deve ser classificada de 1 a 5.' };
      }

      const falha: Falha = {
        ...data,
        tenantId,
        id: crypto.randomUUID(),
        data: new Date()
      };

      const salva = await this.falhasRepository.save(falha, tenantId);
      return { success: true, data: salva };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async listarFalhasPorAluno(alunoId: string, tenantId: string): Promise<ServiceResult<Falha[]>> {
    try {
      if (!alunoId) return { success: false, error: 'Aluno ID não fornecido.' };

      const falhas = await this.falhasRepository.findByAlunoId(alunoId, tenantId);
      return { success: true, data: falhas };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async calcularMapaDeVulnerabilidade(alunoId: string, tenantId: string): Promise<ServiceResult<MapaVulnerabilidade[]>> {
    try {
      const falhas = await this.falhasRepository.findByAlunoId(alunoId, tenantId);

      const mapa = falhas.reduce((acc, current) => {
        const item = acc.find(i => i.categoria === current.categoria);
        if (item) {
          item.frequencia += 1;
          item.impactoTotal += current.gravidade;
        } else {
          acc.push({
            categoria: current.categoria,
            frequencia: 1,
            impactoTotal: current.gravidade
          });
        }
        return acc;
      }, [] as MapaVulnerabilidade[]);

      mapa.sort((a, b) => b.impactoTotal - a.impactoTotal);

      return { success: true, data: mapa };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}
