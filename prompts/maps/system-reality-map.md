# System Reality Map

## Current high-level reality
- Auth source of truth: Firebase Auth and Firebase custom claims.
- Tenant source of truth: `tenantId` from auth claims.
- Data path: Firestore-first for core product data.
- Legacy path: Supabase exists as an optional/legacy integration path, not the primary auth system.
- Backend: Firebase functions and admin SDK are the active server-side layer.
- Frontend: React/Vite app with dashboard, auth, and domain modules.

## Hot realities
- Build green does not guarantee flow correctness.
- Tenant isolation must be explicit.
- Optional integrations must not crash the core runtime.
- Validation must fail honestly.

## Notes
This map should be updated when the runtime shape changes.
