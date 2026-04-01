# Start Here

## Purpose
This is the first follow-up file after the entry router every agent must read before doing any work in TatameOS.

## Mandatory reading order
1. Read [skills/_entry-router.md](./skills/_entry-router.md).
2. Read [skills/_mandatory-consultation-protocol.md](./skills/_mandatory-consultation-protocol.md).
3. Read [skills/00-core/continuous-audit-guardian.md](./skills/00-core/continuous-audit-guardian.md).
4. Read [skills/01-orchestration/master-agent-orchestrator.md](./skills/01-orchestration/master-agent-orchestrator.md).
5. Read [skills/02-architecture/clean-architecture-enforcer.md](./skills/02-architecture/clean-architecture-enforcer.md).
6. Read [skills/10-security/security-strike-team.md](./skills/10-security/security-strike-team.md).
7. Read [skills/11-tenant/tenant-isolation-guardian.md](./skills/11-tenant/tenant-isolation-guardian.md).

## What to do after the mandatory order
- Identify the task type.
- Read the matching domain skills.
- Read the relevant maps, contracts, and standards.
- Decide the safest smallest change.
- Validate honestly before closing the work.

## Task classification
- Bug: a flow or behavior is broken.
- Architecture: a boundary, dependency, or layer is wrong.
- UX: the flow works but confuses or blocks the user.
- Security: secrets, trust, auth, or fallback is unsafe.
- Tenant: data, session, or access can cross tenant boundaries.
- Performance: the system is correct but too slow or wasteful.
- Release: the work is ready or nearly ready for release gating.
- Growth: the change improves activation, conversion, or retention.

## Honest closure rule
Never say done if the change is only compiled, only assumed, or only partially validated.
Report the real status:
- fixed
- validated
- blocked
- skipped with reason
- needs follow-up

## Legacy, risk, and rollback
- Isolate legacy before removing it.
- Prefer the smallest safe fix.
- Keep rollback possible when the change is risky.
- Document any remaining risk instead of hiding it.

## Principle
Read first. Decide second. Edit third. Validate last.
