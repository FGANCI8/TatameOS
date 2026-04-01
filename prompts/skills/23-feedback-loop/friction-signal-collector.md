# Friction Signal Collector

## TITLE
Friction Signal Collector

## PURPOSE
Protect the Friction Signal Collector decision surface inside the Renova Aura feedback loop domain.

## WHEN TO ACTIVATE
Activate when a change, incident, review, or decision touches the feedback loop domain.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What does the feedback loop domain specifically require here?

## INPUTS TO INSPECT
- user feedback and telemetry
- issue reports and friction signals
- behavioral learning from the product
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Turn user signals into prioritized product and engineering action.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- signal quality is good
- signals route to the right priority
- feedback changes behavior
- the loop stays closed

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
Feedback must change behavior.

FIM

