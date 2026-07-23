# TatameOS — Pacote Operacional

## Perfil confirmado

React/Vite/TypeScript, Firebase, Supabase, Google APIs e PWA. O projeto possui sinais de multi-tenant, academias, papéis, conteúdo e integrações Google/YouTube.

## Prioridades

1. definir fonte da verdade entre Firebase, Supabase e serviços Google;
2. auditar tenant/academia, membros, papéis e permissões;
3. cobrir aluno, instrutor, presença, graduação, plano, cobrança e conteúdo conforme implementação real;
4. validar PWA, offline, sincronização e conflitos;
5. segurança de credenciais, funções administrativas e dados de menores quando aplicável;
6. testes de tenant, integrações e release.

## Skills

`renova-aura-requirements-completeness-auditor`, `renova-aura-data-contract-field-auditor`, `renova-aura-workflow-integration-auditor`, `renova-aura-domain-invariant-guardian`, `renova-aura-security-data-guardian`, `renova-aura-accessibility-mobile-qa`, `renova-aura-quality-release`.

## Pedidos simples

- “Veja se Firebase e Supabase estão duplicando ou contradizendo dados.”
- “Confira se academia, aluno, instrutor e papéis estão isolados por tenant.”
- “Audite o que acontece offline e como os dados sincronizam depois.”
- “Veja se presença, graduação e conteúdo têm todos os campos necessários.”

## Gates

Não executar deploy Firebase/Vercel, provisionamento real, sincronização externa ou acesso a credenciais. O repositório é público: não registrar dados internos, clientes, tokens ou decisões confidenciais.