import { Link } from 'react-router-dom';

export default function ListaDeTurmas() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-4xl items-center px-4 pb-32 pt-24 md:px-6">
      <section className="w-full rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">Turmas</p>
            <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Em breve</h1>
            <p className="max-w-2xl text-sm leading-7 text-zinc-400">
              A entidade de turmas ainda não está exposta por uma fonte de verdade no backend. Para não inventar
              capacidade, professor ou horário, esta página fica propositalmente fora da navegação até existir um
              contrato real.
            </p>
          </div>
          <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
            Estado honesto
          </span>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Motivo</p>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Ainda não há repository/service de turmas com dados confiáveis neste workspace.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Risco</p>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Qualquer lista improvisada criaria uma superfície visual falsa e quebraria a verdade operacional.
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Próximo passo</p>
            <p className="mt-2 text-sm leading-7 text-zinc-300">
              Modelar `turmas` no backend antes de reabrir esta rota no menu.
            </p>
          </article>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95"
          >
            Voltar ao painel
          </Link>
          <Link
            to="/dashboard-do-aluno"
            className="inline-flex items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95"
          >
            Ver dashboard do aluno
          </Link>
        </div>
      </section>
    </main>
  );
}
