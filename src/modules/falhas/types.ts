export type CategoriaFalha = 'Defesa de Queda' | 'Retencao de Guarda' | 'Defesa de Finalizacao' | 'Posicionamento' | 'Gas' | 'Mental';

export interface Falha {
  id: string;
  tenantId: string;
  alunoId: string;
  lutaId?: string; // Opcional, se ocorreu em campeonato/rolar específico
  categoria: CategoriaFalha;
  descricao: string;
  gravidade: number; // Graduação de 1 a 5 (Impacto na luta)
  data: Date;
}

export interface MapaVulnerabilidade {
  categoria: CategoriaFalha;
  frequencia: number;
  impactoTotal: number;
}
