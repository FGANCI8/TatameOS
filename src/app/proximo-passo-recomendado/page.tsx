export default function ProximoPassoRecomendado() {
  return (
    <main className="mx-auto max-w-md flex-grow px-6 pb-20 pt-24">
      <section className="mb-8">
        <p className="mb-1 font-label text-[10px] uppercase tracking-[0.3em] text-zinc-500">
          RECOMENDAÇÃO DO ASSISTENTE IA
        </p>
        <h2 className="font-headline text-4xl font-black uppercase leading-none italic text-zinc-100">
          DOMINE O <br />
          <span className="text-brand-red">TATAME</span>
        </h2>
      </section>

      <section className="relative mb-8 overflow-hidden border-l-4 border-brand-red/20 bg-zinc-950/60 shadow-none">
        <div className="absolute right-0 top-0 p-4 opacity-10">
          <span className="material-symbols-outlined text-8xl">psychology</span>
        </div>
        <div className="relative z-10 p-6">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 animate-pulse bg-brand-red/10" />
            <span className="font-label text-xs font-bold uppercase tracking-widest text-brand-red">
              ANÁLISE DE PERFORMANCE ATIVA
            </span>
          </div>
          <h3 className="mb-4 font-headline text-2xl font-extrabold uppercase italic text-zinc-100">
            Seu foco hoje: <br />
            Revisão de defesa de queda
          </h3>
          <div className="mb-6 bg-zinc-800/80 p-4">
            <p className="font-body text-sm leading-relaxed text-zinc-500">
              Detectamos uma vulnerabilidade de <span className="font-bold text-zinc-100">18% no equilíbrio lateral</span>{' '}
              durante seus últimos 3 sparrings. Focar em técnicas de sprawl e underhook aumentará sua retenção em pé.
            </p>
          </div>
          <button className="flex w-full items-center justify-center gap-3 bg-brand-red/10 py-4 transition-all active:brightness-125">
            <span className="font-label text-xs font-black uppercase tracking-widest text-white">Iniciar treino</span>
            <span className="material-symbols-outlined text-white">bolt</span>
          </button>
        </div>
        <div className="h-1 w-full bg-zinc-800/80">
          <div className="h-full w-3/4 bg-brand-red/60" />
        </div>
      </section>

      <section className="space-y-4">
        <h4 className="font-label text-[10px] uppercase tracking-[0.2em] text-zinc-500">ALTERNATIVAS SUGERIDAS</h4>
        <div className="grid grid-cols-1 gap-3">
          <button className="group flex items-center justify-between border-l-2 border-transparent bg-zinc-900/80 p-5 text-left transition-colors hover:border-zinc-800 hover:bg-zinc-900">
            <div className="flex items-center gap-4">
              <div className="bg-zinc-800/80 p-3">
                <span className="material-symbols-outlined text-zinc-300">fitness_center</span>
              </div>
              <div>
                <p className="font-headline text-sm font-bold uppercase tracking-tight text-zinc-100">
                  Treino de condicionamento
                </p>
                <p className="font-body text-[10px] uppercase tracking-wider text-zinc-500">Foco: explosão e gás</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-zinc-500 transition-transform group-hover:translate-x-1">
              chevron_right
            </span>
          </button>

          <button className="group flex items-center justify-between border-l-2 border-transparent bg-zinc-900/80 p-5 text-left transition-colors hover:border-zinc-800 hover:bg-zinc-900">
            <div className="flex items-center gap-4">
              <div className="bg-zinc-800/80 p-3">
                <span className="material-symbols-outlined text-zinc-300">self_improvement</span>
              </div>
              <div>
                <p className="font-headline text-sm font-bold uppercase tracking-tight text-zinc-100">
                  Meditação pré-treino
                </p>
                <p className="font-body text-[10px] uppercase tracking-wider text-zinc-500">Foco: clareza mental</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-zinc-500 transition-transform group-hover:translate-x-1">
              chevron_right
            </span>
          </button>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-2 gap-3">
        <div className="flex aspect-square flex-col justify-between border-t-2 border-zinc-800 bg-zinc-950 p-4">
          <span className="font-label text-[9px] uppercase tracking-widest text-zinc-500">TEMPO DE TATAME</span>
          <div className="mt-auto">
            <p className="font-headline text-4xl font-black italic text-zinc-100">12h</p>
            <p className="font-label text-[10px] font-bold uppercase text-zinc-300">ESTA SEMANA</p>
          </div>
        </div>
        <div className="flex aspect-square flex-col justify-between border-t-2 border-brand-red/20 bg-zinc-950 p-4">
          <span className="font-label text-[9px] uppercase tracking-widest text-zinc-500">INTENSIDADE MÉDIA</span>
          <div className="mt-auto">
            <p className="font-headline text-4xl font-black italic text-zinc-100">88%</p>
            <p className="font-label text-[10px] font-bold uppercase text-brand-red">Peak flow</p>
          </div>
        </div>
      </section>
    </main>
  );
}
