import React from 'react';

export default function ConfiguraEs() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-black/80 backdrop-blur-xl fixed top-0 z-50 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<button className="active:scale-95 duration-100">
<span className="material-symbols-outlined text-white">arrow_back</span>
</button>
<h1 className="font-['Lexend'] uppercase tracking-tighter font-black text-2xl text-[#E70000]">KINETIC BJJ</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white">notifications</span>
<div className="w-8 h-8 bg-surface-container-highest rounded-full overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="close up portrait of a focused brazilian jiu-jitsu athlete with intense expression against a dark gym background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9QTkatBEybClQgQtbldd0ur9l5u5nzlqp6Egx6Y74jwFINot5tB7-53gPD4mQCsAiAweNbR1gA87njne87OoJrz8mu5AcUQ7Mv_jSmgmvwBfpncyxD7oVQhnjdEXgctT9EP9GwPtNPAxp6r2s8JjhM4kuipCGcGNUShNPfpMlaijTQx9gitUqqQv68fWeHPGXTu4ungPEM_KJzmPlyEbuAFl2c79EXWqI3KJzrm_7TSGILL8CdnWQ081gk9zbUdO_4_rGSi_G5WnH"/>
</div>
</div>
</header>
<main className="pt-24 px-6 max-w-3xl mx-auto">
{/*  Profile Hero Section  */}
<section className="mb-12">
<div className="flex items-end gap-6 mb-8">
<div className="w-24 h-24 bg-primary-container relative">
<img alt="User" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="professional portrait of a martial artist with a black belt around their neck in dramatic moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNzD24x32skU7M9WfSotqlePxC_5q0hYPf83xRmvxHafHW9wjP6FZMYUGnnWRMd2cAlX80Is7nyWTPaq6ukZsP-mNvTYmegFOr2cx5HkJt6GheDOGu-IoMJzLIDLdWJCD6WO4x3P-QGggrkB0NubnUY0cFLGyh12wG7TaIkX0GVU3aTPiyvU2zfyJB6dB9dJ7A8Ic-mZAwdxxCJrgD33G05Vp8neMSCqTJbm_HzAlshInewlD77a5hkE8uN2S72hpD_EsoC5QRgZ_9"/>
<div className="absolute -bottom-2 -right-2 bg-primary-container p-1">
<span className="material-symbols-outlined text-white text-sm">edit</span>
</div>
</div>
<div className="flex-1">
<p className="font-label uppercase text-[10px] font-bold tracking-[0.2em] text-primary-container mb-1">FAIXA PRETA 1º GRAU</p>
<h2 className="font-headline font-black text-4xl uppercase tracking-tighter leading-none">RODRIGO<br/>SILVA</h2>
</div>
</div>
</section>
{/*  Settings Grid  */}
<div className="space-y-2">
{/*  Section Title  */}
<h3 className="font-label uppercase text-[10px] font-bold tracking-[0.2em] text-tertiary-fixed-dim mb-4 px-2">CONFIGURAÇÕES DE CONTA</h3>
{/*  Menu Items  */}
<a className="group flex items-center justify-between p-5 bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200" href="#">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white group-hover:text-primary-container transition-colors">person</span>
<span className="font-label font-bold uppercase tracking-widest text-sm">Editar Perfil</span>
</div>
<span className="material-symbols-outlined text-surface-variant group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
<a className="group flex items-center justify-between p-5 bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200" href="#">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white group-hover:text-primary-container transition-colors">notifications_active</span>
<span className="font-label font-bold uppercase tracking-widest text-sm">Notificações</span>
</div>
<span className="material-symbols-outlined text-surface-variant group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
<a className="group flex items-center justify-between p-5 bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200" href="#">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white group-hover:text-primary-container transition-colors">lock</span>
<span className="font-label font-bold uppercase tracking-widest text-sm">Segurança e Senha</span>
</div>
<span className="material-symbols-outlined text-surface-variant group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
<div className="h-12"></div>
<h3 className="font-label uppercase text-[10px] font-bold tracking-[0.2em] text-tertiary-fixed-dim mb-4 px-2">TREINAMENTO &amp; APP</h3>
<a className="group flex items-center justify-between p-5 bg-surface-container-low hover:bg-surface-container-high transition-colors duration-200" href="#">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white group-hover:text-primary-container transition-colors">fitness_center</span>
<span className="font-label font-bold uppercase tracking-widest text-sm">Preferências de Treino</span>
</div>
<span className="material-symbols-outlined text-surface-variant group-hover:text-white group-hover:translate-x-1 transition-all">chevron_right</span>
</a>
<div className="group flex items-center justify-between p-5 bg-surface-container-low">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-white">dark_mode</span>
<span className="font-label font-bold uppercase tracking-widest text-sm">Aparência</span>
</div>
<div className="flex bg-surface-container-highest p-1">
<button className="px-4 py-1 text-[10px] font-black uppercase tracking-tighter bg-primary-container text-white">Dark</button>
<button className="px-4 py-1 text-[10px] font-black uppercase tracking-tighter text-tertiary hover:text-white">Light</button>
</div>
</div>
<div className="h-12"></div>
<button className="w-full flex items-center justify-center gap-2 p-5 bg-surface-container-lowest border border-error/20 hover:bg-error-container/20 transition-colors group">
<span className="material-symbols-outlined text-error" data-weight="fill">logout</span>
<span className="font-label font-black uppercase tracking-[0.3em] text-sm text-error">Sair da Conta</span>
</button>
</div>
{/*  System Version  */}
<div className="mt-16 text-center">
<p className="font-label uppercase text-[10px] font-bold tracking-[0.2em] text-surface-variant">Kinetic BJJ v4.2.0 • Build 882</p>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-4 h-20 bg-[#1C1B1B]/90 dark:bg-[#131313]/95 backdrop-blur-md z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined">ads_click</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 pt-2 pb-safe hover:text-white transition-colors active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Treino</span>
</a>
{/*  ACTIVE STATE: Profile mappings to Sensei or User settings context  */}
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 pb-safe active:translate-y-0.5 duration-150" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest mt-1">Sensei</span>
</a>
</nav>
{/*  Background Decoration  */}
<div className="fixed top-0 right-0 -z-10 w-1/2 h-screen overflow-hidden pointer-events-none opacity-20">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-primary-container/10 to-transparent"></div>
<div className="absolute top-1/4 -right-20 font-headline font-black text-[12rem] text-surface-container leading-none select-none italic transform rotate-90">
            PUSH
        </div>
</div>

    </>
  );
}
