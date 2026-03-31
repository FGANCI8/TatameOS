import { Link } from 'react-router-dom';
import { NotificationCenterWidget } from '../../components/dashboard/NotificationCenterWidget';
import { GymSelector } from '../../components/dashboard/GymSelector';
import { AlunosWidget } from '../../components/dashboard/widgets/AlunosWidget';
import { FinanceiroWidget } from '../../components/dashboard/widgets/FinanceiroWidget';
import { TreinosWidget } from '../../components/dashboard/widgets/TreinosWidget';

export default function ProfessorDashboardContent() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Painel do professor
            </span>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">Área do professor</h1>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
                Visão executiva da academia com feedbacks, avisos, financeiro e alertas em tempo real.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/area-do-professor/feedbacks"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-300 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">post_add</span>
              Revisar feedbacks
            </Link>
            <Link
              to="/area-do-professor/avisos"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.22em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">campaign</span>
              Mural de avisos
            </Link>
          </div>
        </div>
      </section>

      <GymSelector />

      <NotificationCenterWidget
        title="Central de alertas do professor"
        subtitle="Marcos de prontidão, convites e avisos da sua turma"
        emptyActionLabel="Criar novo aviso"
        emptyActionTo="/area-do-professor/avisos"
      />

      <div className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <FinanceiroWidget />
        <TreinosWidget />
      </div>

      <AlunosWidget />

      <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Painel ativo</span>
          <div className="mt-2 text-4xl font-black text-white">OK</div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Academia</span>
          <div className="mt-2 text-4xl font-black text-white">1</div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Widgets</span>
          <div className="mt-2 text-4xl font-black text-white">3</div>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5">
          <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Status</span>
          <div className="mt-2 text-4xl font-black text-white">Live</div>
        </div>
      </section>
    </div>
  );
}
