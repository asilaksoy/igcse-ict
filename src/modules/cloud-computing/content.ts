import type { ModuleContent } from '../../data/types'

export const cloud: ModuleContent = {
  sim: 'cloud',
  learn: [
    {
      id: 'what',
      title: { en: 'What is cloud computing?', tr: 'Bulut bilişim nedir?' },
      text: {
        tr: 'Verileri ve programları kendi cihazında değil, internet üzerinden uzak sunucularda saklamak ve kullanmaktır. Sunucular bir bulut hizmet sağlayıcısına aittir.',
        en: 'Storing and using data and software on remote servers over the internet, instead of on your own device. The servers belong to a cloud service provider.',
      },
      points: [{ en: 'Data is often copied on several servers.', tr: 'Veri genellikle birkaç sunucuda kopyalanır.' }],
    },
    {
      id: 'uses',
      title: { en: 'Uses', tr: 'Kullanım alanları' },
      text: {
        tr: 'Dosyaları saklamak ve yedeklemek, dosyaları paylaşmak ve aynı belge üzerinde birlikte çalışmak.',
        en: 'Storing and backing up files, sharing files and working together on the same document.',
      },
      example: { en: 'A group edits the same presentation online from different homes.', tr: 'Bir grup, farklı evlerden aynı sunumu çevrim içi düzenler.' },
    },
    {
      id: 'adv',
      title: { en: 'Advantages', tr: 'Avantajlar' },
      text: { tr: 'Bulutun güçlü yönleri:', en: 'Good points of the cloud:' },
      points: [
        { en: 'Access files from any device, anywhere with internet.', tr: 'İnternet olan her yerden, her cihazdan dosyalara eriş.' },
        { en: 'Easy to share and work together.', tr: 'Paylaşmak ve birlikte çalışmak kolay.' },
        { en: 'Files are backed up; no need to carry storage.', tr: 'Dosyalar yedeklenir; depolama aygıtı taşımaya gerek yok.' },
      ],
    },
    {
      id: 'dis',
      title: { en: 'Disadvantages', tr: 'Dezavantajlar' },
      text: { tr: 'Bulutun zayıf yönleri:', en: 'Problems with the cloud:' },
      points: [
        { en: 'Needs an internet connection.', tr: 'İnternet bağlantısı gerekir.' },
        { en: 'Data could be hacked; you rely on the provider.', tr: 'Veri ele geçirilebilir; sağlayıcıya bağımlısın.' },
        { en: 'Often costs money (subscription).', tr: 'Çoğu zaman ücretlidir (abonelik).' },
      ],
    },
  ],
  compare: {
    title: { en: 'Cloud vs local storage', tr: 'Bulut ve yerel depolama' },
    columns: ['Cloud', 'Local (USB / hard disk)'],
    rows: [
      { label: { en: 'Where', tr: 'Nerede' }, cells: [{ en: 'Remote servers', tr: 'Uzak sunucular' }, { en: 'Your own device', tr: 'Kendi cihazın' }] },
      { label: { en: 'Needs internet?', tr: 'İnternet gerekir mi?' }, cells: [{ en: 'Yes', tr: 'Evet' }, { en: 'No', tr: 'Hayır' }] },
      { label: { en: 'Access', tr: 'Erişim' }, cells: [{ en: 'Any device, anywhere', tr: 'Her cihaz, her yer' }, { en: 'Only where the device is', tr: 'Yalnızca cihazın olduğu yer' }] },
      { label: { en: 'Sharing', tr: 'Paylaşım' }, cells: [{ en: 'Easy', tr: 'Kolay' }, { en: 'Harder', tr: 'Daha zor' }] },
      { label: { en: 'Control of data', tr: 'Veri kontrolü' }, cells: [{ en: 'Provider', tr: 'Sağlayıcı' }, { en: 'You', tr: 'Sen' }] },
    ],
  },
  sort: {
    title: { en: 'Advantage or disadvantage of cloud storage?', tr: 'Bulut depolamanın avantajı mı, dezavantajı mı?' },
    categories: [
      { id: 'adv', label: { en: 'Advantage', tr: 'Avantaj' } },
      { id: 'dis', label: { en: 'Disadvantage', tr: 'Dezavantaj' } },
    ],
    items: [
      { id: '1', text: { en: 'Access from any device', tr: 'Her cihazdan erişim' }, cat: 'adv' },
      { id: '2', text: { en: 'Needs internet', tr: 'İnternet gerekir' }, cat: 'dis' },
      { id: '3', text: { en: 'Easy to share files', tr: 'Dosya paylaşmak kolay' }, cat: 'adv' },
      { id: '4', text: { en: 'Risk of hacking', tr: 'Ele geçirilme riski' }, cat: 'dis' },
      { id: '5', text: { en: 'Automatic backup', tr: 'Otomatik yedekleme' }, cat: 'adv' },
      { id: '6', text: { en: 'Monthly fee', tr: 'Aylık ücret' }, cat: 'dis' },
    ],
  },
  match: [
    { id: 'cloud', en: 'Cloud storage', tr: 'Bulut depolama', desc: { en: 'Saving files on remote servers', tr: 'Dosyaları uzak sunucularda saklama' } },
    { id: 'server', en: 'Server', tr: 'Sunucu', desc: { en: 'Computer that stores data for others', tr: 'Başkaları için veri saklayan bilgisayar' } },
    { id: 'upload', en: 'Upload', tr: 'Yüklemek', desc: { en: 'Send a file to the cloud', tr: 'Dosyayı buluta göndermek' } },
    { id: 'download', en: 'Download', tr: 'İndirmek', desc: { en: 'Copy a file from the cloud', tr: 'Dosyayı buluttan almak' } },
    { id: 'sync', en: 'Synchronise', tr: 'Eşitlemek', desc: { en: 'Keep the same version on all devices', tr: 'Tüm cihazlarda aynı sürümü tutmak' } },
    { id: 'backup', en: 'Backup', tr: 'Yedek', desc: { en: 'A copy in case data is lost', tr: 'Veri kaybolursa diye kopya' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'Students work on one project from home and school, on different devices.', tr: 'Öğrenciler tek bir proje üzerinde evden ve okuldan, farklı cihazlarla çalışıyor.' },
      options: [
        { id: 'cloud', label: { en: 'Cloud storage', tr: 'Bulut' } },
        { id: 'usb', label: { en: 'USB stick', tr: 'USB bellek' } },
      ],
      answer: 'cloud',
      reasons: [
        { en: 'Files can be accessed and shared from any device with internet.', tr: 'Dosyalara internetli her cihazdan erişilip paylaşılabilir.' },
        { en: 'It works without internet.', tr: 'İnternetsiz çalışır.' },
        { en: 'It can never be hacked.', tr: 'Asla ele geçirilemez.' },
      ],
      correctReason: 0,
      explain: { en: 'Cloud storage lets everyone use the same, up-to-date file.', tr: 'Bulut, herkesin aynı ve güncel dosyayı kullanmasını sağlar.' },
    },
    {
      id: 's2',
      situation: { en: 'A teacher will present in a village school with no internet.', tr: 'Bir öğretmen internetin olmadığı bir köy okulunda sunum yapacak.' },
      options: [
        { id: 'cloud', label: { en: 'Cloud storage', tr: 'Bulut' } },
        { id: 'usb', label: { en: 'USB stick', tr: 'USB bellek' } },
      ],
      answer: 'usb',
      reasons: [
        { en: 'It is easier to share.', tr: 'Paylaşmak daha kolaydır.' },
        { en: 'Cloud files cannot be reached without internet.', tr: 'Bulut dosyalarına internetsiz ulaşılamaz.' },
        { en: 'It holds less data.', tr: 'Daha az veri tutar.' },
      ],
      correctReason: 1,
      explain: { en: 'Without internet, local storage is needed.', tr: 'İnternet yoksa yerel depolama gerekir.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Where is cloud data stored?', tr: 'Bulut verisi nerede saklanır?' },
      options: [
        { en: 'On remote servers', tr: 'Uzak sunucularda' },
        { en: 'Only on your tablet', tr: 'Yalnızca tabletinde' },
        { en: 'On a CD', tr: 'CD’de' },
        { en: 'In the router', tr: 'Router’da' },
      ],
      answer: 0,
      explain: { en: 'Cloud data is stored on the provider’s remote servers.', tr: 'Bulut verisi sağlayıcının uzak sunucularında saklanır.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'You can use cloud storage without an internet connection.', tr: 'Bulut depolamayı internet bağlantısı olmadan kullanabilirsin.' },
      answer: false,
      explain: { en: 'False. You need internet to reach the cloud.', tr: 'Yanlış. Buluta erişmek için internet gerekir.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'Keeping the same file version on all devices is called ___.', tr: 'Tüm cihazlarda aynı dosya sürümünü tutmaya ___ denir.' },
      bank: ['synchronising', 'deleting', 'printing', 'routing'],
      answer: 'synchronising',
      explain: { en: 'Synchronising keeps files the same everywhere.', tr: 'Senkronizasyon dosyaları her yerde aynı tutar.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'Which is a disadvantage of cloud storage?', tr: 'Hangisi bulut depolamanın dezavantajıdır?' },
      options: [
        { en: 'Access from anywhere', tr: 'Her yerden erişim' },
        { en: 'Easy sharing', tr: 'Kolay paylaşım' },
        { en: 'Data could be hacked', tr: 'Veri ele geçirilebilir' },
        { en: 'Automatic backup', tr: 'Otomatik yedekleme' },
      ],
      answer: 2,
      explain: { en: 'Security risk is a disadvantage.', tr: 'Güvenlik riski bir dezavantajdır.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Define',
      marks: 1,
      prompt: { en: 'Define cloud storage.', tr: 'Bulut depolamayı tanımlayınız.' },
      points: [{ point: { en: 'Storing data on remote servers accessed over the internet.', tr: 'Verinin internet üzerinden erişilen uzak sunucularda saklanması.' }, keywords: [['server'], ['remote'], ['online'], ['internet']] }],
      model: { en: 'Storing data on remote servers that are accessed over the internet.', tr: 'Verinin internet üzerinden erişilen uzak sunucularda saklanması.' },
    },
    {
      id: 'e2',
      command: 'Explain',
      marks: 4,
      prompt: { en: 'Explain two advantages and two disadvantages of storing school work in the cloud.', tr: 'Okul ödevlerini bulutta saklamanın iki avantajını ve iki dezavantajını açıklayınız.' },
      points: [
        { point: { en: 'Access from any device / anywhere with internet.', tr: 'İnternetli her cihazdan / her yerden erişim.' }, keywords: [['any device'], ['anywhere'], ['any'], ['access']] },
        { point: { en: 'Easy to share / collaborate.', tr: 'Kolay paylaşım / birlikte çalışma.' }, keywords: [['share'], ['collaborat'], ['together']] },
        { point: { en: 'Backed up / not lost if device breaks.', tr: 'Yedeklenir / cihaz bozulursa kaybolmaz.' }, keywords: [['backup'], ['back up'], ['backed'], ['lost']] },
        { point: { en: 'Needs internet connection.', tr: 'İnternet bağlantısı gerekir.' }, keywords: [['internet'], ['connection'], ['offline']] },
        { point: { en: 'Security risk / hacking / privacy.', tr: 'Güvenlik riski / ele geçirilme / gizlilik.' }, keywords: [['hack'], ['secur'], ['privacy']] },
        { point: { en: 'Cost / depends on the provider.', tr: 'Maliyet / sağlayıcıya bağımlılık.' }, keywords: [['cost'], ['pay'], ['provider'], ['fee']] },
      ],
      model: {
        en: 'Advantages: work can be accessed from any device with internet; files are easy to share with classmates. Disadvantages: without internet the work cannot be reached; the data could be hacked.',
        tr: 'Avantajlar: ödevlere internetli her cihazdan erişilebilir; dosyalar sınıf arkadaşlarıyla kolayca paylaşılır. Dezavantajlar: internet yoksa ödevlere ulaşılamaz; veri ele geçirilebilir.',
      },
    },
  ],
  vocab: [
    { en: 'Cloud storage', tr: 'Bulut depolama' },
    { en: 'Server', tr: 'Sunucu' },
    { en: 'Upload', tr: 'Yüklemek' },
    { en: 'Download', tr: 'İndirmek' },
    { en: 'Synchronise', tr: 'Eşitlemek' },
    { en: 'Backup', tr: 'Yedek' },
    { en: 'Provider', tr: 'Sağlayıcı' },
    { en: 'Collaborate', tr: 'Birlikte çalışmak' },
  ],
}
