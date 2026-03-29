import React from 'react';

export default function RegistroDeTreino() {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>person</span>
</div>
<h1 className="font-headline font-black uppercase tracking-tighter text-[#E70000] text-2xl">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4">
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main className="pt-24 pb-32 px-4 md:px-8 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Left Column: New Entry Form  */}
<section className="lg:col-span-7 space-y-8">
<header>
<p className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary-fixed-dim mb-1">DATA TELEMETRY</p>
<h2 className="font-headline text-4xl font-black uppercase tracking-tighter leading-none italic">NOVA SESSÃO</h2>
</header>
<form className="space-y-6 bg-surface-container-low p-6 md:p-8">
{/*  Class Type Selector  */}
<div className="space-y-3">
<label className="font-label text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">TIPO DE AULA</label>
<div className="grid grid-cols-3 gap-2">
<button className="border-2 border-primary-container bg-primary-container/10 py-4 flex flex-col items-center justify-center gap-2 group transition-all" type="button">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span className="font-label text-[10px] font-black uppercase tracking-wider text-on-surface">GI (KIMONO)</span>
</button>
<button className="border-2 border-surface-container-highest bg-surface-container-lowest py-4 flex flex-col items-center justify-center gap-2 group hover:border-outline-variant transition-all" type="button">
<span className="material-symbols-outlined text-tertiary-fixed-dim">close</span>
<span className="font-label text-[10px] font-black uppercase tracking-wider text-tertiary-fixed-dim">NO-GI</span>
</button>
<button className="border-2 border-surface-container-highest bg-surface-container-lowest py-4 flex flex-col items-center justify-center gap-2 group hover:border-outline-variant transition-all" type="button">
<span className="material-symbols-outlined text-tertiary-fixed-dim">fitness_center</span>
<span className="font-label text-[10px] font-black uppercase tracking-wider text-tertiary-fixed-dim">DRILLS</span>
</button>
</div>
</div>
{/*  Main Technique  */}
<div className="space-y-3">
<label className="font-label text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">TÉCNICA PRINCIPAL</label>
<div className="relative">
<input className="w-full bg-surface-container-lowest border-0 border-b-2 border-surface-container-highest focus:border-secondary focus:ring-0 px-4 py-4 font-body text-on-surface placeholder:text-surface-container-highest transition-colors" placeholder="Ex: Passagem de guarda de lapela" type="text"/>
</div>
</div>
{/*  Effort Level  */}
<div className="space-y-6 py-4">
<div className="flex justify-between items-end">
<label className="font-label text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">NÍVEL DE ESFORÇO</label>
<span className="font-headline text-3xl font-black text-primary-container italic">08<span className="text-xs uppercase italic ml-1">/10</span></span>
</div>
<div className="relative px-2">
<input className="w-full" max="10" min="1" type="range" value="8"/>
<div className="flex justify-between mt-2 text-[10px] font-black text-surface-container-highest uppercase tracking-widest">
<span>Recuperação</span>
<span>Intensidade Máxima</span>
</div>
</div>
</div>
{/*  Training Notes  */}
<div className="space-y-3">
<label className="font-label text-xs font-bold uppercase tracking-widest text-tertiary-fixed-dim">NOTAS DO TREINO</label>
<textarea className="w-full bg-surface-container-lowest border-0 border-b-2 border-surface-container-highest focus:border-secondary focus:ring-0 px-4 py-4 font-body text-on-surface placeholder:text-surface-container-highest resize-none transition-colors" placeholder="Detalhes da sessão, sparrings notáveis, ajustes técnicos..." rows="4"></textarea>
</div>
{/*  Submit Button  */}
<button className="w-full bg-gradient-to-br from-primary-container to-inverse-primary py-6 flex items-center justify-center gap-3 active:scale-95 duration-100 group" type="submit">
<span className="font-headline text-lg font-black uppercase tracking-widest text-on-primary-container">REGISTRAR PERFORMANCE</span>
<span className="material-symbols-outlined text-on-primary-container group-hover:translate-x-1 transition-transform">bolt</span>
</button>
</form>
</section>
{/*  Right Column: Recent History & Status  */}
<aside className="lg:col-span-5 space-y-8">
<header>
<p className="font-label text-[10px] uppercase tracking-[0.3em] text-tertiary-fixed-dim mb-1">CHRONOLOGICAL</p>
<h2 className="font-headline text-4xl font-black uppercase tracking-tighter leading-none italic">HISTÓRICO</h2>
</header>
<div className="space-y-4">
{/*  History Item 1  */}
<div className="bg-surface-container p-5 flex gap-6 items-start">
<div className="flex flex-col items-center">
<span className="font-headline text-2xl font-black italic leading-none">12</span>
<span className="font-label text-[10px] font-bold uppercase text-tertiary-fixed-dim">OUT</span>
</div>
<div className="flex-1 space-y-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-lg font-black uppercase leading-none">NO-GI SPARRING</h3>
<span className="bg-surface-container-highest text-[10px] px-2 py-0.5 font-black uppercase tracking-widest">LVL 09</span>
</div>
<p className="text-sm text-tertiary-fixed-dim leading-snug">Foco em finalizações da guarda fechada. O cansaço pesou no final.</p>
<div className="flex gap-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">timer</span>
<span className="text-[10px] font-black text-secondary uppercase tracking-widest">90 MIN</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">fitness_center</span>
<span className="text-[10px] font-black text-secondary uppercase tracking-widest">ARMLOCKS</span>
</div>
</div>
</div>
</div>
{/*  History Item 2  */}
<div className="bg-surface-container p-5 flex gap-6 items-start opacity-70">
<div className="flex flex-col items-center">
<span className="font-headline text-2xl font-black italic leading-none text-tertiary-fixed-dim">10</span>
<span className="font-label text-[10px] font-bold uppercase text-tertiary-fixed-dim">OUT</span>
</div>
<div className="flex-1 space-y-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-lg font-black uppercase leading-none text-tertiary-fixed-dim">GI TÉCNICO</h3>
<span className="bg-surface-container-highest text-[10px] px-2 py-0.5 font-black uppercase tracking-widest text-tertiary-fixed-dim">LVL 05</span>
</div>
<p className="text-sm text-tertiary-fixed-dim leading-snug italic">Estudo de berimbolo e transição para as costas.</p>
<div className="flex gap-4">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-tertiary-fixed-dim">timer</span>
<span className="text-[10px] font-black text-tertiary-fixed-dim uppercase tracking-widest">60 MIN</span>
</div>
</div>
</div>
</div>
{/*  History Item 3  */}
<div className="bg-surface-container p-5 flex gap-6 items-start opacity-50">
<div className="flex flex-col items-center">
<span className="font-headline text-2xl font-black italic leading-none text-tertiary-fixed-dim">08</span>
<span className="font-label text-[10px] font-bold uppercase text-tertiary-fixed-dim">OUT</span>
</div>
<div className="flex-1 space-y-2">
<div className="flex justify-between items-start">
<h3 className="font-headline text-lg font-black uppercase leading-none text-tertiary-fixed-dim">DRILLS INTENSOS</h3>
<span className="bg-surface-container-highest text-[10px] px-2 py-0.5 font-black uppercase tracking-widest text-tertiary-fixed-dim">LVL 07</span>
</div>
<p className="text-sm text-tertiary-fixed-dim leading-snug italic">Repetições constantes de queda (double leg).</p>
</div>
</div>
</div>
{/*  Performance Streak / Visual Decoration  */}
<div className="bg-surface-container-highest p-8 relative overflow-hidden">
<div className="relative z-10">
<p className="font-label text-[10px] font-bold uppercase tracking-[0.3em] text-on-secondary-container mb-4">CONSISTENCY ENGINE</p>
<div className="flex items-baseline gap-2 mb-2">
<span className="font-headline text-6xl font-black italic text-on-surface">14</span>
<span className="font-headline text-xl font-black uppercase text-secondary">DIAS SEGUIDOS</span>
</div>
<div className="h-2 w-full bg-surface-container-low mt-4">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-3/4"></div>
</div>
</div>
{/*  Abstract BG Shape  */}
<div className="absolute -right-12 -bottom-12 w-48 h-48 bg-primary-container/10 rotate-45"></div>
</div>
</aside>
</main>
{/*  Bottom Navigation Bar (Mobile)  */}
<nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-4 bg-[#131313]/80 backdrop-blur-xl z-50">
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60">
<span className="material-symbols-outlined">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60">
<span className="material-symbols-outlined">video_library</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60">
<span className="material-symbols-outlined">school</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</div>
</nav>
{/*  Sidebar / Top Nav Cluster for Desktop  */}
<div className="hidden md:flex fixed right-8 top-0 h-16 items-center gap-8 z-[60]">
<nav className="flex gap-6 font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">
<a className="text-[#C6C6C7] hover:text-white transition-all" href="#">Início</a>
<a className="text-[#C6C6C7] hover:text-white transition-all" href="#">Biblioteca</a>
<a className="text-[#C6C6C7] hover:text-white transition-all" href="#">Trilha</a>
<a className="text-[#E70000]" href="#">Treino</a>
<a className="text-[#C6C6C7] hover:text-white transition-all" href="#">Sensei</a>
</nav>
</div>
{/*  Visual Texture / Noise Layer (Optional Aesthetic Addition)  */}
<div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100]" data-alt="Subtle fine grain texture overlaying the entire interface to create a raw industrial feel" style={{ /* background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvRpg3MxsDxetdcXZMu4mZQ0r8OMlMP58_xX3zmDynsZBVjF5xuDLp54GLScEtvOHWYj_Wvi1uoQgfedM9V2ykhum8ozLPeyyek8aSFNnL5675pbiMSWFMkct77PdRsI5frRPyudjpJoyNneN2Oqm0mtz43NT0Fnq3Dao9ktOSkYhsZJkBwJfeXRTy7wjPARfmzA3yQ-ylFtjMdJzoCrpUnCGlerMlB1vjk2gMpCruAiEg9Us4sKCOAVpBu2AdeNCdDPlSpZJSGAdZ'); */ }}></div>

    </>
  );
}
