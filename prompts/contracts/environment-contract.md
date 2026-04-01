# Environment Contract

## Required classes of variables
- Firebase public config
- Firebase admin/private credentials
- App URL / deployment URL
- Optional legacy Supabase config
- Optional Stripe config
- Optional Resend config
- YouTube library sync key
- Google Drive sync credentials
- Any other optional integration keys that exist in the workspace

## Explicit integration variables
- `YOUTUBE_API_KEY`: server-side key for future YouTube search and catalog enrichment.
- `GOOGLE_DRIVE_CLIENT_ID`: OAuth2 client id used by the Drive sync engine.
- `GOOGLE_DRIVE_CLIENT_SECRET`: OAuth2 client secret used by the Drive sync engine.
- `GOOGLE_DRIVE_REFRESH_TOKEN`: OAuth2 refresh token used to mint access tokens for Drive.
- `GOOGLE_DRIVE_FOLDER_ID`: root folder id in Google Drive where TatameOS content will be synced.

## Policy
- Required values must fail honestly when missing.
- Optional integrations must be lazy and isolated.
- Placeholder values are invalid.
- Google Drive sync in this phase uses OAuth2 with refresh token only.
- Service account auth is not supported in this phase.
- Secrets never belong in committed code.

## Source of truth
Use `.env.example`, the runtime validators, and the operational runbooks as the contract source.
