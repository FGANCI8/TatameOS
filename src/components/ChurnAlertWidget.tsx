import { Link } from 'react-router-dom';
import type { AlunoEmRiscoEvasao } from '../modules/aluno/types';

function formatCurrency(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function buildContactMessage(aluno: AlunoEmRiscoEvasao) {
  const monthLabel = aluno.ultimaPresencaEm
    ? aluno.ultimaPresencaEm.toLocaleDateString('pt-BR')
    : 'sem presença recente';

  return `Olá, ${aluno.nome}. Passando para lembrar que sua mensalidade está em aberto e você está há ${aluno.diasSemPresenca} dia(s) sem presença (${monthLabel}). Podemos te ajudar a retomar sua rotina?`;
}

interface ChurnAlertWidgetProps {
  alunos: AlunoEmRiscoEvasao[];
  loading?: boolean;
  emptyActionLabel?: string;
  emptyActionTo?: string;
}

export function ChurnAlertWidget({
  alunos,
  loading = false,
  emptyActionLabel = 'Abrir financeiro',
  emptyActionTo = '/area-do-professor/financeiro',
}: ChurnAlertWidgetProps) {
  return (
    <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 shadow-none md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Alerta de evasão</p>
          <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Alunos em risco</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Alunos ativos com mensalidade atrasada e sem presença nos últimos 15 dias.
          </p>
        </div>
        <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
          {alunos.length} alerta(s)
        </span>
      </div>

      {loading ? (
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="h-32 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-800/60" />
          ))}
        </div>
      ) : alunos.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-6 text-sm text-zinc-400">
          <p>Nenhum aluno em risco detectado neste momento.</p>
          {emptyActionTo ? (
            <Link
              to={emptyActionTo}
              className="mt-4 inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
            >
              <span className="material-symbols-outlined text-[18px]">account_balance</span>
              {emptyActionLabel}
            </Link>
          ) : null}
        </div>
      ) : (
        <div className="mt-6 space-y-3">
          {alunos.map((aluno) => {
            const chargeMessage = buildContactMessage(aluno);
            const mailtoHref = `mailto:${aluno.email}?subject=${encodeURIComponent(
              `Acompanhamento de rotina - ${aluno.nome}`,
            )}&body=${encodeURIComponent(chargeMessage)}`;

            return (
              <article key={aluno.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-sm font-black uppercase tracking-tight text-white">{aluno.nome}</h4>
                      <span className="rounded-full border border-brand-red/20 bg-brand-red/10 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                        {aluno.statusFinanceiro}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-zinc-400">
                      {aluno.faixa} {aluno.grau} · {formatCurrency(aluno.valorMensalidade)}
                    </p>
                    <p className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">{aluno.motivo}</p>
                  </div>

                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition duration-200 hover:scale-105 hover:bg-brand-red/20"
                  >
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    Contato rápido
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
