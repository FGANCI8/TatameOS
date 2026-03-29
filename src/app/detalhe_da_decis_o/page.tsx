import React from 'react';

export default function DetalheDaDecisO() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-neutral-900/80 backdrop-blur-xl border-b-0 bg-neutral-900 flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white active:scale-95 duration-100 cursor-pointer">arrow_back</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl font-black italic text-white tracking-widest">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-neutral-400 hover:text-red-500 transition-colors cursor-pointer" data-icon="notifications">notifications</span>
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close up of a professional brazilian jiu-jitsu athlete profile with intense focus in a dark training environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG3_k5iBc6jW7gf3K-PwyOkLA__SOzJ4hV8pTN_Drtm3H54IH0usoqBGN2CiwSNNvtJRYD9xVOChYNhTQ2I4TAehwULNAGpU4EF5xz_EQ2a_b6YX99Fa5oGVnG6ydIdMbW1z7ceuapqFJ2CsQ2IzysFiQts7kR1oW9mUbi5cJuqYK-R82jWg1E1qFquyxO6diWfBYc9mY6_z19MpYr53Re8sDsf5cZtn63sFi6apozqb0nXVJkdojHKFFtBA2z2gGAL7C9HtZOW3Ov"/>
</div>
</div>
</header>
<main className="pt-20 px-4 max-w-4xl mx-auto space-y-6">
{/*  Hero Header Section  */}
<section className="mt-8">
<div className="bg-error-container p-1 inline-block mb-2">
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest px-2 text-on-error-container">ALERTA DE DESEMPENHO</span>
</div>
<h2 className="font-['Lexend'] text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4">
                ERRO: ABRIR BASE <span className="text-primary-container">PRECIPITADO</span>
</h2>
<div className="flex items-center gap-4 py-2 border-y border-outline-variant/15">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-tertiary" data-icon="schedule">schedule</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-tertiary">SPARRING 04:12</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-tertiary" data-icon="warning">warning</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-tertiary">CRÍTICO</span>
</div>
</div>
</section>
{/*  Video Analysis Component  */}
<section className="relative group aspect-video w-full overflow-hidden bg-surface-container-lowest">
<img className="w-full h-full object-cover opacity-60" data-alt="dramatic action shot of two jiu-jitsu athletes grappling on a black mat with cinematic red side lighting highlighting muscles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApsDnvXMHn6R8Szn69yrLk5TwQcKgbmh84iPZ7c0jHxnc5bCsmCEtH8_d-6UMaoqjzyHRhNtbi1liBmpC3mGuOFDJXYaN9V5OIDkLO-j17k4vJ27ZDFewNSNvLe1gTf2G5MgEN4LFRuIXnDwuaOQASDNC2JZFihJ5978VpZApyAhoDUpEuWKeQQNEE7klYJo4XoqiwcKAcIUgUEZw2xMZzqBLmysQRBYHktmN0aUQ5Dsn29gCaNirUdsHe_Dy-Kb5tMkU8eRV7Fq_O"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-primary-container flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_arrow" data-weight="fill">play_arrow</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-white">REPLAY ANALÍTICO: FRAME 1042</span>
</div>
{/*  Tactical Overlay  */}
<div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-red-500 rounded-full animate-pulse flex items-center justify-center">
<div className="w-1 h-1 bg-red-500 rounded-full"></div>
</div>
</section>
{/*  Bento Analysis Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Contexto  */}
<div className="bg-surface-container-low p-6 md:col-span-2 space-y-4">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-secondary"></div>
<h3 className="font-['Lexend'] text-xl font-bold uppercase tracking-tight">CONTEXTO DA LUTA</h3>
</div>
<p className="font-['Inter'] text-on-surface-variant leading-relaxed text-sm">
                    Você estava trabalhando a passagem de guarda fechada. O oponente mantinha uma pegada forte no seu lapel esquerdo. Em vez de estabilizar os quadris, houve uma tentativa de explosão vertical para romper a pegada sem o devido controle de postura.
                </p>
