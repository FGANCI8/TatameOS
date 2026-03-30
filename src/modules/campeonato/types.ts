export type TipoFinalizacao = 'Chave de Braco' | 'Triangulo' | 'Mata-Leao' | 'Chave de Pe' | 'Kimura' | 'Guilhotina' | 'Nenhuma';
export type TipoResultado = 'Vitoria' | 'Derrota' | 'Empate';

export interface Luta {
  id: string;
  tenantId: string;
  campeonatoId: string;
  alunoId: string;
  resultado: TipoResultado;
  finalizacaoAplicada: TipoFinalizacao;
  finalizacaoSofrida: TipoFinalizacao;
  padraoErroInimigo?: string;
  padraoErroAluno?: string; // Insights táticos do motivo da perda ou vantagem do adversário
  pontosPro: number;
  pontosContra: number;
  data: Date;
}

export interface Campeonato {
  id: string;
  tenantId: string;
  nome: string;
  data: Date;
}

export interface ResumoCompetitivo {
  totalLutas: number;
  vitorias: number;
  derrotas: number;
  taxaSucesso: string;
  finalizacoesMaisAplicadas: { tipo: TipoFinalizacao; qtd: number }[];
  padroesDeErro: { erro: string; qtd: number }[];
}
