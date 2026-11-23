import type { SVGProps } from 'react'
/** Hand-drawn SVG illustrations of the network devices (scales cleanly, works offline). */
export type DeviceKind = 'router' | 'switch' | 'hub' | 'bridge' | 'nic' | 'pc' | 'laptop' | 'server' | 'internet' | 'tablet'

const body = '#13294a'
const edge = '#3b6bb0'
const led = '#22d3ee'

export function DeviceArt({ kind, className = 'w-full h-auto', svgProps = {} }: { kind: DeviceKind; className?: string; svgProps?: SVGProps<SVGSVGElement> }) {
  const p = { className, ...svgProps }
  switch (kind) {
    case 'router':
      return (
        <svg viewBox="0 0 160 110" {...p} aria-hidden="true">
          <line x1="40" y1="48" x2="28" y2="8" stroke={edge} strokeWidth="5" strokeLinecap="round" />
          <line x1="120" y1="48" x2="132" y2="8" stroke={edge} strokeWidth="5" strokeLinecap="round" />
          <path d="M70 26a14 14 0 0 1 20 0M63 18a24 24 0 0 1 34 0" stroke={led} strokeWidth="3" fill="none" strokeLinecap="round" opacity=".8" />
          <rect x="14" y="46" width="132" height="44" rx="12" fill={body} stroke={edge} strokeWidth="2.5" />
          {[0, 1, 2, 3].map((i) => (
            <circle key={i} cx={34 + i * 16} cy="68" r="4" fill={i === 0 ? '#34d399' : led} />
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={100 + i * 14} y="62" width="10" height="12" rx="2" fill="#0a1628" stroke={edge} />
          ))}
          <rect x="30" y="92" width="18" height="6" rx="2" fill={edge} />
          <rect x="112" y="92" width="18" height="6" rx="2" fill={edge} />
        </svg>
      )
    case 'switch':
      return (
        <svg viewBox="0 0 160 110" {...p} aria-hidden="true">
          <rect x="6" y="36" width="148" height="40" rx="8" fill={body} stroke={edge} strokeWidth="2.5" />
          {Array.from({ length: 8 }).map((_, i) => (
            <g key={i}>
              <rect x={14 + i * 17} y="48" width="12" height="13" rx="2" fill="#0a1628" stroke={edge} />
              <circle cx={20 + i * 17} cy="68" r="2.2" fill={i % 3 === 2 ? '#34d399' : led} />
            </g>
          ))}
          <text x="80" y="96" textAnchor="middle" fill="#9fb2cf" fontSize="11" fontFamily="monospace">MAC → port</text>
        </svg>
      )
    case 'hub':
      return (
        <svg viewBox="0 0 160 110" {...p} aria-hidden="true">
          {[22, 34, 46].map((r, i) => (
            <circle key={r} cx="80" cy="56" r={r + 18} fill="none" stroke={led} strokeOpacity={0.25 - i * 0.07} strokeWidth="2" strokeDasharray="4 6" />
          ))}
          <rect x="34" y="38" width="92" height="36" rx="8" fill={body} stroke={edge} strokeWidth="2.5" />
          {Array.from({ length: 4 }).map((_, i) => (
            <rect key={i} x={44 + i * 19} y="49" width="12" height="13" rx="2" fill="#0a1628" stroke={edge} />
          ))}
          <text x="80" y="100" textAnchor="middle" fill="#9fb2cf" fontSize="11" fontFamily="monospace">broadcast → all</text>
        </svg>
      )
    case 'bridge':
      return (
        <svg viewBox="0 0 160 110" {...p} aria-hidden="true">
          <rect x="4" y="22" width="40" height="66" rx="10" fill="none" stroke={edge} strokeDasharray="5 5" />
          <rect x="116" y="22" width="40" height="66" rx="10" fill="none" stroke={edge} strokeDasharray="5 5" />
          <text x="24" y="18" textAnchor="middle" fill="#9fb2cf" fontSize="10">LAN A</text>
          <text x="136" y="18" textAnchor="middle" fill="#9fb2cf" fontSize="10">LAN B</text>
          {[40, 70].map((y) => (
            <g key={y}>
              <rect x="14" y={y - 7} width="20" height="14" rx="3" fill={body} stroke={edge} />
              <rect x="126" y={y - 7} width="20" height="14" rx="3" fill={body} stroke={edge} />
            </g>
          ))}
          <line x1="44" y1="55" x2="58" y2="55" stroke={led} strokeWidth="3" />
          <line x1="102" y1="55" x2="116" y2="55" stroke={led} strokeWidth="3" />
          <rect x="58" y="40" width="44" height="30" rx="8" fill={body} stroke={edge} strokeWidth="2.5" />
          <circle cx="72" cy="55" r="4" fill={led} />
          <circle cx="88" cy="55" r="4" fill={led} />
        </svg>
      )
    case 'nic':
      return (
        <svg viewBox="0 0 160 110" {...p} aria-hidden="true">
          <rect x="14" y="24" width="120" height="56" rx="6" fill="#0f3d36" stroke="#2c8a78" strokeWidth="2.5" />
          <rect x="40" y="36" width="34" height="26" rx="3" fill="#0a1628" stroke="#2c8a78" />
          <text x="57" y="53" textAnchor="middle" fill="#6ee7b7" fontSize="8" fontFamily="monospace">CHIP</text>
          <rect x="134" y="32" width="18" height="40" rx="3" fill="#9fb2cf" />
          <rect x="138" y="44" width="10" height="16" rx="1.5" fill="#0a1628" />
          {Array.from({ length: 10 }).map((_, i) => (
            <rect key={i} x={24 + i * 9} y="80" width="6" height="10" fill="#f5c451" />
          ))}
          <text x="100" y="66" textAnchor="middle" fill="#a7f3d0" fontSize="7" fontFamily="monospace">MAC 00-1C-B3</text>
        </svg>
      )
    case 'pc':
      return (
        <svg viewBox="0 0 60 56" {...p} aria-hidden="true">
          <rect x="4" y="4" width="52" height="34" rx="5" fill={body} stroke={edge} strokeWidth="2" />
          <rect x="9" y="9" width="42" height="24" rx="2" fill="#0d3a5c" />
          <rect x="24" y="40" width="12" height="7" fill={edge} />
          <rect x="15" y="47" width="30" height="5" rx="2" fill={edge} />
        </svg>
      )
    case 'laptop':
      return (
        <svg viewBox="0 0 60 56" {...p} aria-hidden="true">
          <rect x="10" y="8" width="40" height="28" rx="4" fill={body} stroke={edge} strokeWidth="2" />
          <rect x="14" y="12" width="32" height="20" rx="2" fill="#0d3a5c" />
          <path d="M3 40h54l-4 8H7z" fill={edge} />
        </svg>
      )
    case 'tablet':
      return (
        <svg viewBox="0 0 60 56" {...p} aria-hidden="true">
          <rect x="12" y="4" width="36" height="48" rx="6" fill={body} stroke={edge} strokeWidth="2" />
          <rect x="16" y="9" width="28" height="36" rx="2" fill="#0d3a5c" />
          <circle cx="30" cy="48.5" r="1.8" fill={edge} />
        </svg>
      )
    case 'server':
      return (
        <svg viewBox="0 0 60 56" {...p} aria-hidden="true">
          {[4, 20, 36].map((y) => (
            <g key={y}>
              <rect x="10" y={y} width="40" height="14" rx="3" fill={body} stroke={edge} strokeWidth="2" />
              <circle cx="18" cy={y + 7} r="2" fill={led} />
              <rect x="26" y={y + 5} width="18" height="4" rx="1" fill={edge} />
            </g>
          ))}
        </svg>
      )
    case 'internet':
      return (
        <svg viewBox="0 0 80 56" {...p} aria-hidden="true">
          <path d="M20 46a13 13 0 1 1 3-25.6A17 17 0 0 1 56 18a12 12 0 0 1 4 28z" fill="#10284a" stroke={led} strokeWidth="2" />
          <text x="40" y="38" textAnchor="middle" fill={led} fontSize="10" fontWeight="700">WAN</text>
        </svg>
      )
  }
}
