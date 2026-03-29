import React from 'react';

export default function PerfilDoAluno() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#E70000]">
<img alt="Instructor" data-alt="Close-up of a Brazilian Jiu-Jitsu instructor with a focused expression in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd361U6kmCNcbKPQxNrxfjr3y3mRqu-HQva6afeeAtdb8I65J1WYHsIKJRg3OZw7GAGRfx3OCSpgUgvix94m3a0f3QlBEsPN--moJ5utXbfIfW0fORbcOJ-acjs3zqTnJSHBp33NK0GMxZmBob3_xCdEN0ddKtZHVcSUioO7wwRFq-lZaC-7nruNHn6AwvZzSkaKSmW2_Sp7S7MJZ-9_Vc-DoqmoBVdWXOsy8DbcQ8-ja-E4EJbg4Eexx3icpYd3Ee2ldSNInRpwh3"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter text-2xl font-black italic text-[#E70000]">KINETIC BJJ</h1>
</div>
<button className="text-[#393939] hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="mt-20 px-6 max-w-5xl mx-auto">
{/*  Profile Hero Section  */}
<section className="relative flex flex-col md:flex-row gap-8 items-start mb-12">
<div className="relative group">
<div className="w-40 h-40 bg-surface-container-high border-l-4 border-primary-container overflow-hidden">
<img alt="Bruno Silva" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="Athletic man in a blue jiu-jitsu gi sitting on gym mats, looking focused and determined, cinematic dark gym lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzilNZ240DEZ6upE-v_5LfzrsBM9hviKsZzHPzwqnSAhynJGC519bgtp2OTFQxH23f5DgFiR-HEgw_80RFZnmyWfDUfAKgXAktlun7n_vyPoSJbrDLUolcC_kEE2wCQYt-9g5KMZwb9JLV-6DrnUzWEXVc-f79o7UIsWOSW6AYzitB0XW_XCL6oCs6I1hsca9VEVmMz4vW9EPolf13rPIx7C78DmnC9KWVY_FY86AXfxOugtNWM65F_upAKmGwUuqXZrqyiMDpHglA"/>
</div>
<div className="absolute -bottom-2 -right-2 bg-primary-container px-3 py-1 flex items-center">
<span className="material-symbols-outlined text-[14px] mr-1" data-icon="edit">edit</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest text-on-primary-container">EDITAR</span>
</div>
</div>
<div className="flex-1 space-y-4">
<div>
<span className="font-label text-xs uppercase tracking-[0.3em] text-tertiary-fixed-dim">ALUNO ELITE</span>
<h2 className="font-headline text-5xl font-black uppercase italic leading-none text-on-surface">Bruno Silva</h2>
</div>
{/*  Belt Section  */}
<div className="flex items-center gap-4">
<div className="relative w-48 h-10 bjj-belt-blue flex items-center px-1 border border-white/10 shadow-lg">
<div className="absolute right-0 w-12 h-full bg-black flex flex-col justify-center items-center gap-1 border-l border-white/20">
{/*  Stripes (Graus)  */}
<div className="w-8 h-1 bg-white/90"></div>
<div className="w-8 h-1 bg-white/90"></div>
<div className="w-8 h-1 bg-white/90 flex items-center justify-center opacity-20"></div>
<div className="w-8 h-1 bg-white/90 flex items-center justify-center opacity-20"></div>
</div>
<span className="text-white font-headline font-black text-xs uppercase tracking-tighter px-4">FAIXA AZUL • 2 GRAUS</span>
</div>
<div className="bg-surface-container-high px-4 py-2">
<span className="block font-label text-[10px] text-tertiary">FREQ. SEMANAL</span>
<span className="font-headline font-bold text-primary-container">4X POR SEMANA</span>
</div>
</div>
</div>
</section>
{/*  Stats Bento Grid  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
{/*  Main Metric: Tatami Hours  */}
<div className="md:col-span-2 bg-surface-container-low p-8 flex flex-col justify-between group hover:bg-surface-container transition-colors border-l border-primary-container">
<span className="font-label text-xs font-bold uppercase tracking-widest text-tertiary">Tempo de Tatame</span>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-headline text-7xl font-black text-on-surface group-hover:text-primary-container transition-colors">342</span>
<span className="font-headline text-xl text-tertiary">HORAS</span>
</div>
<div className="mt-6 flex items-center gap-2 text-primary-container">
<span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
<span className="font-label text-xs font-bold">+12% ESTE MÊS</span>
</div>
</div>
{/*  Streak Counter  */}
<div className="bg-surface-container-highest p-6 flex flex-col justify-between border-t border-primary-container/30">
<span className="font-label text-xs font-bold uppercase tracking-widest text-tertiary">Streak</span>
<div>
<span className="font-headline text-5xl font-black text-on-primary-container">14</span>
<p className="font-label text-[10px] text-tertiary uppercase mt-1">DIAS SEGUIDOS</p>
</div>
<div className="flex gap-1 mt-4">
<div className="w-full h-1 bg-primary-container"></div>
<div className="w-full h-1 bg-primary-container"></div>
<div className="w-full h-1 bg-primary-container"></div>
<div className="w-full h-1 bg-surface-container"></div>
<div className="w-full h-1 bg-surface-container"></div>
</div>
</div>
{/*  Ranking  */}
<div className="bg-surface-container-low p-6 flex flex-col justify-between border-r border-white/5">
<span className="font-label text-xs font-bold uppercase tracking-widest text-tertiary">Posição</span>
<div>
<span className="font-headline text-5xl font-black text-secondary">#12</span>
<p className="font-label text-[10px] text-tertiary uppercase mt-1">NO RANKING LOCAL</p>
</div>
<span className="material-symbols-outlined text-secondary" data-icon="military_tech">military_tech</span>
</div>
</section>
{/*  Current Journey Section  */}
<section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/*  Active Trail  */}
<div className="lg:col-span-2 space-y-6">
<h3 className="font-headline text-2xl font-black uppercase italic text-on-surface flex items-center gap-3">
<span className="w-8 h-[2px] bg-primary-container"></span>
                    Trilha Atual
                </h3>
