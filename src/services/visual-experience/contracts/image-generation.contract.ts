import type { VisualStateType } from './screen-context.contract';

export type ImageGenerationStatus = 'cached' | 'generated' | 'fallback';

export type ImageGenerationProvider = 'openai' | 'stable-diffusion' | 'fallback';

export interface ImageGenerationRequest {
  imagePrompt: string;
  imageConcept: string;
  screenId: string;
  module: string;
  tenantId?: string;
  stateType?: VisualStateType;
}

export interface ImageGenerationResult {
  imageUrl?: string;
  status: ImageGenerationStatus;
  providerUsed: ImageGenerationProvider;
  generatedAt: string;
  hashKey: string;
}
