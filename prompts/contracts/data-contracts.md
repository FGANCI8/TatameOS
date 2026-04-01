# Data Contracts

## Contract rules
- Data shape must be explicit.
- Tenant-scoped reads and writes must be filtered.
- Derived state must match source data.
- Schema changes need compatibility review.

## Current focus
- Firestore collections used by the dashboard and tenant-scoped flows.
- Legacy or optional data paths must be isolated from the critical runtime.
