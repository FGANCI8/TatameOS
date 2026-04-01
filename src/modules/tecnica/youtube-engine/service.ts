import { assertYouTubeApiConfigured } from './config';
import { mapYouTubeResultToLibraryVideo } from './mapper';
import { buildYouTubeSearchQuery } from './query';
import { validateYouTubeSearchResult } from './validator';
import { createFileSystemYouTubeLibraryPersistenceAdapter, type YouTubeLibraryPersistenceAdapter } from './persistence';
import type { BjjTechniqueVideoEntry } from '../../../data/bjj-library/types';
import type {
  RawYouTubeSearchResult,
  YouTubeCategoryHarvestReport,
  YouTubeCoreCategory,
  YouTubeLibraryActivationReport,
  YouTubeSearchLanguage,
  YouTubeSearchQueryInput,
  YouTubeSearchRejection,
} from './types';

type FetchLike = typeof fetch;

const YOUTUBE_API_BASE = 'https://www.googleapis.com/youtube/v3';
const DEFAULT_TARGET_COUNT = 3;

interface CategoryProfile {
  key: YouTubeCoreCategory;
  label: 'Finalizacao' | 'Guarda' | 'Passagem';
  queries: Array<{ language: YouTubeSearchLanguage; text: string }>;
  imageConcept: string;
}

interface YouTubeSearchSnippet {
  title?: string;
  channelTitle?: string;
  description?: string;
  thumbnails?: {
    default?: { url?: string };
    medium?: { url?: string };
    high?: { url?: string };
  };
  publishedAt?: string;
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
  liveBroadcastContent?: 'none' | 'live' | 'upcoming';
}

interface YouTubeVideoItem {
  id?: string;
  snippet?: YouTubeSearchSnippet;
  contentDetails?: {
    duration?: string;
  };
  status?: {
    embeddable?: boolean;
    privacyStatus?: string;
  };
}

const CATEGORY_PROFILES: CategoryProfile[] = [
  {
    key: 'finalizacoes',
    label: 'Finalizacao',
    queries: [
      { language: 'pt-BR', text: 'jiu jitsu finalizacao submission choke armbar' },
      { language: 'en', text: 'bjj submission choke armbar jiu jitsu' },
    ],
    imageConcept: 'finalizacoes da biblioteca BJJ',
  },
  {
    key: 'guardas',
    label: 'Guarda',
    queries: [
      { language: 'pt-BR', text: 'jiu jitsu guarda retention closed guard open guard' },
      { language: 'en', text: 'bjj guard retention closed guard open guard' },
    ],
    imageConcept: 'guardas da biblioteca BJJ',
  },
  {
    key: 'passagens',
    label: 'Passagem',
    queries: [
      { language: 'pt-BR', text: 'jiu jitsu passagem de guarda knee slice toreando' },
      { language: 'en', text: 'bjj guard passing knee slice toreando smash pass' },
    ],
    imageConcept: 'passagens da biblioteca BJJ',
  },
];

interface YouTubeSearchApiResponse {
  items?: Array<{
    id?: {
      videoId?: string;
    };
    snippet?: YouTubeSearchSnippet;
  }>;
}

interface YouTubeVideosApiResponse {
  items?: YouTubeVideoItem[];
}

function buildSearchUrl(apiKey: string, plan: ReturnType<typeof buildYouTubeSearchQuery>): string {
  const params = new URLSearchParams({
    key: apiKey,
    part: plan.part,
    q: plan.query,
    maxResults: String(plan.maxResults),
    safeSearch: plan.safeSearch,
    type: plan.type,
    order: plan.order,
    relevanceLanguage: plan.relevanceLanguage,
    regionCode: plan.regionCode,
    videoEmbeddable: String(plan.videoEmbeddable),
  });

  return `${YOUTUBE_API_BASE}/search?${params.toString()}`;
}

function buildVideosUrl(apiKey: string, videoIds: string[]): string {
  const params = new URLSearchParams({
    key: apiKey,
    part: 'snippet,contentDetails,status',
    id: videoIds.join(','),
    maxResults: String(videoIds.length),
  });

  return `${YOUTUBE_API_BASE}/videos?${params.toString()}`;
}

function normalizeThumbnail(
  snippets: Array<{
    thumbnails?: {
      high?: { url?: string };
      medium?: { url?: string };
      default?: { url?: string };
    };
  }>,
): string | undefined {
  for (const snippet of snippets) {
    const thumbnail = snippet.thumbnails?.high?.url ?? snippet.thumbnails?.medium?.url ?? snippet.thumbnails?.default?.url;
    if (thumbnail) {
      return thumbnail;
    }
  }

  return undefined;
}

function toRawCandidate(
  id: string,
  searchSnippet: YouTubeSearchSnippet | undefined,
  videoItem: YouTubeVideoItem | undefined,
): RawYouTubeSearchResult {
  const videoSnippet = videoItem?.snippet;
  const thumbnailOriginal = normalizeThumbnail([videoSnippet ?? {}, searchSnippet ?? {}]);

  return {
    id,
    title: videoSnippet?.title ?? searchSnippet?.title,
    channel: videoSnippet?.channelTitle ?? searchSnippet?.channelTitle,
    url: `https://www.youtube.com/watch?v=${id}`,
    duration: videoItem?.contentDetails?.duration,
    thumbnailOriginal,
    description: videoSnippet?.description ?? searchSnippet?.description,
    language: inferLanguageFromSnippet(videoSnippet ?? searchSnippet),
    publishedAt: videoSnippet?.publishedAt ?? searchSnippet?.publishedAt,
    embeddable: videoItem?.status?.embeddable,
    liveBroadcastContent: videoSnippet?.liveBroadcastContent ?? searchSnippet?.liveBroadcastContent,
  };
}

