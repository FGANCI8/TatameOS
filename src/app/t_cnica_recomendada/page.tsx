import React from 'react';

export default function TCnicaRecomendada() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-50 border-b-0 bg-[#1C1B1B] flat no shadows flex justify-between items-center w-full px-6 py-4 fixed">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer">menu</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-widest text-2xl italic text-[#E70000]">Kinetic_BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu-Jitsu fighter with a focused expression and intense lighting on dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa13g6knyZvlRi68HPzeBZ8Y5jZsiWxF8ao3J7vF7WiYw-Yv3YOjS5V-OveYBxLla9EftHm2yxmV5Ag896EZI4Di1Ydc-Wu8njU1JM0J3iIMTG-c1-7blZVyG-94cdwf1fYu9EIspJlv0KqJh_N5LKSG2XYyUmpI_6YgnObfU4ulOCXu22pQBZ4pbkpFdQ4Wj2gVJNWgy1SNtdbgGXiP-kb8MAtxalrMCUu49Qn7_Uc8MSPnM3udkXzD3R9W6jmVQx9eMXGZZwPVCK"/>
</div>
</header>
<main className="flex-grow pt-24 pb-32 px-6 max-w-5xl mx-auto w-full">
{/*  Header Section: Failure Context  */}
<section className="mb-12">
<div className="flex items-center gap-2 mb-2">
<span className="text-primary-container font-headline font-black text-xs tracking-[0.2em] uppercase">Análise de Performance</span>
<div className="h-[1px] flex-grow bg-surface-container-highest"></div>
</div>
<h2 className="font-headline font-black text-5xl md:text-7xl leading-none uppercase tracking-tighter mb-4 italic">Defesa de Triângulo</h2>
<div className="bg-surface-container-low p-6 monolith-border">
<p className="text-tertiary-fixed-dim font-body text-sm leading-relaxed max-w-2xl">
                    Identificamos uma vulnerabilidade recorrente na sua postura durante a transição da guarda aberta. A falha na manutenção da <span className="text-on-surface font-bold italic">Linha de Ombro</span> está permitindo o fechamento do cadeado.
                </p>
</div>
</section>
{/*  Video & Main Action Grid  */}
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
{/*  Video Feature  */}
<div className="lg:col-span-2 relative aspect-video bg-surface-container-lowest group cursor-pointer overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Two BJJ athletes practicing a triangle choke defense on a dark blue mat with cinematic overhead lighting and deep shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgtdXv1u0JdjXtyLX_69QMEGukwTSsP_W2OLJaGNJyIUVyTkZmRcjvz-qLsTer3VNLvmCpaB74W3Axayc0hk40MCxoSOeoZVvSF8draT9KHXQ01Xi9adXOrIocXVrqGPuikmBKB257F89hOY8ZT503g1iBg7AoAtU5M0fCY_p02n481bpEPLp3vC4YH8G5p8PTpNEx050cssd4NfnXiH21In2Qgb_006J_aeeITWemDlwhZohWht23qWvlTlT5Y2dft9QPWqVfq2gS"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-primary-container flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="material-symbols-outlined text-on-primary-container text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-background to-transparent w-full">
<span className="font-headline font-black text-xl italic uppercase tracking-widest">Vídeo Recomendado: Postura e Pressão</span>
</div>
</div>
{/*  Reaction Steps  */}
<div className="bg-surface-container-high p-8 flex flex-col justify-between">
<div>
<h3 className="font-headline font-black text-2xl uppercase italic mb-6 border-b border-surface-container-highest pb-2">Reação Correta</h3>
<ul className="space-y-6">
<li className="flex gap-4">
<span className="font-headline font-black text-primary-container text-2xl">01</span>
<div>
<p className="font-bold text-on-surface uppercase text-xs tracking-wider">Postura Imediata</p>
<p className="text-tertiary text-sm">Tracione os ombros para trás e conecte o cotovelo ao quadril.</p>
</div>
</li>
<li className="flex gap-4">
<span className="font-headline font-black text-primary-container text-2xl">02</span>
<div>
<p className="font-bold text-on-surface uppercase text-xs tracking-wider">Enquadramento</p>
<p className="text-tertiary text-sm">Use a mão livre para controlar o quadril do oponente.</p>
</div>
</li>
<li className="flex gap-4">
<span className="font-headline font-black text-primary-container text-2xl">03</span>
<div>
<p className="font-bold text-on-surface uppercase text-xs tracking-wider">Pressão de Peso</p>
<p className="text-tertiary text-sm">Projete seu peso sobre a perna do pescoço para abrir o cadeado.</p>
</div>
</li>
</ul>
</div>
<button className="mt-8 bg-primary-container text-on-primary-container py-4 font-headline font-black uppercase tracking-widest text-sm hover:brightness-110 transition-all active:scale-95">
                    Marcar como Estudado
                </button>
</div>
</div>
{/*  Related Techniques Bento Grid  */}
<section className="mb-12">
<h3 className="font-headline font-black text-3xl uppercase italic mb-8">Técnicas Relacionadas</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
{/*  Card 1  */}
<div className="lg:col-span-2 bg-surface-container p-6 flex flex-col justify-between h-64 group cursor-pointer hover:bg-surface-container-high transition-colors">
<div>
<span className="material-symbols-outlined text-primary-container mb-4">shield</span>
<h4 className="font-headline font-black text-2xl uppercase leading-none mb-2">Postura<br/>Preventiva</h4>
<p className="text-tertiary text-xs uppercase tracking-widest">Nível: Intermediário</p>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-tertiary-fixed-dim max-w-[150px]">Evite a entrada antes que o cadeado se feche.</p>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-low p-6 flex flex-col justify-between h-64 group cursor-pointer hover:bg-surface-container-high transition-colors border-t-4 border-secondary">
<div>
<span className="material-symbols-outlined text-secondary mb-4">directions_run</span>
<h4 className="font-headline font-black text-xl uppercase leading-tight mb-2">Saída de<br/>Quadril</h4>
</div>
<div className="flex justify-between items-end">
<p className="text-xs text-tertiary-fixed-dim">Mecânica essencial para defesa.</p>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</div>
</div>
{/*  Card 3: Complementary Training  */}
<div className="bg-primary-container p-6 flex flex-col justify-between h-64 cursor-pointer hover:brightness-110 transition-all">
<div className="text-on-primary-container">
<span className="material-symbols-outlined mb-4" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<h4 className="font-headline font-black text-xl uppercase leading-tight mb-1">Treino Comp.</h4>
<p className="font-bold text-xs opacity-80">Reforço Lombar</p>
</div>
<div className="bg-on-primary-container/20 p-3">
<p className="text-[10px] text-on-primary-container font-black uppercase tracking-tighter">Próxima Sessão: Hoje 18:00</p>
</div>
</div>
</div>
</section>
{/*  Performance Streak / Progress  */}
<section className="bg-surface-container-highest p-8 mb-12">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex-grow">
<h4 className="font-headline font-black text-xl uppercase italic mb-2">Progresso da Correção</h4>
<div className="w-full h-4 bg-surface-container-low overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container transition-all" style={{ /* width: 65%; */ }}></div>
</div>
<div className="flex justify-between mt-2">
<span className="text-[10px] font-black text-secondary uppercase tracking-widest">65% Dominado</span>
<span className="text-[10px] font-black text-tertiary uppercase tracking-widest">Meta: Faixa Roxa</span>
</div>
</div>
<div className="flex gap-4">
<div className="text-center bg-surface-container-low px-6 py-4">
<p className="text-2xl font-headline font-black">12</p>
<p className="text-[8px] font-black text-tertiary uppercase tracking-tighter">Reps Hoje</p>
</div>
<div className="text-center bg-surface-container-low px-6 py-4 border-l border-primary-container">
<p className="text-2xl font-headline font-black text-primary-container">03</p>
<p className="text-[8px] font-black text-tertiary uppercase tracking-tighter">Dias Streak</p>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="bg-[#1C1B1B]/80 backdrop-blur-xl fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 z-50 border-t-0">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">school</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
