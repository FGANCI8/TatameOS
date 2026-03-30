import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';
import type { Tecnica } from '../tecnica/types';

export type TrilhaStatus = 'rascunho' | 'publicada';
export type FaixaAlvo = Aluno['faixa'];

export interface Trilha {
  id: string;
  tenantId: string;
  titulo: string;
  descricao: string;
  faixaAlvo: FaixaAlvo;
  status: TrilhaStatus;
  tecnicasIds: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TrilhaComTecnicas extends Trilha {
  tecnicas: Tecnica[];
}

export interface SalvarTrilhaInput {
  id?: string;
  titulo: string;
  descricao: string;
  faixaAlvo: FaixaAlvo;
  status: TrilhaStatus;
  tecnicasIds: string[];
}

export interface ListarTrilhasFiltro {
  status?: TrilhaStatus;
  faixaAlvo?: FaixaAlvo;
  limite?: number;
}

export interface ITrilhasRepository {
  salvar(trilha: Trilha, tenantId: string): Promise<Trilha>;
  encontrarPorId(id: string, tenantId: string): Promise<Trilha | null>;
  listar(tenantId: string, filtros?: ListarTrilhasFiltro): Promise<Trilha[]>;
  listarPublicadasPorFaixa(tenantId: string, faixaAlvo: FaixaAlvo): Promise<Trilha[]>;
  remover(id: string, tenantId: string): Promise<boolean>;
}

export interface ITrilhasService {
  listarTrilhasProfessor(tenantId: string): Promise<ServiceResult<TrilhaComTecnicas[]>>;
  listarTrilhasPublicadasPorFaixa(tenantId: string, faixaAlvo: FaixaAlvo): Promise<ServiceResult<TrilhaComTecnicas[]>>;
  listarTecnicasDisponiveis(): Promise<ServiceResult<Tecnica[]>>;
  salvarTrilha(input: SalvarTrilhaInput, tenantId: string, isProfessorOrAdmin: boolean): Promise<ServiceResult<TrilhaComTecnicas>>;
  removerTrilha(id: string, tenantId: string, isProfessorOrAdmin: boolean): Promise<ServiceResult<{ removida: boolean }>>;
}
