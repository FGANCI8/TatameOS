export default function ChatComProfessor() {
  return (
    <>
      <main className="mt-20 mb-24 flex-1 space-y-6 overflow-y-auto px-4">
        <div className="flex justify-center">
          <span className="bg-zinc-900 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Hoje
          </span>
        </div>

        <div className="flex max-w-[85%] flex-col items-start">
          <div className="border-l-4 border-brand-red/20 bg-zinc-800/80 p-4">
            <p className="text-sm leading-relaxed text-zinc-100">
              Vi sua performance no sparring de ontem. Sua transição da guarda De La Riva para o berimbolo está ficando
              mais fluida, mas você ainda está deixando o quadril muito baixo na subida.
            </p>
          </div>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
            Professor • 09:15
          </span>
        </div>

        <div className="ml-auto flex max-w-[85%] flex-col items-end self-end">
          <div className="bg-brand-red/10 p-4">
            <p className="text-sm leading-relaxed text-white">
              Obrigado pelo feedback, professor! Eu sinto que perco o equilíbrio quando tento estabilizar o peito.
              Devo focar mais na pegada da gola ou da manga para subir?
            </p>
          </div>
          <div className="mt-1 flex items-center gap-1">
            <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">10:02</span>
            <span className="material-symbols-outlined text-[14px] text-brand-red">done_all</span>
          </div>
        </div>

        <div className="flex max-w-[85%] flex-col items-start">
          <div className="bg-zinc-800/80">
            <div className="relative aspect-video w-full bg-zinc-950">
              <img
                alt="Análise de técnica"
                className="h-full w-full object-cover opacity-60"
                data-alt="Wide shot of two martial artists in white and blue gis practicing jiu-jitsu on black mats in a professional athletic facility."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAar2BTyyiee-nFwPcTG6-Qhb6gek7XIMeGKLdku6f6NCGiEcrFnNc3fvKOYAbbDQVMq8D5gjf6rWOBKlMmnGJE2XvbkGIERfzFi42uO5vy41mW9JtjoCYxwZPlTPmgVZ6k950hc3Veva4UtmfQbM59WYIl_JV72V2w5gaD9V7DHGKdmbHNlf5z5ZrOsRllV0yyffH_5vrKuC8qNMDPZ4NQGsTsSx2bktKf7INFJ4RPi4r_ba6mx81KhSgZz5zrQRYhe4hknYyRPpl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="flex h-12 w-12 items-center justify-center bg-brand-red/10 transition-transform active:scale-90">
                  <span className="material-symbols-outlined text-3xl text-white">play_arrow</span>
                </button>
              </div>
            </div>
            <div className="border-l-4 border-zinc-800 p-4">
              <h3 className="mb-1 text-xs font-black uppercase tracking-tighter text-zinc-100">
                Ajuste de quadril: drill #04
              </h3>
              <p className="text-[11px] leading-normal text-zinc-400">
                Assista este vídeo de 2 minutos. Foque no posicionamento do pé de apoio aos 0:45.
              </p>
            </div>
          </div>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
            Professor • 10:15
          </span>
        </div>

        <div className="bg-zinc-950/60 p-4 space-y-3">
          <div className="flex items-end justify-between">
            <h4 className="font-headline text-lg font-black uppercase tracking-tight text-zinc-100 leading-none">
              Meta de evolução
            </h4>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Nível 4 - Faixa Azul</span>
          </div>
          <div className="h-1 w-full overflow-hidden bg-zinc-800/80">
            <div className="h-full w-4/5 bg-zinc-100"></div>
          </div>
          <div className="flex justify-between">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Estabilização</span>
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-100">80%</span>
          </div>
        </div>

        <div className="flex max-w-[85%] flex-col items-start">
          <div className="border-l-4 border-brand-red/20 bg-zinc-800/80 p-4">
            <p className="text-sm leading-relaxed text-zinc-100">
              A gola é fundamental para controlar a postura dele, mas o segredo da subida é a alavanca do cotovelo no
              tatame. Tente hoje à noite. Te vejo no tatame às 19h?
            </p>
          </div>
          <span className="mt-1 text-[9px] font-bold uppercase tracking-widest text-zinc-500">
            Professor • 10:18
          </span>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 z-50 flex w-full items-center gap-3 bg-[#353534]/80 p-4 pb-safe backdrop-blur-md">
        <button className="flex h-10 w-10 items-center justify-center text-zinc-400 transition-colors hover:text-zinc-100 active:scale-90">
          <span className="material-symbols-outlined">add_circle</span>
        </button>
        <div className="relative flex-1">
          <input
            className="w-full border-0 bg-zinc-950 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-400/50 focus:ring-0"
            placeholder="Digite sua dúvida..."
            type="text"
          />
          <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
            <button className="text-zinc-400 hover:text-zinc-100 active:scale-90">
              <span className="material-symbols-outlined text-lg">mic</span>
            </button>
          </div>
        </div>
        <button className="flex h-10 w-10 items-center justify-center bg-brand-red/10 transition-transform active:scale-90">
          <span className="material-symbols-outlined text-white">send</span>
        </button>
      </div>
    </>
  );
}
