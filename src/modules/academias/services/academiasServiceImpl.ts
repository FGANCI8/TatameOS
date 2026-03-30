import type { ServiceResult } from '../../core/types';
import { adminAuth } from '../../../lib/firebase/admin';
import type { IAcademiasRepository } from '../academias.repository';
import type {
  Academia,
  AcademiaPlano,
  AcademiaResponsavelRole,
  AcademiaSeedDocument,
  ProvisionarAcademiaInput,
  ProvisionarAcademiaResult
} from '../types';
import type { IAcademiasService } from '../academias.service';

const DEFAULT_SEED_VERSION = 1;

const FAIXAS_PADRAO = ['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta'];
const CATEGORIAS_FALHAS = [
  'Defesa de Queda',
  'Retencao de Guarda',
  'Defesa de Finalizacao',
  'Posicionamento',
  'Gas',
  'Mental'
];
const TECNICAS_INICIAIS = [
  'Passagem de Guarda',
  'Retencao de Guarda',
  'Raspagem',
  'Montada',
  'Controle de Costas',
  'Kimura',
  'Triangulo',
  'Chave de Braco'
];

function isPlanoValido(plano: string): plano is AcademiaPlano {
  return ['starter', 'pro', 'enterprise'].includes(plano);
}

function isResponsavelRoleValido(role: string | undefined): role is AcademiaResponsavelRole {
  return role === undefined || role === 'admin' || role === 'professor';
}

function mapRoleClaim(role: AcademiaResponsavelRole) {
  return role;
}

function criarSeeds(tenantId: string): AcademiaSeedDocument[] {
  const now = new Date();

  return [
    {
      id: 'faixas-padrao',
      tenantId,
      kind: 'faixas',
      title: 'Faixas padrão',
      items: FAIXAS_PADRAO,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'categorias-falhas',
      tenantId,
      kind: 'categorias_falhas',
      title: 'Categorias de falhas',
      items: CATEGORIAS_FALHAS,
      createdAt: now,
      updatedAt: now,
    },
    {
      id: 'tecnicas-iniciais',
      tenantId,
      kind: 'tecnicas_iniciais',
      title: 'Técnicas iniciais',
      items: TECNICAS_INICIAIS,
      createdAt: now,
      updatedAt: now,
    },
  ];
}

function criarAcademia(input: ProvisionarAcademiaInput, tenantId: string): Academia {
  const now = new Date();

  return {
    id: tenantId,
    tenantId,
    nome: input.nome.trim(),
    plano: input.plano,
    status: 'ativa',
    dataAtivacao: now,
    administradorResponsavelId: input.responsavelUid,
    administradorResponsavelEmail: input.responsavelEmail,
    administradorResponsavelNome: input.responsavelNome?.trim() || undefined,
    seedVersion: DEFAULT_SEED_VERSION,
    seedApplied: true,
    createdAt: now,
    updatedAt: now,
  };
}

export class AcademiasServiceImpl implements IAcademiasService {
  constructor(private repo: IAcademiasRepository) {}

  async provisionarAcademia(input: ProvisionarAcademiaInput): Promise<ServiceResult<ProvisionarAcademiaResult>> {
    try {
      if (!input.nome?.trim()) {
        return { success: false, error: 'O nome da academia é obrigatório.' };
      }

      if (!isPlanoValido(input.plano)) {
        return { success: false, error: 'Plano inválido para provisionamento da academia.' };
      }

      if (!input.responsavelUid?.trim() || !input.responsavelEmail?.trim()) {
        return { success: false, error: 'Responsável da academia é obrigatório.' };
      }

      if (!isResponsavelRoleValido(input.responsavelRole)) {
        return { success: false, error: 'Role do responsável inválida.' };
      }

      const tenantId = crypto.randomUUID();
      const academia = criarAcademia(input, tenantId);
      const seeds = criarSeeds(tenantId);
      const responsavel = await adminAuth.getUser(input.responsavelUid);
      const previousClaims = responsavel.customClaims ?? {};
      const nextClaims = {
        ...previousClaims,
        tenantId,
        role: mapRoleClaim(input.responsavelRole || 'admin'),
      };

      await this.repo.provisionAcademia(academia, seeds);

      try {
        await adminAuth.setCustomUserClaims(input.responsavelUid, nextClaims);
      } catch (claimError) {
        await this.repo.rollbackAcademia(tenantId, seeds.map((seed) => seed.id));
        try {
          await adminAuth.setCustomUserClaims(input.responsavelUid, previousClaims);
        } catch (restoreError) {
          console.error('Falha ao restaurar claims após rollback de academia:', restoreError);
        }
        throw claimError;
      }

      return {
        success: true,
        data: {
          academia,
          seeds,
          tenantId,
          responsavelUid: input.responsavelUid,
          responsavelEmail: input.responsavelEmail,
          responsavelRole: input.responsavelRole || 'admin',
        }
      };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao provisionar academia.' };
    }
  }

  async buscarAcademia(tenantId: string): Promise<ServiceResult<Academia | null>> {
    try {
      if (!tenantId?.trim()) {
        return { success: false, error: 'Tenant inválido.' };
      }

      const academia = await this.repo.findByTenantId(tenantId);
      return { success: true, data: academia };
    } catch (error: any) {
      return { success: false, error: error?.message || 'Falha ao buscar academia.' };
    }
  }
}
