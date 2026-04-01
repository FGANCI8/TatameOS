import { httpsCallable } from 'firebase/functions';
import { functions } from '../../../lib/firebase/client';
import type { VisualScreenContext } from '../contracts/screen-context.contract';
import type {
  ImageGenerationRequest,
  ImageGenerationResult,
} from '../contracts/image-generation.contract';
import { shouldGenerateVisualImage } from '../constants/visual-image-policy';

const imageGenerationCache = new Map<string, ImageGenerationResult>();

function stableHash(input: string): string {
  let hash = 2166136261;

  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return (hash >>> 0).toString(16).padStart(8, '0');
}

function buildHashKey(request: ImageGenerationRequest): string {
  return stableHash(
    [
      request.imagePrompt,
      request.imageConcept,
      request.screenId,
      request.module,
      request.tenantId ?? '',
      request.stateType ?? '',
    ].join('|'),
  );
}

function fallbackResult(hashKey: string): ImageGenerationResult {
  return {
    status: 'fallback',
    providerUsed: 'fallback',
    generatedAt: new Date().toISOString(),
    hashKey,
  };
}

export class ImageGenerationAdapter {
  async requestImage(context: VisualScreenContext, request: ImageGenerationRequest): Promise<ImageGenerationResult> {
    if (!shouldGenerateVisualImage(context)) {
      return fallbackResult(buildHashKey(request));
    }

    const hashKey = buildHashKey(request);
    const cached = imageGenerationCache.get(hashKey);

    if (cached) {
      return {
        ...cached,
        status: 'cached',
      };
    }

    try {
      const callable = httpsCallable<ImageGenerationRequest, ImageGenerationResult>(
        functions,
        'generateVisualExperienceImage',
      );
      const response = await callable(request);
      const result = response.data;

      if (result.imageUrl) {
        imageGenerationCache.set(hashKey, result);
      }

      return result;
    } catch (error) {
      return fallbackResult(hashKey);
    }
  }
}

export const imageGenerationAdapter = new ImageGenerationAdapter();
