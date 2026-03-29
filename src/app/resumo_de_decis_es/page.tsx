import React from 'react';

export default function ResumoDeDecisEs() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-neutral-900/80 backdrop-blur-xl docked full-width top-0 z-50 border-b-0 bg-neutral-900 flex justify-between items-center w-full px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close-up intense portrait of a jiu-jitsu athlete with sweat on face, dark moody dramatic lighting in a gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFvtlQGbqCio6yOTdb0H64Q4v9CCoQILfBTAq6-B75PmJNV0m3TNuWCQtAQ0-JiBjYf7JMvKis7KSGpWnqboQ8-w-DOR8rHX0bWgGIWYOQlwewI_vqbfLSDBIfIq5mc7LT9w3gpd31zUJabSUASBCSoYetKnya93SpVbKjPIEYOA8fA_cUQUu11eQP7dpyeZMHQMFedG7gun3Wogm1p3gAZauqm1qE3kUenT1gHNR855gD8lfABJm-_kRGfXqOI5CtLxTaB-lefia_"/>
</div>
<span className="text-2xl font-black italic text-white tracking-widest font-['Lexend'] uppercase tracking-tighter">KINETIC BJJ</span>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-red-600 active:scale-95 duration-100" data-icon="notifications">notifications</button>
</div>
</header>
<main className="px-6 py-8 max-w-4xl mx-auto">
{/*  Hero Section  */}
<section className="mb-12">
<div className="flex flex-col gap-1">
<span className="text-primary-container font-headline font-bold uppercase tracking-[0.3em] text-[12px]">Análise Técnica</span>
<h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">DECISÕES EM LUTA</h1>
<div className="h-1 w-24 bg-primary-container"></div>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-surface-container-low p-6 flex flex-col justify-between h-40">
<span className="text-label-sm uppercase font-bold tracking-widest text-tertiary opacity-60">Eficiência</span>
<div className="flex items-baseline gap-2">
<span className="text-6xl font-black font-headline">64</span>
<span className="text-2xl font-bold font-headline text-primary-container">%</span>
</div>
</div>
<div className="bg-primary-container p-6 flex flex-col justify-between h-40">
<span className="text-label-sm uppercase font-bold tracking-widest text-on-primary-container opacity-80">Erros Críticos</span>
<div className="flex items-baseline gap-2">
<span className="text-6xl font-black font-headline text-on-primary-container">12</span>
<span className="text-xl font-bold font-headline text-on-primary-container">HOJE</span>
</div>
</div>
<div className="bg-surface-container-highest p-6 flex flex-col justify-between h-40 border-l-4 border-secondary">
<span className="text-label-sm uppercase font-bold tracking-widest text-secondary">Sugestão Focus</span>
<p className="text-sm font-bold leading-tight">MANTENHA A BASE BAIXA AO TRANSICIONAR PARA O NORTE-SUL.</p>
</div>
</div>
</section>
{/*  Dynamic Error Cards  */}
<section className="space-y-4">
<div className="flex justify-between items-end mb-6">
<h2 className="text-xl font-black uppercase tracking-widest italic">Recorrência de Falhas</h2>
<span className="text-[10px] font-bold uppercase text-tertiary-fixed-dim">Últimos 30 dias</span>
</div>
{/*  Card 1  */}
<div className="group relative overflow-hidden bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"></div>
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-start gap-5">
<div className="mt-1">
<span className="material-symbols-outlined text-primary-container text-4xl" data-icon="warning" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
</div>
<div>
<h3 className="text-2xl font-black uppercase leading-none mb-2 group-hover:text-primary-container transition-colors">Atacar na hora errada</h3>
<p className="text-tertiary text-sm max-w-md font-medium leading-relaxed">Exposição desnecessária de membros durante transições sem controle de quadril estabelecido.</p>
</div>
</div>
<div className="flex items-center gap-8 md:text-right">
<div className="flex flex-col">
<span className="text-3xl font-black font-headline leading-none">08</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Vezes</span>
</div>
<div className="w-24 h-12 flex items-end gap-1">
<div className="w-2 h-1/2 bg-surface-container-highest"></div>
<div className="w-2 h-2/3 bg-surface-container-highest"></div>
<div className="w-2 h-full bg-primary-container"></div>
<div className="w-2 h-3/4 bg-primary-container"></div>
<div className="w-2 h-full bg-primary-container"></div>
</div>
</div>
</div>
</div>
{/*  Card 2  */}
<div className="group relative overflow-hidden bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-container-highest"></div>
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-start gap-5">
<div className="mt-1">
<span className="material-symbols-outlined text-on-surface-variant text-4xl" data-icon="priority_high">priority_high</span>
</div>
<div>
<h3 className="text-2xl font-black uppercase leading-none mb-2 group-hover:text-primary transition-colors">Insistir em posição perdida</h3>
<p className="text-tertiary text-sm max-w-md font-medium leading-relaxed">Gasto energético excessivo em finalizações que já foram defendidas tecnicamente.</p>
</div>
</div>
<div className="flex items-center gap-8 md:text-right">
<div className="flex flex-col">
<span className="text-3xl font-black font-headline leading-none">05</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Vezes</span>
</div>
<div className="w-24 h-12 flex items-end gap-1">
<div className="w-2 h-1/4 bg-surface-container-highest"></div>
<div className="w-2 h-1/3 bg-primary-container"></div>
<div className="w-2 h-1/2 bg-surface-container-highest"></div>
<div className="w-2 h-1/3 bg-surface-container-highest"></div>
<div className="w-2 h-2/3 bg-primary-container"></div>
</div>
</div>
</div>
</div>
{/*  Card 3  */}
<div className="group relative overflow-hidden bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-container"></div>
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-start gap-5">
<div className="mt-1">
<span className="material-symbols-outlined text-primary-container text-4xl" data-icon="emergency_home" style={{ /* font-variation-settings: 'FILL' 1; */ }}>emergency_home</span>
</div>
<div>
<h3 className="text-2xl font-black uppercase leading-none mb-2 group-hover:text-primary-container transition-colors">Abrir base sem necessidade</h3>
<p className="text-tertiary text-sm max-w-md font-medium leading-relaxed">Desequilíbrio postural ao tentar antecipar passagens de guarda sem pressão.</p>
</div>
</div>
<div className="flex items-center gap-8 md:text-right">
<div className="flex flex-col">
<span className="text-3xl font-black font-headline leading-none">14</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Vezes</span>
</div>
<div className="w-24 h-12 flex items-end gap-1">
<div className="w-2 h-full bg-primary-container"></div>
<div className="w-2 h-full bg-primary-container"></div>
<div className="w-2 h-full bg-primary-container"></div>
<div className="w-2 h-full bg-primary-container"></div>
<div className="w-2 h-full bg-primary-container"></div>
</div>
</div>
</div>
</div>
{/*  Card 4  */}
<div className="group relative overflow-hidden bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-container-highest"></div>
<div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
<div className="flex items-start gap-5">
<div className="mt-1">
<span className="material-symbols-outlined text-on-surface-variant text-4xl" data-icon="report">report</span>
</div>
<div>
<h3 className="text-2xl font-black uppercase leading-none mb-2 group-hover:text-primary transition-colors">Aceitar guarda ruim</h3>
<p className="text-tertiary text-sm max-w-md font-medium leading-relaxed">Falta de recomposição imediata ao ter a linha de cintura cruzada pelo oponente.</p>
</div>
</div>
<div className="flex items-center gap-8 md:text-right">
<div className="flex flex-col">
<span className="text-3xl font-black font-headline leading-none">03</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-tertiary">Vezes</span>
</div>
<div className="w-24 h-12 flex items-end gap-1">
<div className="w-2 h-1/5 bg-surface-container-highest"></div>
<div className="w-2 h-1/5 bg-surface-container-highest"></div>
<div className="w-2 h-1/5 bg-surface-container-highest"></div>
<div className="w-2 h-1/4 bg-primary-container"></div>
<div className="w-2 h-1/3 bg-primary-container"></div>
</div>
</div>
</div>
</div>
</section>
{/*  Visual Analysis Section  */}
<section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container-lowest p-8 border border-outline-variant/10">
<h4 className="font-headline font-black uppercase text-sm tracking-[0.2em] mb-6">Mapa de Calor: Fadiga vs Erro</h4>
<div className="aspect-square relative bg-neutral-900 overflow-hidden">
<img className="w-full h-full object-cover opacity-50 mix-blend-screen" data-alt="Abstract visualization of kinetic energy and heat mapping with red and blue light trails over a dark textured surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR68q3sRoNGoo_JXkhOiHURa8AvK7-j3oMnE9hF4nBGSjjc0ab9ZGvSrCf_BitUh9D9PC02mUUjqrqow4qM7wcOx4sFY7O8WzRuu2UW-Wz_YQY6xgzZFMbBiaBq8KWxasDx750h0irr-oDiy5eLNK8SQvDcQrAwNcMHUrL4o63rWI6s10DaD8EFjZ9Yb2LMSo3Hp-CddUEOkIqtyOKkfKByxQpBoxf71by8YUIVrmtYdSLKjCdc69djSN9f8W1iA3wj5eebrtTFwga"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<span className="text-4xl font-black text-primary-container font-headline">CRITICAL ZONE</span>
<p className="text-[10px] font-bold uppercase tracking-widest mt-2">Erro aumenta após 6min de rola</p>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-4">
<div className="bg-surface-container p-6 flex-1">
<div className="flex justify-between items-center mb-4">
<span className="material-symbols-outlined text-secondary" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Feedback IA</span>
</div>
<h5 className="font-headline font-black text-xl uppercase mb-2">Foco: Reatividade</h5>
<p className="text-sm text-tertiary leading-relaxed italic">"Sua reatividade diminui drasticamente quando você aceita o jogo de guarda laçada. Priorize a quebra de pegada antes de tentar o avanço de base."</p>
</div>
<button className="bg-primary-container text-on-primary-container py-5 px-8 font-headline font-black uppercase tracking-widest hover:bg-inverse-primary transition-all active:translate-y-1">
                    GERAR PLANO DE CORREÇÃO
                </button>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="bg-neutral-900/90 backdrop-blur-lg docked full-width bottom-0 z-50 border-t-0 bg-neutral-800 fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-safe">
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="video_library">video_library</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="moving">moving</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-white bg-red-600 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:bg-neutral-800 transition-all active:translate-y-1 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold uppercase text-[10px] tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
