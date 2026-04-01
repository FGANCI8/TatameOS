'use client';

import { Link } from 'react-router-dom';
import { useAssinaturaAluno } from '../../modules/stripe/hooks/useAssinaturaAluno';

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatDate(value?: Date | null) {
  if (!value) {
    return '--';
  }

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

function statusTone(status?: string) {
  switch (status) {
    case 'active':
    case 'trialing':
      return 'border-brand-red/20 bg-brand-red/10 text-brand-red';
    case 'past_due':
    case 'unpaid':
    case 'paused':
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-200';
    case 'canceled':
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-400';
    default:
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-300';
  }
}

function FinanceiroSkeleton() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="space-y-3">
          <div className="h-3 w-28 animate-pulse rounded-full bg-zinc-800/60" />
          <div className="h-10 w-72 animate-pulse rounded-2xl bg-zinc-800/60" />
          <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      </section>
      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="h-72 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
        <div className="h-72 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
      </section>
    </main>
  );
}

export default function FinanceiroEMensalidade() {
  const { portal, loading, error, actions } = useAssinaturaAluno();

  if (loading && !portal) {
    return <FinanceiroSkeleton />;
  }

  if (error || !portal) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Financeiro</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Resumo indisponível</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-300">
            {error || 'Não foi possível carregar os dados de assinatura do tenant atual.'}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => void actions.refresh()}
              className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
            >
              Tentar novamente
            </button>
            <Link
              to="/dashboard-do-aluno/assinatura"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              Abrir assinatura
            </Link>
          </div>
        </section>
      </main>
    );
  }

  const assinatura = portal.assinaturaAtual;
  const statusFinanceiro = portal.statusFinanceiro;
  const statusAssinatura = assinatura?.status || 'sem_assinatura';

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Resumo financeiro real
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Financeiro e mensalidade
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Os valores abaixo vêm do portal de assinatura do aluno no tenant atual. Nada de número inventado.
            </p>
          </div>

          <div className={`rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] ${statusTone(statusAssinatura)}`}>
            {statusAssinatura}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Mensalidade</p>
          <p className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
            {formatCurrency(portal.valorMensalidade)}
          </p>
          <p className="mt-2 text-xs text-zinc-500">Valor vinculado ao cadastro financeiro real.</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Status financeiro</p>
          <p className="mt-2 text-3xl font-black uppercase tracking-tight text-white">{statusFinanceiro}</p>
          <p className="mt-2 text-xs text-zinc-500">Sincronizado com a assinatura e o perfil do aluno.</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo ciclo</p>
          <p className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
            {formatDate(assinatura?.currentPeriodEnd || null)}
          </p>
          <p className="mt-2 text-xs text-zinc-500">Quando disponível, vem do Stripe real do tenant.</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Eventos recebidos</p>
          <p className="mt-2 text-3xl font-black uppercase tracking-tight text-white">{portal.eventosRecentes.length}</p>
          <p className="mt-2 text-xs text-zinc-500">Histórico financeiro já persistido.</p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Resumo do aluno</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">{portal.alunoNome}</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Faixa {portal.faixa} · Status do aluno {portal.statusAluno}
              </p>
            </div>
            <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${statusTone(statusAssinatura)}`}>
              {statusAssinatura}
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Customer</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {portal.customer ? 'Sincronizado' : 'Ainda não criado'}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Portal</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {portal.customerPortalUrl ? 'Disponível' : 'Indisponível'}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-5 text-sm leading-7 text-zinc-400">
            Este painel não inventa cobrança. Ele mostra o que já existe no Stripe e no perfil do aluno, com estados
            honestos quando ainda não houver evento.
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {portal.customerPortalUrl ? (
              <a
                href={portal.customerPortalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
                Abrir Customer Portal
              </a>
            ) : (
              <button
                type="button"
                disabled
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-400"
              >
                Customer Portal indisponível
              </button>
            )}
            <button
              type="button"
              onClick={() => void actions.refresh()}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Atualizar
            </button>
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Eventos recentes</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Últimos sinais Stripe</h2>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {portal.eventosRecentes.length} evento(s)
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {portal.eventosRecentes.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">receipt_long</span>
                <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Sem eventos financeiros</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Quando cobrança, assinatura ou pagamento acontecerem, o histórico aparece aqui.
                </p>
              </div>
            ) : (
              portal.eventosRecentes.map((evento) => (
                <article key={evento.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                            evento.status === 'processed'
                              ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
                              : 'border-zinc-800 bg-zinc-900/80 text-zinc-300'
                          }`}
                        >
                          {evento.action || evento.type}
                        </span>
                        <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          {evento.status || 'pending'}
                        </span>
                      </div>
                      <h3 className="mt-3 text-sm font-black uppercase tracking-tight text-white">{evento.type}</h3>
                      <p className="mt-2 text-sm leading-7 text-zinc-400">
                        Recebido em {formatDate(evento.receivedAt)} · {evento.customerId || 'cliente não informado'}
                      </p>
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                      {evento.subscriptionId || 'sem assinatura'}
                    </p>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3 rounded-[28px] border border-zinc-800/80 bg-zinc-950/60 p-6 md:flex-row md:items-center md:justify-between md:p-8">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Próximo passo</p>
          <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Abrir assinatura completa</h3>
          <p className="mt-2 text-sm leading-7 text-zinc-400">
            A tela completa de assinatura concentra mais detalhes de billing e sincronização.
          </p>
        </div>
        <Link
          to="/dashboard-do-aluno/assinatura"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          Ver assinatura
        </Link>
      </section>
    </main>
  );
}
