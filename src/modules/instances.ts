import { db } from '../lib/firebase/client';
import { TreinoRepositoryFirestore } from './treino/treino.repository';
import { TreinoService } from './treino/treino.service';
import { AlunoRepositoryFirestore } from './aluno/aluno.repository';
import { AlunoService } from './aluno/aluno.service';
import { FalhasRepository } from './falhas/falhas.repository';
import { FalhasService } from './falhas/falhas.service';
import { CampeonatoRepository } from './campeonato/campeonato.repository';
import { CampeonatoService } from './campeonato/campeonato.service';
import { FeedbacksRepositoryFirestore } from './feedbacks/repositories/feedbacksRepositoryFirestore';
import { FeedbacksServiceImpl } from './feedbacks/services/feedbacksServiceImpl';
import { AcademiaProvisioningRepositoryFirebase } from './academias/provisioning.repository';
import { AcademiaProvisioningServiceImpl } from './academias/provisioning.service';
import { AcademiasFirestoreClientRepository } from './academias/client.repository';
import { AcademiasClientServiceImpl } from './academias/client.service';
import { ConvitesRepositoryFirebase } from './convites/repository';
import { ConvitesServiceImpl } from './convites/service';
import { PagamentosRepositoryFirestore } from './pagamentos/repository';
import { PagamentosServiceImpl } from './pagamentos/service';
import { PresencasRepositoryFirestore } from './presencas/presencas.repository';
import { PresencasServiceImpl } from './presencas/presencas.service';
import { FrequenciaRepositoryFirestore } from './frequencia/repository';
import { FrequenciaService } from './frequencia/service';
import { NotificacoesRepositoryFirestore } from './notificacoes/repository';
import { NotificacoesServiceImpl } from './notificacoes/service';
import { TecnicaRepository } from './tecnica/repositories/tecnicaRepository';
import { TrilhasRepositoryFirestore } from './trilhas/repository';
import { TrilhasService } from './trilhas/service';
import { FinanceiroExecutivoRepositoryFirestore } from './financeiro-executivo/repository';
import { FinanceiroExecutivoService } from './financeiro-executivo/service';
import { NotificacoesTransacionaisRepositoryFirestore } from './notificacoes-transacionais/repository';
import { NotificacoesTransacionaisService } from './notificacoes-transacionais/service';
import { ResendAdapterTatameOS } from './notificacoes-transacionais/adapters/resend.adapter';
import { WhatsAppCloudAdapterTatameOS } from './notificacoes-transacionais/adapters/whatsapp-cloud.adapter';
import { RelatoriosGerenciaisRepositoryFirestore } from './relatorios-gerenciais/repository';
import { RelatoriosGerenciaisService } from './relatorios-gerenciais/service';
import { SnapshotMensalRepositoryFirestore } from './snapshots-mensais/repository';
import { SnapshotMensalService } from './snapshots-mensais/service';
import { StripeAdapterTatameOS } from './stripe/adapter';
import { StripeRepositoryFirestore } from './stripe/repository';
import { StripeServiceTatameOS } from './stripe/service';

// Repositories Firestore Reais
export const treinoRepo = new TreinoRepositoryFirestore(db);
export const alunoRepo = new AlunoRepositoryFirestore(db);
export const falhasRepo = new FalhasRepository(db);
export const campeonatoRepo = new CampeonatoRepository(db);
export const feedbacksRepo = new FeedbacksRepositoryFirestore(db);
export const academiaProvisioningRepo = new AcademiaProvisioningRepositoryFirebase();
export const academiasRepo = new AcademiasFirestoreClientRepository();
export const convitesRepo = new ConvitesRepositoryFirebase();
export const pagamentosRepo = new PagamentosRepositoryFirestore();
export const presencasRepo = new PresencasRepositoryFirestore(db);
export const frequenciaRepo = new FrequenciaRepositoryFirestore(db, alunoRepo, presencasRepo);
export const notificacoesRepo = new NotificacoesRepositoryFirestore();
export const tecnicaRepo = new TecnicaRepository();
export const trilhasRepo = new TrilhasRepositoryFirestore(db);
export const financeiroExecutivoRepo = new FinanceiroExecutivoRepositoryFirestore(alunoRepo, pagamentosRepo);
export const stripeRepo = new StripeRepositoryFirestore(db);
export const notificacoesTransacionaisRepo = new NotificacoesTransacionaisRepositoryFirestore(db);
export const snapshotMensalRepo = new SnapshotMensalRepositoryFirestore(db);
export const relatoriosGerenciaisRepo = new RelatoriosGerenciaisRepositoryFirestore(
  alunoRepo,
  pagamentosRepo,
  snapshotMensalRepo,
  stripeRepo,
  convitesRepo,
);
export const stripeAdapter = new StripeAdapterTatameOS({
  customerPortalUrl: import.meta.env.VITE_STRIPE_CUSTOMER_PORTAL_URL,
});
export const resendAdapter = new ResendAdapterTatameOS();
export const whatsappCloudAdapter = new WhatsAppCloudAdapterTatameOS();

// Motores de Serviço (Injetados com Firebase)
export const alunoService = new AlunoService(alunoRepo, pagamentosRepo, presencasRepo);
export const treinoService = new TreinoService(treinoRepo, alunoService);
export const falhasService = new FalhasService(falhasRepo);
export const campeonatoService = new CampeonatoService(campeonatoRepo);
export const feedbacksService = new FeedbacksServiceImpl(feedbacksRepo);
export const academiaProvisioningService = new AcademiaProvisioningServiceImpl(academiaProvisioningRepo);
export const academiasService = new AcademiasClientServiceImpl(academiasRepo);
export const convitesService = new ConvitesServiceImpl(convitesRepo);
export const pagamentosService = new PagamentosServiceImpl(pagamentosRepo, alunoRepo);
export const presencasService = new PresencasServiceImpl(presencasRepo, alunoRepo);
export const frequenciaService = new FrequenciaService(frequenciaRepo);
export const notificacoesService = new NotificacoesServiceImpl(notificacoesRepo);
export const trilhasService = new TrilhasService(trilhasRepo, tecnicaRepo);
export const financeiroExecutivoService = new FinanceiroExecutivoService(financeiroExecutivoRepo);
export const notificacoesTransacionaisService = new NotificacoesTransacionaisService(
  notificacoesTransacionaisRepo,
  [resendAdapter, whatsappCloudAdapter],
);
export const stripeService = new StripeServiceTatameOS(stripeAdapter, stripeRepo, alunoRepo, notificacoesTransacionaisService);
export const relatoriosGerenciaisService = new RelatoriosGerenciaisService(relatoriosGerenciaisRepo);
export const snapshotMensalService = new SnapshotMensalService(alunoRepo, snapshotMensalRepo);
