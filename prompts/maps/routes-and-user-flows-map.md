# Routes and User Flows Map

## Canonical flow
Entry -> Login -> Identity -> Tenant -> Dashboard -> Modules -> Actions -> Exit

## Route classes
- Public entry routes
- Authentication routes
- Tenant-scoped application routes
- Administrative routes
- Recovery / error routes

## Decision points
- Authentication success or failure
- Tenant selection / tenant claim resolution
- Module access allowed or denied
- Action success, loading, or error

## Required invariants
- No route without a purpose.
- No dead-end navigation.
- No screen that requires data the runtime cannot provide.
- No tenant-blind access.
