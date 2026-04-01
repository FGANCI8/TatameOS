import type { VisualModuleKey, VisualScreenContext, VisualStateType } from '../contracts/screen-context.contract';

const MODULE_BY_ROUTE: Array<{ match: RegExp; module: VisualModuleKey }> = [
  { match: /^\/super-admin\/onboarding/i, module: 'admin-onboarding' },
  { match: /^\/dashboard-do-aluno\/checkin/i, module: 'student-checkin' },
  { match: /^\/dashboard-do-aluno\/trilhas/i, module: 'student-training-plan' },
  { match: /^\/plano-de-treino/i, module: 'student-training-plan' },
  { match: /^\/desempenho-competitivo/i, module: 'student-performance' },
  { match: /^\/area-do-professor\/frequencia/i, module: 'professor-frequency' },
  { match: /^\/dashboard-do-aluno/i, module: 'student-dashboard' },
];

function inferModule(route: string): VisualModuleKey {
  const normalizedRoute = route.trim() || '/';
  const matched = MODULE_BY_ROUTE.find((entry) => entry.match.test(normalizedRoute));
  return matched?.module ?? 'generic';
}

function inferFlowPhase(stateType: VisualStateType, route: string): string {
  if (route.includes('onboarding')) return 'setup';
  if (stateType === 'loading') return 'entry';
  if (stateType === 'empty') return 'progress';
  if (stateType === 'error') return 'review';
  if (stateType === 'success' || stateType === 'confirmation') return 'completion';
  if (stateType === 'instructional') return 'validation';
  if (stateType === 'highlight') return 'review';
  return 'progress';
}

export function mapScreenContext(context: VisualScreenContext): VisualScreenContext {
  const route = context.route.trim() || '/';
  const screenId = context.screenId.trim() || route;
  const module = context.module ?? inferModule(route);
  const flowPhase = context.flowPhase ?? inferFlowPhase(context.stateType, route);

  return {
    ...context,
    screenId,
    route,
    module,
    flowPhase,
  };
}

