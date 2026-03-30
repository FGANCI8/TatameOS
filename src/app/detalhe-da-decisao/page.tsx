export default function DetalheDaDecisO() {
  return (
    <>
<main className="pt-20 px-4 max-w-4xl mx-auto space-y-6">
{/*  Hero Header Section  */}
<section className="mt-8">
<div className="bg-brand-red/10 p-1 inline-block mb-2">
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest px-2 text-white">ALERTA DE DESEMPENHO</span>
</div>
<h2 className="font-['Lexend'] text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9] mb-4">
                ERRO: ABRIR BASE <span className="text-brand-red">PRECIPITADO</span>
</h2>
<div className="flex items-center gap-4 py-2 border-y border-zinc-800/15">
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-zinc-400" data-icon="schedule">schedule</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-zinc-400">SPARRING 04:12</span>
</div>
<div className="flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-zinc-400" data-icon="warning">warning</span>
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-zinc-400">CRÍTICO</span>
</div>
</div>
</section>
{/*  Video Analysis Component  */}
<section className="relative group aspect-video w-full overflow-hidden bg-zinc-950">
<img className="w-full h-full object-cover opacity-60" data-alt="dramatic action shot of two jiu-jitsu athletes grappling on a black mat with cinematic red side lighting highlighting muscles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApsDnvXMHn6R8Szn69yrLk5TwQcKgbmh84iPZ7c0jHxnc5bCsmCEtH8_d-6UMaoqjzyHRhNtbi1liBmpC3mGuOFDJXYaN9V5OIDkLO-j17k4vJ27ZDFewNSNvLe1gTf2G5MgEN4LFRuIXnDwuaOQASDNC2JZFihJ5978VpZApyAhoDUpEuWKeQQNEE7klYJo4XoqiwcKAcIUgUEZw2xMZzqBLmysQRBYHktmN0aUQ5Dsn29gCaNirUdsHe_Dy-Kb5tMkU8eRV7Fq_O"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-brand-red/10 flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-white text-4xl" data-icon="play_arrow" data-weight="fill">play_arrow</span>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-white">REPLAY ANALÍTICO: FRAME 1042</span>
</div>
{/*  Tactical Overlay  */}
<div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-red-500 rounded-full animate-pulse flex items-center justify-center">
<div className="w-1 h-1 bg-red-500 rounded-full"></div>
</div>
</section>
{/*  Bento Analysis Grid  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Contexto  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 md:col-span-2 space-y-4">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-zinc-800"></div>
<h3 className="font-['Lexend'] text-xl font-bold uppercase tracking-tight">CONTEXTO DA LUTA</h3>
</div>
<p className="font-['Inter'] text-zinc-400 leading-relaxed text-sm">
                    Você estava trabalhando a passagem de guarda fechada. O oponente mantinha uma pegada forte no seu lapel esquerdo. Em vez de estabilizar os quadris, houve uma tentativa de explosão vertical para romper a pegada sem o devido controle de postura.
                </p>
</div>
{/*  Métrica de Risco  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between">
<span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest text-zinc-400">ÍNDICE DE RISCO</span>
<div className="space-y-1">
<div className="flex items-end gap-1">
<span className="font-['Lexend'] text-5xl font-black text-brand-red">88</span>
<span className="font-['Inter'] text-sm font-bold text-brand-red mb-2">%</span>
</div>
<div className="h-1 w-full bg-zinc-800/80">
<div className="h-full bg-brand-red/10 w-[88%]"></div>
</div>
</div>
<p className="font-['Inter'] text-[10px] text-zinc-400 leading-tight">EXPOSIÇÃO ALTA A FINALIZAÇÕES DE TRONCO.</p>
</div>
{/*  O que foi feito  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-4">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-brand-red/10"></div>
<h3 className="font-['Lexend'] text-xl font-bold uppercase tracking-tight">A FALHA</h3>
</div>
<p className="font-['Inter'] text-zinc-400 leading-relaxed text-sm">
                    Subida do tronco sem recolhimento de cotovelo. Espaço aberto na axila direita.
                </p>
</div>
{/*  Por que foi ruim  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-4">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-brand-red/10"></div>
<h3 className="font-['Lexend'] text-xl font-bold uppercase tracking-tight">POR QUE?</h3>
</div>
<p className="font-['Inter'] text-zinc-400 leading-relaxed text-sm">
                    Exposição imediata ao <span className="text-white font-bold">TRIÂNGULO</span>. O oponente não precisou de esforço para laçar o pescoço.
                </p>
</div>
{/*  Consequência  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-4">
<div className="flex items-center gap-2">
<div className="w-1 h-6 bg-brand-red/10"></div>
<h3 className="font-['Lexend'] text-xl font-bold uppercase tracking-tight">IMPACTO</h3>
</div>
<p className="font-['Inter'] text-zinc-400 leading-relaxed text-sm">
                    Perda total de posição (Guard Pass para Bottom Guard). Desvantagem de -3 pontos.
                </p>
</div>
</div>
{/*  Tactical Diagram  */}
<section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border border-zinc-800/10">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1 space-y-4">
<h3 className="font-['Lexend'] text-2xl font-black uppercase tracking-tighter italic">SOLUÇÃO KINETIC</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-zinc-300" data-icon="check_circle">check_circle</span>
<span className="text-sm font-['Inter']">Mantenha os cotovelos colados às costelas.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-zinc-300" data-icon="check_circle">check_circle</span>
<span className="text-sm font-['Inter']">Quebre a pegada do lapel antes da subida.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-zinc-300" data-icon="check_circle">check_circle</span>
<span className="text-sm font-['Inter']">Use o joelho central para ancorar a base.</span>
</li>
</ul>
<button className="w-full bg-brand-red/10 text-white py-4 font-['Lexend'] font-bold uppercase tracking-widest active:scale-95 duration-100 mt-4">
                        TREINAR CORREÇÃO
                    </button>
</div>
<div className="w-full md:w-64 aspect-square bg-zinc-800/80 flex items-center justify-center p-4">
<img className="w-full h-full object-contain mix-blend-lighten" data-alt="minimalist white line tactical diagram of a jiu-jitsu position on a dark chalkboard background with red strategy arrows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-3LH_pIB1KnuhSwmv4LxcjzQekp7WcTT-ZaezF2JAOwq3h-HSQe7vu9uyrR3Cirwv9r_OR9IgLstFvtyEU7Ka5dwVEgdnTkuj2g8fKsZHkQQtkWAhFwbzTbfIoCxSqAj-DXSuZ9Ph4ZdUXCwHtm1G0_YwcWqJdrRC2K3V0gIkAL8gaeW91FbOvlIVuvl-c-rzZKORMTqWcK1oyghBcSmm6YgaZPS5tjtqMrdZ5zCbW8ivQ6a47ZnUg8wwZwTKsS6Uqx8toGBcJwsH"/>
</div>
</div>
</section>
</main>
    </>
  );
}

