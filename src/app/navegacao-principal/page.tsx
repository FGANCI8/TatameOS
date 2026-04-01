export default function NavegaOPrincipal() {
  return (
    <>
<main className="flex-grow flex flex-col md:flex-row">
{/*  SideNav (Desktop)  */}
<aside className="hidden md:flex flex-col w-64 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-8 h-[calc(100vh-72px)] sticky top-[72px]">
<nav className="space-y-4">
<div className="group flex items-center gap-4 px-4 py-3 bg-gradient-to-br from-[#FF1A1A] to-[#C00100] text-white transition-all cursor-pointer">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>home</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Início</span>
</div>
<div className="group flex items-center gap-4 px-4 py-3 text-zinc-400 hover:bg-[#353534] transition-all cursor-pointer">
<span className="material-symbols-outlined">library_books</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Biblioteca</span>
</div>
<div className="group flex items-center gap-4 px-4 py-3 text-zinc-400 hover:bg-[#353534] transition-all cursor-pointer">
<span className="material-symbols-outlined">route</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Trilha</span>
</div>
<div className="group flex items-center gap-4 px-4 py-3 text-zinc-400 hover:bg-[#353534] transition-all cursor-pointer">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Treino</span>
</div>
<div className="group flex items-center gap-4 px-4 py-3 text-zinc-400 hover:bg-[#353534] transition-all cursor-pointer">
<span className="material-symbols-outlined">school</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Professor</span>
</div>
</nav>
<div className="mt-auto pt-8 border-t border-zinc-800/15">
<p className="font-['Inter'] text-[10px] text-zinc-500 uppercase tracking-[0.2em] mb-4">Sessão Atual</p>
<div className="bg-zinc-800/80 p-4 flex flex-col gap-2">
<span className="text-xs font-bold text-zinc-100">DRIL DE PASSAGEM</span>
<div className="w-full bg-zinc-900/80 h-1">
<div className="bg-brand-red/10 h-full w-2/3"></div>
</div>
<span className="text-[10px] text-zinc-500">65% CONCLUÍDO</span>
</div>
</div>
</aside>
{/*  Main Content Canvas  */}
<section className="flex-grow p-6 md:p-10 space-y-10">
{/*  Hero Stats Bento  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="md:col-span-8 relative h-64 md:h-80 bg-zinc-900/80 overflow-hidden group">
<img alt="Training highlight" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9SSDnLz-z_IsCRIF2ixk3ulTTnUO4mODNTq4fCp6IzPSgIKEyri3OPpEjERcYSeLc1IrUoF_m67GVkNN_X4nH85OePkpK6y92bSXm1Dey8yPFccPk49lhWd-jUfc4v2MoFFUzB2sesVzHzMebyei-txc-0ZSWGG7K8IS4S__EGC91vWTDCbxZAgdwmlKpE1Oty4ur_JpLoQHr_K5HJWivICgfaIZdvgUiQKjrYvVxFpMN2VEh3RHOJr6BUwO8qdF8EFwLrzKixTDN"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<span className="font-label text-xs font-bold text-[#FF1A1A] uppercase tracking-[0.3em] mb-2 block">Próxima Aula</span>
<h2 className="font-headline text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Fundamentos <br/> de Guarda X</h2>
</div>
</div>
<div className="md:col-span-4 bg-brand-red/10 p-8 flex flex-col justify-between">
<div>
<span className="font-label text-xs font-bold text-white uppercase tracking-[0.3em] mb-2 block">Status Global</span>
<h3 className="font-headline text-5xl font-black text-white italic">LVL 42</h3>
</div>
<div className="space-y-4">
<div className="flex justify-between items-end">
<span className="font-label text-[10px] font-bold text-white/80 uppercase">Progresso Faixa</span>
<span className="font-body font-bold text-white">880/1200 XP</span>
</div>
<div className="w-full bg-white/20 h-2">
<div className="bg-white h-full w-[73%]"></div>
</div>
</div>
</div>
</div>
{/*  Architecture Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/*  Activity Monolith  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col gap-8">
<div className="flex justify-between items-start">
<h4 className="font-headline text-xl font-bold uppercase italic tracking-tight">Atividade</h4>
<span className="material-symbols-outlined text-zinc-300">analytics</span>
</div>
<div className="space-y-6">
<div className="flex items-baseline gap-2">
<span className="font-headline text-5xl font-black">12</span>
<span className="font-label text-[10px] font-bold text-zinc-500 uppercase">Treinos/Mês</span>
</div>
<div className="flex gap-1 h-12 items-end">
<div className="flex-1 bg-zinc-800/80 h-4 hover:bg-brand-red/10 transition-colors"></div>
<div className="flex-1 bg-zinc-800/80 h-8 hover:bg-brand-red/10 transition-colors"></div>
<div className="flex-1 bg-brand-red/10 h-12"></div>
<div className="flex-1 bg-zinc-800/80 h-6 hover:bg-brand-red/10 transition-colors"></div>
<div className="flex-1 bg-zinc-800/80 h-10 hover:bg-brand-red/10 transition-colors"></div>
<div className="flex-1 bg-zinc-800/80 h-5 hover:bg-brand-red/10 transition-colors"></div>
<div className="flex-1 bg-zinc-800/80 h-9 hover:bg-brand-red/10 transition-colors"></div>
</div>
</div>
</div>
{/*  Assistente IA Card  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline text-xl font-bold uppercase italic tracking-tight text-white">Assistente IA</h4>
<span className="material-symbols-outlined text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>bolt</span>
</div>
<p className="font-body text-sm text-zinc-500 leading-relaxed">Sua análise biomecânica está pronta. Melhore a alavanca do quadril no Armlock.</p>
</div>
<button className="relative z-10 mt-6 bg-white text-black font-bold text-xs uppercase tracking-widest py-3 hover:bg-[#FF1A1A] hover:text-white transition-all">Ver Feedback</button>
{/*  Background Accent  */}
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-red/20 blur-[60px] group-hover:bg-brand-red/10/40 transition-colors"></div>
</div>
{/*  Library Preview  */}
<div className="bg-zinc-900/80 p-0 overflow-hidden flex flex-col">
<div className="p-6">
<h4 className="font-headline text-xl font-bold uppercase italic tracking-tight">Biblioteca</h4>
</div>
<div className="flex-grow grid grid-cols-2 gap-[1px] bg-zinc-800/10">
<div className="bg-zinc-950/60 p-4 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-zinc-800/80 transition-colors">
<span className="material-symbols-outlined text-zinc-500 mb-2 group-hover:text-brand-red transition-colors">shield</span>
<span className="text-[9px] font-bold uppercase tracking-widest">Defesa</span>
</div>
<div className="bg-zinc-950/60 p-4 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-zinc-800/80 transition-colors">
<span className="material-symbols-outlined text-zinc-500 mb-2 group-hover:text-brand-red transition-colors">swords</span>
<span className="text-[9px] font-bold uppercase tracking-widest">Ataque</span>
</div>
<div className="bg-zinc-950/60 p-4 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-zinc-800/80 transition-colors">
<span className="material-symbols-outlined text-zinc-500 mb-2 group-hover:text-brand-red transition-colors">settings_accessibility</span>
<span className="text-[9px] font-bold uppercase tracking-widest">Drills</span>
</div>
<div className="bg-zinc-950/60 p-4 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-zinc-800/80 transition-colors">
<span className="material-symbols-outlined text-zinc-500 mb-2 group-hover:text-brand-red transition-colors">grid_view</span>
<span className="text-[9px] font-bold uppercase tracking-widest">Tudo</span>
</div>
</div>
</div>
</div>
{/*  Recent Sessions Section  */}
<div className="space-y-6 pb-24 md:pb-0">
<div className="flex justify-between items-end border-b border-zinc-800/10 pb-2">
<h4 className="font-headline text-sm font-black uppercase tracking-[0.2em]">Sessões Recentes</h4>
<a className="font-label text-[10px] font-bold text-[#FF1A1A] uppercase tracking-widest hover:underline" href="#">Ver Histórico</a>
</div>
<div className="space-y-2">
<div className="bg-zinc-950/60 hover:bg-zinc-900 transition-colors p-4 flex items-center gap-6">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-300">video_library</span>
</div>
<div className="flex-grow">
<h5 className="text-xs font-bold uppercase tracking-tight">Transição de Meia-Guarda</h5>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest">Assistido há 2 horas</p>
</div>
<span className="material-symbols-outlined text-zinc-600">chevron_right</span>
</div>
<div className="bg-zinc-950/60 hover:bg-zinc-900 transition-colors p-4 flex items-center gap-6">
<div className="w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-brand-red" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
</div>
<div className="flex-grow">
<h5 className="text-xs font-bold uppercase tracking-tight">Treino Específico: Escapadas</h5>
<p className="text-[10px] text-zinc-500 uppercase tracking-widest">Finalizado ontem</p>
</div>
<span className="material-symbols-outlined text-zinc-600">chevron_right</span>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}