<div className="bg-surface-container-high p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-[120px]" data-icon="rebase_edit">rebase_edit</span>
</div>
<div className="relative z-10">
<span className="font-label text-xs text-primary-container font-bold tracking-widest uppercase">MÓDULO AVANÇADO</span>
<h4 className="font-headline text-4xl font-black uppercase mt-2 mb-6">Guarda Aberta</h4>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="font-label text-xs uppercase text-tertiary">Progresso Geral</span>
<span className="font-headline text-xl font-bold text-on-surface">42<span className="text-tertiary text-sm ml-1">/150 TÉCNICAS</span></span>
</div>
{/*  Performance Streak Style Progress Bar  */}
<div className="h-4 bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#bdc2ff] to-[#a8afff] w-[28%] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  Recent Achievements / Side List  */}
<div className="space-y-6">
<h3 className="font-headline text-2xl font-black uppercase italic text-on-surface flex items-center gap-3">
<span className="w-8 h-[2px] bg-primary-container"></span>
                    Sensei Insights
                </h3>
<div className="space-y-3">
<div className="bg-surface-container-low p-4 border-l-2 border-secondary">
<p className="font-body text-sm italic text-on-surface">"Foco na transição de quadril na De La Riva. Você está 1s mais lento que o ideal."</p>
<span className="block mt-2 font-label text-[10px] text-secondary font-bold uppercase tracking-tighter">— Prof. Ricardo</span>
</div>
<div className="bg-surface-container-low p-4 flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container" data-icon="fitness_center">fitness_center</span>
</div>
<div>
<span className="block font-headline font-bold text-xs uppercase">PRÓXIMO TREINO</span>
<span className="block font-label text-[10px] text-tertiary">Hoje, 19:30 • No-Gi</span>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-[#131313]/90 backdrop-blur-xl z-50">
<div className="bg-gradient-to-r from-transparent via-[#E70000]/20 to-transparent h-[1px] top-0 absolute w-full"></div>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="rebase_edit">rebase_edit</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 active:scale-90 duration-150" href="#">
<span className="material-symbols-outlined" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
