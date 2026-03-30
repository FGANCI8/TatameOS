import { Link } from 'react-router-dom';
import { useAssinaturaAluno } from '../../../modules/stripe/hooks/useAssinaturaAluno';

function formatDate(value?: Date | null) {
  if (!value) return '--';

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

export default function AssinaturaContent() {
  const { portal, loading, error, actions } = useAssinaturaAluno();

  if (loading && !portal) {
    return (
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="space-y-3">
            <div className="h-3 w-28 animate-pulse rounded-full bg-zinc-800/60" />
            <div className="h-8 w-64 animate-pulse rounded-2xl bg-zinc-800/60" />
            <div className="h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </section>

        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="space-y-3">
            <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
            <div className="h-7 w-56 animate-pulse rounded-2xl bg-zinc-800/60" />
          </div>
          <div className="mt-6 space-y-3">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (error || !portal) {
    return (
      <div className="rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Assinatura</p>
        <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Não foi possível carregar</h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">{error || 'Nenhuma assinatura encontrada.'}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => void actions.refresh()}
            className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Atualizar dados
          </button>
          <Link
            to="/dashboard-do-aluno"
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
          >
            Voltar ao painel
          </Link>
        </div>
      </div>
    );
  }

  const statusAssinatura = portal.assinaturaAtual?.status || 'sem_assinatura';
  const portalLink = portal.customerPortalUrl;

  return (
    <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Resumo atual</p>
        <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">{portal.alunoNome}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-400">
              Faixa {portal.faixa} · Status {portal.statusAluno} · Financeiro {portal.statusFinanceiro}
            </p>
          </div>
          <span className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${statusTone(statusAssinatura)}`}>
            {statusAssinatura}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Mensalidade</p>
            <p className="mt-2 text-3xl font-black text-white">
              {portal.valorMensalidade.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Status financeiro</p>
            <p className="mt-2 text-3xl font-black uppercase text-white">{portal.statusFinanceiro}</p>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo ciclo</p>
            <p className="mt-2 text-xl font-black uppercase tracking-tight text-white">
              {formatDate(portal.assinaturaAtual?.currentPeriodEnd)}
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Customer</p>
            <p className="mt-2 text-xl font-black uppercase tracking-tight text-white">
              {portal.customer ? 'Sincronizado' : 'Ainda não criado'}
            </p>
          </article>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-5 text-sm leading-7 text-zinc-400">
          O portal centraliza o histórico básico da sua assinatura e mantém o acesso ao Customer Portal oficial do Stripe, quando configurado pelo time da academia.
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          {portalLink ? (
            <a
              href={portalLink}
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
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Histórico básico</p>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Eventos recentes</h2>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
            {portal.eventosRecentes.length} evento(s)
          </span>
        </div>

        <div className="mt-6 space-y-3">
          {portal.eventosRecentes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-4xl text-zinc-400">receipt_long</span>
              <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Sem eventos ainda</p>
              <p className="mt-2 text-sm text-zinc-400">Quando houver cobrança ou atualização da assinatura, o histórico aparece aqui.</p>
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

        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Última sincronização</p>
          <p className="mt-2 text-sm leading-7 text-zinc-300">
            {formatDate(portal.assinaturaAtual?.updatedAt || portal.customer?.updatedAt || null)}
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/dashboard-do-aluno/feedbacks"
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
          >
            Falar com o professor
          </Link>
          <Link
            to="/dashboard-do-aluno"
            className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Voltar ao painel
          </Link>
        </div>
      </section>
    </div>
  );
}
