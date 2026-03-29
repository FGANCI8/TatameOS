import React from 'react';

export default function RecomendaEsTTicas() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-neutral-900/80 backdrop-blur-xl docked full-width top-0 z-50 flex justify-between items-center w-full px-6 py-4 fixed">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant">
<img alt="Profile" className="w-full h-full object-cover" data-alt="close-up of a high-performance Brazilian Jiu-Jitsu athlete wearing a black gi looking focused and determined" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbnLdSsQMK-haadiUMh2-0rFz-TrLLVeKBdwJi34PLBuqyu7DiN9VIkxH7Ao7OSdg26aQcOZgH7E6f7ocW8K5jeOotk2mL4NNI6sCk9McnLtKTT3YTwx6yGeEuYjiHv1iVBpCmtUIjfcCgVX6ZW2NrDx0LuKKmbpiOYbEsO8g71-gt8rss6ipW9WGLPPyZVV-vGpKUPj1VfKyy9-f7nqNXswCXcnS0zkR0T3Ki_OIujbSAO_XNR5aeigekj-YYAKMxP4BjUxOO8yyd"/>
</div>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-white tracking-widest">KINETIC BJJ</h1>
</div>
<button className="text-red-600 dark:text-red-500 active:scale-95 duration-100">
<span className="material-symbols-outlined text-2xl" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-24 px-6 max-w-5xl mx-auto">
{/*  Hero Section  */}
<section className="mb-12">
<div className="flex items-baseline gap-4 mb-2">
<span className="bg-primary-container px-2 py-1 text-[10px] font-black tracking-[0.2em] text-on-primary-container uppercase">Live Intelligence</span>
<span className="text-tertiary-fixed-dim text-xs font-bold uppercase tracking-widest">Sessão: 04. Tactical</span>
</div>
<h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">REFINAMENTO TÁTICO</h2>
<p className="text-tertiary text-sm md:text-base max-w-xl leading-relaxed">
                Aprimore sua percepção de luta com base em dados de performance. Ajuste seu tempo de reação e domine a escolha estratégica de contato.
            </p>
</section>
{/*  Bento Grid Recommendations  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Main Strategic Card  */}
<div className="md:col-span-8 bg-surface-container-low border-l-4 border-primary-container p-8 relative overflow-hidden flex flex-col justify-between h-[400px]">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 -mr-20 -mt-20 blur-3xl rounded-full"></div>
<div className="relative z-10">
<span className="material-symbols-outlined text-primary-container text-4xl mb-4" data-icon="timer">timer</span>
<h3 className="font-headline text-3xl font-black uppercase mb-4 tracking-tight">Timing de Antecipação na Queda</h3>
<p className="text-tertiary-fixed-dim mb-8 max-w-md">Otimize a transição entre pegada e entrada. A análise sugere que 85% do sucesso na projeção ocorre nos primeiros 0.4s após o desequilíbrio.</p>
</div>
<div className="relative z-10">
<button className="bg-primary-container text-on-primary-container font-headline font-bold uppercase text-sm px-8 py-4 flex items-center gap-3 active:scale-95 transition-all">
                        Ver Drill Relacionado
                        <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
</button>
</div>
<div className="absolute bottom-4 right-8 font-headline font-black text-8xl text-surface-container-highest/30 select-none">
                    01
                </div>
</div>
{/*  Side Card: Patience  */}
<div className="md:col-span-4 bg-surface-container-high p-6 flex flex-col justify-between h-[400px] border-b-4 border-secondary">
<div>
<span className="material-symbols-outlined text-secondary text-3xl mb-4" data-icon="anchor">anchor</span>
<h3 className="font-headline text-xl font-bold uppercase mb-2">Paciência no Controle Lateral</h3>
<p className="text-tertiary text-xs leading-relaxed">Não force a finalização. Mantenha a pressão constante e aguarde o erro de ponte do oponente.</p>
</div>
<div className="mt-8">
<div className="bg-surface-container-lowest p-4 mb-4">
<span className="text-[10px] text-secondary font-black tracking-widest block mb-1">STABILIZATION RATE</span>
<div className="text-2xl font-headline font-black">74.2%</div>
</div>
<button className="w-full border border-outline-variant text-on-surface font-headline font-bold uppercase text-xs py-3 hover:bg-surface-bright transition-all">
                        Ver Drill Relacionado
                    </button>
