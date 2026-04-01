export default function HistRicoDeCampeonatos() {
  return (
    <>
<main className="pt-24 pb-32 px-4 max-w-5xl mx-auto space-y-12">
{/*  Hero Summary Section  */}
<section className="grid grid-cols-1 md:grid-cols-3 gap-1">
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-end min-h-[160px]">
<span className="font-headline text-label-sm uppercase tracking-widest text-zinc-500 mb-2">VITÓRIAS TOTAIS</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-6xl font-black text-zinc-100">42</span>
<span className="text-brand-red font-black text-xl">/ 50</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-end min-h-[160px]">
<span className="font-headline text-label-sm uppercase tracking-widest text-zinc-500 mb-2">TAXA DE FINALIZAÇÃO</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-6xl font-black text-zinc-100">68</span>
<span className="text-zinc-100 font-black text-xl">%</span>
</div>
</div>
<div className="kinetic-gradient p-8 flex flex-col justify-end min-h-[160px]">
<span className="font-headline text-label-sm uppercase tracking-widest text-white/80 mb-2">RANKING ATUAL</span>
<div className="flex items-baseline gap-2">
<span className="font-headline text-6xl font-black text-white">#12</span>
<span className="text-white font-black text-xl">ESTADUAL</span>
</div>
</div>
</section>
{/*  Tournament History Section  */}
<section className="space-y-6">
<div className="flex items-center justify-between border-b border-zinc-800/15 pb-4">
<h2 className="font-headline text-2xl font-black uppercase tracking-tighter">HISTÓRICO DE CAMPEONATOS</h2>
<div className="flex gap-4 items-center">
<span className="material-symbols-outlined text-zinc-400 cursor-pointer" data-icon="filter_list">filter_list</span>
<span className="font-label text-xs font-bold uppercase tracking-widest text-zinc-400">FILTRAR POR ANO</span>
</div>
</div>
{/*  Tournament Card 1: Gold  */}
<div className="bg-zinc-950/60 group flex flex-col md:flex-row items-stretch overflow-hidden">
<div className="relative w-full md:w-48 h-48 md:h-auto bg-zinc-800/80 flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale hover:grayscale-0" alt="Intense close-up of a Brazilian Jiu-Jitsu gold medal with red ribbon resting on a black tatami mat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAB3eQg3U2YpEDnuPpm7onypKSw2kcWzK5vp-lIVX_zhL_e4cSORAqJDncITKo2zAPD43yazKbRy2yS2oHr_2gArS0rE_czYyFVEWHn92keabMToBXID06lgameA1biWuc9OcfEaO8ujFt3qT0ZFux-YGu5zkoXf4h42rWaeAv--lcvwY7pMSXck1mGPTByw65v8qyJk6-4h7JV0Jvruh2sz9BMufKrheGn2ZULDhPRoETL6ktf-WzA5f0YuXjkAhzpoOZb29sQBba"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="material-symbols-outlined text-5xl medal-gold drop-shadow-lg" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
</div>
<div className="p-8 flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">15 MAR 2024</span>
<h3 className="font-headline text-3xl font-black uppercase leading-none text-zinc-100">IBJJF CURITIBA OPEN</h3>
<div className="flex flex-wrap gap-2 pt-2">
<span className="bg-zinc-800/80 px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">FAIXA ROXA</span>
<span className="bg-zinc-800/80 px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">PESO LEVE (-76KG)</span>
</div>
</div>
<div className="flex flex-col justify-between items-end text-right">
<div className="space-y-1">
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">RESULTADO FINAL</p>
<p className="font-headline text-4xl font-black text-zinc-100">OURO</p>
</div>
<button className="bg-brand-red/10 text-white px-6 py-3 font-label text-[10px] font-black tracking-[0.2em] uppercase hover:bg-brand-red/20 transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-200">
                            DETALHES DAS LUTAS <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Tournament Card 2: Silver  */}
<div className="bg-zinc-950/60 group flex flex-col md:flex-row items-stretch overflow-hidden">
<div className="relative w-full md:w-48 h-48 md:h-auto bg-zinc-800/80 flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale hover:grayscale-0" alt="High action shot of two jiu-jitsu athletes grappling on a competition mat under dramatic arena lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1GbaSFr01D6OY2b06kAwqPUGJIP72N6om7QveKGSLfTmEdblPhdqjoGGbATwK7sa47q_zuXtOn-otDLBrQ3L7VQCJDv7rS59rDrLz-0DVso-oRN2NC4nqqPPG7iit4fD7Hm5dOfV862ubpp6Ss8nTV2gkXZra3ahKX_3qiSKJ8Lo2VkzFKjqnecjnR4uP9Yg-J_uypQ3mALBVnXyZ3CJimziY6c2Xv_ucajfKVRvqpsV1ujT2Ev_-VaSf1CjDwZqAC33UGlNG7wHe"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="material-symbols-outlined text-5xl medal-silver drop-shadow-lg" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
</div>
<div className="p-8 flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">02 FEV 2024</span>
<h3 className="font-headline text-3xl font-black uppercase leading-none text-zinc-100">CAMPEONATO PAULISTA</h3>
<div className="flex flex-wrap gap-2 pt-2">
<span className="bg-zinc-800/80 px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">FAIXA ROXA</span>
<span className="bg-zinc-800/80 px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">ABSOLUTO</span>
</div>
</div>
<div className="flex flex-col justify-between items-end text-right">
<div className="space-y-1">
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">RESULTADO FINAL</p>
<p className="font-headline text-4xl font-black text-zinc-100">PRATA</p>
</div>
<button className="border border-zinc-800/30 text-zinc-100 px-6 py-3 font-label text-[10px] font-black tracking-[0.2em] uppercase hover:bg-zinc-800/80 transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-200">
                            DETALHES DAS LUTAS <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Tournament Card 3: Bronze  */}
