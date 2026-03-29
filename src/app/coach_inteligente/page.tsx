import React from 'react';

export default function CoachInteligente() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 w-full z-50 rounded-none flex justify-between items-center px-6 h-16 w-full bg-[#131313] dark:bg-[#131313]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="User Profile" className="w-full h-full object-cover" data-alt="Close up portrait of a Brazilian Jiu-Jitsu athlete wearing a white gi, focused expression, dark atmospheric gym background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNZoxajAMzGRsFOlphCwMao7G_1yphnduOBnZGuSUJJRZIz_cv8joJEENRg28hTlGLibV_Q_zzRmJcKhZOorKDjo0gbLSyib73wjY52QzZh95LW2nZ7xWX-PuqbYRsklPFxVNH7aps0tdPH1F5_nMwDd4EntdPUZ7Z5_mF-xDUQpU0a5SGgDMdCNNkPe_uREcGXxTHYgwyvXTFoHcw44kBSRKRamZajbxG1_WqmpOpYOHNiVDt8-ZhyTCd9aP5vh2p0u4XDWnqbRKx"/>
</div>
<span className="text-2xl font-black italic text-[#E70000] dark:text-[#E70000] tracking-widest uppercase">STRYKE</span>
</div>
<button className="text-[#C6C6C7] hover:bg-[#353534] transition-colors p-2 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
</header>
<main className="pt-20 px-4 max-w-5xl mx-auto space-y-8">
{/*  Hero Section: AI Status  */}
<section className="mt-4">
<div className="flex items-end justify-between mb-2">
<div>
<span className="text-[10px] font-bold tracking-[0.2em] text-secondary uppercase">Session Analysis</span>
<h1 className="text-4xl font-black uppercase tracking-tighter leading-none">SENSEI AI</h1>
</div>
<div className="text-right">
<span className="block text-[10px] font-bold text-tertiary-fixed-dim uppercase">Status</span>
<span className="text-primary-container font-bold flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container animate-pulse"></span>
                        LIVE FEED
                    </span>
</div>
</div>
<div className="h-1 bg-surface-container-highest w-full">
<div className="h-full bg-primary-container w-2/3"></div>
</div>
</section>
{/*  Bento Grid Insights  */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Vulnerability Alert Card  */}
<div className="md:col-span-2 bg-surface-container-low p-6 space-y-6 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
<span className="material-symbols-outlined text-9xl" data-icon="warning" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary-container" data-icon="emergency_home">emergency_home</span>
<h3 className="text-xl font-black uppercase italic tracking-tight">Vulnerability alert</h3>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-8">
<div className="relative w-32 h-32 flex items-center justify-center">
<svg className="w-full h-full transform -rotate-90">
<circle className="text-surface-container-highest" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" stroke-width="8"></circle>
<circle className="text-primary-container" cx="64" cy="64" fill="transparent" r="58" stroke="currentColor" stroke-dasharray="364.4" stroke-dashoffset="127.5" stroke-width="8"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-3xl font-black italic">65%</span>
<span className="text-[8px] font-bold text-tertiary uppercase tracking-widest">Stability</span>
</div>
</div>
<div className="flex-1 space-y-2">
<p className="text-2xl font-bold leading-tight">Guard recovery at 65%</p>
<p className="text-sm text-tertiary-fixed-dim leading-relaxed max-w-md">
                            Your hip mobility dropped significantly after the 4-minute mark. Opponents are finding space on your left side during leg drag attempts.
                        </p>
</div>
</div>
</div>
{/*  Suggestion 1  */}
<div className="bg-surface-container-high p-6 flex flex-col justify-between border-l-4 border-secondary">
<span className="material-symbols-outlined text-secondary text-3xl mb-4" data-icon="air">air</span>
<p className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Critical Insight</p>
<h4 className="text-lg font-bold leading-tight italic uppercase">Focus on breathing during transitions</h4>
</div>
{/*  Suggestion 2  */}
<div className="bg-surface-container-high p-6 flex flex-col justify-between border-l-4 border-on-secondary-container">
<span className="material-symbols-outlined text-on-secondary-container text-3xl mb-4" data-icon="history">history</span>
<p className="text-xs font-bold text-on-secondary-container uppercase tracking-widest mb-1">Tactical Review</p>
<h4 className="text-lg font-bold leading-tight italic uppercase">Review Round 2 vs Shark</h4>
</div>
{/*  Mental Prep Card  */}
<div className="bg-surface-container-lowest p-6 flex flex-col justify-between relative">
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-[10px] font-bold tracking-widest text-primary-container">MENTAL PREP</span>
<span className="material-symbols-outlined text-primary-container text-sm" data-icon="psychology">psychology</span>
</div>
<p className="text-sm italic font-medium">"Under pressure, you don't rise to the level of your expectations, you fall to the level of your training."</p>
</div>
<div className="mt-6 pt-4 border-t border-surface-container-highest">
<button className="w-full py-2 bg-surface-container-highest text-[10px] font-black tracking-widest uppercase hover:bg-surface-bright transition-colors">Start Meditation</button>
</div>
</div>
{/*  Technical Diagram Section (Placeholder/Visual)  */}
<div className="md:col-span-2 bg-surface-container p-6">
<div className="flex items-center justify-between mb-6">
<h3 className="font-black uppercase tracking-tight italic flex items-center gap-2">
<span className="material-symbols-outlined text-primary-container" data-icon="query_stats">query_stats</span>
                        Technical Breakdown: De La Riva
                    </h3>
<span className="text-[10px] text-tertiary uppercase font-bold">Accuracy: 88%</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square bg-surface-container-lowest flex items-center justify-center p-2">
<img alt="Technical Diagram 1" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all" data-alt="Technical illustration of a BJJ leg hook position with digital telemetry overlays and pressure points highlighted in red" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcau8JmXWwdO2XwUEjc1LkDSXwU9j0nDQEb9Kegm4MRHquhUUl1-btBaMOotiiRK6dbgqBaLFXwWMNU9GskRaN3Yo7VpuTLsecbBoqFDw0qiclZ88f8fghrKGFiInYgp4GVH310UGSUuSQa4HV1WGJJWBav_xry-q35ox4Uv4-fUDIhYuWEt_m-QhetaX0kYL8itIpO3J6SkKYTNqklvN0diT-Y_SOJxZpzteEQR7h9Twrew_LUvHNSGICSFFtxOBxVR2lWRb22mvD"/>
</div>
<div className="aspect-square bg-surface-container-lowest flex items-center justify-center p-2">
<img alt="Technical Diagram 2" className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all" data-alt="Digital skeleton model showing spine alignment during a grappling transition with blue force vector arrows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuQD7ursl9XIjNY9fNqzq_3P_Zv_9ToUbQe9kBB_aQ1dk6nGsWxY1HnwLkNPsXfwAAsuItuFmb-tqPymTM09mcvqums6NNDVMJXyGZcqDwKOwSr73wrZV0a6PXVIcK-3ffXwzg7rppGdCmTGkWtqURGhTsAIys0w9iz5lUdphpr6vJS38jaEOMa38l9i8LKp6bm9_nRJMYheIw30evG8xghNMxSWYLG3isxdggXxIFqkPmIskq8PzA-axAyhXk5KPNxjDwjEvIf0YH"/>
</div>
<div className="col-span-2 flex flex-col justify-center space-y-3">
<div className="space-y-1">
<div className="flex justify-between text-[10px] font-bold uppercase">
<span>Hook Tension</span>
<span>High</span>
</div>
<div className="h-1 bg-surface-container-highest">
<div className="h-full bg-secondary w-[92%]"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-[10px] font-bold uppercase">
<span>Off-Balancing</span>
<span>Inconsistent</span>
</div>
<div className="h-1 bg-surface-container-highest">
<div className="h-full bg-primary-container w-[45%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
{/*  AI Chat Insights  */}
<section className="space-y-4">
<h2 className="text-xs font-black tracking-[0.3em] text-tertiary uppercase">Sensei Chat Log</h2>
<div className="space-y-4">
{/*  AI Message  */}
<div className="flex gap-4 items-start max-w-2xl">
<div className="w-8 h-8 bg-primary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-on-primary-container text-lg" data-icon="smart_toy">smart_toy</span>
</div>
<div className="bg-surface-container-low p-4">
<p className="text-sm leading-relaxed text-on-surface">
                            Oss. I've analyzed your sparring session with <span className="text-primary-container font-bold">"Shark"</span>. Your defensive cycles are efficient, but you're giving up the underhook too easily when playing half-guard.
                        </p>
<div className="mt-3 flex gap-2">
<span className="px-2 py-1 bg-surface-container-highest text-[10px] font-bold uppercase text-tertiary">#HalfGuard</span>
<span className="px-2 py-1 bg-surface-container-highest text-[10px] font-bold uppercase text-tertiary">#UnderhookBattle</span>
</div>
</div>
</div>
{/*  User Message  */}
<div className="flex gap-4 items-start max-w-2xl ml-auto flex-row-reverse">
<div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-tertiary text-lg" data-icon="person">person</span>
</div>
<div className="bg-surface-container-high p-4 text-right">
<p className="text-sm leading-relaxed text-on-surface">
                            How do I prevent the cross-face while fighting for that underhook?
                        </p>
</div>
</div>
{/*  AI Response  */}
<div className="flex gap-4 items-start max-w-2xl">
<div className="w-8 h-8 bg-primary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-on-primary-container text-lg" data-icon="smart_toy">smart_toy</span>
</div>
<div className="bg-surface-container-low p-4">
<p className="text-sm leading-relaxed text-on-surface">
                            Keep your forehead glued to his shoulder/chest. If there's no space between your head and his body, he can't insert the cross-face. <span className="text-secondary font-bold">Watch the 2nd minute of your last round</span>—you lifted your head, and that's when he flattened you.
                        </p>
</div>
</div>
</div>
{/*  Chat Input (Visual Only)  */}
<div className="flex gap-2">
<div className="flex-1 bg-surface-container-lowest border-b-2 border-surface-container-highest p-4 flex items-center justify-between">
<span className="text-sm text-tertiary">Ask Sensei anything...</span>
<span className="material-symbols-outlined text-tertiary" data-icon="mic">mic</span>
</div>
<button className="bg-primary-container px-6 flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" data-icon="send">send</span>
</button>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-4 bg-[#131313]/80 dark:bg-[#131313]/80 backdrop-blur-xl z-50 border-t border-[#353534]/30">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 font-['Lexend'] font-bold text-[10px] tracking-widest hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="home_max">home_max</span>
<span>HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 font-['Lexend'] font-bold text-[10px] tracking-widest hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
<span>LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 font-['Lexend'] font-bold text-[10px] tracking-widest hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="ads_click">ads_click</span>
<span>PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-2 font-['Lexend'] font-bold text-[10px] tracking-widest hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span>TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-2 border-[#E70000] pt-2 font-['Lexend'] font-bold text-[10px] tracking-widest hover:text-white transition-all active:opacity-80 scale-110 transition-transform" href="#">
<span className="material-symbols-outlined" data-icon="psychology" style={{ /* font-variation-settings: 'FILL' 1; */ }}>psychology</span>
<span>SENSEI</span>
</a>
</nav>

    </>
  );
}
