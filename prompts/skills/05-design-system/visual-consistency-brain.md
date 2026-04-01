# Visual Consistency Brain

## TITLE
Visual Consistency Brain

## PURPOSE
Protect the Visual Consistency Brain decision surface inside the Renova Aura design system domain.

## WHEN TO ACTIVATE
Activate when a change, incident, review, or decision touches the design system domain.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What does the design system domain specifically require here?

## INPUTS TO INSPECT
- design tokens and component library
- color references and visual assets
- Stitch references and existing style patterns
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Compare against real visual references before inventing new styling.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- tokens are reused, not hardcoded
- colors and typography are coherent
- brand identity is preserved
- visual consistency is enforced

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
- Keep the same visual vocabulary across login, student dashboard, professor dashboard, onboarding, and check-in.
- The product should feel like one system even though the user sees different roles and different actions.
- Card radius, border density, spacing rhythm, and uppercase labels should stay aligned unless the change has a clear reason to deviate.

## REAL PROJECT CASES
- `MainLayout`, `NavigationBase`, and dashboard pages all use the same dark shell and red emphasis pattern.
- The student dashboard relies on the same rounded-card language across progress, check-in, history, and feedback sections.
- The professor area uses the same shell but with denser operational blocks, which should still follow the same brand rules.
- The admin onboarding flow must not look like a completely different product.

## COMMON ERRORS IN THIS PROJECT
- One page becomes brighter, softer, or more playful than the rest of the app.
- Different modules use inconsistent border radius, spacing, or emphasis.
- The login screen feels like a separate product from the dashboard.
- Visual consistency gets broken when a screen adds a new accent or card style without a reason.

## MANDATORY PROJECT PATTERNS
- Match the current shell before introducing new visual rules.
- Keep the same emphasis hierarchy for primary action, secondary action, and informational state.
- Treat consistency across roles as more important than visual novelty.
- When a new screen is introduced, compare it against the existing dashboard and login patterns first.

## GUIDING PRINCIPLE
A brand is a repeated visual contract.

FIM

