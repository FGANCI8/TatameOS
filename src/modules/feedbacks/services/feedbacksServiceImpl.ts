import type { IFeedbacksRepository } from '../feedbacks.repository';
import type { ServiceResult } from '../../core/types';
import type {
  AtualizarFeedbackStatusInput,
  CriarFeedbackInput,
  Feedback,
  FeedbackFiltroBase,
  FeedbackMetricasAluno,
  FeedbackMetricasProfessor,
  FeedbackPrioridade,
  FeedbackStatus
} from '../types';
import type { IFeedbacksService } from '../feedbacks.service';

function isValidGravidade(value: number): value is Feedback['gravidade'] {
  return Number.isInteger(value) && value >= 1 && value <= 5;
}

function mapPrioridadeByGravidade(gravidade: Feedback['gravidade']): FeedbackPrioridade {
  if (gravidade >= 5) return 'critica';
  if (gravidade === 4) return 'alta';
  if (gravidade === 3) return 'media';
  return 'baixa';
}

function isFinalStatus(status: FeedbackStatus): boolean {
  return status === 'corrigido' || status === 'encerrado';
}

type CacheEntry<T> = {
  expiresAt: number;
  value?: T;
  pending?: Promise<T>;
};

const FEEDBACKS_CACHE_TTL_MS = 2 * 60 * 1000;

