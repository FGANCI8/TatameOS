export default function ChatModoAgente() {
  return (
    <main className="flex min-h-screen flex-col pb-28 pt-20">
      <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 md:px-0">
        <div className="flex flex-col space-y-2 py-8">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 animate-pulse bg-brand-red/10" />
            <span className="font-headline text-xs font-black uppercase tracking-widest text-brand-red">
              ASSISTENTE IA ONLINE
            </span>
          </div>
          <h2 className="font-headline text-4xl font-black leading-none tracking-tighter md:text-5xl">
            ANÁLISE DE <br />
            PERFORMANCE
          </h2>
        </div>

        <div className="mb-12 space-y-8">
          <div className="flex max-w-[90%] flex-col items-start md:max-w-[80%]">
            <div className="space-y-4 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="leading-relaxed text-zinc-100">
                Olá, guerreiro. Analisei seus últimos 3 sparrings. Sua transição da guarda-Z para a raspagem de
                tesoura está 15% mais rápida, porém sua frequência cardíaca atingiu o pico de 188 BPM muito cedo no
                round.
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="border-l-2 border-brand-red/20 bg-zinc-900 p-4">
                  <span className="block font-headline text-3xl font-black">188</span>
                  <span className="block text-[10px] font-label uppercase tracking-widest text-zinc-500">Pico BPM</span>
                </div>
                <div className="border-l-2 border-zinc-800 bg-zinc-900 p-4">
                  <span className="block font-headline text-3xl font-black">+15%</span>
                  <span className="block text-[10px] font-label uppercase tracking-widest text-zinc-500">
                    Vel. transição
                  </span>
                </div>
              </div>
              <div className="relative mt-4 flex h-24 w-full items-end gap-1 bg-zinc-950 p-2">
                <div className="h-[30%] w-full bg-brand-red/20" />
                <div className="h-[50%] w-full bg-brand-red/10/40" />
                <div className="h-[40%] w-full bg-brand-red/10/60" />
                <div className="h-[70%] w-full bg-brand-red/10/80" />
                <div className="h-[90%] w-full bg-brand-red/10" />
                <div className="h-[60%] w-full bg-brand-red/10/70" />
                <div className="absolute right-2 top-2 flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red/10" />
                  <span className="text-[8px] font-label font-bold uppercase tracking-tighter">Intensidade</span>
                </div>
              </div>
            </div>
            <span className="mt-2 text-[10px] font-label font-bold uppercase tracking-widest text-zinc-500/50">
              ASSISTENTE IA • 10:42
            </span>
          </div>

          <div className="flex max-w-[90%] flex-col items-end self-end md:max-w-[80%]">
            <div className="bg-zinc-800/80 p-6">
              <p className="leading-relaxed text-zinc-100">
                Como posso melhorar minha recuperação entre os rounds para manter a pressão no final?
              </p>
            </div>
            <span className="mt-2 text-[10px] font-label font-bold uppercase tracking-widest text-zinc-500/50">
              VOCÊ • 10:43
            </span>
          </div>

          <div className="flex max-w-[90%] flex-col items-start md:max-w-[80%]">
            <div className="space-y-4 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
              <p className="leading-relaxed text-zinc-100">
                Recomendo foco em controle respiratório nasal durante as transições de baixa intensidade. Aqui estão
                sugestões imediatas para o seu próximo treino:
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <button className="bg-zinc-800/80 px-4 py-2 transition-colors hover:bg-brand-red/10">
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-zinc-100">
                    Técnica de respiração
                  </span>
                </button>
                <button className="bg-zinc-800/80 px-4 py-2 transition-colors hover:bg-brand-red/10">
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-zinc-100">
                    Drill de recuperação
                  </span>
                </button>
                <button className="bg-zinc-800/80 px-4 py-2 transition-colors hover:bg-brand-red/10">
                  <span className="font-label text-xs font-bold uppercase tracking-widest text-zinc-100">
                    Ajuste de dieta
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-16 left-0 z-40 w-full bg-gradient-to-t from-background via-background to-transparent pb-4 pt-10">
        <div className="mx-auto max-w-4xl px-4">
          <div className="relative flex items-center border-b-2 border-zinc-800/80 bg-zinc-950 transition-all focus-within:border-zinc-800">
            <input
              className="w-full border-none bg-transparent py-5 pl-6 pr-16 font-headline font-bold tracking-wider text-zinc-100 placeholder:text-zinc-500/30 focus:ring-0"
              placeholder="PERGUNTE AO ASSISTENTE IA..."
              type="text"
            />
            <button className="absolute right-4 flex h-10 w-10 items-center justify-center bg-brand-red/10 transition-transform active:scale-90">
              <span className="material-symbols-outlined text-white">send</span>
            </button>
          </div>
          <div className="mt-3 flex items-center justify-between px-1">
            <div className="flex gap-4">
              <button className="text-zinc-500/40 transition-colors hover:text-brand-red">
                <span className="material-symbols-outlined text-sm">mic</span>
              </button>
              <button className="text-zinc-500/40 transition-colors hover:text-brand-red">
                <span className="material-symbols-outlined text-sm">attach_file</span>
              </button>
            </div>
            <span className="text-[8px] font-label font-bold uppercase tracking-[0.2em] text-zinc-500/30">
              KINETIC INTELLIGENCE ENGINE V2.0
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
