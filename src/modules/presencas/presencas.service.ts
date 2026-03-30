import type { ServiceResult } from '../core/types';
import type { AlunoRepositoryFirestore } from '../aluno/aluno.repository';
import type { AlunoChamadaItem, HistoricoPresencaFiltro, HistoricoPresencaItem, RegistrarPresencaInput, RegistrarPresencaResult } from './types';
import type { PresencasRepositoryFirestore } from './presencas.repository';

export interface IPresencasService {
  listarAlunosParaChamada(tenantId: string | null, isProfessorOrAdmin: boolean): Promise<ServiceResult<AlunoChamadaItem[]>>;
  listarHistoricoPresencas(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
    filtros?: HistoricoPresencaFiltro,
    userId?: string | null,
  ): Promise<ServiceResult<HistoricoPresencaItem[]>>;
  registrarPresenca(input: RegistrarPresencaInput, tenantId: string | null, isProfessorOrAdmin: boolean): Promise<ServiceResult<RegistrarPresencaResult>>;
}

export class PresencasServiceImpl implements IPresencasService {
  constructor(
    private repo: PresencasRepositoryFirestore,
    private alunoRepository: AlunoRepositoryFirestore,
  ) {}

  async listarAlunosParaChamada(tenantId: string | null, isProfessorOrAdmin: boolean): Promise<ServiceResult<AlunoChamadaItem[]>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem acessar a chamada.' };
      }

      if (!tenantId) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const alunos = await this.repo.listAlunosParaChamada(tenantId);
      return { success: true, data: alunos };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar alunos para chamada.' };
    }
  }

  async listarHistoricoPresencas(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
    filtros: HistoricoPresencaFiltro = {},
    userId: string | null = null,
  ): Promise<ServiceResult<HistoricoPresencaItem[]>> {
    try {
      if (!tenantId) {
        return { success: false, error: 'Tenant ausente.' };
      }

      const limite = Number.isInteger(filtros.limite) && (filtros.limite || 0) > 0 ? Math.min(filtros.limite || 20, 20) : 20;

      const dataInicio = filtros.dataInicio ? new Date(`${filtros.dataInicio}T00:00:00`) : null;
      const dataFim = filtros.dataFim ? new Date(`${filtros.dataFim}T23:59:59.999`) : null;

      if (dataInicio && Number.isNaN(dataInicio.getTime())) {
        return { success: false, error: 'Data inicial inválida.' };
      }

      if (dataFim && Number.isNaN(dataFim.getTime())) {
        return { success: false, error: 'Data final inválida.' };
      }

      if (dataInicio && dataFim && dataInicio.getTime() > dataFim.getTime()) {
        return { success: false, error: 'A data inicial não pode ser maior que a final.' };
      }

      const alunoIdConsulta = filtros.alunoId?.trim() || (!isProfessorOrAdmin ? userId?.trim() || null : null);

      if (!isProfessorOrAdmin) {
        if (!userId) {
          return { success: false, error: 'Usuário não autenticado.' };
        }

        if (!alunoIdConsulta || alunoIdConsulta !== userId) {
          return { success: false, error: 'Você só pode acessar o próprio histórico.' };
        }
      }

      const alunos = await this.alunoRepository.listAll(tenantId);
      const alunosMap = new Map(alunos.map((aluno) => [aluno.id, aluno.nome]));

      const historico = await this.repo.listHistoricoPresencas({
        tenantId,
        alunoId: alunoIdConsulta,
        dataInicio,
        dataFim,
        limite,
      });

      return {
        success: true,
        data: historico.map((item) => ({
          ...item,
          alunoNome: alunosMap.get(item.alunoId) || item.alunoNome || item.alunoId,
        })),
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar histórico de presenças.' };
    }
  }

  async registrarPresenca(input: RegistrarPresencaInput, tenantId: string | null, isProfessorOrAdmin: boolean): Promise<ServiceResult<RegistrarPresencaResult>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem registrar presença.' };
      }

      if (!tenantId) {
        return { success: false, error: 'Tenant ausente.' };
      }

      if (!input.alunoId?.trim()) {
        return { success: false, error: 'Aluno é obrigatório.' };
      }

      const aluno = await this.alunoRepository.getById(input.alunoId.trim(), tenantId);
      if (!aluno) {
        return { success: false, error: 'Aluno não encontrado ou fora do tenant.' };
      }

      const data = await this.repo.registrarPresenca({
        alunoId: input.alunoId.trim(),
        tenantId,
        duracaoPadrao: 1.5,
      });

      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao registrar presença.' };
    }
  }
}
