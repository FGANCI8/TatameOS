import { useAluno } from '../../modules/aluno/hooks/useAluno';
import { useFrequenciaAluno } from '../../modules/frequencia/hooks/useFrequenciaAluno';
import { useTreino } from '../../hooks/useTreino';

export default function PerfilDoAluno() {
  const { perfil, loading } = useAluno();
  const { painel: frequenciaPainel } = useFrequenciaAluno();
  const { data: treinos } = useTreino();

  const getBeltClass = (faixa: string) => {
    switch(faixa) {
      case 'Azul': return 'bjj-belt-blue';
      case 'Roxa': return 'bjj-belt-purple';
      case 'Marrom': return 'bjj-belt-brown';
      case 'Preta': return 'bjj-belt-black';
      default: return 'bjj-belt-white';
    }
  };

  const sequenciaAtual = frequenciaPainel?.resumo?.sequenciaAtual ?? 0;
  const totalTreinos = treinos?.length ?? 0;

  // Calculate this month's hours vs last month's (simplified)
  const horasAtuais = perfil?.horasTotais ?? 0;

  if (loading && !perfil) {
     return <div className="p-20 text-center font-headline animate-pulse">CARREGANDO PERFIL...</div>;
  }

  return (
    <main className="mt-20 px-6 max-w-5xl mx-auto">
      {/*  Profile Hero Section  */}
      <section className="relative flex flex-col md:flex-row gap-8 items-start mb-12">
        <div className="relative group">
          <div className="w-40 h-40 bg-zinc-900 border-l-4 border-brand-red/20 overflow-hidden">
            <img 
              alt={perfil?.nome || 'Atleta'} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
              src={perfil?.avatarUrl || "https://lh3.googleusercontent.com/aida-public/AB6AXuAzilNZ240DEZ6upE-v_5LfzrsBM9hviKsZzHPzwqnSAhynJGC519bgtp2OTFQxH23f5DgFiR-HEgw_80RFZnmyWfDUfAKgXAktlun7n_vyPoSJbrDLUolcC_kEE2wCQYt-9g5KMZwb9JLV-6DrnUzWEXVc-f79o7UIsWOSW6AYzitB0XW_XCL6oCs6I1hsca9VEVmMz4vW9EPolf13rPIx7C78DmnC9KWVY_FY86AXfxOugtNWM65F_upAKmGwUuqXZrqyiMDpHglA"}
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-brand-red/10 px-3 py-1 flex items-center cursor-pointer">
            <span className="material-symbols-outlined text-[14px] mr-1">edit</span>
            <span className="font-headline font-bold text-[10px] uppercase tracking-widest text-white">EDITAR</span>
          </div>
        </div>
        <div className="flex-1 space-y-4">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.3em] text-zinc-500">ALUNO {perfil?.status || 'ATIVO'}</span>
            <h2 className="font-headline text-5xl font-black uppercase italic leading-none text-zinc-100">{perfil?.nome || 'Atleta'}</h2>
          </div>
          {/*  Belt Section  */}
          <div className="flex items-center gap-4">
            <div className={`relative w-48 h-10 ${getBeltClass(perfil?.faixa || 'Branca')} flex items-center px-1 border border-white/10 shadow-lg`}>
              <div className="absolute right-0 w-12 h-full bg-black flex flex-col justify-center items-center gap-1 border-l border-white/20">
                {/*  Stripes (Graus)  */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className={`w-8 h-1 bg-white/90 ${i >= (perfil?.grau || 0) ? 'opacity-20' : ''}`}></div>
                ))}
              </div>
              <span className="text-white font-headline font-black text-xs uppercase tracking-tighter px-4">
                FAIXA {perfil?.faixa || 'BRANCA'} • {perfil?.grau || 0} GRAUS
              </span>
            </div>
            <div className="bg-zinc-900 px-4 py-2">
              <span className="block font-label text-[10px] text-zinc-400 uppercase">Início</span>
              <span className="font-headline font-bold text-brand-red uppercase">
                {perfil?.dataCadastro ? new Date(perfil.dataCadastro).getFullYear() : '—'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/*  Stats Bento Grid  */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        {/*  Main Metric: Tatami Hours  */}
        <div className="md:col-span-2 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between group hover:bg-zinc-900/80 transition-colors border-l border-brand-red/20">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-zinc-400">Tempo de Tatame</span>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-headline text-7xl font-black text-zinc-100 group-hover:text-brand-red transition-colors">{horasAtuais}</span>
            <span className="font-headline text-xl text-zinc-400">HORAS</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-zinc-400">
            <span className="material-symbols-outlined">fitness_center</span>
            <span className="font-label text-xs font-bold uppercase tracking-widest">{totalTreinos} treinos registrados</span>
          </div>
        </div>
        {/*  Streak Counter  */}
        <div className="bg-zinc-800/80 p-6 flex flex-col justify-between border-t border-brand-red/30">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-zinc-400">Sequência</span>
          <div>
            <span className="font-headline text-5xl font-black text-white">{sequenciaAtual}</span>
            <p className="font-label text-[10px] text-zinc-400 uppercase mt-1">DIAS SEGUIDOS</p>
          </div>
          <div className="flex gap-1 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className={`w-full h-1 ${i < Math.min(sequenciaAtual, 5) ? 'bg-brand-red/10' : 'bg-zinc-900/80'}`}></div>
            ))}
          </div>
        </div>
        {/*  Total Sessions  */}
        <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 flex flex-col justify-between border-r border-white/5">
          <span className="font-label text-xs font-bold uppercase tracking-widest text-zinc-400">Sessões totais</span>
          <div>
            <span className="font-headline text-5xl font-black text-zinc-300">{totalTreinos}</span>
            <p className="font-label text-[10px] text-zinc-400 uppercase mt-1">REGISTRADAS</p>
          </div>
          <span className="material-symbols-outlined text-zinc-300">military_tech</span>
        </div>
      </section>

      {/*  Current Journey Section  */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
        {/*  Active Trail  */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="font-headline text-2xl font-black uppercase italic text-zinc-100 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red/10"></span>
            Trilha Progressiva
          </h3>
          <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px]">rebase_edit</span>
            </div>
            <div className="relative z-10">
              <span className="font-label text-xs text-brand-red font-bold tracking-widest uppercase">NÍVEL ATUAL</span>
              <h4 className="font-headline text-4xl font-black uppercase mt-2 mb-6">Frequência e Consistência</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="font-label text-xs uppercase text-zinc-400">Horas para o próximo grau</span>
                  <span className="font-headline text-xl font-bold text-zinc-100">
                    {horasAtuais}<span className="text-zinc-400 text-sm ml-1">/50h</span>
                  </span>
                </div>
                {/*  Performance Progress Bar  */}
                <div className="h-4 bg-zinc-950 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#bdc2ff] to-[#a8afff] relative transition-all duration-1000" 
                    style={{ width: `${Math.min((horasAtuais / 50) * 100, 100)}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Recent Achievements / Side List  */}
        <div className="space-y-6">
          <h3 className="font-headline text-2xl font-black uppercase italic text-zinc-100 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-brand-red/10"></span>
            Professor Insights
          </h3>
          <div className="space-y-3">
            <div className="bg-zinc-950/60 p-4 border-l-2 border-zinc-800">
              <p className="font-body text-sm italic text-zinc-100">"Conforme suas horas aumentam, foque em registrar as técnicas que você menos usa no rola."</p>
              <span className="block mt-2 font-label text-[10px] text-zinc-300 font-bold uppercase tracking-tighter">— Sistema IA</span>
            </div>
            <div className="bg-zinc-950/60 p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-800/80 flex items-center justify-center">
                <span className="material-symbols-outlined text-brand-red">fitness_center</span>
              </div>
              <div>
                <span className="block font-headline font-bold text-xs uppercase">CONTATO ACADEMIA</span>
                <span className="block font-label text-[10px] text-zinc-400">{perfil?.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
