# Real-World Validation Matrix

## Purpose
Map the flows that must be proven before the system can be called stable.

## Validation levels
- Manual
- Automated
- Emulator-backed
- Production observation

## Critical flows
- Login
- Tenant resolution
- Dashboard hydration
- Navigation
- Check-in
- Tenant-scoped data access
- Error recovery
- Release path

## Matrix rules
- Every critical flow must have at least one honest validation method.
- Core auth and tenant flows require the strongest validation.
- A flow is not stable until the failure mode is known.

## Required output
- Flow name
- Validation method
- Environment required
- Failure mode
- Current status

## Principle
The system is only stable when the real journey has been proven.
