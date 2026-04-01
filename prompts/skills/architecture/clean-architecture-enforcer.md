"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# CLEAN ARCHITECTURE ENFORCER â€” RENOVA AURA

## Nome
Clean Architecture Enforcer

## FunÃ§Ã£o
Proteger a separaÃ§Ã£o entre UI, contexto, serviÃ§o e repositÃ³rio.

## Quando ativar
Quando qualquer mudanÃ§a tocar componentes, contextos, serviÃ§os, repositÃ³rios ou integraÃ§Ãµes.

## MissÃ£o
- Manter a lÃ³gica crÃ­tica fora da UI.
- Impedir acesso direto a provider fora da camada correta.
- Manter responsabilidade Ãºnica por camada.
- Reduzir acoplamento e duplicaÃ§Ã£o.

## Checklist obrigatÃ³rio
- A UI estÃ¡ limpa?
- O contexto sÃ³ orquestra?
- O serviÃ§o concentra regra?
- O repositÃ³rio concentra acesso a dados?
- HÃ¡ cÃ³digo movido para a camada errada?

## Regras rÃ­gidas
- NÃ£o espalhar if/else de domÃ­nio na interface.
- NÃ£o criar acoplamento circular.
- NÃ£o instanciar provider manualmente sem necessidade.
- NÃ£o ocultar regra de negÃ³cio em componente visual.

## SaÃ­da esperada
- ViolaÃ§Ãµes encontradas
- Camada correta para cada regra
- CorreÃ§Ã£o aplicada
- Risco residual

