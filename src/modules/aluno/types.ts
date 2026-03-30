export type StatusFinanceiro = 'em_dia' | 'atrasado' | 'isento';

export interface Aluno {
  id: string;
  tenantId: string;
  nome: string;
  faixa: 'Branca' | 'Azul' | 'Roxa' | 'Marrom' | 'Preta';
  grau: number;
  dataCadastro: Date;
  horasTotais: number;
  status: 'Ativo' | 'Inativo' | 'Suspenso';
  statusFinanceiro: StatusFinanceiro;
  valorMensalidade: number;
  vencimentoMensalidade?: number;
  avatarUrl?: string;
  email: string;
}

export interface AtualizarAlunoPerfilInput {
  faixa?: Aluno['faixa'];
  grau?: number;
  status?: Aluno['status'];
}

export interface AtualizarAlunoFinanceiroInput {
  statusFinanceiro?: Aluno['statusFinanceiro'];
  valorMensalidade?: number;
  vencimentoMensalidade?: number;
}

export type ProntidaoGraduacaoStatus = 'em_progresso' | 'quase_pronto' | 'pronto' | 'faixa_maxima';

export interface ProntidaoGraduacao {
  horasTotais: number;
  horasPorGrau: number;
  horasNoCicloAtual: number;
  horasRestantes: number;
  percentualConclusao: number;
  grauAtualRegistrado: number;
  grauEstimadoPorHoras: number;
  proximoGrau: number | null;
  status: ProntidaoGraduacaoStatus;
  label: string;
}

export interface AlunoComProntidao extends Aluno {
  prontidaoGraduacao: ProntidaoGraduacao;
}

export interface AlunoEmRiscoEvasao extends Pick<
  Aluno,
  'id' | 'tenantId' | 'nome' | 'faixa' | 'grau' | 'email' | 'statusFinanceiro' | 'valorMensalidade' | 'vencimentoMensalidade' | 'horasTotais'
> {
  ultimaPresencaEm?: Date;
  diasSemPresenca: number;
  motivo: string;
}

export interface GraduacaoLoteItem {
  id: string;
  faixa: Aluno['faixa'];
  grau: number;
}

export interface GraduacaoLoteResultado {
  total: number;
  alunos: Aluno[];
}
