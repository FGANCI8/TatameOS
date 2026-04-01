'use client';

import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useTreino } from '../../hooks/useTreino';
import { useTrilhasAluno } from '../../modules/trilhas/hooks/useTrilhasAluno';

function formatDate(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    weekday: 'short',
    day: '2-digit',
    month: '2-digit',
  }).format(value);
}

function PlanoSemanalSkeleton() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 pb-32 pt-24 md:px-6">
      <section className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div key={index} className="h-40 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="h-80 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
        <div className="h-80 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
      </section>
    </main>
  );
}

export default function PlanoSemanal() {
  const { isAuthenticated } = useAuth();
  const { perfil, prontidaoGraduacao, loading: loadingAluno, error: alunoError } = useAluno();
  const { data: treinos, loading: loadingTreinos, error: treinoError } = useTreino();
  const { trilhas, loading: loadingTrilhas, error: trilhasError } = useTrilhasAluno(perfil?.faixa ?? null);

  const loadingPrincipal = (!perfil && loadingAluno) || (loadingTreinos && treinos.length === 0);
  const faixaAtual = perfil?.faixa || 'Branca';
  const trilhaAtual = trilhas[0] || null;

  const agendaSemanal = useMemo(() => {
    const treinosRecentes = treinos.slice(0, 3);
    const intensidadeBase = prontidaoGraduacao?.status === 'pronto' ? 'alta' : prontidaoGraduacao?.status === 'quase_pronto' ? 'média-alta' : 'média';

    return [
      {
        titulo: 'Sessão de pressão',
        foco: trilhaAtual?.titulo || 'Sem trilha publicada',
        descricao: trilhaAtual?.descricao || 'A trilha da faixa ainda não foi publicada no tenant atual.',
      },
      {
        titulo: 'Carga da semana',
        foco: `${treinosRecentes.length} treino(s) recente(s)`,
        descricao: `Intensidade sugerida: ${intensidadeBase}. Baseada na prontidão real do aluno.`,
      },
      {
        titulo: 'Próxima correção',
        foco: prontidaoGraduacao?.label || 'Carregar prontidão',
        descricao: prontidaoGraduacao?.proximoGrau
          ? `A trilha mira o grau G${prontidaoGraduacao.proximoGrau} com ${prontidaoGraduacao.horasRestantes.toFixed(1)}h restantes.`
          : 'Nenhum grau adicional pendente no momento.',
      },
    ];
  }, [prontidaoGraduacao, treinos, trilhaAtual?.descricao, trilhaAtual?.titulo]);

  if (!isAuthenticated) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Plano semanal</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Acesso restrito</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Entre na conta para ver sua semana construída a partir dos dados reais.
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

  if (loadingPrincipal && trilhas.length === 0) {
    return <PlanoSemanalSkeleton />;
  }

  if ((alunoError && !perfil) || (treinoError && treinos.length === 0)) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Plano semanal</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Plano indisponível</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{alunoError || treinoError}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Tentar novamente
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Ciclo semanal real
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Plano semanal
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              O plano é montado com base na faixa atual, na prontidão de graduação e nas trilhas publicadas para o seu
              tenant.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Faixa</p>
            <p className="mt-1 text-2xl font-black uppercase tracking-tight text-white">{faixaAtual}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Prontidão</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">
            {prontidaoGraduacao?.percentualConclusao?.toFixed(1) || '0.0'}%
          </p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Treinos recentes</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{treinos.length}</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Trilhas publicadas</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{trilhas.length}</p>
        </article>
      </section>

      {trilhasError ? (
        <section className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4 text-sm leading-7 text-zinc-300">
          {trilhasError}
        </section>
      ) : null}

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Semana sugerida</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Agenda do ciclo</h2>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {formatDate(new Date())}
            </span>
          </div>

          <div className="mt-6 space-y-3">
            {agendaSemanal.map((item) => (
              <article key={item.titulo} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{item.titulo}</p>
                <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-white">{item.foco}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{item.descricao}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Trilha ativa</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
                {trilhaAtual ? trilhaAtual.titulo : 'Sem trilha publicada'}
              </h2>
            </div>
          </div>

          {trilhaAtual ? (
            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Descrição</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{trilhaAtual.descricao}</p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Técnicas publicadas</p>
                <p className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
                  {trilhaAtual.tecnicasIds.length}
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Último treino</p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  {treinos[0] ? `${treinos[0].tecnicaId} · ${formatDate(treinos[0].data)}` : 'Nenhum treino recente'}
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-4xl text-zinc-400">calendar_month</span>
              <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhuma trilha publicada</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Quando a academia publicar trilhas para a sua faixa, o plano semanal se monta automaticamente.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Link
          to="/dashboard-do-aluno/checkin"
          className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition hover:bg-zinc-900"
        >
          <span className="material-symbols-outlined text-zinc-300">qr_code_2</span>
          <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-white">Check-in</h3>
          <p className="mt-2 text-sm text-zinc-400">Complete a rotina com presença real.</p>
        </Link>
        <Link
          to="/registro-de-treino"
          className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition hover:bg-zinc-900"
        >
          <span className="material-symbols-outlined text-zinc-300">fitness_center</span>
          <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-white">Treino</h3>
          <p className="mt-2 text-sm text-zinc-400">Registre o que foi praticado.</p>
        </Link>
        <Link
          to="/dashboard-do-aluno/feedbacks"
          className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition hover:bg-zinc-900"
        >
          <span className="material-symbols-outlined text-zinc-300">psychology</span>
          <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-white">Feedback</h3>
          <p className="mt-2 text-sm text-zinc-400">Feche a semana com a correção certa.</p>
        </Link>
      </section>
    </main>
  );
}
