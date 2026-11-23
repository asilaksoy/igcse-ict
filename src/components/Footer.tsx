import { SITE } from '../data/site'
import { Icon } from './Icon'

/** Shown on every page: author, AI disclosure, licence. */
export function Footer({ onAbout }: { onAbout: () => void }) {
  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto max-w-5xl space-y-3 px-4 py-8 text-sm text-ink-300">
        <div className="flex items-start gap-2">
          <Icon name="spark" className="mt-0.5 size-4 shrink-0 text-cyan-glow" />
          <div>
            <div>{SITE.ai.short.en}</div>
            <div className="text-tr/90">{SITE.ai.short.tr}</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-ink-400">
          <span>
            © {SITE.year} {SITE.author.name}
          </span>
          <a href={SITE.license.url} target="_blank" rel="noopener noreferrer license" className="underline-offset-2 hover:underline">
            {SITE.license.name}
          </a>
          <button onClick={onAbout} className="tap min-h-10 underline-offset-2 hover:underline">
            About · Hakkında
          </button>
          <span>Not affiliated with Cambridge · Cambridge ile bağlantılı değildir</span>
        </div>
      </div>
    </footer>
  )
}
