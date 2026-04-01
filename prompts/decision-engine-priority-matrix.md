# Decision Engine Priority Matrix

## Purpose
Rank work by operational importance.

## Priority order
1. Bug critical
2. Security
3. Tenant isolation
4. Data integrity
5. Release safety
6. Architecture
7. Backend correctness
8. Frontend correctness
9. UX friction
10. Performance
11. Growth
12. Copy
13. Refactor

## Rules
- The top items can block lower items.
- A lower item must never hide a higher-risk issue.
- If two items conflict, choose the one that protects the runtime truth.

## Required output
- Ranked issue list
- Why each item is ranked there
- What is blocked by the top item

## Principle
Priority is how the system decides what deserves attention first.
