# Brand Identity Enforcer

## TITLE
Brand Identity Enforcer

## PURPOSE
Protect the Brand Identity Enforcer decision surface inside the Renova Aura design system domain.

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
- TatameOS should feel like a disciplined BJJ operating system: energetic, dark, direct, and high-trust.
- The brand tone must work across login, dashboard, QR check-in, professor tools, and super-admin onboarding.
- Branding is not decoration here; it must help the user understand they are inside the right operational environment.

## REAL PROJECT CASES
- The login screen uses the Tatame OSS mark, brand-red emphasis, and martial arts iconography.
- The dashboard uses bold uppercase headings, dark surfaces, and action-first emphasis.
- The QR check-in flow should feel secure and athletic, not like a generic ticket scanner.
- The onboarding flow should look like provisioning a dojo system, not like a consumer settings wizard.

## COMMON ERRORS IN THIS PROJECT
- The UI becomes a generic SaaS shell and loses the TatameOS identity.
- Brand tone becomes too soft, too colorful, or too corporate for the product's operational purpose.
- A screen uses an unrelated iconography or spacing rhythm that breaks the family resemblance.
- The system becomes visually loud in ways that hide the true primary action.

## MANDATORY PROJECT PATTERNS
- Keep the same brand tone from first login to the final operational screen.
- Preserve the martial arts energy without reducing readability or trust.
- Use the brand as a repeatable contract, not a one-off visual flourish.
- If a new visual direction is proposed, compare it against login and dashboard before accepting it.

## GUIDING PRINCIPLE
A brand is a repeated visual contract.

FIM

