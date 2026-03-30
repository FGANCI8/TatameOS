import { ServiceResult } from '../core/types';
import { Luta, ResumoCompetitivo, TipoFinalizacao } from './types';

export class CampeonatoService {
  constructor(private repo: any) {}

  async registrarLuta(data: Omit<Luta, 'id' | 'data' | 'tenantId'>, tenantId: string): Promise<ServiceResult<Luta>> {
    try {
      if (!data.alunoId || !data.campeonatoId) {
        return { success: false, error: 'As informações de Aluno e Campeonato são obrigatórias na Luta.' };
      }

      const luta: Luta = {
        ...data,
        tenantId,
        id: crypto.randomUUID(),
        data: new Date()
      };

      const salva = await this.repo.saveLuta(luta, tenantId);
      return { success: true, data: salva };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async calcularDesempenho(alunoId: string, tenantId: string, campeonatoId?: string): Promise<ServiceResult<number>> {
    try {
      const lutas = await this.repo.findLutas(alunoId, tenantId, campeonatoId);
      if (lutas.length === 0) return { success: true, data: 0 };

      const vitorias = lutas.filter(l => l.resultado === 'Vitoria').length;
      const taxa = (vitorias / lutas.length) * 100;

      return { success: true, data: taxa };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }

  async gerarResumoCompetitivo(alunoId: string, tenantId: string): Promise<ServiceResult<ResumoCompetitivo>> {
    try {
      const lutas = await this.repo.findLutas(alunoId, tenantId);

      const vitorias = lutas.filter(l => l.resultado === 'Vitoria').length;
      const derrotas = lutas.filter(l => l.resultado === 'Derrota').length;
      const totalLutas = lutas.length;
      const taxaSucesso = totalLutas ? ((vitorias / totalLutas) * 100).toFixed(2) + '%' : '0%';

      const finsAplicadas: Record<string, number> = {};
      const erros: Record<string, number> = {};

      lutas.forEach(l => {
        if (l.finalizacaoAplicada && l.finalizacaoAplicada !== 'Nenhuma') {
          finsAplicadas[l.finalizacaoAplicada] = (finsAplicadas[l.finalizacaoAplicada] || 0) + 1;
        }
        if (l.padraoErroAluno) {
          erros[l.padraoErroAluno] = (erros[l.padraoErroAluno] || 0) + 1;
        }
      });

      const finalizacoesMaisAplicadas = Object.entries(finsAplicadas)
        .map(([tipo, qtd]) => ({ tipo: tipo as TipoFinalizacao, qtd }))
        .sort((a, b) => b.qtd - a.qtd);

      const padroesDeErro = Object.entries(erros)
        .map(([erro, qtd]) => ({ erro, qtd }))
        .sort((a, b) => b.qtd - a.qtd);

      const resumo: ResumoCompetitivo = {
        totalLutas,
        vitorias,
        derrotas,
        taxaSucesso,
        finalizacoesMaisAplicadas,
        padroesDeErro
      };

      return { success: true, data: resumo };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
}
