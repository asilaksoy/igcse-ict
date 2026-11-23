import type { UnitMeta } from '../data/types'
import { modulesOf } from '../data/modules'
import { Icon } from '../components/Icon'
import { ProgressBar } from '../components/ui'
import { useProgress } from '../hooks/useProgress'

/** One unit: its modules. */
export function UnitPage({ unit, open }: { unit: UnitMeta; open: (id: string) => void }) {
  const { percent } = useProgress()
  return (
    <div>
      <div className="mb-6">
        <div className="text-sm text-ink-400">Unit {unit.number} · Ünite {unit.number}</div>
        <h1 className="mt-1 text-3xl font-bold">{unit.title.en}</h1>
        <div className="text-xl text-tr">{unit.title.tr}</div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {modulesOf(unit.number).map((m) => {
          const p = percent(m.id)
          return (
            <button key={m.id} onClick={() => open(m.id)} className="tap card flex items-center gap-4 p-4 text-left">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink-800 text-cyan-glow">
                <Icon name={m.icon} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold">
                  <span className="mr-2 text-ink-400">{m.number}</span>
                  {m.title.en}
                </div>
                <div className="text-tr">{m.title.tr}</div>
                <div className="mt-2 flex items-center gap-2">
                  <ProgressBar value={p} />
                  <span className="w-10 text-right text-xs text-ink-400">{p}%</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
