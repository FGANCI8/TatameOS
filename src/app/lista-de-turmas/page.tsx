export default function ListaDeTurmas() {
  return (
    <>
<main className="px-6 py-8 max-w-7xl mx-auto">
{/*  Header Section  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="font-label text-xs font-bold tracking-[0.2em] text-zinc-300 uppercase mb-2 block">Dojo Central</span>
<h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">NOSSAS<br/><span className="text-brand-red">TURMAS</span></h2>
</div>
<div className="flex gap-2">
<button className="bg-zinc-900 px-6 py-3 font-label text-xs font-black tracking-widest hover:bg-zinc-800/80 transition-colors">FILTRAR</button>
<button className="bg-brand-red/10 px-6 py-3 font-label text-xs font-black tracking-widest text-white hover:bg-brand-red/20 transition-colors">MATRICULAR</button>
</div>
</div>
</section>
{/*  Bento Grid for Turmas  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-4">
{/*  Highlight Card: Elite Competição  */}
<div className="md:col-span-8 bg-zinc-950/60 group relative overflow-hidden flex flex-col justify-end p-8 min-h-[400px]">
<div className="absolute inset-0 opacity-40 group-hover:scale-105 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&amp;w=2000')] bg-cover bg-center" data-alt="professional jiu jitsu athletes competing on a mat in a dark arena with dramatic spotlighting and high contrast"></div>
<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="bg-brand-red/10 text-white text-[10px] font-black px-2 py-1 tracking-widest uppercase">HARDCORE</span>
<span className="bg-zinc-800/80 text-zinc-500 text-[10px] font-black px-2 py-1 tracking-widest uppercase">PRO LEVEL</span>
</div>
<h3 className="font-headline text-4xl font-black uppercase italic mb-2 tracking-tighter">Elite Competição</h3>
<div className="flex flex-wrap gap-8 items-center">
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Professor</span>
<span className="font-body font-bold text-zinc-100">Mestre Ricardo 'Cobra'</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Alunos</span>
<span className="font-body font-bold text-zinc-100">12 / 20</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Horário</span>
<span className="font-body font-bold text-zinc-100">19:30 - 21:30</span>
</div>
</div>
</div>
</div>
{/*  Side Card: Iniciantes No-Gi  */}
<div className="md:col-span-4 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between border-l-4 border-zinc-800 transition-all hover:bg-zinc-800/80">
<div>
<div className="flex justify-between items-start mb-6">
<span className="material-symbols-outlined text-zinc-300 text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>fitness_center</span>
<span className="text-[10px] font-black tracking-widest text-zinc-300 border border-zinc-800/30 px-2 py-1">OPEN</span>
</div>
<h3 className="font-headline text-2xl font-black uppercase mb-4 tracking-tight">Iniciantes No-Gi</h3>
<p className="text-zinc-500 text-sm leading-relaxed mb-6 font-body">Fundamentos de grappling sem kimono. Foco em controle, postura e escapes essenciais.</p>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between border-b border-zinc-800/20 pb-2">
<span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Professor</span>
<span className="text-sm font-bold">Lucas Mendes</span>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase">Capacidade</span>
<span className="text-sm font-bold">28 Alunos</span>
</div>
</div>
</div>
{/*  Card: Feminino  */}
<div className="md:col-span-4 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col gap-6 hover:bg-zinc-900 transition-colors">
<div className="h-48 w-full bg-zinc-800/80 overflow-hidden">
<img className="w-full h-full object-cover grayscale contrast-125" data-alt="group of women in white jiu jitsu gis practicing techniques in a bright studio with minimalist aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoJ7oWF1dO2oc5OC5h5o3kFTSr7mWRouiCMCniDNDMAN2PFhdjVTP8zWQmyntvY29YXuvk_fS3FrJxATU--F3s4qkWG5zUUjFRvHLW4BPH4TGxYXPempvPEJFTASHRg1ijTHQivt68Ng94-s0rSzmoC_Z5yaxSacwCyWqB7fZfdWqd0mwfEjFQ6395jUiDceUrPYDa7JGaOY_Sp___mxDO56rfkmq0NVwz4kaeqKweezVuhH8w8cgVmQAABqR5jxnZ5OVEoWygnVqf"/>
</div>
<div>
<h3 className="font-headline text-xl font-black uppercase tracking-tight mb-2">Feminino</h3>
<div className="flex items-center gap-4 text-[10px] text-zinc-500 font-bold tracking-widest uppercase">
<span>Seg / Qua / Sex</span>
<span>•</span>
<span>18:00</span>
</div>
</div>
<div className="mt-auto flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-xs">person</span>
</div>
<div>
<p className="text-[10px] text-zinc-500 uppercase font-bold leading-none">Instrutora</p>
<p className="text-xs font-bold">Ana "Fera" Silva</p>
</div>
</div>
</div>
{/*  Card: Infantil  */}
<div className="md:col-span-4 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 relative group cursor-pointer overflow-hidden">
<div className="relative z-10">
<span className="material-symbols-outlined text-brand-red text-4xl mb-4" style={{ /* font-variation-settings: 'FILL' 1; */ }}>child_care</span>
<h3 className="font-headline text-2xl font-black uppercase mb-2 tracking-tight">Infantil</h3>
<p className="text-sm text-zinc-500 mb-6">Disciplina, coordenação motora e respeito através do BJJ para crianças de 6 a 12 anos.</p>
<div className="bg-zinc-950 p-4">
<div className="flex justify-between items-center mb-1">
<span className="text-[10px] font-black tracking-widest text-zinc-400">LOTAÇÃO</span>
<span className="text-[10px] font-black text-zinc-100">90%</span>
</div>
<div className="w-full h-1 bg-zinc-800/80">
<div className="h-full bg-brand-red/10" style={{ /* width: 90% */ }}></div>
</div>
</div>
</div>
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
<span className="font-headline text-8xl font-black italic select-none">KIDS</span>
</div>
</div>
{/*  Card: Master/Executivo  */}
<div className="md:col-span-4 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between">
<div>
<h3 className="font-headline text-2xl font-black uppercase mb-4 tracking-tight">Executivo 30+</h3>
<div className="flex flex-col gap-4">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-zinc-300 mt-1">schedule</span>
<div>
<p className="text-xs font-bold">Terça e Quinta</p>
<p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">06:30 AM</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-zinc-300 mt-1">groups</span>
<div>
<p className="text-xs font-bold">Prof. Carlos Vaz</p>
<p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Faixa Preta 4º Grau</p>
</div>
</div>
</div>
</div>
<button className="mt-8 w-full border border-zinc-800/30 py-3 font-label text-[10px] font-black tracking-widest uppercase hover:bg-zinc-800/80 transition-colors">Ver Detalhes</button>
</div>
</div>
</main>
    </>
  );
}


