import type { ModuleContent } from '../../data/types'

export const emergingTech: ModuleContent = {
  learn: [
    {
      id: 'ai',
      title: { en: 'Artificial Intelligence (AI)', tr: 'Yapay Zekâ (AI)' },
      text: {
        tr: 'Normalde insan zekâsı gerektiren işleri yapabilen bilgisayar sistemleridir: öğrenme, konuşma ve görüntü tanıma, karar verme.',
        en: 'Computer systems that can do tasks that normally need human intelligence: learning, recognising speech and images, making decisions.',
      },
      points: [
        { en: 'Examples: voice assistants, chatbots, recommendations, self-driving cars, medical image analysis.', tr: 'Örnekler: sesli asistanlar, sohbet botları, öneri sistemleri, sürücüsüz araçlar, tıbbi görüntü analizi.' },
      ],
    },
    {
      id: 'ai-impact',
      title: { en: 'Impact of AI', tr: 'Yapay zekânın etkisi' },
      text: { tr: 'Yapay zekâ günlük hayatı hem olumlu hem olumsuz etkiler.', en: 'AI affects everyday life in positive and negative ways.' },
      points: [
        { en: '+ Saves time by doing repetitive tasks; works 24 hours a day.', tr: '+ Tekrarlayan işleri yaparak zaman kazandırır; 24 saat çalışır.' },
        { en: '– Some jobs may be lost; it can make mistakes or be biased.', tr: '– Bazı işler kaybolabilir; hata yapabilir veya önyargılı olabilir.' },
        { en: '– Privacy: AI systems often collect a lot of personal data.', tr: '– Gizlilik: yapay zekâ sistemleri çoğu zaman çok fazla kişisel veri toplar.' },
      ],
    },
    {
      id: 'vr',
      title: { en: 'Virtual Reality (VR)', tr: 'Sanal Gerçeklik (VR)' },
      text: {
        tr: 'Kullanıcı bir başlık takar ve tamamen bilgisayarla oluşturulmuş bir ortamın içindeymiş gibi hisseder.',
        en: 'The user wears a headset and feels inside a completely computer-generated environment.',
      },
      points: [
        { en: 'Uses: training pilots and surgeons, games, virtual tours.', tr: 'Kullanım: pilot ve cerrah eğitimi, oyunlar, sanal turlar.' },
        { en: '+ Safe practice of dangerous tasks.  – Expensive; can cause motion sickness.', tr: '+ Tehlikeli işler güvenle denenir.  – Pahalı; baş dönmesi yapabilir.' },
      ],
    },
    {
      id: 'ar',
      title: { en: 'Augmented Reality (AR)', tr: 'Artırılmış Gerçeklik (AR)' },
      text: {
        tr: 'Gerçek dünyanın üzerine dijital bilgi veya görüntüler eklenir; genellikle telefon kamerası veya özel gözlükle görülür.',
        en: 'Digital information or images are added on top of the real world, usually seen through a phone camera or special glasses.',
      },
      points: [
        { en: 'Uses: trying furniture in your room with an app, navigation arrows, games, education.', tr: 'Kullanım: uygulamayla mobilyayı odanda denemek, yön okları, oyunlar, eğitim.' },
        { en: '+ The user still sees the real world.  – Can distract users, e.g. while walking.', tr: '+ Kullanıcı gerçek dünyayı görmeye devam eder.  – Dikkat dağıtabilir, ör. yürürken.' },
      ],
    },
    {
      id: 'xr',
      title: { en: 'Extended reality (XR)', tr: 'Genişletilmiş gerçeklik (XR)' },
      text: {
        tr: 'Sanal gerçeklik (VR) ve artırılmış gerçekliği (AR) kapsayan genel addır.',
        en: 'The general name that includes virtual reality (VR) and augmented reality (AR).',
      },
    },
  ],
  compare: {
    title: { en: 'VR vs AR', tr: 'VR ve AR' },
    columns: ['VR', 'AR'],
    rows: [
      { label: { en: 'Real world visible?', tr: 'Gerçek dünya görünür mü?' }, cells: [{ en: 'No', tr: 'Hayır' }, { en: 'Yes', tr: 'Evet' }] },
      { label: { en: 'Environment', tr: 'Ortam' }, cells: [{ en: 'Completely computer-made', tr: 'Tamamen bilgisayarla oluşturulmuş' }, { en: 'Real world + digital images', tr: 'Gerçek dünya + dijital görüntüler' }] },
      { label: { en: 'Usually needs', tr: 'Genellikle gerekir' }, cells: [{ en: 'VR headset', tr: 'VR başlığı' }, { en: 'Phone or AR glasses', tr: 'Telefon veya AR gözlüğü' }] },
    ],
  },
  sort: {
    title: { en: 'AI, VR or AR?', tr: 'AI mı, VR mı, AR mı?' },
    categories: [
      { id: 'ai', label: { en: 'AI', tr: 'Yapay zekâ' } },
      { id: 'vr', label: { en: 'VR', tr: 'VR' } },
      { id: 'ar', label: { en: 'AR', tr: 'AR' } },
    ],
    items: [
      { id: '1', text: { en: 'A chatbot answers questions', tr: 'Sohbet botu soruları cevaplar' }, cat: 'ai' },
      { id: '2', text: { en: 'Pilot training in a headset', tr: 'Başlıkla pilot eğitimi' }, cat: 'vr' },
      { id: '3', text: { en: 'Seeing a sofa in your room through your phone', tr: 'Telefonla odanda bir kanepe görmek' }, cat: 'ar' },
      { id: '4', text: { en: 'A car that drives itself', tr: 'Kendi kendine giden araba' }, cat: 'ai' },
      { id: '5', text: { en: 'A virtual tour inside a museum', tr: 'Müzede sanal tur' }, cat: 'vr' },
      { id: '6', text: { en: 'Directions shown on the street view', tr: 'Sokak görüntüsü üzerinde yön okları' }, cat: 'ar' },
    ],
  },
  match: [
    { id: 'ai', en: 'Artificial intelligence', tr: 'Yapay zekâ', desc: { en: 'Computers doing tasks that need human intelligence', tr: 'İnsan zekâsı gerektiren işleri yapan bilgisayarlar' } },
    { id: 'vr', en: 'Virtual reality', tr: 'Sanal gerçeklik', desc: { en: 'Fully computer-made world', tr: 'Tamamen bilgisayarla oluşturulmuş dünya' } },
    { id: 'ar', en: 'Augmented reality', tr: 'Artırılmış gerçeklik', desc: { en: 'Digital images over the real world', tr: 'Gerçek dünyanın üstünde dijital görüntüler' } },
    { id: 'xr', en: 'Extended reality', tr: 'Genişletilmiş gerçeklik', desc: { en: 'VR and AR together', tr: 'VR ve AR birlikte' } },
    { id: 'headset', en: 'Headset', tr: 'Başlık', desc: { en: 'Worn on the head for VR', tr: 'VR için başa takılır' } },
    { id: 'bias', en: 'Bias', tr: 'Önyargı', desc: { en: 'Unfair results from an AI system', tr: 'Yapay zekânın adil olmayan sonuçları' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A hospital wants trainee surgeons to practise operations without any risk to patients.', tr: 'Bir hastane, stajyer cerrahların hastalara risk oluşturmadan ameliyat pratiği yapmasını istiyor.' },
      options: [
        { id: 'vr', label: { en: 'VR', tr: 'VR' } },
        { id: 'ar', label: { en: 'AR', tr: 'AR' } },
        { id: 'ai', label: { en: 'Chatbot', tr: 'Sohbet botu' } },
      ],
      answer: 'vr',
      reasons: [
        { en: 'It creates a realistic, fully virtual environment for safe practice.', tr: 'Güvenli pratik için gerçekçi, tamamen sanal bir ortam oluşturur.' },
        { en: 'It shows the real patient during practice.', tr: 'Pratik sırasında gerçek hastayı gösterir.' },
        { en: 'It answers questions in text.', tr: 'Soruları yazıyla cevaplar.' },
      ],
      correctReason: 0,
      explain: { en: 'VR allows safe practice of dangerous tasks.', tr: 'VR tehlikeli işlerin güvenle denenmesini sağlar.' },
    },
    {
      id: 's2',
      situation: { en: 'A furniture shop wants customers to see how a table looks in their own room.', tr: 'Bir mobilya mağazası, müşterilerin bir masanın kendi odalarında nasıl görüneceğini görmesini istiyor.' },
      options: [
        { id: 'vr', label: { en: 'VR', tr: 'VR' } },
        { id: 'ar', label: { en: 'AR', tr: 'AR' } },
      ],
      answer: 'ar',
      reasons: [
        { en: 'It adds the digital table on top of the real room.', tr: 'Dijital masayı gerçek odanın üzerine ekler.' },
        { en: 'It hides the real world completely.', tr: 'Gerçek dünyayı tamamen gizler.' },
        { en: 'It needs no camera.', tr: 'Kamera gerektirmez.' },
      ],
      correctReason: 0,
      explain: { en: 'AR mixes the real world with digital objects.', tr: 'AR gerçek dünyayı dijital nesnelerle birleştirir.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'In which technology can the user still see the real world?', tr: 'Hangi teknolojide kullanıcı gerçek dünyayı görmeye devam eder?' },
      options: [
        { en: 'VR', tr: 'VR' },
        { en: 'AR', tr: 'AR' },
      ],
      answer: 1,
      explain: { en: 'AR adds images on top of the real world.', tr: 'AR görüntüleri gerçek dünyanın üzerine ekler.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'AI systems can never make mistakes.', tr: 'Yapay zekâ sistemleri asla hata yapmaz.' },
      answer: false,
      explain: { en: 'False. AI can make mistakes and can be biased.', tr: 'Yanlış. Yapay zekâ hata yapabilir ve önyargılı olabilir.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'VR and AR together are called ___ reality.', tr: 'VR ve AR birlikte ___ gerçeklik olarak adlandırılır.' },
      bank: ['extended', 'digital', 'mixed', 'real'],
      answer: 'extended',
      explain: { en: 'Extended reality (XR).', tr: 'Genişletilmiş gerçeklik (XR).' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'Which is a negative impact of AI?', tr: 'Hangisi yapay zekânın olumsuz bir etkisidir?' },
      options: [
        { en: 'Works 24 hours a day', tr: '24 saat çalışır' },
        { en: 'Some jobs may be lost', tr: 'Bazı işler kaybolabilir' },
        { en: 'Does repetitive tasks', tr: 'Tekrarlayan işleri yapar' },
      ],
      answer: 1,
      explain: { en: 'Automation can replace some jobs.', tr: 'Otomasyon bazı işlerin yerini alabilir.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Describe',
      marks: 2,
      prompt: { en: 'Describe the difference between virtual reality and augmented reality.', tr: 'Sanal gerçeklik ile artırılmış gerçeklik arasındaki farkı açıklayınız.' },
      points: [
        { point: { en: 'VR: the user is in a completely computer-generated environment.', tr: 'VR: kullanıcı tamamen bilgisayarla oluşturulmuş bir ortamdadır.' }, keywords: [['virtual'], ['computer-generated'], ['completely'], ['headset']] },
        { point: { en: 'AR: digital images are added to the real world.', tr: 'AR: dijital görüntüler gerçek dünyaya eklenir.' }, keywords: [['real world'], ['added'], ['overlay'], ['on top']] },
      ],
      model: { en: 'In VR the user is inside a completely computer-generated environment, but in AR digital images are added on top of the real world.', tr: 'VR’de kullanıcı tamamen bilgisayarla oluşturulmuş bir ortamdadır; AR’de ise dijital görüntüler gerçek dünyanın üzerine eklenir.' },
    },
    {
      id: 'e2',
      command: 'Explain',
      marks: 4,
      prompt: { en: 'Explain the positive and negative impacts of AI on everyday life.', tr: 'Yapay zekânın günlük yaşama olumlu ve olumsuz etkilerini açıklayınız.' },
      points: [
        { point: { en: 'Positive: saves time / does repetitive tasks / works 24/7.', tr: 'Olumlu: zaman kazandırır / tekrarlayan işleri yapar / 7/24 çalışır.' }, keywords: [['time'], ['repetitive'], ['24'], ['automat']] },
        { point: { en: 'Positive: helps decisions, e.g. medical diagnosis / recommendations / assistants.', tr: 'Olumlu: karar vermeye yardım eder, ör. tıbbi teşhis / öneriler / asistanlar.' }, keywords: [['medical'], ['diagnos'], ['assistant'], ['recommend']] },
        { point: { en: 'Negative: job losses.', tr: 'Olumsuz: iş kayıpları.' }, keywords: [['job']] },
        { point: { en: 'Negative: mistakes / bias / privacy of personal data.', tr: 'Olumsuz: hatalar / önyargı / kişisel veri gizliliği.' }, keywords: [['mistake'], ['bias'], ['privacy'], ['error']] },
      ],
      model: { en: 'AI saves time by doing repetitive tasks and can help doctors to diagnose illnesses. However, some jobs may be lost, and AI can make mistakes or collect a lot of personal data.', tr: 'Yapay zekâ tekrarlayan işleri yaparak zaman kazandırır ve doktorlara teşhiste yardım edebilir. Ancak bazı işler kaybolabilir; yapay zekâ hata yapabilir veya çok fazla kişisel veri toplayabilir.' },
    },
  ],
  vocab: [
    { en: 'Artificial intelligence (AI)', tr: 'Yapay zekâ' },
    { en: 'Virtual reality (VR)', tr: 'Sanal gerçeklik' },
    { en: 'Augmented reality (AR)', tr: 'Artırılmış gerçeklik' },
    { en: 'Extended reality (XR)', tr: 'Genişletilmiş gerçeklik' },
    { en: 'Headset', tr: 'Başlık' },
    { en: 'Chatbot', tr: 'Sohbet botu' },
    { en: 'Bias', tr: 'Önyargı' },
    { en: 'Impact', tr: 'Etki' },
  ],
}
