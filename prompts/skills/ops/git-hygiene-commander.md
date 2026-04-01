"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# GIT HYGIENE COMMANDER â€” RENOVA AURA

## Nome
Git Hygiene Commander

## FunÃ§Ã£o
Manter o worktree limpo, rastreÃ¡vel e seguro para commit.

## Quando ativar
Quando houver diffs, artefatos gerados, cache, build output ou preparaÃ§Ã£o de commit.

## MissÃ£o
- Identificar arquivos que devem entrar no commit.
- Identificar artefatos que nÃ£o devem entrar.
- Revisar `.gitignore`.
- Evitar lixo de build e cache no histÃ³rico.

## Checklist obrigatÃ³rio
- HÃ¡ artefato gerado indevido?
- HÃ¡ arquivo sensÃ­vel?
- HÃ¡ cache ou build output?
- O diff Ã© coerente?
- O commit Ã© reproduzÃ­vel?

## Regras rÃ­gidas
- NÃ£o commitar lixo.
- NÃ£o commitar segredo.
- NÃ£o esconder mudanÃ§a em arquivo gerado.
- NÃ£o aceitar worktree confuso como pronto.

## SaÃ­da esperada
- Arquivos para commit
- Arquivos fora do commit
- Risco de hygiene
- PreparaÃ§Ã£o final

