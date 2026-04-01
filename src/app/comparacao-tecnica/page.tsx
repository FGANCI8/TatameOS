export default function ComparaOTCnica() {
  return (
    <>
<main className="pt-24 pb-32 px-4 max-w-5xl mx-auto">
{/*  Hero Section / Title  */}
<section className="mb-12">
<span className="font-label text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-2 block">Análise de Telemetria Técnica</span>
<h2 className="font-headline text-5xl font-black uppercase tracking-tighter leading-none mb-4">
                ERRO <span className="text-brand-red">VS</span> EXECUÇÃO
            </h2>
<div className="h-1 w-24 bg-brand-red/10"></div>
</section>
{/*  Comparison Bento Grid  */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/*  THE ERROR CARD (LEFT)  */}
<div className="bg-zinc-950/60 border-l-4 border-brand-red/20 p-1">
<div className="relative aspect-video w-full bg-zinc-800/80 overflow-hidden">
<img alt="Erro de pegada" className="w-full h-full object-cover opacity-60 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC8dWtid28Nh4gg_5kqLbxgX-RNffWxiX1HYdYnjHpMswKrcR0moeq9p6hkI8s8ToTPvZ4s3aCw1ZNQX7LNkOKxv4Ri0H5DDZ2kGvLFEJYSpZmHAUFPXHWp6ccAHt4L0pmgE_ZUX4xh5TRjOIElHlaGASSva6HFh-wsUFQzcLme_T5PaSrBmi2cw5-y7eh66sknJ1PQbrmM-lCjUS0mLUDA6q73rJlbJ_PY2PW6KmEYvzs61CZumu7nSHdBX_Mmkgobhxd3isR_O1u"/>
<div className="absolute top-4 left-4 bg-brand-red/10 text-white px-3 py-1 font-headline font-bold text-xs uppercase italic">
                        Critical Error
                    </div>
<div className="absolute inset-0 border-[16px] border-brand-red/20/10 pointer-events-none"></div>
</div>
<div className="p-6 bg-zinc-950/60">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-brand-red" style={{ /* font-variation-settings: 'FILL' 1; */ }}>warning</span>
<h3 className="font-headline text-xl font-bold uppercase tracking-tight">Pegada Baixa (Lapela)</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-brand-red-container text-sm mt-1">close</span>
<div>
<p className="font-bold text-sm uppercase text-zinc-500">Postura Colapsada</p>
<p className="text-sm text-zinc-400">O centro de gravidade está projetado à frente, facilitando a raspagem.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-brand-red-container text-sm mt-1">close</span>
<div>
<p className="font-bold text-sm uppercase text-zinc-500">Timing Atrasado</p>
<p className="text-sm text-zinc-400">Reação de 0.8s superior ao ideal, permitindo a antecipação do oponente.</p>
</div>
</li>
</ul>
</div>
</div>
{/*  THE EXECUTION CARD (RIGHT)  */}
<div className="bg-zinc-900 border-l-4 border-zinc-800 p-1">
<div className="relative aspect-video w-full bg-zinc-800/80 overflow-hidden">
<img alt="Execução Ideal" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJtLioeXuiV7oSM0_jXE8VF1aNl9bfdNyuuXjj7plP7e-eIgG0XTLpJZfHSvcKjKPcvwPl8S7pXXTNWZAFRqH9VzyNgoxbQwu_NG8WXkUxausoYGLS-jEK2pKcioF3x6pDNchgBYFL3_6qlTNDJq4m_3ZRCc9YT80lq26x2-DNHhy76jjy0h-i6rgYeBaQD0Iv8tEutr_QaxCxuz9xmRpfqYkLhI9Zc46Ri7QnnB0eV7DqdM5JJP0tRk7ZlyaMaj942tD1U1OKYMjZ"/>
<div className="absolute top-4 left-4 bg-zinc-800 text-zinc-100 px-3 py-1 font-headline font-bold text-xs uppercase italic">
                        Ideal Execution
                    </div>
</div>
<div className="p-6 bg-zinc-900">
<div className="flex items-center gap-2 mb-4">
<span className="material-symbols-outlined text-zinc-300" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_circle</span>
<h3 className="font-headline text-xl font-bold uppercase tracking-tight text-zinc-300">Alavanca Correta</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-zinc-300 text-sm mt-1">verified</span>
<div>
<p className="font-bold text-sm uppercase text-white">Coluna Neutra</p>
<p className="text-sm text-zinc-100">Base sólida com distribuição de peso 60/40 nos quadris.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-zinc-300 text-sm mt-1">verified</span>
<div>
<p className="font-bold text-sm uppercase text-white">Pressão Constante</p>
<p className="text-sm text-zinc-100">Cotovelo fechado criando conexão direta com o core do oponente.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
{/*  Analytical Metrics  */}
<section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-zinc-800/80 p-6 flex flex-col justify-between aspect-square md:aspect-auto">
<p className="font-label text-[10px] uppercase tracking-widest text-zinc-400">Eficiência Cinética</p>
<div>
<span className="font-headline text-6xl font-black text-zinc-300">94%</span>
<div className="w-full h-1 bg-zinc-950-variant mt-2">
<div className="h-full bg-zinc-800 w-[94%]"></div>
</div>
</div>
</div>
<div className="bg-zinc-800/80 p-6 flex flex-col justify-between">
<p className="font-label text-[10px] uppercase tracking-widest text-zinc-400">Risco de Lesão (Erro)</p>
<div>
<span className="font-headline text-6xl font-black text-brand-red">HIGH</span>
<p className="text-xs uppercase font-bold text-brand-red mt-2 tracking-tighter">Stress excessivo no L4-L5</p>
</div>
</div>
<div className="bg-zinc-800/80 p-6 flex flex-col justify-between">
<p className="font-label text-[10px] uppercase tracking-widest text-zinc-400">Tempo de Resposta</p>
<div className="flex items-end gap-2">
<span className="font-headline text-6xl font-black text-white">0.3</span>
<span className="font-headline text-xl font-bold text-zinc-400 mb-2 uppercase">sec</span>
</div>
</div>
</section>
{/*  Action Section  */}
<section className="mt-8">
<button className="w-full bg-brand-red/10 text-white font-headline font-black uppercase py-6 text-lg tracking-widest hover:bg-brand-red/20 active:scale-95 transition-all">
                REPETIR DRILL DE CORREÇÃO
            </button>
</section>
</main>
    </>
  );
}


