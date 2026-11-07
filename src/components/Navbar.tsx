import React, { useState, useEffect } from 'react'
import { FileText, ArrowUpRight, Menu, X } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import brandIcon from '../assets/icons/favicon.webp'
import { useLanguage } from '../context/LanguageContext'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { lang, toggleLang, t } = useLanguage()

  // Animation d'écriture et effacement automatique du nom (Machine à écrire)
  const fullName = personalInfo.name
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText.length < fullName.length) {
      // Écriture lettre par lettre
      timer = setTimeout(() => {
        setDisplayText(fullName.slice(0, displayText.length + 1))
      }, 100)
    } else if (!isDeleting && displayText.length === fullName.length) {
      // Pause de lecture une fois le nom entièrement écrit
      timer = setTimeout(() => {
        setIsDeleting(true)
      }, 2200)
    } else if (isDeleting && displayText.length > 0) {
      // Effacement fluide lettre par lettre
      timer = setTimeout(() => {
        setDisplayText(fullName.slice(0, displayText.length - 1))
      }, 45)
    } else if (isDeleting && displayText.length === 0) {
      // Pause avant de recommencer l'écriture
      timer = setTimeout(() => {
        setIsDeleting(false)
      }, 600)
    }

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, fullName])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fermer le menu mobile au redimensionnement vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-3.5 sm:px-8 lg:px-12 py-3 sm:py-4 transition-all duration-300 flex items-center justify-between ${
          scrolled || mobileMenuOpen
            ? 'bg-brand-brown/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        {/* Brand Icon + Name (left) - Largeur réservée fixe pour éviter tout décalage */}
        <a
          href="#"
          className="flex items-center gap-2 xs:gap-3 group focus:outline-none select-none shrink-0"
          title={personalInfo.name}
        >
          {/* Logo avec bordure blanche nette */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white p-1 flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-white/20 transition-all shrink-0">
            <img
              src={brandIcon}
              alt={`Logo ${personalInfo.name}`}
              width={36}
              height={36}
              className="w-full h-full object-contain filter drop-shadow-sm"
            />
          </div>

          {/* Nom animé : conteneur de largeur figée pour ne jamais faire bouger le reste de la navbar */}
          <span className="font-bold text-xs sm:text-sm tracking-tight text-[#f5f4f0] group-hover:text-white transition-colors inline-flex items-center w-[140px] xs:w-[165px] sm:w-[200px] shrink-0">
            <span className="truncate">{displayText}</span>
            <span className="inline-block w-0.5 h-3 sm:h-4 bg-white ml-0.5 animate-pulse shrink-0" />
          </span>
        </a>

        {/* Navigation links (center) : desktop uniquement - ANCRÉ RIGIDEMENT AU CENTRE */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3 text-[13px] font-semibold text-[#f5f4f0] tracking-tight absolute left-1/2 -translate-x-1/2 pointer-events-auto">
          <a
            href="#projects"
            className="px-3 py-1.5 rounded-lg transition-all text-[#f5f4f0] hover:text-brand-brown hover:bg-[#f5f4f0]"
          >
            {t.nav.projects}
          </a>
          <a
            href="#about"
            className="px-3 py-1.5 rounded-lg transition-all text-[#f5f4f0] hover:text-brand-brown hover:bg-[#f5f4f0]"
          >
            {t.nav.about}
          </a>
          <a
            href="#stack"
            className="px-3 py-1.5 rounded-lg transition-all text-[#f5f4f0] hover:text-brand-brown hover:bg-[#f5f4f0]"
          >
            {t.nav.stack}
          </a>
          <a
            href="#contact"
            className="px-3 py-1.5 rounded-lg transition-all text-[#f5f4f0] hover:text-brand-brown hover:bg-[#f5f4f0]"
          >
            {t.nav.contact}
          </a>
        </nav>

        {/* Action controls (right) */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Segmented language & CV bar */}
          <div className="flex items-center border-l border-r border-[#f5f4f0]/25 text-[#f5f4f0]">
            {/* FR / EN Toggle Button */}
            <button
              type="button"
              onClick={toggleLang}
              className="h-8 sm:h-10 px-2.5 sm:px-4 text-xs font-mono font-extrabold hover:text-brand-brown hover:bg-[#f5f4f0] transition-all flex items-center justify-center cursor-pointer select-none"
              title={lang === 'FR' ? 'Passer en anglais (EN)' : 'Passer en français (FR)'}
            >
              {lang}
            </button>

            {/* Ligne verticale séparatrice */}
            <div className="h-4 sm:h-5 w-px bg-[#f5f4f0]/25" />

            {/* CV Button */}
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 sm:h-10 px-2.5 sm:px-4 text-xs font-bold hover:text-brand-brown hover:bg-[#f5f4f0] transition-all flex items-center gap-1 sm:gap-1.5 cursor-pointer select-none"
              title="Ouvrir le CV officiel de NTEM Dilane (PDF)"
            >
              <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.2]" />
              <span>CV</span>
            </a>
          </div>

          {/* Action Button: Travaillons ensemble (visible sur tablette & desktop) */}
          <a
            href="#contact"
            className="hidden sm:inline-flex h-9 sm:h-10 px-3.5 sm:px-5 rounded-lg bg-brand-dark text-[#f5f4f0] hover:bg-[#f5f4f0] hover:text-brand-brown text-xs font-semibold tracking-wide items-center gap-1.5 sm:gap-2 shadow-lg shadow-black/20 transition-all hover:gap-3 active:scale-95 group"
          >
            <span>{t.nav.workTogetherShort}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Bouton Hamburger pour mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="lg:hidden w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-[#f5f4f0] transition-colors cursor-pointer select-none ml-1"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-13 sm:top-15 z-40 bg-brand-dark border-b border-white/15 px-6 py-6 text-white shadow-2xl lg:hidden animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 font-sans text-base">
            <a
              href="#projects"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/10 font-semibold flex items-center justify-between"
            >
              <span>{t.nav.projects}</span>
              <span className="text-xs font-mono text-white/50">01</span>
            </a>
            <a
              href="#about"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/10 font-semibold flex items-center justify-between"
            >
              <span>{t.nav.about}</span>
              <span className="text-xs font-mono text-white/50">02</span>
            </a>
            <a
              href="#stack"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/10 font-semibold flex items-center justify-between"
            >
              <span>{t.nav.stack}</span>
              <span className="text-xs font-mono text-white/50">03</span>
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="py-2 px-3 rounded-lg hover:bg-white/10 font-semibold flex items-center justify-between"
            >
              <span>{t.nav.contact}</span>
              <span className="text-xs font-mono text-white/50">04</span>
            </a>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full py-2.5 px-4 rounded-xl bg-linear-to-r from-[#b86432] to-brand-brown text-white text-center font-bold text-sm shadow-md"
              >
                {t.nav.workTogether} ↗
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
