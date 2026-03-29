import React from 'react';

export default function EvoluODeFalhas() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 z-50 w-full bg-[#131313] flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer" data-icon="menu">menu</span>
<h1 className="font-headline font-black uppercase tracking-widest text-2xl italic text-[#E70000]">Kinetic_BJJ</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu-Jitsu athlete with a focused expression, intense cinematic lighting, gritty urban gym background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGKRqLTfLq_3gYR6YHZChtMLqhZvzNtG_Pn2pJxFICK3E5erGkHB7F3scXWTMQgiysX0R1sR1V0UvagXo6SVSvb00oKM3epqy8mlt6NJlPUF4xNuU9Nr1S32wCPbLjPQAg6SA4hRsJe6jrxpP9f4W4UaOKocgW8DVCga8AjVrw9Ooqrv28asUIcUzPRL8KJPq6Xk09Sv-lsVySyXx1BNg0aqEZrZq8Hl1LbFtDm3L3YtFvqk5yrWldd9u_ypSHGJ8i8J9Q_HcPVr4p"/>
</div>
</header>
<main className="pt-24 pb-32 px-6 min-h-screen bg-mesh">
{/*  Hero Metric: Technical Confidence  */}
<section className="mb-12">
<span className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary-fixed-dim">Status da Evolução</span>
<div className="flex items-baseline gap-2 mt-2">
<h2 className="font-headline text-7xl font-black text-on-surface leading-none">88%</h2>
<span className="font-headline text-xl font-bold text-secondary uppercase italic">Confiança</span>
</div>
<p className="mt-4 text-tertiary-fixed-dim max-w-xs leading-relaxed">Sua exposição a falhas críticas reduziu drasticamente nos últimos 30 dias de treino intenso.</p>
</section>
{/*  Bento Grid: Analytics  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Performance Streak: Reduction in Guard Pass  */}
<div className="md:col-span-2 bg-surface-container-low p-6 flex flex-col justify-between min-h-[220px]">
<div className="flex justify-between items-start">
<div>
<span className="material-symbols-outlined text-primary mb-2" data-icon="shield_lock">shield_lock</span>
<h3 className="font-headline text-xl font-black uppercase italic tracking-tighter">Guarda Passada</h3>
</div>
<span className="text-primary font-headline text-2xl font-black">-32%</span>
</div>
<div>
<div className="flex justify-between items-end mb-2">
<span className="font-label text-[10px] font-bold uppercase tracking-widest text-tertiary-fixed-dim">Taxa de Erro</span>
<span className="font-label text-[10px] font-bold text-on-surface">MELHORIA CONSTANTE</span>
</div>
{/*  Custom Performance Streak Bar  */}
<div className="h-4 bg-surface-container-highest relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-secondary to-on-secondary-container w-[68%]">
<div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:20px_20px]"></div>
</div>
</div>
</div>
</div>
{/*  Heatmap / Activity Mini Card  */}
<div className="bg-surface-container-high p-6 flex flex-col justify-between">
<h3 className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary-fixed-dim">Consistência</h3>
<div className="grid grid-cols-4 gap-2 my-4">
<div className="aspect-square bg-primary-container"></div>
<div className="aspect-square bg-primary-container opacity-80"></div>
<div className="aspect-square bg-primary-container"></div>
<div className="aspect-square bg-surface-container-highest"></div>
<div className="aspect-square bg-primary-container"></div>
<div className="aspect-square bg-primary-container"></div>
<div className="aspect-square bg-primary-container opacity-60"></div>
<div className="aspect-square bg-primary-container"></div>
</div>
<div className="text-on-surface font-headline font-black text-lg">12 Dias <span className="text-primary italic">Streak</span></div>
</div>
{/*  Specific Failure Reduction List  */}
<div className="md:col-span-3 space-y-4 mt-4">
<h4 className="font-label text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary-fixed-dim mb-4">Falhas Corrigidas vs Pendentes</h4>
{/*  Item 1: Postura no Triângulo  */}
<div className="flex items-center justify-between p-5 bg-surface-container">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-secondary" data-icon="straighten">straighten</span>
</div>
<div>
<p className="font-label text-xs font-bold text-tertiary-fixed-dim uppercase tracking-widest">Postura no Triângulo</p>
<p className="text-on-surface font-bold">Correção de Alinhamento</p>
</div>
</div>
<div className="text-right">
<p className="text-secondary font-headline font-black italic">ESTÁVEL</p>
<p className="text-[10px] font-label uppercase text-tertiary-fixed-dim">95% Êxito</p>
</div>
</div>
{/*  Item 2: Exposição de Costas  */}
<div className="flex items-center justify-between p-5 bg-surface-container">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="warning">warning</span>
</div>
<div>
<p className="font-label text-xs font-bold text-tertiary-fixed-dim uppercase tracking-widest">Exposição de Costas</p>
<p className="text-on-surface font-bold">Saída de Meia-Guarda</p>
</div>
</div>
<div className="text-right">
<p className="text-primary font-headline font-black italic">-15% ERROS</p>
<p className="text-[10px] font-label uppercase text-tertiary-fixed-dim">Em progresso</p>
</div>
</div>
{/*  Item 3: Pegada Morta  */}
<div className="flex items-center justify-between p-5 bg-surface-container border-l-4 border-primary">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary" data-icon="front_hand" style={{ /* font-variation-settings: 'FILL' 1; */ }}>front_hand</span>
</div>
<div>
<p className="font-label text-xs font-bold text-tertiary-fixed-dim uppercase tracking-widest">Pegada Morta</p>
<p className="text-on-surface font-bold">Eficiência de Grip</p>
</div>
</div>
<div className="text-right">
<p className="text-on-surface font-headline font-black italic">NOVO ALVO</p>
<p className="text-[10px] font-label uppercase text-tertiary-fixed-dim">Análise Pendente</p>
</div>
</div>
</div>
</div>
{/*  Visualisation: Progress Over Time  */}
<section className="mt-12 bg-surface-container-lowest p-8 border border-white/5 relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-headline text-2xl font-black uppercase italic tracking-tighter text-on-surface mb-8">Histórico de Melhoria</h3>
<div className="h-48 flex items-end justify-between gap-2">
<div className="w-full bg-surface-container-highest h-[20%] relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-on-surface text-surface text-[8px] font-black px-1 py-0.5 opacity-0 group-hover:opacity-100 uppercase">Sem 01</div>
</div>
<div className="w-full bg-surface-container-highest h-[40%]"></div>
<div className="w-full bg-surface-container-highest h-[35%]"></div>
<div className="w-full bg-primary h-[65%]"></div>
<div className="w-full bg-primary h-[55%]"></div>
<div className="w-full bg-primary h-[85%] relative group">
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-primary text-on-primary-container text-[8px] font-black px-1 py-0.5 opacity-100 uppercase">ATUAL</div>
</div>
</div>
<div className="mt-4 flex justify-between font-label text-[10px] font-bold text-tertiary-fixed-dim uppercase tracking-widest">
<span>Semana 01</span>
<span>Semana 06</span>
</div>
</div>
{/*  Background Image Accent  */}
<div className="absolute top-0 right-0 w-1/3 h-full opacity-10 grayscale mix-blend-overlay">
<img alt="Texture" className="w-full h-full object-cover" data-alt="Gritty concrete texture with spray paint marks and athletic gym floor details, dark atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBvb-d94CG-YM4AvmUl8wHLP_mNHuTc_85YdSyKww3LLCRYOFht98GZOP1E6jYnbN_ej_AP8FnvU8etqeTB91veB4G0aCpntvXTbTATvHRfEpropzNg3rqNcYSnwoNI0a1g70QbOqVAbf1GAI_zgbN6Q91lwL9OmSthlOovHmif22Zb0YA0KYGGZObEiE4HtynyJ81CyO8tpaf16UvqmAbyL9WWwFtY0N7Vwg7T1vdF6k5bnpXLWVm8LTOJGXR8_8x4hb4JJgodx2E"/>
</div>
</section>
{/*  CTA Section  */}
<section className="mt-12">
<button className="w-full py-5 bg-primary-container text-on-primary-container font-headline font-black uppercase italic tracking-widest text-lg flex items-center justify-center gap-3 active:scale-95 transition-transform">
<span className="material-symbols-outlined" data-icon="analytics">analytics</span>
                Gerar Relatório Sensei
            </button>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full bg-[#1C1B1B]/80 backdrop-blur-xl flex justify-around items-center pt-3 pb-6 px-4 z-50">
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</div>
{/*  Active Item: Trilha / Evolution fits here  */}
<div className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined" data-icon="insights" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</div>
<div className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" data-icon="school">school</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</div>
</nav>

    </>
  );
}
