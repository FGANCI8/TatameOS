# Fase 9 - Auditoria e Estruturacao de Isolamento por Tenant

## 1. Resumo Executivo

O sistema atual ainda opera com colecoes globais, entao dois clientes diferentes poderiam compartilhar leituras se o tenant nao for aplicado em todas as camadas.

A melhor estrategia para este projeto e adotar `tenantId` como particionamento logico obrigatorio em todas as entidades de negocio, mantendo o isolamento por tenant no Firestore Rules e no contrato dos repositories.

Recomendacao principal:

- manter colecoes flat no Firestore
- adicionar `tenantId` em todos os documentos
- propagar `tenantId` nos filtros dos repositories
- expor `tenantId` no token do usuario via custom claim
- usar um documento de perfil do usuario apenas como apoio de exibicao, nao como fonte principal de isolamento

Isso preserva a arquitetura `UI -> Hook -> Service -> Repository` e evita a necessidade de subcolecoes agora.

## 2. Estrategia de Descoberta e Armazenamento do Tenant

### Fonte de verdade recomendada

- `tenantId` no custom claim do Firebase Auth.
- `role` continua no custom claim, separado do tenant.

### Apoio secundario

- documento do usuario em `/usuarios/{uid}` ou equivalente para exibicao de nome, role e vinculo academico.
- esse documento nao deve ser a base da autorizacao de acesso.

### Fluxo no frontend

1. Auth Provider carrega o token.
2. O app le `role` e `tenantId` do claim.
3. O contexto global expõe `tenantId` para hooks e services.
4. Toda chamada de negocio leva o `tenantId` junto.

### Regra de ouro

- se o usuario nao tiver `tenantId`, o app deve bloquear consultas de negocio.

### Colecoes afetadas

- `alunos`
- `treinos`
- `falhas`
- `lutas`
- `feedbacks`
- `tecnicas` se o conteudo precisar variar por academia no futuro

### Campo obrigatorio

- `tenantId: string`

### Observacao de compatibilidade

- documentos antigos precisarao de backfill antes da regra final ficar estrita.

## 3. Impacto nos Contratos

### Repositories

Todo repository deve exigir `tenantId` nas entradas de consulta e escrita.

Exemplos de impacto:

- `findById(id, tenantId)`
- `findMany(filters, tenantId)`
- `save(entity, tenantId)`
- `update(id, payload, tenantId)`

### Services

Os services devem receber o tenant do contexto autenticado e nunca aceitar tenant arbitrario vindo da UI.

Exemplos:

- `listarFeedbacksProfessor(professorId, tenantId)`
- `listarTreinosDoAluno(alunoId, tenantId)`
- `criarFeedback(input, tenantId)`

### Hooks

Os hooks passam a ler `tenantId` do contexto de autenticacao e repassam somente o necessario para o service.

### Regras de contrato

- nenhuma listagem sem `tenantId`
- nenhuma leitura por id sem conferir `tenantId`
- nenhuma escrita sem gravar `tenantId`
- nenhum update pode trocar `tenantId`

## 4. Rascunho das Novas Firestore Rules

### Principio

- o tenant precisa bater entre `request.auth.token.tenantId` e `resource.data.tenantId` ou `request.resource.data.tenantId`
- o role continua sendo validado em paralelo

### Funcoes base

```rules
function signedIn() {
  return request.auth != null;
}

function hasRole(role) {
  return signedIn() && request.auth.token.role == role;
}

function hasTenant() {
  return signedIn() && request.auth.token.tenantId is string && request.auth.token.tenantId.size() > 0;
}

function sameTenant(data) {
  return hasTenant() && data.tenantId == request.auth.token.tenantId;
}

function isProfessorOrAdmin() {
  return hasRole('professor') || hasRole('admin');
}
```

### Rascunho de acesso por colecao

```rules
match /alunos/{userId} {
  allow get: if signedIn() && sameTenant(resource.data) && (resource.data.id == request.auth.uid || isProfessorOrAdmin());
  allow list: if signedIn() && hasTenant();
  allow create: if signedIn() && hasTenant() && request.resource.data.tenantId == request.auth.token.tenantId;
  allow update: if signedIn() && hasTenant() && sameTenant(resource.data) && sameTenant(request.resource.data);
  allow delete: if false;
}

match /treinos/{treinoId} {
  allow get, list: if signedIn() && hasTenant() && sameTenant(resource.data);
  allow create: if signedIn() && hasTenant() && request.resource.data.tenantId == request.auth.token.tenantId;
  allow update, delete: if false;
}

match /falhas/{falhaId} {
  allow get, list: if signedIn() && hasTenant() && sameTenant(resource.data);
  allow create: if signedIn() && hasTenant() && request.resource.data.tenantId == request.auth.token.tenantId;
  allow update, delete: if false;
}

match /lutas/{lutaId} {
  allow get, list: if signedIn() && hasTenant() && sameTenant(resource.data);
  allow create: if signedIn() && hasTenant() && request.resource.data.tenantId == request.auth.token.tenantId;
  allow update, delete: if false;
}

match /feedbacks/{feedbackId} {
  allow get: if signedIn() && hasTenant() && sameTenant(resource.data) && (
    resource.data.alunoId == request.auth.uid || isProfessorOrAdmin()
  );
  allow list: if signedIn() && hasTenant() && sameTenant(resource.data);
  allow create: if signedIn() && hasTenant() && request.resource.data.tenantId == request.auth.token.tenantId;
  allow update: if signedIn() && isProfessorOrAdmin() && hasTenant() && sameTenant(resource.data) && sameTenant(request.resource.data);
  allow delete: if false;
}
```

### Observacao importante

- em colecoes com `list`, o `tenantId` precisa estar presente em todos os documentos antes da regra ficar totalmente restritiva, senao o backfill precisa acontecer primeiro.

## 5. Risco de Execucao e Plano de Ação

### Riscos

- documentos antigos sem `tenantId` vao quebrar leituras se as regras ficarem estritas antes do backfill.
- queries existentes vao falhar ate receberem filtro de tenant.
- claims antigas de usuario precisarao ser recarregadas apos a migracao.
- o admin precisa garantir que cada usuario esteja associado a um tenant valido.

### Plano de acao recomendado

1. Criar o campo `tenantId` nos modelos e interfaces.
2. Backfill dos documentos existentes.
3. Atualizar claims de usuarios com `tenantId`.
4. Atualizar repositories para exigir filtro de tenant.
5. Atualizar services e hooks para carregar tenant do contexto.
6. Publicar regras novas em modo controlado.
7. Validar no emulador com dois tenants diferentes.
8. Liberar em producao somente quando nao houver leitura cruzada.

