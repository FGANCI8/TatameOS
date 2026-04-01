export default function MomentoCrTico() {
  return (
    <>
<main className="pt-24 pb-32 px-4 max-w-5xl mx-auto space-y-8">
{/*  Hero Section: Title & Criticality  */}
<section className="relative">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-1">
<span className="font-headline font-bold text-brand-red tracking-[0.3em] text-xs uppercase">Análise de Performance</span>
<h2 className="font-headline font-black text-5xl md:text-7xl uppercase leading-none italic tracking-tighter">
                        PONTO DE <br/><span className="text-brand-red text-glow-red">INFLEXÃO</span>
</h2>
</div>
<div className="bg-zinc-800/80 p-4 border-l-4 border-brand-red/20">
<div className="text-[10px] font-headline font-bold text-zinc-400 uppercase tracking-widest">Nível de Tensão</div>
<div className="text-3xl font-headline font-black text-white">94.2%</div>
</div>
</div>
</section>
{/*  Main Content Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Video/Graphic Placeholder  */}
<div className="md:col-span-8 bg-zinc-950/60 relative aspect-video group overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Cinematic wide shot of two jiu-jitsu fighters grappling on a dark mat, one attempting a guillotine choke, high contrast red and blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnVE4BHQV2JTYmyYpNdWVR2Zs1Tq-q_OJI9qeDG8Z0wtOwnb0nTkIqpfEsnASyQzLXevQ8lsPGJJxyqNjdk4GWfncFkqFQuRwPMgbKnh86G3RkSlTniRyxPSb1bD46yOJKqrhrhGt9gsifAiKPCULFs8BJ4vRfIK_r9mJt9_B8qwXxcs3IVxm93JotxgZIke7RmpB7iVt874WQJJtHymTf64QB7clXVuAHPKXrb4ilot3cnsiYsRqlOdqgLMv4zd0OWgrnhw2qbsfb"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
{/*  Overlay Telemetry  */}
<div className="absolute top-4 left-4 flex gap-2">
<div className="bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-headline font-bold text-white border border-white/10 uppercase">Live telemetry</div>
<div className="bg-brand-red/10/80 backdrop-blur-md px-3 py-1 text-[10px] font-headline font-bold text-white uppercase">Critical Error</div>
</div>
{/*  Central Focus Marker  */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-32 h-32 border-2 border-brand-red/20/40 flex items-center justify-center">
<div className="w-24 h-24 border border-brand-red/20"></div>
<div className="absolute text-brand-red font-headline font-black text-xl tracking-tighter">03:15</div>
</div>
</div>
</div>
{/*  Situation Summary Card  */}
<div className="md:col-span-4 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between space-y-6">
<div className="space-y-4">
<h3 className="font-headline font-black text-xl uppercase tracking-tight text-white">Anatomia do Erro</h3>
<div className="space-y-4 relative">
{/*  Step 1  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-white/10 flex items-center justify-center font-headline font-black text-[10px]">01</div>
<p className="font-body text-sm text-zinc-400 leading-tight">Vantagem de 2 pontos estabelecida após passagem de guarda.</p>
</div>
{/*  Step 2  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-brand-red/10 flex items-center justify-center font-headline font-black text-[10px]">02</div>
<p className="font-body text-sm text-white font-semibold leading-tight italic">Decisão de atacar guilhotina sem ajuste fino.</p>
</div>
{/*  Step 3  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-white/10 flex items-center justify-center font-headline font-black text-[10px]">03</div>
<p className="font-body text-sm text-zinc-400 leading-tight">Inversão de posição e perda do controle lateral.</p>
</div>
</div>
</div>
<div className="bg-zinc-950 p-4 space-y-2">
<div className="text-[10px] font-headline font-bold text-brand-red tracking-widest uppercase">Consequência Direta</div>
<div className="text-lg font-headline font-black text-white italic">-4 PONTOS + LOSS OF TEMP</div>
</div>
</div>
{/*  Tension Graph Section  */}
<div className="md:col-span-12 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 border border-zinc-800/20">
<div className="flex justify-between items-center mb-8">
<h3 className="font-headline font-black text-2xl uppercase tracking-tighter italic">Gráfico de Tensão de Luta</h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-brand-red/10"></div>
<span className="text-[10px] font-headline font-bold uppercase tracking-widest text-zinc-400">Riscos</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-zinc-800"></div>
<span className="text-[10px] font-headline font-bold uppercase tracking-widest text-zinc-400">Estabilidade</span>
</div>
</div>
</div>
{/*  Visual Timeline/Graph  */}
<div className="relative h-48 w-full flex items-end gap-[2px]">
{/*  Dummy bars to simulate a wave  */}
<div className="flex-1 bg-zinc-800/80 h-[20%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[25%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[35%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[30%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[45%]"></div>
<div className="flex-1 bg-brand-red/10 h-[85%] relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-brand-red/10 text-white px-3 py-1 font-headline font-black text-sm italic clip-path-asymmetric">CRITICAL</div>
</div>
<div className="flex-1 bg-zinc-800/80 h-[40%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[35%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[30%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[55%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[50%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[65%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[60%]"></div>
</div>
{/*  Time Markers  */}
<div className="flex justify-between mt-4 font-headline font-bold text-[10px] text-zinc-400 uppercase tracking-[0.2em] border-t border-zinc-800/30 pt-4">
<span>00:00</span>
<span>01:00</span>
<span>02:00</span>
<span className="text-brand-red">03:15 INFLEXÃO</span>
<span>04:00</span>
<span>05:00</span>
</div>
</div>
{/*  Insights / Next Actions  */}
<div className="md:col-span-6 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex gap-6 items-center">
<div className="bg-zinc-900 p-4">
<span className="material-symbols-outlined text-zinc-100 text-3xl">psychology</span>
</div>
<div>
<h4 className="font-headline font-black text-lg uppercase text-white">Análise do Professor</h4>
<p className="font-body text-sm text-zinc-400">"O excesso de confiança após a vantagem cegou a leitura do quadril do oponente. O ataque foi impulsivo."</p>
</div>
</div>
<div className="md:col-span-6 bg-brand-red/10 p-6 flex gap-6 items-center group cursor-pointer hover:bg-brand-red/20 transition-colors">
<div className="bg-white/20 p-4">
<span className="material-symbols-outlined text-white text-3xl">fitness_center</span>
</div>
<div className="flex-1">
<h4 className="font-headline font-black text-lg uppercase text-white">Treinar Correção</h4>
<p className="font-body text-sm text-white/80">Drill: Transição de guilhotina para controle de costas.</p>
</div>
<span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_forward_ios</span>
</div>
</div>
</main>
    </>
  );
}


