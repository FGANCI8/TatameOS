import { useGym } from '../../../contexts/GymContext';
import { useAlunos } from '../../../modules/aluno/hooks/useAlunos';

export function AlunosWidget() {
  const { selectedGym } = useGym();
  const { data: alunos, loading, error } = useAlunos(selectedGym?.id ?? null);

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
        <div className="mt-3 h-7 w-48 animate-pulse rounded-2xl bg-zinc-800/60" />
        <div className="mt-6 space-y-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="h-16 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
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
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Alunos</p>
          <h2 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Resumo da academia</h2>
        </div>
        <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
          {alunos.length} cadastro(s)
        </span>
      </div>

      {alunos.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-sm text-zinc-400">
          Nenhum aluno encontrado para esta academia.
        </div>
      ) : (
        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {alunos.slice(0, 6).map((aluno) => (
            <article key={aluno.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-sm font-black uppercase tracking-tight text-white">{aluno.nome}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-400">
                {aluno.faixa} {aluno.grau} · {aluno.status}
              </p>
              <p className="mt-3 text-2xl font-black text-white">{aluno.horasTotais}h</p>
              <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Horas acumuladas</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
