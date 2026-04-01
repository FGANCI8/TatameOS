export default function FinanceiroEMensalidade() {
  return (
    <>
<main className="pt-24 px-6 space-y-8">
{/*  Hero Status Section  */}
<section className="space-y-4">
<div className="flex justify-between items-end">
<div className="space-y-1">
<p className="font-['Inter'] uppercase text-[10px] font-bold tracking-[0.2em] text-zinc-400">STATUS ATUAL</p>
<h2 className="font-['Lexend'] text-4xl font-black italic text-zinc-100">FINANCEIRO</h2>
</div>
<div className="bg-[#FF1A1A] px-4 py-1">
<span className="font-['Lexend'] font-black text-white text-sm">PAGO</span>
</div>
</div>
{/*  Bento Layout Main Card  */}
<div className="grid grid-cols-2 gap-px bg-zinc-800/80">
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-2">
<span className="material-symbols-outlined text-[#FF1A1A]" data-icon="event_repeat">event_repeat</span>
<p className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest text-zinc-400">PRÓXIMO VENCIMENTO</p>
<p className="font-['Lexend'] text-2xl font-extrabold text-zinc-100">15 NOV</p>
</div>
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-2 border-l border-zinc-800/80">
<span className="material-symbols-outlined text-[#FF1A1A]" data-icon="payments">payments</span>
<p className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest text-zinc-400">VALOR MENSAL</p>
<p className="font-['Lexend'] text-2xl font-extrabold text-zinc-100">R$ 280</p>
</div>
</div>
</section>
{/*  Primary Actions  */}
<section className="space-y-3">
<button className="kinetic-gradient w-full py-5 flex items-center justify-center gap-3 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-white" data-icon="description">description</span>
<span className="font-['Lexend'] font-black text-white uppercase tracking-wider">VER FATURA ATUAL</span>
</button>
<button className="w-full py-5 flex items-center justify-center gap-3 bg-zinc-900 border border-zinc-800/20 active:scale-[0.98] transition-transform">
<span className="material-symbols-outlined text-zinc-100" data-icon="credit_card">credit_card</span>
<span className="font-['Lexend'] font-black text-zinc-100 uppercase tracking-wider">ALTERAR MÉTODO</span>
</button>
</section>
{/*  Payment History  */}
<section className="space-y-6">
<div className="flex items-center gap-4">
<h3 className="font-['Lexend'] text-lg font-black uppercase italic tracking-tight">HISTÓRICO</h3>
<div className="h-[2px] flex-grow bg-zinc-800/80"></div>
</div>
<div className="space-y-2">
{/*  History Item 1  */}
<div className="flex items-center justify-between p-5 bg-zinc-950/60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-zinc-800/80">
<span className="material-symbols-outlined text-zinc-400 text-sm" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div>
<p className="font-['Lexend'] font-bold text-zinc-100">OUTUBRO 2023</p>
<p className="font-['Inter'] text-[10px] font-medium text-zinc-400 uppercase tracking-tighter">PAGO EM 15/10/2023</p>
</div>
</div>
<p className="font-['Lexend'] font-black text-zinc-100">R$ 280,00</p>
</div>
{/*  History Item 2  */}
<div className="flex items-center justify-between p-5 bg-zinc-950/60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-zinc-800/80">
<span className="material-symbols-outlined text-zinc-400 text-sm" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div>
<p className="font-['Lexend'] font-bold text-zinc-100">SETEMBRO 2023</p>
<p className="font-['Inter'] text-[10px] font-medium text-zinc-400 uppercase tracking-tighter">PAGO EM 14/09/2023</p>
</div>
</div>
<p className="font-['Lexend'] font-black text-zinc-100">R$ 280,00</p>
</div>
{/*  History Item 3  */}
<div className="flex items-center justify-between p-5 bg-zinc-950/60 opacity-60">
<div className="flex items-center gap-4">
<div className="w-10 h-10 flex items-center justify-center bg-zinc-800/80">
<span className="material-symbols-outlined text-zinc-400 text-sm" data-icon="check_circle" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
</div>
<div>
<p className="font-['Lexend'] font-bold text-zinc-100">AGOSTO 2023</p>
<p className="font-['Inter'] text-[10px] font-medium text-zinc-400 uppercase tracking-tighter">PAGO EM 15/08/2023</p>
</div>
</div>
<p className="font-['Lexend'] font-black text-zinc-100">R$ 280,00</p>
</div>
</div>
</section>
{/*  Subscription Details Card  */}
<section className="bg-[#1C1B1B] p-6 border-l-4 border-[#FF1A1A]">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-[#FF1A1A]" data-icon="info">info</span>
<div className="space-y-2">
<p className="font-['Lexend'] font-bold text-sm uppercase">PLANO BLACK BELT</p>
<p className="font-['Inter'] text-xs text-zinc-400 leading-relaxed">
                        Seu plano inclui acesso ilimitado a todas as unidades Kinetic BJJ, seminários mensais e rastreamento de performance avançado.
                    </p>
</div>
</div>
</section>
</main>
    </>
  );
}


