import type { ModuleContent } from '../../data/types'

export const authentication: ModuleContent = {
  sim: 'auth',
  learn: [
    {
      id: 'bio',
      title: { en: 'Biometrics', tr: 'Biyometri' },
      text: {
        tr: 'Kişiye özgü vücut özelliklerini kullanır: parmak izi, yüz, iris veya ses.',
        en: 'Uses a person’s unique body features: fingerprint, face, iris or voice.',
      },
      points: [
        { en: '+ Cannot be forgotten or easily copied.', tr: '+ Unutulamaz, kolayca kopyalanamaz.' },
        { en: '– An injury (e.g. cut finger) can stop it working.', tr: '– Bir yaralanma (ör. kesik parmak) çalışmasını engelleyebilir.' },
      ],
    },
    {
      id: 'mag',
      title: { en: 'Magnetic stripe card', tr: 'Manyetik şeritli kart' },
      text: {
        tr: 'Veri kartın arkasındaki manyetik şeritte saklanır ve kart okuyucudan geçirilerek okunur.',
        en: 'Data is stored on a magnetic stripe on the back of the card and read by swiping it.',
      },
      points: [
        { en: '+ Cheap and easy to use.', tr: '+ Ucuz ve kullanımı kolay.' },
        { en: '– Can be damaged by magnets or copied.', tr: '– Mıknatısla bozulabilir veya kopyalanabilir.' },
      ],
    },
    {
      id: 'smart',
      title: { en: 'Smart card', tr: 'Akıllı kart' },
      text: {
        tr: 'Kartın içinde veriyi saklayan bir çip vardır. Temassız olabilir; genellikle PIN ile birlikte kullanılır.',
        en: 'The card contains a chip that stores data. It can be contactless and is often used with a PIN.',
      },
      points: [
        { en: '+ More secure than a magnetic stripe.', tr: '+ Manyetik şeritten daha güvenli.' },
        { en: '– Can be lost or stolen.', tr: '– Kaybolabilir veya çalınabilir.' },
      ],
    },
    {
      id: 'phys',
      title: { en: 'Physical token', tr: 'Fiziksel token' },
      text: {
        tr: 'Tek kullanımlık kod üreten küçük bir cihazdır. Kullanıcı bu kodu girer.',
        en: 'A small device that creates a one-time code. The user types the code in.',
      },
      points: [
        { en: '+ The code works only once, so it is hard to misuse.', tr: '+ Kod yalnızca bir kez çalışır; kötüye kullanmak zordur.' },
        { en: '– Must be carried; can be lost.', tr: '– Yanında taşınmalı; kaybolabilir.' },
      ],
    },
    {
      id: 'elec',
      title: { en: 'Electronic token', tr: 'Elektronik token' },
      text: {
        tr: 'Telefondaki bir uygulama veya mesaj tek kullanımlık kod sağlar.',
        en: 'An app or message on a phone provides a one-time code.',
      },
      points: [
        { en: '+ No extra device needed.', tr: '+ Ek cihaz gerekmez.' },
        { en: '– Needs the phone; the phone can be lost.', tr: '– Telefon gerekir; telefon kaybolabilir.' },
      ],
    },
    {
      id: 'zero',
      title: { en: 'Zero login', tr: 'Sıfır giriş' },
      text: {
        tr: 'Sistem kullanıcıyı parola istemeden tanır; ör. cihazı, konumu veya davranışıyla (yazma şekli).',
        en: 'The system recognises the user without a password, e.g. by their device, location or behaviour (how they type).',
      },
      points: [
        { en: '+ Fast and easy for the user.', tr: '+ Kullanıcı için hızlı ve kolay.' },
        { en: '– Privacy concerns: the system collects data about the user.', tr: '– Gizlilik endişesi: sistem kullanıcı hakkında veri toplar.' },
      ],
    },
  ],
  sort: {
    title: { en: 'Which method is it?', tr: 'Hangi yöntem?' },
    categories: [
      { id: 'bio', label: { en: 'Biometrics', tr: 'Biyometri' } },
      { id: 'card', label: { en: 'Card', tr: 'Kart' } },
      { id: 'token', label: { en: 'Token', tr: 'Token' } },
    ],
    items: [
      { id: '1', text: { en: 'Face scan to unlock a phone', tr: 'Telefonu yüz taramasıyla açmak' }, cat: 'bio' },
      { id: '2', text: { en: 'Swiping a hotel key card', tr: 'Otel kart anahtarını geçirmek' }, cat: 'card' },
      { id: '3', text: { en: 'Code from a bank key-ring device', tr: 'Banka anahtarlık cihazından kod' }, cat: 'token' },
      { id: '4', text: { en: 'Fingerprint at school gate', tr: 'Okul kapısında parmak izi' }, cat: 'bio' },
      { id: '5', text: { en: 'Chip card with PIN', tr: 'PIN’li çipli kart' }, cat: 'card' },
      { id: '6', text: { en: 'Code from an authenticator app', tr: 'Doğrulama uygulamasından kod' }, cat: 'token' },
    ],
  },
  match: [
    { id: 'auth', en: 'Authentication', tr: 'Kimlik doğrulama', desc: { en: 'Proving who you are', tr: 'Kim olduğunu kanıtlamak' } },
    { id: 'bio', en: 'Biometrics', tr: 'Biyometri', desc: { en: 'Uses body features', tr: 'Vücut özelliklerini kullanır' } },
    { id: 'mag', en: 'Magnetic stripe', tr: 'Manyetik şerit', desc: { en: 'Read by swiping the card', tr: 'Kartı geçirerek okunur' } },
    { id: 'smart', en: 'Smart card', tr: 'Akıllı kart', desc: { en: 'Card with a chip', tr: 'Çipli kart' } },
    { id: 'token', en: 'Token', tr: 'Token', desc: { en: 'Gives a one-time code', tr: 'Tek kullanımlık kod verir' } },
    { id: 'zero', en: 'Zero login', tr: 'Sıfır giriş', desc: { en: 'No password typed', tr: 'Parola yazılmaz' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A bank wants extra security for online banking, using customers’ phones.', tr: 'Bir banka, müşterilerin telefonlarını kullanarak internet bankacılığına ek güvenlik istiyor.' },
      options: [
        { id: 'elec', label: { en: 'Electronic token', tr: 'Elektronik token' } },
        { id: 'mag', label: { en: 'Magnetic stripe', tr: 'Manyetik şerit' } },
        { id: 'zero', label: { en: 'Zero login', tr: 'Sıfır giriş' } },
      ],
      answer: 'elec',
      reasons: [
        { en: 'An app on the phone gives a one-time code that only works once.', tr: 'Telefondaki uygulama yalnızca bir kez çalışan kod verir.' },
        { en: 'It needs a card reader at home.', tr: 'Evde kart okuyucu gerekir.' },
        { en: 'No security check is needed.', tr: 'Güvenlik kontrolü gerekmez.' },
      ],
      correctReason: 0,
      explain: { en: 'A one-time code on the phone adds security without an extra device.', tr: 'Telefondaki tek kullanımlık kod, ek cihaz olmadan güvenlik ekler.' },
    },
    {
      id: 's2',
      situation: { en: 'A laboratory wants only certain staff to enter. Cards are often lost.', tr: 'Bir laboratuvar yalnızca belirli personelin girmesini istiyor. Kartlar sık kayboluyor.' },
      options: [
        { id: 'bio', label: { en: 'Biometrics', tr: 'Biyometri' } },
        { id: 'smart', label: { en: 'Smart card', tr: 'Akıllı kart' } },
        { id: 'mag', label: { en: 'Magnetic stripe', tr: 'Manyetik şerit' } },
      ],
      answer: 'bio',
      reasons: [
        { en: 'Body features cannot be lost or forgotten.', tr: 'Vücut özellikleri kaybolmaz veya unutulmaz.' },
        { en: 'It is the cheapest method.', tr: 'En ucuz yöntemdir.' },
        { en: 'It can be shared with friends.', tr: 'Arkadaşlarla paylaşılabilir.' },
      ],
      correctReason: 0,
      explain: { en: 'Biometrics solve the problem of lost cards.', tr: 'Biyometri kaybolan kart sorununu çözer.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which is a biometric method?', tr: 'Hangisi biyometrik bir yöntemdir?' },
      options: [
        { en: 'PIN', tr: 'PIN' },
        { en: 'Fingerprint', tr: 'Parmak izi' },
        { en: 'Smart card', tr: 'Akıllı kart' },
        { en: 'Password', tr: 'Parola' },
      ],
      answer: 1,
      explain: { en: 'Fingerprints are a body feature.', tr: 'Parmak izi bir vücut özelliğidir.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'A one-time code from a token can be used many times.', tr: 'Token’dan gelen tek kullanımlık kod birçok kez kullanılabilir.' },
      answer: false,
      explain: { en: 'False. It works only once.', tr: 'Yanlış. Yalnızca bir kez çalışır.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'A smart card stores data on a ___.', tr: 'Akıllı kart veriyi bir ___ üzerinde saklar.' },
      bank: ['chip', 'magnet', 'cloud', 'screen'],
      answer: 'chip',
      explain: { en: 'Smart cards contain a chip.', tr: 'Akıllı kartlarda çip vardır.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'What is a disadvantage of zero login?', tr: 'Sıfır girişin bir dezavantajı nedir?' },
      options: [
        { en: 'It is slow', tr: 'Yavaştır' },
        { en: 'Privacy concerns', tr: 'Gizlilik endişeleri' },
        { en: 'You must remember a long password', tr: 'Uzun bir parola hatırlamalısın' },
      ],
      answer: 1,
      explain: { en: 'The system collects data about the user.', tr: 'Sistem kullanıcı hakkında veri toplar.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Describe',
      marks: 2,
      prompt: { en: 'Describe how a physical token is used to log in.', tr: 'Giriş yapmak için fiziksel token’ın nasıl kullanıldığını açıklayınız.' },
      points: [
        { point: { en: 'The token creates a one-time code.', tr: 'Token tek kullanımlık kod üretir.' }, keywords: [['code'], ['one-time'], ['otp']] },
        { point: { en: 'The user types the code in to log in / it works only once.', tr: 'Kullanıcı kodu girer / kod yalnızca bir kez çalışır.' }, keywords: [['enter'], ['type'], ['once'], ['input']] },
      ],
      model: { en: 'The token creates a one-time code. The user types this code in to log in; it only works once.', tr: 'Token tek kullanımlık bir kod üretir. Kullanıcı giriş yapmak için bu kodu girer; kod yalnızca bir kez çalışır.' },
    },
    {
      id: 'e2',
      command: 'Compare',
      marks: 3,
      prompt: { en: 'Compare magnetic stripe cards and smart cards.', tr: 'Manyetik şeritli kartları ve akıllı kartları karşılaştırınız.' },
      points: [
        { point: { en: 'Both are cards that store data used for authentication.', tr: 'İkisi de kimlik doğrulama için veri saklayan kartlardır.' }, keywords: [['both']] },
        { point: { en: 'Magnetic stripe is read by swiping; smart card has a chip.', tr: 'Manyetik şerit geçirilerek okunur; akıllı kartta çip vardır.' }, keywords: [['chip'], ['swip']] },
        { point: { en: 'Smart cards are more secure / magnetic stripes are easier to copy or damage.', tr: 'Akıllı kart daha güvenlidir / manyetik şerit kolay kopyalanır veya bozulur.' }, keywords: [['secur'], ['copy'], ['clone'], ['damage']] },
      ],
      model: { en: 'Both store data used to identify the user. A magnetic stripe card is read by swiping, whereas a smart card has a chip. Smart cards are more secure because magnetic stripes are easier to copy and damage.', tr: 'İkisi de kullanıcıyı tanımlayan veri saklar. Manyetik şeritli kart geçirilerek okunur, akıllı kartta ise çip vardır. Manyetik şerit daha kolay kopyalanıp bozulabildiği için akıllı kart daha güvenlidir.' },
    },
  ],
  vocab: [
    { en: 'Authentication', tr: 'Kimlik doğrulama' },
    { en: 'Biometrics', tr: 'Biyometri' },
    { en: 'Fingerprint', tr: 'Parmak izi' },
    { en: 'Magnetic stripe', tr: 'Manyetik şerit' },
    { en: 'Smart card', tr: 'Akıllı kart' },
    { en: 'Chip', tr: 'Çip' },
    { en: 'One-time code', tr: 'Tek kullanımlık kod' },
    { en: 'Zero login', tr: 'Sıfır giriş' },
  ],
}
