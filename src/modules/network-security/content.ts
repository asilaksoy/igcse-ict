import type { ModuleContent } from '../../data/types'

export const security: ModuleContent = {
  sim: 'password',
  learn: [
    {
      id: 'transfer',
      title: { en: 'Data transfer', tr: 'Veri aktarımı' },
      text: {
        tr: 'Veri bir ağ üzerinden gönderilirken ele geçirilebilir. Gizlilik (privacy): kişisel verinin özel kalması. Mahremiyet (confidentiality): verinin yalnızca yetkili kişilerce görülmesi.',
        en: 'Data can be intercepted while it travels across a network. Privacy: keeping personal data private. Confidentiality: only authorised people can see the data.',
      },
    },
    {
      id: 'passwords',
      title: { en: 'Passwords', tr: 'Parolalar' },
      text: {
        tr: 'Güçlü bir parola uzundur; büyük-küçük harf, rakam ve sembol içerir ve tahmin edilemez. Zayıf parola kısa veya kolay tahmin edilir (ör. 123456, adın).',
        en: 'A strong password is long, mixes upper- and lower-case letters, numbers and symbols, and is hard to guess. A weak password is short or easy to guess (e.g. 123456, your name).',
      },
      points: [
        { en: 'Change passwords regularly.', tr: 'Parolaları düzenli olarak değiştir.' },
        { en: 'Use up-to-date anti-spyware so passwords cannot be recorded.', tr: 'Parolaların kaydedilmemesi için güncel casus yazılım koruması kullan.' },
      ],
    },
    {
      id: 'malware',
      title: { en: 'Anti-malware', tr: 'Kötü amaçlı yazılımdan koruma' },
      text: {
        tr: 'Anti-virüs ve anti-malware yazılımı dosyaları tarar, virüsleri bulur ve siler ya da karantinaya alır.',
        en: 'Anti-virus and anti-malware software scans files, finds viruses and removes or quarantines them.',
      },
      points: [
        { en: 'Keep it up to date.', tr: 'Güncel tut.' },
        { en: 'Scan USB sticks and other storage before use.', tr: 'USB bellek ve diğer depolama aygıtlarını kullanmadan önce tara.' },
        { en: 'Scan files and software when downloading.', tr: 'Dosya ve yazılımları indirirken tara.' },
      ],
    },
  ],
  sort: {
    title: { en: 'Strong or weak password?', tr: 'Güçlü mü, zayıf mı?' },
    categories: [
      { id: 'strong', label: { en: 'Strong', tr: 'Güçlü' } },
      { id: 'weak', label: { en: 'Weak', tr: 'Zayıf' } },
    ],
    items: [
      { id: '1', text: { en: '123456', tr: '123456' }, cat: 'weak' },
      { id: '2', text: { en: 'Mavi#Kedi2026!', tr: 'Mavi#Kedi2026!' }, cat: 'strong' },
      { id: '3', text: { en: 'password', tr: 'password' }, cat: 'weak' },
      { id: '4', text: { en: 'T8r!qL3#zW', tr: 'T8r!qL3#zW' }, cat: 'strong' },
      { id: '5', text: { en: 'ayse2010', tr: 'ayse2010' }, cat: 'weak' },
      { id: '6', text: { en: 'Kitap_Deniz_47?', tr: 'Kitap_Deniz_47?' }, cat: 'strong' },
    ],
  },
  match: [
    { id: 'privacy', en: 'Privacy', tr: 'Gizlilik', desc: { en: 'Keeping personal data private', tr: 'Kişisel veriyi özel tutmak' } },
    { id: 'conf', en: 'Confidentiality', tr: 'Mahremiyet', desc: { en: 'Only authorised people see data', tr: 'Veriyi yalnızca yetkililer görür' } },
    { id: 'intercept', en: 'Intercept', tr: 'Ele geçirmek', desc: { en: 'Capture data while it is sent', tr: 'Gönderilirken veriyi yakalamak' } },
    { id: 'spyware', en: 'Spyware', tr: 'Casus yazılım', desc: { en: 'Secretly records what you type', tr: 'Yazdıklarını gizlice kaydeder' } },
    { id: 'virus', en: 'Virus', tr: 'Virüs', desc: { en: 'Harmful program that copies itself', tr: 'Kendini kopyalayan zararlı program' } },
    { id: 'quarantine', en: 'Quarantine', tr: 'Karantina', desc: { en: 'Isolate an infected file', tr: 'Virüslü dosyayı ayırmak' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A student finds a USB stick in the corridor and wants to open it.', tr: 'Bir öğrenci koridorda USB bellek buluyor ve açmak istiyor.' },
      options: [
        { id: 'scan', label: { en: 'Scan it first', tr: 'Önce tara' } },
        { id: 'open', label: { en: 'Open it now', tr: 'Hemen aç' } },
      ],
      answer: 'scan',
      reasons: [
        { en: 'It may contain a virus; anti-malware can find and remove it.', tr: 'Virüs içerebilir; koruma yazılımı bulup silebilir.' },
        { en: 'USB sticks are always safe.', tr: 'USB bellekler her zaman güvenlidir.' },
        { en: 'Scanning makes the files bigger.', tr: 'Tarama dosyaları büyütür.' },
      ],
      correctReason: 0,
      explain: { en: 'Always scan storage media before using it.', tr: 'Depolama aygıtlarını kullanmadan önce mutlaka tara.' },
    },
    {
      id: 's2',
      situation: { en: 'Someone has used the same password “ali123” for three years.', tr: 'Biri üç yıldır aynı “ali123” parolasını kullanıyor.' },
      options: [
        { id: 'change', label: { en: 'Change to a strong password', tr: 'Güçlü parolaya geç' } },
        { id: 'keep', label: { en: 'Keep it', tr: 'Aynen bırak' } },
      ],
      answer: 'change',
      reasons: [
        { en: 'It is weak and old; strong passwords changed regularly are harder to crack.', tr: 'Zayıf ve eski; düzenli değişen güçlü parolalar zor kırılır.' },
        { en: 'Short passwords are easier to remember, so they are safer.', tr: 'Kısa parolalar kolay hatırlanır, bu yüzden daha güvenlidir.' },
        { en: 'Passwords never need changing.', tr: 'Parolaları değiştirmek gerekmez.' },
      ],
      correctReason: 0,
      explain: { en: 'Use a strong password and change it regularly.', tr: 'Güçlü bir parola kullan ve düzenli değiştir.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which password is strongest?', tr: 'Hangi parola en güçlüdür?' },
      options: [
        { en: 'qwerty', tr: 'qwerty' },
        { en: 'Deniz2010', tr: 'Deniz2010' },
        { en: 'r7#Kp!2mQz', tr: 'r7#Kp!2mQz' },
        { en: '111111', tr: '111111' },
      ],
      answer: 2,
      explain: { en: 'It is long and mixes letters, numbers and symbols.', tr: 'Uzundur; harf, rakam ve sembol karışıktır.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'Anti-virus software should be kept up to date.', tr: 'Anti-virüs yazılımı güncel tutulmalıdır.' },
      answer: true,
      explain: { en: 'True. New viruses appear all the time.', tr: 'Doğru. Sürekli yeni virüsler çıkar.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'Anti-spyware helps stop passwords being ___.', tr: 'Casus yazılım koruması parolaların ___ önler.' },
      bank: ['intercepted', 'printed', 'shared', 'typed'],
      answer: 'intercepted',
      explain: { en: 'Spyware can record and steal passwords.', tr: 'Casus yazılım parolaları kaydedip çalabilir.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'What can anti-virus do with an infected file?', tr: 'Anti-virüs virüslü bir dosyayla ne yapabilir?' },
      options: [
        { en: 'Quarantine or delete it', tr: 'Karantinaya alır veya siler' },
        { en: 'Email it to friends', tr: 'Arkadaşlara e-postayla gönderir' },
        { en: 'Make it bigger', tr: 'Büyütür' },
      ],
      answer: 0,
      explain: { en: 'It removes or quarantines infected files.', tr: 'Virüslü dosyaları siler veya karantinaya alır.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Describe',
      marks: 3,
      prompt: { en: 'Describe what makes a password strong.', tr: 'Bir parolayı neyin güçlü yaptığını açıklayınız.' },
      points: [
        { point: { en: 'It is long (e.g. 8+ characters).', tr: 'Uzundur (ör. 8+ karakter).' }, keywords: [['long'], ['8'], ['length'], ['characters']] },
        { point: { en: 'Mix of upper and lower case letters.', tr: 'Büyük ve küçük harf karışımı.' }, keywords: [['upper'], ['capital'], ['lower']] },
        { point: { en: 'Includes numbers and symbols.', tr: 'Rakam ve sembol içerir.' }, keywords: [['number'], ['symbol'], ['special'], ['digit']] },
        { point: { en: 'Not easy to guess (no names / dates).', tr: 'Kolay tahmin edilmez (isim / tarih yok).' }, keywords: [['guess'], ['name'], ['birthday'], ['personal']] },
      ],
      model: { en: 'A strong password is long, uses a mix of upper- and lower-case letters, numbers and symbols, and does not contain easy-to-guess information like your name.', tr: 'Güçlü bir parola uzundur; büyük-küçük harf, rakam ve sembol karışımı kullanır ve adın gibi kolay tahmin edilen bilgiler içermez.' },
    },
    {
      id: 'e2',
      command: 'Explain',
      marks: 2,
      prompt: { en: 'Explain why USB sticks should be scanned before they are used.', tr: 'USB belleklerin kullanılmadan önce neden taranması gerektiğini açıklayınız.' },
      points: [
        { point: { en: 'They may contain a virus / malware.', tr: 'Virüs / kötü amaçlı yazılım içerebilir.' }, keywords: [['virus'], ['malware']] },
        { point: { en: 'Scanning finds it so it can be removed/quarantined before it spreads or damages data.', tr: 'Tarama onu bulur; yayılmadan / zarar vermeden silinir veya karantinaya alınır.' }, keywords: [['remove'], ['delete'], ['quarantine'], ['spread'], ['damage']] },
      ],
      model: { en: 'The USB stick may contain a virus. Scanning finds the virus so it can be removed or quarantined before it spreads or damages files.', tr: 'USB bellek virüs içerebilir. Tarama virüsü bulur; böylece yayılmadan veya dosyalara zarar vermeden silinir ya da karantinaya alınır.' },
    },
  ],
  vocab: [
    { en: 'Privacy', tr: 'Gizlilik' },
    { en: 'Confidentiality', tr: 'Mahremiyet' },
    { en: 'Strong password', tr: 'Güçlü parola' },
    { en: 'Weak password', tr: 'Zayıf parola' },
    { en: 'Spyware', tr: 'Casus yazılım' },
    { en: 'Virus', tr: 'Virüs' },
    { en: 'Anti-malware', tr: 'Kötü amaçlı yazılım koruması' },
    { en: 'Quarantine', tr: 'Karantina' },
  ],
}
