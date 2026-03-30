import { randomUUID } from 'node:crypto';
import { adminAuth } from '../../lib/firebase-admin';
import { ConvitesRepositoryFirestore } from './repository';
import { buildInviteEmailPayload, createEmailService, type IEmailService } from './email.service';
import type {
  AtivarConviteResult,
  Convite,
  ConviteListItem,
  CriarConviteInput,
  ListarConvitesResult,
  ReenviarConviteResult,
  RevogarConviteResult,
  ValidarConviteResult
} from './types';

const INVITE_TTL_MS = 48 * 60 * 60 * 1000;

export interface IConvitesService {
  criarConvite(input: CriarConviteInput): Promise<Convite>;
  listarConvites(): Promise<ListarConvitesResult>;
  listarConvitesEstudantes(tenantId: string): Promise<ListarConvitesResult>;
  validarConvite(token: string): Promise<ValidarConviteResult>;
  ativarConvite(token: string, uid: string): Promise<AtivarConviteResult>;
  reenviarConvite(token: string): Promise<ReenviarConviteResult>;
  revogarConvite(token: string): Promise<RevogarConviteResult>;
  reenviarConviteEscopo(token: string, tenantId: string, isProfessorOrAdmin: boolean): Promise<ReenviarConviteResult>;
  revogarConviteEscopo(token: string, tenantId: string, isProfessorOrAdmin: boolean): Promise<RevogarConviteResult>;
}

function buildInviteUrl(token: string) {
  return `${process.env.APP_URL}/ativar-conta?token=${encodeURIComponent(token)}`;
}

function toExpiresAt(now = new Date()) {
  return new Date(now.getTime() + INVITE_TTL_MS);
}

function toListItem(convite: Convite): ConviteListItem {
  return {
    id: convite.id,
    token: convite.token,
    email: convite.email,
    tenantId: convite.tenantId,
    role: convite.role,
    academyName: convite.academyName,
    expiresAt: convite.expiresAt.toISOString(),
    status: convite.status,
    createdAt: convite.createdAt.toISOString(),
    updatedAt: convite.updatedAt.toISOString(),
    consumedAt: convite.consumedAt?.toISOString(),
    consumedByUid: convite.consumedByUid,
  };
}

export class ConvitesServiceFirestore implements IConvitesService {
  constructor(
    private repo: ConvitesRepositoryFirestore,
    private emailService: IEmailService = createEmailService(),
  ) {}

  private async sendInviteEmail(email: string, academyName: string, token: string, inviteeName?: string): Promise<void> {
    const inviteUrl = buildInviteUrl(token);
    await this.emailService.sendInviteEmail(
      buildInviteEmailPayload({
        to: email,
        inviteeName,
        academyName,
        inviteUrl,
      }),
    );
  }

  async criarConvite(input: CriarConviteInput): Promise<Convite> {
    const token = randomUUID();
    const convite = await this.repo.criarConvite(input, token);
    await this.sendInviteEmail(input.email, input.academyName, token, input.inviteeName);
    return convite;
  }

  async listarConvites(): Promise<ListarConvitesResult> {
    const convites = await this.repo.listarConvites();
    return {
      convites: convites.map((convite) => toListItem(convite)),
    };
  }

  async listarConvitesEstudantes(tenantId: string): Promise<ListarConvitesResult> {
    const convites = await this.repo.listarConvitesEstudantes(tenantId);
    return {
      convites: convites.map((convite) => toListItem(convite)),
    };
  }

  async validarConvite(token: string): Promise<ValidarConviteResult> {
    const convite = await this.repo.buscarPorToken(token);
    if (!convite) {
      return {
        valid: false,
        expired: false,
        revoked: false,
        consumed: false,
        email: '',
        role: 'admin',
        academyName: '',
        expiresAt: '',
      };
    }

    return this.repo.toValidarResult(convite);
  }

