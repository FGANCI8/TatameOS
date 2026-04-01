import type {
  EmphasisLevel,
  IllustrationPlacement,
  VisualLayoutVariant,
  VisualScreenContext,
} from '../contracts/screen-context.contract';
import type { VisualExperienceOutput } from '../contracts/visual-experience.contract';
import type { VisualModuleProfile } from '../constants/visual-rules';
import { VISUAL_STATE_RULES } from '../constants/visual-rules';

export class LayoutDecisionStrategy {
  resolve(
    context: VisualScreenContext,
    profile: VisualModuleProfile,
  ): Pick<VisualExperienceOutput, 'layoutVariant' | 'illustrationPlacement' | 'emphasisLevel' | 'renderingNotes'> {
    const stateRule = VISUAL_STATE_RULES[context.stateType];

    return {
      layoutVariant: context.emphasisLevel === 'low' ? 'compact' : stateRule.layoutVariant ?? profile.defaultLayoutVariant,
      illustrationPlacement: stateRule.illustrationPlacement ?? profile.defaultIllustrationPlacement,
      emphasisLevel: context.emphasisLevel ?? stateRule.emphasisLevel ?? profile.defaultEmphasisLevel,
      renderingNotes: stateRule.renderingNotes || profile.renderingNotes,
    };
  }
}
