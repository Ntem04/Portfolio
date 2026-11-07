import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, GraduationCap, X } from 'lucide-react'
import defaultPhoto from '../assets/images/hero-developer.webp'
import { personalInfo } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

interface WelcomeScreenProps {
  isOpen: boolean
  onClose: () => void
  customPhotoUrl?: string
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  isOpen,
  onClose,
  customPhotoUrl,
}) => {
  const { lang, toggleLang } = useLanguage()
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const photoSrc = customPhotoUrl || defaultPhoto

  // Ergonomie & Sécurité : Raccourcis clavier (Escape ou Entrée pour continuer)
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        e.preventDefault()
        onClose()
      }
    }

    // Verrouillage du scroll arrière-plan sans sauts d'écran
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="welcome-splash"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.25 } }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-y-auto overflow-x-hidden bg-[#120703] text-[#f5f4f0] select-none"
        >
          {/* FOND ARCHITECTURAL ÉPURÉ : Grille d'ingénierie fine & dégradé profond naturel */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {/* Grille technique de précision */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: `radial-gradient(rgba(245, 244, 240, 0.6) 1px, transparent 1px)`,
                backgroundSize: '24px 24px',
              }}
            />
            {/* Dégradé vertical sombre aux teintes espresso/cuivre */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#180b05] via-[#120703] to-[#0a0301]" />
            {/* Halo chaud discret en zénith */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-[260px] bg-[#6a3c20]/20 rounded-full blur-[90px]" />
          </div>

          {/* =========================================================
              1. HEADER SUPÉRIEUR MINIMALISTE & ÉLÉGANT
             ========================================================= */}
          <header className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 pt-6 pb-4 flex items-center justify-between border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#6a3c20] text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-sm">
                ND
              </div>
              <div>
                <p className="text-xs font-bold tracking-wider text-[#f5f4f0] uppercase">
                  {personalInfo.name}
                </p>
                <p className="text-[10px] font-mono text-[#e5a86d]/85 uppercase tracking-widest">
                  Portfolio 2026-2027
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleLang}
                className="px-3 py-1 rounded-full text-xs font-bold border border-white/15 bg-white/5 hover:bg-white/10 text-white/90 transition-colors"
                title="Changer de langue"
              >
                {lang}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                title={lang === 'FR' ? 'Passer directement (Échap)' : 'Skip (Esc)'}
                aria-label="Fermer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* =========================================================
              2. CORPS CENTRAL : ÉDITORIAL, PROPRE ET ÉPURÉ
             ========================================================= */}
          <main className="relative z-10 w-full max-w-xl mx-auto px-5 py-8 flex-1 flex flex-col items-center justify-center text-center my-auto">
            {/* PORTRAIT DANS UN CADRE ARCHITECTURAL ÉPURÉ */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="relative mb-6"
            >
              {/* Cadre net capsule ovale en harmonie avec l'identité du portfolio */}
              <div className="relative w-28 h-36 sm:w-32 sm:h-40 rounded-[50px] overflow-hidden bg-gradient-to-b from-[#6a3c20] to-[#250e06] border-2 border-[#d97736]/40 shadow-xl shadow-black/40 flex items-end justify-center">
                <img
                  src={photoSrc}
                  alt={personalInfo.name}
                  onLoad={() => setPhotoLoaded(true)}
                  className={`w-full h-full object-contain object-bottom filter drop-shadow-md transition-opacity duration-300 ${
                    photoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </motion.div>

            {/* BADGE ÉCOLE SOBRE */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-[#e5a86d] font-medium mb-3"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#d97736]" />
              <span>Polytechnique Douala (2024–2027)</span>
            </motion.div>

            {/* NOM & TITRE PRINCIPAL */}
            <motion.h1
              id="welcome-title"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.35 }}
              className="text-2xl xs:text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#f5f4f0] mb-2 font-['Cabinet_Grotesk',sans-serif]"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.35 }}
              className="text-xs sm:text-sm font-mono tracking-widest text-[#d97736] uppercase font-bold mb-4"
            >
              {lang === 'FR' ? 'Élève Ingénieur en Génie Logiciel' : 'Software Engineering Student'}
            </motion.p>

            {/* DESCRIPTION ÉPURÉE, SANS JARGON IA */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.35 }}
              className="text-xs sm:text-sm text-[#f5f4f0]/80 max-w-md leading-relaxed mb-6 font-sans"
            >
              {lang === 'FR'
                ? "Conception d'applications web modernes, d'architectures réseau robustes et de solutions logicielles complètes. Recherche active d'un stage ingénieur de 4 à 5 mois dès le 2 février 2027 à Douala."
                : 'Designing modern web applications, robust network architectures, and complete software solutions. Actively seeking a 4 to 5-month engineering internship starting February 2, 2027 in Douala.'}
            </motion.p>

            {/* LES 3 PILIERS TECHNIQUES DU PROFIL (GRILLE ARCHITECTURALE) */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full max-w-md mb-8"
            >
              <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-left">
                <span className="text-[10px] font-mono text-[#d97736] uppercase tracking-wider block font-bold">
                  01 / Stack
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5">
                  React 19 & Node.js
                </span>
              </div>

              <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-left">
                <span className="text-[10px] font-mono text-[#d97736] uppercase tracking-wider block font-bold">
                  02 / Rigueur
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5">
                  Systèmes & Réseaux
                </span>
              </div>

              <div className="px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-left">
                <span className="text-[10px] font-mono text-[#d97736] uppercase tracking-wider block font-bold">
                  03 / Objectif
                </span>
                <span className="text-xs font-semibold text-white block mt-0.5">
                  Stage Fév. 2027
                </span>
              </div>
            </motion.div>

            {/* BOUTON D'ACTION PRINCIPAL ÉPURÉ & PROFESSIONNEL */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.35 }}
              className="w-full max-w-xs flex flex-col items-center gap-2"
            >
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 px-6 rounded-xl bg-[#6a3c20] hover:bg-[#854722] active:scale-[0.99] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#6a3c20]/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>{lang === 'FR' ? 'Découvrir le Portfolio' : 'Explore Portfolio'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <span className="text-[10px] font-mono text-white/40">
                {lang === 'FR' ? 'Entrée ↵ ou Échap pour continuer' : 'Press Enter ↵ or Esc to continue'}
              </span>
            </motion.div>
          </main>

          {/* FOOTER DISCRET & SOBRE */}
          <footer className="relative z-10 w-full max-w-5xl mx-auto px-5 py-4 flex items-center justify-between text-[10px] font-mono text-white/40 border-t border-white/[0.06]">
            <span>Douala, Cameroun</span>
            <span>Polytechnique Douala • 2024–2027</span>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeScreen
