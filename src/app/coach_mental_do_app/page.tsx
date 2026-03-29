import React from 'react';

export default function CoachMentalDoApp() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 border-b-0 bg-gradient-to-r from-[#131313] via-[#1C1B1B] to-[#131313]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a focused jiu-jitsu athlete with sweat on face in a dark moody gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxsq4hVr_V31qUjhlQ80B5CRFEhHMO9JnYrKaPeF7QwZ6i8BDKjriksQfwZhqqDcfJPqLUtQG5PAzNFpO4ZsgaNrO8owfvUJtNgnnGCEvOP9vgoy_PpUQ0gEWmiWnjt3Ant7Im_bcjJiVUhmtblUDdeLcbbRqeKBarsq7sxiML7MbRroUwmDN9zGR19B-bLJwrg8x7xQMSadujWxrlHsOsSs1oPvgpVgVyMzMqVl19FuJfVASVeVaeVQPF0REcXdv_djHYpzpCwXGA"/>
</div>
<span className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">KINETIC</span>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] hover:text-white transition-colors cursor-pointer Active: scale-95 duration-75">bolt</span>
</div>
</header>
<main className="flex-1 pt-20 pb-24 px-4 max-w-xl mx-auto w-full">
{/*  AI Sensei Status Header  */}
<section className="mb-8">
<div className="flex items-baseline gap-2 mb-1">
<h1 className="font-headline font-black text-4xl text-on-surface uppercase tracking-tight">SENSEI IA</h1>
<div className="h-2 w-2 bg-secondary animate-pulse"></div>
</div>
<p className="font-label text-[10px] tracking-widest text-tertiary-fixed-dim uppercase">Análise Mental em Tempo Real</p>
</section>
{/*  Bento Grid Insights  */}
<div className="grid grid-cols-2 gap-3 mb-8">
<div className="col-span-2 bg-surface-container-low p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-6xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<h3 className="font-headline font-bold text-lg text-primary mb-2">FOCO ATUAL</h3>
<p className="text-on-surface text-sm leading-relaxed mb-4">Seu histórico indica fadiga mental nos últimos 5 minutos de luta. Sugiro respiração diafragmática entre os rounds.</p>
<div className="h-1 w-full bg-surface-container-highest">
<div className="h-full bg-secondary w-[78%]"></div>
</div>
<div className="flex justify-between mt-2">
<span className="text-[10px] font-label font-bold text-tertiary">ESTABILIDADE MENTAL</span>
<span className="text-[10px] font-label font-bold text-secondary">78%</span>
</div>
</div>
<div className="bg-surface-container-high p-4 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary mb-2">shield</span>
<h4 className="font-label font-bold text-[10px] tracking-widest uppercase text-tertiary-fixed-dim">Confiança</h4>
</div>
<p className="font-headline font-black text-2xl text-on-surface">ALTA</p>
</div>
<div className="bg-surface-container-high p-4 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-primary-container mb-2">warning</span>
<h4 className="font-label font-bold text-[10px] tracking-widest uppercase text-tertiary-fixed-dim">Ansiedade</h4>
</div>
<p className="font-headline font-black text-2xl text-on-surface">MÉDIA</p>
</div>
</div>
{/*  Chat Flow  */}
<div className="space-y-6 mb-8">
{/*  Sensei Message  */}
<div className="flex gap-3">
<div className="w-10 h-10 bg-primary-container flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<div className="bg-surface-container-highest p-4 flex-1">
<p className="text-sm text-on-surface leading-relaxed">
                        Percebi que sua postura competitiva torna-se defensiva quando você sofre uma queda. No seu próximo treino, tente a transição <span className="text-secondary font-bold">X-Guard</span> imediatamente após o impacto. 
                        <br/><br/>
                        Como você se sente em relação a essa transição sob pressão?
                    </p>
</div>
</div>
{/*  User Response  */}
<div className="flex gap-3 justify-end">
<div className="bg-surface-container-low p-4 flex-1 text-right border-r-4 border-secondary">
<p className="text-sm text-on-surface">Sinto que perco o tempo do quadril quando estou ofegante.</p>
</div>
<div className="w-10 h-10 bg-surface-bright flex-shrink-0 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Professional athlete profile icon in a dark setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKoAZLtliAtSuRTK-j1tB060KAGjLw5yXY7xK7K7LMvgU-iOLPLjV4ZxenZBQ0ViWujLJZgdTmawqlpJuSJjw9gY3YkzJEXIksTjc04whVTX908YNTMzTCOKz3RmV-K8ZJz0p3jlio6fX8mtkaeisW6-apZGXu0SrcEeD6manQfHKtmW_gcrhvzvX2oVZ1In3jrPt9O55Lnl_Csj2kdTg-pnd5fLcDkR1TPD6WlAjzBjSzZTrc4-e9cseewChqRKCpdrW6UcitgUZS"/>
</div>
</div>
{/*  Sensei Message - Performance Streak Component  */}
<div className="flex gap-3">
<div className="w-10 h-10 bg-primary-container flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<div className="bg-surface-container-highest p-4 flex-1">
<p className="text-sm text-on-surface leading-relaxed mb-4">
                        Entendido. É um bloqueio técnico alimentado pelo cansaço. Vamos ajustar sua zona de conforto.
                    </p>
<div className="space-y-3">
<div className="bg-surface-container-low p-3">
<h5 className="text-[10px] font-label font-bold text-secondary uppercase mb-2">AJUSTE DE POSTURA</h5>
<div className="h-6 w-full bg-surface-container-highest relative overflow-hidden">
<div className="absolute inset-0 monolith-gradient opacity-40 w-[65%]"></div>
<div className="absolute inset-0 flex items-center px-2">
<span className="text-[9px] font-bold text-white uppercase italic">Consistência de Guarda</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Action Area  */}
<div className="space-y-4">
<div className="flex gap-2">
<button className="flex-1 bg-surface-container-high py-3 px-4 text-left group hover:bg-surface-bright transition-colors">
<span className="block text-[10px] font-label font-bold text-tertiary uppercase mb-1">Exercício Rápido</span>
<span className="block text-sm font-headline font-bold text-on-surface">CONTROLE DE PÂNICO</span>
</button>
<button className="flex-1 bg-surface-container-high py-3 px-4 text-left group hover:bg-surface-bright transition-colors">
<span className="block text-[10px] font-label font-bold text-tertiary uppercase mb-1">Visualização</span>
<span className="block text-sm font-headline font-bold text-on-surface">VITÓRIA POR PONTOS</span>
</button>
</div>
<div className="relative">
<input className="w-full recessed-input p-5 pr-14 text-sm text-on-surface placeholder:text-tertiary-fixed-dim/40 font-body" placeholder="Fale com seu Sensei..." type="text"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-container">
<span className="material-symbols-outlined text-3xl">arrow_right_alt</span>
</button>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-4 px-2 bg-[#353534]/80 backdrop-blur-xl shadow-[0_-4px_12px_rgba(52,61,150,0.06)]">
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity cursor-pointer Active: bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">HOME</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity cursor-pointer Active: bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">LIBRARY</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity cursor-pointer Active: bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">ads_click</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">PATH</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity cursor-pointer Active: bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">TRAINING</span>
</div>
<div className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform cursor-pointer Active: bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">SENSEI</span>
</div>
</nav>

    </>
  );
}
