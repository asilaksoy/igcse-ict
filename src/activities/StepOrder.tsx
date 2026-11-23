import { useMemo, useState } from 'react'
import type { StepTask } from '../data/types'
import { BiStack, BiTitle } from '../components/Bilingual'
import { Button } from '../components/ui'
import { Icon } from '../components/Icon'

const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5)

/** Tap the steps in the correct order. */
export function StepOrder({ task, onDone }: { task: StepTask; onDone: () => void }) {
  const [round, setRound] = useState(0)
  const pool = useMemo(() => shuffle(task.steps.map((s, i) => ({ s, i }))), [task, round])
  const [order, setOrder] = useState<number[]>([])
  const [wrong, setWrong] = useState<number | null>(null)
  const done = order.length === task.steps.length

  const tap = (i: number) => {
    if (i === order.length) {
      const n = [...order, i]
      setOrder(n)
      if (n.length === task.steps.length) onDone()
    } else {
      setWrong(i)
      setTimeout(() => setWrong(null), 500)
    }
  }

  return (
    <div className="card p-5">
      <BiTitle t={task.title} className="mb-4 text-lg font-bold" />
      <ol className="mb-4 space-y-2">
        {order.map((i, n) => (
          <li key={i} className="flex items-center gap-3 rounded-xl bg-ok/10 px-4 py-2">
            <span className="font-bold text-ok">{n + 1}</span>
            <BiStack t={task.steps[i]} />
          </li>
        ))}
      </ol>
      {!done ? (
        <div className="grid gap-2 sm:grid-cols-2">
          {pool
            .filter((p) => !order.includes(p.i))
            .map((p) => (
              <button key={p.i} onClick={() => tap(p.i)} className={`tap rounded-xl border px-4 py-2 ${wrong === p.i ? 'border-bad bg-bad/10' : 'border-white/10 bg-ink-800'}`}>
                <BiStack t={p.s} />
              </button>
            ))}
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 font-semibold text-ok">
            <Icon name="check" className="size-5" /> Correct order · Doğru sıra
          </span>
          <Button
            variant="soft"
            onClick={() => {
              setOrder([])
              setRound((r) => r + 1)
            }}
          >
            Again · Tekrar
          </Button>
        </div>
      )}
    </div>
  )
}
