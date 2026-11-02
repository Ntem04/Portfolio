import React, { useState } from 'react'
import TechCard, { type TechItemDef } from './TechCard'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../../components/Reveal'

// =========================================================================
// 1. FRONTEND ITEMS (EXPO RETIRÉ SELON DEMANDE)
// =========================================================================
const frontendItems: TechItemDef[] = [
  {
    name: 'React',
    icon: (
      <svg viewBox="-11.5 -10.23 23 20.46" className="w-6 h-6" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    icon: (
      <svg viewBox="0 0 180 180" className="w-6 h-6" fill="none">
        <circle cx="90" cy="90" r="86" fill="black" stroke="black" strokeWidth="4" />
        <path
          d="M149.5 157.5L69.1 54H54V126H66.1V69.4L140 164.8C143.3 162.6 146.5 160.2 149.5 157.5Z"
          fill="white"
        />
        <rect x="115" y="54" width="12" height="72" fill="white" />
      </svg>
    ),
  },
  {
    name: 'Vite.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="m19.2 1.4-8.8 1.6-6.4 11.2 5.5 1-4.5 7.4 14-11.4-5.6-1z" />
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    icon: (
      <div className="w-6 h-6 rounded bg-[#161a1d] text-white font-extrabold text-[10px] flex items-center justify-center font-mono">
        TS
      </div>
    ),
  },
  {
    name: 'Tailwind CSS',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6C13.7 10.6 15 12 18 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C16.3 6.2 15 4.8 12 4.8zM6 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6.9 2.3 1.6 1.2 1.2 2.5 2.6 5.5 2.6 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-.9-2.3-1.6C10.3 13.4 9 12 6 12z" />
      </svg>
    ),
  },
  {
    name: 'React Native',
    icon: (
      <svg viewBox="-11.5 -10.23 23 20.46" className="w-6 h-6 text-[#161a1d]" fill="currentColor">
        <circle cx="0" cy="0" r="2.05" />
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: 'JavaScript ES6+',
    icon: (
      <div className="w-6 h-6 rounded bg-[#161a1d] text-white font-extrabold text-[10px] flex items-center justify-center font-mono">
        JS
      </div>
    ),
  },
]

// =========================================================================
// 2. BACKEND ITEMS (NESTJS RETIRÉ SELON DEMANDE)
// =========================================================================
const backendItems: TechItemDef[] = [
  {
    name: 'Node.js',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2L2 7.7v11.6L12 25l10-5.7V7.7L12 2zm0 2.3l8 4.6v9.2l-8 4.6-8-4.6V8.9l8-4.6z" />
      </svg>
    ),
  },
  {
    name: 'Express',
    icon: (
      <div className="text-sm font-extrabold font-mono tracking-tighter text-[#161a1d]">
        ex
      </div>
    ),
  },
  {
    name: 'PostgreSQL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
  },
  {
    name: 'Prisma',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 21L12 3l8 18H4z" strokeLinejoin="round" />
        <path d="M12 3v18" />
      </svg>
    ),
  },
  {
    name: 'SQLite',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    name: 'MySQL',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 3C6.5 3 2 6.5 2 11c0 2.8 1.8 5.3 4.5 6.7L6 21l3.8-1.9c.7.2 1.4.3 2.2.3 5.5 0 10-3.5 10-8s-4.5-8-10-8zm-2 10.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm4 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" />
      </svg>
    ),
  },
  {
    name: 'Redis',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zm-8 8.5l8 4 8-4v3l-8 4-8-4v-3zm0 5l8 4 8-4v3l-8 4-8-4v-3z" />
      </svg>
    ),
  },
]

// =========================================================================
// 3. SERVICES ITEMS
// =========================================================================
const servicesItems: TechItemDef[] = [
  {
    name: 'Supabase',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.12 14.288a.792.792 0 0 0 .616 1.282h9.264v8.958a.396.396 0 0 0 .716.233l11.164-14.125a.792.792 0 0 0-.518-1.282z" />
      </svg>
    ),
  },
  {
    name: 'Vercel',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
    ),
  },
  {
    name: 'Firebase',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4.3 14.5L1.8 19.1c-.3.6.1 1.3.8 1.3h14.9L4.3 14.5zM12.9 6.2L9.2 12.8l7.2 4-3.5-10.6zm-1.8-4c-.4-.7-1.4-.7-1.8 0L6.7 9.8l4.4 2.4z" />
      </svg>
    ),
  },
  {
    name: 'Google Cloud',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M13.9 11.2h2.2v2.2H13.9zm-3.3 0h2.2v2.2h-2.2zm-3.3 0h2.2v2.2H7.3zm10 0h2.2v2.2h-2.2zm-6.7-3.3h2.2v2.2h-2.2zm3.3 0h2.2v2.2h-2.2zm-6.6 0h2.2v2.2H7.3zm6.6-3.3h2.2v2.2h-2.2zM23.8 12.8c-.4-.4-1.2-.6-2.1-.6-.2-1.3-.9-2.3-2-3-.3-.2-.6-.1-.8.2-.2.3-.1.6.2.8.9.6 1.4 1.4 1.6 2.4H1c-.6 0-1 .4-1 1 0 4.4 3.6 8 8 8 5.7 0 10.3-4.2 11.1-9.6.9.1 1.7.3 2.1.8.2.2.5.3.7.1.3-.2.3-.5.1-.7z" />
      </svg>
    ),
  },
  {
    name: 'Cloudflare',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
      </svg>
    ),
  },
]

