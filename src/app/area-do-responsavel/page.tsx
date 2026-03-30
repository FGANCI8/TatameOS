
export default function ReaDoResponsVel() {
  return (
    <main className="pt-20 pb-28 px-4 max-w-5xl mx-auto space-y-8">
      {/*  Welcome Hero Section (Asymmetric Layout)  */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-0 border-l-4 border-brand-red/20 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8">
        <div className="md:col-span-8">
          <span className="font-label text-xs font-bold text-zinc-500 tracking-[0.2em] uppercase">Área do Responsável</span>
          <h2 className="font-headline text-4xl font-black italic tracking-tighter mt-2 leading-none uppercase">Evolução de <span className="text-brand-red">Lucas Silva</span></h2>
          <p className="mt-4 text-zinc-400 max-w-md">Acompanhe de perto a jornada do seu pequeno campeão. Disciplina, técnica e superação a cada treino.</p>
        </div>
        <div className="md:col-span-4 flex flex-col justify-end items-end mt-6 md:mt-0">
          <div className="text-right">
            <p className="font-label text-xs uppercase tracking-widest text-zinc-400">Graduação Atual</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-12 h-3 bg-white border border-zinc-800"></span>
              <span className="font-headline font-black text-xl italic uppercase">Faixa Branca</span>
            </div>
          </div>
        </div>
      </section>
      {/*  Bento Grid Stats & Presence  */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/*  Weekly Attendance  */}
        <div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline font-bold text-lg uppercase tracking-tight">Presença Semanal</h3>
              <p className="text-xs text-zinc-500">Meta: 3 treinos/semana</p>
            </div>
            <span className="text-brand-red font-black text-3xl italic">80%</span>
          </div>
          <div className="flex justify-between items-end h-24 gap-2">
            <div className="flex-1 bg-zinc-800/80 h-[40%] group relative">
              <div className="absolute bottom-0 w-full bg-brand-red/10 h-full"></div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase">Seg</span>
            </div>
            <div className="flex-1 bg-zinc-800/80 h-[20%] group relative">
              <div className="absolute bottom-0 w-full bg-brand-red/10 h-full"></div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase">Ter</span>
            </div>
            <div className="flex-1 bg-zinc-800/80 h-[60%] group relative">
              <div className="absolute bottom-0 w-full bg-brand-red/10 h-full"></div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase">Qua</span>
            </div>
            <div className="flex-1 bg-zinc-800/80 h-0 group relative">
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase opacity-40">Qui</span>
            </div>
            <div className="flex-1 bg-zinc-800/80 h-[90%] group relative">
              <div className="absolute bottom-0 w-full bg-brand-red/10 h-full"></div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase">Sex</span>
            </div>
            <div className="flex-1 bg-zinc-800/80 h-0 group relative">
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase opacity-40">Sab</span>
            </div>
          </div>
          <div className="mt-10 pt-4 border-t border-zinc-800/20 flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-red/10"></div>
              <span className="text-[10px] uppercase font-bold text-zinc-400">Realizado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zinc-800/80"></div>
              <span className="text-[10px] uppercase font-bold text-zinc-400">Previsto</span>
            </div>
          </div>
        </div>
        {/*  Next Class  */}
        <div className="bg-brand-red/10 p-6 text-white flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-4xl mb-4">event_available</span>
            <h3 className="font-headline font-black text-2xl italic leading-tight uppercase">Próxima Aula</h3>
            <p className="font-bold text-sm mt-1 uppercase opacity-90">Hoje às 18:30</p>
          </div>
          <div className="mt-8">
            <p className="text-xs uppercase font-black tracking-widest opacity-80">Professor</p>
            <p className="font-headline font-bold text-lg">Ricardo "Cyborg"</p>
          </div>
        </div>
      </section>
      {/*  Technical Evolution Graph (Editorial Style)  */}
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 border-r-4 border-brand-red/20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h3 className="font-headline font-black text-3xl italic uppercase tracking-tighter">Evolução Técnica</h3>
            <p className="text-zinc-400 text-sm">Desempenho comparativo dos últimos 3 meses</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-zinc-800/80 text-[10px] font-bold uppercase tracking-widest border-b-2 border-brand-red/20">Geral</button>
            <button className="px-4 py-2 bg-transparent text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:bg-zinc-900 transition-colors">Técnico</button>
            <button className="px-4 py-2 bg-transparent text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:bg-zinc-900 transition-colors">Físico</button>
          </div>
        </div>
        <div className="relative h-64 w-full flex items-end justify-between px-4">
          {/*  SVG Graph Background  */}
          <svg className="absolute inset-0 w-full h-full px-4" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M 0 80 Q 25 70 50 40 T 100 20" fill="none" stroke="#FF1A1A" strokeWidth="3"></path>
            <path d="M 0 80 Q 25 70 50 40 T 100 20 V 100 H 0 Z" fill="url(#grad1)" opacity="0.1"></path>
            <defs>
              <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" style={{ /* stop-color:#FF1A1A;stop-opacity:1 */ }}></stop>
                <stop offset="100%" style={{ /* stop-color:#FF1A1A;stop-opacity:0 */ }}></stop>
              </linearGradient>
            </defs>
          </svg>
          {/*  Data Nodes  */}
          <div className="z-10 w-3 h-3 bg-white border-2 border-brand-red/20 rounded-full absolute left-4 bottom-[18%]"></div>
          <div className="z-10 w-3 h-3 bg-white border-2 border-brand-red/20 rounded-full absolute left-1/2 bottom-[58%] -translate-x-1/2"></div>
          <div className="z-10 w-3 h-3 bg-white border-2 border-brand-red/20 rounded-full absolute right-4 bottom-[78%]"></div>
          {/*  Grid Lines  */}
          <div className="absolute inset-0 border-b border-zinc-800/10"></div>
          <div className="absolute inset-0 top-1/4 border-b border-zinc-800/10"></div>
          <div className="absolute inset-0 top-1/2 border-b border-zinc-800/10"></div>
          <div className="absolute inset-0 top-3/4 border-b border-zinc-800/10"></div>
        </div>
        <div className="flex justify-between mt-4 text-[10px] font-black uppercase tracking-widest text-zinc-400 px-4">
          <span>Janeiro</span>
          <span>Fevereiro</span>
          <span>Março</span>
        </div>
      </section>
      {/*  Achievements & Professor Notes  */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/*  Last Achievements  */}
        <div className="space-y-4">
          <h3 className="font-headline font-bold text-xl uppercase italic tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-red">military_tech</span>
            Últimas Conquistas
          </h3>
          <div className="space-y-3">
            <div className="bg-zinc-900 p-4 flex items-center gap-4 group hover:bg-zinc-800/80 transition-colors">
              <div className="w-12 h-12 bg-black flex items-center justify-center border border-brand-red/20">
                <span className="material-symbols-outlined text-brand-red" style={{ /* font-variation-settings: 'FILL' 1; */ }}>workspace_premium</span>
              </div>
              <div>
                <p className="font-bold text-sm uppercase">Copa Kids BJJ</p>
                <p className="text-xs text-zinc-400">Medalha de Prata - Mar/2024</p>
              </div>
            </div>
            <div className="bg-zinc-900 p-4 flex items-center gap-4 group hover:bg-zinc-800/80 transition-colors opacity-80">
              <div className="w-12 h-12 bg-black flex items-center justify-center border border-zinc-800">
                <span className="material-symbols-outlined text-zinc-400">star</span>
              </div>
              <div>
                <p className="font-bold text-sm uppercase">1º Grau - Faixa Branca</p>
                <p className="text-xs text-zinc-400">Promovido em Fev/2024</p>
              </div>
            </div>
          </div>
        </div>
        {/*  Professor Notes  */}
        <div className="space-y-4">
          <h3 className="font-headline font-bold text-xl uppercase italic tracking-tight flex items-center gap-2">
            <span className="material-symbols-outlined text-brand-red">chat_bubble</span>
            Observações do Mestre
          </h3>
          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 relative">
            <span className="material-symbols-outlined absolute top-4 right-4 text-brand-red opacity-20 text-4xl">format_quote</span>
            <p className="text-sm italic leading-relaxed text-zinc-100">
              "Lucas demonstrou excelente foco na aula de hoje, especialmente na defesa de guarda. Ele está mais resiliente e ajudando os colegas mais novos. Continue incentivando a frequência!"
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img alt="Professor" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional athletic coach with a serious but kind expression, gym setting background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPJg2e1BqWF8mLEsoyUzQExCYz-eBEiMINLtPvvaXs9wedQPwh096QihCCNlVlZhNSPoV3zaHj8r-nXZ2O4F0aloOFMdABdMo2EXHFhFZPnWWUPFBw_x82DJxuD0Jcu2Nr7k-PA_FiPsQWG07tq-nZXJ1rF84m1A9XFwr39Fl1hPlIPOY93PG_bacvpcVxNjhtuVCbrPG5PvxDV5av1yo_qekfSowgobrCYkt_oWuOPs9l8Yc_3LLr1BgQXcsaDsmzBTAnxTf8QPwS"/>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-brand-red">Prof. Ricardo</p>
                <p className="text-[9px] text-zinc-400 uppercase">Postado há 2 dias</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
