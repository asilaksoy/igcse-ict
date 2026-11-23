import type { ModuleMeta } from './types'

/**
 * The eight modules of Topic 4. Objectives follow the Cambridge IGCSE ICT 0417
 * syllabus for 2026–2028 (sections 4.1 and 4.2). No extra requirements are added.
 */
export const MODULES: ModuleMeta[] = [
  {
    id: 'network-devices',
    number: '01',
    icon: 'router',
    syllabusRef: '4.1',
    available: true,
    title: { en: 'Network Devices', tr: 'Ağ Cihazları' },
    summary: {
      en: 'Routers, switches, hubs, bridges and NICs – how data finds its way.',
      tr: 'Router, switch, hub, köprü ve ağ kartı – veri yolunu nasıl bulur?',
    },
    objectives: [
      {
        en: 'Understand the operation of a router: connecting networks and devices to the internet, storing computer addresses and routing data packets.',
        tr: 'Router’ın çalışmasını anlamak: ağları ve cihazları internete bağlama, bilgisayar adreslerini saklama ve veri paketlerini yönlendirme.',
      },
      {
        en: 'Understand the use of other common network devices: network interface cards (NICs), hubs, bridges and switches.',
        tr: 'Diğer yaygın ağ cihazlarının kullanımını anlamak: ağ arayüz kartları (NIC), hub’lar, köprüler ve switch’ler.',
      },
    ],
  },
  {
    id: 'wireless-technologies',
    number: '02',
    icon: 'wifi',
    syllabusRef: '4.1',
    available: true,
    title: { en: 'Wireless Technologies', tr: 'Kablosuz Teknolojiler' },
    summary: { en: 'Wi-Fi and Bluetooth: uses, connecting, similarities and differences.', tr: 'Wi-Fi ve Bluetooth: kullanımları, bağlanma, benzerlik ve farkları.' },
    objectives: [
      { en: 'Understand Wi-Fi and Bluetooth, their uses and how to connect a device using each.', tr: 'Wi-Fi ve Bluetooth’u, kullanım alanlarını ve her biriyle bir cihazın nasıl bağlandığını anlamak.' },
      { en: 'Compare Wi-Fi and Bluetooth: similarities and differences.', tr: 'Wi-Fi ve Bluetooth’u karşılaştırmak: benzerlikler ve farklılıklar.' },
    ],
  },
  {
    id: 'cloud-computing',
    number: '03',
    icon: 'cloud',
    syllabusRef: '4.1',
    available: true,
    title: { en: 'Cloud Computing', tr: 'Bulut Bilişim' },
    summary: { en: 'Storing, managing and sharing data in the cloud.', tr: 'Verinin bulutta saklanması, yönetilmesi ve paylaşılması.' },
    objectives: [
      { en: 'Understand the characteristics, uses and issues of cloud computing, including how data is stored, managed and shared.', tr: 'Bulut bilişimin özelliklerini, kullanımlarını ve sorunlarını; verinin nasıl saklandığını, yönetildiğini ve paylaşıldığını anlamak.' },
      { en: 'Compare cloud storage with other storage methods (advantages and disadvantages).', tr: 'Bulut depolamayı diğer depolama yöntemleriyle karşılaştırmak (avantaj ve dezavantajlar).' },
    ],
  },
  {
    id: 'network-environments',
    number: '04',
    icon: 'globe',
    syllabusRef: '4.1',
    available: true,
    title: { en: 'Common Network Environments', tr: 'Yaygın Ağ Ortamları' },
    summary: { en: 'Internet, intranet and extranet.', tr: 'İnternet, intranet ve extranet.' },
    objectives: [
      { en: 'Understand the characteristics, uses and purpose of the internet, intranets and extranets.', tr: 'İnternet, intranet ve extranet’in özelliklerini, kullanımlarını ve amacını anlamak.' },
      { en: 'Understand how the internet, intranets and extranets differ and overlap.', tr: 'İnternet, intranet ve extranet’in nasıl farklılaştığını ve örtüştüğünü anlamak.' },
    ],
  },
  {
    id: 'network-types',
    number: '05',
    icon: 'lan',
    syllabusRef: '4.1',
    available: true,
    title: { en: 'Network Types', tr: 'Ağ Türleri' },
    summary: { en: 'LAN, WLAN and WAN.', tr: 'LAN, WLAN ve WAN.' },
    objectives: [
      { en: 'Understand the characteristics of LAN, WLAN and WAN and the differences between them.', tr: 'LAN, WLAN ve WAN’ın özelliklerini ve aralarındaki farkları anlamak.' },
    ],
  },
  {
    id: 'network-security',
    number: '06',
    icon: 'shield',
    syllabusRef: '4.2',
    available: true,
    title: { en: 'Network Issues and Security', tr: 'Ağ Sorunları ve Güvenlik' },
    summary: { en: 'Secure data transfer, passwords and anti-malware.', tr: 'Güvenli veri aktarımı, parolalar ve kötü amaçlı yazılımdan korunma.' },
    objectives: [
      { en: 'Understand security issues of data transfer, including privacy and confidentiality.', tr: 'Veri aktarımındaki güvenlik sorunlarını, gizlilik ve mahremiyet dahil, anlamak.' },
      { en: 'Understand passwords: avoiding interception, strong vs weak passwords, changing passwords regularly.', tr: 'Parolaları anlamak: ele geçirilmeyi önleme, güçlü ve zayıf parolalar, düzenli değiştirme.' },
      { en: 'Understand the use of anti-malware and anti-virus software.', tr: 'Kötü amaçlı yazılım ve virüs koruma yazılımlarının kullanımını anlamak.' },
    ],
  },
  {
    id: 'authentication',
    number: '07',
    icon: 'fingerprint',
    syllabusRef: '4.2',
    available: true,
    title: { en: 'Authentication Methods', tr: 'Kimlik Doğrulama Yöntemleri' },
    summary: { en: 'Zero login, biometrics, smart cards, tokens and more.', tr: 'Sıfır giriş, biyometri, akıllı kartlar, tokenlar ve daha fazlası.' },
    objectives: [
      { en: 'Understand other authentication methods: zero login, biometric methods, magnetic stripes, smart cards, physical tokens and electronic tokens.', tr: 'Diğer kimlik doğrulama yöntemlerini anlamak: sıfır giriş, biyometrik yöntemler, manyetik şeritler, akıllı kartlar, fiziksel ve elektronik tokenlar.' },
    ],
  },
  {
    id: 'electronic-conferencing',
    number: '08',
    icon: 'video',
    syllabusRef: '4.2',
    available: true,
    title: { en: 'Electronic Conferencing', tr: 'Elektronik Konferans' },
    summary: { en: 'Video, audio and web conferencing.', tr: 'Video, sesli ve web konferansı.' },
    objectives: [
      { en: 'Understand the characteristics, uses, advantages and disadvantages of video-, audio- and web-conferencing.', tr: 'Video, sesli ve web konferansının özelliklerini, kullanımlarını, avantaj ve dezavantajlarını anlamak.' },
      { en: 'Know the hardware, software and network connections each type requires.', tr: 'Her türün gerektirdiği donanım, yazılım ve ağ bağlantılarını bilmek.' },
    ],
  },
]

export const getModule = (id: string) => MODULES.find((m) => m.id === id)
