import React from 'react';

export default function RecomendaEsPersonalizadas() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] fixed top-0 left-0 w-full z-50 flex justify-between items-center w-full px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="close-up portrait of a Brazilian Jiu-Jitsu athlete with a black belt around their neck, intense gaze, dramatic low-key lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2g5XbUexYm5jOS_bjU_jjQGdVVngqH_z2ZfgqSguomTS5425eHvp5P17Em1ljNMTMbwPekTlQsG7KjWkQhNJLtySdYRU5WXnAA3kxqYi_fR4BOQhwZcb96ghjrzAT6GUTr3LudYntlzJZ6VzNOYu3vN56YQWom5TVNT12KYH42sFEbrfHEl3fYL3pWRThiWHegJHi_EPZQwqqaUSS52XBqqvRwKf7kSY0GzOaCoJnQ3o66RXzsZAtED1mXosSPo42WxZfpRFxfPwA"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000] italic">KINETIC_BJJ</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-[#353534] transition-colors active:scale-95 duration-150 text-[#C6C6C7]">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</div>
</header>
<main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
{/*  Hero: Performance Streak  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div>
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary mb-1">STATUS ATUAL: FAIXA AZUL - GRAU 2</p>
<h2 className="font-headline text-5xl font-black uppercase tracking-tighter leading-none">RECOMENDAÇÕES</h2>
</div>
<div className="text-right">
<span className="font-headline text-4xl font-black text-primary-container">82%</span>
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">COMPLETO NA TRILHA ATUAL</p>
</div>
</div>
<div className="h-4 w-full bg-surface-container-highest overflow-hidden">
<div className="h-full monolith-gradient transition-all duration-700" style={{ /* width: 82%; */ }}></div>
</div>
</section>
{/*  Bento Grid: Personalized Content  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Main Suggested Technique  */}
<div className="md:col-span-8 bg-surface-container-low p-8 relative overflow-hidden flex flex-col justify-end min-h-[400px]">
<div className="absolute inset-0 z-0">
<img alt="Brazilian Jiu-Jitsu Technique" className="w-full h-full object-cover opacity-40" data-alt="dramatic action shot of two athletes performing a triangle choke in BJJ, cinematic lighting with high contrast and dark shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPH2HqWGz9t4RHR5M4BluHqsLlP7zmzhV_kazqBKL4B1db3HmKsNvgcNgHR2GYGwwTLtzyxoStn_DyCAw_GFlHt-lzyT2I6My0nzvgCLXALsSWXvkMmnOw5ikO-BCdxADOiSc0WpbiTbexwKnat-H6Bsq4dS7bfqBeHm2Wc81Ek3LoY1l0Nd0wB6eA6rzy5LuNTTCfAsjDK5i8rLFKMZbjmWq0_25nMW5dADafoPtdE57XN2iDa5lhxbDTt-2NmjD-z1dHkf2stiw8"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
</div>
<div className="relative z-10">
<span className="inline-block bg-primary-container text-on-primary-container font-label text-[10px] font-bold uppercase tracking-widest px-3 py-1 mb-4">TÉCNICA DO DIA</span>
<h3 className="font-headline text-4xl font-black uppercase tracking-tighter mb-4">TRIÂNGULO INVERTIDO DA GUARDA FECHADA</h3>
<p className="font-body text-tertiary-fixed-dim max-w-xl mb-6">Refine sua mecânica de quadril. Esta variação é ideal para oponentes que defendem a postura agressivamente.</p>
<button className="bg-primary-container text-on-primary-container font-headline font-black uppercase italic px-8 py-4 active:scale-95 duration-150 transition-all flex items-center gap-2">
                        ASSISTIR AULA <span className="material-symbols-outlined">play_arrow</span>
</button>
</div>
</div>
{/*  Ideal Path  */}
<div className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between">
<div>
<span className="font-label text-[10px] font-bold uppercase tracking-widest text-secondary mb-4 block">PRÓXIMO PASSO</span>
<h3 className="font-headline text-2xl font-black uppercase tracking-tighter mb-4 italic">TRILHA: MESTRE DA MEIA-GUARDA</h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm font-bold text-on-surface">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<span>Recuperação de Postura</span>
</li>
<li className="flex items-center gap-3 text-sm font-bold text-on-surface">
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>radio_button_checked</span>
<span>Raspagem Tesoura</span>
</li>
<li className="flex items-center gap-3 text-sm font-bold text-tertiary-fixed-dim">
<span className="material-symbols-outlined">radio_button_unchecked</span>
<span>Transição para Costas</span>
</li>
</ul>
</div>
<button className="mt-8 border border-outline-variant text-on-surface font-label text-[10px] font-bold uppercase tracking-widest py-4 hover:bg-surface-container-highest transition-colors">
                    CONTINUAR TRILHA
                </button>
