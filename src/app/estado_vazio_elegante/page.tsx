import React from 'react';

export default function EstadoVazioElegante() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="User avatar" className="w-full h-full object-cover" data-alt="Close up portrait of a focused martial arts athlete in a dark gym environment with dramatic rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADo3ocHTA6E4obAi3sizA_jtGrPL_-12ym_nlx8G9bWzEebWKtFWm9JWh2hQGz7Mc-Mrrb1-ZSdpAw2bgQ5rS6qX6Za_-OEcMkVK176WPezZ2PywNYMkMrDQmQdUY30G7oiZRM0eRmVyFafmxvgJ9bLAi1j4WrVkk8WdbET0-PUZwg1B1BCgxgVoVF6s3rlL2nZopg8L2OvnSXdc44RnjH2bsDpl_yAi4fgfO1nrkGhUgod0QluqvMZCu5EkAgDjUCuQz8BCy32cP1"/>
</div>
<span className="text-2xl font-black text-[#E70000] tracking-tighter italic font-['Lexend'] uppercase">KINETIC_BJJ</span>
</div>
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-150">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
{/*  Main Canvas  */}
<main className="flex-grow flex items-center justify-center px-6 pt-24 pb-32">
<div className="max-w-xl w-full text-left md:text-center">
{/*  Asymmetric Illustration Section  */}
<div className="relative mb-12 flex justify-center">
{/*  Monolithic Background Element  */}
<div className="absolute -top-8 -left-8 w-64 h-64 bg-surface-container-lowest opacity-50 z-0"></div>
{/*  Main Illustration: Minimalist empty state  */}
<div className="relative z-10 w-full max-w-sm aspect-square bg-surface-container-low border-l-4 border-primary-container p-8 flex flex-col justify-end">
<div className="mb-auto">
<span className="material-symbols-outlined text-8xl text-surface-container-highest" data-icon="layers_clear" style={{ /* font-variation-settings: 'wght' 100; */ }}>layers_clear</span>
</div>
<div>
<div className="h-1 w-24 bg-primary-container mb-4"></div>
<p className="font-headline font-black text-6xl text-surface-bright uppercase tracking-tighter leading-none opacity-20 select-none">VOID_NULL</p>
</div>
</div>
{/*  Floating Accent  */}
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-container/10 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container/30 text-5xl" data-icon="favorite">favorite</span>
</div>
</div>
{/*  Content Section  */}
<div className="space-y-6">
<h1 className="font-headline text-5xl md:text-6xl font-black text-on-surface uppercase tracking-tight leading-[0.9]">
                    Sua jornada ainda está <span className="text-primary-container">em silêncio.</span>
</h1>
<div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-tertiary-fixed-dim">
<div className="h-[1px] w-12 bg-primary-container hidden md:block"></div>
<p className="font-body text-lg max-w-md leading-relaxed">
                        Seus favoritos aparecerão aqui. Comece a construir seu arsenal técnico explorando nossa biblioteca de fundamentos de elite.
                    </p>
</div>
{/*  CTA Section  */}
<div className="pt-8 flex flex-col sm:flex-row gap-4">
<button className="bg-gradient-to-br from-[#E70000] to-[#C00100] text-white px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3">
<span className="material-symbols-outlined text-xl" data-icon="library_books">library_books</span>
                        Explorar Biblioteca
                    </button>
<button className="border border-outline-variant/30 text-on-surface px-10 py-5 font-headline font-bold uppercase tracking-widest text-sm hover:bg-surface-container-highest active:scale-95 transition-all">
                        Ver Trilhas de Treino
                    </button>
</div>
</div>
{/*  Stats/Telemetry Style Metadata (Bottom Left)  */}
<div className="mt-16 flex gap-12 border-t border-surface-container-high pt-6 opacity-60">
<div className="flex flex-col">
<span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary">Status</span>
<span className="font-headline text-xl font-bold">READY_TO_START</span>
</div>
<div className="flex flex-col">
<span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary">Data Points</span>
<span className="font-headline text-xl font-bold">000_FAVORITES</span>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#353534]/80 backdrop-blur-md h-20">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#E70000] to-[#C00100] text-white p-2 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="route">route</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="school">school</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
