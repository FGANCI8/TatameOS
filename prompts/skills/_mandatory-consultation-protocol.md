# Mandatory Consultation Protocol

Before modifying code, every agent must consult:
1. [entry-router](./_entry-router.md)
2. [continuous-audit-guardian](./00-core/continuous-audit-guardian.md)
3. [master-agent-orchestrator](./01-orchestration/master-agent-orchestrator.md)
4. [clean-architecture-enforcer](./02-architecture/clean-architecture-enforcer.md)
5. [security-strike-team](./10-security/security-strike-team.md)
6. [tenant-isolation-guardian](./11-tenant/tenant-isolation-guardian.md)

## Then consult the domain skills
- Use the registry to pick the relevant domain skills.
- Read the domain maps and contracts when the task touches routing, envs, data, or release.

## Hard rule
No code modification should happen before the mandatory consultation stack is read and applied.

