import type { VisualExperienceOutput } from '../contracts/visual-experience.contract';
import type { VisualScreenContext } from '../contracts/screen-context.contract';
import type { VisualModuleProfile } from '../constants/visual-rules';
import { VISUAL_STATE_RULES } from '../constants/visual-rules';

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function buildPrompt(profile: VisualModuleProfile, context: VisualScreenContext, imageConcept: string): string {
  const domainHints = Object.entries(context.domainContext ?? {})
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join(', ');

  const base = [
    profile.defaultImagePrompt,
    imageConcept,
    context.actionIntent ? `action intent: ${context.actionIntent}` : '',
    context.userRole ? `role: ${context.userRole}` : '',
    context.tenantContext?.tenantName ? `tenant: ${context.tenantContext.tenantName}` : '',
    domainHints,
  ]
    .filter(Boolean)
    .join('. ');

  return normalizeText(base);
}

function buildAlt(context: VisualScreenContext, imageConcept: string): string {
  const subject = context.actionIntent ? normalizeText(context.actionIntent) : 'contexto visual da tela';
  return normalizeText(`${subject} - ${imageConcept}`);
}

export class ImageDecisionStrategy {
  resolve(context: VisualScreenContext, profile: VisualModuleProfile): Pick<
    VisualExperienceOutput,
    'shouldRenderImage' | 'imageConcept' | 'imagePrompt' | 'imageAlt' | 'fallbackMode' | 'trustSignal'
  > {
    const stateRule = VISUAL_STATE_RULES[context.stateType];
    const shouldRenderImage = stateRule.shouldRenderImage;
    const imageConcept = normalizeText(
      [
        profile.defaultImageConcept,
        stateRule.imageConceptSuffix,
        context.tenantContext?.tenantName ? `para ${context.tenantContext.tenantName}` : '',
      ]
        .filter(Boolean)
        .join(' - '),
    );

    const imagePrompt = buildPrompt(profile, context, imageConcept);
    const imageAlt = buildAlt(context, imageConcept);

    return {
      shouldRenderImage,
      imageConcept,
      imagePrompt,
      imageAlt,
      fallbackMode: stateRule.fallbackMode ?? profile.defaultFallbackMode,
      trustSignal: stateRule.trustSignal ?? profile.trustSignal,
    };
  }
}

