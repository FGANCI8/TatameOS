# Frontend Energy UI System

## TITLE
Frontend Energy UI System

## PURPOSE
Make the TatameOS UI feel athletic, clear, and alive without hiding failures.

## WHEN TO ACTIVATE
Activate when a screen, layout, state, interaction, or visual rule changes.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What is the intended user action?
- Which screen state is missing or broken?
- What reference in the project should this screen match?

## INPUTS TO INSPECT
- components and screens
- state, loading, and error paths
- styles, assets, and interactions
- existing color references and Stitch-driven visual cues
- dashboard, login, navigation, and check-in surfaces
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Keep the UI alive, readable, and honest while preserving the current product language. If a visual choice makes the flow look done when it is not, reject it.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- loading/error/empty/success states exist
- mobile behavior is acceptable
- feedback is immediate
- visual hierarchy is obvious
- screen matches the app’s existing design language
- CTA is obvious without extra explanation

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
- visual issue
- screen/state affected
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
- the screen is usable on mobile and desktop

## HOW THIS APPLIES TO TATAMEOS
- The visual shell must respect the real TatameOS flow: Firebase auth first, then `tenantId`, then gym hydration, then dashboard content.
- The dashboard is the home screen for aluno, professor, and admin contexts, so it must never look complete while auth or tenant data is still missing.
- Student surfaces such as `dashboard-do-aluno`, QR check-in, recent history, notifications, and feedback cards are action-first screens, not marketing pages.
- Professor and admin surfaces are operational dashboards: they prioritize lists, validation, invitations, alerts, and management actions over decorative layout.

## REAL PROJECT CASES
- `LoginScreen` shows auth errors, password reset, and login/register mode switching.
- `MainLayout` adds the student sidebar only when the user is an aluno on the student dashboard.
- `DashboardDoAluno` uses loading skeletons, progress cards, check-in CTA, feedback panels, and empty states for history and notifications.
- `ProfessorDashboardContent` combines `GymSelector`, notification alerts, finance, treinos, and alunos widgets.
- `SuperAdminOnboardingPage` is a provisioning workflow where the form, success state, and next step must be obvious.

## COMMON ERRORS IN THIS PROJECT
- Showing dashboard content before `AuthProvider` and `GymProvider` finish hydrating the real tenant.
- Using a generic loading spinner where the screen actually needs a dashboard skeleton or a focused empty state.
- Making the check-in CTA look available when QR data, tenant, or role is not ready.
- Overusing red accents so warnings and primary actions no longer feel distinct.
- Treating onboarding as a finished success before the Firebase claims, Firestore writes, and visible success state are all aligned.

## MANDATORY PROJECT PATTERNS
- Auth and tenant resolution must finish before the main content pretends to be ready.
- Loading, error, empty, and success states must be visible on every async surface that matters.
- The current action must be obvious within one screen, especially for login, check-in, register treino, and onboarding.
- Mobile behavior must keep the primary action reachable without hiding the user in a dead menu.
- Visual hierarchy should make tenant-sensitive actions and safety warnings unmistakable.

## GUIDING PRINCIPLE
Clear UI earns trust.

FIM

