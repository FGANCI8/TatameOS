import React from 'react';

export default function ReaDoProfessor() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full flex justify-between items-center px-6 h-16 bg-[#131313] z-50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover grayscale" data-alt="Close up portrait of a senior Brazilian Jiu Jitsu master wearing a black gi with grey hair and focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkM5nIpGCQPFs2un5OoE8uGLFKZGsqt1y-6OR-pEPPcHcyFNyzpJ5C4lqpm1aq4T-elsPWXf8BUoGKBXkK7sS090krxwKfFV4Wy182QHnbbls9L0mF28sfA6adlnul0MTMIGeThpGf28vmMl07l4Ba3xxrUC1c9tvkm_xvbZ4M01du2TDJpQZEN7p3sUhyiUC8x1ihdkBbygXFUE9YFqtoQdA3j8TEv72LQxNS_V62MA38zPZpaPhSQqjK-Rhd6z_kkhGCx_Vx9fxX"/>
</div>
<span className="text-2xl font-black italic text-[#E70000] font-headline tracking-tighter uppercase">KINETIC BJJ</span>
</div>
<div className="flex items-center gap-4">
<button className="text-[#C6C6C7] hover:bg-[#353534] p-2 transition-colors active:scale-95 duration-100">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
</header>
<main className="pt-24 px-6 max-w-7xl mx-auto">
{/*  Header Section with Asymmetric Layout  */}
<section className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<span className="text-[#E70000] font-headline font-bold text-sm tracking-widest uppercase mb-2 block">Painel do Mestre</span>
<h1 className="text-5xl md:text-7xl font-headline font-black uppercase leading-none tracking-tighter">ÁREA DO <br/>PROFESSOR</h1>
</div>
<div className="flex flex-col gap-4">
<button className="bg-primary-container text-on-primary-container px-8 py-4 font-headline font-bold text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-transform active:scale-95 duration-100">
<span className="material-symbols-outlined">post_add</span>
                    Publicar Observação
                </button>
</div>
</section>
{/*  Bento Grid Layout for Dashboard  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Management Column (Main Content)  */}
<div className="md:col-span-8 space-y-4">
<div className="bg-surface-container-low p-8 border-l-4 border-[#E70000]">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-headline font-black uppercase italic tracking-tight">Gerenciamento de Trilhas</h2>
<button className="text-sm font-label uppercase tracking-widest text-tertiary-fixed-dim hover:text-white transition-colors">Ver todas turmas</button>
</div>
{/*  Turma List  */}
<div className="space-y-4">
{/*  Turma Item 1  */}
<div className="bg-surface-container p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-surface-container-high transition-colors">
<div className="flex gap-4">
<div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center text-[#E70000]">
<span className="material-symbols-outlined text-4xl" data-weight="fill">groups</span>
</div>
<div>
<h3 className="text-xl font-headline font-bold uppercase tracking-tight">Turma Avançada A1</h3>
<p className="text-tertiary-fixed-dim text-xs font-label uppercase tracking-widest mt-1">Trilha: Fundamentos do Berimbolo</p>
<div className="mt-3 w-48 h-1 bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-3/4"></div>
</div>
</div>
</div>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none border border-outline-variant px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Editar Trilha</button>
<button className="flex-1 md:flex-none bg-surface-container-highest px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#E70000] hover:text-white transition-colors">Status</button>
</div>
</div>
{/*  Turma Item 2  */}
<div className="bg-surface-container p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-surface-container-high transition-colors">
<div className="flex gap-4">
<div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center text-[#E70000]">
<span className="material-symbols-outlined text-4xl">diversity_3</span>
</div>
<div>
<h3 className="text-xl font-headline font-bold uppercase tracking-tight">Iniciantes No-Gi</h3>
<p className="text-tertiary-fixed-dim text-xs font-label uppercase tracking-widest mt-1">Trilha: Controle Lateral &amp; Escapes</p>
<div className="mt-3 w-48 h-1 bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-1/3"></div>
</div>
</div>
</div>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none border border-outline-variant px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Editar Trilha</button>
<button className="flex-1 md:flex-none bg-surface-container-highest px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#E70000] hover:text-white transition-colors">Status</button>
</div>
</div>
{/*  Turma Item 3  */}
<div className="bg-surface-container p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group hover:bg-surface-container-high transition-colors">
<div className="flex gap-4">
<div className="w-16 h-16 bg-surface-container-highest flex items-center justify-center text-[#E70000]">
<span className="material-symbols-outlined text-4xl">military_tech</span>
</div>
<div>
<h3 className="text-xl font-headline font-bold uppercase tracking-tight">Elite Competição</h3>
<p className="text-tertiary-fixed-dim text-xs font-label uppercase tracking-widest mt-1">Trilha: Estratégias de Pontuação</p>
<div className="mt-3 w-48 h-1 bg-surface-container-lowest overflow-hidden">
<div className="h-full bg-gradient-to-r from-secondary to-on-secondary-container w-full"></div>
</div>
</div>
</div>
<div className="flex gap-2 w-full md:w-auto">
<button className="flex-1 md:flex-none border border-outline-variant px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-colors">Editar Trilha</button>
<button className="flex-1 md:flex-none bg-surface-container-highest px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#E70000] hover:text-white transition-colors">Status</button>
</div>
</div>
</div>
</div>
</div>
{/*  Feedbacks Side Column  */}
<div className="md:col-span-4 space-y-4">
<div className="bg-surface-container-high p-8 flex flex-col h-full">
<div className="mb-8">
<h2 className="text-2xl font-headline font-black uppercase italic tracking-tight">Feedbacks Recentes</h2>
<p className="text-tertiary-fixed-dim text-[10px] font-label uppercase tracking-[0.2em] mt-2">Relatórios dos alunos</p>
</div>
<div className="space-y-6 flex-1 overflow-y-auto pr-2">
{/*  Feedback Item 1  */}
<div className="border-b border-outline-variant/20 pb-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Profile photo of a young woman athletic student in a white gi smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_YWOkBcdt8mzo20OEYT1d2LRIVYJ7pajWCjMzS0WrjhoY53Uacf2cPsVLTIHMa2M4wqat2Wweogsg_e-N41vP0_TFxe8qBcsCmqtmf9NMKB1vHbrzc1gKG5PqzGzYlrkJq5S_qARLqqFxEMEhliJQxAEkv05d4yRVvjOiqq3f-lf1sihU5mqIeWgmZKzglG0s27_fUFxIJkj8QLolutex-8ft6atkFsUE_rZDlLUiSOGcmbULeT2h2hWsYUGTgMOZv0-oA9SJv7zD"/>
</div>
<span className="text-xs font-bold uppercase tracking-widest">Amanda S.</span>
<span className="text-[10px] text-tertiary-fixed-dim ml-auto">HOJE</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed italic">"Mestre, a dica sobre a pegada na lapela durante o berimbolo mudou meu jogo. Consegui aplicar no treino hoje!"</p>
</div>
{/*  Feedback Item 2  */}
<div className="border-b border-outline-variant/20 pb-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Profile photo of a male athlete with focused expression looking at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_lQrj2lECVtYV5UbKVCkT5LsDMk0gVc-VUTsjq3Y7Upj0YOZTonX2nS3nkIVwHUsO6XxSJIFvkeeOxsN3hPgTSS3WJZDZfpF1JX_tE-SdauIZBViLQTbrqX9YNuhV8DBTL3acJY67OEIVP2yh4VijHplIhkui6X7MuIseFeX2acaeNmc13oBvl3Q_am4UTWgYrbxsmOX8T1fxO2LOUPTaOvUB9JKrNKKJqaCom-g4Iw9EX6V9BwHnDFZh9w5woxqaPQ7w9pHIYhls"/>
</div>
<span className="text-xs font-bold uppercase tracking-widest">Ricardo M.</span>
<span className="text-[10px] text-tertiary-fixed-dim ml-auto">ONTEM</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed italic">"Dificuldade técnica na saída de quadril do lado esquerdo. Sinto que estou travando na transição."</p>
</div>
{/*  Feedback Item 3  */}
<div className="border-b border-outline-variant/20 pb-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up of a female student with braided hair and intense focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkKoRZtQmE9S8_t1p-QvSi1X7iHvuLgUoeAOfp_EPLYVj9m2mAEyOz-k8vTXoEdRfotY3saoR2K1jtxtxSzbYHIO3xTlT_88dEu6cjr7BSQ2ytmP1Cjp9ol2O-gd3kmyUGjOsMj9CPAJAF2II1cR8uFRm8sejjdwM4ZlmOXjpG6TQbaxKswbRgEZ6wnSALh91pOJBjgJVilJ6PRr7G6gxrTtdAmLm8yz4JyQJeJ8PgkpEBzkFIg-wNLV_bOXwvI7c4Po9jJyG0NQQ4"/>
</div>
<span className="text-xs font-bold uppercase tracking-widest">Carla F.</span>
<span className="text-[10px] text-tertiary-fixed-dim ml-auto">2 DIAS</span>
</div>
<p className="text-sm text-on-surface-variant leading-relaxed italic">"A trilha de fundamentos está excelente. O vídeo explicativo sobre o leg drag está muito claro."</p>
</div>
</div>
<button className="mt-8 w-full bg-surface-container-highest border border-outline-variant py-4 text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">Ver Histórico Completo</button>
</div>
</div>
</div>
{/*  Quick Stats / Telemetry Section  */}
<section className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-6 border-b-2 border-secondary">
<span className="text-[10px] font-label font-bold text-tertiary-fixed-dim uppercase tracking-widest">Alunos Ativos</span>
<div className="text-4xl font-headline font-black mt-2">142</div>
</div>
<div className="bg-surface-container-lowest p-6 border-b-2 border-[#E70000]">
<span className="text-[10px] font-label font-bold text-tertiary-fixed-dim uppercase tracking-widest">Taxa de Conclusão</span>
<div className="text-4xl font-headline font-black mt-2">78%</div>
</div>
<div className="bg-surface-container-lowest p-6 border-b-2 border-secondary">
<span className="text-[10px] font-label font-bold text-tertiary-fixed-dim uppercase tracking-widest">Novos Feedbacks</span>
<div className="text-4xl font-headline font-black mt-2">24</div>
</div>
<div className="bg-surface-container-lowest p-6 border-b-2 border-[#E70000]">
<span className="text-[10px] font-label font-bold text-tertiary-fixed-dim uppercase tracking-widest">Horas de Treino</span>
<div className="text-4xl font-headline font-black mt-2">312h</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 px-2 pb-4 bg-[#131313]/80 backdrop-blur-xl z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined">video_library</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined">insights</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform active:bg-[#353534] duration-200" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>school</span>
<span className="font-headline font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
