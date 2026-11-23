import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import type { Bi } from '../data/types'
import { DeviceArt, type DeviceKind } from '../components/DeviceArt'
import { BiStack } from '../components/Bilingual'
import { Button } from '../components/ui'
import { Icon } from '../components/Icon'

type Mode = 'hub' | 'switch' | 'router'
type Pt = { x: number; y: number }

/* ---------- LAN layout (hub / switch modes) ---------- */
const CENTER: Pt = { x: 400, y: 200 }
const LAN_PCS = [
  { id: 'A', mac: '00-1A-2B-3C-4D-0A', port: 1, pos: { x: 110, y: 80 } },
  { id: 'B', mac: '00-1A-2B-3C-4D-0B', port: 2, pos: { x: 690, y: 80 } },
  { id: 'C', mac: '00-1A-2B-3C-4D-0C', port: 3, pos: { x: 110, y: 320 } },
  { id: 'D', mac: '00-1A-2B-3C-4D-0D', port: 4, pos: { x: 690, y: 320 } },
]

/* ---------- Router layout ---------- */
const R: Pt = { x: 400, y: 215 }
const L1: Pt = { x: 215, y: 215 }
const L2: Pt = { x: 585, y: 255 }
const NET: Pt = { x: 400, y: 62 }
const ROUTE_NODES = {
  sender: { pos: { x: 90, y: 140 }, ip: '192.168.1.10', label: 'PC', kind: 'pc' as DeviceKind },
  lan1b: { pos: { x: 90, y: 300 }, ip: '192.168.1.11', label: 'PC', kind: 'pc' as DeviceKind },
  web: { pos: { x: 670, y: 62 }, ip: '142.250.80.46', label: 'Web server', kind: 'server' as DeviceKind },
  pc2: { pos: { x: 715, y: 175 }, ip: '10.0.0.15', label: 'PC', kind: 'pc' as DeviceKind },
  printer: { pos: { x: 715, y: 340 }, ip: '10.0.0.30', label: 'Printer', kind: 'server' as DeviceKind },
}
type RouteDest = 'web' | 'pc2' | 'printer'
const ROUTING_TABLE = [
  { net: '192.168.1.x', via: { en: 'Port 1 → LAN 1 (school)', tr: 'Port 1 → LAN 1 (okul)' }, key: 'lan1' },
  { net: '10.0.0.x', via: { en: 'Port 2 → LAN 2 (office)', tr: 'Port 2 → LAN 2 (ofis)' }, key: 'lan2' },
  { net: 'all others', via: { en: 'Port 3 → Internet (ISP)', tr: 'Port 3 → İnternet (ISS)' }, key: 'net' },
]

const routePath = (d: RouteDest): Pt[] => {
  const start = [ROUTE_NODES.sender.pos, L1, R]
  if (d === 'web') return [...start, NET, ROUTE_NODES.web.pos]
  return [...start, L2, ROUTE_NODES[d].pos]
}

function Packet({ path, duration, label, color = '#22d3ee' }: { path: Pt[]; duration: number; label: string; color?: string }) {
  return (
    <motion.g
      initial={{ x: path[0].x, y: path[0].y }}
      animate={{ x: path.map((p) => p.x), y: path.map((p) => p.y) }}
      transition={{ duration, ease: 'easeInOut' }}
    >
      <rect x={-30} y={-13} width={60} height={26} rx={7} fill="#0a1628" stroke={color} strokeWidth={2.5} />
      <text x={0} y={5} textAnchor="middle" fill={color} fontSize={12} fontWeight={700} fontFamily="monospace">
        {label}
      </text>
    </motion.g>
  )
}

interface Step {
  t: Bi
}

