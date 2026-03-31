import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useConvitesManagement } from '../../../modules/convites/hooks/useConvitesManagement';
import type { ConviteListItem } from '../../../modules/convites/types';

function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(new Date(value));
}

function getStatusInfo(convite: ConviteListItem) {
  const now = Date.now();
  const isExpired = convite.status === 'expirado' || (convite.status === 'pendente' && new Date(convite.expiresAt).getTime() <= now);

  if (convite.status === 'consumido') {
    return { label: 'Aceito', tone: 'border-zinc-700 bg-zinc-900 text-zinc-300' };
  }

  if (convite.status === 'revogado') {
    return { label: 'Revogado', tone: 'border-zinc-700 bg-zinc-900 text-zinc-300' };
  }

  if (isExpired) {
    return { label: 'Expirado', tone: 'border-zinc-700 bg-zinc-900 text-zinc-300' };
  }

  return { label: 'Pendente', tone: 'border-brand-red/20 bg-brand-red/10 text-brand-red' };
}

export default function SuperAdminConvitesPage() {
  const {
    isAdmin,
    convites,
    metrics,
    loading,
    actionLoadingToken,
    error,
    success,
    carregarConvites,
    reenviarConvite,
    revogarConvite,
  } = useConvitesManagement();

  const resumo = useMemo(
    () => [
      { label: 'Total', value: metrics.total },
      { label: 'Pendentes', value: metrics.pending },
      { label: 'Expirados', value: metrics.expired },
      { label: 'Aceitos', value: metrics.accepted },
    ],
    [metrics],
  );

  if (!isAdmin) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 text-center">
          <span className="material-symbols-outlined text-5xl text-brand-red">lock</span>
          <h1 className="mt-4 text-3xl font-black uppercase tracking-tight text-white">Acesso restrito</h1>
          <p className="mt-3 text-sm text-zinc-400">Apenas administradores podem acessar o painel de gestão de convites.</p>
          <Link
            to="/boas-vindas"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-xs font-black uppercase tracking-[0.2em] text-brand-red transition hover:bg-brand-red/20 sm:w-auto"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 pb-28 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">
              Painel de Convites
            </span>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Gestão de Convites</h1>
              <p className="mt-2 max-w-2xl text-sm text-zinc-400">
                Acompanhe pendências, reenvie convites e revogue acessos com leitura rápida do estado da operação.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/super-admin/onboarding"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">add_business</span>
              Novo onboarding
            </Link>
            <button
              type="button"
              onClick={() => void carregarConvites()}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Atualizar
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-300">
            {success}
          </div>
        )}

        <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {resumo.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border px-4 py-4 ${
                item.label === 'Pendentes' && metrics.pending > 0 ? 'border-brand-red/20 bg-brand-red/10' : 'border-zinc-800 bg-zinc-950/60'
              }`}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{item.label}</p>
              <p className="mt-2 text-3xl font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-4">
        <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-white">Convites enviados</h2>
            <p className="text-sm text-zinc-400">Mais recentes primeiro, com ações rápidas por item.</p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        ) : convites.length === 0 ? (
          <div className="rounded-[28px] border border-dashed border-zinc-800 bg-zinc-900/80 p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-brand-red">mail</span>
            <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhum convite encontrado</p>
            <p className="mt-2 text-sm text-zinc-400">
              Os convites criados pelo onboarding aparecerão aqui para gestão administrativa.
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {convites.map((convite) => {
              const statusInfo = getStatusInfo(convite);
              const isBusy = actionLoadingToken === convite.token;
              const canReenviar = convite.status === 'pendente' || convite.status === 'expirado';
              const canRevogar = convite.status === 'pendente' || convite.status === 'expirado';

              return (
                <article
                  key={convite.id}
                  className={`rounded-2xl border ${convite.status === 'pendente' && new Date(convite.expiresAt).getTime() <= Date.now() ? 'border-zinc-700 bg-zinc-950/60' : 'border-zinc-800 bg-zinc-950/60'} p-4`}
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="font-bold text-white">{convite.email}</div>
                        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${statusInfo.tone}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {convite.academyName} · {convite.role === 'admin' ? 'Administrador' : 'Professor'}
                      </div>
                      <div className="break-all text-[11px] text-zinc-500">{convite.tenantId}</div>
                      <div className="text-sm text-zinc-400">
                        Enviado em {formatDate(convite.createdAt)} · expira em {formatDate(convite.expiresAt)}
                      </div>
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      <button
                        type="button"
                        disabled={!canReenviar || isBusy}
                        onClick={() => void reenviarConvite(convite.token)}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-3 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <span className="material-symbols-outlined text-[16px]">send</span>
                        {isBusy ? 'Processando' : 'Reenviar'}
                      </button>
                      <button
                        type="button"
                        disabled={!canRevogar || isBusy}
                        onClick={() => void revogarConvite(convite.token)}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-3 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-100 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        <span className="material-symbols-outlined text-[16px]">block</span>
                        Revogar
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
