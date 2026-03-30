# Provisionamento Operacional de `role`

Este projeto usa custom claims do Firebase Auth para distinguir `aluno`, `professor` e `admin`.

## O que esta microfase operacionaliza

- Provisionamento de `role=professor` fora do frontend.
- Provisionamento opcional de `role=admin` quando houver necessidade operacional.
- Leitura do claim pelo frontend após refresh de token.
- Checklist prático de validação de acesso.

## Onde roda o provisionamento

- Localmente, via CLI, com `tsx scripts/provision-role.ts`.
- Em ambiente seguro com credencial de Admin SDK.
- Nunca no cliente web.

## Variáveis necessárias

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`

Se essas variáveis não estiverem disponíveis, o script tenta `applicationDefault()` como fallback. Mesmo assim, o ambiente precisa ter permissão administrativa no Firebase Auth.

## Comando de promoção

```bash
npm run provision:role -- --email=usuario@dominio.com --role=professor
```

Também é possível usar `--uid=...` no lugar de `--email=...`.

## Validação após promoção

1. O script mostra `customClaims` do usuário após a escrita.
2. O usuário deve renovar o token por:
   - logout/login, ou
   - `refreshClaims()` no contexto do app.
3. O frontend passa a reconhecer `role=professor` por `AuthProvider`.

## Checklist real de autorização

### Aluno comum

- Lê o próprio perfil.
- Registra o próprio treino.
- Lê os próprios treinos.
- Não acessa `/area-do-professor`, `/painel-do-professor` ou `/biblioteca-do-professor`.
- Não lista `/alunos` nem coleções agregadas protegidas.
- Não altera documento de outro usuário.

### Professor com claim

- Acessa a área do professor.
- Lê listas agregadas permitidas por Rules.
- Navega sem bloqueio indevido.
- Continua sem permissão para update/delete fora do que as Rules permitem.

### Tentativa indevida

- Um aluno não lê documento de outro aluno.
- Um aluno não força rota de professor pela URL.
- Um aluno não escreve em documento de outro usuário.
- Um aluno não faz list em coleções agregadas protegidas.

## Limitações remanescentes

- A promoção depende de credencial de Admin SDK.
- O token do usuário precisa ser renovado para refletir o claim novo.
- Esta microfase não cria painel administrativo nem fluxo de autoelevação.
