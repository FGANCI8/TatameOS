import { useGym } from '../../contexts/GymContext';

export function GymSelector() {
  const { availableGyms, error, loading, selectedGym, setSelectedGym } = useGym();

  if (loading) {
    return (
      <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-5 md:p-6">
        <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-800" />
        <div className="mt-4 h-12 animate-pulse rounded-2xl border border-zinc-800 bg-zinc-950/60" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-[28px] border border-rose-500/30 bg-rose-500/10 p-5 text-sm text-rose-200 md:p-6">
        {error}
      </div>
    );
  }

  if (availableGyms.length === 0) {
    return (
      <div className="rounded-[28px] border border-dashed border-zinc-800/80 bg-zinc-900/60 p-5 text-sm text-zinc-400 md:p-6">
        Nenhuma academia vinculada
      </div>
    );
  }

  if (availableGyms.length === 1) {
    const gym = availableGyms[0];

    return (
      <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-5 md:p-6">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Academia ativa</p>
        <p className="mt-2 text-lg font-black tracking-tight text-white">{gym.nome}</p>
        <p className="mt-1 text-sm text-zinc-400">Selecionada automaticamente para sua sessão.</p>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-zinc-800/80 bg-zinc-900/80 p-5 md:p-6">
      <label className="block">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-zinc-400">Selecionar academia</span>
        <select
          value={selectedGym?.id ?? ''}
          onChange={(event) => {
            const gym = availableGyms.find((item) => item.id === event.target.value) ?? null;
            setSelectedGym(gym);
          }}
          className="mt-3 w-full rounded-2xl border border-zinc-800 bg-zinc-950/80 px-4 py-3 text-sm font-medium text-zinc-100 outline-none transition duration-200 focus:border-brand-red/50 focus:ring-2 focus:ring-brand-red/20"
        >
          <option value="" disabled>
            Selecione uma academia
          </option>
          {availableGyms.map((gym) => (
            <option key={gym.id} value={gym.id}>
              {gym.nome}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
