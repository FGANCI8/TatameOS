import { Link } from 'react-router-dom';
import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { useStudentManagement } from '../../../modules/aluno/hooks/useStudentManagement';
import type { Aluno, AtualizarAlunoFinanceiroInput, AtualizarAlunoPerfilInput } from '../../../modules/aluno/types';
import type { PagamentoMetodo } from '../../../modules/pagamentos/types';

function formatDate(value: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
  }).format(value);
}

function faixaTone(faixa: Aluno['faixa']) {
  switch (faixa) {
    case 'Preta':
      return 'bg-zinc-900 text-white border-zinc-700';
    case 'Marrom':
      return 'bg-zinc-900 text-zinc-300 border-zinc-700';
    case 'Roxa':
      return 'bg-zinc-900 text-zinc-300 border-zinc-700';
    case 'Azul':
      return 'bg-zinc-900 text-zinc-300 border-zinc-700';
    default:
      return 'bg-zinc-900 text-zinc-100 border-zinc-700';
  }
}

function financeTone(statusFinanceiro: Aluno['statusFinanceiro']) {
  switch (statusFinanceiro) {
    case 'atrasado':
      return 'border-brand-red/30 bg-brand-red/10 text-brand-red';
    case 'isento':
      return 'border-zinc-700 bg-zinc-900 text-zinc-300';
    default:
      return 'border-zinc-700 bg-zinc-900 text-zinc-300';
  }
}

function financeLabel(statusFinanceiro: Aluno['statusFinanceiro']) {
  switch (statusFinanceiro) {
    case 'atrasado':
      return 'Atrasado';
    case 'isento':
      return 'Isento';
    default:
      return 'Em dia';
  }
}

