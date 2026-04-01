# Activation Order

## Router first
Always start with [./_entry-router.md](./_entry-router.md).

## Default order
1. `continuous-audit-guardian`
2. `master-agent-orchestrator`
3. `clean-architecture-enforcer`
4. `security-strike-team`
5. `tenant-isolation-guardian`
6. Task-specific domain skills
7. Validation skills
8. Release/readiness skills

## Task type matrix

### Bug
- Read: entry router, mandatory consultation, core, architecture, security, tenant
- Required: routing, backend, frontend, testing as needed
- Optional: observability, release
- Blocker: security, tenant, or contract risk
- Done: issue reproduced, fixed, and validated

### Architecture
- Read: entry router, mandatory consultation, core, orchestration, architecture
- Required: refactoring and testing when structure changes
- Optional: backend, data
- Blocker: boundary leaks or circular dependencies
- Done: boundaries and behavior remain coherent

### Frontend
- Read: entry router, mandatory consultation, core, architecture, frontend
- Required: design system, UX, copy when the change touches user-facing flow
- Optional: performance, testing
- Blocker: unreadable state, broken flow, or unsafe fallback
- Done: UI is truthful, usable, and validated

### Backend
- Read: entry router, mandatory consultation, core, architecture, backend
- Required: integrations, tenant, security, testing when relevant
- Optional: observability, data
- Blocker: validation failure, unsafe provider access, broken contract
- Done: contract is explicit and validated

### Security
- Read: entry router, mandatory consultation, core, architecture, security
- Required: tenant, backend, testing
- Optional: observability, release
- Blocker: any trust, secret, or auth weakness
- Done: risk is removed or isolated

### Tenant
- Read: entry router, mandatory consultation, core, architecture, security, tenant
- Required: data, backend, testing
- Optional: observability
- Blocker: cross-tenant leak or unclear tenant source of truth
- Done: tenant isolation is explicit and validated

### Performance
- Read: entry router, mandatory consultation, core, architecture, performance
- Required: frontend or backend depending on the hotspot
- Optional: observability, testing
- Blocker: optimization would break correctness
- Done: cost is reduced without changing meaning

### Tests
- Read: entry router, mandatory consultation, core, testing
- Required: architecture, backend, tenant, security when relevant
- Optional: release
- Blocker: test lies or the environment is not honest
- Done: the relevant risk is covered or the skip is explicit

### Release
- Read: entry router, mandatory consultation, core, testing, release
- Required: ci-cd, observability, security, tenant
- Optional: performance
- Blocker: release gate failure or unclear rollback
- Done: release readiness is proven truthfully

### Growth
- Read: entry router, mandatory consultation, core, product, growth
- Required: UX, copy
- Optional: frontend, testing
- Blocker: growth work would weaken truth or trust
- Done: improvement is real and measurable

### Copy
- Read: entry router, mandatory consultation, core, copy
- Required: UX, product
- Optional: frontend
- Blocker: copy would mislead or hide reality
- Done: copy is clearer and more trustworthy

### Research
- Read: entry router, mandatory consultation, core, research
- Required: choose the external source carefully
- Optional: architecture, frontend, backend, product
- Blocker: source quality is weak or adaptation is not grounded
- Done: pattern is adapted, not copied

### Refactor
- Read: entry router, mandatory consultation, core, architecture, refactoring
- Required: backend, frontend, data, testing when touched
- Optional: performance
- Blocker: change would break behavior or rollback safety
- Done: code is simpler and behavior stays intact

### Incident
- Read: entry router, mandatory consultation, core, recovery, security, tenant
- Required: backend or frontend depending on the broken surface
- Optional: observability, testing, release
- Blocker: root cause is still unknown
- Done: system is stabilized, validated, and documented

## Conflict rule
If two skills disagree, the higher-priority risk domain wins.
