import React from 'react';

export default function ChatModoAgente() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 left-0 w-full z-50 bg-[#131313] flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-primary-container">psychology</span>
</div>
<h1 className="text-2xl font-black text-[#E70000] tracking-tighter italic font-headline uppercase">KINETIC_BJJ</h1>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#C6C6C7] hover:bg-[#353534] p-2 transition-colors cursor-pointer">notifications</span>
<div className="w-8 h-8 bg-surface-bright overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close-up portrait of a determined martial arts athlete with sweat on brow in dramatic dark gym lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4qUxBDwgvxjiI2xfJ_qh2dcKN4pIs1NQCsvMv77N1ZKWw2TDA0vo6z8x-vB1mZuoIwBdwzgqi2fQk6dV1eiNTOJaVjQfvSj2-GKiw4uH72zfhEPMgg24d3yoVncmYVjvTct_cDEc7cna2aPp3ZnJLbCa3tF0FzeuWdzLZiiSLWJYb-fnB-4fpG1LzwpbyYIiLG6kSkxsLTMOEI6OInEFZiPyaF3CML42S-015XCB8g-jxDwnsToqIs_BAMZMNf0IlXirPFnSIocNZ"/>
</div>
</div>
</header>
<main className="pt-20 pb-28 min-h-screen flex flex-col">
{/*  Chat Container  */}
<div className="flex-1 flex flex-col px-4 md:px-0 max-w-4xl mx-auto w-full">
{/*  Welcome / Status Section  */}
<div className="py-8 flex flex-col items-start space-y-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-primary-container animate-pulse"></div>
<span className="font-headline font-black text-xs tracking-widest uppercase text-primary-container">SENSEI AI ONLINE</span>
</div>
<h2 className="font-headline font-black text-4xl md:text-5xl leading-none tracking-tighter">ANÁLISE DE <br/> PERFORMANCE</h2>
</div>
{/*  Chat History  */}
<div className="space-y-8 mb-12">
{/*  AI Message  */}
<div className="flex flex-col items-start max-w-[90%] md:max-w-[80%]">
<div className="bg-surface-container p-6 space-y-4">
<p className="text-on-surface leading-relaxed">Olá, Guerreiro. Analisei seus últimos 3 sparrings. Sua transição da guarda-Z para a raspagem de tesoura está 15% mais rápida, porém sua frequência cardíaca atingiu o pico de 188 BPM muito cedo no round.</p>
{/*  Inline Data Visualization  */}
<div className="grid grid-cols-2 gap-2 mt-4">
<div className="bg-surface-container-high p-4 border-l-2 border-primary-container">
<span className="block font-headline font-black text-3xl">188</span>
<span className="block font-label text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">PICO BPM</span>
</div>
<div className="bg-surface-container-high p-4 border-l-2 border-secondary">
<span className="block font-headline font-black text-3xl">+15%</span>
<span className="block font-label text-[10px] uppercase tracking-widest text-tertiary-fixed-dim">VEL. TRANSIÇÃO</span>
</div>
</div>
{/*  Mini Chart Simulation  */}
<div className="bg-surface-container-lowest h-24 w-full relative flex items-end gap-1 p-2">
<div className="bg-primary-container/20 w-full h-[30%]"></div>
<div className="bg-primary-container/40 w-full h-[50%]"></div>
<div className="bg-primary-container/60 w-full h-[40%]"></div>
<div className="bg-primary-container/80 w-full h-[70%]"></div>
<div className="bg-primary-container w-full h-[90%]"></div>
<div className="bg-primary-container/70 w-full h-[60%]"></div>
<div className="absolute top-2 right-2 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
<span className="text-[8px] font-label font-bold uppercase tracking-tighter">INTENSIDADE</span>
</div>
</div>
</div>
<span className="mt-2 text-[10px] font-label font-bold uppercase tracking-widest text-tertiary-fixed-dim/50">SENSEI • 10:42 AM</span>
</div>
{/*  User Message  */}
<div className="flex flex-col items-end self-end max-w-[90%] md:max-w-[80%]">
<div className="bg-surface-container-highest p-6">
<p className="text-on-surface leading-relaxed">Como posso melhorar minha recuperação entre os rounds para manter a pressão no final?</p>
</div>
<span className="mt-2 text-[10px] font-label font-bold uppercase tracking-widest text-tertiary-fixed-dim/50">VOCÊ • 10:43 AM</span>
</div>
{/*  AI Typing / Suggestions Message  */}
<div className="flex flex-col items-start max-w-[90%] md:max-w-[80%]">
<div className="bg-surface-container p-6 space-y-4">
<p className="text-on-surface leading-relaxed">Recomendo focar em controle respiratório nasal durante as transições de baixa intensidade. Aqui estão sugestões imediatas para o seu próximo treino:</p>
<div className="flex flex-wrap gap-2 pt-2">
<button className="bg-surface-container-highest px-4 py-2 hover:bg-primary-container transition-colors group">
<span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface group-hover:text-white">Técnica de Respiração</span>
</button>
<button className="bg-surface-container-highest px-4 py-2 hover:bg-primary-container transition-colors group">
<span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface group-hover:text-white">Drill de Recuperação</span>
</button>
<button className="bg-surface-container-highest px-4 py-2 hover:bg-primary-container transition-colors group">
<span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface group-hover:text-white">Ajuste de Dieta</span>
</button>
</div>
</div>
</div>
</div>
</div>
{/*  Input Section  */}
<div className="fixed bottom-16 left-0 w-full bg-gradient-to-t from-background via-background to-transparent pt-10 pb-4 z-40">
<div className="max-w-4xl mx-auto px-4">
<div className="relative bg-surface-container-lowest flex items-center border-b-2 border-surface-container-highest focus-within:border-secondary transition-all">
<input className="w-full bg-transparent border-none focus:ring-0 text-on-surface placeholder:text-tertiary-fixed-dim/30 font-headline font-bold py-5 pl-6 pr-16 uppercase tracking-wider" placeholder="PERGUNTE AO SENSEI..." type="text"/>
<button className="absolute right-4 w-10 h-10 bg-primary-container flex items-center justify-center active:scale-90 transition-transform">
<span className="material-symbols-outlined text-white">send</span>
</button>
</div>
<div className="flex justify-between items-center mt-3 px-1">
<div className="flex gap-4">
<button className="text-tertiary-fixed-dim/40 hover:text-primary-container transition-colors">
<span className="material-symbols-outlined text-sm">mic</span>
</button>
<button className="text-tertiary-fixed-dim/40 hover:text-primary-container transition-colors">
<span className="material-symbols-outlined text-sm">attach_file</span>
</button>
</div>
<span className="text-[8px] font-label font-bold uppercase tracking-[0.2em] text-tertiary-fixed-dim/30">KINETIC INTELLIGENCE ENGINE V2.0</span>
</div>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-2 pb-safe bg-[#353534]/80 backdrop-blur-md">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="library_books">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="route">route</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] p-2 hover:text-white transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center bg-gradient-to-br from-[#E70000] to-[#C00100] text-white p-2 active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined" data-icon="school">school</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
