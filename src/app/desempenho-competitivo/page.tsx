import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useFrequenciaAluno } from '../../modules/frequencia/hooks/useFrequenciaAluno';
import { useFeedbacks } from '../../modules/feedbacks/hooks/useFeedbacks';
import { useTreino } from '../../hooks/useTreino';
import { encontrarTecnicaPorId } from '../../modules/tecnica/catalog';
import type { FeedbackMetricasAluno } from '../../modules/feedbacks/types';

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

function getLastDays(days: number): Date[] {
  const today = new Date();
  return Array.from({ length: days }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (days - 1 - index));
    return date;
  });
}

function sumAverage(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }

  return values.reduce((total, value) => total + value, 0) / values.length;
}

function LoadingState() {
  return (
    <main className="mx-auto max-w-7xl space-y-6 px-4 pb-28 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
        <div className="mt-3 h-12 w-full max-w-3xl animate-pulse rounded-2xl bg-zinc-800/60" />
        <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded-full bg-zinc-800/60" />
      </section>
      <section className="grid gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="h-28 animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="h-[360px] animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
        <div className="h-[360px] animate-pulse rounded-[28px] border border-zinc-800 bg-zinc-800/60" />
      </section>
    </main>
  );
}

export default function DesempenhoCompetitivo() {
  const {
    perfil,
    loading: loadingAluno,
    error: errorAluno,
    actions: { refresh: refreshAluno },
  } = useAluno();
  const {
    data: treinos,
    loading: loadingTreinos,
    error: errorTreinos,
    actions: { listarTreinos: refreshTreinos },
  } = useTreino();
  const {
    painel: frequenciaPainel,
    loading: loadingFrequencia,
    error: errorFrequencia,
    actions: { refresh: refreshFrequencia },
  } = useFrequenciaAluno();
  const {
    data: feedbacks,
    loading: loadingFeedbacks,
    actions: { listarFeedbacksRecentesPorAluno, obterMetricasFeedbacksAluno },
  } = useFeedbacks({ autoLoad: false });

  const [feedbackMetricas, setFeedbackMetricas] = useState<FeedbackMetricasAluno>({
    total: 0,
    aguardando: 0,
    corrigidos: 0,
    comResposta: 0,
  });

  useEffect(() => {
    if (!perfil?.id) {
      return;
    }

    let ativo = true;

    (async () => {
      const metricas = await obterMetricasFeedbacksAluno(perfil.id);
      await listarFeedbacksRecentesPorAluno(perfil.id, 3);

      if (ativo && metricas) {
        setFeedbackMetricas(metricas);
      }
    })();

    return () => {
      ativo = false;
    };
  }, [listarFeedbacksRecentesPorAluno, obterMetricasFeedbacksAluno, perfil?.id]);

  const treinosRecentes30d = useMemo(() => {
    const limite = new Date();
    limite.setDate(limite.getDate() - 30);
    return treinos.filter((treino) => treino.data >= limite);
  }, [treinos]);

  const volumeSemanal = useMemo(() => {
    const dias = getLastDays(7);
    return dias.map((dia) => {
      const count = treinos.filter((treino) => treino.data.toDateString() === dia.toDateString()).length;
      return {
        label: new Intl.DateTimeFormat('pt-BR', { weekday: 'short' }).format(dia).replace('.', '').toUpperCase(),
        count,
      };
    });
  }, [treinos]);

  const tecnicaMaisUsada = useMemo(() => {
    const contagem = new Map<string, number>();

    treinos.forEach((treino) => {
      contagem.set(treino.tecnicaId, (contagem.get(treino.tecnicaId) ?? 0) + 1);
    });

    const entries = Array.from(contagem.entries()).sort((a, b) => b[1] - a[1]);
    const [tecnicaId, quantidade] = entries[0] ?? [];

    if (!tecnicaId) {
      return null;
    }

    const tecnica = encontrarTecnicaPorId(tecnicaId);
    return {
      id: tecnicaId,
      nome: tecnica?.nome ?? `Técnica ${tecnicaId}`,
      categoria: tecnica?.categoria ?? 'Treino',
      quantidade,
    };
  }, [treinos]);

  const cargaMedia = useMemo(() => sumAverage(treinosRecentes30d.map((treino) => treino.dificuldadePercebida)), [treinosRecentes30d]);
  const ultimaSessao = treinos[0] ?? null;
  const sequenciaAtual = frequenciaPainel?.resumo.sequenciaAtual ?? 0;
  const horasTotais = perfil?.horasTotais ?? frequenciaPainel?.aluno.horasTotais ?? 0;
  const totalTreinos = treinos.length;
  const treinos30d = treinosRecentes30d.length;
  const feedbacksAguardando = feedbackMetricas.aguardando;
  const mediaTempo = cargaMedia > 0 ? cargaMedia : null;

  const carregandoInicial =
    (loadingAluno && !perfil) ||
    (loadingTreinos && totalTreinos === 0) ||
    (loadingFrequencia && !frequenciaPainel);
  const falhaGlobal = errorAluno || (errorTreinos && totalTreinos === 0) || (errorFrequencia && !frequenciaPainel);

  if (carregandoInicial) {
    return <LoadingState />;
  }

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-28 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">
              Desempenho competitivo
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-6xl">
              Painel de pressão real
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Leitura honesta da sua rotina: volume de treino, sequência atual, resposta de feedback e sinal de prontidão para competir.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/registro-de-treino"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">fitness_center</span>
              Registrar treino
            </Link>
            <Link
              to="/dashboard-do-aluno/checkin"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
              Abrir check-in
            </Link>
          </div>
        </div>
      </section>

      {falhaGlobal ? (
        <section className="rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-6 text-center">
          <span className="material-symbols-outlined text-4xl text-brand-red">warning</span>
          <h2 className="mt-3 font-headline text-2xl font-black uppercase tracking-tight text-white">
            Não foi possível montar o painel
          </h2>
          <p className="mt-2 text-sm leading-7 text-zinc-300">
            {errorAluno || errorTreinos || errorFrequencia || 'Os dados de desempenho ainda não estão disponíveis para este tenant.'}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => {
                void refreshAluno();
                void refreshTreinos();
                void refreshFrequencia();
              }}
              className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition hover:bg-brand-red/20"
            >
              Tentar novamente
            </button>
            <Link
              to="/dashboard-do-aluno"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-5 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-zinc-800"
            >
              Voltar ao painel
            </Link>
          </div>
        </section>
      ) : null}

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Treinos 30 dias</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-headline text-5xl font-black italic text-white">{treinos30d}</span>
            <span className="pb-1 text-xs font-black uppercase tracking-widest text-zinc-500">sessões</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Volume real registrado no período recente.
          </p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sequência atual</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-headline text-5xl font-black italic text-white">{sequenciaAtual}</span>
            <span className="pb-1 text-xs font-black uppercase tracking-widest text-zinc-500">dias</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Baseada nos check-ins validados do tenant atual.
          </p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Horas totais</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-headline text-5xl font-black italic text-white">{horasTotais.toFixed(1)}</span>
            <span className="pb-1 text-xs font-black uppercase tracking-widest text-zinc-500">h</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Acúmulo atual do atleta no sistema.
          </p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Feedbacks em aberto</p>
          <div className="mt-3 flex items-end gap-2">
            <span className="font-headline text-5xl font-black italic text-white">{feedbacksAguardando}</span>
            <span className="pb-1 text-xs font-black uppercase tracking-widest text-zinc-500">pendências</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            Correções aguardando retorno do professor ou do aluno.
          </p>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Volume recente</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                Últimos 7 dias
              </h2>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {mediaTempo ? `Dificuldade média ${mediaTempo.toFixed(1)}` : 'Sem média ainda'}
            </span>
          </div>

          <div className="mt-8 flex h-56 items-end gap-3">
            {volumeSemanal.map((item) => (
              <div key={item.label} className="flex flex-1 flex-col justify-end gap-2">
                <div className="flex h-44 items-end">
                  <div
                    className={`w-full rounded-t-2xl transition-all duration-300 ${
                      item.count > 0 ? 'bg-brand-red/20 hover:bg-brand-red/40' : 'bg-zinc-800'
                    }`}
                    style={{ height: `${Math.max(item.count * 18, item.count > 0 ? 18 : 6)}px` }}
                  />
                </div>
                <span className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Treinos 30d</p>
              <p className="mt-2 text-3xl font-black uppercase italic text-white">{treinos30d}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Última sessão</p>
              <p className="mt-2 text-sm font-black uppercase text-white">
                {ultimaSessao ? formatDate(ultimaSessao.data) : 'Sem treinos registrados'}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Feedbacks</p>
              <p className="mt-2 text-sm font-black uppercase text-white">{feedbackMetricas.total}</p>
            </div>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Técnica dominante</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                O que mais aparece
              </h2>
            </div>
            <span className="material-symbols-outlined text-brand-red">monitoring</span>
          </div>

          {tecnicaMaisUsada ? (
            <div className="mt-6 rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-5">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Mais repetida</p>
              <h3 className="mt-2 font-headline text-3xl font-black uppercase italic text-white">
                {tecnicaMaisUsada.nome}
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-300">
                {tecnicaMaisUsada.categoria} · {tecnicaMaisUsada.quantidade} registro(s) no seu histórico recente.
              </p>
            </div>
          ) : (
            <div className="mt-6 rounded-[28px] border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-3xl text-zinc-400">history</span>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-white">Sem treinos ainda</p>
              <p className="mt-2 text-sm text-zinc-400">
                Quando você registrar sessões, a leitura de técnica dominante aparece aqui.
              </p>
            </div>
          )}

          <div className="mt-6 space-y-3">
            {treinos.length > 0 ? (
              treinos.slice(0, 4).map((treino) => {
                const tecnica = encontrarTecnicaPorId(treino.tecnicaId);

                return (
                  <article key={treino.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                          {formatDate(treino.data)}
                        </p>
                        <h4 className="mt-1 font-headline text-lg font-black uppercase italic text-white">
                          {tecnica?.nome ?? 'Sessão registrada'}
                        </h4>
                      </div>
                      <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        Dificuldade {treino.dificuldadePercebida}/5
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-7 text-zinc-400">
                      {treino.observacoes || 'Sem observações registradas.'}
                    </p>
                  </article>
                );
              })
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-3xl text-zinc-400">fitness_center</span>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-white">Nenhum treino registrado</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Registre uma sessão para que o painel competitivo tenha base real.
                </p>
              </div>
            )}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Check-in e consistência</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                Prontidão de tatame
              </h2>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              Atualizado agora
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Presenças no ano</p>
              <p className="mt-2 text-3xl font-black uppercase italic text-white">
                {frequenciaPainel?.resumo.totalPresencasAno ?? 0}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo passo</p>
              <p className="mt-2 text-sm font-black uppercase text-white">
                {sequenciaAtual > 0 ? 'Manter sequência' : 'Retomar presença'}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Leitura honesta</p>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Este painel não usa previsão inventada. Ele se apoia apenas no que o tenant já tem registrado em treinos,
              frequência e feedbacks.
            </p>
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Feedbacks recentes</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                Corrija o que mais trava sua evolução
              </h2>
            </div>
            <Link
              to="/dashboard-do-aluno/feedbacks"
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 transition hover:bg-zinc-800"
            >
              Abrir feedbacks
            </Link>
          </div>

          {loadingFeedbacks && feedbacks.length === 0 ? (
            <div className="mt-6 space-y-3">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              ))}
            </div>
          ) : feedbacks.length > 0 ? (
            <div className="mt-6 space-y-3">
              {feedbacks.map((feedback) => (
                <article
                  key={feedback.id}
                  className={`rounded-2xl border p-4 ${
                    feedback.status === 'aguardando_aluno' ? 'border-brand-red/20 bg-brand-red/10' : 'border-zinc-800 bg-zinc-950/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        Atualizado {formatDate(feedback.updatedAt)}
                      </p>
                      <h3 className="mt-1 font-headline text-lg font-black uppercase italic text-white">{feedback.titulo}</h3>
                    </div>
                    <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                      {feedback.status.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{feedback.descricao}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-3xl text-zinc-400">chat</span>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-white">Sem feedbacks abertos</p>
              <p className="mt-2 text-sm text-zinc-400">
                Quando surgir uma correção real, ela entra aqui para virar plano de ajuste.
              </p>
            </div>
          )}
        </article>
      </section>
    </main>
  );
}
