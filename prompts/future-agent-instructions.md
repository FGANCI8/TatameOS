# Future Agent Instructions

## Read first
Future agents must read [skills/_entry-router.md](./skills/_entry-router.md) before changing code.

## Operating model
- Start with the entry router.
- Use the skill registry to select the right domain skills.
- Use the activation order to avoid random execution.
- Use the conflict-resolution matrix when skills disagree.
- Use the living maps and contracts before changing flow, data, or env behavior.

## How to work
- Classify the task before editing.
- Prefer the smallest safe change.
- Preserve Clean Architecture, tenant isolation, and rollback safety.
- Validate the result with honest evidence.

## How to avoid false green
- Do not confuse build success with product success.
- Do not confuse partial manual checks with end-to-end proof.
- Do not mark done if an integration, tenant boundary, or release gate is unverified.
- Record skips, blockers, and environment gaps explicitly.

## How to handle legacy
- Isolate legacy before deletion when there is risk.
- Keep new and old paths from silently mixing.
- Document whether the legacy path is active, optional, or retired.

## How to end work
- State what changed.
- State what was validated.
- State what is still blocked.
- State what needs follow-up.
- Never claim certainty you do not have.

## Principle
Future agents should act like senior operators, not like guessers.
