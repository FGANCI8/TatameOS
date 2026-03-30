export default function RitualDePreparaO() {
  return (
    <>
<main className="flex-1 mt-16 mb-24 p-6 overflow-y-auto">
{/*  Hero Section  */}
<section className="mb-12">
<h1 className="font-headline font-black text-5xl uppercase leading-none tracking-tighter mb-2">RITUAL DE<br/><span className="text-brand-red">PREPARAÇÃO</span></h1>
<div className="flex items-center gap-2">
<span className="h-[2px] w-12 bg-brand-red/10"></span>
<p className="font-label text-xs font-bold tracking-[0.2em] text-zinc-500">MODO COMPETIÇÃO ATIVO</p>
</div>
</section>
{/*  Focus Phrase Bento  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 mb-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-8xl">format_quote</span>
</div>
<p className="font-label text-[10px] tracking-widest text-brand-red font-extrabold mb-4 uppercase">FRASE DE FOCO</p>
<h2 className="font-headline font-bold text-3xl italic leading-tight">"A DISCIPLINA É O MEU ESCUDO, A TÉCNICA É A MINHA ESPADA."</h2>
</div>
{/*  Progress Track  */}
<div className="mb-8">
<div className="flex justify-between items-end mb-2">
<span className="font-label text-[10px] font-black tracking-widest text-zinc-500">PROGRESSO DO RITUAL</span>
<span className="font-headline font-black text-2xl text-zinc-300">60%</span>
</div>
<div className="h-1 bg-zinc-800/80 w-full">
<div className="h-full monolith-gradient w-[60%] shadow-[0_0_15px_rgba(255,26,26,0.4)]"></div>
</div>
</div>
{/*  Sequential Steps  */}
<div className="space-y-4">
{/*  Step 1: Completed  */}
<div className="bg-zinc-950 flex items-stretch border-l-4 border-zinc-800 shadow-lg">
<div className="w-16 flex items-center justify-center bg-zinc-900/80">
<span className="material-symbols-outlined text-zinc-300" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div className="p-6 flex-1">
<p className="font-label text-[10px] font-bold text-zinc-300 mb-1 uppercase tracking-widest">CONCLUÍDO</p>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">ALONGAMENTO DINÂMICO</h3>
<p className="font-body text-sm text-zinc-500 mt-2">Mobilidade de quadril e ativação escapular.</p>
</div>
</div>
{/*  Step 2: Active  */}
<div className="bg-zinc-800/80 flex items-stretch border-l-4 border-brand-red/20 relative">
<div className="w-16 flex items-center justify-center bg-brand-red/10 text-white">
<span className="material-symbols-outlined animate-pulse" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
</div>
<div className="p-6 flex-1">
<p className="font-label text-[10px] font-bold text-brand-red mb-1 uppercase tracking-widest">EM CURSO</p>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight text-white">REVISÃO MENTAL</h3>
<p className="font-body text-sm text-white mt-2">Visualize as entradas de queda e as transições para a guarda.</p>
<div className="mt-6 flex flex-wrap gap-2">
<span className="px-3 py-1 bg-zinc-950 text-[10px] font-bold border border-zinc-800/30">SINGLE LEG</span>
<span className="px-3 py-1 bg-zinc-950 text-[10px] font-bold border border-zinc-800/30">DELA RIVA</span>
<span className="px-3 py-1 bg-zinc-950 text-[10px] font-bold border border-zinc-800/30">TRIÂNGULO</span>
</div>
</div>
</div>
{/*  Step 3: Locked  */}
<div className="bg-zinc-950/60 flex items-stretch opacity-40">
<div className="w-16 flex items-center justify-center bg-zinc-900/80">
<span className="material-symbols-outlined text-zinc-500">accessibility_new</span>
</div>
<div className="p-6 flex-1">
<p className="font-label text-[10px] font-bold text-zinc-500 mb-1 uppercase tracking-widest">PRÓXIMO</p>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">POSTURA DOMINANTE</h3>
<p className="font-body text-sm text-zinc-500 mt-2">Ajuste de base e controle do centro de gravidade.</p>
</div>
</div>
{/*  Step 4: Locked  */}
<div className="bg-zinc-950/60 flex items-stretch opacity-40">
<div className="w-16 flex items-center justify-center bg-zinc-900/80">
<span className="material-symbols-outlined text-zinc-500">vitals</span>
</div>
<div className="p-6 flex-1">
<p className="font-label text-[10px] font-bold text-zinc-500 mb-1 uppercase tracking-widest">FINALIZADOR</p>
<h3 className="font-headline font-bold text-xl uppercase tracking-tight">CONTROLE EMOCIONAL</h3>
<p className="font-body text-sm text-zinc-500 mt-2">Respiração 4-7-8 para redução de cortisol.</p>
</div>
</div>
</div>
{/*  Action Area  */}
<div className="mt-12 mb-8">
<button className="w-full monolith-gradient py-6 px-8 text-white flex justify-between items-center group active:scale-95 transition-all">
<span className="font-headline font-black text-xl uppercase tracking-widest">AVANÇAR RITUAL</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
</button>
</div>
{/*  Tactical Visual  */}
<div className="h-48 w-full bg-zinc-900/80 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Training" className="w-full h-full object-cover" data-alt="Dynamic shot of two jiu-jitsu practitioners engaged in a tactical grip fight on a dark blue mat, dramatic high-contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdZwTcqsWeiYQIzPHxALslTCAotd34K35fKJY38sJxLRWILMGf0eqnxlCjrh9tAQDjM3NuZrHbRyanCnZmdAa6GOVB1RVZMo3ZCk9ofLtu0Dqen9UFwhC8mchuLaEEd5frpTfAt-agj1BENgb8JQZlJNuQZ6pe2gZSu04hsjsNNI3PsQv1s7amg4z_Jd3aAMW5AXf_jG9eiURj6x1527aIXVfN8L-GNWT_1LnBMCFlkDvsW7YJCdAwDA7uRJL5rp_Ha1qg9DSEw9Ko"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#131313] to-transparent"></div>
<div className="absolute bottom-4 left-6">
<p className="font-label text-[10px] font-black tracking-[0.3em] text-brand-red mb-1 uppercase">SENSEI INSIGHT</p>
<p className="font-headline font-bold text-lg uppercase leading-none">O COMBATE COMEÇA ANTES DO APITO.</p>
</div>
</div>
</main>
    </>
  );
}

