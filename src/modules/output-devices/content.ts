import type { ModuleContent } from '../../data/types'

export const outputDevices: ModuleContent = {
  learn: [
    {
      id: 'monitor',
      title: { en: 'Monitors and touch screens', tr: 'Monitörler ve dokunmatik ekranlar' },
      text: {
        tr: 'Monitör bilgisayarın çıktısını ekranda gösterir (LCD/LED). Dokunmatik ekran hem çıktıyı gösterir hem de giriş alır.',
        en: 'A monitor shows the computer’s output on a screen (LCD/LED). A touch screen shows output and also takes input.',
      },
      points: [{ en: '+ Output is seen immediately.  – Long use can cause eye strain.', tr: '+ Çıktı anında görülür.  – Uzun kullanım göz yorgunluğu yapabilir.' }],
    },
    {
      id: 'projector',
      title: { en: 'Multimedia projector', tr: 'Projektör' },
      text: { tr: 'Bilgisayar çıktısını büyük bir ekrana veya duvara yansıtır (sınıflar, sunumlar, sinema).', en: 'Projects computer output onto a large screen or wall (classrooms, presentations, cinemas).' },
      points: [{ en: '+ Large audience can see.  – Image is harder to see in a bright room.', tr: '+ Kalabalık izleyici görebilir.  – Aydınlık odada görüntü zor görülür.' }],
    },
    {
      id: 'laser',
      title: { en: 'Laser printer', tr: 'Lazer yazıcı' },
      text: { tr: 'Toner (toz mürekkep) ve lazer kullanır. Çok sayıda sayfayı hızlı ve yüksek kalitede basar.', en: 'Uses toner (powder) and a laser. Prints many pages quickly and in high quality.' },
      points: [{ en: '+ Fast and quiet; low cost per page.  – Expensive to buy.', tr: '+ Hızlı ve sessiz; sayfa başı maliyet düşük.  – Satın alması pahalı.' }],
    },
    {
      id: 'inkjet',
      title: { en: 'Inkjet printer', tr: 'Mürekkep püskürtmeli yazıcı' },
      text: { tr: 'Kâğıda küçük sıvı mürekkep damlacıkları püskürtür. Fotoğraf baskısı için iyidir.', en: 'Sprays tiny drops of liquid ink onto paper. Good for printing photos.' },
      points: [{ en: '+ Cheap to buy; high-quality photos.  – Ink is expensive; slow for many pages.', tr: '+ Satın alması ucuz; kaliteli fotoğraf.  – Mürekkep pahalı; çok sayfada yavaş.' }],
    },
    {
      id: 'dotmatrix',
      title: { en: 'Dot matrix printer', tr: 'Nokta vuruşlu yazıcı' },
      text: { tr: 'İğneler mürekkepli bir şeride vurarak basar (darbeli yazıcı). Çok katlı (karbonlu) formlar basabilir.', en: 'Pins hit an inked ribbon to print (impact printer). Can print multi-part (carbon copy) forms.' },
      points: [{ en: '+ Works in dirty or damp places; cheap to run.  – Noisy, slow, low quality.', tr: '+ Kirli veya nemli ortamda çalışır; işletmesi ucuz.  – Gürültülü, yavaş, kalitesi düşük.' }],
    },
    {
      id: 'plotter',
      title: { en: 'Plotter', tr: 'Çizici (plotter)' },
      text: { tr: 'Çok büyük ve hassas çizimler basar (mimari planlar, haritalar, posterler).', en: 'Prints very large, accurate drawings (building plans, maps, posters).' },
      points: [{ en: '+ Very large paper sizes; very accurate.  – Expensive and slow.', tr: '+ Çok büyük kâğıt boyutları; çok hassas.  – Pahalı ve yavaş.' }],
    },
    {
      id: '3d',
      title: { en: '3D printer', tr: '3B yazıcı' },
      text: { tr: 'Katı nesneleri katman katman oluşturur (prototipler, yedek parçalar, protezler).', en: 'Builds solid objects layer by layer (prototypes, spare parts, prosthetics).' },
      points: [{ en: '+ Custom objects made quickly.  – Slow for large objects; materials can be expensive.', tr: '+ Kişiye özel nesneler hızla yapılır.  – Büyük nesnelerde yavaş; malzeme pahalı olabilir.' }],
    },
    {
      id: 'speaker',
      title: { en: 'Speaker', tr: 'Hoparlör' },
      text: { tr: 'Ses çıkışı verir. Dijital ses analoga çevrilerek çalınır.', en: 'Outputs sound. Digital sound is converted to analogue to be played.' },
    },
    {
      id: 'actuator',
      title: { en: 'Actuator', tr: 'Eyleyici (aktüatör)' },
      text: { tr: 'Bilgisayardan gelen sinyali harekete veya eyleme çevirir: motor, pompa, valf, ısıtıcı.', en: 'Turns a signal from the computer into movement or action: motor, pump, valve, heater.' },
      example: { en: 'A greenhouse computer turns on a motor (actuator) to open a window when it is too hot.', tr: 'Sera bilgisayarı hava çok sıcak olunca pencereyi açmak için bir motoru (eyleyici) çalıştırır.' },
    },
  ],
  compare: {
    title: { en: 'Comparing printers', tr: 'Yazıcıları karşılaştırma' },
    columns: ['Laser', 'Inkjet', 'Dot matrix'],
    rows: [
      { label: { en: 'How it prints', tr: 'Nasıl basar' }, cells: [{ en: 'Toner and laser', tr: 'Toner ve lazer' }, { en: 'Drops of liquid ink', tr: 'Sıvı mürekkep damlası' }, { en: 'Pins hit a ribbon', tr: 'İğneler şeride vurur' }] },
      { label: { en: 'Speed', tr: 'Hız' }, cells: [{ en: 'Fast', tr: 'Hızlı' }, { en: 'Slower', tr: 'Daha yavaş' }, { en: 'Slow', tr: 'Yavaş' }] },
      { label: { en: 'Quality', tr: 'Kalite' }, cells: [{ en: 'High', tr: 'Yüksek' }, { en: 'High (photos)', tr: 'Yüksek (fotoğraf)' }, { en: 'Low', tr: 'Düşük' }] },
      { label: { en: 'Best for', tr: 'En uygun' }, cells: [{ en: 'Many pages', tr: 'Çok sayfa' }, { en: 'Photos, few pages', tr: 'Fotoğraf, az sayfa' }, { en: 'Multi-part forms', tr: 'Çok katlı formlar' }] },
    ],
  },
  sort: {
    title: { en: 'Which printer is best?', tr: 'Hangi yazıcı en uygun?' },
    categories: [
      { id: 'laser', label: { en: 'Laser', tr: 'Lazer' } },
      { id: 'inkjet', label: { en: 'Inkjet', tr: 'Mürekkep püskürtmeli' } },
      { id: 'dot', label: { en: 'Dot matrix', tr: 'Nokta vuruşlu' } },
    ],
    items: [
      { id: '1', text: { en: '1000 newsletters for a school', tr: 'Okul için 1000 bülten' }, cat: 'laser' },
      { id: '2', text: { en: 'A few holiday photos at home', tr: 'Evde birkaç tatil fotoğrafı' }, cat: 'inkjet' },
      { id: '3', text: { en: 'Carbon-copy invoices in a garage', tr: 'Bir tamirhanede karbonlu faturalar' }, cat: 'dot' },
      { id: '4', text: { en: 'Busy office printing all day', tr: 'Gün boyu baskı yapan yoğun ofis' }, cat: 'laser' },
      { id: '5', text: { en: 'Cheap printer for a student', tr: 'Öğrenci için ucuz yazıcı' }, cat: 'inkjet' },
      { id: '6', text: { en: 'Dusty factory floor', tr: 'Tozlu fabrika ortamı' }, cat: 'dot' },
    ],
  },
  match: [
    { id: 'projector', en: 'Multimedia projector', tr: 'Projektör', desc: { en: 'Shows output on a large screen', tr: 'Çıktıyı büyük ekranda gösterir' } },
    { id: 'laser', en: 'Laser printer', tr: 'Lazer yazıcı', desc: { en: 'Uses toner; fast for many pages', tr: 'Toner kullanır; çok sayfada hızlı' } },
    { id: 'inkjet', en: 'Inkjet printer', tr: 'Mürekkep püskürtmeli yazıcı', desc: { en: 'Sprays liquid ink', tr: 'Sıvı mürekkep püskürtür' } },
    { id: 'plotter', en: 'Plotter', tr: 'Çizici', desc: { en: 'Large, accurate drawings', tr: 'Büyük, hassas çizimler' } },
    { id: '3d', en: '3D printer', tr: '3B yazıcı', desc: { en: 'Builds objects layer by layer', tr: 'Nesneleri katman katman yapar' } },
    { id: 'actuator', en: 'Actuator', tr: 'Eyleyici', desc: { en: 'Turns a signal into movement', tr: 'Sinyali harekete çevirir' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'An architect needs to print a building plan on A0 paper.', tr: 'Bir mimar bina planını A0 kâğıda basmalı.' },
      options: [
        { id: 'plotter', label: { en: 'Plotter', tr: 'Çizici' } },
        { id: 'inkjet', label: { en: 'Inkjet', tr: 'Mürekkep püskürtmeli' } },
        { id: 'dot', label: { en: 'Dot matrix', tr: 'Nokta vuruşlu' } },
      ],
      answer: 'plotter',
      reasons: [
        { en: 'It prints very large, accurate drawings.', tr: 'Çok büyük ve hassas çizimler basar.' },
        { en: 'It prints carbon copies.', tr: 'Karbonlu kopya basar.' },
        { en: 'It is the cheapest printer.', tr: 'En ucuz yazıcıdır.' },
      ],
      correctReason: 0,
      explain: { en: 'Plotters are for large plans and maps.', tr: 'Çiziciler büyük planlar ve haritalar içindir.' },
    },
    {
      id: 's2',
      situation: { en: 'A hospital needs a custom-shaped plastic part for a patient’s hand.', tr: 'Bir hastane, hastanın eli için özel şekilli plastik bir parçaya ihtiyaç duyuyor.' },
      options: [
        { id: '3d', label: { en: '3D printer', tr: '3B yazıcı' } },
        { id: 'laser', label: { en: 'Laser printer', tr: 'Lazer yazıcı' } },
        { id: 'projector', label: { en: 'Projector', tr: 'Projektör' } },
      ],
      answer: '3d',
      reasons: [
        { en: 'It builds a solid object layer by layer to the exact shape.', tr: 'Tam istenen şekilde, katman katman katı bir nesne üretir.' },
        { en: 'It prints on paper quickly.', tr: 'Kâğıda hızlı basar.' },
        { en: 'It shows images on a wall.', tr: 'Görüntüleri duvara yansıtır.' },
      ],
      correctReason: 0,
      explain: { en: '3D printers can make prosthetics.', tr: '3B yazıcılar protez üretebilir.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which printer can print multi-part (carbon copy) forms?', tr: 'Hangi yazıcı çok katlı (karbonlu) form basabilir?' },
      options: [
        { en: 'Laser', tr: 'Lazer' },
        { en: 'Inkjet', tr: 'Mürekkep püskürtmeli' },
        { en: 'Dot matrix', tr: 'Nokta vuruşlu' },
      ],
      answer: 2,
      explain: { en: 'It is an impact printer, so the pressure copies through.', tr: 'Darbeli yazıcıdır; baskı alttaki kâğıtlara geçer.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'An actuator is an output device.', tr: 'Eyleyici bir çıkış aygıtıdır.' },
      answer: true,
      explain: { en: 'True. It carries out an action from the computer’s signal.', tr: 'Doğru. Bilgisayarın sinyaliyle bir eylem gerçekleştirir.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'A laser printer uses ___ instead of liquid ink.', tr: 'Lazer yazıcı sıvı mürekkep yerine ___ kullanır.' },
      bank: ['toner', 'ribbon', 'plastic', 'water'],
      answer: 'toner',
      explain: { en: 'Toner is a powder.', tr: 'Toner bir tozdur.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'A disadvantage of an inkjet printer is…', tr: 'Mürekkep püskürtmeli yazıcının bir dezavantajı…' },
      options: [
        { en: 'expensive ink cartridges', tr: 'pahalı mürekkep kartuşları' },
        { en: 'very noisy', tr: 'çok gürültülü' },
        { en: 'cannot print photos', tr: 'fotoğraf basamaz' },
      ],
      answer: 0,
      explain: { en: 'Ink costs a lot per page.', tr: 'Mürekkebin sayfa başı maliyeti yüksektir.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Explain',
      marks: 2,
      prompt: { en: 'Explain why a school office would use a laser printer rather than an inkjet printer.', tr: 'Bir okul ofisinin neden mürekkep püskürtmeli yerine lazer yazıcı kullanacağını açıklayınız.' },
      points: [
        { point: { en: 'It prints large numbers of pages quickly.', tr: 'Çok sayıda sayfayı hızlı basar.' }, keywords: [['fast'], ['quick'], ['many'], ['large number'], ['volume']] },
        { point: { en: 'Lower cost per page / high quality / quiet.', tr: 'Sayfa başı maliyet düşük / yüksek kalite / sessiz.' }, keywords: [['cost'], ['cheaper'], ['quality'], ['quiet']] },
      ],
      model: { en: 'The office prints many pages, and a laser printer prints large numbers quickly with a lower cost per page.', tr: 'Ofis çok sayfa basar; lazer yazıcı çok sayfayı hızlı ve sayfa başına daha düşük maliyetle basar.' },
    },
    {
      id: 'e2',
      command: 'Describe',
      marks: 2,
      prompt: { en: 'Describe what an actuator is, with an example.', tr: 'Eyleyicinin ne olduğunu bir örnekle açıklayınız.' },
      points: [
        { point: { en: 'An output device that turns a signal into movement/action.', tr: 'Sinyali harekete/eyleme çeviren bir çıkış aygıtı.' }, keywords: [['movement'], ['action'], ['signal'], ['output']] },
        { point: { en: 'Example: motor, pump, valve, heater.', tr: 'Örnek: motor, pompa, valf, ısıtıcı.' }, keywords: [['motor'], ['pump'], ['valve'], ['heater']] },
      ],
      model: { en: 'An actuator is an output device that turns a signal from the computer into an action, for example a motor that opens a window.', tr: 'Eyleyici, bilgisayardan gelen sinyali bir eyleme çeviren çıkış aygıtıdır; ör. pencereyi açan bir motor.' },
    },
  ],
  vocab: [
    { en: 'Output device', tr: 'Çıkış aygıtı' },
    { en: 'Monitor', tr: 'Monitör' },
    { en: 'Multimedia projector', tr: 'Projektör' },
    { en: 'Laser printer', tr: 'Lazer yazıcı' },
    { en: 'Inkjet printer', tr: 'Mürekkep püskürtmeli yazıcı' },
    { en: 'Dot matrix printer', tr: 'Nokta vuruşlu yazıcı' },
    { en: 'Plotter', tr: 'Çizici' },
    { en: 'Actuator', tr: 'Eyleyici' },
  ],
}
