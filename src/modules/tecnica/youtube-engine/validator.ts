import { extractYouTubeVideoId, isAllowedYouTubeUrl } from '../youtube';
import type { RawYouTubeSearchResult, YouTubeCoreCategory, YouTubeSearchLanguage } from './types';

const CATEGORY_TITLE_KEYWORDS: Record<YouTubeCoreCategory, string[]> = {
  finalizacoes: [
    'finalizacao',
    'finalizacao',
    'submission',
    'choke',
    'armbar',
    'armlock',
    'kimura',
    'triangle',
    'triangulo',
    'mata leao',
    'estrangulamento',
    'chave',
  ],
  guardas: [
    'guarda',
    'guard',
    'guard retention',
    'retencao',
    'retenção',
    'closed guard',
    'open guard',
    'half guard',
    'lasso',
    'de la riva',
  ],
  passagens: [
    'passagem',
    'passing',
    'guard passing',
    'knee slice',
    'toreando',
    'smash pass',
    'leg drag',
    'pressure pass',
  ],
};

const VAGUE_TITLE_MARKERS = [
  'shorts',
  'compilation',
  'highlights',
  'best of',
  'edit',
  'live',
  'reaction',
  'memes',
  'random',
  'trailer',
  'podcast',
];

function normalizeText(value: string): string {
  return value
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function parseDurationToSeconds(duration: string): number | null {
  const match = duration.match(
    /^P(?:(?<days>\d+)D)?T(?:(?<hours>\d+)H)?(?:(?<minutes>\d+)M)?(?:(?<seconds>\d+)S)?$/,
  );

  if (!match?.groups) {
    return null;
  }

  const days = Number(match.groups.days ?? 0);
  const hours = Number(match.groups.hours ?? 0);
  const minutes = Number(match.groups.minutes ?? 0);
  const seconds = Number(match.groups.seconds ?? 0);

  return days * 86400 + hours * 3600 + minutes * 60 + seconds;
}

function inferLanguage(candidate: RawYouTubeSearchResult): YouTubeSearchLanguage | null {
  const declaredLanguage = candidate.language?.toLowerCase();
  if (declaredLanguage?.startsWith('pt')) {
    return 'pt-BR';
  }

  if (declaredLanguage?.startsWith('en')) {
    return 'en';
  }

  const combined = normalizeText([candidate.title, candidate.description].filter(Boolean).join(' '));
  if (!combined) {
    return null;
  }

  const portugueseSignals = [' o ', ' a ', ' de ', ' do ', ' da ', ' e ', 'para', 'guarda', 'passagem', 'finalizacao'];
  const englishSignals = [' the ', ' and ', ' of ', ' to ', ' guard ', ' passing ', ' submission '];

  const portugueseScore = portugueseSignals.filter((signal) => combined.includes(signal)).length;
  const englishScore = englishSignals.filter((signal) => combined.includes(signal)).length;

  if (portugueseScore === 0 && englishScore === 0) {
    return null;
  }

  return portugueseScore >= englishScore ? 'pt-BR' : 'en';
}

function hasCategorySignal(candidate: RawYouTubeSearchResult, category: YouTubeCoreCategory): boolean {
  const haystack = normalizeText([candidate.title, candidate.description].filter(Boolean).join(' '));
  if (!haystack) {
    return false;
  }

  return CATEGORY_TITLE_KEYWORDS[category].some((keyword) => haystack.includes(normalizeText(keyword)));
}

function isVagueTitle(candidate: RawYouTubeSearchResult): boolean {
  const title = normalizeText(candidate.title ?? '');
  if (!title) {
    return true;
  }

  return VAGUE_TITLE_MARKERS.some((marker) => title.includes(marker));
}

export function isUsefulYouTubeDuration(duration: string): boolean {
  const seconds = parseDurationToSeconds(duration);
  if (!seconds) {
    return false;
  }

  return seconds >= 60 && seconds <= 20 * 60;
}

export function isValidYouTubeSearchResult(candidate: RawYouTubeSearchResult): boolean {
  if (
    !candidate.title ||
    !candidate.channel ||
    !candidate.url ||
    !candidate.duration ||
    !candidate.thumbnailOriginal
  ) {
    return false;
  }

  if (!isAllowedYouTubeUrl(candidate.url)) {
    return false;
  }

  const videoIdFromUrl = extractYouTubeVideoId(candidate.url);
  if (!videoIdFromUrl) {
    return false;
  }

  return !candidate.id || candidate.id === videoIdFromUrl;
}

export function validateYouTubeSearchResult(
  candidate: RawYouTubeSearchResult,
  category: YouTubeCoreCategory,
): { accepted: true; language: YouTubeSearchLanguage } | { accepted: false; reason: string } {
  if (!isValidYouTubeSearchResult(candidate)) {
    return { accepted: false, reason: 'missing required YouTube metadata' };
  }

  if (!candidate.embeddable) {
    return { accepted: false, reason: 'video is not embeddable' };
  }

  if (candidate.liveBroadcastContent && candidate.liveBroadcastContent !== 'none') {
    return { accepted: false, reason: 'live or upcoming broadcast is not allowed' };
  }

  if (!isUsefulYouTubeDuration(candidate.duration ?? '')) {
    return { accepted: false, reason: 'video duration is outside the useful range' };
  }

  if (isVagueTitle(candidate)) {
    return { accepted: false, reason: 'title is too vague for the BJJ library' };
  }

  if (!hasCategorySignal(candidate, category)) {
    return { accepted: false, reason: 'title or description does not match the target category' };
  }

  const language = inferLanguage(candidate);
  if (!language) {
    return { accepted: false, reason: 'language could not be verified as pt-BR or en' };
  }

  return { accepted: true, language };
}

export function getYouTubeVideoId(candidate: RawYouTubeSearchResult): string | null {
  if (candidate.url) {
    const videoIdFromUrl = extractYouTubeVideoId(candidate.url);
    if (!videoIdFromUrl) {
      return null;
    }

    if (candidate.id && candidate.id !== videoIdFromUrl) {
      return null;
    }

    return videoIdFromUrl;
  }

  return candidate.id ?? null;
}
