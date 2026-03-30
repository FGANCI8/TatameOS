export default function AnLiseDeFalhasTCnicas() {
  return (
    <>
<main className="px-6 py-8 max-w-5xl mx-auto">
{/*  Hero Metric Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 border-l-8 border-brand-red/20 pl-6">
<div>
<p className="font-label text-xs font-bold uppercase tracking-[0.3em] text-zinc-300 mb-2">ANÁLISE DE VULNERABILIDADE</p>
<h2 className="font-headline text-5xl md:text-7xl font-black uppercase leading-none">PONTOS<br/>CRÍTICOS</h2>
</div>
<div className="text-right">
<span className="font-headline text-6xl font-black text-brand-red">14%</span>
<p className="font-label text-[10px] font-bold uppercase tracking-widest opacity-60">TAXA GLOBAL DE ERRO</p>
</div>
</div>
</section>
{/*  Bento Grid for Fault Analysis  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
{/*  Guard Analysis Card  */}
<div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between min-h-[320px]">
<div className="flex justify-between items-start">
<div>
<span className="material-symbols-outlined text-brand-red text-4xl mb-4" data-icon="security">security</span>
<h3 className="font-headline text-3xl font-bold uppercase italic">GUARDA PASSADA</h3>
<p className="text-zinc-500 text-sm max-w-xs mt-2">Falha recorrente na reposição de meia-guarda e controle de distância lateral.</p>
</div>
<div className="bg-brand-red/10 text-white px-3 py-1 text-[10px] font-black uppercase">CRÍTICO</div>
</div>
<div className="mt-8">
<div className="flex justify-between items-end mb-2">
<span className="font-label text-[10px] font-bold uppercase tracking-widest">FREQUÊNCIA DE ERRO</span>
<span className="font-headline text-2xl font-bold">78%</span>
</div>
<div className="h-4 bg-zinc-800/80 overflow-hidden">
<div className="h-full bg-gradient-to-r from-brand-red to-brand-red w-[78%]"></div>
</div>
</div>
</div>
{/*  Takedown Card  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-zinc-300 text-4xl mb-4" data-icon="directions_run">directions_run</span>
<h3 className="font-headline text-2xl font-bold uppercase italic leading-tight">QUEDAS<br/>PERDIDAS</h3>
<p className="text-zinc-500 text-xs mt-4">Inércia após o sprawl inicial. Falta de transição para o single-leg.</p>
</div>
<div className="mt-6 pt-6 border-t border-white/5">
<div className="flex justify-between items-center">
<span className="font-label text-[10px] font-bold uppercase opacity-50">OCORRÊNCIAS</span>
<span className="font-headline text-xl font-bold">09/12</span>
</div>
</div>
</div>
{/*  Reaction Time Card  */}
<div className="bg-zinc-800/80 p-8 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-brand-red text-4xl mb-4" data-icon="timer_off">timer_off</span>
<h3 className="font-headline text-2xl font-bold uppercase italic leading-tight">DEFESAS<br/>ATRASADAS</h3>
</div>
<div className="relative h-32 flex items-end gap-1">
<div className="flex-1 bg-zinc-950/60 h-[40%]"></div>
<div className="flex-1 bg-zinc-950/60 h-[65%]"></div>
<div className="flex-1 bg-brand-red/10 h-[90%]"></div>
<div className="flex-1 bg-zinc-950/60 h-[55%]"></div>
<div className="flex-1 bg-zinc-950/60 h-[30%]"></div>
</div>
<p className="text-[10px] font-bold uppercase tracking-widest mt-4 opacity-40">MÉDIA DE REAÇÃO: 1.2s</p>
</div>
{/*  Specific Submission Threats  */}
<div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-6">
<h4 className="font-headline text-xl font-bold uppercase italic border-b border-brand-red/30 pb-2">RISCOS TÉCNICOS</h4>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-brand-red" data-icon="change_history">change_history</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-label text-xs font-bold uppercase">TRIÂNGULOS SOFRIDOS</span>
<span className="text-brand-red font-bold">ALTO</span>
</div>
<div className="h-1 bg-zinc-800/80">
<div className="h-full bg-brand-red/60 w-[65%]"></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-100" data-icon="back_hand">back_hand</span>
</div>
<div className="flex-1">
<div className="flex justify-between items-center mb-1">
<span className="font-label text-xs font-bold uppercase">COSTAS CEDIDAS</span>
<span className="text-zinc-500 font-bold">MÉDIO</span>
</div>
<div className="h-1 bg-zinc-800/80">
<div className="h-full bg-tertiary w-[40%]"></div>
</div>
</div>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-2">
<span className="material-symbols-outlined text-[60px] opacity-5 pointer-events-none" data-icon="bolt">bolt</span>
</div>
<p className="font-label text-[10px] font-bold text-brand-red uppercase tracking-[0.2em] mb-4">CORREÇÃO IMEDIATA</p>
<p className="font-body text-sm leading-relaxed text-zinc-100">
                        Foco total no fechamento de cotovelos durante a transição lateral. O adversário está encontrando espaços na axila dominante. 
                    </p>
<button className="mt-6 w-full py-3 bg-brand-red/10 text-white font-headline font-bold text-xs uppercase tracking-widest hover:bg-brand-red/20 transition-all active:scale-95 duration-75">
                        VER VÍDEOS DE DRILLS
                    </button>
</div>
</div>
</div>
{/*  Discipline / Correction Log  */}
<section className="mt-12">
<h2 className="font-headline text-2xl font-black uppercase italic mb-6">LOG DE DISCIPLINA</h2>
<div className="space-y-4">
<div className="group bg-zinc-950/60 p-5 flex items-center justify-between transition-colors hover:bg-zinc-900">
<div className="flex items-center gap-6">
<span className="font-headline text-3xl font-black text-zinc-700 group-hover:text-brand-red/20 transition-colors">01</span>
<div>
<h4 className="font-label font-bold uppercase text-sm tracking-tight">POSTURA NO TRIÂNGULO</h4>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest">TREINO DE TERÇA-FEIRA • ALTA INTENSIDADE</p>
</div>
</div>
<span className="material-symbols-outlined text-brand-red" data-icon="check_circle" data-weight="fill">check_circle</span>
</div>
<div className="group bg-zinc-950/60 p-5 flex items-center justify-between transition-colors hover:bg-zinc-900">
<div className="flex items-center gap-6">
<span className="font-headline text-3xl font-black text-zinc-700 group-hover:text-brand-red/20 transition-colors">02</span>
<div>
<h4 className="font-label font-bold uppercase text-sm tracking-tight">PROTEÇÃO DE COSTAS NA TARTARUGA</h4>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest">TREINO DE QUARTA-FEIRA • REPOSIÇÃO</p>
</div>
</div>
<span className="material-symbols-outlined text-zinc-700" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</div>
</div>
</section>
{/*  Visual Prompt for context (Decorative)  */}
<div className="mt-16 w-full h-[200px] bg-cover bg-center grayscale contrast-125 opacity-30 mix-blend-screen" data-alt="dramatic close up of a jiu-jitsu black belt knot with intense focus and dark shadows athletic textures and red highlights" style={{ /* background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuALwsj78MLvP1Mle2IsKCtToJJ4ZLkv08si6lwdAHgvqU19AriU2MLItYxAOBRq-CP0D_pvxbSV0EGxifw5VCJ5a03zh26GePjSgTiwGXKJ8EinVQe2EV5pZ6yTXJeOBgWERvtYjOYW5EJ6ATMJ86xyD6OIaWonyusdkHCQ_LYjB3PEWJ5dLgI4QrfeOqj0eCZ9LZ1w-eOja5rFPpsHtiAXKrZezQquTcOlTxWFCptub2d9CXJlpVebG9_A5FzDCPk2PQCdh6Fphqwh') */ }}>
</div>
</main>
    </>
  );
}



