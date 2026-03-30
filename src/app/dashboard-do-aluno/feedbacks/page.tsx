import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useAluno } from '../../../modules/aluno/hooks/useAluno';
import { useFeedbacks } from '../../../modules/feedbacks/hooks/useFeedbacks';
import type { Feedback, FeedbackOrigemTipo } from '../../../modules/feedbacks/types';

const origemLabels: Record<FeedbackOrigemTipo, string> = {
  falha: 'Falha',
  treino: 'Treino',
  luta: 'Luta',
  campeonato: 'Campeonato',
};

const origemOptions: FeedbackOrigemTipo[] = ['treino', 'luta', 'campeonato'];

const statusLabels: Record<Feedback['status'], string> = {
  aberto: 'Aberto',
  em_analise: 'Em análise',
  em_andamento: 'Em andamento',
  aguardando_aluno: 'Aguardando aluno',
  corrigido: 'Corrigido',
  encerrado: 'Encerrado',
  descartado: 'Descartado',
};

const statusClasses: Record<Feedback['status'], string> = {
  aberto: 'border-zinc-800 bg-zinc-900 text-zinc-200',
  em_analise: 'border-zinc-800 bg-zinc-950/60 text-zinc-300',
  em_andamento: 'border-zinc-800 bg-zinc-950/60 text-zinc-300',
  aguardando_aluno: 'border-brand-red/20 bg-brand-red/10 text-brand-red',
  corrigido: 'border-zinc-800 bg-zinc-950/60 text-zinc-300',
  encerrado: 'border-zinc-800 bg-zinc-900 text-zinc-300',
  descartado: 'border-zinc-800 bg-zinc-950/60 text-zinc-300',
};

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);
}

