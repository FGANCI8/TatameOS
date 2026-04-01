# Color Reference Interpreter

## TITLE
Color Reference Interpreter

## PURPOSE
Protect the Color Reference Interpreter decision surface inside the Renova Aura design system domain.

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
- Color decisions must fit the current athletic, dark, high-contrast mood of TatameOS instead of resetting the palette.
- Brand red is the active signal color for CTAs, warnings, and emphasis; zinc surfaces frame the layout.
- Login, dashboard, onboarding, professor tools, and QR flows should all read as one visual system.

## REAL PROJECT CASES
- The login card uses dark zinc backgrounds with brand-red accents for the primary action.
- The student dashboard uses red for the main training CTA and neutral zinc for background structure.
- The onboarding flow should keep red for action and status, not for every container.
- The professor area needs calm operational tones so data tables, alerts, and management widgets remain readable.

## COMMON ERRORS IN THIS PROJECT
- Introducing a new accent color that competes with brand red.
- Making alerts, CTAs, and active states look identical.
- Using high-saturation color in too many surfaces so the primary action loses weight.
- Changing one screen to a different visual tone and breaking product continuity.

## MANDATORY PROJECT PATTERNS
- Reuse current color tokens before inventing new ones.
- Validate color choices against both dashboard and login, not just a single screen.
- Keep danger, active, and primary states visually distinct.
- If a color reference exists in the workspace, adapt to it before changing the palette.

## GUIDING PRINCIPLE
A brand is a repeated visual contract.

FIM

