# Stitch Reference Sync

## TITLE
Stitch Reference Sync

## PURPOSE
Protect the Stitch Reference Sync decision surface inside the Renova Aura design system domain.

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
- Stitch references are only useful if they reinforce the current TatameOS visual language: dark athletic surfaces, strong contrast, and red as the active signal.
- The student dashboard, professor area, onboarding flow, login screen, and QR surfaces must feel like one product family.
- Use Stitch or other visual references to verify hierarchy, spacing, and emphasis, not to import a generic SaaS palette.

## REAL PROJECT CASES
- The login screen uses a compact, high-contrast card with brand-red action emphasis.
- The student dashboard uses large rounded cards, zinc surfaces, and red accents for the primary action.
- Professor and admin areas are denser operational layouts, so the visual language should support scanning, not decoration.
- QR and check-in screens must make the token, expiry, and action state visually obvious.

## COMMON ERRORS IN THIS PROJECT
- Pulling in a reference that changes the product into a generic purple SaaS.
- Using the same visual weight for primary action, warning, and secondary context.
- Choosing a new palette before checking what the current workspace already expresses.
- Treating decorative reference material as if it were a product requirement.

## MANDATORY PROJECT PATTERNS
- Inspect existing colors, styles, and screen examples before changing a token or component.
- Match the product family across login, dashboard, onboarding, and check-in.
- Preserve the same visual energy across mobile and desktop.
- If a Stitch reference exists, adapt it to the current TatameOS shell instead of copying it literally.

## GUIDING PRINCIPLE
A brand is a repeated visual contract.

FIM

