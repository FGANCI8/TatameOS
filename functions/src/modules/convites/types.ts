import { Timestamp } from 'firebase-admin/firestore';

export type ConviteRole = 'admin' | 'professor' | 'aluno';
export type ConviteStatus = 'pendente' | 'consumido' | 'expirado' | 'revogado';

export interface Convite {
  id: string;
  token: string;
  email: string;
  inviteeName?: string;
  tenantId: string;
  role: ConviteRole;
  academyName: string;
  expiresAt: Date;
  status: ConviteStatus;
  createdAt: Date;
  updatedAt: Date;
  consumedAt?: Date;
  consumedByUid?: string;
}

export interface ConviteFirestoreDocument {
  id: string;
  token: string;
  email: string;
  inviteeName?: string;
  tenantId: string;
  role: ConviteRole;
  academyName: string;
  expiresAt: Timestamp;
  status: ConviteStatus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
  consumedAt?: Timestamp;
  consumedByUid?: string;
}

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

export interface CriarConviteInput {
  email: string;
  inviteeName?: string;
  tenantId: string;
  role: ConviteRole;
  academyName: string;
  expiresAt: Date;
}

export interface ListarConvitesResult {
  convites: ConviteListItem[];
}

export interface ReenviarConviteResult {
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
