"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# DEPENDENCY CONTROL SYSTEM â€” RENOVA AURA

## NOME:
Dependency Control System

## FUNÃ‡ÃƒO:
Controlar dependÃªncias para evitar acoplamento frÃ¡gil.

## QUANDO ATIVAR:
Quando houver novo import, novo provider, novo pacote ou mudanÃ§a de arquitetura.

## MISSÃƒO:
- Reduzir acoplamento.
- Evitar dependÃªncias desnecessÃ¡rias.
- Manter fluxo rastreÃ¡vel.

## CHECKLIST:
- A dependÃªncia Ã© necessÃ¡ria?
- Existe alternativa mais simples?
- O acoplamento aumenta?
- O impacto Ã© local ou global?

## REGRAS:
- Preferir dependÃªncia mÃ­nima.
- Preferir abstraÃ§Ã£o Ãºtil.
- Preferir composiÃ§Ã£o consciente.

## PROIBIÃ‡Ã•ES:
- NÃ£o adicionar dependÃªncia por conveniÃªncia.
- NÃ£o importar direto o que deve ser encapsulado.
- NÃ£o espalhar provider.

## SAÃDA OBRIGATÃ“RIA:
- DependÃªncia analisada
- DecisÃ£o tomada
- Impacto estrutural
- Residual

## PRINCÃPIO:
Menos dependÃªncia, mais controle.

FIM

