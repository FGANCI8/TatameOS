import React from 'react';

export default function CalendRioDeTreinos() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-primary-container">
<img alt="Instructor" data-alt="Close-up of a high-intensity Brazilian Jiu-Jitsu black belt instructor looking focused with cinematic lighting in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcHK0oWtBEkj6Qvs8pa7btGdRHPgPm53yrC6084402ScjeJdJaR5xYY8PhSQGZgCWtinNE47rTc2jq7Bt1DlpbBEr7wR3kmbdVG4YJNcN0dk1rhf9SUpvXhkbbtE7PXMARACaSselQhKUgLYW44us0mSUHCzOj7PxifUMGgOsaYWbSd-3D2ubUADzgFBYZyg5U99Vr_OxY3BApQnqs2HRQ8lZfBDa9AIjcehLMX-UxNmnP2kQHsbXHn-cmpzzksDwTVVSCUf0q9yEj"/>
</div>
<h1 className="text-2xl font-black italic text-[#E70000] font-headline uppercase tracking-tighter">KINETIC BJJ</h1>
</div>
<button className="text-[#393939] hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Calendar Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-8">
<div>
<span className="text-primary-container font-headline font-bold uppercase tracking-[0.2em] text-xs">Agenda de Combate</span>
<h2 className="text-5xl md:text-7xl font-black font-headline uppercase leading-none mt-2">OUTUBRO</h2>
</div>
<div className="flex gap-2">
<button className="bg-surface-container-highest p-3 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
</button>
<button className="bg-surface-container-highest p-3 hover:bg-surface-bright transition-colors">
<span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
{/*  Calendar Grid  */}
<div className="grid grid-cols-7 gap-1 border-t border-l border-white/5 bg-white/5">
{/*  Days of week  */}
<div className="bg-surface-container-low p-4 text-center font-headline font-bold text-[10px] text-tertiary-fixed-dim uppercase tracking-widest border-r border-b border-white/5">DOM</div>
<div className="bg-surface-container-low p-4 text-center font-headline font-bold text-[10px] text-tertiary-fixed-dim uppercase tracking-widest border-r border-b border-white/5">SEG</div>
<div className="bg-surface-container-low p-4 text-center font-headline font-bold text-[10px] text-tertiary-fixed-dim uppercase tracking-widest border-r border-b border-white/5">TER</div>
<div className="bg-surface-container-low p-4 text-center font-headline font-bold text-[10px] text-tertiary-fixed-dim uppercase tracking-widest border-r border-b border-white/5">QUA</div>
<div className="bg-surface-container-low p-4 text-center font-headline font-bold text-[10px] text-tertiary-fixed-dim uppercase tracking-widest border-r border-b border-white/5">QUI</div>
<div className="bg-surface-container-low p-4 text-center font-headline font-bold text-[10px] text-tertiary-fixed-dim uppercase tracking-widest border-r border-b border-white/5">SEX</div>
<div className="bg-surface-container-low p-4 text-center font-headline font-bold text-[10px] text-tertiary-fixed-dim uppercase tracking-widest border-r border-b border-white/5">SÁB</div>
{/*  Days (Sample starting from Monday)  */}
<div className="bg-surface-container-lowest h-24 md:h-32 p-3 opacity-20 border-r border-b border-white/5">29</div>
<div className="bg-surface-container-lowest h-24 md:h-32 p-3 border-r border-b border-white/5 flex flex-col justify-between">
<span className="font-headline font-bold">01</span>
<div className="w-full h-1 bg-primary-container"></div>
</div>
<div className="bg-surface-container-lowest h-24 md:h-32 p-3 border-r border-b border-white/5 flex flex-col justify-between">
<span className="font-headline font-bold text-primary-container">02</span>
<div className="flex flex-col gap-1">
<div className="w-full h-1 bg-primary-container"></div>
<div className="w-full h-1 bg-primary-container"></div>
</div>
</div>
<div className="bg-surface-container-lowest h-24 md:h-32 p-3 border-r border-b border-white/5">
<span className="font-headline font-bold">03</span>
</div>
<div className="bg-surface-container-low h-24 md:h-32 p-3 border-r border-b border-white/5 flex flex-col justify-between ring-1 ring-inset ring-primary-container">
<span className="font-headline font-bold text-primary-container">04</span>
<span className="text-[8px] font-bold text-primary-container uppercase tracking-tighter">Hoje</span>
</div>
<div className="bg-surface-container-lowest h-24 md:h-32 p-3 border-r border-b border-white/5">
<span className="font-headline font-bold">05</span>
<div className="mt-2 flex gap-1">
<div className="w-2 h-2 rounded-full bg-secondary"></div>
</div>
</div>
<div className="bg-surface-container-lowest h-24 md:h-32 p-3 border-r border-b border-white/5">
<span className="font-headline font-bold">06</span>
</div>
</div>
</section>
{/*  Training List Asymmetric Layout  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-10">
{/*  Weekly Summary (Bento Style)  */}
<div className="lg:col-span-4 space-y-6">
<div className="bg-surface-container-low p-6 border-l-4 border-primary-container">
<h3 className="font-headline font-black text-2xl uppercase italic leading-tight">Status da Trilha</h3>
<div className="mt-6 space-y-4">
<div className="flex justify-between items-end">
<span className="text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">Progresso Semanal</span>
<span className="font-headline font-black text-primary-container">75%</span>
</div>
<div className="w-full h-4 bg-surface-container-highest">
<div className="h-full w-3/4 bg-gradient-to-r from-primary-container to-inverse-primary"></div>
</div>
<p className="text-[10px] text-tertiary-fixed-dim uppercase leading-relaxed">Você completou 3 de 4 treinos planejados para esta semana. Mantenha a pressão.</p>
</div>
</div>
<div className="bg-primary-container p-6 text-on-primary-container">
<span className="material-symbols-outlined text-4xl mb-4" data-icon="fitness_center" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<h4 className="font-headline font-bold uppercase tracking-tighter text-xl">Próximo Desafio</h4>
<p className="mt-2 text-sm font-medium opacity-90">Open Mat de Graduados às 18:00. Esteja pronto para 10 rounds de 6 minutos.</p>
</div>
</div>
{/*  Training Details  */}
<div className="lg:col-span-8">
<div className="flex items-center justify-between mb-6">
<h3 className="font-headline font-bold uppercase tracking-widest text-sm flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container"></span>
                        Sessões de Hoje
                    </h3>
