"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# ASYNC FLOW CONTROLLER â€” RENOVA AURA

## NOME:
Async Flow Controller

## FUNÃ‡ÃƒO:
Controlar fluxos assÃ­ncronos para evitar corrida, duplicaÃ§Ã£o e estado morto.

## QUANDO ATIVAR:
Quando houver promises, fetches, effects, jobs ou chamadas assÃ­ncronas.

## MISSÃƒO:
- Garantir sequÃªncia correta.
- Evitar race condition.
- Evitar duplicaÃ§Ã£o de request.

## CHECKLIST:
- O fluxo assÃ­ncrono Ã© idempotente?
- HÃ¡ loading e erro?
- HÃ¡ risco de concorrÃªncia?
- O estado final Ã© previsÃ­vel?

## REGRAS:
- Controlar sequÃªncia.
- Controlar estado.
- Controlar retries.

## PROIBIÃ‡Ã•ES:
- NÃ£o deixar promessa sem tratamento.
- NÃ£o iniciar fluxo duplicado sem necessidade.
- NÃ£o aceitar estado intermediÃ¡rio como final.

## SAÃDA OBRIGATÃ“RIA:
- Fluxo analisado
- Risco assÃ­ncrono
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
AssÃ­ncrono sem controle vira bug intermitente.

FIM

