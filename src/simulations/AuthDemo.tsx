import { useState } from 'react'
import type { Bi } from '../data/types'
import { BiStack } from '../components/Bilingual'
import { Button } from '../components/ui'
import { Icon } from '../components/Icon'

const METHODS: { id: string; name: Bi; icon: string; steps: Bi[] }[] = [
  {
    id: 'bio',
    name: { en: 'Biometrics', tr: 'Biyometri' },
    icon: 'fingerprint',
    steps: [
      { en: 'The user places a finger on the scanner.', tr: 'Kullanıcı parmağını tarayıcıya koyar.' },
      { en: 'The fingerprint is compared with the stored fingerprint.', tr: 'Parmak izi, kayıtlı parmak iziyle karşılaştırılır.' },
      { en: 'If they match, access is given.', tr: 'Eşleşirse erişim verilir.' },
    ],
  },
  {
    id: 'mag',
    name: { en: 'Magnetic stripe', tr: 'Manyetik şerit' },
    icon: 'cards',
    steps: [
      { en: 'The user swipes the card through a reader.', tr: 'Kullanıcı kartı okuyucudan geçirir.' },
      { en: 'Data on the magnetic stripe is read.', tr: 'Manyetik şeritteki veri okunur.' },
      { en: 'The data is checked; if valid, access is given.', tr: 'Veri kontrol edilir; geçerliyse erişim verilir.' },
    ],
  },
  {
    id: 'smart',
    name: { en: 'Smart card', tr: 'Akıllı kart' },
    icon: 'cards',
    steps: [
      { en: 'The card is inserted or held near the reader.', tr: 'Kart okuyucuya takılır veya yaklaştırılır.' },
      { en: 'Data is read from the chip on the card.', tr: 'Karttaki çipten veri okunur.' },
      { en: 'The user may also enter a PIN; if correct, access is given.', tr: 'Kullanıcı ayrıca PIN girebilir; doğruysa erişim verilir.' },
    ],
  },
  {
    id: 'phys',
    name: { en: 'Physical token', tr: 'Fiziksel token' },
    icon: 'lock',
    steps: [
      { en: 'The user presses a button on the small token device.', tr: 'Kullanıcı küçük token cihazındaki düğmeye basar.' },
      { en: 'The token shows a one-time code.', tr: 'Token tek kullanımlık bir kod gösterir.' },
      { en: 'The user types the code; it only works once / for a short time.', tr: 'Kullanıcı kodu girer; kod yalnızca bir kez / kısa süre geçerlidir.' },
    ],
  },
  {
    id: 'elec',
    name: { en: 'Electronic token', tr: 'Elektronik token' },
    icon: 'tablet',
    steps: [
      { en: 'The user logs in with username and password.', tr: 'Kullanıcı kullanıcı adı ve parolayla giriş yapar.' },
      { en: 'An app on the phone creates a one-time code.', tr: 'Telefondaki bir uygulama tek kullanımlık kod üretir.' },
      { en: 'The user enters the code to complete the login.', tr: 'Kullanıcı girişi tamamlamak için kodu girer.' },
    ],
  },
  {
    id: 'zero',
    name: { en: 'Zero login', tr: 'Sıfır giriş' },
    icon: 'spark',
    steps: [
      { en: 'The user simply starts using the device.', tr: 'Kullanıcı cihazı kullanmaya başlar.' },
      { en: 'The system recognises the user, e.g. by their device, location or behaviour.', tr: 'Sistem kullanıcıyı tanır; ör. cihazı, konumu veya davranışıyla.' },
      { en: 'Access is given without typing a password.', tr: 'Parola yazmadan erişim verilir.' },
    ],
  },
]

/** Step-by-step demonstration of each authentication method. */
export function AuthDemo({ onUse }: { onUse: () => void }) {
  const [m, setM] = useState(METHODS[0])
  const [step, setStep] = useState(0)
  const done = step >= m.steps.length

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {METHODS.map((x) => (
          <button
            key={x.id}
            onClick={() => {
              setM(x)
              setStep(0)
            }}
            className={`tap rounded-xl border px-3 py-2 ${m.id === x.id ? 'border-cyan-glow bg-cyan-glow/10' : 'border-white/10 bg-ink-800'}`}
          >
            <BiStack t={x.name} />
          </button>
        ))}
      </div>
      <div className="card p-5">
        <div className="mb-4 flex items-center gap-3">
          <Icon name={m.icon} className="size-8 text-cyan-glow" />
          <BiStack t={m.name} className="font-bold" />
        </div>
        <ol className="space-y-2">
          {m.steps.slice(0, step).map((s, i) => (
            <li key={i} className="flex gap-3 rounded-xl bg-ink-800 p-3">
              <span className="font-bold text-cyan-glow">{i + 1}</span>
              <BiStack t={s} />
            </li>
          ))}
        </ol>
        {done ? (
          <div className="mt-4 flex items-center justify-between">
            <span className="flex items-center gap-2 font-semibold text-ok">
              <Icon name="check" className="size-5" /> Access granted · Erişim verildi
            </span>
            <Button variant="soft" onClick={() => setStep(0)}>
              Again · Tekrar
            </Button>
          </div>
        ) : (
          <Button
            className="mt-4"
            onClick={() => {
              setStep(step + 1)
              onUse()
            }}
          >
            {step === 0 ? 'Start · Başla' : 'Next step · Sonraki adım'}
          </Button>
        )}
      </div>
    </div>
  )
}
