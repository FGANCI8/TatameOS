import { createHash } from 'node:crypto';
import type { ImageGenerationRequest, ImageGenerationResult } from './contracts/image-generation.contract';
import { OpenAIImageProvider } from './providers/openai.provider';
import { StableDiffusionImageProvider } from './providers/stable-diffusion.provider';
import type { ImageProvider } from './providers/image-provider';
import { shouldGenerateVisualImage } from './visual-image-policy';

type CacheEntry = {
  expiresAt: number;
  result: ImageGenerationResult;
};

function buildHashKey(request: ImageGenerationRequest): string {
  return createHash('sha256')
    .update(
      [
        request.imagePrompt,
        request.imageConcept,
        request.screenId,
        request.module,
        request.tenantId ?? '',
        request.stateType ?? '',
      ].join('|'),
    )
    .digest('hex');
}

function fallbackResult(hashKey: string): ImageGenerationResult {
  return {
    status: 'fallback',
    providerUsed: 'fallback',
    generatedAt: new Date().toISOString(),
    hashKey,
  };
}

export class ImageGenerationService {
  private readonly cache = new Map<string, CacheEntry>();
  private readonly providers: ImageProvider[];
  private readonly ttlMs = 60 * 60 * 1000;

  constructor(providers?: ImageProvider[]) {
    this.providers =
      providers ?? [new OpenAIImageProvider(), new StableDiffusionImageProvider()].filter((provider) => provider.isAvailable());
  }

  async generate(request: ImageGenerationRequest): Promise<ImageGenerationResult> {
    const hashKey = buildHashKey(request);
    const cached = this.cache.get(hashKey);

    if (cached && cached.expiresAt > Date.now()) {
      return {
        ...cached.result,
        status: 'cached',
        hashKey,
      };
    }

    if (!shouldGenerateVisualImage(request)) {
      return fallbackResult(hashKey);
    }

    for (const provider of this.providers) {
      try {
        const generated = await provider.generate(request);
        const result: ImageGenerationResult = {
          ...generated,
          status: 'generated',
          hashKey,
        };

        this.cache.set(hashKey, {
          result,
          expiresAt: Date.now() + this.ttlMs,
        });

        return result;
      } catch (error) {
        continue;
      }
    }

    return fallbackResult(hashKey);
  }
}