<div className="bg-zinc-950/60 group flex flex-col md:flex-row items-stretch overflow-hidden">
<div className="relative w-full md:w-48 h-48 md:h-auto bg-zinc-800/80 flex-shrink-0">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity grayscale hover:grayscale-0" alt="Athletic arena background with blurred silhouettes of spectators and bright overhead sports lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnUgdzJkBMZ5FNsG8d5Qs6GOd3cNpoFCgqehTWGukH54z1FeZE8rAOKKwpe9gUldzMBI9CrVEmiq1Ft-vmzowFW3WIkE3s0WVh1b14CmbMwPdR19srXEyqMPf7IZrfKN5ii7tl7_gzNPMepqxjj4H8EN7znlcJGro24m-00ZcbUyEZU43O4dC6nYEJf0sHOkoGTvP-Awv9lbsMt-5TGKPOojQFzgeOwf3H0orrpN7MpT6rz8H_pk0GNYzLonyFkSsuoxw705Sn9RTO"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="material-symbols-outlined text-5xl medal-bronze drop-shadow-lg" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
</div>
<div className="p-8 flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">12 DEZ 2023</span>
<h3 className="font-headline text-3xl font-black uppercase leading-none text-zinc-100">COPA INTERNACIONAL</h3>
<div className="flex flex-wrap gap-2 pt-2">
<span className="bg-zinc-800/80 px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">FAIXA AZUL</span>
<span className="bg-zinc-800/80 px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">PESO LEVE (-76KG)</span>
</div>
</div>
<div className="flex flex-col justify-between items-end text-right">
<div className="space-y-1">
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">RESULTADO FINAL</p>
<p className="font-headline text-4xl font-black text-zinc-100">BRONZE</p>
</div>
<button className="border border-zinc-800/30 text-zinc-100 px-6 py-3 font-label text-[10px] font-black tracking-[0.2em] uppercase hover:bg-zinc-800/80 transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-200">
                            DETALHES DAS LUTAS <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
</div>
</div>
{/*  Tournament Card 4: Participation  */}
<div className="bg-zinc-950/60 group flex flex-col md:flex-row items-stretch overflow-hidden opacity-80 grayscale">
<div className="relative w-full md:w-48 h-48 md:h-auto bg-zinc-800/80 flex-shrink-0">
<img className="w-full h-full object-cover opacity-40" alt="Black and white textured gym wall with high contrast shadows and industrial athletic vibe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCe_Q7VUqwCWUCsjv675_YqguBkt6eJunDSj9fwZG_hxpFoftPM3-010m_8fGvyEopU5zsJbc-zW6I-cKIYJxDGr46q1-qxznjv2bcxlAeFhMmX7VkJlXQVyOsmEQolGFqgQEeBVmB7hbDhz0U0FPFjXe-kmNzNk0qsmebcXrDJ4IAPgsEy4ll0T_KAsrLg7xglpQh10aKEe1keI0UeaHwKZQt_nQu8otIl6SYrECR9KwSY1UypZ60QxjhqDYNwvj69k8WXZu_lkij5"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4">
<span className="material-symbols-outlined text-5xl text-zinc-500 drop-shadow-lg" data-icon="emoji_events">emoji_events</span>
</div>
</div>
<div className="p-8 flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<span className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">20 OUT 2023</span>
<h3 className="font-headline text-3xl font-black uppercase leading-none text-zinc-100">GRAND PRIX NOGI</h3>
<div className="flex flex-wrap gap-2 pt-2">
<span className="bg-zinc-800/80 px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">FAIXA AZUL</span>
<span className="bg-zinc-800/80 px-3 py-1 font-label text-[10px] font-bold tracking-widest uppercase">PESO LEVE (-76KG)</span>
</div>
</div>
<div className="flex flex-col justify-between items-end text-right">
<div className="space-y-1">
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">RESULTADO FINAL</p>
<p className="font-headline text-2xl font-black text-zinc-100/60">PARTICIPAÇÃO</p>
</div>
<button className="border border-zinc-800/10 text-zinc-100/40 px-6 py-3 font-label text-[10px] font-black tracking-[0.2em] uppercase cursor-not-allowed">
                            ANALISAR ERROS <span className="material-symbols-outlined text-sm" data-icon="error_outline">error_outline</span>
</button>
</div>
</div>
</div>
</section>
{/*  Medal Dashboard Bento Grid  */}
<section className="space-y-6 pb-12">
<h2 className="font-headline text-2xl font-black uppercase tracking-tighter">ESTATÍSTICAS DE PÓDIO</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-4 border-l-4 border-[#FFD700]">
<span className="material-symbols-outlined medal-gold text-4xl" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<div>
<p className="font-headline text-4xl font-black">08</p>
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">OUROS</p>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-4 border-l-4 border-[#C0C0C0]">
<span className="material-symbols-outlined medal-silver text-4xl" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<div>
<p className="font-headline text-4xl font-black">12</p>
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">PRATAS</p>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-4 border-l-4 border-[#CD7F32]">
<span className="material-symbols-outlined medal-bronze text-4xl" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
<div>
<p className="font-headline text-4xl font-black">05</p>
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">BRONZES</p>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-4 border-l-4 border-brand-red/20">
<span className="material-symbols-outlined text-brand-red text-4xl" data-icon="show_chart">show_chart</span>
<div>
<p className="font-headline text-4xl font-black">82%</p>
<p className="font-label text-[10px] font-bold uppercase tracking-widest text-zinc-400">Frequência Pódio</p>
</div>
</div>
</div>
</section>
</main>
    </>
  );
}



