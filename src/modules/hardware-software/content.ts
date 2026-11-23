import type { ModuleContent } from '../../data/types'

export const hardwareSoftware: ModuleContent = {
  learn: [
    {
      id: 'hardware',
      title: { en: 'Hardware', tr: 'Donanım' },
      text: {
        tr: 'Donanım, bir bilgisayar sisteminin fiziksel bileşenleridir; dokunabildiğin parçalardır.',
        en: 'Hardware is the physical components of a computer system – the parts you can touch.',
      },
      points: [
        { en: 'Internal components: CPU (processor), motherboard.', tr: 'İç bileşenler: CPU (işlemci), anakart.' },
        { en: 'Internal memory: RAM and ROM.', tr: 'İç bellek: RAM ve ROM.' },
        { en: 'Other: graphics card, sound card, NIC, camera, storage devices, input and output devices.', tr: 'Diğer: ekran kartı, ses kartı, ağ kartı (NIC), kamera, depolama aygıtları, giriş ve çıkış aygıtları.' },
      ],
    },
    {
      id: 'software',
      title: { en: 'Software', tr: 'Yazılım' },
      text: {
        tr: 'Yazılım, bilgisayarın çalışmasını kontrol eden veya elektronik verileri işleyen programlardır. İki türü vardır: uygulama yazılımı ve sistem yazılımı.',
        en: 'Software is the programs that control the operation of a computer or process electronic data. There are two types: applications software and system software.',
      },
    },
    {
      id: 'applications',
      title: { en: 'Applications software', tr: 'Uygulama yazılımı' },
      text: {
        tr: 'Kullanıcının bir görevi yapması için ihtiyaç duyduğu hizmetleri sağlar.',
        en: 'Provides the services the user needs to do a task.',
      },
      points: [
        { en: 'Word processing, spreadsheet, database management systems', tr: 'Kelime işlemci, hesap tablosu, veritabanı yönetim sistemleri' },
        { en: 'Control and measurement software, apps and applets', tr: 'Kontrol ve ölçüm yazılımları, uygulamalar ve küçük uygulamalar (applet)' },
        { en: 'Video, graphics and audio editing, CAD', tr: 'Video, grafik ve ses düzenleme, CAD (bilgisayar destekli tasarım)' },
      ],
    },
    {
      id: 'system',
      title: { en: 'System software', tr: 'Sistem yazılımı' },
      text: {
        tr: 'Bilgisayarın çalışması için gereken hizmetleri sağlar.',
        en: 'Provides the services the computer needs to operate.',
      },
      points: [
        { en: 'Operating systems, device drivers, utilities', tr: 'İşletim sistemleri, aygıt sürücüleri, yardımcı programlar' },
        { en: 'Compilers and linkers', tr: 'Derleyiciler ve bağlayıcılar' },
      ],
    },
    {
      id: 'analogue',
      title: { en: 'Analogue and digital data', tr: 'Analog ve dijital veri' },
      text: {
        tr: 'Analog veri sürekli değişir (ör. sıcaklık, ses). Dijital veri yalnızca belirli değerler alır (0 ve 1). Bilgisayarlar yalnızca dijital veriyi işleyebilir.',
        en: 'Analogue data changes continuously (e.g. temperature, sound). Digital data has only set values (0 and 1). Computers can only process digital data.',
      },
      points: [
        { en: 'Analogue → digital: so a computer can process it (e.g. data from a sensor).', tr: 'Analog → dijital: bilgisayarın işleyebilmesi için (ör. sensörden gelen veri).' },
        { en: 'Digital → analogue: so it can control devices (e.g. a speaker or motor).', tr: 'Dijital → analog: aygıtları kontrol edebilmek için (ör. hoparlör veya motor).' },
      ],
    },
  ],
  compare: {
    title: { en: 'Applications vs system software', tr: 'Uygulama ve sistem yazılımı' },
    columns: ['Applications', 'System'],
    rows: [
      { label: { en: 'Purpose', tr: 'Amaç' }, cells: [{ en: 'Helps the user do a task', tr: 'Kullanıcının görevini yapar' }, { en: 'Lets the computer operate', tr: 'Bilgisayarın çalışmasını sağlar' }] },
      { label: { en: 'Used by', tr: 'Kullanan' }, cells: [{ en: 'The user', tr: 'Kullanıcı' }, { en: 'The computer', tr: 'Bilgisayar' }] },
      { label: { en: 'Examples', tr: 'Örnekler' }, cells: [{ en: 'Spreadsheet, CAD', tr: 'Hesap tablosu, CAD' }, { en: 'Operating system, driver', tr: 'İşletim sistemi, sürücü' }] },
    ],
  },
  sort: {
    title: { en: 'Applications or system software?', tr: 'Uygulama mı, sistem yazılımı mı?' },
    categories: [
      { id: 'app', label: { en: 'Applications', tr: 'Uygulama' } },
      { id: 'sys', label: { en: 'System', tr: 'Sistem' } },
    ],
    items: [
      { id: '1', text: { en: 'Word processor', tr: 'Kelime işlemci' }, cat: 'app' },
      { id: '2', text: { en: 'Operating system', tr: 'İşletim sistemi' }, cat: 'sys' },
      { id: '3', text: { en: 'Video editor', tr: 'Video düzenleyici' }, cat: 'app' },
      { id: '4', text: { en: 'Printer driver', tr: 'Yazıcı sürücüsü' }, cat: 'sys' },
      { id: '5', text: { en: 'CAD software', tr: 'CAD yazılımı' }, cat: 'app' },
      { id: '6', text: { en: 'Compiler', tr: 'Derleyici' }, cat: 'sys' },
    ],
  },
  match: [
    { id: 'hw', en: 'Hardware', tr: 'Donanım', desc: { en: 'Physical parts of a computer', tr: 'Bilgisayarın fiziksel parçaları' } },
    { id: 'sw', en: 'Software', tr: 'Yazılım', desc: { en: 'Programs that run on a computer', tr: 'Bilgisayarda çalışan programlar' } },
    { id: 'driver', en: 'Device driver', tr: 'Aygıt sürücüsü', desc: { en: 'Lets the OS use a device', tr: 'İşletim sisteminin bir aygıtı kullanmasını sağlar' } },
    { id: 'mb', en: 'Motherboard', tr: 'Anakart', desc: { en: 'Main circuit board that connects parts', tr: 'Parçaları birbirine bağlayan ana devre kartı' } },
    { id: 'analogue', en: 'Analogue data', tr: 'Analog veri', desc: { en: 'Changes continuously', tr: 'Sürekli değişir' } },
    { id: 'digital', en: 'Digital data', tr: 'Dijital veri', desc: { en: 'Only set values, 0 and 1', tr: 'Yalnızca belirli değerler, 0 ve 1' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'An architect wants to draw a plan of a new house on a computer.', tr: 'Bir mimar yeni bir evin planını bilgisayarda çizmek istiyor.' },
      options: [
        { id: 'cad', label: { en: 'CAD software', tr: 'CAD yazılımı' } },
        { id: 'driver', label: { en: 'Device driver', tr: 'Aygıt sürücüsü' } },
        { id: 'compiler', label: { en: 'Compiler', tr: 'Derleyici' } },
      ],
      answer: 'cad',
      reasons: [
        { en: 'It is applications software for designing drawings and plans.', tr: 'Çizim ve plan tasarlamak için bir uygulama yazılımıdır.' },
        { en: 'It lets the computer start up.', tr: 'Bilgisayarın açılmasını sağlar.' },
        { en: 'It is a hardware component.', tr: 'Bir donanım bileşenidir.' },
      ],
      correctReason: 0,
      explain: { en: 'CAD (computer aided design) is applications software.', tr: 'CAD (bilgisayar destekli tasarım) bir uygulama yazılımıdır.' },
    },
    {
      id: 's2',
      situation: { en: 'A new printer is plugged in, but the computer cannot use it.', tr: 'Yeni bir yazıcı takıldı ama bilgisayar onu kullanamıyor.' },
      options: [
        { id: 'driver', label: { en: 'Device driver', tr: 'Aygıt sürücüsü' } },
        { id: 'ss', label: { en: 'Spreadsheet', tr: 'Hesap tablosu' } },
        { id: 'ram', label: { en: 'More RAM', tr: 'Daha fazla RAM' } },
      ],
      answer: 'driver',
      reasons: [
        { en: 'It is system software that lets the operating system communicate with the printer.', tr: 'İşletim sisteminin yazıcıyla iletişim kurmasını sağlayan sistem yazılımıdır.' },
        { en: 'It does calculations.', tr: 'Hesaplama yapar.' },
        { en: 'It stores files permanently.', tr: 'Dosyaları kalıcı olarak saklar.' },
      ],
      correctReason: 0,
      explain: { en: 'Install the printer’s device driver.', tr: 'Yazıcının aygıt sürücüsü kurulmalıdır.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which is an example of hardware?', tr: 'Hangisi donanıma örnektir?' },
      options: [
        { en: 'Operating system', tr: 'İşletim sistemi' },
        { en: 'Graphics card', tr: 'Ekran kartı' },
        { en: 'Spreadsheet', tr: 'Hesap tablosu' },
        { en: 'Device driver', tr: 'Aygıt sürücüsü' },
      ],
      answer: 1,
      explain: { en: 'A graphics card is a physical component.', tr: 'Ekran kartı fiziksel bir bileşendir.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'A compiler is applications software.', tr: 'Derleyici bir uygulama yazılımıdır.' },
      answer: false,
      explain: { en: 'False. A compiler is system software.', tr: 'Yanlış. Derleyici bir sistem yazılımıdır.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'Computers can only process ___ data.', tr: 'Bilgisayarlar yalnızca ___ veriyi işleyebilir.' },
      bank: ['digital', 'analogue', 'paper', 'sound'],
      answer: 'digital',
      explain: { en: 'Analogue data must be converted to digital first.', tr: 'Analog veri önce dijitale dönüştürülmelidir.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'Which is analogue data?', tr: 'Hangisi analog veridir?' },
      options: [
        { en: 'Temperature in a room', tr: 'Bir odadaki sıcaklık' },
        { en: 'A file stored on a USB stick', tr: 'USB bellekteki bir dosya' },
        { en: 'The number 1010', tr: '1010 sayısı' },
      ],
      answer: 0,
      explain: { en: 'Temperature changes continuously.', tr: 'Sıcaklık sürekli değişir.' },
    },
    {
      kind: 'tf',
      id: 'c5',
      prompt: { en: 'Digital data must be converted to analogue to control a motor.', tr: 'Bir motoru kontrol etmek için dijital veri analoga dönüştürülmelidir.' },
      answer: true,
      explain: { en: 'True.', tr: 'Doğru.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Define',
      marks: 1,
      prompt: { en: 'Define the term hardware.', tr: 'Donanım terimini tanımlayınız.' },
      points: [{ point: { en: 'The physical components of a computer system.', tr: 'Bir bilgisayar sisteminin fiziksel bileşenleri.' }, keywords: [['physical'], ['touch']] }],
      model: { en: 'The physical components of a computer system.', tr: 'Bir bilgisayar sisteminin fiziksel bileşenleri.' },
    },
    {
      id: 'e2',
      command: 'State',
      marks: 2,
      prompt: { en: 'State two examples of system software.', tr: 'Sistem yazılımına iki örnek belirtiniz.' },
      points: [
        { point: { en: 'Operating system', tr: 'İşletim sistemi' }, keywords: [['operating']] },
        { point: { en: 'Device driver', tr: 'Aygıt sürücüsü' }, keywords: [['driver']] },
        { point: { en: 'Utility', tr: 'Yardımcı program' }, keywords: [['utilit']] },
        { point: { en: 'Compiler / linker', tr: 'Derleyici / bağlayıcı' }, keywords: [['compiler'], ['linker']] },
      ],
      model: { en: 'Operating system; device driver.', tr: 'İşletim sistemi; aygıt sürücüsü.' },
    },
    {
      id: 'e3',
      command: 'Explain',
      marks: 2,
      prompt: { en: 'Explain why data from a temperature sensor must be converted before a computer can use it.', tr: 'Bir sıcaklık sensöründen gelen verinin bilgisayar tarafından kullanılabilmesi için neden dönüştürülmesi gerektiğini açıklayınız.' },
      points: [
        { point: { en: 'Sensor data is analogue.', tr: 'Sensör verisi analogdur.' }, keywords: [['analogue'], ['analog']] },
        { point: { en: 'Computers can only process digital data, so it must be converted to digital.', tr: 'Bilgisayarlar yalnızca dijital veriyi işler, bu yüzden dijitale dönüştürülmelidir.' }, keywords: [['digital']] },
      ],
      model: { en: 'The sensor produces analogue data, but a computer can only process digital data, so it must be converted from analogue to digital.', tr: 'Sensör analog veri üretir; ancak bilgisayar yalnızca dijital veriyi işleyebilir, bu yüzden analogdan dijitale dönüştürülmelidir.' },
    },
  ],
  vocab: [
    { en: 'Hardware', tr: 'Donanım' },
    { en: 'Software', tr: 'Yazılım' },
    { en: 'Motherboard', tr: 'Anakart' },
    { en: 'Applications software', tr: 'Uygulama yazılımı' },
    { en: 'System software', tr: 'Sistem yazılımı' },
    { en: 'Device driver', tr: 'Aygıt sürücüsü' },
    { en: 'Compiler', tr: 'Derleyici' },
    { en: 'Analogue', tr: 'Analog' },
    { en: 'Digital', tr: 'Dijital' },
  ],
}
