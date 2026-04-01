# Conversion Copy Engine

## TITLE
Conversion Copy Engine

## PURPOSE
Make TatameOS copy clear, trustworthy, and action-oriented without exaggeration.

## WHEN TO ACTIVATE
Activate when onboarding, CTA text, error text, empty state text, or product messaging changes.

## PRIMARY QUESTIONS
- What must remain true?
- What can break if we change this now?
- What does the workspace already show that we must respect?
- What should the user do next?
- Does the text build trust or confusion?
- Is there a simpler sentence with the same meaning?

## INPUTS TO INSPECT
- buttons, titles, and onboarding text
- error copy and microcopy
- product messaging and CTA surfaces
- dashboard, login, check-in, and invite copy
- living maps, contracts, and standards already in prompts/
- current diff, tests, and runtime evidence

## DECISION LOGIC
Use language that makes the action obvious, trustworthy, and worth taking. If the copy can mislead the user into thinking a feature is done when it is not, rewrite it.
If evidence is missing, inspect the workspace before editing.

## REQUIRED CHECKLIST
- The cause is named before the fix.
- The smallest safe change is preferred.
- The change respects tenant isolation and truthfulness.
- The change remains reversible or clearly documented.
- copy is clear
- copy builds trust
- CTA is direct
- technical noise is reduced
- the user action is obvious without extra explanation
- empty/error states explain what happens next

## RED FLAGS
- false green or misleading success
- hidden coupling or boundary leaks
- unsafe fallback or silent failure
- missing validation or missing evidence

## FORBIDDEN MOVES
- do not invent env, contracts, or dependencies
- do not bypass security or tenant controls
- do not skip validation to save time
- do not rewrite when a smaller safe fix is enough

## REQUIRED OUTPUT
- copy issue
- user action affected
- correction applied
- validation result
- residual risk

## ESCALATION RULES
- escalate if security, tenant isolation, data loss, or release safety is at risk
- escalate if the runtime truth is unclear
- escalate if the fix would be irreversible or broad

## DEFINITION OF DONE
- the behavior is truthful
- the change is validated against the current workspace
- the result is reversible or explicitly bounded
- the status is honest, including skips or blockers
- the text improves action or trust, not just style

## HOW THIS APPLIES TO TATAMEOS
- Copy must match the real operational surfaces of the app: login, onboarding, dashboard, QR check-in, professor call, alerts, and feedback.
- The product language should feel like a training system: direct, disciplined, and supportive, not like generic SaaS copy.
- Technical terms like `tenantId`, claims, or Firestore should stay in developer surfaces unless the user truly needs that detail to recover from an error.
- The copy must explain who acts next: aluno, professor, admin, or the system.

## REAL PROJECT CASES
- Login screen: `Entrar`, `Criar conta`, `Esqueci minha senha`, and the error messages for invalid e-mail, weak password, and no network.
- Student dashboard: `Registrar treino`, `Abrir check-in`, `Ver trilhas`, `Relatar nova falha`, `Novo feedback`.
- Professor area: `Validar QR`, `Marcar lida`, `Revisar feedbacks`, `Criar novo aviso`.
- Admin onboarding: `Criar academia`, `Convide sua equipe`, `Ir para configuração`.
- System feedback: `Usuário autenticado sem tenantId nas claims do Firebase`, `QR Code expirado`, `Apenas professor ou admin podem validar o QR`.

## COMMON ERRORS IN THIS PROJECT
- Copy that says success when the data is still loading or missing.
- Generic SaaS language that ignores the jiu-jitsu domain and the operational nature of the app.
- Error text that names the failure but not the next step.
- CTA labels that sound decorative instead of actionable.

## MANDATORY PROJECT PATTERNS
- Use short, concrete verbs for primary actions.
- Explain failure in one sentence, then tell the user what to do next.
- Keep onboarding copy about setting up a real academy, not about abstract platform value.
- Keep alerts and notifications readable in one glance.
- When copy touches tenant or auth, it must be honest about whether the user can recover from the current screen.

## GUIDING PRINCIPLE
Copy should guide action, not decorate it.

FIM

