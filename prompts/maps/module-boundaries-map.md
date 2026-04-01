# Module Boundaries Map

## Boundary rules
- UI renders state and emits intents.
- Context orchestrates session and shared state.
- Service contains business logic.
- Repository or provider contains data access.

## Main boundaries in this workspace
- Auth/session boundary
- Tenant boundary
- Dashboard boundary
- Check-in boundary
- Integrations boundary
- Data persistence boundary

## Boundary anti-patterns
- UI calling providers directly for domain logic
- Service containing view logic
- Repository deciding product rules
- Cross-module imports that bypass domain ownership
