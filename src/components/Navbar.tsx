import React, { useState, useEffect } from 'react'
import { FileText, ArrowUpRight } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import brandIcon from '../assets/icons/favicon.webp'
import { useLanguage } from '../context/LanguageContext'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-12 py-4 transition-all duration-300 flex items-center justify-between ${
        scrolled
          ? 'bg-[#6a3c20]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent'
      }`}
    >
      {/* Brand Icon + Name (left) */}
      <a
        href="#"
        className="flex items-center gap-3 group focus:outline-none select-none"
        title={personalInfo.name}
      >
        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 p-1 flex items-center justify-center shadow-sm group-hover:scale-105 group-hover:border-white/40 group-hover:bg-white/15 transition-all">
          <img
            src={brandIcon}
            alt={`Logo ${personalInfo.name}`}
            width={36}
            height={36}
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>
        <span className="font-bold text-xs sm:text-sm tracking-tight text-[#f5f4f0] group-hover:text-white transition-colors truncate max-w-[140px] sm:max-w-none">
          {personalInfo.name}
        </span>
      </a>

      {/* Navigation links (center) : dynamique selon langue */}
      <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[13px] font-semibold text-[#f5f4f0] tracking-tight">
        <a
          href="#projects"
          className="px-3 py-1.5 rounded-lg transition-all text-[#f5f4f0] hover:text-[#6a3c20] hover:bg-[#f5f4f0]"
        >
          {t.nav.projects}
        </a>
        <a
          href="#about"
          className="px-3 py-1.5 rounded-lg transition-all text-[#f5f4f0] hover:text-[#6a3c20] hover:bg-[#f5f4f0]"
        >
          {t.nav.about}
        </a>
        <a
          href="#stack"
          className="px-3 py-1.5 rounded-lg transition-all text-[#f5f4f0] hover:text-[#6a3c20] hover:bg-[#f5f4f0]"
        >
          {t.nav.stack}
        </a>
        <a
          href="#contact"
          className="px-3 py-1.5 rounded-lg transition-all text-[#f5f4f0] hover:text-[#6a3c20] hover:bg-[#f5f4f0]"
        >
          {t.nav.contact}
        </a>
      </nav>

      {/* Action controls (right) : barre segmentée | FR | CV | avec traits verticaux */}
      <div className="flex items-center">
        {/* Segmented language & CV bar matching user screenshot */}
        <div className="flex items-center border-l border-r border-[#f5f4f0]/25 text-[#f5f4f0]">
          {/* FR / EN Toggle Button */}
          <button
            type="button"
            onClick={toggleLang}
            className="h-9 sm:h-10 px-3 sm:px-4 text-xs font-mono font-extrabold hover:text-[#6a3c20] hover:bg-[#f5f4f0] transition-all flex items-center justify-center cursor-pointer select-none"
            title={lang === 'FR' ? 'Passer en anglais (EN)' : 'Passer en français (FR)'}
          >
            {lang}
          </button>

          {/* Ligne verticale séparatrice */}
          <div className="h-5 w-[1px] bg-[#f5f4f0]/25" />

          {/* CV Button avec icône document cliquable vers le PDF officiel */}
          <a
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="h-9 sm:h-10 px-3 sm:px-4 text-xs font-bold hover:text-[#6a3c20] hover:bg-[#f5f4f0] transition-all flex items-center gap-1.5 cursor-pointer select-none"
            title="Ouvrir le CV officiel de NTEM Dilane (PDF)"
          >
            <FileText className="w-3.5 h-3.5 stroke-[2.2]" />
            <span>CV</span>
          </a>
        </div>

        {/* Action Button: Travaillons ensemble */}
        <a
          href="#contact"
          className="ml-2.5 sm:ml-4 h-9 sm:h-10 px-3 sm:px-5 rounded-lg bg-[#161a1d] text-[#f5f4f0] hover:bg-[#f5f4f0] hover:text-[#6a3c20] text-xs font-semibold tracking-wide flex items-center gap-1.5 sm:gap-2 shadow-lg shadow-black/20 transition-all hover:gap-3 active:scale-95 group"
        >
          <span className="hidden sm:inline">{t.nav.workTogether}</span>
          <span className="sm:hidden">{t.nav.workTogetherShort}</span>
          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </header>
  )
}

export default Navbar
