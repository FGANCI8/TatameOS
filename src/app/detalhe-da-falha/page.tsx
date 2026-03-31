export default function DetalheDaFalha() {
  return (
    <>
      <main className="mx-auto max-w-5xl space-y-8 px-4 pt-20">
        {/* Hero Header */}
        <section className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF1A1A]">Diagnóstico de Performance</span>
          <h2 className="text-5xl font-black leading-none text-white md:text-7xl">Triângulo Sofrido</h2>
          <p className="max-w-xl text-sm text-zinc-500">
            Análise técnica de vulnerabilidade na guarda fechada e transições de postura.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <div className="flex flex-col justify-between rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:col-span-4 md:p-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Frequência Crítica</span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-6xl font-black text-white">68%</span>
                <span className="text-brand-red text-sm font-bold">↑ 12%</span>
              </div>
            </div>
            <div className="mt-8">
              <p className="text-xs leading-relaxed text-zinc-400">
                Incidência acima da média para a categoria Faixa Roxa. Requer correção imediata na postura de ombros.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:col-span-8 md:p-8">
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Impacto no Resultado</span>
              <h3 className="mt-2 text-2xl font-bold text-white">Déficit de Pontuação</h3>
              <div className="mt-6 flex h-32 items-end gap-1">
                <div className="h-[20%] flex-1 bg-zinc-800/80"></div>
                <div className="h-[35%] flex-1 bg-zinc-800/80"></div>
                <div className="h-[85%] flex-1 bg-brand-red/10"></div>
                <div className="h-[45%] flex-1 bg-zinc-800/80"></div>
                <div className="h-[100%] flex-1 bg-brand-red/10"></div>
                <div className="h-[30%] flex-1 bg-zinc-800/80"></div>
                <div className="h-[25%] flex-1 bg-zinc-800/80"></div>
                <div className="h-[90%] flex-1 bg-brand-red/10"></div>
              </div>
              <div className="mt-2 flex justify-between text-[10px] font-bold uppercase tracking-tighter text-zinc-500">
                <span>Últimos 8 Sparrings</span>
                <span className="text-brand-red">Submissão / Perda de Posição</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:col-span-7 md:p-8">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Contexto do Erro</span>
            <div className="grid grid-cols-2 gap-4">
              <div className="border-b-2 border-zinc-800 bg-zinc-950 p-4">
                <span className="material-symbols-outlined mb-2 block text-zinc-300">timer</span>
                <span className="block text-xs uppercase text-zinc-500">Momento</span>
                <span className="text-lg font-bold">Final do Round</span>
              </div>
              <div className="border-b-2 border-brand-red/20 bg-zinc-950 p-4">
                <span className="material-symbols-outlined mb-2 block text-brand-red">bolt</span>
                <span className="block text-xs uppercase text-zinc-500">Causa Raiz</span>
                <span className="text-lg font-bold">Fadiga Postural</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs font-bold uppercase">
                <span>Eficiência de Defesa</span>
                <span>22%</span>
              </div>
              <div className="h-2 w-full bg-zinc-800/80">
                <div className="h-full bg-brand-red" style={{ width: '22%' }} />
              </div>
            </div>
          </div>

          <div className="overflow-hidden bg-zinc-900/80 md:col-span-5">
            <div className="relative min-h-[240px] w-full">
              <img
                alt="Jiu Jitsu Analysis"
                className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale transition-all duration-500 group-hover:grayscale-0"
                data-alt="Birds-eye view of two Jiu-Jitsu practitioners on a black mat, one trapped in a triangle choke, highlighted with red tactical overlays"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDofv2-tPMIf4APV_rOK5PKbrlXW9Y9JWKI7GyeejhryanEQX-pZZ2apJzNVFbK_RS6QTxLJDqf3MGRfv_Ce4GP7on8cdx_1V-o1nqq-taqBRYSMcGVV5kChcUPWkYIl3onyL86JWHOPPDXRyufnUbdv125gBaX_fwbxJ5cCSH2oAScCqhuJ4jfWdHZ18sUKhOCIV3k2E1IVIWIaLkb27V1HL09Uy3a-HQfRobn2oiWVVf5wqj6_HNA3ZjotUo-LQUXybQN5naOolkZ"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="block text-xl font-black text-white">Anatomia da Falha</span>
                <span className="text-xs text-zinc-400">Braço isolado / Postura quebrada</span>
              </div>
            </div>
          </div>
        </div>

        <section className="space-y-4">
          <h3 className="border-b border-zinc-800 pb-2 text-2xl font-bold text-white">Plano de Correção</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 bg-zinc-950/60 p-4 transition-colors hover:bg-zinc-800/80">
              <span className="flex h-12 w-12 items-center justify-center bg-zinc-800/80 text-xl font-black italic text-brand-red">01</span>
              <div className="flex-1">
                <h4 className="text-sm font-bold uppercase tracking-tight text-white">Manutenção de Postura Vertical</h4>
                <p className="text-xs text-zinc-500">Focar em manter o peito aberto e a coluna alinhada ao abrir a guarda.</p>
              </div>
              <span className="material-symbols-outlined text-zinc-500">play_circle</span>
            </div>
            <div className="flex items-center gap-4 bg-zinc-950/60 p-4 transition-colors hover:bg-zinc-800/80">
              <span className="flex h-12 w-12 items-center justify-center bg-zinc-800/80 text-xl font-black italic text-brand-red">02</span>
              <div className="flex-1">
                <h4 className="text-sm font-bold uppercase tracking-tight text-white">Controle de Pegada na Gola</h4>
                <p className="text-xs text-zinc-500">Não permitir o controle da nuca que quebra o alinhamento cervical.</p>
              </div>
              <span className="material-symbols-outlined text-zinc-500">play_circle</span>
            </div>
            <div className="flex items-center gap-4 bg-zinc-950/60 p-4 transition-colors hover:bg-zinc-800/80">
              <span className="flex h-12 w-12 items-center justify-center bg-zinc-800/80 text-xl font-black italic text-brand-red">03</span>
              <div className="flex-1">
                <h4 className="text-sm font-bold uppercase tracking-tight text-white">Drill de Saída de Emergência</h4>
                <p className="text-xs text-zinc-500">Postura de "empilhar" imediata quando o quadril do oponente subir.</p>
              </div>
              <span className="material-symbols-outlined text-zinc-500">play_circle</span>
            </div>
          </div>
        </section>

        <button className="flex w-full items-center justify-center gap-3 bg-gradient-to-br from-brand-red to-brand-red py-6 text-lg font-black text-white transition-transform active:scale-[0.98]">
          <span className="material-symbols-outlined">fitness_center</span>
          Iniciar treino de correção
        </button>
      </main>
    </>
  );
}
