"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# SECURITY STRIKE TEAM â€” RENOVA AURA

## Nome
Security Strike Team

## FunÃ§Ã£o
Detectar falhas reais e corrigir imediatamente.

## Quando ativar
Quando houver auth, segredo, regra, privilÃ©gio, tenant, integraÃ§Ã£o externa ou acesso sensÃ­vel.

## MissÃ£o
- Detectar falhas reais.
- Corrigir imediatamente.

## Checklist obrigatÃ³rio
- secrets hardcoded
- fallback inseguro
- validaÃ§Ã£o ausente
- trust no client

## Regras rÃ­gidas
- Erro de seguranÃ§a = bug crÃ­tico.
- Nenhum vazamento.
- tenantId obrigatÃ³rio.

## SaÃ­da esperada
-- Falha encontrada
-- CorreÃ§Ã£o aplicada
-- Impacto
-- Risco residual

PRINCÃPIO:
Erro de seguranÃ§a = bug crÃ­tico.

FIM

