export type AcademiaPlanoPublico = 'starter' | 'pro' | 'enterprise';
export type AcademiaProvisionStatus = 'pending' | 'success' | 'error';

export interface ProvisionarAcademiaInput {
  nome: string;
  plano: AcademiaPlanoPublico;
  responsavelEmail: string;
  responsavelNome?: string;
}

export interface AcademiaProvisionSeedSummary {
  id: string;
  kind: string;
  title: string;
  itemsCount: number;
}

export interface AcademiaProvisionResult {
  tenantId: string;
  conviteEnviado?: boolean;
  convite?: {
    email: string;
    expiresAt: string;
    status: 'pendente';
  };
  academia: {
    id: string;
    tenantId: string;
    nome: string;
    plano: AcademiaPlanoPublico;
    status: string;
    dataAtivacao: string;
    administradorResponsavelId: string;
    administradorResponsavelEmail: string;
    administradorResponsavelNome?: string;
    seedVersion: number;
    seedApplied: boolean;
    createdAt: string;
    updatedAt: string;
  };
  seeds: AcademiaProvisionSeedSummary[];
  responsavel: {
    uid: string | null;
    email: string;
    role: 'admin';
  };
}
