import type { ImageGenerationRequest } from './contracts/image-generation.contract';

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

export function shouldGenerateVisualImage(request: ImageGenerationRequest): boolean {
  if (BLOCKED_STATES.has(request.stateType ?? '')) {
    return false;
  }

  if (request.module === 'generic') {
    return false;
  }

  if (request.stateType === 'empty') {
    return GENERATIVE_MODULES.has(request.module);
  }

  return GENERATIVE_STATES.has(request.stateType ?? '') && GENERATIVE_MODULES.has(request.module);
}
