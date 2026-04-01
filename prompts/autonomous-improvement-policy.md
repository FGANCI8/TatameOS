# Autonomous Improvement Policy

## Purpose
Define what the agent may improve automatically, what it must only document, and what it must block.

## May improve automatically
- Clear UI wording
- Safe layout consistency
- Small refactors with no contract change
- Logging clarity
- Small validation improvements

## Must document only
- Feature scope changes
- Release process changes
- New integrations
- Anything that needs product or architecture sign-off

## Must block
- Anything that weakens security
- Anything that weakens tenant isolation
- Anything that changes contracts without validation
- Anything that risks production data or availability

## Rule
If the fix changes system truth, the agent must justify it and validate it.

## Principle
Autonomy is allowed only inside a safe boundary.
