export default function CoachInteligente() {
  return (
    <>
      <main className="mx-auto max-w-5xl space-y-8 px-4 pt-20">
        <section className="mt-4">
          <div className="mb-2 flex items-end justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Análise da sessão</span>
              <h1 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter">
                ASSISTENTE IA
              </h1>
            </div>
            <div className="text-right">
              <span className="block text-[10px] font-bold uppercase text-zinc-500">Status</span>
              <span className="flex items-center gap-2 font-bold text-brand-red">
                <span className="h-2 w-2 animate-pulse bg-brand-red/10"></span>
                AO VIVO
              </span>
            </div>
          </div>
          <div className="h-1 w-full bg-zinc-800/80">
            <div className="h-full w-2/3 bg-brand-red/10"></div>
          </div>
        </section>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:col-span-2 md:p-8">
            <div className="absolute right-0 top-0 p-4 opacity-10 transition-opacity group-hover:opacity-20">
              <span className="material-symbols-outlined text-9xl">warning</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-brand-red">emergency_home</span>
              <h3 className="text-xl font-black uppercase italic tracking-tight">Alerta de vulnerabilidade</h3>
            </div>
            <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-center">
              <div className="relative flex h-32 w-32 items-center justify-center">
                <svg className="h-full w-full -rotate-90 transform">
                  <circle cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-zinc-700" />
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    fill="transparent"
                    stroke="currentColor"
                    strokeDasharray="364.4"
                    strokeDashoffset="127.5"
                    strokeWidth="8"
                    className="text-brand-red"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-black italic">65%</span>
                  <span className="text-[8px] font-bold uppercase tracking-widest text-zinc-400">Estabilidade</span>
                </div>
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-2xl font-bold leading-tight">Recuperação de guarda em 65%</p>
                <p className="max-w-md text-sm leading-relaxed text-zinc-400">
                  Sua mobilidade de quadril caiu após o quarto minuto. O adversário está abrindo espaço no lado
                  esquerdo durante as tentativas de leg drag.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <span className="material-symbols-outlined mb-4 text-3xl text-zinc-300">air</span>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-300">Insight crítico</p>
            <h4 className="text-lg font-bold uppercase italic leading-tight">Atenção à respiração nas transições</h4>
          </div>

          <div className="flex flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <span className="material-symbols-outlined mb-4 text-3xl text-zinc-100">history</span>
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zinc-100">Revisão tática</p>
            <h4 className="text-lg font-bold uppercase italic leading-tight">Revisar round 2 vs. Shark</h4>
          </div>

          <div className="relative flex flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Preparo mental</span>
                <span className="material-symbols-outlined text-sm text-brand-red">psychology</span>
              </div>
              <p className="text-sm font-medium italic">
                "Sob pressão, você não sobe ao nível das expectativas. Você cai ao nível do seu treino."
              </p>
            </div>
            <div className="mt-6 border-t border-zinc-800/80 pt-4">
              <button className="w-full rounded-2xl border border-brand-red/20 bg-brand-red/10 py-3 text-[10px] font-black uppercase tracking-widest text-brand-red transition-colors hover:bg-brand-red/20">
                Iniciar respiração
              </button>
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:col-span-2 md:p-8">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2 font-black italic tracking-tight uppercase">
                <span className="material-symbols-outlined text-brand-red">query_stats</span>
                Análise técnica: De La Riva
              </h3>
              <span className="text-[10px] font-bold uppercase text-zinc-400">Precisão: 88%</span>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="flex aspect-square items-center justify-center bg-zinc-950 p-2">
                <img
                  alt="Diagrama técnico 1"
                  className="h-full w-full object-cover opacity-50 grayscale transition-all hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcau8JmXWwdO2XwUEjc1LkDSXwU9j0nDQEb9Kegm4MRHquhUUl1-btBaMOotiiRK6dbgqBaLFXwWMNU9GskRaN3Yo7VpuTLsecbBoqFDw0qiclZ88f8fghrKGFiInYgp4GVH310UGSUuSQa4HV1WGJJWBav_xry-q35ox4Uv4-fUDIhYuWEt_m-QhetaX0kYL8itIpO3J6SkKYTNqklvN0diT-Y_SOJxZpzteEQR7h9Twrew_LUvHNSGICSFFtxOBxVR2lWRb22mvD"
                />
              </div>
              <div className="flex aspect-square items-center justify-center bg-zinc-950 p-2">
                <img
                  alt="Diagrama técnico 2"
                  className="h-full w-full object-cover opacity-50 grayscale transition-all hover:grayscale-0"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuQD7ursl9XIjNY9fNqzq_3P_Zv_9ToUbQe9kBB_aQ1dk6nGsWxY1HnwLkNPsXfwAAsuItuFmb-tqPymTM09mcvqums6NNDVMJXyGZcqDwKOwSr73wrZV0a6PXVIcK-3ffXwzg7rppGdCmTGkWtqURGhTsAIys0w9iz5lUdphpr6vJS38jaEOMa38l9i8LKp6bm9_nRJMYheIw30evG8xghNMxSWYLG3isxdggXxIFqkPmIskq8PzA-axAyhXk5KPNxjDwjEvIf0YH"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-center space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold uppercase">
                    <span>Tensão de hook</span>
                    <span>Alta</span>
                  </div>
                  <div className="h-1 bg-zinc-800/80">
                    <div className="h-full w-[92%] bg-zinc-800"></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold uppercase">
                    <span>Desbalanceamento</span>
                    <span>Inconstante</span>
                  </div>
                  <div className="h-1 bg-zinc-800/80">
                    <div className="h-full w-[45%] bg-brand-red/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="space-y-4 md:col-span-3">
            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">Registro da conversa</h2>
            <div className="space-y-4">
              <div className="flex max-w-2xl items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-brand-red/10">
                  <span className="material-symbols-outlined text-lg text-white">smart_toy</span>
                </div>
                <div className="bg-zinc-950/60 p-4">
                  <p className="text-sm leading-relaxed text-zinc-100">
                    Oss. Analisei seu sparring com <span className="font-bold text-brand-red">"Shark"</span>. Seus ciclos
                    defensivos estão eficientes, mas você está entregando o underhook com facilidade na meia-guarda.
                  </p>
                  <div className="mt-3 flex gap-2">
                    <span className="bg-zinc-800/80 px-2 py-1 text-[10px] font-bold uppercase text-zinc-400">#HalfGuard</span>
                    <span className="bg-zinc-800/80 px-2 py-1 text-[10px] font-bold uppercase text-zinc-400">
                      #UnderhookBattle
                    </span>
                  </div>
                </div>
              </div>

              <div className="ml-auto flex max-w-2xl flex-row-reverse items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-zinc-800/80">
                  <span className="material-symbols-outlined text-lg text-zinc-400">person</span>
                </div>
                <div className="bg-zinc-900 p-4 text-right">
                  <p className="text-sm leading-relaxed text-zinc-100">
                    Como evito o cross-face enquanto luto pelo underhook?
                  </p>
                </div>
              </div>

              <div className="flex max-w-2xl items-start gap-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-brand-red/10">
                  <span className="material-symbols-outlined text-lg text-white">smart_toy</span>
                </div>
                <div className="bg-zinc-950/60 p-4">
                  <p className="text-sm leading-relaxed text-zinc-100">
                    Mantenha a testa colada no ombro ou no peito. Sem espaço entre sua cabeça e o corpo dele, o
                    cross-face não entra. <span className="font-bold text-zinc-300">Revise o minuto 2 do último round</span>
                    - você levantou a cabeça e foi travado.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex-1 border-b-2 border-zinc-800/80 bg-zinc-950 p-4">
                <span className="text-sm text-zinc-400">Faça uma pergunta ao assistente...</span>
                <span className="material-symbols-outlined text-zinc-400">mic</span>
              </div>
              <button className="flex items-center justify-center bg-brand-red/10 px-6">
                <span className="material-symbols-outlined text-white">send</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
