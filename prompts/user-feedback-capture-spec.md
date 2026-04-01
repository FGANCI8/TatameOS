# User Feedback Capture Spec

## Purpose
Collect user feedback without polluting the experience.

## Capture points
- After successful core actions
- After repeated failure
- On explicit help or support entry points
- On low-confidence or confusing states

## Capture methods
- Small in-context prompt
- Optional rating or binary sentiment
- Free-text only when the user chooses it

## Rules
- Ask at the moment of value, not in the middle of work.
- Keep the prompt lightweight.
- Avoid modal spam.
- Let users dismiss feedback easily.

## Required fields
- Feedback type
- Screen or flow
- Optional free text
- Timestamp
- Tenant context when relevant

## Do not do
- Do not interrupt critical actions.
- Do not force long forms.
- Do not ask the same question repeatedly.

## Principle
Feedback should feel like part of the product, not a tax on the user.
