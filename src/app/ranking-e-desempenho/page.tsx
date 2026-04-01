'use client';

import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCampeonato } from '../../hooks/useCampeonato';

function formatPercent(value: number | null) {
  if (value === null || Number.isNaN(value)) {
    return '--';
  }

  return `${value.toFixed(1)}%`;
}

function RankingSkeleton() {
  return (
    <main className="mx-auto max-w-5xl space-y-6 px-4 pb-32 pt-24 md:px-6">
      <section className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-36 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="h-80 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
        <div className="h-80 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
      </section>
    </main>
  );
}

export default function RankingEDesempenho() {
  const { isAuthenticated } = useAuth();
  const { resumo, desempenho, loading, error, actions } = useCampeonato();

  const topFinalizacoes = useMemo(() => (resumo?.finalizacoesMaisAplicadas || []).slice(0, 3), [resumo]);
  const topErros = useMemo(() => (resumo?.padroesDeErro || []).slice(0, 3), [resumo]);
  const temLutas = (resumo?.totalLutas || 0) > 0;

  if (!isAuthenticated) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Desempenho competitivo</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Acesso restrito</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Faça login para ver seu resumo competitivo real.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Voltar ao login
          </Link>
        </section>
      </main>
    );
  }

  if (loading && !resumo) {
    return <RankingSkeleton />;
  }

  if (error && !resumo) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Desempenho competitivo</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Resumo indisponível</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{error}</p>
          <button
            type="button"
            onClick={() => void actions.getResumo()}
            className="mt-6 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Tentar novamente
          </button>
        </section>
      </main>
    );
  }

  if (!resumo || !temLutas) {
    return (
      <main className="mx-auto max-w-5xl space-y-8 px-4 pb-32 pt-24 md:px-6">
        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Desempenho competitivo</p>
          <h1 className="mt-2 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            Ranking ainda sem lutas
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
            Não existe ranking consolidado sem registros de luta. Assim que o histórico competitivo do tenant existir,
            este painel passa a mostrar a evolução real.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/registro-de-treino"
              className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
            >
              Registrar treino
            </Link>
            <Link
              to="/dashboard-do-aluno"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              Voltar ao painel
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Desempenho real
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Ranking e desempenho
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              O ranking global ainda não existe no modelo de dados. Enquanto isso, este painel mostra o seu desempenho
              competitivo real com base nas lutas já registradas.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Taxa de sucesso</p>
            <p className="mt-1 text-2xl font-black uppercase tracking-tight text-white">{resumo.taxaSucesso}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Lutas</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{resumo.totalLutas}</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Vitórias</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{resumo.vitorias}</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Derrotas</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{resumo.derrotas}</p>
        </article>
        <article className="rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Desempenho</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{formatPercent(desempenho)}</p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Técnicas</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
                Finalizações mais aplicadas
              </h2>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {topFinalizacoes.length} item(s)
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {topFinalizacoes.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">target</span>
                <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">
                  Nenhuma finalização registrada
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  O histórico competitivo precisa de lutas para gerar tendências reais.
                </p>
              </div>
            ) : (
              topFinalizacoes.map((item, index) => (
                <article key={item.tipo} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">#{index + 1}</p>
                      <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-white">{item.tipo}</h3>
                    </div>
                    <span className="text-2xl font-black uppercase tracking-tight text-white">{item.qtd}</span>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Erros recorrentes</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
                Padrões de perda
              </h2>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {topErros.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">insights</span>
                <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Sem padrões marcados</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">
                  Quando houver registro de erro em luta, o painel passa a apontar tendências.
                </p>
              </div>
            ) : (
              topErros.map((item) => (
                <article key={item.erro} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Padrão</p>
                      <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-white">{item.erro}</h3>
                    </div>
                    <span className="text-2xl font-black uppercase tracking-tight text-white">{item.qtd}</span>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-950/60 p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Leitura honesta</p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Ranking global ainda não modelado</h2>
          </div>
          <Link
            to="/dashboard-do-aluno"
            className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Voltar ao painel
          </Link>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400">
          Esta tela já usa dados reais das lutas registradas no tenant. Quando o ranking de turma existir no backend,
          ele pode ser encaixado aqui sem mudar o padrão de leitura do produto.
        </p>
      </section>
    </main>
  );
}
