# Telemetry Event Taxonomy

## Purpose
Define a practical event model for understanding product behavior, errors, and friction.

## Naming rules
- Use lowercase dot-separated event names.
- Use stable names, not implementation details.
- Name by user action or system state.

## Event groups
- `auth.*`
- `tenant.*`
- `dashboard.*`
- `navigation.*`
- `checkin.*`
- `error.*`
- `ux.*`
- `release.*`
- `performance.*`

## Required properties
- `timestamp`
- `user_id` when available
- `tenant_id` when available
- `route`
- `source`
- `status`
- `environment`

## Useful event examples
- login started
- login succeeded
- login failed
- tenant resolved
- dashboard loaded
- route changed
- action submitted
- action failed
- empty state shown
- loading state exceeded budget
- check-in completed
- check-in rejected

## Rules
- Keep payloads small.
- Track outcomes, not noise.
- Do not log secrets or personal data that is not needed.
- Events must help answer real product questions.

## Principle
Telemetry exists to explain behavior, not to collect vanity volume.
