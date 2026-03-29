import React from 'react';

export default function RevisOPSCampeonato() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 z-50 w-full bg-[#131313] flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#E70000] cursor-pointer">menu</span>
<span className="text-2xl font-black italic text-[#E70000] tracking-widest uppercase font-headline">Kinetic_BJJ</span>
</div>
<div className="w-10 h-10 bg-surface-container-highest flex items-center justify-center overflow-hidden border border-outline-variant/20">
<img alt="Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu Jitsu practitioner with a focused expression, wearing a black gi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMv3FclhM6UaA2ojpqj9G6gT9yxYaMy980yUgNPS_qYUY-LTFPIZ7oj2iuBnMIR8VzIrTnV9_8V5KryqTWrkCFqzH_JpYm_A2SN27gEue4wr9461PLLc_6h1vXnXzjTC0Woq6l6pRy9IJhvgAowCB9Lxhw_fcRTQQ4yB9VimMLv6PuPTRRSIszYpZKqtAdArhPRCeoDoiRjxclkuJTosbsQsKgECE9pBc-XfNAcgMkfTTdEj9Y5LBJbW_doC0NPeSGCktNx2u3O500"/>
</div>
</header>
<main className="flex-1 mt-20 mb-28 px-6 max-w-5xl mx-auto w-full">
{/*  Hero Metrics Header  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="text-primary-container font-headline font-black text-xs tracking-[0.3em] uppercase block mb-2">PÓS-COMPETIÇÃO</span>
<h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">REVISÃO DE PERFORMANCE</h1>
</div>
<div className="flex gap-8">
<div className="flex flex-col">
<span className="text-tertiary-fixed-dim font-label text-[10px] tracking-widest uppercase">RESULTADO</span>
<span className="text-4xl font-headline font-black italic text-primary-container">OURO</span>
</div>
<div className="flex flex-col border-l border-outline-variant/30 pl-8">
<span className="text-tertiary-fixed-dim font-label text-[10px] tracking-widest uppercase">EVENTO</span>
<span className="text-lg font-headline font-bold uppercase">ABU DHABI GRAND SLAM</span>
</div>
</div>
</div>
</section>
{/*  Bento Grid Content  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Lições Aprendidas Section  */}
<div className="md:col-span-7 bg-surface-container-low p-8 border-l-4 border-primary-container">
<div className="flex items-center gap-3 mb-6">
<span className="material-symbols-outlined text-primary-container">psychology</span>
<h2 className="text-xl font-black uppercase tracking-widest">LIÇÕES APRENDIDAS</h2>
</div>
<div className="space-y-4">
<div className="bg-surface-container-highest p-4 border border-outline-variant/10">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-1">Ponto de Falha</span>
<p className="text-sm font-body leading-relaxed text-on-surface-variant">Gestão de fôlego no último minuto da final. Preciso economizar energia na guarda fechada.</p>
</div>
<div className="bg-surface-container-highest p-4 border border-outline-variant/10">
<span className="text-[10px] font-bold text-secondary uppercase tracking-widest block mb-1">Sucesso Técnico</span>
<p className="text-sm font-body leading-relaxed text-on-surface-variant">A entrada de Single Leg X funcionou com 100% de eficiência em todas as 4 lutas.</p>
</div>
<button className="w-full py-4 border border-dashed border-outline-variant text-tertiary-fixed-dim text-xs uppercase tracking-[0.2em] font-bold hover:bg-surface-container-high transition-colors">
                        ADICIONAR NOVA OBSERVAÇÃO
                    </button>
</div>
</div>
{/*  Metas Técnicas Section  */}
<div className="md:col-span-5 bg-surface-container-highest p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 p-2 opacity-10">
<span className="material-symbols-outlined text-9xl">track_changes</span>
</div>
<div className="relative z-10">
<h2 className="text-xl font-black uppercase tracking-widest mb-6">METAS PRÓXIMO CICLO</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="w-2 h-8 bg-primary-container mt-1"></span>
<div>
<h3 className="font-bold text-sm uppercase tracking-wider mb-1">Refinar Meia-Guarda Profunda</h3>
<p className="text-xs text-tertiary-fixed-dim">Focar na transição para as costas após a raspagem.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="w-2 h-8 bg-secondary mt-1"></span>
<div>
<h3 className="font-bold text-sm uppercase tracking-wider mb-1">Aumentar Volume de Drill</h3>
<p className="text-xs text-tertiary-fixed-dim">Mínimo de 30 minutos diários de entradas de queda.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="w-2 h-8 bg-on-surface-variant/30 mt-1"></span>
<div>
<h3 className="font-bold text-sm uppercase tracking-wider mb-1">Controle de Peso</h3>
<p className="text-xs text-tertiary-fixed-dim">Manter 78kg estável para a próxima seletiva.</p>
</div>
</li>
</ul>
</div>
</div>
{/*  Observações Gerais - Campo Amplo  */}
<div className="md:col-span-12 bg-surface-container p-8">
<h2 className="text-xl font-black uppercase tracking-widest mb-6">DIÁRIO DO SENSEI / ATLETA</h2>
<div className="bg-surface-container-lowest p-6 min-h-[200px] border-b-2 border-primary-container">
<p className="text-sm font-body italic text-on-surface leading-loose">
                        "O desempenho geral foi excelente. A disciplina tática foi o diferencial. Notei uma hesitação na finalização por estrangulamento que custou tempo, mas a recuperação foi rápida. O foco agora deve ser 100% em transições fluidas. A mentalidade estava inabalável."
                    </p>
</div>
<div className="mt-6 flex justify-end">
<button className="bg-primary-container text-on-primary-container px-10 py-4 font-headline font-black uppercase tracking-widest text-sm active:scale-95 transition-transform">
                        SALVAR SESSÃO DE REVISÃO
                    </button>
</div>
</div>
{/*  Visual Recap - Imagery Asymmetry  */}
<div className="md:col-span-8 h-64 bg-surface-container-high overflow-hidden">
<img alt="BJJ Action" className="w-full h-full object-cover grayscale opacity-50" data-alt="Action shot of a Jiu Jitsu match in a high-intensity professional arena with dramatic overhead stadium lighting and grit" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCenRiClsNRU1gTtScUhbBweHTWhgJOPGAu1o_Jh4GAqpCXSBKj71A6Gmotw0-3bKLGfd_I7fxTAbYgG9RKqWYfvjwJ7zaw0dGkixQxJl1j4bcFC5oObJ3juW7uYF5BRy-2BxsnQV1bmudmhw9qQAOE-tbuJCQ90piLJ-iFaKtDHr2DkHOpcV8BNg6OWKdAK70PWpxzF3n5Jl1b5IflgWPBe0XJTtzhJLTRDxjsR6hoPyBmT1HGixeptdmGIUOPtkkivhNyXv4per1y"/>
</div>
<div className="md:col-span-4 bg-primary-container p-8 flex flex-col justify-center">
<span className="text-on-primary-container/60 font-label text-[10px] uppercase tracking-widest mb-2">STATUS DO CICLO</span>
<h3 className="text-4xl font-headline font-black text-on-primary-container leading-none uppercase tracking-tighter">DISCIPLINA É LIBERDADE</h3>
</div>
</div>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-3 pb-6 px-4 bg-[#1C1B1B]/80 backdrop-blur-xl z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Início</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Biblioteca</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>insights</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Trilha</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Treino</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] opacity-60 hover:text-white transition-all" href="#">
<span className="material-symbols-outlined">school</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">Sensei</span>
</a>
</nav>

    </>
  );
}
