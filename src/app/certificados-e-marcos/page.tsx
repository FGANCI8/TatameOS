export default function CertificadosEMarcos() {
  return (
    <>
<main className="pt-24 px-6 space-y-12 max-w-5xl mx-auto">
{/*  Hero Section: Stats & Progress  */}
<section className="space-y-6">
<div className="flex flex-col md:flex-row justify-between items-end gap-4">
<div className="space-y-1">
<span className="font-['Inter'] uppercase text-[10px] font-bold tracking-widest text-[#FF1A1A]">CONQUISTAS TÉCNICAS</span>
<h2 className="font-headline text-5xl font-black italic uppercase tracking-tighter">LEGADO KINETIC</h2>
</div>
<div className="bg-zinc-950/60 px-6 py-4 flex items-center gap-8 sharp-edge">
<div className="text-center">
<p className="text-3xl font-black font-headline">08</p>
<p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Certificados</p>
</div>
<div className="w-px h-10 bg-zinc-800/80"></div>
<div className="text-center">
<p className="text-3xl font-black font-headline">12</p>
<p className="text-[10px] uppercase font-bold text-zinc-500 tracking-widest">Marcos</p>
</div>
</div>
</div>
{/*  The Performance Streak Component  */}
<div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 space-y-4 sharp-edge relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10/5 -mr-12 -mt-12 rotate-45 pointer-events-none"></div>
<div className="flex justify-between items-center">
<span className="font-headline font-bold text-sm tracking-widest uppercase italic">Progresso Faixa Roxa</span>
<span className="text-[#FF1A1A] font-black text-lg">72%</span>
</div>
<div className="w-full h-4 bg-zinc-800/80 sharp-edge overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#FF1A1A] to-[#C00100] w-[72%] relative">
<div className="absolute inset-0 bg-white/20 animate-pulse"></div>
</div>
</div>
<p className="text-[10px] uppercase font-bold text-zinc-500">Próximo Marco: 150 treinos concluídos (Faltam 12)</p>
</div>
</section>
{/*  Digital Certificates Gallery (Bento-ish Grid)  */}
<section className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="font-headline font-black text-xl italic uppercase tracking-tighter border-l-4 border-[#FF1A1A] pl-4">Galeria de Diplomas</h3>
<button className="text-[10px] uppercase font-bold text-[#FF1A1A] tracking-widest flex items-center gap-2 hover:opacity-80 transition-opacity">
                    VER TODOS <span className="material-symbols-outlined text-xs" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{/*  Cert 1 (Large)  */}
<div className="md:col-span-2 bg-zinc-950/60 group cursor-pointer overflow-hidden sharp-edge flex flex-col md:flex-row h-full">
<div className="relative w-full md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="high quality digital certificate mockup with red and gold wax seal on dark textured paper background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO-BBimtZsPZxjW8219VHSEnEingXKivq0O25ameY5X9PsHzPK70CsimACRzsvCPPd69JYwPFgf_L_td-EIVnd7MX2n8Kx2kBrHx41sjvQS6uYrE-T0lwulUza02luAwxgkHce9uEUYiYXsk2DuAtl0lJIqzZjM3bZsPzNHUQhVheasmzT1eheBpkU3eOSFeKAVdQhzoyb0Z9Cs_vtwVZFNUFIQk5CIdpK2jwzxv3mYhRYPpV-4fTvHBY9PSB5U3MwLXt_4nvz8EF8"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="bg-[#FF1A1A] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">OFFICIAL SEMINAR</span>
</div>
</div>
<div className="p-6 flex flex-col justify-between flex-1">
<div className="space-y-2">
<h4 className="font-headline font-black text-2xl leading-tight uppercase">Seminário de Passagem de Guarda Moderna</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Mestre Marcus "Buchecha" Almeida. Kinetic HQ, São Paulo.</p>
</div>
<div className="pt-6 flex items-center justify-between border-t border-zinc-800/80">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#FF1A1A]">MAR 2024</span>
<span className="material-symbols-outlined text-zinc-500" data-icon="verified">verified</span>
</div>
</div>
</div>
{/*  Cert 2  */}
<div className="bg-zinc-950/60 group cursor-pointer overflow-hidden sharp-edge flex flex-col h-full">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="dynamic close up of jiu jitsu athletes grappling during a workshop with moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAn3zRhKfKcMudwziKQ2XD1YWlTrE_9nGaT65PZYG8OeiHf4vIWEFgyN-JPDWC6I-OixtT4IOkvMX4G-o80yPcfjzD5Xi3JjO5o2CiCyWG3g7ABEdbM2FsV7_eo2QcC2mRhLA9aQxtljSehZwTRkaMObC7Igt0nKmkNPsj8PxAzWfDr4Uq6zWgnENl67Cqn1HVuIHJFYSs_TqKHNLNrREQY4dR1xqNDBjfZvtbmlKuYOZfodh9Yb5_1Dfo3FJIVQL9clGf9Y5-tJUb"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="bg-zinc-800/80 text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">WORKSHOP</span>
</div>
</div>
<div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
<h4 className="font-headline font-black text-xl leading-tight uppercase">Técnicas de Finalização Kimura</h4>
<div className="flex items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">JAN 2024</span>
<span className="material-symbols-outlined text-zinc-500" data-icon="download">download</span>
</div>
</div>
</div>
{/*  Cert 3  */}
<div className="bg-zinc-950/60 group cursor-pointer overflow-hidden sharp-edge flex flex-col h-full">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" alt="black and white photo of a jiu jitsu belt showing signs of wear and heavy training" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfCY2jYxUb446AlN4yAaaAFIfSvlVYOnDWThUg3B6OIc_IQJo6Ckh7PH9B3HGJxYL5jD2KuZ3b8rcxFxPR_XRD4F0aiLuSekCkz4KBOIgnUyb9ZDY7Az7MQtwWCW4bI1mWCcbpVkzzjGhBg5s90Z69DSRjaha_S45a9ONbxQc5OarLXiwppmGO-Wyte2qspUx3qQDFinn7kjCMG-2GYZUzPHD4xKTfwwPSGMRQtk-DvOEzm4a64Q7bSkiWIHlJRUtKwPro8m0g77Bx"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="bg-[#FF1A1A] text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">RANK UP</span>
</div>
</div>
<div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
<h4 className="font-headline font-black text-xl leading-tight uppercase">Promoção: Faixa Azul 4 Graus</h4>
<div className="flex items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">NOV 2023</span>
<span className="material-symbols-outlined text-zinc-500" data-icon="military_tech" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
</div>
</div>
</div>
{/*  Cert 4 (Full Width Graphic)  */}
<div className="md:col-span-2 bg-[#1C1B1B] group cursor-pointer overflow-hidden sharp-edge p-1 relative min-h-[160px] flex items-center justify-center">
<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&amp;w=1200&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale"></div>
<div className="relative z-10 text-center space-y-2 px-8">
<h4 className="font-headline font-black text-3xl italic uppercase tracking-tighter">DESBLOQUEAR NOVO CERTIFICADO</h4>
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF1A1A]">Conclua o curso de Defesa Pessoal Nível II</p>
</div>
<div className="absolute inset-0 border-2 border-dashed border-zinc-800/80 opacity-50"></div>
</div>
</div>
</section>
{/*  Timeline of Major Milestones  */}
<section className="space-y-8">
<h3 className="font-headline font-black text-xl italic uppercase tracking-tighter border-l-4 border-[#FF1A1A] pl-4">Linha do Tempo de Glórias</h3>
<div className="relative ml-4 md:ml-8 border-l-2 border-zinc-800/80 space-y-12 pb-8">
{/*  Timeline Item 1  */}
<div className="relative pl-10">
<div className="absolute -left-[11px] top-0 w-5 h-5 bg-[#FF1A1A] border-4 border-[#131313] sharp-edge rotate-45"></div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-[#FF1A1A]">MAIO 2024</span>
<span className="bg-zinc-800/80 text-[10px] font-bold px-2 py-0.5 uppercase tracking-widest">EPIC MILESTONE</span>
</div>
<h4 className="font-headline font-black text-2xl uppercase italic">1 ANO DE KINETIC BJJ</h4>
<div className="bg-zinc-950/60 p-4 sharp-edge flex items-center gap-4 border-l-4 border-[#FF1A1A]">
<span className="material-symbols-outlined text-3xl text-[#FF1A1A]" data-icon="workspace_premium" style={{ /* font-variation-settings: 'FILL' 1; */ }}>workspace_premium</span>
<div>
<p className="font-bold text-sm uppercase">DEDICAÇÃO INABALÁVEL</p>
<p className="text-xs text-zinc-500">365 dias de evolução, suor e disciplina absoluta no tatame.</p>
</div>
</div>
</div>
</div>
{/*  Timeline Item 2  */}
<div className="relative pl-10 opacity-60 hover:opacity-100 transition-opacity">
<div className="absolute -left-[9px] top-0 w-4 h-4 bg-tertiary border-2 border-[#131313] sharp-edge rotate-45"></div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">FEV 2024</span>
</div>
<h4 className="font-headline font-black text-xl uppercase">100 TREINOS CONCLUÍDOS</h4>
<p className="text-xs text-zinc-500 leading-relaxed">A consistência é a mãe da maestria. Você alcançou a marca de 100 sessões de treino de alta intensidade.</p>
</div>
</div>
{/*  Timeline Item 3  */}
<div className="relative pl-10 opacity-60 hover:opacity-100 transition-opacity">
<div className="absolute -left-[9px] top-0 w-4 h-4 bg-tertiary border-2 border-[#131313] sharp-edge rotate-45"></div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">DEZ 2023</span>
</div>
<h4 className="font-headline font-black text-xl uppercase italic">PRIMEIRA COMPETIÇÃO INTERNA</h4>
<div className="grid grid-cols-2 gap-2 mt-4">
<img className="w-full aspect-square object-cover grayscale sharp-edge" alt="two jiu jitsu fighters locked in a struggle on the mat during a tournament" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlteau0Ja5iOJrnfOucSTIhaUt-i3ypnw3AuDOP3LLxbx7nenQ0CjLiVMTCAFXwyw0yOpLsPycNsKV1eBfgGe0w_lIlr-phzVVKGxz3QARGGGfr0EHlTuf-gg4-_bmAtEIDikrgrPPn3EDepnKgPL2darBxbOILjTP3RMfwp-tWKP2EGKsW26uEa63vLiOqu70dsB_dV66ckJkkpPg6zsh63QXo-Vkno3Dd7frscD3Im5CrgZQFyQkTLyFtXTHO7o361jWgHC5fESj"/>
<img className="w-full aspect-square object-cover grayscale sharp-edge" alt="jiu jitsu practitioner tying their white belt focused before training" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjou6Jd5VbNkQu_YYe9PycIo2uXe_E5qG4CigGyfotbT2eY4DXeltofrurdsV7ZCwAGPJaKJMB_3-qjjVA9QDzUSuzgUaIqpRT4zWZUWmk1j0emh339QsqZkf0rz4YzAFbunI3lbXnrDM2lJBGDS7OK_lCzSkJYtaboxl3T0c9AfDbGPhZC2y7Rf52POylPCGf7WWuYwq9joqYGPQhV6AoybdZukQMiR9W_vfzecrfWK4Of0BQpNfjH__S0h1-OH5dQwv2yACwIWKs"/>
</div>
</div>
</div>
{/*  Timeline Item 4  */}
<div className="relative pl-10 opacity-30">
<div className="absolute -left-[9px] top-0 w-4 h-4 bg-zinc-800/80 border-2 border-[#131313] sharp-edge rotate-45"></div>
<div className="space-y-2">
<span className="text-[10px] font-bold uppercase tracking-widest">EM BREVE...</span>
<h4 className="font-headline font-black text-xl uppercase text-zinc-700">FAIXA ROXA</h4>
</div>
</div>
</div>
</section>
{/*  CTA Action  */}
<section className="pb-12">
<button className="w-full bg-gradient-to-br from-[#FF1A1A] to-[#C00100] py-6 sharp-edge group relative overflow-hidden transition-all duration-300 active:scale-[0.98]">
<div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex items-center justify-center gap-4">
<span className="material-symbols-outlined text-3xl" data-icon="share" style={{ /* font-variation-settings: 'FILL' 1; */ }}>share</span>
<span className="font-headline font-black text-xl uppercase italic tracking-tighter text-white">Compartilhar meu Legado</span>
</div>
</button>
</section>
</main>
    </>
  );
}


