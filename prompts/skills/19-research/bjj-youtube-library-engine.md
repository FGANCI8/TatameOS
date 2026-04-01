TITLE: BJJ YouTube Library Engine — Renova Aura

PURPOSE:
Pesquisar, catalogar e organizar automaticamente links de vídeos do YouTube sobre técnicas de jiu-jitsu, conectando cada vídeo com o gerador de imagem contextual para produzir thumbnails coerentes, e manter uma biblioteca estruturada de conteúdo técnico disponível para consumo futuro pelo app.

WHEN TO ACTIVATE:
- quando o app precisar de conteúdo técnico de jiu-jitsu
- quando uma nova técnica for cadastrada sem vídeo associado
- quando a biblioteca de técnicas estiver vazia ou desatualizada
- quando um professor ou admin solicitar enriquecimento de conteúdo

PRIMARY QUESTIONS:
- qual técnica ou categoria está sendo buscada?
- existe vídeo já catalogado para essa técnica?
- o vídeo encontrado tem qualidade didática real?
- a thumbnail gerada representa o conteúdo com fidelidade?
- o link ainda está ativo?

INPUTS TO INSPECT:
- nome da técnica (ex: triângulo, raspagem, kimura)
- categoria (guarda, passagem, finalização, queda, defesa)
- nível (iniciante, intermediário, avançado)
- idioma preferido (pt-BR prioritário, en aceito)
- professor de referência (opcional)

DECISION LOGIC:
1. Verificar se a técnica já existe na biblioteca local (src/data/bjj-library/ ou equivalente no projeto)
2. Se não existir:
   - montar query otimizada para YouTube Search API
   - priorizar canais didáticos conhecidos
   - filtrar por duração (2min a 20min)
   - filtrar por relevância e visualizações
3. Para cada resultado:
   - extrair título, canal, URL, duração, thumbnail original
   - classificar qualidade didática por título + descrição
   - gerar prompt contextual para thumbnail própria via Visual Experience Orchestrator
   - salvar entrada estruturada na biblioteca
4. Nunca salvar link quebrado ou vídeo removido
5. Nunca inventar URL

ESTRUTURA DA BIBLIOTECA:
Caminho: src/data/bjj-library/
Formato por entrada:
{
  id: string (slug da técnica),
  name: string,
  category: "guarda" | "passagem" | "finalizacao" | "queda" | "defesa",
  level: "iniciante" | "intermediario" | "avancado",
  videos: [
    {
      youtubeId: string,
      title: string,
      channel: string,
      url: string,
      duration: string,
      language: "pt-BR" | "en",
      thumbnailOriginal: string,
      imagePrompt: string,
      imageConcept: string,
      addedAt: string
    }
  ],
  lastUpdated: string
}

CATEGORIAS DE TÉCNICAS A COBRIR:
Guardar:
- guarda fechada, aberta, de aranha, de laço, X-guard, De La Riva, invertida, borboleta, 50/50, norte-sul, meia-guarda

Passagens:
- torreando, aranha, raspagem, passagem de joelho, smash pass, leg drag, pressão

Finalizações:
- triângulo, kimura, omoplata, chave de braço, guilhotina, mata-leão, estrangulamento traseiro, katagatame, armlock

Quedas e projeções:
- ippon seoi nage, osoto gari, tomoe nage, uchi mata adaptado

Defesas:
- defesa de quedas, defesa de finalizações comuns, escape do mount, escape do back

REQUIRED CHECKLIST:
[ ] a técnica tem nome padronizado?
[ ] o vídeo tem qualidade didática mínima?
[ ] o link está ativo?
[ ] a thumbnail foi gerada ou está planejada?
[ ] a entrada está salva na estrutura correta?
[ ] não há duplicata?
[ ] tenant isolation não foi violado?
[ ] nenhum dado fake foi inserido?

RED FLAGS:
- vídeo com título vago ou enganoso
- canal desconhecido sem credibilidade
- link quebrado ou privado
- thumbnail sem relação com a técnica
- técnica salva sem categoria

FORBIDDEN MOVES:
- inventar YouTube ID ou URL
- inserir vídeo sem validar link
- usar thumbnail genérica sem relação com a técnica
- alimentar o app diretamente sem revisão humana
- misturar conteúdo de outros esportes

REQUIRED OUTPUT:
Para cada execução:
- lista de técnicas pesquisadas
- quantidade de vídeos encontrados por categoria
- links validados
- prompts de thumbnail gerados
- itens salvos na biblioteca
- itens rejeitados e motivo
- estado da biblioteca após execução

ESCALATION RULES:
- se YouTube API não estiver configurada:
  montar biblioteca de prompts e estrutura vazia,
  documentar o que falta configurar para ativar a busca real
- se Visual Experience Orchestrator não estiver disponível:
  salvar imageConcept e imagePrompt para geração futura
- se nenhum vídeo for encontrado para uma técnica:
  registrar como PENDENTE, não deixar silencioso

DEFINITION OF DONE:
A skill está completa quando:
- a estrutura da biblioteca existe no projeto
- pelo menos as categorias principais estão mapeadas
- os prompts de thumbnail estão prontos para as técnicas core
- links válidos estão catalogados ou o estado PENDENTE está documentado
- nenhum dado fake foi inserido

GUIDING PRINCIPLE:
Conteúdo técnico de qualidade é o que transforma um app bonito em uma ferramenta real de evolução.
