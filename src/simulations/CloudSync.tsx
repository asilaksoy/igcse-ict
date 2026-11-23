import { useState } from 'react'
import type { Bi } from '../data/types'
import { BiText } from '../components/Bilingual'
import { Button } from '../components/ui'
import { Icon } from '../components/Icon'

/** Upload, download and synchronise one file between two devices through the cloud. */
export function CloudSync({ onUse }: { onUse: () => void }) {
  const [online, setOnline] = useState(true)
  const [tablet, setTablet] = useState(1)
  const [cloud, setCloud] = useState(0)
  const [laptop, setLaptop] = useState(0)
  const [msg, setMsg] = useState<Bi>({ en: 'Edit the file on the tablet, then upload it.', tr: 'Dosyayı tablette düzenle, sonra yükle.' })

  const needNet = (fn: () => void) => {
    onUse()
    if (!online) {
      setMsg({ en: 'No internet connection – the cloud cannot be reached.', tr: 'İnternet bağlantısı yok – buluta erişilemiyor.' })
      return
    }
    fn()
  }

  const Box = ({ name, v, icon }: { name: string; v: number; icon: string }) => (
    <div className="card flex flex-col items-center gap-2 p-4 text-center">
      <Icon name={icon} className="size-10 text-cyan-glow" />
      <div className="font-semibold">{name}</div>
      <div className={`rounded-lg px-3 py-1 font-mono text-sm ${v ? 'bg-ink-800' : 'text-ink-400'}`}>{v ? `project.docx v${v}` : '— empty —'}</div>
    </div>
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Internet · İnternet</span>
        <button onClick={() => setOnline(!online)} className={`tap rounded-xl px-4 font-semibold ${online ? 'bg-ok/20 text-ok' : 'bg-bad/20 text-bad'}`}>
          {online ? 'ON · Açık' : 'OFF · Kapalı'}
        </button>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <Box name="Tablet" v={tablet} icon="tablet" />
        <Box name="Cloud · Bulut" v={cloud} icon="cloud" />
        <Box name="Laptop" v={laptop} icon="laptop" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-2">
          <Button variant="soft" onClick={() => { onUse(); setTablet(Math.max(tablet, cloud) + 1); setMsg({ en: 'File edited on the tablet (not saved to the cloud yet).', tr: 'Dosya tablette düzenlendi (henüz buluta kaydedilmedi).' }) }}>
            Edit · Düzenle
          </Button>
          <Button onClick={() => needNet(() => { setCloud(tablet); setMsg({ en: 'Uploaded: the cloud now has the latest version.', tr: 'Yüklendi: bulutta artık en son sürüm var.' }) })}>
            Upload ↑ · Yükle
          </Button>
        </div>
        <div className="grid place-items-center text-center text-sm text-ink-400">Stored on remote servers · Uzak sunucularda saklanır</div>
        <div className="flex flex-col gap-2">
          <Button onClick={() => needNet(() => { if (!cloud) return setMsg({ en: 'Nothing in the cloud yet.', tr: 'Bulutta henüz dosya yok.' }); setLaptop(cloud); setMsg({ en: 'Synchronised: the laptop downloaded the same version.', tr: 'Senkronize edildi: dizüstü aynı sürümü indirdi.' }) })}>
            Sync ↓ · Senkronize et
          </Button>
          <Button variant="soft" disabled={!laptop} onClick={() => { onUse(); setLaptop(Math.max(laptop, cloud) + 1); setMsg({ en: 'Edited on the laptop. Upload it so the tablet can sync.', tr: 'Dizüstünde düzenlendi. Tabletin senkronize olması için yükle.' }) }}>
            Edit · Düzenle
          </Button>
          <Button variant="soft" disabled={!laptop} onClick={() => needNet(() => { setCloud(laptop); setTablet(laptop); setMsg({ en: 'Uploaded and synchronised to the tablet. Both devices have the same file.', tr: 'Yüklendi ve tablete senkronize edildi. İki cihazda da aynı dosya var.' }) })}>
            Upload ↑ · Yükle
          </Button>
        </div>
      </div>
      <BiText t={msg} className="rounded-xl bg-ink-800 p-4" />
    </div>
  )
}
