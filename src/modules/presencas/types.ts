export interface Presenca {
  id: string;
  tenantId: string;
  alunoId: string;
  data: Date;
  duracaoPadrao: number;
  horasIncrementadas: number;
}

export interface RegistrarPresencaInput {
  alunoId: string;
}

export interface RegistrarPresencaResult {
  presenca: Presenca;
}

export interface AlunoChamadaItem {
  id: string;
  nome: string;
  faixa: string;
  grau: number;
  status: string;
  email: string;
  horasTotais: number;
}

export interface HistoricoPresencaFiltro {
  alunoId?: string | null;
  dataInicio?: string | null;
  dataFim?: string | null;
  limite?: number;
}

export interface HistoricoPresencaItem {
  id: string;
  tenantId: string;
  alunoId: string;
  alunoNome: string;
  data: Date;
  duracaoPadrao: number;
  horasIncrementadas: number;
}
