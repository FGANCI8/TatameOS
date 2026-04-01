export type VisualStateType =
  | 'empty'
  | 'loading'
  | 'success'
  | 'error'
  | 'onboarding'
  | 'instructional'
  | 'dashboard'
  | 'highlight'
  | 'confirmation';

export type VisualLayoutVariant = 'split' | 'stacked' | 'compact' | 'banner' | 'inline';

export type IllustrationPlacement = 'none' | 'top' | 'side' | 'background' | 'inline';

export type EmphasisLevel = 'low' | 'medium' | 'high';

export type FallbackMode = 'text-only' | 'prompt-only' | 'placeholder';

export type VisualModuleKey =
  | 'generic'
  | 'student-dashboard'
  | 'student-checkin'
  | 'student-training-plan'
  | 'student-performance'
  | 'admin-onboarding'
  | 'professor-frequency';

export interface TenantVisualContext {
  tenantId?: string;
  tenantName?: string;
  tenantTier?: string;
}

export interface VisualScreenContext {
  screenId: string;
  module?: VisualModuleKey;
  route: string;
  userRole?: 'aluno' | 'professor' | 'admin' | 'responsavel' | 'super-admin' | string;
  flowPhase?: 'entry' | 'setup' | 'validation' | 'progress' | 'review' | 'completion' | string;
  stateType: VisualStateType;
  domainContext?: Record<string, string | number | boolean | null | undefined>;
  actionIntent?: string;
  emphasisLevel?: EmphasisLevel;
  tenantContext?: TenantVisualContext;
  featureFlags?: Record<string, boolean>;
  locale?: string;
}
