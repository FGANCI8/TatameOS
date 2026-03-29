import React from 'react';

export default function ResumoDoAtleta() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-neutral-950 fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img alt="Athlete Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" data-alt="Close up portrait of a focused Brazilian Jiu-Jitsu athlete with a black belt, intense gaze, dramatic low key lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDujVlp7MYmEj0XdmQXkLp_2T4RPgVTGq1RJ3m4DwSjfVDmMXkp5YjNjsQ7ZcOpKJOathhUsrELOjltsffi6t4HU5_FaE8cju_K6bROGpA6QBHUar0auCNite_6imUyBnpkhXoRVIuWrK5Mwkhk4KXIsFqMSbnMVHTvSUrq9jFPXsFkhdRopVIPMH4Wqe63ToKvd_HG52Dj_iSJNrrpVOWz25ShPbkvw4pbVomotrSRq5WD2iKVbeQEc2wR6DE1JIUbjt2fA6R6kmOy"/>
</div>
<h1 className="text-2xl font-black italic text-[#E70000] tracking-widest font-headline uppercase">KINETIC_MONOLITH</h1>
</div>
<button className="text-neutral-400 hover:bg-neutral-800 transition-colors p-2 active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-20 pb-24 px-4 max-w-md mx-auto space-y-8">
{/*  Player Card Section (Asymmetric Bento)  */}
<section className="relative">
<div className="bg-player-card kinetic-border border-l-4 border-primary-container p-1 shadow-2xl">
<div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-container-lowest">
<img alt="Athlete Combat Pose" className="w-full h-full object-cover grayscale contrast-125 brightness-75" data-alt="Jiu-Jitsu athlete in a dynamic grappling position, wearing a premium black gi, sweat glistening under harsh gym spotlights, moody atmosphere" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiGv3bRWBERpOEi5lg-NwguQ1CFwi5e-azs1kdf9sfoOzETrDho9IrAVvDKbL1CCqlBlTP1zj4Hbi0MyII0bD9ozs0Ez-wyBa3brytMOilI2LTeaMC5Iv-CNyxtqcn4u1xMFMti7bRo-JtTXUfNT0Ppl3lFQI5zqRDIU5lkxOWxngoHod_HdeuI2GysOh0YJoRe_M1Vn7YBoIBKCjGknnQQpZbAV7A3PoMUmNjm9CDiSD0sCSeyu1e0Q-lNQxwMI7P65EqJhn9REaE"/>
{/*  Overlay Info  */}
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex flex-col gap-0">
<span className="text-[10px] font-black italic tracking-[0.2em] text-primary-container uppercase">ELITE COMPETITOR</span>
<h2 className="text-5xl font-black italic uppercase font-headline tracking-tighter leading-none mb-2">GABRIEL<br/>SANTOS</h2>
</div>
<div className="flex items-center gap-4 mt-2">
<div className="flex flex-col">
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">RANKING</span>
<span className="text-xl font-bold font-headline">#14 GLOBAL</span>
</div>
<div className="h-8 w-px bg-outline-variant/30"></div>
<div className="flex flex-col">
<span className="text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">PESO</span>
<span className="text-xl font-bold font-headline">LEVE</span>
</div>
</div>
</div>
{/*  Maturity Indicator Floating  */}
<div className="absolute top-4 right-4 bg-primary-container/90 px-3 py-1 flex items-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="bolt" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span>
<span className="text-[10px] font-black tracking-tighter uppercase">MATURIDADE: PRO</span>
</div>
</div>
</div>
</section>
{/*  Fighting Style & Archetype  */}
<section className="grid grid-cols-2 gap-3">
<div className="bg-surface-container-low p-4 space-y-1 border-b-2 border-secondary-container">
<span className="text-[10px] font-bold text-secondary-fixed-dim uppercase tracking-widest">ESTILO DE LUTA</span>
<p className="text-xl font-black font-headline uppercase italic">PASSADOR</p>
<div className="flex gap-1 mt-2">
<div className="h-1 flex-1 bg-secondary"></div>
<div className="h-1 flex-1 bg-secondary"></div>
<div className="h-1 flex-1 bg-secondary"></div>
<div className="h-1 flex-1 bg-secondary/20"></div>
</div>
</div>
<div className="bg-surface-container-low p-4 space-y-1 border-b-2 border-primary-container">
<span className="text-[10px] font-bold text-primary uppercase tracking-widest">ARQUÉTIPO</span>
<p className="text-xl font-black font-headline uppercase italic">PRESSÃO</p>
<div className="flex gap-1 mt-2">
<div className="h-1 flex-1 bg-primary-container"></div>
<div className="h-1 flex-1 bg-primary-container"></div>
<div className="h-1 flex-1 bg-primary-container"></div>
<div className="h-1 flex-1 bg-primary-container"></div>
</div>
</div>
</section>
{/*  Performance Telemetry (Bento Grid)  */}
<section className="space-y-4">
<h3 className="text-xs font-black uppercase tracking-[0.3em] text-tertiary-fixed-dim border-l-2 border-primary-container pl-3">TELEMETRIA DE COMBATE</h3>
<div className="grid grid-cols-6 gap-3">
{/*  Pontos Fortes  */}
<div className="col-span-4 bg-surface-container-high p-5 relative overflow-hidden">
<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-7xl text-on-surface-variant/5 rotate-12" data-icon="fitness_center">fitness_center</span>
<h4 className="text-[10px] font-bold text-secondary-fixed-dim uppercase mb-4 tracking-widest">PONTOS FORTES</h4>
<ul className="space-y-3 relative z-10">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-secondary rotate-45"></span>
<span className="text-sm font-bold uppercase tracking-tight">AGILIDADE EXPLOSIVA</span>
</li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-secondary rotate-45"></span>
<span className="text-sm font-bold uppercase tracking-tight">PRESSÃO DE MEIA-GUARDA</span>
</li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-secondary rotate-45"></span>
<span className="text-sm font-bold uppercase tracking-tight">RESISTÊNCIA LÁCTICA</span>
</li>
</ul>
</div>
{/*  Win Rate  */}
<div className="col-span-2 bg-secondary-container flex flex-col justify-center items-center p-4">
<span className="text-[10px] font-black text-on-secondary-container uppercase mb-1">WIN RATE</span>
<span className="text-3xl font-black font-headline italic">82%</span>
</div>
{/*  Pontos Frágeis  */}
<div className="col-span-3 bg-surface-container-lowest p-5 border border-outline-variant/10">
<h4 className="text-[10px] font-bold text-error uppercase mb-3 tracking-widest">DÉFICIT</h4>
<ul className="space-y-2">
<li className="text-[11px] font-bold uppercase text-on-surface/60">DEFESA DE PÉ</li>
<li className="text-[11px] font-bold uppercase text-on-surface/60">FINALIZAÇÃO VOLANTE</li>
</ul>
</div>
{/*  Career Streak  */}
<div className="col-span-3 bg-gradient-to-br from-surface-container-highest to-surface-container-low p-5 flex flex-col justify-between">
<h4 className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">STREAK</h4>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-black font-headline text-primary-container">07</span>
<span className="text-xs font-bold uppercase">VITÓRIAS</span>
</div>
</div>
</div>
</section>
{/*  Competitive Maturity Meter  */}
<section className="bg-surface-container-high p-6 space-y-4">
<div className="flex justify-between items-end">
<div>
<h4 className="text-[10px] font-bold text-primary-container uppercase tracking-widest">ESTADO MENTAL</h4>
<p className="text-xl font-black font-headline italic uppercase tracking-tighter">FLOW STATE READY</p>
</div>
<span className="text-3xl font-black text-outline-variant/30 uppercase italic font-headline">9.8</span>
</div>
{/*  Performance Streak Component  */}
<div className="h-2 bg-surface-container-highest relative">
<div className="absolute top-0 left-0 h-full w-[92%] bg-gradient-to-r from-secondary-fixed-dim to-on-secondary-container shadow-[0_0_15px_rgba(189,194,255,0.3)]"></div>
</div>
<p className="text-[10px] text-tertiary-fixed-dim leading-relaxed uppercase font-semibold">O atleta demonstra alta resiliência sob pressão competitiva extrema e rápida adaptação tática durante o combate.</p>
</section>
{/*  Action Button  */}
<button className="w-full bg-primary-container text-on-primary-container py-5 text-sm font-black uppercase tracking-[0.2em] shadow-xl active:scale-[0.98] transition-all hover:brightness-110">
            SOLICITAR ANÁLISE DE VÍDEO
        </button>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 bg-[#353534]/80 backdrop-blur-xl flex justify-around items-stretch z-50">
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full px-4 active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">COMPETE</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">STATS</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">PROFILE</span>
</a>
</nav>

    </>
  );
}
