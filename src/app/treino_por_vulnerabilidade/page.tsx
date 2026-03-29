import React from 'react';

export default function TreinoPorVulnerabilidade() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-50 flex justify-between items-center w-full px-6 py-4 border-b-0 bg-[#1C1B1B]">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer">menu</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-widest text-2xl italic text-[#E70000]">Kinetic_BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden">
<img alt="User Profile Avatar" className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu Jitsu practitioner with intense gaze and sweat, dark cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdPOLL3R_JuX8jFBcK3AAuMfoc075BL9dEVpPZBgrCIPJSLwa6bE3Wd0SH_k_Vzr_ZkuV4nSvL_ryTixuZZLuQHi-LSeptbLq83he4LPEZxmQglgwvpFtykwCShFhDYTnQh3sEXFK2nKufwZn3SsZzvEmtGzdTuC-d9GN8s2877IsQgrEWy2jr-2hfFsZuQ5UbsPaLOEPbetjrtiBZF-5ZipBETWLE6je5zHxgZmWEPoc_HDV6rqra8QtawM7cXDbVsMUZjq_GzuCP"/>
</div>
</header>
<main className="flex-grow px-6 pt-8 pb-32 max-w-7xl mx-auto w-full">
{/*  Hero Section: Dynamic Vulnerability Analysis  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div>
<span className="font-['Inter'] font-bold text-[12px] uppercase tracking-[0.3em] text-secondary">Performance Telediagnosis</span>
<h2 className="font-['Lexend'] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-2">TREINO<br/><span className="text-primary-container">FOCADO</span></h2>
</div>
<div className="bg-surface-container-high p-4 flex flex-col gap-1 border-l-4 border-primary-container min-w-[200px]">
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Status de Vulnerabilidade</span>
<span className="font-['Lexend'] text-2xl font-black text-on-surface">CRÍTICO</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="w-full h-4 bg-surface-container-highest relative overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary to-on-secondary-container w-3/4 animate-pulse"></div>
</div>
<div className="flex justify-between mt-2 font-['Inter'] text-[10px] font-extrabold uppercase tracking-widest text-tertiary-fixed-dim">
<span>Eficiência Global: 75%</span>
<span>Alvo: 95%</span>
</div>
</section>
{/*  Bento Grid for Vulnerability Blocks  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Defesa de Queda - Massive Highlight  */}
<article className="md:col-span-8 bg-surface-container-low flex flex-col relative group overflow-hidden h-[400px]">
<div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40">
<img className="w-full h-full object-cover" data-alt="Two athletes grappling on mats, focusing on a takedown defense posture, high contrast black and white style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnuQxj7ow8ZCpLX2xtP9ePjmNH-FbTtdX21ncYocgYXaKu0Fj19g7Nlk66_3qZe83L0FbQq4zoiXiQngaa9CWKrf7zN9YnnDZ7uK464gbhV2obCZpWDP_HqNDiVtigExVV0JHn5jUVzj-ENvmu9NT7-B_2nT9SoQXRIReh-0DV7sXsmmAytT05rh2xZ_JWG0y8GLAdqpPBRXSMSM2U_YYZKEM6jf9TOgQ72y-8iXvLh1TtEXC3JF1bXUepJeMjCaj-lGIKPF-tHnA8"/>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<div className="inline-block bg-primary-container text-on-primary-container px-3 py-1 font-['Inter'] text-[10px] font-black uppercase tracking-[0.2em] mb-4">ALTA PRIORIDADE</div>
<h3 className="font-['Lexend'] text-4xl font-black uppercase tracking-tighter">Defesa de Queda</h3>
<p className="font-['Inter'] text-tertiary-fixed-dim max-w-sm mt-4 text-sm leading-relaxed">Sua taxa de sprawl caiu 15% nos últimos 3 treinos. Foco em reação de quadril e esgrima antecipada.</p>
</div>
<div className="flex items-end justify-between">
<div className="flex gap-8">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-secondary uppercase">Duração</span>
<span className="text-2xl font-['Lexend'] font-black">45min</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-secondary uppercase">Intensidade</span>
<span className="text-2xl font-['Lexend'] font-black text-primary-container">MAX</span>
</div>
</div>
<button className="bg-primary-container text-on-primary-container font-['Inter'] font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-inverse-primary transition-colors">INICIAR</button>
</div>
</div>
</article>
{/*  Retenção de Guarda  */}
<article className="md:col-span-4 bg-surface-container-high p-8 flex flex-col justify-between h-[400px]">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-secondary text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield</span>
<span className="font-['Lexend'] text-6xl font-black text-white/5">02</span>
</div>
<div>
<h3 className="font-['Lexend'] text-2xl font-black uppercase tracking-tighter mb-2">Retenção de Guarda</h3>
<div className="w-full h-[2px] bg-secondary/20 mb-4">
<div className="w-2/3 h-full bg-secondary"></div>
</div>
<p className="font-['Inter'] text-tertiary-fixed-dim text-xs uppercase tracking-widest font-bold">Vulnerabilidade: Passagem de Toureando</p>
</div>
<div className="flex flex-col gap-4">
<div className="flex justify-between font-['Inter'] text-[10px] font-extrabold uppercase">
<span>30 MINUTOS</span>
<span className="text-secondary">MÉDIA</span>
</div>
<button className="w-full border border-outline-variant py-4 font-['Inter'] font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-surface-container-highest transition-colors">CONFIGURAR</button>
</div>
</article>
{/*  Base e Postura  */}
<article className="md:col-span-4 bg-surface-container-highest p-8 flex flex-col justify-between h-[320px]">
<div>
<h3 className="font-['Lexend'] text-2xl font-black uppercase tracking-tighter leading-none mb-2">Base e Postura</h3>
<span className="font-['Inter'] text-[10px] font-bold text-tertiary uppercase tracking-[0.2em]">Fundamentos Sólidos</span>
</div>
<div className="bg-surface-container-lowest p-4">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-primary-container">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Drill de Equilíbrio Unilateral</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container">timer</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">3 Séries x 10 Minutos</span>
</div>
</div>
<button className="bg-on-surface text-surface font-['Inter'] font-black text-[10px] py-3 uppercase tracking-widest">DETALHES</button>
</article>
{/*  Extra Module: Recuperação Ativa  */}
<article className="md:col-span-8 bg-surface-container p-8 flex flex-col md:flex-row gap-8 items-center h-auto md:h-[320px]">
<div className="w-full md:w-1/2 h-48 bg-surface-container-lowest">
<img className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all" data-alt="Close up of athlete hands doing mobility exercises, focus on precision and stretching, moody gym lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4KrNAJblch5FkNJEPEQNQw3vB9R4m0ip3scxX70uSHrTDlhnAaHEoEtRPfaKI6-NDHQ1dJPK9_CWj99mvgLEO4pwm-ik9tPBPAUeBJOG1CyfHs9H6jmeAzEQgHKUQpPLi48TX_2bpUJylkRyxsLUNtaQ4tSDk3wWiOEs8L590Kyjw8ITRnH8-y5F2-gOLCfyB1Dne8YS9F4RmUBNOlElQpfMbZp_2L5jL4AIh77pmkeHad9_4akL0mGujhzoNujQcziUVQg3N-TXJ"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<h4 className="font-['Lexend'] text-xl font-black uppercase tracking-tighter mb-4">Mobilidade Corretiva</h4>
<p className="font-['Inter'] text-tertiary-fixed-dim text-sm mb-6">Reduza o risco de lesões causadas por base instável através de rotinas de mobilidade de quadril.</p>
<div className="flex gap-4">
<span className="bg-secondary/10 text-secondary px-3 py-1 font-bold text-[10px] tracking-tighter">MOBILIDADE</span>
<span className="bg-secondary/10 text-secondary px-3 py-1 font-bold text-[10px] tracking-tighter">REFLUXO</span>
</div>
</div>
</article>
</div>
{/*  Motivational CTA  */}
<section className="mt-16 mb-8 text-center bg-gradient-to-b from-surface-container-low to-transparent py-12">
<h5 className="font-['Lexend'] text-3xl font-black uppercase italic tracking-widest mb-4">Fraqueza é apenas um <span className="text-primary-container">Dado</span>.</h5>
<p className="font-['Inter'] text-tertiary-fixed-dim uppercase text-[10px] font-extrabold tracking-[0.4em]">Elimine as brechas. Domine o tatame.</p>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="bg-[#1C1B1B]/80 backdrop-blur-xl fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 z-50">
{/*  Início  */}
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</a>
{/*  Biblioteca  */}
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</a>
{/*  Trilha  */}
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</a>
{/*  Treino (ACTIVE)  */}
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</a>
{/*  Sensei  */}
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">school</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
