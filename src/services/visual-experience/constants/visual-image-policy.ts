import type { VisualScreenContext } from '../contracts/screen-context.contract';

const GENERATIVE_STATES = new Set(['onboarding', 'instructional', 'dashboard', 'highlight', 'confirmation', 'empty']);
const BLOCKED_STATES = new Set(['loading', 'error']);

const GENERATIVE_MODULES = new Set([
  'student-dashboard',
  'student-checkin',
  'student-training-plan',
  'student-performance',
  'admin-onboarding',
  'professor-frequency',
]);

export function shouldGenerateVisualImage(context: VisualScreenContext): boolean {
  if (BLOCKED_STATES.has(context.stateType)) {
    return false;
  }

  if (GENERIC_MODULES_EXCEPTIONS.has(context.screenId)) {
    return false;
  }

  if (context.stateType === 'empty') {
    return GENERATIVE_MODULES.has(context.module ?? 'generic');
  }

  return GENERATIVE_STATES.has(context.stateType) && GENERATIVE_MODULES.has(context.module ?? 'generic');
}

export function getVisualImageSessionScope(context: VisualScreenContext): string {
  const tenantId = context.tenantContext?.tenantId ?? 'no-tenant';
  return `${context.screenId}:${context.module ?? 'generic'}:${tenantId}`;
}

const GENERIC_MODULES_EXCEPTIONS = new Set<string>(['generic']);
