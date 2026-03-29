import React from 'react';

export default function FavoritosERevisar() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 z-50 w-full flex justify-between items-center px-6 h-16 bg-neutral-900/80 backdrop-blur-xl border-b-0">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-on-surface cursor-pointer">menu</span>
<h1 className="text-2xl font-black italic text-[#E70000] dark:text-red-600 tracking-widest font-headline uppercase">KINETIC BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" data-alt="close up profile photo of a focused brazilian jiu jitsu athlete in a black gi with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoQpTzpwGSJ3W0WCgntJDaAGA-mvCxK0vsrHn9yJhEcEHeuDirgdacgEy20Do129vq6YfHEn1vhWgSscXEOyYIrTH2IEROhD07fsBZ1ONym_6TUTTQC8poTcFg4MB_wLFaPjjXwLkuNOeTyTBU8VHCvpyyEO1O7h6ucUpmnWgSSy9_Z-OmhZBVss6ZUCGLWetli2ZLsDVUSoyC88EHihjUgEp-zZRNZxoHSUkSS8scxBJAy-EaqQUAJgH4vNpZMJrAOr0F0iQTV-DC"/>
</div>
</header>
<main className="pt-20 pb-24 min-h-screen px-4 max-w-5xl mx-auto">
{/*  Page Title & Resume Shortcut  */}
<section className="mb-10 mt-4">
<div className="flex items-end gap-2 mb-2">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-tertiary-fixed-dim font-headline">Seu Arsenal</span>
</div>
<h2 className="text-5xl font-black font-headline uppercase tracking-tighter text-on-surface leading-none mb-8">BIBLIOTECA</h2>
{/*  Bento Resume Card  */}
<div className="bg-surface-container-low p-6 flex flex-col md:flex-row gap-6 items-center border-l-4 border-primary-container relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-10">
<span className="material-symbols-outlined text-9xl">play_circle</span>
</div>
<div className="w-full md:w-48 aspect-video bg-surface-container-highest flex-shrink-0 relative">
<img className="w-full h-full object-cover grayscale opacity-60" data-alt="professional bjj athletes grappling in a dark high-end gym environment with intense shadows and moody red lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMgyzOiAK-SkaROG7G8g_OmboplNw1aOivmR23xI80AUVkGRSl0Mz3E8CVKxQeRiGHmLhGMc5ACzm1fhlDmYaZOEnzd1lmHWHSKXwmmmR-87XytE9s9FmIZlhe44KKxRH3GWJbvDJKWPzSngeFAhkLsSllEXcO3zpe4TNor0KqOff6BNTs9XnHvCLAZZasF56meCGzxeoJLboz_JXrY9LYDvaTaDB7TTqKRy_VWi8-gE7AMcbcMI0OC8v4v6jnL6408exEjSwew9-c"/>
<div className="absolute inset-0 flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
<div className="absolute bottom-0 left-0 h-1 bg-primary-container w-[65%]"></div>
</div>
<div className="flex-grow">
<div className="flex items-center gap-2 mb-1">
<span className="bg-primary-container text-on-primary-container text-[10px] font-black px-2 py-0.5 uppercase font-headline">Continuar</span>
<span className="text-tertiary text-xs uppercase font-bold tracking-widest">AULA 04 • MÓDULO GUARDA</span>
</div>
<h3 className="text-2xl font-black font-headline uppercase leading-tight text-on-surface">Transição: De La Riva para Single Leg X</h3>
<p className="text-tertiary-fixed-dim text-sm mt-2 max-w-md">Retome de onde parou: 12:45 restantes de 18:20.</p>
</div>
<button className="w-full md:w-auto bg-primary-container text-on-primary-container px-8 py-4 font-headline font-black uppercase tracking-widest transition-transform active:scale-95">
                    RECOMEÇAR
                </button>
