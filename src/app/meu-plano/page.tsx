'use client';

import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useTrilhasAluno } from '../../modules/trilhas/hooks/useTrilhasAluno';
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
  }).format(value);
}

function MeuPlanoSkeleton() {
  return (
    <main className="mx-auto max-w-6xl space-y-6 px-4 pb-32 pt-24 md:px-6">
      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="h-80 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
        <div className="h-80 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-900/80" />
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-40 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
    </main>
  );
}

export default function MeuPlano() {
  const { isAuthenticated } = useAuth();
  const { perfil, prontidaoGraduacao, loading: loadingAluno, error: alunoError } = useAluno();
  const { portal, loading: loadingPortal, error: portalError } = useAssinaturaAluno();
  const { trilhas, loading: loadingTrilhas, error: trilhasError } = useTrilhasAluno(perfil?.faixa ?? null);

  const trilhaAtiva = trilhas[0] || null;
  const statusFinanceiro = portal?.statusFinanceiro || perfil?.statusFinanceiro || 'indisponível';
  const mensalidade = portal?.valorMensalidade ?? perfil?.valorMensalidade ?? 0;
  const loadingPrincipal = (!perfil && loadingAluno) || (!portal && loadingPortal);

  const resumoPlano = useMemo(() => {
    const horasTotais = prontidaoGraduacao?.horasTotais ?? perfil?.horasTotais ?? 0;
    const percentual = prontidaoGraduacao?.percentualConclusao ?? 0;
    const proximoGrau = prontidaoGraduacao?.proximoGrau ?? null;

    return {
      horasTotais,
      percentual,
      proximoGrau,
    };
  }, [perfil?.horasTotais, prontidaoGraduacao]);

  if (!isAuthenticated) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Meu plano</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Acesso restrito</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Entre na conta para ver seu plano atual, assinatura e trilha real.
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

  if (loadingPrincipal) {
    return <MeuPlanoSkeleton />;
  }

  if ((alunoError && !perfil) || (portalError && !portal)) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Meu plano</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Plano indisponível</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{alunoError || portalError}</p>
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
              Plano real do aluno
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Meu plano
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Assinatura, trilha e prontidão de graduação compartilham a mesma fonte de verdade do tenant atual.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Mensalidade</p>
            <p className="mt-1 text-2xl font-black uppercase tracking-tight text-white">{formatCurrency(mensalidade)}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Plano atual</p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
                {portal?.assinaturaAtual?.status || perfil?.status || 'Ativo'}
              </h2>
            </div>
            <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
              {statusFinanceiro}
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Aluna(o)</p>
              <p className="mt-2 text-xl font-black uppercase tracking-tight text-white">{perfil?.nome || portal?.alunoNome}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Faixa</p>
              <p className="mt-2 text-xl font-black uppercase tracking-tight text-white">{perfil?.faixa || portal?.faixa}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo ciclo</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {formatDate(portal?.assinaturaAtual?.currentPeriodEnd || null)}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Horas totais</p>
              <p className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                {resumoPlano.horasTotais.toFixed(1)}h
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-5 text-sm leading-7 text-zinc-400">
            Seu plano não é uma promessa genérica. Ele reflete status financeiro, prontidão e trilhas publicadas para
            a faixa atual.
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/dashboard-do-aluno/assinatura"
              className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
            >
              Ver assinatura
            </Link>
            <Link
              to="/plano-semanal"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              Ver plano semanal
            </Link>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Prontidão</p>
              <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
                {prontidaoGraduacao?.label || 'Carregando'}
              </h2>
            </div>
            <span className="text-3xl font-black uppercase tracking-tight text-brand-red">
              {prontidaoGraduacao?.percentualConclusao?.toFixed(1) || '0.0'}%
            </span>
          </div>

          <div className="mt-6 space-y-3">
            <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full rounded-full bg-brand-red"
                style={{ width: `${Math.min(100, resumoPlano.percentual)}%` }}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo grau</p>
                <p className="mt-2 text-xl font-black uppercase tracking-tight text-white">
                  {resumoPlano.proximoGrau ? `G${resumoPlano.proximoGrau}` : 'Faixa máxima'}
                </p>
              </div>
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Horas totais</p>
                <p className="mt-2 text-xl font-black uppercase tracking-tight text-white">
                  {resumoPlano.horasTotais.toFixed(1)}h
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-5 text-sm leading-7 text-zinc-400">
            A progressão usa o cálculo real de prontidão, sem prometer grau antes da hora.
          </div>
        </article>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Trilha publicada</p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
              {trilhaAtiva ? trilhaAtiva.titulo : 'Nenhuma trilha publicada'}
            </h2>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
            {trilhas.length} trilha(s)
          </span>
        </div>

        {trilhasError ? (
          <div className="mt-6 rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4 text-sm leading-7 text-zinc-300">
            {trilhasError}
          </div>
        ) : null}

        {loadingTrilhas && trilhas.length === 0 ? (
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="h-32 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            ))}
          </div>
        ) : trilhas.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
            <span className="material-symbols-outlined text-4xl text-zinc-400">space_dashboard</span>
            <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Sem trilha publicada</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">
              Quando uma trilha existir para a sua faixa, ela aparece aqui de forma automática.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {trilhas.slice(0, 4).map((trilha) => (
              <article key={trilha.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{trilha.faixaAlvo}</p>
                <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-white">{trilha.titulo}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-400">{trilha.descricao}</p>
                <p className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                  {trilha.tecnicasIds.length} técnica(s) publicada(s)
                </p>
              </article>
            ))}
          </div>
        )}
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <Link
          to="/dashboard-do-aluno/checkin"
          className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition hover:bg-zinc-900"
        >
          <span className="material-symbols-outlined text-zinc-300">qr_code_2</span>
          <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-white">Check-in</h3>
          <p className="mt-2 text-sm text-zinc-400">Use a presença real para alimentar a prontidão.</p>
        </Link>
        <Link
          to="/registro-de-treino"
          className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition hover:bg-zinc-900"
        >
          <span className="material-symbols-outlined text-zinc-300">fitness_center</span>
          <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-white">Registro</h3>
          <p className="mt-2 text-sm text-zinc-400">Feche o ciclo com treino e observação real.</p>
        </Link>
        <Link
          to="/dashboard-do-aluno/assinatura"
          className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition hover:bg-zinc-900"
        >
          <span className="material-symbols-outlined text-zinc-300">receipt_long</span>
          <h3 className="mt-3 text-xl font-black uppercase tracking-tight text-white">Assinatura</h3>
          <p className="mt-2 text-sm text-zinc-400">Veja o status financeiro completo.</p>
        </Link>
      </section>
    </main>
  );
}
