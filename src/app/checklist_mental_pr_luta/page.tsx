import React from 'react';

export default function ChecklistMentalPrLuta() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 bg-gradient-to-r from-[#131313] via-[#1C1B1B] to-[#131313]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="Profile" data-alt="close-up portrait of a focused brazilian jiu-jitsu athlete with short hair and intense gaze in a dark studio setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYMj5ur9_0vcTiVjOyOUiFKlreLvwYnTRuo7nF_9hZYbM-66UnNanIVndWqkGg05YXUZgz0QRReN45lkwc2SFRl29conMox0OLqf1hCs3LJpSSeIHbjE8mSpiwacE_GG0LdPe3sStsAUucIoc_SadQc7lf8hDd0O7lU4Jobw2XJ1OrPVdTbnMySs8_GUSgzMi2jTy0AqOIAWlOq0I-bNa0vbcuNWidSPAAZSujapadiZOSfk19wXUB4X_Uf838JFM6kFT6cXlVC_09"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">KINETIC</h1>
</div>
<div className="text-[#E70000]">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span>
</div>
</header>
<main className="pt-24 px-6 space-y-8">
{/*  Hero Header  */}
<section className="space-y-2">
<span className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] text-[#E70000] uppercase">PROTOCOLO DE ELITE</span>
<h2 className="font-['Lexend'] font-black text-5xl leading-none uppercase italic tracking-tighter">CHECKLIST MENTAL</h2>
<div className="h-1 w-24 bg-[#E70000]"></div>
</section>
{/*  Progress Overview  */}
<section className="bg-surface-container-low p-6 space-y-4">
<div className="flex justify-between items-end">
<div className="space-y-1">
<p className="font-['Inter'] text-[10px] font-bold tracking-widest text-tertiary">STATUS ATUAL</p>
<p className="font-['Lexend'] text-3xl font-bold">60% PRONTO</p>
</div>
<div className="text-[#E70000] font-['Lexend'] font-black italic text-xl">WARRIOR MODE</div>
</div>
{/*  Performance Streak Component  */}
<div className="h-4 bg-surface-container-highest overflow-hidden">
<div className="h-full w-3/5 bg-gradient-to-r from-[#E70000] to-[#C00100] relative">
<div className="absolute inset-0 bg-white/10" style={{ /* clip-path: polygon(0 0, 100% 0, 95% 100%, 0% 100%); */ }}></div>
</div>
</div>
</section>
{/*  Checklist Bento Grid  */}
<div className="grid grid-cols-1 gap-4">
{/*  Item 1: Respiracão  */}
<div className="bg-surface-container-high p-5 flex items-center justify-between border-l-4 border-[#E70000]">
<div className="flex items-center gap-4">
<div className="text-[#E70000]">
<span className="material-symbols-outlined text-3xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>air</span>
</div>
<div>
<h3 className="font-['Lexend'] font-bold text-lg uppercase tracking-tight">RESPIRAÇÃO DIAFRAGMÁTICA</h3>
<p className="text-[11px] text-tertiary uppercase tracking-wider font-semibold">ACALMAR O SISTEMA NERVOSO</p>
</div>
</div>
<div className="w-6 h-6 border-2 border-[#E70000] flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-[#E70000]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check</span>
</div>
</div>
{/*  Item 2: Visualização  */}
<div className="bg-surface-container-high p-5 flex items-center justify-between border-l-4 border-[#E70000]">
<div className="flex items-center gap-4">
<div className="text-[#E70000]">
<span className="material-symbols-outlined text-3xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>visibility</span>
</div>
<div>
<h3 className="font-['Lexend'] font-bold text-lg uppercase tracking-tight">VISUALIZAÇÃO DE VITÓRIA</h3>
<p className="text-[11px] text-tertiary uppercase tracking-wider font-semibold">EXECUTAR A PASSAGEM PERFEITA</p>
</div>
</div>
<div className="w-6 h-6 border-2 border-[#E70000] flex items-center justify-center">
<span className="material-symbols-outlined text-sm text-[#E70000]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check</span>
</div>
</div>
{/*  Item 3: Revisão Estratégica  */}
<div className="bg-surface-container-high p-5 flex items-center justify-between border-l-4 border-surface-container-highest">
<div className="flex items-center gap-4">
<div className="text-tertiary">
<span className="material-symbols-outlined text-3xl">ads_click</span>
</div>
<div>
<h3 className="font-['Lexend'] font-bold text-lg uppercase tracking-tight text-on-surface">REVISÃO ESTRATÉGICA</h3>
<p className="text-[11px] text-tertiary uppercase tracking-wider font-semibold">PLANO A, B E DEFESA</p>
</div>
</div>
<div className="w-6 h-6 border-2 border-surface-container-highest flex items-center justify-center">
</div>
</div>
{/*  Item 4: Aquecimento Cognitivo  */}
<div className="bg-surface-container-high p-5 flex items-center justify-between border-l-4 border-surface-container-highest">
<div className="flex items-center gap-4">
<div className="text-tertiary">
<span className="material-symbols-outlined text-3xl">psychology</span>
</div>
<div>
<h3 className="font-['Lexend'] font-bold text-lg uppercase tracking-tight text-on-surface">FOCO SENSORIAL</h3>
<p className="text-[11px] text-tertiary uppercase tracking-wider font-semibold">CONECTAR COM O AMBIENTE</p>
</div>
</div>
<div className="w-6 h-6 border-2 border-surface-container-highest flex items-center justify-center">
</div>
</div>
</div>
{/*  Strategy Insight Card  */}
<section className="bg-primary-container p-6 relative overflow-hidden">
<div className="relative z-10 space-y-3">
<h4 className="font-['Lexend'] font-black italic text-2xl uppercase text-on-primary-container leading-none">MANTRA DO COMBATE</h4>
<p className="font-['Inter'] font-bold text-sm text-on-primary-container/90 uppercase tracking-tight">"A DISCIPLINA SUPERA O TALENTO QUANDO O TALENTO NÃO TEM DISCIPLINA."</p>
<div className="flex items-center gap-2 pt-2">
<span className="w-2 h-2 bg-white animate-pulse"></span>
<span className="text-[10px] font-black tracking-widest text-on-primary-container">FOCO TOTAL ATIVADO</span>
</div>
</div>
{/*  Aesthetic Background Texture  */}
<div className="absolute -right-4 -bottom-4 opacity-20">
<span className="material-symbols-outlined text-[120px] text-white">fitness_center</span>
</div>
</section>
{/*  CTA Action  */}
<button className="w-full bg-surface-container-highest border border-outline-variant py-5 font-['Lexend'] font-black text-xl uppercase italic tracking-tighter text-[#E70000] hover:bg-[#E70000] hover:text-white transition-colors duration-300">
            INICIAR COMBATE AGORA
        </button>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-4 px-2 bg-[#353534]/80 backdrop-blur-xl shadow-[0_-4px_12px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100" href="#">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100" href="#">
<span className="material-symbols-outlined">ads_click</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">TRAINING</span>
</a>
{/*  SENSEI is the active tab for mental prep/knowledge  */}
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase">SENSEI</span>
</a>
</nav>

    </>
  );
}
