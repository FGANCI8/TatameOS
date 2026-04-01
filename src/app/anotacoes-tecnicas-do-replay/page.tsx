export default function AnotacoesTecnicasDoReplay() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-80px)] max-w-[1600px] grid-cols-1 gap-0 lg:grid-cols-12">
      <section className="relative flex flex-col bg-zinc-950 lg:col-span-8">
        <div className="relative aspect-video w-full overflow-hidden bg-black group">
          <img
            alt="training session"
            className="h-full w-full object-cover opacity-80"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0kyjcWr9MDHmn1H5-9PVEd6PI9vA548_kXxPn5Zkc87D65P49p2VpTaMRU8ciQAAwVZF8y1feJDvU9uM5ODBUgB965uc51s4qbFBYvqAnPzkrXT-1P_5FSnwU76SMbf_omX5rcre9DMFx-dEHNX2HymzHxWTQINVnooOzKHYlVKVsADzAlBScEcYDY0bcnd-tGQsMKRetRprK719Xvh8ctLl8LeAJALVsMQhhJbKfKapC3WUwlKSwrJsYJ3zU8ourY_urzVORN1QU"
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-6">
            <div className="mb-4 flex items-center gap-4">
              <span className="font-headline text-2xl font-black italic tracking-tighter text-white">03:45</span>
              <div className="relative h-1 flex-grow bg-zinc-800/80">
                <div className="absolute left-0 top-0 h-full w-[45%] bg-brand-red/10" />
                <div className="absolute left-[45%] top-1/2 h-3 w-3 -translate-y-1/2 bg-brand-red/10 shadow-lg shadow-brand-red/40/40" />
                <div className="absolute left-[45%] top-[-8px] h-4 w-1 bg-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">12:40</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <span className="material-symbols-outlined cursor-pointer text-white">play_arrow</span>
                <span className="material-symbols-outlined cursor-pointer text-white">skip_next</span>
                <span className="material-symbols-outlined cursor-pointer text-white">volume_up</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined cursor-pointer text-white">closed_caption</span>
                <span className="material-symbols-outlined cursor-pointer text-white">fullscreen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-bold uppercase tracking-[0.2em] text-brand-red text-xs">
                Módulo 04 • Jiu-Jitsu avançado
              </span>
              <h2 className="mt-2 font-headline text-4xl font-black uppercase italic leading-none text-zinc-100">
                Defesa de meia-guarda e transições
              </h2>
            </div>
            <div className="flex gap-2">
              <button className="border border-zinc-800/80 bg-zinc-800/80 px-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-100 transition-all active:scale-95 hover:bg-zinc-800/80">
                Baixar PDF
              </button>
              <button className="bg-brand-red/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all active:scale-95 hover:brightness-110">
                Salvar aula
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0.5 bg-zinc-900 p-0.5 md:grid-cols-4">
            <div className="bg-zinc-950 p-4">
              <p className="mb-1 text-[10px] uppercase tracking-widest text-zinc-500">Instrutor</p>
              <p className="text-sm font-bold">Professor Marcos Silva</p>
            </div>
            <div className="bg-zinc-950 p-4">
              <p className="mb-1 text-[10px] uppercase tracking-widest text-zinc-500">Intensidade</p>
              <p className="text-sm font-bold">Alta performance</p>
            </div>
            <div className="bg-zinc-950 p-4">
              <p className="mb-1 text-[10px] uppercase tracking-widest text-zinc-500">Dificuldade</p>
              <p className="text-sm font-bold text-brand-red">Expert</p>
            </div>
            <div className="bg-zinc-950 p-4">
              <p className="mb-1 text-[10px] uppercase tracking-widest text-zinc-500">Duração</p>
              <p className="text-sm font-bold">45 min</p>
            </div>
          </div>
        </div>
      </section>

      <aside className="flex h-full flex-col border-l border-zinc-800/80 bg-zinc-950/60 lg:col-span-4">
        <div className="flex items-center justify-between border-b border-zinc-800/80 p-6">
          <h3 className="font-headline text-xl font-black uppercase italic tracking-tight">Anotações técnicas</h3>
          <span className="bg-zinc-800/80 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
            14 notas
          </span>
        </div>
        <div className="flex-grow space-y-4 overflow-y-auto p-6">
          <div className="kinetic-border group cursor-pointer bg-zinc-800/50 p-4 backdrop-blur-md transition-colors hover:bg-zinc-800/80">
            <div className="mb-2 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-brand-red">psychology</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Feedback do professor</span>
              </div>
              <span className="bg-brand-red/10 px-2 py-0.5 text-[10px] font-bold text-white">03:45</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-100">
              Postura muito baixa, facilitou a raspagem. Mantenha o quadril pesado e a base ativa para evitar o
              desequilíbrio lateral.
            </p>
          </div>

          <div className="border-l-4 border-zinc-800 bg-zinc-800/30 p-4 backdrop-blur-sm transition-colors hover:bg-zinc-800/50">
            <div className="mb-2 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-zinc-500">person</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Minha nota</span>
              </div>
              <span className="bg-zinc-900 px-2 py-0.5 text-[10px] font-bold text-zinc-100">08:12</span>
            </div>
            <p className="text-sm leading-relaxed italic text-zinc-400">
              Revisar a pegada na gola aqui. Senti que perdi o controle quando ele esticou a perna.
            </p>
          </div>

          <div className="kinetic-border group cursor-pointer bg-zinc-800/50 p-4 backdrop-blur-md transition-colors hover:bg-zinc-800/80">
            <div className="mb-2 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-brand-red">psychology</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Feedback do professor</span>
              </div>
              <span className="bg-brand-red/10 px-2 py-0.5 text-[10px] font-bold text-white">15:20</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-100">
              Excelente transição para a montada. O detalhe do cotovelo fechado impediu a reposição.
            </p>
          </div>

          <div className="border-l-4 border-zinc-800 bg-zinc-900/10 p-4">
            <div className="mb-2 flex items-start justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm text-zinc-300">fitness_center</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Fundamento técnico</span>
              </div>
              <span className="bg-zinc-900 px-2 py-0.5 text-[10px] font-bold text-white">22:45</span>
            </div>
            <p className="text-sm leading-relaxed text-zinc-100">
              Princípio da alavanca de Arquimedes aplicado ao quadril do oponente.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800/80 p-6">
          <div className="relative">
            <textarea
              className="h-24 w-full resize-none border-none bg-zinc-950 p-4 text-sm placeholder:text-zinc-500 placeholder:text-[10px] placeholder:uppercase placeholder:tracking-widest focus:ring-1 focus:ring-brand-red/20"
              placeholder="Adicionar nova anotação no tempo atual..."
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <span className="bg-zinc-900 px-2 py-1 text-[10px] font-bold text-brand-red">03:45</span>
              <button className="flex h-8 w-8 items-center justify-center bg-brand-red/10 transition-all hover:brightness-110 active:scale-95">
                <span className="material-symbols-outlined text-sm text-white">send</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}
