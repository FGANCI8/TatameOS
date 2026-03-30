export default function PainelDoProfessor() {
  return (
    <>
<main className="max-w-7xl mx-auto p-6 space-y-8">
{/*  Hero Metrics  */}
<section className="grid grid-cols-1 md:grid-cols-4 gap-0.5 bg-zinc-900 border-none">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between">
<p className="font-['Inter'] text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Alunos Ativos</p>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-['Lexend'] text-5xl font-black text-zinc-100">142</span>
<span className="text-brand-red text-sm font-bold">+12%</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between">
<p className="font-['Inter'] text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Taxa de Presença</p>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-['Lexend'] text-5xl font-black text-zinc-100">88<small className="text-2xl">%</small></span>
<span className="text-zinc-300 text-sm font-bold">ESTÁVEL</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between">
<p className="font-['Inter'] text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Aulas p/ Semana</p>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-['Lexend'] text-5xl font-black text-zinc-100">24</span>
<span className="text-zinc-500 text-sm font-bold">MÉDIA</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between">
<p className="font-['Inter'] text-[10px] font-bold tracking-[0.2em] text-zinc-500 uppercase">Tempo de Retenção</p>
<div className="mt-4 flex items-baseline gap-2">
<span className="font-['Lexend'] text-5xl font-black text-zinc-100">14<small className="text-2xl">M</small></span>
<span className="text-brand-red text-sm font-bold">ALTO</span>
</div>
</div>
</section>
{/*  Main Dashboard Content  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
{/*  Feedbacks Pendentes (Left Column)  */}
<div className="lg:col-span-4 space-y-6">
<div className="flex items-center justify-between">
<h2 className="font-['Lexend'] text-xl font-black tracking-tight uppercase">Feedbacks Pendentes</h2>
<span className="bg-brand-red/10 text-white text-[10px] font-bold px-2 py-1">08 NOVOS</span>
</div>
<div className="space-y-4">
{/*  Feedback Item  */}
<div className="bg-zinc-950/60 p-5 group hover:bg-zinc-900 transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">person</span>
</div>
<div>
<p className="text-xs font-bold text-zinc-100 uppercase">Ricardo Santos</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Faixa Azul • Grau 2</p>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500">2h atrás</span>
</div>
<p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 italic mb-4">"Mestre, estou com dificuldade em manter o quadril baixo na transição para o arm-lock da guarda fechada..."</p>
<button className="w-full bg-zinc-800/80 text-[10px] font-bold py-3 tracking-widest uppercase hover:bg-brand-red/10 transition-colors">Responder Agora</button>
</div>
<div className="bg-zinc-950/60 p-5 group hover:bg-zinc-900 transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">person</span>
</div>
<div>
<p className="text-xs font-bold text-zinc-100 uppercase">Ana Beatriz</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Faixa Branca • Grau 4</p>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500">5h atrás</span>
</div>
<p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 italic mb-4">"Sobre a aula de raspagem de ganchos: ainda perco o equilíbrio no momento do desequilíbrio lateral."</p>
<button className="w-full bg-zinc-800/80 text-[10px] font-bold py-3 tracking-widest uppercase hover:bg-brand-red/10 transition-colors">Responder Agora</button>
</div>
<div className="bg-zinc-950/60 p-5 group hover:bg-zinc-900 transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-sm">person</span>
</div>
<div>
<p className="text-xs font-bold text-zinc-100 uppercase">Carlos Mendes</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wider">Faixa Marrom • Grau 1</p>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500">8h atrás</span>
</div>
<p className="text-xs text-zinc-400 leading-relaxed line-clamp-2 italic mb-4">"Dúvida na pressão do ombro no controle lateral quando o oponente repõe a meia guarda."</p>
<button className="w-full bg-zinc-800/80 text-[10px] font-bold py-3 tracking-widest uppercase hover:bg-brand-red/10 transition-colors">Responder Agora</button>
</div>
</div>
</div>
{/*  Performance Grid (Right Column)  */}
<div className="lg:col-span-8 space-y-8">
{/*  Chart Area Placeholder  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 h-[400px] flex flex-col justify-between relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<div>
<h2 className="font-['Lexend'] text-xl font-black uppercase">Frequência Semanal</h2>
<p className="text-[10px] text-zinc-500 font-bold tracking-widest uppercase mt-1">Comparativo de Presença Diária</p>
</div>
<div className="flex gap-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-brand-red/10"></div>
<span className="text-[10px] font-bold uppercase">Manhã</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-zinc-800"></div>
<span className="text-[10px] font-bold uppercase">Noite</span>
</div>
</div>
</div>
{/*  Abstract Chart Visual  */}
<div className="absolute bottom-0 left-0 w-full h-48 flex items-end gap-1 px-8">
<div className="flex-1 bg-zinc-800/80 h-[30%] opacity-50"></div>
<div className="flex-1 bg-brand-red/10 h-[65%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[45%] opacity-50"></div>
<div className="flex-1 bg-zinc-800 h-[85%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[40%] opacity-50"></div>
<div className="flex-1 bg-brand-red/10 h-[95%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[55%] opacity-50"></div>
<div className="flex-1 bg-zinc-800 h-[75%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[20%] opacity-50"></div>
<div className="flex-1 bg-brand-red/10 h-[60%]"></div>
<div className="flex-1 bg-zinc-800/80 h-[35%] opacity-50"></div>
<div className="flex-1 bg-zinc-800 h-[45%]"></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-4 relative z-10 border-t border-zinc-800/20">
<span>SEG</span><span>TER</span><span>QUA</span><span>QUI</span><span>SEX</span><span>SAB</span>
</div>
</div>
{/*  Ranking Aulas  */}
<div className="space-y-6">
<h2 className="font-['Lexend'] text-xl font-black uppercase">Conteúdo em Destaque</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  Ranking Item 1  */}
<div className="flex bg-zinc-950/60 group cursor-pointer hover:bg-zinc-900 transition-colors overflow-hidden">
<div className="w-32 h-24 bg-zinc-800/80 shrink-0">
<img alt="BJJ Class" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="dramatic high-contrast overhead shot of two athletes grappling on a black mat in a professional Brazilian Jiu-Jitsu training center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEIoF8jBD2L1HgtbqTB28lpIBkKRvIqSCVm_RjX1cEMKNDyiAjI11B2f_CNnQDkaca5iH_Djx244ydZix-OiXKLsv93KFAUTYo0eX4hf1s9R4bNj_L7hm6OXYhLIv9i89sgCpUXCcZtGOXN-8-WSavHh_j2XvmmJE8aCon5NKx-t_EJaWOJnmYLEGrHVWmFt1bsGqFWRQgXdWtDU6zxyvgcS7VSsR98aWO95xG9Y6ri4gacH7W3oj3kViCmIC1fQuFONkzAd48W8Th"/>
</div>
<div className="p-4 flex flex-col justify-center overflow-hidden">
<span className="text-[8px] font-bold text-brand-red tracking-[0.3em] uppercase mb-1">Top 01 • 1.2k Views</span>
<h3 className="text-xs font-black uppercase leading-tight truncate">Controle de Lapela: Transições</h3>
<div className="mt-2 w-full bg-zinc-800/80 h-1">
<div className="bg-brand-red/10 h-full w-[92%]"></div>
</div>
</div>
</div>
{/*  Ranking Item 2  */}
<div className="flex bg-zinc-950/60 group cursor-pointer hover:bg-zinc-900 transition-colors overflow-hidden">
<div className="w-32 h-24 bg-zinc-800/80 shrink-0">
<img alt="BJJ Class" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="close-up of a black belt athlete tightening their gi belt with focus and determination in a dark gym studio" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPCSCp4j1Sb0pw8t6k7aeh91-N1NQIBhoVplUXsFpi4oQOsrsgKDi_H2h2IO46YMUxQCy7tbxqF19O64GnKSMfb9YRNNcYcBGLpt4D2Rl77QPjzA-q1d4NkkMEKiUiwH3cihUZZpZJi6on_I-CZUMN6OZPb_1U-DOBjt_wL1I4r7eoRWC8FWQ4ssWGCQUxWjHah1BfiK_koPzdthmOULb_KeBE8nP_H6h3Dzmv5IDQr1j1RhQjeVJElJtYUi5iXhafUdGXSnnuvii6"/>
</div>
<div className="p-4 flex flex-col justify-center overflow-hidden">
<span className="text-[8px] font-bold text-brand-red tracking-[0.3em] uppercase mb-1">Top 02 • 980 Views</span>
<h3 className="text-xs font-black uppercase leading-tight truncate">Pressão Invisível na Meia Guarda</h3>
<div className="mt-2 w-full bg-zinc-800/80 h-1">
<div className="bg-brand-red/10 h-full w-[78%]"></div>
</div>
</div>
</div>
{/*  Ranking Item 3  */}
<div className="flex bg-zinc-950/60 group cursor-pointer hover:bg-zinc-900 transition-colors overflow-hidden">
<div className="w-32 h-24 bg-zinc-800/80 shrink-0">
<img alt="BJJ Class" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="abstract action shot of a jiu-jitsu match with motion blur and intense lighting focusing on the kinetic energy of the sport" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCH7_SKZLzlJXyCY01yowqusFHDzqKw_WaempGiQk7XjFqA0yLK93bxC1axeDq11BLOAZxCwbZW3VzrAnFoeUeK6-rPneo2A8AFygzyTB5zGcgc49vGyVPUUb1Hc-zSILWS9nFanSYdTWBsvZ5g0gnxsivPA8xxEQwcZVawZiS0pewpe_7BMj6BX9Qrhqfnl1eHpr2CXhF43BMecCPUoUKm5u5VQEK6kazQl4p8HF7csoYLyW37-7WcyelVZhiMDs3Ctwk0-IKKcVx"/>
</div>
<div className="p-4 flex flex-col justify-center overflow-hidden">
<span className="text-[8px] font-bold text-brand-red tracking-[0.3em] uppercase mb-1">Top 03 • 845 Views</span>
<h3 className="text-xs font-black uppercase leading-tight truncate">Defesa de Triângulo Proativa</h3>
<div className="mt-2 w-full bg-zinc-800/80 h-1">
<div className="bg-brand-red/10 h-full w-[65%]"></div>
</div>
</div>
</div>
{/*  Ranking Item 4  */}
<div className="flex bg-zinc-950/60 group cursor-pointer hover:bg-zinc-900 transition-colors overflow-hidden">
<div className="w-32 h-24 bg-zinc-800/80 shrink-0">
<img alt="BJJ Class" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" data-alt="minimalist athletic training equipment in a modern gym with charcoal grey walls and industrial lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAei9B_KkF6vzli1JRLpLPN3QBgerFUXKcpPKMC5grod8grb5U38RXUdt6vrjcz5JUmwd0K6GIToUCDkiU8Z8MkEYBumZhTswpBDKyitUxj8PuuS6H10Sg9DNcPZmxjZ_pratWxMrK0hRiVRjwYNvDX98uzmEfb47wt79AUI7zGvetYZuF_b3WuPA1nXUY32bzZ338CeJh_R8TuQv6tFY3eqIUeyFATpbiLOhxixi0liKbtsGMhADVGrwx2_8aj81PAtxUFYNjds7wz"/>
</div>
<div className="p-4 flex flex-col justify-center overflow-hidden">
<span className="text-[8px] font-bold text-brand-red tracking-[0.3em] uppercase mb-1">Top 04 • 620 Views</span>
<h3 className="text-xs font-black uppercase leading-tight truncate">Drills de Agilidade Solo</h3>
<div className="mt-2 w-full bg-zinc-800/80 h-1">
<div className="bg-brand-red/10 h-full w-[42%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}