function inferLanguageFromSnippet(snippet?: {
  defaultLanguage?: string;
  defaultAudioLanguage?: string;
}): YouTubeSearchLanguage | undefined {
  const raw = snippet?.defaultAudioLanguage ?? snippet?.defaultLanguage;
  if (!raw) {
    return undefined;
  }

  const normalized = raw.toLowerCase();
  if (normalized.startsWith('pt')) {
    return 'pt-BR';
  }

  if (normalized.startsWith('en')) {
    return 'en';
  }

  return undefined;
}

async function fetchJson<T>(fetchImpl: FetchLike, url: string): Promise<T> {
  const response = await fetchImpl(url);
  if (!response.ok) {
    throw new Error(`YouTube API request failed with HTTP ${response.status}`);
  }

  return (await response.json()) as T;
}

async function searchCategoryCandidates(
  fetchImpl: FetchLike,
  apiKey: string,
  profile: CategoryProfile,
): Promise<RawYouTubeSearchResult[]> {
  const acceptedQueries = profile.queries.map((query) =>
    buildYouTubeSearchQuery({
      tecnicaNome: query.text,
      categoria: profile.label,
      idiomaPreferido: query.language,
    } satisfies YouTubeSearchQueryInput),
  );

  const searchHits: Array<{
    id: string;
    snippet?: YouTubeSearchSnippet;
  }> = [];

  for (const plan of acceptedQueries) {
    const searchResponse = await fetchJson<YouTubeSearchApiResponse>(fetchImpl, buildSearchUrl(apiKey, plan));
    for (const item of searchResponse.items ?? []) {
      const videoId = item.id?.videoId;
      if (!videoId || searchHits.some((hit) => hit.id === videoId)) {
        continue;
      }

      searchHits.push({ id: videoId, snippet: item.snippet });
    }
  }

  if (searchHits.length === 0) {
    return [];
  }

  const hydrated: RawYouTubeSearchResult[] = [];
  for (let index = 0; index < searchHits.length; index += 50) {
    const chunk = searchHits.slice(index, index + 50);
    const videoResponse = await fetchJson<YouTubeVideosApiResponse>(
      fetchImpl,
      buildVideosUrl(
        apiKey,
        chunk.map((item) => item.id),
      ),
    );

    const byId = new Map((videoResponse.items ?? []).map((item) => [item.id ?? '', item]));
    for (const searchHit of chunk) {
      hydrated.push(toRawCandidate(searchHit.id, searchHit.snippet, byId.get(searchHit.id)));
    }
  }

  return hydrated;
}

function buildRejection(category: YouTubeCoreCategory, candidate: RawYouTubeSearchResult, reason: string): YouTubeSearchRejection {
  return {
    category,
    youtubeId: candidate.id,
    title: candidate.title,
    language: candidate.language,
    reason,
  };
}

export async function activateYouTubeLibrary(options: {
  apiKey?: string;
  fetchImpl?: FetchLike;
  persistence?: YouTubeLibraryPersistenceAdapter;
  targetCountPerCategory?: number;
} = {}): Promise<YouTubeLibraryActivationReport> {
  const apiKey = options.apiKey ?? assertYouTubeApiConfigured();
  const fetchImpl = options.fetchImpl ?? fetch;
  const targetCountPerCategory = options.targetCountPerCategory ?? DEFAULT_TARGET_COUNT;
  const persistence = options.persistence ?? createFileSystemYouTubeLibraryPersistenceAdapter();
  const generatedAt = new Date().toISOString();
  const reports: YouTubeCategoryHarvestReport[] = [];

  for (const profile of CATEGORY_PROFILES) {
    const candidates = await searchCategoryCandidates(fetchImpl, apiKey, profile);
    const acceptedVideos: BjjTechniqueVideoEntry[] = [];
    const rejected: YouTubeSearchRejection[] = [];
    const seenVideoIds = new Set<string>();

    for (const candidate of candidates) {
      const validation = validateYouTubeSearchResult(candidate, profile.key);

      if (validation.accepted === false) {
        rejected.push(buildRejection(profile.key, candidate, validation.reason));
        continue;
      }

      if (!candidate.id || seenVideoIds.has(candidate.id)) {
        rejected.push(buildRejection(profile.key, candidate, 'duplicate video id'));
        continue;
      }

      seenVideoIds.add(candidate.id);

      const mapped = mapYouTubeResultToLibraryVideo(
        {
          ...candidate,
          language: validation.language,
        },
        `Thumbnail editorial para ${profile.label} em jiu jitsu.`,
        `Biblioteca local: ${profile.imageConcept}.`,
      );

      if (!mapped) {
        rejected.push(buildRejection(profile.key, candidate, 'candidate could not be mapped to the library format'));
        continue;
      }

      acceptedVideos.push(mapped);
      if (acceptedVideos.length >= targetCountPerCategory) {
        break;
      }
    }

    const queryTexts = profile.queries.map((query) => query.text);
    reports.push({
      category: profile.key,
      categoryLabel: profile.label,
      queries: queryTexts,
      accepted: acceptedVideos,
      rejected,
      pendingCount: Math.max(targetCountPerCategory - acceptedVideos.length, 0),
    });
  }

  const activationReport: YouTubeLibraryActivationReport = {
    generatedAt,
    source: 'youtube-data-api-v3',
    categories: reports,
  };

  activationReport.persisted = await persistence.save(activationReport);
  return activationReport;
}

export function buildCoreYouTubeCategoryProfiles(): CategoryProfile[] {
  return CATEGORY_PROFILES.map((profile) => ({
    ...profile,
    queries: profile.queries.map((query) => ({ ...query })),
  }));
}
