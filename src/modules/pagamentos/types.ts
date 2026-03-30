import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';

export type PagamentoMetodo = 'pix' | 'dinheiro' | 'cartao' | 'transferencia' | 'outro';

export interface Pagamento {
  id: string;
  tenantId: string;
  alunoId: string;
  valor: number;
  dataPagamento: Date;
  mesReferencia: string;
  metodo: PagamentoMetodo;
}

export interface RegistrarPagamentoInput {
  alunoId: string;
  valor: number;
  dataPagamento?: Date;
  mesReferencia?: string;
  metodo: PagamentoMetodo;
}

export interface ListarPagamentosFiltro {
  alunoId?: string;
  mesReferencia?: string;
  limite?: number;
}

export interface RegistrarPagamentoResult {
  pagamento: Pagamento;
}

export interface ListarPagamentosResult {
  pagamentos: Pagamento[];
}

export interface FaturamentoMensalItem {
  mesReferencia: string;
  total: number;
  quantidadePagamentos: number;
}

export interface ProjecaoFinanceiraTrimestral {
  receitaEsperadaMensal: number;
  receitaEsperadaTrimestral: number;
  mediaInadimplenciaHistorica: number;
  projecaoLiquidaTrimestral: number;
  percentualReceitaProjetada: number;
  mesesConsiderados: string[];
}

export interface AlunoInadimplenteFinanceiro extends Pick<Aluno, 'id' | 'nome' | 'email' | 'faixa' | 'grau' | 'horasTotais' | 'statusFinanceiro' | 'tenantId'> {
  valorReferencia: number;
  valorMensalidade: number;
  vencimentoMensalidade?: number;
}

export interface ResumoFinanceiro {
  periodo: {
    mes: number;
    ano: number;
    mesReferencia: string;
  };
  totalArrecadado: number;
  totalPendente: number;
  receitaEsperada: number;
  percentualReceitaRealizada: number;
  taxaInadimplencia: number;
  totalAtivos: number;
  totalAtrasados: number;
  faturamentoMensal: FaturamentoMensalItem[];
  alunosInadimplentes: AlunoInadimplenteFinanceiro[];
  projecaoTrimestral: ProjecaoFinanceiraTrimestral;
}

export interface IPagamentosService {
  registrarPagamento(
    input: RegistrarPagamentoInput,
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
  ): Promise<ServiceResult<RegistrarPagamentoResult>>;

  listarPagamentos(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
    filtros?: ListarPagamentosFiltro,
  ): Promise<ServiceResult<ListarPagamentosResult>>;

  obterResumoFinanceiro(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
    mes: number,
    ano: number,
  ): Promise<ServiceResult<ResumoFinanceiro>>;

  calcularProjecaoTrimestral(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
  ): Promise<ServiceResult<ProjecaoFinanceiraTrimestral>>;
}
