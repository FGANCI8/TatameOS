import { extractYouTubeVideoId } from '../youtube';
import type { BjjTechniqueVideoEntry } from '../../../data/bjj-library/types';
import type { RawYouTubeSearchResult } from './types';

export function mapYouTubeResultToLibraryVideo(
  candidate: RawYouTubeSearchResult,
  imagePrompt: string,
  imageConcept: string,
): BjjTechniqueVideoEntry | null {
  const youtubeId = candidate.url ? extractYouTubeVideoId(candidate.url) : candidate.id ?? null;

  if (
    !youtubeId ||
    (candidate.id && candidate.id !== youtubeId) ||
    !candidate.title ||
    !candidate.channel ||
    !candidate.url ||
    !candidate.duration ||
    !candidate.thumbnailOriginal
  ) {
    return null;
  }

  return {
    youtubeId,
    title: candidate.title,
    channel: candidate.channel,
    url: candidate.url,
    duration: candidate.duration,
    language: candidate.language ?? 'pt-BR',
    thumbnailOriginal: candidate.thumbnailOriginal,
    imagePrompt,
    imageConcept,
    addedAt: new Date().toISOString(),
  };
}
