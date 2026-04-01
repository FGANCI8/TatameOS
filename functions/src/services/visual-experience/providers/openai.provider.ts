import { Buffer } from 'node:buffer';
import { randomUUID } from 'node:crypto';
import type { ImageGenerationRequest, ImageGenerationResult } from '../contracts/image-generation.contract';
import type { ImageProvider } from './image-provider';

function readEnv(name: string): string | undefined {
  const value = process.env[name]?.trim();
  return value ? value : undefined;
}

export class OpenAIImageProvider implements ImageProvider {
  readonly name = 'openai' as const;

  isAvailable(): boolean {
    return Boolean(readEnv('OPENAI_API_KEY'));
  }

  async generate(request: ImageGenerationRequest): Promise<ImageGenerationResult> {
    const apiKey = readEnv('OPENAI_API_KEY');
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY ausente.');
    }

    const model = readEnv('OPENAI_IMAGE_MODEL') ?? 'gpt-image-1';
    const size = readEnv('OPENAI_IMAGE_SIZE') ?? '1024x1024';

    const response = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        prompt: request.imagePrompt,
        size,
        response_format: 'b64_json',
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI image generation failed: ${response.status} ${response.statusText}`);
    }

    const payload = (await response.json()) as {
      data?: Array<{ b64_json?: string; url?: string }>;
    };

    const candidate = payload.data?.[0];
    if (!candidate) {
      throw new Error('Resposta da OpenAI sem dados de imagem.');
    }

    const imageUrl = candidate.b64_json
      ? `data:image/png;base64,${candidate.b64_json}`
      : candidate.url;

    if (!imageUrl) {
      throw new Error('Resposta da OpenAI sem URL ou base64 de imagem.');
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