</div>
</section>
{/*  Filters Section  */}
<section className="mb-8">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-black font-headline uppercase tracking-widest text-on-surface">Filtros Rápidos</h3>
<span className="material-symbols-outlined text-tertiary-fixed-dim">tune</span>
</div>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
<button className="bg-primary-container text-on-primary-container px-6 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap">Tudo</button>
<button className="bg-surface-container-high text-on-surface px-6 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap hover:bg-surface-variant transition-colors">Guarda</button>
<button className="bg-surface-container-high text-on-surface px-6 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap hover:bg-surface-variant transition-colors">Passagem</button>
<button className="bg-surface-container-high text-on-surface px-6 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap hover:bg-surface-variant transition-colors">Finalização</button>
<button className="bg-surface-container-high text-on-surface px-6 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap hover:bg-surface-variant transition-colors">Quedas</button>
<button className="bg-surface-container-high text-on-surface px-6 py-2 text-xs font-black uppercase tracking-widest whitespace-nowrap hover:bg-surface-variant transition-colors">Defesa Pessoal</button>
</div>
</section>
{/*  Favorites List  */}
<section className="space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-lg font-black font-headline uppercase tracking-widest text-on-surface">Favoritos &amp; Revisão</h3>
<span className="text-xs font-bold text-tertiary-fixed-dim uppercase tracking-widest">12 ITENS SALVOS</span>
</div>
{/*  Horizontal Card 1  */}
<div className="group bg-surface-container flex h-32 md:h-40 overflow-hidden hover:bg-surface-container-high transition-all">
<div className="w-32 md:w-56 flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale" data-alt="close up shot of a bjj gi collar and belt with motion blur highlighting high-intensity grappling action" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDZk2gMKAXrgUg4uq9BD9wk0jYRrfkbIVHS4pa24bjb9rYH25JuQdnrZTt4GMdknWo1gzaE_0I69FfecdU4tJdZBFXHPTMlh1Q9ACrtvewELMDGas4ys4dWeMmYjJY0QI63L7op-2FW7m5RocvFJOTuuf5KqAEgPnK2ZEZeHT8MfsqxkT2zOpIaZLWVJy47Tq8PJK16_1gtJmP_7cX_Zt1nWS-Lsha7qhYkgmtNpejmzHZijCtB0uav0MQv_KeALgIP7S87DMnQAAI"/>
<div className="absolute top-2 left-2">
<span className="bg-black/60 backdrop-blur-md text-[9px] font-black px-2 py-1 uppercase tracking-widest text-white">08:45</span>
</div>
</div>
<div className="flex-grow p-4 md:p-6 flex flex-col justify-center">
<div className="flex items-start justify-between">
<div>
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Passagem de Guarda</span>
<h4 className="text-lg md:text-xl font-black font-headline uppercase tracking-tight leading-tight text-on-surface">Passagem emborrachada básica</h4>
</div>
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bookmark</span>
</div>
<div className="mt-auto flex items-center gap-4 text-tertiary-fixed-dim text-[10px] font-bold uppercase tracking-widest">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 2.4k</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> Intermediário</span>
</div>
</div>
</div>
{/*  Horizontal Card 2  */}
<div className="group bg-surface-container flex h-32 md:h-40 overflow-hidden hover:bg-surface-container-high transition-all">
<div className="w-32 md:w-56 flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale" data-alt="athletes practicing bjj takedowns on a clean mat with geometric shadows from large warehouse windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLKZ5xgqugm4Abs6DM6VQi5qmezPENnQC7nwN7XFSDub1Crt8ghLxcHHu-JKwQJvNnVo0h4G0fkMu3zwxEjhl9L5lKWVciSgnE1HExflvb_UFno06wj9-G-TS_BBHFylIkJlSJqFaBc1m424QV8QYnMTtcy06UORVN1bdsKxXbc08zV7LwDRH5t3zeEJ9BLNzV7E1x2YUGqlXl4KCwJFJtXl27hMRZFJwPKLgtgZBrH04ylibN5benLLuQFXzVDWHsbItJCcvCY5ec"/>
<div className="absolute top-2 left-2">
<span className="bg-black/60 backdrop-blur-md text-[9px] font-black px-2 py-1 uppercase tracking-widest text-white">12:10</span>
</div>
</div>
<div className="flex-grow p-4 md:p-6 flex flex-col justify-center">
<div className="flex items-start justify-between">
<div>
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Finalizações</span>
<h4 className="text-lg md:text-xl font-black font-headline uppercase tracking-tight leading-tight text-on-surface">Estrangulamento Cruzado da Montada</h4>
</div>
<div className="flex gap-2">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>favorite</span>
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</div>
</div>
<div className="mt-auto flex items-center gap-4 text-tertiary-fixed-dim text-[10px] font-bold uppercase tracking-widest">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 1.8k</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> Básico</span>
</div>
</div>
</div>
{/*  Horizontal Card 3  */}
<div className="group bg-surface-container flex h-32 md:h-40 overflow-hidden hover:bg-surface-container-high transition-all">
<div className="w-32 md:w-56 flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale" data-alt="close up of hands gripping a thick white bjj gi with tension showing the strength and technique of a grip" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl1QOz9gSEI2dtddel-M5n413bnq4rcGvzRDQW6F92fk8V_eufvrBnT35O3P82GWKM1WTGGHzTtuqRK_nnjkQzfKm9p__I25PClJltJOs33uRE4nlyfW-aYvzvmGKQuTq69-Tp1eB-tQ9Pyu5EWsayv6LQrYC0i_i839o50I2zRHR4k06svSAAw8QxAdSn5xQrdVK8H9VBnTQdQ4qg-21jOAkT_cpcVxBcVTqiMq4egO-O6azqdhTLhi2ZEqzx2nQnBsw5InDm4kSf"/>
<div className="absolute top-2 left-2">
<span className="bg-black/60 backdrop-blur-md text-[9px] font-black px-2 py-1 uppercase tracking-widest text-white">05:30</span>
</div>
</div>
<div className="flex-grow p-4 md:p-6 flex flex-col justify-center">
<div className="flex items-start justify-between">
<div>
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Quedas</span>
<h4 className="text-lg md:text-xl font-black font-headline uppercase tracking-tight leading-tight text-on-surface">Uchi-Mata com pegada no pano</h4>
</div>
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bookmark</span>
</div>
<div className="mt-auto flex items-center gap-4 text-tertiary-fixed-dim text-[10px] font-bold uppercase tracking-widest">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 4.1k</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> Avançado</span>
</div>
</div>
</div>
{/*  Horizontal Card 4  */}
<div className="group bg-surface-container flex h-32 md:h-40 overflow-hidden hover:bg-surface-container-high transition-all opacity-80">
<div className="w-32 md:w-56 flex-shrink-0 relative overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale" data-alt="shadowy silhouette of a bjj practitioner performing a stretch in a high-contrast industrial gym space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHy-HuZmsCemNqqDBJ-kIeSGUUHWZ4MQQ2S9ecLEaP6al1DSdkaYSBq6wwhcglU8P7LSlfwzaCYim92Yo2Z9CcxhVhLoKfAnwl2MexqCCO56XImNW7ddxV5fbsz_g76JLqhzGASIObmehlnFE8OHM_j5eftRNp23saetMlmen8FHzocBfBoTckr4l9-__IuDSA2fx1XxRgCmc1FlhjyZ48jemU1Zpkln38Z5XWyevve1KGzddckJzs6KVqLubpngcKOG5EKJrIvMHQ"/>
<div className="absolute top-2 left-2">
<span className="bg-black/60 backdrop-blur-md text-[9px] font-black px-2 py-1 uppercase tracking-widest text-white">15:50</span>
</div>
</div>
<div className="flex-grow p-4 md:p-6 flex flex-col justify-center">
<div className="flex items-start justify-between">
<div>
<span className="text-[10px] font-bold text-primary-container uppercase tracking-widest">Berimbolo</span>
<h4 className="text-lg md:text-xl font-black font-headline uppercase tracking-tight leading-tight text-on-surface">Conceitos de Inversão Moderna</h4>
</div>
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>favorite</span>
</div>
<div className="mt-auto flex items-center gap-4 text-tertiary-fixed-dim text-[10px] font-bold uppercase tracking-widest">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> 920</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">trending_up</span> Elite</span>
</div>
</div>
</div>
</section>
{/*  Load More or Status  */}
<div className="mt-12 mb-8 text-center">
<button className="text-xs font-black uppercase tracking-[0.3em] text-primary-container border-b-2 border-primary-container pb-2 hover:text-white hover:border-white transition-all">Ver Histórico Completo</button>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-end bg-[#1C1B1B]/90 backdrop-blur-2xl z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)] h-20">
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined text-2xl mb-1">home</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-4 transition-all brightness-125" href="#">
<span className="material-symbols-outlined text-2xl mb-1" style={{ /* font-variation-settings: 'FILL' 1; */ }}>library_books</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined text-2xl mb-1">insights</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined text-2xl mb-1">fitness_center</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 transition-all hover:text-white" href="#">
<span className="material-symbols-outlined text-2xl mb-1">psychology</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</a>
</nav>

    </>
  );
}
