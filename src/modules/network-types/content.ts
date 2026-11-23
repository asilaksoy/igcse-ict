import type { ModuleContent } from '../../data/types'

export const networkTypes: ModuleContent = {
  learn: [
    {
      id: 'lan',
      title: { en: 'LAN – Local Area Network', tr: 'LAN – Yerel Alan Ağı' },
      text: {
        tr: 'Küçük bir alanı (bir bina veya okul) kapsar. Cihazlar genellikle kablolarla ve switch’lerle bağlanır.',
        en: 'Covers a small area, such as one building or school. Devices are usually connected with cables and switches.',
      },
      points: [{ en: 'Fast and fairly secure; owned by one organisation.', tr: 'Hızlı ve oldukça güvenli; tek bir kuruma aittir.' }],
    },
    {
      id: 'wlan',
      title: { en: 'WLAN – Wireless LAN', tr: 'WLAN – Kablosuz Yerel Ağ' },
      text: {
        tr: 'Kablo yerine radyo dalgaları (Wi-Fi) kullanan bir LAN’dır. Cihazlar kablosuz erişim noktalarına bağlanır.',
        en: 'A LAN that uses radio waves (Wi-Fi) instead of cables. Devices connect to wireless access points.',
      },
      points: [
        { en: 'Users can move around; no cables needed.', tr: 'Kullanıcılar dolaşabilir; kablo gerekmez.' },
        { en: 'Usually slower and less secure than a wired LAN.', tr: 'Genellikle kablolu LAN’dan daha yavaş ve daha az güvenlidir.' },
      ],
    },
    {
      id: 'wan',
      title: { en: 'WAN – Wide Area Network', tr: 'WAN – Geniş Alan Ağı' },
      text: {
        tr: 'Şehirler veya ülkeler gibi geniş bir alanı kapsar ve LAN’ları birbirine bağlar. En büyük WAN internettir.',
        en: 'Covers a large area, such as cities or countries, and connects LANs together. The internet is the largest WAN.',
      },
      example: { en: 'A bank connects the LANs of all its branches with a WAN.', tr: 'Bir banka tüm şubelerinin LAN’larını bir WAN ile bağlar.' },
    },
  ],
  compare: {
    title: { en: 'LAN, WLAN and WAN', tr: 'LAN, WLAN ve WAN' },
    columns: ['LAN', 'WLAN', 'WAN'],
    rows: [
      { label: { en: 'Area', tr: 'Alan' }, cells: [{ en: 'Small (one site)', tr: 'Küçük (tek yer)' }, { en: 'Small (one site)', tr: 'Küçük (tek yer)' }, { en: 'Large (cities, countries)', tr: 'Geniş (şehirler, ülkeler)' }] },
      { label: { en: 'Connection', tr: 'Bağlantı' }, cells: [{ en: 'Cables', tr: 'Kablolar' }, { en: 'Radio waves (Wi-Fi)', tr: 'Radyo dalgaları (Wi-Fi)' }, { en: 'Links LANs together', tr: 'LAN’ları birbirine bağlar' }] },
      { label: { en: 'Speed', tr: 'Hız' }, cells: [{ en: 'Fast', tr: 'Hızlı' }, { en: 'Slower than LAN', tr: 'LAN’dan yavaş' }, { en: 'Slower', tr: 'Daha yavaş' }] },
      { label: { en: 'Example', tr: 'Örnek' }, cells: [{ en: 'School computer lab', tr: 'Okul bilgisayar sınıfı' }, { en: 'Home Wi-Fi', tr: 'Ev Wi-Fi’ı' }, { en: 'The internet', tr: 'İnternet' }] },
    ],
  },
  sort: {
    title: { en: 'LAN, WLAN or WAN?', tr: 'LAN mı, WLAN mı, WAN mı?' },
    categories: [
      { id: 'lan', label: { en: 'LAN', tr: 'LAN' } },
      { id: 'wlan', label: { en: 'WLAN', tr: 'WLAN' } },
      { id: 'wan', label: { en: 'WAN', tr: 'WAN' } },
    ],
    items: [
      { id: '1', text: { en: 'Cabled PCs in one lab', tr: 'Bir laboratuvarda kablolu PC’ler' }, cat: 'lan' },
      { id: '2', text: { en: 'Tablets on school Wi-Fi', tr: 'Okul Wi-Fi’ındaki tabletler' }, cat: 'wlan' },
      { id: '3', text: { en: 'The internet', tr: 'İnternet' }, cat: 'wan' },
      { id: '4', text: { en: 'Bank branches in many cities', tr: 'Birçok şehirdeki banka şubeleri' }, cat: 'wan' },
      { id: '5', text: { en: 'Laptops in a café, no cables', tr: 'Kafede kablosuz dizüstüler' }, cat: 'wlan' },
      { id: '6', text: { en: 'Office printers on a switch', tr: 'Switch’e bağlı ofis yazıcıları' }, cat: 'lan' },
    ],
  },
  match: [
    { id: 'lan', en: 'LAN', tr: 'Yerel alan ağı', desc: { en: 'Small area, usually cabled', tr: 'Küçük alan, genellikle kablolu' } },
    { id: 'wlan', en: 'WLAN', tr: 'Kablosuz yerel ağ', desc: { en: 'Small area, wireless', tr: 'Küçük alan, kablosuz' } },
    { id: 'wan', en: 'WAN', tr: 'Geniş alan ağı', desc: { en: 'Large area, links LANs', tr: 'Geniş alan, LAN’ları bağlar' } },
    { id: 'ap', en: 'Access point', tr: 'Erişim noktası', desc: { en: 'Connects wireless devices to a LAN', tr: 'Kablosuz cihazları LAN’a bağlar' } },
    { id: 'cable', en: 'Cable', tr: 'Kablo', desc: { en: 'Wired connection', tr: 'Kablolu bağlantı' } },
    { id: 'interf', en: 'Interference', tr: 'Parazit', desc: { en: 'Things that weaken a wireless signal', tr: 'Kablosuz sinyali zayıflatan etkenler' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A company with offices in Istanbul and London wants to share files.', tr: 'İstanbul ve Londra’da ofisleri olan bir şirket dosya paylaşmak istiyor.' },
      options: [
        { id: 'lan', label: { en: 'LAN', tr: 'LAN' } },
        { id: 'wlan', label: { en: 'WLAN', tr: 'WLAN' } },
        { id: 'wan', label: { en: 'WAN', tr: 'WAN' } },
      ],
      answer: 'wan',
      reasons: [
        { en: 'It covers a large area and connects LANs.', tr: 'Geniş alanı kapsar ve LAN’ları bağlar.' },
        { en: 'It only works in one building.', tr: 'Yalnızca bir binada çalışır.' },
        { en: 'It uses no cables.', tr: 'Kablo kullanmaz.' },
      ],
      correctReason: 0,
      explain: { en: 'Different countries need a WAN.', tr: 'Farklı ülkeler için WAN gerekir.' },
    },
    {
      id: 's2',
      situation: { en: 'Students move around the library with tablets.', tr: 'Öğrenciler kütüphanede tabletlerle dolaşıyor.' },
      options: [
        { id: 'lan', label: { en: 'Wired LAN', tr: 'Kablolu LAN' } },
        { id: 'wlan', label: { en: 'WLAN', tr: 'WLAN' } },
        { id: 'wan', label: { en: 'WAN', tr: 'WAN' } },
      ],
      answer: 'wlan',
      reasons: [
        { en: 'It covers a whole country.', tr: 'Bütün bir ülkeyi kapsar.' },
        { en: 'It is wireless, so users can move around.', tr: 'Kablosuzdur; kullanıcılar dolaşabilir.' },
        { en: 'It is always faster than a wired LAN.', tr: 'Kablolu LAN’dan her zaman daha hızlıdır.' },
      ],
      correctReason: 1,
      explain: { en: 'Moving tablets need a wireless network.', tr: 'Hareket eden tabletler kablosuz ağ gerektirir.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which network covers the largest area?', tr: 'Hangi ağ en geniş alanı kapsar?' },
      options: [
        { en: 'LAN', tr: 'LAN' },
        { en: 'WLAN', tr: 'WLAN' },
        { en: 'WAN', tr: 'WAN' },
      ],
      answer: 2,
      explain: { en: 'A WAN covers a large area.', tr: 'WAN geniş bir alanı kapsar.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'The internet is an example of a WAN.', tr: 'İnternet bir WAN örneğidir.' },
      answer: true,
      explain: { en: 'True. It is the largest WAN.', tr: 'Doğru. En büyük WAN’dır.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'A WLAN uses ___ instead of cables.', tr: 'WLAN kablo yerine ___ kullanır.' },
      bank: ['radio waves', 'paper', 'USB', 'printers'],
      answer: 'radio waves',
      explain: { en: 'WLANs use radio waves (Wi-Fi).', tr: 'WLAN radyo dalgaları (Wi-Fi) kullanır.' },
    },
    {
      kind: 'tf',
      id: 'c4',
      prompt: { en: 'A WLAN is usually more secure than a wired LAN.', tr: 'WLAN genellikle kablolu LAN’dan daha güvenlidir.' },
      answer: false,
      explain: { en: 'False. Wireless signals are easier to intercept.', tr: 'Yanlış. Kablosuz sinyaller daha kolay ele geçirilir.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'State',
      marks: 2,
      prompt: { en: 'State two differences between a LAN and a WAN.', tr: 'LAN ile WAN arasındaki iki farkı belirtiniz.' },
      points: [
        { point: { en: 'LAN covers a small area; WAN a large area.', tr: 'LAN küçük, WAN geniş alanı kapsar.' }, keywords: [['small'], ['large'], ['area'], ['building']] },
        { point: { en: 'WAN connects LANs together.', tr: 'WAN LAN’ları birbirine bağlar.' }, keywords: [['connect', 'lan'], ['links']] },
        { point: { en: 'LAN is usually faster.', tr: 'LAN genellikle daha hızlıdır.' }, keywords: [['fast'], ['speed'], ['slow']] },
        { point: { en: 'LAN owned by one organisation; WAN often not.', tr: 'LAN tek kuruma aittir; WAN çoğunlukla değildir.' }, keywords: [['own']] },
      ],
      model: { en: 'A LAN covers a small area, but a WAN covers a large area. A LAN is usually faster than a WAN.', tr: 'LAN küçük bir alanı, WAN ise geniş bir alanı kapsar. LAN genellikle WAN’dan daha hızlıdır.' },
    },
    {
      id: 'e2',
      command: 'Explain',
      marks: 4,
      prompt: { en: 'Explain the advantages and disadvantages of a WLAN compared with a wired LAN.', tr: 'WLAN’ın kablolu LAN’a göre avantaj ve dezavantajlarını açıklayınız.' },
      points: [
        { point: { en: 'Users can move around / devices are portable.', tr: 'Kullanıcılar dolaşabilir / cihazlar taşınabilir.' }, keywords: [['move'], ['mobile'], ['anywhere'], ['portable']] },
        { point: { en: 'No cables / easier and cheaper to add devices.', tr: 'Kablo yok / cihaz eklemek kolay ve ucuz.' }, keywords: [['cable'], ['wire'], ['add']] },
        { point: { en: 'Less secure / signal can be intercepted.', tr: 'Daha az güvenli / sinyal ele geçirilebilir.' }, keywords: [['secur'], ['hack'], ['intercept']] },
        { point: { en: 'Slower / interference / limited range.', tr: 'Daha yavaş / parazit / sınırlı menzil.' }, keywords: [['slow'], ['interfer'], ['range'], ['speed']] },
      ],
      model: {
        en: 'Advantages: users can move around with their devices, and no cables are needed, so it is easier to add devices. Disadvantages: it is less secure because signals can be intercepted, and it can be slower because of interference.',
        tr: 'Avantajlar: kullanıcılar cihazlarıyla dolaşabilir ve kablo gerekmediği için cihaz eklemek kolaydır. Dezavantajlar: sinyaller ele geçirilebildiği için daha az güvenlidir ve parazit nedeniyle daha yavaş olabilir.',
      },
    },
  ],
  vocab: [
    { en: 'Local Area Network (LAN)', tr: 'Yerel alan ağı' },
    { en: 'Wireless LAN (WLAN)', tr: 'Kablosuz yerel ağ' },
    { en: 'Wide Area Network (WAN)', tr: 'Geniş alan ağı' },
    { en: 'Access point', tr: 'Erişim noktası' },
    { en: 'Cable', tr: 'Kablo' },
    { en: 'Interference', tr: 'Parazit' },
    { en: 'Geographical area', tr: 'Coğrafi alan' },
    { en: 'Branch', tr: 'Şube' },
  ],
}
