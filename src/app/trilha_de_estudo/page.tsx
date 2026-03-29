import React from 'react';

export default function TrilhaDeEstudo() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu-Jitsu athlete with a focused expression, dark studio lighting with red rim light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-HWmsSd7E8GFpb1_0aZxZOc4xkwUHMYfRLiN2kPV2aXkyXY_oXqry1AKqU5wMQUFcM42Z2wtDWbYg0vumSCYlYjh2VAtFKCou2Ph2WWQSFWLrLvDA4k5DGS5fLOhtQTlnJC7e3QoeSK5piK1ONmQdaGfimMmQh0XKA1eQrVC96CGhcY3Q0Qg0ek52m0x4WaZ3HgZbaLZC5EcmAuYLBeXxy697TXv8YaLL9B7a9orkkbhRAf2XtPVH22gGoTZx5pJQWN9UFFSVYXe3"/>
</div>
<span className="font-headline font-black uppercase tracking-tighter text-2xl italic text-[#E70000]">KINETIC BJJ</span>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-[#353534] transition-colors active:scale-95 duration-100 text-[#C6C6C7]">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
{/*  Hero Section: Progress Overview  */}
<section className="mb-12">
<p className="font-label text-xs uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-2">Sua Evolução Técnica</p>
<h1 className="font-headline text-5xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">Trilha do<br/><span className="text-primary-container">Guarda Aberta</span></h1>
<div className="bg-surface-container-low p-6 border-l-4 border-primary-container relative overflow-hidden">
<div className="flex justify-between items-end mb-4">
<div>
<span className="block font-headline text-4xl font-bold leading-none">65%</span>
<span className="font-label text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">Módulo Completo</span>
</div>
<div className="text-right">
<span className="block font-label text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">Próximo Nível</span>
<span className="block font-headline text-lg font-bold">FAIXA AZUL II</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="h-4 w-full bg-surface-container-highest overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary-container to-inverse-primary w-[65%] relative">
<div className="absolute inset-0 bg-white/10" style={{ /* background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); background-size: 200% 100%; */ }}></div>
</div>
</div>
</div>
</section>
{/*  Vertical Learning Path  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-8">
<h2 className="font-headline text-xl font-bold uppercase tracking-widest mb-10 flex items-center gap-3">
<span className="w-8 h-[2px] bg-primary-container"></span>
                    Checkpoints da Jornada
                </h2>
<div className="space-y-0 relative">
{/*  Path Connector Line  */}
<div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-surface-container-highest"></div>
{/*  Step 1: Completed  */}
<div className="relative pl-16 pb-12">
<div className="absolute left-0 w-12 h-12 bg-primary-container flex items-center justify-center z-10">
<span className="material-symbols-outlined text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div className="bg-surface-container p-6 hover:bg-surface-container-high transition-colors group">
<div className="flex justify-between items-start mb-2">
<span className="font-label text-[10px] text-primary-container font-bold uppercase tracking-widest">Concluído</span>
<span className="font-headline text-sm font-bold opacity-30">01</span>
</div>
<h3 className="font-headline text-lg font-bold uppercase mb-2">Conceitos de Alavanca</h3>
<p className="text-tertiary-fixed-dim text-sm leading-relaxed">Fundamentos de biomecânica aplicados ao controle de distância e desequilíbrio.</p>
</div>
</div>
{/*  Step 2: Current  */}
<div className="relative pl-16 pb-12">
<div className="absolute left-0 w-12 h-12 bg-white flex items-center justify-center z-10 ring-4 ring-primary-container">
<span className="font-headline text-black font-black">02</span>
</div>
<div className="bg-surface-container-high p-6 border-2 border-primary-container">
<div className="flex justify-between items-start mb-2">
<span className="font-label text-[10px] text-primary-container font-bold uppercase tracking-widest">Em Progresso</span>
<span className="font-headline text-sm font-bold opacity-50">ATUAL</span>
</div>
<h3 className="font-headline text-xl font-bold uppercase mb-3">Retenção de Guarda De La Riva</h3>
<p className="text-on-surface text-sm leading-relaxed mb-6">Dominando os ganchos e a transição para raspagens de base.</p>
<button className="w-full bg-primary-container text-on-primary-container font-headline font-bold text-sm py-3 px-6 uppercase tracking-widest active:scale-95 duration-100">
                                Continuar Treino
                            </button>
</div>
</div>
{/*  Step 3: Locked  */}
<div className="relative pl-16 pb-12 opacity-40">
<div className="absolute left-0 w-12 h-12 bg-surface-container-highest flex items-center justify-center z-10">
<span className="material-symbols-outlined text-tertiary-fixed-dim">lock</span>
</div>
<div className="bg-surface-container-low p-6">
<div className="flex justify-between items-start mb-2">
<span className="font-label text-[10px] uppercase tracking-widest">Bloqueado</span>
<span className="font-headline text-sm font-bold opacity-30">03</span>
</div>
<h3 className="font-headline text-lg font-bold uppercase mb-2">Transição para Single Leg X</h3>
<p className="text-tertiary-fixed-dim text-sm leading-relaxed">Ataques sistemáticos partindo da guarda aberta para quedas dinâmicas.</p>
</div>
</div>
{/*  Step 4: Locked  */}
<div className="relative pl-16">
<div className="absolute left-0 w-12 h-12 bg-surface-container-highest flex items-center justify-center z-10">
<span className="material-symbols-outlined text-tertiary-fixed-dim">lock</span>
</div>
<div className="bg-surface-container-low p-6 opacity-20">
<h3 className="font-headline text-lg font-bold uppercase mb-2">Finalizações de Triângulo</h3>
</div>
</div>
</div>
</div>
{/*  Sidebar / Recommendations  */}
<div className="md:col-span-4 space-y-8">
<div>
<h2 className="font-headline text-sm font-bold uppercase tracking-[0.2em] mb-6 text-primary-container">Recomendações Sensei</h2>
<div className="space-y-4">
{/*  Card Disponível  */}
<div className="bg-surface-container-low relative aspect-video overflow-hidden group">
<img className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-500" data-alt="Two BJJ athletes grappling on blue mats, focus on hand grip technique, high contrast cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfi_ks7Ysbb3W9bBOGomLSoipkZK-yJGVnE0C8Z-J2OuTHjqi38h5Bi-H_xk7j4N75dMHs3xlojUBStTgIRX2vu1tyOCx1HeIBZJJNPN1Q_drYldTeMP1z31kPnqayNkQlpqEhExCeCvqJRPFh3cwLQ9_TSDCeX8ozf6VI_q9jv_BXcxnR7-kqIbHmp9CRg3QgN2kJffwgme8XgVN_DBxYX2aOI-Vjxnz3BBNv8Abfc8CPw_JSTQ_N9fVLv1hanWnxYETI3jDbmQwY"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4">
<span className="inline-block bg-secondary text-on-secondary text-[8px] font-bold px-2 py-0.5 uppercase tracking-widest mb-2">Disponível</span>
<h4 className="font-headline text-sm font-bold uppercase">Drill: Reposição de Quadril</h4>
</div>
</div>
{/*  Card Bloqueado  */}
<div className="bg-surface-container-lowest border border-outline-variant/20 p-4 flex gap-4 items-center opacity-50 grayscale">
<div className="w-16 h-16 bg-surface-container-highest flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined">lock</span>
</div>
<div>
<h4 className="font-headline text-xs font-bold uppercase leading-tight">Berimbolo Pro: Avançado</h4>
<span className="font-label text-[9px] text-tertiary-fixed-dim uppercase tracking-tighter">Requer Nível 15</span>
</div>
</div>
<div className="bg-surface-container-lowest border border-outline-variant/20 p-4 flex gap-4 items-center opacity-50 grayscale">
<div className="w-16 h-16 bg-surface-container-highest flex-shrink-0 flex items-center justify-center">
<span className="material-symbols-outlined">lock</span>
</div>
<div>
<h4 className="font-headline text-xs font-bold uppercase leading-tight">Chave de Pé Estética</h4>
<span className="font-label text-[9px] text-tertiary-fixed-dim uppercase tracking-tighter">Requer Nível 18</span>
</div>
</div>
</div>
</div>
{/*  Stats Monolith  */}
<div className="bg-surface-container-highest p-6 space-y-6">
<div>
<span className="font-label text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">Tempo Total de Mat</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-4xl font-black">124</span>
<span className="font-headline text-sm font-bold text-primary-container">HORAS</span>
</div>
</div>
<div className="h-[1px] bg-outline-variant/20 w-full"></div>
<div className="grid grid-cols-2 gap-4">
<div>
<span className="font-label text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">Técnicas</span>
<span className="block font-headline text-xl font-bold">42/150</span>
</div>
<div>
<span className="font-label text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">Sequência</span>
<span className="block font-headline text-xl font-bold">12 DIAS</span>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-4 bg-[#131313]/80 backdrop-blur-xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined">video_library</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined">school</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
