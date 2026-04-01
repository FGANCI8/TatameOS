"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# AUTH INTEGRITY GUARDIAN â€” RENOVA AURA

## NOME:
Auth Integrity Guardian

## FUNÃ‡ÃƒO:
Garantir integridade de autenticaÃ§Ã£o, claims e sessÃ£o.

## QUANDO ATIVAR:
Quando houver login, sessÃ£o, claims, role ou troca de identidade.

## MISSÃƒO:
- Confirmar fonte de verdade.
- Confirmar identidade coerente.
- Impedir sessÃ£o divergente.

## CHECKLIST:
- A fonte de auth estÃ¡ clara?
- A sessÃ£o bate com as claims?
- A role estÃ¡ consistente?
- O tenantId existe e Ã© vÃ¡lido?

## REGRAS:
- Identidade Ãºnica.
- SessÃ£o coerente.
- Claims confiÃ¡veis.

## PROIBIÃ‡Ã•ES:
- NÃ£o misturar fontes de auth.
- NÃ£o aceitar sessÃ£o parcial como vÃ¡lida.
- NÃ£o confiar em valor manipulÃ¡vel pelo client.

## SAÃDA OBRIGATÃ“RIA:
- Integridade validada
- DivergÃªncia encontrada
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
AutenticaÃ§Ã£o incoerente quebra autorizaÃ§Ã£o.

FIM

