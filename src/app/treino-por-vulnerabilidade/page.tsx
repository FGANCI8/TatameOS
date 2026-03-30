export default function TreinoPorVulnerabilidade() {
  return (
    <>
<main className="flex-grow px-6 pt-8 pb-32 max-w-7xl mx-auto w-full">
{/*  Hero Section: Dynamic Vulnerability Analysis  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
<div>
<span className="font-['Inter'] font-bold text-[12px] uppercase tracking-[0.3em] text-zinc-300">Performance Telediagnosis</span>
<h2 className="font-['Lexend'] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mt-2">TREINO<br/><span className="text-brand-red">FOCADO</span></h2>
</div>
<div className="bg-zinc-900 p-4 flex flex-col gap-1 border-l-4 border-brand-red/20 min-w-[200px]">
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-zinc-500">Status de Vulnerabilidade</span>
<span className="font-['Lexend'] text-2xl font-black text-zinc-100">CRÍTICO</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="w-full h-4 bg-zinc-800/80 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-gradient-to-r from-zinc-800 to-zinc-100 w-3/4 animate-pulse"></div>
</div>
<div className="flex justify-between mt-2 font-['Inter'] text-[10px] font-extrabold uppercase tracking-widest text-zinc-500">
<span>Eficiência Global: 75%</span>
<span>Alvo: 95%</span>
</div>
</section>
{/*  Bento Grid for Vulnerability Blocks  */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
{/*  Defesa de Queda - Massive Highlight  */}
<article className="md:col-span-8 bg-zinc-950/60 flex flex-col relative group overflow-hidden h-[400px]">
<div className="absolute inset-0 z-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-40">
<img className="w-full h-full object-cover" data-alt="Two athletes grappling on mats, focusing on a takedown defense posture, high contrast black and white style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnuQxj7ow8ZCpLX2xtP9ePjmNH-FbTtdX21ncYocgYXaKu0Fj19g7Nlk66_3qZe83L0FbQq4zoiXiQngaa9CWKrf7zN9YnnDZ7uK464gbhV2obCZpWDP_HqNDiVtigExVV0JHn5jUVzj-ENvmu9NT7-B_2nT9SoQXRIReh-0DV7sXsmmAytT05rh2xZ_JWG0y8GLAdqpPBRXSMSM2U_YYZKEM6jf9TOgQ72y-8iXvLh1TtEXC3JF1bXUepJeMjCaj-lGIKPF-tHnA8"/>
</div>
<div className="relative z-10 p-8 h-full flex flex-col justify-between">
<div>
<div className="inline-block bg-brand-red/10 text-white px-3 py-1 font-['Inter'] text-[10px] font-black uppercase tracking-[0.2em] mb-4">ALTA PRIORIDADE</div>
<h3 className="font-['Lexend'] text-4xl font-black uppercase tracking-tighter">Defesa de Queda</h3>
<p className="font-['Inter'] text-zinc-500 max-w-sm mt-4 text-sm leading-relaxed">Sua taxa de sprawl caiu 15% nos últimos 3 treinos. Foco em reação de quadril e esgrima antecipada.</p>
</div>
<div className="flex items-end justify-between">
<div className="flex gap-8">
<div className="flex flex-col">
<span className="text-[10px] font-bold text-zinc-300 uppercase">Duração</span>
<span className="text-2xl font-['Lexend'] font-black">45min</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold text-zinc-300 uppercase">Intensidade</span>
<span className="text-2xl font-['Lexend'] font-black text-brand-red">MAX</span>
</div>
</div>
<button className="bg-brand-red/10 text-white font-['Inter'] font-bold text-sm px-8 py-4 uppercase tracking-widest hover:bg-brand-red/20 transition-colors">INICIAR</button>
</div>
</div>
</article>
{/*  Retenção de Guarda  */}
<article className="md:col-span-4 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-[400px]">
<div className="flex justify-between items-start">
<span className="material-symbols-outlined text-zinc-300 text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield</span>
<span className="font-['Lexend'] text-6xl font-black text-white/5">02</span>
</div>
<div>
<h3 className="font-['Lexend'] text-2xl font-black uppercase tracking-tighter mb-2">Retenção de Guarda</h3>
<div className="w-full h-[2px] bg-zinc-800/20 mb-4">
<div className="w-2/3 h-full bg-zinc-800"></div>
</div>
<p className="font-['Inter'] text-zinc-500 text-xs uppercase tracking-widest font-bold">Vulnerabilidade: Passagem de Toureando</p>
</div>
<div className="flex flex-col gap-4">
<div className="flex justify-between font-['Inter'] text-[10px] font-extrabold uppercase">
<span>30 MINUTOS</span>
<span className="text-zinc-300">MÉDIA</span>
</div>
<button className="w-full border border-zinc-800 py-4 font-['Inter'] font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-zinc-800/80 transition-colors">CONFIGURAR</button>
</div>
</article>
{/*  Base e Postura  */}
<article className="md:col-span-4 bg-zinc-800/80 p-8 flex flex-col justify-between h-[320px]">
<div>
<h3 className="font-['Lexend'] text-2xl font-black uppercase tracking-tighter leading-none mb-2">Base e Postura</h3>
<span className="font-['Inter'] text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">Fundamentos Sólidos</span>
</div>
<div className="bg-zinc-950 p-4">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-brand-red">fitness_center</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">Drill de Equilíbrio Unilateral</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-brand-red">timer</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest">3 Séries x 10 Minutos</span>
</div>
</div>
<button className="bg-zinc-100 text-surface font-['Inter'] font-black text-[10px] py-3 uppercase tracking-widest">DETALHES</button>
</article>
{/*  Extra Module: Recuperação Ativa  */}
<article className="md:col-span-8 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col md:flex-row gap-8 items-center h-auto md:h-[320px]">
<div className="w-full md:w-1/2 h-48 bg-zinc-950">
<img className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all" data-alt="Close up of athlete hands doing mobility exercises, focus on precision and stretching, moody gym lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4KrNAJblch5FkNJEPEQNQw3vB9R4m0ip3scxX70uSHrTDlhnAaHEoEtRPfaKI6-NDHQ1dJPK9_CWj99mvgLEO4pwm-ik9tPBPAUeBJOG1CyfHs9H6jmeAzEQgHKUQpPLi48TX_2bpUJylkRyxsLUNtaQ4tSDk3wWiOEs8L590Kyjw8ITRnH8-y5F2-gOLCfyB1Dne8YS9F4RmUBNOlElQpfMbZp_2L5jL4AIh77pmkeHad9_4akL0mGujhzoNujQcziUVQg3N-TXJ"/>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-center">
<h4 className="font-['Lexend'] text-xl font-black uppercase tracking-tighter mb-4">Mobilidade Corretiva</h4>
<p className="font-['Inter'] text-zinc-500 text-sm mb-6">Reduza o risco de lesões causadas por base instável através de rotinas de mobilidade de quadril.</p>
<div className="flex gap-4">
<span className="bg-zinc-800/10 text-zinc-300 px-3 py-1 font-bold text-[10px] tracking-tighter">MOBILIDADE</span>
<span className="bg-zinc-800/10 text-zinc-300 px-3 py-1 font-bold text-[10px] tracking-tighter">REFLUXO</span>
</div>
</div>
</article>
</div>
{/*  Motivational CTA  */}
<section className="mt-16 mb-8 text-center bg-gradient-to-b from-zinc-950/60 to-transparent py-12">
<h5 className="font-['Lexend'] text-3xl font-black uppercase italic tracking-widest mb-4">Fraqueza é apenas um <span className="text-brand-red">Dado</span>.</h5>
<p className="font-['Inter'] text-zinc-500 uppercase text-[10px] font-extrabold tracking-[0.4em]">Elimine as brechas. Domine o tatame.</p>
</section>
</main>
    </>
  );
}



