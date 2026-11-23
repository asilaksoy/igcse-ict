import { useMemo, useState } from 'react'
import type { MatchPair } from '../data/types'
import { Button, ScoreBanner } from '../components/ui'
import { Icon } from '../components/Icon'

const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5)

/** Tap an English term, then its Turkish meaning (no dragging – reliable on tablets). */
export function MatchingActivity({ pairs, onDone }: { pairs: MatchPair[]; onDone: (score: number, total: number) => void }) {
  const [round, setRound] = useState(0)
  const left = useMemo(() => shuffle(pairs), [pairs, round])
  const right = useMemo(() => shuffle(pairs), [pairs, round])
  const [selected, setSelected] = useState<string | null>(null)
  const [matched, setMatched] = useState<string[]>([])
  const [wrong, setWrong] = useState<string | null>(null)
  const [mistakes, setMistakes] = useState(0)
  const done = matched.length === pairs.length

  const pickRight = (id: string) => {
    if (!selected || matched.includes(id)) return
    if (id === selected) {
      const next = [...matched, id]
      setMatched(next)
      setSelected(null)
      if (next.length === pairs.length) onDone(Math.max(0, pairs.length - mistakes), pairs.length)
    } else {
      setWrong(id)
      setMistakes((m) => m + 1)
      setTimeout(() => setWrong(null), 500)
    }
  }
  const reset = () => {
    setRound((r) => r + 1)
    setMatched([])
    setSelected(null)
    setMistakes(0)
  }

  if (done) return <ScoreBanner score={Math.max(0, pairs.length - mistakes)} total={pairs.length} onRetry={reset} />

  return (
    <div>
      <p className="mb-4 text-ink-300">Tap a term, then its meaning. · Önce terime, sonra anlamına dokun.</p>
      <div className="grid grid-cols-[2fr_3fr] gap-3">
        <div className="flex flex-col gap-2">
          {left.map((p) => {
            const isM = matched.includes(p.id)
            return (
              <button
                key={p.id}
                disabled={isM}
                onClick={() => setSelected(selected === p.id ? null : p.id)}
                className={`tap rounded-xl border px-4 py-2 text-left font-semibold ${isM ? 'border-ok/40 text-ok' : selected === p.id ? 'border-cyan-glow bg-cyan-glow/10' : 'border-white/10 bg-ink-800'}`}
              >
                {p.en} {isM && <Icon name="check" className="ml-1 inline size-4" />}
              </button>
            )
          })}
        </div>
        <div className="flex flex-col gap-2">
          {right.map((p) => {
            const isM = matched.includes(p.id)
            return (
              <button
                key={p.id}
                disabled={isM}
                onClick={() => pickRight(p.id)}
                className={`tap rounded-xl border px-4 py-2 text-left ${isM ? 'border-ok/40 opacity-50' : wrong === p.id ? 'border-bad bg-bad/10' : 'border-white/10 bg-ink-800'}`}
              >
                <span className="block font-semibold text-tr">{p.tr}</span>
                <span className="block text-sm text-ink-300">{p.desc.en}</span>
              </button>
            )
          })}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-ink-400">
        <span>
          {matched.length}/{pairs.length} · mistakes · hata: {mistakes}
        </span>
        <Button variant="soft" onClick={reset} className="min-h-10 py-2 text-sm">
          <Icon name="refresh" className="size-4" /> Shuffle · Karıştır
        </Button>
      </div>
    </div>
  )
}
