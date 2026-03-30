export default function DesafioSemanal() {
  return (
    <>
<main className="pt-24 pb-32 px-4 max-w-4xl mx-auto kinetic-grid min-h-screen">
{/*  Hero Challenge Section  */}
<section className="relative mb-12">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-red/10 blur-3xl rounded-full"></div>
<div className="mb-2">
<span className="font-headline font-black text-brand-red text-sm tracking-[0.2em] uppercase">DESAFIO DA SEMANA</span>
</div>
<h2 className="font-headline font-black text-6xl md:text-8xl text-zinc-100 leading-none tracking-tighter mb-4 italic text-glow-red">
                100 <br/>BERIMBOLOS
            </h2>
<p className="text-zinc-400 font-medium max-w-md mb-8 border-l-4 border-brand-red/20 pl-4">
                Domine a transição mais técnica do Jiu-Jitsu moderno. Precisão, repetição e controle absoluto do adversário.
            </p>
{/*  Progress Monolith  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 mb-10 relative group overflow-hidden">
<div className="flex justify-between items-end mb-4">
<div>
<span className="block text-xs font-black text-zinc-500 tracking-widest uppercase mb-1">Status Atual</span>
<span className="text-4xl font-headline font-black text-zinc-100">45<span className="text-lg text-brand-red">/100</span></span>
</div>
<div className="text-right">
<span className="block text-xs font-black text-zinc-500 tracking-widest uppercase mb-1">Tempo Restante</span>
<span className="text-xl font-headline font-bold text-zinc-100">03 DIAS</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="h-4 bg-zinc-800/80 w-full relative">
<div className="h-full bg-gradient-to-r from-brand-red to-brand-red w-[45%] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
<div className="mt-4 flex gap-2 overflow-x-auto pb-2">
<div className="bg-zinc-900 px-3 py-1 text-[10px] font-bold text-zinc-100 uppercase">S - 15 REPS</div>
<div className="bg-zinc-900 px-3 py-1 text-[10px] font-bold text-zinc-100 uppercase">T - 20 REPS</div>
<div className="bg-zinc-900 px-3 py-1 text-[10px] font-bold text-zinc-100 uppercase">Q - 10 REPS</div>
<div className="bg-zinc-800/80 px-3 py-1 text-[10px] font-bold text-brand-red uppercase">HOJE - 0 REPS</div>
</div>
</div>
{/*  CTA Button  */}
<button className="w-full bg-brand-red/10 hover:bg-brand-red/20 text-white font-headline font-black text-xl py-6 px-8 flex items-center justify-between group transition-all duration-300">
<span>ACEITAR DESAFIO</span>
<span className="material-symbols-outlined group-hover:translate-x-2 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</button>
</section>
{/*  Ranking Section  */}
<section className="mt-16">
<div className="flex justify-between items-end mb-8">
<h3 className="font-headline font-black text-3xl italic text-zinc-100 uppercase tracking-tight">Top Performance</h3>
<span className="text-xs font-bold text-brand-red uppercase border-b border-brand-red/20 tracking-widest pb-1 cursor-pointer">Ver Todos</span>
</div>
<div className="space-y-4">
{/*  Rank 1  */}
<div className="bg-zinc-900/80 flex items-center p-4 group hover:bg-zinc-900 transition-colors">
<div className="w-12 text-2xl font-headline font-black italic text-brand-red italic">01</div>
<div className="w-14 h-14 bg-zinc-800/80 overflow-hidden mr-4">
<img alt="Athlete 1" className="w-full h-full object-cover" data-alt="Intense athlete sweating after training in a dark martial arts gym with moody red lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8VDtrynMSQ91_vh_I2qLYsVHwWbeU55dONvknR0EvKr-RyOujtHkyjuA4yIZvyczu8yjZQWd2nNtrFDin0S3YfHGALQF6KBtZVsPw_7VmQN9P53vhExd1td7RlftEnc4MJst5zczSiMdlGYWlC3xTUnpTsirCMr3hcLhr-VSYKH9vxKQ1fQ5lxXzfvMO_gSKTyaD4N7q87Oa0s3AX6y-SBju32xm1nhtm459i3CHWnZMAtoT3scxY-5hG2hY8UN3zITSoLphMQLWo"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-zinc-100 uppercase text-sm tracking-wide">Ricardo "Tanque" Silva</h4>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Faixa Marrom | Kinetic Elite</span>
</div>
<div className="text-right">
<span className="block font-headline font-black text-xl text-zinc-100">112</span>
<span className="block text-[8px] font-bold text-brand-red uppercase">REPS</span>
</div>
</div>
{/*  Rank 2  */}
<div className="bg-zinc-900/80 flex items-center p-4 group hover:bg-zinc-900 transition-colors">
<div className="w-12 text-2xl font-headline font-black italic text-zinc-100/50 italic">02</div>
<div className="w-14 h-14 bg-zinc-800/80 overflow-hidden mr-4">
<img alt="Athlete 2" className="w-full h-full object-cover" data-alt="Young female martial artist tying her black belt in a dimly lit high performance training center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPpIvRTmeaBOfyCKaM8CQuiBToRowNeBbCqHE7BgvNlt6xNaf4qP3zqjGoU8q8FYsbzLKXRorWljhNsS_t0IHV9f63t72X1GFdRZg5DFiCZ1curyjdjavLvw2PvN6tsjmFXhIuXWJGNKEDZJnuHH-hMtBatWK-fMDpMX-lHfvFvUI3EnWx8ScoE9h3PA7iJ4wxGzz8XLt5s_jXVo9B6qc-WrO0nKwWyO6bZEWmbKpULI8UweUGMG50bgGdyNSiP9FzH0alao3nw7xA"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-zinc-100 uppercase text-sm tracking-wide">Beatriz Mendes</h4>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Faixa Azul | Matriz</span>
</div>
<div className="text-right">
<span className="block font-headline font-black text-xl text-zinc-100">98</span>
<span className="block text-[8px] font-bold text-brand-red uppercase">REPS</span>
</div>
</div>
{/*  Rank 3  */}
<div className="bg-zinc-900/80 flex items-center p-4 group hover:bg-zinc-900 transition-colors">
<div className="w-12 text-2xl font-headline font-black italic text-zinc-100/50 italic">03</div>
<div className="w-14 h-14 bg-zinc-800/80 overflow-hidden mr-4">
<img alt="Athlete 3" className="w-full h-full object-cover" data-alt="Muscular jiu jitsu practitioner resting against a wall in a gritty dark training facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZrJTfreXrXRnpSvPbih0VCqSSv10i_7zo8hMl183PwmVFE1Y3gexg6iqFxAMnw_Fld73HHMUTV9jo4JNLNOGskSm9BglrnsoRLEU8liobvVTlfA9OLz4e-bQqI09KzMDAr0jDTBfqXCk0wufDfxCs34tnTFZ3uhCvr9BotYFY686Wlwz7O_wbPVnD_xpKyDhKVv407IUv1BwY6K7tjZICbcm4m86iBm_XTQ7HY406hlXeKA8NFzhsotagrCGMcZJxCsQBqChHqSJx"/>
</div>
<div className="flex-grow">
<h4 className="font-headline font-bold text-zinc-100 uppercase text-sm tracking-wide">Felipe Arona</h4>
<span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Faixa Roxa | Team Kinetic</span>
</div>
<div className="text-right">
<span className="block font-headline font-black text-xl text-zinc-100">85</span>
<span className="block text-[8px] font-bold text-brand-red uppercase">REPS</span>
</div>
</div>
</div>
</section>
{/*  Quote Area  */}
<section className="my-16 py-12 border-y border-zinc-800/80">
<span className="material-symbols-outlined text-brand-red text-4xl mb-4" data-icon="format_quote">format_quote</span>
<blockquote className="font-headline font-black text-2xl text-zinc-100 italic leading-tight uppercase">
                "O jiu-jitsu é a arte de usar a força do oponente contra ele mesmo. O berimbolo é a prova de que a técnica supera o peso."
            </blockquote>
<cite className="block mt-4 text-xs font-bold text-zinc-400 tracking-widest uppercase">— Mestre Kinetic</cite>
</section>
</main>
    </>
  );
}



