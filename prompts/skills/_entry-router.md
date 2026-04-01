# Entry Router

## Purpose
Single operational entry point for every future agent task in TatameOS.

## What to read first
1. Read [../start-here.md](../start-here.md).
2. Read [./_mandatory-consultation-protocol.md](./_mandatory-consultation-protocol.md).
3. Read [./00-core/continuous-audit-guardian.md](./00-core/continuous-audit-guardian.md).
4. Read [./01-orchestration/master-agent-orchestrator.md](./01-orchestration/master-agent-orchestrator.md).
5. Read [./02-architecture/clean-architecture-enforcer.md](./02-architecture/clean-architecture-enforcer.md).
6. Read [./10-security/security-strike-team.md](./10-security/security-strike-team.md).
7. Read [./11-tenant/tenant-isolation-guardian.md](./11-tenant/tenant-isolation-guardian.md).

## How to classify the task
- Bug: broken user-facing or runtime behavior.
- Architecture: boundary, dependency, or layer problem.
- Frontend: UI, state, or visual behavior problem.
- Backend: validation, async behavior, providers, or handlers problem.
- Security: trust, auth, secrets, or fallback problem.
- Tenant: data, session, or access can cross tenants.
- Performance: correct but too slow or wasteful.
- Tests: coverage, repro, emulator honesty, or validation gap.
- Release: near-shipping work that needs gating.
- Growth: activation, retention, conversion, or value delivery.
- Copy: wording, CTA, trust, or microcopy.
- Research: needs external pattern validation.
- Refactor: structurally correct but hard to maintain.
- Incident: already failing and needs recovery.

## Minimal routing logic
1. Decide the task class.
2. Load the mandatory skills.
3. Load the domain skills for that class.
4. Read the relevant maps, contracts, standards, runbooks, and checklists.
5. Make the smallest safe change.
6. Validate honestly.
7. Record the real status.

## Domain skill matrix

### Bug
- Mandatory: core, architecture, security, tenant
- Optional: routing, backend, frontend, testing, observability
- Blocker: any security, tenant, or contract risk
- Done: bug reproduced, fixed, and validated

### Architecture
- Mandatory: core, orchestration, architecture
- Optional: refactoring, data, backend, testing
- Blocker: boundary leaks or circular dependencies
- Done: boundary is clear and behavior is preserved

### Frontend
- Mandatory: core, architecture, frontend
- Optional: design system, UX, copy, testing, performance
- Blocker: broken flow, unsafe fallback, or unreadable state
- Done: UI is truthful, responsive, and validated

### Backend
- Mandatory: core, architecture, backend
- Optional: integrations, security, tenant, data, testing, observability
- Blocker: validation failure, unsafe provider access, or broken contract
- Done: contracts are explicit and validated

### Security
- Mandatory: core, architecture, security
- Optional: tenant, backend, testing, observability
- Blocker: any trust, secret, or auth weakness
- Done: risk is removed or isolated

### Tenant
- Mandatory: core, architecture, security, tenant
- Optional: backend, data, testing, observability
- Blocker: cross-tenant leak or unclear tenant source of truth
- Done: tenant isolation is explicit and validated

### Performance
- Mandatory: core, architecture, performance
- Optional: frontend, backend, observability, testing
- Blocker: optimization would break correctness
- Done: cost is reduced without changing meaning

### Tests
- Mandatory: core, testing
- Optional: architecture, backend, tenant, security, release
- Blocker: test lies or the environment is not honest
- Done: the relevant risk is covered or the skip is explicit

### Release
- Mandatory: core, testing, release
- Optional: ci-cd, observability, security, tenant, performance
- Blocker: release gate failure or unclear rollback
- Done: release readiness is proven truthfully

### Growth
- Mandatory: core, product, growth
- Optional: UX, copy, frontend, testing
- Blocker: growth work would weaken truth or trust
- Done: improvement is real and measurable

### Copy
- Mandatory: core, copy
- Optional: UX, product, frontend
- Blocker: copy would mislead or hide reality
- Done: copy is clearer and more trustworthy

### Research
- Mandatory: core, research
- Optional: architecture, frontend, backend, product
- Blocker: source quality is weak or adaptation is not grounded
- Done: pattern is adapted, not copied

### Refactor
- Mandatory: core, architecture, refactoring
- Optional: backend, frontend, data, testing
- Blocker: change would break behavior or rollback safety
- Done: code is simpler and behavior stays intact

### Incident
- Mandatory: core, recovery, security, tenant
- Optional: backend or frontend depending on the broken surface
- Blocker: root cause is still unknown
- Done: system is stabilized, validated, and documented

## Honest closure rule
Never close with green if validation is partial, skipped, or assumed.
Use one of these statuses:
- fixed and validated
- blocked by environment
- blocked by architecture
- blocked by security
- blocked by tenant isolation
- requires follow-up
- intentionally skipped with reason

## Principle
The router decides what to read, what to protect, and what to validate before any code is changed.

FIM
