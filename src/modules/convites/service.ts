import type { ServiceResult } from '../core/types';
import type { IConvitesRepository } from './repository';
import type {
  AtivarConviteInput,
  AtivarConviteResult,
  ConvidarAlunoInput,
  ConvidarAlunoResult,
  ListarConvitesResult,
  ReenviarConviteInput,
  ReenviarConviteResult,
  RevogarConviteInput,
  RevogarConviteResult,
  ValidarConviteInput,
  ValidarConviteResult
} from './types';

export interface IConvitesService {
  listarConvites(isAdmin: boolean): Promise<ServiceResult<ListarConvitesResult>>;
  listarConvitesEstudantes(isProfessorOrAdmin: boolean): Promise<ServiceResult<ListarConvitesResult>>;
  convidarAluno(input: ConvidarAlunoInput, tenantId: string | null, isProfessorOrAdmin: boolean): Promise<ServiceResult<ConvidarAlunoResult>>;
  reenviarConvite(input: ReenviarConviteInput, isAdmin: boolean): Promise<ServiceResult<ReenviarConviteResult>>;
  revogarConvite(input: RevogarConviteInput, isAdmin: boolean): Promise<ServiceResult<RevogarConviteResult>>;
  validarConvite(input: ValidarConviteInput): Promise<ServiceResult<ValidarConviteResult>>;
  ativarConvite(input: AtivarConviteInput): Promise<ServiceResult<AtivarConviteResult>>;
}

export class ConvitesServiceImpl implements IConvitesService {
  constructor(private repo: IConvitesRepository) {}

  async listarConvites(isAdmin: boolean): Promise<ServiceResult<ListarConvitesResult>> {
    try {
      if (!isAdmin) {
        return { success: false, error: 'Apenas administradores podem listar convites.' };
      }

      const data = await this.repo.listarConvites();
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar convites.' };
    }
  }

  async listarConvitesEstudantes(isProfessorOrAdmin: boolean): Promise<ServiceResult<ListarConvitesResult>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin podem listar convites de alunos.' };
      }

      const data = await this.repo.listarConvitesEstudantes();
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao listar convites de alunos.' };
    }
  }

  async convidarAluno(
    input: ConvidarAlunoInput,
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
  ): Promise<ServiceResult<ConvidarAlunoResult>> {
    try {
      if (!isProfessorOrAdmin) {
        return { success: false, error: 'Apenas professor ou admin pode convidar alunos.' };
      }

      if (!tenantId) {
        return { success: false, error: 'Tenant não disponível no contexto autenticado.' };
      }

      if (!input.nome?.trim()) {
        return { success: false, error: 'O nome do aluno é obrigatório.' };
      }

      if (!input.email?.trim()) {
        return { success: false, error: 'O email do aluno é obrigatório.' };
      }

      const data = await this.repo.convidarAluno({
        nome: input.nome.trim(),
        email: input.email.trim(),
      });

      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao convidar aluno.' };
    }
  }

  async reenviarConvite(input: ReenviarConviteInput, isAdmin: boolean): Promise<ServiceResult<ReenviarConviteResult>> {
    try {
      if (!isAdmin) {
        return { success: false, error: 'Apenas administradores podem reenviar convites.' };
      }

      if (!input.token?.trim()) {
        return { success: false, error: 'Token de convite é obrigatório.' };
      }

      const data = await this.repo.reenviarConvite({ token: input.token.trim() });
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao reenviar convite.' };
    }
  }

  async revogarConvite(input: RevogarConviteInput, isAdmin: boolean): Promise<ServiceResult<RevogarConviteResult>> {
    try {
      if (!isAdmin) {
        return { success: false, error: 'Apenas administradores podem revogar convites.' };
      }

      if (!input.token?.trim()) {
        return { success: false, error: 'Token de convite é obrigatório.' };
      }

      const data = await this.repo.revogarConvite({ token: input.token.trim() });
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao revogar convite.' };
    }
  }

  async validarConvite(input: ValidarConviteInput): Promise<ServiceResult<ValidarConviteResult>> {
    try {
      if (!input.token?.trim()) {
        return { success: false, error: 'Token de convite é obrigatório.' };
      }

      const data = await this.repo.validarConvite({ token: input.token.trim() });
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao validar convite.' };
    }
  }

  async ativarConvite(input: AtivarConviteInput): Promise<ServiceResult<AtivarConviteResult>> {
    try {
      if (!input.token?.trim()) {
        return { success: false, error: 'Token de convite é obrigatório.' };
      }

      const data = await this.repo.ativarConvite({ token: input.token.trim() });
      return { success: true, data };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao ativar convite.' };
    }
  }
}
