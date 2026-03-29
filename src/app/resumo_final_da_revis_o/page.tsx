import React from 'react';

export default function ResumoFinalDaRevisO() {
  return (
    <>
      
{/*  TopAppBar  */}
<header className="bg-[#131313] dark:bg-[#131313] docked full-width top-0 z-50 border-none bg-[#1C1B1B] flat no shadows tonal depth via surface layering flex justify-between items-center w-full px-6 py-4 sticky top-0">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-surface-container-highest overflow-hidden">
<img alt="athlete profile photo" className="w-full h-full object-cover grayscale" data-alt="Close-up intense portrait of a focused athlete with dramatic high-contrast lighting in a dark gym environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkZmaWMQC5lqJw45eniDJ3R7o-leDjNH_gxItj3VXZtZfszM69Tz6psxSonzWPY1Ldb-zEVz-Vwn0xe7SeTSqwJn3KbcoY4JaQc00hWjwymLAIQNBrud5GZa5zFc9ncrtKgaxOE_EAxyMJ_O-xGSByVKDri0yklMQzWFajZFurbA0p08zkbLUCdh7zCLkDZnGXw1kQMH_73adVs6p4XbA7p0RI7gRSIrDBjGkX5Ka1gsWag6lM9lpRKaM7jfYnl9YJ58Ee7uImOIGN"/>
</div>
<h1 className="font-['Lexend'] font-black tracking-tighter uppercase text-3xl font-black text-[#E70000] italic dark:text-[#E70000]">KINETIC</h1>
</div>
<button className="hover:bg-[#353534] transition-colors duration-150 active:scale-95 duration-75 p-2">
<span className="material-symbols-outlined text-[#353534] dark:text-[#E70000]" data-icon="settings">settings</span>
</button>
</header>
<main className="max-w-7xl mx-auto px-6 py-10 pb-32">
{/*  Hero Summary Section  */}
<section className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-0 border-l-8 border-primary-container">
<div className="lg:col-span-8 bg-surface-container-low p-10">
<span className="font-label text-[12px] font-bold uppercase tracking-[0.3em] text-primary-container mb-4 block">SESSÃO FINALIZADA</span>
<h2 className="font-headline text-5xl md:text-7xl font-black mb-6 leading-none">REVISÃO DE PERFORMANCE</h2>
<p className="text-tertiary-fixed-dim text-lg max-w-2xl leading-relaxed">
                    Sua última sessão de sparring revelou padrões críticos. Consolidamos os dados biomecânicos para otimizar sua próxima subida ao ringue.
                </p>
</div>
<div className="lg:col-span-4 bg-surface-container-high p-10 flex flex-col justify-center border-l border-surface-container-highest">
<div className="flex items-baseline gap-2">
<span className="font-headline text-8xl font-black text-on-surface leading-none tracking-tighter">84</span>
<span className="font-label text-xl font-bold text-primary-container uppercase italic">%</span>
</div>
<span className="font-label text-xs font-bold tracking-widest text-tertiary-fixed-dim uppercase mt-2">SCORE DE EFICIÊNCIA</span>
</div>
</section>
{/*  Bento Grid Analysis  */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
{/*  Erros Detectados (Lista)  */}
<section className="bg-surface-container p-8 border-t-2 border-error">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-error" data-icon="warning">warning</span>
<h3 className="font-headline text-xl font-extrabold uppercase tracking-tight">Erros Detectados</h3>
</div>
<div className="space-y-6">
<div className="group">
<span className="font-label text-[10px] font-bold text-error uppercase tracking-widest">CRÍTICO</span>
<p className="font-bold text-on-surface mt-1 uppercase">Guarda baixa no contra-ataque</p>
<p className="text-sm text-tertiary-fixed-dim mt-1">Sua mão direita cai 15cm ao lançar o jab de esquerda.</p>
</div>
<div className="group border-t border-surface-container-highest pt-4">
<span className="font-label text-[10px] font-bold text-outline uppercase tracking-widest">TÉCNICO</span>
<p className="font-bold text-on-surface mt-1 uppercase">Pivot do pé traseiro incompleto</p>
<p className="text-sm text-tertiary-fixed-dim mt-1">Perda de 22% de potência no direto por falta de rotação.</p>
</div>
<div className="group border-t border-surface-container-highest pt-4">
<span className="font-label text-[10px] font-bold text-outline uppercase tracking-widest">TÉCNICO</span>
<p className="font-bold text-on-surface mt-1 uppercase">Exposição do queixo no clinch</p>
<p className="text-sm text-tertiary-fixed-dim mt-1">Ângulo de cabeça vulnerável a uppercuts curtos.</p>
</div>
</div>
</section>
{/*  Pontos Fortes (Checklist)  */}
<section className="bg-surface-container-high p-8 border-t-2 border-secondary">
<div className="flex items-center gap-3 mb-8">
<span className="material-symbols-outlined text-secondary" data-icon="verified">verified</span>
<h3 className="font-headline text-xl font-extrabold uppercase tracking-tight">Pontos Fortes</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary mt-1" data-icon="check_box" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_box</span>
<div>
<p className="font-bold uppercase leading-tight">Velocidade de Reação</p>
<p className="text-sm text-tertiary-fixed-dim">Esquivas laterais 0.1s mais rápidas que a média.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary mt-1" data-icon="check_box" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_box</span>
<div>
<p className="font-bold uppercase leading-tight">Volume de Golpes</p>
<p className="text-sm text-tertiary-fixed-dim">Consistência de 45 golpes por round mantida.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-secondary mt-1" data-icon="check_box" style={{ /* font-variation-settings: 'FILL' 1; */ }}>check_box</span>
<div>
<p className="font-bold uppercase leading-tight">Controle de Distância</p>
<p className="text-sm text-tertiary-fixed-dim">Excelente uso do alcance para ditar o ritmo.</p>
</div>
</li>
</ul>
</section>
{/*  Técnicas Recomendadas (Cards)  */}
<section className="lg:row-span-1 space-y-6">
<div className="bg-surface-container-lowest p-8 border-l-4 border-primary-container h-full flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="material-symbols-outlined text-primary-container" data-icon="psychology">psychology</span>
<h3 className="font-headline text-xl font-extrabold uppercase tracking-tight">IA SENSEI INSIGHT</h3>
</div>
<p className="text-on-surface font-bold text-lg mb-4 italic leading-snug">"Sua agressividade é sua maior arma, mas a imprudência defensiva é o seu maior risco."</p>
<div className="bg-surface-container p-4">
<p className="text-xs uppercase tracking-widest font-bold text-tertiary-fixed-dim mb-2">FOCO DA PRÓXIMA SESSÃO</p>
<p className="font-bold text-primary-container uppercase">Transição Defensiva Post-Shot</p>
</div>
</div>
</div>
</section>
</div>
{/*  Técnicas Recomendadas Cards Row  */}
<h3 className="font-headline text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
<span className="w-8 h-[2px] bg-primary-container"></span>
            Técnicas Recomendadas
        </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
<div className="bg-surface-container-low group hover:bg-surface-container-high transition-all cursor-pointer">
<div className="h-48 overflow-hidden relative">
<img alt="technique thumbnail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Athletic trainer demonstrating a defensive boxing stance with hands high and elbows tucked in a cinematic gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDau4q-2kxuP1w0rcTaLgmSpenJVnVqtJtF8laA5_ndaZY90GMUT1E3ABxJ4yKDWJbec00c1dtKEeZxanW1MajcrpNFj3B80P8gkMJRwkTRyk7FaXwnrb_pHkjjYkBXHOzCZORhbBST8qYcZP9LCzMlNI9KMgerUQm7LhqbjaHSS7BIT70nl65NfwP3ap74opsvTHG1HR4wj5jksVcEI4TiQozCJ7enIG4DaeYOis5Pn_TM8NS2DWd2ODRkXoWONQwcOvINMLSSAqW_"/>
<div className="absolute bottom-4 right-4 bg-primary-container p-2">
<span className="material-symbols-outlined text-white" data-icon="play_arrow" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
</div>
<div className="p-6">
<h4 className="font-bold uppercase text-lg mb-2">Check Hook Drill</h4>
<p className="text-sm text-tertiary-fixed-dim">Melhore sua saída lateral enquanto neutraliza oponentes agressivos.</p>
</div>
</div>
<div className="bg-surface-container-low group hover:bg-surface-container-high transition-all cursor-pointer">
<div className="h-48 overflow-hidden relative">
<img alt="technique thumbnail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Close up of a boxer's feet performing rapid pivot movements on a canvas floor with dust particles in the air" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrQ4XTIeXVziAtLX7YFtLVkzGg5jevLrMqT68jw5AXnRnX-2i1EaXnB4oipS-j8wJfW_LoU7NFxerdmn5gTHNbf_1hdJ_9OO4yZn9ijEtXSg5V7RTz9XTWyE8SE5Xk7ZVn0bvWgcvt9s5RxlppZSPdG8hFx8gZCI_ZLahqXsfGJNhSjgljMNVcRuW5i-muJavT1v1v9eMVuqreHkuO3wcIp7eCmKSI9avTXFHCzDyutm_yi4BPUI-nMaNi5DQIkr7JRwEbXrqKcmtK"/>
<div className="absolute bottom-4 right-4 bg-primary-container p-2">
<span className="material-symbols-outlined text-white" data-icon="play_arrow" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
</div>
<div className="p-6">
<h4 className="font-bold uppercase text-lg mb-2">Footwork Mastery</h4>
<p className="text-sm text-tertiary-fixed-dim">Exercícios de pivot para maximizar a transferência de peso no direto.</p>
</div>
</div>
<div className="bg-surface-container-low group hover:bg-surface-container-high transition-all cursor-pointer">
<div className="h-48 overflow-hidden relative">
<img alt="technique thumbnail" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="A heavy sandbag swaying in a dimly lit high-end boxing studio with red neon accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgYLO1sHZ8fgB1p02UStra55o9W7TBZ_zefvYeWXStgz2viPxIssauD5BCEDH2AMS9ayd17A-fILZ0bs2Jd8dwKwnqjsA2NVBckTJNwO-IOhnqj2b5_aiAX0qGWsyCxwLbnVXyMQOvF8mLM3KB8X8a1soSfzMAECJ7kNs9Y7ZzLBQAKUxA_5dOTkUzBU68TSYXL5a5bEJ1QyRGlCOgvVnaqPYE0x1ekIpw67kh3CAa7qo4CVCUvqH4CzsOnxSCIVG8xRlblmpfFn1_"/>
<div className="absolute bottom-4 right-4 bg-primary-container p-2">
<span className="material-symbols-outlined text-white" data-icon="play_arrow" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_arrow</span>
</div>
</div>
<div className="p-6">
<h4 className="font-bold uppercase text-lg mb-2">High Guard Recovery</h4>
<p className="text-sm text-tertiary-fixed-dim">Reprogramação muscular para manter a guarda alta após cada ataque.</p>
</div>
</div>
</div>
{/*  Plano de Treino Gerado CTA  */}
<section className="bg-surface-container-highest p-1 lg:p-1">
<div className="bg-surface-container-low p-8 lg:p-12 border border-surface-container-highest flex flex-col lg:flex-row justify-between items-center gap-10">
<div className="flex-1">
<span className="bg-primary-container text-on-primary-container px-3 py-1 font-label text-[10px] font-black uppercase tracking-[0.2em] mb-4 inline-block">ADAPTIVE PLAN GENERATED</span>
<h2 className="font-headline text-4xl font-black uppercase mb-4 leading-tight">Plano de Treino de Correção</h2>
<p className="text-tertiary-fixed-dim max-w-xl">
                        Baseado nas falhas detectadas, geramos um circuito de 45 minutos focado exclusivamente em eliminar os pontos de vulnerabilidade defensiva e otimizar seu pivot.
                    </p>
</div>
<div className="w-full lg:w-auto">
<button className="w-full lg:w-auto bg-gradient-to-br from-[#E70000] to-[#C00100] text-on-primary-container font-headline font-black text-xl px-12 py-6 flex items-center justify-center gap-4 hover:brightness-110 active:scale-95 transition-all uppercase tracking-tighter">
                        Iniciar Treino de Correção
                        <span className="material-symbols-outlined" data-icon="fitness_center">fitness_center</span>
</button>
</div>
</div>
</section>
</main>
{/*  BottomNavBar  */}
<nav className="fixed bottom-0 left-0 w-full h-16 flex justify-around items-stretch overflow-hidden bg-[#353534]/80 backdrop-blur-xl dark:bg-[#353534]/80 z-50 shadow-[0_-4px_20px_rgba(52,61,150,0.06)]">
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="home">home</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">HOME</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="bookmarks">bookmarks</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">LIBRARY</span>
</a>
<a className="flex flex-col items-center justify-center text-[#FFF8F6] bg-gradient-to-br from-[#E70000] to-[#C00100] h-full w-full brightness-110" href="#">
<span className="material-symbols-outlined mb-1" data-icon="moving">moving</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">PATH</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="fitness_center">fitness_center</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">TRAINING</span>
</a>
<a className="flex flex-col items-center justify-center text-[#C6C6C7] h-full w-full hover:text-white transition-all" href="#">
<span className="material-symbols-outlined mb-1" data-icon="psychology">psychology</span>
<span className="font-['Inter'] font-bold text-[10px] uppercase tracking-widest">SENSEI IA</span>
</a>
</nav>

    </>
  );
}
