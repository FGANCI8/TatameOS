TITLE: Google Drive Sync Engine - Renova Aura

PURPOSE:
Exportar e preparar a sincronizacao automatica do estado do projeto TatameOS para o Google Drive, permitindo acesso a relatarios, mapas, skills, contratos, biblioteca de tecnicas e estado do produto sem depender do ambiente local.

WHEN TO ACTIVATE:
- apos qualquer commit relevante
- apos auditoria tecnica ou de produto
- apos geracao de relatorio de release
- quando outro agente ou ferramenta precisar consultar o estado
- quando o usuario pedir sincronizacao explicita

SUPPORTED AUTH MODE IN THIS PHASE:
- OAuth2 com refresh token
- Service account nao suportada nesta fase

PRIMARY QUESTIONS:
- quais arquivos representam o estado atual do projeto?
- eles estao atualizados localmente?
- o Google Drive esta configurado e acessivel?
- qual pasta do Drive deve receber cada categoria de arquivo?

INPUTS TO INSPECT:
- credenciais OAuth2 do Google Drive API
- ID da pasta raiz no Drive
- lista de arquivos/pastas a sincronizar
- frequencia desejada (manual, pos-commit, agendada)

DECISION LOGIC:
1. Verificar se credenciais do Google Drive estao disponiveis via env:
   - GOOGLE_DRIVE_CLIENT_ID
   - GOOGLE_DRIVE_CLIENT_SECRET
   - GOOGLE_DRIVE_REFRESH_TOKEN
   - GOOGLE_DRIVE_FOLDER_ID
2. Se disponiveis: preparar a sincronizacao
3. Se nao disponiveis: gerar instrucao de configuracao e manter o script em modo de preparo
4. Categorizar arquivos por destino:
   - /TatameOS/prompts/ -> skills, runbooks, playbooks
   - /TatameOS/reports/ -> relatorios de auditoria
   - /TatameOS/maps/ -> mapas de arquitetura e rotas
   - /TatameOS/library/ -> biblioteca de tecnicas BJJ
   - /TatameOS/contracts/ -> contratos de dados e API
5. Para cada arquivo:
   - verificar se ja existe no Drive
   - comparar data de modificacao
   - so subir se tiver mudanca real
   - nunca sobrescrever sem backup

STRUCTURE IN DRIVE:
/TatameOS/
  /prompts/
    /skills/
    /runbooks/
    /playbooks/
    /maps/
    /contracts/
    /standards/
  /reports/
    /audit/
    /release/
  /library/
    /bjj-techniques/
  /changelog/

ARQUIVOS PRIORITARIOS PARA SYNC:
- prompts/README.md
- prompts/skills/_entry-router.md
- prompts/skills/_activation-order.md
- prompts/maps/system-reality-map.md
- prompts/maps/routes-and-user-flows-map.md
- prompts/contracts/environment-contract.md
- src/data/bjj-library/ (quando existir)
- qualquer arquivo audit_report.md gerado

CREATE ALSO:
scripts/sync-to-drive.ts

Script que:
- le as variaveis de env
- usa googleapis para autenticar com OAuth2
- prepara os arquivos listados
- registra o log de sync em prompts/sync-log.md
- nunca expoe credencial no log
- nao finge upload quando o upload real ainda nao estiver implementado

REQUIRED CHECKLIST:
[ ] credenciais configuradas ou instrucao gerada?
[ ] estrutura de pastas no Drive definida?
[ ] lista de arquivos prioritarios mapeada?
[ ] script de sync criado?
[ ] log de sync configurado?
[ ] nenhuma credencial exposta?
[ ] backup antes de sobrescrever?

RED FLAGS:
- credenciais hardcoded em qualquer arquivo
- sync sobrescrevendo sem verificar data
- arquivo de env ou secret subindo para o Drive
- falha silenciosa sem log

FORBIDDEN MOVES:
- subir .env para o Drive
- subir node_modules ou dist
- subir arquivos com secrets
- sobrescrever sem verificar mudanca real
- fazer sync sincronico bloqueando execucao principal
- usar service account nesta fase

REQUIRED OUTPUT:
Para cada execucao:
- lista de arquivos sincronizados
- lista de arquivos ignorados (sem mudanca)
- lista de erros
- link da pasta raiz no Drive
- timestamp do sync
- log salvo em prompts/sync-log.md

ESCALATION RULES:
- se credenciais ausentes:
  gerar guia de configuracao em prompts/runbooks/google-drive-setup.md
- se Drive inacessivel:
  registrar erro, nao travar execucao principal
- se arquivo muito grande:
  comprimir antes de subir

DEFINITION OF DONE:
A skill esta completa quando:
- o script scripts/sync-to-drive.ts existe e esta tipado
- as pastas no Drive estao estruturadas ou documentadas
- o runbook de configuracao existe
- o log de sync funciona
- nenhum secret e exposto

GUIDING PRINCIPLE:
O conhecimento do projeto nao pode ficar preso em uma maquina. Ele precisa estar acessivel para qualquer agente, ferramenta ou colaborador, em qualquer momento.
