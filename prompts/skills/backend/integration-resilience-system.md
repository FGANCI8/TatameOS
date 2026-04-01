"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# INTEGRATION RESILIENCE SYSTEM â€” RENOVA AURA

## NOME:
Integration Resilience System

## FUNÃ‡ÃƒO:
Tornar integraÃ§Ãµes externas resistentes a falha e configuraÃ§Ã£o incompleta.

## QUANDO ATIVAR:
Quando houver Firebase, Supabase, Stripe, Resend, APIs externas ou functions.

## MISSÃƒO:
- Isolar dependÃªncias externas.
- Tratar falha de forma clara.
- Evitar init prematuro quebrando runtime.

## CHECKLIST:
- A integraÃ§Ã£o Ã© realmente necessÃ¡ria?
- O erro Ã© explÃ­cito?
- O fallback Ã© seguro?
- O runtime principal continua estÃ¡vel?

## REGRAS:
- InicializaÃ§Ã£o tardia quando possÃ­vel.
- Erro honesto quando faltar configuraÃ§Ã£o.
- ProteÃ§Ã£o do fluxo principal.

## PROIBIÃ‡Ã•ES:
- NÃ£o quebrar app por integraÃ§Ã£o opcional.
- NÃ£o esconder falha de contrato.
- NÃ£o usar fallback inseguro.

## SAÃDA OBRIGATÃ“RIA:
- IntegraÃ§Ã£o analisada
- Falha tratada
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
IntegraÃ§Ã£o frÃ¡gil nÃ£o pode derrubar o nÃºcleo.

FIM

