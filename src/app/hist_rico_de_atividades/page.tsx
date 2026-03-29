import React from 'react';

export default function HistRicoDeAtividades() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 z-50 w-full bg-neutral-900/80 backdrop-blur-xl flex justify-between items-center px-6 h-16">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface">menu</span>
<h1 className="text-2xl font-black italic text-[#E70000] dark:text-red-600 tracking-widest font-headline uppercase">KINETIC BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center border border-outline-variant/20">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a focused athlete with intense expression, dramatic lighting, grit and high contrast aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGIqnfJr9m56CwiHqNSzSi7RK9OujtQsikaMiQQTyTaSjwI7rUY8b3_JgSLVAGZqJT8W8AspnnmAqzPdee4-cj3WjdPuixIgaO3rd8MQ_52DVLQlWumUXtVfd5YKOyJMVQUNz6aHOtOIQcJ7Wc4MP8iIpjhAGnW81df6-n722boMS7tQTAbfXNi2Fx8wed7cmQ9UwEC8CzD2nFXpwn-0xnX4-rsa4Vl-AwcGqRiJT4Y_flR3LOU7UtkFb9dd_-CMqcRa4SVUQdw1PJ"/>
</div>
</header>
<main className="pt-20 px-4 max-w-2xl mx-auto">
{/*  Performance Goals Summary  */}
<section className="mb-10">
<div className="grid grid-cols-2 gap-4">
<div className="bg-surface-container-low p-6 flex flex-col justify-between h-40 border-l-4 border-primary-container">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary">Progresso Semanal</span>
<div className="mt-auto">
<div className="text-4xl font-black font-headline tracking-tighter">85<span className="text-lg text-primary-container">%</span></div>
<div className="w-full bg-surface-container-highest h-1 mt-2">
<div className="bg-gradient-to-r from-primary-container to-inverse-primary h-full" style={{ /* width: 85% */ }}></div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-6 flex flex-col justify-between h-40 border-l-4 border-secondary-container">
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary">Técnicas Dominadas</span>
<div className="mt-auto">
<div className="text-4xl font-black font-headline tracking-tighter text-secondary">12<span className="text-lg text-secondary">/15</span></div>
<p className="text-[10px] text-on-surface-variant mt-2 uppercase font-bold">Meta do Mês</p>
</div>
</div>
</div>
</section>
{/*  Timeline Section  */}
<section className="relative">
<h2 className="font-headline font-black text-xl uppercase tracking-widest mb-8 flex items-center gap-3">
<span className="w-2 h-6 bg-primary-container"></span>
                Histórico de Atividades
            </h2>
{/*  Timeline Vertical Line  */}
<div className="absolute left-[19px] top-16 bottom-0 w-[2px] bg-surface-container-highest"></div>
{/*  Activity Items  */}
<div className="space-y-12 relative">
{/*  Treino Concluído  */}
<div className="flex gap-6 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-weight="fill">fitness_center</span>
</div>
</div>
<div className="flex-1 bg-surface-container p-5 transition-all hover:bg-surface-container-high border-b border-primary-container/30">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline font-bold text-lg leading-none uppercase tracking-tight">Treino Concluído</h3>
<span className="text-[10px] font-bold text-tertiary-fixed-dim bg-surface-container-highest px-2 py-1 uppercase">Hoje, 08:30</span>
</div>
<p className="text-sm text-on-surface-variant font-body mb-4">Sessão intensiva de Sparring e Passagem de Guarda. Volume total de 90 min.</p>
<div className="flex gap-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-primary-container text-sm">bolt</span>
<span className="text-[11px] font-black font-headline">742 KCAL</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-primary-container text-sm">favorite</span>
<span className="text-[11px] font-black font-headline">165 BPM AVG</span>
</div>
</div>
</div>
</div>
{/*  Desafio Batido  */}
<div className="flex gap-6 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-weight="fill">military_tech</span>
</div>
</div>
<div className="flex-1 bg-surface-container p-5 transition-all hover:bg-surface-container-high border-b border-primary-container/30">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline font-bold text-lg leading-none uppercase tracking-tight">Desafio Batido</h3>
<span className="text-[10px] font-bold text-tertiary-fixed-dim bg-surface-container-highest px-2 py-1 uppercase">Ontem</span>
</div>
<p className="text-sm text-on-surface-variant font-body">"Constância de Ferro": Você completou 5 treinos consecutivos nesta semana.</p>
<div className="mt-4 flex items-center gap-2 text-primary-container">
<span className="text-[10px] font-black tracking-widest uppercase">Prêmio: +500 Pontos de Experiência</span>
</div>
</div>
</div>
{/*  Técnica Estudada  */}
<div className="flex gap-6 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-secondary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary-container" data-weight="fill">psychology</span>
</div>
</div>
<div className="flex-1 bg-surface-container p-5 transition-all hover:bg-surface-container-high border-b border-secondary-container/30">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline font-bold text-lg leading-none uppercase tracking-tight">Técnica Estudada</h3>
<span className="text-[10px] font-bold text-tertiary-fixed-dim bg-surface-container-highest px-2 py-1 uppercase">15 Out</span>
</div>
<div className="flex items-center gap-4 mb-3">
<div className="w-16 h-10 bg-surface-container-lowest border border-outline-variant/10 overflow-hidden">
<img alt="Technique Study" className="w-full h-full object-cover grayscale opacity-60" data-alt="Close up of two martial artists engaging in a technical grappling position on a black mat, focus on hand placement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpYiykZZuv41Xy0ZXBQzHNrgouH_cLcrYHkqzqr-uGCWOb0N43E2IjmIEI01WVJIJcpU3M7O62s5QB6819_ARA7wYcRfdmw89csOjkuSoCLFJziYlEwTh-GOaWuK4wZZwI0J288J6AUdau9jEoqDiNw_YvNwEvKld7iYj_nnVbTUTXph5vgbzRLdkhrX4bjHke4pQUD9-M9USskcLz-n0SU6p_ZDIrPDw5vdzOfD_rDjL6ccG323iq2kJKt2bhR5loXs1iRFnu1mjX"/>
</div>
<div>
<h4 className="text-xs font-bold text-on-surface uppercase tracking-wide">Triângulo Invertido</h4>
<p className="text-[11px] text-on-secondary-container uppercase">Módulo: Guarda Aberta</p>
</div>
</div>
<p className="text-sm text-on-surface-variant font-body">Revisão teórica de ajustes de quadril e distribuição de peso na finalização.</p>
</div>
</div>
{/*  Treino Concluído (Old)  */}
<div className="flex gap-6 relative">
<div className="relative z-10">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-fixed-dim" data-weight="fill">history</span>
</div>
</div>
<div className="flex-1 bg-surface-container p-5 opacity-60 transition-all hover:opacity-100 hover:bg-surface-container-high border-b border-outline-variant/30">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline font-bold text-lg leading-none uppercase tracking-tight">Aula de Fundamentos</h3>
<span className="text-[10px] font-bold text-tertiary-fixed-dim bg-surface-container-highest px-2 py-1 uppercase">14 Out</span>
</div>
<p className="text-sm text-on-surface-variant font-body">Foco em rolamentos e quedas básicas (Ukemi). Participação de 60 min.</p>
</div>
</div>
</div>
</section>
{/*  Load More Button  */}
<div className="mt-12 mb-8 flex justify-center">
<button className="bg-surface-container-high text-on-surface px-8 py-3 font-headline font-black uppercase text-xs tracking-[0.2em] border border-outline-variant/20 hover:bg-primary-container transition-all active:scale-95">
                Carregar Histórico Antigo
            </button>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-end bg-[#1C1B1B] z-50">
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined mb-1">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined mb-1">library_books</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-4 brightness-125" href="#">
<span className="material-symbols-outlined mb-1">insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined mb-1">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined mb-1">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</a>
</nav>

    </>
  );
}
