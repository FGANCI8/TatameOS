export default function CoachMentalDoApp() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-xl flex-col px-4 pb-24 pt-20 md:px-6">
      <section className="mb-8">
        <div className="mb-1 flex items-baseline gap-2">
          <h1 className="font-headline text-4xl font-black uppercase tracking-tight text-zinc-100">Assistente IA</h1>
          <div className="h-2 w-2 animate-pulse bg-zinc-800" />
        </div>
        <p className="font-label text-[10px] uppercase tracking-widest text-zinc-500">Análise mental em tempo real</p>
      </section>

      <div className="mb-8 grid grid-cols-2 gap-3">
        <div className="col-span-2 overflow-hidden bg-zinc-950/60 p-5 relative">
          <div className="absolute right-0 top-0 p-4 opacity-10">
            <span className="material-symbols-outlined text-6xl">psychology</span>
          </div>
          <h3 className="mb-2 font-headline text-lg font-bold text-brand-red">FOCO ATUAL</h3>
          <p className="mb-4 text-sm leading-relaxed text-zinc-100">
            Seu histórico indica fadiga mental nos últimos 5 minutos de luta. Sugiro respiração diafragmática entre
            os rounds.
          </p>
          <div className="h-1 w-full bg-zinc-800/80">
            <div className="h-full w-[78%] bg-zinc-800" />
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-[10px] font-label font-bold uppercase text-zinc-400">Estabilidade mental</span>
            <span className="text-[10px] font-label font-bold uppercase text-zinc-300">78%</span>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-zinc-900 p-4">
          <div>
            <span className="material-symbols-outlined mb-2 text-zinc-300">shield</span>
            <h4 className="text-[10px] font-label font-bold uppercase tracking-widest text-zinc-500">Confiança</h4>
          </div>
          <p className="font-headline text-2xl font-black text-zinc-100">ALTA</p>
        </div>

        <div className="flex flex-col justify-between bg-zinc-900 p-4">
          <div>
            <span className="material-symbols-outlined mb-2 text-brand-red">warning</span>
            <h4 className="text-[10px] font-label font-bold uppercase tracking-widest text-zinc-500">Ansiedade</h4>
          </div>
          <p className="font-headline text-2xl font-black text-zinc-100">MÉDIA</p>
        </div>
      </div>

      <div className="mb-8 space-y-6">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-brand-red/10">
            <span className="material-symbols-outlined text-white">psychology</span>
          </div>
          <div className="flex-1 bg-zinc-800/80 p-4">
            <p className="text-sm leading-relaxed text-zinc-100">
              Percebi que sua postura competitiva torna-se defensiva quando você sofre uma queda. No seu próximo
              treino, tente a transição <span className="font-bold text-zinc-300">X-Guard</span> imediatamente após o
              impacto.
              <br />
              <br />
              Como você se sente em relação a essa transição sob pressão?
            </p>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <div className="flex-1 border-r-4 border-zinc-800 bg-zinc-950/60 p-4 text-right">
            <p className="text-sm text-zinc-100">Sinto que perco o tempo do quadril quando estou ofegante.</p>
          </div>
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden bg-zinc-800/80">
            <img
              className="h-full w-full object-cover"
              alt="Professional athlete profile icon in a dark setting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKoAZLtliAtSuRTK-j1tB060KAGjLw5yXY7xK7K7LMvgU-iOLPLjV4ZxenZBQ0ViWujLJZgdTmawqlpJuSJjw9gY3YkzJEXIksTjc04whVTX908YNTMzTCOKz3RmV-K8ZJz0p3jlio6fX8mtkaeisW6-apZGXu0SrcEeD6manQfHKtmW_gcrhvzvX2oVZ1In3jrPt9O55Lnl_Csj2kdTg-pnd5fLcDkR1TPD6WlAjzBjSzZTrc4-e9cseewChqRKCpdrW6UcitgUZS"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-brand-red/10">
            <span className="material-symbols-outlined text-white">psychology</span>
          </div>
          <div className="flex-1 bg-zinc-800/80 p-4">
            <p className="mb-4 text-sm leading-relaxed text-zinc-100">
              Entendido. É um bloqueio técnico alimentado pelo cansaço. Vamos ajustar sua zona de conforto.
            </p>
            <div className="space-y-3">
              <div className="bg-zinc-950/60 p-3">
                <h5 className="mb-2 text-[10px] font-label font-bold uppercase text-zinc-300">Ajuste de postura</h5>
                <div className="relative h-6 w-full overflow-hidden bg-zinc-800/80">
                  <div className="absolute inset-0 w-[65%] bg-brand-red/10" />
                  <div className="absolute inset-0 flex items-center px-2">
                    <span className="text-[9px] font-bold uppercase italic text-white">Consistência de guarda</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-2">
          <button className="flex-1 bg-zinc-900 px-4 py-3 text-left transition-colors hover:bg-zinc-800/80">
            <span className="mb-1 block text-[10px] font-label font-bold uppercase tracking-widest text-zinc-400">
              Exercício rápido
            </span>
            <span className="block font-headline text-sm font-bold uppercase text-zinc-100">Controle de pânico</span>
          </button>
          <button className="flex-1 bg-zinc-900 px-4 py-3 text-left transition-colors hover:bg-zinc-800/80">
            <span className="mb-1 block text-[10px] font-label font-bold uppercase tracking-widest text-zinc-400">
              Visualização
            </span>
            <span className="block font-headline text-sm font-bold uppercase text-zinc-100">Vitória por pontos</span>
          </button>
        </div>

        <div className="relative">
          <input
            className="recessed-input w-full p-5 pr-14 text-sm font-body text-zinc-100 placeholder:text-zinc-500/40"
            placeholder="Faça uma pergunta ao assistente..."
            type="text"
          />
          <button className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center text-brand-red transition-transform active:scale-90">
            <span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </main>
  );
}
