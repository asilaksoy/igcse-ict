/** Lightweight inline icon set (no icon library dependency). */
const paths: Record<string, string> = {
  router: 'M4 15h16v4H4zM7 17h.01M10 17h.01M8 11a6 6 0 0 1 8 0M5.5 8.5a10 10 0 0 1 13 0M12 15v-2',
  wifi: 'M2 8.8a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M12 19.5h.01',
  cloud: 'M7 18a5 5 0 1 1 .9-9.9A6 6 0 0 1 19.5 10 4 4 0 0 1 18 18z',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18',
  lan: 'M10 3h4v4h-4zM3 17h4v4H3zM10 17h4v4h-4zM17 17h4v4h-4zM12 7v5M5 17v-2.5h14V17M12 12v5',
  shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4',
  fingerprint: 'M12 11v3a8 8 0 0 1-2 5M8 8.5A5 5 0 0 1 17 11v2M7 13a5 5 0 0 1 .3-2M16.5 16.5a12 12 0 0 1-1 3M4.5 7A9 9 0 0 1 20 9.5M4 12v-.5M12 3a9 9 0 0 1 3 .5',
  video: 'M3 7h12v10H3zM15 11l6-3.5v9L15 13',
  home: 'M3 11l9-7 9 7M5 10v10h5v-6h4v6h5V10',
  check: 'M5 12.5l4.5 4.5L19 7',
  x: 'M6 6l12 12M18 6L6 18',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  back: 'M19 12H5M11 6l-6 6 6 6',
  play: 'M7 5l12 7-12 7z',
  refresh: 'M20 11a8 8 0 1 0-2.3 5.7M20 5v6h-6',
  book: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5',
  target: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
  compass: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM15.5 8.5l-2 5-5 2 2-5z',
  puzzle: 'M9 3h6v3a2 2 0 1 0 4 0V3h2v6h-3a2 2 0 1 0 0 4h3v8h-6v-3a2 2 0 1 0-4 0v3H3v-8h3a2 2 0 1 0 0-4H3V3z',
  quiz: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01',
  pen: 'M4 20l4-1 11-11-3-3L5 16zM14 6l3 3',
  cards: 'M3 7h13v13H3zM7 3h14v14',
  lock: 'M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3',
  tablet: 'M6 3h12v18H6zM11 18h2',
  laptop: 'M4 5h16v11H4zM2 19h20',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6',
}

export function Icon({ name, className = 'size-6', strokeWidth = 1.8 }: { name: string; className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d={paths[name] ?? paths.spark} />
    </svg>
  )
}