</div>
</div>
{/*  Third Strategic Card: Grip Selection  */}
<div className="md:col-span-12 lg:col-span-6 bg-surface-container p-8 flex flex-col md:flex-row gap-8 items-center border-r-4 border-on-secondary-fixed-variant">
<div className="flex-1">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-on-secondary-fixed-variant" data-icon="handshake">handshake</span>
<span className="text-on-tertiary-fixed-variant text-[10px] font-black tracking-[0.2em] uppercase">Grip Strategy</span>
</div>
<h3 className="font-headline text-2xl font-black uppercase mb-3">Escolha Estratégica de Pegada</h3>
<p className="text-tertiary text-sm mb-6">Alterne entre pegadas de manga e lapela para confundir o sistema defensivo. Priorize a quebra de postura imediata.</p>
<button className="text-primary font-headline font-bold uppercase text-xs flex items-center gap-2 hover:translate-x-1 transition-transform">
                        Ver Drill Relacionado <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="w-full md:w-48 h-48 bg-surface-container-highest shrink-0 relative">
<img alt="BJJ Grip" className="w-full h-full object-cover mix-blend-luminosity opacity-50" data-alt="close-up of two martial artists hands gripping a thick white bjj gi fabric with dramatic lighting and high texture contrast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9OwTutoCNoZxQeDrs6FTiLqmR-BRInxsGQIdLxxb0Awi417pdaEMKwYLrnTL3Anvgxqe5rN6IkfGRSBEFJ6gXkxuTqw8gDCFCFypc71RYgPDQ7kTQqKAYqAreocdzg-HZ_5nChJEcB1evHPtrhM3JssUJgzSAMabudY_lbS3CEgjThJ0xkgQme-A6oGkuDb4W4gSXitVJpZUlv4T-IJ7vv-ancmQgRWMiQ-H44hcBO4Oe4wX_1Q-7oGsbV9Mp6DO3Qatc-X3_anAk"/>
<div className="absolute inset-0 bg-on-secondary-fixed-variant/20"></div>
</div>
</div>
{/*  Motivator / Data Insights  */}
<div className="md:col-span-12 lg:col-span-6 grid grid-cols-2 gap-4">
<div className="bg-surface-container-lowest p-6 flex flex-col justify-between border-t border-outline-variant">
<span className="text-[10px] font-black text-tertiary-fixed-dim tracking-[0.3em] uppercase">Status Atual</span>
<div>
<div className="text-4xl font-headline font-black text-primary">ELITE</div>
<div className="text-[10px] text-tertiary uppercase mt-1">Nível de Execução</div>
</div>
</div>
<div className="bg-primary-container p-6 flex flex-col justify-between text-on-primary-container">
<span className="material-symbols-outlined" data-icon="bolt">bolt</span>
<div>
<div className="text-2xl font-headline font-black tracking-tighter italic">VAI PRA CIMA.</div>
<p className="text-[10px] font-bold uppercase opacity-80 mt-1">Próximo Treino em 2h</p>
</div>
</div>
<div className="col-span-2 bg-surface-container-high p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-secondary" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<div>
<div className="text-xs font-bold uppercase text-white">Conselho do Sensei</div>
<div className="text-[10px] text-tertiary italic">"A técnica vence a força, mas o timing vence a técnica."</div>
</div>
</div>
<span className="material-symbols-outlined text-tertiary-fixed-dim" data-icon="chevron_right">chevron_right</span>
</div>
</div>
</div>
{/*  Secondary Recommendation List  */}
<section className="mt-16 mb-12">
<h4 className="font-headline text-xl font-black uppercase mb-6 tracking-widest border-b border-surface-container-highest pb-2">Ajustes Complementares</h4>
<div className="space-y-2">
{/*  No Divider Rule applied via Spacing  */}
<div className="bg-surface-container-low p-4 flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<span className="font-headline font-black text-outline-variant group-hover:text-primary transition-colors">04</span>
<span className="text-sm font-bold uppercase tracking-tight">Recuperação de Guarda em X</span>
</div>
<span className="material-symbols-outlined text-primary-container opacity-0 group-hover:opacity-100 transition-opacity" data-icon="play_circle">play_circle</span>
</div>
<div className="bg-surface-container-high p-4 flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer group">
<div className="flex items-center gap-4">
<span className="font-headline font-black text-outline-variant group-hover:text-primary transition-colors">05</span>
<span className="text-sm font-bold uppercase tracking-tight">Postura na Meia-Guarda Profunda</span>
</div>
<span className="material-symbols-outlined text-primary-container opacity-0 group-hover:opacity-100 transition-opacity" data-icon="play_circle">play_circle</span>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="bg-neutral-900/90 backdrop-blur-lg fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe z-50">
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200">
<span className="material-symbols-outlined" data-icon="video_library">video_library</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest">Biblioteca</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200">
<span className="material-symbols-outlined" data-icon="moving">moving</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-white bg-red-600 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200">
<span className="material-symbols-outlined" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest">Sensei</span>
</div>
</nav>

    </>
  );
}