</div>
{/*  Daily Challenges Carousel Heading  */}
<div className="md:col-span-12 mt-4">
<h4 className="font-headline text-2xl font-black uppercase tracking-tighter italic border-l-4 border-primary-container pl-4">DESAFIOS RECOMENDADOS</h4>
</div>
{/*  Challenges Cards  */}
<div className="md:col-span-4 bg-surface-container p-6 flex flex-col gap-4">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl text-secondary">fitness_center</span>
<span className="bg-surface-container-highest text-[10px] font-bold uppercase px-2 py-1">HARD</span>
</div>
<h5 className="font-headline text-xl font-black uppercase tracking-tighter">100 RASPAGENS</h5>
<p className="text-sm text-tertiary-fixed-dim">Acumule 100 raspagens em treinos livres durante esta semana.</p>
<div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">32/100 CONCLUSO</span>
<span className="material-symbols-outlined text-on-surface-variant">trending_up</span>
</div>
</div>
<div className="md:col-span-4 bg-surface-container p-6 flex flex-col gap-4">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl text-secondary">timer</span>
<span className="bg-surface-container-highest text-[10px] font-bold uppercase px-2 py-1">MEDIUM</span>
</div>
<h5 className="font-headline text-xl font-black uppercase tracking-tighter">GAS INFINITO</h5>
<p className="text-sm text-tertiary-fixed-dim">Mantenha a movimentação constante por 3 rounds de 6 min sem parar.</p>
<div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">0/3 CONCLUSO</span>
<span className="material-symbols-outlined text-on-surface-variant">schedule</span>
</div>
</div>
<div className="md:col-span-4 bg-surface-container p-6 flex flex-col gap-4">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-4xl text-secondary">school</span>
<span className="bg-surface-container-highest text-[10px] font-bold uppercase px-2 py-1">LIGHT</span>
</div>
<h5 className="font-headline text-xl font-black uppercase tracking-tighter">TEORIA ANALÍTICA</h5>
<p className="text-sm text-tertiary-fixed-dim">Assista 3 vídeos de análise de luta do Sensei sobre defesa de meia.</p>
<div className="mt-auto pt-4 border-t border-outline-variant flex justify-between items-center">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary-container">1/3 CONCLUSO</span>
<span className="material-symbols-outlined text-on-surface-variant">menu_book</span>
</div>
</div>
</div>
{/*  Feedback Section: Asymmetric Design  */}
<section className="mt-16 bg-[#0e0e0e] grid md:grid-cols-2">
<div className="p-12 flex flex-col justify-center">
<h3 className="font-headline text-4xl font-black uppercase tracking-tighter mb-6 leading-none">AJUSTE O SEU <br/><span className="text-primary-container">ALGORITMO</span></h3>
<p className="text-tertiary-fixed-dim mb-8">Nossas recomendações são baseadas na sua performance recente. Sentiu que as técnicas estão muito avançadas ou básicas?</p>
<div className="flex gap-4">
<button className="flex-1 border border-primary-container text-on-surface font-label text-[10px] font-bold uppercase tracking-widest py-4 hover:bg-primary-container/10 transition-colors">MAIS DIFÍCIL</button>
<button className="flex-1 border border-outline-variant text-on-surface font-label text-[10px] font-bold uppercase tracking-widest py-4 hover:bg-surface-container-highest transition-colors">ESTÁ PERFEITO</button>
</div>
</div>
<div className="hidden md:block relative h-full min-h-[400px]">
<img alt="Athletic training" className="absolute inset-0 w-full h-full object-cover" data-alt="monochromatic high-contrast image of an athlete tying their white belt, focus on the knot and hands, dark gym background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrz7_vmmluFrVVzrLsDBIedXOaCJx1NPoVwiQN2iVU06DmCoMAPDciFQfsvwAgMd98keYhw40wFJuXMGj6djGPJKVPq79Sz5JB_1y0PqJNxIjAZgb1AooFd3ssJ8du0SkjUSVSEBPn-6a8jE-eSDqx7hz-BQiTfLAXHIbQ9QKszrHG_uy6EF2a2KpElJudFIYhbjeca23w-c9MHC8XDw9dN8hGwowiCJcdFieMFUzPIPvgoZ-T7yXfAIs2alAwTD4cMKxorTGFZtSd"/>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#353534]/80 backdrop-blur-md shadow-[0_-4px_10px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#E70000] to-[#C00100] text-white p-2 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="route" style={{ /* font-variation-settings: 'FILL' 1; */ }}>route</span>
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
