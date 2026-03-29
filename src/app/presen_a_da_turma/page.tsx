import React from 'react';

export default function PresenADaTurma() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="flex items-center justify-between px-6 py-4 w-full sticky top-0 z-50 bg-[#131313] dark:bg-[#131313]">
<div className="flex items-center gap-4">
<span className="material-symbols-outlined text-[#C6C6C7]">menu</span>
<h1 className="text-2xl font-black text-[#E70000] italic font-['Lexend'] uppercase tracking-tighter">OSMOSSIS</h1>
</div>
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Close up of a professional martial arts instructor with a focused expression, dark cinematic lighting, gym background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgpS0XqYafp-PQWVAv2YxjyR8tXfchpQxS3czIqhLYbEALmtzJ4SQfnLcwk6WeD1ETULAB2xZlCq0yvxVJLJcTgJnkEEcdGdm-wC3iPe7gJzyuonVJTentHTdVLLmnxPefTLLYsF1BKuknAVH-_qz-ivkxrvNI7fe3yya0xk_FuJJVuATbOO-0YW9LBcRhfWvRVzJSnsqC8dBiKGL-khFB4mkpahWjN9tUoJg8NmRJ_Zo1oVuxlZYNk1msU5QSKPAVCvlygvS7r5D3"/>
</div>
</header>
<main className="px-4 py-6 space-y-8">
{/*  Training Session Header  */}
<section className="space-y-2">
<div className="flex items-baseline justify-between">
<h2 className="text-4xl font-black font-headline tracking-tighter text-on-surface">KINETIC BJJ</h2>
<span className="text-xs font-bold font-label bg-primary-container px-2 py-1 text-on-primary-container uppercase">Live Now</span>
</div>
<p className="text-tertiary-fixed-dim font-label tracking-widest text-sm uppercase">ADVANCED NO-GI • 19:00 - 20:30</p>
</section>
{/*  Attendance Summary Bento  */}
<section className="grid grid-cols-2 gap-px bg-surface-container-high overflow-hidden">
<div className="bg-surface-container-low p-6 space-y-1">
<span className="text-[10px] font-bold font-label text-tertiary-fixed-dim uppercase tracking-[0.2em]">Confirmed</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-black font-headline text-on-surface">18</span>
<span className="text-xs font-bold text-secondary">/24</span>
</div>
</div>
<div className="bg-surface-container-low p-6 space-y-1">
<span className="text-[10px] font-bold font-label text-tertiary-fixed-dim uppercase tracking-[0.2em]">Absences</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-black font-headline text-primary-container">06</span>
</div>
</div>
<div className="bg-surface-container-low col-span-2 p-6">
<div className="flex justify-between items-end">
<div className="space-y-1">
<span className="text-[10px] font-bold font-label text-tertiary-fixed-dim uppercase tracking-[0.2em]">Session Velocity</span>
<div className="text-2xl font-black font-headline text-on-surface">HIGH INTENSITY</div>
</div>
<div className="h-1 w-32 bg-surface-container-highest relative">
<div className="absolute inset-0 bg-gradient-to-r from-secondary to-on-secondary-container w-[75%]"></div>
</div>
</div>
</div>
</section>
{/*  Student List  */}
<section className="space-y-4">
<h3 className="text-xs font-bold font-label text-tertiary-fixed-dim uppercase tracking-[0.3em]">ROSTER MANAGEMENT</h3>
<div className="space-y-3">
{/*  Student Card 1  */}
<div className="bg-surface-container-low flex flex-col p-4 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Portrait of a young athletic man, sweat on face, neutral background, intense look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQot8SL3Q9gyTgg7w3_D2cZnBrfsGDshsOURcZTtTkkCHLCTxL6hxyAHZpqJvCyqbgSnoG5VcLxENaHOOJa2RUdaUI2aWqyrh2g1u6AyJxia3TzRNlUIJLVKDQbGZ3io88kgVKZwU0BnufEUTu-MbE__DtXWeKKyOyz1cc9DDSrNsY4gjYBxQoZxQSGI2SffjZOrgVqDAdwxA2DuT1jEC9OY_iyVZ8wZzxXguOFKl412pCOmfDxUA4ZAYrRLkWCori9JaHT38AnhpQ"/>
</div>
<div>
<h4 className="font-headline font-bold text-on-surface uppercase leading-none">Marcus V.</h4>
<span className="text-[10px] font-bold text-tertiary-fixed-dim tracking-widest">PURPLE BELT</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</button>
<button className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-fixed-dim">cancel</span>
</button>
</div>
</div>
<input className="bg-surface-container-lowest border-none text-[10px] font-bold tracking-widest font-label py-3 px-4 focus:ring-0 placeholder:text-surface-container-highest text-on-surface" placeholder="ADD NOTES (E.G. INJURED)" type="text"/>
</div>
{/*  Student Card 2  */}
<div className="bg-surface-container-low flex flex-col p-4 space-y-4 border-l-4 border-primary-container">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-surface-container-highest">
<img className="w-full h-full object-cover grayscale" data-alt="Portrait of an athletic woman, braid hairstyle, training environment, focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiPddy1AYG0E7V9GdFmQ5lBpL3U0uXk-Se4wZ_0LOg7if4Gl4MupLkwmV0C1jxh_ywlzQklvwqTBXoOxCjyCsJRDKvCGPn7287gzzDfe3nZF2CJokvNY4cNmfC51a0gdfr13umleXEV0wj83rx1ORRPUlNcHVNc5F09o_VPWNZLPifse9TuPIw8nM4gy-9a04c9kSi1kHQKpo1hDhaUIIHBd0W0EELI-fGEb_mVh_KTR818W54DhiSt0vaxRMVarHg7L9axk6Y0TDq"/>
</div>
<div>
<h4 className="font-headline font-bold text-on-surface uppercase leading-none">Sarah Chen</h4>
<span className="text-[10px] font-bold text-tertiary-fixed-dim tracking-widest">BROWN BELT</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-fixed-dim">check_circle</span>
</button>
<button className="w-10 h-10 bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{ /* font-variation-settings: 'FILL' 1; */ }}>cancel</span>
</button>
</div>
</div>
<div className="bg-error-container/20 p-3">
<p className="text-[10px] font-bold tracking-widest text-error uppercase">LESIONADO: OMBRO DIREITO</p>
</div>
</div>
{/*  Student Card 3  */}
<div className="bg-surface-container-low flex flex-col p-4 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-surface-container-highest">
<img className="w-full h-full object-cover" data-alt="Portrait of a male martial artist, sharp jawline, cinematic side lighting, black background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_qVTIoAgbQWlyoHKbxlGSJ1uHzpq0d6brzwSNAaMX3tKiiAH0jrXtMCbOqWEBihJ4lYpMYMS4wtFkRPO2E7-juJ5eoyzv4ZRsokdj1kx7A7yb_kRn17LIDpN8bWm9NYEHAzXPojSXsicwzPzDwg3OxygVcA14XGJSgbLktorLrXChACoiFuubNR4Ah4Swgh5TClcQLe1NR_zFnPJfgEg1Apyw07cMV2LUFUULZ2Cy-saZgj1hA1PXAkWzqrIL7koAM8Nwuwm1_ZfL"/>
</div>
<div>
<h4 className="font-headline font-bold text-on-surface uppercase leading-none">Ricardo S.</h4>
<span className="text-[10px] font-bold text-tertiary-fixed-dim tracking-widest">BLUE BELT</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-fixed-dim">check_circle</span>
</button>
<button className="w-10 h-10 bg-surface-container-highest flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary-fixed-dim">cancel</span>
</button>
</div>
</div>
<input className="bg-surface-container-lowest border-none text-[10px] font-bold tracking-widest font-label py-3 px-4 focus:ring-0 placeholder:text-surface-container-highest text-on-surface" placeholder="ADD NOTES (E.G. INJURED)" type="text"/>
</div>
</div>
</section>
{/*  Finalize Button  */}
<button className="w-full bg-gradient-to-br from-primary-container to-inverse-primary py-6 flex items-center justify-center gap-3">
<span className="text-sm font-black font-headline tracking-widest text-on-primary-container uppercase">FINALIZE ATTENDANCE</span>
<span className="material-symbols-outlined text-on-primary-container">send</span>
</button>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 w-full z-50 flex justify-around items-center h-20 px-2 bg-[#131313]/90 backdrop-blur-md bg-gradient-to-t from-[#0E0E0E] to-transparent">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined">home_max</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined">local_library</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#E70000] border-t-4 border-[#E70000] pt-2 transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined">timeline</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined">fitness_center</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] pt-3 hover:text-white transition-transform active:scale-95" href="#">
<span className="material-symbols-outlined">account_circle</span>
<span className="font-['Lexend'] text-[10px] font-bold tracking-widest mt-1">SENSEI</span>
</a>
</nav>

    </>
  );
}
