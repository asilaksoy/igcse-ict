import type { ModuleContent } from '../../data/types'

export const environments: ModuleContent = {
  learn: [
    {
      id: 'internet',
      title: { en: 'Internet', tr: 'İnternet' },
      text: {
        tr: 'Dünya çapında ağlardan oluşan, herkese açık bir ağdır. Tek bir kişiye veya kuruma ait değildir.',
        en: 'A worldwide, public network of networks. It is not owned by one person or organisation.',
      },
      points: [{ en: 'Information may not be reliable – anyone can publish.', tr: 'Bilgi güvenilir olmayabilir – herkes yayın yapabilir.' }],
    },
    {
      id: 'intranet',
      title: { en: 'Intranet', tr: 'İntranet' },
      text: {
        tr: 'Bir kurumun içindeki özel ağdır. Yalnızca çalışanlar veya üyeler kullanabilir. İnternetle aynı teknolojiyi (web sayfaları, tarayıcı) kullanır.',
        en: 'A private network inside an organisation. Only its staff or members can use it. It uses the same technology as the internet (web pages, browser).',
      },
      example: { en: 'A school intranet with timetables and homework for students and teachers.', tr: 'Öğrenci ve öğretmenler için ders programı ve ödevlerin olduğu okul intraneti.' },
    },
    {
      id: 'extranet',
      title: { en: 'Extranet', tr: 'Ekstranet' },
      text: {
        tr: 'İntranetin, kurum dışındaki seçilmiş kişilere (ör. veliler, tedarikçiler) giriş yaparak açılan bölümüdür.',
        en: 'Part of an intranet that selected outside users (e.g. parents, suppliers) can use by logging in.',
      },
      example: { en: 'Parents log in to see their child’s grades.', tr: 'Veliler giriş yapıp çocuklarının notlarını görür.' },
    },
  ],
  compare: {
    title: { en: 'Internet, intranet and extranet', tr: 'İnternet, intranet ve ekstranet' },
    columns: ['Internet', 'Intranet', 'Extranet'],
    rows: [
      { label: { en: 'Who can use it?', tr: 'Kim kullanabilir?' }, cells: [{ en: 'Everyone', tr: 'Herkes' }, { en: 'Members only', tr: 'Yalnızca üyeler' }, { en: 'Members + selected outsiders', tr: 'Üyeler + seçilmiş dışarıdakiler' }] },
      { label: { en: 'Public or private?', tr: 'Açık mı, özel mi?' }, cells: [{ en: 'Public', tr: 'Açık' }, { en: 'Private', tr: 'Özel' }, { en: 'Private', tr: 'Özel' }] },
      { label: { en: 'Login needed?', tr: 'Giriş gerekir mi?' }, cells: [{ en: 'No', tr: 'Hayır' }, { en: 'Yes', tr: 'Evet' }, { en: 'Yes', tr: 'Evet' }] },
      { label: { en: 'Information', tr: 'Bilgi' }, cells: [{ en: 'Not always reliable', tr: 'Her zaman güvenilir değil' }, { en: 'About the organisation', tr: 'Kurumla ilgili' }, { en: 'Shared with partners', tr: 'Ortaklarla paylaşılan' }] },
    ],
  },
  sort: {
    title: { en: 'Internet, intranet or extranet?', tr: 'İnternet mi, intranet mi, ekstranet mi?' },
    categories: [
      { id: 'internet', label: { en: 'Internet', tr: 'İnternet' } },
      { id: 'intranet', label: { en: 'Intranet', tr: 'İntranet' } },
      { id: 'extranet', label: { en: 'Extranet', tr: 'Ekstranet' } },
    ],
    items: [
      { id: '1', text: { en: 'Searching for news', tr: 'Haber aramak' }, cat: 'internet' },
      { id: '2', text: { en: 'Staff-only school timetable', tr: 'Yalnızca personele okul programı' }, cat: 'intranet' },
      { id: '3', text: { en: 'Parents checking grades', tr: 'Velilerin not kontrolü' }, cat: 'extranet' },
      { id: '4', text: { en: 'Watching a public video', tr: 'Herkese açık video izlemek' }, cat: 'internet' },
      { id: '5', text: { en: 'Company rules for employees', tr: 'Çalışanlar için şirket kuralları' }, cat: 'intranet' },
      { id: '6', text: { en: 'Supplier checking orders', tr: 'Tedarikçinin siparişleri kontrolü' }, cat: 'extranet' },
    ],
  },
  match: [
    { id: 'internet', en: 'Internet', tr: 'İnternet', desc: { en: 'Worldwide public network', tr: 'Dünya çapında açık ağ' } },
    { id: 'intranet', en: 'Intranet', tr: 'İntranet', desc: { en: 'Private network for members', tr: 'Üyelere özel ağ' } },
    { id: 'extranet', en: 'Extranet', tr: 'Ekstranet', desc: { en: 'Intranet open to selected outsiders', tr: 'Seçilmiş dışarıdakilere açık intranet' } },
    { id: 'public', en: 'Public', tr: 'Herkese açık', desc: { en: 'Anyone can use it', tr: 'Herkes kullanabilir' } },
    { id: 'private', en: 'Private', tr: 'Özel', desc: { en: 'Only allowed users', tr: 'Yalnızca izinli kullanıcılar' } },
    { id: 'login', en: 'Log in', tr: 'Giriş yapmak', desc: { en: 'Enter a username and password', tr: 'Kullanıcı adı ve parola girmek' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A school wants to share exam timetables with its teachers only.', tr: 'Bir okul sınav programını yalnızca öğretmenleriyle paylaşmak istiyor.' },
      options: [
        { id: 'internet', label: { en: 'Internet', tr: 'İnternet' } },
        { id: 'intranet', label: { en: 'Intranet', tr: 'İntranet' } },
        { id: 'extranet', label: { en: 'Extranet', tr: 'Ekstranet' } },
      ],
      answer: 'intranet',
      reasons: [
        { en: 'It is private and only for members of the school.', tr: 'Özeldir ve yalnızca okul üyeleri içindir.' },
        { en: 'Everyone in the world can see it.', tr: 'Dünyadaki herkes görebilir.' },
        { en: 'It is only for outside users.', tr: 'Yalnızca dışarıdaki kullanıcılar içindir.' },
      ],
      correctReason: 0,
      explain: { en: 'An intranet is private to the organisation.', tr: 'İntranet kuruma özeldir.' },
    },
    {
      id: 's2',
      situation: { en: 'A company wants its suppliers to see stock levels.', tr: 'Bir şirket tedarikçilerinin stok durumunu görmesini istiyor.' },
      options: [
        { id: 'internet', label: { en: 'Internet', tr: 'İnternet' } },
        { id: 'intranet', label: { en: 'Intranet', tr: 'İntranet' } },
        { id: 'extranet', label: { en: 'Extranet', tr: 'Ekstranet' } },
      ],
      answer: 'extranet',
      reasons: [
        { en: 'Selected outside users can log in to part of the private network.', tr: 'Seçilmiş dış kullanıcılar özel ağın bir bölümüne giriş yapabilir.' },
        { en: 'It is open to the whole world.', tr: 'Tüm dünyaya açıktır.' },
        { en: 'Only employees can use it.', tr: 'Yalnızca çalışanlar kullanabilir.' },
      ],
      correctReason: 0,
      explain: { en: 'Suppliers are outsiders, so an extranet is used.', tr: 'Tedarikçiler dışarıdandır; bu yüzden ekstranet kullanılır.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which one is public?', tr: 'Hangisi herkese açıktır?' },
      options: [
        { en: 'Internet', tr: 'İnternet' },
        { en: 'Intranet', tr: 'İntranet' },
        { en: 'Extranet', tr: 'Ekstranet' },
      ],
      answer: 0,
      explain: { en: 'The internet is public; intranets and extranets are private.', tr: 'İnternet açıktır; intranet ve ekstranet özeldir.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'An intranet uses web pages and a browser, like the internet.', tr: 'İntranet, internet gibi web sayfaları ve tarayıcı kullanır.' },
      answer: true,
      explain: { en: 'True. They use the same technology.', tr: 'Doğru. Aynı teknolojiyi kullanırlar.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'Parents logging in to see grades use an ___.', tr: 'Notları görmek için giriş yapan veliler ___ kullanır.' },
      bank: ['extranet', 'intranet', 'internet', 'email'],
      answer: 'extranet',
      explain: { en: 'Parents are outside the school, so it is an extranet.', tr: 'Veliler okul dışındandır; bu bir ekstranettir.' },
    },
    {
      kind: 'tf',
      id: 'c4',
      prompt: { en: 'Information on the internet is always reliable.', tr: 'İnternetteki bilgi her zaman güvenilirdir.' },
      answer: false,
      explain: { en: 'False. Anyone can publish on the internet.', tr: 'Yanlış. İnternette herkes yayın yapabilir.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Define',
      marks: 1,
      prompt: { en: 'Define the term intranet.', tr: 'İntranet terimini tanımlayınız.' },
      points: [{ point: { en: 'A private network used only inside an organisation.', tr: 'Yalnızca bir kurum içinde kullanılan özel ağ.' }, keywords: [['private'], ['organisation'], ['organization'], ['company'], ['members'], ['staff']] }],
      model: { en: 'A private network that can only be used by members of an organisation.', tr: 'Yalnızca bir kurumun üyelerinin kullanabildiği özel ağ.' },
    },
    {
      id: 'e2',
      command: 'Describe',
      marks: 3,
      prompt: { en: 'Describe the differences between an intranet and an extranet.', tr: 'İntranet ile ekstranet arasındaki farkları açıklayınız.' },
      points: [
        { point: { en: 'An intranet is only for members/staff of the organisation.', tr: 'İntranet yalnızca kurumun üyeleri/çalışanları içindir.' }, keywords: [['intranet', 'staff'], ['intranet', 'member'], ['intranet', 'employee'], ['inside']] },
        { point: { en: 'An extranet lets selected outside users access it.', tr: 'Ekstranet seçilmiş dış kullanıcıların erişimine izin verir.' }, keywords: [['outside'], ['supplier'], ['customer'], ['parent'], ['external']] },
        { point: { en: 'Extranet users must log in / have permission.', tr: 'Ekstranet kullanıcıları giriş yapmalı / izinli olmalı.' }, keywords: [['log'], ['password'], ['permission'], ['authori']] },
      ],
      model: { en: 'An intranet can only be used by people inside the organisation. An extranet lets selected outside users, such as suppliers or parents, log in and use part of it.', tr: 'İntraneti yalnızca kurum içindekiler kullanabilir. Ekstranet ise tedarikçi veya veli gibi seçilmiş dış kullanıcıların giriş yapıp bir bölümünü kullanmasına izin verir.' },
    },
  ],
  vocab: [
    { en: 'Internet', tr: 'İnternet' },
    { en: 'Intranet', tr: 'İntranet' },
    { en: 'Extranet', tr: 'Ekstranet' },
    { en: 'Public', tr: 'Herkese açık' },
    { en: 'Private', tr: 'Özel' },
    { en: 'Organisation', tr: 'Kurum' },
    { en: 'Supplier', tr: 'Tedarikçi' },
    { en: 'Reliable', tr: 'Güvenilir' },
  ],
}
