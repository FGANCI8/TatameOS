export default function CheckInDeTreino() {
  return (
    <>
<main className="pt-24 pb-32 px-6 max-w-2xl mx-auto min-h-screen">
{/*  Hero Check-in Header  */}
<section className="mb-10">
<p className="font-label text-xs uppercase tracking-[0.2em] text-zinc-300 mb-2">Check-in de Atleta</p>
<h2 className="font-headline text-4xl font-black uppercase leading-none tracking-tighter mb-4">Registro de<br/><span className="text-brand-red">Performance</span></h2>
<div className="w-16 h-1 bg-brand-red/10"></div>
</section>
{/*  Training Type Selection  */}
<section className="mb-12">
<label className="font-label text-[10px] uppercase tracking-widest text-zinc-400 mb-4 block">Selecione o Tipo de Aula</label>
<div className="grid grid-cols-3 gap-3">
<button className="group flex flex-col items-center justify-center py-6 bg-zinc-950/60 border border-transparent hover:border-brand-red/20 transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl mb-2 text-brand-red" data-icon="checkroom">checkroom</span>
<span className="font-headline font-bold text-sm tracking-tighter uppercase">Gi</span>
</button>
<button className="group flex flex-col items-center justify-center py-6 bg-zinc-900 border border-brand-red/20 transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl mb-2 text-brand-red" data-icon="dry_cleaning" style={{ /* font-variation-settings: 'FILL' 1; */ }}>dry_cleaning</span>
<span className="font-headline font-bold text-sm tracking-tighter uppercase">No-Gi</span>
</button>
<button className="group flex flex-col items-center justify-center py-6 bg-zinc-950/60 border border-transparent hover:border-brand-red/20 transition-all active:scale-95">
<span className="material-symbols-outlined text-3xl mb-2 text-brand-red" data-icon="exercise">exercise</span>
<span className="font-headline font-bold text-sm tracking-tighter uppercase">Drill</span>
</button>
</div>
</section>
{/*  Physical Feeling Scale  */}
<section className="mb-12">
<div className="flex justify-between items-end mb-4">
<label className="font-label text-[10px] uppercase tracking-widest text-zinc-400">Sensação Física</label>
<span className="font-headline text-2xl font-black italic text-zinc-300">07 / 10</span>
</div>
<div className="flex gap-1 h-12">
<button className="flex-1 bg-[#343d96] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#4A4EB8] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#6162D6] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#8487E0] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#C6C6C7] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#E7BD6D] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#E78C4A] border-2 border-white scale-y-110 shadow-lg transition-all"></button>
<button className="flex-1 bg-[#E75D30] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#E72E15] hover:brightness-125 transition-all"></button>
<button className="flex-1 bg-[#FF1A1A] hover:brightness-125 transition-all"></button>
</div>
<div className="flex justify-between mt-2 font-label text-[9px] uppercase tracking-widest text-neutral-500">
<span>Recuperado</span>
<span>Exausto</span>
</div>
</section>
{/*  Focus Text Field  */}
<section className="mb-12">
<label className="font-label text-[10px] uppercase tracking-widest text-zinc-400 mb-2 block">Foco do Treino</label>
<div className="relative bg-zinc-950 border-b-2 border-zinc-800 focus-within:border-brand-red/20 transition-colors">
<textarea className="w-full bg-transparent border-none text-zinc-100 placeholder:text-neutral-600 focus:ring-0 font-body text-sm py-4 px-0" placeholder="Ex: Passagem de guarda, finalizações do triângulo..." rows={3}></textarea>
</div>
</section>
{/*  Confirmation Button  */}
<section className="mt-8">
<button className="w-full py-6 bg-gradient-to-br from-brand-red to-brand-red flex items-center justify-center group active:scale-95 transition-transform">
<span className="font-headline font-black text-xl tracking-[0.2em] uppercase text-white mr-3">Confirmar Treino</span>
<span className="material-symbols-outlined text-white group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</section>
</main>
    </>
  );
}


