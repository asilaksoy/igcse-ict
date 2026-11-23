import type { ModuleContent } from '../../data/types'

export const mainComponents: ModuleContent = {
  learn: [
    {
      id: 'cpu',
      title: { en: 'CPU – Central Processing Unit', tr: 'CPU – Merkezi İşlem Birimi' },
      text: {
        tr: 'CPU, bilgisayara girilen komutları ve verileri işleyerek bir çıktı üretir. Hesaplamaları yapar ve bilgisayarın diğer parçalarını kontrol eder.',
        en: 'The CPU processes the instructions and data entered into the computer to produce an output. It carries out calculations and controls the other parts of the computer.',
      },
      example: { en: 'You type 5 + 3 in a calculator app: the CPU processes it and the answer 8 is shown on the screen.', tr: 'Hesap makinesine 5 + 3 yazarsın: CPU bunu işler ve ekranda 8 görünür.' },
    },
    {
      id: 'ram',
      title: { en: 'RAM – Random Access Memory', tr: 'RAM – Rastgele Erişimli Bellek' },
      text: {
        tr: 'O anda kullanılan program ve verileri geçici olarak saklar. Okunabilir ve yazılabilir. Elektrik kesilince içindekiler silinir (geçici / volatile).',
        en: 'Temporarily stores the programs and data currently in use. It can be read from and written to. Its contents are lost when the power is off (volatile).',
      },
    },
    {
      id: 'rom',
      title: { en: 'ROM – Read Only Memory', tr: 'ROM – Salt Okunur Bellek' },
      text: {
        tr: 'Bilgisayarın açılması için gereken komutları kalıcı olarak saklar. Yalnızca okunabilir, değiştirilemez. Elektrik kesilince içindekiler silinmez (kalıcı / non-volatile).',
        en: 'Permanently stores the instructions needed to start the computer. It can only be read, not changed. Its contents are not lost when the power is off (non-volatile).',
      },
    },
    {
      id: 'io',
      title: { en: 'Input and output devices', tr: 'Giriş ve çıkış aygıtları' },
      text: {
        tr: 'Giriş aygıtları veriyi bilgisayara gönderir (ör. klavye, fare). Çıkış aygıtları bilgisayarın sonuçlarını gösterir veya üretir (ör. monitör, yazıcı).',
        en: 'Input devices send data into the computer (e.g. keyboard, mouse). Output devices show or produce the results from the computer (e.g. monitor, printer).',
      },
    },
    {
      id: 'backing',
      title: { en: 'Backing storage', tr: 'Yardımcı depolama' },
      text: {
        tr: 'Verileri ve programları kalıcı olarak saklar (ör. sabit disk, SSD). İç bellekten daha büyük kapasitelidir ve GB başına daha ucuzdur, ama daha yavaştır.',
        en: 'Stores data and programs permanently (e.g. hard disk, SSD). It has a larger capacity and is cheaper per GB than internal memory, but it is slower.',
      },
    },
  ],
  compare: {
    title: { en: 'RAM, ROM and backing storage', tr: 'RAM, ROM ve yardımcı depolama' },
    columns: ['RAM', 'ROM', 'Backing storage'],
    rows: [
      { label: { en: 'Contents when power off', tr: 'Elektrik kesilince' }, cells: [{ en: 'Lost (volatile)', tr: 'Silinir (geçici)' }, { en: 'Kept (non-volatile)', tr: 'Kalır (kalıcı)' }, { en: 'Kept', tr: 'Kalır' }] },
      { label: { en: 'Read / write', tr: 'Okuma / yazma' }, cells: [{ en: 'Read and write', tr: 'Okuma ve yazma' }, { en: 'Read only', tr: 'Yalnızca okuma' }, { en: 'Read and write', tr: 'Okuma ve yazma' }] },
      { label: { en: 'Stores', tr: 'Ne saklar' }, cells: [{ en: 'Data and programs in use', tr: 'Kullanılan veri ve programlar' }, { en: 'Start-up instructions', tr: 'Açılış komutları' }, { en: 'Files and programs', tr: 'Dosyalar ve programlar' }] },
      { label: { en: 'Speed', tr: 'Hız' }, cells: [{ en: 'Fast', tr: 'Hızlı' }, { en: 'Fast', tr: 'Hızlı' }, { en: 'Slower', tr: 'Daha yavaş' }] },
    ],
  },
  sort: {
    title: { en: 'RAM or ROM?', tr: 'RAM mi, ROM mu?' },
    categories: [
      { id: 'ram', label: { en: 'RAM', tr: 'RAM' } },
      { id: 'rom', label: { en: 'ROM', tr: 'ROM' } },
    ],
    items: [
      { id: '1', text: { en: 'Volatile', tr: 'Geçici' }, cat: 'ram' },
      { id: '2', text: { en: 'Read only', tr: 'Yalnızca okunur' }, cat: 'rom' },
      { id: '3', text: { en: 'Holds programs in use', tr: 'Kullanılan programları tutar' }, cat: 'ram' },
      { id: '4', text: { en: 'Holds start-up instructions', tr: 'Açılış komutlarını tutar' }, cat: 'rom' },
      { id: '5', text: { en: 'Can be written to', tr: 'Üzerine yazılabilir' }, cat: 'ram' },
      { id: '6', text: { en: 'Non-volatile', tr: 'Kalıcı' }, cat: 'rom' },
    ],
  },
  match: [
    { id: 'cpu', en: 'CPU', tr: 'Merkezi işlem birimi', desc: { en: 'Processes instructions', tr: 'Komutları işler' } },
    { id: 'ram', en: 'RAM', tr: 'Rastgele erişimli bellek', desc: { en: 'Temporary memory', tr: 'Geçici bellek' } },
    { id: 'rom', en: 'ROM', tr: 'Salt okunur bellek', desc: { en: 'Permanent start-up instructions', tr: 'Kalıcı açılış komutları' } },
    { id: 'volatile', en: 'Volatile', tr: 'Geçici (uçucu)', desc: { en: 'Data lost when power is off', tr: 'Elektrik kesilince veri silinir' } },
    { id: 'backing', en: 'Backing storage', tr: 'Yardımcı depolama', desc: { en: 'Stores files permanently', tr: 'Dosyaları kalıcı saklar' } },
    { id: 'input', en: 'Input device', tr: 'Giriş aygıtı', desc: { en: 'Sends data into the computer', tr: 'Bilgisayara veri gönderir' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A student types an essay and the power suddenly goes off before saving.', tr: 'Bir öğrenci kompozisyon yazarken, kaydetmeden önce elektrik kesiliyor.' },
      options: [
        { id: 'ram', label: { en: 'Lost from RAM', tr: 'RAM’den silinir' } },
        { id: 'rom', label: { en: 'Kept in ROM', tr: 'ROM’da kalır' } },
      ],
      answer: 'ram',
      reasons: [
        { en: 'Unsaved work is in RAM, which is volatile.', tr: 'Kaydedilmemiş çalışma RAM’dedir ve RAM geçicidir.' },
        { en: 'ROM stores all user files.', tr: 'ROM tüm kullanıcı dosyalarını saklar.' },
        { en: 'RAM is read only.', tr: 'RAM yalnızca okunur.' },
      ],
      correctReason: 0,
      explain: { en: 'Save work to backing storage to keep it.', tr: 'Çalışmayı korumak için yardımcı depolamaya kaydetmelisin.' },
    },
    {
      id: 's2',
      situation: { en: 'Where are the instructions that start the computer when it is switched on?', tr: 'Bilgisayar açıldığında onu başlatan komutlar nerededir?' },
      options: [
        { id: 'rom', label: { en: 'ROM', tr: 'ROM' } },
        { id: 'ram', label: { en: 'RAM', tr: 'RAM' } },
      ],
      answer: 'rom',
      reasons: [
        { en: 'ROM is non-volatile, so the instructions are there when the power comes on.', tr: 'ROM kalıcıdır; komutlar elektrik geldiğinde hazırdır.' },
        { en: 'RAM keeps data when the power is off.', tr: 'RAM elektrik yokken veriyi korur.' },
        { en: 'ROM is changed every day.', tr: 'ROM her gün değiştirilir.' },
      ],
      correctReason: 0,
      explain: { en: 'Start-up instructions are stored in ROM.', tr: 'Açılış komutları ROM’da saklanır.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'What does the CPU do?', tr: 'CPU ne yapar?' },
      options: [
        { en: 'Processes instructions to produce an output', tr: 'Komutları işleyerek çıktı üretir' },
        { en: 'Stores files permanently', tr: 'Dosyaları kalıcı saklar' },
        { en: 'Prints documents', tr: 'Belge yazdırır' },
      ],
      answer: 0,
      explain: { en: 'The CPU processes instructions and data.', tr: 'CPU komutları ve verileri işler.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'ROM is volatile.', tr: 'ROM geçicidir.' },
      answer: false,
      explain: { en: 'False. ROM is non-volatile; RAM is volatile.', tr: 'Yanlış. ROM kalıcıdır; geçici olan RAM’dir.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'Programs currently in use are stored in ___.', tr: 'O an kullanılan programlar ___ içinde saklanır.' },
      bank: ['RAM', 'ROM', 'a printer', 'a monitor'],
      answer: 'RAM',
      explain: { en: 'RAM holds data and programs in use.', tr: 'RAM kullanılan veri ve programları tutar.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'Compared with RAM, backing storage is…', tr: 'RAM ile karşılaştırıldığında yardımcı depolama…' },
      options: [
        { en: 'faster and smaller', tr: 'daha hızlı ve daha küçük' },
        { en: 'slower but larger and permanent', tr: 'daha yavaş ama daha büyük ve kalıcı' },
        { en: 'read only', tr: 'yalnızca okunur' },
      ],
      answer: 1,
      explain: { en: 'Backing storage is slower, larger and non-volatile.', tr: 'Yardımcı depolama daha yavaş, daha büyük ve kalıcıdır.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Describe',
      marks: 3,
      prompt: { en: 'Describe three differences between RAM and ROM.', tr: 'RAM ile ROM arasındaki üç farkı açıklayınız.' },
      points: [
        { point: { en: 'RAM is volatile; ROM is non-volatile.', tr: 'RAM geçici; ROM kalıcıdır.' }, keywords: [['volatile'], ['power'], ['permanent'], ['temporary']] },
        { point: { en: 'RAM can be written to; ROM is read only.', tr: 'RAM’e yazılabilir; ROM yalnızca okunur.' }, keywords: [['read only'], ['write'], ['changed']] },
        { point: { en: 'RAM stores data/programs in use; ROM stores start-up instructions.', tr: 'RAM kullanılan veri/programları; ROM açılış komutlarını saklar.' }, keywords: [['start'], ['boot'], ['in use'], ['currently']] },
        { point: { en: 'RAM usually has a larger capacity.', tr: 'RAM’in kapasitesi genellikle daha büyüktür.' }, keywords: [['capacity'], ['larger'], ['bigger']] },
      ],
      model: { en: 'RAM is volatile but ROM is non-volatile. RAM can be read from and written to, whereas ROM is read only. RAM stores the data and programs in use, while ROM stores the start-up instructions.', tr: 'RAM geçicidir, ROM kalıcıdır. RAM okunup yazılabilir, ROM yalnızca okunur. RAM kullanılan veri ve programları, ROM ise açılış komutlarını saklar.' },
    },
    {
      id: 'e2',
      command: 'Explain',
      marks: 2,
      prompt: { en: 'Explain why a computer needs backing storage as well as RAM.', tr: 'Bir bilgisayarın neden RAM’in yanında yardımcı depolamaya da ihtiyaç duyduğunu açıklayınız.' },
      points: [
        { point: { en: 'RAM is volatile – data is lost when power is off.', tr: 'RAM geçicidir – elektrik kesilince veri silinir.' }, keywords: [['volatile'], ['lost'], ['power']] },
        { point: { en: 'Backing storage keeps files permanently / has larger capacity.', tr: 'Yardımcı depolama dosyaları kalıcı saklar / kapasitesi daha büyüktür.' }, keywords: [['permanent'], ['capacity'], ['save'], ['keep']] },
      ],
      model: { en: 'RAM is volatile, so its contents are lost when the power is off. Backing storage keeps files permanently so they can be used again later.', tr: 'RAM geçicidir; elektrik kesilince içindekiler silinir. Yardımcı depolama dosyaları kalıcı olarak saklar, böylece daha sonra tekrar kullanılabilirler.' },
    },
  ],
  vocab: [
    { en: 'Central Processing Unit (CPU)', tr: 'Merkezi işlem birimi' },
    { en: 'Random Access Memory (RAM)', tr: 'Rastgele erişimli bellek' },
    { en: 'Read Only Memory (ROM)', tr: 'Salt okunur bellek' },
    { en: 'Volatile', tr: 'Geçici (uçucu)' },
    { en: 'Non-volatile', tr: 'Kalıcı' },
    { en: 'Backing storage', tr: 'Yardımcı depolama' },
    { en: 'Instruction', tr: 'Komut' },
    { en: 'Capacity', tr: 'Kapasite' },
  ],
}
