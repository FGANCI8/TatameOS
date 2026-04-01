# Google Drive Setup

## Objetivo
Preparar credenciais e pasta raiz para executar `scripts/sync-to-drive.ts` sem expor segredos.

## Modo suportado nesta fase
- Apenas OAuth2 com refresh token.
- Service account nao esta suportada nesta fase.
- O script deve falhar honestamente se as variaveis obrigatorias estiverem ausentes ou forem placeholders.

## Passo a passo
1. Criar um projeto no Google Cloud.
2. Ativar a Google Drive API.
3. Criar uma OAuth client.
4. Gerar `GOOGLE_DRIVE_CLIENT_ID`, `GOOGLE_DRIVE_CLIENT_SECRET` e `GOOGLE_DRIVE_REFRESH_TOKEN`.
5. Definir `GOOGLE_DRIVE_FOLDER_ID` com a pasta raiz do espaco `TatameOS`.
6. Preencher `.env.local` ou o arquivo de ambiente da maquina sem commitar credenciais.
7. Rodar `tsx scripts/sync-to-drive.ts` quando o script estiver pronto.

## O que cada variavel representa
- `GOOGLE_DRIVE_CLIENT_ID`: id do client OAuth2 criado no Google Cloud.
- `GOOGLE_DRIVE_CLIENT_SECRET`: segredo do client OAuth2.
- `GOOGLE_DRIVE_REFRESH_TOKEN`: token de atualizacao para gerar access tokens sem reautenticar.
- `GOOGLE_DRIVE_FOLDER_ID`: id da pasta raiz no Drive que recebera o conteudo do TatameOS.

## Como localizar `GOOGLE_DRIVE_FOLDER_ID`
1. Abra a pasta de destino no Google Drive.
2. Copie o trecho final da URL entre `/folders/` e o proximo `?` ou o fim do link.
3. Cole esse valor em `GOOGLE_DRIVE_FOLDER_ID`.
4. Verifique se a conta do OAuth2 tem acesso a essa pasta.

## Pasta sugerida
- `/TatameOS/prompts`
- `/TatameOS/reports`
- `/TatameOS/maps`
- `/TatameOS/library`
- `/TatameOS/contracts`

## Cuidados
- Nao subir `.env`.
- Nao subir `dist` ou `node_modules`.
- Nao sobrescrever sem comparar data de modificacao.
- Nao registrar credenciais no log.
- Nao usar service account nesta fase.
