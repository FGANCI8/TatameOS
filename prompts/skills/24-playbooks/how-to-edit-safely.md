# How To Edit Safely

## TITLE
How To Edit Safely

## PURPOSE
Protect the How To Edit Safely decision surface inside the Renova Aura playbooks domain.

## WHEN TO ACTIVATE
Activate when a change, incident, review, or decision touches the playbooks domain.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What does the playbooks domain specifically require here?

## INPUTS TO INSPECT
- task type and constraints
- workspace state and risk level
- validation needs and rollback expectations
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Use a repeatable playbook that reduces ambiguity and keeps work safe.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- start sequence is clear
- edit path is safe
- validation is explicit
- finish status is honest

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
A good playbook shortens the path to a safe outcome.

FIM

