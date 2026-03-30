import type { IConvitesRepository } from '../convites/repository';
import type { AlunoRepositoryFirestore } from '../aluno/aluno.repository';
import type { PagamentosRepositoryFirestore } from '../pagamentos/repository';
import type { StripeRepositoryFirestore } from '../stripe/repository';
import type {
  IRelatoriosGerenciaisRepository,
  RelatorioGerencialBase,
} from './types';

export class RelatoriosGerenciaisRepositoryFirestore implements IRelatoriosGerenciaisRepository {
  constructor(
    private readonly alunoRepository: AlunoRepositoryFirestore,
    private readonly pagamentosRepository: PagamentosRepositoryFirestore,
    private readonly stripeRepository: StripeRepositoryFirestore,
    private readonly convitesRepository: IConvitesRepository,
  ) {}

  async carregarBase(tenantId: string, anoBase: number): Promise<RelatorioGerencialBase> {
    const [alunos, pagamentosAnoAtual, pagamentosAnoAnterior, convitesEstudantes, stripeEventsAnoAtual, stripeEventsAnoAnterior] =
      await Promise.all([
        this.alunoRepository.listAll(tenantId),
        this.pagamentosRepository.listarPagamentosDoAno(tenantId, anoBase),
        this.pagamentosRepository.listarPagamentosDoAno(tenantId, anoBase - 1),
        this.convitesRepository.listarConvitesEstudantes().then((result) => result.convites || []),
        this.stripeRepository.listarEventosDoAno(tenantId, anoBase),
        this.stripeRepository.listarEventosDoAno(tenantId, anoBase - 1),
      ]);

    return {
      alunos,
      pagamentosAnoAtual,
      pagamentosAnoAnterior,
      convitesEstudantes,
      stripeEventsAnoAtual,
      stripeEventsAnoAnterior,
    };
  }
}
