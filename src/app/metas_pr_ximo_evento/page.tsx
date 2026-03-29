import React from 'react';

export default function MetasPrXimoEvento() {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="bg-[#131313] dark:bg-neutral-950 fixed top-0 w-full z-50 border-0 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="Intense close-up profile portrait of a focused Brazilian Jiu-Jitsu athlete with sweat on face in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-Qtuz-Am0rB3FZpQOeQf85FLTui5SNvbmBGCBjjdNOgkgmDPpV5CoCjDoX7FFINYbGFOBRCXgu_6SRspyXYK6tsAQTtyBnJvgU25SZyVrFFxv9dYbkqNsEBQZlFc2QOR22Qtfkj9891htm7SBjLRczGt5n5AYRY00dMY15ozJfdaquj1NDQaRqUmiQkxoHZcgSowhqSvQ73nJRvkAykmH-d4glFNskdzz6tAVXPLmtoZP8x4h6vKees2lid9YE5d01i61WBxWOOs"/>
</div>
<h1 className="font-headline font-black italic tracking-tighter uppercase text-2xl text-[#E70000]">KINETIC_MONOLITH</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-neutral-400 hover:text-[#E70000] cursor-pointer transition-colors" data-icon="notifications">notifications</span>
</div>
</header>
<main className="pt-24 pb-32 px-6 min-h-screen telemetry-grid">
{/*  Hero Section: Stats & Title  */}
<section className="mb-10">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-[#E70000] font-headline font-black italic text-5xl">14</span>
<span className="font-label font-bold text-[10px] tracking-[0.2em] text-tertiary-fixed-dim uppercase">DIAS PARA O COMBATE</span>
</div>
<h2 className="font-headline font-black italic text-4xl leading-none uppercase tracking-tighter border-l-4 border-[#E70000] pl-4">
                OBJETIVOS:<br/>PRÓXIMO EVENTO
            </h2>
</section>
{/*  Bento Grid: Priority Goals  */}
<div className="grid grid-cols-1 gap-4 mb-8">
{/*  Goal Item: High Priority  */}
<div className="bg-surface-container-low p-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-2 bg-[#E70000] font-label font-black text-[10px] tracking-widest text-white uppercase">PRIORIDADE ALTA</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-4xl text-[#E70000]" data-icon="shield" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield</span>
<div>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-1">Defender Triângulo</h3>
<p className="text-tertiary-fixed-dim text-xs leading-relaxed max-w-[200px]">Foco em postura e controle de braços durante a transição da guarda.</p>
</div>
</div>
<div className="mt-6 h-1 w-full bg-surface-container-highest">
<div className="h-full bg-[#E70000] w-[65%]"></div>
</div>
<div className="flex justify-between mt-2 font-label font-bold text-[10px] text-neutral-500 uppercase tracking-widest">
<span>PROGRESSO</span>
<span>65%</span>
</div>
</div>
{/*  Goal Item: Medium Priority  */}
<div className="bg-surface-container-high p-6 group">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-2xl text-[#BDC2FF]" data-icon="fitness_center">fitness_center</span>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">Melhorar Postura</h3>
</div>
<span className="font-label font-bold text-[10px] tracking-widest text-[#BDC2FF] uppercase">MÉDIA</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container-highest font-label text-[10px] font-bold uppercase text-tertiary-fixed-dim">ESTABILIDADE</span>
<span className="px-3 py-1 bg-surface-container-highest font-label text-[10px] font-bold uppercase text-tertiary-fixed-dim">ISOMETRIA</span>
</div>
</div>
{/*  Goal Item: Low Priority  */}
<div className="bg-surface-container-low p-6 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-2 h-10 bg-surface-container-highest"></div>
<div>
<h3 className="font-headline font-bold text-lg uppercase tracking-tight">Antecipar Pegadas</h3>
<p className="text-neutral-500 text-[10px] font-label uppercase tracking-widest">TÉCNICA DE REAÇÃO</p>
</div>
</div>
<span className="material-symbols-outlined text-neutral-600" data-icon="radio_button_unchecked">radio_button_unchecked</span>
</div>
</div>
{/*  Action Section  */}
<div className="flex flex-col gap-4">
<button className="kinetic-gradient text-on-primary-container font-headline font-black italic py-5 text-lg uppercase tracking-widest shadow-[0_10px_30px_rgba(231,0,0,0.3)] active:scale-95 duration-100 flex items-center justify-center gap-3">
<span className="material-symbols-outlined" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span>
                INICIAR TREINO FOCADO
            </button>
<button className="bg-transparent border border-outline-variant text-on-surface font-label font-bold py-4 text-xs uppercase tracking-widest hover:bg-surface-container-highest transition-colors">
                ADICIONAR NOVA META
            </button>
</div>
{/*  Performance Metric  */}
<div className="mt-12 bg-surface-container-lowest p-6 border-l border-surface-container-highest">
<div className="flex justify-between items-end">
<div>
<h4 className="font-label font-black text-[10px] text-[#343D96] tracking-[0.3em] uppercase mb-4">MÉTRICA DE CONSISTÊNCIA</h4>
<div className="flex gap-1 h-12 items-end">
<div className="w-2 bg-surface-container-highest h-[20%]"></div>
<div className="w-2 bg-[#E70000] h-[45%]"></div>
<div className="w-2 bg-surface-container-highest h-[30%]"></div>
<div className="w-2 bg-[#E70000] h-[70%]"></div>
<div className="w-2 bg-[#E70000] h-[85%]"></div>
<div className="w-2 bg-[#E70000] h-[60%]"></div>
<div className="w-2 bg-secondary-container h-[95%]"></div>
</div>
</div>
<div className="text-right">
<span className="block font-headline font-black italic text-4xl text-on-surface">92%</span>
<span className="block font-label font-bold text-[8px] text-neutral-500 tracking-widest uppercase">READY STATE</span>
</div>
</div>
</div>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 bg-[#353534]/80 dark:bg-neutral-900/80 backdrop-blur-xl flex justify-around items-stretch z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full px-4 group active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined mb-1" data-icon="fitness_center" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all active:scale-95 duration-100" href="#">
<span className="material-symbols-outlined mb-1" data-icon="military_tech">military_tech</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">COMPETE</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all active:scale-95 duration-100" href="#">
<span className="material-symbols-outlined mb-1" data-icon="insights">insights</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">STATS</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all active:scale-95 duration-100" href="#">
<span className="material-symbols-outlined mb-1" data-icon="person">person</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">PROFILE</span>
</a>
</nav>

    </>
  );
}
