# TatameOS — Auditoria de Campos, Dados e Integrações

```text
Audite o TatameOS somente em leitura. Leia package, rotas, types, services, Firebase, Supabase, Google APIs, PWA, scripts de provisionamento/sync e testes.

Primeiro descubra quais módulos estão realmente implementados. Depois rastreie:
- organização/academia/unidade, tenant, domínio, status e configurações;
- usuário, membro, aluno, instrutor, responsável e papéis;
- matrícula/plano, vigência, status, cobrança quando existir;
- modalidade, turma, horário, capacidade, local e presença;
- graduação/faixa, critérios, histórico e responsável pela alteração;
- conteúdo/vídeo/YouTube/Drive: external_id, owner, visibilidade, sincronização e falhas;
- PWA/offline: versão local, updated_at, conflito, fila, retry e reconciliação;
- Firebase versus Supabase: entidade dona, IDs cruzados, duplicação, consistência e migração;
- auditoria, tenant isolation, dados de menores e retenção.

Para cada campo, trace captura → validação → autorização → fonte da verdade → sincronização → UI/relatório → lifecycle. Marque campos assumidos mas inexistentes, IDs incompatíveis, estados divergentes e integrações sem reconciliação.

Entregue matriz por entidade/camada, fonte da verdade recomendada, blockers, testes de tenant/offline/sync e plano. Não provisionar, sincronizar ou fazer deploy real.
```