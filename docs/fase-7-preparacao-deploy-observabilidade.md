# Fase 7 - Preparacao para Deploy e Observabilidade Basica

## 1. Auditoria de build

- `vite.config.ts` ja esta adequado para o stack atual:
  - React plugin habilitado.
  - Tailwind plugin habilitado.
  - Alias `@` resolvendo para a raiz do projeto.
  - Variavel `GEMINI_API_KEY` exposta para o runtime via `define`.
- `package.json` ja tem o fluxo minimo necessario:
  - `dev`
  - `build`
  - `preview`
  - `lint`
  - `provision:role`
- A compilacao de producao foi validada com sucesso.

## 2. Recomendacao de deploy

### Recomendacao principal: Firebase Hosting

Motivos:

- O projeto ja depende fortemente de Firebase Auth, Firestore e custom claims.
- O frontend e uma SPA estatica gerada pelo Vite, ideal para Hosting.
- O mesmo ecossistema facilita:
  - regras de seguranca
  - emuladores
  - previsibilidade operacional
  - menor friccao de integracao com o backend Firebase
- O repositorio ja contem `firebase.json` e `firestore.rules`, entao o caminho natural e consolidar o hosting no mesmo provider.

### Quando considerar Vercel

- Se a prioridade for preview deployments com Git baseado em PR.
- Se o time quiser uma experiencia mais simples de edge/CDN para o frontend.
- Mesmo assim, a dependencia central do backend continua sendo Firebase.

## 3. Fluxo recomendado de deploy

1. Definir variaveis de producao.
2. Rodar `npm run lint`.
3. Rodar `npm run build`.
4. Publicar o build em `dist/`.
5. Subir regras do Firestore.
6. Conferir autenticação, claims e paginas criticas.

## 4. Observabilidade basica

- O `ErrorBoundary` existente cobre falhas de renderizacao por rota.
- Ele registra o erro via `console.error` e exibe fallback visual.
- Para esta fase, isso e suficiente como baseline funcional.
- Proxima evolucao sugerida:
  - enviar os erros para um endpoint simples de log
  - ou integrar uma ferramenta externa leve quando houver necessidade real

## 5. Checklist de producao

- Confirmar variaveis `VITE_` no ambiente do cliente.
- Confirmar variaveis admin apenas no servidor.
- Confirmar `firebase.json` com hosting SPA.
- Confirmar build limpo.
- Confirmar regras do Firestore publicadas.
- Confirmar autenticação e roles em producao.

## 6. Comandos

```bash
npm run lint
npm run build
```

Deploy Firebase Hosting:

```bash
npm run build
npx firebase-tools deploy --only hosting,firestore:rules
```

Deploy Vercel:

```bash
npm run build
vercel deploy --prod
```
