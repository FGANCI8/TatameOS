import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useNotifications } from '../modules/notificacoes/hooks/useNotifications';
import type { NotificacaoTipo } from '../modules/notificacoes/types';

type NotificationCenterWidgetProps = {
  title?: string;
  subtitle?: string;
  tipos?: NotificacaoTipo[];
  limite?: number;
  emptyActionLabel?: string;
  emptyActionTo?: string;
};

function typeTone(tipo: string) {
  switch (tipo) {
    case 'alerta':
      return 'border-brand-red/20 bg-brand-red/10 text-brand-red';
    case 'sucesso':
    case 'info':
    default:
      return 'border-zinc-800 bg-zinc-950/60 text-zinc-300';
  }
}

export function NotificationCenterWidget({
  title = 'Central de alertas',
  subtitle = 'Notificações da sua academia',
  tipos,
  limite = 5,
  emptyActionLabel = 'Novo aviso',
  emptyActionTo = '/area-do-professor/avisos',
}: NotificationCenterWidgetProps) {
  const { notificacoes, loading, error, actions } = useNotifications(limite);

  const notificacoesFiltradas = useMemo(
    () => (tipos?.length ? notificacoes.filter((notificacao) => tipos.includes(notificacao.tipo)) : notificacoes),
    [notificacoes, tipos],
  );

  const naoLidasFiltradas = useMemo(
    () => notificacoesFiltradas.filter((item) => !item.lida).length,
    [notificacoesFiltradas],
  );

  return (
    <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-5 shadow-none md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{subtitle}</p>
          <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-white">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
              naoLidasFiltradas > 0
                ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
                : 'border-zinc-800 bg-zinc-950/60 text-zinc-300'
            }`}
          >
            <span className="material-symbols-outlined mr-1 text-[14px]">notifications</span>
            {naoLidasFiltradas} novas
          </span>
          <button
            type="button"
            onClick={() => void actions.refresh()}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-200 transition duration-200 hover:scale-105 hover:bg-zinc-800"
          >
            Atualizar
          </button>
        </div>
      </div>

      {loading ? (
        <div className="mt-5 space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      ) : error ? (
        <div className="mt-5 rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-red">
          {error}
        </div>
      ) : notificacoesFiltradas.length === 0 ? (
        <div className="mt-5 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
          <span className="material-symbols-outlined text-3xl text-zinc-400">notifications_off</span>
          <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-white">Sem alertas no momento</p>
          <p className="mt-2 text-sm text-zinc-400">Quando algo importante acontecer, a central vai aparecer aqui.</p>
          {emptyActionTo ? (
            <Link
              to={emptyActionTo}
              className="mt-4 inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              {emptyActionLabel}
            </Link>
          ) : null}
        </div>
      ) : (
        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
              {naoLidasFiltradas} pendente(s)
            </p>
            {naoLidasFiltradas > 0 ? (
              <button
                type="button"
                onClick={() => void actions.marcarTodasComoLidas()}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-200 transition duration-200 hover:scale-105 hover:bg-zinc-800"
              >
                Marcar todas como lidas
              </button>
            ) : null}
          </div>

          {notificacoesFiltradas.map((notificacao) => (
            <article
              key={notificacao.id}
              className={`rounded-2xl border p-4 shadow-none ${
                notificacao.lida ? 'border-zinc-800 bg-zinc-950/60' : 'border-zinc-700 bg-zinc-900'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${typeTone(
                        notificacao.tipo,
                      )}`}
                    >
                      {notificacao.tipo}
                    </span>
                    {!notificacao.lida ? (
                      <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-950/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        Não lida
                      </span>
                    ) : null}
                  </div>
                  <h4 className="mt-3 text-sm font-black uppercase tracking-tight text-white">{notificacao.titulo}</h4>
                  <p className="mt-1 text-sm text-zinc-400">{notificacao.mensagem}</p>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
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
                    className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
                  >
                    Marcar lida
                  </button>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
