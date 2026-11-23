import type { ModuleContent } from '../../data/types'

export const wireless: ModuleContent = {
  learn: [
    {
      id: 'wifi',
      title: { en: 'Wi-Fi', tr: 'Wi-Fi' },
      text: {
        tr: 'Cihazları radyo dalgalarıyla kablosuz bir ağa ve internete bağlar. Bağlantı bir kablosuz erişim noktası veya router üzerinden yapılır.',
        en: 'Connects devices to a wireless network and the internet using radio waves. It connects through a wireless access point or router.',
      },
      points: [
        { en: 'Uses: internet at home, school and cafés; streaming; wireless printers.', tr: 'Kullanım: evde, okulda, kafede internet; video izleme; kablosuz yazıcılar.' },
      ],
    },
    {
      id: 'bluetooth',
      title: { en: 'Bluetooth', tr: 'Bluetooth' },
      text: {
        tr: 'Yakındaki iki cihazı radyo dalgalarıyla doğrudan bağlar. Kısa mesafede, az miktarda veri göndermek için kullanılır.',
        en: 'Connects two nearby devices directly using radio waves. It is used to send small amounts of data over a short distance.',
      },
      points: [
        { en: 'Uses: wireless headphones, keyboard and mouse, smartwatch, sending a file to a nearby phone.', tr: 'Kullanım: kablosuz kulaklık, klavye ve fare, akıllı saat, yakındaki telefona dosya gönderme.' },
      ],
    },
    {
      id: 'compare',
      title: { en: 'Similar and different', tr: 'Benzer ve farklı' },
      text: {
        tr: 'İkisi de kablosuzdur ve radyo dalgaları kullanır. Wi-Fi daha uzak mesafede, daha hızlı çalışır ve daha çok cihaz bağlar. Bluetooth kısa mesafelidir ve az cihaz bağlar.',
        en: 'Both are wireless and use radio waves. Wi-Fi works over a longer range, is faster and connects more devices. Bluetooth has a short range and connects fewer devices.',
      },
    },
  ],
  compare: {
    title: { en: 'Wi-Fi vs Bluetooth', tr: 'Wi-Fi ve Bluetooth' },
    columns: ['Wi-Fi', 'Bluetooth'],
    rows: [
      { label: { en: 'Signal', tr: 'Sinyal' }, cells: [{ en: 'Radio waves', tr: 'Radyo dalgaları' }, { en: 'Radio waves', tr: 'Radyo dalgaları' }] },
      { label: { en: 'Range', tr: 'Mesafe' }, cells: [{ en: 'Longer', tr: 'Daha uzun' }, { en: 'Short', tr: 'Kısa' }] },
      { label: { en: 'Speed', tr: 'Hız' }, cells: [{ en: 'Faster', tr: 'Daha hızlı' }, { en: 'Slower', tr: 'Daha yavaş' }] },
      { label: { en: 'Devices', tr: 'Cihaz sayısı' }, cells: [{ en: 'Many', tr: 'Çok' }, { en: 'Few', tr: 'Az' }] },
      { label: { en: 'Main use', tr: 'Ana kullanım' }, cells: [{ en: 'Network / internet access', tr: 'Ağ / internet erişimi' }, { en: 'Linking two nearby devices', tr: 'Yakındaki iki cihazı bağlama' }] },
    ],
  },
  steps: [
    {
      title: { en: 'Connect a tablet to Wi-Fi', tr: 'Tableti Wi-Fi’a bağla' },
      steps: [
        { en: 'Turn on Wi-Fi in settings', tr: 'Ayarlardan Wi-Fi’ı aç' },
        { en: 'Choose the network name', tr: 'Ağ adını seç' },
        { en: 'Enter the password', tr: 'Parolayı gir' },
        { en: 'The device is connected', tr: 'Cihaz bağlandı' },
      ],
    },
    {
      title: { en: 'Pair headphones with Bluetooth', tr: 'Kulaklığı Bluetooth ile eşleştir' },
      steps: [
        { en: 'Turn on Bluetooth on both devices', tr: 'İki cihazda da Bluetooth’u aç' },
        { en: 'Make the headphones discoverable', tr: 'Kulaklığı bulunabilir yap' },
        { en: 'Select the headphones from the list', tr: 'Listeden kulaklığı seç' },
        { en: 'Confirm pairing (code if asked)', tr: 'Eşleştirmeyi onayla (istenirse kod)' },
      ],
    },
  ],
  sort: {
    title: { en: 'Wi-Fi or Bluetooth?', tr: 'Wi-Fi mi, Bluetooth mu?' },
    categories: [
      { id: 'wifi', label: { en: 'Wi-Fi', tr: 'Wi-Fi' } },
      { id: 'bt', label: { en: 'Bluetooth', tr: 'Bluetooth' } },
    ],
    items: [
      { id: '1', text: { en: 'Streaming a film at home', tr: 'Evde film izlemek' }, cat: 'wifi' },
      { id: '2', text: { en: 'Wireless headphones', tr: 'Kablosuz kulaklık' }, cat: 'bt' },
      { id: '3', text: { en: '30 tablets in a classroom online', tr: 'Sınıfta 30 tablet internette' }, cat: 'wifi' },
      { id: '4', text: { en: 'Smartwatch to phone', tr: 'Akıllı saatten telefona' }, cat: 'bt' },
      { id: '5', text: { en: 'Video call from a café', tr: 'Kafeden görüntülü arama' }, cat: 'wifi' },
      { id: '6', text: { en: 'Wireless mouse', tr: 'Kablosuz fare' }, cat: 'bt' },
    ],
  },
  match: [
    { id: 'wifi', en: 'Wi-Fi', tr: 'Wi-Fi', desc: { en: 'Wireless network and internet access', tr: 'Kablosuz ağ ve internet erişimi' } },
    { id: 'bt', en: 'Bluetooth', tr: 'Bluetooth', desc: { en: 'Short-range link between two devices', tr: 'İki cihaz arası kısa mesafe bağlantı' } },
    { id: 'radio', en: 'Radio waves', tr: 'Radyo dalgaları', desc: { en: 'Used by both to send data', tr: 'İkisinin de veri göndermek için kullandığı' } },
    { id: 'pair', en: 'Pairing', tr: 'Eşleştirme', desc: { en: 'Linking two Bluetooth devices', tr: 'İki Bluetooth cihazını bağlama' } },
    { id: 'range', en: 'Range', tr: 'Menzil / mesafe', desc: { en: 'How far a signal reaches', tr: 'Sinyalin ne kadar uzağa ulaştığı' } },
    { id: 'wap', en: 'Access point', tr: 'Erişim noktası', desc: { en: 'Device that provides Wi-Fi', tr: 'Wi-Fi sağlayan cihaz' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A student wants to listen to music on wireless headphones.', tr: 'Bir öğrenci kablosuz kulaklıkla müzik dinlemek istiyor.' },
      options: [
        { id: 'wifi', label: { en: 'Wi-Fi', tr: 'Wi-Fi' } },
        { id: 'bt', label: { en: 'Bluetooth', tr: 'Bluetooth' } },
      ],
      answer: 'bt',
      reasons: [
        { en: 'It links two devices that are close together.', tr: 'Birbirine yakın iki cihazı bağlar.' },
        { en: 'It connects many devices to the internet.', tr: 'Çok sayıda cihazı internete bağlar.' },
        { en: 'It needs a router.', tr: 'Router gerektirir.' },
      ],
      correctReason: 0,
      explain: { en: 'Headphones are near the phone, so short-range Bluetooth is best.', tr: 'Kulaklık telefona yakındır; kısa mesafeli Bluetooth en uygunudur.' },
    },
    {
      id: 's2',
      situation: { en: 'A school wants all tablets in the building to use the internet.', tr: 'Bir okul binadaki tüm tabletlerin internete bağlanmasını istiyor.' },
      options: [
        { id: 'wifi', label: { en: 'Wi-Fi', tr: 'Wi-Fi' } },
        { id: 'bt', label: { en: 'Bluetooth', tr: 'Bluetooth' } },
      ],
      answer: 'wifi',
      reasons: [
        { en: 'It only works between two devices.', tr: 'Yalnızca iki cihaz arasında çalışır.' },
        { en: 'It has a longer range, is faster and connects many devices.', tr: 'Menzili daha uzundur, daha hızlıdır ve çok cihaz bağlar.' },
        { en: 'It does not use radio waves.', tr: 'Radyo dalgası kullanmaz.' },
      ],
      correctReason: 1,
      explain: { en: 'Many devices over a large area need Wi-Fi.', tr: 'Geniş alanda çok sayıda cihaz için Wi-Fi gerekir.' },
    },
    {
      id: 's3',
      situation: { en: 'You want to send one photo to a friend’s phone next to you, with no internet.', tr: 'İnternet yokken yanındaki arkadaşının telefonuna bir fotoğraf göndermek istiyorsun.' },
      options: [
        { id: 'wifi', label: { en: 'Wi-Fi network', tr: 'Wi-Fi ağı' } },
        { id: 'bt', label: { en: 'Bluetooth', tr: 'Bluetooth' } },
      ],
      answer: 'bt',
      reasons: [
        { en: 'It sends small files directly between nearby devices.', tr: 'Küçük dosyaları yakın cihazlar arasında doğrudan gönderir.' },
        { en: 'It needs an internet connection.', tr: 'İnternet bağlantısı gerektirir.' },
        { en: 'It works over very long distances.', tr: 'Çok uzun mesafede çalışır.' },
      ],
      correctReason: 0,
      explain: { en: 'Bluetooth links the two phones directly.', tr: 'Bluetooth iki telefonu doğrudan bağlar.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'What do Wi-Fi and Bluetooth both use?', tr: 'Wi-Fi ve Bluetooth’un ikisi de ne kullanır?' },
      options: [
        { en: 'Cables', tr: 'Kablolar' },
        { en: 'Radio waves', tr: 'Radyo dalgaları' },
        { en: 'Light', tr: 'Işık' },
        { en: 'Sound', tr: 'Ses' },
      ],
      answer: 1,
      explain: { en: 'Both send data using radio waves.', tr: 'İkisi de veriyi radyo dalgalarıyla gönderir.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'Bluetooth has a longer range than Wi-Fi.', tr: 'Bluetooth’un menzili Wi-Fi’dan daha uzundur.' },
      answer: false,
      explain: { en: 'False. Wi-Fi has the longer range.', tr: 'Yanlış. Daha uzun menzil Wi-Fi’dadır.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'Connecting two Bluetooth devices is called ___.', tr: 'İki Bluetooth cihazını bağlamaya ___ denir.' },
      bank: ['pairing', 'routing', 'hacking', 'printing'],
      answer: 'pairing',
      explain: { en: 'Bluetooth devices are paired.', tr: 'Bluetooth cihazları eşleştirilir.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'Which is faster and connects more devices?', tr: 'Hangisi daha hızlıdır ve daha çok cihaz bağlar?' },
      options: [
        { en: 'Wi-Fi', tr: 'Wi-Fi' },
        { en: 'Bluetooth', tr: 'Bluetooth' },
      ],
      answer: 0,
      explain: { en: 'Wi-Fi is faster and can connect many devices.', tr: 'Wi-Fi daha hızlıdır ve çok cihaz bağlayabilir.' },
    },
    {
      kind: 'tf',
      id: 'c5',
      prompt: { en: 'To join a Wi-Fi network you usually choose the network name and enter a password.', tr: 'Wi-Fi ağına bağlanmak için genellikle ağ adını seçip parola girersin.' },
      answer: true,
      explain: { en: 'True.', tr: 'Doğru.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'State',
      marks: 2,
      prompt: { en: 'State two uses of Bluetooth.', tr: 'Bluetooth’un iki kullanımını belirtiniz.' },
      points: [
        { point: { en: 'Wireless headphones / speakers.', tr: 'Kablosuz kulaklık / hoparlör.' }, keywords: [['headphone'], ['headset'], ['speaker'], ['earphone']] },
        { point: { en: 'Wireless keyboard / mouse.', tr: 'Kablosuz klavye / fare.' }, keywords: [['keyboard'], ['mouse']] },
        { point: { en: 'Sending files between nearby phones.', tr: 'Yakın telefonlar arasında dosya gönderme.' }, keywords: [['file'], ['photo']] },
        { point: { en: 'Smartwatch / car hands-free.', tr: 'Akıllı saat / araçta eller serbest.' }, keywords: [['watch'], ['car']] },
      ],
      model: { en: 'Connecting wireless headphones to a phone. Connecting a wireless keyboard to a tablet.', tr: 'Kablosuz kulaklığı telefona bağlamak. Kablosuz klavyeyi tablete bağlamak.' },
    },
    {
      id: 'e2',
      command: 'Describe',
      marks: 3,
      prompt: { en: 'Describe how to connect a laptop to a Wi-Fi network.', tr: 'Bir dizüstü bilgisayarın Wi-Fi ağına nasıl bağlanacağını açıklayınız.' },
      points: [
        { point: { en: 'Turn on Wi-Fi.', tr: 'Wi-Fi’ı aç.' }, keywords: [['turn on'], ['switch on'], ['enable']] },
        { point: { en: 'Select the network (name / SSID).', tr: 'Ağı (adını) seç.' }, keywords: [['select'], ['choose'], ['ssid']] },
        { point: { en: 'Enter the password.', tr: 'Parolayı gir.' }, keywords: [['password'], ['key']] },
      ],
      model: { en: 'Turn on Wi-Fi, select the network name from the list, then enter the password.', tr: 'Wi-Fi’ı aç, listeden ağ adını seç, sonra parolayı gir.' },
    },
    {
      id: 'e3',
      command: 'Compare',
      marks: 3,
      prompt: { en: 'Compare Wi-Fi and Bluetooth.', tr: 'Wi-Fi ve Bluetooth’u karşılaştırınız.' },
      points: [
        { point: { en: 'Both are wireless / use radio waves.', tr: 'İkisi de kablosuzdur / radyo dalgası kullanır.' }, keywords: [['both']] },
        { point: { en: 'Wi-Fi has a longer range.', tr: 'Wi-Fi’ın menzili daha uzundur.' }, keywords: [['range'], ['distance']] },
        { point: { en: 'Wi-Fi is faster / connects more devices.', tr: 'Wi-Fi daha hızlıdır / daha çok cihaz bağlar.' }, keywords: [['faster'], ['speed'], ['more devices']] },
      ],
      model: { en: 'Both are wireless and use radio waves. However, Wi-Fi has a longer range, is faster and connects more devices, whereas Bluetooth is short range.', tr: 'İkisi de kablosuzdur ve radyo dalgası kullanır. Ancak Wi-Fi’ın menzili daha uzundur, daha hızlıdır ve daha çok cihaz bağlar; Bluetooth ise kısa mesafelidir.' },
    },
  ],
  vocab: [
    { en: 'Wireless', tr: 'Kablosuz' },
    { en: 'Radio waves', tr: 'Radyo dalgaları' },
    { en: 'Range', tr: 'Menzil' },
    { en: 'Pairing', tr: 'Eşleştirme' },
    { en: 'Access point', tr: 'Erişim noktası' },
    { en: 'Network name', tr: 'Ağ adı' },
    { en: 'Password', tr: 'Parola' },
    { en: 'Discoverable', tr: 'Bulunabilir' },
  ],
}
