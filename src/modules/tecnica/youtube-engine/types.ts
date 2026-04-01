import type { BjjTechniqueVideoEntry } from '../../../data/bjj-library/types';

export type YouTubeSearchLanguage = 'pt-BR' | 'en';
export type YouTubeCoreCategory = 'finalizacoes' | 'guardas' | 'passagens';

export interface YouTubeSearchQueryInput {
  tecnicaNome: string;
  categoria: 'Guarda' | 'Passagem' | 'Finalizacao' | 'Queda' | 'Defesa';
  nivel?: 'iniciante' | 'intermediario' | 'avancado';
  idiomaPreferido?: YouTubeSearchLanguage;
  professorReferencia?: string;
}

export interface YouTubeSearchRequestPlan {
  query: string;
  maxResults: number;
  safeSearch: 'strict';
  type: 'video';
  order: 'relevance';
  relevanceLanguage: 'pt' | 'en';
  regionCode: 'BR' | 'US';
  videoEmbeddable: true;
  part: 'snippet';
}

export interface RawYouTubeSearchResult {
  id?: string;
  title?: string;
  channel?: string;
  url?: string;
  duration?: string;
  thumbnailOriginal?: string;
  description?: string;
  language?: YouTubeSearchLanguage;
  publishedAt?: string;
  embeddable?: boolean;
  liveBroadcastContent?: 'none' | 'live' | 'upcoming';
}

export interface YouTubeSearchRejection {
  category: YouTubeCoreCategory;
  youtubeId?: string;
  title?: string;
  language?: YouTubeSearchLanguage;
  reason: string;
}

export interface YouTubeCategoryHarvestReport {
  category: YouTubeCoreCategory;
  categoryLabel: 'Finalizacao' | 'Guarda' | 'Passagem';
  queries: string[];
  accepted: BjjTechniqueVideoEntry[];
  rejected: YouTubeSearchRejection[];
  pendingCount: number;
}

export interface YouTubeLibraryActivationReport {
  generatedAt: string;
  source: 'youtube-data-api-v3';
  categories: YouTubeCategoryHarvestReport[];
  persisted?: {
    manifestPath: string;
    reportPath: string;
    categoryFiles: string[];
    backupPaths: string[];
  };
}
