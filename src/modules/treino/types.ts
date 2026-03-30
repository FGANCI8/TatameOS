export interface Treino {
  id: string;
  tenantId: string;
  alunoId: string;
  tecnicaId: string;
  dificuldadePercebida: number; // Graduação de 1 a 5
  observacoes: string;
  data: Date;
}
