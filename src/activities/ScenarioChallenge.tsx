import { useState } from 'react'
import type { Scenario } from '../data/types'
import { BiStack, BiText } from '../components/Bilingual'
import { Button, Feedback, ScoreBanner, choiceClass } from '../components/ui'

/** Choose the right technology, then choose the reason (1 mark each). */
export function ScenarioChallenge({ scenarios, onDone }: { scenarios: Scenario[]; onDone: (score: number, total: number) => void }) {
  const [i, setI] = useState(0)
  const [pick, setPick] = useState<string | null>(null)
  const [reason, setReason] = useState<number | null>(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const s = scenarios[i]
  const total = scenarios.length * 2
  const ok1 = pick === s.answer
  const ok2 = reason === s.correctReason

  const restart = () => {
    setI(0)
    setPick(null)
    setReason(null)
    setChecked(false)
    setScore(0)
    setFinished(false)
  }
  const next = () => {
    if (i + 1 >= scenarios.length) {
      setFinished(true)
      onDone(score, total)
      return
    }
    setI(i + 1)
    setPick(null)
    setReason(null)
    setChecked(false)
  }
  if (finished) return <ScoreBanner score={score} total={total} onRetry={restart} />

  return (
    <div>
      <div className="mb-2 text-sm text-ink-400">
        {i + 1}/{scenarios.length}
      </div>
      <BiText t={s.situation} className="mb-5 rounded-xl bg-ink-800 p-4" />
      <div className="mb-2 font-semibold">1. Choose · Seç</div>
      <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
        {s.options.map((o) => (
          <button key={o.id} disabled={checked} onClick={() => setPick(o.id)} className={`tap rounded-xl border px-3 py-2 font-semibold ${choiceClass(pick === o.id, checked, o.id === s.answer)}`}>
            <BiStack t={o.label} className="items-center text-center" />
          </button>
        ))}
      </div>
      <div className="mb-2 font-semibold">2. Why? · Neden?</div>
      <div className="grid gap-3">
        {s.reasons.map((r, idx) => (
          <button key={idx} disabled={checked} onClick={() => setReason(idx)} className={`tap rounded-xl border px-4 py-3 ${choiceClass(reason === idx, checked, idx === s.correctReason)}`}>
            <BiStack t={r} />
          </button>
        ))}
      </div>
      {checked && (
        <Feedback ok={ok1 && ok2}>
          <BiText t={s.explain} />
        </Feedback>
      )}
      <div className="mt-5 flex justify-end">
        {!checked ? (
          <Button
            disabled={!pick || reason === null}
            onClick={() => {
              setChecked(true)
              setScore((x) => x + (ok1 ? 1 : 0) + (ok2 ? 1 : 0))
            }}
          >
            Check · Kontrol et
          </Button>
        ) : (
          <Button onClick={next}>{i + 1 >= scenarios.length ? 'Score · Puan' : 'Next · Sonraki'}</Button>
        )}
      </div>
    </div>
  )
}
