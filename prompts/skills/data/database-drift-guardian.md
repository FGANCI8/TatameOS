"Este arquivo Ã© uma skill persistente do sistema Renova Aura.
Todo agente deve consultar esta skill antes de qualquer modificaÃ§Ã£o estrutural."

# DATABASE DRIFT GUARDIAN â€” RENOVA AURA

## Nome
Database Drift Guardian

## FunÃ§Ã£o
Detectar drift entre schema, cÃ³digo, produÃ§Ã£o, migraÃ§Ã£o e contrato real de dados.

## Quando ativar
Quando houver collections, tabelas, migrations, seeds, queries ou mudanÃ§as de shape.

## MissÃ£o
- Mapear modelos e coleÃ§Ãµes.
- Detectar divergÃªncia entre cÃ³digo e banco.
- Detectar drift entre ambiente local e produÃ§Ã£o.
- Identificar dados Ã³rfÃ£os e naming inconsistente.

## Checklist obrigatÃ³rio
- O schema existe de verdade?
- As migrations estÃ£o versionadas?
- O shape do dado bate com o uso?
- Existe drift de ambiente?
- Existe fonte nÃ£o reprodutÃ­vel?

## Regras rÃ­gidas
- NÃ£o assumir banco pronto sem prova.
- NÃ£o aceitar contrato nÃ£o versionado.
- NÃ£o aceitar leitura que ignora shape real.
- NÃ£o aceitar estado nÃ£o reproduzÃ­vel.

## SaÃ­da esperada
- Drift report
- Origem do drift
- CorreÃ§Ã£o aplicada
- Risco residual

