import { randomUUID } from 'node:crypto';
import type { ImageGenerationRequest, ImageGenerationResult } from '../contracts/image-generation.contract';
import type { ImageProvider } from './image-provider';

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export class StableDiffusionImageProvider implements ImageProvider {
  readonly name = 'stable-diffusion' as const;

  isAvailable(): boolean {
    return Boolean(readEnv('STABLE_DIFFUSION_API_URL'));
  }

  async generate(request: ImageGenerationRequest): Promise<ImageGenerationResult> {
    const apiUrl = readEnv('STABLE_DIFFUSION_API_URL');
    if (!apiUrl) {
      throw new Error('STABLE_DIFFUSION_API_URL ausente.');
    }

    const apiKey = readEnv('STABLE_DIFFUSION_API_KEY');
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      },
      body: JSON.stringify({
        prompt: request.imagePrompt,
        concept: request.imageConcept,
        size: '1024x1024',
      }),
    });

    if (!response.ok) {
      throw new Error(`Stable Diffusion generation failed: ${response.status} ${response.statusText}`);
    }

    const payload = (await response.json()) as {
      imageUrl?: string;
      url?: string;
      data?: Array<{ url?: string }>;
    };

    const imageUrl = payload.imageUrl ?? payload.url ?? payload.data?.[0]?.url;
    if (!imageUrl) {
      throw new Error('Resposta de Stable Diffusion sem URL de imagem.');
    }

    return {
      imageUrl,
      status: 'generated',
      providerUsed: this.name,
      generatedAt: new Date().toISOString(),
      hashKey: randomUUID(),
    };
  }
}
