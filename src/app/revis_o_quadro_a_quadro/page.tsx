import React from 'react';

export default function RevisOQuadroAQuadro() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="fixed top-0 z-50 w-full bg-[#131313] flex justify-between items-center px-6 py-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="athlete profile" className="w-full h-full object-cover" data-alt="close-up portrait of a determined professional athlete with sweat on face in a dark gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDM7L12L3eYBDebsXB2AyURI18eQc_SuO7nCf6bCF2tscGtc6djZBVjIg03J45WBxbKYsd0W5PfWaXGyxX9TeBqWLMcn8RJuj03Skg0JcFIlFUtch0tiavguK6uYmUOoKwkB9FDM2rhjmJlrLr7cHsy4M2uqq6kN3Eq9gG5zSM0e27xLyCX53GEnhMBNtZ4xkUAjdXz_ipv2UBxbhKRc1lLyZ_cqz_rt02jIwhG9doiF-L8fkAj7XuitdDBrjqbJXZ7XZJ5dA52h6tS"/>
</div>
<h1 className="font-headline font-black tracking-tighter uppercase text-3xl italic text-[#E70000]">KINETIC</h1>
</div>
<button className="text-[#353534] hover:bg-[#353534] hover:text-white transition-colors duration-150 p-2 active:scale-95 duration-75">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
</button>
</header>
<main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
{/*  Analysis Header  */}
<section className="mb-12">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-4 border-primary-container pl-6">
<div>
<span className="font-label text-xs font-bold uppercase tracking-[0.2em] text-tertiary">SESSION_ID: 0492-X</span>
<h2 className="font-headline text-5xl font-black uppercase tracking-tighter mt-1">ANÁLISE DE <span className="text-primary-container">FRAME</span></h2>
</div>
<div className="flex flex-col items-end">
<span className="font-label text-xs font-bold uppercase text-tertiary-fixed-dim">DATA_STREAM</span>
<span className="font-headline text-2xl font-bold">REVISÃO QUADRO A QUADRO</span>
</div>
</div>
</section>
{/*  Main Viewport (The Active Frame)  */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
<div className="lg:col-span-8 bg-surface-container-low relative group">
{/*  Main Image  */}
<div className="aspect-video w-full bg-surface-container overflow-hidden border-b-4 border-primary-container">
<img alt="Main analysis frame" className="w-full h-full object-cover opacity-80" data-alt="action shot of two MMA fighters in a clinch, dramatic low-key lighting, highlight on technical grip and body tension" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz0BIRW4SMYO5h1_SrirK2YZHFKphSm9oXfGYc-MX4sGUuUYuyPgvxi7LEQX36TTJ2dtltKqr2JITKZr5WHQiuHpG6IVPSmX3YIrsluaPkOL6Wvr6FNWvK1DlU9mVKA1zomfaIH2zL2_30ovuAP-clGQUB8gsrQ57LHzGEEpGg-yNoZj19SD4VpcC9mFjkksyeLoINJQhEFFN0b_Q5pa7mYuySOq-ccty4k-Si6ML5-CiPwishyLw8BRc6dAA_9VR95gNul054BD8f"/>
{/*  SVG Overlays for Technical Analysis  */}
<div className="absolute inset-0 pointer-events-none">
{/*  Posture line  */}
<div className="absolute top-1/4 left-1/3 w-1 h-1/2 bg-secondary/40 shadow-[0_0_15px_rgba(189,194,255,0.5)]"></div>
{/*  Grip point  */}
<div className="absolute top-1/3 left-1/2 w-4 h-4 border-2 border-primary-container -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
{/*  Telemetry label  */}
<div className="absolute top-1/3 left-[55%] bg-surface-container-highest/90 p-2">
<span className="block font-label text-[10px] font-black text-primary-container uppercase">GRIP_FORCE</span>
<span className="block font-headline text-lg font-bold">842N</span>
</div>
</div>
</div>
{/*  Telemetry HUD  */}
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="bg-surface-container-lowest/80 p-4 backdrop-blur-md">
<div className="flex gap-8">
<div>
<span className="block font-label text-[10px] text-tertiary uppercase">TIMING</span>
<span className="block font-headline text-xl font-black">00:42:15</span>
</div>
<div>
<span className="block font-label text-[10px] text-tertiary uppercase">BALANCE_INDEX</span>
<span className="block font-headline text-xl font-black text-secondary">92%</span>
</div>
</div>
</div>
<div className="bg-primary-container p-4">
<span className="material-symbols-outlined text-on-primary-container" data-icon="analytics">analytics</span>
</div>
</div>
</div>
{/*  Technical Breakdown Sidebar  */}
<aside className="lg:col-span-4 flex flex-col gap-4">
<div className="bg-surface-container-high p-6 flex-1 border-t-2 border-primary-container">
<h3 className="font-headline font-black text-2xl uppercase italic mb-4">MECÂNICA DO MOVIMENTO</h3>
<div className="space-y-6">
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-primary-container"></span>
<span className="font-label font-black text-xs uppercase tracking-widest text-on-surface-variant">01. POSTURA E ALINHAMENTO</span>
</div>
<p className="text-sm text-on-surface/80 leading-relaxed font-body">
                                Coluna vertebral mantida em eixo neutro. O centro de gravidade está deslocado 15% à frente, otimizando a transição para a queda.
                            </p>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-secondary"></span>
<span className="font-label font-black text-xs uppercase tracking-widest text-on-surface-variant">02. PONTO DE PRESSÃO (BASE)</span>
</div>
<p className="text-sm text-on-surface/80 leading-relaxed font-body">
                                Distribuição de carga concentrada no metatarso do pé direito. Ângulo de joelho em 115º para explosão lateral.
                            </p>
</div>
<div className="bg-surface-container-lowest p-4">
<span className="block font-label text-[10px] font-bold text-tertiary uppercase mb-2">SENSEI IA INSIGHT:</span>
<p className="text-xs italic text-secondary-fixed">"Antecipação detectada. O oponente iniciou a defesa 0.04s após o contato inicial. Timing de pegada superior."</p>
</div>
</div>
</div>
<button className="w-full bg-primary-container text-on-primary-container font-headline font-black py-4 uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                    EXPORTAR TELEMETRIA
                </button>
</aside>
</div>
{/*  Frame Sequence Thumbnails  */}
<section className="mt-12 overflow-x-auto pb-4">
<div className="flex gap-4 min-w-max">
{/*  Frame 1  */}
<div className="w-48 group cursor-pointer">
<div className="aspect-video bg-surface-container overflow-hidden mb-2 relative border-b-2 border-transparent group-hover:border-primary-container transition-colors">
<img alt="Frame 38" className="w-full h-full object-cover grayscale group-hover:grayscale-0" data-alt="blurred motion shot of a fighter preparing for a take down, cinematic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkLk4Nso-ikVGljZETI-EdP2Fmi8hPcgt16K8xtkiQhnCffLdiZ1Hyvme4irEKvjdcL6gp4J9gZtKDu5FM8UFSWhIBIjORjiP7pqgATHyAsxzkTosFygAjqmlpHEFcdwd5az_Rp_gLRQ1-dvrM4No3ADTl99OfK8GdZqlndKqNYBNI_uuSm6vZyDsUj2L8YA8McfsiPME3UlDYWxDrUmYl4DPnG8uD87y331OrsquGPVpIVehylE5FQVLLJ1hAq0FzeUi3CnjaovxS"/>
<span className="absolute top-1 left-1 bg-surface-container-lowest text-[10px] font-bold px-1">F_38</span>
</div>
<span className="block font-label text-[10px] font-black uppercase text-tertiary">APPROACH</span>
</div>
{/*  Frame 2 (Active)  */}
<div className="w-48 group cursor-pointer border-t-2 border-primary-container bg-surface-container-low p-2">
<div className="aspect-video bg-surface-container overflow-hidden mb-2 relative border-b-2 border-primary-container">
<img alt="Frame 39" className="w-full h-full object-cover" data-alt="clear action shot of a fighter locking a clinch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkVjNzUkDZV3j0DA8KRTSLRTd4fHOYn13_4u_qf2KFhK0huDAAKvvIsoiSsB9rOJD4YQ6h8l79y_9mH5vLtTu6bz9AP75w_-oO1bN3Y5qxnrs5SNRyeaZHuwTwbc7kekds4YjwllVr94-yKLddtHU6EDmiNrmJcT3PkFLedURLNyqMv5PD4MvvUCJmzebLlXxNVEGDQgXBeBekVsJi5b6T9Go8YXujCPhmoM_NvHTa4VwxNaOP3prItsbkmoRrZf2QIFSRDpF7Lyv5"/>
<span className="absolute top-1 left-1 bg-primary-container text-on-primary-container text-[10px] font-bold px-1">ACTIVE</span>
</div>
<span className="block font-label text-[10px] font-black uppercase text-on-surface">CONTACT</span>
</div>
{/*  Frame 3  */}
<div className="w-48 group cursor-pointer">
<div className="aspect-video bg-surface-container overflow-hidden mb-2 relative border-b-2 border-transparent group-hover:border-primary-container transition-colors">
<img alt="Frame 40" className="w-full h-full object-cover grayscale group-hover:grayscale-0" data-alt="action shot of fighters in transition during a grappling exchange" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtkcKA9V2td7tglVIPqjuX6uijK_TFAG7TdJQBUyzshCxVisE_1RBQiu30dKvMHeu-_R6ntAzEK9L3IAVzcNhIvhDnXuHmlBj9pNDxStZqGJ3Iu5nMKtJjzO0Pw8YoCZeKiJoy8AVFPpN6--Kz739AL5Q00XxP3OibqjWAjPb9PPmN2w2So3p8SVAmdO3NX7HbPenw_mDsh-vF8CCTUQUb2FQgT5weAee55XuQywsok7_nNewlURir2pyGP5-1ad9q4XHskIlWonH4"/>
<span className="absolute top-1 left-1 bg-surface-container-lowest text-[10px] font-bold px-1">F_40</span>
</div>
<span className="block font-label text-[10px] font-black uppercase text-tertiary">LEVERAGE</span>
</div>
{/*  Frame 4  */}
<div className="w-48 group cursor-pointer">
<div className="aspect-video bg-surface-container overflow-hidden mb-2 relative border-b-2 border-transparent group-hover:border-primary-container transition-colors">
<img alt="Frame 41" className="w-full h-full object-cover grayscale group-hover:grayscale-0" data-alt="dynamic shot of a wrestling throw finishing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaROQbaPSQ9fukWVK6klMsUEv2NUaxqF6rWGXYZP_HsWAy7ngdiYUBpDAHAQ2pBjl0crzoTD2MNkLNVZbw-d8QB4U_GZcU0sKBfCmKT9oeL7NsikZJwJQiNzfhlMkzPZ3G46E6CrNpHjbTPeKu8M_LTQG6pNAAxtCPAmMrke5Vxy7DyH4QC-Wf2EB8k8p2l6tGDzYxg8-pAZeEwj3ccSOqn-Ifj5N8XXXM34z-Y1DmURGOd9tHzQsn5dVaakFBf-3lEhFi0wlPZM1X"/>
<span className="absolute top-1 left-1 bg-surface-container-lowest text-[10px] font-bold px-1">F_41</span>
</div>
<span className="block font-label text-[10px] font-black uppercase text-tertiary">EXECUTION</span>
</div>
{/*  Frame 5  */}
<div className="w-48 group cursor-pointer">
<div className="aspect-video bg-surface-container overflow-hidden mb-2 relative border-b-2 border-transparent group-hover:border-primary-container transition-colors">
<img alt="Frame 42" className="w-full h-full object-cover grayscale group-hover:grayscale-0" data-alt="fighters on the ground after a successful technique" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoqrHvSgF35UEZIk1k8PBiXhQo1KpX6J4o40LgVoXhbjPkaBXq4ymVGZuG1ETPvw8Kv9TV59UVHEq5pegmjlm98OpxvQD-KWzuYBgithOpWf8bn2uw5KvWUWgURbhWIUClgVglbKrzRxMCXdD01__doDE2JLk6u3UqPSc6F1ynq44xeAqdFegZ83JRQc-EYw8EOaSzsAsas4vnRM2HN0DPHNw3XUvvGs9NRZWeFQVTIYf-1Iiqzh36_2mSijgouiHbB_ln0oGWN9zC"/>
<span className="absolute top-1 left-1 bg-surface-container-lowest text-[10px] font-bold px-1">F_42</span>
</div>
<span className="block font-label text-[10px] font-black uppercase text-tertiary">RESULT</span>
</div>
</div>
</section>
{/*  Dynamic Data Grid  */}
<section className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-0 border border-surface-container-highest">
<div className="p-6 bg-surface-container-low border-r border-surface-container-highest">
<span className="block font-label text-[10px] font-bold text-tertiary uppercase">PEAK_VELOCITY</span>
<span className="block font-headline text-3xl font-black mt-2">12.4 m/s</span>
</div>
<div className="p-6 bg-surface-container border-r border-surface-container-highest">
<span className="block font-label text-[10px] font-bold text-tertiary uppercase">STABILITY_COEF</span>
<span className="block font-headline text-3xl font-black mt-2 text-primary-container">0.88</span>
</div>
<div className="p-6 bg-surface-container-low border-r border-surface-container-highest">
<span className="block font-label text-[10px] font-bold text-tertiary uppercase">HEART_RATE</span>
<span className="block font-headline text-3xl font-black mt-2">164 <small className="text-sm">BPM</small></span>
</div>
<div className="p-6 bg-surface-container">
<span className="block font-label text-[10px] font-bold text-tertiary uppercase">G_FORCE_IMPACT</span>
<span className="block font-headline text-3xl font-black mt-2">3.2 G</span>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch overflow-hidden bg-[#353534]/80 backdrop-blur-xl z-50">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="bookmarks">bookmarks</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="moving">moving</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full w-full active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all active:brightness-110" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest mt-1">SENSEI IA</span>
</a>
</nav>

    </>
  );
}
