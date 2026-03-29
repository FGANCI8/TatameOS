import React from 'react';

export default function PlanoSemanal() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-neutral-950 flex justify-between items-center w-full px-6 py-4 sticky top-0 z-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="Athlete Profile" className="w-full h-full object-cover" data-alt="Intense close-up of a professional Jiu-Jitsu athlete with a focused expression in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpv1_Ip99x_pLEuSiBNkxUfbOvUF1ltLhn1pc6Fr7NFU1hTIc2Zw9pxDio1dSPcmNoBNbWF-RsP8eEBTj-rTIXta9I6BoO65HdsI_4NxFpyufCTyyyn6ghKK3Rm8-DBprSVP_lhzdSzfHvayh2ZzD6hr6SWf9woSgy8YF5Mty9-K2CwqX0O62PF0hrOtBmHaYL5kmIiWcXTpZ84WQwRuO6mKllbz1ev0F2lunn9AeiG_NFZsqaYmMQDXi4ihIBTSLlxggIsTFNSiUb"/>
</div>
<h1 className="font-['Lexend'] font-black italic tracking-tighter uppercase text-2xl text-[#E70000] tracking-widest">KINETIC_MONOLITH</h1>
</div>
<button className="text-[#E70000] hover:bg-neutral-800 transition-colors p-2 active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="px-4 pt-6 space-y-8">
{/*  Weekly Cycle Header  */}
<section className="space-y-2">
<p className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] text-secondary-fixed-dim uppercase">STATUS: PRÉ-PRÓXIMO CICLO</p>
<h2 className="font-['Lexend'] font-black text-4xl italic uppercase leading-none tracking-tighter">WEEKLY_STRATEGY</h2>
<div className="w-24 h-1.5 bg-primary-container"></div>
</section>
{/*  Horizontal Calendar  */}
<section className="overflow-x-auto no-scrollbar flex gap-3 pb-2">
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-high flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold text-tertiary-fixed-dim">SEG</span>
<span className="text-xl font-black font-headline italic">12</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-primary-container flex flex-col items-center justify-center border-b-4 border-on-primary-container">
<span className="text-[10px] font-bold text-on-primary-container opacity-80">TER</span>
<span className="text-xl font-black font-headline italic text-on-primary-container">13</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-high flex flex-col items-center justify-center">
<span className="text-[10px] font-bold text-tertiary-fixed-dim">QUA</span>
<span className="text-xl font-black font-headline italic">14</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-high flex flex-col items-center justify-center">
<span className="text-[10px] font-bold text-tertiary-fixed-dim">QUI</span>
<span className="text-xl font-black font-headline italic">15</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-high flex flex-col items-center justify-center">
<span className="text-[10px] font-bold text-tertiary-fixed-dim">SEX</span>
<span className="text-xl font-black font-headline italic">16</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-surface-container-high flex flex-col items-center justify-center opacity-40">
<span className="text-[10px] font-bold text-tertiary-fixed-dim">SAB</span>
<span className="text-xl font-black font-headline italic">17</span>
</div>
</section>
{/*  Main Training Card (Today)  */}
<section className="bg-surface-container-low border-l-8 border-primary-container p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" data-icon="fitness_center">fitness_center</span>
</div>
<div className="relative z-10 space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-['Lexend'] font-extrabold text-2xl italic uppercase tracking-tight">PASSAGEM DE GUARDA</h3>
<p className="text-secondary-fixed-dim font-bold text-xs mt-1">FOCO TÉCNICO: PRESSÃO E CONEXÃO</p>
</div>
<div className="bg-surface-container-highest px-3 py-1">
<span className="text-[10px] font-black italic text-primary-container tracking-widest uppercase">LIVE NOW</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<p className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">HORÁRIO</p>
<p className="font-headline font-black text-xl italic">19:30 - 21:00</p>
</div>
<div className="space-y-1">
<p className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">INTENSIDADE</p>
<div className="flex gap-1 items-center">
<div className="h-2 w-6 bg-primary-container"></div>
<div className="h-2 w-6 bg-primary-container"></div>
<div className="h-2 w-6 bg-primary-container"></div>
<div className="h-2 w-6 bg-surface-container-highest"></div>
<span className="text-xs font-black italic ml-1">HIGH</span>
</div>
</div>
</div>
{/*  Performance Streak Integration  */}
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
<span>PRONTIDÃO PARA O CICLO</span>
<span>85%</span>
</div>
<div className="w-full h-3 bg-surface-container-highest">
<div className="h-full w-[85%] bg-gradient-to-r from-secondary-container to-secondary-fixed-dim"></div>
</div>
</div>
</div>
</section>
{/*  Recommended Techniques (Shortcuts)  */}
<section className="space-y-4">
<h4 className="font-['Lexend'] font-black text-lg italic uppercase tracking-tighter flex items-center gap-2">
<span className="w-2 h-6 bg-primary-container"></span>
                TÉCNICAS_RECOMENDADAS
            </h4>
