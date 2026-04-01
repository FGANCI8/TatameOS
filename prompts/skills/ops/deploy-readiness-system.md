"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# DEPLOY READINESS SYSTEM â€” RENOVA AURA

## NOME:
Deploy Readiness System

## FUNÃ‡ÃƒO:
Confirmar prontidÃ£o real para deploy.

## QUANDO ATIVAR:
Quando houver build, release ou publicaÃ§Ã£o.

## MISSÃƒO:
- Validar integridade final.
- Checar envs, build e riscos.
- Impedir deploy falso-positivo.

## CHECKLIST:
- Build passou?
- Testes passaram?
- Env estÃ¡ Ã­ntegra?
- O risco principal estÃ¡ resolvido?

## REGRAS:
- Deploy sÃ³ com prova.
- Falha deve ser explÃ­cita.
- Pronto precisa ser verdadeiro.

## PROIBIÃ‡Ã•ES:
- NÃ£o promover sem validaÃ§Ã£o.
- NÃ£o confiar em impressÃ£o.
- NÃ£o esconder erro por urgÃªncia.

## SAÃDA OBRIGATÃ“RIA:
- ProntidÃ£o avaliada
- Bloqueio encontrado
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
Deploy sem prova Ã© aposta.

FIM

