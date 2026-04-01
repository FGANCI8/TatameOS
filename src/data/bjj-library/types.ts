export type BjjTechniqueCategory = 'guarda' | 'passagem' | 'finalizacao' | 'queda' | 'defesa';

export type BjjTechniqueLevel = 'iniciante' | 'intermediario' | 'avancado';

export interface BjjTechniqueVideoEntry {
  youtubeId: string;
  title: string;
  channel: string;
  url: string;
  duration: string;
  language: 'pt-BR' | 'en';
  thumbnailOriginal: string;
  imagePrompt: string;
  imageConcept: string;
  addedAt: string;
}

export interface BjjTechniqueEntry {
  id: string;
  name: string;
  category: BjjTechniqueCategory;
  level: BjjTechniqueLevel;
  videos: BjjTechniqueVideoEntry[];
  lastUpdated: string;
}

export interface BjjTechniqueCategoryEntry {
  id: BjjTechniqueCategory;
  name: string;
  description: string;
}
