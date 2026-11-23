import type { ModuleMeta } from './types'

/**
 * Units 1–3. Objectives follow the Cambridge IGCSE ICT 0417 syllabus (2026–2028),
 * sections 1, 2 and 3. No extra requirements are added.
 */
export const UNIT1_3: ModuleMeta[] = [
  {
    id: 'hardware-software',
    unit: 1,
    number: '1.1',
    icon: 'cpu',
    syllabusRef: '1.1',
    available: true,
    title: { en: 'Hardware and Software', tr: 'Donanım ve Yazılım' },
    summary: { en: 'Hardware, application and system software, analogue and digital data.', tr: 'Donanım, uygulama ve sistem yazılımı, analog ve dijital veri.' },
    objectives: [
      { en: 'Define hardware and know its internal components, internal memory and other hardware components.', tr: 'Donanımı tanımlamak; iç bileşenleri, iç belleği ve diğer donanım bileşenlerini bilmek.' },
      { en: 'Define software and know the difference between applications software and system software, with examples.', tr: 'Yazılımı tanımlamak; uygulama yazılımı ile sistem yazılımı arasındaki farkı örneklerle bilmek.' },
      { en: 'Understand analogue and digital data, their differences and why data must be converted.', tr: 'Analog ve dijital veriyi, farklarını ve verinin neden dönüştürülmesi gerektiğini anlamak.' },
    ],
  },
  {
    id: 'main-components',
    unit: 1,
    number: '1.2',
    icon: 'memory',
    syllabusRef: '1.2',
    available: true,
    title: { en: 'Main Components', tr: 'Ana Bileşenler' },
    summary: { en: 'CPU, RAM, ROM, input/output devices and backing storage.', tr: 'CPU, RAM, ROM, giriş/çıkış aygıtları ve yardımcı depolama.' },
    objectives: [
      { en: 'Understand the role of the CPU in processing instructions to produce an output.', tr: 'CPU’nun komutları işleyerek çıktı üretmedeki rolünü anlamak.' },
      { en: 'Know the characteristics of ROM and RAM and the differences between them.', tr: 'ROM ve RAM’in özelliklerini ve aralarındaki farkları bilmek.' },
      { en: 'Know the differences between input and output devices, and between backing storage and internal memory.', tr: 'Giriş ve çıkış aygıtları arasındaki ve yardımcı depolama ile iç bellek arasındaki farkları bilmek.' },
    ],
  },
  {
    id: 'operating-systems',
    unit: 1,
    number: '1.3',
    icon: 'window',
    syllabusRef: '1.3',
    available: true,
    title: { en: 'Operating Systems', tr: 'İşletim Sistemleri' },
    summary: { en: 'CLI, GUI, dialogue-based and gesture-based interfaces.', tr: 'Komut satırı, grafik, diyalog tabanlı ve hareket tabanlı arayüzler.' },
    objectives: [
      { en: 'Know the characteristics of CLI, GUI, dialogue-based and gesture-based interfaces.', tr: 'Komut satırı (CLI), grafik (GUI), diyalog tabanlı ve hareket tabanlı arayüzlerin özelliklerini bilmek.' },
      { en: 'Know the differences, advantages and disadvantages of each type.', tr: 'Her türün farklarını, avantaj ve dezavantajlarını bilmek.' },
    ],
  },
  {
    id: 'types-of-computer',
    unit: 1,
    number: '1.4',
    icon: 'laptop',
    syllabusRef: '1.4',
    available: true,
    title: { en: 'Types of Computer', tr: 'Bilgisayar Türleri' },
    summary: { en: 'Desktop, laptop, smartphone, tablet and phablet.', tr: 'Masaüstü, dizüstü, akıllı telefon, tablet ve phablet.' },
    objectives: [
      { en: 'Know the characteristics and uses of desktop computers.', tr: 'Masaüstü bilgisayarların özelliklerini ve kullanım alanlarını bilmek.' },
      { en: 'Know the characteristics and uses of mobile computers: laptops, smartphones, tablets and phablets.', tr: 'Mobil bilgisayarların (dizüstü, akıllı telefon, tablet, phablet) özelliklerini ve kullanımlarını bilmek.' },
      { en: 'Compare the advantages and disadvantages of each type, including portability and expandability.', tr: 'Her türün avantaj ve dezavantajlarını taşınabilirlik ve genişletilebilirlik dahil karşılaştırmak.' },
    ],
  },
  {
    id: 'emerging-technologies',
    unit: 1,
    number: '1.5',
    icon: 'vr',
    syllabusRef: '1.5',
    available: true,
    title: { en: 'Emerging Technologies', tr: 'Yeni Teknolojiler' },
    summary: { en: 'Artificial intelligence and extended reality (VR and AR).', tr: 'Yapay zekâ ve genişletilmiş gerçeklik (VR ve AR).' },
    objectives: [
      { en: 'Understand the impact on everyday life of artificial intelligence (AI).', tr: 'Yapay zekânın (AI) günlük yaşama etkisini anlamak.' },
      { en: 'Understand the impact on everyday life of extended reality: virtual reality (VR) and augmented reality (AR).', tr: 'Genişletilmiş gerçekliğin – sanal gerçeklik (VR) ve artırılmış gerçeklik (AR) – günlük yaşama etkisini anlamak.' },
    ],
  },
  {
    id: 'input-devices',
    unit: 2,
    number: '2.1',
    icon: 'keyboard',
    syllabusRef: '2.1',
    available: true,
    title: { en: 'Input Devices', tr: 'Giriş Aygıtları' },
    summary: { en: 'Keyboard, pointing devices, touch screen, scanner, sensors and more.', tr: 'Klavye, işaretleme aygıtları, dokunmatik ekran, tarayıcı, sensörler ve diğerleri.' },
    objectives: [
      {
        en: 'Know the characteristics, uses, advantages and disadvantages of: keyboard, numeric keypad, pointing devices, remote control, joystick/driving wheel, touch screen, scanners, camera, microphone, sensors and light pen.',
        tr: 'Şu aygıtların özelliklerini, kullanımlarını, avantaj ve dezavantajlarını bilmek: klavye, sayısal tuş takımı, işaretleme aygıtları, uzaktan kumanda, oyun kolu/direksiyon, dokunmatik ekran, tarayıcılar, kamera, mikrofon, sensörler ve ışıklı kalem.',
      },
    ],
  },
  {
    id: 'direct-data-entry',
    unit: 2,
    number: '2.2',
    icon: 'scan',
    syllabusRef: '2.2',
    available: true,
    title: { en: 'Direct Data Entry', tr: 'Doğrudan Veri Girişi' },
    summary: { en: 'Card readers, RFID, OMR, OCR, barcodes and QR codes.', tr: 'Kart okuyucular, RFID, OMR, OCR, barkod ve QR kodları.' },
    objectives: [
      {
        en: 'Know the characteristics, uses, advantages and disadvantages of: magnetic stripe reader, chip and PIN reader, RFID reader, OMR, OCR, bar code reader and QR scanner.',
        tr: 'Şu aygıtların özelliklerini, kullanımlarını, avantaj ve dezavantajlarını bilmek: manyetik şerit okuyucu, çip ve PIN okuyucu, RFID okuyucu, OMR, OCR, barkod okuyucu ve QR tarayıcı.',
      },
    ],
  },
  {
    id: 'output-devices',
    unit: 2,
    number: '2.3',
    icon: 'printer',
    syllabusRef: '2.3',
    available: true,
    title: { en: 'Output Devices', tr: 'Çıkış Aygıtları' },
    summary: { en: 'Monitors, projectors, printers, plotters, 3D printers, speakers, actuators.', tr: 'Monitörler, projektörler, yazıcılar, çiziciler, 3B yazıcılar, hoparlörler, eyleyiciler.' },
    objectives: [
      {
        en: 'Know the characteristics, uses, advantages and disadvantages of: monitors, touch screen (as output), multimedia projector, laser, inkjet and dot matrix printers, plotter, 3D printers, speaker and actuator.',
        tr: 'Şu aygıtların özelliklerini, kullanımlarını, avantaj ve dezavantajlarını bilmek: monitörler, dokunmatik ekran (çıkış olarak), projektör, lazer, mürekkep püskürtmeli ve nokta vuruşlu yazıcılar, çizici (plotter), 3B yazıcılar, hoparlör ve eyleyici (aktüatör).',
      },
    ],
  },
  {
    id: 'storage',
    unit: 3,
    number: '3',
    icon: 'disk',
    syllabusRef: '3',
    available: true,
    title: { en: 'Storage Devices and Media', tr: 'Depolama Aygıtları ve Ortamları' },
    summary: { en: 'Magnetic, optical and solid-state storage.', tr: 'Manyetik, optik ve katı hâl depolama.' },
    objectives: [
      { en: 'Know the characteristics, uses, media, advantages and disadvantages of magnetic, optical and solid-state storage devices.', tr: 'Manyetik, optik ve katı hâl depolama aygıtlarının özelliklerini, kullanımlarını, ortamlarını, avantaj ve dezavantajlarını bilmek.' },
      { en: 'Magnetic: fixed and portable hard drives, magnetic tape. Optical: CD, DVD, Blu-ray. Solid-state: SSD, pen drive, flash drive, memory cards (SD, xD, CFast).', tr: 'Manyetik: sabit ve taşınabilir sabit diskler, manyetik bant. Optik: CD, DVD, Blu-ray. Katı hâl: SSD, USB bellek, flaş bellek, hafıza kartları (SD, xD, CFast).' },
    ],
  },
]
