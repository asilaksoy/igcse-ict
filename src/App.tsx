import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Dashboard } from './pages/Dashboard'
import { ModulePage } from './pages/ModulePage'
import { About } from './pages/About'
import { LangProvider } from './hooks/useLang'
import { getModule } from './data/modules'

/**
 * Hash routing with plain names so every page has a shareable link:
 *   (empty) = home, #about, #network-devices, #cloud-computing, ...
 */
type Route = string | null
const readHash = (): Route => {
  const h = decodeURIComponent(window.location.hash.replace(/^#\/?/, ''))
  return h === 'about' || getModule(h) ? h : null
}

export default function App() {
  const [route, setRoute] = useState<Route>(readHash)

  useEffect(() => {
    const on = () => setRoute(readHash())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  useEffect(() => {
    const m = route && route !== 'about' ? getModule(route) : null
    document.title = m ? `${m.title.en} – ${m.title.tr} | ICT Networks` : route === 'about' ? 'About – Hakkında | ICT Networks' : 'ICT Networks – IGCSE ICT 0417 | Ağlar'
  }, [route])

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
          {route === 'about' ? <About home={() => go(null)} /> : route ? <ModulePage id={route} home={() => go(null)} /> : <Dashboard open={go} />}
        </main>
        <Footer onAbout={() => go('about')} />
      </div>
    </LangProvider>
  )
}
