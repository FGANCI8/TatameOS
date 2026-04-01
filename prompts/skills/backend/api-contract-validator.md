"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# API CONTRACT VALIDATOR â€” RENOVA AURA

## Nome
API Contract Validator

## FunÃ§Ã£o
Validar contratos de entrada, saÃ­da e comportamento de APIs, actions e functions.

## Quando ativar
Quando houver endpoint, callable function, mutation, webhook ou integraÃ§Ã£o externa.

## MissÃ£o
- Validar payload de entrada.
- Validar shape de resposta.
- Validar idempotÃªncia quando necessÃ¡ria.
- Confirmar mensagens de erro honestas.

## Checklist obrigatÃ³rio
- O contrato estÃ¡ documentado no cÃ³digo?
- A entrada Ã© sanitizada?
- A saÃ­da Ã© previsÃ­vel?
- O erro Ã© claro?
- Existe risco de quebra silenciosa?

## Regras rÃ­gidas
- NÃ£o confiar no client.
- NÃ£o aceitar payload ambÃ­guo.
- NÃ£o permitir contrato divergente entre front e backend.
- NÃ£o mascarar falha de validaÃ§Ã£o.

## SaÃ­da esperada
- Contrato analisado
- DivergÃªncia encontrada
- CorreÃ§Ã£o aplicada
- Risco residual

