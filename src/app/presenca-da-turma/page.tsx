export default function PresenADaTurma() {
  return (
    <>
<main className="px-4 py-6 space-y-8">
{/*  Training Session Header  */}
<section className="space-y-2">
<div className="flex items-baseline justify-between">
<h2 className="text-4xl font-black font-headline tracking-tighter text-zinc-100">KINETIC BJJ</h2>
<span className="text-xs font-bold font-label bg-brand-red/10 px-2 py-1 text-white uppercase">Live Now</span>
</div>
<p className="text-zinc-500 font-label tracking-widest text-sm uppercase">ADVANCED NO-GI • 19:00 - 20:30</p>
</section>
{/*  Attendance Summary Bento  */}
<section className="grid grid-cols-2 gap-px bg-zinc-900 overflow-hidden">
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-1">
<span className="text-[10px] font-bold font-label text-zinc-500 uppercase tracking-[0.2em]">Confirmed</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-black font-headline text-zinc-100">18</span>
<span className="text-xs font-bold text-zinc-300">/24</span>
</div>
</div>
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 space-y-1">
<span className="text-[10px] font-bold font-label text-zinc-500 uppercase tracking-[0.2em]">Absences</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-black font-headline text-brand-red">06</span>
</div>
</div>
<div className="bg-zinc-950/60 col-span-2 p-6">
<div className="flex justify-between items-end">
<div className="space-y-1">
<span className="text-[10px] font-bold font-label text-zinc-500 uppercase tracking-[0.2em]">Session Velocity</span>
<div className="text-2xl font-black font-headline text-zinc-100">HIGH INTENSITY</div>
</div>
<div className="h-1 w-32 bg-zinc-800/80 relative">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-100 w-[75%]"></div>
</div>
</div>
</div>
</section>
{/*  Student List  */}
<section className="space-y-4">
<h3 className="text-xs font-bold font-label text-zinc-500 uppercase tracking-[0.3em]">ROSTER MANAGEMENT</h3>
<div className="space-y-3">
{/*  Student Card 1  */}
<div className="bg-zinc-950/60 flex flex-col p-4 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-zinc-800/80">
<img className="w-full h-full object-cover" data-alt="Portrait of a young athletic man, sweat on face, neutral background, intense look" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQot8SL3Q9gyTgg7w3_D2cZnBrfsGDshsOURcZTtTkkCHLCTxL6hxyAHZpqJvCyqbgSnoG5VcLxENaHOOJa2RUdaUI2aWqyrh2g1u6AyJxia3TzRNlUIJLVKDQbGZ3io88kgVKZwU0BnufEUTu-MbE__DtXWeKKyOyz1cc9DDSrNsY4gjYBxQoZxQSGI2SffjZOrgVqDAdwxA2DuT1jEC9OY_iyVZ8wZzxXguOFKl412pCOmfDxUA4ZAYrRLkWCori9JaHT38AnhpQ"/>
</div>
<div>
<h4 className="font-headline font-bold text-zinc-100 uppercase leading-none">Marcus V.</h4>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest">PURPLE BELT</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</button>
<button className="w-10 h-10 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-500">cancel</span>
</button>
</div>
</div>
<input className="bg-zinc-950 border-none text-[10px] font-bold tracking-widest font-label py-3 px-4 focus:ring-0 placeholder:text-zinc-700 text-zinc-100" placeholder="ADD NOTES (E.G. INJURED)" type="text"/>
</div>
{/*  Student Card 2  */}
<div className="bg-zinc-950/60 flex flex-col p-4 space-y-4 border-l-4 border-brand-red/20">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-zinc-800/80">
<img className="w-full h-full object-cover grayscale" data-alt="Portrait of an athletic woman, braid hairstyle, training environment, focused expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiPddy1AYG0E7V9GdFmQ5lBpL3U0uXk-Se4wZ_0LOg7if4Gl4MupLkwmV0C1jxh_ywlzQklvwqTBXoOxCjyCsJRDKvCGPn7287gzzDfe3nZF2CJokvNY4cNmfC51a0gdfr13umleXEV0wj83rx1ORRPUlNcHVNc5F09o_VPWNZLPifse9TuPIw8nM4gy-9a04c9kSi1kHQKpo1hDhaUIIHBd0W0EELI-fGEb_mVh_KTR818W54DhiSt0vaxRMVarHg7L9axk6Y0TDq"/>
</div>
<div>
<h4 className="font-headline font-bold text-zinc-100 uppercase leading-none">Sarah Chen</h4>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest">BROWN BELT</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-500">check_circle</span>
</button>
<button className="w-10 h-10 bg-brand-red/10 flex items-center justify-center">
<span className="material-symbols-outlined text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>cancel</span>
</button>
</div>
</div>
<div className="bg-brand-red/20 p-3">
<p className="text-[10px] font-bold tracking-widest text-brand-red uppercase">LESIONADO: OMBRO DIREITO</p>
</div>
</div>
{/*  Student Card 3  */}
<div className="bg-zinc-950/60 flex flex-col p-4 space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-zinc-800/80">
<img className="w-full h-full object-cover" data-alt="Portrait of a male martial artist, sharp jawline, cinematic side lighting, black background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_qVTIoAgbQWlyoHKbxlGSJ1uHzpq0d6brzwSNAaMX3tKiiAH0jrXtMCbOqWEBihJ4lYpMYMS4wtFkRPO2E7-juJ5eoyzv4ZRsokdj1kx7A7yb_kRn17LIDpN8bWm9NYEHAzXPojSXsicwzPzDwg3OxygVcA14XGJSgbLktorLrXChACoiFuubNR4Ah4Swgh5TClcQLe1NR_zFnPJfgEg1Apyw07cMV2LUFUULZ2Cy-saZgj1hA1PXAkWzqrIL7koAM8Nwuwm1_ZfL"/>
</div>
<div>
<h4 className="font-headline font-bold text-zinc-100 uppercase leading-none">Ricardo S.</h4>
<span className="text-[10px] font-bold text-zinc-500 tracking-widest">BLUE BELT</span>
</div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-500">check_circle</span>
</button>
<button className="w-10 h-10 bg-zinc-800/80 flex items-center justify-center">
<span className="material-symbols-outlined text-zinc-500">cancel</span>
</button>
</div>
</div>
<input className="bg-zinc-950 border-none text-[10px] font-bold tracking-widest font-label py-3 px-4 focus:ring-0 placeholder:text-zinc-700 text-zinc-100" placeholder="ADD NOTES (E.G. INJURED)" type="text"/>
</div>
</div>
</section>
{/*  Finalize Button  */}
<button className="w-full bg-gradient-to-br from-brand-red to-brand-red py-6 flex items-center justify-center gap-3">
<span className="text-sm font-black font-headline tracking-widest text-white uppercase">FINALIZE ATTENDANCE</span>
<span className="material-symbols-outlined text-white">send</span>
</button>
</main>
    </>
  );
}



