import type {
  EmphasisLevel,
  FallbackMode,
  IllustrationPlacement,
  VisualLayoutVariant,
  VisualModuleKey,
  VisualStateType,
} from '../contracts/screen-context.contract';

export type VisualModuleProfile = {
  module: VisualModuleKey;
  defaultHeadline: string;
  defaultSupportingCopy: string;
  defaultCtaLabel: string;
  defaultImageConcept: string;
  defaultImagePrompt: string;
  defaultImageAlt: string;
  defaultLayoutVariant: VisualLayoutVariant;
  defaultIllustrationPlacement: IllustrationPlacement;
  defaultEmphasisLevel: EmphasisLevel;
  defaultFallbackMode: FallbackMode;
  trustSignal?: string;
  renderingNotes: string;
};

type VisualStateRule = {
  shouldRenderImage: boolean;
  imageConceptSuffix: string;
  headlinePrefix: string;
  supportingCopySuffix: string;
  ctaLabel?: string;
  layoutVariant: VisualLayoutVariant;
  illustrationPlacement: IllustrationPlacement;
  emphasisLevel: EmphasisLevel;
  fallbackMode: FallbackMode;
  trustSignal?: string;
  renderingNotes: string;
};

export const VISUAL_STATE_RULES: Record<VisualStateType, VisualStateRule> = {
  empty: {
    shouldRenderImage: true,
    imageConceptSuffix: 'estado vazio honesto com direcao clara',
    headlinePrefix: 'Ainda nao ha conteudo suficiente',
    supportingCopySuffix: 'A tela explica o que falta e qual e o proximo passo para avancar.',
    ctaLabel: 'Comecar agora',
    layoutVariant: 'split',
    illustrationPlacement: 'side',
    emphasisLevel: 'medium',
    fallbackMode: 'placeholder',
    trustSignal: 'Sem inventar dados ou progresso.',
    renderingNotes: 'Use um visual explicativo, nao decorativo.',
  },
  loading: {
    shouldRenderImage: false,
    imageConceptSuffix: 'sincronizacao do contexto real em andamento',
    headlinePrefix: 'Sincronizando contexto real',
    supportingCopySuffix: 'Estamos carregando dados honestos do tenant para montar a tela certa.',
    ctaLabel: 'Aguardar',
    layoutVariant: 'banner',
    illustrationPlacement: 'none',
    emphasisLevel: 'low',
    fallbackMode: 'text-only',
    trustSignal: 'Carregando apenas dados reais.',
    renderingNotes: 'Nao prometer estado pronto enquanto os dados ainda chegam.',
  },
  success: {
    shouldRenderImage: true,
    imageConceptSuffix: 'confirmacao limpa de progresso concluido',
    headlinePrefix: 'Fluxo concluido com clareza',
    supportingCopySuffix: 'O usuario pode seguir para a proxima acao sem perder contexto.',
    ctaLabel: 'Seguir',
    layoutVariant: 'compact',
    illustrationPlacement: 'top',
    emphasisLevel: 'medium',
    fallbackMode: 'placeholder',
    trustSignal: 'Progresso confirmado.',
    renderingNotes: 'Reforcar a conclusao e a direcao seguinte.',
  },
  error: {
    shouldRenderImage: true,
    imageConceptSuffix: 'bloqueio limpo e recuperavel sem drama visual',
    headlinePrefix: 'Algo precisa ser verificado',
    supportingCopySuffix: 'A mensagem deve ser honesta, util e orientar a tentativa de recuperacao.',
    ctaLabel: 'Tentar novamente',
    layoutVariant: 'banner',
    illustrationPlacement: 'top',
    emphasisLevel: 'high',
    fallbackMode: 'placeholder',
    trustSignal: 'Sem mascarar a falha.',
    renderingNotes: 'Erro precisa ser claro sem parecer tela quebrada.',
  },
  onboarding: {
    shouldRenderImage: true,
    imageConceptSuffix: 'entrada organizada para configuracao de academia',
    headlinePrefix: 'Configure a base sem improviso',
    supportingCopySuffix: 'O fluxo explica o que ja foi criado, o que falta e qual e a proxima acao.',
    ctaLabel: 'Continuar onboarding',
    layoutVariant: 'split',
    illustrationPlacement: 'side',
    emphasisLevel: 'high',
    fallbackMode: 'placeholder',
    trustSignal: 'Setup guiado e real.',
    renderingNotes: 'Onboarding precisa reduzir atrito e aumentar confianca.',
  },
  instructional: {
    shouldRenderImage: true,
    imageConceptSuffix: 'instrucao visual direta para a tarefa atual',
    headlinePrefix: 'Siga a instrucao com clareza',
    supportingCopySuffix: 'A imagem e a copy ajudam a completar a tarefa sem duvidas.',
    ctaLabel: 'Prosseguir',
    layoutVariant: 'split',
    illustrationPlacement: 'side',
    emphasisLevel: 'high',
    fallbackMode: 'placeholder',
    trustSignal: 'Instrucao contextual.',
    renderingNotes: 'Telas instrucionais devem ensinar rapido.',
  },
  dashboard: {
    shouldRenderImage: true,
    imageConceptSuffix: 'visao estrategica de progresso e direcao',
    headlinePrefix: 'Seu proximo passo no tatame',
    supportingCopySuffix: 'A leitura rapida da tela precisa mostrar ritmo, direcao e prioridade do momento.',
    ctaLabel: 'Abrir proximo passo',
    layoutVariant: 'split',
    illustrationPlacement: 'side',
    emphasisLevel: 'high',
    fallbackMode: 'placeholder',
    trustSignal: 'Leitura rapida, sem ruído.',
    renderingNotes: 'Dashboard deve priorizar direcao acima de decoracao.',
  },
  highlight: {
    shouldRenderImage: true,
    imageConceptSuffix: 'destaque visual pontual para foco imediato',
    headlinePrefix: 'Foco recomendado',
    supportingCopySuffix: 'O destaque existe para acelerar a decisao do usuario.',
    ctaLabel: 'Ver destaque',
    layoutVariant: 'compact',
    illustrationPlacement: 'top',
    emphasisLevel: 'medium',
    fallbackMode: 'placeholder',
    trustSignal: 'Prioridade destacada.',
    renderingNotes: 'Destaque sem poluir o resto da tela.',
  },
  confirmation: {
    shouldRenderImage: true,
    imageConceptSuffix: 'confirmacao visual positiva de avanco',
    headlinePrefix: 'Confirmado com sucesso',
    supportingCopySuffix: 'A tela deve reforcar a conquista e apontar o proximo passo.',
    ctaLabel: 'Continuar',
    layoutVariant: 'compact',
    illustrationPlacement: 'top',
    emphasisLevel: 'medium',
    fallbackMode: 'placeholder',
    trustSignal: 'Etapa validada.',
    renderingNotes: 'Confirmacao precisa ser positiva e objetiva.',
  },
};

