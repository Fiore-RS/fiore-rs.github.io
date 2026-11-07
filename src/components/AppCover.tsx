import { useId } from 'react'
import type { AppCoverVariant } from '../data/types'

/**
 * Generated covers for apps/websites. Instead of screenshots (which go stale
 * after every UI change), each cover is built from the app's own identity:
 * its palette, a pattern tied to its concept, and its logo/icon on top.
 * Everything is SVG/CSS, so it scales to any card or hero size.
 */
export default function AppCover({ variant }: { variant: AppCoverVariant }) {
  switch (variant) {
    case 'teleo':
      return <TeleoCover />
    case 'sobres':
      return <SobresCover />
    case 'preordi':
      return <PreordiCover />
  }
}

/** Shared slot that centers the logo in the upper part, clear of the title overlay. */
function LogoSlot({ bottom = '0%', children }: { bottom?: string; children: React.ReactNode }) {
  return (
    <div className="absolute inset-x-0 top-0 flex items-center justify-center" style={{ bottom }}>
      {children}
    </div>
  )
}

/* ─────────────────────────── Teleo ───────────────────────────
   "Mañana con café": cream notebook paper with ruled lines and a
   margin, and a page carrying Teleo's signature dog-ear corner. */
function TeleoCover() {
  const id = useId().replace(/:/g, '')
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'radial-gradient(circle at 72% 22%, #EFD8D4 0%, #F4ECE0 62%)' }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full">
        <defs>
          <pattern id={`ruled-${id}`} width="12" height="30" patternUnits="userSpaceOnUse">
            <line x1="0" y1="29.5" x2="12" y2="29.5" stroke="#E8DACB" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#ruled-${id})`} />
        <line x1="44" y1="0" x2="44" y2="100%" stroke="#D0A0A4" strokeWidth="1.5" />
        <line x1="49" y1="0" x2="49" y2="100%" stroke="#D0A0A4" strokeWidth="1.5" />
      </svg>

      <LogoSlot>
        <div className="relative aspect-[5/6] h-[64%] max-h-48">
          {/* Back page for depth */}
          <div className="absolute inset-0 rotate-[7deg] rounded-lg bg-[#F5ECDF] shadow-md" />
          {/* Front page with dog-ear */}
          <div className="absolute inset-0 -rotate-[4deg] rounded-lg rounded-tr-[18%] bg-[#FCF8F0] shadow-lg">
            <svg viewBox="0 0 100 100" className="absolute right-0 top-0 w-[30%]">
              <defs>
                <clipPath id={`ear-${id}`}>
                  <path d="M0,0 L78,0 Q100,0 100,22 L100,100 L0,100 Z" />
                </clipPath>
              </defs>
              <g clipPath={`url(#ear-${id})`}>
                <polygon points="0,0 50,50 0,100" fill="#FCF8F0" />
                <polygon points="0,100 50,50 100,100" fill="#E8DACB" />
                <polygon points="0,0 100,0 50,50" fill="#7A2E3A" />
                <polygon points="100,0 100,100 50,50" fill="#58212A" />
              </g>
            </svg>
            <img
              src="/projects/teleo/logo-icon.svg"
              alt=""
              className="absolute left-1/2 top-1/2 w-[64%] -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </LogoSlot>
    </div>
  )
}

/* ─────────────────────────── Zobro (slug: sobres) ───────────────────────────
   Green → celeste (the app's "economy" palette) with a tiled pattern
   of envelopes, and the app icon (an open envelope with three bills)
   front and center. */
function SobresCover() {
  const id = useId().replace(/:/g, '')
  const envelope = (x: number, y: number) => (
    <g transform={`translate(${x} ${y})`} fill="none" stroke="#f7f5f0" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
      <rect width="36" height="26" rx="3" />
      <path d="M1.5 2 18 14.5 34.5 2" />
    </g>
  )
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'linear-gradient(135deg, #2f5a42 0%, oklch(38% 0.09 152) 40%, oklch(50% 0.09 227) 100%)' }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.14]">
        <defs>
          <pattern id={`env-${id}`} width="96" height="72" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
            {envelope(8, 6)}
            {envelope(56, 42)}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#env-${id})`} />
      </svg>

      <LogoSlot>
        <img
          src="/projects/sobres/logo-icon.svg"
          alt=""
          className="h-[52%] max-h-36 drop-shadow-xl"
        />
      </LogoSlot>
    </div>
  )
}

/* ─────────────────────────── Preordi ───────────────────────────
   Navy (the app's marino) with a tiled pattern of little boxes, and the app icon
   (a box on its way, with speed lines) front and center. */
function PreordiCover() {
  const id = useId().replace(/:/g, '')
  const box = (x: number, y: number) => (
    <g transform={`translate(${x} ${y})`} fill="none" stroke="#FFFDF8" strokeWidth="1.6" strokeLinejoin="round">
      <rect y="6" width="32" height="22" rx="3" />
      <rect x="-3" width="38" height="8" rx="2" />
      <path d="M16 0v28" />
    </g>
  )
  return (
    <div
      className="absolute inset-0"
      style={{ background: 'radial-gradient(circle at 70% 25%, #2E4D74 0%, #203856 55%, #172A42 100%)' }}
      aria-hidden="true"
    >
      <svg className="absolute inset-0 h-full w-full opacity-[0.1]">
        <defs>
          <pattern id={`box-${id}`} width="96" height="76" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)">
            {box(10, 8)}
            {box(58, 46)}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#box-${id})`} />
      </svg>

      <LogoSlot>
        <img src="/projects/preordi/logo-icon.svg" alt="" className="w-[46%] max-w-64 drop-shadow-xl" />
      </LogoSlot>
    </div>
  )
}
