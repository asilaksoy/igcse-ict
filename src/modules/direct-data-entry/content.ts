import type { ModuleContent } from '../../data/types'

export const directDataEntry: ModuleContent = {
  learn: [
    {
      id: 'what',
      title: { en: 'Direct data entry', tr: 'Doğrudan veri girişi' },
      text: {
        tr: 'Veri, bir kişi yazmadan doğrudan bir kaynaktan (kart, etiket, form) okunur. Hızlıdır ve yazım hatalarını önler.',
        en: 'Data is read straight from a source (card, tag, form) without a person typing it. It is fast and avoids typing errors.',
      },
    },
    {
      id: 'mag',
      title: { en: 'Magnetic stripe reader', tr: 'Manyetik şerit okuyucu' },
      text: { tr: 'Kart okuyucudan geçirilince şeritteki veriyi okur (otel kartı, kimlik kartı).', en: 'Reads the data on the stripe when the card is swiped (hotel key card, ID card).' },
      points: [{ en: '+ Fast and cheap.  – Stripe can be damaged by magnets; data can be copied.', tr: '+ Hızlı ve ucuz.  – Şerit mıknatısla bozulabilir; veri kopyalanabilir.' }],
    },
    {
      id: 'chip',
      title: { en: 'Chip and PIN reader', tr: 'Çip ve PIN okuyucu' },
      text: { tr: 'Karttaki çipi okur ve kullanıcının PIN girmesini ister (mağazada kartla ödeme).', en: 'Reads the chip on a card and asks the user to enter a PIN (card payments in shops).' },
      points: [{ en: '+ More secure than a magnetic stripe.  – Others may see the PIN being entered.', tr: '+ Manyetik şeritten daha güvenli.  – Başkaları girilen PIN’i görebilir.' }],
    },
    {
      id: 'rfid',
      title: { en: 'RFID reader', tr: 'RFID okuyucu' },
      text: { tr: 'Radyo dalgalarıyla RFID etiketlerini temas olmadan okur (temassız ödeme, stok ve hayvan takibi, pasaportlar).', en: 'Reads RFID tags using radio waves, without contact (contactless payment, tracking stock and animals, passports).' },
      points: [{ en: '+ Reads from a distance and many tags at once.  – Tags can be read without the owner knowing.', tr: '+ Uzaktan ve aynı anda çok etiket okur.  – Etiketler sahibi bilmeden okunabilir.' }],
    },
    {
      id: 'omr',
      title: { en: 'OMR – Optical Mark Reader', tr: 'OMR – Optik İşaret Okuyucu' },
      text: { tr: 'Formda belirli yerlere yapılan işaretleri okur (çoktan seçmeli cevap kâğıtları, piyango kuponları).', en: 'Reads marks made in set places on a form (multiple-choice answer sheets, lottery tickets).' },
      points: [{ en: '+ Very fast and accurate.  – Marks must be in the right place; special forms are needed.', tr: '+ Çok hızlı ve doğru.  – İşaretler doğru yerde olmalı; özel form gerekir.' }],
    },
    {
      id: 'ocr',
      title: { en: 'OCR – Optical Character Recognition', tr: 'OCR – Optik Karakter Tanıma' },
      text: { tr: 'Taranan metni düzenlenebilir metne çevirir (belgeleri dijitalleştirme, araç plakası tanıma, pasaport).', en: 'Converts scanned text into editable text (digitising documents, number-plate recognition, passports).' },
      points: [{ en: '+ No need to retype.  – Mistakes with handwriting or poor print.', tr: '+ Yeniden yazmaya gerek yok.  – El yazısı veya kötü baskıda hata yapar.' }],
    },
    {
      id: 'barcode',
      title: { en: 'Bar code reader', tr: 'Barkod okuyucu' },
      text: { tr: 'Siyah-beyaz çizgilerden oluşan barkodu ışıkla okur (market kasası, stok kontrolü, kütüphane).', en: 'Reads a bar code of black and white lines using light (supermarket checkout, stock control, libraries).' },
      points: [{ en: '+ Fast, accurate; stock can be updated automatically.  – Damaged bar codes cannot be read.', tr: '+ Hızlı, doğru; stok otomatik güncellenir.  – Hasarlı barkod okunamaz.' }],
    },
    {
      id: 'qr',
      title: { en: 'QR scanner', tr: 'QR tarayıcı' },
      text: { tr: 'Kare şeklindeki QR kodunu okur; çoğunlukla telefon kamerasıyla (web sitesi, menü, bilet).', en: 'Reads a square QR code, usually with a phone camera (websites, menus, tickets).' },
      points: [{ en: '+ Holds more data than a bar code.  – A QR code can link to a harmful website.', tr: '+ Barkoddan daha fazla veri tutar.  – QR kod zararlı bir siteye yönlendirebilir.' }],
    },
  ],
  compare: {
    title: { en: 'Bar code, QR code and RFID', tr: 'Barkod, QR kod ve RFID' },
    columns: ['Bar code', 'QR code', 'RFID'],
    rows: [
      { label: { en: 'Read by', tr: 'Okuma' }, cells: [{ en: 'Light (laser)', tr: 'Işık (lazer)' }, { en: 'Camera', tr: 'Kamera' }, { en: 'Radio waves', tr: 'Radyo dalgaları' }] },
      { label: { en: 'Line of sight needed?', tr: 'Görüş hattı gerekir mi?' }, cells: [{ en: 'Yes', tr: 'Evet' }, { en: 'Yes', tr: 'Evet' }, { en: 'No', tr: 'Hayır' }] },
      { label: { en: 'Amount of data', tr: 'Veri miktarı' }, cells: [{ en: 'Small', tr: 'Az' }, { en: 'More', tr: 'Daha fazla' }, { en: 'More', tr: 'Daha fazla' }] },
      { label: { en: 'Example', tr: 'Örnek' }, cells: [{ en: 'Supermarket', tr: 'Market' }, { en: 'Restaurant menu', tr: 'Restoran menüsü' }, { en: 'Contactless card', tr: 'Temassız kart' }] },
    ],
  },
  sort: {
    title: { en: 'OMR or OCR?', tr: 'OMR mi, OCR mi?' },
    categories: [
      { id: 'omr', label: { en: 'OMR (marks)', tr: 'OMR (işaretler)' } },
      { id: 'ocr', label: { en: 'OCR (text)', tr: 'OCR (metin)' } },
    ],
    items: [
      { id: '1', text: { en: 'Multiple-choice exam sheet', tr: 'Çoktan seçmeli sınav kâğıdı' }, cat: 'omr' },
      { id: '2', text: { en: 'Reading a car number plate', tr: 'Araç plakası okumak' }, cat: 'ocr' },
      { id: '3', text: { en: 'Lottery ticket', tr: 'Piyango kuponu' }, cat: 'omr' },
      { id: '4', text: { en: 'Turning a printed letter into a document', tr: 'Basılı mektubu belgeye çevirmek' }, cat: 'ocr' },
      { id: '5', text: { en: 'Class register with shaded boxes', tr: 'Kutuları karalanan yoklama formu' }, cat: 'omr' },
      { id: '6', text: { en: 'Passport page text', tr: 'Pasaport sayfasındaki metin' }, cat: 'ocr' },
    ],
  },
  match: [
    { id: 'mag', en: 'Magnetic stripe reader', tr: 'Manyetik şerit okuyucu', desc: { en: 'Card is swiped', tr: 'Kart geçirilir' } },
    { id: 'chip', en: 'Chip and PIN reader', tr: 'Çip ve PIN okuyucu', desc: { en: 'Reads a chip, PIN entered', tr: 'Çipi okur, PIN girilir' } },
    { id: 'rfid', en: 'RFID reader', tr: 'RFID okuyucu', desc: { en: 'Reads tags by radio waves', tr: 'Etiketleri radyo dalgasıyla okur' } },
    { id: 'omr', en: 'OMR', tr: 'Optik işaret okuyucu', desc: { en: 'Reads marks on a form', tr: 'Formdaki işaretleri okur' } },
    { id: 'ocr', en: 'OCR', tr: 'Optik karakter tanıma', desc: { en: 'Turns scanned text into editable text', tr: 'Taranan metni düzenlenebilir yapar' } },
    { id: 'qr', en: 'QR scanner', tr: 'QR tarayıcı', desc: { en: 'Reads square codes with a camera', tr: 'Kare kodları kamerayla okur' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A farm wants to track each cow automatically when it walks through a gate.', tr: 'Bir çiftlik her ineği kapıdan geçerken otomatik olarak takip etmek istiyor.' },
      options: [
        { id: 'rfid', label: { en: 'RFID', tr: 'RFID' } },
        { id: 'barcode', label: { en: 'Bar code', tr: 'Barkod' } },
        { id: 'omr', label: { en: 'OMR', tr: 'OMR' } },
      ],
      answer: 'rfid',
      reasons: [
        { en: 'Tags are read by radio waves from a distance, with no need to line up a scanner.', tr: 'Etiketler radyo dalgasıyla uzaktan okunur; okuyucuyu hizalamaya gerek yoktur.' },
        { en: 'It reads pencil marks on paper.', tr: 'Kâğıttaki kalem işaretlerini okur.' },
        { en: 'It needs the cow to stand still in front of a laser.', tr: 'İneğin lazer önünde durması gerekir.' },
      ],
      correctReason: 0,
      explain: { en: 'RFID needs no contact or line of sight.', tr: 'RFID temas veya görüş hattı gerektirmez.' },
    },
    {
      id: 's2',
      situation: { en: 'A school marks 500 multiple-choice answer sheets.', tr: 'Bir okul 500 çoktan seçmeli cevap kâğıdını okuyacak.' },
      options: [
        { id: 'omr', label: { en: 'OMR', tr: 'OMR' } },
        { id: 'ocr', label: { en: 'OCR', tr: 'OCR' } },
        { id: 'chip', label: { en: 'Chip and PIN', tr: 'Çip ve PIN' } },
      ],
      answer: 'omr',
      reasons: [
        { en: 'It reads the position of marks quickly and accurately.', tr: 'İşaretlerin yerini hızlı ve doğru okur.' },
        { en: 'It converts handwriting into text.', tr: 'El yazısını metne çevirir.' },
        { en: 'It needs a PIN for each sheet.', tr: 'Her kâğıt için PIN gerekir.' },
      ],
      correctReason: 0,
      explain: { en: 'OMR is designed for marks in set places.', tr: 'OMR belirli yerlere yapılan işaretler için tasarlanmıştır.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which device reads tags using radio waves?', tr: 'Hangi aygıt etiketleri radyo dalgalarıyla okur?' },
      options: [
        { en: 'RFID reader', tr: 'RFID okuyucu' },
        { en: 'Bar code reader', tr: 'Barkod okuyucu' },
        { en: 'OMR', tr: 'OMR' },
      ],
      answer: 0,
      explain: { en: 'RFID = Radio Frequency Identification.', tr: 'RFID = Radyo Frekanslı Tanımlama.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'Chip and PIN is more secure than a magnetic stripe.', tr: 'Çip ve PIN, manyetik şeritten daha güvenlidir.' },
      answer: true,
      explain: { en: 'True. The chip is harder to copy and a PIN is needed.', tr: 'Doğru. Çipin kopyalanması daha zordur ve PIN gerekir.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: '___ converts scanned text into editable text.', tr: '___ taranan metni düzenlenebilir metne çevirir.' },
      bank: ['OCR', 'OMR', 'RFID', 'PIN'],
      answer: 'OCR',
      explain: { en: 'Optical Character Recognition.', tr: 'Optik Karakter Tanıma.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'Why are bar codes used at supermarket checkouts?', tr: 'Market kasalarında barkod neden kullanılır?' },
      options: [
        { en: 'Fast and accurate; stock is updated automatically', tr: 'Hızlı ve doğru; stok otomatik güncellenir' },
        { en: 'They can be read from far away', tr: 'Çok uzaktan okunabilir' },
        { en: 'They hold a photo of the product', tr: 'Ürünün fotoğrafını tutar' },
      ],
      answer: 0,
      explain: { en: 'Scanning avoids typing errors and updates stock.', tr: 'Okutmak yazım hatasını önler ve stoğu günceller.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Describe',
      marks: 2,
      prompt: { en: 'Describe how RFID is used in contactless payment.', tr: 'Temassız ödemede RFID’nin nasıl kullanıldığını açıklayınız.' },
      points: [
        { point: { en: 'The card contains an RFID chip/tag.', tr: 'Kartta bir RFID çip/etiket vardır.' }, keywords: [['tag'], ['chip']] },
        { point: { en: 'It is held near the reader and data is read by radio waves without contact.', tr: 'Okuyucuya yaklaştırılır; veri temas olmadan radyo dalgalarıyla okunur.' }, keywords: [['radio'], ['near'], ['contact'], ['close']] },
      ],
      model: { en: 'The card contains an RFID tag. When it is held near the reader, the data is read using radio waves without touching.', tr: 'Kartta bir RFID etiketi vardır. Okuyucuya yaklaştırıldığında veri dokunmadan radyo dalgalarıyla okunur.' },
    },
    {
      id: 'e2',
      command: 'Compare',
      marks: 3,
      prompt: { en: 'Compare OMR and OCR.', tr: 'OMR ve OCR’yi karşılaştırınız.' },
      points: [
        { point: { en: 'Both read data optically / from paper, without typing.', tr: 'İkisi de veriyi optik olarak / kâğıttan, yazmadan okur.' }, keywords: [['both']] },
        { point: { en: 'OMR reads marks in set positions, e.g. answer sheets.', tr: 'OMR belirli yerlerdeki işaretleri okur, ör. cevap kâğıtları.' }, keywords: [['mark'], ['answer sheet'], ['multiple']] },
        { point: { en: 'OCR reads characters/text and converts them to editable text.', tr: 'OCR karakterleri/metni okur ve düzenlenebilir metne çevirir.' }, keywords: [['text'], ['character'], ['editable']] },
      ],
      model: { en: 'Both read data from paper without typing. OMR reads marks in set positions, such as answer sheets, whereas OCR reads printed characters and converts them into editable text.', tr: 'İkisi de veriyi yazmadan kâğıttan okur. OMR cevap kâğıdı gibi belirli yerlerdeki işaretleri okur; OCR ise basılı karakterleri okuyup düzenlenebilir metne çevirir.' },
    },
  ],
  vocab: [
    { en: 'Direct data entry', tr: 'Doğrudan veri girişi' },
    { en: 'Magnetic stripe', tr: 'Manyetik şerit' },
    { en: 'Chip and PIN', tr: 'Çip ve PIN' },
    { en: 'RFID tag', tr: 'RFID etiketi' },
    { en: 'Optical Mark Recognition', tr: 'Optik işaret tanıma' },
    { en: 'Optical Character Recognition', tr: 'Optik karakter tanıma' },
    { en: 'Bar code', tr: 'Barkod' },
    { en: 'Contactless', tr: 'Temassız' },
  ],
}
