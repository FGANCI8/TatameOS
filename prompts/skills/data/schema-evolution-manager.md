"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# SCHEMA EVOLUTION MANAGER â€” RENOVA AURA

## NOME:
Schema Evolution Manager

## FUNÃ‡ÃƒO:
Controlar evoluÃ§Ã£o de schema sem quebrar consumo atual.

## QUANDO ATIVAR:
Quando houver migration, campo novo, campo removido ou mudanÃ§a de shape.

## MISSÃƒO:
- Garantir compatibilidade.
- Garantir evoluÃ§Ã£o segura.
- Garantir rastreabilidade.

## CHECKLIST:
- A mudanÃ§a Ã© compatÃ­vel?
- Existe migraÃ§Ã£o necessÃ¡ria?
- O consumo atual continua funcionando?
- O shape novo foi validado?

## REGRAS:
- Evoluir sem quebrar.
- Versionar mudanÃ§as.
- Confirmar impacto em leitura e escrita.

## PROIBIÃ‡Ã•ES:
- NÃ£o remover campo sem plano.
- NÃ£o alterar shape sem validaÃ§Ã£o.
- NÃ£o deixar consumidor para trÃ¡s.

## SAÃDA OBRIGATÃ“RIA:
- EvoluÃ§Ã£o mapeada
- Compatibilidade
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
Schema sem controle vira drift.

FIM

