# UX Flow Validator

## TITLE
UX Flow Validator

## PURPOSE
Protect the TatameOS user journey from dead ends, hidden friction, and false completion.

## WHEN TO ACTIVATE
Activate when login, tenant resolution, dashboard loading, module access, or any user journey changes.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What is the actual end-to-end journey?
- Where can the user get stuck?
- What is the minimum proof that the flow closes?

## INPUTS TO INSPECT
- journeys and onboarding
- copy, state semantics, and feedback
- friction points and completion signals
- login -> identity -> tenant -> dashboard -> modules -> exit flow
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Remove uncertainty first, then shorten the path to value. A flow that opens but does not close is not acceptable.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- the next step is obvious
- friction is reduced
- feedback closes the loop
- the user can finish the flow
- the flow can be explained from entry to exit
- the completion state is visible

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
- flow break
- user step affected
- correction applied
- validation result
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
- the journey closes from entry to exit

## HOW THIS APPLIES TO TATAMEOS
- The core journey is `login -> identity -> tenant -> gym hydration -> dashboard -> module action -> exit`.
- The system is not ready if the user logs in but tenant hydration never finishes, because the dashboard and module access depend on that state.
- Student UX must keep `dashboard-do-aluno`, QR check-in, treino registration, feedback, and history connected as a single loop.
- Professor UX must keep tenant selection, call, finance, alunos, alerts, and history inside one operational flow.
- Admin UX must make onboarding and invite provisioning feel like setup work, not like a general settings page.

## REAL PROJECT CASES
- `LoginScreen` already handles login, register, password reset, and truthful auth errors.
- `GymContext` fails loudly if Firebase claims do not contain `tenantId`, which means UX must not pretend the tenant exists.
- `NavigationBase` and `MainLayout` control route reachability and must not expose dead or confusing paths.
- `DashboardDoAluno` contains real loop closure points: registrar treino, abrir check-in, view feedbacks, and revisit history.
- `SuperAdminOnboardingPage` must guide the user from academy creation to the next operational step without ambiguity.

## COMMON ERRORS IN THIS PROJECT
- The flow looks open but the user cannot finish because a claim, role, or selected gym is missing.
- The app redirects correctly but the user still sees stale empty state copy that suggests success.
- The route is reachable but the next action is hidden behind inconsistent labels or weak hierarchy.
- A loading state stays on screen too long without telling the user what is actually missing.

## MANDATORY PROJECT PATTERNS
- Every important flow must expose a visible "what happens next" state.
- If a route depends on tenant or role, the blocked state must say so explicitly.
- Empty states should explain whether the user is waiting for data, waiting for a professor action, or waiting for setup.
- When a flow is partial, the UI must say which part is missing instead of pretending completion.
- A dead end is not acceptable if the route can still be repaired with a smaller, clearer step.

## GUIDING PRINCIPLE
UX exists to reduce uncertainty.

FIM

