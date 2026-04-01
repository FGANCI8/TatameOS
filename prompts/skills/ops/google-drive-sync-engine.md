TITLE: Google Drive Sync Engine — Renova Aura

PURPOSE:
Exportar e sincronizar automaticamente o estado do projeto TatameOS para o Google Drive, permitindo que qualquer ferramenta, agente ou colaborador acesse relatórios, mapas, skills, contratos, biblioteca de técnicas e estado do produto sem depender do ambiente local.

WHEN TO ACTIVATE:
- após qualquer commit relevante
- após auditoria técnica ou de produto
- após geração de relatório de release
- quando outro agente ou ferramenta precisar consultar o estado
- quando o usuário pedir sincronização explícita

PRIMARY QUESTIONS:
- quais arquivos representam o estado atual do projeto?
- eles estão atualizados localmente?
- o Google Drive está configurado e acessível?
- qual pasta do Drive deve receber cada categoria de arquivo?

INPUTS TO INSPECT:
- credenciais de acesso ao Google Drive API
  (service account ou OAuth2)
- ID da pasta raiz no Drive
- lista de arquivos/pastas a sincronizar
- frequência desejada (manual, pós-commit, agendada)

DECISION LOGIC:
1. Verificar se credenciais do Google Drive estão disponíveis via env:
   - GOOGLE_DRIVE_CLIENT_ID
   - GOOGLE_DRIVE_CLIENT_SECRET
   - GOOGLE_DRIVE_REFRESH_TOKEN
   - GOOGLE_DRIVE_FOLDER_ID
2. Se disponíveis: executar sincronização
3. Se não disponíveis: gerar instrução de configuração e preparar o script de sync para quando estiver pronto
4. Categorizar arquivos por destino:
   - /TatameOS/prompts/ → skills, runbooks, playbooks
   - /TatameOS/reports/ → relatórios de auditoria
   - /TatameOS/maps/ → mapas de arquitetura e rotas
   - /TatameOS/library/ → biblioteca de técnicas BJJ
   - /TatameOS/contracts/ → contratos de dados e API
5. Para cada arquivo:
   - verificar se já existe no Drive
   - comparar data de modificação
   - só subir se tiver mudança real
   - nunca sobrescrever sem backup

ESTRUTURA NO DRIVE:
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

ARQUIVOS PRIORITÁRIOS PARA SYNC:
- prompts/README.md
- prompts/skills/_entry-router.md
- prompts/skills/_activation-order.md
- prompts/maps/system-reality-map.md
- prompts/maps/routes-and-user-flows-map.md
- prompts/contracts/environment-contract.md
- src/data/bjj-library/ (quando existir)
- qualquer arquivo audit_report.md gerado

CRIAR TAMBÉM:
scripts/sync-to-drive.ts

Script que:
- lê as variáveis de env
- usa googleapis para autenticar
- sobe os arquivos listados
- registra o log de sync em prompts/sync-log.md
- nunca expõe credencial no log

REQUIRED CHECKLIST:
[ ] credenciais configuradas ou instrução gerada?
[ ] estrutura de pastas no Drive definida?
[ ] lista de arquivos prioritários mapeada?
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
- sobrescrever sem verificar mudança real
- fazer sync síncrono bloqueando execução principal

REQUIRED OUTPUT:
Para cada execução:
- lista de arquivos sincronizados
- lista de arquivos ignorados (sem mudança)
- lista de erros
- link da pasta raiz no Drive
- timestamp do sync
- log salvo em prompts/sync-log.md

ESCALATION RULES:
- se credenciais ausentes:
  gerar guia de configuração em prompts/runbooks/google-drive-setup.md
- se Drive inacessível:
  registrar erro, não travar execução principal
- se arquivo muito grande:
  comprimir antes de subir

DEFINITION OF DONE:
A skill está completa quando:
- o script scripts/sync-to-drive.ts existe e está tipado
- as pastas no Drive estão estruturadas ou documentadas
- o runbook de configuração existe
- o log de sync funciona
- nenhum secret é exposto

GUIDING PRINCIPLE:
O conhecimento do projeto não pode ficar preso em uma máquina. Ele precisa estar acessível para qualquer agente, ferramenta ou colaborador, em qualquer momento.
