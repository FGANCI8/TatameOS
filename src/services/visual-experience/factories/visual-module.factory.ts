import type { VisualScreenContext } from '../contracts/screen-context.contract';
import { VISUAL_MODULE_PROFILES, type VisualModuleProfile } from '../constants/visual-rules';
import { mapScreenContext } from '../mappers/screen-context.mapper';

export class VisualModuleFactory {
  resolve(context: VisualScreenContext): VisualModuleProfile {
    const normalized = mapScreenContext(context);
    return VISUAL_MODULE_PROFILES[normalized.module ?? 'generic'] ?? VISUAL_MODULE_PROFILES.generic;
  }
}

