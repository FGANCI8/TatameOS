
export default function ConquistasEEvoluO() {
  return (
    <>
      
{/*  Top Navigation Bar  */}
<header className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/5 flex justify-between items-center px-6 py-4 w-full">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-zinc-800/80 overflow-hidden">
<img className="w-full h-full object-cover" data-alt="close-up profile portrait of a focused jiu-jitsu athlete with sweat on face in a dark moody gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC2bmW-1ldZ0GB1bccypyJ954WJFKd0z1Ccd_vlQXeUaiIpM1nqpEnv9TWQtDWDQs0YZqkgmr6Zkr9WD_zAa49E80wN7BQztwf8VkHAQYbtGtcwQrVKdFtSd-Tx1SFz-rEIB89uususj-VElbxkgnlSBIBlgZsJJ9Ljkma2QgqSL2XgpGAsPmyUxhlqkUxis84lgB2bZHxFw7wY2WOLQoEBSfYuxuLwwQXpTf4N3OnUPCnsMxhxLS0PkuFpXEkSCa_WkLn5SYvY8cj"/>
</div>
<h1 className="font-['Lexend'] uppercase tracking-tighter text-2xl font-black italic text-[#FF1A1A]">KINETIC BJJ</h1>
</div>
<button className="text-[#393939] hover:opacity-80 transition-opacity active:scale-95 duration-100">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="pt-24 px-6 max-w-5xl mx-auto">
{/*  Hero Section: Level & Progress  */}
<section className="mb-12">
<div className="flex items-baseline gap-4 mb-2">
<span className="font-headline font-black text-6xl text-zinc-100 leading-none">LVL 12</span>
<span className="font-label uppercase text-sm tracking-widest text-zinc-500">FAIXA AZUL • 2 GRAUS</span>
</div>
{/*  Performance Streak Component  */}
<div className="relative w-full h-8 bg-zinc-800/80 overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FF1A1A] to-[#C00100] w-[68%]" style={{ /* box-shadow: 0 0 20px rgba(231, 0, 0, 0.3); */ }}></div>
<div className="absolute inset-0 flex items-center justify-between px-4 text-[10px] font-black uppercase tracking-tighter mix-blend-overlay">
<span>1450 XP</span>
<span>2000 XP PARA LVL 13</span>
</div>
</div>
</section>
{/*  Bento Grid: Stats & Evolution  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
{/*  Left Column: Metrics  */}
<div className="md:col-span-1 flex flex-col gap-4">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-48 border-l-4 border-brand-red/20">
<span className="font-label uppercase text-xs tracking-widest text-zinc-400">TREINOS SEGUIDOS</span>
<div className="flex items-baseline gap-2">
<span className="font-headline font-black text-5xl text-zinc-100">14</span>
<span className="material-symbols-outlined text-brand-red" style={{ /* font-variation-settings: 'FILL' 1; */ }}>local_fire_department</span>
</div>
<p className="text-xs text-zinc-500 uppercase leading-tight font-bold">RECORDE PESSOAL: 22 DIAS</p>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex flex-col justify-between h-48">
<span className="font-label uppercase text-xs tracking-widest text-zinc-400">TEMPO DE TATAME</span>
<div className="flex items-baseline gap-2">
<span className="font-headline font-black text-5xl text-zinc-100">342</span>
<span className="font-label text-sm font-bold">HRS</span>
</div>
<p className="text-xs text-zinc-400 uppercase leading-tight font-bold">+12H ESTA SEMANA</p>
</div>
</div>
{/*  Center/Right: Achievements Gallery  */}
<div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
<div className="flex justify-between items-center mb-8">
<h2 className="font-headline font-black text-3xl uppercase tracking-tighter">CONQUISTAS</h2>
<span className="font-label text-[10px] uppercase font-bold tracking-widest text-zinc-400">VER TODAS (24/80)</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
{/*  Medal 1  */}
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 mb-4 bg-zinc-800/80 flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-[#FFD700]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>workspace_premium</span>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-red/10 border-2 border-surface"></div>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-widest text-zinc-100 mb-1">Iniciante</span>
<span className="text-[9px] text-zinc-400 uppercase leading-none">Primeira Aula Finalizada</span>
</div>
{/*  Medal 2  */}
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 mb-4 bg-zinc-800/80 flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-[#FF1A1A]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-widest text-zinc-100 mb-1">10 Treinos Seguidos</span>
<span className="text-[9px] text-zinc-400 uppercase leading-none">Constância de Ferro</span>
</div>
{/*  Medal 3  */}
<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 mb-4 bg-zinc-800/80 flex items-center justify-center relative">
<span className="material-symbols-outlined text-5xl text-[#C0C0C0]" style={{ /* font-variation-settings: 'FILL' 1; */ }}>shield</span>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-widest text-zinc-100 mb-1">Mestre da Passagem</span>
<span className="text-[9px] text-zinc-400 uppercase leading-none">100 Passagens de Guarda</span>
</div>
{/*  Medal 4 (Locked)  */}
<div className="flex flex-col items-center text-center opacity-30 grayscale">
<div className="w-20 h-20 mb-4 bg-zinc-950 flex items-center justify-center border border-dashed border-zinc-800">
<span className="material-symbols-outlined text-4xl text-outline">lock</span>
</div>
<span className="font-label text-[10px] font-black uppercase tracking-widest text-zinc-100 mb-1">Finalizador</span>
<span className="text-[9px] text-zinc-400 uppercase leading-none">???</span>
</div>
</div>
</div>
</div>
{/*  Techniques Mastery  */}
<section className="mb-12">
<h2 className="font-headline font-black text-3xl uppercase tracking-tighter mb-6">DOMÍNIO TÉCNICO</h2>
<div className="space-y-4">
<div className="bg-zinc-900 p-5 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-brand-red">sports_kabaddi</span>
<div>
<p className="font-headline text-lg uppercase tracking-tight font-bold">Guarda Fechada</p>
<p className="font-label text-[10px] uppercase font-bold text-zinc-500">Especialidade: Finalizações</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-1">
<div className="w-4 h-1 bg-brand-red/10"></div>
<div className="w-4 h-1 bg-brand-red/10"></div>
<div className="w-4 h-1 bg-brand-red/10"></div>
<div className="w-4 h-1 bg-brand-red/10"></div>
<div className="w-4 h-1 bg-zinc-800/80"></div>
</div>
<span className="font-headline text-xl italic font-black text-zinc-100">80%</span>
</div>
</div>
<div className="bg-zinc-900 p-5 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-zinc-300">fitness_center</span>
<div>
<p className="font-headline text-lg uppercase tracking-tight font-bold">Passagem de Meia Guarda</p>
<p className="font-label text-[10px] uppercase font-bold text-zinc-500">Especialidade: Pressão</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-1">
<div className="w-4 h-1 bg-zinc-800"></div>
<div className="w-4 h-1 bg-zinc-800"></div>
<div className="w-4 h-1 bg-zinc-800/80"></div>
<div className="w-4 h-1 bg-zinc-800/80"></div>
<div className="w-4 h-1 bg-zinc-800/80"></div>
</div>
<span className="font-headline text-xl italic font-black text-zinc-100">45%</span>
</div>
</div>
<div className="bg-zinc-900 p-5 flex items-center justify-between">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-zinc-400">psychology</span>
<div>
<p className="font-headline text-lg uppercase tracking-tight font-bold">Defesa de Queda</p>
<p className="font-label text-[10px] uppercase font-bold text-zinc-500">Especialidade: Equilíbrio</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="flex gap-1">
<div className="w-4 h-1 bg-tertiary"></div>
<div className="w-4 h-1 bg-zinc-800/80"></div>
<div className="w-4 h-1 bg-zinc-800/80"></div>
<div className="w-4 h-1 bg-zinc-800/80"></div>
<div className="w-4 h-1 bg-zinc-800/80"></div>
</div>
<span className="font-headline text-xl italic font-black text-zinc-100">22%</span>
</div>
</div>
</div>
</section>
{/*  Rewards / Recent Progress  */}
<section className="mb-12">
<h2 className="font-headline font-black text-3xl uppercase tracking-tighter mb-6">RECOMPENSAS DISPONÍVEIS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative bg-zinc-950/60 overflow-hidden group border border-white/5 p-6 flex items-center gap-4">
<div className="bg-brand-red/10 p-3 text-white">
<span className="material-symbols-outlined text-3xl">shopping_cart</span>
</div>
<div>
<p className="font-label font-black text-sm uppercase tracking-widest text-zinc-100">15% OFF EM EQUIPAMENTOS</p>
<p className="text-[10px] text-zinc-400 uppercase font-bold">CÓDIGO: BLACKBELT15</p>
</div>
</div>
<div className="relative bg-zinc-950/60 overflow-hidden group border border-white/5 p-6 flex items-center gap-4">
<div className="bg-zinc-900 p-3 text-zinc-100">
<span className="material-symbols-outlined text-3xl">videocam</span>
</div>
<div>
<p className="font-label font-black text-sm uppercase tracking-widest text-zinc-100">MASTERCLASS EXCLUSIVA</p>
<p className="text-[10px] text-zinc-400 uppercase font-bold">DESBLOQUEADO POR LVL 10</p>
</div>
</div>
</div>
</section>
</main>
{/*  Bottom Navigation Bar  */}
<nav className="fixed bottom-0 left-0 w-full bg-[#131313]/90 backdrop-blur-xl z-50 flex justify-around items-center pt-3 pb-6 px-4">
<div className="bg-gradient-to-r from-transparent via-[#FF1A1A]/20 to-transparent h-[1px] top-0 absolute w-full"></div>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Início</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined">menu_book</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Biblioteca</span>
</button>
<button className="flex flex-col items-center justify-center text-[#FF1A1A] scale-110 active:scale-90 duration-150">
<span className="material-symbols-outlined" style={{ /* font-variation-settings: 'FILL' 1; */ }}>rebase_edit</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Trilha</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Treino</span>
</button>
<button className="flex flex-col items-center justify-center text-[#353534] hover:text-[#BDC2FF] transition-colors active:scale-90 duration-150">
<span className="material-symbols-outlined">psychology</span>
<span className="font-['Lexend'] text-[10px] font-bold uppercase tracking-widest mt-1">Professor</span>
</button>
</nav>

    </>
  );
}

