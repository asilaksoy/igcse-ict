/** A piece of text in both languages. */
export interface Bi {
  en: string
  tr: string
}

export interface VocabItem {
  en: string
  tr: string
  /** short English definition */
  def?: string
}

export type SectionId =
  | 'objectives'
  | 'learn'
  | 'explore'
  | 'activity'
  | 'check'
  | 'exam'
  | 'vocab'

export interface ModuleMeta {
  id: string
  number: string
  title: Bi
  summary: Bi
  /** Syllabus reference, e.g. "4.1" */
  syllabusRef: string
  /** Learning objectives taken from the 0417 (2026–2028) syllabus */
  objectives: Bi[]
  icon: string
  available: boolean
}

/* ---------- Activity / question types ---------- */

export interface McqQuestion {
  kind: 'mcq'
  id: string
  prompt: Bi
  options: Bi[]
  answer: number
  explain: Bi
}

export interface TrueFalseQuestion {
  kind: 'tf'
  id: string
  prompt: Bi
  answer: boolean
  explain: Bi
}

export interface FillQuestion {
  kind: 'fill'
  id: string
  /** sentence with ___ marking the blank */
  prompt: Bi
  bank: string[]
  answer: string
  explain: Bi
}

export type CheckQuestion = McqQuestion | TrueFalseQuestion | FillQuestion

export interface MarkPoint {
  /** what earns the mark (shown after checking) */
  point: Bi
  /** lowercase keyword groups; the point is matched if ANY group has ALL its words in the answer */
  keywords: string[][]
}

export interface ExamQuestion {
  id: string
  command: 'Define' | 'State' | 'Describe' | 'Explain' | 'Compare' | 'Scenario'
  prompt: Bi
  marks: number
  points: MarkPoint[]
  model: Bi
  tip?: Bi
}

export interface Scenario {
  id: string
  situation: Bi
  options: { id: string; label: Bi }[]
  answer: string
  reasons: Bi[]
  correctReason: number
  explain: Bi
}

export interface MatchPair {
  id: string
  en: string
  tr: string
  desc: Bi
}

/* ---------- Generic module content (all modules use the same template) ---------- */

export interface LearnItem {
  id: string
  title: Bi
  text: Bi
  points?: Bi[]
  example?: Bi
  /** optional illustration key (network devices) */
  art?: string
}

export interface CompareTable {
  title: Bi
  columns: string[]
  rows: { label: Bi; cells: Bi[] }[]
}

export interface SortTask {
  title: Bi
  categories: { id: string; label: Bi }[]
  items: { id: string; text: Bi; cat: string }[]
}

export interface StepTask {
  title: Bi
  /** steps in the correct order */
  steps: Bi[]
}

export interface ModuleContent {
  learn: LearnItem[]
  compare?: CompareTable
  /** key of an interactive simulation shown in Explore */
  sim?: 'network' | 'cloud' | 'password' | 'auth'
  sort?: SortTask
  steps?: StepTask[]
  match: MatchPair[]
  scenarios: Scenario[]
  check: CheckQuestion[]
  exam: ExamQuestion[]
  vocab: VocabItem[]
}
