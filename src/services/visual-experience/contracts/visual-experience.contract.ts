import type {
  EmphasisLevel,
  FallbackMode,
  IllustrationPlacement,
  VisualLayoutVariant,
} from './screen-context.contract';

export interface VisualExperienceOutput {
  shouldRenderImage: boolean;
  imageConcept: string;
  imagePrompt: string;
  imageAlt: string;
  imageUrl?: string;
  headline: string;
  supportingCopy: string;
  ctaLabel: string;
  layoutVariant: VisualLayoutVariant;
  illustrationPlacement: IllustrationPlacement;
  emphasisLevel: EmphasisLevel;
  trustSignal?: string;
  fallbackMode: FallbackMode;
  renderingNotes: string;
}
