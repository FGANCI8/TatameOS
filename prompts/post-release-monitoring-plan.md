# Post-Release Monitoring Plan

## Purpose
Track the signals that matter after release so regressions and friction are caught early.

## Watchlist
- Errors
- Broken flows
- Regressions
- Friction
- Performance degradation
- Confusing states
- Tenant issues
- Security anomalies

## Monitoring rules
- Monitor the flows that users actually touch.
- Watch for repeated failure patterns.
- Watch for drop-offs after critical actions.
- Watch for silent failures that do not crash but break the flow.

## Required review windows
- Immediate post-release check
- Short-term stability check
- Follow-up after first real usage

## Output
- Observed issue
- Severity
- Flow impacted
- Follow-up action

## Principle
Release is not the end; it is the beginning of real observation.
