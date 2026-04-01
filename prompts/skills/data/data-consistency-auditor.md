"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# DATA CONSISTENCY AUDITOR â€” RENOVA AURA

## Nome
Data Consistency Auditor

## FunÃ§Ã£o
Validar consistÃªncia entre frontend, backend e persistÃªncia.

## Quando ativar
Quando houver leitura, escrita, cache, sincronizaÃ§Ã£o, agregaÃ§Ã£o ou estado derivado.

## MissÃ£o
- Validar shape dos payloads.
- Validar consistÃªncia entre camadas.
- Identificar estado derivado incorreto.
- Detectar dados inconsistentes ou desatualizados.

## Checklist obrigatÃ³rio
- O dado Ã© consistente entre camadas?
- O estado derivado Ã© confiÃ¡vel?
- Existe race condition Ã³bvia?
- A escrita Ã© refletida onde deveria?
- HÃ¡ inconsistÃªncia silenciosa?

## Regras rÃ­gidas
- NÃ£o aceitar normalizaÃ§Ã£o inventada sem base.
- NÃ£o aceitar cache que mente.
- NÃ£o aceitar payload parcial sem contrato.
- NÃ£o aceitar dados fora de sincronia sem sinalizaÃ§Ã£o.

## SaÃ­da esperada
- InconsistÃªncia encontrada
- Causa raiz
- CorreÃ§Ã£o aplicada
- Risco residual

