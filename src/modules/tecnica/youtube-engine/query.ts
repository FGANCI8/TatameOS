import type { YouTubeSearchQueryInput, YouTubeSearchRequestPlan } from './types';

export function buildYouTubeSearchQuery(input: YouTubeSearchQueryInput): YouTubeSearchRequestPlan {
  const tokens = [input.tecnicaNome, input.categoria];

  if (input.nivel) {
    tokens.push(input.nivel);
  }

  if (input.professorReferencia) {
    tokens.push(input.professorReferencia);
  }

  return {
    query: tokens.filter(Boolean).join(' '),
    maxResults: 10,
    safeSearch: 'strict',
    type: 'video',
    order: 'relevance',
    relevanceLanguage: input.idiomaPreferido === 'en' ? 'en' : 'pt',
    regionCode: 'BR',
    videoEmbeddable: true,
    part: 'snippet',
  };
}
