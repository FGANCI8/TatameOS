# Empty Loading Success Error States

## TITLE
Empty Loading Success Error States

## PURPOSE
Protect the Empty Loading Success Error States decision surface inside the Renova Aura UX domain.

## WHEN TO ACTIVATE
Activate when a change, incident, review, or decision touches the UX domain.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What does the UX domain specifically require here?

## INPUTS TO INSPECT
- journeys and onboarding
- copy, state semantics, and feedback
- friction points and completion signals
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Remove uncertainty first, then shorten the path to value.
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

## GUIDING PRINCIPLE
UX exists to reduce uncertainty.

FIM