<span className="text-[10px] font-bold uppercase text-tertiary-fixed-dim">4 de Outubro, 2023</span>
</div>
<div className="space-y-4">
{/*  Training Item 1  */}
<div className="group flex bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
<div className="w-2 bg-primary-container"></div>
<div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="bg-surface-container-highest px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter">09:00 AM</span>
<span className="text-xs font-bold text-primary-container uppercase tracking-widest">Iniciante</span>
</div>
<h4 className="text-2xl font-black font-headline uppercase">Aula de Fundamentos</h4>
<p className="text-xs text-tertiary-fixed-dim mt-1 uppercase tracking-wider">Foco: Postura e Saída de Quadril na Guarda Fechada</p>
</div>
<button className="bg-primary-container hover:bg-inverse-primary text-on-primary-container px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest transition-all active:scale-95">
                                Confirmado
                            </button>
</div>
</div>
{/*  Training Item 2  */}
<div className="group flex bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
<div className="w-2 bg-white/10"></div>
<div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="bg-surface-container-highest px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter">17:30 PM</span>
<span className="text-xs font-bold text-secondary uppercase tracking-widest">Avançado</span>
</div>
<h4 className="text-2xl font-black font-headline uppercase">Revisão Técnica: Triângulo</h4>
<p className="text-xs text-tertiary-fixed-dim mt-1 uppercase tracking-wider">Ajustes finos e transições para chave de braço</p>
</div>
<button className="border border-white/20 hover:border-primary-container hover:text-primary-container px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest transition-all active:scale-95">
                                Agendar
                            </button>
</div>
</div>
{/*  Training Item 3  */}
<div className="group flex bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
<div className="w-2 bg-white/10"></div>
<div className="flex-1 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<div className="flex items-center gap-3 mb-1">
<span className="bg-surface-container-highest px-2 py-0.5 text-[10px] font-black uppercase tracking-tighter">19:00 PM</span>
<span className="text-xs font-bold text-tertiary-fixed-dim uppercase tracking-widest">Todos os Níveis</span>
</div>
<h4 className="text-2xl font-black font-headline uppercase">Open Mat</h4>
<p className="text-xs text-tertiary-fixed-dim mt-1 uppercase tracking-wider">Luta livre e intercâmbio técnico</p>
</div>
<button className="border border-white/20 hover:border-primary-container hover:text-primary-container px-6 py-3 font-headline font-bold text-xs uppercase tracking-widest transition-all active:scale-95">
                                Agendar
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-[#131313]/90 backdrop-blur-xl z-50">
<div className="bg-gradient-to-r from-transparent via-[#E70000]/20 to-transparent h-[1px] top-0 absolute w-full"></div>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
{/*  ACTIVE: Trilha (Calendar/Schedule intent)  */}
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="rebase_edit" style={{ /* font-variation-settings: 'FILL' 1; */ }}>rebase_edit</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
