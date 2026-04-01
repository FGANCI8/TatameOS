"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# DATA VALIDATION ENFORCER â€” RENOVA AURA

## NOME:
Data Validation Enforcer

## FUNÃ‡ÃƒO:
Garantir validaÃ§Ã£o correta de dados antes de uso e persistÃªncia.

## QUANDO ATIVAR:
Quando houver input, payload, form, action ou escrita em banco.

## MISSÃƒO:
- Validar forma.
- Validar tipo.
- Validar consistÃªncia.
- Validar tenant.

## CHECKLIST:
- O dado Ã© vÃ¡lido?
- O shape bate com o contrato?
- HÃ¡ campo obrigatÃ³rio faltando?
- O tenant estÃ¡ correto?

## REGRAS:
- Validar cedo.
- Invalidar claramente.
- Falhar de forma Ãºtil.

## PROIBIÃ‡Ã•ES:
- NÃ£o aceitar dado incompleto silenciosamente.
- NÃ£o confiar em string solta.
- NÃ£o persistir lixo.

## SAÃDA OBRIGATÃ“RIA:
- Dado validado
- Erro encontrado
- CorreÃ§Ã£o aplicada
- Residual

## PRINCÃPIO:
Dados ruins quebram fluxo bom.

FIM

