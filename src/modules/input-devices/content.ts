import type { ModuleContent } from '../../data/types'

export const inputDevices: ModuleContent = {
  learn: [
    {
      id: 'keyboard',
      title: { en: 'Keyboard and numeric keypad', tr: 'Klavye ve sayısal tuş takımı' },
      text: {
        tr: 'Klavye metin ve komut girmek için kullanılır. Sayısal tuş takımı yalnızca rakam girer (ör. ATM, kart ödeme cihazı, telefon).',
        en: 'A keyboard is used to enter text and commands. A numeric keypad enters numbers only (e.g. ATM, card payment machine, phone).',
      },
      points: [
        { en: '+ Familiar and accurate for text.  – Slow for large amounts of data; can cause strain (RSI).', tr: '+ Tanıdık ve metin için doğru.  – Çok veri için yavaş; zorlanmaya (RSI) yol açabilir.' },
      ],
    },
    {
      id: 'pointing',
      title: { en: 'Pointing devices', tr: 'İşaretleme aygıtları' },
      text: {
        tr: 'Fare, touchpad ve trackerball ekrandaki işaretçiyi hareket ettirip seçim yapmak için kullanılır.',
        en: 'A mouse, touchpad and trackerball are used to move the pointer on screen and select items.',
      },
      points: [
        { en: '+ Fast to select and move around a GUI.  – Hard to use without a flat surface (mouse).', tr: '+ GUI’de seçim ve gezinme hızlı.  – Düz yüzey olmadan kullanmak zor (fare).' },
        { en: 'A trackerball is easier for people with limited hand movement.', tr: 'Trackerball, el hareketi kısıtlı kişiler için daha kolaydır.' },
      ],
    },
    {
      id: 'remote',
      title: { en: 'Remote control', tr: 'Uzaktan kumanda' },
      text: { tr: 'Bir aygıtı uzaktan, genellikle kızılötesi sinyallerle kontrol eder (TV, projektör).', en: 'Controls a device from a distance, usually with infrared signals (TV, projector).' },
      points: [{ en: '+ Used from a distance.  – Objects in the way can block the signal.', tr: '+ Uzaktan kullanılır.  – Aradaki nesneler sinyali engelleyebilir.' }],
    },
    {
      id: 'joystick',
      title: { en: 'Joystick / driving wheel', tr: 'Oyun kolu / direksiyon' },
      text: { tr: 'Oyunlarda ve simülatörlerde (ör. uçuş, sürüş) hareketi kontrol eder.', en: 'Controls movement in games and simulators (e.g. flight, driving).' },
      points: [{ en: '+ Realistic control.  – Not suitable for typing or selecting text.', tr: '+ Gerçekçi kontrol.  – Yazı yazmak veya metin seçmek için uygun değil.' }],
    },
    {
      id: 'touch',
      title: { en: 'Touch screen (input)', tr: 'Dokunmatik ekran (giriş)' },
      text: { tr: 'Kullanıcı ekrana dokunarak seçim yapar (telefon, tablet, bilgi kioskları).', en: 'The user selects by touching the screen (phones, tablets, information kiosks).' },
      points: [{ en: '+ Easy and fast; no extra devices.  – Screen gets dirty; small items are hard to select.', tr: '+ Kolay ve hızlı; ek aygıt gerekmez.  – Ekran kirlenir; küçük öğeleri seçmek zor.' }],
    },
    {
      id: 'scanner',
      title: { en: 'Scanner', tr: 'Tarayıcı' },
      text: { tr: 'Kâğıt üzerindeki görüntü veya belgeyi dijital hâle getirir.', en: 'Turns an image or document on paper into a digital copy.' },
      points: [{ en: '+ Old photos and documents can be saved and edited.  – Quality depends on the original.', tr: '+ Eski fotoğraf ve belgeler saklanıp düzenlenebilir.  – Kalite orijinale bağlıdır.' }],
    },
    {
      id: 'camera',
      title: { en: 'Camera', tr: 'Kamera' },
      text: { tr: 'Fotoğraf ve video çeker; görüntüyü dijital olarak kaydeder.', en: 'Takes photos and videos and stores them digitally.' },
      points: [{ en: '+ Images can be shared and edited quickly.  – Large files use a lot of storage.', tr: '+ Görüntüler hızla paylaşılır ve düzenlenir.  – Büyük dosyalar çok yer kaplar.' }],
    },
    {
      id: 'mic',
      title: { en: 'Microphone', tr: 'Mikrofon' },
      text: { tr: 'Sesi girer: ses kaydı, video görüşme ve sesli komutlar için kullanılır.', en: 'Inputs sound: for recording, video calls and voice commands.' },
      points: [{ en: '+ Hands-free input.  – Background noise reduces quality.', tr: '+ Eller serbest giriş.  – Arka plan gürültüsü kaliteyi düşürür.' }],
    },
    {
      id: 'sensors',
      title: { en: 'Sensors', tr: 'Sensörler' },
      text: {
        tr: 'Sıcaklık, ışık, nem, basınç, hareket gibi fiziksel değerleri ölçer. Analog veri üretirler; bu veri bilgisayar için dijitale çevrilir.',
        en: 'Measure physical values such as temperature, light, moisture, pressure and movement. They produce analogue data, which is converted to digital for the computer.',
      },
      points: [
        { en: 'Uses: weather stations, greenhouses, burglar alarms.', tr: 'Kullanım: hava istasyonları, seralar, hırsız alarmları.' },
        { en: '+ Accurate readings, day and night.  – Can fail or give wrong readings.', tr: '+ Gece gündüz doğru ölçüm.  – Arızalanabilir veya yanlış ölçebilir.' },
      ],
    },
    {
      id: 'lightpen',
      title: { en: 'Light pen', tr: 'Işıklı kalem' },
      text: { tr: 'Kalem şeklindedir; doğrudan ekran üzerinde çizim yapmak veya seçmek için kullanılır.', en: 'Pen-shaped; used to draw or select directly on the screen.' },
      points: [{ en: '+ Precise drawing.  – Only works with suitable screens.', tr: '+ Hassas çizim.  – Yalnızca uygun ekranlarla çalışır.' }],
    },
  ],
  sort: {
    title: { en: 'What does the device input?', tr: 'Aygıt ne tür veri girer?' },
    categories: [
      { id: 'text', label: { en: 'Text / numbers', tr: 'Metin / sayı' } },
      { id: 'point', label: { en: 'Pointing / control', tr: 'İşaretleme / kontrol' } },
      { id: 'capture', label: { en: 'Sound / images / measurements', tr: 'Ses / görüntü / ölçüm' } },
    ],
    items: [
      { id: '1', text: { en: 'Keyboard', tr: 'Klavye' }, cat: 'text' },
      { id: '2', text: { en: 'Numeric keypad', tr: 'Sayısal tuş takımı' }, cat: 'text' },
      { id: '3', text: { en: 'Trackerball', tr: 'Trackerball' }, cat: 'point' },
      { id: '4', text: { en: 'Joystick', tr: 'Oyun kolu' }, cat: 'point' },
      { id: '5', text: { en: 'Microphone', tr: 'Mikrofon' }, cat: 'capture' },
      { id: '6', text: { en: 'Temperature sensor', tr: 'Sıcaklık sensörü' }, cat: 'capture' },
      { id: '7', text: { en: 'Scanner', tr: 'Tarayıcı' }, cat: 'capture' },
    ],
  },
  match: [
    { id: 'keypad', en: 'Numeric keypad', tr: 'Sayısal tuş takımı', desc: { en: 'Enters numbers, e.g. PIN', tr: 'Sayı girer, ör. PIN' } },
    { id: 'trackerball', en: 'Trackerball', tr: 'Trackerball', desc: { en: 'Ball rolled by hand to move pointer', tr: 'İşaretçiyi elle döndürülen topla hareket ettirir' } },
    { id: 'scanner', en: 'Scanner', tr: 'Tarayıcı', desc: { en: 'Digitises paper documents', tr: 'Kâğıt belgeleri dijitalleştirir' } },
    { id: 'sensor', en: 'Sensor', tr: 'Sensör', desc: { en: 'Measures physical values', tr: 'Fiziksel değerleri ölçer' } },
    { id: 'lightpen', en: 'Light pen', tr: 'Işıklı kalem', desc: { en: 'Draws directly on the screen', tr: 'Doğrudan ekranda çizer' } },
    { id: 'remote', en: 'Remote control', tr: 'Uzaktan kumanda', desc: { en: 'Controls a device from a distance', tr: 'Aygıtı uzaktan kontrol eder' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A greenhouse must keep the temperature between 20 °C and 25 °C automatically.', tr: 'Bir sera, sıcaklığı otomatik olarak 20–25 °C arasında tutmalı.' },
      options: [
        { id: 'sensor', label: { en: 'Temperature sensor', tr: 'Sıcaklık sensörü' } },
        { id: 'keyboard', label: { en: 'Keyboard', tr: 'Klavye' } },
        { id: 'camera', label: { en: 'Camera', tr: 'Kamera' } },
      ],
      answer: 'sensor',
      reasons: [
        { en: 'It measures the temperature continuously without a person.', tr: 'Sıcaklığı insan olmadan sürekli ölçer.' },
        { en: 'A person can type the temperature every hour.', tr: 'Bir kişi her saat sıcaklığı yazabilir.' },
        { en: 'It takes photos of the plants.', tr: 'Bitkilerin fotoğrafını çeker.' },
      ],
      correctReason: 0,
      explain: { en: 'Sensors give automatic, continuous readings.', tr: 'Sensörler otomatik ve sürekli ölçüm yapar.' },
    },
    {
      id: 's2',
      situation: { en: 'A user with limited hand movement needs to move the pointer on screen.', tr: 'El hareketi kısıtlı bir kullanıcı ekranda işaretçiyi hareket ettirmeli.' },
      options: [
        { id: 'trackerball', label: { en: 'Trackerball', tr: 'Trackerball' } },
        { id: 'joystick', label: { en: 'Driving wheel', tr: 'Direksiyon' } },
        { id: 'keypad', label: { en: 'Numeric keypad', tr: 'Sayısal tuş takımı' } },
      ],
      answer: 'trackerball',
      reasons: [
        { en: 'The device stays still; only the ball is rolled, which needs less movement.', tr: 'Aygıt sabit kalır; yalnızca top döndürülür, daha az hareket gerekir.' },
        { en: 'It enters numbers quickly.', tr: 'Sayıları hızlı girer.' },
        { en: 'It is used for racing games.', tr: 'Yarış oyunları için kullanılır.' },
      ],
      correctReason: 0,
      explain: { en: 'A trackerball needs less hand and arm movement than a mouse.', tr: 'Trackerball, fareden daha az el ve kol hareketi gerektirir.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which is a pointing device?', tr: 'Hangisi bir işaretleme aygıtıdır?' },
      options: [
        { en: 'Touchpad', tr: 'Touchpad' },
        { en: 'Microphone', tr: 'Mikrofon' },
        { en: 'Numeric keypad', tr: 'Sayısal tuş takımı' },
      ],
      answer: 0,
      explain: { en: 'A touchpad moves the pointer.', tr: 'Touchpad işaretçiyi hareket ettirir.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'Sensors produce digital data that needs no conversion.', tr: 'Sensörler dönüştürme gerektirmeyen dijital veri üretir.' },
      answer: false,
      explain: { en: 'False. Sensor data is analogue and is converted to digital.', tr: 'Yanlış. Sensör verisi analogdur ve dijitale çevrilir.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'An ATM uses a numeric ___ to enter the PIN.', tr: 'ATM, PIN girmek için sayısal ___ kullanır.' },
      bank: ['keypad', 'scanner', 'joystick', 'sensor'],
      answer: 'keypad',
      explain: { en: 'A numeric keypad enters numbers only.', tr: 'Sayısal tuş takımı yalnızca sayı girer.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'A disadvantage of a microphone is…', tr: 'Mikrofonun bir dezavantajı…' },
      options: [
        { en: 'background noise reduces quality', tr: 'arka plan gürültüsü kaliteyi düşürür' },
        { en: 'it needs a flat surface', tr: 'düz yüzey gerektirir' },
        { en: 'it gets dirty with fingerprints', tr: 'parmak iziyle kirlenir' },
      ],
      answer: 0,
      explain: { en: 'Noise is also recorded.', tr: 'Gürültü de kaydedilir.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'State',
      marks: 2,
      prompt: { en: 'State two uses of sensors.', tr: 'Sensörlerin iki kullanım alanını belirtiniz.' },
      points: [
        { point: { en: 'Greenhouse / controlling temperature', tr: 'Sera / sıcaklık kontrolü' }, keywords: [['greenhouse'], ['temperature']] },
        { point: { en: 'Burglar / security alarm', tr: 'Hırsız / güvenlik alarmı' }, keywords: [['alarm'], ['burglar'], ['security']] },
        { point: { en: 'Weather station', tr: 'Hava istasyonu' }, keywords: [['weather']] },
        { point: { en: 'Automatic doors / lights / other monitoring', tr: 'Otomatik kapı / ışık / diğer izleme' }, keywords: [['door'], ['light'], ['monitor']] },
      ],
      model: { en: 'Monitoring the temperature in a greenhouse; detecting movement in a burglar alarm.', tr: 'Serada sıcaklığı izlemek; hırsız alarmında hareketi algılamak.' },
    },
    {
      id: 'e2',
      command: 'Explain',
      marks: 2,
      prompt: { en: 'Explain one advantage and one disadvantage of using a touch screen as an input device.', tr: 'Dokunmatik ekranı giriş aygıtı olarak kullanmanın bir avantajını ve bir dezavantajını açıklayınız.' },
      points: [
        { point: { en: 'Advantage: easy/fast to use, no extra device needed.', tr: 'Avantaj: kullanımı kolay/hızlı, ek aygıt gerekmez.' }, keywords: [['easy'], ['fast'], ['quick'], ['no need'], ['intuitive']] },
        { point: { en: 'Disadvantage: gets dirty / small items hard to select / can be damaged.', tr: 'Dezavantaj: kirlenir / küçük öğeleri seçmek zor / hasar görebilir.' }, keywords: [['dirt'], ['small'], ['damage'], ['scratch'], ['finger']] },
      ],
      model: { en: 'It is easy and quick to use because you touch what you want, but the screen gets dirty and small icons can be hard to select.', tr: 'İstediğin şeye dokunduğun için kullanımı kolay ve hızlıdır, ama ekran kirlenir ve küçük simgeleri seçmek zor olabilir.' },
    },
  ],
  vocab: [
    { en: 'Input device', tr: 'Giriş aygıtı' },
    { en: 'Keyboard', tr: 'Klavye' },
    { en: 'Numeric keypad', tr: 'Sayısal tuş takımı' },
    { en: 'Pointing device', tr: 'İşaretleme aygıtı' },
    { en: 'Scanner', tr: 'Tarayıcı' },
    { en: 'Sensor', tr: 'Sensör / algılayıcı' },
    { en: 'Light pen', tr: 'Işıklı kalem' },
    { en: 'Joystick', tr: 'Oyun kolu' },
  ],
}
