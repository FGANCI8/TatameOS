import React from 'react';

export default function PlanoDeCorreOTCnica() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 z-50 w-full bg-[#131313] flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer">menu</span>
<h1 className="font-headline font-black uppercase tracking-widest text-2xl italic text-[#E70000]">Kinetic_BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="Professional athlete profile portrait with moody gym lighting and dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy65q9lnlBTGoNssnnXIfDRgv8PW2xIR1yt8W9Tvo8Upbg46dD7hBsHOAnPEDePCOf604VdHLhsQiIPKz-dkJuY8Uflz9wljP_hP7mtEOpXWxjNHvo13NOtJR3XeHckRHQY8EU1XfMVo3ykZQhVEAoNbgScilPSk77huPmGX9s0Mb9mGQxHB3Gx-lL9xPb6w2P3gRMdyucXgf6wekSd0pE5qhHf0iOpG11VaZIUdPM_WhbdUeK0H_RTNcH1RbKeihUAyLvOChJYAMH"/>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Metric Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label text-xs font-bold uppercase tracking-widest text-tertiary">Análise Pós-Campeonato</span>
<h2 className="font-headline text-5xl font-black uppercase leading-none mt-2 text-on-surface">Correção <br/><span className="text-primary-container">Técnica</span></h2>
</div>
<div className="bg-surface-container-low p-6 flex items-center gap-8">
<div className="text-center">
<p className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-tighter">Impacto Global</p>
<p className="font-headline text-4xl font-bold text-secondary">88%</p>
</div>
<div className="h-12 w-px bg-surface-container-highest"></div>
<div className="text-center">
<p className="font-label text-[10px] text-tertiary-fixed-dim uppercase tracking-tighter">Prioridade</p>
<p className="font-headline text-4xl font-bold text-primary-container">CRÍTICA</p>
</div>
</div>
</div>
</section>
{/*  Bento Grid Analysis  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  High Priority Card  */}
<div className="md:col-span-8 bg-surface-container-low border-l-8 border-primary-container p-8 flex flex-col justify-between group">
<div>
<div className="flex justify-between items-start mb-6">
<div className="px-3 py-1 bg-primary-container text-on-primary-container font-label text-[10px] font-black uppercase tracking-widest">Alta prioridade</div>
<span className="material-symbols-outlined text-primary-container text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
</div>
<h3 className="font-headline text-3xl font-bold mb-4 uppercase leading-tight">Postura na <br/>Meia-Guarda</h3>
<p className="text-tertiary text-sm leading-relaxed max-w-md">O esgrimamento tardio resultou em 3 passagens sofridas no último Open. Foco em manter o braço vivo e a cabeça fora da linha de pressão.</p>
</div>
<div className="mt-8">
<div className="flex justify-between items-end mb-2">
<span className="font-label text-[10px] uppercase font-bold text-tertiary">Urgência Competitiva</span>
<span className="font-headline text-lg font-bold text-primary-container">9.5/10</span>
</div>
<div className="h-2 w-full bg-surface-container-highest">
<div className="h-full bg-primary-container w-[95%]"></div>
</div>
</div>
</div>
{/*  Image Support Section  */}
<div className="md:col-span-4 bg-surface-container-highest relative min-h-[300px]">
<img alt="BJJ Training Action" className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity" data-alt="Intense close-up of two brazilian jiu-jitsu athletes grappling on black mats, dramatic lighting emphasizing muscle tension" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjAt9UO3Wk51J5m85t_jSlKwsCF48ZwL_p3tkgxVbV9UeY2GQxTEmUpWdoDZD7qEmI6iw0cir67wVNS0SzieZBE7ZwPMf9AfzlCwy5NR8iNrwys5-rQq1FJoAYcbj7GOyoq0YzEBE324Mfs5zXG42sKe_l92oUNSHExTo8sJuY-KHl9WplSBy02FG2bwlRLbUk1F0Y85V6GzCP6Cu9F8nYnYem2yoj7Mv2AsdqXDakBXlYKLRGcfdhfO2mzE62CtcLDg1mRENTvitM"/>
<div className="absolute inset-0 bg-gradient-to-t from-background to-transparent p-6 flex flex-col justify-end">
<span className="font-label text-[10px] text-secondary font-bold uppercase tracking-widest">Referência Sensei</span>
<p className="font-headline text-xl font-bold text-on-surface">Assista ao erro no round 4</p>
</div>
</div>
{/*  Medium Priority Card  */}
<div className="md:col-span-6 bg-surface-container-low p-8 border-l-8 border-secondary flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-6">
<div className="px-3 py-1 bg-secondary text-on-secondary-container font-label text-[10px] font-black uppercase tracking-widest">Média Prioridade</div>
<span className="material-symbols-outlined text-secondary text-4xl">shield</span>
</div>
<h3 className="font-headline text-2xl font-bold mb-4 uppercase">Defesa de <br/>Single Leg</h3>
<p className="text-tertiary text-sm leading-relaxed">Melhorar o sprawl e o enquadramento do quadril. Vulnerabilidade detectada em transições de wrestling.</p>
</div>
<div className="mt-8">
<div className="flex justify-between items-end mb-2">
<span className="font-label text-[10px] uppercase font-bold text-tertiary">Progresso da Correção</span>
<span className="font-headline text-lg font-bold text-secondary">60%</span>
</div>
<div className="h-2 w-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-secondary w-[60%]"></div>
</div>
</div>
</div>
{/*  Performance Streak / Small Data Card  */}
<div className="md:col-span-6 bg-surface-container-highest p-8">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 flex items-center justify-center bg-surface-container-low border border-outline-variant/20">
<span className="material-symbols-outlined text-on-surface">timeline</span>
</div>
<h4 className="font-headline text-xl font-bold uppercase italic">Streak de Correção</h4>
</div>
<div className="space-y-6">
<div className="flex flex-col gap-2">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
<span className="text-tertiary">Recuperação de Guarda</span>
<span className="text-on-surface">Consistente</span>
</div>
<div className="h-1 bg-surface-container-low">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-full"></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter">
<span className="text-tertiary">Finalização (Triângulo)</span>
<span className="text-on-surface">8/10 Tentativas</span>
</div>
<div className="h-1 bg-surface-container-low">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-[80%]"></div>
</div>
</div>
</div>
</div>
</div>
{/*  Call to Action  */}
<section className="mt-12 bg-primary-container p-1 px-1">
<button className="w-full bg-surface-container-lowest text-on-primary-container font-headline font-black py-6 uppercase tracking-widest text-xl hover:bg-primary-container hover:text-white transition-colors flex items-center justify-center gap-4">
                Agendar Treino Específico com Sensei
                <span className="material-symbols-outlined">arrow_forward</span>
</button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full bg-[#1C1B1B]/80 backdrop-blur-xl flex justify-around items-center pt-3 pb-6 px-4 z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1">library_books</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined mb-1" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1">school</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</a>
</nav>

    </>
  );
}
