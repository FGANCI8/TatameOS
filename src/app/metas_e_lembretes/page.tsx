import React from 'react';

export default function MetasELembretes() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-black/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 w-full docked full-width top-0 z-50 bg-[#1C1B1B] border-none flat no shadows">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="close-up portrait of a determined jiu-jitsu athlete with short hair in a dark training environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj9ipE-naPc5lZ0zNZbJ6_xktD9ymft5IsKzgnE-Zrq2UzL4SF9YgZ1fCeMq2wn6WNQHmr74ZcaflttTtsF9Kso1xFI8r4-zqlxYfyKvg2IJU1F3kwFQ5MdNybXErByPxWMfb8nZvxBKZ8NqcI1OP5R9IOM6HpeJ1p3uNRZYQCuBgPa-C-QTkyYCA0_pZF2ibdOUm3ELtKfTRMp12loVa_SmQzLvO7yyP8HdbcCqKtlQ6a31Y4355pLBPhrZPwJZPcHZL72FA352M4"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000]">KINETIC BJJ</h1>
</div>
<button className="text-white hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="px-6 pt-8 space-y-12">
{/*  Hero Section: Progress Visualization  */}
<section className="space-y-6">
<div className="flex flex-col gap-1">
<span className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim">Status da Temporada</span>
<h2 className="font-headline text-4xl font-black italic tracking-tighter uppercase text-on-surface">DISCIPLINA <span className="text-primary-container">ATIVA</span></h2>
</div>
{/*  Performance Streak Component  */}
<div className="bg-surface-container-low p-6 border-l-4 border-primary-container">
<div className="flex justify-between items-end mb-4">
<div>
<div className="font-headline text-5xl font-black text-on-surface tracking-tighter">75%</div>
<div className="font-label text-[10px] uppercase font-bold tracking-widest text-primary-container">Meta Semanal: 3 de 4 Treinos</div>
</div>
<div className="text-right">
<div className="font-label text-xs text-tertiary-fixed-dim mb-1">RUMO AO PRÓXIMO GRAU</div>
<div className="flex gap-1">
<span className="w-2 h-6 bg-primary-container"></span>
<span className="w-2 h-6 bg-primary-container"></span>
<span className="w-2 h-6 bg-primary-container"></span>
<span className="w-2 h-6 bg-surface-container-highest"></span>
</div>
</div>
</div>
{/*  Shimmer Progress Bar  */}
<div className="h-3 w-full bg-surface-container-highest relative overflow-hidden">
<div className="absolute top-0 left-0 h-full w-[75%] bg-gradient-to-r from-primary-container to-inverse-primary"></div>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</section>
{/*  Bento Grid: Reminders & Goals  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Reminders Card  */}
<div className="md:col-span-2 bg-surface-container-high p-6 space-y-6">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="lightbulb">lightbulb</span>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">Revisão de Técnica</h3>
</div>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 bg-surface-container-highest border-l-2 border-primary-container transition-all hover:translate-x-1 cursor-pointer">
<span className="material-symbols-outlined text-tertiary-fixed-dim pt-1" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<div>
<p className="font-bold text-on-surface">Ajuste de Pegada na De La Riva</p>
<p className="text-xs text-tertiary-fixed-dim mt-1 font-medium">Revisar vídeo da Aula 14 - Módulo Guarda Aberta</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-surface-container-highest border-l-2 border-primary-container transition-all hover:translate-x-1 cursor-pointer opacity-60">
<span className="material-symbols-outlined text-primary-container pt-1" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<div>
<p className="font-bold text-on-surface line-through">Passagem de Meia Guarda Profunda</p>
<p className="text-xs text-tertiary-fixed-dim mt-1 font-medium">Focar na distribuição de peso no quadril</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 bg-surface-container-highest border-l-2 border-primary-container transition-all hover:translate-x-1 cursor-pointer">
<span className="material-symbols-outlined text-tertiary-fixed-dim pt-1" data-icon="radio_button_unchecked">radio_button_unchecked</span>
<div>
<p className="font-bold text-on-surface">Escapada de Triângulo</p>
<p className="text-xs text-tertiary-fixed-dim mt-1 font-medium">Manter postura e braço seguro</p>
</div>
</div>
</div>
</div>
{/*  Focus Metric Card  */}
<div className="bg-primary-container p-6 flex flex-col justify-between text-on-primary-container relative overflow-hidden">
<span className="material-symbols-outlined absolute -right-4 -top-4 text-9xl opacity-10" data-icon="fitness_center">fitness_center</span>
<div className="relative z-10">
<span className="font-label text-[10px] uppercase font-black tracking-widest bg-black/20 px-2 py-1">Foco Semanal</span>
<h3 className="font-headline text-3xl font-black mt-4 leading-none">MOBILIDADE DE QUADRIL</h3>
</div>
<div className="mt-8 relative z-10">
<p className="text-sm font-bold opacity-90 italic">"A técnica vence a força, mas a disciplina vence o talento."</p>
<button className="mt-6 w-full bg-on-primary-container text-primary-container font-black py-3 uppercase tracking-tighter active:scale-95 transition-transform">
                        Iniciar Treino
                    </button>
</div>
</div>
</section>
{/*  Long-term Objectives  */}
<section className="space-y-6">
<h3 className="font-headline font-bold text-xl uppercase tracking-tight flex items-center gap-2">
<span className="w-6 h-1 bg-primary-container"></span>
                Objetivos de Longo Prazo
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Goal Item  */}
<div className="bg-surface-container-low p-6 border-b-2 border-surface-container-highest flex justify-between items-center group hover:bg-surface-container transition-colors">
<div className="space-y-1">
<p className="font-headline text-lg font-black uppercase text-on-surface">GRADUAÇÃO FAIXA AZUL</p>
<p className="font-label text-xs text-tertiary-fixed-dim">Estimativa: Dezembro 2024</p>
</div>
<div className="h-12 w-1 bg-surface-container-highest relative">
<div className="absolute bottom-0 w-full h-[40%] bg-primary-container"></div>
</div>
</div>
{/*  Goal Item  */}
<div className="bg-surface-container-low p-6 border-b-2 border-surface-container-highest flex justify-between items-center group hover:bg-surface-container transition-colors">
<div className="space-y-1">
<p className="font-headline text-lg font-black uppercase text-on-surface">PRIMEIRA COMPETIÇÃO</p>
<p className="font-label text-xs text-tertiary-fixed-dim">Status: Inscrição Pendente</p>
</div>
<div className="h-12 w-1 bg-surface-container-highest relative">
<div className="absolute bottom-0 w-full h-[15%] bg-primary-container"></div>
</div>
</div>
</div>
</section>
{/*  Quick Habits  */}
<section className="bg-surface-container-lowest p-8 border border-outline-variant/10">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="max-w-md">
<h4 className="font-headline font-black text-2xl uppercase italic text-on-surface">Check-list Diário</h4>
<p className="text-tertiary-fixed-dim text-sm mt-2 font-medium">Pequenas vitórias diárias constroem o campeão de amanhã.</p>
</div>
<div className="flex flex-wrap gap-3">
<button className="px-6 py-2 bg-surface-container-high border border-outline-variant/30 text-xs font-black uppercase tracking-widest text-on-surface hover:bg-primary-container hover:text-white transition-all">Hidratação (3L)</button>
<button className="px-6 py-2 bg-surface-container-high border border-outline-variant/30 text-xs font-black uppercase tracking-widest text-on-surface hover:bg-primary-container hover:text-white transition-all">Mobilidade (15m)</button>
<button className="px-6 py-2 bg-surface-container-high border border-outline-variant/30 text-xs font-black uppercase tracking-widest text-on-surface hover:bg-primary-container hover:text-white transition-all">Visualização</button>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 h-20 bg-[#1C1B1B]/90 dark:bg-[#131313]/95 backdrop-blur-md z-50 border-none shadow-[0_-4px_20px_rgba(52,61,150,0.06)] bg-gradient-to-t from-black to-transparent">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-safe active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="ads_click" style={{ /* font-variation-settings: 'FILL' 1; */ }}>ads_click</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
