import { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useAlunos } from '../../modules/aluno/hooks/useAlunos';
import { useFinanceiroExecutivo } from '../../modules/financeiro-executivo/hooks/useFinanceiroExecutivo';
import { useFeedbacks } from '../../modules/feedbacks/hooks/useFeedbacks';
import { usePresencas } from '../../modules/presencas/hooks/usePresencas';
import type { Feedback } from '../../modules/feedbacks/types';

function formatDateTime(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

function humanizeStatus(status: Feedback['status']) {
  return status.replace(/_/g, ' ');
}

function needsReply(feedback: Feedback) {
  return !['corrigido', 'encerrado', 'descartado'].includes(feedback.status) && !feedback.recomendacaoProfessor?.trim();
}

export default function PainelDoProfessorContent() {
  const { userId, isProfessorOrAdmin } = useAuth();
  const {
    data: alunos,
    loading: loadingAlunos,
    error: alunosError,
  } = useAlunos();
  const {
    alunos: filaChamada,
    loading: loadingChamada,
    historico,
    historicoLoading,
    historicoError,
    error: chamadaError,
    carregar,
    carregarHistorico,
  } = usePresencas();
  const {
    data: feedbacks,
    loading: loadingFeedbacks,
    error: feedbacksError,
    actions: { listarFeedbacksPorProfessor },
  } = useFeedbacks({ autoLoad: false });
  const { resumo, loading: loadingFinanceiro, error: financeiroError, mes, ano, carregarResumo } = useFinanceiroExecutivo();

  useEffect(() => {
    void carregar();
    void carregarHistorico({ limite: 5 });
  }, [carregar, carregarHistorico]);

  useEffect(() => {
    if (!userId) return;
    void listarFeedbacksPorProfessor(userId);
  }, [listarFeedbacksPorProfessor, userId]);

  const alunosAtivos = useMemo(() => alunos.filter((aluno) => aluno.status === 'Ativo'), [alunos]);
  const feedbacksPendentes = useMemo(() => feedbacks.filter(needsReply), [feedbacks]);
  const checkinsRecentes = historico.slice(0, 5);
  const filaAtiva = filaChamada.filter((aluno) => aluno.status === 'Ativo').slice(0, 6);
  const riscoFinanceiro = resumo?.statusRisco ?? 'saudavel';
  const riscoLabel = riscoFinanceiro === 'critico' ? 'Critico' : riscoFinanceiro === 'atencao' ? 'Atencao' : 'Saudavel';

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Painel do professor
            </span>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Painel do professor</h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              Dados reais do tenant atual, sem maquiagem. Quando algo nao existe, o estado aparece como vazio ou
              indisponivel.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/area-do-professor"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
              Area do professor
            </Link>
            <Link
              to="/area-do-professor/feedbacks"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              <span className="material-symbols-outlined text-[18px]">post_add</span>
              Revisar feedbacks
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Alunos ativos</p>
          <div className="mt-3 flex items-end gap-3">
            <span className="text-5xl font-black uppercase tracking-tight text-white">{alunosAtivos.length}</span>
            <span className="pb-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
              {loadingAlunos && alunos.length === 0 ? 'Carregando' : 'No tenant atual'}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">Fonte: cadastro de alunos com status Ativo.</p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Fila de chamada</p>
          <div className="mt-3 flex items-end gap-3">
            <span className="text-5xl font-black uppercase tracking-tight text-white">{filaAtiva.length}</span>
            <span className="pb-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
              {loadingChamada && filaChamada.length === 0 ? 'Carregando' : 'Prontos para presenca'}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">Alunos prontos para a proxima chamada.</p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Feedbacks pendentes</p>
          <div className="mt-3 flex items-end gap-3">
            <span className="text-5xl font-black uppercase tracking-tight text-white">{feedbacksPendentes.length}</span>
            <span className="pb-1 text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">
              {loadingFeedbacks && feedbacks.length === 0 ? 'Carregando' : 'Aguardando resposta'}
            </span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">Itens sem resposta do professor ou ainda em aberto.</p>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Financeiro</p>
          <div className="mt-3 flex items-end gap-3">
            <span className="text-4xl font-black uppercase tracking-tight text-white">{riscoLabel}</span>
          </div>
          <p className="mt-3 text-sm leading-7 text-zinc-400">
            {resumo ? `Taxa de inadimplencia: ${resumo.taxaInadimplencia.toFixed(1)}%` : 'Resumo executivo nao carregado.'}
          </p>
        </article>
      </section>

      {alunosError ? <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-5 text-sm leading-7 text-zinc-300">{alunosError}</section> : null}
      {chamadaError ? <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-5 text-sm leading-7 text-zinc-300">{chamadaError}</section> : null}
      {historicoError ? <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-5 text-sm leading-7 text-zinc-300">{historicoError}</section> : null}
      {feedbacksError ? <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-5 text-sm leading-7 text-zinc-300">{feedbacksError}</section> : null}
      {financeiroError ? <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-5 text-sm leading-7 text-zinc-300">{financeiroError}</section> : null}

      <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Ultimos check-ins</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Historico recente de presencas</h2>
            </div>
            <Link
              to="/area-do-professor/historico-de-presencas"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              Ver historico
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {historicoLoading && checkinsRecentes.length === 0 ? (
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
                ))}
              </div>
            ) : checkinsRecentes.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">event_busy</span>
                <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Sem registros recentes</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">Quando houver novas presencas registradas, elas aparecem aqui.</p>
              </div>
            ) : (
              checkinsRecentes.map((item) => (
                <article key={item.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{item.alunoNome}</p>
                      <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-white">{formatDateTime(item.data)}</h3>
                    </div>
                    <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                      +{item.horasIncrementadas.toFixed(1)}h
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-zinc-400">Duracao padrao: {item.duracaoPadrao} min. Registro validado no tenant atual.</p>
                </article>
              ))
            )}
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Feedbacks</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Pendentes de resposta</h2>
            </div>
            <Link
              to="/area-do-professor/feedbacks"
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              Abrir feedbacks
            </Link>
          </div>

          <div className="mt-6 space-y-3">
            {loadingFeedbacks && feedbacks.length === 0 ? (
              <div className="space-y-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index} className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
                ))}
              </div>
            ) : feedbacksPendentes.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">task_alt</span>
                <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nada pendente</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">Nao ha feedbacks aguardando resposta no momento.</p>
              </div>
            ) : (
              feedbacksPendentes.map((feedback) => (
                <article key={feedback.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                        {humanizeStatus(feedback.status)}
                      </span>
                      <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        Gravidade {feedback.gravidade}
                      </span>
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-white">{feedback.titulo}</h3>
                    <p className="text-sm leading-7 text-zinc-400">{feedback.descricao}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                      Atualizado {formatDateTime(feedback.updatedAt)}
                    </p>
                  </div>
                </article>
              ))
            )}
          </div>
        </article>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Proxima chamada</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Fila para presenca</h2>
            </div>
            <Link
              to="/area-do-professor/chamada"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              Abrir chamada
            </Link>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {loadingChamada && filaAtiva.length === 0 ? (
              <div className="md:col-span-2 space-y-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
                ))}
              </div>
            ) : filaAtiva.length === 0 ? (
              <div className="md:col-span-2 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
                <span className="material-symbols-outlined text-4xl text-zinc-400">group_off</span>
                <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Fila vazia</p>
                <p className="mt-2 text-sm leading-7 text-zinc-400">Nao ha alunos ativos prontos para chamada agora.</p>
              </div>
            ) : (
              filaAtiva.map((aluno) => (
                <article key={aluno.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">{aluno.nome}</p>
                  <h3 className="mt-2 text-lg font-black uppercase tracking-tight text-white">
                    {aluno.faixa} - G{aluno.grau}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{aluno.email}</p>
                </article>
              ))
            )}
          </div>
        </article>

        <article className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Resumo financeiro</p>
              <h2 className="mt-2 text-2xl font-black uppercase tracking-tight text-white">Indicadores do periodo</h2>
            </div>
            <button
              type="button"
              onClick={() => void carregarResumo(mes, ano)}
              className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              Atualizar resumo
            </button>
          </div>

          {loadingFinanceiro && !resumo ? (
            <div className="mt-6 space-y-3">
              <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              <div className="h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
            </div>
          ) : resumo ? (
            <div className="mt-6 space-y-4">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Alunos ativos</p>
                  <p className="mt-2 text-3xl font-black uppercase tracking-tight text-white">{resumo.alunosAtivos}</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Em atraso</p>
                  <p className="mt-2 text-3xl font-black uppercase tracking-tight text-white">{resumo.alunosEmAtraso}</p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Taxa de inadimplencia</p>
                  <p className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
                    {resumo.taxaInadimplencia.toFixed(1)}%
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Saldo projetado 6 meses</p>
                  <p className="mt-2 text-3xl font-black uppercase tracking-tight text-white">
                    {resumo.saldoProjetado6Meses.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Observacoes</p>
                <div className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
                  {resumo.observacoes.length > 0 ? (
                    resumo.observacoes.map((observacao) => <p key={observacao}>{observacao}</p>)
                  ) : (
                    <p>Sem observacoes adicionais para este periodo.</p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-4xl text-zinc-400">payments</span>
              <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Resumo indisponivel</p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                O resumo financeiro nao ficou disponivel para este perfil ou periodo.
              </p>
            </div>
          )}
        </article>
      </section>

      {isProfessorOrAdmin ? null : (
        <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-5 text-sm leading-7 text-zinc-300">
          O painel exige perfil de professor ou admin para carregar os dados operacionais.
        </section>
      )}
    </main>
  );
}
