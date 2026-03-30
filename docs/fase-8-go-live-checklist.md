# Fase 8 - Checklist de Go-Live e Validacao de Produção

Este documento e o checklist final para autorizar o deploy em produção.
Cada item deve ser marcado como `PASSA` ou `NÃO PASSA`.
Se qualquer item critico falhar, o go-live deve ser interrompido.

## 1. Identidade do ambiente

- [ ] `PASSA` O projeto de produção esta separado do projeto de desenvolvimento no Firebase.
- [ ] `PASSA` As credenciais de produção foram revisadas e não reutilizam segredos de desenvolvimento.
- [ ] `PASSA` O arquivo `.env` local nao contem segredos de producao.
- [ ] `PASSA` O arquivo `.env.example` reflete apenas variaveis publicas e administrativas esperadas.
- [ ] `PASSA` O build de producao usa apenas variaveis `VITE_` do lado do cliente.

## 2. Variaveis de ambiente

- [ ] `PASSA` Todas as variaveis publicas do cliente estao definidas com prefixo `VITE_`.
- [ ] `PASSA` Nao existe chave administrativa exposta no bundle do frontend.
- [ ] `PASSA` `VITE_FIREBASE_API_KEY` esta configurada.
- [ ] `PASSA` `VITE_FIREBASE_AUTH_DOMAIN` esta configurada.
- [ ] `PASSA` `VITE_FIREBASE_PROJECT_ID` esta configurada.
- [ ] `PASSA` `VITE_FIREBASE_STORAGE_BUCKET` esta configurada.
- [ ] `PASSA` `VITE_FIREBASE_MESSAGING_SENDER_ID` esta configurada.
- [ ] `PASSA` `VITE_FIREBASE_APP_ID` esta configurada.
- [ ] `PASSA` `VITE_DEFAULT_PROFESSOR_ID` foi revisada para producao.
- [ ] `PASSA` Variaveis server-side foram injetadas apenas no ambiente de deploy/funcao.
- [ ] `PASSA` Se houver projeto separado de producao, as chaves do Firebase Admin foram trocadas para o projeto correto.

## 3. Build e artefato

- [ ] `PASSA` `npm run lint` executa sem erro.
- [ ] `PASSA` `npm run build` executa sem erro.
- [ ] `PASSA` O diretório `dist/` foi gerado com sucesso.
- [ ] `PASSA` O bundle final nao inclui logs secretos ou valores de ambiente sensiveis.

## 4. Firebase Hosting

- [ ] `PASSA` `firebase.json` aponta `hosting.public` para `dist`.
- [ ] `PASSA` O rewrite SPA para `/index.html` esta configurado.
- [ ] `PASSA` A publicacao do Hosting sera feita no projeto Firebase correto.
- [ ] `PASSA` As regras do Firestore estao publicadas junto com o deploy ou validadas antes do go-live.

## 5. Firestore Rules

- [ ] `PASSA` A colecao `feedbacks` esta protegida.
- [ ] `PASSA` Aluno so le os proprios feedbacks.
- [ ] `PASSA` Aluno nao consegue atualizar nem deletar feedback.
- [ ] `PASSA` Aluno nao consegue forcar `status`, `prioridade` ou `recomendacaoProfessor`.
- [ ] `PASSA` Professor le tudo e atualiza o que for permitido pela regra.
- [ ] `PASSA` Delete permanece bloqueado para todos.
- [ ] `PASSA` Nenhum caminho de escrita publica existe sem autenticacao.

## 6. Roteiro de dominio customizado

1. Entrar no Firebase Console.
2. Abrir `Hosting`.
3. Selecionar `Add custom domain`.
4. Informar o dominio oficial da producao.
5. Validar o registro DNS pedido pelo Firebase.
6. Apontar os registros `TXT` e `A` ou `CNAME` conforme solicitado.
7. Aguardar a propagacao.
8. Confirmar que o dominio resolve para o site publicado.
9. Validar o certificado SSL emitido pelo Firebase.
10. Testar rotas diretas da SPA, inclusive refresh em paginas internas.

## 7. Injeção segura de variáveis

1. Definir variaveis do cliente apenas com prefixo `VITE_`.
2. Guardar segredos administrativos somente no ambiente do deploy ou no backend.
3. Nunca commitar `.env` de producao.
4. Manter `.env.example` como referencia de nomes, nao de valores.
5. Se o projeto mudar de ambiente, atualizar o conjunto de chaves do Firebase para o projeto correto antes do build.
6. Conferir se o build final aponta para o projeto Firebase esperado.

## 8. Auditoria do ErrorBoundary

- [ ] `PASSA` O `ErrorBoundary` existe e cobre falhas de renderizacao.
- [ ] `PASSA` O fallback visual da rota esta claro para o usuario.
- [ ] `PASSA` O erro e registrado localmente para depuracao.
- [ ] `NÃO PASSA` O `ErrorBoundary` sozinho nao substitui observabilidade centralizada em producao.
- [ ] `PASSA` Se a operacao precisar rastreamento administrativo, existe um plano de evolucao para log remoto.

## 9. Go / No-Go

### GO

- `PASSA` se todos os itens criticos acima estiverem marcados como `PASSA`.

### NO-GO

- `NÃO PASSA` se houver:
  - credencial de producao exposta
  - regra do Firestore aberta indevidamente
  - build quebrado
  - dominio sem SSL/propagacao
  - rota SPA sem rewrite

## 10. Roteiro de rollback rapido

1. Interromper a divulgacao do novo dominio, se necessario.
2. Reverter o Hosting para a versao anterior pela interface do Firebase Console.
3. Se o problema for de codigo, publicar o ultimo release estavel imediatamente.
4. Se o problema for de regras, restaurar a versao anterior do `firestore.rules`.
5. Se o problema for de configuracao, trocar as variaveis de ambiente para o conjunto anterior.
6. Se houver separacao dev/prod, voltar o front para as chaves do projeto anterior ate corrigir o ambiente.
7. Validar login, leitura de Firestore e acesso ao dashboard antes de reabrir o trafego.

## 11. Comandos finais de verificacao

```bash
npm run lint
npm run build
npm run deploy:firebase
```

