import React from 'react';

export default function CausasDoErro() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-neutral-900/80 backdrop-blur-xl docked full-width top-0 z-50 flex justify-between items-center w-full px-6 py-4 sticky">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up portrait of a determined Brazilian Jiu-Jitsu athlete with short hair and intense gaze in a dark training environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdDu-0tGibrKFj_E-wiLHNKv3MI1NUlx73SVe1UVPZL4tVrX5hxWlueeKCEFKb5BB1faDnts_z0BPZ7E2OONN-V99RzxWvDJwRXY4fyEypg7dY6xg0OrnajOp9tPsLE0L-AzlrLezU-39NrZedOm6d9BpdwSoUkLVSDTbCvxlRY1AOsp97jSimM_cit6XdrMVvc1lVj9CUjZ1ocmesdmnMTh6peoCI6_1fqUdZ9bH3IOCgCHZEZ5gI6L3NVTRt47sRAUXLRABX-dq1"/>
</div>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-white tracking-widest">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-red-500 transition-colors active:scale-95 duration-100">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main className="max-w-4xl mx-auto px-6 py-12">
{/*  Hero Section / Title  */}
<div className="mb-12">
<span className="font-['Lexend'] font-bold text-red-600 uppercase tracking-[0.2em] text-xs">ANÁLISE DE COMBATE</span>
<h2 className="font-['Lexend'] font-black text-5xl md:text-7xl uppercase tracking-tighter mt-2 leading-none">POR QUE OCORREU?</h2>
<p className="text-tertiary-fixed-dim font-body mt-4 max-w-lg text-sm uppercase tracking-widest">Diagnóstico técnico de falha na tomada de decisão durante o sparring.</p>
</div>
{/*  Analysis Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Fator Psicológico  */}
<div className="bg-surface-container-low p-8 border-l-4 border-primary-container">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold text-primary-container text-2xl italic">85%</span>
</div>
<h3 className="font-['Lexend'] font-black text-2xl uppercase tracking-tight mb-2">Fator Psicológico</h3>
<p className="text-tertiary-fixed-dim text-xs uppercase tracking-widest mb-6">Ansiedade / Pressa</p>
<div className="space-y-4">
<div className="relative h-2 bg-surface-container-highest w-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-container to-inverse-primary w-[85%]"></div>
</div>
<p className="text-[10px] text-tertiary-fixed-dim leading-relaxed">Aceleração excessiva do ritmo cardíaco resultou em abandono da estratégia para tentativa de finalização precipitada.</p>
</div>
</div>
{/*  Leitura Ruim  */}
<div className="bg-surface-container-high p-8">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-secondary text-4xl" data-icon="visibility">visibility</span>
<span className="font-['Lexend'] font-bold text-secondary text-2xl italic">62%</span>
</div>
<h3 className="font-['Lexend'] font-black text-2xl uppercase tracking-tight mb-2">Leitura Ruim</h3>
<p className="text-tertiary-fixed-dim text-xs uppercase tracking-widest mb-6">Falta de antecipação</p>
<div className="space-y-4">
<div className="relative h-2 bg-surface-container-highest w-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary to-on-secondary-container w-[62%]"></div>
</div>
<p className="text-[10px] text-tertiary-fixed-dim leading-relaxed">Inabilidade de prever a transição para a meia-guarda. Atraso de 0.8s na reação defensiva básica.</p>
</div>
</div>
{/*  Físico  */}
<div className="bg-surface-container-high p-8">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-tertiary text-4xl" data-icon="bolt">bolt</span>
<span className="font-['Lexend'] font-bold text-tertiary text-2xl italic">44%</span>
</div>
<h3 className="font-['Lexend'] font-black text-2xl uppercase tracking-tight mb-2">Físico</h3>
<p className="text-tertiary-fixed-dim text-xs uppercase tracking-widest mb-6">Cansaço extremo</p>
<div className="space-y-4">
<div className="relative h-2 bg-surface-container-highest w-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-tertiary to-surface-bright w-[44%]"></div>
</div>
<p className="text-[10px] text-tertiary-fixed-dim leading-relaxed">Fadiga muscular nos flexores do antebraço comprometeu a manutenção da pegada de lapela aos 4 minutos.</p>
</div>
</div>
{/*  Técnico  */}
<div className="bg-surface-container-low p-8 border-r-4 border-secondary">
<div className="flex justify-between items-start mb-8">
<span className="material-symbols-outlined text-secondary text-4xl" data-icon="school">school</span>
<span className="font-['Lexend'] font-bold text-secondary text-2xl italic">31%</span>
</div>
<h3 className="font-['Lexend'] font-black text-2xl uppercase tracking-tight mb-2">Técnico</h3>
<p className="text-tertiary-fixed-dim text-xs uppercase tracking-widest mb-6">Repertório limitado</p>
<div className="space-y-4">
<div className="relative h-2 bg-surface-container-highest w-full overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-secondary-container to-secondary w-[31%]"></div>
</div>
<p className="text-[10px] text-tertiary-fixed-dim leading-relaxed">Déficit de conhecimento em escapes de cem quilos quando o oponente isola o braço esgrimado.</p>
</div>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="mt-12 bg-surface-container-lowest p-8 border border-outline-variant/20">
<h4 className="font-['Lexend'] font-bold text-xs uppercase tracking-[0.3em] mb-6 text-tertiary-fixed-dim">Consistência de Decisão (Últimos 10 Treinos)</h4>
<div className="flex gap-1 h-12 items-end">
<div className="flex-1 bg-primary-container h-[90%]"></div>
<div className="flex-1 bg-primary-container h-[85%]"></div>
<div className="flex-1 bg-surface-container-highest h-[40%]"></div>
<div className="flex-1 bg-primary-container h-[75%]"></div>
<div className="flex-1 bg-primary-container h-[80%]"></div>
<div className="flex-1 bg-secondary h-[95%]"></div>
<div className="flex-1 bg-secondary h-[100%]"></div>
<div className="flex-1 bg-primary-container h-[60%]"></div>
<div className="flex-1 bg-surface-container-highest h-[30%]"></div>
<div className="flex-1 bg-primary-container h-[85%]"></div>
</div>
<div className="flex justify-between mt-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Sessão 01</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-primary">Pico de Erro Hoje</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Sessão 10</span>
</div>
</div>
{/*  Action Section  */}
<div className="mt-12 flex flex-col md:flex-row gap-4">
<button className="flex-1 bg-gradient-to-br from-primary-container to-inverse-primary py-6 px-8 flex items-center justify-between group active:translate-y-1 duration-200">
<span className="font-['Lexend'] font-black text-xl uppercase italic">Corrigir com Sensei AI</span>
<span className="material-symbols-outlined text-3xl group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
<button className="flex-1 border border-outline-variant/30 py-6 px-8 flex items-center justify-center gap-4 hover:bg-surface-container-high transition-all">
<span className="material-symbols-outlined">history</span>
<span className="font-['Inter'] font-bold uppercase text-sm tracking-widest">Ver Histórico</span>
</button>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-neutral-900/90 backdrop-blur-lg border-t-0 z-50">
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">video_library</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">moving</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-white bg-red-600 p-2 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
