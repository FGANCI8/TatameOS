
export default function NotificaEs() {
  return (
    <main className="flex-grow pt-24 pb-32 px-6 max-w-2xl mx-auto w-full">
      <div className="flex flex-col gap-8">
        {/*  Header Section  */}
        <div className="flex justify-between items-end border-l-4 border-brand-red/20 pl-4 py-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">Telemetry // 04</span>
            <h2 className="text-4xl font-black font-lexend uppercase tracking-tighter leading-none mt-1">Alertas</h2>
          </div>
          <button className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-100 transition-colors">
            Limpar Tudo
          </button>
        </div>
        {/*  Notifications Feed  */}
        <div className="flex flex-col gap-3">
          {/*  Notification: New Technique (Unread)  */}
          <div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex gap-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-red/10"></div>
            <div className="flex-shrink-0 w-12 h-12 bg-zinc-800/80 flex items-center justify-center">
              <span className="material-symbols-outlined text-brand-red" style={{ /* font-variation-settings: 'FILL' 1; */ }}>play_circle</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red">Novo Conteúdo</span>
                <span className="text-[10px] font-medium text-zinc-500">AGORA</span>
              </div>
              <h3 className="text-lg font-bold font-lexend leading-tight uppercase mb-1">Nova Técnica Liberada: Kimeta</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Aprenda os detalhes biomecânicos da finalização Kimeta com o Mestre Carlos.</p>
              <div className="mt-4 flex gap-4">
                <button className="bg-brand-red/10 text-white px-4 py-2 text-[10px] font-black uppercase tracking-widest active:scale-95 transition-transform">Assistir Agora</button>
              </div>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-brand-red/10 rounded-full shadow-[0_0_10px_rgba(255,26,26,0.6)]"></div>
          </div>
          {/*  Notification: Comment (Unread)  */}
          <div className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 flex gap-6 relative group">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-red/10"></div>
            <div className="flex-shrink-0 w-12 h-12 overflow-hidden bg-zinc-800/80">
              <img className="w-full h-full object-cover" data-alt="Professional profile photo of an older man with a grey beard and authoritative look in a gym setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG1zFSPRsSz0GPzpYzUlc_9nfEMaHRKtDwP5GPUqs8ZJivRNEziVAPJEaubTiMYuGX8tkmmTTBDmv8JlueKJ1TtVQvaiU8lTkoVZ7B6TFCnX3iqxTMHNqzPVYmqzPBr6gGxc37U6kb-nZ2gQrgABYSnEOfcMJc1gxsVPhNMwH31Ywd2_CplFz5yWxYtQORGKd2nippoyjozw-fwikXUPgSMcigZyduiw0QiUQi0YB1qQANLQai3_Rid3fSrdllWj0yHaLJci23Jjkn"/>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">Comunidade</span>
                <span className="text-[10px] font-medium text-zinc-500">2H ATRÁS</span>
              </div>
              <h3 className="text-lg font-bold font-lexend leading-tight uppercase mb-1">Professor Silva comentou no seu treino</h3>
              <p className="text-sm text-zinc-500 leading-relaxed italic">"Excelente ajuste no quadril durante a transição. Continue focando na pressão..."</p>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-brand-red/10 rounded-full shadow-[0_0_10px_rgba(255,26,26,0.6)]"></div>
          </div>
          {/*  Notification: Reminder (Read)  */}
          <div className="bg-zinc-950 border border-white/5 p-6 flex gap-6 group opacity-80">
            <div className="flex-shrink-0 w-12 h-12 bg-zinc-900/80 flex items-center justify-center">
              <span className="material-symbols-outlined text-zinc-400" style={{ /* font-variation-settings: 'FILL' 0; */ }}>calendar_today</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Cronograma</span>
                <span className="text-[10px] font-medium text-zinc-500">5H ATRÁS</span>
              </div>
              <h3 className="text-lg font-bold font-lexend leading-tight uppercase mb-1">Lembrete: Treino de Amanhã</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Seu treino de Graduados começa às 07:00. Não esqueça de confirmar sua presença.</p>
            </div>
          </div>
          {/*  Notification: Achievement (Read)  */}
          <div className="bg-zinc-950 border border-white/5 p-6 flex gap-6 group opacity-80">
            <div className="flex-shrink-0 w-12 h-12 bg-zinc-900/80 flex items-center justify-center">
              <span className="material-symbols-outlined text-zinc-400" style={{ /* font-variation-settings: 'FILL' 1; */ }}>military_tech</span>
            </div>
            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">Conquista</span>
                <span className="text-[10px] font-medium text-zinc-500">1 DIA ATRÁS</span>
              </div>
              <h3 className="text-lg font-bold font-lexend leading-tight uppercase mb-1">Sequência de 10 Dias</h3>
              <p className="text-sm text-zinc-500 leading-relaxed">Você manteve sua consistência por 10 dias seguidos. Performance de elite detectada.</p>
            </div>
          </div>
        </div>
        {/*  Bento Stats Snippet  */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="bg-zinc-900 p-4 flex flex-col justify-between aspect-square border-r-2 border-b-2 border-brand-red/20">
            <span className="material-symbols-outlined text-brand-red" style={{ /* font-variation-settings: 'FILL' 1; */ }}>notifications_active</span>
            <div>
              <div className="text-4xl font-black font-lexend leading-none">02</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-300 mt-1">Não Lidas</div>
            </div>
          </div>
          <div className="bg-zinc-950/60 p-4 flex flex-col justify-between aspect-square">
            <span className="material-symbols-outlined text-zinc-300" style={{ /* font-variation-settings: 'FILL' 0; */ }}>history</span>
            <div>
              <div className="text-4xl font-black font-lexend leading-none">24</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mt-1">Arquivadas</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
