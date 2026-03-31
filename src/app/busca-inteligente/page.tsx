export default function BuscaInteligente() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Busca inteligente</p>
        <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Procurar no Tatame OSS
        </h1>

        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
          <span className="material-symbols-outlined text-brand-red">search</span>
          <input
            className="w-full border-0 bg-transparent py-2 text-zinc-100 outline-none placeholder:text-zinc-600"
            placeholder="Buscar técnicas, atletas ou treinos..."
            type="text"
          />
          <kbd className="hidden rounded-xl border border-zinc-800 bg-zinc-900 px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 md:inline-flex">
            Cmd + K
          </kbd>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          { title: 'Faixa Branca', label: 'Fundamentos' },
          { title: 'Guarda De La Riva', label: 'Avançado' },
          { title: 'Finalizações', label: 'Kill Zone' },
        ].map((item) => (
          <article key={item.title} className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{item.label}</p>
            <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
              {item.title}
            </h2>
            <div className="mt-6 h-40 rounded-2xl border border-zinc-800 bg-zinc-950/60" />
            <button className="mt-4 inline-flex items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95">
              Explorar
            </button>
          </article>
        ))}
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <aside className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Recentes</p>
          <div className="mt-4 space-y-3">
            {['Triângulo invertido', 'Passagem de meia', 'Berimbolo drill'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950/60 px-4 py-3">
                <span className="text-sm font-black uppercase tracking-tight text-zinc-100">{item}</span>
                <span className="material-symbols-outlined text-zinc-500">close</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Arm lock', 'Reposição', 'Kimura'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </aside>

        <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Resultados sugeridos</p>
          <div className="mt-4 space-y-3">
            {['Chave de braço da montada', 'Drills de explosão para guardeiros', 'Estratégias para competição'].map((item) => (
              <article key={item} className="flex items-center gap-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="h-16 w-16 shrink-0 rounded-2xl border border-zinc-800 bg-zinc-900" />
                <div className="flex-1">
                  <h3 className="text-sm font-black uppercase tracking-tight text-zinc-100">{item}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-zinc-400">Acessar técnica</p>
                </div>
                <span className="material-symbols-outlined text-zinc-500">chevron_right</span>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
