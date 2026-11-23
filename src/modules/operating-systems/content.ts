import type { ModuleContent } from '../../data/types'

export const operatingSystems: ModuleContent = {
  learn: [
    {
      id: 'os',
      title: { en: 'What is an operating system?', tr: 'İşletim sistemi nedir?' },
      text: {
        tr: 'İşletim sistemi donanımı yönetir, programları çalıştırır ve kullanıcının bilgisayarla iletişim kurmasını sağlayan bir arayüz sunar. Dört arayüz türü vardır.',
        en: 'An operating system manages the hardware, runs programs and gives the user an interface to communicate with the computer. There are four types of interface.',
      },
    },
    {
      id: 'cli',
      title: { en: 'Command Line Interface (CLI)', tr: 'Komut Satırı Arayüzü (CLI)' },
      text: { tr: 'Kullanıcı komutları klavyeyle yazar.', en: 'The user types commands with the keyboard.' },
      points: [
        { en: '+ Uses less memory and processing power; gives more control.', tr: '+ Daha az bellek ve işlem gücü kullanır; daha fazla kontrol sağlar.' },
        { en: '– Commands must be learned; typing errors are easy to make.', tr: '– Komutlar öğrenilmelidir; yazım hatası yapmak kolaydır.' },
      ],
    },
    {
      id: 'gui',
      title: { en: 'Graphical User Interface (GUI)', tr: 'Grafik Kullanıcı Arayüzü (GUI)' },
      text: { tr: 'Kullanıcı pencere, simge ve menüleri işaretçi veya dokunarak kullanır.', en: 'The user works with windows, icons and menus using a pointer or touch.' },
      points: [
        { en: '+ Easy to use; no commands to learn.', tr: '+ Kullanımı kolay; komut öğrenmek gerekmez.' },
        { en: '– Uses more memory and processing power.', tr: '– Daha fazla bellek ve işlem gücü kullanır.' },
      ],
    },
    {
      id: 'dialogue',
      title: { en: 'Dialogue-based interface', tr: 'Diyalog tabanlı arayüz' },
      text: { tr: 'Kullanıcı bilgisayarla konuşur; bilgisayar sesli komutları tanır ve cevap verir.', en: 'The user speaks to the computer; it recognises spoken commands and replies.' },
      points: [
        { en: '+ Hands-free, e.g. while driving.', tr: '+ Eller serbest, ör. araç kullanırken.' },
        { en: '– Background noise and accents can cause mistakes.', tr: '– Arka plan gürültüsü ve aksanlar hataya yol açabilir.' },
      ],
    },
    {
      id: 'gesture',
      title: { en: 'Gesture-based interface', tr: 'Hareket tabanlı arayüz' },
      text: { tr: 'Kullanıcı el veya vücut hareketleriyle kontrol eder (ör. kaydırma, el sallama).', en: 'The user controls it with hand or body movements (e.g. swiping, waving).' },
      points: [
        { en: '+ Natural and easy; can work without touching anything.', tr: '+ Doğal ve kolay; hiçbir şeye dokunmadan çalışabilir.' },
        { en: '– Accidental movements can be read as commands.', tr: '– Yanlışlıkla yapılan hareketler komut olarak algılanabilir.' },
      ],
    },
  ],
  compare: {
    title: { en: 'Comparing interfaces', tr: 'Arayüzleri karşılaştırma' },
    columns: ['CLI', 'GUI', 'Dialogue', 'Gesture'],
    rows: [
      { label: { en: 'How used', tr: 'Nasıl kullanılır' }, cells: [{ en: 'Typing commands', tr: 'Komut yazarak' }, { en: 'Icons and menus', tr: 'Simge ve menüler' }, { en: 'Speaking', tr: 'Konuşarak' }, { en: 'Movements', tr: 'Hareketlerle' }] },
      { label: { en: 'Ease of use', tr: 'Kullanım kolaylığı' }, cells: [{ en: 'Hard to learn', tr: 'Öğrenmesi zor' }, { en: 'Easy', tr: 'Kolay' }, { en: 'Easy', tr: 'Kolay' }, { en: 'Easy', tr: 'Kolay' }] },
      { label: { en: 'Memory used', tr: 'Bellek kullanımı' }, cells: [{ en: 'Low', tr: 'Az' }, { en: 'High', tr: 'Fazla' }, { en: 'High', tr: 'Fazla' }, { en: 'High', tr: 'Fazla' }] },
    ],
  },
  sort: {
    title: { en: 'Which interface?', tr: 'Hangi arayüz?' },
    categories: [
      { id: 'cli', label: { en: 'CLI', tr: 'CLI' } },
      { id: 'gui', label: { en: 'GUI', tr: 'GUI' } },
      { id: 'other', label: { en: 'Dialogue / gesture', tr: 'Diyalog / hareket' } },
    ],
    items: [
      { id: '1', text: { en: 'Typing “copy file.txt”', tr: '“copy file.txt” yazmak' }, cat: 'cli' },
      { id: '2', text: { en: 'Double-clicking an icon', tr: 'Bir simgeye çift tıklamak' }, cat: 'gui' },
      { id: '3', text: { en: '“Call Mum” to a car system', tr: 'Araç sistemine “Annemi ara” demek' }, cat: 'other' },
      { id: '4', text: { en: 'Swiping to the next photo', tr: 'Sonraki fotoğrafa kaydırmak' }, cat: 'other' },
      { id: '5', text: { en: 'Choosing from a drop-down menu', tr: 'Açılır menüden seçmek' }, cat: 'gui' },
      { id: '6', text: { en: 'Technician typing network commands', tr: 'Teknisyenin ağ komutları yazması' }, cat: 'cli' },
    ],
  },
  match: [
    { id: 'os', en: 'Operating system', tr: 'İşletim sistemi', desc: { en: 'Manages hardware and runs programs', tr: 'Donanımı yönetir, programları çalıştırır' } },
    { id: 'cli', en: 'CLI', tr: 'Komut satırı arayüzü', desc: { en: 'Type commands', tr: 'Komut yazılır' } },
    { id: 'gui', en: 'GUI', tr: 'Grafik kullanıcı arayüzü', desc: { en: 'Windows, icons, menus', tr: 'Pencere, simge, menü' } },
    { id: 'dialogue', en: 'Dialogue-based', tr: 'Diyalog tabanlı', desc: { en: 'Speak to the computer', tr: 'Bilgisayarla konuşulur' } },
    { id: 'gesture', en: 'Gesture-based', tr: 'Hareket tabanlı', desc: { en: 'Control with movements', tr: 'Hareketlerle kontrol' } },
    { id: 'icon', en: 'Icon', tr: 'Simge', desc: { en: 'Small picture that represents something', tr: 'Bir şeyi temsil eden küçük resim' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A young child is using a computer for the first time.', tr: 'Küçük bir çocuk bilgisayarı ilk kez kullanıyor.' },
      options: [
        { id: 'cli', label: { en: 'CLI', tr: 'CLI' } },
        { id: 'gui', label: { en: 'GUI', tr: 'GUI' } },
      ],
      answer: 'gui',
      reasons: [
        { en: 'It is easy to use with icons – no commands to learn.', tr: 'Simgelerle kullanımı kolaydır – komut öğrenmek gerekmez.' },
        { en: 'It uses less memory.', tr: 'Daha az bellek kullanır.' },
        { en: 'It needs typed commands.', tr: 'Yazılı komut gerektirir.' },
      ],
      correctReason: 0,
      explain: { en: 'A GUI is best for beginners.', tr: 'Yeni başlayanlar için en uygunu GUI’dir.' },
    },
    {
      id: 's2',
      situation: { en: 'A driver wants to change the music without taking their hands off the wheel.', tr: 'Bir sürücü ellerini direksiyondan çekmeden müziği değiştirmek istiyor.' },
      options: [
        { id: 'dialogue', label: { en: 'Dialogue-based', tr: 'Diyalog tabanlı' } },
        { id: 'cli', label: { en: 'CLI', tr: 'CLI' } },
        { id: 'gui', label: { en: 'GUI', tr: 'GUI' } },
      ],
      answer: 'dialogue',
      reasons: [
        { en: 'Spoken commands keep the hands free.', tr: 'Sesli komutlar elleri serbest bırakır.' },
        { en: 'It uses the least memory.', tr: 'En az belleği kullanır.' },
        { en: 'It needs a mouse.', tr: 'Fare gerektirir.' },
      ],
      correctReason: 0,
      explain: { en: 'Voice control is safest while driving.', tr: 'Araç kullanırken en güvenlisi sesli kontroldür.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which interface needs commands to be typed?', tr: 'Hangi arayüzde komutlar yazılır?' },
      options: [
        { en: 'GUI', tr: 'GUI' },
        { en: 'CLI', tr: 'CLI' },
        { en: 'Gesture-based', tr: 'Hareket tabanlı' },
      ],
      answer: 1,
      explain: { en: 'In a CLI the user types commands.', tr: 'CLI’de kullanıcı komut yazar.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'A GUI uses less memory than a CLI.', tr: 'GUI, CLI’den daha az bellek kullanır.' },
      answer: false,
      explain: { en: 'False. A GUI uses more memory and processing power.', tr: 'Yanlış. GUI daha fazla bellek ve işlem gücü kullanır.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'A smart speaker uses a ___-based interface.', tr: 'Akıllı hoparlör ___ tabanlı bir arayüz kullanır.' },
      bank: ['dialogue', 'gesture', 'command', 'menu'],
      answer: 'dialogue',
      explain: { en: 'You speak to it.', tr: 'Onunla konuşursun.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'A disadvantage of a gesture-based interface is…', tr: 'Hareket tabanlı arayüzün bir dezavantajı…' },
      options: [
        { en: 'commands must be learned', tr: 'komutlar öğrenilmelidir' },
        { en: 'accidental movements may be read as commands', tr: 'yanlışlıkla yapılan hareketler komut sanılabilir' },
        { en: 'it needs a keyboard', tr: 'klavye gerektirir' },
      ],
      answer: 1,
      explain: { en: 'Unintended gestures can trigger actions.', tr: 'İstenmeyen hareketler işlem başlatabilir.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Explain',
      marks: 2,
      prompt: { en: 'Explain one advantage and one disadvantage of a GUI compared with a CLI.', tr: 'GUI’nin CLI’ye göre bir avantajını ve bir dezavantajını açıklayınız.' },
      points: [
        { point: { en: 'Advantage: easier to use / no need to learn commands.', tr: 'Avantaj: kullanımı kolay / komut öğrenmek gerekmez.' }, keywords: [['easier'], ['easy'], ['learn'], ['icon']] },
        { point: { en: 'Disadvantage: uses more memory / processing power.', tr: 'Dezavantaj: daha fazla bellek / işlem gücü kullanır.' }, keywords: [['memory'], ['processing'], ['power'], ['resources']] },
      ],
      model: { en: 'A GUI is easier to use because the user clicks icons instead of learning commands. However, it uses more memory and processing power than a CLI.', tr: 'GUI daha kolaydır, çünkü kullanıcı komut öğrenmek yerine simgelere tıklar. Ancak CLI’den daha fazla bellek ve işlem gücü kullanır.' },
    },
    {
      id: 'e2',
      command: 'Describe',
      marks: 2,
      prompt: { en: 'Describe a dialogue-based interface.', tr: 'Diyalog tabanlı arayüzü açıklayınız.' },
      points: [
        { point: { en: 'The user speaks commands / uses voice.', tr: 'Kullanıcı komutları sesle verir.' }, keywords: [['speak'], ['voice'], ['spoken'], ['talk']] },
        { point: { en: 'The computer recognises them and responds / e.g. car or smart speaker.', tr: 'Bilgisayar tanır ve cevap verir / ör. araç veya akıllı hoparlör.' }, keywords: [['recogni'], ['respond'], ['reply'], ['car'], ['speaker']] },
      ],
      model: { en: 'The user speaks commands to the computer, which recognises the words and responds, for example a voice system in a car.', tr: 'Kullanıcı bilgisayara sesli komut verir; bilgisayar kelimeleri tanır ve cevap verir, ör. araçtaki sesli sistem.' },
    },
  ],
  vocab: [
    { en: 'Operating system', tr: 'İşletim sistemi' },
    { en: 'Interface', tr: 'Arayüz' },
    { en: 'Command', tr: 'Komut' },
    { en: 'Icon', tr: 'Simge' },
    { en: 'Menu', tr: 'Menü' },
    { en: 'Gesture', tr: 'Hareket / jest' },
    { en: 'Voice recognition', tr: 'Ses tanıma' },
    { en: 'Processing power', tr: 'İşlem gücü' },
  ],
}
