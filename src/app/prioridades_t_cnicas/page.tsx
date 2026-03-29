import React from 'react';

export default function PrioridadesTCnicas() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 right-0 z-[60] bg-[#131313] dark:bg-neutral-950 flex justify-between items-center w-full px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden border border-outline-variant/20">
<img alt="Athlete Profile" className="w-full h-full object-cover" data-alt="Intense close-up portrait of a professional Brazilian Jiu-Jitsu athlete with sweat on forehead in a dark studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT9lPv9LuE-2j1__5vclhL3JuVunt96X2H--fyPvqtaSvGhPKVPyqHOa6_e8ES-P2hB5NlKq6vbkxKMN3nI_9RVPoMYD0AGLgs8ge8gC7a1WWyi7JLVgC0bnTVYKXi2JKNRWVSDCoBezCF9HZ9MMpYwk58sfozOE_1eBPYfbFQcKe8ywhYDL0getS1qAE4lQzyznzNQBsfK_OCTbVW_taQgBneHorVdkrLCxguEyCyeKiW--vUwVvRwMyjr5FxSKq5_CjwKPJW6yG8"/>
</div>
<span className="text-2xl font-black italic text-[#E70000] tracking-widest font-headline uppercase">KINETIC_MONOLITH</span>
</div>
<button className="w-10 h-10 flex items-center justify-center hover:bg-neutral-800 transition-colors text-neutral-400 active:scale-95 duration-100">
<span className="material-symbols-outlined">notifications</span>
</button>
</header>
<main className="pt-24 pb-32 px-6 max-w-2xl mx-auto">
{/*  Dashboard Header  */}
<section className="mb-10">
<p className="text-[10px] font-black tracking-[0.3em] text-[#E70000] mb-2 uppercase">Próxima Fase: Análise Técnica</p>
<h1 className="text-5xl font-black font-headline italic leading-[0.9] tracking-tighter uppercase mb-6">
                EVOLUÇÃO<br/>ESTRUTURAL
            </h1>
<div className="h-1 w-24 bg-gradient-to-r from-[#E70000] to-[#C00100]"></div>
</section>
{/*  Priority Ranking  */}
<section className="space-y-6">
<div className="flex items-end justify-between mb-4 border-b border-outline-variant/10 pb-2">
<h2 className="font-headline font-bold text-lg uppercase italic tracking-tight">Status de Prioridade</h2>
<span className="text-[10px] font-bold text-tertiary-fixed-dim tracking-widest">MAPA DE CALOR</span>
</div>
{/*  CRITICAL CARD: Defesa de Queda  */}
<div className="bg-primary-container p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
</div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-8">
<span className="bg-on-primary-container text-primary-container px-3 py-1 text-[10px] font-black tracking-widest uppercase">Crítico</span>
<span className="text-on-primary-container/60 font-mono text-sm">#01</span>
</div>
<h3 className="text-4xl font-black font-headline italic uppercase text-on-primary-container leading-none mb-4">
                        Defesa de<br/>Queda
                    </h3>
<div className="flex items-center gap-4">
<div className="flex-1 h-2 bg-on-primary-fixed-variant/30">
<div className="h-full bg-on-primary-container w-[88%]"></div>
</div>
<span className="font-bold text-sm text-on-primary-container">88% URGÊNCIA</span>
</div>
</div>
</div>
{/*  MODERATE CARD: Passagem de Guarda  */}
<div className="grid grid-cols-1 gap-4">
<div className="bg-surface-container-highest p-6 relative border-l-4 border-secondary-container">
<div className="flex justify-between items-center mb-4">
<span className="text-secondary-fixed-dim text-[10px] font-black tracking-widest uppercase">Moderado</span>
<span className="material-symbols-outlined text-secondary-container">trending_up</span>
</div>
<h3 className="text-2xl font-black font-headline italic uppercase text-on-background mb-4">Passagem de Guarda</h3>
<div className="bg-surface-container-lowest h-1.5 w-full mb-2">
<div className="h-full bg-secondary-container w-[54%]"></div>
</div>
<p className="text-[10px] text-tertiary-fixed-dim tracking-wider uppercase font-bold">Volume de treino sugerido: 12h/semana</p>
</div>
{/*  Secondary Grid  */}
<div className="grid grid-cols-2 gap-4">
{/*  Raspagem  */}
<div className="bg-surface-container p-5">
<span className="text-on-tertiary-fixed-variant text-[9px] font-black tracking-widest uppercase block mb-3">Estável</span>
<h4 className="text-lg font-black font-headline italic uppercase mb-4 leading-tight">Raspagem de Meia</h4>
<div className="flex items-center justify-between">
<span className="text-xs font-bold text-tertiary">LV. 4</span>
<span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
</div>
</div>
{/*  Finalização  */}
<div className="bg-surface-container p-5">
<span className="text-on-tertiary-fixed-variant text-[9px] font-black tracking-widest uppercase block mb-3">Estável</span>
<h4 className="text-lg font-black font-headline italic uppercase mb-4 leading-tight">Ataques de Braço</h4>
<div className="flex items-center justify-between">
<span className="text-xs font-bold text-tertiary">LV. 7</span>
<span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
</div>
</div>
</div>
</div>
</section>
{/*  Telemetry Data Section  */}
<section className="mt-12">
<div className="bg-surface-container-low p-6">
<div className="flex items-center gap-2 mb-6">
<span className="w-2 h-2 bg-[#E70000]"></span>
<h2 className="text-xs font-black tracking-[0.2em] uppercase text-on-surface">Métricas de Rendimento</h2>
</div>
<div className="grid grid-cols-2 gap-8">
<div>
<p className="text-[10px] text-tertiary-fixed-dim uppercase mb-1">Explosividade</p>
<p className="text-3xl font-black font-headline text-on-surface leading-none">9.4<span className="text-xs text-tertiary-fixed-dim ml-1">G</span></p>
</div>
<div>
<p className="text-[10px] text-tertiary-fixed-dim uppercase mb-1">Resistência Isométrica</p>
<p className="text-3xl font-black font-headline text-on-surface leading-none">12<span className="text-xs text-tertiary-fixed-dim ml-1">MIN</span></p>
</div>
<div className="col-span-2 pt-4 border-t border-outline-variant/10">
<p className="text-[10px] text-tertiary-fixed-dim uppercase mb-3">Progressão Semanal</p>
<div className="flex items-end gap-1 h-12">
<div className="flex-1 bg-surface-container-high h-[30%]"></div>
<div className="flex-1 bg-surface-container-high h-[45%]"></div>
<div className="flex-1 bg-surface-container-high h-[35%]"></div>
<div className="flex-1 bg-surface-container-high h-[60%]"></div>
<div className="flex-1 bg-secondary-container h-[85%]"></div>
<div className="flex-1 bg-primary-container h-[100%]"></div>
<div className="flex-1 bg-surface-container-high h-[40%]"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Technical Log CTA  */}
<section className="mt-8">
<button className="w-full bg-on-surface text-inverse-on-surface py-5 flex items-center justify-center gap-3 font-headline font-black italic uppercase tracking-widest active:scale-95 transition-transform">
<span>Registrar Novo Sparring</span>
<span className="material-symbols-outlined">add_box</span>
</button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch bg-[#353534]/80 dark:bg-neutral-900/80 backdrop-blur-xl z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
{/*  TRAINING (Active Based on context)  */}
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full px-4 flex-1 brightness-125 duration-75" href="#">
<span className="material-symbols-outlined mb-1" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">TRAINING</span>
</a>
{/*  COMPETE  */}
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 flex-1 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1">military_tech</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">COMPETE</span>
</a>
{/*  STATS  */}
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 flex-1 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1">insights</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">STATS</span>
</a>
{/*  PROFILE  */}
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 flex-1 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">PROFILE</span>
</a>
</nav>

    </>
  );
}
