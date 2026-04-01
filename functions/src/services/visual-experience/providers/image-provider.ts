import type { ImageGenerationRequest, ImageGenerationResult } from '../contracts/image-generation.contract';

export interface ImageProvider {
  readonly name: 'openai' | 'stable-diffusion';
  isAvailable(): boolean;
  generate(request: ImageGenerationRequest): Promise<ImageGenerationResult>;
}
