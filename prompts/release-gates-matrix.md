# Release Gates Matrix

## Purpose
Define objective gates for `local ready`, `test ready`, `preview ready`, and `production ready`.

## Local ready
- Code compiles
- Lint passes
- Relevant manual validation runs
- No obvious blocker remains

## Test ready
- Core tests exist and run
- Tenant and auth-sensitive flows are covered where possible
- Known skips are documented honestly

## Preview ready
- Build is valid
- Core flows are smoke-tested
- Integration risk is understood
- No critical security or tenant issue remains

## Production ready
- Preview validation passed
- Release review completed
- Rollback path exists
- Environment contract is valid
- No open critical blocker remains

## Gate rule
If a gate is not met, do not upgrade the status.

## Principle
A release gate is a truth check, not a ceremony.
