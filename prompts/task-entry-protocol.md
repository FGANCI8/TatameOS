# Task Entry Protocol

## Purpose
Define how every task must begin.

## Required sequence before action
1. Read [skills/_entry-router.md](./skills/_entry-router.md).
2. Read [start-here.md](./start-here.md).
3. Read [skills/_mandatory-consultation-protocol.md](./skills/_mandatory-consultation-protocol.md).
4. Read the five mandatory skills in order.
5. Read the domain skills for the problem type.
6. Read the relevant maps, contracts, standards, or runbooks.

## Choose skills by problem type
- Bug: core + routing + backend + testing.
- Architecture: core + orchestration + architecture + refactoring.
- UX: core + frontend + design system + UX + copy.
- Security: core + security + tenant + backend.
- Tenant: core + security + tenant + data.
- Performance: core + frontend + backend + performance + observability.
- Release: core + testing + ci-cd + release + monitoring.
- Growth: core + product + growth + copy + UX.

## Validation rules
- Validate with the closest honest proof available.
- Prefer automated proof when it exists.
- Use manual proof when automation is absent.
- Mark skips clearly instead of pretending coverage.

## Status rules
Close only with one of these:
- fixed and validated
- blocked by environment
- blocked by architecture
- blocked by security
- blocked by tenant isolation
- requires follow-up
- intentionally skipped with reason

## Principle
Every task starts with consultation and ends with truthful status.
