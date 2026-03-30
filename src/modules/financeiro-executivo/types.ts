import type { ServiceResult } from '../core/types';
import type { Aluno } from '../aluno/types';
import type { Pagamento } from '../pagamentos/types';

export type FinanceiroRiscoStatus = 'saudavel' | 'atencao' | 'critico';

export interface FinanceiroExecutivoPeriodo {
  mes: number;
  ano: number;
  mesReferencia: string;
}

export interface FluxoCaixaProjetadoItem {
  mesReferencia: string;
  mes: number;
  ano: number;
  label: string;
  receitaBrutaProjetada: number;
  inadimplenciaProjetada: number;
  recuperacaoProjetada: number;
  saldoProjetado: number;
  saldoAcumulado: number;
  alerta: string | null;
}

export interface ResumoFinanceiroExecutivo {
  tenantId: string;
  periodoBase: FinanceiroExecutivoPeriodo;
  alunosAtivos: number;
  alunosEmAtraso: number;
  valorMensalBase: number;
  valorEmAtraso: number;
  taxaInadimplencia: number;
  coberturaHistoricaMedia: number;
  faturamentoMensal: Array<{
    mesReferencia: string;
    total: number;
    quantidadePagamentos: number;
  }>;
  fluxoCaixa6Meses: FluxoCaixaProjetadoItem[];
  saldoProjetado6Meses: number;
  statusRisco: FinanceiroRiscoStatus;
  observacoes: string[];
  alunosEmAtrasoDetalhes: Aluno[];
}

export interface FinanceiroExecutivoBaseOperacional {
  alunosAtivos: Aluno[];
  alunosEmAtraso: Aluno[];
  pagamentosAnoAtual: Pagamento[];
  pagamentosAnoAnterior: Pagamento[];
}

export interface IFinanceiroExecutivoRepository {
  carregarBaseOperacional(tenantId: string, anoBase: number): Promise<FinanceiroExecutivoBaseOperacional>;
}

export interface IFinanceiroExecutivoService {
  obterResumoExecutivoFinanceiro(
    tenantId: string | null,
    isProfessorOrAdmin: boolean,
    mes: number,
    ano: number,
  ): Promise<ServiceResult<ResumoFinanceiroExecutivo>>;
}
