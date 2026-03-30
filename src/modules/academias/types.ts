import type { Timestamp } from 'firebase-admin/firestore';

export type AcademiaPlano = 'starter' | 'pro' | 'enterprise';
export type AcademiaStatus = 'ativa' | 'pendente' | 'suspensa';
export type AcademiaSeedKind = 'faixas' | 'categorias_falhas' | 'tecnicas_iniciais';
export type AcademiaResponsavelRole = 'professor' | 'admin';

export interface Academia {
  id: string;
  tenantId: string;
  nome: string;
  plano: AcademiaPlano;
  status: AcademiaStatus;
  dataAtivacao: Date;
  administradorResponsavelId: string;
  administradorResponsavelEmail: string;
  administradorResponsavelNome?: string;
  seedVersion: number;
  seedApplied: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface AcademiaFirestoreDocument {
  id: string;
  tenantId: string;
  nome: string;
  plano: AcademiaPlano;
  status: AcademiaStatus;
  dataAtivacao: Timestamp;
  administradorResponsavelId: string;
  administradorResponsavelEmail: string;
  administradorResponsavelNome?: string;
  seedVersion: number;
  seedApplied: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface AcademiaSeedDocument {
  id: string;
  tenantId: string;
  kind: AcademiaSeedKind;
  title: string;
  items: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface AcademiaSeedFirestoreDocument {
  id: string;
  tenantId: string;
  kind: AcademiaSeedKind;
  title: string;
  items: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface ProvisionarAcademiaInput {
  nome: string;
  plano: AcademiaPlano;
  responsavelUid: string;
  responsavelEmail: string;
  responsavelNome?: string;
  responsavelRole?: AcademiaResponsavelRole;
}

export interface ProvisionarAcademiaResult {
  academia: Academia;
  seeds: AcademiaSeedDocument[];
  tenantId: string;
  responsavelUid: string;
  responsavelEmail: string;
  responsavelRole: AcademiaResponsavelRole;
}
