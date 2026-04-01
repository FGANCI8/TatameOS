# Conflict Resolution

## Priority ladder
1. Security
2. Tenant isolation
3. Architecture
4. Backend correctness
5. Frontend correctness
6. UX quality
7. Product coherence
8. Growth
9. Performance

## Resolution policy
- Choose the smallest safe change.
- Prefer the rule that protects user data and runtime truth.
- Preserve rollback when possible.
- If UX conflicts with safety or correctness, safety wins.
- If speed conflicts with correctness, correctness wins.

## Escalate when
- A change would weaken isolation.
- A change would weaken auth or secrets handling.
- A change would break a stable contract.
- A change would create irreversible risk.

