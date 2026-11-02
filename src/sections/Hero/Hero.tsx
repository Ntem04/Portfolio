import React, { useState, useRef } from 'react'
import { ArrowDown, Code2 } from 'lucide-react'
import heroDeveloperPaint from '../../assets/images/hero-developer-paint.webp'
import backofficeImg from '../../assets/images/backoffice.webp'
import { personalInfo } from '../../data/portfolioData'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../../components/Reveal'

export interface HeroProps {
  onScrollToNext?: () => void
}

export const Hero: React.FC<HeroProps> = ({ onScrollToNext }) => {
  const { lang, t } = useLanguage()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const scrollToNext = () => {
    if (onScrollToNext) {
      onScrollToNext()
      return
    }
    const projectsEl = document.getElementById('projects')
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })
    }
  }

  // Parallax calculations
  const tiltX = isHovered ? -mousePos.y * 8 : 0
  const tiltY = isHovered ? mousePos.x * 10 : 0
  const transX = isHovered ? mousePos.x * 12 : 0
  const transY = isHovered ? mousePos.y * 8 : 0

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-[#6a3c20] text-[#f5f4f0] overflow-hidden flex flex-col justify-between select-none pt-20 sm:pt-24"
    >
      {/* =========================================================
          BACKGROUND : IMAGE BACKOFFICE AVEC LA COULEUR MARRON (#6a3c20)
         ========================================================= */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        {/* Image du backoffice en pleine largeur/hauteur */}
        <img
          src={backofficeImg}
          alt=""
          role="presentation"
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-105 opacity-30 mix-blend-luminosity filter contrast-125 brightness-90"
        />

        {/* Teinte de couleur marron (#6a3c20) et dégradés d'ambiance */}
        <div className="absolute inset-0 bg-[#6a3c20]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#6a3c20] via-[#6a3c20]/40 to-[#6a3c20]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6a3c20]/90 via-[#6a3c20]/60 to-[#6a3c20]/85" />
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none z-[1]" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] rounded-full bg-black/20 blur-3xl pointer-events-none z-[1]" />

      {/* Main Content Area (Split Grid: Image in Circle Left, Text Right) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-12 lg:px-16 py-8 sm:py-12 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          {/* =========================================================
              COLONNE GAUCHE : DÉGRADÉ BLANC-GRIS AVEC TACHES DE PEINTURE QUI S'EFFACE
             ========================================================= */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1">
            <Reveal direction="right" delay={0.15}>
              <div
                className="relative cursor-pointer group select-none flex items-center justify-center w-[300px] sm:w-[380px] md:w-[430px] h-[370px] sm:h-[440px]"
                onClick={() => setShowEasterEgg((prev) => !prev)}
              >
              {/* 1. Motif de points en diamant (Polka Dots) sur le côté gauche */}
              <svg
                className="absolute -left-3 sm:-left-8 top-6 sm:top-8 w-28 sm:w-36 h-48 sm:h-56 z-0 pointer-events-none opacity-70"
                viewBox="0 0 160 260"
                fill="none"
              >
                <circle cx="80" cy="20" r="5" fill="#161a1d" />
                <circle cx="50" cy="50" r="5" fill="#161a1d" />
                <circle cx="110" cy="50" r="5" fill="#161a1d" />
                <circle cx="20" cy="80" r="5" fill="#161a1d" />
                <circle cx="80" cy="80" r="5" fill="#161a1d" />
                <circle cx="140" cy="80" r="5" fill="#161a1d" />
                <circle cx="50" cy="110" r="5" fill="#161a1d" />
                <circle cx="110" cy="110" r="5" fill="#161a1d" />
                <circle cx="20" cy="140" r="5" fill="#161a1d" />
                <circle cx="80" cy="140" r="5" fill="#161a1d" />
                <circle cx="140" cy="140" r="5" fill="#161a1d" />
                <circle cx="50" cy="170" r="5" fill="#161a1d" />
                <circle cx="110" cy="170" r="5" fill="#161a1d" />
                <circle cx="20" cy="200" r="5" fill="#161a1d" />
                <circle cx="80" cy="200" r="5" fill="#161a1d" />
                <circle cx="50" cy="230" r="5" fill="#161a1d" />
                <circle cx="20" cy="260" r="5" fill="#161a1d" />
              </svg>

              {/* 2. DÉGRADÉ BLANC-GRIS ORGANIQUE AVEC ÉCLABOUSSURES & EFFACEMENT PROGRESSIF */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                {/* Lueur vaporeuse d'ambiance */}
                <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-tr from-white/20 via-slate-200/15 to-transparent blur-2xl" />

                <svg
                  viewBox="0 0 500 500"
                  className="w-[125%] h-[125%] max-w-none transform transition-transform duration-700 ease-out group-hover:scale-105"
                  fill="none"
                >
                  <defs>
                    {/* Dégradé principal blanc vers gris doux */}
                    <linearGradient id="paintGrad" x1="15%" y1="15%" x2="85%" y2="85%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
                      <stop offset="35%" stopColor="#f8fafc" stopOpacity="0.9" />
                      <stop offset="65%" stopColor="#e2e8f0" stopOpacity="0.75" />
                      <stop offset="85%" stopColor="#94a3b8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#64748b" stopOpacity="0" />
                    </linearGradient>

                    {/* Dégradé radial pour la dissipation douce sur les bords */}
                    <radialGradient id="fadeRadial" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="55%" stopColor="#f8fafc" stopOpacity="0.88" />
                      <stop offset="78%" stopColor="#e2e8f0" stopOpacity="0.5" />
                      <stop offset="92%" stopColor="#cbd5e1" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Forme principale de peinture fluide / tache de matière */}
                  <path
                    d="M 250 80 
                       C 320 70, 390 110, 410 170 
                       C 430 230, 440 310, 390 370 
                       C 340 430, 260 440, 190 420 
                       C 120 400, 70 340, 80 260 
                       C 90 180, 170 90, 250 80 Z"
                    fill="url(#fadeRadial)"
                    className="filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.2)]"
                  />

                  {/* Coulure artistique interne en dégradé blanc-argent */}
                  <path
                    d="M 230 110
                       C 300 95, 360 130, 380 190
                       C 400 250, 370 330, 330 380
                       C 290 420, 210 410, 160 370
                       C 110 330, 115 240, 140 180
                       C 165 125, 190 120, 230 110 Z"
                    fill="url(#paintGrad)"
                    opacity="0.9"
                  />

                  {/* TACHES DE PEINTURE QUI S'EFFACENT AU FUR ET À MESURE */}
                  {/* Grosses taches et gouttes proches de la masse */}
                  <circle cx="410" cy="140" r="14" fill="#ffffff" opacity="0.85" />
                  <circle cx="430" cy="180" r="9" fill="#f8fafc" opacity="0.75" />
                  <circle cx="395" cy="90" r="11" fill="#f1f5f9" opacity="0.8" />

                  {/* Éclaboussures qui s'estompent vers la droite */}
                  <circle cx="445" cy="120" r="7" fill="#e2e8f0" opacity="0.6" />
                  <circle cx="460" cy="155" r="5" fill="#cbd5e1" opacity="0.45" />
                  <circle cx="420" cy="70" r="6" fill="#f1f5f9" opacity="0.55" />
                  <circle cx="450" cy="85" r="4" fill="#e2e8f0" opacity="0.35" />

                  {/* Taches bas / droite en cours d'effacement */}
                  <circle cx="415" cy="380" r="12" fill="#e2e8f0" opacity="0.65" />
                  <circle cx="440" cy="350" r="7" fill="#cbd5e1" opacity="0.45" />
                  <circle cx="435" cy="410" r="5" fill="#94a3b8" opacity="0.3" />
                  <circle cx="380" cy="435" r="10" fill="#f1f5f9" opacity="0.55" />
                  <circle cx="350" cy="450" r="6" fill="#cbd5e1" opacity="0.35" />

                  {/* Taches bas / gauche */}
                  <circle cx="150" cy="425" r="11" fill="#f8fafc" opacity="0.65" />
                  <circle cx="120" cy="410" r="7" fill="#e2e8f0" opacity="0.45" />
                  <circle cx="95" cy="380" r="9" fill="#cbd5e1" opacity="0.3" />
                  <circle cx="75" cy="340" r="5" fill="#94a3b8" opacity="0.22" />

                  {/* Taches haut / gauche */}
                  <circle cx="100" cy="140" r="10" fill="#ffffff" opacity="0.8" />
                  <circle cx="70" cy="165" r="6" fill="#f8fafc" opacity="0.55" />
                  <circle cx="60" cy="200" r="4.5" fill="#e2e8f0" opacity="0.38" />
                  <circle cx="85" cy="110" r="7" fill="#f1f5f9" opacity="0.48" />
                  <circle cx="115" cy="80" r="5" fill="#e2e8f0" opacity="0.32" />

                  {/* Micro-gouttelettes fines qui s'effacent complètement vers l'extérieur */}
                  <circle cx="475" cy="135" r="2.5" fill="#94a3b8" opacity="0.25" />
                  <circle cx="465" cy="220" r="2" fill="#94a3b8" opacity="0.2" />
                  <circle cx="445" cy="430" r="3" fill="#64748b" opacity="0.18" />
                  <circle cx="320" cy="465" r="2.5" fill="#64748b" opacity="0.15" />
                  <circle cx="60" cy="130" r="2" fill="#cbd5e1" opacity="0.2" />
                  <circle cx="48" cy="180" r="2" fill="#94a3b8" opacity="0.15" />
                </svg>
              </div>

              {/* 3. Image du développeur avec contour blanc-gris découpé en 3D */}
              <div
                className="relative z-20 w-full h-full flex items-end justify-center transition-transform duration-300 ease-out will-change-transform"
                style={{
                  transform: isHovered
                    ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${transX}px, ${transY}px, 0)`
                    : undefined,
                }}
              >
                <div className={`w-full h-full flex items-end justify-center ${!isHovered ? 'animate-float-slow' : ''}`}>
                  <img
                    src={heroDeveloperPaint}
                    alt={personalInfo.name}
                    width={430}
                    height={440}
                    fetchPriority="high"
                    className="w-[88%] sm:w-[84%] md:w-[80%] h-auto object-contain transform translate-y-2 sm:translate-y-3 filter drop-shadow-[0_18px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
              </div>


              {/* 5. Tooltip interactif au clic */}
              {showEasterEgg && (
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-40 bg-[#161a1d] text-[#f5f4f0] px-4 py-2 rounded-lg shadow-2xl border border-white/10 text-xs whitespace-nowrap animate-in fade-in zoom-in duration-200">
                  <div className="flex items-center gap-1.5 font-bold font-mono text-[#f5f4f0]">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>{t.hero.readyToCode}</span>
                  </div>
                </div>
              )}
              </div>
            </Reveal>
          </div>

          {/* =========================================================
              COLONNE DROITE : LE TEXTE DU HERO (DESIGN ÉPURÉ & ÉDITORIAL)
             ========================================================= */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:pl-6">
            {/* Tagline / Subtitle */}
            <Reveal direction="up" delay={0.1}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 mb-5">
                <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-[#f5f4f0] uppercase">
                  {personalInfo.name}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#f5f4f0]/40" />
                <span className="text-xs sm:text-sm font-mono font-medium tracking-widest text-[#f5f4f0]/75 uppercase">
                  {t.hero.role}
                </span>
              </div>
            </Reveal>

            {/* Massive Typography: FULLSTACK PROMOTEUR */}
            <Reveal direction="up" delay={0.2}>
              <div className="mb-6 space-y-1">
                <h1 className="font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.88] tracking-tighter text-[#f5f4f0] drop-shadow-sm">
                  {personalInfo.title}
                </h1>
                <h1 className="font-black uppercase text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.88] tracking-tighter text-[#f5f4f0] drop-shadow-sm">
                  {lang === 'FR' ? personalInfo.subtitle : 'DEVELOPER'}
                </h1>
              </div>
            </Reveal>

            {/* Short Pitch / Description */}
            <Reveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-[#f5f4f0]/80 max-w-xl mb-10 leading-relaxed font-sans font-normal">
                {t.hero.pitch}
              </p>
            </Reveal>

            {/* Single Clean Action Link (Épuré & Minimaliste) */}
            <Reveal direction="up" delay={0.35}>
              <button
                type="button"
                onClick={scrollToNext}
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-[#f5f4f0] hover:text-white transition-all select-none cursor-pointer py-2 border-b border-white/20 hover:border-white"
              >
                <span>{t.hero.exploreProjects}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1 text-[#f5f4f0]/70 group-hover:text-white" />
              </button>
            </Reveal>
          </div>

        </div>
      </div>

      {/* =========================================================
          BANDEAU INFÉRIEUR DU HERO (3 BLOCS FIGÉS AVEC SÉPARATEURS VERTICAUX)
         ========================================================= */}
      <Reveal direction="up" delay={0.2} width="full">
        <div className="relative z-20 w-full border-t border-white/15 bg-[#121316] py-4 px-6 sm:px-12 shadow-2xl">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[#f5f4f0]/90">
            <div className="flex-1 flex items-center justify-center py-1">
              <span className="hover:text-white transition-colors">{t.hero.strip1}</span>
            </div>

            <div className="hidden sm:block h-4 w-[1.5px] bg-[#f5f4f0]/25 flex-shrink-0" aria-hidden="true" />

            <div className="flex-1 flex items-center justify-center py-1">
              <span className="hover:text-white transition-colors">{t.hero.strip2}</span>
            </div>

            <div className="hidden sm:block h-4 w-[1.5px] bg-[#f5f4f0]/25 flex-shrink-0" aria-hidden="true" />

            <div className="flex-1 flex items-center justify-center py-1">
              <span className="hover:text-white transition-colors">{t.hero.strip3}</span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}

export default Hero
