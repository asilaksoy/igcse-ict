import type { ModuleContent } from '../../data/types'

const yesNo = { yes: { en: 'Yes', tr: 'Evet' }, no: { en: 'No', tr: 'Hayır' } }

export const networkDevices: ModuleContent = {
  sim: 'network',
  learn: [
    {
      id: 'router',
      art: 'router',
      title: { en: 'Router', tr: 'Yönlendirici' },
      text: {
        tr: 'Farklı ağları birbirine bağlar; örneğin okul ağını internete. Veri paketinin hedef IP adresine bakar ve paketi doğru yere gönderir.',
        en: 'Connects different networks, e.g. a school LAN to the internet. It reads the destination IP address of a data packet and sends it to the right place.',
      },
      points: [
        { en: 'Stores IP addresses in a routing table.', tr: 'IP adreslerini yönlendirme tablosunda saklar.' },
        { en: 'Can give IP addresses to devices.', tr: 'Cihazlara IP adresi verebilir.' },
      ],
    },
    {
      id: 'switch',
      art: 'switch',
      title: { en: 'Switch', tr: 'Anahtar' },
      text: {
        tr: 'Bir LAN’daki cihazları bağlar. Paketin MAC adresine bakar ve veriyi yalnızca doğru cihaza gönderir.',
        en: 'Connects devices in a LAN. It reads the MAC address and sends data only to the correct device.',
      },
      points: [{ en: 'Less traffic and more secure than a hub.', tr: 'Hub’a göre daha az trafik, daha güvenli.' }],
    },
    {
      id: 'hub',
      art: 'hub',
      title: { en: 'Hub', tr: 'Dağıtıcı' },
      text: {
        tr: 'Bir LAN’daki cihazları bağlar. Gelen veriyi bağlı tüm cihazlara gönderir.',
        en: 'Connects devices in a LAN. It sends data to all connected devices.',
      },
      points: [{ en: 'Cheap, but more traffic and less secure.', tr: 'Ucuz, ama daha fazla trafik ve daha az güvenli.' }],
    },
    {
      id: 'bridge',
      art: 'bridge',
      title: { en: 'Bridge', tr: 'Köprü' },
      text: {
        tr: 'Aynı protokolü kullanan iki LAN’ı birbirine bağlar. İnternete bağlanamaz.',
        en: 'Connects two LANs that use the same protocol. It cannot connect to the internet.',
      },
    },
    {
      id: 'nic',
      art: 'nic',
      title: { en: 'NIC', tr: 'Ağ arayüz kartı' },
      text: {
        tr: 'Bir cihazın ağa bağlanmasını sağlar. Kablolu veya kablosuz olabilir.',
        en: 'Lets a device connect to a network. It can be wired or wireless.',
      },
      points: [{ en: 'Has a unique MAC address set by the manufacturer.', tr: 'Üreticinin verdiği benzersiz bir MAC adresi vardır.' }],
    },
    {
      id: 'addresses',
      title: { en: 'MAC and IP address', tr: 'MAC ve IP adresi' },
      text: {
        tr: 'MAC adresi cihazın ağ kartına üretici tarafından verilir ve değişmez. IP adresi ağ tarafından verilir ve değişebilir.',
        en: 'A MAC address is given to the NIC by the manufacturer and does not change. An IP address is given by the network and can change.',
      },
      points: [
        { en: 'Switches use MAC addresses.', tr: 'Switch’ler MAC adreslerini kullanır.' },
        { en: 'Routers use IP addresses.', tr: 'Router’lar IP adreslerini kullanır.' },
      ],
    },
  ],
  compare: {
    title: { en: 'Comparing devices', tr: 'Cihazları karşılaştırma' },
    columns: ['Hub', 'Switch', 'Router', 'Bridge'],
    rows: [
      {
        label: { en: 'Connects', tr: 'Neyi bağlar' },
        cells: [
          { en: 'Devices in a LAN', tr: 'LAN’daki cihazlar' },
          { en: 'Devices in a LAN', tr: 'LAN’daki cihazlar' },
          { en: 'Networks', tr: 'Ağlar' },
          { en: 'Two LANs', tr: 'İki LAN' },
        ],
      },
      {
        label: { en: 'Sends data to', tr: 'Veriyi gönderir' },
        cells: [
          { en: 'All devices', tr: 'Tüm cihazlara' },
          { en: 'Correct device', tr: 'Doğru cihaza' },
          { en: 'Correct network', tr: 'Doğru ağa' },
          { en: 'Other LAN', tr: 'Diğer LAN’a' },
        ],
      },
      {
        label: { en: 'Uses', tr: 'Kullanır' },
        cells: [{ en: '—', tr: '—' }, { en: 'MAC address', tr: 'MAC adresi' }, { en: 'IP address', tr: 'IP adresi' }, { en: '—', tr: '—' }],
      },
      { label: { en: 'Internet?', tr: 'İnternet?' }, cells: [yesNo.no, yesNo.no, yesNo.yes, yesNo.no] },
    ],
  },
  match: [
    { id: 'router', en: 'Router', tr: 'Yönlendirici', desc: { en: 'Connects a LAN to the internet', tr: 'LAN’ı internete bağlar' } },
    { id: 'switch', en: 'Switch', tr: 'Anahtar', desc: { en: 'Sends data only to the correct device', tr: 'Veriyi yalnızca doğru cihaza gönderir' } },
    { id: 'hub', en: 'Hub', tr: 'Dağıtıcı', desc: { en: 'Sends data to every device', tr: 'Veriyi her cihaza gönderir' } },
    { id: 'bridge', en: 'Bridge', tr: 'Köprü', desc: { en: 'Joins two LANs', tr: 'İki LAN’ı birleştirir' } },
    { id: 'nic', en: 'NIC', tr: 'Ağ arayüz kartı', desc: { en: 'Lets a device join a network', tr: 'Cihazın ağa bağlanmasını sağlar' } },
    { id: 'mac', en: 'MAC address', tr: 'MAC adresi', desc: { en: 'Unique ID set by the manufacturer', tr: 'Üreticinin verdiği benzersiz kimlik' } },
  ],
  scenarios: [
    {
      id: 's1',
      situation: { en: 'A café wants its customers to use the internet.', tr: 'Bir kafe, müşterilerinin internete bağlanmasını istiyor.' },
      options: [
        { id: 'router', label: { en: 'Router', tr: 'Router' } },
        { id: 'switch', label: { en: 'Switch', tr: 'Switch' } },
        { id: 'hub', label: { en: 'Hub', tr: 'Hub' } },
        { id: 'bridge', label: { en: 'Bridge', tr: 'Köprü' } },
      ],
      answer: 'router',
      reasons: [
        { en: 'It connects a LAN to the internet.', tr: 'LAN’ı internete bağlar.' },
        { en: 'It sends data to all devices.', tr: 'Veriyi tüm cihazlara gönderir.' },
        { en: 'It joins two LANs.', tr: 'İki LAN’ı birleştirir.' },
      ],
      correctReason: 0,
      explain: { en: 'Only a router connects a LAN to the internet.', tr: 'LAN’ı internete yalnızca router bağlar.' },
    },
    {
      id: 's2',
      situation: { en: 'An exam office has 20 PCs. Files must reach only the correct PC.', tr: 'Sınav ofisinde 20 bilgisayar var. Dosyalar yalnızca doğru bilgisayara gitmeli.' },
      options: [
        { id: 'hub', label: { en: 'Hub', tr: 'Hub' } },
        { id: 'switch', label: { en: 'Switch', tr: 'Switch' } },
        { id: 'nic', label: { en: 'NIC', tr: 'NIC' } },
        { id: 'bridge', label: { en: 'Bridge', tr: 'Köprü' } },
      ],
      answer: 'switch',
      reasons: [
        { en: 'It is the cheapest device.', tr: 'En ucuz cihazdır.' },
        { en: 'It uses MAC addresses to send data only to the correct PC.', tr: 'MAC adreslerini kullanarak veriyi yalnızca doğru bilgisayara gönderir.' },
        { en: 'It connects to the internet.', tr: 'İnternete bağlanır.' },
      ],
      correctReason: 1,
      explain: { en: 'A hub would send the files to all 20 PCs. A switch sends them only to the correct one.', tr: 'Hub dosyaları 20 bilgisayarın hepsine gönderirdi. Switch yalnızca doğru olana gönderir.' },
    },
    {
      id: 's3',
      situation: { en: 'Two LANs in a school must work as one network.', tr: 'Bir okuldaki iki LAN tek ağ gibi çalışmalı.' },
      options: [
        { id: 'nic', label: { en: 'NIC', tr: 'NIC' } },
        { id: 'hub', label: { en: 'Hub', tr: 'Hub' } },
        { id: 'bridge', label: { en: 'Bridge', tr: 'Köprü' } },
        { id: 'router', label: { en: 'Router', tr: 'Router' } },
      ],
      answer: 'bridge',
      reasons: [
        { en: 'It connects two LANs that use the same protocol.', tr: 'Aynı protokolü kullanan iki LAN’ı bağlar.' },
        { en: 'It gives each PC a MAC address.', tr: 'Her bilgisayara MAC adresi verir.' },
        { en: 'It stores websites.', tr: 'Web sitelerini saklar.' },
      ],
      correctReason: 0,
      explain: { en: 'Joining two LANs is the job of a bridge.', tr: 'İki LAN’ı birleştirmek köprünün görevidir.' },
    },
  ],
  check: [
    {
      kind: 'mcq',
      id: 'c1',
      prompt: { en: 'Which device connects a LAN to the internet?', tr: 'Hangi cihaz LAN’ı internete bağlar?' },
      options: [
        { en: 'Hub', tr: 'Hub' },
        { en: 'Router', tr: 'Router' },
        { en: 'NIC', tr: 'NIC' },
        { en: 'Bridge', tr: 'Köprü' },
      ],
      answer: 1,
      explain: { en: 'A router connects networks, e.g. a LAN to the internet.', tr: 'Router ağları bağlar; ör. LAN’ı internete.' },
    },
    {
      kind: 'tf',
      id: 'c2',
      prompt: { en: 'A hub sends data only to the correct device.', tr: 'Hub veriyi yalnızca doğru cihaza gönderir.' },
      answer: false,
      explain: { en: 'False. A hub sends data to all devices. A switch sends it only to the correct one.', tr: 'Yanlış. Hub veriyi tüm cihazlara gönderir. Yalnızca doğru cihaza gönderen switch’tir.' },
    },
    {
      kind: 'fill',
      id: 'c3',
      prompt: { en: 'A switch uses the ___ address.', tr: 'Switch ___ adresini kullanır.' },
      bank: ['MAC', 'IP', 'email', 'web'],
      answer: 'MAC',
      explain: { en: 'Switches use MAC addresses; routers use IP addresses.', tr: 'Switch MAC, router IP adresini kullanır.' },
    },
    {
      kind: 'mcq',
      id: 'c4',
      prompt: { en: 'What does a device need to connect to a network?', tr: 'Bir cihazın ağa bağlanması için ne gerekir?' },
      options: [
        { en: 'A bridge', tr: 'Köprü' },
        { en: 'A hub', tr: 'Hub' },
        { en: 'A NIC', tr: 'NIC' },
        { en: 'A website', tr: 'Web sitesi' },
      ],
      answer: 2,
      explain: { en: 'Every device needs a NIC (wired or wireless).', tr: 'Her cihazın bir NIC’e (kablolu veya kablosuz) ihtiyacı vardır.' },
    },
    {
      kind: 'tf',
      id: 'c5',
      prompt: { en: 'A bridge can connect a LAN to the internet.', tr: 'Köprü bir LAN’ı internete bağlayabilir.' },
      answer: false,
      explain: { en: 'False. A bridge only connects LANs. You need a router for the internet.', tr: 'Yanlış. Köprü yalnızca LAN’ları bağlar. İnternet için router gerekir.' },
    },
    {
      kind: 'fill',
      id: 'c6',
      prompt: { en: 'A MAC address is set by the ___.', tr: 'MAC adresini ___ belirler.' },
      bank: ['manufacturer', 'router', 'user', 'teacher'],
      answer: 'manufacturer',
      explain: { en: 'The manufacturer gives the NIC its MAC address.', tr: 'NIC’e MAC adresini üretici verir.' },
    },
  ],
  exam: [
    {
      id: 'e1',
      command: 'Define',
      marks: 1,
      prompt: { en: 'Define the term router.', tr: 'Router terimini tanımlayınız.' },
      points: [
        {
          point: { en: 'A device that connects networks / connects a LAN to the internet / routes data packets.', tr: 'Ağları bağlayan / LAN’ı internete bağlayan / veri paketlerini yönlendiren cihaz.' },
          keywords: [['connect', 'network'], ['route'], ['forward'], ['lan', 'internet']],
        },
      ],
      model: { en: 'A device that connects networks together, e.g. a LAN to the internet, and routes data packets.', tr: 'Ağları birbirine (ör. LAN’ı internete) bağlayan ve veri paketlerini yönlendiren cihaz.' },
    },
    {
      id: 'e2',
      command: 'State',
      marks: 2,
      prompt: { en: 'State two functions of a router.', tr: 'Router’ın iki işlevini belirtiniz.' },
      points: [
        { point: { en: 'Connects a LAN / devices to the internet.', tr: 'LAN’ı / cihazları internete bağlar.' }, keywords: [['internet'], ['connect', 'network']] },
        { point: { en: 'Routes data packets to the correct destination.', tr: 'Veri paketlerini doğru hedefe yönlendirir.' }, keywords: [['route'], ['forward'], ['direct']] },
        { point: { en: 'Stores IP addresses / routing table.', tr: 'IP adreslerini / yönlendirme tablosunu saklar.' }, keywords: [['store'], ['table']] },
        { point: { en: 'Assigns IP addresses.', tr: 'IP adresi atar.' }, keywords: [['assign'], ['give', 'ip']] },
      ],
      model: { en: 'It connects a LAN to the internet. It routes data packets to the correct destination.', tr: 'LAN’ı internete bağlar. Veri paketlerini doğru hedefe yönlendirir.' },
    },
    {
      id: 'e3',
      command: 'Describe',
      marks: 3,
      prompt: { en: 'Describe how a switch sends data to a device.', tr: 'Switch’in veriyi bir cihaza nasıl gönderdiğini açıklayınız.' },
      points: [
        { point: { en: 'Receives a data packet.', tr: 'Bir veri paketi alır.' }, keywords: [['receive'], ['packet']] },
        { point: { en: 'Reads the destination MAC address.', tr: 'Hedef MAC adresini okur.' }, keywords: [['mac']] },
        { point: { en: 'Sends the packet only to the correct device.', tr: 'Paketi yalnızca doğru cihaza gönderir.' }, keywords: [['only'], ['correct'], ['intended']] },
      ],
      model: { en: 'The switch receives a data packet, reads the destination MAC address and sends the packet only to that device.', tr: 'Switch bir veri paketi alır, hedef MAC adresini okur ve paketi yalnızca o cihaza gönderir.' },
    },
    {
      id: 'e4',
      command: 'Explain',
      marks: 2,
      prompt: { en: 'Explain why a switch is better than a hub.', tr: 'Switch’in neden hub’dan daha iyi olduğunu açıklayınız.' },
      points: [
        { point: { en: 'A switch sends data only to the correct device (a hub sends to all).', tr: 'Switch veriyi yalnızca doğru cihaza gönderir (hub herkese).' }, keywords: [['only'], ['all'], ['every']] },
        { point: { en: 'So there is less traffic / it is more secure.', tr: 'Bu yüzden trafik azalır / daha güvenlidir.' }, keywords: [['traffic'], ['secur'], ['faster']] },
      ],
      model: { en: 'A switch sends data only to the correct device, but a hub sends it to all devices. So a switch creates less traffic and is more secure.', tr: 'Switch veriyi yalnızca doğru cihaza, hub ise tüm cihazlara gönderir. Bu yüzden switch daha az trafik oluşturur ve daha güvenlidir.' },
    },
  ],
  vocab: [
    { en: 'Router', tr: 'Yönlendirici' },
    { en: 'Switch', tr: 'Anahtar' },
    { en: 'Hub', tr: 'Dağıtıcı' },
    { en: 'Bridge', tr: 'Köprü' },
    { en: 'NIC', tr: 'Ağ arayüz kartı' },
    { en: 'Data packet', tr: 'Veri paketi' },
    { en: 'MAC address', tr: 'MAC adresi' },
    { en: 'IP address', tr: 'IP adresi' },
    { en: 'Protocol', tr: 'Protokol' },
    { en: 'Network traffic', tr: 'Ağ trafiği' },
  ],
}
