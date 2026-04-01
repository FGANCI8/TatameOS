export default function PrioridadesTCnicas() {
  return (
    <>
<main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
{/*  Dashboard Header  */}
<section className="mb-10">
<p className="text-[10px] font-black tracking-[0.3em] text-[#FF1A1A] mb-2 uppercase">Próxima Fase: Análise Técnica</p>
<h1 className="text-5xl font-black font-headline italic leading-[0.9] tracking-tighter uppercase mb-6">
                EVOLUÇÃO<br/>ESTRUTURAL
            </h1>
<div className="h-1 w-24 bg-gradient-to-r from-[#FF1A1A] to-[#C00100]"></div>
</section>
{/*  Priority Ranking  */}
<section className="space-y-6">
<div className="flex items-end justify-between mb-4 border-b border-zinc-800/10 pb-2">
<h2 className="font-headline font-bold text-lg uppercase italic tracking-tight">Status de Prioridade</h2>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest">MAPA DE CALOR</span>
</div>
{/*  CRITICAL CARD: Defesa de Queda  */}
<div className="bg-brand-red/10 p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
</div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<span className="bg-white text-brand-red px-3 py-1 text-[10px] font-black tracking-widest uppercase">Crítico</span>
<span className="text-white/60 font-mono text-sm">#01</span>
</div>
<h3 className="text-4xl font-black font-headline italic uppercase text-white leading-none mb-4">
                        Defesa de<br/>Queda
                    </h3>
<div className="flex items-center gap-4">
<div className="flex-1 h-2 bg-on-primary-fixed-variant/30">
<div className="h-full bg-white w-[88%]"></div>
</div>
<span className="font-bold text-sm text-white">88% URGÊNCIA</span>
</div>
</div>
</div>
{/*  MODERATE CARD: Passagem de Guarda  */}
<div className="grid grid-cols-1 gap-4">
<div className="bg-zinc-800/80 p-6 relative border-l-4 border-zinc-800">
<div className="flex justify-between items-center mb-4">
<span className="text-zinc-400 text-[10px] font-black tracking-widest uppercase">Moderado</span>
<span className="material-symbols-outlined text-zinc-300-container">trending_up</span>
</div>
<h3 className="text-2xl font-black font-headline italic uppercase text-on-background mb-4">Passagem de Guarda</h3>
<div className="bg-zinc-950 h-1.5 w-full mb-2">
<div className="h-full bg-zinc-900 w-[54%]"></div>
</div>
<p className="text-[10px] text-zinc-500 tracking-wider uppercase font-bold">Volume de treino sugerido: 12h/semana</p>
</div>
{/*  Secondary Grid  */}
<div className="grid grid-cols-2 gap-4">
{/*  Raspagem  */}
<div className="bg-zinc-900/80 p-5">
<span className="text-on-tertiary-fixed-variant text-[9px] font-black tracking-widest uppercase block mb-3">Estável</span>
<h4 className="text-lg font-black font-headline italic uppercase mb-4 leading-tight">Raspagem de Meia</h4>
<div className="flex items-center justify-between">
<span className="text-xs font-bold text-zinc-400">LV. 4</span>
<span className="material-symbols-outlined text-zinc-400 text-sm">check_circle</span>
</div>
</div>
{/*  Finalização  */}
<div className="bg-zinc-900/80 p-5">
<span className="text-on-tertiary-fixed-variant text-[9px] font-black tracking-widest uppercase block mb-3">Estável</span>
<h4 className="text-lg font-black font-headline italic uppercase mb-4 leading-tight">Ataques de Braço</h4>
<div className="flex items-center justify-between">
<span className="text-xs font-bold text-zinc-400">LV. 7</span>
<span className="material-symbols-outlined text-zinc-400 text-sm">check_circle</span>
</div>
</div>
</div>
</div>
</section>
{/*  Telemetry Data Section  */}
<section className="mt-12">
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 bg-[#FF1A1A]"></span>
<h2 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-100">Métricas de Rendimento</h2>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<p className="text-[10px] text-zinc-500 uppercase mb-1">Explosividade</p>
<p className="text-3xl font-black font-headline text-zinc-100 leading-none">9.4<span className="text-xs text-zinc-500 ml-1">G</span></p>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase mb-1">Resistência Isométrica</p>
<p className="text-3xl font-black font-headline text-zinc-100 leading-none">12<span className="text-xs text-zinc-500 ml-1">MIN</span></p>
</div>
<div className="col-span-2 pt-4 border-t border-zinc-800/10">
<p className="text-[10px] text-zinc-500 uppercase mb-3">Progressão Semanal</p>
<div className="flex items-end gap-1 h-12">
<div className="flex-1 bg-zinc-900 h-[30%]"></div>
<div className="flex-1 bg-zinc-900 h-[45%]"></div>
<div className="flex-1 bg-zinc-900 h-[35%]"></div>
<div className="flex-1 bg-zinc-900 h-[60%]"></div>
<div className="flex-1 bg-zinc-900 h-[85%]"></div>
<div className="flex-1 bg-brand-red/10 h-[100%]"></div>
<div className="flex-1 bg-zinc-900 h-[40%]"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Technical Log CTA  */}
<section className="mt-8">
<button className="w-full bg-zinc-100 text-zinc-950 py-5 flex items-center justify-center gap-3 font-headline font-black italic uppercase tracking-widest active:scale-95 transition-transform">
<span>Registrar Novo Sparring</span>
<span className="material-symbols-outlined">add_box</span>
</button>
</section>
</main>
    </>
  );
}



