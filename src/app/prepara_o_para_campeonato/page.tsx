import React from 'react';

export default function PreparaOParaCampeonato() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none bg-[#131313] dark:bg-[#131313] flex justify-between items-center px-6 h-16 w-full shadow-none border-b-0">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Close-up profile of a Brazilian Jiu-Jitsu athlete wearing a black gi, focused expression, cinematic dark studio lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6-gob7m8ym5d6vklA1719IWQrVLY99zOy7itOUAuCE87dH1FmMOJuuXmp-EJaVfSAn0NoqQirWVJfzVC8CMSVqCvgPoyWAIQ2u3t_hmYNaQG036gCM_0StRNMRlmnW64cnGbgHHwysGiepTLHEakHPJAFJICvNIe5JcGWpJvVhF1Lfl-62oAAzQw60bcStoYtVNUO3Cr3OPU1ELmucaVUcWq29yyLtBmEXT7qh0NzQZH9sHOYxZ85OgqVd2f4BuqbaFLL5YOXJdPf"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl italic text-[#E70000] dark:text-[#E70000] tracking-widest">STRYKE</h1>
</div>
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Section: Status Overview  */}
<section className="mb-12">
<h2 className="font-headline font-black text-5xl md:text-7xl uppercase tracking-tighter text-on-surface mb-2">PREPARAÇÃO</h2>
<p className="font-label uppercase tracking-[0.2em] text-tertiary-fixed-dim text-sm mb-8">CAMPEONATO NACIONAL • SEMANA FINAL</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="bg-surface-container-low p-6 flex flex-col justify-between h-48 border-l-4 border-primary-container">
<span className="font-label uppercase text-xs tracking-widest text-tertiary-fixed-dim">Status Mental</span>
<div className="flex items-baseline gap-2">
<span className="font-headline font-black text-6xl text-on-surface">100</span>
<span className="font-headline font-bold text-2xl text-primary-container">%</span>
</div>
<span className="font-label text-xs font-bold text-primary-container uppercase">FOCO TOTAL</span>
</div>
<div className="bg-surface-container p-6 flex flex-col justify-between h-48">
<span className="font-label uppercase text-xs tracking-widest text-tertiary-fixed-dim">Categoria</span>
<span className="font-headline font-black text-4xl text-on-surface leading-none uppercase">ADULTO<br/>PENA</span>
<span className="font-label text-xs text-tertiary-fixed-dim uppercase">LIMITE: 76.0 KG</span>
</div>
<div className="bg-surface-container-high p-6 flex flex-col justify-between h-48">
<span className="font-label uppercase text-xs tracking-widest text-tertiary-fixed-dim">Documentos</span>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container text-4xl" data-icon="verified">verified</span>
<span className="font-headline font-bold text-2xl text-on-surface uppercase">CHECK OK</span>
</div>
<span className="font-label text-xs text-tertiary-fixed-dim uppercase">IDENTIDADE &amp; FILIAÇÃO</span>
</div>
</div>
</section>
{/*  Bento Grid: Preparation Metrics  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
{/*  Weight Tracking Card  */}
<div className="bg-surface-container-lowest p-8 flex flex-col justify-between aspect-square md:aspect-auto">
<div>
<h3 className="font-headline font-bold text-xl uppercase tracking-widest mb-6">PESO ATUAL</h3>
<div className="flex items-baseline gap-4">
<span className="font-headline font-black text-8xl text-on-surface">75.4</span>
<span className="font-headline font-bold text-3xl text-primary-container">KG</span>
</div>
</div>
<div className="mt-8">
<div className="flex justify-between items-end mb-2">
<span className="font-label text-xs text-tertiary-fixed-dim uppercase tracking-widest">META: 76.0KG</span>
<span className="font-label text-xs text-primary-container font-bold">-0.6KG UNDER</span>
</div>
<div className="h-3 bg-surface-container-highest w-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary-container to-inverse-primary w-[92%]"></div>
</div>
</div>
</div>
{/*  Training Progress Card  */}
<div className="bg-surface-container-low p-8 flex flex-col justify-between aspect-square md:aspect-auto relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-[12rem]" data-icon="fitness_center">fitness_center</span>
</div>
<div>
<h3 className="font-headline font-bold text-xl uppercase tracking-widest mb-6">TREINOS DA SEMANA</h3>
<div className="flex gap-2 mb-8">
<div className="w-12 h-12 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="check">check</span>
</div>
<div className="w-12 h-12 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="check">check</span>
</div>
<div className="w-12 h-12 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="check">check</span>
</div>
<div className="w-12 h-12 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="check">check</span>
</div>
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center border-2 border-dashed border-outline-variant">
<span className="font-headline font-bold text-outline">5</span>
</div>
</div>
<p className="font-headline font-black text-5xl text-on-surface">4 / 5</p>
</div>
<p className="font-body text-sm text-tertiary-fixed-dim max-w-[240px]">Última sessão de drill técnico agendada para amanhã às 18:00.</p>
</div>
</section>
{/*  Final Plan Action  */}
<section className="bg-surface-container-highest p-1 bg-gradient-to-br from-primary-container/20 to-transparent">
<div className="bg-surface-container-lowest p-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-6">
<div className="bg-primary-container w-16 h-16 flex items-center justify-center">
<span className="material-symbols-outlined text-3xl text-on-primary-container" data-icon="picture_as_pdf">picture_as_pdf</span>
</div>
<div>
<h3 className="font-headline font-bold text-2xl uppercase tracking-tighter text-on-surface">PLANO FINAL DE LUTA</h3>
<p className="font-body text-sm text-tertiary-fixed-dim">Estratégias específicas, plano de corte e horários.</p>
</div>
</div>
<button className="w-full md:w-auto bg-primary-container hover:bg-inverse-primary text-on-primary-container px-10 py-4 font-headline font-black uppercase tracking-widest transition-all active:scale-95">
                    VISUALIZAR PDF
                </button>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-4 bg-[#131313]/80 dark:bg-[#131313]/80 backdrop-blur-xl border-t border-[#353534]/30 z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="ads_click">ads_click</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] tracking-widest">SENSEI</span>
</a>
</nav>

    </>
  );
}
