# Clean Architecture Enforcer

## TITLE
Clean Architecture Enforcer

## PURPOSE
Preserve the TatameOS layer contract: UI -> Context -> Service -> Repository/Provider.

## WHEN TO ACTIVATE
Activate when imports, layer boundaries, shared state, or provider access are changing.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- Which layer owns this rule?
- Is any UI calling data/provider logic directly?
- Is this change moving logic to the wrong layer?

## INPUTS TO INSPECT
- modules, imports, and boundaries
- contexts, services, and repositories
- routing and dependency graph
- provider adapters and direct instantiation points
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Protect the layer contract first, then simplify the implementation inside that boundary. If a shortcut breaks the boundary, reject it even if it looks smaller.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- UI->Context->Service->Repository is preserved
- boundaries are explicit
- circular dependencies are blocked
- domain ownership is clear
- direct provider access is not introduced
- layer-specific tests or validation are considered

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
- boundary issue
- owning layer
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

## GUIDING PRINCIPLE
Boundaries keep the system legible.

FIM

