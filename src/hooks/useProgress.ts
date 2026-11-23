import { useCallback, useEffect, useState } from 'react'
import type { SectionId } from '../data/types'

/**
 * Local-only progress tracking. Nothing personal is stored — just which sections
 * were completed and the best score for each activity, on this device only.
 */
const KEY = 'igcse-networks-progress-v1'

export interface ModuleProgress {
  sections: SectionId[]
  scores: Record<string, { score: number; total: number }>
}
type Store = Record<string, ModuleProgress>

export const SECTION_ORDER: SectionId[] = ['objectives', 'learn', 'explore', 'activity', 'check', 'exam', 'vocab']

function read(): Store {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Store) : {}
  } catch {
    return {}
  }
}
function write(s: Store) {
  try {
    localStorage.setItem(KEY, JSON.stringify(s))
  } catch {
    /* storage unavailable – progress just won't persist */
  }
}

// tiny pub/sub so every component sees the same state
let store: Store = read()
const listeners = new Set<() => void>()
const emit = () => listeners.forEach((l) => l())

export function useProgress() {
  const [, force] = useState(0)
  useEffect(() => {
    const l = () => force((n) => n + 1)
    listeners.add(l)
    return () => {
      listeners.delete(l)
    }
  }, [])

  const get = useCallback((moduleId: string): ModuleProgress => store[moduleId] ?? { sections: [], scores: {} }, [])

  const completeSection = useCallback((moduleId: string, section: SectionId) => {
    const cur = store[moduleId] ?? { sections: [], scores: {} }
    if (cur.sections.includes(section)) return
    store = { ...store, [moduleId]: { ...cur, sections: [...cur.sections, section] } }
    write(store)
    emit()
  }, [])

  const saveScore = useCallback((moduleId: string, activity: string, score: number, total: number) => {
    const cur = store[moduleId] ?? { sections: [], scores: {} }
    const prev = cur.scores[activity]
    if (prev && prev.score / prev.total >= score / total) return
    store = { ...store, [moduleId]: { ...cur, scores: { ...cur.scores, [activity]: { score, total } } } }
    write(store)
    emit()
  }, [])

  const reset = useCallback(() => {
    store = {}
    write(store)
    emit()
  }, [])

  const percent = useCallback(
    (moduleId: string) => Math.round(((store[moduleId]?.sections.length ?? 0) / SECTION_ORDER.length) * 100),
    [],
  )

  return { get, completeSection, saveScore, reset, percent }
}