<div className="space-y-3">
{/*  Video Card 1  */}
<div className="bg-surface-container-high group flex items-center hover:bg-surface-bright transition-all cursor-pointer">
<div className="w-24 h-24 bg-surface-container-highest flex-shrink-0 overflow-hidden relative">
<img alt="Technique Preview" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Action shot of a Jiu-Jitsu guard pass technique with dynamic motion blur in a high-contrast gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVSn164cuRk0QNW--yioDiLwIPnuJ-MTSU9RQMlo9plWWsy6QPkDg5JlPwkWqvkIQ5lCc1pDRwL09BZ-TTq9OU0SMwiMYS8hHSgiuVrlIgESN9cAMpIx9Z8aqslbUcasaZlDISQuBuyZiAYB3IChooa6EX2Lu0M3r1Nv-Oo03hoXRcDfzYY8Wg8ckRAmXy0mrUHZPKZVSjbNEgygg7dGUg07JU9dr6q0miFjwEsjtK5LcrLoK_iBRUDoP1orjE75x3t7ZiXSWsIstz"/>
<div className="absolute inset-0 bg-primary-container/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-on-primary-container" data-icon="play_arrow">play_arrow</span>
</div>
</div>
<div className="p-4 flex-grow">
<p className="text-[10px] font-bold text-secondary-fixed-dim uppercase tracking-widest mb-1">DRILL #04</p>
<h5 className="font-headline font-bold text-sm italic uppercase leading-tight">PASSAGEM TOREADA (EXPLOSIVA)</h5>
<div className="flex items-center gap-2 mt-2">
<span className="material-symbols-outlined text-xs text-tertiary-fixed-dim" data-icon="schedule">schedule</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase">08:45 MIN</span>
</div>
</div>
</div>
{/*  Video Card 2  */}
<div className="bg-surface-container-high group flex items-center hover:bg-surface-bright transition-all cursor-pointer">
<div className="w-24 h-24 bg-surface-container-highest flex-shrink-0 overflow-hidden relative">
<img alt="Technique Preview" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Overhead view of two grapplers in a intense ground position, dramatic lighting highlighting muscular detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwGRl49eN5lBBk_sSFZ6w38fOUFV1wXMhlhEOZVtM7H4iVpH1n2fHbAb4xCcg3kjx5qCwOu6pOggVRfQDUIHTcBQHn2VNNGV9KKJwmCtEyiFKZFCw68Wxq5eZWpAscQ6HXCA4qO6WYCd70PhYwRiAK9G4Rgw9p03SFfsq4kz3ynJJWHGOSyK72Zbnnygjr5a4h8hAhienNYcNER2nYhHx2fscmSjd6WWwrfmkVSbIGztq9vo5RglZPB_fuqzOPrbkXqCLNqUyNSDaQ"/>
<div className="absolute inset-0 bg-primary-container/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-on-primary-container" data-icon="play_arrow">play_arrow</span>
</div>
</div>
<div className="p-4 flex-grow">
<p className="text-[10px] font-bold text-secondary-fixed-dim uppercase tracking-widest mb-1">CONCEITO #12</p>
<h5 className="font-headline font-bold text-sm italic uppercase leading-tight">DISTRIBUIÇÃO DE PESO NO NEWAZA</h5>
<div className="flex items-center gap-2 mt-2">
<span className="material-symbols-outlined text-xs text-tertiary-fixed-dim" data-icon="schedule">schedule</span>
<span className="text-[10px] font-bold text-tertiary-fixed-dim uppercase">12:20 MIN</span>
</div>
</div>
</div>
</div>
</section>
{/*  Goals & Stats Quick View  */}
<section className="grid grid-cols-2 gap-3">
<div className="bg-surface-container-lowest p-4 border-b-2 border-secondary-fixed-dim">
<p className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-2">RESTANTES P/ CICLO</p>
<p className="font-headline font-black text-3xl italic tracking-tighter">04 <span className="text-sm font-bold uppercase not-italic">DIAS</span></p>
</div>
<div className="bg-surface-container-lowest p-4 border-b-2 border-primary-container">
<p className="text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest mb-2">CARGA TOTAL</p>
<p className="font-headline font-black text-3xl italic tracking-tighter">18 <span className="text-sm font-bold uppercase not-italic">HRS</span></p>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch bg-[#353534]/80 dark:bg-neutral-900/80 backdrop-blur-xl z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full px-4 active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined" data-icon="military_tech">military_tech</span>
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
