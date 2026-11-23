import type { ModuleContent } from '../../data/types'

export const typesOfComputer: ModuleContent = {
  learn: [
    {
      id: 'desktop',
      title: { en: 'Desktop computer', tr: 'Masaüstü bilgisayar' },
      text: {
        tr: 'Bir masada sabit duran, ayrı monitör, klavye ve fareye sahip bilgisayardır. Elektrik prizine bağlı çalışır.',
        en: 'A computer that stays in one place on a desk, with a separate monitor, keyboard and mouse. It runs from mains electricity.',
      },
      points: [
        { en: 'Uses: office and business, education, gaming and entertainment.', tr: 'Kullanım: ofis ve işletme, eğitim, oyun ve eğlence.' },
        { en: '+ Easy to upgrade (expandable); large screen and full keyboard.', tr: '+ Kolayca yükseltilebilir (genişletilebilir); büyük ekran ve tam klavye.' },
        { en: '– Not portable; takes up space.', tr: '– Taşınabilir değildir; yer kaplar.' },
      ],
    },
    {
      id: 'laptop',
      title: { en: 'Laptop', tr: 'Dizüstü bilgisayar' },
      text: {
        tr: 'Ekran, klavye ve touchpad’i tek parçada olan, pille çalışan taşınabilir bilgisayardır.',
        en: 'A portable computer with the screen, keyboard and touchpad in one unit, powered by a battery.',
      },
      points: [
        { en: '+ Portable; can be used anywhere.', tr: '+ Taşınabilir; her yerde kullanılabilir.' },
        { en: '– Harder to upgrade; battery runs out; easier to lose or damage.', tr: '– Yükseltmesi zor; pil biter; kaybolması veya hasar görmesi daha kolay.' },
      ],
    },
    {
      id: 'smartphone',
      title: { en: 'Smartphone', tr: 'Akıllı telefon' },
      text: {
        tr: 'İnternet, uygulamalar, kamera ve dokunmatik ekranı olan cep telefonudur.',
        en: 'A mobile phone with internet access, apps, a camera and a touch screen.',
      },
      points: [
        { en: '+ Very portable; always connected.', tr: '+ Çok taşınabilir; her zaman bağlı.' },
        { en: '– Small screen; hard to type long documents.', tr: '– Küçük ekran; uzun belge yazmak zor.' },
      ],
    },
    {
      id: 'tablet',
      title: { en: 'Tablet and phablet', tr: 'Tablet ve phablet' },
      text: {
        tr: 'Tablet, telefondan büyük ekranlı dokunmatik bir bilgisayardır. Phablet, boyutu telefonla tablet arasında olan cihazdır.',
        en: 'A tablet is a touch-screen computer with a larger screen than a phone. A phablet is between a phone and a tablet in size.',
      },
      points: [
        { en: '+ Light and portable; long battery life.', tr: '+ Hafif ve taşınabilir; uzun pil ömrü.' },
        { en: '– On-screen keyboard is slower; limited expandability.', tr: '– Ekran klavyesi daha yavaş; sınırlı genişletilebilirlik.' },
      ],
    },
    {
      id: 'uses',
      title: { en: 'Uses of mobile computers', tr: 'Mobil bilgisayarların kullanımı' },
      text: {
        tr: 'Ofis ve işletme, eğitim, oyun, eğlence ve uzaktan kontrol edilen cihazlar (ör. bir uygulamayla dron veya akıllı ev cihazlarını kontrol etmek).',
        en: 'Office and business, education, gaming, entertainment and remotely controlled devices (e.g. controlling a drone or smart home devices with an app).',
      },
    },
  ],
  compare: {
    title: { en: 'Comparing types of computer', tr: 'Bilgisayar türlerini karşılaştırma' },
    columns: ['Desktop', 'Laptop', 'Tablet', 'Smartphone'],
    rows: [
      { label: { en: 'Portability', tr: 'Taşınabilirlik' }, cells: [{ en: 'Low', tr: 'Düşük' }, { en: 'Good', tr: 'İyi' }, { en: 'Very good', tr: 'Çok iyi' }, { en: 'Best', tr: 'En iyi' }] },
      { label: { en: 'Expandability', tr: 'Genişletilebilirlik' }, cells: [{ en: 'High', tr: 'Yüksek' }, { en: 'Limited', tr: 'Sınırlı' }, { en: 'Very limited', tr: 'Çok sınırlı' }, { en: 'Very limited', tr: 'Çok sınırlı' }] },
      { label: { en: 'Screen', tr: 'Ekran' }, cells: [{ en: 'Large', tr: 'Büyük' }, { en: 'Medium', tr: 'Orta' }, { en: 'Medium', tr: 'Orta' }, { en: 'Small', tr: 'Küçük' }] },
      { label: { en: 'Power', tr: 'Güç' }, cells: [{ en: 'Mains', tr: 'Priz' }, { en: 'Battery', tr: 'Pil' }, { en: 'Battery', tr: 'Pil' }, { en: 'Battery', tr: 'Pil' }] },
    ],
  },
  sort: {
    title: { en: 'Desktop or mobile computer?', tr: 'Masaüstü mü, mobil mi?' },
    categories: [
      { id: 'desk', label: { en: 'Desktop', tr: 'Masaüstü' } },
      { id: 'mob', label: { en: 'Mobile', tr: 'Mobil' } },
    ],
    items: [
      { id: '1', text: { en: 'Easy to add a new graphics card', tr: 'Yeni ekran kartı eklemek kolay' }, cat: 'desk' },
      { id: '2', text: { en: 'Runs on a battery', tr: 'Pille çalışır' }, cat: 'mob' },
      { id: '3', text: { en: 'Separate monitor and keyboard', tr: 'Ayrı monitör ve klavye' }, cat: 'desk' },
      { id: '4', text: { en: 'Used on a train', tr: 'Trende kullanılır' }, cat: 'mob' },
      { id: '5', text: { en: 'Controls a drone with an app', tr: 'Uygulamayla dron kontrol eder' }, cat: 'mob' },
      { id: '6', text: { en: 'Stays on one desk', tr: 'Tek masada durur' }, cat: 'desk' },
    ],
  },
  match: [
    { id: 'desktop', en: 'Desktop', tr: 'Masaüstü', desc: { en: 'Stays in one place', tr: 'Tek yerde durur' } },
    { id: 'laptop', en: 'Laptop', tr: 'Dizüstü', desc: { en: 'Portable, keyboard built in', tr: 'Taşınabilir, dahili klavye' } },
    { id: 'tablet', en: 'Tablet', tr: 'Tablet', desc: { en: 'Large touch screen, no keyboard', tr: 'Büyük dokunmatik ekran, klavyesiz' } },
    { id: 'phablet', en: 'Phablet', tr: 'Phablet', desc: { en: 'Between phone and tablet size', tr: 'Telefonla tablet arası boyut' } },
    { id: 'portable', en: 'Portability', tr: 'Taşınabilirlik', desc: { en: 'How easy it is to carry', tr: 'Taşımanın ne kadar kolay olduğu' } },
    { id: 'expand', en: 'Expandability', tr: 'Genişletilebilirlik', desc: { en: 'How easy it is to upgrade', tr: 'Yükseltmenin ne kadar kolay olduğu' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A gamer wants to add a better graphics card every year.', tr: 'Bir oyuncu her yıl daha iyi bir ekran kartı eklemek istiyor.' },
      options: [
        { id: 'desktop', label: { en: 'Desktop', tr: 'Masaüstü' } },
        { id: 'tablet', label: { en: 'Tablet', tr: 'Tablet' } },
        { id: 'phone', label: { en: 'Smartphone', tr: 'Akıllı telefon' } },
      ],
      answer: 'desktop',
      reasons: [
        { en: 'It is the most expandable – parts are easy to upgrade.', tr: 'En genişletilebilir olandır – parçaları kolayca yükseltilir.' },
        { en: 'It is the most portable.', tr: 'En taşınabilir olandır.' },
        { en: 'It runs on a battery.', tr: 'Pille çalışır.' },
      ],
      correctReason: 0,
      explain: { en: 'Desktops have the best expandability.', tr: 'En iyi genişletilebilirlik masaüstündedir.' },
    },
    {
      id: 's2',
      situation: { en: 'A salesperson travels and must write long reports on trains.', tr: 'Seyahat eden bir satış temsilcisi trende uzun raporlar yazmalı.' },
      options: [
        { id: 'laptop', label: { en: 'Laptop', tr: 'Dizüstü' } },
        { id: 'desktop', label: { en: 'Desktop', tr: 'Masaüstü' } },
        { id: 'phone', label: { en: 'Smartphone', tr: 'Akıllı telefon' } },
      ],
      answer: 'laptop',
      reasons: [
        { en: 'It is portable and has a full keyboard for long typing.', tr: 'Taşınabilirdir ve uzun yazılar için tam klavyesi vardır.' },
        { en: 'It needs mains electricity.', tr: 'Priz elektriği gerektirir.' },
        { en: 'It has the smallest screen.', tr: 'En küçük ekrana sahiptir.' },
      ],
      correctReason: 0,
      explain: { en: 'A laptop balances portability and typing.', tr: 'Dizüstü, taşınabilirlik ve yazma kolaylığını dengeler.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which is the most portable?', tr: 'Hangisi en taşınabilirdir?' },
      options: [
        { en: 'Desktop', tr: 'Masaüstü' },
        { en: 'Laptop', tr: 'Dizüstü' },
        { en: 'Smartphone', tr: 'Akıllı telefon' },
      ],
      answer: 2,
      explain: { en: 'A smartphone fits in a pocket.', tr: 'Akıllı telefon cebe sığar.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'A desktop computer is easier to upgrade than a laptop.', tr: 'Masaüstü bilgisayarı yükseltmek dizüstünden daha kolaydır.' },
      answer: true,
      explain: { en: 'True. Desktops are more expandable.', tr: 'Doğru. Masaüstü daha genişletilebilirdir.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'A device between a phone and a tablet in size is a ___.', tr: 'Telefonla tablet arası boyuttaki cihaza ___ denir.' },
      bank: ['phablet', 'desktop', 'server', 'plotter'],
      answer: 'phablet',
      explain: { en: 'Phone + tablet = phablet.', tr: 'Phone + tablet = phablet.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: '“Expandability” means…', tr: '“Genişletilebilirlik” şu demektir…' },
      options: [
        { en: 'how easy it is to carry', tr: 'taşımanın ne kadar kolay olduğu' },
        { en: 'how easy it is to upgrade or add parts', tr: 'yükseltmenin veya parça eklemenin ne kadar kolay olduğu' },
        { en: 'how big the screen is', tr: 'ekranın ne kadar büyük olduğu' },
      ],
      answer: 1,
      explain: { en: 'Expandability is about upgrading.', tr: 'Genişletilebilirlik yükseltmeyle ilgilidir.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Compare',
      marks: 4,
      prompt: { en: 'Compare a desktop computer and a laptop computer.', tr: 'Masaüstü ve dizüstü bilgisayarı karşılaştırınız.' },
      points: [
        { point: { en: 'Both can be used for office work / education / gaming.', tr: 'İkisi de ofis işi / eğitim / oyun için kullanılabilir.' }, keywords: [['both']] },
        { point: { en: 'A laptop is portable; a desktop is not.', tr: 'Dizüstü taşınabilir; masaüstü değildir.' }, keywords: [['portable'], ['carry']] },
        { point: { en: 'A desktop is easier to upgrade / more expandable.', tr: 'Masaüstü daha kolay yükseltilir / daha genişletilebilir.' }, keywords: [['upgrade'], ['expand']] },
        { point: { en: 'A laptop uses a battery; a desktop needs mains power.', tr: 'Dizüstü pil kullanır; masaüstü prize bağlıdır.' }, keywords: [['battery'], ['mains'], ['power']] },
        { point: { en: 'A desktop has a larger screen / full-size keyboard.', tr: 'Masaüstünün ekranı daha büyük / klavyesi tam boy.' }, keywords: [['screen'], ['keyboard']] },
      ],
      model: { en: 'Both can be used for office work and gaming. However, a laptop is portable and runs on a battery, whereas a desktop stays in one place and needs mains power. A desktop is easier to upgrade and usually has a larger screen.', tr: 'İkisi de ofis işi ve oyun için kullanılabilir. Ancak dizüstü taşınabilir ve pille çalışır; masaüstü ise sabittir ve prize bağlıdır. Masaüstü daha kolay yükseltilir ve genellikle ekranı daha büyüktür.' },
    },
  ],
  vocab: [
    { en: 'Desktop computer', tr: 'Masaüstü bilgisayar' },
    { en: 'Laptop', tr: 'Dizüstü bilgisayar' },
    { en: 'Smartphone', tr: 'Akıllı telefon' },
    { en: 'Tablet', tr: 'Tablet' },
    { en: 'Portability', tr: 'Taşınabilirlik' },
    { en: 'Expandability', tr: 'Genişletilebilirlik' },
    { en: 'Battery', tr: 'Pil' },
    { en: 'Remotely controlled', tr: 'Uzaktan kontrol edilen' },
  ],
}
