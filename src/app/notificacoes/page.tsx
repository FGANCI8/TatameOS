import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useNotifications } from '../../modules/notificacoes/hooks/useNotifications';
import type { NotificacaoTipo } from '../../modules/notificacoes/types';

function toneClass(tipo: NotificacaoTipo) {
  switch (tipo) {
    case 'alerta':
      return 'border-brand-red/20 bg-brand-red/10 text-brand-red';
    case 'sucesso':
      return 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300';
    case 'info':
    default:
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-300';
  }
}

function NotificationSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/80" />
          <div className="mt-4 h-5 w-3/4 animate-pulse rounded-full bg-zinc-800/80" />
          <div className="mt-3 h-4 w-full animate-pulse rounded-full bg-zinc-800/60" />
          <div className="mt-3 h-4 w-2/3 animate-pulse rounded-full bg-zinc-800/60" />
        </div>
      ))}
    </div>
  );
}

export default function NotificacoesPage() {
  const { isAuthenticated, tenantId } = useAuth();
  const { notificacoes, loading, error, total, naoLidas, actions } = useNotifications(8);

  const hasContext = isAuthenticated && Boolean(tenantId);

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Telemetry // 04</p>
            <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Alertas reais
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
              Tudo que chega para você no tenant atual, com leitura honesta de lido, não lido e atualização manual.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/dashboard-do-aluno"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-zinc-800"
            >
              Voltar ao dashboard
            </Link>
            {hasContext ? (
              <button
                type="button"
                onClick={() => void actions.refresh()}
                className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition hover:bg-brand-red/20"
              >
                Atualizar feed
              </button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Total</p>
          <p className="mt-2 text-4xl font-black text-white">{total}</p>
        </div>
        <div className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Não lidas</p>
          <p className="mt-2 text-4xl font-black text-white">{naoLidas}</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Escopo</p>
          <p className="mt-2 text-sm font-black uppercase tracking-tight text-white">Tenant atual</p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Feed</p>
          <p className="mt-2 text-sm font-black uppercase tracking-tight text-white">Atualização sob demanda</p>
        </div>
      </section>

      {!hasContext ? (
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Contexto ausente</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
            Entre no app para ver seus alertas
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
            Esta tela depende de autenticação e tenant para mostrar notificações reais.
          </p>
        </section>
      ) : loading && notificacoes.length === 0 ? (
        <NotificationSkeleton />
      ) : error ? (
        <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-red">Falha ao carregar</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
            Não foi possível montar o feed
          </h2>
          <p className="mt-3 text-sm leading-7 text-zinc-200">{error}</p>
        </section>
      ) : notificacoes.length === 0 ? (
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sem alertas</p>
          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight text-white">
            Seu feed está limpo por enquanto
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
            Quando houver aviso, feedback ou lembrete relevante, ele aparece aqui sem inventar conteúdo.
          </p>
        </section>
      ) : (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
              {naoLidas} pendente(s) no tenant atual
            </p>
            {naoLidas > 0 ? (
              <button
                type="button"
                onClick={() => void actions.marcarTodasComoLidas()}
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-zinc-800"
              >
                Marcar todas como lidas
              </button>
            ) : null}
          </div>

          <div className="space-y-4">
            {notificacoes.map((notificacao) => (
              <article
                key={notificacao.id}
                className={`rounded-[28px] border p-6 shadow-none md:p-8 ${
                  notificacao.lida ? 'border-zinc-800/80 bg-zinc-900/80' : 'border-zinc-700 bg-zinc-900'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${toneClass(
                        notificacao.tipo,
                      )}`}
                    >
                      {notificacao.tipo}
                    </span>
                    <h3 className="text-2xl font-black uppercase tracking-tight text-white">{notificacao.titulo}</h3>
                    <p className="max-w-2xl text-sm leading-7 text-zinc-400">{notificacao.mensagem}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                      {new Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      }).format(notificacao.createdAt)}
                    </p>
                  </div>

                  {!notificacao.lida ? (
                    <button
                      type="button"
                      onClick={() => void actions.marcarComoLida(notificacao.id)}
                      className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition hover:bg-brand-red/20"
                    >
                      Marcar lida
                    </button>
                  ) : (
                    <span className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300">
                      Lida
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