export function NetworkSim({ onRun }: { onRun?: () => void }) {
  const [mode, setMode] = useState<Mode>('hub')
  const [dest, setDest] = useState<string>('C')
  const [rDest, setRDest] = useState<RouteDest>('web')
  const [run, setRun] = useState(0)
  const [phase, setPhase] = useState<'idle' | 'moving' | 'done'>('idle')
  const [steps, setSteps] = useState<Step[]>([])
    const timers = useRef<number[]>([])

  const clear = () => {
    timers.current.forEach((t) => clearTimeout(t))
    timers.current = []
  }
  useEffect(() => clear, [])

  const reset = (m: Mode = mode) => {
    clear()
    setMode(m)
    setPhase('idle')
    setSteps([])
  }

  const send = () => {
    clear()
    setRun((r) => r + 1)
    setPhase('moving')
    onRun?.()
    let plan: { at: number; t: Bi }[] = []
    if (mode === 'hub') {
      plan = [
        { at: 0, t: { en: 'PC A sends a data packet to the hub.', tr: 'PC A, hub’a bir veri paketi gönderir.' } },
        { at: 900, t: { en: 'The hub does NOT check the address – it copies the packet to every other port.', tr: 'Hub adresi KONTROL ETMEZ – paketi diğer tüm portlara kopyalar.' } },
        { at: 1900, t: { en: `Every PC checks the MAC address. Only PC ${dest} accepts it; the others discard it.`, tr: `Her bilgisayar MAC adresini kontrol eder. Yalnızca PC ${dest} paketi kabul eder; diğerleri atar.` } },
      ]
    } else if (mode === 'switch') {
      const pc = LAN_PCS.find((p) => p.id === dest)!
      plan = [
        { at: 0, t: { en: 'PC A sends a data packet to the switch.', tr: 'PC A, switch’e bir veri paketi gönderir.' } },
        { at: 900, t: { en: `The switch reads the destination MAC address ${pc.mac} and finds it in its table → port ${pc.port}.`, tr: `Switch hedef MAC adresini (${pc.mac}) okur ve tablosunda bulur → port ${pc.port}.` } },
        { at: 1900, t: { en: `The packet is sent ONLY to PC ${dest}. No unnecessary traffic.`, tr: `Paket YALNIZCA PC ${dest}’ye gönderilir. Gereksiz trafik yok.` } },
      ]
    } else {
      const node = ROUTE_NODES[rDest]
      const row = rDest === 'web' ? ROUTING_TABLE[2] : ROUTING_TABLE[1]
      plan = [
        { at: 0, t: { en: `PC 192.168.1.10 sends a packet addressed to ${node.ip}.`, tr: `192.168.1.10 bilgisayarı, ${node.ip} adresine bir paket gönderir.` } },
        { at: 1000, t: { en: `The router reads the destination IP address ${node.ip} and checks its routing table.`, tr: `Router hedef IP adresini (${node.ip}) okur ve yönlendirme tablosuna bakar.` } },
        { at: 1700, t: { en: `Match: ${row.net} → ${row.via.en}. The router forwards the packet.`, tr: `Eşleşme: ${row.net} → ${row.via.tr}. Router paketi iletir.` } },
        { at: 2900, t: { en: `The packet arrives at ${node.label} (${node.ip}).`, tr: `Paket hedefe ulaşır: ${node.label} (${node.ip}).` } },
      ]
    }
    setSteps([])
    plan.forEach((p) => timers.current.push(window.setTimeout(() => setSteps((s) => [...s, { t: p.t }]), p.at)))
    const end = mode === 'router' ? 3000 : 2000
    timers.current.push(window.setTimeout(() => setPhase('done'), end))
  }

  /* ---------- rendering helpers ---------- */
  const lanPacketPaths = () => {
    const a = LAN_PCS[0].pos
    if (mode === 'hub') return LAN_PCS.slice(1).map((p) => ({ id: p.id, path: [a, CENTER, p.pos] }))
    const p = LAN_PCS.find((x) => x.id === dest)!
    return [{ id: p.id, path: [a, CENTER, p.pos] }]
  }
  const matchedRow = mode === 'router' && phase !== 'idle' && steps.length >= 2 ? (rDest === 'web' ? 'net' : 'lan2') : null
  const matchedPort = mode === 'switch' && steps.length >= 2 ? LAN_PCS.find((p) => p.id === dest)!.port : null

  return (
    <div>
      {/* Mode selector */}
      <div className="mb-4 grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-ink-800 p-1.5">
        {(['hub', 'switch', 'router'] as Mode[]).map((m) => (
          <button key={m} onClick={() => reset(m)} className={`tap rounded-xl px-3 py-2.5 font-semibold capitalize ${mode === m ? 'bg-brand-500 text-white' : 'text-ink-300'}`}>
            {m}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px]">
        <div className="card overflow-hidden p-2">
          <svg viewBox="0 0 800 400" className="h-auto w-full" role="img" aria-label="Network simulation">
            {mode !== 'router' ? (
              <>
                {LAN_PCS.map((p) => (
                  <line key={p.id} x1={p.pos.x} y1={p.pos.y} x2={CENTER.x} y2={CENTER.y} stroke="#284571" strokeWidth={4} />
                ))}
                <DeviceArt kind={mode} svgProps={{ x: CENTER.x - 80, y: CENTER.y - 55, width: 160, height: 110 }} />
                <text x={CENTER.x} y={CENTER.y + 70} textAnchor="middle" fill="#c9d6ea" fontSize={16} fontWeight={700}>
                  {mode === 'hub' ? 'HUB' : 'SWITCH'}
                </text>
                {LAN_PCS.map((p) => {
                  const isDest = p.id === dest
                  const show = phase === 'done' && p.id !== 'A'
                  const accepted = isDest
                  const reached = mode === 'hub' || isDest
                  return (
                    <g key={p.id}>
                      <DeviceArt kind="pc" svgProps={{ x: p.pos.x - 34, y: p.pos.y - 32, width: 68, height: 64 }} />
                      <text x={p.pos.x} y={p.pos.y + 48} textAnchor="middle" fill={p.id === 'A' ? '#34d399' : isDest ? '#22d3ee' : '#c9d6ea'} fontSize={15} fontWeight={700}>
                        PC {p.id} {p.id === 'A' ? '(sender)' : isDest ? '(destination)' : ''}
                      </text>
                      <text x={p.pos.x} y={p.pos.y + 66} textAnchor="middle" fill="#6f87ab" fontSize={11} fontFamily="monospace">
                        {p.mac}
                      </text>
                      {show && reached && (
                        <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ originX: `${p.pos.x}px`, originY: `${p.pos.y}px` }}>
                          <circle cx={p.pos.x + 34} cy={p.pos.y - 30} r={15} fill={accepted ? '#34d399' : '#f87171'} />
                          <text x={p.pos.x + 34} y={p.pos.y - 25} textAnchor="middle" fill="#0a1628" fontSize={16} fontWeight={900}>
                            {accepted ? '✓' : '✗'}
                          </text>
                        </motion.g>
                      )}
                    </g>
                  )
                })}
                {phase !== 'idle' && lanPacketPaths().map((pp) => <Packet key={`${run}-${pp.id}`} path={pp.path} duration={1.9} label={`→ ${dest}`} />)}
              </>
            ) : (
              <>
                {/* links */}
                {[
                  [ROUTE_NODES.sender.pos, L1],
                  [ROUTE_NODES.lan1b.pos, L1],
                  [L1, R],
                  [R, NET],
                  [NET, ROUTE_NODES.web.pos],
                  [R, L2],
                  [L2, ROUTE_NODES.pc2.pos],
                  [L2, ROUTE_NODES.printer.pos],
                ].map(([a, b], i) => (
                  <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#284571" strokeWidth={4} />
                ))}
                <rect x={30} y={95} width={225} height={265} rx={18} fill="none" stroke="#3b6bb0" strokeDasharray="6 6" />
                <text x={142} y={385} textAnchor="middle" fill="#9fb2cf" fontSize={13}>
                  LAN 1 · 192.168.1.x
                </text>
                <rect x={555} y={135} width={225} height={255} rx={18} fill="none" stroke="#3b6bb0" strokeDasharray="6 6" />
                <text x={600} y={382} textAnchor="middle" fill="#9fb2cf" fontSize={13}>
                  LAN 2 · 10.0.0.x
                </text>
                <circle cx={L1.x} cy={L1.y} r={9} fill="#1b3255" stroke="#3b6bb0" />
                <circle cx={L2.x} cy={L2.y} r={9} fill="#1b3255" stroke="#3b6bb0" />
                <DeviceArt kind="internet" svgProps={{ x: NET.x - 55, y: NET.y - 40, width: 110, height: 78 }} />
                <DeviceArt kind="router" svgProps={{ x: R.x - 70, y: R.y - 50, width: 140, height: 96 }} />
                <text x={R.x} y={R.y + 64} textAnchor="middle" fill="#c9d6ea" fontSize={16} fontWeight={700}>
                  ROUTER
                </text>
                {(Object.keys(ROUTE_NODES) as (keyof typeof ROUTE_NODES)[]).map((k) => {
                  const n = ROUTE_NODES[k]
                  const isDest = k === rDest
                  return (
                    <g key={k}>
                      <DeviceArt kind={n.kind} svgProps={{ x: n.pos.x - 28, y: n.pos.y - 28, width: 56, height: 52 }} />
                      <text x={n.pos.x} y={n.pos.y + 40} textAnchor="middle" fill={k === 'sender' ? '#34d399' : isDest ? '#22d3ee' : '#c9d6ea'} fontSize={12} fontWeight={700}>
                        {n.label}
                      </text>
                      <text x={n.pos.x} y={n.pos.y + 55} textAnchor="middle" fill="#6f87ab" fontSize={11} fontFamily="monospace">
                        {n.ip}
                      </text>
                      {phase === 'done' && isDest && (
                        <motion.circle initial={{ r: 0 }} animate={{ r: 40, opacity: [1, 0] }} transition={{ duration: 0.9 }} cx={n.pos.x} cy={n.pos.y} fill="none" stroke="#34d399" strokeWidth={4} />
                      )}
                    </g>
                  )
                })}
                {phase !== 'idle' && <Packet key={run} path={routePath(rDest)} duration={2.9} label={ROUTE_NODES[rDest].ip.split('.').slice(0, 2).join('.') + '…'} />}
              </>
            )}
          </svg>
        </div>

        {/* Control panel */}
        <div className="flex flex-col gap-4">
          <div className="card p-4">
            <div className="mb-2 text-sm font-semibold text-ink-300">Destination · Hedef</div>
            {mode !== 'router' ? (
              <div className="grid grid-cols-3 gap-2">
                {['B', 'C', 'D'].map((d) => (
                  <button key={d} onClick={() => { setDest(d); reset() }} className={`tap rounded-xl border font-bold ${dest === d ? 'border-cyan-glow bg-cyan-glow/15' : 'border-white/10 bg-ink-800'}`}>
                    PC {d}
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid gap-2">
                {(['web', 'pc2', 'printer'] as RouteDest[]).map((d) => (
                  <button key={d} onClick={() => { setRDest(d); reset() }} className={`tap rounded-xl border px-3 text-left ${rDest === d ? 'border-cyan-glow bg-cyan-glow/15' : 'border-white/10 bg-ink-800'}`}>
                    <span className="font-semibold">{ROUTE_NODES[d].label}</span> <span className="font-mono text-sm text-ink-300">{ROUTE_NODES[d].ip}</span>
                  </button>
                ))}
              </div>
            )}
            <Button className="mt-3 w-full" onClick={send} disabled={phase === 'moving'}>
              <Icon name="play" className="size-5" /> Send packet · Paketi gönder
            </Button>
          </div>

          {mode === 'switch' && (
            <div className="card p-4">
              <div className="mb-2 text-sm font-semibold text-ink-300">Switch table · Switch tablosu</div>
              <table className="w-full text-sm">
                <tbody>
                  {LAN_PCS.map((p) => (
                    <tr key={p.id} className={`transition ${matchedPort === p.port ? 'bg-cyan-glow/20 text-white' : 'text-ink-300'}`}>
                      <td className="rounded-l-lg px-2 py-1.5 font-mono text-xs">{p.mac}</td>
                      <td className="rounded-r-lg px-2 py-1.5 text-right">port {p.port}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {mode === 'router' && (
            <div className="card p-4">
              <div className="mb-2 text-sm font-semibold text-ink-300">Routing table · Yönlendirme tablosu</div>
              <div className="space-y-1.5 text-sm">
                {ROUTING_TABLE.map((r) => (
                  <div key={r.key} className={`rounded-lg px-2 py-1.5 transition ${matchedRow === r.key ? 'bg-cyan-glow/20 text-white' : 'text-ink-300'}`}>
                    <span className="font-mono">{r.net}</span> → <span className="text-xs">{r.via.en}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Step log */}
      <div className="mt-4 min-h-24 space-y-2" aria-live="polite">
        {steps.length === 0 && <div className="text-ink-400">Choose a destination and press “Send packet”. · Bir hedef seç ve “Paketi gönder”e bas.</div>}
        {steps.map((s, i) => (
          <motion.div key={`${run}-${i}`} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3 rounded-xl bg-ink-800 p-3">
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-cyan-glow/20 text-sm font-bold text-cyan-glow">{i + 1}</span>
            <BiStack t={s.t} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
