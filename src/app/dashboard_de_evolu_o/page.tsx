import React from 'react';

export default function DashboardDeEvoluO() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-neutral-950 flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high overflow-hidden">
<img alt="Athlete Profile" className="w-full h-full object-cover" data-alt="Intense close-up of a Brazilian Jiu-Jitsu athlete with a focused expression, wearing a black gi, in a dark gym setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqssNIk2dHWVtW9gWqJ7Di830eW1zX1MgWnyI4HCYD94IEvmAuvKfh3pOXxLyiTBr1u-DO3Bspg1QlUgoAXOUSYDl5NE7hLAVSQJgpVJ40wJOMy_JAbPAULFr5emI5Ro3AN8O0mHnQGOB0bJwC2sSc4h8SjYNYQ4qdYYMfoUqykTKhlOd0GFNtj6AyV-6PrLqMAHtnv0zXLbsg2gjcs3t1O2zzbEgtQleTXP5cOhbYXv9v1UXQSDG0z05ONA1Pyga2Wv5P-ph2ypb4"/>
</div>
<span className="text-2xl font-black italic text-[#E70000] tracking-widest font-['Lexend'] uppercase">KINETIC_MONOLITH</span>
</div>
<button className="text-neutral-400 hover:bg-neutral-800 transition-colors p-2 active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
{/*  Main Canvas  */}
<main className="mt-20 px-6 space-y-8 animate-fade-in">
{/*  Page Title Hero  */}
<section className="mt-4">
<h1 className="font-['Lexend'] font-black italic text-5xl tracking-tighter uppercase leading-none text-on-surface">
                EVOLUÇÃO <br/> <span className="text-primary-container">COMPETITIVA</span>
</h1>
<p className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] uppercase text-tertiary-fixed-dim mt-2">
                SISTEMA DE TELEMETRIA DE PERFORMANCE ELITE
            </p>