function currentMonthReference(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

export default function AreaDoProfessorAlunosPage() {
  const {
    studentsWithProgress,
    alunosPromoviveis,
    convitesPendentes,
    metrics,
    loading,
    inviteLoading,
    convitesLoading,
    promoviveisLoading,
    selectedIds,
    graduacaoBatchLoading,
    paymentLoading,
    paymentActionStudentId,
    inviteActionToken,
    studentActionId,
    error,
    success,
    convidarAluno,
    carregarAlunos,
    reenviarConvite,
    revogarConvite,
    atualizarAlunoCompleto,
    obterAlunosPromoviveis,
    toggleSelectedId,
    selecionarTodosPromoviveis,
    limparSelecaoPromocao,
    graduarSelecionados,
    registrarPagamentoAluno,
  } = useStudentManagement();
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isBatchOpen, setIsBatchOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Aluno | null>(null);
  const [selectedPaymentStudent, setSelectedPaymentStudent] = useState<Aluno | null>(null);
  const [activeView, setActiveView] = useState<'todos' | 'promoviveis'>('todos');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [paymentValor, setPaymentValor] = useState('');
  const [paymentMesReferencia, setPaymentMesReferencia] = useState(currentMonthReference());
  const [paymentMetodo, setPaymentMetodo] = useState<PagamentoMetodo>('pix');
  const [localError, setLocalError] = useState<string | null>(null);
  const [editFaixa, setEditFaixa] = useState<Aluno['faixa']>('Branca');
  const [editGrau, setEditGrau] = useState<number>(0);
  const [editStatus, setEditStatus] = useState<Aluno['status']>('Ativo');
  const [editValorMensalidade, setEditValorMensalidade] = useState('0');
  const [editError, setEditError] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);

  const highlights = useMemo(() => ([
    { label: 'Total', value: metrics.total },
    { label: 'Ativos', value: metrics.active },
    { label: 'Inativos', value: metrics.inactive },
    { label: 'Prontos', value: metrics.readyForPromotion },
  ]), [metrics]);

  const studentsToDisplay = activeView === 'promoviveis' ? alunosPromoviveis : studentsWithProgress;
  const selectedPromoviveis = useMemo(() => alunosPromoviveis.filter((student) => selectedIds.includes(student.id)), [alunosPromoviveis, selectedIds]);
  const displayEmptyMessage = activeView === 'promoviveis'
    ? 'Nenhum aluno atingiu 100% de prontidão ainda.'
    : 'Convide o primeiro aluno para começar a popular sua academia.';
  const displayEmptyIcon = activeView === 'promoviveis' ? 'military_tech' : 'group_off';
  const displayTitle = 'Alunos da academia';
  const displaySubtitle = 'Listagem filtrada pelo tenant do professor logado.';

  useEffect(() => {
    if (activeView === 'promoviveis' && alunosPromoviveis.length === 0) {
      void obterAlunosPromoviveis();
    }
  }, [activeView, alunosPromoviveis.length, obterAlunosPromoviveis]);

  const resetForm = () => {
    setNome('');
    setEmail('');
    setLocalError(null);
  };

  const handleInvite = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLocalError(null);

    const ok = await convidarAluno({
      nome,
      email,
    });

    if (ok) {
      resetForm();
      setIsInviteOpen(false);
    } else {
      setLocalError('Não foi possível enviar o convite agora.');
    }
  };

  const openEditModal = (student: Aluno) => {
    setSelectedStudent(student);
    setEditFaixa(student.faixa);
    setEditGrau(student.grau);
    setEditStatus(student.status);
    setEditValorMensalidade(String(student.valorMensalidade ?? 0));
    setEditError(null);
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    setSelectedStudent(null);
    setEditError(null);
  };

  const openPaymentModal = (student: Aluno) => {
    setSelectedPaymentStudent(student);
    setPaymentValor('');
    setPaymentMesReferencia(currentMonthReference());
    setPaymentMetodo('pix');
    setPaymentError(null);
    setIsPaymentOpen(true);
  };

  const closePaymentModal = () => {
    setIsPaymentOpen(false);
    setSelectedPaymentStudent(null);
    setPaymentError(null);
  };

  const handleEditStudent = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedStudent) {
      return;
    }

    setEditError(null);
    const patch: AtualizarAlunoPerfilInput = {
      faixa: editFaixa,
      grau: editGrau,
      status: editStatus,
    };

    const financeiroPatch: AtualizarAlunoFinanceiroInput = {
      valorMensalidade: Number(editValorMensalidade),
    };

    const ok = await atualizarAlunoCompleto(selectedStudent.id, patch, financeiroPatch);
    if (ok) {
      closeEditModal();
    } else {
      setEditError('Não foi possível atualizar o aluno agora.');
    }
  };

  const handlePaymentSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedPaymentStudent) {
      return;
    }

    if (!paymentValor.trim() || Number(paymentValor) <= 0) {
      setPaymentError('Informe um valor vÃ¡lido.');
      return;
    }

    setPaymentError(null);

    const ok = await registrarPagamentoAluno(selectedPaymentStudent.id, {
      valor: Number(paymentValor),
      mesReferencia: paymentMesReferencia,
      metodo: paymentMetodo,
      alunoNome: selectedPaymentStudent.nome,
    });

    if (ok) {
      closePaymentModal();
    } else {
      setPaymentError('NÃ£o foi possÃ­vel registrar o pagamento agora.');
    }
  };

  const handleBatchGraduation = async () => {
    const ok = await graduarSelecionados();
    if (ok) {
      setIsBatchOpen(false);
    }
  };

  return (
    <div className="relative isolate min-h-full overflow-hidden space-y-6 px-4 py-6 md:px-8 lg:px-10">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] [background-size:22px_22px] opacity-20" />
      <section className="rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 shadow-none">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-300">
              Área do Professor
            </span>
            <div>
              <h1 className="text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
                Gestão de Alunos
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-zinc-400">
                Convide novos alunos para o seu tenant e acompanhe a turma já cadastrada.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setIsInviteOpen(true)}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-200 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">person_add</span>
              Convidar aluno
            </button>
            <button
              type="button"
              onClick={() => void carregarAlunos()}
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-white transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">refresh</span>
              Atualizar
            </button>
            <Link
              to="/area-do-professor/historico-de-presencas"
              className="inline-flex items-center gap-2 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-zinc-200 transition duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <span className="material-symbols-outlined text-[18px]">history</span>
              Histórico
            </Link>
            <button
              type="button"
              onClick={() => {
                setActiveView('promoviveis');
                void obterAlunosPromoviveis();
              }}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-black uppercase tracking-[0.18em] transition duration-200 hover:scale-105 ${
                activeView === 'promoviveis'
                  ? 'border border-zinc-700 bg-zinc-900 text-zinc-100'
                  : 'border border-zinc-800 bg-zinc-900/80 text-white hover:bg-zinc-800'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
              Prontos para Graduação
            </button>
            <button
              type="button"
              onClick={() => setActiveView('todos')}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-xs font-black uppercase tracking-[0.18em] transition duration-200 hover:scale-105 ${
                activeView === 'todos'
                  ? 'border border-zinc-700 bg-zinc-900 text-zinc-200'
                  : 'border border-zinc-800 bg-zinc-900/80 text-white hover:bg-zinc-800'
              }`}
            >
              <span className="material-symbols-outlined text-[18px]">groups</span>
              Todos os alunos
            </button>
          </div>
        </div>

        {error && (
          <div className="mt-4 rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-4 rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-300">
            {success}
          </div>
        )}

        <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-4">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">{item.label}</p>
              <p className="mt-2 text-3xl font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {activeView === 'promoviveis' && (
        <section className="rounded-[28px] border border-zinc-800 bg-zinc-900/80 p-4 shadow-none">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-black uppercase tracking-tight text-white">Fila de graduação</h2>
              <p className="text-sm text-[#8f8f95]">Cards focados nos alunos prontos para promoção.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => void obterAlunosPromoviveis()}
                className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-zinc-800"
              >
                Recarregar
              </button>
              <button
                type="button"
                onClick={() => selecionarTodosPromoviveis()}
                className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-zinc-800"
              >
                Marcar todos
              </button>
              <button
                type="button"
                onClick={() => limparSelecaoPromocao()}
                className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-zinc-800"
              >
                Limpar seleção
              </button>
              <button
                type="button"
                disabled={selectedIds.length === 0}
                onClick={() => setIsBatchOpen(true)}
                className="rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-zinc-100 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Graduar Selecionados ({selectedIds.length})
              </button>
            </div>
          </div>

          {promoviveisLoading ? (
            <div className="space-y-3">
              {[0, 1, 2].map((index) => (
                <div key={index} className="h-40 animate-pulse rounded-3xl border border-zinc-800 bg-zinc-900/80" />
              ))}
            </div>
          ) : studentsToDisplay.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 text-center">
              <span className="material-symbols-outlined text-4xl text-brand-red">military_tech</span>
              <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhum aluno pronto ainda</p>
              <p className="mt-2 text-sm text-[#8f8f95]">
                Assim que alguém atingir 100% de prontidão, ele aparecerá aqui para a cerimônia.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {studentsToDisplay.map((student) => (
                <article key={student.id} className="rounded-3xl border border-zinc-800 bg-zinc-950 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={selectedIds.includes(student.id)}
                        onChange={() => toggleSelectedId(student.id)}
                        className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-zinc-300 focus:ring-zinc-300"
                      />
                      <div>
                      <p className="text-lg font-black text-white">{student.nome}</p>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#8f8f95]">ID: {student.id}</p>
                      </div>
                    </label>
                    <button
                      type="button"
                      onClick={() => openEditModal(student)}
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-100 transition hover:bg-zinc-800"
                    >
                      <span className="material-symbols-outlined text-[16px]">workspace_premium</span>
                      Registrar Promoção
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${faixaTone(student.faixa)}`}>
                      {student.faixa} {student.grau > 0 ? `G${student.grau}` : ''}
                    </span>
                    <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                      {student.prontidaoGraduacao.label}
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#8f8f95]">
                      <span>Prontidão</span>
                      <span>{student.prontidaoGraduacao.percentualConclusao.toFixed(1)}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-zinc-300 transition-all"
                        style={{ width: `${Math.min(100, student.prontidaoGraduacao.percentualConclusao)}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-400">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#8f8f95]">Horas acumuladas</span>
                      <strong className="text-white">{student.horasTotais.toFixed(1)}h</strong>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#8f8f95]">Próximo grau</span>
                      <strong className="text-white">
                        {student.prontidaoGraduacao.proximoGrau ? `G${student.prontidaoGraduacao.proximoGrau}` : 'Faixa máxima'}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[#8f8f95]">Restante</span>
                      <strong className="text-white">
                        {student.prontidaoGraduacao.proximoGrau ? `${student.prontidaoGraduacao.horasRestantes.toFixed(1)}h` : '0.0h'}
                      </strong>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {isBatchOpen && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-3xl rounded-[28px] border border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 shadow-none">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Confirmação em lote</p>
                <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Graduar selecionados</h3>
                <p className="mt-2 text-sm text-[#8f8f95]">
                  Revise os nomes antes de aplicar a promoção. A escrita será atômica no Firestore.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsBatchOpen(false)}
                className="rounded-full border border-zinc-800 bg-zinc-900/80 p-2 text-white transition hover:bg-zinc-800"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">
                  Selecionados: {selectedPromoviveis.length}
                </p>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">
                  Limite seguro: 500 operações
                </p>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {selectedPromoviveis.map((student) => (
                  <div key={student.id} className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-4">
                    <p className="font-black text-white">{student.nome}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#8f8f95]">
                      {student.faixa} {student.grau > 0 ? `G${student.grau}` : ''} • {student.horasTotais.toFixed(1)}h
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                        {student.prontidaoGraduacao.label}
                      </span>
                      <span className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                        {student.prontidaoGraduacao.percentualConclusao.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsBatchOpen(false)}
                className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800"
              >
                Cancelar
              </button>
              <button
                type="button"
                disabled={graduacaoBatchLoading}
                onClick={() => void handleBatchGraduation()}
                className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="material-symbols-outlined text-[18px]">{graduacaoBatchLoading ? 'hourglass_top' : 'workspace_premium'}</span>
                {graduacaoBatchLoading ? 'Graduando...' : 'Confirmar graduação'}
              </button>
            </div>
          </div>
        </div>
      )}

      <section className="rounded-[28px] border border-zinc-800 bg-zinc-900/80 p-4 shadow-none">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-white">Convites pendentes</h2>
            <p className="text-sm text-[#8f8f95]">Somente convites do tenant atual e role de aluno.</p>
          </div>
          <button
            type="button"
            onClick={() => void carregarAlunos()}
            className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-white transition hover:bg-zinc-800"
          >
            Sincronizar
          </button>
        </div>

        {convitesLoading ? (
          <div className="space-y-3">
            {[0, 1].map((index) => (
              <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-900/80" />
            ))}
          </div>
        ) : convitesPendentes.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 text-center">
            <span className="material-symbols-outlined text-4xl text-brand-red">mark_email_unread</span>
            <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhum convite pendente</p>
            <p className="mt-2 text-sm text-[#8f8f95]">
              Quando houver alunos convidados ainda não ativados, eles aparecerão aqui.
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {convitesPendentes.map((convite) => (
              <div key={convite.id} className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <p className="text-sm font-black text-white">{convite.inviteeName || convite.email}</p>
                    <p className="text-xs text-[#8f8f95]">{convite.email}</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[#8f8f95]">
                      Expira em {formatDate(new Date(convite.expiresAt))}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      disabled={inviteActionToken === convite.token}
                      onClick={() => void reenviarConvite(convite.token)}
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span className="material-symbols-outlined text-[16px]">send</span>
                      {inviteActionToken === convite.token ? 'Processando' : 'Reenviar'}
                    </button>
                    <button
                      type="button"
                      disabled={inviteActionToken === convite.token}
                      onClick={() => void revogarConvite(convite.token)}
                      className="inline-flex items-center gap-2 rounded-xl border border-brand-red/30 bg-brand-red/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red transition hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <span className="material-symbols-outlined text-[16px]">block</span>
                      Revogar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="rounded-[28px] border border-zinc-800 bg-zinc-900/80 p-4 shadow-none">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-black uppercase tracking-tight text-white">Alunos da academia</h2>
            <p className="text-sm text-[#8f8f95]">Listagem filtrada pelo tenant do professor logado.</p>
          </div>
        </div>

        {loading ? (
          <div className="space-y-3">
            {[0, 1, 2].map((index) => (
              <div key={index} className="h-20 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-900/80" />
            ))}
          </div>
        ) : studentsWithProgress.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 text-center">
            <span className="material-symbols-outlined text-4xl text-brand-red">group_off</span>
            <p className="mt-3 text-lg font-black uppercase tracking-tight text-white">Nenhum aluno cadastrado</p>
            <p className="mt-2 text-sm text-[#8f8f95]">
              Convide o primeiro aluno para começar a popular sua academia.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">
                  <th className="px-4 py-2">Aluno</th>
                  <th className="px-4 py-2">Faixa</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Financeiro</th>
                  <th className="px-4 py-2">E-mail</th>
                  <th className="px-4 py-2">Cadastro</th>
                  <th className="px-4 py-2">Prontidão</th>
                  <th className="px-4 py-2 text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {studentsWithProgress.map((student) => (
                  <tr key={student.id} className="rounded-2xl border border-zinc-800 bg-zinc-900/80">
                    <td className="px-4 py-4">
                      <div className="font-bold text-white">{student.nome}</div>
                      <div className="text-[11px] text-[#8f8f95]">ID: {student.id}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${faixaTone(student.faixa)}`}>
                        {student.faixa} {student.grau > 0 ? `G${student.grau}` : ''}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${student.status === 'Ativo' ? 'border-zinc-700 bg-zinc-900 text-zinc-300' : 'border-zinc-500/30 bg-zinc-500/10 text-zinc-200'}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="space-y-2">
                        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${financeTone(student.statusFinanceiro)}`}>
                          {financeLabel(student.statusFinanceiro)}
                        </span>
                        <p className="text-[11px] text-[#8f8f95]">
                          {typeof student.vencimentoMensalidade === 'number'
                            ? `Vence no dia ${student.vencimentoMensalidade}`
                            : 'Vencimento não definido'}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-zinc-400">{student.email}</td>
                    <td className="px-4 py-4 text-sm text-zinc-400">{formatDate(student.dataCadastro)}</td>
                    <td className="px-4 py-4">
                      <div className="min-w-[180px] space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] ${
                            student.prontidaoGraduacao.status === 'faixa_maxima'
                              ? 'border-zinc-700 bg-zinc-900 text-zinc-300'
                              : student.prontidaoGraduacao.status === 'pronto'
                                ? 'border-zinc-700 bg-zinc-900 text-zinc-300'
                                : student.prontidaoGraduacao.status === 'quase_pronto'
                                  ? 'border-zinc-700 bg-zinc-900 text-zinc-300'
                                  : 'border-zinc-800 bg-zinc-900/80 text-white'
                          }`}>
                            {student.prontidaoGraduacao.label}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8f8f95]">
                            {student.prontidaoGraduacao.percentualConclusao.toFixed(1)}%
                          </span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
                          <div
                            className={`h-full rounded-full transition-all ${
                              student.prontidaoGraduacao.status === 'faixa_maxima'
                                ? 'bg-zinc-400'
                                : student.prontidaoGraduacao.status === 'pronto'
                                  ? 'bg-zinc-300'
                                  : student.prontidaoGraduacao.status === 'quase_pronto'
                                    ? 'bg-zinc-300'
                                    : 'bg-brand-red'
                            }`}
                            style={{ width: `${Math.min(100, student.prontidaoGraduacao.percentualConclusao)}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-[#8f8f95]">
                          {student.prontidaoGraduacao.proximoGrau
                            ? `Próximo grau: G${student.prontidaoGraduacao.proximoGrau} | ${student.prontidaoGraduacao.horasRestantes.toFixed(1)}h restantes`
                            : 'Faixa máxima alcançada'}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => openPaymentModal(student)}
                          disabled={paymentLoading && paymentActionStudentId === student.id}
                          className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-200 transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <span className="material-symbols-outlined text-[16px]">
                            {paymentLoading && paymentActionStudentId === student.id ? 'hourglass_top' : 'payments'}
                          </span>
                          {paymentLoading && paymentActionStudentId === student.id ? 'Processando' : 'Pagamento'}
                        </button>
                        <button
                          type="button"
                          onClick={() => openEditModal(student)}
                          className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/80 px-3 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800"
                        >
                          <span className="material-symbols-outlined text-[16px]">edit</span>
                          Gerenciar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {isInviteOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[28px] border border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 shadow-none">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Novo convite</p>
                <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Convidar aluno</h3>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsInviteOpen(false);
                  resetForm();
                }}
                className="rounded-full border border-zinc-800 bg-zinc-900/80 p-2 text-white transition hover:bg-zinc-800"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <form onSubmit={(event) => void handleInvite(event)} className="mt-5 space-y-4">
              <div>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Nome</label>
                <input
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-brand-red/40"
                  placeholder="Nome do aluno"
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">E-mail</label>
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-brand-red/40"
                  placeholder="aluno@academia.com"
                  type="email"
                />
              </div>

              {localError && (
                <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
                  {localError}
                </div>
              )}

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsInviteOpen(false);
                    resetForm();
                  }}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={inviteLoading}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="material-symbols-outlined text-[18px]">{inviteLoading ? 'hourglass_top' : 'send'}</span>
                  {inviteLoading ? 'Enviando...' : 'Enviar convite'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isPaymentOpen && selectedPaymentStudent && (
        <div className="fixed inset-0 z-[125] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[28px] border border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 shadow-none">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Financeiro</p>
                <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">Registrar pagamento</h3>
                <p className="mt-2 text-sm text-[#8f8f95]">
                  {selectedPaymentStudent.nome} • {selectedPaymentStudent.email}
                </p>
              </div>
              <button
                type="button"
                onClick={closePaymentModal}
                className="rounded-full border border-zinc-800 bg-zinc-900/80 p-2 text-white transition hover:bg-zinc-800"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <form onSubmit={(event) => void handlePaymentSubmit(event)} className="mt-5 space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Valor</label>
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={paymentValor}
                    onChange={(event) => setPaymentValor(event.target.value)}
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-brand-red/40"
                    placeholder="150.00"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Mês referência</label>
                  <input
                    type="month"
                    value={paymentMesReferencia}
                    onChange={(event) => setPaymentMesReferencia(event.target.value)}
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Método</label>
                  <select
                    value={paymentMetodo}
                    onChange={(event) => setPaymentMetodo(event.target.value as PagamentoMetodo)}
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                  >
                    <option value="pix">PIX</option>
                    <option value="dinheiro">Dinheiro</option>
                    <option value="cartao">Cartão</option>
                    <option value="transferencia">Transferência</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>
              </div>

              {paymentError && (
                <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
                  {paymentError}
                </div>
              )}

              <div className="rounded-2xl border border-zinc-700 bg-zinc-900 px-4 py-3 text-sm text-zinc-200">
                Ao confirmar, o pagamento será registrado e o status financeiro do aluno será atualizado para <strong>em dia</strong>.
              </div>

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closePaymentModal}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={paymentLoading && paymentActionStudentId === selectedPaymentStudent.id}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {paymentLoading && paymentActionStudentId === selectedPaymentStudent.id ? 'hourglass_top' : 'payments'}
                  </span>
                  {paymentLoading && paymentActionStudentId === selectedPaymentStudent.id ? 'Registrando...' : 'Confirmar pagamento'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isEditOpen && selectedStudent && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-4 py-8 backdrop-blur-sm">
          <div className="w-full max-w-xl rounded-[28px] border border-zinc-800 rounded-[28px] border border-zinc-800/80 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8 md:p-8 shadow-none">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Gerenciar aluno</p>
                <h3 className="mt-1 text-2xl font-black uppercase tracking-tight text-white">{selectedStudent.nome}</h3>
              </div>
              <button
                type="button"
                onClick={closeEditModal}
                className="rounded-full border border-zinc-800 bg-zinc-900/80 p-2 text-white transition hover:bg-zinc-800"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-xs text-zinc-400">
              <div className="flex flex-wrap gap-4">
                <span><strong className="text-white">ID:</strong> {selectedStudent.id}</span>
                <span><strong className="text-white">E-mail:</strong> {selectedStudent.email}</span>
                <span><strong className="text-white">Tenant:</strong> {selectedStudent.tenantId}</span>
                <span><strong className="text-white">Mensalidade:</strong> {Number(selectedStudent.valorMensalidade || 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
              </div>
            </div>

            <form onSubmit={(event) => void handleEditStudent(event)} className="mt-5 space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Faixa</label>
                  <select
                    value={editFaixa}
                    onChange={(event) => setEditFaixa(event.target.value as Aluno['faixa'])}
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                  >
                    <option value="Branca">Branca</option>
                    <option value="Azul">Azul</option>
                    <option value="Roxa">Roxa</option>
                    <option value="Marrom">Marrom</option>
                    <option value="Preta">Preta</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Grau</label>
                  <input
                    type="number"
                    min={0}
                    max={4}
                    value={editGrau}
                    onChange={(event) => setEditGrau(Number(event.target.value))}
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Status</label>
                  <select
                    value={editStatus}
                    onChange={(event) => setEditStatus(event.target.value as Aluno['status'])}
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                  >
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                    <option value="Suspenso">Suspenso</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-black uppercase tracking-[0.25em] text-[#8f8f95]">Mensalidade</label>
                  <input
                    type="number"
                    min={0}
                    step="0.01"
                    value={editValorMensalidade}
                    onChange={(event) => setEditValorMensalidade(event.target.value)}
                    className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-white outline-none transition focus:border-brand-red/40"
                    placeholder="0.00"
                  />
                </div>
              </div>

              {editError && (
                <div className="rounded-2xl border border-brand-red/30 bg-brand-red/10 px-4 py-3 text-sm text-brand-red">
                  {editError}
                </div>
              )}

              <div className="flex flex-wrap justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/80 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={studentActionId === selectedStudent.id}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-red px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-white transition hover:bg-brand-red/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="material-symbols-outlined text-[18px]">{studentActionId === selectedStudent.id ? 'hourglass_top' : 'save'}</span>
                  {studentActionId === selectedStudent.id ? 'Salvando...' : 'Salvar alterações'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}







