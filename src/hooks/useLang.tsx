import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

/** Display mode: both languages (default), or emphasise one. Both are always available. */
export type LangMode = 'both' | 'en' | 'tr'

const Ctx = createContext<{ mode: LangMode; setMode: (m: LangMode) => void }>({ mode: 'both', setMode: () => {} })
const KEY = 'igcse-networks-lang'

export function LangProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<LangMode>(() => {
    try {
      return (localStorage.getItem(KEY) as LangMode) || 'both'
    } catch {
      return 'both'
    }
  })
  useEffect(() => {
    try {
      localStorage.setItem(KEY, mode)
    } catch {
      /* ignore */
    }
  }, [mode])
  return <Ctx.Provider value={{ mode, setMode }}>{children}</Ctx.Provider>
}

export const useLang = () => useContext(Ctx)