// =========================================================================
// 4. COLLABORATION / TOOLS ITEMS (FIGMA RETIRÉ SELON DEMANDE)
// =========================================================================
const collaborationItems: TechItemDef[] = [
  {
    name: 'Git',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 15v-6a3 3 0 0 0-3-3H9" />
        <path d="M6 9v6" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'Postman',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-9l7 4.5-7 4.5z" />
      </svg>
    ),
  },
  {
    name: 'VS Code',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M17.5 1.5 8 9.5 3.5 6 1 7.5v9L3.5 18 8 14.5l9.5 8 5.5-2.5V4l-5.5-2.5zm.5 4.5v12l-6-5.5 6-6.5z" />
      </svg>
    ),
  },
  {
    name: 'Linux',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
        <path d="M4 17l6-6-6-6v12zm8 0h8v-2h-8v2z" />
      </svg>
    ),
  },
  {
    name: 'REST APIs',
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
]

interface CategoryRowProps {
  number: string
  title: string
  items: TechItemDef[]
  direction?: 'left' | 'right'
}

const CategoryRow: React.FC<CategoryRowProps> = ({
  number,
  title,
  items,
  direction = 'left',
}) => {
  const { t } = useLanguage()
  const [viewAll, setViewAll] = useState(false)

  // Duplication des items pour assurer un défilement infini fluide
  const marqueeItems = [...items, ...items, ...items, ...items]

  return (
    <div className="w-full space-y-3.5">
      {/* Category header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-[#b85d34]">{number}</span>
          <span className="text-xs sm:text-sm font-bold text-[#161a1d] tracking-tight">
            {title}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setViewAll((prev) => !prev)}
          className="flex items-center gap-1.5 text-xs font-medium text-black/60 hover:text-black transition-colors cursor-pointer select-none py-1"
        >
          <span>{viewAll ? t.stack.showMarquee : t.stack.viewAll}</span>
          <div className="w-4 h-4 rounded-full border border-black/20 flex items-center justify-center">
            {viewAll ? (
              <ChevronUp className="w-2.5 h-2.5" />
            ) : (
              <ChevronDown className="w-2.5 h-2.5" />
            )}
          </div>
        </button>
      </div>

      {/* Marquee or Grid View */}
      {viewAll ? (
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 pt-1 animate-in fade-in duration-300">
          {items.map((item, idx) => (
            <TechCard key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>
      ) : (
        <div className="relative w-full overflow-hidden group">
          {/* Edge gradient fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling track */}
          <div
            className={
              direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
            }
          >
            <div className="flex items-center gap-4 py-1 pr-4">
              {marqueeItems.map((item, idx) => (
                <TechCard key={`${item.name}-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export const TechStack: React.FC = () => {
  const { t } = useLanguage()

  return (
    <section
      id="stack"
      className="relative min-h-screen bg-white text-[#161a1d] py-20 sm:py-28 overflow-hidden flex flex-col justify-center border-t border-black/5"
    >
      {/* Top Section Header */}
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-12 mb-12 sm:mb-16">
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#b85d34] uppercase">
              {t.stack.tag}
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-[#161a1d] leading-none">
              {t.stack.title}<span className="text-[#b85d34]">.</span>
            </h2>
          </div>
        </Reveal>
      </div>

      {/* 4 Category Marquee Rows */}
      <div className="w-full space-y-8 sm:space-y-10">
        <Reveal direction="up" delay={0.15} width="full">
          <CategoryRow
            number="01"
            title={t.stack.frontend}
            items={frontendItems}
            direction="left"
          />
        </Reveal>

        <Reveal direction="up" delay={0.2} width="full">
          <CategoryRow
            number="02"
            title={t.stack.backend}
            items={backendItems}
            direction="right"
          />
        </Reveal>

        <Reveal direction="up" delay={0.25} width="full">
          <CategoryRow
            number="03"
            title={t.stack.services}
            items={servicesItems}
            direction="left"
          />
        </Reveal>

        <Reveal direction="up" delay={0.3} width="full">
          <CategoryRow
            number="04"
            title={t.stack.collaboration}
            items={collaborationItems}
            direction="right"
          />
        </Reveal>
      </div>
    </section>
  )
}

export default TechStack
