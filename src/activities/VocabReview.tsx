import { useState } from 'react'
import type { VocabItem } from '../data/types'
import { Button } from '../components/ui'

/** Word list + simple flashcards. */
export function VocabReview({ items, onDone }: { items: VocabItem[]; onDone: () => void }) {
  const [cards, setCards] = useState(false)
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)

  if (!cards)
    return (
      <div>
        <div className="grid gap-2 sm:grid-cols-2">
          {items.map((v) => (
            <div key={v.en} className="rounded-xl bg-ink-800 px-4 py-3">
              <span className="font-semibold">{v.en}</span> <span className="text-tr">– {v.tr}</span>
            </div>
          ))}
        </div>
        <Button className="mt-5" onClick={() => setCards(true)}>
          Flashcards · Kartlar
        </Button>
      </div>
    )

  const card = items[idx % items.length]
  const next = () => {
    setFlipped(false)
    if (idx + 1 === items.length) onDone()
    setIdx(idx + 1)
  }
  return (
    <div className="mx-auto max-w-md">
      <div className="mb-2 text-center text-sm text-ink-400">
        {(idx % items.length) + 1}/{items.length} · tap to flip · çevirmek için dokun
      </div>
      <button onClick={() => setFlipped((f) => !f)} className="card grid min-h-48 w-full place-items-center p-6 text-center">
        {flipped ? <span className="text-3xl font-bold text-tr">{card.tr}</span> : <span className="text-3xl font-bold">{card.en}</span>}
      </button>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <Button variant="soft" onClick={() => setCards(false)}>
          List · Liste
        </Button>
        <Button onClick={next}>Next · Sonraki</Button>
      </div>
    </div>
  )
}
