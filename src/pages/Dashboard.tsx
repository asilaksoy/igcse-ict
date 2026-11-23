import { useState } from 'react'
import { MODULES } from '../data/modules'
import { SITE } from '../data/site'
import { Icon } from '../components/Icon'
import { ProgressBar } from '../components/ui'
import { useProgress } from '../hooks/useProgress'

/** Home page: short introduction, the eight modules, notes for teachers. */
export function Dashboard({ open }: { open: (id: string) => void }) {
  const { percent, reset } = useProgress()
  const [confirm, setConfirm] = useState(false)

  return (
    <div>
      <section className="mb-8">
        <div className="text-sm text-ink-400">Cambridge IGCSE ICT (0417) · Topic 4</div>
        <h1 className="mt-1 text-3xl font-bold md:text-4xl">Networks</h1>
        <div className="text-xl text-tr">Ağlar</div>
        <p className="mt-4 max-w-2xl text-ink-200">
          Lessons, activities and exam practice for Topic 4.
          <span className="block text-tr/90">4. konu için ders anlatımı, etkinlikler ve sınav pratiği.</span>
        </p>
      </section>

      <h2 className="mb-3 text-lg font-bold">
        Modules <span className="font-medium text-tr">· Modüller</span>
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {MODULES.map((m) => {
          const p = percent(m.id)
          return (
            <button key={m.id} onClick={() => open(m.id)} className="tap card flex items-center gap-4 p-4 text-left">
              <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-ink-800 text-cyan-glow">
                <Icon name={m.icon} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-bold">
                  <span className="mr-2 text-ink-400">{m.number}</span>
                  {m.title.en}
                </div>
                <div className="text-tr">{m.title.tr}</div>
                <div className="mt-2 flex items-center gap-2">
                  <ProgressBar value={p} />
                  <span className="w-10 text-right text-xs text-ink-400">{p}%</span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <section className="mt-8">
        <div className="card p-5">
          <h2 className="mb-2 font-bold">
            For teachers <span className="font-medium text-tr">· Öğretmenler için</span>
          </h2>
          <p className="text-sm text-ink-200">
            Share the link or a QR code with your class. Students do not need an account. You may reuse the material under {SITE.license.name}.
          </p>
          <p className="mt-1 text-sm text-tr/90">
            Linki veya QR kodunu sınıfınızla paylaşabilirsiniz. Öğrencilerin hesap açması gerekmez. Materyali {SITE.license.name} lisansıyla kullanabilirsiniz.
          </p>
        </div>
      </section>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-sm text-ink-400">
        <span>
          Your progress is saved only in this browser. · İlerlemen yalnızca bu tarayıcıda saklanır.
        </span>
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
