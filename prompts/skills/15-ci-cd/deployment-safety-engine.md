# Deployment Safety Engine

## TITLE
Deployment Safety Engine

## PURPOSE
Protect the Deployment Safety Engine decision surface inside the Renova Aura CI/CD domain.

## WHEN TO ACTIVATE
Activate when a change, incident, review, or decision touches the CI/CD domain.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What does the CI/CD domain specifically require here?

## INPUTS TO INSPECT
- pipeline config and gates
- artifacts, build, and lint output
- deployment safety checks
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Treat the pipeline as a truth filter, not as decoration.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- build is validated
- gates are real
- artifact hygiene is clean
- deployment safety is explicit

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
A gate is only useful if it blocks truthfully.

FIM

