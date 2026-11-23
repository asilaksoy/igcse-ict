import { useState } from 'react'
import type { ExamQuestion, MarkPoint } from '../data/types'
import { BiText } from '../components/Bilingual'
import { Button } from '../components/ui'
import { Icon } from '../components/Icon'

const commandTr: Record<ExamQuestion['command'], string> = {
  Define: 'Tanımla',
  State: 'Belirt',
  Describe: 'Betimle',
  Explain: 'Açıkla',
  Compare: 'Karşılaştır',
  Scenario: 'Senaryo',
}

/** Keyword-based estimate: a point is matched if ANY keyword group fully appears in the answer. */
export function markAnswer(answer: string, points: MarkPoint[]) {
  const a = answer.toLocaleLowerCase('en')
  return points.map((p) => p.keywords.some((group) => group.every((k) => a.includes(k))))
}

function ExamCard({ q, onScore }: { q: ExamQuestion; onScore: (id: string, marks: number) => void }) {
  const [text, setText] = useState('')
  const [checked, setChecked] = useState(false)
  const hits = checked ? markAnswer(text, q.points) : []
  const awarded = Math.min(q.marks, hits.filter(Boolean).length)

  return (
    <div className="card p-5">
      <div className="mb-3 flex items-center gap-2 text-sm">
        <span className="rounded-md bg-tr/15 px-2 py-0.5 font-semibold text-tr">
          {q.command} · {commandTr[q.command]}
        </span>
        <span className="ml-auto text-ink-400">
          [{q.marks} mark{q.marks > 1 ? 's' : ''}]
        </span>
      </div>
      <BiText t={q.prompt} className="mb-3 font-medium" />
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setChecked(false)
        }}
        rows={q.marks > 2 ? 4 : 3}
        placeholder="Answer in English… · İngilizce cevapla…"
        className="w-full rounded-xl border border-white/10 bg-ink-950 p-3 text-base placeholder:text-ink-400 focus:border-cyan-glow focus:outline-none"
      />
      <div className="mt-3 flex justify-end">
        <Button
          disabled={text.trim().length < 3}
          onClick={() => {
            setChecked(true)
            onScore(q.id, Math.min(q.marks, markAnswer(text, q.points).filter(Boolean).length))
          }}
        >
          Check · Kontrol et
        </Button>
      </div>
      {checked && (
        <div className="mt-4 space-y-3">
          <div className="font-semibold">
            <span className="text-cyan-glow">
              {awarded}/{q.marks}
            </span>{' '}
            <span className="text-sm font-normal text-ink-400">estimate – teacher decides · tahmini – son karar öğretmende</span>
          </div>
          <ul className="space-y-2">
            {q.points.map((p, idx) => (
              <li key={idx} className="flex gap-2 text-sm">
                <Icon name={hits[idx] ? 'check' : 'x'} className={`mt-0.5 size-4 shrink-0 ${hits[idx] ? 'text-ok' : 'text-ink-400'}`} strokeWidth={2.5} />
                <span>
                  {p.point.en} <span className="text-tr">· {p.point.tr}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="rounded-xl bg-ink-800 p-4">
            <div className="mb-1 text-sm font-semibold text-tr">Model answer · Örnek cevap</div>
            <BiText t={q.model} />
          </div>
        </div>
      )}
    </div>
  )
}

export function ExamPractice({ questions, onScore }: { questions: ExamQuestion[]; onScore: (score: number, total: number) => void }) {
  const [marks, setMarks] = useState<Record<string, number>>({})
  const total = questions.reduce((s, q) => s + q.marks, 0)
  const record = (id: string, m: number) => {
    const next = { ...marks, [id]: m }
    setMarks(next)
    if (Object.keys(next).length === questions.length) onScore(Object.values(next).reduce((s, x) => s + x, 0), total)
  }
  return (
    <div className="space-y-4">
      {questions.map((q) => (
        <ExamCard key={q.id} q={q} onScore={record} />
      ))}
    </div>
  )
}
