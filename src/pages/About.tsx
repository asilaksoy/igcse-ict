import type { ReactNode } from 'react'
import { SITE } from '../data/site'
import { BiText } from '../components/Bilingual'
import { Button } from '../components/ui'
import { Icon } from '../components/Icon'

function Block({ en, tr, children }: { en: string; tr: string; children: ReactNode }) {
  return (
    <section className="card p-5 md:p-6">
      <h2 className="mb-3 text-lg font-bold">
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

      <Block en="What is this site?" tr="Bu site nedir?">
        <BiText
          t={{
            tr: 'Bu site, Cambridge IGCSE ICT (0417) dersi için hazırladığım iki dilli bir çalışma sitesidir. İlk olarak kendi derslerimde öğrencilerimin tabletlerinden kullanması için yaptım. Türkçe destekli etkileşimli ICT kaynağı az olduğu için herkesin kullanımına açtım. Şu anda 1–4. üniteler var; diğer üniteleri zamanla ekleyeceğim.',
            en: 'This is a bilingual study site for Cambridge IGCSE ICT (0417). I first made it for my own lessons, so my students could use it on their tablets. As there are few interactive ICT resources with Turkish support, I have made it open to everyone. Units 1–4 are available now; I will add the other units over time.',
          }}
        />
        <p className="mt-3 text-sm text-ink-400">
          {SITE.author.name} – {SITE.author.role.tr} · {SITE.author.role.en}
        </p>
      </Block>

      <Block en="How it was made" tr="Nasıl hazırlandı?">
        <BiText t={SITE.ai.long} />
      </Block>

      <Block en="What it includes" tr="Neler var?">
        <BiText
          t={{
            tr: 'Her ünite modüllere ayrılmıştır. Her modülde kısa konu anlatımı, karşılaştırma tablosu veya simülasyon, eşleştirme ve senaryo etkinlikleri, test soruları ve sınav tarzı yazılı sorular bulunur.',
            en: 'Each unit is divided into modules. Each module has short explanations, a comparison table or simulation, matching and scenario activities, quiz questions and exam-style written questions.',
          }}
        />
      </Block>

      <Block en="Please note" tr="Bilmeniz gerekenler">
        <ul className="space-y-3">
          {[
            {
              tr: 'Bu site resmî bir Cambridge kaynağı değildir; Cambridge University Press & Assessment ile bağlantısı yoktur. Ders kitabının ve resmî müfredatın yerini tutmaz.',
              en: 'This is not an official Cambridge resource and is not connected to Cambridge University Press & Assessment. It does not replace the textbook or the official syllabus.',
            },
            {
              tr: 'Yazılı sorulardaki puan, cevaptaki anahtar kelimelere bakılarak verilen tahmini bir puandır. Gerçek puanlamayı öğretmen yapar.',
              en: 'Marks for written answers are only an estimate based on key words. Real marking is done by a teacher.',
            },
            {
              tr: 'İçerikte hata olabilir. Bir hata görürseniz bildirmeniz çok yardımcı olur.',
              en: 'The content may contain mistakes. If you find one, please let me know.',
            },
          ].map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan-glow" />
              <BiText t={t} />
            </li>
          ))}
        </ul>
        <a href={`${SITE.repoUrl}/issues`} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block font-semibold text-cyan-glow">
          Report an error (GitHub) · Hata bildir →
        </a>
      </Block>

      <Block en="Progress and privacy" tr="İlerleme ve gizlilik">
        <BiText
          t={{
            tr: 'Kayıt veya giriş yoktur; ad, e-posta gibi kişisel bilgi toplanmaz. İlerleme yalnızca kullandığın cihazdaki tarayıcıda saklanır: her öğrenci kendi ilerlemesini görür, başka cihazlara veya öğretmene gönderilmez. Tarayıcı verileri silinirse ya da başka bir cihaz kullanılırsa ilerleme görünmez. Aynı tableti kullanan öğrenciler aynı ilerlemeyi görür.',
            en: 'There is no sign-up or login, and no personal information such as names or emails is collected. Progress is stored only in the browser on the device you use: each student sees their own progress, and it is not sent to other devices or to the teacher. If browser data is cleared or another device is used, the progress will not appear. Students sharing one tablet will see the same progress.',
          }}
        />
      </Block>

      <Block en="Licence" tr="Lisans">
        <BiText t={SITE.license.summary} />
        <a href={SITE.license.url} target="_blank" rel="noopener noreferrer license" className="mt-3 inline-block font-semibold text-cyan-glow">
          {SITE.license.name} →
        </a>
      </Block>

      <Button variant="soft" onClick={home}>
        <Icon name="home" className="size-5" /> Home · Ana sayfa
      </Button>
    </div>
  )
}
