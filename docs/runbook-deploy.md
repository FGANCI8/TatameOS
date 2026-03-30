# Runbook de Deploy

## 1. Preparar

```bash
git status
npm install
```

## 2. Validar

```bash
npm run lint
npm run build
```

## 3. Publicar no Firebase Hosting

```bash
npm run deploy:firebase
```

## 4. Smoke test apos deploy

### Terminal

```bash
curl -I https://SEU_DOMINIO
curl -I https://SEU_DOMINIO/boas-vindas
curl -I https://SEU_DOMINIO/dashboard-do-aluno
curl -I https://SEU_DOMINIO/area-do-professor
```

### Navegador

1. Abrir a home publicada.
2. Fazer login com usuario aluno.
3. Abrir o dashboard do aluno.
4. Abrir a pagina de feedbacks do aluno.
5. Fazer logout.
6. Fazer login com usuario professor.
7. Abrir a area do professor.
8. Abrir a lista de feedbacks do professor.
9. Testar refresh em uma rota interna.

## 5. Rollback rapido

### Se o problema for o Hosting

1. Abrir Firebase Console.
2. Entrar em `Hosting`.
3. Voltar para a versao anterior publicada.

### Se o problema for o build local

```bash
git log --oneline -n 5
git checkout <COMMIT_ESTAVEL>
npm run lint
npm run build
npm run deploy:firebase
```

### Se o problema for regra de banco

```bash
git checkout <VERSAO_ANTERIOR_DO_firestore.rules>
npm run lint
npm run build
npx firebase-tools deploy --only firestore:rules
```

### Se o problema for variavel de ambiente

1. Restaurar o `.env` do ambiente estavel.
2. Reexecutar `npm run build`.
3. Republicar com `npm run deploy:firebase`.

