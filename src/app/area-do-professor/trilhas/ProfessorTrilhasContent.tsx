import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTrilhasProfessor } from '../../../modules/trilhas/hooks/useTrilhasProfessor';
import type { FaixaAlvo, SalvarTrilhaInput, TrilhaComTecnicas, TrilhaStatus } from '../../../modules/trilhas/types';

const FAIXAS: FaixaAlvo[] = ['Branca', 'Azul', 'Roxa', 'Marrom', 'Preta'];

type ProfessorTrilhaFormState = {
  id: string;
  titulo: string;
  descricao: string;
  faixaAlvo: FaixaAlvo;
  status: TrilhaStatus;
  tecnicasIds: string[];
};

function statusTone(status: TrilhaComTecnicas['status']) {
  return status === 'publicada'
    ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
    : 'border-zinc-800 bg-zinc-950/60 text-zinc-300';
}

function faixaTone(faixa: FaixaAlvo) {
  return faixa === 'Preta'
    ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
    : 'border-zinc-800 bg-zinc-950/60 text-zinc-300';
}

function formatDate(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  }).format(value);
}

const FORM_INITIAL: ProfessorTrilhaFormState = {
  id: '',
  titulo: '',
  descricao: '',
  faixaAlvo: 'Branca',
  status: 'rascunho',
  tecnicasIds: [],
};

