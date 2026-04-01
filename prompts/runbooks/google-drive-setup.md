# Google Drive Setup

## Objetivo
Preparar credenciais e pasta raiz para executar `scripts/sync-to-drive.ts` sem expor segredos.

## Passo a passo
1. Criar um projeto no Google Cloud.
2. Ativar a Google Drive API.
3. Criar uma OAuth client ou service account.
4. Gerar `GOOGLE_DRIVE_CLIENT_ID`, `GOOGLE_DRIVE_CLIENT_SECRET` e `GOOGLE_DRIVE_REFRESH_TOKEN` quando usar OAuth2.
5. Definir `GOOGLE_DRIVE_FOLDER_ID` com a pasta raiz do espaço `TatameOS`.
6. Compartilhar a pasta do Drive com a conta de serviço, se aplicável.
7. Preencher `.env.local` ou o arquivo de ambiente da máquina sem commitar credenciais.
8. Rodar `tsx scripts/sync-to-drive.ts` quando o script estiver pronto.

## Pasta sugerida
- `/TatameOS/prompts`
- `/TatameOS/reports`
- `/TatameOS/maps`
- `/TatameOS/library`
- `/TatameOS/contracts`

## Cuidados
- Não subir `.env`.
- Não subir `dist` ou `node_modules`.
- Não sobrescrever sem comparar data de modificação.
- Não registrar credenciais no log.
