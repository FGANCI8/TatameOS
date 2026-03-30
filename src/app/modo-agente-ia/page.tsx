export default function ModoAgenteIa() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden pb-20 pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-20 hud-scanline" />
      <div className="absolute left-6 top-20 h-32 border-l-2 border-brand-red/20 opacity-30" />
      <div className="absolute bottom-24 right-6 h-48 border-r-2 border-zinc-800 opacity-20" />

      <section className="px-6 pb-4 pt-8">
        <div className="mb-1 flex items-end gap-2">
          <span className="font-headline text-xs font-bold uppercase tracking-[0.2em] text-zinc-300">
            Sistema ativo
          </span>
          <div className="mb-1 h-1 w-12 bg-zinc-800" />
        </div>
        <h2 className="mb-2 font-headline text-4xl font-black uppercase leading-none tracking-tighter">
          ASSISTENTE <span className="text-brand-red">IA</span>
        </h2>
        <p className="max-w-xs text-sm font-semibold uppercase tracking-wider text-zinc-500">
          Análise técnica em tempo real e protocolos de evolução.
        </p>
      </section>

      <div className="flex-grow px-6">
        <div className="flex max-h-[calc(100vh-320px)] flex-col gap-6 overflow-y-auto">
          <div className="flex max-w-[85%] flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Protocolo iniciado</span>
              <span className="h-px flex-grow bg-zinc-800/80" />
            </div>
            <div className="relative bg-zinc-900 p-4">
              <div className="absolute left-[-1px] top-0 h-full w-1 bg-brand-red/10" />
              <p className="text-sm leading-relaxed font-medium">
                OSS! Estou analisando seu último treino de ontem. Notei que sua transição da{' '}
                <span className="font-bold text-zinc-300">Guarda De La Riva</span> para o{' '}
                <span className="font-bold text-zinc-300">Berimbolo</span> teve uma queda de pressão aos 4:20. Deseja
                revisar a técnica ou ajustar seu cardio?
              </p>
            </div>
            <span className="self-start text-[10px] uppercase text-zinc-500">ASSISTENTE IA • AGORA</span>
          </div>

          <div className="flex max-w-[85%] flex-col items-end gap-2 self-end">
            <div className="flex w-full items-center gap-2">
              <span className="h-px flex-grow bg-zinc-800/80" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Atleta</span>
            </div>
            <div className="border border-zinc-800/80 bg-zinc-950 p-4">
              <p className="text-sm leading-relaxed">Quero revisar a técnica. Sinto que meu quadril está travando no meio do giro.</p>
            </div>
            <span className="text-[10px] uppercase text-zinc-500">USUÁRIO • 1 MIN</span>
          </div>

          <div className="flex max-w-[85%] flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Análise de biomecânica</span>
              <span className="h-px flex-grow bg-zinc-800/80" />
            </div>
            <div className="relative bg-zinc-900 p-4">
              <div className="absolute left-[-1px] top-0 h-full w-1 bg-brand-red/10" />
              <p className="mb-4 text-sm leading-relaxed">
                Entendido. O travamento geralmente ocorre por falta de angulação no ombro de apoio. Veja este detalhe:
              </p>
              <div className="flex items-center gap-4 border-l-2 border-zinc-800 bg-zinc-950 p-3">
                <div className="h-16 w-16 flex-shrink-0 bg-zinc-800/80">
                  <img
                    className="h-full w-full object-cover opacity-50 grayscale contrast-125"
                    data-alt="Infographic or diagram showing joint rotation and mechanical force vectors in a technical martial arts movement"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8SsviIcDBlntrfOsGipa2nSsdq2IwBrf4XPpAQHK7l6h7MCqLozusd9C6FKKzeeJAp2KOSTAC7Mi0GOqym5Q3MhbBtiGtoXDyAZPUl6kkszlivKxZ-WFkvVqQfM1gX5OBE8SG1PEoLxHAcBjM1aGy4fM7gaGseuHlSAX_9KHKz5g9yqNmp5DPINDU6R8-wJ4xiRjPv0XsI14wR5L_H7Px5jnn1Ny-80fzK0G9Pmoq0ZRosOTzHDmrpjA3x_xyMtnrBw1ZpOSLHQJ7"
                  />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase text-zinc-300">Ajuste sugerido</div>
                  <div className="text-xs font-bold leading-tight">ROTAÇÃO ESCAPULAR +15°</div>
                  <div className="mt-1 flex gap-1">
                    <div className="h-1 w-4 bg-zinc-800" />
                    <div className="h-1 w-4 bg-zinc-800" />
                    <div className="h-1 w-2 bg-zinc-800/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto flex gap-2 overflow-x-auto px-6 py-4 no-scrollbar">
        <button className="flex-shrink-0 border border-zinc-800/80 bg-zinc-900/80 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition-colors hover:bg-zinc-800/80">
          <span className="material-symbols-outlined text-xs">videocam</span> Revisar técnica
        </button>
        <button className="flex-shrink-0 border border-zinc-800/80 bg-zinc-900/80 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition-colors hover:bg-zinc-800/80">
          <span className="material-symbols-outlined text-xs">fitness_center</span> Dica de treino
        </button>
        <button className="flex-shrink-0 border border-zinc-800/80 bg-zinc-900/80 px-4 py-2 text-[10px] font-black uppercase tracking-widest text-zinc-100 transition-colors hover:bg-zinc-800/80">
          <span className="material-symbols-outlined text-xs">healing</span> Recuperação
        </button>
      </div>

      <div className="px-6 pb-2">
        <div className="flex items-center border-b-2 border-zinc-800 bg-zinc-950 p-2">
          <input
            className="flex-grow border-none bg-transparent text-sm font-bold uppercase tracking-widest placeholder:text-zinc-700 focus:ring-0"
            placeholder="COMANDO DE VOZ OU TEXTO..."
            type="text"
          />
          <button className="flex h-10 w-10 items-center justify-center bg-brand-red/10 text-white transition-transform active:scale-90">
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </main>
  );
}
