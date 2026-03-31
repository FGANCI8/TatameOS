import { useMemo } from 'react';
import { useGym } from '../../../contexts/GymContext';
import { useTreino } from '../../../hooks/useTreino';

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
}

export function TreinosWidget() {
  const { selectedGym } = useGym();
  const { data: treinos, loading, error } = useTreino(selectedGym?.id ?? null);

  const recentTreino = useMemo(() => treinos[0] ?? null, [treinos]);

  if (!selectedGym) {
    return (
      <section className="rounded-[28px] border border-dashed border-zinc-800/80 bg-zinc-900/60 p-6 text-sm text-zinc-400">
        Aguardando seleção de academia
      </section>
    );
  }

  if (loading) {
    return (
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6">
        <div className="h-3 w-32 animate-pulse rounded-full bg-zinc-800/60" />
        <div className="mt-3 h-7 w-52 animate-pulse rounded-2xl bg-zinc-800/60" />
        <div className="mt-6 h-24 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
      </section>
    );
  }

  if (error) {
    return (
      <section className="rounded-[28px] border border-brand-red/30 bg-brand-red/10 p-6 text-sm text-brand-red">
        {error}
      </section>
    );
  }

  return (
    <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Treinos</p>
          <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Atividade recente</h2>
        </div>
        <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
          {treinos.length} treino(s)
        </span>
      </div>

      {treinos.length === 0 || !recentTreino ? (
        <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-sm text-zinc-400">
          Nenhum treino encontrado para esta academia.
        </div>
      ) : (
        <article className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Último registro</p>
          <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">{recentTreino.tecnicaId}</p>
          <p className="mt-2 text-sm text-zinc-400">Aluno: {recentTreino.alunoId}</p>
          <p className="mt-2 text-sm text-zinc-400">Data: {formatDate(recentTreino.data)}</p>
          <p className="mt-2 text-sm text-zinc-400">Dificuldade: {recentTreino.dificuldadePercebida}/5</p>
        </article>
      )}
    </section>
  );
}
