import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import type { VisualScreenContext } from '../../services/visual-experience/contracts/screen-context.contract';
import type { VisualExperienceOutput } from '../../services/visual-experience/contracts/visual-experience.contract';
import { visualExperienceService } from '../../services/visual-experience/visual-experience.service';

type VisualExperienceSurfaceProps = {
  output: VisualExperienceOutput;
  request?: VisualScreenContext;
  ctaTo?: string;
  eyebrow?: string;
};

function layoutClasses(layoutVariant: VisualExperienceOutput['layoutVariant']) {
  switch (layoutVariant) {
    case 'split':
      return 'grid gap-6 lg:grid-cols-[1.05fr_0.95fr]';
    case 'compact':
      return 'grid gap-4 md:grid-cols-[0.85fr_1.15fr]';
    case 'banner':
      return 'grid gap-4';
    case 'inline':
      return 'flex flex-col gap-4 md:flex-row md:items-center';
    default:
      return 'grid gap-6';
  }
}

function imagePlacementClasses(placement: VisualExperienceOutput['illustrationPlacement']) {
  switch (placement) {
    case 'side':
      return 'lg:order-2';
    case 'top':
      return 'order-first';
    default:
      return '';
  }
}

export function VisualExperienceSurface({ output, request, ctaTo, eyebrow }: VisualExperienceSurfaceProps) {
  const [resolvedOutput, setResolvedOutput] = useState(output);
  const requestRef = useRef(request);

  const requestKey = useMemo(() => {
    if (!request) {
      return '';
    }

    return [
      request.screenId,
      request.module ?? 'generic',
      request.route,
      request.stateType,
      request.tenantContext?.tenantId ?? '',
      output.imagePrompt,
    ].join('|');
  }, [output.imagePrompt, request]);

  useEffect(() => {
    setResolvedOutput(output);
  }, [output]);

  useEffect(() => {
    requestRef.current = request;
  }, [requestKey]);

  useEffect(() => {
    const currentRequest = requestRef.current;

    if (!currentRequest || !resolvedOutput.shouldRenderImage || resolvedOutput.imageUrl) {
      return;
    }

    let ativo = true;

    void visualExperienceService
      .hydrateImage(currentRequest, resolvedOutput)
      .then((hydrated) => {
        if (ativo) {
          setResolvedOutput(hydrated);
        }
      })
      .catch(() => {
        if (ativo) {
          setResolvedOutput(output);
        }
      });

    return () => {
      ativo = false;
    };
  }, [output, requestKey, resolvedOutput]);

  const ctaClasses =
    'inline-flex items-center justify-center gap-2 rounded-2xl border border-brand-red/20 bg-brand-red/10 px-5 py-3 text-[10px] font-black uppercase tracking-[0.25em] text-brand-red transition hover:bg-brand-red/20 active:scale-95';
  const ctaContent = (
    <>
      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      {resolvedOutput.ctaLabel}
    </>
  );

  return (
    <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
      <div className={resolvedOutput.shouldRenderImage ? layoutClasses(resolvedOutput.layoutVariant) : 'grid gap-4'}>
        {resolvedOutput.shouldRenderImage ? (
          <div className={imagePlacementClasses(resolvedOutput.illustrationPlacement)}>
            <div className="rounded-[28px] border border-brand-red/20 bg-gradient-to-br from-brand-red/20 via-zinc-950 to-zinc-900 p-5 shadow-2xl shadow-black/20">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-brand-red">
                  {eyebrow || 'Visual contextual'}
                </p>
                <span className="rounded-full border border-zinc-700/80 bg-zinc-950/70 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300">
                  {resolvedOutput.emphasisLevel}
                </span>
              </div>

              <div className="mt-5 aspect-[4/3] rounded-[24px] border border-zinc-800 bg-zinc-950/80 p-5">
                {resolvedOutput.imageUrl ? (
                  <div className="flex h-full flex-col gap-3">
                    <div className="flex-1 overflow-hidden rounded-[20px] border border-zinc-800 bg-zinc-900">
                      <img
                        alt={resolvedOutput.imageAlt}
                        className="h-full w-full object-cover"
                        src={resolvedOutput.imageUrl}
                        onError={() => setResolvedOutput(output)}
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                      <span>Imagem gerada</span>
                      <span>{resolvedOutput.imageAlt}</span>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-full flex-col justify-between gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Conceito de imagem</p>
                        <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
                          {resolvedOutput.imageConcept}
                        </h3>
                      </div>
                      <span className="material-symbols-outlined text-4xl text-brand-red">frame_inspect</span>
                    </div>

                    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Prompt preparado</p>
                      <p className="mt-2 text-sm leading-7 text-zinc-300">{resolvedOutput.imagePrompt}</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">
                      <span>{resolvedOutput.imageAlt}</span>
                      <span>{resolvedOutput.fallbackMode}</span>
                    </div>
                  </div>
                )}
              </div>

              {resolvedOutput.trustSignal ? (
                <div className="mt-4 inline-flex rounded-full border border-brand-red/20 bg-brand-red/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-brand-red">
                  {resolvedOutput.trustSignal}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-zinc-800/80 bg-zinc-950/60 p-5 md:p-6">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-zinc-400">
              {eyebrow || 'Headline'}
            </p>
            <h2 className="mt-2 font-headline text-3xl font-black uppercase tracking-tight text-white">
              {resolvedOutput.headline}
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{resolvedOutput.supportingCopy}</p>
          </div>

          <div className={resolvedOutput.shouldRenderImage ? 'grid gap-3 sm:grid-cols-2' : 'grid gap-3'}>
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Layout</p>
              <p className="mt-2 text-sm font-black uppercase tracking-wide text-white">{resolvedOutput.layoutVariant}</p>
            </div>
            {resolvedOutput.shouldRenderImage ? (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Posicao</p>
                <p className="mt-2 text-sm font-black uppercase tracking-wide text-white">
                  {resolvedOutput.illustrationPlacement}
                </p>
              </div>
            ) : (
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500">Prompt previsto</p>
                <p className="mt-2 text-sm font-black uppercase tracking-wide text-white">{resolvedOutput.imageConcept}</p>
                <p className="mt-2 text-xs leading-6 text-zinc-400">{resolvedOutput.imagePrompt}</p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {ctaTo ? (
              ctaTo.startsWith('#') ? (
                <a href={ctaTo} className={ctaClasses}>
                  {ctaContent}
                </a>
              ) : (
                <Link to={ctaTo} className={ctaClasses}>
                  {ctaContent}
                </Link>
              )
            ) : null}
            <p className="text-xs leading-6 text-zinc-500">{resolvedOutput.renderingNotes}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
