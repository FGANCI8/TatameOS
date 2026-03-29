import React from 'react';

export default function DashboardDoAluno() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/30">
<img alt="Athlete Profile" className="w-full h-full object-cover" data-alt="Close-up portrait of a determined Brazilian Jiu-Jitsu athlete wearing a black gi, intense gaze, atmospheric gym lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA_wkAprYQ9hT5ckH1TMn2iQkWfgjIp6eiDKjLpIMc89gusO2G4t6BsXy4XVFgHEO4lpisOR_V2MLV8qZGiLhWv19i15Xm6kgJHvs3XxKro2Oaw5Fl_lZkjE7xE2AeluC-LizVutrznF8rDKY2ZOO8pjj4tZHoHwz-9TSPSqOmsmz-PRlyK_MrSE7yNcrGS0KcTdCO5HSfPs36Tyg2L54joi-RODvLQtBhouaYEF4Frrj-z3qO35ZFqF4jDx2G6GJt3OIL8plH4aeA"/>
</div>
<span className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-[#E70000]">KINETIC BJJ</span>
</div>
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-100">
<span className="material-symbols-outlined">notifications</span>
</button>
</header>
<main className="pt-20 pb-28 px-4 max-w-5xl mx-auto space-y-8">
{/*  Hero Greeting & Performance Metric  */}
<section className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<p className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-1">Status: Ativo</p>
<h1 className="font-headline font-black text-5xl uppercase italic tracking-tighter leading-none">Olá, Atleta!</h1>
<p className="text-tertiary-fixed-dim mt-2 max-w-xs font-body">Mantenha a pressão. Seu próximo nível está a um treino de distância.</p>
</div>
<div className="bg-surface-container-low p-6 flex flex-col items-end border-l-4 border-primary-container">
<span className="font-label text-[10px] uppercase tracking-widest text-secondary-fixed-dim">Tempo Total de Tatame</span>
<div className="flex items-baseline gap-2">
<span className="font-headline font-black text-4xl text-on-surface">142</span>
<span className="font-headline font-bold text-xl text-primary-container">HRS</span>
</div>
</div>
</section>
{/*  Primary Action  */}
<section>
<button className="w-full group relative overflow-hidden bg-primary-container hover:bg-inverse-primary transition-all duration-300 p-8 flex flex-col items-start gap-2 active:scale-[0.98]">
<div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-500">
<span className="material-symbols-outlined text-[120px]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
</div>
<div className="flex items-center gap-2 text-on-primary-container/80 font-label text-xs tracking-widest uppercase">
<span className="material-symbols-outlined text-sm">play_circle</span>
                    Continuar jornada
                </div>
<span className="font-headline font-black text-3xl md:text-4xl text-on-primary-container tracking-tighter uppercase italic">RETOMAR ÚLTIMO TREINO</span>
<div className="mt-4 flex gap-4">
<div className="flex flex-col">
<span className="text-[10px] uppercase opacity-60">Módulo</span>
<span className="font-bold text-sm">Passagem de Guarda X</span>
</div>
<div className="w-[1px] h-8 bg-on-primary-container/20"></div>
<div className="flex flex-col">
<span className="text-[10px] uppercase opacity-60">Progresso</span>
<span className="font-bold text-sm">75%</span>
</div>
</div>
</button>
</section>
{/*  Bento Grid Stats  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Weekly Progress Chart  */}
<div className="md:col-span-2 bg-surface-container-high p-6 flex flex-col justify-between min-h-[240px]">
<div className="flex justify-between items-start mb-6">
<h3 className="font-headline font-bold text-lg uppercase italic tracking-tight">Progresso Semanal</h3>
<span className="text-[10px] font-label text-tertiary bg-surface-container px-2 py-1 uppercase">Últimos 7 dias</span>
</div>
<div className="flex items-end justify-between h-32 gap-2">
{/*  Bars  */}
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-surface-container-highest h-[40%]"></div>
<span className="text-[9px] uppercase font-bold text-tertiary">SEG</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary-container h-[90%]"></div>
<span className="text-[9px] uppercase font-bold text-on-surface">TER</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-surface-container-highest h-[20%]"></div>
<span className="text-[9px] uppercase font-bold text-tertiary">QUA</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary-container h-[75%]"></div>
<span className="text-[9px] uppercase font-bold text-on-surface">QUI</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-primary-container h-[100%]"></div>
<span className="text-[9px] uppercase font-bold text-on-surface">SEX</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-surface-container-highest h-[10%]"></div>
<span className="text-[9px] uppercase font-bold text-tertiary">SÁB</span>
</div>
<div className="flex-1 flex flex-col items-center gap-2">
<div className="w-full bg-surface-container-highest h-[0%]"></div>
<span className="text-[9px] uppercase font-bold text-tertiary">DOM</span>
</div>
</div>
</div>
{/*  Streak Card  */}
<div className="bg-gradient-to-br from-secondary-container to-surface-container-high p-6 flex flex-col justify-between">
<div>
<span className="material-symbols-outlined text-secondary" style={{ /* font-variation-settings: 'FILL' 1; */ }}>local_fire_department</span>
<h3 className="font-headline font-black text-4xl mt-2 leading-none uppercase italic">05 DIAS</h3>
<p className="font-label text-xs uppercase text-on-secondary-container mt-1 tracking-widest">Sequência Atual</p>
</div>
<div className="mt-4 pt-4 border-t border-white/10">
<p className="text-xs text-on-secondary-container/80 italic">"A consistência supera o talento quando o talento não treina."</p>
</div>
</div>
</section>
{/*  Shortcuts Grid  */}
<section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
{/*  Shortcut: Biblioteca  */}
<div className="group bg-surface-container p-6 border-l-2 border-transparent hover:border-primary-container transition-all cursor-pointer">
<span className="material-symbols-outlined text-primary-container mb-4">video_library</span>
<h4 className="font-headline font-bold text-xl uppercase italic">Biblioteca</h4>
<p className="text-xs text-tertiary mt-2">Acesse mais de 500 técnicas detalhadas em 4K.</p>
<div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">
                    Explorar <span className="material-symbols-outlined text-xs">arrow_forward</span>
</div>
</div>
{/*  Shortcut: Trilha  */}
<div className="group bg-surface-container p-6 border-l-2 border-transparent hover:border-primary-container transition-all cursor-pointer">
<span className="material-symbols-outlined text-primary-container mb-4">insights</span>
<h4 className="font-headline font-bold text-xl uppercase italic">Trilha</h4>
<p className="text-xs text-tertiary mt-2">Seu roteiro personalizado rumo à próxima faixa.</p>
<div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver Mapa <span className="material-symbols-outlined text-xs">arrow_forward</span>
</div>
</div>
{/*  Shortcut: IA  */}
<div className="group bg-surface-container p-6 border-l-2 border-transparent hover:border-primary-container transition-all cursor-pointer relative overflow-hidden">
<div className="absolute -right-4 -top-4 opacity-5 rotate-12">
<span className="material-symbols-outlined text-8xl">school</span>
</div>
<span className="material-symbols-outlined text-primary-container mb-4">psychology</span>
<h4 className="font-headline font-bold text-xl uppercase italic">Sensei IA</h4>
<p className="text-xs text-tertiary mt-2">Dúvidas táticas? Pergunte ao seu instrutor virtual.</p>
<div className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase text-primary-container opacity-0 group-hover:opacity-100 transition-opacity">
                    Conversar <span className="material-symbols-outlined text-xs">arrow_forward</span>
</div>
</div>
</section>
{/*  Next Class Callout  */}
<section className="bg-surface-container-lowest p-6 border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-tertiary">calendar_today</span>
</div>
<div>
<h5 className="font-headline font-bold uppercase tracking-tight">Próximo Treino Presencial</h5>
<p className="text-sm text-tertiary font-body">Hoje, 19:30 • Treino de Competição</p>
</div>
</div>
<button className="px-6 py-3 border-2 border-primary-container text-primary-container font-black uppercase text-xs tracking-widest hover:bg-primary-container hover:text-white transition-all">
                Confirmar Presença
            </button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-4 bg-[#131313]/80 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)] z-50">
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">video_library</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">school</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
