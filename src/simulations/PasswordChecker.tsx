import { useState } from 'react'
import { Icon } from '../components/Icon'

const COMMON = ['password', '123456', 'qwerty', 'abc123', '111111', 'iloveyou', 'admin', 'welcome', 'sifre', 'galatasaray', 'fenerbahce', 'besiktas']

/** Checks a practice password against the features of a strong password. Nothing is stored. */
export function PasswordChecker({ onUse }: { onUse: () => void }) {
  const [pw, setPw] = useState('')
  const rules = [
    { ok: pw.length >= 8, en: 'At least 8 characters', tr: 'En az 8 karakter' },
    { ok: /[A-Z]/.test(pw), en: 'Upper-case letter', tr: 'Büyük harf' },
    { ok: /[a-z]/.test(pw), en: 'Lower-case letter', tr: 'Küçük harf' },
    { ok: /\d/.test(pw), en: 'Number', tr: 'Rakam' },
    { ok: /[^A-Za-z0-9]/.test(pw), en: 'Symbol (e.g. ! # ?)', tr: 'Sembol (ör. ! # ?)' },
    { ok: pw.length > 0 && !COMMON.some((c) => pw.toLowerCase().includes(c)), en: 'Not a common word', tr: 'Yaygın bir kelime değil' },
  ]
  const n = rules.filter((r) => r.ok).length
  const level = n <= 3 ? { en: 'Weak', tr: 'Zayıf', c: 'bg-bad', w: 33 } : n <= 5 ? { en: 'Medium', tr: 'Orta', c: 'bg-tr', w: 66 } : { en: 'Strong', tr: 'Güçlü', c: 'bg-ok', w: 100 }

  return (
    <div className="card p-5">
      <p className="mb-3 text-sm text-ink-300">Type a practice password – never a real one. · Deneme parolası yaz – gerçek parolanı asla yazma.</p>
      <input
        value={pw}
        onChange={(e) => {
          setPw(e.target.value)
          onUse()
        }}
        autoComplete="off"
        spellCheck={false}
        className="w-full rounded-xl border border-white/10 bg-ink-950 p-3 font-mono text-lg focus:border-cyan-glow focus:outline-none"
        placeholder="e.g. Kedi#2026!"
      />
      {pw && (
        <>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-ink-800">
            <div className={`h-full ${level.c} transition-all`} style={{ width: `${level.w}%` }} />
          </div>
          <div className="mt-2 font-bold">
            {level.en} · {level.tr}
          </div>
        </>
      )}
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {rules.map((r) => (
          <li key={r.en} className={`flex items-center gap-2 text-sm ${r.ok ? 'text-ok' : 'text-ink-400'}`}>
            <Icon name={r.ok ? 'check' : 'x'} className="size-4" strokeWidth={2.5} />
            {r.en} · {r.tr}
          </li>
        ))}
      </ul>
    </div>
  )
}