</section>
{/*  Win/Loss Ratio Bento Grid  */}
<section className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-6 flex flex-col justify-between border-l-4 border-primary-container h-40">
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase text-tertiary-fixed-dim">VITÓRIAS</span>
<div className="flex items-baseline gap-2">
<span className="font-['Lexend'] font-black text-6xl text-on-surface">42</span>
<span className="text-primary-container font-black text-xl italic">W</span>
</div>
</div>
<div className="bg-surface-container-low p-6 flex flex-col justify-between border-l-4 border-on-secondary-container h-40">
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase text-tertiary-fixed-dim">DERROTAS</span>
<div className="flex items-baseline gap-2">
<span className="font-['Lexend'] font-black text-6xl text-on-surface">08</span>
<span className="text-on-secondary-container font-black text-xl italic">L</span>
</div>
</div>
</section>
{/*  Maturity Level  */}
<section className="bg-surface-container-high p-6 relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<div className="space-y-1">
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase text-tertiary-fixed-dim">MATURIDADE TÉCNICA</span>
<h2 className="font-['Lexend'] font-black italic text-3xl uppercase text-on-surface">FAIXA ROXA IV</h2>
</div>
<div className="bg-primary-container px-3 py-1 font-['Lexend'] font-black text-xs italic uppercase">ELITE TIER</div>
</div>
<div className="mt-6 w-full h-2 bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary-container to-secondary-fixed-dim w-[78%]"></div>
</div>
<div className="mt-2 flex justify-between items-center">
<span className="font-['Inter'] font-bold text-[10px] text-tertiary-fixed-dim uppercase tracking-widest">PROGRESSO PARA MARROM</span>
<span className="font-['Lexend'] font-black text-sm text-secondary-fixed-dim italic">78%</span>
</div>
{/*  Atmospheric background element  */}
<div className="absolute -right-10 -bottom-10 opacity-10">
<span className="material-symbols-outlined text-[160px]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
</section>
{/*  Techniques Mastery (Radial Mimic)  */}
<section className="space-y-4">
<h3 className="font-['Inter'] font-bold text-xs tracking-[0.2em] uppercase text-on-surface border-l-2 border-primary-container pl-3">TÉCNICAS DOMINADAS</h3>
<div className="grid grid-cols-1 gap-4">
<div className="bg-surface-container-low p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="lock_open">lock_open</span>
</div>
<div>
<div className="font-['Lexend'] font-black text-lg uppercase leading-tight italic">Guarda De La Riva</div>
<div className="font-['Inter'] font-bold text-[10px] text-tertiary-fixed-dim uppercase">92% EFICIÊNCIA</div>
</div>
</div>
<div className="w-16 h-1 bg-surface-container-highest">
<div className="h-full bg-primary-container w-[92%]"></div>
</div>
</div>
<div className="bg-surface-container-low p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="handshake">handshake</span>
</div>
<div>
<div className="font-['Lexend'] font-black text-lg uppercase leading-tight italic">Triângulo de Mão</div>
<div className="font-['Inter'] font-bold text-[10px] text-tertiary-fixed-dim uppercase">85% EFICIÊNCIA</div>
</div>
</div>
<div className="w-16 h-1 bg-surface-container-highest">
<div className="h-full bg-primary-container w-[85%]"></div>
</div>
</div>
<div className="bg-surface-container-low p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="swords">swords</span>
</div>
<div>
<div className="font-['Lexend'] font-black text-lg uppercase leading-tight italic">Passagem Toureando</div>
<div className="font-['Inter'] font-bold text-[10px] text-tertiary-fixed-dim uppercase">70% EFICIÊNCIA</div>
</div>
</div>
<div className="w-16 h-1 bg-surface-container-highest">
<div className="h-full bg-primary-container w-[70%]"></div>
</div>
</div>
</div>
</section>
{/*  Recurring Failures Section  */}
<section className="bg-surface-container-lowest p-6 border-2 border-outline-variant/20">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-error" data-icon="report">report</span>
<h3 className="font-['Lexend'] font-black italic text-xl uppercase text-error">FALHAS RECORRENTES</h3>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center p-3 bg-surface-container-low">
<span className="font-['Inter'] font-bold text-xs uppercase tracking-wider">Postura na Meia-Guarda</span>
<span className="font-['Lexend'] font-black text-error text-sm italic">CRÍTICO</span>
</div>
<div className="flex justify-between items-center p-3 bg-surface-container-low">
<span className="font-['Inter'] font-bold text-xs uppercase tracking-wider">Defesa de Berimbolo</span>
<span className="font-['Lexend'] font-black text-tertiary-fixed-dim text-sm italic">ATENÇÃO</span>
</div>
<div className="flex justify-between items-center p-3 bg-surface-container-low">
<span className="font-['Inter'] font-bold text-xs uppercase tracking-wider">Gestão de Gás (Round 3)</span>
<span className="font-['Lexend'] font-black text-tertiary-fixed-dim text-sm italic">ATENÇÃO</span>
</div>
</div>
<button className="w-full mt-6 bg-surface-container-highest py-4 font-['Lexend'] font-black text-xs uppercase tracking-[0.3em] text-on-surface hover:bg-neutral-800 transition-all active:scale-95">
                ANALISAR DETALHES TÉCNICOS
            </button>
</section>
{/*  CTA Performance Streak  */}
<section className="bg-gradient-to-br from-primary-container to-inverse-primary p-8 flex flex-col items-center justify-center text-center space-y-4">
<h4 className="font-['Lexend'] font-black italic text-4xl leading-none text-on-primary-container uppercase">PRONTO PARA<br/>COMBATE?</h4>
<p className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] text-on-primary-container/80 uppercase">INSREVA-SE NO PRÓXIMO OPEN</p>
<div className="w-full h-1 bg-white/20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-secondary-fixed-dim to-white opacity-40 animate-pulse"></div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch bg-[#353534]/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-[0_-4px_20px_rgba(52,61,150,0.06)] z-50">
<div className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">TRAINING</span>
</div>
<div className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full px-4 active:brightness-125 duration-75 cursor-pointer">
<span className="material-symbols-outlined" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">COMPETE</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="insights">insights</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">STATS</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 h-full px-4 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">PROFILE</span>
</div>
</nav>

    </>
  );
}
