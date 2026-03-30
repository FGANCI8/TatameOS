export default function ScoutDeAdversario() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Scout</p>
        <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Inteligência do adversário
        </h1>
        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
          <span className="material-symbols-outlined text-zinc-400">search</span>
          <input
            className="w-full border-0 bg-transparent py-2 text-zinc-100 outline-none placeholder:text-zinc-600"
            placeholder="Search operative..."
            type="text"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="space-y-3 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Active targets</p>
          {[
            ['Marcus Shark Silva', 'Aggressive', true],
            ["Leo 'Ankle' Rossi", 'Guard player', false],
            ['Viktor Volkov', 'Takedown specialist', false],
          ].map(([name, style, active]) => (
            <article
              key={name as string}
              className={`rounded-2xl border p-4 ${active ? 'border-brand-red/20 bg-brand-red/10' : 'border-zinc-800 bg-zinc-950/60'}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-headline text-xl font-black uppercase tracking-tight text-white">{name as string}</h2>
                  <p className="mt-2 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{style as string}</p>
                </div>
                <span className="material-symbols-outlined text-zinc-300">target</span>
              </div>
            </article>
          ))}
        </aside>

        <section className="space-y-4">
          <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="aspect-square rounded-2xl border border-zinc-800 bg-zinc-950/60" />
              <div className="flex flex-col justify-between">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Target profile</p>
                  <h2 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white">
                    Marcus Shark Silva
                  </h2>
                </div>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Win rate</span>
                    <span className="font-headline text-xl font-black text-brand-red">84%</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Style</span>
                    <span className="font-headline text-xl font-black text-zinc-100">BJJ</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Tactical notes</p>
            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm leading-relaxed text-zinc-400">
              Shark costuma puxar para o double pull nos primeiros 30 segundos. A transição de De La Riva para K-Guard é
              constante e a defesa de footlock é o ponto mais sensível.
            </div>
          </article>

          <article className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Match tempo</p>
                <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                  Explosividade e ritmo
                </h3>
              </div>
              <button className="inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95">
                Start simulation
              </button>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
