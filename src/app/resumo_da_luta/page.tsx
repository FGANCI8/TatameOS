import React from 'react';

export default function ResumoDaLuta() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="flex justify-between items-center px-6 py-4 w-full bg-[#131313] fixed top-0 z-50">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-[#E70000] text-2xl" data-icon="sports_martial_arts">sports_martial_arts</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-[#E70000] text-xl">WARRIOR ANALYTICS</h1>
</div>
<button className="text-[#E70000] hover:bg-[#1C1B1B] p-2 transition-colors active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="close">close</span>
</button>
</header>
<div className="bg-[#1C1B1B] h-[2px] w-full fixed top-[64px] z-50"></div>
<main className="pt-24 px-4 max-w-5xl mx-auto space-y-8">
{/*  Victory Banner & Opponent Hero  */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-1 items-stretch">
<div className="md:col-span-8 bg-surface-container-low p-8 flex flex-col justify-between border-l-8 border-primary-container">
<div>
<p className="font-label text-xs font-bold tracking-[0.2em] text-secondary mb-2 uppercase">FINAL DA CATEGORIA - PESO LEVE</p>
<h2 className="font-headline text-5xl md:text-7xl font-black italic uppercase leading-none text-on-surface mb-6">VITÓRIA POR<br/><span className="text-primary-container">FINALIZAÇÃO</span></h2>
</div>
<div className="flex items-center gap-6 mt-8">
<div className="relative w-20 h-20 bg-surface-container-highest">
<img alt="" className="w-full h-full object-cover grayscale contrast-125" data-alt="close-up intense portrait of a focused jiu-jitsu athlete with sweat on face, dramatic low-key lighting, dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Ver6CZYxRJdowBuRg_uEu9wHTWtlie67BpFX8mqOYzaJuhtRZXBiIjR-2E0lvWVH77xvRsv_hhH4gcIlh7BDdq4wtzG88-j3mLWaTZ4ov_qGluKH4rB1ACHNGzlocdCa0vEaMnQ3OiSA_hyHwnbqntVY1w4J6_1r7UbPUjfSrU2x3F7sfTycuUTjanBZnqQGrINFOewHalKtUYerDLjYq8LYQBar-qvV5YwZR7TME8SChNg09eyfnc8N40ajsT2qpwWBSvQB8l3X"/>
</div>
<div>
<p className="font-label text-[10px] font-black text-tertiary-fixed-dim tracking-widest uppercase mb-1">ADVERSÁRIO</p>
<p className="font-headline text-2xl font-black uppercase tracking-tighter">MARCUS "THE SHARK" SILVA</p>
<p className="text-secondary font-bold text-sm">GRACIE BARRA • FAIXA PRETA</p>
</div>
</div>
</div>
<div className="md:col-span-4 bg-primary-container p-8 flex flex-col justify-center items-center text-center">
<p className="font-label text-xs font-bold text-on-primary-container/80 tracking-widest mb-4 uppercase">TEMPO DE LUTA</p>
<p className="font-headline text-6xl font-black text-on-primary-container">04:12</p>
<div className="mt-8 pt-8 border-t border-on-primary-container/20 w-full">
<p className="font-label text-xs font-bold text-on-primary-container/80 tracking-widest mb-2 uppercase">MÉTODO</p>
<p className="font-headline text-2xl font-black text-on-primary-container uppercase italic">ARM-LOCK</p>
</div>
</div>
</section>
{/*  Scoreboard Grid  */}
<section className="grid grid-cols-2 md:grid-cols-4 gap-1">
<div className="bg-surface-container p-6">
<p className="font-label text-[10px] font-black text-tertiary uppercase tracking-[0.2em] mb-4">PONTOS</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-5xl font-black text-on-surface">08</span>
<span className="text-tertiary-fixed-dim font-bold">VS 02</span>
</div>
</div>
<div className="bg-surface-container p-6">
<p className="font-label text-[10px] font-black text-tertiary uppercase tracking-[0.2em] mb-4">VANTAGENS</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-5xl font-black text-secondary">03</span>
<span className="text-tertiary-fixed-dim font-bold">VS 01</span>
</div>
</div>
<div className="bg-surface-container p-6">
<p className="font-label text-[10px] font-black text-tertiary uppercase tracking-[0.2em] mb-4">PUNIÇÕES</p>
<div className="flex items-baseline gap-2">
<span className="font-headline text-5xl font-black text-error">00</span>
<span className="text-tertiary-fixed-dim font-bold">VS 01</span>
</div>
</div>
<div className="bg-surface-container p-6 flex flex-col justify-center kinetic-gradient">
<p className="font-label text-[10px] font-black text-white/80 uppercase tracking-[0.2em] mb-2">POSIÇÃO FINAL</p>
<p className="font-headline text-xl font-black text-white uppercase italic">MONTADA</p>
</div>
</section>
{/*  Bento Analysis Section  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-1">
{/*  Decisive Position Image  */}
<div className="md:col-span-2 relative h-80 bg-surface-container-low overflow-hidden group">
<img alt="" className="w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="cinematic shot of two jiu-jitsu practitioners grappling on mats, high contrast black and white, dramatic lighting, visible tension and movement" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnp9iLX3dI4Sr6RspUGilwHAwKWXuQidmVZOiyaIyaVYdd1N8UBWm0vPuaucF1imLXacfqdqNCL_N2rcuNit2os4moknjE2Nqsa-d8s-MS-r0CdyTVGyNIPFcnGUT45M1w-Q1YAfhcqevZmuolUD3XnJLKDuUHIBeEkQYjRH6U7YygOUQDaD9ZIc4EO_lXOwUjUFwfGbrHuvjBNEu1Io8kzNP3qc0c1z31YhBUUM-Q3nAAeO1NLV6DYUFeQpcBah0SjSqTFXESCY6j"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<span className="inline-block bg-primary-container px-3 py-1 text-[10px] font-black text-on-primary-container tracking-widest uppercase mb-4">POSIÇÃO DECISIVA</span>
<h3 className="font-headline text-3xl font-black uppercase italic tracking-tighter text-on-surface">CONTROLE LATERAL PARA MONTADA</h3>
<p className="text-tertiary text-sm mt-2 max-w-md">Transição executada aos 03:45, gerando a abertura necessária para o ataque de braço final.</p>
</div>
</div>
{/*  Performance Metrics  */}
<div className="bg-surface-container-high p-8 flex flex-col justify-between">
<h3 className="font-headline text-lg font-black uppercase italic text-primary-container mb-6">MÉTRICAS DE PERFORMANCE</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] font-black tracking-widest uppercase mb-2">
<span>PRECISÃO TÉCNICA</span>
<span className="text-secondary">88%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-secondary" style={{ /* width: 88% */ }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-black tracking-widest uppercase mb-2">
<span>AGRESSIVIDADE</span>
<span className="text-primary-container">94%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full kinetic-gradient" style={{ /* width: 94% */ }}></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-black tracking-widest uppercase mb-2">
<span>DEFESA DE QUEDAS</span>
<span className="text-on-surface">100%</span>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-on-surface" style={{ /* width: 100% */ }}></div>
</div>
</div>
</div>
<div className="mt-8">
<button className="w-full py-4 border border-outline-variant font-label text-xs font-black uppercase tracking-[0.2em] hover:bg-surface-container-highest transition-colors active:scale-[0.98]">
                        VER ANÁLISE COMPLETA
                    </button>
</div>
</div>
</section>
{/*  Fight Timeline  */}
<section className="space-y-6">
<div className="flex items-center gap-4">
<h3 className="font-headline text-2xl font-black uppercase italic tracking-tighter">LINHA DO TEMPO</h3>
<div className="h-[2px] flex-grow bg-surface-container-highest"></div>
</div>
<div className="relative space-y-1">
{/*  Timeline Event 1  */}
<div className="group flex items-center bg-surface-container-low p-4 hover:bg-surface-container-high transition-colors">
<div className="w-20 font-headline font-black text-primary-container text-xl italic italic">00:15</div>
<div className="w-8 flex flex-col items-center">
<div className="w-2 h-2 bg-primary-container"></div>
<div className="w-[1px] h-10 bg-surface-container-highest group-last:hidden"></div>
</div>
<div className="flex-grow pl-4">
<p className="font-label text-[10px] font-black text-tertiary uppercase tracking-widest">QUEDA EXECUTADA</p>
<p className="font-body font-bold text-on-surface">Single Leg com sucesso (+2 pts)</p>
</div>
<span className="material-symbols-outlined text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" data-icon="videocam">videocam</span>
</div>
{/*  Timeline Event 2  */}
<div className="group flex items-center bg-surface-container-low p-4 hover:bg-surface-container-high transition-colors">
<div className="w-20 font-headline font-black text-tertiary text-xl italic italic">01:45</div>
<div className="w-8 flex flex-col items-center">
<div className="w-2 h-2 bg-secondary"></div>
<div className="w-[1px] h-10 bg-surface-container-highest group-last:hidden"></div>
</div>
<div className="flex-grow pl-4">
<p className="font-label text-[10px] font-black text-tertiary uppercase tracking-widest">PASSAGEM DE GUARDA</p>
<p className="font-body font-bold text-on-surface">Pressão no Toreando (+3 pts)</p>
</div>
<span className="material-symbols-outlined text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" data-icon="videocam">videocam</span>
</div>
{/*  Timeline Event 3  */}
<div className="group flex items-center bg-surface-container-low p-4 hover:bg-surface-container-high transition-colors">
<div className="w-20 font-headline font-black text-tertiary text-xl italic italic">03:30</div>
<div className="w-8 flex flex-col items-center">
<div className="w-2 h-2 bg-secondary"></div>
<div className="w-[1px] h-10 bg-surface-container-highest group-last:hidden"></div>
</div>
<div className="flex-grow pl-4">
<p className="font-label text-[10px] font-black text-tertiary uppercase tracking-widest">ESTABILIZAÇÃO</p>
<p className="font-body font-bold text-on-surface">Montada completa (+3 pts)</p>
</div>
<span className="material-symbols-outlined text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" data-icon="videocam">videocam</span>
</div>
{/*  Timeline Event 4  */}
<div className="group flex items-center bg-surface-container-high p-6 border-l-4 border-primary-container">
<div className="w-20 font-headline font-black text-primary-container text-2xl italic">04:12</div>
<div className="w-8 flex flex-col items-center">
<div className="w-3 h-3 bg-primary-container"></div>
</div>
<div className="flex-grow pl-4">
<p className="font-label text-[10px] font-black text-primary-container uppercase tracking-widest">FINALIZAÇÃO</p>
<p className="font-headline text-xl font-black text-on-surface uppercase italic">SUBMISSION: ARM-LOCK FROM MOUNT</p>
</div>
<span className="material-symbols-outlined text-primary-container" data-icon="stars" style={{ /* font-variation-settings: 'FILL' 1; */ }}>stars</span>
</div>
</div>
</section>
{/*  Action Bar  */}
<section className="flex flex-col md:flex-row gap-4 pt-12">
<button className="flex-1 bg-primary-container text-on-primary-container font-headline font-black text-sm uppercase tracking-[0.3em] py-5 active:scale-95 transition-transform">
                COMPARTILHAR VITÓRIA
            </button>
<button className="flex-1 bg-surface-container-highest text-on-surface font-headline font-black text-sm uppercase tracking-[0.3em] py-5 active:scale-95 transition-transform flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-sm" data-icon="download">download</span> EXPORTAR PDF
            </button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-2 py-4 bg-[#353534]/80 backdrop-blur-md z-50 shadow-[0_-4px_20px_rgba(189,194,255,0.06)]">
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined mb-1" data-icon="history">history</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">HISTORY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="sports_kabaddi">sports_kabaddi</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">FIGHTS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="insights">insights</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">PERFORMANCE</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="error_outline">error_outline</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">ERRORS</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#E70000]/10" href="#">
<span className="material-symbols-outlined mb-1" data-icon="military_tech">military_tech</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest">MEDALS</span>
</a>
</nav>

    </>
  );
}
