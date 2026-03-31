import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { NotificationCenterWidget } from '../../components/dashboard/NotificationCenterWidget';
import { useAuth } from '../../hooks/useAuth';
import { useTreino } from '../../hooks/useTreino';
import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useFrequenciaAluno } from '../../modules/frequencia/hooks/useFrequenciaAluno';
import { useFeedbacks } from '../../modules/feedbacks/hooks/useFeedbacks';
import type { Feedback, FeedbackMetricasAluno } from '../../modules/feedbacks/types';

const FrequenciaResumoCard = lazy(() => import('./FrequenciaResumoCard'));

export default function DashboardDoAluno() {
  const {
    perfil,
    prontidaoGraduacao,
    historicoRecente,
    historicoLoading,
    historicoError,
    loading: loadingAluno,
    actions: { refreshHistorico },
  } = useAluno();
  const { data: treinos } = useTreino();
  const { userId } = useAuth();
  const {
    data: feedbacks,
    loading: loadingFeedbacks,
    actions: { listarFeedbacksRecentesPorAluno, obterMetricasFeedbacksAluno },
  } = useFeedbacks({ autoLoad: false });
  const { painel: frequenciaPainel } = useFrequenciaAluno();
  const [feedbackMetricas, setFeedbackMetricas] = useState<FeedbackMetricasAluno>({
    total: 0,
    aguardando: 0,
    corrigidos: 0,
    comResposta: 0,
  });

  useEffect(() => {
    if (!userId) return;

    let ativo = true;

    (async () => {
      const metricas = await obterMetricasFeedbacksAluno(userId);
      await listarFeedbacksRecentesPorAluno(userId, 2);

      if (ativo && metricas) {
        setFeedbackMetricas(metricas);
      }
    })();

    return () => {
      ativo = false;
    };
  }, [listarFeedbacksRecentesPorAluno, obterMetricasFeedbacksAluno, userId]);

  const stats = useMemo(() => {
    const hoje = new Date();
    const ultimos7Dias = Array.from({ length: 7 }, (_, index) => {
      const d = new Date();
      d.setDate(hoje.getDate() - (6 - index));
      return d.toDateString();
    });

    const treinosPorDia = ultimos7Dias.map((dia) => {
      const count = treinos.filter((t) => new Date(t.data).toDateString() === dia).length;
      return { dia, count };
    });

    return {
      treinosPorDia,
      maxTreinos: Math.max(...treinosPorDia.map((d) => d.count), 1),
      totalSessoes: treinos.length,
      totalHoras: perfil?.horasTotais ?? 0,
    };
  }, [perfil?.horasTotais, treinos]);

  const feedbackStats = feedbackMetricas;
  const horasTotais = prontidaoGraduacao?.horasTotais ?? perfil?.horasTotais ?? 0;
  const prontidaoPercentual = prontidaoGraduacao?.percentualConclusao ?? 0;
  const horasRestantes = prontidaoGraduacao?.horasRestantes ?? 0;
  const proximoGrau = prontidaoGraduacao?.proximoGrau ?? null;
  const prontidaoLabel = prontidaoGraduacao?.label ?? 'Carregando progresso';
  const statusProntidao = prontidaoGraduacao?.status ?? 'em_progresso';
  const hasPendingFeedback = feedbackStats.aguardando > 0;
  const frequenciaResumo = frequenciaPainel?.resumo ?? null;

  if (loadingAluno && !perfil) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
        <div className="rounded-[28px] border border-zinc-800 bg-zinc-900/80 px-8 py-10 text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-transparent" />
          <span className="font-headline text-sm font-black uppercase tracking-[0.35em] text-zinc-400">
            Sincronizando tatame...
          </span>
        </div>
      </div>
    );
  }

  return (
    <main className="relative mx-auto max-w-6xl space-y-8 px-4 pb-28 pt-20 md:px-6">
      <section className="absolute inset-0 -z-10 bg-zinc-950 bg-dot-grid opacity-70" />

      <section className="flex flex-col justify-between gap-6 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:flex-row md:items-end md:p-8">
        <div>
          <p className="mb-1 text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
            Status: {perfil?.status || 'Ativo'}
          </p>
          <h1 className="font-headline text-4xl font-black uppercase leading-none tracking-tight text-white md:text-5xl">
            Olá, {perfil?.nome.split(' ')[0] || 'Atleta'}!
          </h1>
          <p className="mt-2 max-w-xs text-zinc-400">
            Mantenha a pressão. Seu próximo nível está a um treino de distância.
          </p>
        </div>
        <div className="flex flex-col items-end rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Tempo total de tatame</span>
          <div className="flex items-baseline gap-2">
            <span className="font-headline text-4xl font-black text-white">{perfil?.horasTotais || 0}</span>
            <span className="font-headline text-xl font-black text-zinc-400">HRS</span>
          </div>
        </div>
      </section>

      <section>
        <Link
          to="/registro-de-treino"
          className="group relative block w-full overflow-hidden rounded-[28px] border border-brand-red/20 bg-brand-red/10 p-8 transition duration-200 hover:scale-[1.01] hover:bg-brand-red/20 active:scale-[0.98]"
        >
          <div className="absolute bottom-0 right-0 opacity-10 transition-transform duration-500 group-hover:scale-110">
            <span className="material-symbols-outlined text-[120px]">fitness_center</span>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-zinc-300 font-label">
            <span className="material-symbols-outlined text-sm">play_circle</span>
            Módulo atual
          </div>
          <span className="font-headline text-3xl font-black uppercase italic tracking-tighter text-brand-red md:text-4xl">
            Registrar treino
          </span>
          <div className="mt-4 flex gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Sessões totais</span>
              <span className="text-sm font-black text-white">{stats.totalSessoes}</span>
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400">Faixa ativa</span>
              <span className="text-sm font-black text-white">{perfil?.faixa || 'Branca'}</span>
            </div>
          </div>
        </Link>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Atalho rápido</p>
              <h3 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                Check-in digital
              </h3>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                Acesse seu QR dinâmico em poucos segundos e apresente na entrada da aula.
              </p>
            </div>
            <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
              Mobile
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Sequência atual</p>
              <p className="mt-2 font-headline text-3xl font-black italic text-zinc-100">
                {frequenciaResumo?.sequenciaAtual ?? 0}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Presenças no ano</p>
              <p className="mt-2 font-headline text-3xl font-black italic text-zinc-100">
                {frequenciaResumo?.totalPresencasAno ?? 0}
              </p>
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/dashboard-do-aluno/checkin"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">qr_code_2</span>
              Abrir check-in
            </Link>
            <Link
              to="/dashboard-do-aluno/trilhas"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">insights</span>
              Ver trilhas
            </Link>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <div className="h-3 w-24 animate-pulse rounded-full bg-zinc-800/60" />
              <div className="mt-3 h-7 w-48 animate-pulse rounded-2xl bg-zinc-800/60" />
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
                <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              </div>
              <div className="mt-4 h-12 animate-pulse rounded-2xl bg-zinc-800/60" />
            </div>
          }
        >
          <FrequenciaResumoCard frequenciaResumo={frequenciaResumo} />
        </Suspense>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Graduação</p>
              <h3 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                Progresso para o próximo grau
              </h3>
            </div>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                statusProntidao === 'pronto'
                  ? 'border border-brand-red/20 bg-brand-red/10 text-brand-red'
                  : 'border border-zinc-800 bg-zinc-950/60 text-zinc-300'
              }`}
            >
              {prontidaoLabel}
            </span>
          </div>

          <div className="mt-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Horas totais</p>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-headline text-4xl font-black text-white">{horasTotais.toFixed(1)}</span>
                <span className="font-headline text-xl font-black text-zinc-400">HRS</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Próximo grau</p>
              <p className="mt-2 font-headline text-2xl font-black uppercase text-white">
                {proximoGrau ? `G${proximoGrau}` : 'Faixa máxima'}
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-2">
            <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
              <span>Prontidão</span>
              <span>{prontidaoPercentual.toFixed(1)}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-zinc-800">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  statusProntidao === 'pronto' ? 'bg-brand-red' : 'bg-zinc-600'
                }`}
                style={{ width: `${Math.min(100, prontidaoPercentual)}%` }}
              />
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Status</p>
              <p className="mt-2 text-sm font-black uppercase text-white">{prontidaoLabel}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Restante</p>
              <p className="mt-2 text-sm font-black uppercase text-white">
                {proximoGrau ? `${horasRestantes.toFixed(1)}h` : '0.0h'}
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Faixa</p>
              <p className="mt-2 text-sm font-black uppercase text-white">{perfil?.faixa || 'Branca'}</p>
            </div>
          </div>
        </div>

        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Histórico recente</p>
              <h3 className="mt-2 font-headline text-2xl font-black uppercase italic tracking-tight text-white">
                Últimas 5 presenças
              </h3>
            </div>
            <button
              type="button"
              onClick={() => void refreshHistorico()}
              className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              Atualizar
            </button>
          </div>

          {historicoLoading ? (
            <div className="mt-6 space-y-3">
              {[0, 1, 2, 3, 4].map((index) => (
                <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              ))}
            </div>
          ) : historicoError ? (
            <div className="mt-6 rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4 text-sm text-brand-red">
              {historicoError}
            </div>
          ) : historicoRecente.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-3xl text-zinc-400">history</span>
              <p className="mt-2 text-sm font-black uppercase tracking-[0.2em] text-white">Sem presenças registradas</p>
              <p className="mt-2 text-sm text-zinc-400">
                Quando o professor registrar sua chamada, os últimos check-ins aparecem aqui.
              </p>
              <Link
                to="/registro-de-treino"
                className="mt-4 inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
              >
                Registrar treino
              </Link>
            </div>
          ) : (
            <div className="mt-6 space-y-3">
              {historicoRecente.map((item) => (
                <article key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-black uppercase tracking-tight text-white">
                        {new Intl.DateTimeFormat('pt-BR', {
                          day: '2-digit',
                          month: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        }).format(item.data)}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                        Duração padrão: {item.duracaoPadrao.toFixed(1)}h
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                      +{item.horasIncrementadas.toFixed(1)}h
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <NotificationCenterWidget
        title="Avisos da academia"
        subtitle="Comunicados da sua turma e alertas importantes"
        tipos={['info', 'alerta']}
        limite={10}
        emptyActionLabel="Ver feedbacks"
        emptyActionTo="/dashboard-do-aluno/feedbacks"
      />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex min-h-[240px] flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:col-span-2 md:p-8">
          <div className="mb-6 flex items-start justify-between">
            <h3 className="text-lg font-bold uppercase tracking-tight text-white">Atividade semanal</h3>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
              Últimos 7 dias
            </span>
          </div>
          <div className="flex h-32 items-end justify-between gap-2">
            {stats.treinosPorDia.map((d) => (
              <div key={d.dia} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className={`w-full transition-all duration-500 ${d.count > 0 ? 'bg-zinc-600' : 'bg-zinc-800'}`}
                  style={{ height: `${(d.count / stats.maxTreinos) * 100}%`, minHeight: d.count > 0 ? '4px' : '0' }}
                />
                <span className={`text-[9px] font-bold uppercase ${d.count > 0 ? 'text-zinc-300' : 'text-zinc-500'}`}>
                  {new Date(d.dia).toLocaleDateString('pt-BR', { weekday: 'short' }).toUpperCase().replace('.', '')}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div>
            <span className="material-symbols-outlined text-zinc-400">local_fire_department</span>
            <h3 className="mt-2 text-4xl font-black uppercase italic leading-none">
              {stats.totalSessoes > 0 ? '07' : '00'} dias
            </h3>
            <p className="mt-1 text-xs uppercase tracking-widest text-zinc-400">Sequência estimada</p>
          </div>
          <div className="mt-4 border-t border-zinc-800 pt-4">
            <p className="text-xs italic text-zinc-400">"A consistência supera o talento quando o talento não treina."</p>
          </div>
        </div>
      </section>

      <section
        className={`rounded-[28px] border p-6 md:p-8 ${
          hasPendingFeedback ? 'border-brand-red/30 bg-zinc-900/80' : 'border-zinc-800/60 bg-zinc-900/80'
        }`}
      >
        <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Correções & respostas</p>
            <h3 className="mt-2 text-2xl font-black uppercase italic tracking-tight md:text-3xl">Meus feedbacks</h3>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Veja rapidamente se o professor já respondeu e acesse a tela completa para relatar novas falhas.
            </p>
          </div>

          <div className="flex gap-3">
            <Link
              to="/dashboard-do-aluno/feedbacks"
              className="rounded-2xl border border-zinc-800 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-zinc-800"
            >
              Ver todos os feedbacks
            </Link>
            <Link
              to="/dashboard-do-aluno/feedbacks"
              className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition-colors hover:bg-brand-red/20 active:scale-95"
            >
              Relatar nova falha
            </Link>
          </div>
        </div>

        {loadingFeedbacks && feedbacks.length === 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="h-28 animate-pulse rounded-2xl bg-zinc-800" />
            <div className="h-28 animate-pulse rounded-2xl bg-zinc-800" />
            <div className="h-28 animate-pulse rounded-2xl bg-zinc-800 md:col-span-1" />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border-l-4 border-brand-red/20 bg-zinc-900/80 p-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Total de feedbacks</span>
              <div className="mt-2 text-4xl font-headline font-black text-white">{feedbackStats.total}</div>
            </div>
            <div className={`rounded-2xl border-l-4 bg-zinc-900/80 p-5 ${hasPendingFeedback ? 'border-brand-red/20' : 'border-zinc-700'}`}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Aguardando resposta</span>
                {hasPendingFeedback ? (
                  <span className="inline-flex items-center gap-1 rounded-full border border-brand-red/20 bg-brand-red/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                    <span className="material-symbols-outlined text-[14px]">notifications_active</span>
                    Novo
                  </span>
                ) : null}
              </div>
              <div className="mt-2 flex items-end gap-2">
                <div className="text-4xl font-headline font-black text-white">{feedbackStats.aguardando}</div>
                {hasPendingFeedback ? <span className="mb-1 text-2xl text-brand-red">!</span> : null}
              </div>
            </div>
            <div className="rounded-2xl border-l-4 border-zinc-700 bg-zinc-900/80 p-5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Corrigidos</span>
              <div className="mt-2 text-4xl font-headline font-black text-white">{feedbackStats.corrigidos}</div>
            </div>
          </div>
        )}

        <div className="mt-6 space-y-3">
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback: Feedback) => (
              <article
                key={feedback.id}
                className={`flex flex-col gap-4 rounded-2xl border p-4 md:flex-row md:items-center md:justify-between ${
                  feedback.status === 'aguardando_aluno' ? 'border-brand-red/20 bg-brand-red/10' : 'border-zinc-800 bg-zinc-950/60'
                }`}
              >
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                        feedback.status === 'aguardando_aluno'
                          ? 'border border-brand-red/20 bg-brand-red/10 text-brand-red'
                          : 'border border-zinc-800 bg-zinc-900/80 text-zinc-300'
                      }`}
                    >
                      {feedback.status === 'aguardando_aluno'
                        ? 'Aguardando aluno'
                        : feedback.status === 'corrigido'
                          ? 'Corrigido'
                          : feedback.status.replace(/_/g, ' ')}
                    </span>
                    {feedback.recomendacaoProfessor ? (
                      <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        Professor respondeu
                      </span>
                    ) : null}
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
                      Atualizado{' '}
                      {new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: '2-digit' }).format(feedback.updatedAt)}
                    </span>
                  </div>
                  <h4 className="font-headline text-lg font-black uppercase tracking-tight text-white">{feedback.titulo}</h4>
                  <p className="mt-1 max-w-2xl line-clamp-2 text-sm leading-7 text-zinc-400">{feedback.descricao}</p>
                </div>
                <Link
                  to="/dashboard-do-aluno/feedbacks"
                  className="self-start rounded-2xl border border-zinc-800 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-white transition-colors hover:bg-zinc-800 md:self-center"
                >
                  Abrir
                </Link>
              </article>
            ))
          ) : !loadingFeedbacks ? (
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Sem feedbacks ainda</p>
              <p className="mt-2 text-sm text-zinc-400">
                Quando você registrar uma falha ou receber uma correção, ela vai aparecer aqui.
              </p>
              <Link
                to="/dashboard-do-aluno/feedbacks"
                className="mt-4 inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
              >
                Novo feedback
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Link
          to="/biblioteca-de-tecnicas"
          className="group rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition-colors hover:bg-zinc-900 md:p-8"
        >
          <span className="material-symbols-outlined mb-4 text-zinc-300">video_library</span>
          <h4 className="font-headline text-xl font-bold uppercase italic text-white">Biblioteca</h4>
          <p className="mt-2 text-xs text-zinc-400">Acesse vídeos e detalhes técnicos da base.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
            Explorar <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </div>
        </Link>
        <Link
          to="/dashboard-do-aluno/trilhas"
          className="group rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition-colors hover:bg-zinc-900 md:p-8"
        >
          <span className="material-symbols-outlined mb-4 text-zinc-300">insights</span>
          <h4 className="font-headline text-xl font-bold uppercase italic text-white">Trilhas</h4>
          <p className="mt-2 text-xs text-zinc-400">Seu roteiro personalizado rumo à próxima faixa.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
            Ver mapa <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </div>
        </Link>
        <Link
          to="/professor-ia"
          className="group relative overflow-hidden rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 transition-colors hover:bg-zinc-900 md:p-8"
        >
          <span className="material-symbols-outlined mb-4 text-zinc-300">psychology</span>
          <h4 className="font-headline text-xl font-bold uppercase italic text-white">Assistente IA</h4>
          <p className="mt-2 text-xs text-zinc-400">Dúvidas táticas? Pergunte ao seu assistente virtual.</p>
          <div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase text-zinc-300 opacity-0 transition-opacity group-hover:opacity-100">
            Conversar <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </div>
        </Link>
      </section>

      <section className="flex flex-col justify-between gap-6 rounded-[28px] border border-zinc-800/80 bg-zinc-950/60 p-6 md:flex-row md:items-center md:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900">
            <span className="material-symbols-outlined text-3xl text-zinc-400">calendar_today</span>
          </div>
          <div>
            <h5 className="font-headline text-lg font-bold uppercase tracking-tight text-white">
              Próximo treino presencial
            </h5>
            <p className="font-body text-sm text-zinc-400">Hoje, 19:30 · Treino de competição</p>
          </div>
        </div>
        <button className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-xs font-black uppercase tracking-widest text-brand-red transition-colors hover:bg-brand-red/20">
          Confirmar presença
        </button>
      </section>
    </main>
  );
}
