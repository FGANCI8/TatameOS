export default function ErroOuIndisponibilidade() {
  return (
    <>
<main className="relative flex flex-col items-center justify-center min-h-[707px] px-6">
{/*  Background Monolith Elements  */}
<div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
<div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-red/10 blur-[120px]"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] font-headline font-black text-[300px] leading-none text-zinc-400 select-none">
                404
            </div>
</div>
{/*  Content Canvas  */}
<div className="relative z-10 w-full max-w-2xl flex flex-col items-start">
{/*  Error Indicator Zone  */}
<div className="flex flex-col mb-12">
<div className="bg-brand-red/10 p-6 inline-flex self-start mb-6">
<span className="material-symbols-outlined text-[64px] text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
</div>
<h1 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter text-zinc-100 leading-none mb-4">
                    SISTEMA <br/> <span className="text-brand-red">OFFLINE</span>
</h1>
<div className="w-24 h-2 bg-brand-red/10 mb-8"></div>
</div>
{/*  Message Detail  */}
<div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-l-4 border-brand-red/20 w-full mb-12">
<p className="font-body text-xl md:text-2xl text-zinc-500 font-light leading-relaxed max-w-lg">
                    A conexão com os servidores de alta performance foi interrompida. Verifique sua rede e retome o combate.
                </p>
</div>
{/*  Performance CTA  */}
<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
<button className="group relative px-10 py-5 bg-gradient-to-br from-[#FF1A1A] to-[#C00100] hover:brightness-110 active:scale-95 transition-all duration-200 flex items-center justify-center gap-3">
<span className="material-symbols-outlined text-white" style={{ /* font-variation-settings: 'FILL' 1; */ }}>refresh</span>
<span className="font-headline font-black uppercase tracking-widest text-white text-lg">TENTAR NOVAMENTE</span>
</button>
<button className="px-10 py-5 border border-zinc-800 hover:bg-zinc-800/80 active:scale-95 transition-all duration-200 flex items-center justify-center">
<span className="font-headline font-bold uppercase tracking-widest text-zinc-100 text-lg">SUPORTE TÉCNICO</span>
</button>
</div>
{/*  Telemetry Data Snippet (Asymmetric Design Element)  */}
<div className="mt-16 flex gap-12 border-t border-zinc-800/20 pt-8 w-full">
<div className="flex flex-col">
<span className="font-body text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">Status Code</span>
<span className="font-headline font-bold text-2xl text-brand-red">503_FAIL</span>
</div>
<div className="flex flex-col">
<span className="font-body text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">Signal Strength</span>
<span className="font-headline font-bold text-2xl text-zinc-100">0.00%</span>
</div>
<div className="flex flex-col">
<span className="font-body text-[10px] uppercase tracking-[0.2em] text-zinc-500 mb-1">Location</span>
<span className="font-headline font-bold text-2xl text-zinc-100">HUB_SPO_01</span>
</div>
</div>
</div>
{/*  Asymmetric Decorative Image  */}
<div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-1/4 h-3/4 grayscale mix-blend-luminosity opacity-40">
<img className="w-full h-full object-cover" data-alt="dramatic black and white close-up of a sweaty athlete's face with intense focus and dark shadows, gritty sports aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYCYBPaotv-JZAoGQmCCefTCzqnvmYRr8axgznQpZD-vUJfjwe81cpgKbbsk3YA4RnPbE4fmaLq8pkI4fC6kve-pdyJyZOhq69e9716dsbPiDKCuhqQ4rKQEjWBOa1rG51rbiPRD4BK8W_csrzGlfvDl5yJUAM7Tl2QXeLiB0IYC_K5DjAiqay9VKslznLLhQ3EUs_bltV_Sf29DOsELVkcgWx4N4BPNywjwaydbZI9azCx_SUCOckBFhF1mQ9vKOpTKxby93dXukP"/>
</div>
</main>
{/*  Bottom Status Bar (Simplified Footer)  */}
<footer className="fixed bottom-0 left-0 w-full bg-zinc-950 py-3 px-6 flex justify-between items-center z-50">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-brand-red/60 rounded-full animate-pulse"></div>
<span className="font-label text-[10px] uppercase tracking-widest text-brand-red">Link de dados perdido</span>
</div>
<div className="font-label text-[10px] uppercase tracking-widest text-zinc-500">
            © 2024 Kinetic BJJ Performance Lab
        </div>
</footer>

    </>
  );
}

