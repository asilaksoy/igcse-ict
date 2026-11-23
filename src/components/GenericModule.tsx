import { useEffect, useState } from 'react'
import type { ModuleContent, ModuleMeta, SectionId } from '../data/types'
import { ModuleShell } from './ModuleShell'
import { BiStack, BiText, BiTitle, VocabChips } from './Bilingual'
import { Button, SectionTitle } from './ui'
import { DeviceArt, type DeviceKind } from './DeviceArt'
import { Icon } from './Icon'
import { useProgress } from '../hooks/useProgress'
import { useLang } from '../hooks/useLang'
import { NetworkSim } from '../simulations/NetworkSim'
import { CloudSync } from '../simulations/CloudSync'
import { PasswordChecker } from '../simulations/PasswordChecker'
import { AuthDemo } from '../simulations/AuthDemo'
import { MatchingActivity } from '../activities/MatchingActivity'
import { ScenarioChallenge } from '../activities/ScenarioChallenge'
import { SortActivity } from '../activities/SortActivity'
import { StepOrder } from '../activities/StepOrder'
import { CheckQuiz } from '../activities/CheckQuiz'
import { ExamPractice } from '../activities/ExamPractice'
import { VocabReview } from '../activities/VocabReview'

const SIM_TITLE = {
  network: { en: 'How data travels', tr: 'Veri nasıl gider?' },
  cloud: { en: 'Upload, download and sync', tr: 'Yükle, indir ve senkronize et' },
  password: { en: 'Password checker', tr: 'Parola kontrolü' },
  auth: { en: 'How each method works', tr: 'Her yöntem nasıl çalışır?' },
}

function Learn({ c, onDone }: { c: ModuleContent; onDone: () => void }) {
  const [active, setActive] = useState(0)
  const [seen, setSeen] = useState<number[]>([0])
  const item = c.learn[active]
  useEffect(() => {
    if (seen.length === c.learn.length) onDone()
  }, [seen, c.learn.length, onDone])

  return (
    <div>
      <SectionTitle en="Learn" tr="Öğren" />
      <div className="mb-4 flex flex-wrap gap-2">
        {c.learn.map((x, i) => (
          <button
            key={x.id}
            onClick={() => {
              setActive(i)
              setSeen((s) => [...new Set([...s, i])])
            }}
            className={`tap flex items-center gap-1.5 rounded-xl border px-4 text-sm font-semibold ${active === i ? 'border-cyan-glow bg-cyan-glow/10' : 'border-white/10 bg-ink-800'}`}
          >
            {seen.includes(i) && active !== i && <Icon name="check" className="size-4 text-ok" strokeWidth={3} />}
            {x.title.en}
          </button>
        ))}
      </div>
      <div className="card p-5 md:p-6">
        <div className={item.art ? 'grid gap-5 md:grid-cols-[160px_1fr]' : ''}>
          {item.art && <DeviceArt kind={item.art as DeviceKind} className="mx-auto w-40" />}
          <div>
            <BiTitle t={item.title} className="mb-3 text-xl font-bold" />
            <BiText t={item.text} className="text-[17px]" />
          </div>
        </div>
        {item.points && (
          <ul className="mt-5 space-y-2">
            {item.points.map((p, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan-glow" />
                <BiStack t={p} />
              </li>
            ))}
          </ul>
        )}
        {item.example && (
          <div className="mt-5 rounded-xl bg-ink-800 p-4">
            <div className="mb-1 text-sm font-semibold text-ink-300">Example · Örnek</div>
            <BiText t={item.example} />
          </div>
        )}
      </div>
      <div className="mt-6">
        <div className="mb-2 text-sm font-semibold text-ink-300">Key words · Anahtar kelimeler</div>
        <VocabChips items={c.vocab.slice(0, 8)} />
      </div>
    </div>
  )
}

