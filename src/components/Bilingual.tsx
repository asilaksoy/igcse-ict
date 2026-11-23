import type { Bi, VocabItem } from '../data/types'
import { useLang } from '../hooks/useLang'

/**
 * Turkish first, English underneath in a lighter colour.
 * The header toggle can show only one language.
 */
export function BiText({ t, className = '' }: { t: Bi; className?: string }) {
  const { mode } = useLang()
  return (
    <div className={`space-y-1 leading-relaxed ${className}`}>
      {mode !== 'en' && <p lang="tr">{t.tr}</p>}
      {mode !== 'tr' && <p lang="en" className={mode === 'both' ? 'text-en' : ''}>{t.en}</p>}
    </div>
  )
}

/** "English – Türkçe" title */
export function BiTitle({ t, className = '' }: { t: Bi; className?: string }) {
  const { mode } = useLang()
  return (
    <h3 className={className}>
      {mode !== 'tr' && t.en}
      {mode === 'both' && <span className="text-ink-400"> – </span>}
      {mode !== 'en' && <span className={mode === 'both' ? 'text-tr' : ''}>{t.tr}</span>}
    </h3>
  )
}

/** Compact two-line label for buttons and options */
export function BiStack({ t, className = '' }: { t: Bi; className?: string }) {
  const { mode } = useLang()
  if (t.en === t.tr) return <span className={`flex flex-col text-left ${className}`}>{t.en}</span>
  return (
    <span className={`flex flex-col text-left ${className}`}>
      {mode !== 'tr' && <span>{t.en}</span>}
      {mode !== 'en' && <span className={mode === 'both' ? 'text-sm text-tr' : ''}>{t.tr}</span>}
    </span>
  )
}

export function VocabChips({ items }: { items: VocabItem[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((v) => (
        <span key={v.en} className="rounded-lg bg-ink-800 px-3 py-1 text-sm">
          {v.en} <span className="text-tr">– {v.tr}</span>
        </span>
      ))}
    </div>
  )
}
