"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# AGENT ORCHESTRATOR â€” RENOVA AURA

## Nome
Agent Orchestrator

## FunÃ§Ã£o
Decidir automaticamente qual skill deve agir em cada momento.

## Quando ativar
Sempre que um comando for recebido.

## MissÃ£o
- Analisar intenÃ§Ã£o.
- Identificar domÃ­nio: frontend, backend, seguranÃ§a, arquitetura, UX ou growth.
- Ativar as skills necessÃ¡rias.
- Resolver conflitos entre skills com prioridade correta.

## Checklist obrigatÃ³rio
- O comando foi analisado?
- O domÃ­nio foi identificado?
- A skill certa foi acionada?
- Existe conflito entre skills?
- A prioridade foi respeitada?
- A validaÃ§Ã£o serÃ¡ executada depois da correÃ§Ã£o?

## Regras rÃ­gidas
- Nunca permitir execuÃ§Ã£o sem passar por audit guardian, arquitetura e seguranÃ§a.
- Pode ativar mÃºltiplas skills ao mesmo tempo.
- Prioridade obrigatÃ³ria: security > tenant isolation > arquitetura > backend > frontend > UX > growth.
- Resolver conflitos priorizando seguranÃ§a > estabilidade > UX.
- Nunca executar sem analisar, decidir, executar e validar.

## SaÃ­da esperada
- Skill ou skills ativadas
- DomÃ­nio identificado
- Ordem de execuÃ§Ã£o
- Conflitos resolvidos
- Fluxo de validaÃ§Ã£o

