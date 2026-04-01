'use client';

import { useEffect } from 'react';
import { usePresencas } from '../../modules/presencas/hooks/usePresencas';

function formatDateTime(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

function PresencaSkeleton() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 pb-32 pt-24 md:px-6">
      <section className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-36 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="h-[34rem] animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
        <div className="h-[34rem] animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
      </section>
    </main>
  );
}

export default function PresencaDaTurma() {
  const {
    alunos,
    loading,
    error,
    historico,
    historicoLoading,
    historicoError,
    registrandoId,
    metrics,
    carregar,
    carregarHistorico,
    registrarPresenca,
  } = usePresencas();

  useEffect(() => {
    void carregarHistorico({ limite: 8 });
  }, [carregarHistorico]);

  if (loading && alunos.length === 0) {
    return <PresencaSkeleton />;
  }

  if (error && alunos.length === 0) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Presença da turma</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Chamada indisponível</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{error}</p>
          <button
            type="button"
            onClick={() => void carregar()}
            className="mt-6 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Tentar novamente
          </button>
        </section>
      </main>
    );
  }

  const alunosAtivos = alunos.filter((aluno) => aluno.status === 'Ativo');

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Chamada real
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Presença da turma
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              A lista abaixo vem do cadastro real de alunos ativos no tenant atual. Cada presença registrada alimenta o
              histórico de frequência.
            </p>
          </div>
          <button
            type="button"
            onClick={() => void carregar()}
            className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Atualizar turma
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Alunos ativos</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{metrics.total}</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Prontos</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{metrics.prontos}</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Histórico</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{historico.length}</p>
        </article>
      </section>

      {error ? (
        <section className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4 text-sm leading-7 text-zinc-300">
          {error}
        </section>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Roster</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Alunos da aula</h2>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {alunosAtivos.length} ativo(s)
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {alunosAtivos.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">group_off</span>
                <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhum aluno ativo</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  O tenant atual não possui alunos ativos carregados para a chamada.
                </p>
              </div>
            ) : (
              alunosAtivos.map((aluno) => (
                <article key={aluno.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                          {aluno.status}
                        </span>
                        <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                          {aluno.faixa} · grau {aluno.grau}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-black uppercase tracking-tight text-white">{aluno.nome}</h3>
                      <p className="mt-1 text-sm leading-7 text-zinc-400">{aluno.email}</p>
                    </div>

                    <button
                      type="button"
                      disabled={registrandoId === aluno.id}
                      onClick={() => void registrarPresenca(aluno.id)}
                      className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {registrandoId === aluno.id ? 'Registrando...' : 'Registrar presença'}
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Histórico recente</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Últimos registros</h2>
            </div>
            <button
              type="button"
              onClick={() => void carregarHistorico({ limite: 8 })}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              Atualizar
            </button>
          </div>

          {historicoLoading ? (
            <div className="mt-6 space-y-3">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              ))}
            </div>
          ) : historicoError ? (
            <div className="mt-6 rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4 text-sm leading-7 text-zinc-300">
              {historicoError}
            </div>
          ) : historico.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-4xl text-zinc-400">history</span>
              <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Sem histórico ainda</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Assim que presenças forem registradas, o histórico recente aparece aqui.
              </p>
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {historico.map((item) => (
                <article key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-tight text-white">{item.alunoNome}</p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        {formatDateTime(item.data)}
                      </p>
                    </div>
                    <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                      +{item.horasIncrementadas.toFixed(1)}h
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
