import React from 'react';

export default function ConquistasEEvoluO() {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close-up profile portrait of a focused jiu-jitsu athlete with sweat on face in a dark moody gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC2bmW-1ldZ0GB1bccypyJ954WJFKd0z1Ccd_vlQXeUaiIpM1nqpEnv9TWQtDWDQs0YZqkgmr6Zkr9WD_zAa49E80wN7BQztwf8VkHAQYbtGtcwQrVKdFtSd-Tx1SFz-rEIB89uususj-VElbxkgnlSBIBlgZsJJ9Ljkma2QgqSL2XgpGAsPmyUxhlqkUxis84lgB2bZHxFw7wY2WOLQoEBSfYuxuLwwQXpTf4N3OnUPCnsMxhxLS0PkuFpXEkSCa_WkLn5SYvY8cj"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter text-2xl font-black italic text-[#E70000]">KINETIC BJJ</h1>
</div>
<button className="text-[#393939] hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="pt-24 px-6 max-w-5xl mx-auto">
{/*  Hero Section: Level & Progress  */}
<section className="mb-12">
<div className="flex items-baseline gap-4 mb-2">
<span className="font-headline font-black text-6xl text-on-surface leading-none">LVL 12</span>
<span className="font-label uppercase text-sm tracking-widest text-tertiary-fixed-dim">FAIXA AZUL • 2 GRAUS</span>
</div>
{/*  Performance Streak Component  */}
<div className="relative w-full h-8 bg-surface-container-highest overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#E70000] to-[#C00100] w-[68%]" style={{ /* box-shadow: 0 0 20px rgba(231, 0, 0, 0.3); */ }}></div>
<div className="absolute inset-0 flex items-center justify-between px-4 text-[10px] font-black uppercase tracking-tighter mix-blend-overlay">
<span>1450 XP</span>
<span>2000 XP PARA LVL 13</span>
</div>
</div>
</section>
{/*  Bento Grid: Stats & Evolution  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
{/*  Left Column: Metrics  */}
<div className="md:col-span-1 flex flex-col gap-4">
<div className="bg-surface-container-low p-6 flex flex-col justify-between h-48 border-l-4 border-primary-container">
<span className="font-label uppercase text-xs tracking-widest text-tertiary">TREINOS SEGUIDOS</span>
<div className="flex items-baseline gap-2">
<span className="font-headline font-black text-5xl text-on-surface">14</span>
<span className="material-symbols-outlined text-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>local_fire_department</span>
</div>
<p className="text-xs text-tertiary-fixed-dim uppercase leading-tight font-bold">RECORDE PESSOAL: 22 DIAS</p>
</div>
<div className="bg-surface-container-high p-6 flex flex-col justify-between h-48">
<span className="font-label uppercase text-xs tracking-widest text-tertiary">TEMPO DE TATAME</span>
<div className="flex items-baseline gap-2">
<span className="font-headline font-black text-5xl text-on-surface">342</span>
<span className="font-label text-sm font-bold">HRS</span>
</div>
<p className="text-xs text-secondary-fixed-dim uppercase leading-tight font-bold">+12H ESTA SEMANA</p>
</div>
</div>
{/*  Center/Right: Achievements Gallery  */}
<div className="md:col-span-2 bg-surface-container-low p-8">
<div className="flex justify-between items-center mb-8">
<h2 className="font-headline font-black text-3xl uppercase tracking-tighter">CONQUISTAS</h2>
<span className="font-label text-[10px] uppercase font-bold tracking-widest text-tertiary">VER TODAS (24/80)</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
{/*  Medal 1  */}
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 mb-4 bg-surface-container-highest flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-[#FFD700]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>workspace_premium</span>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-container border-2 border-surface"></div>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-widest text-on-surface mb-1">Iniciante</span>
<span className="text-[9px] text-tertiary uppercase leading-none">Primeira Aula Finalizada</span>
</div>
{/*  Medal 2  */}
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 mb-4 bg-surface-container-highest flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-[#E70000]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-widest text-on-surface mb-1">10 Treinos Seguidos</span>
<span className="text-[9px] text-tertiary uppercase leading-none">Constância de Ferro</span>
</div>
{/*  Medal 3  */}
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 mb-4 bg-surface-container-highest flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-[#C0C0C0]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield</span>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-widest text-on-surface mb-1">Mestre da Passagem</span>
<span className="text-[9px] text-tertiary uppercase leading-none">100 Passagens de Guarda</span>
</div>
{/*  Medal 4 (Locked)  */}
<div className="flex flex-col items-center text-center opacity-30 grayscale">
<div className="w-20 h-20 mb-4 bg-surface-container-lowest flex items-center justify-center border border-dashed border-outline-variant">
<span className="material-symbols-outlined text-4xl text-outline">lock</span>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-widest text-on-surface mb-1">Finalizador</span>
<span className="text-[9px] text-tertiary uppercase leading-none">???</span>
</div>
</div>
</div>
</div>
{/*  Techniques Mastery  */}
<section className="mb-12">
<h2 className="font-headline font-black text-3xl uppercase tracking-tighter mb-6">DOMÍNIO TÉCNICO</h2>
<div className="space-y-4">
<div className="bg-surface-container-high p-5 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-primary-container">sports_kabaddi</span>
<div>
<p className="font-headline text-lg uppercase tracking-tight font-bold">Guarda Fechada</p>
<p className="font-label text-[10px] uppercase font-bold text-tertiary-fixed-dim">Especialidade: Finalizações</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-1">
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-primary-container"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
</div>
<span className="font-headline text-xl italic font-black text-on-surface">80%</span>
</div>
</div>
<div className="bg-surface-container-high p-5 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-secondary">fitness_center</span>
<div>
<p className="font-headline text-lg uppercase tracking-tight font-bold">Passagem de Meia Guarda</p>
<p className="font-label text-[10px] uppercase font-bold text-tertiary-fixed-dim">Especialidade: Pressão</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-1">
<div className="w-4 h-1 bg-secondary"></div>
<div className="w-4 h-1 bg-secondary"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
</div>
<span className="font-headline text-xl italic font-black text-on-surface">45%</span>
</div>
</div>
<div className="bg-surface-container-high p-5 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-tertiary">psychology</span>
<div>
<p className="font-headline text-lg uppercase tracking-tight font-bold">Defesa de Queda</p>
<p className="font-label text-[10px] uppercase font-bold text-tertiary-fixed-dim">Especialidade: Equilíbrio</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-1">
<div className="w-4 h-1 bg-tertiary"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
<div className="w-4 h-1 bg-surface-container-highest"></div>
</div>
<span className="font-headline text-xl italic font-black text-on-surface">22%</span>
</div>
</div>
</div>
</section>
{/*  Rewards / Recent Progress  */}
<section className="mb-12">
<h2 className="font-headline font-black text-3xl uppercase tracking-tighter mb-6">RECOMPENSAS DISPONÍVEIS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative bg-surface-container-low overflow-hidden group border border-white/5 p-6 flex items-center gap-4">
<div className="bg-primary-container p-3 text-on-primary-container">
<span className="material-symbols-outlined text-3xl">shopping_cart</span>
</div>
<div>
<p className="font-label font-black text-sm uppercase tracking-widest text-on-surface">15% OFF EM EQUIPAMENTOS</p>
<p className="text-[10px] text-tertiary uppercase font-bold">CÓDIGO: BLACKBELT15</p>
</div>
</div>
<div className="relative bg-surface-container-low overflow-hidden group border border-white/5 p-6 flex items-center gap-4">
<div className="bg-secondary-container p-3 text-on-secondary-container">
<span className="material-symbols-outlined text-3xl">videocam</span>
</div>
<div>
<p className="font-label font-black text-sm uppercase tracking-widest text-on-surface">MASTERCLASS EXCLUSIVA</p>
<p className="text-[10px] text-tertiary uppercase font-bold">DESBLOQUEADO POR LVL 10</p>
</div>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 left-0 w-full bg-[#131313]/90 backdrop-blur-xl z-50 flex justify-around items-center pt-3 pb-6 px-4">
<div className="bg-gradient-to-r from-transparent via-[#E70000]/20 to-transparent h-[1px] top-0 absolute w-full"></div>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</button>
<button className="flex flex-col items-center justify-center text-[#E70000] scale-110 active:scale-90 duration-150">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>rebase_edit</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</button>
</nav>

    </>
  );
}
