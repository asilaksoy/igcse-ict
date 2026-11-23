import type { ReactNode } from 'react'
import type { ModuleMeta, SectionId } from '../data/types'
import { Icon } from './Icon'
import { useProgress } from '../hooks/useProgress'

export const SECTIONS: { id: SectionId; en: string; tr: string }[] = [
  { id: 'objectives', en: 'Objectives', tr: 'Hedefler' },
  { id: 'learn', en: 'Learn', tr: 'Öğren' },
  { id: 'explore', en: 'Explore', tr: 'Keşfet' },
  { id: 'activity', en: 'Activity', tr: 'Etkinlik' },
  { id: 'check', en: 'Check', tr: 'Kontrol' },
  { id: 'exam', en: 'Exam', tr: 'Sınav' },
  { id: 'vocab', en: 'Vocabulary', tr: 'Kelimeler' },
]

/** Same layout for every module: title, section tabs, content, previous/next. */
export function ModuleShell({ module, section, onSection, onBack, children }: { module: ModuleMeta; section: SectionId; onSection: (s: SectionId) => void; onBack: () => void; children: ReactNode }) {
  const { get } = useProgress()
  const done = get(module.id).sections
  const idx = SECTIONS.findIndex((s) => s.id === section)

  return (
    <div>
      <div className="mb-4">
        <button onClick={onBack} className="tap -ml-1 flex min-h-10 items-center gap-1 text-sm text-ink-300">
          <Icon name="back" className="size-4" /> Unit {module.unit} · Ünite {module.unit}
        </button>
        {module.number !== String(module.unit) && <div className="text-sm text-ink-400">{module.unit === 4 ? `Module ${module.number}` : module.number}</div>}
        <h1 className="text-3xl font-bold">{module.title.en}</h1>
        <div className="text-lg text-tr">{module.title.tr}</div>
      </div>

      <nav className="sticky top-16 z-20 -mx-4 mb-6 overflow-x-auto border-b border-white/5 bg-ink-950 px-4 py-2" aria-label="Sections">
        <div className="flex min-w-max gap-1">
          {SECTIONS.map((s) => {
            const active = s.id === section
            return (
              <button
                key={s.id}
                onClick={() => onSection(s.id)}
                aria-current={active ? 'page' : undefined}
                className={`tap flex items-center gap-1.5 rounded-xl px-3 text-sm font-semibold ${active ? 'bg-brand-500 text-white' : 'text-ink-300'}`}
              >
                {done.includes(s.id) && <Icon name="check" className={`size-4 ${active ? 'text-white' : 'text-ok'}`} strokeWidth={3} />}
                {s.en}
                <span className={active ? 'text-white/75' : 'text-tr/80'}>· {s.tr}</span>
              </button>
            )
          })}
        </div>
      </nav>

      <div key={section}>{children}</div>

      <div className="mt-10 flex justify-between gap-3">
        {idx > 0 ? (
          <button onClick={() => onSection(SECTIONS[idx - 1].id)} className="tap flex items-center gap-2 rounded-xl px-4 text-ink-300">
            <Icon name="back" className="size-5" /> {SECTIONS[idx - 1].en}
          </button>
        ) : (
          <span />
        )}
        {idx < SECTIONS.length - 1 && (
          <button onClick={() => onSection(SECTIONS[idx + 1].id)} className="tap flex items-center gap-2 rounded-xl bg-ink-800 px-5 font-semibold">
            {SECTIONS[idx + 1].en} · {SECTIONS[idx + 1].tr} <Icon name="arrow" className="size-5" />
          </button>
        )}
      </div>
    </div>
  )
}
