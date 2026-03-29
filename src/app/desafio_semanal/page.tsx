import React from 'react';

export default function DesafioSemanal() {
  return (
    <>
      
{/*  TopAppBar Section  */}
<header className="bg-[#131313] dark:bg-neutral-950 docked full-width top-0 z-50 border-b-0 bg-neutral-900/80 backdrop-blur-xl flex justify-between items-center w-full px-6 h-16 fixed">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer" data-icon="menu">menu</span>
<h1 className="font-['Lexend'] font-black uppercase tracking-tighter text-2xl italic text-[#E70000] dark:text-red-600 tracking-widest">KINETIC BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest border border-outline-variant flex items-center justify-center overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a focused athlete with intense eyes in a dark gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnjOK-LU6xglngJ-ObFnHnKnpwd6fw8j0X7JkTRptyK4PRzY3RlRL9zv4S3asq-xHbBVr7HgPTwUoNoJqbRqJKlJrUAE7voWLME2nQkh9hO1uJjbPupCICVcTzIIeo0XvgmmtXnMa94Tw7qo_CYXo3X7lh9pIsn1gpilwBJpMP1HpayJCS6ABeNndnsgwkn0haVTZtq81xDkdsOyjgt2OnDCcG-35TM7q9yQLPo5m_zvpwBiE6CsMepL9d152hwZTx_CxmJ3R4h7iZ"/>
</div>
</header>
<main className="pt-24 pb-32 px-4 max-w-4xl mx-auto kinetic-grid min-h-screen">
{/*  Hero Challenge Section  */}
<section className="relative mb-12">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-primary-container/10 blur-3xl rounded-full"></div>
<div className="mb-2">
<span className="font-headline font-black text-primary-container text-sm tracking-[0.2em] uppercase">DESAFIO DA SEMANA</span>
</div>
<h2 className="font-headline font-black text-6xl md:text-8xl text-on-surface leading-none tracking-tighter mb-4 italic text-glow-red">
                100 <br/>BERIMBOLOS
            </h2>
<p className="text-tertiary font-medium max-w-md mb-8 border-l-4 border-primary-container pl-4">
                Domine a transição mais técnica do Jiu-Jitsu moderno. Precisão, repetição e controle absoluto do adversário.
            </p>
{/*  Progress Monolith  */}
<div className="bg-surface-container-low p-6 mb-10 relative group overflow-hidden">
<div className="flex justify-between items-end mb-4">
<div>
<span className="block text-xs font-black text-tertiary-fixed-dim tracking-widest uppercase mb-1">Status Atual</span>
<span className="text-4xl font-headline font-black text-on-surface">45<span className="text-lg text-primary-container">/100</span></span>
</div>
<div className="text-right">
<span className="block text-xs font-black text-tertiary-fixed-dim tracking-widest uppercase mb-1">Tempo Restante</span>
<span className="text-xl font-headline font-bold text-on-surface">03 DIAS</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="h-4 bg-surface-container-highest w-full relative">
<div className="h-full bg-gradient-to-r from-primary-container to-inverse-primary w-[45%] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
<div className="mt-4 flex gap-2 overflow-x-auto pb-2">
<div className="bg-surface-container-high px-3 py-1 text-[10px] font-bold text-on-surface uppercase">S - 15 REPS</div>
<div className="bg-surface-container-high px-3 py-1 text-[10px] font-bold text-on-surface uppercase">T - 20 REPS</div>
<div className="bg-surface-container-high px-3 py-1 text-[10px] font-bold text-on-surface uppercase">Q - 10 REPS</div>
<div className="bg-surface-container-highest px-3 py-1 text-[10px] font-bold text-primary-container uppercase">HOJE - 0 REPS</div>
</div>
</div>
{/*  CTA Button  */}
<button className="w-full bg-primary-container hover:bg-inverse-primary text-on-primary-container font-headline font-black text-xl py-6 px-8 flex items-center justify-between group transition-all duration-300">
<span>ACEITAR DESAFIO</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</section>
{/*  Ranking Section  */}
<section className="mt-16">
<div className="flex justify-between items-end mb-8">
<h3 className="font-headline font-black text-3xl italic text-on-surface uppercase tracking-tight">Top Performance</h3>
<span className="text-xs font-bold text-primary-container uppercase border-b border-primary-container tracking-widest pb-1 cursor-pointer">Ver Todos</span>
</div>
<div className="space-y-4">
{/*  Rank 1  */}
<div className="bg-surface-container flex items-center p-4 group hover:bg-surface-container-high transition-colors">
<div className="w-12 text-2xl font-headline font-black italic text-primary-container italic">01</div>
<div className="w-14 h-14 bg-surface-container-highest overflow-hidden mr-4">
<img alt="Athlete 1" className="w-full h-full object-cover" data-alt="Intense athlete sweating after training in a dark martial arts gym with moody red lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8VDtrynMSQ91_vh_I2qLYsVHwWbeU55dONvknR0EvKr-RyOujtHkyjuA4yIZvyczu8yjZQWd2nNtrFDin0S3YfHGALQF6KBtZVsPw_7VmQN9P53vhExd1td7RlftEnc4MJst5zczSiMdlGYWlC3xTUnpTsirCMr3hcLhr-VSYKH9vxKQ1fQ5lxXzfvMO_gSKTyaD4N7q87Oa0s3AX6y-SBju32xm1nhtm459i3CHWnZMAtoT3scxY-5hG2hY8UN3zITSoLphMQLWo"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-on-surface uppercase text-sm tracking-wide">Ricardo "Tanque" Silva</h4>
<span className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">Faixa Marrom | Kinetic Elite</span>
</div>
<div className="text-right">
<span className="block font-headline font-black text-xl text-on-surface">112</span>
<span className="block text-[8px] font-bold text-primary-container uppercase">REPS</span>
</div>
</div>
{/*  Rank 2  */}
<div className="bg-surface-container flex items-center p-4 group hover:bg-surface-container-high transition-colors">
<div className="w-12 text-2xl font-headline font-black italic text-on-surface/50 italic">02</div>
<div className="w-14 h-14 bg-surface-container-highest overflow-hidden mr-4">
<img alt="Athlete 2" className="w-full h-full object-cover" data-alt="Young female martial artist tying her black belt in a dimly lit high performance training center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPpIvRTmeaBOfyCKaM8CQuiBToRowNeBbCqHE7BgvNlt6xNaf4qP3zqjGoU8q8FYsbzLKXRorWljhNsS_t0IHV9f63t72X1GFdRZg5DFiCZ1curyjdjavLvw2PvN6tsjmFXhIuXWJGNKEDZJnuHH-hMtBatWK-fMDpMX-lHfvFvUI3EnWx8ScoE9h3PA7iJ4wxGzz8XLt5s_jXVo9B6qc-WrO0nKwWyO6bZEWmbKpULI8UweUGMG50bgGdyNSiP9FzH0alao3nw7xA"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-on-surface uppercase text-sm tracking-wide">Beatriz Mendes</h4>
<span className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">Faixa Azul | Matriz</span>
</div>
<div className="text-right">
<span className="block font-headline font-black text-xl text-on-surface">98</span>
<span className="block text-[8px] font-bold text-primary-container uppercase">REPS</span>
</div>
</div>
{/*  Rank 3  */}
<div className="bg-surface-container flex items-center p-4 group hover:bg-surface-container-high transition-colors">
<div className="w-12 text-2xl font-headline font-black italic text-on-surface/50 italic">03</div>
<div className="w-14 h-14 bg-surface-container-highest overflow-hidden mr-4">
<img alt="Athlete 3" className="w-full h-full object-cover" data-alt="Muscular jiu jitsu practitioner resting against a wall in a gritty dark training facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZrJTfreXrXRnpSvPbih0VCqSSv10i_7zo8hMl183PwmVFE1Y3gexg6iqFxAMnw_Fld73HHMUTV9jo4JNLNOGskSm9BglrnsoRLEU8liobvVTlfA9OLz4e-bQqI09KzMDAr0jDTBfqXCk0wufDfxCs34tnTFZ3uhCvr9BotYFY686Wlwz7O_wbPVnD_xpKyDhKVv407IUv1BwY6K7tjZICbcm4m86iBm_XTQ7HY406hlXeKA8NFzhsotagrCGMcZJxCsQBqChHqSJx"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-on-surface uppercase text-sm tracking-wide">Felipe Arona</h4>
<span className="text-[10px] font-bold text-tertiary uppercase tracking-tighter">Faixa Roxa | Team Kinetic</span>
</div>
<div className="text-right">
<span className="block font-headline font-black text-xl text-on-surface">85</span>
<span className="block text-[8px] font-bold text-primary-container uppercase">REPS</span>
</div>
</div>
</div>
</section>
{/*  Quote Area  */}
<section className="my-16 py-12 border-y border-surface-container-highest">
<span className="material-symbols-outlined text-primary-container text-4xl mb-4" data-icon="format_quote">format_quote</span>
<blockquote className="font-headline font-black text-2xl text-on-surface italic leading-tight uppercase">
                "O jiu-jitsu é a arte de usar a força do oponente contra ele mesmo. O berimbolo é a prova de que a técnica supera o peso."
            </blockquote>
<cite className="block mt-4 text-xs font-bold text-tertiary tracking-widest uppercase">— Mestre Kinetic</cite>
</section>
</main>
{/*  BottomNavBar Section  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-end bg-[#1C1B1B] z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)] backdrop-blur-2xl">
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="home">home</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="library_books">library_books</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-4" href="#">
<span className="material-symbols-outlined mb-1" data-icon="insights" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="fitness_center">fitness_center</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-neutral-500 pt-2 pb-4 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="psychology">psychology</span>
<span className="font-['Lexend'] font-bold text-[10px] uppercase tracking-widest">Sensei</span>
</a>
</nav>
{/*  Floating Action Button for recording progress (Contextual)  */}
<button className="fixed bottom-24 right-6 w-16 h-16 bg-primary-container text-on-primary-container flex items-center justify-center shadow-2xl active:scale-95 transition-transform z-40">
<span className="material-symbols-outlined text-3xl" data-icon="add" style={{ /* font-variation-settings: 'wght' 700; */ }}>add</span>
</button>

    </>
  );
}
