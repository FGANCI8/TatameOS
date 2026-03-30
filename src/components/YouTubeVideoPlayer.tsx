import { buildYouTubeEmbedUrl, extractYouTubeVideoId } from '../modules/tecnica/youtube';

interface YouTubeVideoPlayerProps {
  title: string;
  videoUrl?: string | null;
  thumbnailUrl?: string | null;
}

export function YouTubeVideoPlayer({ title, videoUrl, thumbnailUrl }: YouTubeVideoPlayerProps) {
  const embedUrl = videoUrl ? buildYouTubeEmbedUrl(videoUrl) : null;
  const videoId = videoUrl ? extractYouTubeVideoId(videoUrl) : null;

  return (
    <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Vídeo da técnica</p>
          <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">{title}</h3>
        </div>
        <span className="rounded-full border border-zinc-800 bg-zinc-950/60 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
          YouTube
        </span>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60">
        {embedUrl ? (
          <div className="aspect-video bg-zinc-950">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={embedUrl}
              title={title}
            />
          </div>
        ) : thumbnailUrl ? (
          <div className="relative aspect-video bg-zinc-950">
            <img alt={title} className="h-full w-full object-cover" src={thumbnailUrl} />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
              <div className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                Preview
              </div>
              <div className="rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                Vídeo do professor
              </div>
            </div>
          </div>
        ) : (
          <div className="flex aspect-video items-center justify-center bg-zinc-950/60 p-6 text-center">
            <div className="max-w-sm">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-300">
                <span className="material-symbols-outlined text-[20px]">videocam_off</span>
              </span>
              <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-zinc-100">
                Nenhum vídeo configurado
              </p>
              <p className="mt-2 text-sm leading-7 text-zinc-400">
                {videoId
                  ? 'O link foi reconhecido, mas o player não pode ser renderizado.'
                  : 'O professor ainda pode adicionar um link seguro do YouTube para esta técnica.'}
              </p>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-xs leading-6 text-zinc-400">
        A integração usa o domínio `youtube-nocookie.com` e só aceita URLs válidas do YouTube. Isso reduz risco de
        conteúdo externo arbitrário e mantém o isolamento por tenant no backend.
      </p>
    </section>
  );
}
