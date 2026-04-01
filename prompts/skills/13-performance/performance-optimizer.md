# Performance Optimizer

## TITLE
Performance Optimizer

## PURPOSE
Protect the Performance Optimizer decision surface inside the Renova Aura performance domain.

## WHEN TO ACTIVATE
Activate when a change, incident, review, or decision touches the performance domain.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What does the performance domain specifically require here?

## INPUTS TO INSPECT
- render hotspots and state churn
- network calls and payload size
- waterfalls and loading budgets
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Reduce cost without changing meaning or hiding failure.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- re-renders are justified
- payloads are not wasteful
- loading budget is respected
- perceived speed is improved honestly

## RED FLAGS
- false green or misleading success
- hidden coupling or boundary leaks
- unsafe fallback or silent failure
- missing validation or missing evidence

## FORBIDDEN MOVES
- do not invent env, contracts, or dependencies
- do not bypass security or tenant controls
- do not skip validation to save time
- do not rewrite when a smaller safe fix is enough

## REQUIRED OUTPUT
- problem
- cause
- impact
- correction
- residual risk

## ESCALATION RULES
- escalate if security, tenant isolation, data loss, or release safety is at risk
- escalate if the runtime truth is unclear
- escalate if the fix would be irreversible or broad

## DEFINITION OF DONE
- the behavior is truthful
- the change is validated against the current workspace
- the result is reversible or explicitly bounded
- the status is honest, including skips or blockers

## HOW THIS APPLIES TO TATAMEOS
- The first performance goal is to keep auth and tenant hydration from blocking the entire experience longer than necessary.
- The student dashboard has many sections, but only the highest-value content should block first paint; secondary widgets can resolve after the shell is visible.
- The professor and admin dashboards make multiple Firestore-backed reads, so performance work must focus on avoiding duplicate queries and unstable effect loops.
- Check-in, feedback, invitations, and finance screens should fail clearly instead of burning time in silent loading states.

## REAL PROJECT CASES
- `AuthProvider` and `GymProvider` govern the initial app readiness path.
- `DashboardDoAluno` uses lazy loading for `FrequenciaResumoCard` and memoized derived stats.
- `NotificationCenterWidget` depends on `selectedGym`, which means unnecessary rerenders there can cascade through the dashboard.
- Many hooks depend on `tenantId` and role state; unstable dependencies can trigger repeated fetches.
- `super-admin` onboarding and professor call screens are action-heavy and should keep their loading boundaries tight.

## COMMON ERRORS IN THIS PROJECT
- Optimizing a card while the real delay is tenant hydration or a repeated provider read.
- Turning a correct but slow flow into a fast but misleading one.
- Introducing memoization or caching that hides stale tenant state.
- Leaving optional widgets on the critical path for the first visible screen.

## MANDATORY PROJECT PATTERNS
- Measure the real hotspot before changing it.
- Keep tenant correctness and auth truth ahead of micro-optimization.
- Prefer smaller payloads, fewer re-fetches, and clearer loading boundaries.
- If speed improves but the flow becomes less honest, the change is not acceptable.
- Use lazy loading for secondary dashboard surfaces only when the shell stays trustworthy.

## GUIDING PRINCIPLE
Fast must still be correct.

FIM