export default function FeedbacksDoAlunoPage() {
  const { userId } = useAuth();
  const { perfil } = useAluno();
  const {
    data: feedbacks,
    loading,
    error,
    actions: { listarFeedbacksPorAluno, criarFeedback },
  } = useFeedbacks({ autoLoad: false });

  const [modalAberto, setModalAberto] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [origemTipo, setOrigemTipo] = useState<FeedbackOrigemTipo>('treino');
  const [gravidade, setGravidade] = useState<1 | 2 | 3 | 4 | 5>(3);
  const [professorId, setProfessorId] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (userId) {
      listarFeedbacksPorAluno(userId);
    }
  }, [listarFeedbacksPorAluno, userId]);

  const stats = useMemo(() => {
    const total = feedbacks.length;
    const aguardando = feedbacks.filter((item) => item.status === 'aguardando_aluno').length;
    const corrigidos = feedbacks.filter((item) => item.status === 'corrigido').length;
    const comResposta = feedbacks.filter((item) => Boolean(item.recomendacaoProfessor?.trim())).length;
    return { total, aguardando, corrigidos, comResposta };
  }, [feedbacks]);

  const resetForm = () => {
    setTitulo('');
    setDescricao('');
    setOrigemTipo('treino');
    setGravidade(3);
    setProfessorId('');
    setFormError(null);
  };

  const openModal = () => {
    setModalAberto(true);
    setFormError(null);
    setProfessorId(import.meta.env.VITE_DEFAULT_PROFESSOR_ID || '');
  };

  const closeModal = () => {
    setModalAberto(false);
    setEnviando(false);
    resetForm();
  };

  const handleSubmit = async () => {
    if (!userId) {
      setFormError('Usuário não autenticado.');
      return;
    }

    if (!titulo.trim()) {
      setFormError('Informe um título.');
      return;
    }

    if (!descricao.trim()) {
      setFormError('Informe uma descrição.');
      return;
    }

    if (!professorId.trim()) {
      setFormError('Informe o professor destinatário.');
      return;
    }

    setEnviando(true);
    setFormError(null);

    const ok = await criarFeedback({
      alunoId: userId,
      professorId: professorId.trim(),
      origemTipo,
      origemId: `${origemTipo}-${Date.now()}`,
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      gravidade,
    });

    setEnviando(false);

    if (ok) {
      closeModal();
      await listarFeedbacksPorAluno(userId);
    } else {
      setFormError('Não foi possível enviar o feedback. Tente novamente.');
    }
  };

  return (
    <main className="relative mx-auto max-w-6xl space-y-8 px-4 pb-28 pt-20">
      <section className="absolute inset-0 -z-10 bg-zinc-950 bg-dot-grid opacity-70" />

      <section className="flex flex-col justify-between gap-6 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:flex-row md:items-end">
        <div>
          <p className="mb-1 text-xs font-label uppercase tracking-[0.3em] text-zinc-400">Meu espaço de evolução</p>
          <h1 className="font-headline text-4xl font-black uppercase leading-none tracking-tight md:text-5xl">
            Olá, {perfil?.nome.split(' ')[0] || 'Atleta'}!
          </h1>
          <p className="mt-2 max-w-xl font-body text-zinc-400">
            Registre suas falhas, acompanhe a resposta do professor e volte ao tatame com uma correção mais clara.
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/dashboard-do-aluno"
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-4 font-headline text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-zinc-800"
          >
            Voltar ao dashboard
          </Link>
          <button
            onClick={openModal}
            className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-4 font-headline text-xs font-black uppercase tracking-widest text-brand-red transition-colors hover:bg-brand-red/20 active:scale-95"
          >
            Novo feedback
          </button>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-brand-red/20 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Total</span>
          <div className="mt-2 text-4xl font-headline font-black text-white">{stats.total}</div>
        </div>
        <div className="rounded-2xl border border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Aguardando</span>
          <div className="mt-2 text-4xl font-headline font-black text-white">{stats.aguardando}</div>
        </div>
        <div className="rounded-2xl border border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Corrigidos</span>
          <div className="mt-2 text-4xl font-headline font-black text-white">{stats.corrigidos}</div>
        </div>
        <div className="rounded-2xl border border-brand-red/20 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Com resposta</span>
          <div className="mt-2 text-4xl font-headline font-black text-white">{stats.comResposta}</div>
        </div>
      </section>

      {loading && feedbacks.length === 0 ? (
        <div className="animate-pulse rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <div className="mb-6 h-8 w-72 rounded-2xl bg-zinc-800/80" />
          <div className="space-y-4">
            <div className="h-28 rounded-2xl bg-zinc-800" />
            <div className="h-28 rounded-2xl bg-zinc-800" />
            <div className="h-28 rounded-2xl bg-zinc-800" />
          </div>
        </div>
      ) : null}

      {error ? (
        <div className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-brand-red">Falha na consulta</p>
          <p className="mt-3 text-white">{error}</p>
        </div>
      ) : null}

      {!loading && feedbacks.length === 0 ? (
        <section className="rounded-[28px] border border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Sem registros</p>
          <h2 className="mt-4 text-3xl font-headline font-black uppercase tracking-tighter text-white">
            Nenhum feedback criado ainda
          </h2>
          <p className="mt-3 max-w-2xl text-zinc-400">
            Use o botão novo feedback para relatar uma falha de treino, luta ou campeonato.
          </p>
          <button
            onClick={openModal}
            className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Novo feedback
          </button>
        </section>
      ) : null}

      <div className="space-y-4">
        {feedbacks.map((feedback) => (
          <article
            key={feedback.id}
            className={`rounded-[28px] border rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none md:p-8 ${
              feedback.status === 'aguardando_aluno' ? 'border-brand-red/20' : 'border-zinc-800/60'
            }`}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
              <div className="flex-1">
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-black ${statusClasses[feedback.status]}`}
                  >
                    {statusLabels[feedback.status]}
                  </span>
                  {feedback.recomendacaoProfessor ? (
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-black text-zinc-300">
                      Professor respondeu
                    </span>
                  ) : null}
                </div>

                <h2 className="text-2xl font-headline font-black uppercase tracking-tight text-white">{feedback.titulo}</h2>
                <p className="mt-3 max-w-3xl whitespace-pre-line text-sm leading-7 text-zinc-400">{feedback.descricao}</p>

                <div className="mt-5 flex flex-wrap gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                  <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-2">Origem {origemLabels[feedback.origemTipo]}</span>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-2">Gravidade {feedback.gravidade}/5</span>
                  <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-2">
                    Atualizado {formatDate(feedback.updatedAt)}
                  </span>
                </div>

                {feedback.recomendacaoProfessor ? (
                  <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-300">Recomendação do professor</p>
                    <p className="mt-2 text-sm leading-7 text-white">{feedback.recomendacaoProfessor}</p>
                  </div>
                ) : (
                  <div className="mt-5 rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Aguardando resposta</p>
                    <p className="mt-2 text-sm leading-7 text-white/80">
                      O professor ainda não enviou uma recomendação para este relato.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {modalAberto ? (
        <div className="fixed inset-0 z-[200]">
          <button
            type="button"
            aria-label="Fechar formulário"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />

          <aside className="absolute inset-x-0 bottom-0 flex h-[calc(100vh-5rem)] flex-col border border-zinc-800 bg-zinc-900 md:left-1/2 md:my-10 md:w-[min(92vw,760px)] md:-translate-x-1/2">
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 p-6 md:p-8">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Novo feedback</p>
                <h2 className="mt-3 text-3xl font-headline font-black uppercase tracking-tighter text-white md:text-4xl">
                  Relatar falha
                </h2>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="flex h-11 w-11 items-center justify-center border border-zinc-800 bg-zinc-950/60 text-white transition-colors hover:bg-zinc-800"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto p-6 md:p-8">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Título</span>
                  <input
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none focus:border-brand-red/40"
                    placeholder="Ex: Perdi a base na passagem de guarda"
                  />
                </label>

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Origem</span>
                  <select
                    value={origemTipo}
                    onChange={(event) => setOrigemTipo(event.target.value as FeedbackOrigemTipo)}
                    className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none focus:border-brand-red/40"
                  >
                    {origemOptions.map((option) => (
                      <option key={option} value={option} className="bg-zinc-950">
                        {origemLabels[option]}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Descrição</span>
                <textarea
                  value={descricao}
                  onChange={(event) => setDescricao(event.target.value)}
                  rows={6}
                  className="mt-2 w-full resize-y rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none focus:border-brand-red/40"
                  placeholder="Descreva o que aconteceu, em que momento e o que você sentiu que travou."
                />
              </label>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">Gravidade percebida</span>
                  <select
                    value={gravidade}
                    onChange={(event) => setGravidade(Number(event.target.value) as 1 | 2 | 3 | 4 | 5)}
                    className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none focus:border-brand-red/40"
                  >
                    <option value={1}>1 - Leve</option>
                    <option value={2}>2 - Baixa</option>
                    <option value={3}>3 - Moderada</option>
                    <option value={4}>4 - Alta</option>
                    <option value={5}>5 - Crítica</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
                    Professor destinatário
                  </span>
                  <input
                    value={professorId}
                    onChange={(event) => setProfessorId(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-white outline-none focus:border-brand-red/40"
                    placeholder="UID do professor responsável"
                  />
                  <p className="mt-2 text-xs text-zinc-400">
                    Campo técnico obrigatório para encaminhar o feedback ao professor correto.
                  </p>
                </label>
              </div>

              {formError ? (
                <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 p-4">
                  <p className="text-sm text-white">{formError}</p>
                </div>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 md:p-8">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-4 font-headline text-xs font-black uppercase tracking-widest text-white transition-colors hover:bg-zinc-800"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={() => void handleSubmit()}
                disabled={enviando}
                className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-4 font-headline text-xs font-black uppercase tracking-widest text-brand-red transition-colors hover:bg-brand-red/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {enviando ? 'Enviando...' : 'Enviar feedback'}
              </button>
            </div>
          </aside>
        </div>
      ) : null}
    </main>
  );
}
