import type { VisualExperienceOutput } from '../contracts/visual-experience.contract';
import type { VisualScreenContext } from '../contracts/screen-context.contract';
import type { VisualModuleProfile } from '../constants/visual-rules';
import { VISUAL_STATE_RULES } from '../constants/visual-rules';

function normalizeText(value: string): string {
  return value.trim().replace(/\s+/g, ' ');
}

function resolveHeadline(context: VisualScreenContext, profile: VisualModuleProfile): string {
  const stateRule = VISUAL_STATE_RULES[context.stateType];
  const roleLabel =
    context.userRole === 'super-admin'
      ? 'super admin'
      : context.userRole === 'admin'
        ? 'admin'
        : context.userRole === 'professor'
          ? 'professor'
          : 'atleta';

  if (context.stateType === 'loading') {
    return stateRule.headlinePrefix;
  }

  if (context.stateType === 'error') {
    return stateRule.headlinePrefix;
  }

  if (context.stateType === 'onboarding') {
    return normalizeText(`${stateRule.headlinePrefix} para ${roleLabel}`);
  }

  return normalizeText(
    context.actionIntent
      ? `${profile.defaultHeadline} - ${context.actionIntent}`
      : `${stateRule.headlinePrefix} - ${profile.defaultHeadline}`,
  );
}

function resolveSupportingCopy(context: VisualScreenContext, profile: VisualModuleProfile): string {
  const stateRule = VISUAL_STATE_RULES[context.stateType];
  const tenantName = context.tenantContext?.tenantName;
  const domainHint =
    typeof context.domainContext?.emptyReason === 'string'
      ? String(context.domainContext.emptyReason)
      : typeof context.domainContext?.summary === 'string'
        ? String(context.domainContext.summary)
        : '';

  const parts = [
    profile.defaultSupportingCopy,
    stateRule.supportingCopySuffix,
    tenantName ? `Tenant atual: ${tenantName}.` : '',
    domainHint,
  ];

  return normalizeText(parts.filter(Boolean).join(' '));
}

function resolveCtaLabel(context: VisualScreenContext, profile: VisualModuleProfile): string {
  const stateRule = VISUAL_STATE_RULES[context.stateType];
  return normalizeText(stateRule.ctaLabel ?? profile.defaultCtaLabel);
}

export class CopyDecisionStrategy {
  resolve(
    context: VisualScreenContext,
    profile: VisualModuleProfile,
  ): Pick<VisualExperienceOutput, 'headline' | 'supportingCopy' | 'ctaLabel'> {
    return {
      headline: resolveHeadline(context, profile),
      supportingCopy: resolveSupportingCopy(context, profile),
      ctaLabel: resolveCtaLabel(context, profile),
    };
  }
}
