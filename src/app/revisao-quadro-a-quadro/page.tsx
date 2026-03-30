export default function RevisaoQuadroAQuadro() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-32 pt-24 md:px-8">
      <section className="mb-12">
        <div className="flex flex-col justify-between gap-4 border-l-4 border-brand-red/20 pl-6 md:flex-row md:items-end">
          <div>
            <span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
              Session ID: 0492-X
            </span>
            <h2 className="mt-1 font-headline text-5xl font-black uppercase tracking-tighter">
              ANÁLISE DE <span className="text-brand-red">FRAME</span>
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <span className="font-label text-xs font-bold uppercase text-zinc-500">Data stream</span>
            <span className="font-headline text-2xl font-bold">REVISÃO QUADRO A QUADRO</span>
          </div>
        </div>
      </section>

      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative group lg:col-span-8 bg-zinc-950/60">
          <div className="aspect-video w-full overflow-hidden border-b-4 border-brand-red/20 bg-zinc-900/80">
            <img
              alt="Main analysis frame"
              className="h-full w-full object-cover opacity-80"
              data-alt="action shot of two MMA fighters in a clinch, dramatic low-key lighting, highlight on technical grip and body tension"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz0BIRW4SMYO5h1_SrirK2YZHFKphSm9oXfGYc-MX4sGUuUYuyPgvxi7LEQX36TTJ2dtltKqr2JITKZr5WHQiuHpG6IVPSmX3YIrsluaPkOL6Wvr6FNWvK1DlU9mVKA1zomfaIH2zL2_30ovuAP-clGQUB8gsrQ57LHzGEEpGg-yNoZj19SD4VpcC9mFjkksyeLoINJQhEFFN0b_Q5pa7mYuySOq-ccty4k-Si6ML5-CiPwishyLw8BRc6dAA_9VR95gNul054BD8f"
            />
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/3 top-1/4 h-1/2 w-1 bg-zinc-800/40 shadow-[0_0_15px_rgba(189,194,255,0.5)]" />
              <div className="absolute left-1/2 top-1/3 h-4 w-4 -translate-x-1/2 -translate-y-1/2 animate-pulse border-2 border-brand-red/20" />
              <div className="absolute left-[55%] top-1/3 bg-zinc-800/80 p-2">
                <span className="block text-[10px] font-black uppercase text-brand-red">GRIP FORCE</span>
                <span className="block font-headline text-lg font-bold">842N</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="bg-zinc-950/80 p-4 backdrop-blur-md">
              <div className="flex gap-8">
                <div>
                  <span className="block text-[10px] uppercase text-zinc-400">Timing</span>
                  <span className="block font-headline text-xl font-black">00:42:15</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase text-zinc-400">Balance index</span>
                  <span className="block font-headline text-xl font-black text-zinc-300">92%</span>
                </div>
              </div>
            </div>
            <div className="bg-brand-red/10 p-4">
              <span className="material-symbols-outlined text-white">analytics</span>
            </div>
          </div>
        </div>

        <aside className="flex flex-col gap-4 lg:col-span-4">
          <div className="flex flex-1 flex-col rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <h3 className="mb-4 font-headline text-2xl font-black uppercase italic">Mecânica do movimento</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-brand-red/10" />
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
                    01. Postura e alinhamento
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed text-zinc-100/80">
                  Coluna vertebral mantida em eixo neutro. O centro de gravidade está deslocado 15% à frente,
                  otimizando a transição para a queda.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-zinc-800" />
                  <span className="text-xs font-black uppercase tracking-widest text-zinc-400">
                    02. Ponto de pressão (base)
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed text-zinc-100/80">
                  Distribuição de carga concentrada no metatarso do pé direito. Ângulo de joelho em 115º para explosão
                  lateral.
                </p>
              </div>
              <div className="bg-zinc-950 p-4">
                <span className="mb-2 block text-[10px] font-bold uppercase text-zinc-400">Insight do assistente IA:</span>
                <p className="text-xs italic text-zinc-300">
                  "Antecipação detectada. O oponente iniciou a defesa 0.04s após o contato inicial. Timing de pegada
                  superior."
                </p>
              </div>
            </div>
          </div>

          <button className="w-full bg-brand-red/10 py-4 font-headline font-black uppercase tracking-widest text-white transition-all active:scale-95 hover:brightness-110">
            Exportar telemetria
          </button>
        </aside>
      </div>

      <section className="mt-12 overflow-x-auto pb-4">
        <div className="flex min-w-max gap-4">
          {[
            ['F_38', 'ABORDAGEM'],
            ['F_39', 'CONTATO'],
            ['F_40', 'ALAVANCA'],
            ['F_41', 'EXECUÇÃO'],
            ['F_42', 'RESULTADO'],
          ].map(([frame, label], index) => (
            <div key={frame} className="group w-48 cursor-pointer">
              <div
                className={`relative mb-2 aspect-video overflow-hidden bg-zinc-900/80 ${
                  index === 1 ? 'border-b-2 border-brand-red/20 bg-zinc-950/60 p-2' : 'border-b-2 border-transparent'
                } transition-colors group-hover:border-brand-red/20`}
              >
                <img
                  alt={`Frame ${frame}`}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  data-alt="blurred motion shot of a fighter preparing for a take down, cinematic lighting"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkLk4Nso-ikVGljZETI-EdP2Fmi8hPcgt16K8xtkiQhnCffLdiZ1Hyvme4irEKvjdcL6gp4J9gZtKDu5FM8UFSWhIBIjORjiP7pqgATHyAsxzkTosFygAjqmlpHEFcdwd5az_Rp_gLRQ1-dvrM4No3ADTl99OfK8GdZqlndKqNYBNI_uuSm6vZyDsUj2L8YA8McfsiPME3UlDYWxDrUmYl4DPnG8uD87y331OrsquGPVpIVehylE5FQVLLJ1hAq0FzeUi3CnjaovxS"
                />
                <span
                  className={`absolute left-1 top-1 bg-zinc-950 px-1 text-[10px] font-bold ${
                    index === 1 ? 'text-white' : 'text-zinc-300'
                  }`}
                >
                  {frame}
                </span>
              </div>
              <span className="block text-[10px] font-black uppercase text-zinc-400">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid grid-cols-2 gap-0 border border-zinc-800/80 md:grid-cols-4">
        <div className="bg-zinc-950/60 p-6 border-r border-zinc-800/80">
          <span className="block text-[10px] font-bold uppercase text-zinc-400">Peak velocity</span>
          <span className="mt-2 block font-headline text-3xl font-black">12.4 m/s</span>
        </div>
        <div className="border-r border-zinc-800/80 bg-zinc-900/80 p-6">
          <span className="block text-[10px] font-bold uppercase text-zinc-400">Stability coef</span>
          <span className="mt-2 block font-headline text-3xl font-black text-brand-red">0.88</span>
        </div>
        <div className="bg-zinc-950/60 p-6 border-r border-zinc-800/80">
          <span className="block text-[10px] font-bold uppercase text-zinc-400">Heart rate</span>
          <span className="mt-2 block font-headline text-3xl font-black">
            164 <small className="text-sm">BPM</small>
          </span>
        </div>
        <div className="bg-zinc-900/80 p-6">
          <span className="block text-[10px] font-bold uppercase text-zinc-400">G-force impact</span>
          <span className="mt-2 block font-headline text-3xl font-black">3.2 G</span>
        </div>
      </section>
    </main>
  );
}
