import { TreinoRepository } from '@/src/repositories/TreinoRepository';

export const TreinoService = {
  async registrarNovoTreino(dados: any) {
    // 1. Validação de Negócio
    if (!dados.tecnicaFoco || dados.tecnicaFoco.trim() === '') {
      return { success: false, error: 'Técnica focada é obrigatória.' };
    }
    if (dados.dificuldade < 1 || dados.dificuldade > 5) {
      return { success: false, error: 'Dificuldade deve ser entre 1 e 5.' };
    }

    // 2. Orquestração
    try {
      await TreinoRepository.criarTreino({
        alunoId: dados.alunoId,
        tecnicaFoco: dados.tecnicaFoco,
        dificuldade: dados.dificuldade,
        data: new Date(),
      });
      return { success: true };
    } catch (error) {
      console.error('Erro no Service:', error);
      return { success: false, error: 'Erro ao registrar treino.' };
    }
  }
};
