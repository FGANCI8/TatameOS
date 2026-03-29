import React from 'react';

export default function MomentoCrTico() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-neutral-900/80 backdrop-blur-xl docked full-width top-0 z-50 fixed flex justify-between items-center w-full px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up intense portrait of a Brazilian Jiu-Jitsu athlete with focused expression, grit on face, dramatic low-key lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVquIr5iMvhDtFFxezaqd4Ff_4AOiwMTVPlyjHh6FLyEpAZhaAvbXj_Elr2pARKq5DrjbAjTfQhro4DlqhWsBSu9zHVibHD8cx-N5sd67ddPjq5hJK31T3iFKMkJct-m6rHoAG9t4mLFfBE118Pd9-cJgi23MfAeJYl-UGsgrxH9k4IItYA_T8U_Lf4C3wg-OyDEJrAxrO-6XT1NjuP78jibTQaeIT9xxDdzBPwyDsmg5z9qNlpbg5xh9cTRi87npahUkKjArMdskl"/>
</div>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-white tracking-widest">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-neutral-400 hover:text-red-500 transition-colors cursor-pointer">notifications</span>
</div>
</header>
<main className="pt-24 pb-32 px-4 max-w-5xl mx-auto space-y-8">
{/*  Hero Section: Title & Criticality  */}
<section className="relative">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
<div className="space-y-1">
<span className="font-headline font-bold text-primary tracking-[0.3em] text-xs uppercase">Análise de Performance</span>
<h2 className="font-headline font-black text-5xl md:text-7xl uppercase leading-none italic tracking-tighter">
                        PONTO DE <br/><span className="text-primary-container text-glow-red">INFLEXÃO</span>
