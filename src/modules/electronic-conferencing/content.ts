import type { ModuleContent } from '../../data/types'

export const conferencing: ModuleContent = {
  learn: [
    {
      id: 'video',
      title: { en: 'Video conferencing', tr: 'Video konferans' },
      text: {
        tr: 'Farklı yerlerdeki kişiler birbirini gerçek zamanlı olarak görür ve duyar.',
        en: 'People in different places see and hear each other in real time.',
      },
      points: [
        { en: 'Needs: webcam, microphone, speakers/headset, screen, software, fast internet.', tr: 'Gerekenler: web kamerası, mikrofon, hoparlör/kulaklık, ekran, yazılım, hızlı internet.' },
        { en: '+ No travel time or cost.  – Poor internet = poor picture and sound.', tr: '+ Yolculuk zamanı ve masrafı yok.  – Zayıf internet = kötü görüntü ve ses.' },
      ],
    },
    {
      id: 'audio',
      title: { en: 'Audio conferencing', tr: 'Sesli konferans' },
      text: {
        tr: 'Kişiler yalnızca sesle, telefon veya bilgisayar üzerinden konuşur.',
        en: 'People talk using sound only, over a phone or computer.',
      },
      points: [
        { en: 'Needs: phone, or microphone and speakers.', tr: 'Gerekenler: telefon veya mikrofon ve hoparlör.' },
        { en: '+ Simple and cheap.  – No pictures; hard to share documents.', tr: '+ Basit ve ucuz.  – Görüntü yok; belge paylaşmak zor.' },
      ],
    },
    {
      id: 'web',
      title: { en: 'Web conferencing', tr: 'Web konferansı' },
      text: {
        tr: 'İnternet üzerinden yapılan toplantı; ekran ve belge paylaşımı, sohbet ve anket içerebilir (ör. webinar).',
        en: 'A meeting held over the internet that can include screen and document sharing, chat and polls (e.g. a webinar).',
      },
      points: [
        { en: 'Needs: computer or tablet, browser or app, internet.', tr: 'Gerekenler: bilgisayar veya tablet, tarayıcı veya uygulama, internet.' },
        { en: '+ Easy to share work and record.  – Depends on a good connection.', tr: '+ Çalışma paylaşmak ve kaydetmek kolay.  – İyi bağlantıya bağlıdır.' },
      ],
    },
  ],
  compare: {
    title: { en: 'Comparing conferencing', tr: 'Konferans türlerini karşılaştırma' },
    columns: ['Video', 'Audio', 'Web'],
    rows: [
      { label: { en: 'See each other?', tr: 'Birbirini görme?' }, cells: [{ en: 'Yes', tr: 'Evet' }, { en: 'No', tr: 'Hayır' }, { en: 'Sometimes', tr: 'Bazen' }] },
      { label: { en: 'Share documents?', tr: 'Belge paylaşımı?' }, cells: [{ en: 'Possible', tr: 'Mümkün' }, { en: 'No', tr: 'Hayır' }, { en: 'Yes', tr: 'Evet' }] },
      { label: { en: 'Main hardware', tr: 'Ana donanım' }, cells: [{ en: 'Webcam, mic, speakers', tr: 'Kamera, mikrofon, hoparlör' }, { en: 'Phone or mic', tr: 'Telefon veya mikrofon' }, { en: 'Computer / tablet', tr: 'Bilgisayar / tablet' }] },
      { label: { en: 'Connection', tr: 'Bağlantı' }, cells: [{ en: 'Fast internet', tr: 'Hızlı internet' }, { en: 'Phone line or internet', tr: 'Telefon hattı veya internet' }, { en: 'Internet', tr: 'İnternet' }] },
    ],
  },
  sort: {
    title: { en: 'Advantage or disadvantage of video conferencing?', tr: 'Video konferansın avantajı mı, dezavantajı mı?' },
    categories: [
      { id: 'adv', label: { en: 'Advantage', tr: 'Avantaj' } },
      { id: 'dis', label: { en: 'Disadvantage', tr: 'Dezavantaj' } },
    ],
    items: [
      { id: '1', text: { en: 'No travel costs', tr: 'Yolculuk masrafı yok' }, cat: 'adv' },
      { id: '2', text: { en: 'Picture freezes on slow internet', tr: 'Yavaş internette görüntü donar' }, cat: 'dis' },
      { id: '3', text: { en: 'Meet at short notice', tr: 'Kısa sürede toplanılabilir' }, cat: 'adv' },
      { id: '4', text: { en: 'Different time zones', tr: 'Farklı saat dilimleri' }, cat: 'dis' },
      { id: '5', text: { en: 'Saves travel time', tr: 'Yolculuk zamanından tasarruf' }, cat: 'adv' },
      { id: '6', text: { en: 'Equipment costs money', tr: 'Ekipman maliyeti' }, cat: 'dis' },
    ],
  },
  match: [
    { id: 'video', en: 'Video conferencing', tr: 'Video konferans', desc: { en: 'See and hear in real time', tr: 'Gerçek zamanlı görme ve duyma' } },
    { id: 'audio', en: 'Audio conferencing', tr: 'Sesli konferans', desc: { en: 'Voice only', tr: 'Yalnızca ses' } },
    { id: 'web', en: 'Web conferencing', tr: 'Web konferansı', desc: { en: 'Online meeting with screen sharing', tr: 'Ekran paylaşımlı çevrim içi toplantı' } },
    { id: 'webcam', en: 'Webcam', tr: 'Web kamerası', desc: { en: 'Captures video', tr: 'Görüntü kaydeder' } },
    { id: 'mic', en: 'Microphone', tr: 'Mikrofon', desc: { en: 'Captures sound', tr: 'Ses kaydeder' } },
    { id: 'realtime', en: 'Real time', tr: 'Gerçek zamanlı', desc: { en: 'Happening now, with no delay', tr: 'Şu anda, gecikmesiz' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A teacher wants to show slides to 200 students online and take a quick poll.', tr: 'Bir öğretmen 200 öğrenciye çevrim içi slayt göstermek ve hızlı anket yapmak istiyor.' },
      options: [
        { id: 'video', label: { en: 'Video', tr: 'Video' } },
        { id: 'audio', label: { en: 'Audio', tr: 'Sesli' } },
        { id: 'web', label: { en: 'Web', tr: 'Web' } },
      ],
      answer: 'web',
      reasons: [
        { en: 'It allows screen sharing and polls over the internet.', tr: 'İnternet üzerinden ekran paylaşımı ve ankete izin verir.' },
        { en: 'It only uses a phone line.', tr: 'Yalnızca telefon hattı kullanır.' },
        { en: 'It does not need the internet.', tr: 'İnternet gerektirmez.' },
      ],
      correctReason: 0,
      explain: { en: 'Web conferencing (a webinar) supports sharing slides and polls.', tr: 'Web konferansı (webinar) slayt paylaşımı ve anketi destekler.' },
    },
    {
      id: 's2',
      situation: { en: 'Three managers need a quick talk while driving; no screens are available.', tr: 'Üç yönetici araç kullanırken kısa bir görüşme yapmalı; ekran yok.' },
      options: [
        { id: 'video', label: { en: 'Video', tr: 'Video' } },
        { id: 'audio', label: { en: 'Audio', tr: 'Sesli' } },
        { id: 'web', label: { en: 'Web', tr: 'Web' } },
      ],
      answer: 'audio',
      reasons: [
        { en: 'It needs only a phone and voice.', tr: 'Yalnızca telefon ve ses gerekir.' },
        { en: 'It needs webcams.', tr: 'Web kamerası gerekir.' },
        { en: 'It needs screen sharing.', tr: 'Ekran paylaşımı gerekir.' },
      ],
      correctReason: 0,
      explain: { en: 'Audio conferencing works with just a phone.', tr: 'Sesli konferans yalnızca telefonla çalışır.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which hardware is needed for video conferencing but NOT audio conferencing?', tr: 'Hangi donanım video konferans için gerekir ama sesli konferans için GEREKMEZ?' },
      options: [
        { en: 'Microphone', tr: 'Mikrofon' },
        { en: 'Webcam', tr: 'Web kamerası' },
        { en: 'Speakers', tr: 'Hoparlör' },
      ],
      answer: 1,
      explain: { en: 'Only video needs a webcam.', tr: 'Web kamerası yalnızca video için gerekir.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'Video conferencing saves travel time and cost.', tr: 'Video konferans yolculuk zamanı ve masrafından tasarruf sağlar.' },
      answer: true,
      explain: { en: 'True.', tr: 'Doğru.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'A ___ conference uses voice only.', tr: '___ konferans yalnızca ses kullanır.' },
      bank: ['audio', 'video', 'web', 'cloud'],
      answer: 'audio',
      explain: { en: 'Audio conferencing is voice only.', tr: 'Sesli konferans yalnızca sestir.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'What is a disadvantage of video conferencing?', tr: 'Video konferansın bir dezavantajı nedir?' },
      options: [
        { en: 'No travel', tr: 'Yolculuk yok' },
        { en: 'Depends on a good internet connection', tr: 'İyi internet bağlantısına bağlıdır' },
        { en: 'Can see each other', tr: 'Birbirini görebilir' },
      ],
      answer: 1,
      explain: { en: 'A slow connection causes poor picture and sound.', tr: 'Yavaş bağlantı kötü görüntü ve sese neden olur.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'State',
      marks: 3,
      prompt: { en: 'State three items of hardware needed for video conferencing.', tr: 'Video konferans için gereken üç donanımı belirtiniz.' },
      points: [
        { point: { en: 'Webcam', tr: 'Web kamerası' }, keywords: [['webcam'], ['camera']] },
        { point: { en: 'Microphone', tr: 'Mikrofon' }, keywords: [['microphone'], ['mic']] },
        { point: { en: 'Speakers / headset', tr: 'Hoparlör / kulaklık' }, keywords: [['speaker'], ['headset'], ['headphone']] },
        { point: { en: 'Screen / monitor', tr: 'Ekran / monitör' }, keywords: [['screen'], ['monitor'], ['display']] },
      ],
      model: { en: 'Webcam, microphone, speakers.', tr: 'Web kamerası, mikrofon, hoparlör.' },
    },
    {
      id: 'e2',
      command: 'Explain',
      marks: 4,
      prompt: { en: 'Explain the advantages and disadvantages of a company using video conferencing instead of face-to-face meetings.', tr: 'Bir şirketin yüz yüze toplantı yerine video konferans kullanmasının avantaj ve dezavantajlarını açıklayınız.' },
      points: [
        { point: { en: 'No travel, so saves time / money.', tr: 'Yolculuk yok; zaman / para tasarrufu.' }, keywords: [['travel'], ['cost'], ['money'], ['time']] },
        { point: { en: 'Meetings can be arranged at short notice.', tr: 'Toplantılar kısa sürede ayarlanabilir.' }, keywords: [['short notice'], ['quick'], ['anytime']] },
        { point: { en: 'Poor connection → lag / poor quality.', tr: 'Zayıf bağlantı → gecikme / düşük kalite.' }, keywords: [['connection'], ['lag'], ['internet'], ['quality']] },
        { point: { en: 'Time zones / no personal contact / equipment cost.', tr: 'Saat dilimleri / kişisel temas yok / ekipman maliyeti.' }, keywords: [['time zone'], ['personal'], ['equipment'], ['hardware']] },
      ],
      model: {
        en: 'Advantages: staff do not travel, which saves time and money, and meetings can be held at short notice. Disadvantages: a poor internet connection causes lag and poor quality, and different time zones make it hard to find a time.',
        tr: 'Avantajlar: çalışanlar yolculuk yapmaz, bu da zaman ve para kazandırır; toplantılar kısa sürede yapılabilir. Dezavantajlar: zayıf internet gecikme ve düşük kaliteye yol açar; farklı saat dilimleri ortak zaman bulmayı zorlaştırır.',
      },
    },
  ],
  vocab: [
    { en: 'Video conferencing', tr: 'Video konferans' },
    { en: 'Audio conferencing', tr: 'Sesli konferans' },
    { en: 'Web conferencing', tr: 'Web konferansı' },
    { en: 'Webcam', tr: 'Web kamerası' },
    { en: 'Microphone', tr: 'Mikrofon' },
    { en: 'Real time', tr: 'Gerçek zamanlı' },
    { en: 'Screen sharing', tr: 'Ekran paylaşımı' },
    { en: 'Time zone', tr: 'Saat dilimi' },
  ],
}
