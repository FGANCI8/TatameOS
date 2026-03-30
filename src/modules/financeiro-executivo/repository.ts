import type { AlunoRepositoryFirestore } from '../aluno/aluno.repository';
import type { PagamentosRepositoryFirestore } from '../pagamentos/repository';
import type { FinanceiroExecutivoBaseOperacional, IFinanceiroExecutivoRepository } from './types';

export class FinanceiroExecutivoRepositoryFirestore implements IFinanceiroExecutivoRepository {
  constructor(
    private alunoRepository: AlunoRepositoryFirestore,
    private pagamentosRepository: PagamentosRepositoryFirestore,
  ) {}

  async carregarBaseOperacional(tenantId: string, anoBase: number): Promise<FinanceiroExecutivoBaseOperacional> {
    const [alunosAtivos, alunosEmAtraso, pagamentosAnoAtual, pagamentosAnoAnterior] = await Promise.all([
      this.alunoRepository.listAtivos(tenantId),
      this.alunoRepository.listAll(tenantId, 'atrasado'),
      this.pagamentosRepository.listarPagamentosDoAno(tenantId, anoBase),
      this.pagamentosRepository.listarPagamentosDoAno(tenantId, anoBase - 1),
    ]);

    return {
      alunosAtivos,
      alunosEmAtraso,
      pagamentosAnoAtual,
      pagamentosAnoAnterior,
    };
  }
}
