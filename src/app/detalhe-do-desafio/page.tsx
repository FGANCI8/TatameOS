export default function DetalheDoDesafio() {
  return (
    <>
<main className="pt-16 pb-32">
{/*  Video Hero Section  */}
<section className="relative w-full aspect-video bg-zinc-950 overflow-hidden group">
<img className="w-full h-full object-cover opacity-60" alt="lutador de jiu jitsu executando uma técnica de raspagem em câmera lenta, iluminação cinematográfica de alto contraste" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKPhHR1IK3pWGEICUK7SaABa27RJv6YARBZE2X0xCsSIXX-ut0FcEdD7oum3uZTB-FkrTbTL17bvi_qlQPYXjM0PPJTg5DSFpSgCtHIT4N4HqTt8se7ONVeGJR09Uxo1zmFUzYGqRpxWimAkVjtTw4hV5J7wupkIRibq2-jN_b_1z5mWdmdnP8xOiVYyA7xOjVyUa_2enLgFKXEYaNk5zVJa6jXsb0F6zXTO66JNlWd5GgEgWsU1r0mi3da4ZuVQZV_aXNGLJpwkX1"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-brand-red/10 flex items-center justify-center cursor-pointer transition-transform duration-200 active:scale-95 shadow-2xl">
<span className="material-symbols-outlined text-white text-4xl" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-surface to-transparent">
<span className="bg-brand-red/10 text-white px-3 py-1 font-headline font-black text-xs uppercase tracking-widest mb-2 inline-block">Desafio Elite</span>
<h2 className="text-4xl font-headline font-black uppercase tracking-tighter italic">ARM-LOCK INSANO</h2>
</div>
</section>
{/*  Stats & Countdown Grid  */}
<section className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-zinc-950/60">
<div className="p-8 border-r-0 md:border-r border-zinc-800/10">
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Tempo Restante</p>
<div className="flex gap-4">
<div className="flex flex-col">
<span className="text-4xl font-headline font-black text-brand-red tracking-tighter">04</span>
<span className="text-[10px] font-label uppercase tracking-widest opacity-50">Dias</span>
</div>
<span className="text-4xl font-headline font-black text-brand-red">:</span>
<div className="flex flex-col">
<span className="text-4xl font-headline font-black text-brand-red tracking-tighter">12</span>
<span className="text-[10px] font-label uppercase tracking-widest opacity-50">Horas</span>
</div>
<span className="text-4xl font-headline font-black text-brand-red">:</span>
<div className="flex flex-col">
<span className="text-4xl font-headline font-black text-brand-red tracking-tighter">45</span>
<span className="text-[10px] font-label uppercase tracking-widest opacity-50">Min</span>
</div>
</div>
</div>
<div className="p-8 bg-zinc-900/80">
<div className="flex items-center gap-4">
<div className="w-14 h-14 bg-zinc-800/80 overflow-hidden">
<img className="w-full h-full object-cover" alt="professor de jiu jitsu veterano com kimono preto, cicatrizes de batalha sutis e expressão de liderança, fundo neutro escuro" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARrfAhDHhJFXZDSWsKW4NRFhs54i6Egp02I8jTBGMT0mrjhX3IJxozR7Ds1jFm2sXNs9FWt4PNarWpDjW9W5nEELDdHWRwxbVLkUv34bBeI7TmHVa2r2PrM-LNbKCwDZOWC04wty_AGuo--OFQ-qMt5xl3k8S5aPl9YlsstkAKMPQsWRykhPk9amAC7kdNnRoOaTYGxBgOgXWz8HTgY3TwTUcckwE2Tf29c6AJLa0W4qOgft85dEsAWkIM0TFECIrvfjP0jt4Gt3bS"/>
</div>
<div>
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-zinc-500">Responsável</p>
<h3 className="font-headline font-bold text-lg uppercase italic">Mestre Ricardo "Lobo" Silva</h3>
<p className="text-xs text-zinc-400">Faixa Preta 4º Grau</p>
</div>
</div>
</div>
</section>
{/*  Progress Section  */}
<section className="p-8 bg-zinc-950">
<div className="flex justify-between items-end mb-4">
<div>
<h4 className="font-headline font-black text-xl uppercase italic leading-none">Seu Progresso</h4>
<p className="text-[10px] font-label uppercase tracking-widest text-zinc-300 mt-1">Nível: Competidor</p>
</div>
<div className="text-right">
<span className="text-3xl font-headline font-black italic text-zinc-300">75%</span>
</div>
</div>
{/*  Performance Streak Component  */}
<div className="w-full h-3 bg-zinc-800/80">
<div className="h-full bg-gradient-to-r from-zinc-800-container to-zinc-800 w-3/4 shadow-[0_0_15px_rgba(189,194,255,0.3)]"></div>
</div>
<div className="flex justify-between mt-2">
<span className="text-[10px] font-label uppercase tracking-widest opacity-40 italic">3/4 Repetições Validadas</span>
<span className="text-[10px] font-label uppercase tracking-widest opacity-40 italic">Meta: Finalização Perfeita</span>
</div>
</section>
{/*  Rules & Instructions  */}
<section className="px-8 py-12 space-y-12">
<div>
<h3 className="font-headline font-black text-2xl uppercase italic border-l-4 border-brand-red/20 pl-4 mb-8 tracking-tighter">Regras do Desafio</h3>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-brand-red mt-1">check_circle</span>
<div>
<p className="font-headline font-bold uppercase text-sm tracking-tight mb-1">Execução Técnica</p>
<p className="text-zinc-400 text-sm leading-relaxed">O movimento deve começar da guarda fechada e terminar com a extensão total do cotovelo do oponente em menos de 5 segundos.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-brand-red mt-1">check_circle</span>
<div>
<p className="font-headline font-bold uppercase text-sm tracking-tight mb-1">Registro de Vídeo</p>
<p className="text-zinc-400 text-sm leading-relaxed">O vídeo deve ser gravado em ângulo lateral claro, sem cortes, mostrando o ajuste do quadril e a pegada final.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<span className="material-symbols-outlined text-brand-red mt-1">check_circle</span>
<div>
<p className="font-headline font-bold uppercase text-sm tracking-tight mb-1">Frequência de Treino</p>
<p className="text-zinc-400 text-sm leading-relaxed">Mínimo de 3 treinos específicos por semana durante o período do desafio para validação da pontuação.</p>
</div>
</li>
</ul>
</div>
{/*  Bento Rewards Section  */}
<div className="grid grid-cols-2 gap-2">
<div className="col-span-2 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between aspect-[16/7]">
<span className="material-symbols-outlined text-brand-red text-4xl mb-4">military_tech</span>
<div>
<p className="font-label font-bold text-[10px] uppercase tracking-widest text-zinc-500">Prêmio Principal</p>
<h4 className="font-headline font-black text-2xl uppercase italic tracking-tighter">Patch "Guerreiro de Ferro"</h4>
</div>
</div>
<div className="bg-zinc-900/80 p-4 aspect-square flex flex-col justify-center items-center text-center">
<span className="text-3xl font-headline font-black text-zinc-300">500</span>
<span className="text-[10px] font-label uppercase tracking-widest mt-1">Pontos de Rank</span>
</div>
<div className="bg-zinc-900/80 p-4 aspect-square flex flex-col justify-center items-center text-center">
<span className="material-symbols-outlined text-zinc-300 text-3xl">workspace_premium</span>
<span className="text-[10px] font-label uppercase tracking-widest mt-1">Certificado Digital</span>
</div>
</div>
</section>
{/*  CTA Action  */}
<section className="px-8 mb-12">
<button className="w-full h-16 bg-brand-red/10 text-white font-headline font-black text-lg uppercase tracking-widest shadow-2xl active:brightness-110 flex items-center justify-center gap-3 group">
                ENVIAR VÍDEO DO DESAFIO
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">upload_file</span>
</button>
</section>
</main>
    </>
  );
}

