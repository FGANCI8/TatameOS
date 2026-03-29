import React from 'react';

export default function PrXimoPassoRecomendado() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-neutral-950 fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 overflow-hidden bg-surface-container-highest">
<img alt="Athlete Profile" className="w-full h-full object-cover" data-alt="Intense close-up portrait of a professional Jiu-Jitsu athlete with focused expression in a dark moody gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxiC_QqULtGZxl4Vl6rLX0HehYq9p8k_9tf5V4xqXgF3P_EExGbrlltDtmf_7UlRjUr05IneZubUmuPNvdHnUb5OpNX5fIVCQu-rJ6HajOa7hYAcMpKz1ovr9nnBDPbb48m-PYi5puKHE2knVAZ8wZJ4K_fNEF3aD4aaHTa01PEGPHSMgi87ncwu9NgH87o8cHm6JVi76amK3qHDUZMG1rTsyiv8QJbq_-R5CEVG6DSzgejvhac9CQWFd7gfNNWV0oTALdbbJfWOUU"/>
</div>
<h1 className="text-[#E70000] dark:text-red-600 font-['Lexend'] font-black italic tracking-tighter uppercase text-2xl tracking-widest">KINETIC_MONOLITH</h1>
</div>
<button className="hover:bg-neutral-800 transition-colors p-2 active:scale-95 duration-100">
<span className="material-symbols-outlined text-[#E70000] text-2xl">notifications</span>
</button>
</header>
<main className="flex-grow pt-24 pb-20 px-6 max-w-md mx-auto w-full">
{/*  Welcome Header  */}
<section className="mb-8">
<p className="font-label text-[10px] tracking-[0.3em] text-tertiary-fixed-dim uppercase mb-1">RECOMENDAÇÃO DO SENSEI IA</p>
<h2 className="font-headline text-4xl font-black italic uppercase leading-none text-on-surface">DOMINE O <br/><span className="text-primary-container">TATAME</span></h2>
</section>
{/*  Impact Central Card  */}
<section className="relative bg-surface-container-low monolith-shadow overflow-hidden mb-8 border-l-4 border-primary-container">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<div className="p-6 relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="w-2 h-2 bg-primary-container animate-pulse"></span>
<span className="font-label text-xs font-bold tracking-widest uppercase text-primary-container">ANÁLISE DE PERFORMANCE ATIVA</span>
</div>
<h3 className="font-headline text-2xl font-extrabold italic uppercase text-on-surface mb-4">Seu foco hoje: <br/>Revisão de Defesa de Queda</h3>
<div className="bg-surface-container-highest p-4 mb-6">
<p className="font-body text-sm text-tertiary-fixed-dim leading-relaxed">
                        Detectamos uma vulnerabilidade de <span className="text-on-surface font-bold">18% no equilíbrio lateral</span> durante seus últimos 3 sparrings. Focar em técnicas de Sprawl e Underhook aumentará sua retenção em pé.
                    </p>
</div>
<button className="w-full kinetic-gradient py-4 flex items-center justify-center gap-3 active:brightness-125 transition-all">
<span className="font-label font-black italic tracking-widest uppercase text-on-primary-container">INICIAR TREINO</span>
<span className="material-symbols-outlined text-on-primary-container">bolt</span>
</button>
</div>
{/*  Performance Streak Component  */}
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full kinetic-gradient w-3/4 shadow-[0_0_15px_rgba(231,0,0,0.5)]"></div>
</div>
</section>
{/*  Secondary Options  */}
<section className="space-y-4">
<h4 className="font-label text-[10px] tracking-[0.2em] text-tertiary-fixed-dim uppercase">ALTERNATIVAS SUGERIDAS</h4>
<div className="grid grid-cols-1 gap-3">
{/*  Option 1  */}
<button className="group flex items-center justify-between bg-surface-container p-5 hover:bg-surface-container-high transition-colors text-left border-l-2 border-transparent hover:border-secondary">
<div className="flex items-center gap-4">
<div className="bg-surface-container-highest p-3">
<span className="material-symbols-outlined text-secondary">fitness_center</span>
</div>
<div>
<p className="font-headline text-sm font-bold uppercase tracking-tight text-on-surface">Treino de Condicionamento</p>
<p className="font-body text-[10px] text-tertiary-fixed-dim uppercase tracking-wider">Foco: Explosão e Gás</p>
</div>
</div>
<span className="material-symbols-outlined text-tertiary-fixed-dim group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
{/*  Option 2  */}
<button className="group flex items-center justify-between bg-surface-container p-5 hover:bg-surface-container-high transition-colors text-left border-l-2 border-transparent hover:border-secondary">
<div className="flex items-center gap-4">
<div className="bg-surface-container-highest p-3">
<span className="material-symbols-outlined text-secondary">self_improvement</span>
</div>
<div>
<p className="font-headline text-sm font-bold uppercase tracking-tight text-on-surface">Meditação Pré-Treino</p>
<p className="font-body text-[10px] text-tertiary-fixed-dim uppercase tracking-wider">Foco: Clareza Mental</p>
</div>
</div>
<span className="material-symbols-outlined text-tertiary-fixed-dim group-hover:translate-x-1 transition-transform">chevron_right</span>
</button>
</div>
</section>
{/*  Visual Anchor: Recent Stat Bento  */}
<section className="mt-8 grid grid-cols-2 gap-3">
<div className="bg-surface-container-lowest p-4 flex flex-col justify-between aspect-square border-t-2 border-on-secondary-fixed-variant">
<span className="font-label text-[9px] tracking-widest text-tertiary-fixed-dim uppercase">TEMPO DE TATAME</span>
<div className="mt-auto">
<p className="font-headline text-4xl font-black italic text-on-surface">12h</p>
<p className="font-label text-[10px] text-secondary uppercase font-bold">ESTA SEMANA</p>
</div>
</div>
<div className="bg-surface-container-lowest p-4 flex flex-col justify-between aspect-square border-t-2 border-primary-container">
<span className="font-label text-[9px] tracking-widest text-tertiary-fixed-dim uppercase">INTENSIDADE MÉDIA</span>
<div className="mt-auto">
<p className="font-headline text-4xl font-black italic text-on-surface">88%</p>
<p className="font-label text-[10px] text-primary-container uppercase font-bold">PEAK FLOW</p>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch bg-[#353534]/80 dark:bg-neutral-900/80 backdrop-blur-xl z-50">
{/*  TRAINING (Active)  */}
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full px-4 grow active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined mb-1" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 grow hover:text-white transition-all active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined mb-1">military_tech</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">COMPETE</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 grow hover:text-white transition-all active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined mb-1">insights</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">STATS</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 grow hover:text-white transition-all active:brightness-125 duration-75" href="#">
<span className="material-symbols-outlined mb-1">person</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">PROFILE</span>
</a>
</nav>

    </>
  );
}
