import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Dashboard } from './pages/Dashboard'
import { UnitPage } from './pages/UnitPage'
import { ModulePage } from './pages/ModulePage'
import { About } from './pages/About'
import { LangProvider } from './hooks/useLang'
import { UNITS, getModule, getUnit } from './data/modules'
import { SITE } from './data/site'

/**
 * Hash routing with plain names so every page has a shareable link:
 *   (empty) = home, #about, #unit-1 … #unit-4, #<module-id>
 */
type Route = string | null
const readHash = (): Route => {
  const h = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''))
  return h === 'about' || getModule(h) || getUnit(h) ? h : null
}

export default function App() {
  const [route, setRoute] = useState<Route>(readHash)

  useEffect(() => {
    const on = () => setRoute(readHash())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  const unit = route ? getUnit(route) : undefined
  const module = route ? getModule(route) : undefined

  useEffect(() => {
    document.title = module
      ? `${module.title.en} – ${module.title.tr} | ${SITE.name}`
      : unit
        ? `Unit ${unit.number}: ${unit.title.en} | ${SITE.name}`
        : route === 'about'
          ? `About – Hakkında | ${SITE.name}`
          : `${SITE.name} – Cambridge IGCSE ICT 0417 | İngilizce ve Türkçe`
  }, [route, module, unit])

  const go = (id: Route) => {
    setRoute(id)
    try {
      if (id) window.location.hash = id
      else history.replaceState(null, '', window.location.pathname + window.location.search)
    } catch {
      /* ignore */
    }
    window.scrollTo({ top: 0 })
  }

  return (
    <LangProvider>
      <div className="flex min-h-full flex-col">
        <Header onHome={() => go(null)} onAbout={() => go('about')} showHome={route !== null} />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-12 pt-6 md:pt-8">
          {route === 'about' ? (
            <About home={() => go(null)} />
          ) : unit ? (
            <UnitPage unit={unit} open={go} />
          ) : module ? (
            <ModulePage id={module.id} back={() => go(UNITS.find((u) => u.number === module.unit)!.id)} />
          ) : (
            <Dashboard open={go} />
          )}
        </main>
        <Footer onAbout={() => go('about')} />
      </div>
    </LangProvider>
  )
}
