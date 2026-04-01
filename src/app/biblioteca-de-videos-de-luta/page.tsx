export default function BibliotecaDeVideosDeLuta() {
  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 pb-32 pt-24 md:px-6">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Analytics hub</p>
        <h1 className="mt-2 font-headline text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
          Biblioteca de vídeos
        </h1>
        <div className="mt-6 flex flex-wrap gap-3">
          {['Todos', 'Campeonatos', 'Sparrings', 'Técnicos'].map((filter, index) => (
            <button
              key={filter}
              className={`rounded-2xl px-4 py-3 text-[10px] font-black uppercase tracking-widest transition ${
                index === 0
                  ? 'border border-brand-red/20 bg-brand-red/10 text-brand-red'
                  : 'border border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[
          ['Vitória', '14 Set 2023 • Mundial IBJJF', 'Guarda de la Riva', 'Finalização'],
          ['Derrota', '02 Out 2023 • Rola interno', 'Passagem', 'Defesa'],
          ['Vitória', '10 Nov 2023 • Copa Podium', 'Queda', 'Estrangulamento'],
          ['Vitória', '22 Nov 2023 • Rola técnico', 'Controle', 'Transição'],
        ].map(([state, date, tag1, tag2], index) => (
          <article key={`${state}-${date}`} className="overflow-hidden rounded-[28px] border border-zinc-800/80 bg-zinc-900/80">
            <div className="relative aspect-video bg-zinc-950">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span
                  className={`rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                    state === 'Vitória'
                      ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
                      : 'border-zinc-800 bg-zinc-950/60 text-zinc-300'
                  }`}
                >
                  {state}
                </span>
                <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                  {index === 0 ? '12:45' : index === 1 ? '05:00' : index === 2 ? '03:12' : '10:00'}
                </span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">{date}</p>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                VS. {index === 0 ? 'Marcus Almeida' : index === 1 ? 'Felipe Pena' : index === 2 ? 'Nicholas Meregali' : 'Leandro Lo'}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {tag1}
                </span>
                <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                  {tag2}
                </span>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] border border-dashed border-zinc-800 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 text-center md:p-8">
        <span className="material-symbols-outlined text-4xl text-brand-red">add_circle</span>
        <p className="mt-3 font-headline text-xl font-black uppercase tracking-tight text-white">Adicionar vídeo</p>
        <p className="mt-2 text-sm text-zinc-400">Novo combate ou treino</p>
      </section>
    </main>
  );
}
