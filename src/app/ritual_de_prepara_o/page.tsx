import React from 'react';

export default function RitualDePreparaO() {
  return (
    <>
      
{/*  TopAppBar Shell  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-gradient-to-r from-[#131313] via-[#1C1B1B] to-[#131313]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-high border-2 border-primary-container overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a focused jiu-jitsu athlete with sweat on brow, intense gaze, in a dimly lit gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjgNyKfTAPomPuIsHObmJ_qKQyDLm8k4bE6s_IywzZcch68lDtVCJGliop_4H8U-_xBsdMT5bHwYVIAQ8nazo6w3BS_tEpnCgN5ne0S680bDTIVCAHj5V2OJtA6PAJXbwcfBErNWIsJBZRPfy0eppUTrTDKFVG5bh8seHJzUAe2TS-Syr0CvJHKI4cY-wkFDV55e4EJFt0knWW6TrfV61S7wxefrerxBbRjyIxuLsI1IfkFZGGMaSg7Qwzh4CEtV415LV6-Dv1Kpdh"/>
</div>
<span className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">KINETIC</span>
</div>
<button className="text-[#E70000] active:scale-95 duration-75 hover:text-white transition-colors">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span>
</button>
</header>
<main className="flex-1 mt-16 mb-24 p-6 overflow-y-auto">
{/*  Hero Section  */}
<section className="mb-12">
<h1 className="font-headline font-black text-5xl uppercase leading-none tracking-tighter mb-2">RITUAL DE<br/><span className="text-primary-container">PREPARAÇÃO</span></h1>
<div className="flex items-center gap-2">
<span className="h-[2px] w-12 bg-primary-container"></span>
<p className="font-label text-xs font-bold tracking-[0.2em] text-tertiary-fixed-dim">MODO COMPETIÇÃO ATIVO</p>
</div>
</section>
{/*  Focus Phrase Bento  */}
<div className="bg-surface-container-high p-8 mb-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl">format_quote</span>
</div>
<p className="font-label text-[10px] tracking-widest text-primary-container font-extrabold mb-4 uppercase">FRASE DE FOCO</p>
<h2 className="font-headline font-bold text-3xl italic leading-tight">"A DISCIPLINA É O MEU ESCUDO, A TÉCNICA É A MINHA ESPADA."</h2>
</div>
{/*  Progress Track  */}
<div className="mb-8">
<div className="flex justify-between items-end mb-2">
<span className="font-label text-[10px] font-black tracking-widest text-tertiary-fixed-dim">PROGRESSO DO RITUAL</span>
<span className="font-headline font-black text-2xl text-secondary">60%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full monolith-gradient w-[60%] shadow-[0_0_15px_rgba(231,0,0,0.4)]"></div>
</div>
</div>
{/*  Sequential Steps  */}
<div className="space-y-4">
{/*  Step 1: Completed  */}
<div className="bg-surface-container-lowest flex items-stretch border-l-4 border-secondary shadow-lg">
<div className="w-16 flex items-center justify-center bg-surface-container">
<span className="material-symbols-outlined text-secondary" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div className="p-6 flex-1">
<p className="font-label text-[10px] font-bold text-secondary mb-1 uppercase tracking-widest">CONCLUÍDO</p>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">ALONGAMENTO DINÂMICO</h3>
<p className="font-body text-sm text-tertiary-fixed-dim mt-2">Mobilidade de quadril e ativação escapular.</p>
</div>
</div>
{/*  Step 2: Active  */}
<div className="bg-surface-container-highest flex items-stretch border-l-4 border-primary-container relative">
<div className="w-16 flex items-center justify-center bg-primary-container text-white">
<span className="material-symbols-outlined animate-pulse" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<div className="p-6 flex-1">
<p className="font-label text-[10px] font-bold text-primary-fixed mb-1 uppercase tracking-widest">EM CURSO</p>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight text-on-primary-container">REVISÃO MENTAL</h3>
<p className="font-body text-sm text-on-primary-container mt-2">Visualize as entradas de queda e as transições para a guarda.</p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold border border-outline-variant/30">SINGLE LEG</span>
<span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold border border-outline-variant/30">DELA RIVA</span>
<span className="px-3 py-1 bg-surface-container-lowest text-[10px] font-bold border border-outline-variant/30">TRIÂNGULO</span>
</div>
</div>
</div>
{/*  Step 3: Locked  */}
<div className="bg-surface-container-low flex items-stretch opacity-40">
<div className="w-16 flex items-center justify-center bg-surface-container">
<span className="material-symbols-outlined text-tertiary-fixed-dim">accessibility_new</span>
</div>
<div className="p-6 flex-1">
<p className="font-label text-[10px] font-bold text-tertiary-fixed-dim mb-1 uppercase tracking-widest">PRÓXIMO</p>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">POSTURA DOMINANTE</h3>
<p className="font-body text-sm text-tertiary-fixed-dim mt-2">Ajuste de base e controle do centro de gravidade.</p>
</div>
</div>
{/*  Step 4: Locked  */}
<div className="bg-surface-container-low flex items-stretch opacity-40">
<div className="w-16 flex items-center justify-center bg-surface-container">
<span className="material-symbols-outlined text-tertiary-fixed-dim">vitals</span>
</div>
<div className="p-6 flex-1">
<p className="font-label text-[10px] font-bold text-tertiary-fixed-dim mb-1 uppercase tracking-widest">FINALIZADOR</p>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">CONTROLE EMOCIONAL</h3>
<p className="font-body text-sm text-tertiary-fixed-dim mt-2">Respiração 4-7-8 para redução de cortisol.</p>
</div>
</div>
</div>
{/*  Action Area  */}
<div className="mt-12 mb-8">
<button className="w-full monolith-gradient py-6 px-8 text-on-primary-container flex justify-between items-center group active:scale-95 transition-all">
<span className="font-headline font-black text-xl uppercase tracking-widest">AVANÇAR RITUAL</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</div>
{/*  Tactical Visual  */}
<div className="h-48 w-full bg-surface-container overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Training" className="w-full h-full object-cover" data-alt="Dynamic shot of two jiu-jitsu practitioners engaged in a tactical grip fight on a dark blue mat, dramatic high-contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdZwTcqsWeiYQIzPHxALslTCAotd34K35fKJY38sJxLRWILMGf0eqnxlCjrh9tAQDjM3NuZrHbRyanCnZmdAa6GOVB1RVZMo3ZCk9ofLtu0Dqen9UFwhC8mchuLaEEd5frpTfAt-agj1BENgb8JQZlJNuQZ6pe2gZSu04hsjsNNI3PsQv1s7amg4z_Jd3aAMW5AXf_jG9eiURj6x1527aIXVfN8L-GNWT_1LnBMCFlkDvsW7YJCdAwDA7uRJL5rp_Ha1qg9DSEw9Ko"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent"></div>
<div className="absolute bottom-4 left-6">
<p className="font-label text-[10px] font-black tracking-[0.3em] text-primary-container mb-1 uppercase">SENSEI INSIGHT</p>
<p className="font-headline font-bold text-lg uppercase leading-none">O COMBATE COMEÇA ANTES DO APITO.</p>
</div>
</div>
</main>
{/*  BottomNavBar Shell  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-4 px-2 bg-[#353534]/80 backdrop-blur-xl shadow-[0_-4px_12px_rgba(52,61,150,0.06)]">
<button className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">HOME</span>
</button>
<button className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">LIBRARY</span>
</button>
<button className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform active:bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>ads_click</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">PATH</span>
</button>
<button className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">TRAINING</span>
</button>
<button className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">SENSEI</span>
</button>
</nav>

    </>
  );
}
