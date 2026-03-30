
export default function MetasPrXimoEvento() {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="bg-[#131313] dark:bg-neutral-950 fixed top-0 w-full z-50 border-0 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-800/80 overflow-hidden">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="Intense close-up profile portrait of a focused Brazilian Jiu-Jitsu athlete with sweat on face in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1-Qtuz-Am0rB3FZpQOeQf85FLTui5SNvbmBGCBjjdNOgkgmDPpV5CoCjDoX7FFINYbGFOBRCXgu_6SRspyXYK6tsAQTtyBnJvgU25SZyVrFFxv9dYbkqNsEBQZlFc2QOR22Qtfkj9891htm7SBjLRczGt5n5AYRY00dMY15ozJfdaquj1NDQaRqUmiQkxoHZcgSowhqSvQ73nJRvkAykmH-d4glFNskdzz6tAVXPLmtoZP8x4h6vKees2lid9YE5d01i61WBxWOOs"/>
</div>
<h1 className="font-headline font-black italic tracking-tighter uppercase text-2xl text-[#FF1A1A]">KINETIC_MONOLITH</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-neutral-400 hover:text-[#FF1A1A] cursor-pointer transition-colors" data-icon="notifications">notifications</span>
</div>
</header>
<main className="pt-24 pb-32 px-6 min-h-screen telemetry-grid">
{/*  Hero Section: Stats & Title  */}
<section className="mb-10">
<div className="flex items-baseline gap-2 mb-2">
<span className="text-[#FF1A1A] font-headline font-black italic text-5xl">14</span>
<span className="font-label font-bold text-[10px] tracking-[0.2em] text-zinc-500 uppercase">DIAS PARA O COMBATE</span>
</div>
<h2 className="font-headline font-black italic text-4xl leading-none uppercase tracking-tighter border-l-4 border-[#FF1A1A] pl-4">
                OBJETIVOS:<br/>PRÓXIMO EVENTO
            </h2>
</section>
{/*  Bento Grid: Priority Goals  */}
<div className="grid grid-cols-1 gap-4 mb-8">
{/*  Goal Item: High Priority  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-2 bg-[#FF1A1A] font-label font-black text-[10px] tracking-widest text-white uppercase">PRIORIDADE ALTA</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-4xl text-[#FF1A1A]" data-icon="shield" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield</span>
<div>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight mb-1">Defender Triângulo</h3>
<p className="text-zinc-500 text-xs leading-relaxed max-w-[200px]">Foco em postura e controle de braços durante a transição da guarda.</p>
</div>
</div>
<div className="mt-6 h-1 w-full bg-zinc-800/80">
<div className="h-full bg-[#FF1A1A] w-[65%]"></div>
</div>
<div className="flex justify-between mt-2 font-label font-bold text-[10px] text-neutral-500 uppercase tracking-widest">
<span>PROGRESSO</span>
<span>65%</span>
</div>
</div>
{/*  Goal Item: Medium Priority  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 group">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-2xl text-[#BDC2FF]" data-icon="fitness_center">fitness_center</span>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">Melhorar Postura</h3>
</div>
<span className="font-label font-bold text-[10px] tracking-widest text-[#BDC2FF] uppercase">MÉDIA</span>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-zinc-800/80 font-label text-[10px] font-bold uppercase text-zinc-500">ESTABILIDADE</span>
<span className="px-3 py-1 bg-zinc-800/80 font-label text-[10px] font-bold uppercase text-zinc-500">ISOMETRIA</span>
</div>
</div>
{/*  Goal Item: Low Priority  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex justify-between items-center">
<div className="flex items-center gap-4">
<div className="w-2 h-10 bg-zinc-800/80"></div>
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
<button className="kinetic-gradient text-white font-headline font-black italic py-5 text-lg uppercase tracking-widest shadow-[0_10px_30px_rgba(255,26,26,0.3)] active:scale-95 duration-100 flex items-center justify-center gap-3">
<span className="material-symbols-outlined" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span>
                INICIAR TREINO FOCADO
            </button>
<button className="bg-transparent border border-zinc-800 text-zinc-100 font-label font-bold py-4 text-xs uppercase tracking-widest hover:bg-zinc-800/80 transition-colors">
                ADICIONAR NOVA META
            </button>
</div>
{/*  Performance Metric  */}
<div className="mt-12 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-l border-zinc-800/80">
<div className="flex justify-between items-end">
<div>
<h4 className="font-label font-black text-[10px] text-[#343D96] tracking-[0.3em] uppercase mb-4">MÉTRICA DE CONSISTÊNCIA</h4>
<div className="flex gap-1 h-12 items-end">
<div className="w-2 bg-zinc-800/80 h-[20%]"></div>
<div className="w-2 bg-[#FF1A1A] h-[45%]"></div>
<div className="w-2 bg-zinc-800/80 h-[30%]"></div>
<div className="w-2 bg-[#FF1A1A] h-[70%]"></div>
<div className="w-2 bg-[#FF1A1A] h-[85%]"></div>
<div className="w-2 bg-[#FF1A1A] h-[60%]"></div>
<div className="w-2 bg-zinc-900 h-[95%]"></div>
</div>
</div>
<div className="text-right">
<span className="block font-headline font-black italic text-4xl text-zinc-100">92%</span>
<span className="block font-label font-bold text-[8px] text-neutral-500 tracking-widest uppercase">READY STATE</span>
</div>
</div>
</div>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 bg-[#353534]/80 dark:bg-neutral-900/80 backdrop-blur-xl flex justify-around items-stretch z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#FF1A1A] to-[#C00100] h-full px-4 group active:brightness-125 duration-75" href="#">
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


