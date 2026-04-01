# API Contracts

## Contract rules
- Validate input on entry.
- Return predictable shapes.
- Surface errors honestly.
- Do not trust client-provided identity or tenant data.

## Existing contract classes
- Firebase callable functions
- Auth/session helpers
- Data access wrappers
- Optional external integrations

## Notes
If a contract changes, the consuming UI, service, and tests must be reviewed together.
