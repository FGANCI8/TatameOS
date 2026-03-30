export interface Tecnica {
  id: string;
  tenantId: string;
  nome: string;
  categoria: 'Guarda' | 'Passagem' | 'Finalizacao' | 'Queda' | 'Defesa';
  dificuldadeBase: number;
  videoUrl?: string;
  videoProvider?: 'youtube';
  youtubeVideoId?: string;
  thumbnailUrl?: string;
  descricao?: string;
}
