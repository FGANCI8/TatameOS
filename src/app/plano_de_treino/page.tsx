import React from 'react';

export default function PlanoDeTreino() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none bg-[#131313] dark:bg-black/80 backdrop-blur-md flex justify-between items-center px-6 h-16 w-full">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white cursor-pointer active:scale-95 duration-100">menu</span>
<h1 className="font-headline uppercase tracking-tighter font-black text-2xl italic text-[#E70000] tracking-widest">KINETIC BJJ</h1>
</div>
<div className="h-10 w-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="perfil de um lutador de jiu-jitsu profissional com expressão focada e séria em iluminação dramática de estúdio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5d4UONZe3h0xIJZ9XPV9NrVGZyl-dKsGo3CLcDmFn3NpXAjB-0mb_PIyk3JOqVoEtw189hcA4kNBZRRLUfwioILSMRwr4ElTer50rxWdo57FxknbWGgq9raMR8mB_WSs6bSmcaQYTRNE3InhyGXzc8IcGQWDFbhikDUUV50gL0vW5CkV6RBK0oqjBXEaEB_tkprh1yQug6lzz1Q_6gfDjSfTUiPmw6-Nv1pfExLWLjwdCgs1T7PR6JwSYcth_M14obaOflN4NqGKd"/>
</div>
</header>
<main className="pt-20 pb-28 px-4 md:px-8 max-w-7xl mx-auto space-y-8">
{/*  Hero Section: Motivation & Priority  */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
<div className="lg:col-span-8 bg-surface-container-low p-8 border-l-8 border-primary-container relative overflow-hidden">
<div className="relative z-10">
<span className="font-label text-primary-container font-black uppercase tracking-widest text-xs">PRIORIDADE MÁXIMA</span>
<h2 className="font-headline text-5xl md:text-7xl font-black uppercase leading-none mt-2 mb-4">FORJA DA FALHA</h2>
<p className="max-w-xl text-tertiary-fixed-dim font-medium leading-relaxed">Não treine até conseguir. Treine até que seja impossível errar. Este cronograma foca na correção cirúrgica dos seus pontos de pressão.</p>
</div>
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-primary-container/10 to-transparent hidden md:block"></div>
</div>
<div className="lg:col-span-4 bg-primary-container p-8 flex flex-col justify-between">
<div>
<span className="font-label text-on-primary font-bold uppercase tracking-widest text-xs">FREQUÊNCIA SEMANAL</span>
<div className="flex items-baseline gap-2 mt-2">
<span className="font-headline text-6xl font-black text-on-primary-container">04</span>
<span className="font-headline text-2xl font-bold text-on-primary">SESSÕES</span>
</div>
</div>
<div className="mt-8 border-t border-on-primary/20 pt-4">
<span className="font-label text-on-primary font-bold uppercase tracking-widest text-xs">META DE MELHORIA</span>
<p className="font-headline text-xl font-bold text-on-primary-container uppercase mt-1">REPOSIÇÃO DE GUARDA SOB PRESSÃO</p>
</div>
</div>
</section>
{/*  Bento Grid: Exercise Checklist & Drills  */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/*  Checklist Card  */}
<div className="bg-surface-container-high p-6 flex flex-col space-y-6">
<div className="flex justify-between items-center">
<h3 className="font-headline text-xl font-extrabold uppercase tracking-tight">CHECKLIST TÉCNICO</h3>
<span className="material-symbols-outlined text-primary-container">fact_check</span>
</div>
<div className="space-y-4">
<label className="flex items-center gap-4 group cursor-pointer">
<input className="w-6 h-6 border-2 border-outline-variant bg-transparent checked:bg-primary-container text-primary-container focus:ring-0 rounded-none transition-all" type="checkbox"/>
<span className="font-label text-sm font-bold uppercase tracking-wide group-hover:text-white transition-colors">Postura de Defesa (Shell)</span>
</label>
<label className="flex items-center gap-4 group cursor-pointer">
<input checked="" className="w-6 h-6 border-2 border-outline-variant bg-transparent checked:bg-primary-container text-primary-container focus:ring-0 rounded-none transition-all" type="checkbox"/>
<span className="font-label text-sm font-bold uppercase tracking-wide group-hover:text-white transition-colors">Fuga de Quadril Explosiva</span>
</label>
<label className="flex items-center gap-4 group cursor-pointer">
<input className="w-6 h-6 border-2 border-outline-variant bg-transparent checked:bg-primary-container text-primary-container focus:ring-0 rounded-none transition-all" type="checkbox"/>
<span className="font-label text-sm font-bold uppercase tracking-wide group-hover:text-white transition-colors">Esgrima Reativa</span>
</label>
<label className="flex items-center gap-4 group cursor-pointer">
<input className="w-6 h-6 border-2 border-outline-variant bg-transparent checked:bg-primary-container text-primary-container focus:ring-0 rounded-none transition-all" type="checkbox"/>
<span className="font-label text-sm font-bold uppercase tracking-wide group-hover:text-white transition-colors">Bloqueio de Joelho</span>
</label>
</div>
</div>
{/*  Drill Focus Card  */}
<div className="bg-surface-container-low p-6 flex flex-col space-y-4">
<h3 className="font-headline text-xl font-extrabold uppercase tracking-tight">DRILLS DE EXAUSTÃO</h3>
<div className="flex-1 space-y-4 overflow-y-auto pr-2">
<div className="bg-surface-container p-4 border-l-4 border-secondary transition-all hover:bg-surface-container-highest">
<div className="flex justify-between items-start">
<span className="font-headline text-2xl font-black text-secondary">01</span>
<span className="font-label text-[10px] font-bold bg-secondary/20 text-secondary px-2 py-1 uppercase tracking-tighter">10 MIN</span>
</div>
<h4 className="font-bold text-sm uppercase mt-2">Passagem de Toureando</h4>
<p className="text-xs text-tertiary-fixed-dim mt-1">Velocidade máxima com foco no posicionamento dos pés.</p>
</div>
<div className="bg-surface-container p-4 border-l-4 border-primary-container transition-all hover:bg-surface-container-highest">
<div className="flex justify-between items-start">
<span className="font-headline text-2xl font-black text-primary-container">02</span>
<span className="font-label text-[10px] font-bold bg-primary-container/20 text-primary-container px-2 py-1 uppercase tracking-tighter">15 MIN</span>
</div>
<h4 className="font-bold text-sm uppercase mt-2">Saída de Montada</h4>
<p className="text-xs text-tertiary-fixed-dim mt-1">Foco em ponte explosiva e fuga de quadril conectada.</p>
</div>
</div>
</div>
{/*  Performance Streak / Progress Card  */}
<div className="bg-surface-container-highest p-6 flex flex-col justify-between">
<div>
<h3 className="font-headline text-xl font-extrabold uppercase tracking-tight mb-6">PROGRESSO DISCIPLINAR</h3>
<div className="space-y-6">
<div>
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
<span>CONSISTÊNCIA</span>
<span>85%</span>
</div>
{/*  Performance Streak Component  */}
<div className="h-2 bg-surface-container w-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-[85%] relative overflow-hidden">
<div className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-full animate-pulse"></div>
</div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
<span>INTENSIDADE</span>
<span>60%</span>
</div>
<div className="h-2 bg-surface-container w-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-primary-container to-inverse-primary w-[60%]"></div>
</div>
</div>
</div>
</div>
<button className="w-full bg-primary-container py-4 font-headline font-black uppercase text-sm tracking-widest text-on-primary-container active:scale-95 duration-100 mt-8">
                    INICIAR SESSÃO HOJE
                </button>
</div>
</section>
{/*  Schedule / Calendar Section  */}
<section className="bg-surface-container-low p-6 md:p-10">
<h3 className="font-headline text-3xl font-black uppercase tracking-tighter border-b-4 border-primary-container inline-block mb-10">CRONOGRAMA DE GUERRA</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
{/*  Day  */}
<div className="bg-surface-container p-4 flex flex-col items-center justify-center space-y-2 border-t-2 border-primary-container">
<span className="font-label text-[10px] font-black uppercase opacity-50">SEG</span>
<span className="font-headline text-3xl font-black">12</span>
<div className="w-2 h-2 bg-primary-container"></div>
</div>
{/*  Day Active  */}
<div className="bg-primary-container p-4 flex flex-col items-center justify-center space-y-2">
<span className="font-label text-[10px] font-black uppercase text-on-primary-container">TER</span>
<span className="font-headline text-3xl font-black text-on-primary-container">13</span>
<span className="material-symbols-outlined text-on-primary-container text-lg">fitness_center</span>
</div>
{/*  Day  */}
<div className="bg-surface-container p-4 flex flex-col items-center justify-center space-y-2 opacity-30">
<span className="font-label text-[10px] font-black uppercase">QUA</span>
<span className="font-headline text-3xl font-black">14</span>
</div>
{/*  Day  */}
<div className="bg-surface-container p-4 flex flex-col items-center justify-center space-y-2 border-t-2 border-primary-container">
<span className="font-label text-[10px] font-black uppercase opacity-50">QUI</span>
<span className="font-headline text-3xl font-black">15</span>
<div className="w-2 h-2 bg-primary-container"></div>
</div>
{/*  Day  */}
<div className="bg-surface-container p-4 flex flex-col items-center justify-center space-y-2 opacity-30">
<span className="font-label text-[10px] font-black uppercase">SEX</span>
<span className="font-headline text-3xl font-black">16</span>
</div>
{/*  Day  */}
<div className="bg-surface-container p-4 flex flex-col items-center justify-center space-y-2 border-t-2 border-secondary">
<span className="font-label text-[10px] font-black uppercase opacity-50">SAB</span>
<span className="font-headline text-3xl font-black">17</span>
<div className="w-2 h-2 bg-secondary"></div>
</div>
{/*  Day  */}
<div className="bg-surface-container p-4 flex flex-col items-center justify-center space-y-2 opacity-30">
<span className="font-label text-[10px] font-black uppercase">DOM</span>
<span className="font-headline text-3xl font-black">18</span>
</div>
</div>
</section>
{/*  Visual Motivational Section  */}
<section className="relative h-64 w-full bg-black flex items-center justify-center overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale" data-alt="close-up dramático em preto e branco de mãos de um lutador amarrando a faixa preta com textura detalhada do tecido" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5K_OgmNhrVikjXAtFU6zthQYxup79koKUZVNRW9Nr8gOI9qWrpFINvhBwChEXOcAPY5qsci1M1Yu2jAE3YC48x39ZjY7IWJARQq26iGc5hQRWYua9D4y1tZ3RV4nzoLohEYy7EHP2RsZ8mLl1Fve0H3eYcKCvvxoVMrxRn9RHdCFx11GJ36xnLS2U3Bvb6tPqvVFD2GeaVsep1FCsuvWPHKH-0sjK6JGIgzQwvNyZjhYs7vWdhuuaPgLUBBm1rML6VvJH9H76EWnQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="relative z-10 text-center px-4">
<h4 className="font-headline text-3xl md:text-5xl font-black uppercase tracking-tighter italic">A DISCIPLINA SUPERA O TALENTO.</h4>
<p className="font-label text-xs font-bold tracking-[0.3em] text-primary-container mt-4">RESILIÊNCIA É A ÚNICA REGRA</p>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-20 flex justify-around items-center px-4 pb-safe bg-[#1C1B1B] dark:bg-[#0E0E0E] z-50 border-t-0 bg-gradient-to-b from-[#1C1B1B] to-[#131313] shadow-[0_-4px_10px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] pt-2 hover:text-white transition-all active:bg-[#2A2A2A] duration-200" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
