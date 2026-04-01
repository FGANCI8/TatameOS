# Environment Contract

## Required classes of variables
- Firebase public config
- Firebase admin/private credentials
- App URL / deployment URL
- Optional legacy Supabase config
- Optional Stripe config
- Optional Resend config
- Any other optional integration keys that exist in the workspace

## Policy
- Required values must fail honestly when missing.
- Optional integrations must be lazy and isolated.
- Placeholder values are invalid.
- Secrets never belong in committed code.

## Source of truth
Use `.env.example` and the runtime validators as the contract source.
