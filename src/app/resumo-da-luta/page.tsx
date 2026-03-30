export default function ResumoDaLuta() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Resumo da luta</p>
            <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
              Finalizado com controle
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
              Linha do tempo da luta, momento decisivo e métricas de execução em um shell único para leitura rápida.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95">
            Baixar relatório
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {[
          ['Pontos', '08'],
          ['Vantagens', '03'],
          ['Punições', '00'],
          ['Resultado', 'Vitória'],
        ].map(([label, value]) => (
          <article key={label} className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{label}</p>
            <p className="mt-2 font-headline text-4xl font-black italic text-white">{value}</p>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Posição decisiva</p>
          <h2 className="mt-2 font-headline text-3xl font-black uppercase tracking-tight text-white">
            Controle lateral para montada
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
            A transição executada aos 03:45 abriu o espaço para o ataque de braço final.
          </p>
          <div className="mt-6 h-64 rounded-2xl border border-zinc-800 bg-zinc-950/60" />
        </article>

        <aside className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Métricas de performance</p>
          <div className="mt-4 space-y-4">
            {[
              ['Precisão técnica', '88%'],
              ['Controle de quadril', '94%'],
              ['Finalização', '100%'],
            ].map(([label, value]) => (
              <div key={label} className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                  <span>{label}</span>
                  <span>{value}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                  <div className="h-full rounded-full bg-zinc-700" style={{ width: value }} />
                </div>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </main>
  );
}