export default function ProfessorTrilhasContent() {
  const { trilhas, tecnicasDisponiveis, loading, saving, error, actions } = useTrilhasProfessor();
  const [form, setForm] = useState<ProfessorTrilhaFormState>(FORM_INITIAL);
  const [selectedTrailId, setSelectedTrailId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const selectedTrail = useMemo(
    () => trilhas.find((trilha) => trilha.id === selectedTrailId) ?? null,
    [selectedTrailId, trilhas],
  );

  useEffect(() => {
    if (!selectedTrail) {
      setForm(FORM_INITIAL);
      return;
    }

    setForm({
      id: selectedTrail.id,
      titulo: selectedTrail.titulo,
      descricao: selectedTrail.descricao,
      faixaAlvo: selectedTrail.faixaAlvo,
      status: selectedTrail.status,
      tecnicasIds: selectedTrail.tecnicasIds,
    });
  }, [selectedTrail]);

  const totalPublicadas = useMemo(() => trilhas.filter((trilha) => trilha.status === 'publicada').length, [trilhas]);
  const totalRascunhos = useMemo(() => trilhas.filter((trilha) => trilha.status === 'rascunho').length, [trilhas]);

  const toggleTecnica = (tecnicaId: string) => {
    setForm((current) => ({
      ...current,
      tecnicasIds: current.tecnicasIds.includes(tecnicaId)
        ? current.tecnicasIds.filter((id) => id !== tecnicaId)
        : [...current.tecnicasIds, tecnicaId],
    }));
  };

  const salvar = async (status: TrilhaStatus) => {
    const payload: SalvarTrilhaInput = {
      id: form.id || undefined,
      titulo: form.titulo,
      descricao: form.descricao,
      faixaAlvo: form.faixaAlvo,
      status,
      tecnicasIds: form.tecnicasIds,
    };

    const ok = await actions.salvarTrilha(payload);

    if (ok) {
      setFeedback(status === 'publicada' ? 'Trilha publicada com sucesso.' : 'Rascunho salvo com sucesso.');
      setSelectedTrailId(null);
      setForm(FORM_INITIAL);
    }
  };

  const abrirTrilha = (trilha: TrilhaComTecnicas) => {
    setFeedback(null);
    setSelectedTrailId(trilha.id);
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Módulo do professor</p>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Construtor de trilhas</h2>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
              Selecione técnicas da biblioteca e organize um caminho de aprendizado por faixa.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedTrailId(null);
              setFeedback(null);
              setForm(FORM_INITIAL);
            }}
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
          >
            <span className="material-symbols-outlined text-[18px]">add</span>
            Nova trilha
          </button>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Trilhas</p>
            <p className="mt-2 text-3xl font-black text-white">{trilhas.length}</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Publicadas</p>
            <p className="mt-2 text-3xl font-black text-white">{totalPublicadas}</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Rascunhos</p>
            <p className="mt-2 text-3xl font-black text-white">{totalRascunhos}</p>
          </div>
          <div className="rounded-2xl border border-brand-red/20 bg-brand-red/10 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-brand-red">Técnicas</p>
            <p className="mt-2 text-3xl font-black text-white">{tecnicasDisponiveis.length}</p>
          </div>
        </div>

        {feedback ? (
          <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-sm text-zinc-300">
            {feedback}
          </div>
        ) : null}

        {error ? (
          <div className="mt-6 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
            {error}
          </div>
        ) : null}

        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Título</span>
              <input
                value={form.titulo}
                onChange={(event) => setForm((current) => ({ ...current, titulo: event.target.value }))}
                className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                placeholder="Ex.: Defesa de queda para guarda fechada"
              />
            </label>

            <label className="block">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Faixa alvo</span>
              <select
                value={form.faixaAlvo}
                onChange={(event) =>
                  setForm((current) => ({ ...current, faixaAlvo: event.target.value as FaixaAlvo }))
                }
                className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
              >
                {FAIXAS.map((faixa) => (
                  <option key={faixa} value={faixa} className="bg-zinc-950">
                    {faixa}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Descrição</span>
            <textarea
              value={form.descricao}
              onChange={(event) => setForm((current) => ({ ...current, descricao: event.target.value }))}
              rows={5}
              className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
              placeholder="Explique o foco do módulo, pontos de atenção e objetivo de evolução."
            />
          </label>

          <label className="block">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Status</span>
            <select
              value={form.status}
              onChange={(event) => setForm((current) => ({ ...current, status: event.target.value as TrilhaStatus }))}
              className="mt-2 w-full rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
            >
              <option value="rascunho" className="bg-zinc-950">
                Rascunho
              </option>
              <option value="publicada" className="bg-zinc-950">
                Publicada
              </option>
            </select>
          </label>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Técnicas</p>
              <h3 className="mt-1 text-xl font-black uppercase tracking-tight text-white">Escolha os módulos</h3>
            </div>
            <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
              {form.tecnicasIds.length} selecionada(s)
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {tecnicasDisponiveis.map((tecnica) => {
              const selected = form.tecnicasIds.includes(tecnica.id);
              return (
                <button
                  key={tecnica.id}
                  type="button"
                  onClick={() => toggleTecnica(tecnica.id)}
                  className={`rounded-2xl border p-4 text-left transition duration-200 hover:scale-[1.01] ${
                    selected
                      ? 'border-brand-red/20 bg-brand-red/10'
                      : 'border-zinc-800 bg-zinc-950/60 hover:bg-zinc-900'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                        {tecnica.categoria}
                      </p>
                      <h4 className="mt-2 text-sm font-black uppercase tracking-tight text-white">{tecnica.nome}</h4>
                      <p className="mt-2 text-sm leading-6 text-zinc-400">{tecnica.descricao}</p>
                    </div>
                    <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-right">
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                        Nível
                      </span>
                      <span className="mt-1 block text-xl font-black text-white">{tecnica.dificuldadeBase}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                        selected ? 'border-brand-red/20 bg-brand-red/10 text-brand-red' : 'border-zinc-800 text-zinc-400'
                      }`}
                    >
                      {selected ? 'Selecionada' : 'Selecionar'}
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-zinc-400">fitness_center</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-2">
          <button
            type="button"
            disabled={saving}
            onClick={() => void salvar('rascunho')}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-200 transition hover:scale-[1.01] hover:bg-zinc-800 disabled:opacity-60"
          >
            Salvar rascunho
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={() => void salvar('publicada')}
            className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:scale-[1.01] hover:bg-brand-red/20 disabled:opacity-60"
          >
            {saving ? 'Salvando...' : 'Publicar trilha'}
          </button>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Trilhas existentes</p>
            <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Planejamento da academia</h2>
          </div>
          <Link
            to="/dashboard-do-aluno/trilhas"
            className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
          >
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            Ver como aluno
          </Link>
        </div>

        <div className="mt-6 space-y-3">
          {loading ? (
            <div className="space-y-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-28 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
              ))}
            </div>
          ) : trilhas.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-center">
              <span className="material-symbols-outlined text-4xl text-zinc-400">route</span>
              <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhuma trilha cadastrada</p>
              <p className="mt-2 text-sm text-zinc-400">
                Comece montando a primeira trilha com técnicas da biblioteca.
              </p>
            </div>
          ) : (
            trilhas.map((trilha) => (
              <article key={trilha.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${statusTone(
                          trilha.status,
                        )}`}
                      >
                        {trilha.status}
                      </span>
                      <span
                        className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${faixaTone(
                          trilha.faixaAlvo,
                        )}`}
                      >
                        Faixa {trilha.faixaAlvo}
                      </span>
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-white">{trilha.titulo}</h3>
                    <p className="text-sm leading-7 text-zinc-400">{trilha.descricao}</p>
                    <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-500">
                      Atualizada {formatDate(trilha.updatedAt)}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => abrirTrilha(trilha)}
                      className="rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-200 transition hover:bg-zinc-800"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        void actions.salvarTrilha({
                          id: trilha.id,
                          titulo: trilha.titulo,
                          descricao: trilha.descricao,
                          faixaAlvo: trilha.faixaAlvo,
                          status: trilha.status === 'publicada' ? 'rascunho' : 'publicada',
                          tecnicasIds: trilha.tecnicasIds,
                        })
                      }
                      className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition hover:bg-brand-red/20"
                    >
                      {trilha.status === 'publicada' ? 'Voltar para rascunho' : 'Publicar'}
                    </button>
                    <button
                      type="button"
                      onClick={() => void actions.removerTrilha(trilha.id)}
                      className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 transition hover:bg-zinc-800"
                    >
                      Remover
                    </button>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {trilha.tecnicas.map((tecnica) => (
                    <span
                      key={tecnica.id}
                      className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300"
                    >
                      {tecnica.nome}
                    </span>
                  ))}
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
