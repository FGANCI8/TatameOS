import { readOptionalEnv } from '../../../lib/env';

export function readYouTubeApiKey(): string | undefined {
  return readOptionalEnv('YOUTUBE_API_KEY', process.env.YOUTUBE_API_KEY);
}

export function assertYouTubeApiConfigured(): string {
  const key = readYouTubeApiKey();
  if (!key) {
    throw new Error('YOUTUBE_API_KEY is required before enabling YouTube search.');
  }

  return key;
}
