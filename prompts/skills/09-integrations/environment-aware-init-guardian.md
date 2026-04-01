# Environment Aware Init Guardian

## TITLE
Environment Aware Init Guardian

## PURPOSE
Protect the Environment Aware Init Guardian decision surface inside the Renova Aura integrations domain.

## WHEN TO ACTIVATE
Activate when a change, incident, review, or decision touches the integrations domain.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What does the integrations domain specifically require here?

## INPUTS TO INSPECT
- env and init code
- provider contracts and docs
- optional integration boundaries
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Keep integrations optional and lazy unless the runtime truly depends on them.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- init is environment-aware
- optional integration can fail safely
- core runtime stays alive
- fallbacks are honest

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
Optional integrations must stay optional.

FIM

