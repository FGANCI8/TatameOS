import { useCallback, useEffect, useMemo, useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { alunoService, convitesService, pagamentosService } from '../../instances';
import type { Aluno, AlunoComProntidao, AtualizarAlunoFinanceiroInput, AtualizarAlunoPerfilInput } from '../types';
import type { ConvidarAlunoInput, ConviteListItem } from '../../convites/types';
import type { PagamentoMetodo } from '../../pagamentos/types';

export function useStudentManagement() {
  const { tenantId, isProfessorOrAdmin } = useAuth();
  const [students, setStudents] = useState<Aluno[]>([]);
  const [loading, setLoading] = useState(true);
  const [inviteLoading, setInviteLoading] = useState(false);
  const [convitesPendentes, setConvitesPendentes] = useState<ConviteListItem[]>([]);
  const [convitesLoading, setConvitesLoading] = useState(true);
  const [inviteActionToken, setInviteActionToken] = useState<string | null>(null);
  const [studentActionId, setStudentActionId] = useState<string | null>(null);
  const [alunosPromoviveis, setAlunosPromoviveis] = useState<AlunoComProntidao[]>([]);
  const [promoviveisLoading, setPromoviveisLoading] = useState(false);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [graduacaoBatchLoading, setGraduacaoBatchLoading] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentActionStudentId, setPaymentActionStudentId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const carregarAlunos = useCallback(async () => {
    if (!tenantId || !isProfessorOrAdmin) {
      setStudents([]);
      setError('Apenas professor ou admin pode acessar a gestão de alunos.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const financeCheck = await alunoService.verificarInadimplencia(tenantId);
      if (!financeCheck.success) {
        setError(financeCheck.error || 'Falha ao verificar inadimplência.');
        setStudents([]);
        return;
      }

      const result = await alunoService.listarTodosAlunos(tenantId);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao listar alunos.');
        setStudents([]);
        return;
      }

      setStudents(result.data);
    } catch (err: any) {
      setError(err?.message || 'Falha ao listar alunos.');
    } finally {
      setLoading(false);
    }
  }, [isProfessorOrAdmin, tenantId]);

  const obterAlunosPromoviveis = useCallback(async () => {
    if (!tenantId || !isProfessorOrAdmin) {
      setAlunosPromoviveis([]);
      return false;
    }

    setPromoviveisLoading(true);
    setError(null);

    try {
      const result = await alunoService.listarAlunosPromoviveis(tenantId);
      if (!result.success || !result.data) {
        setAlunosPromoviveis([]);
        setError(result.error || 'Falha ao listar alunos promovíveis.');
        return false;
      }

      setAlunosPromoviveis(result.data);
      return true;
    } finally {
      setPromoviveisLoading(false);
    }
  }, [isProfessorOrAdmin, tenantId]);

  const toggleSelectedId = useCallback((alunoId: string) => {
    setSelectedIds((current) => (
      current.includes(alunoId)
        ? current.filter((id) => id !== alunoId)
        : [...current, alunoId]
    ));
  }, []);

  const selecionarTodosPromoviveis = useCallback(() => {
    setSelectedIds(alunosPromoviveis.map((aluno) => aluno.id));
  }, [alunosPromoviveis]);

  const limparSelecaoPromocao = useCallback(() => {
    setSelectedIds([]);
  }, []);

  const graduarSelecionados = useCallback(async () => {
    if (!tenantId || !isProfessorOrAdmin) {
      return false;
    }

    if (selectedIds.length === 0) {
      setError('Selecione pelo menos um aluno para graduar.');
      return false;
    }

    if (selectedIds.length > 500) {
      setError('O lote de graduação não pode exceder 500 alunos.');
      return false;
    }

    setGraduacaoBatchLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await alunoService.graduarAlunosEmLote(tenantId, selectedIds);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao graduar alunos em lote.');
        return false;
      }

      setSuccess(`Graduação em lote concluída para ${result.data.total} aluno(s).`);
      limparSelecaoPromocao();
      await Promise.all([carregarAlunos(), obterAlunosPromoviveis()]);
      return true;
    } finally {
      setGraduacaoBatchLoading(false);
    }
  }, [carregarAlunos, isProfessorOrAdmin, limparSelecaoPromocao, obterAlunosPromoviveis, selectedIds, tenantId]);

  const carregarConvitesPendentes = useCallback(async () => {
    if (!isProfessorOrAdmin || !tenantId) {
      setConvitesPendentes([]);
      setConvitesLoading(false);
      return;
    }

    setConvitesLoading(true);

    try {
      const result = await convitesService.listarConvitesEstudantes(isProfessorOrAdmin);
      if (!result.success || !result.data) {
        setConvitesPendentes([]);
        return;
      }

      const now = Date.now();
      setConvitesPendentes(
        result.data.convites.filter((convite) => convite.status === 'pendente' && new Date(convite.expiresAt).getTime() > now),
      );
    } finally {
      setConvitesLoading(false);
    }
  }, [isProfessorOrAdmin, tenantId]);

  const convidarAluno = useCallback(async (input: ConvidarAlunoInput) => {
    if (!tenantId || !isProfessorOrAdmin) {
      return false;
    }

    setInviteLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const result = await convitesService.convidarAluno(input, tenantId, isProfessorOrAdmin);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao convidar aluno.');
        return false;
      }

      setSuccess(`Convite enviado para ${result.data.convite.email}.`);
      await Promise.all([carregarAlunos(), carregarConvitesPendentes()]);
      return true;
    } finally {
      setInviteLoading(false);
    }
  }, [carregarAlunos, isProfessorOrAdmin, tenantId]);

  const reenviarConvite = useCallback(async (token: string) => {
    if (!tenantId || !isProfessorOrAdmin) {
      return false;
    }

    setInviteActionToken(token);
    setError(null);
    setSuccess(null);

    try {
      const result = await convitesService.reenviarConvite({ token }, isProfessorOrAdmin);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao reenviar convite.');
        return false;
      }

      setSuccess(`Convite reenviado para ${result.data.convite.email}.`);
      await carregarConvitesPendentes();
      return true;
    } finally {
      setInviteActionToken(null);
    }
  }, [carregarConvitesPendentes, isProfessorOrAdmin, tenantId]);

  const revogarConvite = useCallback(async (token: string) => {
    if (!tenantId || !isProfessorOrAdmin) {
      return false;
    }

    setInviteActionToken(token);
    setError(null);
    setSuccess(null);

    try {
      const result = await convitesService.revogarConvite({ token }, isProfessorOrAdmin);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao revogar convite.');
        return false;
      }

      setSuccess(`Convite de ${result.data.convite.email} revogado.`);
      await carregarConvitesPendentes();
      return true;
    } finally {
      setInviteActionToken(null);
    }
  }, [carregarConvitesPendentes, isProfessorOrAdmin, tenantId]);

  const atualizarPerfilAluno = useCallback(async (alunoId: string, patch: AtualizarAlunoPerfilInput) => {
    if (!tenantId || !isProfessorOrAdmin) {
      return false;
    }

    setStudentActionId(alunoId);
    setError(null);
    setSuccess(null);

    try {
      const result = await alunoService.atualizarPerfilAluno(alunoId, tenantId, patch);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao atualizar aluno.');
        return false;
      }

      setSuccess(`Aluno ${result.data.nome} atualizado com sucesso.`);
      await carregarAlunos();
      return true;
    } finally {
      setStudentActionId(null);
    }
  }, [carregarAlunos, isProfessorOrAdmin, tenantId]);

  const atualizarAlunoCompleto = useCallback(async (
    alunoId: string,
    perfil: AtualizarAlunoPerfilInput,
    financeiro: AtualizarAlunoFinanceiroInput,
  ) => {
    if (!tenantId || !isProfessorOrAdmin) {
      return false;
    }

    setStudentActionId(alunoId);
    setError(null);
    setSuccess(null);

    try {
      const result = await alunoService.atualizarAlunoCompleto(alunoId, tenantId, perfil, financeiro);
      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao atualizar aluno.');
        return false;
      }

      setSuccess(`Aluno ${result.data.nome} atualizado com sucesso.`);
      await carregarAlunos();
      return true;
    } finally {
      setStudentActionId(null);
    }
  }, [carregarAlunos, isProfessorOrAdmin, tenantId]);

  const registrarPagamentoAluno = useCallback(async (
    alunoId: string,
    input: { valor: number; mesReferencia?: string; metodo: PagamentoMetodo; dataPagamento?: Date; alunoNome?: string },
  ) => {
    if (!tenantId || !isProfessorOrAdmin) {
      return false;
    }

    setPaymentLoading(true);
    setPaymentActionStudentId(alunoId);
    setError(null);
    setSuccess(null);

    try {
      const result = await pagamentosService.registrarPagamento(
        {
          alunoId,
          valor: input.valor,
          mesReferencia: input.mesReferencia,
          metodo: input.metodo,
          dataPagamento: input.dataPagamento,
        },
        tenantId,
        isProfessorOrAdmin,
      );

      if (!result.success || !result.data) {
        setError(result.error || 'Falha ao registrar pagamento.');
        return false;
      }

      setSuccess(`Pagamento registrado para ${input.alunoNome || alunoId}.`);
      await carregarAlunos();
      return true;
    } finally {
      setPaymentLoading(false);
      setPaymentActionStudentId(null);
    }
  }, [carregarAlunos, isProfessorOrAdmin, tenantId]);

  useEffect(() => {
    void carregarAlunos();
  }, [carregarAlunos]);

  useEffect(() => {
    void carregarConvitesPendentes();
  }, [carregarConvitesPendentes]);

  useEffect(() => {
    if (selectedIds.length === 0) {
      return;
    }

    const availableIds = new Set(alunosPromoviveis.map((aluno) => aluno.id));
    const nextSelection = selectedIds.filter((id) => availableIds.has(id));
    if (nextSelection.length !== selectedIds.length) {
      setSelectedIds(nextSelection);
    }
  }, [alunosPromoviveis, selectedIds]);

  useEffect(() => () => {
    setSelectedIds([]);
  }, []);

  const metrics = useMemo(() => {
    const active = students.filter((student) => student.status === 'Ativo').length;
    const inactive = students.filter((student) => student.status === 'Inativo').length;
    const readyForPromotion = students.filter((student) => alunoService.calcularProntidaoGraduacao(student).status === 'pronto').length;

    return {
      total: students.length,
      active,
      inactive,
      readyForPromotion,
    };
  }, [students]);

  const studentsWithProgress = useMemo<AlunoComProntidao[]>(() => (
    students.map((student) => ({
      ...student,
      prontidaoGraduacao: alunoService.calcularProntidaoGraduacao(student),
    }))
  ), [students]);

  return {
    isProfessorOrAdmin,
    students,
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
    carregarAlunos,
    carregarConvitesPendentes,
    convidarAluno,
    reenviarConvite,
    revogarConvite,
    atualizarPerfilAluno,
    atualizarAlunoCompleto,
    obterAlunosPromoviveis,
    toggleSelectedId,
    selecionarTodosPromoviveis,
    limparSelecaoPromocao,
    graduarSelecionados,
    registrarPagamentoAluno,
  };
}
