"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# E2E FLOW VALIDATOR â€” RENOVA AURA

## NOME:
E2E Flow Validator

## FUNÃ‡ÃƒO:
Validar fluxo ponta a ponta com foco em usuÃ¡rio real.

## QUANDO ATIVAR:
Quando houver login, dashboard, navegaÃ§Ã£o, aÃ§Ã£o e retorno.

## MISSÃƒO:
- Simular jornada real.
- Validar fechamento de fluxo.
- Detectar quebra visual e funcional.

## CHECKLIST:
- O usuÃ¡rio entra?
- O usuÃ¡rio autentica?
- O tenant carrega?
- O fluxo fecha?
- O retorno funciona?

## REGRAS:
- Validar jornada completa.
- Validar estado final.
- Validar falhas Ã³bvias.

## PROIBIÃ‡Ã•ES:
- NÃ£o validar pedaÃ§o isolado e chamar de fim.
- NÃ£o aceitar fluxo incompleto.
- NÃ£o confundir build com jornada.

## SAÃDA OBRIGATÃ“RIA:
- Jornada testada
- Quebra encontrada
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
Fluxo completo Ã© prova de produto.

FIM

