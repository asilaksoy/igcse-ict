import type { ReactNode } from 'react'
import { SITE } from '../data/site'
import { BiText } from '../components/Bilingual'
import { Button } from '../components/ui'
import { Icon } from '../components/Icon'

function Block({ icon, en, tr, children }: { icon: string; en: string; tr: string; children: ReactNode }) {
  return (
    <section className="card p-5 md:p-6">
      <h2 className="mb-3 flex items-center gap-2 text-xl font-bold">
        <Icon name={icon} className="size-5 text-cyan-glow" />
        {en} <span className="font-medium text-tr">· {tr}</span>
      </h2>
      {children}
    </section>
  )
}

export function About({ home }: { home: () => void }) {
  return (
    <div className="space-y-4">
      <h1 className="mb-2 text-3xl font-bold">
        About <span className="text-tr">· Hakkında</span>
      </h1>

      <Block icon="spark" en="Who made this & how" tr="Kim, nasıl geliştirdi">
        <BiText t={SITE.ai.long} />
        <p className="mt-3 text-sm text-ink-400">
          {SITE.author.name} – {SITE.author.role.en} · {SITE.author.role.tr}
        </p>
      </Block>

      <Block icon="target" en="Purpose" tr="Amaç">
        <BiText
          t={{
            en: 'There are very few interactive resources for ICT. This free website helps students learn Cambridge IGCSE ICT (0417) Topic 4 – Networks – in English and Turkish, on any device, without signing up.',
            tr: 'ICT dersi için etkileşimli kaynak çok az. Bu ücretsiz site, öğrencilerin Cambridge IGCSE ICT (0417) 4. Konu – Ağlar’ı İngilizce ve Türkçe olarak, her cihazda ve kayıt olmadan öğrenmesine yardımcı olur.',
          }}
        />
      </Block>

      <Block icon="book" en="Licence" tr="Lisans">
        <BiText t={SITE.license.summary} />
        <a href={SITE.license.url} target="_blank" rel="noopener noreferrer license" className="mt-3 inline-block font-semibold text-cyan-glow">
          {SITE.license.name} →
        </a>
      </Block>

      <Block icon="lock" en="Privacy" tr="Gizlilik">
        <BiText
          t={{
            en: 'No account, no cookies, no tracking and no personal data. Your progress is saved only in your own browser on this device.',
            tr: 'Hesap yok, çerez yok, takip yok ve kişisel veri yok. İlerlemen yalnızca bu cihazdaki kendi tarayıcında saklanır.',
          }}
        />
      </Block>

      <Block icon="shield" en="Important notes" tr="Önemli notlar">
        <BiText
          t={{
            en: 'This is an independent resource. It is not affiliated with, or endorsed by, Cambridge University Press & Assessment. Cambridge IGCSE is a trademark of Cambridge University Press & Assessment. Always check the official syllabus. Because AI helped prepare the material, mistakes are possible – please report any error you find.',
            tr: 'Bu bağımsız bir kaynaktır; Cambridge University Press & Assessment ile bağlantılı değildir ve onun tarafından onaylanmamıştır. Cambridge IGCSE, Cambridge University Press & Assessment’ın tescilli markasıdır. Her zaman resmî müfredatı kontrol edin. Materyalin hazırlanmasında yapay zekâ kullanıldığı için hatalar olabilir – bulduğunuz hataları lütfen bildirin.',
          }}
        />
        <a href={`${SITE.repoUrl}/issues`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block font-semibold text-cyan-glow">
          Report an error · Hata bildir →
        </a>
      </Block>

      <Button variant="soft" onClick={home}>
        <Icon name="home" className="size-5" /> Home · Ana sayfa
      </Button>
    </div>
  )
}
