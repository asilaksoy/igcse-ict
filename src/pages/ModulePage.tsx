import { useEffect, useState } from 'react'
import type { ModuleContent, SectionId } from '../data/types'
import { getModule } from '../data/modules'
import { GenericModule } from '../components/GenericModule'
import { Button } from '../components/ui'
import { networkDevices } from '../modules/network-devices/content'
import { wireless } from '../modules/wireless-technologies/content'
import { cloud } from '../modules/cloud-computing/content'
import { environments } from '../modules/network-environments/content'
import { networkTypes } from '../modules/network-types/content'
import { security } from '../modules/network-security/content'
import { authentication } from '../modules/authentication/content'
import { conferencing } from '../modules/electronic-conferencing/content'

const CONTENT: Record<string, ModuleContent> = {
  'network-devices': networkDevices,
  'wireless-technologies': wireless,
  'cloud-computing': cloud,
  'network-environments': environments,
  'network-types': networkTypes,
  'network-security': security,
  authentication,
  'electronic-conferencing': conferencing,
}

export function ModulePage({ id, home }: { id: string; home: () => void }) {
  const module = getModule(id)
  const [section, setSection] = useState<SectionId>('objectives')
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [section, id])

  const content = CONTENT[id]
  if (!module || !content)
    return (
      <div className="card p-8 text-center">
        <p className="mb-4">Module not found · Modül bulunamadı</p>
        <Button onClick={home}>Dashboard</Button>
      </div>
    )
  return <GenericModule key={id} module={module} content={content} section={section} onSection={setSection} />
}
