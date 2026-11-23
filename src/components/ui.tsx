import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Icon } from './Icon'

type Variant = 'primary' | 'soft'

export function Button({ variant = 'primary', className = '', children, ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const v = variant === 'primary' ? 'bg-brand-500 text-white disabled:opacity-40' : 'bg-ink-800 text-ink-100 border border-white/10 disabled:opacity-40'
  return (
    <button type="button" className={`tap inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold ${v} ${className}`} {...rest}>
      {children}
    </button>
  )
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-ink-800" role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}>
      <div className="h-full rounded-full bg-cyan-glow transition-all duration-500" style={{ width: `${value}%` }} />
    </div>
  )
}

export function SectionTitle({ en, tr }: { en: string; tr: string }) {
  return (
    <h2 className="mb-5 text-2xl font-bold">
      {en} <span className="font-medium text-tr">· {tr}</span>
    </h2>
  )
}

/** Selected / correct / wrong state for choice buttons */
export function choiceClass(selected: boolean, checked: boolean, correct: boolean) {
  if (!checked) return selected ? 'border-cyan-glow bg-cyan-glow/10' : 'border-white/10 bg-ink-800'
  if (correct) return 'border-ok bg-ok/10'
  if (selected) return 'border-bad bg-bad/10'
  return 'border-white/10 bg-ink-800 opacity-50'
}

export function Feedback({ ok, children }: { ok: boolean; children: ReactNode }) {
  return (
    <div className={`mt-4 rounded-xl border p-4 ${ok ? 'border-ok/40 bg-ok/10' : 'border-bad/40 bg-bad/10'}`} role="status">
      <div className={`mb-2 flex items-center gap-2 font-bold ${ok ? 'text-ok' : 'text-bad'}`}>
        <Icon name={ok ? 'check' : 'x'} className="size-5" strokeWidth={2.5} />
        {ok ? 'Correct · Doğru' : 'Not quite · Tam değil'}
      </div>
      {children}
    </div>
  )
}

export function ScoreBanner({ score, total, onRetry }: { score: number; total: number; onRetry: () => void }) {
  const pct = Math.round((score / total) * 100)
  return (
    <div className="card p-6 text-center">
      <div className="text-4xl font-bold text-cyan-glow">
        {score}/{total}
      </div>
      <div className="mt-1 text-ink-300">{pct >= 80 ? 'Excellent · Harika' : pct >= 50 ? 'Good · İyi' : 'Keep practising · Çalışmaya devam'}</div>
      <Button variant="soft" className="mt-4" onClick={onRetry}>
        <Icon name="refresh" className="size-5" /> Try again · Tekrar
      </Button>
    </div>
  )
}