</div>
{/*  Métrica de Risco  */}
<div className="bg-surface-container-high p-6 flex flex-col justify-between">
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-tertiary">ÍNDICE DE RISCO</span>
<div className="space-y-1">
<div className="flex items-end gap-1">
<span className="font-['Lexend'] text-5xl font-black text-primary-container">88</span>
<span className="font-['Inter'] text-sm font-bold text-primary-container mb-2">%</span>
</div>
<div className="h-1 w-full bg-surface-container-highest">
<div className="h-full bg-primary-container w-[88%]"></div>
</div>
</div>
<p className="font-['Inter'] text-[10px] text-on-surface-variant leading-tight">EXPOSIÇÃO ALTA A FINALIZAÇÕES DE TRONCO.</p>
</div>
{/*  O que foi feito  */}
<div className="bg-surface-container-low p-6 space-y-4">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-primary-container"></div>
<h3 className="font-['Lexend'] text-xl font-bold uppercase tracking-tight">A FALHA</h3>
</div>
<p className="font-['Inter'] text-on-surface-variant leading-relaxed text-sm">
                    Subida do tronco sem recolhimento de cotovelo. Espaço aberto na axila direita.
                </p>
</div>
{/*  Por que foi ruim  */}
<div className="bg-surface-container-low p-6 space-y-4">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-primary-container"></div>
<h3 className="font-['Lexend'] text-xl font-bold uppercase tracking-tight">POR QUE?</h3>
</div>
<p className="font-['Inter'] text-on-surface-variant leading-relaxed text-sm">
                    Exposição imediata ao <span className="text-white font-bold">TRIÂNGULO</span>. O oponente não precisou de esforço para laçar o pescoço.
                </p>
</div>
{/*  Consequência  */}
<div className="bg-surface-container-low p-6 space-y-4">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-primary-container"></div>
<h3 className="font-['Lexend'] text-xl font-bold uppercase tracking-tight">IMPACTO</h3>
</div>
<p className="font-['Inter'] text-on-surface-variant leading-relaxed text-sm">
                    Perda total de posição (Guard Pass para Bottom Guard). Desvantagem de -3 pontos.
                </p>
</div>
</div>
{/*  Tactical Diagram  */}
<section className="bg-surface-container-lowest p-8 border border-outline-variant/10">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1 space-y-4">
<h3 className="font-['Lexend'] text-2xl font-black uppercase tracking-tighter italic">SOLUÇÃO KINETIC</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
<span className="text-sm font-['Inter']">Mantenha os cotovelos colados às costelas.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
<span className="text-sm font-['Inter']">Quebre a pegada do lapel antes da subida.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary" data-icon="check_circle">check_circle</span>
<span className="text-sm font-['Inter']">Use o joelho central para ancorar a base.</span>
</li>
</ul>
<button className="w-full bg-primary-container text-on-primary-container py-4 font-['Lexend'] font-bold uppercase tracking-widest active:scale-95 duration-100 mt-4">
                        TREINAR CORREÇÃO
                    </button>
</div>
<div className="w-full md:w-64 aspect-square bg-surface-container-highest flex items-center justify-center p-4">
<img className="w-full h-full object-contain mix-blend-lighten" data-alt="minimalist white line tactical diagram of a jiu-jitsu position on a dark chalkboard background with red strategy arrows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3LH_pIB1KnuhSwmv4LxcjzQekp7WcTT-ZaezF2JAOwq3h-HSQe7vu9uyrR3Cirwv9r_OR9IgLstFvtyEU7Ka5dwVEgdnTkuj2g8fKsZHkQQtkWAhFwbzTbfIoCxSqAj-DXSuZ9Ph4ZdUXCwHtm1G0_YwcWqJdrRC2K3V0gIkAL8gaeW91FbOvlIVuvl-c-rzZKORMTqWcK1oyghBcSmm6YgaZPS5tjtqMrdZ5zCbW8ivQ6a47ZnUg8wwZwTKsS6Uqx8toGBcJwsH"/>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-neutral-900/90 backdrop-blur-lg z-50">
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="video_library">video_library</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Biblioteca</span>
</div>
<div className="flex flex-col items-center justify-center text-white bg-red-600 p-2 active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="moving">moving</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200 cursor-pointer">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Sensei</span>
</div>
</nav>

    </>
  );
}
