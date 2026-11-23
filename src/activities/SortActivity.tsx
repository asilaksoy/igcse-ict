import { useMemo, useState } from 'react'
import type { SortTask } from '../data/types'
import { BiStack } from '../components/Bilingual'
import { Button, ScoreBanner } from '../components/ui'

const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5)

/** Tap an item, then tap the group it belongs to. */
export function SortActivity({ task, onDone }: { task: SortTask; onDone: (score: number, total: number) => void }) {
  const [round, setRound] = useState(0)
  const items = useMemo(() => shuffle(task.items), [task, round])
  const [placed, setPlaced] = useState<Record<string, string>>({})
  const [sel, setSel] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const remaining = items.filter((i) => !placed[i.id])
  const score = items.filter((i) => placed[i.id] === i.cat).length

  const reset = () => {
    setRound((r) => r + 1)
    setPlaced({})
    setSel(null)
    setChecked(false)
  }
  if (checked && score === items.length) return <ScoreBanner score={score} total={items.length} onRetry={reset} />

  return (
    <div>
      <p className="mb-4 text-ink-300">Tap an item, then its group. · Önce bir öğeye, sonra ait olduğu gruba dokun.</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {remaining.map((i) => (
          <button key={i.id} onClick={() => setSel(sel === i.id ? null : i.id)} className={`tap rounded-xl border px-4 py-2 ${sel === i.id ? 'border-cyan-glow bg-cyan-glow/10' : 'border-white/10 bg-ink-800'}`}>
            <BiStack t={i.text} />
          </button>
        ))}
        {remaining.length === 0 && <span className="text-ink-400">All placed · Hepsi yerleşti</span>}
      </div>
      <div className={`grid gap-3 ${task.categories.length === 3 ? 'md:grid-cols-3' : 'sm:grid-cols-2'}`}>
        {task.categories.map((c) => (
          <div
            key={c.id}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (!sel) return
              setPlaced({ ...placed, [sel]: c.id })
              setSel(null)
              setChecked(false)
            }}
            className={`min-h-32 rounded-xl border-2 border-dashed p-3 ${sel ? 'border-cyan-glow/60' : 'border-white/10'}`}
          >
            <BiStack t={c.label} className="mb-2 font-bold" />
            <div className="flex flex-col gap-1.5">
              {items
                .filter((i) => placed[i.id] === c.id)
                .map((i) => (
                  <button
                    key={i.id}
                    onClick={(e) => {
                      e.stopPropagation()
                      const p = { ...placed }
                      if (sel) {
                        // an item is selected: tapping anywhere in the group places it here
                        p[sel] = c.id
                        setSel(null)
                      } else delete p[i.id] // nothing selected: tap a placed item to take it back out
                      setPlaced(p)
                      setChecked(false)
                    }}
                    className={`rounded-lg px-3 py-1.5 text-left text-sm ${checked ? (i.cat === c.id ? 'bg-ok/15 text-ok' : 'bg-bad/15 text-bad') : 'bg-ink-800'}`}
                  >
                    {i.text.en}
                  </button>
                ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex items-center justify-end gap-3">
        {checked && score < items.length && (
          <span className="text-sm text-ink-300">
            {score}/{items.length} – tap red items to move them · kırmızıları tekrar yerleştir
          </span>
        )}
        <Button
          disabled={remaining.length > 0}
          onClick={() => {
            setChecked(true)
            onDone(score, items.length)
          }}
        >
          Check · Kontrol et
        </Button>
      </div>
    </div>
  )
}
