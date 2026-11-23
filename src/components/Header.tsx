import { Icon } from './Icon'
import { SITE } from '../data/site'
import { useLang, type LangMode } from '../hooks/useLang'

export function Header({ onHome, onAbout, showHome }: { onHome: () => void; onAbout: () => void; showHome: boolean }) {
  const { mode, setMode } = useLang()
  const modes: { id: LangMode; label: string }[] = [
    { id: 'both', label: 'EN+TR' },
    { id: 'en', label: 'EN' },
    { id: 'tr', label: 'TR' },
  ]
  return (
    <header className="sticky top-0 z-30 border-b border-white/5 bg-ink-950">
      <div className="mx-auto flex h-16 max-w-5xl items-center gap-2 px-4">
        <button onClick={onHome} className="tap flex items-center gap-2 rounded-xl px-2 font-semibold" aria-label="Home">
          <Icon name={showHome ? 'home' : 'lan'} className="size-6 text-cyan-glow" />
          <span className={showHome ? 'hidden sm:inline' : ''}>{showHome ? 'Home · Ana sayfa' : SITE.name}</span>
        </button>
        <button onClick={onAbout} className="tap ml-auto rounded-xl px-3 text-sm font-semibold text-ink-300">
          About<span className="hidden sm:inline"> · Hakkında</span>
        </button>
        <div className="flex rounded-xl bg-ink-800 p-1" role="group" aria-label="Language">
          {modes.map((m) => (
            <button key={m.id} onClick={() => setMode(m.id)} aria-pressed={mode === m.id} className={`min-h-10 rounded-lg px-3 text-sm font-bold ${mode === m.id ? 'bg-brand-500 text-white' : 'text-ink-300'}`}>
              {m.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}
