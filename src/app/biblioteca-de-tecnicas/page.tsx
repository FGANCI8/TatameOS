import { useMemo, useState } from 'react';
import { YouTubeVideoPlayer } from '../../components/YouTubeVideoPlayer';
import { listarTecnicasBiblioteca } from '../../modules/tecnica/catalog';
import type { Tecnica } from '../../modules/tecnica/types';

export default function BibliotecaDeTecnicas() {
  const tecnicas: Tecnica[] = useMemo(() => listarTecnicasBiblioteca(), []);
  const [selectedId, setSelectedId] = useState(tecnicas[0]?.id ?? '');

  const selectedTecnica = useMemo(
    () => tecnicas.find((tecnica) => tecnica.id === selectedId) ?? tecnicas[0],
    [selectedId, tecnicas],
  );

  return (
    <main className="mx-auto max-w-7xl px-4 pb-32 pt-24 md:px-6">
      <section className="mb-8 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-white md:text-6xl">
          Biblioteca de <br />
          <span className="text-brand-red">técnicas</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400">
          Cada técnica pode receber um vídeo do YouTube vinculado pelo professor, sempre filtrado por tenant e validado
          antes da exibição.
        </p>
      </section>

      <section className="mb-8 grid grid-cols-2 gap-2 md:grid-cols-5">
        {[
          { title: 'Branca', subtitle: 'Fundamentos' },
          { title: 'Azul', subtitle: 'Consolidação' },
          { title: 'Roxa', subtitle: 'Refinamento' },
          { title: 'Marrom', subtitle: 'Eficiência' },
          { title: 'Preta', subtitle: 'Mestria' },
        ].map((item, index) => (
          <button
            key={item.title}
            className={`flex h-32 flex-col justify-between rounded-[24px] border p-4 text-left transition duration-200 hover:scale-[1.01] ${
              index === 4
                ? 'border-brand-red/20 bg-brand-red/10 text-brand-red'
                : 'border-zinc-800 bg-zinc-900/80 text-white hover:bg-zinc-900'
            }`}
          >
            <span className="text-2xl font-black uppercase italic">{item.title}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{item.subtitle}</span>
          </button>
        ))}
      </section>

      <section className="mb-8 rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Filtro rápido</p>
        <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
          {['Todas', 'Guardas', 'Passagens', 'Finalizações', 'Quedas', 'Defesas'].map((filter, index) => (
            <button
              key={filter}
              className={`whitespace-nowrap rounded-2xl px-6 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                index === 0 ? 'bg-brand-red/10 text-brand-red' : 'bg-zinc-800/80 text-zinc-400 hover:bg-zinc-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tecnicas.map((item) => {
            const active = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`group overflow-hidden rounded-[28px] border text-left transition duration-200 hover:scale-[1.01] ${
                  active ? 'border-brand-red/20 bg-brand-red/10' : 'border-zinc-800/80 bg-zinc-900/80 hover:bg-zinc-900'
                }`}
              >
                <div className="relative aspect-[4/5]">
                  <img
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    alt={item.nome}
                    src={
                      item.thumbnailUrl ||
                      'https://lh3.googleusercontent.com/aida-public/AB6AXuBMF044ZceGf2C3zME2b-FmW-MBj-Y2TePdzE3x0Gc9O4-RPvMOdqEpe8-29MtxT6aJ9ioJbt9PV1CauNyQYKaFCoyGGiSjVe3qOnLEfYogG8m6CV_JkRw7GeoOWVo3ATsvawdOj-db37rL0pCZnNcYSbKmE9YE4trjbOc0t0VsKUzS9Sbia-2A8_k91AZrrmszbmloioLoZctl69zkoj14lkCXfeGvxwE4GId-A3EwkRPTdBM1bCyJinuwKbX1r8swdxORUgyHrxeQ'
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-zinc-300">
                      {item.categoria}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                      {item.videoProvider === 'youtube' ? 'Vídeo do professor' : 'Sem vídeo'}
                    </span>
                    <h3 className="text-3xl font-black uppercase leading-none italic text-white">{item.nome}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-800/80 bg-zinc-900/80 p-6">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase text-zinc-400">Dificuldade</span>
                    <div className="mt-1 flex gap-1">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <div
                          key={index}
                          className={`h-1 w-4 rounded-full ${index < item.dificuldadeBase ? 'bg-brand-red' : 'bg-zinc-800'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-red/20 bg-brand-red/10 text-brand-red">
                    <span className="material-symbols-outlined">play_arrow</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="space-y-6">
          <section className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-6 md:p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Seleção atual</p>
            <h3 className="mt-2 font-headline text-2xl font-black uppercase tracking-tight text-white">
              {selectedTecnica.nome}
            </h3>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              {selectedTecnica.descricao ||
                'A técnica selecionada pode receber vídeo do YouTube e metadados visíveis apenas para o tenant atual.'}
            </p>
          </section>

          <YouTubeVideoPlayer
            title={selectedTecnica.nome}
            videoUrl={selectedTecnica.videoUrl}
            thumbnailUrl={selectedTecnica.thumbnailUrl}
          />
        </div>
      </section>

      <div className="mt-16 flex justify-center">
        <button className="rounded-2xl border border-brand-red/20 px-12 py-4 text-xl font-black uppercase italic text-brand-red transition-all hover:bg-brand-red/10">
          Ver mais técnicas
        </button>
      </div>
    </main>
  );
}
