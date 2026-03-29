import React from 'react';

export default function FocoPrXimaCompetiO() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] fixed top-0 z-50 flex justify-between items-center w-full px-6 py-4 border-b-0 bg-[#1C1B1B]">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer">menu</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-[#E70000] tracking-widest">Kinetic_BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest border-2 border-primary-container flex items-center justify-center overflow-hidden">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="High-contrast studio portrait of a focused Brazilian Jiu-Jitsu athlete with intense expression against a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_M6pHZxVT6ygX4PRbbYltJ2TJhpA1fcCK1OmKDyQAvjNi_L7V30pfbu8QePoCaYmPrZartFybvkHd2-37cuu3i1XNjXu5_mijDGyUuj-rOnkTqhotnIHJvzUbb4pXsb1cF2msWxSeilB0YkwvUyiPU-yvLChEV8tAlRBx-EkwEADjeAvD5Ot9xZJfaIwD-59Px2w2bB_WXH0uyzfvV53KzcjHHpiIffJPw1o5SBkRUyYpr_blGpmy4W_AeZlz2hVK-8x4HsNn8Z71"/>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-7xl mx-auto space-y-12">
{/*  Hero: Command Center Header  */}
<section className="grid md:grid-cols-2 gap-8 items-end">
<div className="space-y-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 bg-primary-container animate-pulse"></span>
<span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-tertiary">Módulo de Foco Ativo</span>
</div>
<h2 className="font-headline text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">Próxima<br/><span className="text-primary-container">Competição</span></h2>
</div>
<div className="bg-surface-container-low p-6 space-y-4 border-l-4 border-primary-container">
<div className="flex justify-between items-baseline">
<span className="font-label text-xs font-bold text-tertiary uppercase">Contagem Regressiva</span>
<span className="font-headline text-4xl font-black text-on-surface tracking-widest italic">28:14:02</span>
</div>
<div className="w-full h-2 bg-surface-container-highest overflow-hidden">
<div className="h-full w-3/4 bg-gradient-to-r from-primary-container to-inverse-primary"></div>
</div>
<p className="text-sm font-bold uppercase tracking-wider text-primary">Fase Atual: Refinamento Técnico</p>
</div>
</section>
{/*  Bento Grid: Essentials & Priorities  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Priority 1: Drill Sequence  */}
<div className="md:col-span-2 bg-surface-container-high p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 font-headline text-8xl opacity-10 font-black italic">01</div>
<div className="relative z-10 space-y-8">
<h3 className="font-headline text-3xl font-black uppercase italic tracking-tighter">Sequência de Treino Recomendada</h3>
<div className="space-y-4">
<div className="flex items-center gap-6 p-4 bg-surface-container-lowest hover:bg-surface-variant transition-colors group/item">
<span className="font-headline text-2xl font-black text-primary-container italic">01</span>
<div className="flex-1">
<h4 className="font-bold uppercase tracking-tight">Entradas de Queda (Uchi-komi)</h4>
<p className="text-xs text-tertiary uppercase font-medium">15 Minutos • Alta Intensidade</p>
</div>
<span className="material-symbols-outlined text-primary-container group-hover/item:translate-x-1 transition-transform">play_arrow</span>
</div>
<div className="flex items-center gap-6 p-4 bg-surface-container-lowest hover:bg-surface-variant transition-colors group/item">
<span className="font-headline text-2xl font-black text-primary-container italic">02</span>
<div className="flex-1">
<h4 className="font-bold uppercase tracking-tight">Transição: Passagem de Guarda X</h4>
<p className="text-xs text-tertiary uppercase font-medium">20 Minutos • Precisão Técnica</p>
</div>
<span className="material-symbols-outlined text-primary-container group-hover/item:translate-x-1 transition-transform">play_arrow</span>
</div>
<div className="flex items-center gap-6 p-4 bg-surface-container-lowest hover:bg-surface-variant transition-colors group/item">
<span className="font-headline text-2xl font-black text-primary-container italic">03</span>
<div className="flex-1">
<h4 className="font-bold uppercase tracking-tight">Escapes de Montada Sob Pressão</h4>
<p className="text-xs text-tertiary uppercase font-medium">10 Minutos • Resiliência</p>
</div>
<span className="material-symbols-outlined text-primary-container group-hover/item:translate-x-1 transition-transform">play_arrow</span>
</div>
</div>
</div>
</div>
{/*  Priority 2: Visual Priority Card  */}
<div className="bg-primary-container p-8 flex flex-col justify-between group">
<div className="space-y-4">
<span className="material-symbols-outlined text-4xl text-on-primary-container">warning</span>
<h3 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter text-on-primary-container">Prioridade Semanal</h3>
</div>
<div className="space-y-6">
<p className="text-on-primary-container font-black text-xl italic uppercase leading-tight">Manutenção de Peso e Explosão Muscular</p>
<button className="w-full bg-on-primary-container text-primary-container font-headline py-4 font-black uppercase tracking-widest text-sm hover:invert transition-all">Ver Detalhes</button>
</div>
</div>
{/*  Calendar: 4-Week Roadmap  */}
<div className="md:col-span-3 bg-surface-container-low p-8 border-t-8 border-surface-container-highest">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
<h3 className="font-headline text-3xl font-black uppercase italic tracking-tighter">Cronograma de 4 Semanas</h3>
<div className="flex gap-2">
<div className="px-3 py-1 bg-surface-container-highest text-[10px] font-bold uppercase tracking-widest text-secondary">Fase: Preparação</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="p-6 bg-surface-container-high border-b-4 border-primary-container space-y-4">
<span className="font-headline text-4xl font-black text-primary-container opacity-50 italic">W1</span>
<p className="font-bold text-xs uppercase tracking-widest">Volume e Técnica Base</p>
</div>
<div className="p-6 bg-surface-container-highest border-b-4 border-primary-container space-y-4">
<span className="font-headline text-4xl font-black text-primary-container italic">W2</span>
<p className="font-bold text-xs uppercase tracking-widest">Estratégia e Combinações</p>
<span className="inline-block px-2 py-1 bg-primary-container text-[8px] font-black uppercase tracking-tighter">Atual</span>
</div>
<div className="p-6 bg-surface-container-high opacity-50 space-y-4">
<span className="font-headline text-4xl font-black text-tertiary italic">W3</span>
<p className="font-bold text-xs uppercase tracking-widest">Ajuste de Peso &amp; Polimento</p>
</div>
<div className="p-6 bg-surface-container-high opacity-50 space-y-4">
<span className="font-headline text-4xl font-black text-tertiary italic">W4</span>
<p className="font-bold text-xs uppercase tracking-widest">Descanso &amp; Mentalidade</p>
</div>
</div>
</div>
</section>
{/*  Performance Metrics Section  */}
<section className="grid md:grid-cols-2 gap-12 items-center py-12">
<div className="space-y-8">
<h3 className="font-headline text-4xl font-black uppercase tracking-tighter">Status do <span className="text-secondary">Atleta</span></h3>
<div className="space-y-6">
<div className="space-y-2">
<div className="flex justify-between font-label text-xs font-bold uppercase tracking-widest">
<span>Condicionamento Cardíaco</span>
<span>92%</span>
</div>
<div className="h-1 w-full bg-surface-container-highest">
<div className="h-full w-[92%] bg-secondary"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label text-xs font-bold uppercase tracking-widest">
<span>Taxa de Finalização (Drills)</span>
<span>78%</span>
</div>
<div className="h-1 w-full bg-surface-container-highest">
<div className="h-full w-[78%] bg-secondary"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between font-label text-xs font-bold uppercase tracking-widest">
<span>Foco Mental</span>
<span>100%</span>
</div>
<div className="h-1 w-full bg-surface-container-highest">
<div className="h-full w-full bg-secondary shadow-[0_0_15px_rgba(189,194,255,0.4)]"></div>
</div>
</div>
</div>
</div>
<div className="relative aspect-video bg-surface-container-low overflow-hidden group">
<img alt="Training Session Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Dramatic high-contrast photo of a gritty BJJ gym interior with light streaming through industrial windows onto a blue mat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk8V6Dw-omTHOmVj0C5iuy0QhNfHfEQSeVyrE4OHlgRLQJCcoDZcjigXqyIs8AkPjg002p9udKSZQT-Flzi_wpsrOoKB2-fLDxaW7FuDkS7MNMkRmWKRYOCB5CchYBbDvUi-GMtJgULNKooLX6C4m2vPdfdde58BgMFWQVpAsHE71K6ADbS6APNdV0holNqfG8rpRutclWircd_UsmJmV0eWqfs1XRPdcuNCfrsf3CAB-Njt0_ufNoxK2QLAkbRw9BWr7eutQRuJYi"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent flex items-end p-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
<span className="font-headline font-black uppercase italic text-xl tracking-tighter">Assistir Análise de Luta</span>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-[#1C1B1B]/80 backdrop-blur-xl z-50">
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</div>
<div className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined">school</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</div>
</nav>

    </>
  );
}
