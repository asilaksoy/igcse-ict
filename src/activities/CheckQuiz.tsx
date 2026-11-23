import { useState } from 'react'
import type { CheckQuestion } from '../data/types'
import { BiStack, BiText } from '../components/Bilingual'
import { Button, Feedback, ProgressBar, ScoreBanner, choiceClass } from '../components/ui'

/** Multiple choice, true/false and fill-the-gap questions with instant feedback. */
export function CheckQuiz({ questions, onDone }: { questions: CheckQuestion[]; onDone: (score: number, total: number) => void }) {
  const [i, setI] = useState(0)
  const [choice, setChoice] = useState<string | null>(null)
  const [checked, setChecked] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const q = questions[i]

  const correctKey = q.kind === 'mcq' ? String(q.answer) : q.kind === 'tf' ? String(q.answer) : q.answer
  const isCorrect = choice === correctKey

  const restart = () => {
    setI(0)
    setChoice(null)
    setChecked(false)
    setScore(0)
    setFinished(false)
  }
  const next = () => {
    if (i + 1 >= questions.length) {
      setFinished(true)
      onDone(score, questions.length)
      return
    }
    setI(i + 1)
    setChoice(null)
    setChecked(false)
  }

  if (finished) return <ScoreBanner score={score} total={questions.length} onRetry={restart} />

  const options: { key: string; node: React.ReactNode }[] =
    q.kind === 'mcq'
      ? q.options.map((o, idx) => ({ key: String(idx), node: <BiStack t={o} /> }))
      : q.kind === 'tf'
        ? [
            { key: 'true', node: 'True · Doğru' },
            { key: 'false', node: 'False · Yanlış' },
          ]
        : q.bank.map((w) => ({ key: w, node: <span className="font-mono">{w}</span> }))

  return (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={(i / questions.length) * 100} />
        <span className="text-sm text-ink-300">
          {i + 1}/{questions.length}
        </span>
      </div>
      <BiText t={q.prompt} className="mb-5 text-lg font-medium" />
      <div className={`grid gap-3 ${q.kind === 'fill' ? 'grid-cols-2 sm:grid-cols-4' : 'sm:grid-cols-2'}`}>
        {options.map((o) => (
          <button key={o.key} disabled={checked} onClick={() => setChoice(o.key)} className={`tap rounded-xl border px-4 py-3 text-left ${choiceClass(choice === o.key, checked, o.key === correctKey)}`}>
            {o.node}
          </button>
        ))}
      </div>
      {checked && (
        <Feedback ok={isCorrect}>
          <BiText t={q.explain} />
        </Feedback>
      )}
      <div className="mt-5 flex justify-end">
        {!checked ? (
          <Button
            disabled={choice === null}
            onClick={() => {
              setChecked(true)
              if (isCorrect) setScore((s) => s + 1)
            }}
          >
            Check · Kontrol et
          </Button>
        ) : (
          <Button onClick={next}>{i + 1 >= questions.length ? 'Score · Puan' : 'Next · Sonraki'}</Button>
        )}
      </div>
    </div>
  )
}
