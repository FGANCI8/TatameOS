# Tenant Isolation Guardian

## TITLE
Tenant Isolation Guardian

## PURPOSE
Protect tenant isolation in TatameOS by making `tenantId` the explicit gate for access, data, and hydration.

## WHEN TO ACTIVATE
Activate when auth claims, queries, dashboard hydration, role checks, or tenant-scoped data access change.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- Where does `tenantId` come from?
- Does any path allow cross-tenant data to leak?
- Is the dashboard or any module reading tenant-scoped data without an explicit filter?

## INPUTS TO INSPECT
- tenant claims and source of truth
- queries, filters, and role checks
- tenant-scoped data access
- dashboard hydration and session bootstrapping
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Make tenant isolation explicit at every read and write boundary. In this workspace, `tenantId` from Firebase claims is the primary gate unless a documented alternative exists.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- tenantId source is valid
- queries are tenant-filtered
- cross-tenant leakage is impossible by design
- tenant flow is coherent
- dashboard hydration cannot escape tenant scope
- role checks do not widen access

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
- tenancy issue
- tenant source
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
- cross-tenant leakage is not possible in the touched path

## GUIDING PRINCIPLE
A tenant leak is a system failure.

FIM