</h2>
</div>
<div className="bg-surface-container-highest p-4 border-l-4 border-primary-container">
<div className="text-[10px] font-headline font-bold text-tertiary uppercase tracking-widest">Nível de Tensão</div>
<div className="text-3xl font-headline font-black text-white">94.2%</div>
</div>
</div>
</section>
{/*  Main Content Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Video/Graphic Placeholder  */}
<div className="md:col-span-8 bg-surface-container-low relative aspect-video group overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Cinematic wide shot of two jiu-jitsu fighters grappling on a dark mat, one attempting a guillotine choke, high contrast red and blue lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnVE4BHQV2JTYmyYpNdWVR2Zs1Tq-q_OJI9qeDG8Z0wtOwnb0nTkIqpfEsnASyQzLXevQ8lsPGJJxyqNjdk4GWfncFkqFQuRwPMgbKnh86G3RkSlTniRyxPSb1bD46yOJKqrhrhGt9gsifAiKPCULFs8BJ4vRfIK_r9mJt9_B8qwXxcs3IVxm93JotxgZIke7RmpB7iVt874WQJJtHymTf64QB7clXVuAHPKXrb4ilot3cnsiYsRqlOdqgLMv4zd0OWgrnhw2qbsfb"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
{/*  Overlay Telemetry  */}
<div className="absolute top-4 left-4 flex gap-2">
<div className="bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] font-headline font-bold text-white border border-white/10 uppercase">Live telemetry</div>
<div className="bg-primary-container/80 backdrop-blur-md px-3 py-1 text-[10px] font-headline font-bold text-white uppercase">Critical Error</div>
</div>
{/*  Central Focus Marker  */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-32 h-32 border-2 border-primary-container/40 flex items-center justify-center">
<div className="w-24 h-24 border border-primary-container/20"></div>
<div className="absolute text-primary-container font-headline font-black text-xl tracking-tighter">03:15</div>
</div>
</div>
</div>
{/*  Situation Summary Card  */}
<div className="md:col-span-4 bg-surface-container-high p-6 flex flex-col justify-between space-y-6">
<div className="space-y-4">
<h3 className="font-headline font-black text-xl uppercase tracking-tight text-white">Anatomia do Erro</h3>
<div className="space-y-4 relative">
{/*  Step 1  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-white/10 flex items-center justify-center font-headline font-black text-[10px]">01</div>
<p className="font-body text-sm text-on-surface-variant leading-tight">Vantagem de 2 pontos estabelecida após passagem de guarda.</p>
</div>
{/*  Step 2  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-primary-container flex items-center justify-center font-headline font-black text-[10px]">02</div>
<p className="font-body text-sm text-white font-semibold leading-tight italic">Decisão de atacar guilhotina sem ajuste fino.</p>
</div>
{/*  Step 3  */}
<div className="flex items-start gap-3">
<div className="w-6 h-6 bg-white/10 flex items-center justify-center font-headline font-black text-[10px]">03</div>
<p className="font-body text-sm text-on-surface-variant leading-tight">Inversão de posição e perda do controle lateral.</p>
</div>
</div>
</div>
<div className="bg-surface p-4 space-y-2">
<div className="text-[10px] font-headline font-bold text-primary tracking-widest uppercase">Consequência Direta</div>
<div className="text-lg font-headline font-black text-white italic">-4 PONTOS + LOSS OF TEMP</div>
</div>
</div>
{/*  Tension Graph Section  */}
<div className="md:col-span-12 bg-surface-container-lowest p-8 border border-outline-variant/20">
<div className="flex justify-between items-center mb-8">
<h3 className="font-headline font-black text-2xl uppercase tracking-tighter italic">Gráfico de Tensão de Luta</h3>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-primary-container"></div>
<span className="text-[10px] font-headline font-bold uppercase tracking-widest text-tertiary">Riscos</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-secondary"></div>
<span className="text-[10px] font-headline font-bold uppercase tracking-widest text-tertiary">Estabilidade</span>
</div>
</div>
</div>
{/*  Visual Timeline/Graph  */}
<div className="relative h-48 w-full flex items-end gap-[2px]">
{/*  Dummy bars to simulate a wave  */}
<div className="flex-1 bg-surface-container-highest h-[20%]"></div>
<div className="flex-1 bg-surface-container-highest h-[25%]"></div>
<div className="flex-1 bg-surface-container-highest h-[35%]"></div>
<div className="flex-1 bg-surface-container-highest h-[30%]"></div>
<div className="flex-1 bg-surface-container-highest h-[45%]"></div>
<div className="flex-1 bg-primary-container h-[85%] relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary-container text-white px-3 py-1 font-headline font-black text-sm italic clip-path-asymmetric">CRITICAL</div>
</div>
<div className="flex-1 bg-surface-container-highest h-[40%]"></div>
<div className="flex-1 bg-surface-container-highest h-[35%]"></div>
<div className="flex-1 bg-surface-container-highest h-[30%]"></div>
<div className="flex-1 bg-surface-container-highest h-[55%]"></div>
<div className="flex-1 bg-surface-container-highest h-[50%]"></div>
<div className="flex-1 bg-surface-container-highest h-[65%]"></div>
<div className="flex-1 bg-surface-container-highest h-[60%]"></div>
</div>
{/*  Time Markers  */}
<div className="flex justify-between mt-4 font-headline font-bold text-[10px] text-tertiary uppercase tracking-[0.2em] border-t border-outline-variant/30 pt-4">
<span>00:00</span>
<span>01:00</span>
<span>02:00</span>
<span className="text-primary-container">03:15 INFLEXÃO</span>
<span>04:00</span>
<span>05:00</span>
</div>
</div>
{/*  Insights / Next Actions  */}
<div className="md:col-span-6 bg-surface-container-low p-6 flex gap-6 items-center">
<div className="bg-secondary-container p-4">
<span className="material-symbols-outlined text-on-secondary-container text-3xl">psychology</span>
</div>
<div>
<h4 className="font-headline font-black text-lg uppercase text-white">Análise do Sensei</h4>
<p className="font-body text-sm text-on-surface-variant">"O excesso de confiança após a vantagem cegou a leitura do quadril do oponente. O ataque foi impulsivo."</p>
</div>
</div>
<div className="md:col-span-6 bg-primary-container p-6 flex gap-6 items-center group cursor-pointer hover:bg-inverse-primary transition-colors">
<div className="bg-white/20 p-4">
<span className="material-symbols-outlined text-white text-3xl">fitness_center</span>
</div>
<div className="flex-1">
<h4 className="font-headline font-black text-lg uppercase text-white">Treinar Correção</h4>
<p className="font-body text-sm text-white/80">Drill: Transição de guilhotina para controle de costas.</p>
</div>
<span className="material-symbols-outlined text-white group-hover:translate-x-2 transition-transform">arrow_forward_ios</span>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe bg-neutral-900/90 backdrop-blur-lg z-50">
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">video_library</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-white bg-red-600 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">moving</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