function normalizeFilters(filters: FeedbackFiltroBase): string {
  return Object.entries(filters)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}:${String(value)}`)
    .join('|');
}

export class FeedbacksServiceImpl implements IFeedbacksService {
  private cache = new Map<string, CacheEntry<any>>();

  constructor(private repo: IFeedbacksRepository) {}

  private makeCacheKey(scope: string, id: string, tenantId: string, extra = '') {
    return `${scope}:${id}:${tenantId}${extra ? `:${extra}` : ''}`;
  }

  private clearCache() {
    this.cache.clear();
  }

  private getCachedValue<T>(key: string): T | null {
    const entry = this.cache.get(key);

    if (!entry) {
      return null;
    }

    if (entry.value !== undefined && Date.now() < entry.expiresAt) {
      return entry.value as T;
    }

    if (Date.now() >= entry.expiresAt) {
      this.cache.delete(key);
    }

    return null;
  }

  private async getOrLoadCached<T>(key: string, loader: () => Promise<T>): Promise<T> {
    const existing = this.cache.get(key);
    if (existing?.pending) {
      return existing.pending;
    }

    const cached = this.getCachedValue<T>(key);
    if (cached !== null) {
      return cached;
    }

    const pending = loader();
    this.cache.set(key, { pending, expiresAt: Date.now() + FEEDBACKS_CACHE_TTL_MS });

    try {
      const value = await pending;
      this.cache.set(key, {
        value,
        expiresAt: Date.now() + FEEDBACKS_CACHE_TTL_MS
      });
      return value;
    } catch (error) {
      this.cache.delete(key);
      throw error;
    }
  }

  async criarFeedback(input: CriarFeedbackInput, tenantId: string): Promise<ServiceResult<Feedback>> {
    try {
      if (!input.alunoId || !input.professorId || !input.origemTipo || !input.origemId) {
        return { success: false, error: 'Aluno, professor e origem do feedback são obrigatórios.' };
      }

      if (!input.titulo?.trim()) {
        return { success: false, error: 'O título do feedback é obrigatório.' };
      }

      if (!input.descricao?.trim()) {
        return { success: false, error: 'A descrição do feedback é obrigatória.' };
      }

      if (!isValidGravidade(input.gravidade)) {
        return { success: false, error: 'A gravidade deve estar entre 1 e 5.' };
      }

      const now = new Date();
      const feedback: Feedback = {
        id: crypto.randomUUID(),
        tenantId,
        alunoId: input.alunoId,
        professorId: input.professorId,
        origemTipo: input.origemTipo,
        origemId: input.origemId,
        categoriaFalha: input.categoriaFalha,
        titulo: input.titulo.trim(),
        descricao: input.descricao.trim(),
        gravidade: input.gravidade,
        prioridade: input.prioridade || mapPrioridadeByGravidade(input.gravidade),
        status: 'aberto',
        createdAt: now,
        updatedAt: now
      };

      const saved = await this.repo.save(feedback, tenantId);
      this.clearCache();
      return { success: true, data: saved };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao criar feedback.' };
    }
  }

  async listarFeedbacksPorAluno(alunoId: string, tenantId: string): Promise<ServiceResult<Feedback[]>> {
    try {
      if (!alunoId) {
        return { success: false, error: 'Aluno ID não fornecido.' };
      }

      const cacheKey = this.makeCacheKey('list-aluno', alunoId, tenantId);
      const data = await this.getOrLoadCached(cacheKey, () => this.repo.findByAlunoId(alunoId, tenantId));
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao listar feedbacks.' };
    }
  }

  async listarFeedbacksPorProfessor(professorId: string, tenantId: string): Promise<ServiceResult<Feedback[]>> {
    try {
      if (!professorId) {
        return { success: false, error: 'Professor ID não fornecido.' };
      }

      const cacheKey = this.makeCacheKey('list-professor', professorId, tenantId);
      const data = await this.getOrLoadCached(cacheKey, () => this.repo.findByProfessorId(professorId, tenantId));
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao listar feedbacks.' };
    }
  }

  async listarFeedbacks(filters: FeedbackFiltroBase, tenantId: string): Promise<ServiceResult<Feedback[]>> {
    try {
      const cacheKey = this.makeCacheKey('list-filters', normalizeFilters(filters), tenantId);
      const data = await this.getOrLoadCached(cacheKey, () => this.repo.findMany(filters, tenantId));
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao filtrar feedbacks.' };
    }
  }

  async listarFeedbacksRecentesPorAluno(alunoId: string, tenantId: string, limitCount = 2): Promise<ServiceResult<Feedback[]>> {
    try {
      if (!alunoId) {
        return { success: false, error: 'Aluno ID não fornecido.' };
      }

      const cacheKey = this.makeCacheKey('recent-aluno', alunoId, tenantId, String(limitCount));
      const data = await this.getOrLoadCached(cacheKey, () => this.repo.findRecentByAlunoId(alunoId, tenantId, limitCount));
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao listar feedbacks recentes.' };
    }
  }

  async listarFeedbacksRecentesPorProfessor(professorId: string, tenantId: string, limitCount = 2): Promise<ServiceResult<Feedback[]>> {
    try {
      if (!professorId) {
        return { success: false, error: 'Professor ID não fornecido.' };
      }

      const cacheKey = this.makeCacheKey('recent-professor', professorId, tenantId, String(limitCount));
      const data = await this.getOrLoadCached(cacheKey, () => this.repo.findRecentByProfessorId(professorId, tenantId, limitCount));
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao listar feedbacks recentes.' };
    }
  }

  async obterMetricasFeedbacksAluno(alunoId: string, tenantId: string): Promise<ServiceResult<FeedbackMetricasAluno>> {
    try {
      if (!alunoId) {
        return { success: false, error: 'Aluno ID não fornecido.' };
      }

      const cacheKey = this.makeCacheKey('metrics-aluno', alunoId, tenantId);
      const metricas = await this.getOrLoadCached(cacheKey, async () => {
        const [total, aguardando, corrigidos, encerrados] = await Promise.all([
          this.repo.countMany({ alunoId }, tenantId),
          this.repo.countMany({ alunoId, status: 'aguardando_aluno' }, tenantId),
          this.repo.countMany({ alunoId, status: 'corrigido' }, tenantId),
          this.repo.countMany({ alunoId, status: 'encerrado' }, tenantId),
        ]);

        return {
          total,
          aguardando,
          corrigidos,
          comResposta: aguardando + corrigidos + encerrados
        } as FeedbackMetricasAluno;
      });

      return { success: true, data: metricas };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao obter métricas do aluno.' };
    }
  }

  async obterMetricasFeedbacksProfessor(professorId: string, tenantId: string): Promise<ServiceResult<FeedbackMetricasProfessor>> {
    try {
      if (!professorId) {
        return { success: false, error: 'Professor ID não fornecido.' };
      }

      const cacheKey = this.makeCacheKey('metrics-professor', professorId, tenantId);
      const metricas = await this.getOrLoadCached(cacheKey, async () => {
        const [total, abertos, emAnalise, criticos, corrigidos] = await Promise.all([
          this.repo.countMany({ professorId }, tenantId),
          this.repo.countMany({ professorId, status: 'aberto' }, tenantId),
          this.repo.countMany({ professorId, status: 'em_analise' }, tenantId),
          this.repo.countMany({ professorId, prioridade: 'critica' }, tenantId),
          this.repo.countMany({ professorId, status: 'corrigido' }, tenantId),
        ]);

        return {
          total,
          abertos,
          pendentes: abertos + emAnalise,
          criticos,
          corrigidos
        } as FeedbackMetricasProfessor;
      });

      return { success: true, data: metricas };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao obter métricas do professor.' };
    }
  }

  async obterFeedbackPorId(id: string, tenantId: string): Promise<ServiceResult<Feedback | null>> {
    try {
      if (!id) {
        return { success: false, error: 'Feedback ID não fornecido.' };
      }

      const data = await this.repo.findById(id, tenantId);
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao consultar feedback.' };
    }
  }

  async atualizarStatus(input: AtualizarFeedbackStatusInput, tenantId: string): Promise<ServiceResult<Feedback>> {
    try {
      if (!input.feedbackId || !input.professorId) {
        return { success: false, error: 'Feedback ID e Professor ID são obrigatórios.' };
      }

      const current = await this.repo.findById(input.feedbackId, tenantId);
      if (!current) {
        return { success: false, error: 'Feedback não encontrado.' };
      }

      if (current.professorId !== input.professorId) {
        return { success: false, error: 'Professor não autorizado para atualizar este feedback.' };
      }

      const now = new Date();
      const updated = await this.repo.updateStatus(
        input.feedbackId,
        tenantId,
        input.status,
        now,
        isFinalStatus(input.status) ? now : current.resolvedAt,
        input.recomendacaoProfessor,
        input.conclusaoAluno
      );

      this.clearCache();
      return { success: true, data: updated };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao atualizar status.' };
    }
  }

  async atualizarPrioridade(feedbackId: string, prioridade: FeedbackPrioridade, tenantId: string): Promise<ServiceResult<Feedback>> {
    try {
      if (!feedbackId) {
        return { success: false, error: 'Feedback ID não fornecido.' };
      }

      const current = await this.repo.findById(feedbackId, tenantId);
      if (!current) {
        return { success: false, error: 'Feedback não encontrado.' };
      }

      const updated: Feedback = {
        ...current,
        prioridade,
        updatedAt: new Date()
      };

      const saved = await this.repo.save(updated, tenantId);
      this.clearCache();
      return { success: true, data: saved };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao atualizar prioridade.' };
    }
  }

  async alterarStatusRapido(feedbackId: string, status: FeedbackStatus, tenantId: string): Promise<ServiceResult<Feedback>> {
    try {
      if (!feedbackId) {
        return { success: false, error: 'Feedback ID não fornecido.' };
      }

      const current = await this.repo.findById(feedbackId, tenantId);
      if (!current) {
        return { success: false, error: 'Feedback não encontrado.' };
      }

      const now = new Date();
      const updated = await this.repo.updateStatus(
        feedbackId,
        tenantId,
        status,
        now,
        isFinalStatus(status) ? now : current.resolvedAt,
        current.recomendacaoProfessor,
        current.conclusaoAluno
      );

      this.clearCache();
      return { success: true, data: updated };
    } catch (error: any) {
      return { success: false, error: error.message || 'Erro inesperado ao alterar status.' };
    }
  }
}
