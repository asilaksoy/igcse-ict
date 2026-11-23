import { useEffect, useState } from 'react'
import type { ModuleContent, SectionId } from '../data/types'
import { getModule } from '../data/modules'
import { GenericModule } from '../components/GenericModule'
import { networkDevices } from '../modules/network-devices/content'
import { wireless } from '../modules/wireless-technologies/content'
import { cloud } from '../modules/cloud-computing/content'
import { environments } from '../modules/network-environments/content'
import { networkTypes } from '../modules/network-types/content'
import { security } from '../modules/network-security/content'
import { authentication } from '../modules/authentication/content'
import { conferencing } from '../modules/electronic-conferencing/content'
import { hardwareSoftware } from '../modules/hardware-software/content'
import { mainComponents } from '../modules/main-components/content'
import { operatingSystems } from '../modules/operating-systems/content'
import { typesOfComputer } from '../modules/types-of-computer/content'
import { emergingTech } from '../modules/emerging-technologies/content'
import { inputDevices } from '../modules/input-devices/content'
import { directDataEntry } from '../modules/direct-data-entry/content'
import { outputDevices } from '../modules/output-devices/content'
import { storage } from '../modules/storage/content'

const CONTENT: Record<string, ModuleContent> = {
  'hardware-software': hardwareSoftware,
  'main-components': mainComponents,
  'operating-systems': operatingSystems,
  'types-of-computer': typesOfComputer,
  'emerging-technologies': emergingTech,
  'input-devices': inputDevices,
  'direct-data-entry': directDataEntry,
  'output-devices': outputDevices,
  storage,
  'network-devices': networkDevices,
  'wireless-technologies': wireless,
  'cloud-computing': cloud,
  'network-environments': environments,
  'network-types': networkTypes,
  'network-security': security,
  authentication,
  'electronic-conferencing': conferencing,
}

export function ModulePage({ id, back }: { id: string; back: () => void }) {
  const module = getModule(id)
  const [section, setSection] = useState<SectionId>('objectives')
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [section, id])

  const content = CONTENT[id]
  if (!module || !content) return <p className="card p-8 text-center">Module not found · Modül bulunamadı</p>
  return <GenericModule key={id} module={module} content={content} section={section} onSection={setSection} onBack={back} />
}
