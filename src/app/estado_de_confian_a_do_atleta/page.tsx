import React from 'react';

export default function EstadoDeConfianADoAtleta() {
  return (
    <>
      
{/*  TopAppBar Shell  */}
<header className="fixed top-0 w-full z-50 flex justify-between items-center px-6 h-16 border-b-0 bg-gradient-to-r from-[#131313] via-[#1C1B1B] to-[#131313]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Intense close up of a focused Brazilian Jiu Jitsu athlete with sweat on face and determined look in dark lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLAvfoAPzDcisK0BLNulwZiS843cLD5ohDzLhARYtftA7G-NkZ34-_iTo3uoI03PSOEeVq6UVT0YGzcbnWxw5bYP7X8MBGhQevjCpSp5cwUq5Z2ul5sNtrChZtqEe4yFMKxiR5QuZXyl8E8A93777-PSf3hh1FCWPFw-6ziMA1N6POHeZ2hs4xX-D29noXhPcxmj_TS4ba_s4DTLKuLIlWA7mLf2h3Nd0ISDVPLO1zla6z2PWJkL52rV4w2K1oLGo0dpJKXBGKSL5F"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">KINETIC</h1>
</div>
<button className="text-[#E70000] transition-transform active:scale-95 duration-75">
<span className="material-symbols-outlined text-3xl">bolt</span>
</button>
</header>
<main className="pt-20 pb-28 px-4 max-w-md mx-auto min-h-screen">
{/*  Hero Header  */}
<section className="mt-4 mb-8">
<p className="font-label text-secondary uppercase tracking-[0.2em] text-[10px] mb-1">Status Psicológico</p>
<h2 className="font-headline font-black text-4xl leading-none uppercase tracking-tighter">ESTADO DE <span className="text-primary-container">CONFIANÇA</span></h2>
</section>
{/*  Main Confidence Meter (Bento Style)  */}
<div className="grid grid-cols-6 gap-2 mb-8">
<div className="col-span-6 bg-surface-container-high p-6 relative overflow-hidden">
<div className="flex justify-between items-end mb-4 relative z-10">
<div>
<span className="font-headline font-black text-6xl text-on-surface">92</span>
<span className="font-headline font-bold text-xl text-primary-container">%</span>
<p className="font-label text-xs uppercase tracking-widest text-tertiary-fixed-dim">Índice de Prontidão</p>
</div>
<div className="text-right">
<p className="text-[10px] font-bold text-secondary uppercase tracking-widest mb-1">Status</p>
<span className="bg-primary-container text-on-primary-container px-2 py-1 text-[10px] font-black uppercase">Elite</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="h-2 bg-surface-container-highest w-full mb-2">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-[92%]"></div>
</div>
<div className="absolute -right-4 -bottom-4 opacity-10">
<span className="material-symbols-outlined text-9xl">psychology</span>
</div>
</div>
{/*  Kinetic Meters Grid  */}
<div className="col-span-3 bg-surface-container-low p-4">
<span className="material-symbols-outlined text-secondary mb-2">electric_bolt</span>
<h3 className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim mb-3">Tensão Muscular</h3>
<div className="flex items-end gap-1 h-12">
<div className="w-full bg-primary-container h-[40%]"></div>
<div className="w-full bg-primary-container h-[35%]"></div>
<div className="w-full bg-primary-container h-[45%]"></div>
<div className="w-full bg-surface-container-highest h-[10%]"></div>
<div className="w-full bg-surface-container-highest h-[10%]"></div>
</div>
<p className="font-headline font-black text-xl mt-2">BAIXA</p>
</div>
<div className="col-span-3 bg-surface-container-low p-4">
<span className="material-symbols-outlined text-[#E70000] mb-2">speed</span>
<h3 className="font-label font-bold text-[10px] uppercase tracking-widest text-tertiary-fixed-dim mb-3">Nível de Foco</h3>
<div className="relative h-12 flex items-center justify-center">
<div className="absolute inset-0 border-4 border-surface-container-highest border-t-primary-container rounded-full rotate-45"></div>
<span className="font-headline font-black text-xl text-on-surface">MAX</span>
</div>
<p className="font-headline font-black text-xl mt-2">ESTÁVEL</p>
</div>
<div className="col-span-6 bg-surface-container p-6 border-l-4 border-primary-container">
<h3 className="font-headline font-black text-lg uppercase tracking-tight mb-2">Insight do Sensei</h3>
<p className="text-tertiary-fixed-dim text-sm leading-relaxed">
                    "Seu ritmo cardíaco basal indica calma absoluta. A tensão nos trapézios está mínima. Você está no 'Estado de Fluxo'. O tatame é seu laboratório hoje."
                </p>
</div>
</div>
{/*  Metric Details List  */}
<section className="space-y-3">
<h4 className="font-label font-bold text-[10px] uppercase tracking-[0.3em] text-tertiary-fixed-dim mb-4">Métricas de Combate</h4>
{/*  Recessed Row 1  */}
<div className="flex items-center justify-between p-4 bg-surface-container-highest">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-background">
<span className="material-symbols-outlined text-secondary">flare</span>
</div>
<div>
<p className="font-headline font-bold text-sm uppercase">Energia Vital</p>
<p className="text-[10px] text-tertiary-fixed-dim uppercase tracking-tighter">Recuperação completa</p>
</div>
</div>
<span className="font-headline font-black text-xl text-secondary">98%</span>
</div>
{/*  Recessed Row 2  */}
<div className="flex items-center justify-between p-4 bg-surface-container-highest">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-background">
<span className="material-symbols-outlined text-primary-container">warning</span>
</div>
<div>
<p className="font-headline font-bold text-sm uppercase">Ansiedade Pré-Luta</p>
<p className="text-[10px] text-tertiary-fixed-dim uppercase tracking-tighter">Zonamento controlado</p>
</div>
</div>
<span className="font-headline font-black text-xl text-primary-container">12%</span>
</div>
{/*  Recessed Row 3  */}
<div className="flex items-center justify-between p-4 bg-surface-container-highest">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-background">
<span className="material-symbols-outlined text-on-secondary-container">ads_click</span>
</div>
<div>
<p className="font-headline font-bold text-sm uppercase">Precisão Técnica</p>
<p className="text-[10px] text-tertiary-fixed-dim uppercase tracking-tighter">Baseado nos últimos 30 treinos</p>
</div>
</div>
<span className="font-headline font-black text-xl text-on-secondary-container">85%</span>
</div>
</section>
{/*  CTA Action  */}
<button className="w-full mt-10 bg-primary-container text-on-primary-container py-5 font-headline font-black text-xl uppercase tracking-widest transition-transform active:scale-95 shadow-[0_0_30px_rgba(231,0,0,0.2)]">
            INICIAR PROTOCOLO DE LUTA
        </button>
</main>
{/*  BottomNavBar Shell  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-20 pb-4 px-2 bg-[#353534]/80 backdrop-blur-xl shadow-[0_-4px_12px_rgba(52,61,150,0.06)]">
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">HOME</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">LIBRARY</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">ads_click</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">PATH</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">TRAINING</span>
</div>
<div className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform bg-[#2A2A2A] px-4 py-2">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Inter'] font-bold text-[10px] tracking-widest uppercase mt-1">SENSEI</span>
</div>
</nav>

    </>
  );
}
