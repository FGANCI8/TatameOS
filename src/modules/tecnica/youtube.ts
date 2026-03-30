const YOUTUBE_HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'youtu.be',
  'www.youtu.be',
]);

export function extractYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (!YOUTUBE_HOSTS.has(parsed.hostname)) {
      return null;
    }

    if (parsed.hostname.includes('youtu.be')) {
      const candidate = parsed.pathname.replace('/', '').trim();
      return candidate || null;
    }

    if (parsed.pathname === '/watch') {
      return parsed.searchParams.get('v');
    }

    if (parsed.pathname.startsWith('/embed/')) {
      return parsed.pathname.split('/embed/')[1] || null;
    }

    if (parsed.pathname.startsWith('/shorts/')) {
      return parsed.pathname.split('/shorts/')[1] || null;
    }

    return null;
  } catch {
    return null;
  }
}

export function buildYouTubeEmbedUrl(urlOrId: string): string | null {
  const videoId = urlOrId.includes('http') ? extractYouTubeVideoId(urlOrId) : urlOrId;
  if (!videoId) {
    return null;
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

export function isAllowedYouTubeUrl(url: string): boolean {
  return extractYouTubeVideoId(url) !== null;
}