  async ativarConvite(token: string, uid: string): Promise<AtivarConviteResult> {
    const convite = await this.repo.buscarPorToken(token);
    if (!convite) {
      throw new Error('Convite não encontrado.');
    }

    if (convite.status === 'revogado') {
      throw new Error('Convite revogado.');
    }

    const now = new Date();
    if (convite.expiresAt.getTime() < now.getTime()) {
      throw new Error('Convite expirado.');
    }

    if (convite.status === 'consumido') {
      if (convite.consumedByUid === uid) {
        return this.repo.toAtivarResult(convite, true);
      }
      throw new Error('Convite já utilizado.');
    }

    const user = await adminAuth.getUser(uid);
    if (!user.email || user.email.toLowerCase() !== convite.email.toLowerCase()) {
      throw new Error('O e-mail autenticado não corresponde ao convite.');
    }

    const previousClaims = user.customClaims ?? {};
    await adminAuth.setCustomUserClaims(uid, {
      ...previousClaims,
      tenantId: convite.tenantId,
      role: convite.role,
    });

    const activatedAt = new Date();
    await Promise.all([
      this.repo.marcarConsumido(token, uid),
      this.repo.atualizarStatusAcademia(convite.tenantId, 'ativa', uid, activatedAt),
    ]);

    return this.repo.toAtivarResult({
      ...convite,
      status: 'consumido',
      consumedAt: activatedAt,
      consumedByUid: uid,
    }, false);
  }

  async reenviarConvite(token: string): Promise<ReenviarConviteResult> {
    const conviteAtual = await this.repo.buscarPorToken(token);
    if (!conviteAtual) {
      throw new Error('Convite não encontrado.');
    }

    if (conviteAtual.status === 'consumido') {
      throw new Error('Convite já utilizado.');
    }

    if (conviteAtual.status === 'revogado') {
      throw new Error('Convite revogado.');
    }

    const expiresAt = toExpiresAt();
    const conviteAtualizado = await this.repo.reenviar(token, expiresAt);
    await this.sendInviteEmail(conviteAtualizado.email, conviteAtualizado.academyName, token, conviteAtualizado.inviteeName);

    return {
      convite: toListItem(conviteAtualizado),
    };
  }

  async revogarConvite(token: string): Promise<RevogarConviteResult> {
    const convite = await this.repo.revogar(token);
    return {
      convite: toListItem(convite),
    };
  }

  async reenviarConviteEscopo(token: string, tenantId: string, isProfessorOrAdmin: boolean): Promise<ReenviarConviteResult> {
    if (!isProfessorOrAdmin) {
      throw new Error('Apenas professor ou admin podem reenviar convites.');
    }

    const conviteAtual = await this.repo.buscarPorTokenEscopo(token, tenantId, 'aluno');
    if (!conviteAtual) {
      throw new Error('Convite não encontrado.');
    }

    if (conviteAtual.status === 'consumido') {
      throw new Error('Convite já utilizado.');
    }

    if (conviteAtual.status === 'revogado') {
      throw new Error('Convite revogado.');
    }

    const expiresAt = toExpiresAt();
    const conviteAtualizado = await this.repo.reenviar(token, expiresAt);
    if (conviteAtualizado.tenantId !== tenantId || conviteAtualizado.role !== 'aluno') {
      throw new Error('Convite fora do tenant permitido.');
    }

    await this.sendInviteEmail(conviteAtualizado.email, conviteAtualizado.academyName, token, conviteAtualizado.inviteeName);
    return { convite: toListItem(conviteAtualizado) };
  }

  async revogarConviteEscopo(token: string, tenantId: string, isProfessorOrAdmin: boolean): Promise<RevogarConviteResult> {
    if (!isProfessorOrAdmin) {
      throw new Error('Apenas professor ou admin podem revogar convites.');
    }

    const conviteAtual = await this.repo.buscarPorTokenEscopo(token, tenantId, 'aluno');
    if (!conviteAtual) {
      throw new Error('Convite não encontrado.');
    }

    if (conviteAtual.status === 'consumido') {
      throw new Error('Convite já utilizado.');
    }

    const convite = await this.repo.revogar(token);
    if (convite.tenantId !== tenantId || convite.role !== 'aluno') {
      throw new Error('Convite fora do tenant permitido.');
    }

    return { convite: toListItem(convite) };
  }
}
