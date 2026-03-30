export type ConviteRole = 'admin' | 'professor' | 'aluno';
export type ConviteStatus = 'pendente' | 'consumido' | 'expirado' | 'revogado';

export interface ConviteListItem {
  id: string;
  token: string;
  email: string;
  inviteeName?: string;
  tenantId: string;
  role: ConviteRole;
  academyName: string;
  expiresAt: string;
  status: ConviteStatus;
  createdAt: string;
  updatedAt: string;
  consumedAt?: string;
  consumedByUid?: string;
}

export interface ListarConvitesResult {
  convites: ConviteListItem[];
}

export interface ReenviarConviteInput {
  token: string;
}

export interface ReenviarConviteResult {
  convite: ConviteListItem;
}

export interface RevogarConviteInput {
  token: string;
}

export interface ConvidarAlunoInput {
  nome: string;
  email: string;
}

export interface ConvidarAlunoResult {
  convite: ConviteListItem;
}

export interface RevogarConviteResult {
  convite: ConviteListItem;
}

export interface ValidarConviteResult {
  valid: boolean;
  expired: boolean;
  revoked: boolean;
  consumed: boolean;
  email: string;
  role: ConviteRole;
  academyName: string;
  expiresAt: string;
}

export interface AtivarConviteResult {
  tenantId: string;
  role: ConviteRole;
  email: string;
  inviteeName?: string;
  academyName: string;
  alreadyActivated?: boolean;
}

export interface ValidarConviteInput {
  token: string;
}

export interface AtivarConviteInput {
  token: string;
}