export const VISUAL_MODULE_PROFILES: Record<VisualModuleKey, VisualModuleProfile> = {
  generic: {
    module: 'generic',
    defaultHeadline: 'Contexto visual disponivel',
    defaultSupportingCopy: 'A experiencia visual deve acompanhar o estado da tela sem inventar progresso.',
    defaultCtaLabel: 'Prosseguir',
    defaultImageConcept: 'composicao visual neutra do TatameOS',
    defaultImagePrompt: 'TatameOS contextual visual composition, clean and honest, strong hierarchy, athletic but minimal',
    defaultImageAlt: 'Composicao visual neutra do TatameOS',
    defaultLayoutVariant: 'stacked',
    defaultIllustrationPlacement: 'top',
    defaultEmphasisLevel: 'medium',
    defaultFallbackMode: 'placeholder',
    trustSignal: 'Camada visual contextual pronta para escalar.',
    renderingNotes: 'Fallback seguro para telas ainda sem regras especificas.',
  },
  'student-dashboard': {
    module: 'student-dashboard',
    defaultHeadline: 'Seu dia no tatame',
    defaultSupportingCopy: 'Mostre progresso, frequencia e proximos passos sem ruido.',
    defaultCtaLabel: 'Abrir check-in',
    defaultImageConcept: 'atleta lendo o proprio progresso com foco e energia',
    defaultImagePrompt:
      'Brazilian jiu-jitsu student reviewing a progress dashboard on the edge of a tatami mat, athletic lighting, clear hierarchy, honest product illustration style',
    defaultImageAlt: 'Atleta acompanhando progresso e proximos passos',
    defaultLayoutVariant: 'split',
    defaultIllustrationPlacement: 'side',
    defaultEmphasisLevel: 'high',
    defaultFallbackMode: 'placeholder',
    trustSignal: 'Dashboard orientado a progresso real.',
    renderingNotes: 'Home do aluno precisa mostrar direcao imediata.',
  },
  'student-checkin': {
    module: 'student-checkin',
    defaultHeadline: 'Entrada validada sem friccao',
    defaultSupportingCopy: 'QR, tempo e proximo marco aparecem juntos para facilitar o acesso.',
    defaultCtaLabel: 'Abrir check-in',
    defaultImageConcept: 'aluno entrando na academia e apresentando o QR',
    defaultImagePrompt:
      'Brazilian jiu-jitsu student entering an academy and presenting a QR check-in, clean operational scene, instructional clarity, minimal but energetic lighting',
    defaultImageAlt: 'Aluno apresentando o QR na entrada da academia',
    defaultLayoutVariant: 'banner',
    defaultIllustrationPlacement: 'top',
    defaultEmphasisLevel: 'high',
    defaultFallbackMode: 'placeholder',
    trustSignal: 'Fluxo seguro e rapido.',
    renderingNotes: 'Check-in deve reforcar seguranca e claridade.',
  },
  'student-training-plan': {
    module: 'student-training-plan',
    defaultHeadline: 'Plano de treino com foco',
    defaultSupportingCopy: 'Mostre o que deve ser treinado e por que isso importa agora.',
    defaultCtaLabel: 'Ver plano',
    defaultImageConcept: 'professor guiando aluno no tatame com roteiro visual de treino',
    defaultImagePrompt:
      'Brazilian jiu-jitsu instructor guiding a student through a training plan on tatami, educational and tactical, clean modern hierarchy, honest product visual',
    defaultImageAlt: 'Professor guiando a proxima etapa do treino',
    defaultLayoutVariant: 'split',
    defaultIllustrationPlacement: 'side',
    defaultEmphasisLevel: 'medium',
    defaultFallbackMode: 'placeholder',
    trustSignal: 'Plano orientado por contexto real.',
    renderingNotes: 'A tela deve explicar a sequencia, nao apenas listar tecnicas.',
  },
  'student-performance': {
    module: 'student-performance',
    defaultHeadline: 'Leitura rapida de performance',
    defaultSupportingCopy: 'Combine frequencia, treino e feedback para mostrar evolucao sem inventar numeros.',
    defaultCtaLabel: 'Abrir desempenho',
    defaultImageConcept: 'painel estrategico de evolucao com energia competitiva',
    defaultImagePrompt:
      'Brazilian jiu-jitsu performance dashboard with tactical athlete imagery, strategic but honest composition, clean metrics and strong hierarchy, product visual',
    defaultImageAlt: 'Painel estrategico com evolucao competitiva',
    defaultLayoutVariant: 'split',
    defaultIllustrationPlacement: 'side',
    defaultEmphasisLevel: 'high',
    defaultFallbackMode: 'placeholder',
    trustSignal: 'Evolucao apresentada com dados reais.',
    renderingNotes: 'Performance precisa reforcar direcao e consistencia.',
  },
  'admin-onboarding': {
    module: 'admin-onboarding',
    defaultHeadline: 'Configure a academia com clareza',
    defaultSupportingCopy: 'Onboarding deve deixar evidente o que ja existe e o que falta para ativar a operacao.',
    defaultCtaLabel: 'Criar academia',
    defaultImageConcept: 'recepcao organizada para nova academia',
    defaultImagePrompt:
      'Brazilian jiu-jitsu academy onboarding scene with a responsible administrator and organized setup flow, clean operational lighting, instructional and trustworthy composition',
    defaultImageAlt: 'Recepcao organizada para configuracao da academia',
    defaultLayoutVariant: 'split',
    defaultIllustrationPlacement: 'side',
    defaultEmphasisLevel: 'high',
    defaultFallbackMode: 'placeholder',
    trustSignal: 'Setup guiado, sem inventar estado pronto.',
    renderingNotes: 'Onboarding precisa ser aspiracional sem perder honestidade.',
  },
  'professor-frequency': {
    module: 'professor-frequency',
    defaultHeadline: 'Validacao de frequencia com foco',
    defaultSupportingCopy: 'A operacao precisa deixar claro quem valida, quem entra e o que ainda falta.',
    defaultCtaLabel: 'Validar agora',
    defaultImageConcept: 'professor validando entrada do aluno com vista operacional',
    defaultImagePrompt:
      'Brazilian jiu-jitsu professor validating student attendance with QR and operational dashboard, clear instructional composition, honest and minimal visual',
    defaultImageAlt: 'Professor validando a frequencia dos alunos',
    defaultLayoutVariant: 'split',
    defaultIllustrationPlacement: 'side',
    defaultEmphasisLevel: 'high',
    defaultFallbackMode: 'placeholder',
    trustSignal: 'Operacao de frequencia explicita.',
    renderingNotes: 'Tela operacional precisa manter a leitura imediata.',
  },
};
