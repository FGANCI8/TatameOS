import type { VisualExperienceOutput } from './contracts/visual-experience.contract';
import type { VisualScreenContext } from './contracts/screen-context.contract';
import { VisualModuleFactory } from './factories/visual-module.factory';
import { mapScreenContext } from './mappers/screen-context.mapper';
import { CopyDecisionStrategy } from './strategies/copy-decision.strategy';
import { ImageDecisionStrategy } from './strategies/image-decision.strategy';
import { LayoutDecisionStrategy } from './strategies/layout-decision.strategy';
import { imageGenerationAdapter } from './adapters/image-generation.adapter';

export class VisualExperienceService {
  constructor(
    private readonly factory = new VisualModuleFactory(),
    private readonly imageStrategy = new ImageDecisionStrategy(),
    private readonly copyStrategy = new CopyDecisionStrategy(),
    private readonly layoutStrategy = new LayoutDecisionStrategy(),
  ) {}

  build(context: VisualScreenContext): VisualExperienceOutput {
    const normalizedContext = mapScreenContext(context);
    const profile = this.factory.resolve(normalizedContext);
    const image = this.imageStrategy.resolve(normalizedContext, profile);
    const copy = this.copyStrategy.resolve(normalizedContext, profile);
    const layout = this.layoutStrategy.resolve(normalizedContext, profile);

    return {
      shouldRenderImage: image.shouldRenderImage,
      imageConcept: image.imageConcept,
      imagePrompt: image.imagePrompt,
      imageAlt: image.imageAlt,
      headline: copy.headline,
      supportingCopy: copy.supportingCopy,
      ctaLabel: copy.ctaLabel,
      layoutVariant: layout.layoutVariant,
      illustrationPlacement: layout.illustrationPlacement,
      emphasisLevel: layout.emphasisLevel,
      trustSignal: image.trustSignal,
      fallbackMode: image.fallbackMode,
      renderingNotes: layout.renderingNotes,
    };
  }

  async hydrateImage(context: VisualScreenContext, output: VisualExperienceOutput): Promise<VisualExperienceOutput> {
    const image = await imageGenerationAdapter.requestImage(context, {
      imagePrompt: output.imagePrompt,
      imageConcept: output.imageConcept,
      screenId: context.screenId,
      module: context.module ?? 'generic',
      tenantId: context.tenantContext?.tenantId,
      stateType: context.stateType,
    });

    if (!image.imageUrl) {
      return output;
    }

    return {
      ...output,
      imageUrl: image.imageUrl,
    };
  }
}

export const visualExperienceService = new VisualExperienceService();
