export default function VideoVsTecnicaRecomendada() {
  return (
    <main className="min-h-screen pb-24">
      <div className="flex flex-col lg:h-[calc(100vh-80px)]">
        <section className="group relative h-1/2 w-full overflow-hidden bg-black lg:h-[55%]">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-transparent" />
          <img
            className="h-full w-full object-cover opacity-80"
            data-alt="Cinematic wide shot of two Brazilian Jiu-Jitsu athletes grappling on a dark mat, focusing on a triangle choke attempt with dramatic shadows"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIVz6F3qJSDO15arL-foiUKFx37KXRr1u8BgWrBEESn2BJ9GaN7gt0UjsCZ9R2X5AyufCD9zI931gw7HK5cIVofOza7RI8hE0-Gsn93KvSgYHGcGgtwR6ijnqekdKMAO_cqnFDvG0qz_ylLa2-Ii3h8_5AWP_NfDN03DZpRdzwHv_6du4PcKIBGSF4rOHB9rKvQhc1aN64f7WngdyOqmoXGuypSBmaiA_0fOAuhzRBL0dcQbO7dGEjAQaAL5O92UdGBRQpCErUcG9T"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 bg-brand-red/10 px-3 py-1">
                <span className="h-2 w-2 animate-pulse bg-white" />
                <span className="font-headline text-xs font-bold tracking-widest text-white">
                  DETECÇÃO DE ERRO: 02:44
                </span>
              </div>
              <div className="bg-zinc-800/80 px-3 py-1 backdrop-blur">
                <span className="font-label text-[10px] font-bold uppercase tracking-tighter text-zinc-400">
                  ANÁLISE DO ASSISTENTE IA V2.4
                </span>
              </div>
            </div>

            <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-brand-red/20">
              <div className="absolute -left-1 -top-1 h-4 w-4 border-l-4 border-t-4 border-white" />
              <div className="absolute -bottom-1 -right-1 h-4 w-4 border-b-4 border-r-4 border-white" />
              <span className="font-headline text-4xl font-black text-brand-red opacity-50">!</span>
            </div>

            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
                  Momento crítico
                </span>
                <h2 className="text-3xl font-headline font-black uppercase italic tracking-tighter text-white">
                  Postura comprometida
                </h2>
              </div>
              <div className="flex gap-2">
                <button className="flex h-12 w-12 items-center justify-center bg-white/10 backdrop-blur transition-all hover:bg-white/20">
                  <span className="material-symbols-outlined text-white">replay_10</span>
                </button>
                <button className="flex h-12 w-12 items-center justify-center bg-brand-red/10 transition-all hover:brightness-110">
                  <span className="material-symbols-outlined text-white">pause</span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-zinc-800/80">
            <div className="h-full w-[65%] bg-brand-red/10" />
          </div>
        </section>

        <section className="flex flex-grow flex-col gap-8 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 lg:flex-row lg:items-stretch lg:p-12">
          <div className="relative flex-1 overflow-hidden rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 border-l-4 border-brand-red/20 md:p-8">
            <div className="absolute -right-10 -bottom-10 pointer-events-none opacity-5">
              <span className="material-symbols-outlined text-[200px]">fitness_center</span>
            </div>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-brand-red">error</span>
                <h3 className="font-headline text-xl font-bold uppercase tracking-tight text-zinc-100">
                  Correção sugerida
                </h3>
              </div>
              <p className="mb-8 max-w-md font-body leading-relaxed text-zinc-500">
                Sua base foi comprometida durante a tentativa de passagem. O erro de defesa de triângulo identificado no
                vídeo requer ajuste imediato na distribuição de peso e alinhamento dos cotovelos.
              </p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="bg-zinc-950 p-4">
                  <span className="mb-1 block text-[10px] font-label font-bold uppercase tracking-widest text-zinc-400">
                    Métrica
                  </span>
                  <span className="block text-xl font-headline font-black text-zinc-300">POSTURA -14%</span>
                </div>
                <div className="bg-zinc-950 p-4">
                  <span className="mb-1 block text-[10px] font-label font-bold uppercase tracking-widest text-zinc-400">
                    Risco
                  </span>
                  <span className="block text-xl font-headline font-black text-brand-red">ALTO</span>
                </div>
              </div>
            </div>
            <button className="flex w-full items-center justify-center gap-3 bg-brand-red/10 py-5 transition-all active:scale-[0.98]">
              <span className="font-headline text-base font-black uppercase italic tracking-widest text-white">
                Ver técnica recomendada
              </span>
              <span className="material-symbols-outlined text-white transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div className="flex items-center justify-between px-2">
              <span className="font-label text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">
                Aula técnica recomendada
              </span>
              <span className="material-symbols-outlined text-sm text-zinc-400">school</span>
            </div>
            <div className="group flex h-full cursor-pointer flex-col overflow-hidden bg-zinc-950 md:flex-row">
              <div className="relative h-48 overflow-hidden md:h-auto md:w-1/3">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-alt="Professional Jiu-Jitsu instructor explaining technique on the mat, soft studio lighting, high resolution fitness photography"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_LrvInYm1_cd22oam5IsuvLwkoHPVR5J4IKN4JEmzt7FmNBfXudT1hmJfTBixHCPS1VAPmgayIBWB__nprx8TuWtUnOlJeG4Od7_3qbgq8lEmMteVyhhbT2QEm9Oeprwab5suH1fI0wx2-dFiGBtFG8JIyo9A6tFbZuRkWuBkiUteMH43ULyTnwu3z-X-t_lxdazQzlj56NuT2Vg9jgsystQGYjWqKE-zyVHBkicXKHExk0EYXzQtPDLbnqUApHjjCOLfLPDJtw1w"
                />
                <div className="absolute inset-0 bg-brand-red/20 transition-colors group-hover:bg-transparent" />
              </div>
              <div className="flex flex-col justify-center p-6 md:w-2/3">
                <div className="mb-4">
                  <h4 className="mb-2 font-headline text-2xl font-black uppercase italic tracking-tighter leading-none text-white transition-colors group-hover:text-brand-red">
                    Postura e pressão na guarda fechada
                  </h4>
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                    Módulo: fundamentos de defesa
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-brand-red">schedule</span>
                    <span className="font-label text-xs font-bold text-zinc-100">12 MIN</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-brand-red">star</span>
                    <span className="font-label text-xs font-bold text-zinc-100">AVANÇADO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
