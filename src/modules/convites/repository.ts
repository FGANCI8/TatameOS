import { httpsCallable } from 'firebase/functions';
import { functions } from '../../lib/firebase/client';
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

export interface IConvitesRepository {
  listarConvites(): Promise<ListarConvitesResult>;
  listarConvitesEstudantes(): Promise<ListarConvitesResult>;
  convidarAluno(input: ConvidarAlunoInput): Promise<ConvidarAlunoResult>;
  reenviarConvite(input: ReenviarConviteInput): Promise<ReenviarConviteResult>;
  revogarConvite(input: RevogarConviteInput): Promise<RevogarConviteResult>;
  validarConvite(input: ValidarConviteInput): Promise<ValidarConviteResult>;
  ativarConvite(input: AtivarConviteInput): Promise<AtivarConviteResult>;
}

export class ConvitesRepositoryFirebase implements IConvitesRepository {
  async listarConvites(): Promise<ListarConvitesResult> {
    const callable = httpsCallable(functions, 'listInvites');
    const response = await callable();
    return response.data as ListarConvitesResult;
  }

  async listarConvitesEstudantes(): Promise<ListarConvitesResult> {
    const callable = httpsCallable(functions, 'listStudentInvites');
    const response = await callable();
    return response.data as ListarConvitesResult;
  }

  async convidarAluno(input: ConvidarAlunoInput): Promise<ConvidarAlunoResult> {
    const callable = httpsCallable(functions, 'inviteStudent');
    const response = await callable(input);
    return response.data as ConvidarAlunoResult;
  }

  async reenviarConvite(input: ReenviarConviteInput): Promise<ReenviarConviteResult> {
    const callable = httpsCallable(functions, 'resendInvite');
    const response = await callable(input);
    return response.data as ReenviarConviteResult;
  }

  async revogarConvite(input: RevogarConviteInput): Promise<RevogarConviteResult> {
    const callable = httpsCallable(functions, 'revokeInvite');
    const response = await callable(input);
    return response.data as RevogarConviteResult;
  }

  async validarConvite(input: ValidarConviteInput): Promise<ValidarConviteResult> {
    const callable = httpsCallable(functions, 'validateInvite');
    const response = await callable(input);
    return response.data as ValidarConviteResult;
  }

  async ativarConvite(input: AtivarConviteInput): Promise<AtivarConviteResult> {
    const callable = httpsCallable(functions, 'activateInvite');
    const response = await callable(input);
    return response.data as AtivarConviteResult;
  }
}
