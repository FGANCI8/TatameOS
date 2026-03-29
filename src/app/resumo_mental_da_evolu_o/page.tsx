import React from 'react';

export default function ResumoMentalDaEvoluO() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-gradient-to-r from-[#131313] via-[#1C1B1B] to-[#131313]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="athlete profile" className="w-full h-full object-cover" data-alt="Intense close-up portrait of a determined jiu-jitsu athlete with sweat on skin and a sharp, focused gaze" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjxe-amnDGW5HcmS6VpKY5F5J4DCaTaCnE2LLW9IE7lQu_9S8piFvhgE6UUROVEOPC_M69HSU9Afkf0VXJX1HO_sECMUakTAdjaT5t47IwYQYFTYl0EgBEaz9taVWYzrHNzlJ45RQYCiEgaXB2wVRxu_oLhb-WmcGkVdy3b4_bCiMrgUjQQB6QdiX7NaE8zOcSaHyH6NCE-FVrYFkCF4vnFEeDfx82tGrYCD6LoweesKRHCjSkgHZLvsO37QlR8d9PGiI8XFONzta2"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">KINETIC</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] text-2xl">bolt</span>
</div>
</header>
<main className="flex-grow pt-24 pb-32 px-6">
{/*  Hero Section: Mental Mastery  */}
<section className="mb-10">
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase text-tertiary">MINDSET COMPETITIVO</span>
<h2 className="font-['Lexend'] text-4xl font-black uppercase leading-none mt-2 mb-6">Resumo mental da evolução</h2>
<div className="bg-surface-container-low p-6 border-l-4 border-primary-container relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<div className="relative z-10">
<div className="text-5xl font-['Lexend'] font-black text-on-surface mb-1">88%</div>
<div className="text-xs font-bold uppercase tracking-widest text-primary-container">Estabilidade Emocional</div>
<p className="text-tertiary text-sm mt-4 leading-relaxed max-w-[80%]">Sua maturidade em situações de pressão aumentou 12% desde o último campeonato. O controle do pânico sob submissão está em níveis de elite.</p>
</div>
</div>
</section>
{/*  Bento Grid: Indicators  */}
<div className="grid grid-cols-2 gap-4 mb-10">
{/*  Confidence Metric  */}
<div className="bg-surface-container-high p-5 flex flex-col justify-between aspect-square">
<span className="material-symbols-outlined text-primary-container">shield_with_heart</span>
<div>
<div className="text-3xl font-['Lexend'] font-bold">ALTA</div>
<div className="text-[10px] font-bold uppercase tracking-tighter text-tertiary">Confiança Técnica</div>
</div>
</div>
{/*  Maturity Metric  */}
<div className="bg-surface-container-highest p-5 flex flex-col justify-between aspect-square">
<span className="material-symbols-outlined text-secondary">verified_user</span>
<div>
<div className="text-3xl font-['Lexend'] font-bold">NÍVEL 4</div>
<div className="text-[10px] font-bold uppercase tracking-tighter text-tertiary">Maturidade Tática</div>
</div>
</div>
{/*  Focus Meter (Wide)  */}
<div className="col-span-2 bg-surface-container-low p-6">
<div className="flex justify-between items-end mb-4">
<div className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Foco &amp; Presença</div>
<div className="text-xl font-['Lexend'] font-black text-on-surface">94/100</div>
</div>
{/*  Performance Streak Component  */}
<div className="h-3 bg-surface-container-highest w-full overflow-hidden">
<div className="h-full monolith-gradient w-[94%] relative">
<div className="absolute inset-0 bg-white/10 opacity-50"></div>
</div>
</div>
</div>
</div>
{/*  Badges Section  */}
<section className="mb-10">
<h3 className="font-['Lexend'] text-lg font-bold uppercase tracking-tight mb-4 flex items-center gap-2">
<span className="w-8 h-[2px] bg-primary-container"></span>
                Conquistas Mentais
            </h3>
<div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
<div className="flex-shrink-0 w-32 bg-surface-container-low p-4 text-center border border-outline-variant/15">
<div className="w-12 h-12 mx-auto mb-3 bg-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>workspace_premium</span>
</div>
<div className="text-[10px] font-bold uppercase leading-tight">Mente de Aço</div>
</div>
<div className="flex-shrink-0 w-32 bg-surface-container-low p-4 text-center border border-outline-variant/15">
<div className="w-12 h-12 mx-auto mb-3 bg-tertiary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary" style={{ /* font-variation-settings: 'FILL' 1; */ }}>self_improvement</span>
</div>
<div className="text-[10px] font-bold uppercase leading-tight">Zen Combatente</div>
</div>
<div className="flex-shrink-0 w-32 bg-surface-container-low p-4 text-center border border-outline-variant/15">
<div className="w-12 h-12 mx-auto mb-3 bg-primary-container/20 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>timer_10_alt_1</span>
</div>
<div className="text-[10px] font-bold uppercase leading-tight">Clutch Performer</div>
</div>
</div>
</section>
{/*  Dynamic Chart Placeholder  */}
<section className="mb-6">
<div className="bg-surface-container-lowest p-6 border border-outline-variant/15">
<div className="flex justify-between items-center mb-8">
<h3 className="text-xs font-bold uppercase tracking-widest">Evolução de Controle</h3>
<div className="flex gap-2">
<div className="w-2 h-2 bg-primary-container"></div>
<div className="w-2 h-2 bg-surface-container-highest"></div>
</div>
</div>
<div className="h-40 flex items-end justify-between gap-2">
<div className="w-full bg-surface-container-highest h-[40%]"></div>
<div className="w-full bg-surface-container-highest h-[65%]"></div>
<div className="w-full bg-surface-container-highest h-[55%]"></div>
<div className="w-full bg-primary-container h-[85%] relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-black text-primary-container">PEAK</div>
</div>
<div className="w-full bg-surface-container-highest h-[75%]"></div>
<div className="w-full bg-surface-container-highest h-[60%]"></div>
<div className="w-full bg-surface-container-highest h-[90%]"></div>
</div>
<div className="flex justify-between mt-4 text-[8px] font-bold text-tertiary uppercase tracking-tighter">
<span>Sem 01</span>
<span>Sem 02</span>
<span>Sem 03</span>
<span>Sem 04</span>
<span>Sem 05</span>
<span>Sem 06</span>
<span>Hoje</span>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-4 px-2 bg-[#353534]/80 backdrop-blur-xl shadow-[0_-4px_12px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity" href="#">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity" href="#">
<span className="material-symbols-outlined">ads_click</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">SENSEI</span>
</a>
</nav>

    </>
  );
}
