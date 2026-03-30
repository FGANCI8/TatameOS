import { extractYouTubeVideoId, isAllowedYouTubeUrl } from '../youtube';
import type { Tecnica } from '../types';

// tecnica Service
export class TecnicaService {
  normalizarVideoYoutube(url?: string | null) {
    if (!url) {
      return null;
    }

    if (!isAllowedYouTubeUrl(url)) {
      return null;
    }

    return extractYouTubeVideoId(url);
  }

  anexarVideoYoutube(tecnica: Tecnica): Tecnica {
    const youtubeVideoId = this.normalizarVideoYoutube(tecnica.videoUrl);

    return {
      ...tecnica,
      videoProvider: youtubeVideoId ? 'youtube' : tecnica.videoProvider,
      youtubeVideoId: youtubeVideoId || tecnica.youtubeVideoId,
    };
  }
}
