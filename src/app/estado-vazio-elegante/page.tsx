export default function EstadoVazioElegante() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center justify-center px-4 pb-24 pt-24 md:px-6">
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <div className="absolute inset-0 bg-dot-grid opacity-40" />
        <div className="relative z-10">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[28px] border border-zinc-800 bg-zinc-950/60">
            <span className="material-symbols-outlined text-4xl text-zinc-400">layers_clear</span>
          </div>

          <div className="mt-8 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Estado vazio</p>
            <h1 className="mt-3 font-headline text-4xl font-black uppercase tracking-tight text-zinc-100 md:text-5xl">
              Sua jornada ainda está em silêncio
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400">
              Seus favoritos e trilhas aparecerão aqui. Comece explorando a biblioteca técnica para preencher este
              espaço com evolução real.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-2xl border border-brand-red/20 bg-brand-red/10 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition hover:bg-brand-red/20 active:scale-95">
              Explorar biblioteca
            </button>
            <button className="rounded-2xl border border-zinc-800 bg-zinc-950/60 px-6 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition hover:bg-zinc-800 active:scale-95">
              Ver trilhas de treino
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Status</p>
              <p className="mt-2 font-headline text-xl font-black uppercase tracking-tight text-zinc-100">
                Ready to start
              </p>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Data points</p>
              <p className="mt-2 font-headline text-xl font-black uppercase tracking-tight text-zinc-100">
                000 favorites
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
