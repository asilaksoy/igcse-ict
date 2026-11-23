import { useState } from 'react'
import { UNITS, modulesOf } from '../data/modules'
import { SITE } from '../data/site'
import { Icon } from '../components/Icon'
import { ProgressBar } from '../components/ui'
import { useProgress } from '../hooks/useProgress'

/** Home page: the units of the course. */
export function Dashboard({ open }: { open: (id: string) => void }) {
  const { percent, reset } = useProgress()
  const [confirm, setConfirm] = useState(false)

  return (
    <div>
      <section className="mb-8">
        <div className="text-sm text-ink-400">Cambridge IGCSE ICT (0417)</div>
        <h1 className="mt-1 text-3xl font-bold md:text-4xl">Information and Communication Technology</h1>
        <div className="text-xl text-tr">Bilgi ve İletişim Teknolojileri</div>
        <p className="mt-4 max-w-2xl text-ink-200">
          Lessons, activities and exam practice for each unit.
          <span className="block text-tr/90">Her ünite için ders anlatımı, etkinlikler ve sınav pratiği.</span>
        </p>
      </section>

      <h2 className="mb-3 text-lg font-bold">
        Units <span className="font-medium text-tr">· Üniteler</span>
      </h2>
      <div className="grid gap-3">
        {UNITS.map((u) => {
          const mods = modulesOf(u.number)
          const p = Math.round(mods.reduce((s, m) => s + percent(m.id), 0) / Math.max(1, mods.length))
          return (
            <button key={u.id} onClick={() => open(u.id)} className="tap card flex items-center gap-4 p-4 text-left">
              <div className="grid size-14 shrink-0 place-items-center rounded-xl bg-ink-800 text-cyan-glow">
                <span className="text-2xl font-bold">{u.number}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold">{u.title.en}</div>
                <div className="text-tr">{u.title.tr}</div>
                <div className="mt-2 flex items-center gap-2">
                  <ProgressBar value={p} />
                  <span className="w-28 shrink-0 text-right text-xs text-ink-400">
                    {mods.length} {mods.length === 1 ? 'module' : 'modules'} · {p}%
                  </span>
                </div>
              </div>
              <Icon name="arrow" className="size-5 shrink-0 text-ink-400" />
            </button>
          )
        })}
      </div>
      <p className="mt-3 text-sm text-ink-400">
        More units will be added over time. · Diğer üniteler zamanla eklenecek.
      </p>

      <section className="mt-8">
        <div className="card p-5">
          <h2 className="mb-2 font-bold">
            For teachers <span className="font-medium text-tr">· Öğretmenler için</span>
          </h2>
          <p className="text-sm text-ink-200">
            Share a link or a QR code with your class – every unit and module has its own link. Students do not need an account. You may reuse the material under {SITE.license.name}.
          </p>
          <p className="mt-1 text-sm text-tr/90">
            Linki veya QR kodunu sınıfınızla paylaşabilirsiniz – her ünite ve modülün kendi linki vardır. Öğrencilerin hesap açması gerekmez. Materyali {SITE.license.name} lisansıyla kullanabilirsiniz.
          </p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-400">
        <span>Your progress is saved only in this browser. · İlerlemen yalnızca bu tarayıcıda saklanır.</span>
        <button
          onClick={() => {
            if (confirm) {
              reset()
              setConfirm(false)
            } else setConfirm(true)
          }}
          className={`tap rounded-xl border px-4 ${confirm ? 'border-bad text-bad' : 'border-white/10'}`}
        >
          {confirm ? 'Tap again to confirm · Onay için tekrar dokun' : 'Reset progress · Sıfırla'}
        </button>
      </div>
    </div>
  )
}
