import React from 'react';

export default function ResumoDeFalhas() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none bg-[#131313] dark:bg-black/80 backdrop-blur-md flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white active:scale-95 duration-100 cursor-pointer">menu</span>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl italic text-[#E70000] tracking-widest">KINETIC BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest border-2 border-primary-container flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up of a professional BJJ fighter with intense focus, dark moody cinematic lighting, high contrast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxMgJ_hBv5xBvU2ZCruAwj_SfVq6cDpaYzbz0sKXnaajfPE877MpDAfp5ep6WIQJ_fICRyOsWJZnL9c9fhG1PxXrU67fYTlpbDAjuybzJwmLVgPTjdwDqEdFbbcR7FTnzU0DZQcJFJx_uVS_gVCWnoAgl8ojISV2Sl_eWzDqH2-R-aUu_D96j3UjOzThjrnxQEUlKVLgjB0XWNVXIQ8HGo1-mq4N9IEOPqKYsSeP6jejdizlRr6If-MaEvT0qB8BKFFZ4si6cs5Rvi"/>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<span className="font-label text-primary-container font-black uppercase tracking-[0.2em] text-xs mb-2 block">Análise de Performance</span>
<h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-on-surface">RESUMO DE <br/><span className="text-primary-container">FALHAS</span></h2>
</div>
<div className="bg-surface-container-high p-4 flex flex-col border-l-4 border-primary-container">
<span className="font-label text-[10px] uppercase font-bold text-tertiary-fixed-dim tracking-widest">Taxa de Eficiência Defensiva</span>
<span className="font-headline text-4xl font-black text-on-surface">62<span className="text-lg font-normal text-tertiary-fixed-dim">%</span></span>
</div>
</div>
</section>
{/*  Bento Grid Stats  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
{/*  High Frequency Alert Card  */}
<div className="md:col-span-2 bg-primary-container p-8 relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<h3 className="font-headline text-2xl font-black uppercase text-on-primary-container mb-2 italic">ALERTA CRÍTICO</h3>
<p className="font-body text-on-primary-container/80 text-sm max-w-xs">Sua guarda está sendo passada com frequência acima da média da categoria. Foco em retenção.</p>
</div>
<div className="mt-8 flex items-end gap-2">
<span className="font-headline text-8xl font-black leading-none text-on-primary-container">14</span>
<span className="font-label text-sm font-bold uppercase mb-2 text-on-primary-container">Passagens / Mês</span>
</div>
</div>
<div className="absolute -right-10 -bottom-10 opacity-10">
<span className="material-symbols-outlined text-[200px]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
</div>
</div>
{/*  Secondary Stat Card  */}
<div className="bg-surface-container-highest p-8 flex flex-col justify-between border-t-4 border-secondary">
<span className="font-label text-xs font-black uppercase tracking-widest text-secondary">Tempo de Reação</span>
<div className="my-6">
<span className="font-headline text-5xl font-black text-on-surface">1.4s</span>
<p className="text-[10px] text-tertiary-fixed-dim mt-2 uppercase font-bold tracking-tight">Média em transições de queda</p>
</div>
<div className="w-full bg-surface-container-low h-1">
<div className="bg-secondary h-full w-[70%]"></div>
</div>
</div>
</div>
{/*  Failure Breakdown List (Monolithic Cards)  */}
<section className="space-y-4">
<h3 className="font-label text-xs font-black uppercase tracking-[0.3em] text-tertiary-fixed-dim mb-6">Detalhamento Técnico</h3>
{/*  Failure Item 01  */}
<div className="bg-surface-container-low group flex flex-col md:flex-row items-stretch border-l-0 hover:border-l-8 border-primary-container transition-all duration-200">
<div className="p-8 flex-1">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>change_history</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-primary-container">Finalização</span>
</div>
<h4 className="font-headline text-3xl font-black uppercase italic text-on-surface mb-2">Triângulo</h4>
<p className="font-body text-tertiary-fixed-dim text-sm max-w-md">Ocorrência comum durante tentativas de raspagem da guarda fechada. Falta de controle de postura.</p>
</div>
<div className="bg-surface-container-high px-10 py-8 flex flex-col justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-surface-container-highest">
<span className="font-label text-[10px] font-black uppercase text-tertiary-fixed-dim mb-1">Ocorrências</span>
<span className="font-headline text-5xl font-black text-on-surface">08</span>
</div>
</div>
{/*  Failure Item 02  */}
<div className="bg-surface-container-low group flex flex-col md:flex-row items-stretch border-l-0 hover:border-l-8 border-primary-container transition-all duration-200">
<div className="p-8 flex-1">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield_with_heart</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-primary-container">Posicional</span>
</div>
<h4 className="font-headline text-3xl font-black uppercase italic text-on-surface mb-2">Guarda Passada</h4>
<p className="font-body text-tertiary-fixed-dim text-sm max-w-md">Pressão excessiva nos joelhos. Dificuldade em manter a esgrima e o bloqueio de quadril.</p>
</div>
<div className="bg-surface-container-high px-10 py-8 flex flex-col justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-surface-container-highest">
<span className="font-label text-[10px] font-black uppercase text-tertiary-fixed-dim mb-1">Ocorrências</span>
<span className="font-headline text-5xl font-black text-on-surface">14</span>
</div>
</div>
{/*  Failure Item 03  */}
<div className="bg-surface-container-low group flex flex-col md:flex-row items-stretch border-l-0 hover:border-l-8 border-primary-container transition-all duration-200">
<div className="p-8 flex-1">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>south_east</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-primary-container">Transição</span>
</div>
<h4 className="font-headline text-3xl font-black uppercase italic text-on-surface mb-2">Queda Tomada</h4>
<p className="font-body text-tertiary-fixed-dim text-sm max-w-md">Vulnerabilidade ao Double Leg. Base instável nos primeiros segundos de combate em pé.</p>
</div>
<div className="bg-surface-container-high px-10 py-8 flex flex-col justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-surface-container-highest">
<span className="font-label text-[10px] font-black uppercase text-tertiary-fixed-dim mb-1">Ocorrências</span>
<span className="font-headline text-5xl font-black text-on-surface">05</span>
</div>
</div>
{/*  Failure Item 04  */}
<div className="bg-surface-container-low group flex flex-col md:flex-row items-stretch border-l-0 hover:border-l-8 border-primary-container transition-all duration-200">
<div className="p-8 flex-1">
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>visibility_off</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-primary-container">Exposição</span>
</div>
<h4 className="font-headline text-3xl font-black uppercase italic text-on-surface mb-2">Costas Cedidas</h4>
<p className="font-body text-tertiary-fixed-dim text-sm max-w-md">Exposição do dorso ao tentar a tartaruga. Falha na proteção do pescoço durante o giro.</p>
</div>
<div className="bg-surface-container-high px-10 py-8 flex flex-col justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-surface-container-highest">
<span className="font-label text-[10px] font-black uppercase text-tertiary-fixed-dim mb-1">Ocorrências</span>
<span className="font-headline text-5xl font-black text-on-surface">03</span>
</div>
</div>
</section>
{/*  CTA Action  */}
<section className="mt-12">
<button className="w-full bg-primary-container text-on-primary-container font-headline font-black uppercase py-6 flex items-center justify-center gap-4 group active:scale-[0.98] transition-all">
                AGENDAR TREINO DE CORREÇÃO
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-safe bg-[#1C1B1B] dark:bg-[#0E0E0E] z-50 bg-gradient-to-b from-[#1C1B1B] to-[#131313] shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
<button className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</button>
<button className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 active:bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</button>
</nav>

    </>
  );
}
