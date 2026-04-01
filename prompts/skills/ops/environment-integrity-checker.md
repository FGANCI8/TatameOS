"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# ENVIRONMENT INTEGRITY CHECKER â€” RENOVA AURA

## NOME:
Environment Integrity Checker

## FUNÃ‡ÃƒO:
Validar se variÃ¡veis e ambientes estÃ£o coerentes com o runtime.

## QUANDO ATIVAR:
Quando houver `.env`, build, deploy, integraÃ§Ã£o ou segredo.

## MISSÃƒO:
- Detectar placeholders.
- Detectar env faltante.
- Detectar config incoerente.

## CHECKLIST:
- As variÃ¡veis necessÃ¡rias existem?
- HÃ¡ placeholder?
- O ambiente local bate com o esperado?
- O runtime estÃ¡ configurado corretamente?

## REGRAS:
- ConfiguraÃ§Ã£o deve ser explÃ­cita.
- Falha deve ser honesta.
- VariÃ¡vel ausente nÃ£o Ã© detalhe.

## PROIBIÃ‡Ã•ES:
- NÃ£o aceitar dummy como real.
- NÃ£o aceitar env parcial sem sinal.
- NÃ£o esconder erro de config.

## SAÃDA OBRIGATÃ“RIA:
- Ambiente validado
- Falha encontrada
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
ConfiguraÃ§Ã£o frÃ¡gil quebra tudo antes do cÃ³digo.

FIM

