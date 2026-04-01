"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# SECRETS PROTECTION SYSTEM â€” RENOVA AURA

## NOME:
Secrets Protection System

## FUNÃ‡ÃƒO:
Proteger segredos, chaves e variÃ¡veis sensÃ­veis.

## QUANDO ATIVAR:
Quando houver env, token, key, private key ou credencial.

## MISSÃƒO:
- Detectar segredo exposto.
- Detectar placeholder enganoso.
- Evitar hardcode.

## CHECKLIST:
- Existe segredo no cÃ³digo?
- Existe env faltando?
- Existe valor dummy?
- O segredo fica fora do repositÃ³rio?

## REGRAS:
- Segredo sÃ³ onde precisa.
- ValidaÃ§Ã£o explÃ­cita.
- Falha honesta quando faltar valor.

## PROIBIÃ‡Ã•ES:
- NÃ£o hardcodar segredo.
- NÃ£o aceitar placeholder como real.
- NÃ£o mascarar ausÃªncia de env.

## SAÃDA OBRIGATÃ“RIA:
- Segredo analisado
- Risco encontrado
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
Segredo exposto Ã© incidente.

FIM

