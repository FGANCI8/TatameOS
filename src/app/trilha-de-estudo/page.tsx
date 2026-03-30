export default function TrilhaDeEstudo() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Sua evolução técnica</p>
        <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Trilha do guarda aberta
        </h1>
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Módulo completo</p>
              <p className="mt-2 font-headline text-3xl font-black italic text-white">65%</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Próximo nível</p>
              <p className="mt-2 font-headline text-xl font-black uppercase tracking-tight text-white">Faixa azul II</p>
            </div>
          </div>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">
            <div className="h-full w-[65%] rounded-full bg-brand-red/10" />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Mapa da trilha</p>
          <div className="mt-6 space-y-4">
            {[
              ['01', 'Conceitos de alavanca', 'Concluído'],
              ['02', 'Retenção de guarda De La Riva', 'Em progresso'],
              ['03', 'Transição para Single Leg X', 'Bloqueado'],
            ].map(([step, title, status]) => (
              <article key={step} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Etapa {step}</p>
                    <h2 className="mt-1 font-headline text-xl font-black uppercase tracking-tight text-white">{title}</h2>
                  </div>
                  <span className="rounded-full border border-zinc-800 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    {status}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </article>

        <aside className="grid gap-4">
          <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Recomendações</p>
            <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
              Drills de reposição
            </h3>
            <button className="mt-4 inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95">
              Abrir aula
            </button>
          </article>

          <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Horas totais de mat</p>
            <p className="mt-2 font-headline text-4xl font-black italic text-white">124</p>
          </article>
        </aside>
      </section>
    </main>
  );
}
