import type { ModuleContent } from '../../data/types'

export const storage: ModuleContent = {
  learn: [
    {
      id: 'device-media',
      title: { en: 'Device and media', tr: 'Aygıt ve ortam' },
      text: {
        tr: 'Depolama aygıtı veriyi okuyan ve yazan donanımdır (ör. DVD sürücüsü). Depolama ortamı verinin saklandığı şeydir (ör. DVD diski). Üç tür vardır: manyetik, optik ve katı hâl.',
        en: 'A storage device is the hardware that reads and writes the data (e.g. a DVD drive). A storage medium is what the data is stored on (e.g. a DVD disc). There are three types: magnetic, optical and solid-state.',
      },
    },
    {
      id: 'hdd',
      title: { en: 'Magnetic hard disk', tr: 'Manyetik sabit disk' },
      text: {
        tr: 'Veri, dönen disklerin (plakaların) üzerinde manyetik olarak saklanır. Sabit (bilgisayarın içinde) veya taşınabilir olabilir.',
        en: 'Data is stored magnetically on spinning disks (platters). It can be fixed (inside the computer) or portable.',
      },
      points: [
        { en: 'Uses: desktop computers, servers, backups (portable).', tr: 'Kullanım: masaüstü bilgisayarlar, sunucular, yedekleme (taşınabilir).' },
        { en: '+ Large capacity; low cost per GB.  – Moving parts can be damaged if dropped; slower than SSD.', tr: '+ Büyük kapasite; GB başı düşük maliyet.  – Hareketli parçalar düşerse zarar görebilir; SSD’den yavaş.' },
      ],
    },
    {
      id: 'tape',
      title: { en: 'Magnetic tape', tr: 'Manyetik bant' },
      text: {
        tr: 'Veri bir bant üzerinde sırayla saklanır; bir veriyi bulmak için baştan okumak gerekir (seri erişim).',
        en: 'Data is stored in order along a tape; to find data the tape must be read from the start (serial access).',
      },
      points: [
        { en: 'Uses: backups and archives in large organisations.', tr: 'Kullanım: büyük kurumlarda yedekleme ve arşiv.' },
        { en: '+ Very large capacity; very cheap.  – Very slow to find a single item.', tr: '+ Çok büyük kapasite; çok ucuz.  – Tek bir veriyi bulmak çok yavaş.' },
      ],
    },
    {
      id: 'optical',
      title: { en: 'Optical: CD, DVD, Blu-ray', tr: 'Optik: CD, DVD, Blu-ray' },
      text: {
        tr: 'Veri, diskin yüzeyinde lazerle okunan çok küçük çukurlarla saklanır. Kapasite sırası: CD < DVD < Blu-ray.',
        en: 'Data is stored as tiny pits on the disc surface, read by a laser. Capacity: CD < DVD < Blu-ray.',
      },
      points: [
        { en: 'Uses: music (CD), films (DVD, Blu-ray for HD), software distribution.', tr: 'Kullanım: müzik (CD), film (DVD, HD için Blu-ray), yazılım dağıtımı.' },
        { en: '+ Cheap and portable.  – Easily scratched; small capacity compared with other storage.', tr: '+ Ucuz ve taşınabilir.  – Kolay çizilir; diğer depolamalara göre kapasitesi küçük.' },
      ],
    },
    {
      id: 'ssd',
      title: { en: 'Solid-state: SSD, pen drive, memory cards', tr: 'Katı hâl: SSD, USB bellek, hafıza kartları' },
      text: {
        tr: 'Veri, hareketli parçası olmayan flaş bellek yongalarında saklanır. SSD, USB bellek (pen/flash drive) ve hafıza kartları (SD, xD, CFast) bu türdendir.',
        en: 'Data is stored on flash memory chips with no moving parts. SSDs, pen drives (flash drives) and memory cards (SD, xD, CFast) are this type.',
      },
      points: [
        { en: 'Uses: laptops and tablets (SSD), moving files (pen drive), cameras (memory cards).', tr: 'Kullanım: dizüstü ve tablet (SSD), dosya taşıma (USB bellek), fotoğraf makinesi (hafıza kartı).' },
        { en: '+ Very fast; robust; silent; uses little power.  – Higher cost per GB; small items easy to lose.', tr: '+ Çok hızlı; dayanıklı; sessiz; az enerji harcar.  – GB başı maliyet yüksek; küçük olduğu için kolay kaybolur.' },
      ],
    },
  ],
  compare: {
    title: { en: 'Magnetic, optical and solid-state', tr: 'Manyetik, optik ve katı hâl' },
    columns: ['Magnetic', 'Optical', 'Solid-state'],
    rows: [
      { label: { en: 'How data is stored', tr: 'Veri nasıl saklanır' }, cells: [{ en: 'Magnetised areas', tr: 'Mıknatıslanmış alanlar' }, { en: 'Pits read by laser', tr: 'Lazerle okunan çukurlar' }, { en: 'Flash memory chips', tr: 'Flaş bellek yongaları' }] },
      { label: { en: 'Moving parts', tr: 'Hareketli parça' }, cells: [{ en: 'Yes', tr: 'Var' }, { en: 'Yes (drive)', tr: 'Var (sürücü)' }, { en: 'No', tr: 'Yok' }] },
      { label: { en: 'Speed', tr: 'Hız' }, cells: [{ en: 'Medium', tr: 'Orta' }, { en: 'Slow', tr: 'Yavaş' }, { en: 'Fast', tr: 'Hızlı' }] },
      { label: { en: 'Examples', tr: 'Örnekler' }, cells: [{ en: 'Hard disk, tape', tr: 'Sabit disk, bant' }, { en: 'CD, DVD, Blu-ray', tr: 'CD, DVD, Blu-ray' }, { en: 'SSD, pen drive, SD card', tr: 'SSD, USB bellek, SD kart' }] },
    ],
  },
  sort: {
    title: { en: 'Magnetic, optical or solid-state?', tr: 'Manyetik mi, optik mi, katı hâl mi?' },
    categories: [
      { id: 'mag', label: { en: 'Magnetic', tr: 'Manyetik' } },
      { id: 'opt', label: { en: 'Optical', tr: 'Optik' } },
      { id: 'ss', label: { en: 'Solid-state', tr: 'Katı hâl' } },
    ],
    items: [
      { id: '1', text: { en: 'Hard disk drive', tr: 'Sabit disk' }, cat: 'mag' },
      { id: '2', text: { en: 'Blu-ray', tr: 'Blu-ray' }, cat: 'opt' },
      { id: '3', text: { en: 'Pen drive', tr: 'USB bellek' }, cat: 'ss' },
      { id: '4', text: { en: 'Magnetic tape', tr: 'Manyetik bant' }, cat: 'mag' },
      { id: '5', text: { en: 'DVD', tr: 'DVD' }, cat: 'opt' },
      { id: '6', text: { en: 'SD card', tr: 'SD kart' }, cat: 'ss' },
      { id: '7', text: { en: 'SSD', tr: 'SSD' }, cat: 'ss' },
    ],
  },
  match: [
    { id: 'hdd', en: 'Hard disk', tr: 'Sabit disk', desc: { en: 'Magnetic, spinning platters', tr: 'Manyetik, dönen plakalar' } },
    { id: 'tape', en: 'Magnetic tape', tr: 'Manyetik bant', desc: { en: 'Serial access; used for backups', tr: 'Seri erişim; yedeklemede kullanılır' } },
    { id: 'bluray', en: 'Blu-ray', tr: 'Blu-ray', desc: { en: 'Optical disc for HD films', tr: 'HD filmler için optik disk' } },
    { id: 'ssd', en: 'SSD', tr: 'Katı hâl sürücü', desc: { en: 'No moving parts, very fast', tr: 'Hareketli parça yok, çok hızlı' } },
    { id: 'card', en: 'Memory card', tr: 'Hafıza kartı', desc: { en: 'Small solid-state media for cameras', tr: 'Fotoğraf makineleri için küçük katı hâl ortamı' } },
    { id: 'serial', en: 'Serial access', tr: 'Seri erişim', desc: { en: 'Data read in order from the start', tr: 'Veri baştan sırayla okunur' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A bank must back up a huge amount of data every night and keep it for years.', tr: 'Bir banka her gece çok büyük miktarda veriyi yedeklemeli ve yıllarca saklamalı.' },
      options: [
        { id: 'tape', label: { en: 'Magnetic tape', tr: 'Manyetik bant' } },
        { id: 'dvd', label: { en: 'DVD', tr: 'DVD' } },
        { id: 'pen', label: { en: 'Pen drive', tr: 'USB bellek' } },
      ],
      answer: 'tape',
      reasons: [
        { en: 'Very large capacity at low cost; fast access is not needed for backups.', tr: 'Düşük maliyetle çok büyük kapasite; yedekte hızlı erişim gerekmez.' },
        { en: 'It is the fastest way to find one file.', tr: 'Tek bir dosyayı bulmanın en hızlı yoludur.' },
        { en: 'It is the smallest storage.', tr: 'En küçük depolamadır.' },
      ],
      correctReason: 0,
      explain: { en: 'Magnetic tape is used for large backups and archives.', tr: 'Manyetik bant büyük yedekler ve arşivler için kullanılır.' },
    },
    {
      id: 's2',
      situation: { en: 'A thin laptop must start quickly and survive being carried around.', tr: 'İnce bir dizüstü hızlı açılmalı ve taşınırken dayanıklı olmalı.' },
      options: [
        { id: 'ssd', label: { en: 'SSD', tr: 'SSD' } },
        { id: 'hdd', label: { en: 'Hard disk', tr: 'Sabit disk' } },
        { id: 'tape', label: { en: 'Magnetic tape', tr: 'Manyetik bant' } },
      ],
      answer: 'ssd',
      reasons: [
        { en: 'No moving parts, so it is fast, robust and light.', tr: 'Hareketli parçası yoktur; hızlı, dayanıklı ve hafiftir.' },
        { en: 'It has the lowest cost per GB.', tr: 'GB başına en düşük maliyete sahiptir.' },
        { en: 'It uses serial access.', tr: 'Seri erişim kullanır.' },
      ],
      correctReason: 0,
      explain: { en: 'SSDs suit portable devices.', tr: 'SSD taşınabilir aygıtlar için uygundur.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which has the largest capacity?', tr: 'Hangisinin kapasitesi en büyüktür?' },
      options: [
        { en: 'CD', tr: 'CD' },
        { en: 'DVD', tr: 'DVD' },
        { en: 'Blu-ray', tr: 'Blu-ray' },
      ],
      answer: 2,
      explain: { en: 'CD < DVD < Blu-ray.', tr: 'CD < DVD < Blu-ray.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'An SSD has moving parts.', tr: 'SSD’nin hareketli parçaları vardır.' },
      answer: false,
      explain: { en: 'False. Solid-state storage has no moving parts.', tr: 'Yanlış. Katı hâl depolamanın hareketli parçası yoktur.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'Optical discs are read using a ___.', tr: 'Optik diskler bir ___ ile okunur.' },
      bank: ['laser', 'magnet', 'chip', 'pin'],
      answer: 'laser',
      explain: { en: 'A laser reads the pits on the disc.', tr: 'Lazer diskteki çukurları okur.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'Which storage media is used in digital cameras?', tr: 'Dijital fotoğraf makinelerinde hangi depolama ortamı kullanılır?' },
      options: [
        { en: 'Memory card (e.g. SD)', tr: 'Hafıza kartı (ör. SD)' },
        { en: 'Magnetic tape', tr: 'Manyetik bant' },
        { en: 'Blu-ray', tr: 'Blu-ray' },
      ],
      answer: 0,
      explain: { en: 'Memory cards are small and robust.', tr: 'Hafıza kartları küçük ve dayanıklıdır.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Explain',
      marks: 3,
      prompt: { en: 'Explain why laptops often use an SSD instead of a magnetic hard disk.', tr: 'Dizüstü bilgisayarların neden çoğunlukla manyetik sabit disk yerine SSD kullandığını açıklayınız.' },
      points: [
        { point: { en: 'No moving parts, so more robust if dropped/moved.', tr: 'Hareketli parça yok; düşerse/taşınırsa daha dayanıklı.' }, keywords: [['moving parts'], ['robust'], ['dropped'], ['damage'], ['durable']] },
        { point: { en: 'Faster access / faster start-up.', tr: 'Daha hızlı erişim / daha hızlı açılış.' }, keywords: [['fast'], ['quick'], ['speed']] },
        { point: { en: 'Uses less power / longer battery life / lighter / silent.', tr: 'Daha az enerji / uzun pil ömrü / daha hafif / sessiz.' }, keywords: [['power'], ['battery'], ['light'], ['silent'], ['quiet']] },
      ],
      model: { en: 'An SSD has no moving parts, so it is less likely to be damaged when the laptop is carried. It is faster, and it uses less power, so the battery lasts longer.', tr: 'SSD’nin hareketli parçası yoktur; dizüstü taşınırken zarar görme olasılığı daha düşüktür. Daha hızlıdır ve daha az enerji harcar, bu yüzden pil daha uzun dayanır.' },
    },
    {
      id: 'e2',
      command: 'Describe',
      marks: 2,
      prompt: { en: 'Describe why magnetic tape is used for backups.', tr: 'Yedeklemede neden manyetik bant kullanıldığını açıklayınız.' },
      points: [
        { point: { en: 'Very large capacity / cheap per GB.', tr: 'Çok büyük kapasite / GB başı ucuz.' }, keywords: [['capacity'], ['cheap'], ['cost'], ['large']] },
        { point: { en: 'Serial access is fine because all data is written/read in order.', tr: 'Tüm veri sırayla yazılıp okunduğu için seri erişim yeterlidir.' }, keywords: [['serial'], ['order'], ['sequen']] },
      ],
      model: { en: 'Magnetic tape has a very large capacity at low cost. Serial access is not a problem because a backup is written and read in order.', tr: 'Manyetik bant düşük maliyetle çok büyük kapasite sunar. Yedek sırayla yazılıp okunduğu için seri erişim sorun olmaz.' },
    },
  ],
  vocab: [
    { en: 'Storage device', tr: 'Depolama aygıtı' },
    { en: 'Storage media', tr: 'Depolama ortamı' },
    { en: 'Magnetic', tr: 'Manyetik' },
    { en: 'Optical', tr: 'Optik' },
    { en: 'Solid-state', tr: 'Katı hâl' },
    { en: 'Hard disk', tr: 'Sabit disk' },
    { en: 'Memory card', tr: 'Hafıza kartı' },
    { en: 'Serial access', tr: 'Seri erişim' },
    { en: 'Backup', tr: 'Yedek' },
  ],
}
