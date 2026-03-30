export default function PlanoSemanal() {
  return (
    <>
<main className="px-4 pt-6 space-y-8">
{/*  Weekly Cycle Header  */}
<section className="space-y-2">
<p className="font-['Inter'] font-bold text-[10px] tracking-[0.2em] text-zinc-400 uppercase">STATUS: PRÉ-PRÓXIMO CICLO</p>
<h2 className="font-['Lexend'] font-black text-4xl italic uppercase leading-none tracking-tighter">WEEKLY_STRATEGY</h2>
<div className="w-24 h-1.5 bg-brand-red/10"></div>
</section>
{/*  Horizontal Calendar  */}
<section className="overflow-x-auto no-scrollbar flex gap-3 pb-2">
<div className="flex-shrink-0 w-16 h-20 bg-zinc-900 flex flex-col items-center justify-center border-b-4 border-transparent">
<span className="text-[10px] font-bold text-zinc-500">SEG</span>
<span className="text-xl font-black font-headline italic">12</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-brand-red/10 flex flex-col items-center justify-center border-b-4 border-brand-red/20">
<span className="text-[10px] font-bold text-white opacity-80">TER</span>
<span className="text-xl font-black font-headline italic text-white">13</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-900 flex flex-col items-center justify-center">
<span className="text-[10px] font-bold text-zinc-500">QUA</span>
<span className="text-xl font-black font-headline italic">14</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-900 flex flex-col items-center justify-center">
<span className="text-[10px] font-bold text-zinc-500">QUI</span>
<span className="text-xl font-black font-headline italic">15</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-900 flex flex-col items-center justify-center">
<span className="text-[10px] font-bold text-zinc-500">SEX</span>
<span className="text-xl font-black font-headline italic">16</span>
</div>
<div className="flex-shrink-0 w-16 h-20 bg-zinc-900 flex flex-col items-center justify-center opacity-40">
<span className="text-[10px] font-bold text-zinc-500">SAB</span>
<span className="text-xl font-black font-headline italic">17</span>
</div>
</section>
{/*  Main Training Card (Today)  */}
<section className="bg-zinc-950/60 border-l-8 border-brand-red/20 p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<span className="material-symbols-outlined text-8xl" data-icon="fitness_center">fitness_center</span>
</div>
<div className="relative z-10 space-y-6">
<div className="flex justify-between items-start">
<div>
<h3 className="font-['Lexend'] font-extrabold text-2xl italic uppercase tracking-tight">PASSAGEM DE GUARDA</h3>
<p className="text-zinc-400 font-bold text-xs mt-1">FOCO TÉCNICO: PRESSÃO E CONEXÃO</p>
</div>
<div className="bg-zinc-800/80 px-3 py-1">
<span className="text-[10px] font-black italic text-brand-red tracking-widest uppercase">LIVE NOW</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">HORÁRIO</p>
<p className="font-headline font-black text-xl italic">19:30 - 21:00</p>
</div>
<div className="space-y-1">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">INTENSIDADE</p>
<div className="flex gap-1 items-center">
<div className="h-2 w-6 bg-brand-red/10"></div>
<div className="h-2 w-6 bg-brand-red/10"></div>
<div className="h-2 w-6 bg-brand-red/10"></div>
<div className="h-2 w-6 bg-zinc-800/80"></div>
<span className="text-xs font-black italic ml-1">HIGH</span>
</div>
</div>
</div>
{/*  Performance Streak Integration  */}
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
<span>PRONTIDÃO PARA O CICLO</span>
<span>85%</span>
</div>
<div className="w-full h-3 bg-zinc-800/80">
<div className="h-full w-[85%] bg-gradient-to-r from-zinc-800-container to-zinc-800-fixed-dim"></div>
</div>
</div>
</div>
</section>
{/*  Recommended Techniques (Shortcuts)  */}
<section className="space-y-4">
<h4 className="font-['Lexend'] font-black text-lg italic uppercase tracking-tighter flex items-center gap-2">
<span className="w-2 h-6 bg-brand-red/10"></span>
                TÉCNICAS_RECOMENDADAS
            </h4>
<div className="space-y-3">
{/*  Video Card 1  */}
<div className="bg-zinc-900 group flex items-center hover:bg-zinc-800/80 transition-all cursor-pointer">
<div className="w-24 h-24 bg-zinc-800/80 flex-shrink-0 overflow-hidden relative">
<img alt="Technique Preview" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Action shot of a Jiu-Jitsu guard pass technique with dynamic motion blur in a high-contrast gym" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVSn164cuRk0QNW--yioDiLwIPnuJ-MTSU9RQMlo9plWWsy6QPkDg5JlPwkWqvkIQ5lCc1pDRwL09BZ-TTq9OU0SMwiMYS8hHSgiuVrlIgESN9cAMpIx9Z8aqslbUcasaZlDISQuBuyZiAYB3IChooa6EX2Lu0M3r1Nv-Oo03hoXRcDfzYY8Wg8ckRAmXy0mrUHZPKZVSjbNEgygg7dGUg07JU9dr6q0miFjwEsjtK5LcrLoK_iBRUDoP1orjE75x3t7ZiXSWsIstz"/>
<div className="absolute inset-0 bg-brand-red/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white" data-icon="play_arrow">play_arrow</span>
</div>
</div>
<div className="p-4 flex-grow">
<p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">DRILL #04</p>
<h5 className="font-headline font-bold text-sm italic uppercase leading-tight">PASSAGEM TOREADA (EXPLOSIVA)</h5>
<div className="flex items-center gap-2 mt-2">
<span className="material-symbols-outlined text-xs text-zinc-500" data-icon="schedule">schedule</span>
<span className="text-[10px] font-bold text-zinc-500 uppercase">08:45 MIN</span>
</div>
</div>
</div>
{/*  Video Card 2  */}
<div className="bg-zinc-900 group flex items-center hover:bg-zinc-800/80 transition-all cursor-pointer">
<div className="w-24 h-24 bg-zinc-800/80 flex-shrink-0 overflow-hidden relative">
<img alt="Technique Preview" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="Overhead view of two grapplers in a intense ground position, dramatic lighting highlighting muscular detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwGRl49eN5lBBk_sSFZ6w38fOUFV1wXMhlhEOZVtM7H4iVpH1n2fHbAb4xCcg3kjx5qCwOu6pOggVRfQDUIHTcBQHn2VNNGV9KKJwmCtEyiFKZFCw68Wxq5eZWpAscQ6HXCA4qO6WYCd70PhYwRiAK9G4Rgw9p03SFfsq4kz3ynJJWHGOSyK72Zbnnygjr5a4h8hAhienNYcNER2nYhHx2fscmSjd6WWwrfmkVSbIGztq9vo5RglZPB_fuqzOPrbkXqCLNqUyNSDaQ"/>
<div className="absolute inset-0 bg-brand-red/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-white" data-icon="play_arrow">play_arrow</span>
</div>
</div>
<div className="p-4 flex-grow">
<p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1">CONCEITO #12</p>
<h5 className="font-headline font-bold text-sm italic uppercase leading-tight">DISTRIBUIÇÃO DE PESO NO NEWAZA</h5>
<div className="flex items-center gap-2 mt-2">
<span className="material-symbols-outlined text-xs text-zinc-500" data-icon="schedule">schedule</span>
<span className="text-[10px] font-bold text-zinc-500 uppercase">12:20 MIN</span>
</div>
</div>
</div>
</div>
</section>
{/*  Goals & Stats Quick View  */}
<section className="grid grid-cols-2 gap-3">
<div className="bg-zinc-950 p-4 border-b-2 border-zinc-800">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">RESTANTES P/ CICLO</p>
<p className="font-headline font-black text-3xl italic tracking-tighter">04 <span className="text-sm font-bold uppercase not-italic">DIAS</span></p>
</div>
<div className="bg-zinc-950 p-4 border-b-2 border-brand-red/20">
<p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">CARGA TOTAL</p>
<p className="font-headline font-black text-3xl italic tracking-tighter">18 <span className="text-sm font-bold uppercase not-italic">HRS</span></p>
</div>
</section>
</main>
    </>
  );
}


