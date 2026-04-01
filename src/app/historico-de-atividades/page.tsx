'use client';

import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useTreino } from '../../hooks/useTreino';
import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useFeedbacks } from '../../modules/feedbacks/hooks/useFeedbacks';

type ActivityKind = 'treino' | 'presenca' | 'feedback';

type ActivityEvent = {
  id: string;
  kind: ActivityKind;
  icon: string;
  title: string;
  description: string;
  timestamp: Date;
  highlight?: string;
};

function formatDateTime(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

function ActivitySkeleton() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="h-36 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
      <section className="space-y-4 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
    </main>
  );
}

export default function HistoricoDeAtividades() {
  const { isAuthenticated } = useAuth();
  const {
    perfil,
    prontidaoGraduacao,
    historicoRecente,
    historicoLoading,
    historicoError,
    loading: loadingAluno,
    error: alunoError,
  } = useAluno();
  const { data: treinos, loading: loadingTreinos, error: treinoError } = useTreino();
  const { data: feedbacks, loading: loadingFeedbacks, error: feedbackError } = useFeedbacks();

  const events = useMemo<ActivityEvent[]>(() => {
    const treinoEvents: ActivityEvent[] = treinos.slice(0, 5).map((treino) => ({
      id: `treino-${treino.id}`,
      kind: 'treino',
      icon: 'fitness_center',
      title: 'Treino registrado',
      description: `Técnica ${treino.tecnicaId} · dificuldade ${treino.dificuldadePercebida}/5`,
      timestamp: treino.data,
      highlight: treino.observacoes || 'Sem observações registradas.',
    }));

    const presencaEvents: ActivityEvent[] = historicoRecente.slice(0, 5).map((item) => ({
      id: `presenca-${item.id}`,
      kind: 'presenca',
      icon: 'event_available',
      title: 'Check-in confirmado',
      description: `+${item.horasIncrementadas.toFixed(1)}h no tatame`,
      timestamp: item.data,
      highlight: `Sessão com duração padrão de ${item.duracaoPadrao.toFixed(1)}h`,
    }));

    const feedbackEvents: ActivityEvent[] = feedbacks.slice(0, 5).map((feedback) => ({
      id: `feedback-${feedback.id}`,
      kind: 'feedback',
      icon: 'psychology',
      title: 'Feedback atualizado',
      description: feedback.status.replace(/_/g, ' '),
      timestamp: feedback.updatedAt,
      highlight: feedback.titulo,
    }));

    return [...treinoEvents, ...presencaEvents, ...feedbackEvents].sort(
      (a, b) => b.timestamp.getTime() - a.timestamp.getTime(),
    );
  }, [feedbacks, historicoRecente, treinos]);

  const loadingPrincipal = (loadingAluno && !perfil) || (loadingTreinos && treinos.length === 0) || (loadingFeedbacks && feedbacks.length === 0);

  if (!isAuthenticated) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Histórico</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Acesso restrito</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Faça login para ver sua linha do tempo real de treinos, presenças e feedbacks.
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

  if (loadingPrincipal && events.length === 0) {
    return <ActivitySkeleton />;
  }

  if (alunoError && !perfil) {
    return (
      <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center px-4 pb-32 pt-24 md:px-6">
        <section className="w-full rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">Histórico</p>
          <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-white">Linha do tempo indisponível</h1>
          <p className="mt-3 text-sm leading-7 text-zinc-300">{alunoError}</p>
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

  const notices = [historicoError, treinoError, feedbackError].filter(Boolean) as string[];
  const totalTreinos = treinos.length;
  const totalPresencas = historicoRecente.length;
  const totalFeedbacks = feedbacks.length;
  const prontidaoPercentual = prontidaoGraduacao?.percentualConclusao ?? 0;

  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Linha do tempo real
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Histórico de atividades
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Treinos, presenças e feedbacks são combinados aqui a partir dos dados já persistidos no tenant atual.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Progresso</p>
            <p className="mt-1 text-2xl font-black uppercase tracking-tight text-white">
              {prontidaoPercentual.toFixed(1)}%
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Treinos</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{totalTreinos}</p>
          <p className="mt-2 text-xs text-zinc-500">Sessões carregadas do histórico real.</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Presenças</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{totalPresencas}</p>
          <p className="mt-2 text-xs text-zinc-500">Check-ins recentes do aluno.</p>
        </article>
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Feedbacks</p>
          <p className="mt-2 text-4xl font-black uppercase tracking-tight text-white">{totalFeedbacks}</p>
          <p className="mt-2 text-xs text-zinc-500">Correções e falhas já registradas.</p>
        </article>
      </section>

      {notices.length > 0 ? (
        <section className="space-y-3">
          {notices.map((notice) => (
            <div key={notice} className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4 text-sm leading-7 text-zinc-300">
              {notice}
            </div>
          ))}
        </section>
      ) : null}

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Eventos recentes</p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Linha do tempo</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/registro-de-treino"
              className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
            >
              Registrar treino
            </Link>
            <Link
              to="/dashboard-do-aluno/checkin"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              Abrir check-in
            </Link>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {events.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-4xl text-zinc-400">history</span>
              <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Sem atividades ainda</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Quando treino, presença ou feedback forem registrados, esta linha do tempo será preenchida.
              </p>
            </div>
          ) : (
            events.map((event) => (
              <article key={event.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
                      <span className="material-symbols-outlined text-zinc-300">{event.icon}</span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                          {event.kind}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                          {formatDateTime(event.timestamp)}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-white">{event.title}</h3>
                      <p className="mt-1 text-sm leading-7 text-zinc-400">{event.description}</p>
                      <p className="mt-2 text-sm leading-7 text-zinc-500">{event.highlight}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
                    {event.kind === 'treino' ? 'Treino' : event.kind === 'feedback' ? 'Feedback' : 'Presença'}
                  </span>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Próxima referência</p>
          <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">
            {prontidaoGraduacao?.proximoGrau ? `G${prontidaoGraduacao.proximoGrau}` : 'Faixa máxima'}
          </h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            {perfil?.nome || 'Atleta'} já tem a trilha aberta para continuar consolidando o ritmo de treino.
          </p>
        </div>
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Ação recomendada</p>
          <h3 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Continuar o ciclo</h3>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Use o check-in, registre treinos e envie feedback quando houver falha técnica real.
          </p>
        </div>
      </section>
    </main>
  );
}