function CompareTableView({ c }: { c: NonNullable<ModuleContent['compare']> }) {
  const { mode } = useLang()
  return (
    <div className="card overflow-x-auto p-5">
      <BiTitle t={c.title} className="mb-4 text-lg font-bold" />
      <table className="w-full min-w-[520px] text-left text-sm md:text-base">
        <thead>
          <tr className="text-ink-300">
            <th className="pb-2" />
            {c.columns.map((col) => (
              <th key={col} className="px-3 pb-2 font-bold text-ink-100">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {c.rows.map((r) => (
            <tr key={r.label.en} className="border-t border-white/5 align-top">
              <td className="py-2.5 pr-3 font-semibold">
                {mode !== 'tr' && <div>{r.label.en}</div>}
                {mode !== 'en' && <div className={mode === 'both' ? 'text-xs font-normal text-tr' : ''}>{r.label.tr}</div>}
              </td>
              {r.cells.map((cell, i) => (
                <td key={i} className="px-3 py-2.5">
                  {mode !== 'tr' && <div>{cell.en}</div>}
                  {mode !== 'en' && <div className={mode === 'both' ? 'text-xs text-tr' : ''}>{cell.tr}</div>}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Every module uses this one template; only the content file differs. */
export function GenericModule({ module, content: c, section, onSection }: { module: ModuleMeta; content: ModuleContent; section: SectionId; onSection: (s: SectionId) => void }) {
  const { completeSection, saveScore } = useProgress()
  const id = module.id
  const done = (s: SectionId) => completeSection(id, s)
  const tabs = [
    { k: 'match', en: 'Matching', tr: 'Eşleştirme' },
    ...(c.sort ? [{ k: 'sort', en: 'Sorting', tr: 'Sınıflandırma' }] : []),
    ...(c.steps ? [{ k: 'steps', en: 'Order the steps', tr: 'Adımları sırala' }] : []),
    { k: 'scenario', en: 'Scenarios', tr: 'Senaryolar' },
  ]
  const [tab, setTab] = useState('match')
  const finishActivity = (name: string) => (s: number, t: number) => {
    saveScore(id, name, s, t)
    done('activity')
  }

  return (
    <ModuleShell module={module} section={section} onSection={onSection}>
      {section === 'objectives' && (
        <div>
          <SectionTitle en="Learning objectives" tr="Öğrenme hedefleri" />
          <p className="mb-4 text-sm text-ink-400">Cambridge IGCSE ICT 0417 syllabus (2026–2028), {module.syllabusRef}</p>
          <div className="space-y-3">
            {module.objectives.map((o, i) => (
              <div key={i} className="card flex gap-4 p-4">
                <span className="font-bold text-cyan-glow">{i + 1}</span>
                <BiText t={o} />
              </div>
            ))}
          </div>
          <Button
            className="mt-6"
            onClick={() => {
              done('objectives')
              onSection('learn')
            }}
          >
            Start · Başla <Icon name="arrow" className="size-5" />
          </Button>
        </div>
      )}

      {section === 'learn' && <Learn c={c} onDone={() => done('learn')} />}

      {section === 'explore' && (
        <div className="space-y-8">
          <SectionTitle en="Explore" tr="Keşfet" />
          {c.sim && (
            <div>
              <BiTitle t={SIM_TITLE[c.sim]} className="mb-4 text-lg font-bold" />
              {c.sim === 'network' && <NetworkSim onRun={() => done('explore')} />}
              {c.sim === 'cloud' && <CloudSync onUse={() => done('explore')} />}
              {c.sim === 'password' && <PasswordChecker onUse={() => done('explore')} />}
              {c.sim === 'auth' && <AuthDemo onUse={() => done('explore')} />}
            </div>
          )}
          {c.compare && (
            <div onClick={() => !c.sim && done('explore')}>
              <CompareTableView c={c.compare} />
            </div>
          )}
          {!c.sim && (
            <Button variant="soft" onClick={() => done('explore')}>
              <Icon name="check" className="size-5" /> I have read the table · Tabloyu okudum
            </Button>
          )}
        </div>
      )}

      {section === 'activity' && (
        <div>
          <SectionTitle en="Activities" tr="Etkinlikler" />
          <div className="mb-4 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button key={t.k} onClick={() => setTab(t.k)} className={`tap rounded-xl px-4 text-sm font-semibold ${tab === t.k ? 'bg-brand-500 text-white' : 'bg-ink-800 text-ink-300'}`}>
                {t.en} · {t.tr}
              </button>
            ))}
          </div>
          {tab === 'steps' && c.steps ? (
            <div className="space-y-4">
              {c.steps.map((s) => (
                <StepOrder key={s.title.en} task={s} onDone={() => done('activity')} />
              ))}
            </div>
          ) : (
            <div className="card p-5">
              {tab === 'match' && <MatchingActivity pairs={c.match} onDone={finishActivity('matching')} />}
              {tab === 'sort' && c.sort && (
                <>
                  <BiTitle t={c.sort.title} className="mb-3 text-lg font-bold" />
                  <SortActivity task={c.sort} onDone={finishActivity('sorting')} />
                </>
              )}
              {tab === 'scenario' && <ScenarioChallenge scenarios={c.scenarios} onDone={finishActivity('scenarios')} />}
            </div>
          )}
        </div>
      )}

      {section === 'check' && (
        <div>
          <SectionTitle en="Check your understanding" tr="Anladığını kontrol et" />
          <div className="card p-5">
            <CheckQuiz
              questions={c.check}
              onDone={(s, t) => {
                saveScore(id, 'check', s, t)
                done('check')
              }}
            />
          </div>
        </div>
      )}

      {section === 'exam' && (
        <div>
          <SectionTitle en="Exam practice" tr="Sınav pratiği" />
          <ExamPractice
            questions={c.exam}
            onScore={(s, t) => {
              saveScore(id, 'exam', s, t)
              done('exam')
            }}
          />
        </div>
      )}

      {section === 'vocab' && (
        <div>
          <SectionTitle en="Vocabulary" tr="Kelimeler" />
          <VocabReview items={c.vocab} onDone={() => done('vocab')} />
        </div>
      )}
    </ModuleShell>
  )
}
