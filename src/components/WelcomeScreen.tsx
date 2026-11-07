import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sparkles,
  ArrowRight,
  Layers,
  Zap,
  Users,
  GraduationCap,
  Volume2,
  VolumeX,
  X,
  ChevronUp
} from 'lucide-react'
import defaultPhoto from '../assets/images/hero-developer.webp'
import { personalInfo } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'

interface WelcomeScreenProps {
  isOpen: boolean
  onClose: () => void
  /**
   * URL de votre future photo professionnelle.
   * Si non fournie, le composant utilise le portrait par défaut du projet.
   */
  customPhotoUrl?: string
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  isOpen,
  onClose,
  customPhotoUrl
}) => {
  const { lang, toggleLang } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(false)

  // Photo finale : soit celle fournie plus tard, soit la photo par défaut
  const photoSrc = customPhotoUrl || defaultPhoto

  // =========================================================================
  // ANIMATION DES FLUIDES EN ARRIÈRE-PLAN (CANVAS FLUID ORGANIC MESH)
  // Rendu 60 FPS ultra léger pour mobile, sans dépendances lourdes
  // =========================================================================
  useEffect(() => {
    if (!isOpen) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Configuration des orbes de fluide liquide chaud (charte cuivre / terracotta / doré)
    const fluidBlobs = [
      {
        x: width * 0.3,
        y: height * 0.25,
        radius: Math.min(width, height) * 0.45,
        color: 'rgba(148, 82, 42, 0.45)', // Cuivre chaud
        vx: 0.35,
        vy: 0.25,
        angle: 0,
        speed: 0.015,
      },
      {
        x: width * 0.75,
        y: height * 0.4,
        radius: Math.min(width, height) * 0.5,
        color: 'rgba(217, 119, 54, 0.35)', // Terracotta / Ambre
        vx: -0.28,
        vy: 0.32,
        angle: 1.5,
        speed: 0.012,
      },
      {
        x: width * 0.5,
        y: height * 0.8,
        radius: Math.min(width, height) * 0.55,
        color: 'rgba(106, 60, 32, 0.55)', // Brun profond
        vx: 0.2,
        vy: -0.22,
        angle: 3.1,
        speed: 0.009,
      },
      {
        x: width * 0.2,
        y: height * 0.7,
        radius: Math.min(width, height) * 0.35,
        color: 'rgba(245, 158, 11, 0.22)', // Or liquide
        vx: -0.25,
        vy: -0.18,
        angle: 4.2,
        speed: 0.018,
      },
    ]

    // Particules de poussière dorée en suspension
    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      vy: Math.random() * 0.4 + 0.15,
      alpha: Math.random() * 0.6 + 0.2,
    }))

    const render = () => {
      ctx.fillStyle = '#0f0603' // Fond très sombre chaleureux
      ctx.fillRect(0, 0, width, height)

      // Rendu des fluides organiques
      fluidBlobs.forEach((blob) => {
        blob.angle += blob.speed
        const currentX = blob.x + Math.sin(blob.angle) * 35
        const currentY = blob.y + Math.cos(blob.angle) * 35

        const grad = ctx.createRadialGradient(
          currentX,
          currentY,
          10,
          currentX,
          currentY,
          blob.radius
        )
        grad.addColorStop(0, blob.color)
        grad.addColorStop(1, 'rgba(15, 6, 3, 0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(currentX, currentY, blob.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Vagues fluides ondulantes douces (Mesh wave)
      const time = Date.now() * 0.001
      ctx.fillStyle = 'rgba(217, 119, 54, 0.08)'
      ctx.beginPath()
      ctx.moveTo(0, height)
      for (let x = 0; x <= width; x += 25) {
        const y =
          height * 0.65 +
          Math.sin(x * 0.005 + time) * 30 +
          Math.cos(x * 0.008 - time * 0.7) * 20
        ctx.lineTo(x, y)
      }
      ctx.lineTo(width, height)
      ctx.closePath()
      ctx.fill()

      // Particules dorées flottantes
      particles.forEach((p) => {
        p.y -= p.vy
        if (p.y < 0) {
          p.y = height
          p.x = Math.random() * width
        }
        ctx.fillStyle = `rgba(245, 190, 110, ${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isOpen])

  // Gestion du son discret de bienvenue (synthétiseur Web Audio API doux, optionnel)
  const playSoftChime = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!AudioCtx) return
      const audioCtx = new AudioCtx()
      const now = audioCtx.currentTime

      const osc = audioCtx.createOscillator()
      const gain = audioCtx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(440, now)
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.35)

      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8)

      osc.connect(gain)
      gain.connect(audioCtx.destination)
      osc.start(now)
      osc.stop(now + 0.8)
    } catch {
      // Ignorer si bloqué par l'autoplay
    }
  }

  const handleEnter = () => {
    if (soundEnabled) {
      playSoftChime()
    }
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="welcome-splash"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            scale: 0.98,
            transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between overflow-y-auto overflow-x-hidden select-none bg-[#0f0603] text-[#f5f4f0]"
          style={{
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* =========================================================
              1. FOND FLUIDE DYNAMIQUE (CANVAS + BLUR GLASSOVERLAY)
             ========================================================= */}
          <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
          />

          {/* Calque de bruit subtil & vignettage pour l'aspect éditorial */}
          <div className="fixed inset-0 pointer-events-none z-[1] bg-radial from-transparent via-[#0f0603]/30 to-[#0a0402]/90 mix-blend-multiply" />
          <div className="fixed inset-0 pointer-events-none z-[2] backdrop-blur-[1.5px]" />

          {/* =========================================================
              2. BARRE D'ENTÊTE MOBILE MINIMALE & ÉLÉGANTE
             ========================================================= */}
          <header className="relative z-10 w-full px-5 pt-5 pb-3 flex items-center justify-between">
            {/* Monogramme / Logo tactile */}
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#94522a] to-[#250d06] border border-[#d97736]/40 flex items-center justify-center shadow-lg shadow-[#000000]/40">
                <span className="text-xs font-black tracking-wider text-[#f5f4f0]">
                  ND
                </span>
              </div>
              <div>
                <p className="text-[11px] font-bold tracking-widest uppercase text-[#e5a86d]">
                  Portfolio 2026-2027
                </p>
                <p className="text-[10px] text-white/50 -mt-0.5">
                  Mobile Preview
                </p>
              </div>
            </div>

            {/* Actions rapides : Langue, Son discret & Fermer / Passer */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleLang}
                className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white/80 transition-all backdrop-blur-md active:scale-95"
                title="Changer de langue"
              >
                {lang}
              </button>

              <button
                type="button"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-2 rounded-full border transition-all active:scale-95 backdrop-blur-md ${
                  soundEnabled
                    ? 'bg-[#d97736]/30 border-[#d97736] text-[#e5a86d]'
                    : 'bg-white/5 border-white/10 text-white/50'
                }`}
                title={soundEnabled ? 'Son activé' : 'Activer le retour sonore'}
                aria-label="Toggle sound"
              >
                {soundEnabled ? (
                  <Volume2 className="w-3.5 h-3.5" />
                ) : (
                  <VolumeX className="w-3.5 h-3.5" />
                )}
              </button>

              <button
                type="button"
                onClick={handleEnter}
                className="p-2 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all active:scale-95 backdrop-blur-md"
                title="Passer directement"
                aria-label="Fermer la page d'accueil"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </header>

          {/* =========================================================
              3. CORPS CENTRAL : PHOTO PRO, MESSAGE & PRÉSENTATION
             ========================================================= */}
          <main className="relative z-10 w-full px-5 py-4 flex-1 flex flex-col items-center justify-center text-center max-w-md mx-auto">
            {/* CADRE PHOTO PROFESSIONNELLE AVEC HALO FLUIDE ANIMÉ */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-5"
            >
              {/* Anneau lumineux tournant & pulsé (effet fluide de luxe) */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-[#d97736] via-[#94522a] to-[#ffba7a] opacity-80 blur-md animate-pulse" />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#e5a86d] via-[#d97736] to-[#6a3c20] opacity-90" />

              {/* Conteneur de la photo */}
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white/40 shadow-2xl bg-[#1d0d07] flex items-center justify-center">
                <img
                  src={photoSrc}
                  alt={personalInfo.name}
                  onLoad={() => setPhotoLoaded(true)}
                  className={`w-full h-full object-cover object-top transition-transform duration-700 ease-out hover:scale-110 ${
                    photoLoaded ? 'opacity-100' : 'opacity-80 blur-xs'
                  }`}
                />

                {/* Badge d'aide visuelle si c'est le placeholder par défaut */}
                {!customPhotoUrl && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center pb-2 pointer-events-none">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-amber-200/90 bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-xs">
                      Photo Pro
                    </span>
                  </div>
                )}
              </div>

              {/* Badge d'état flottant : Disponible pour stage */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.35, type: 'spring' }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#160903]/90 border border-[#d97736]/60 rounded-full px-3 py-1 shadow-lg backdrop-blur-md flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span className="text-[10px] font-semibold text-white/90">
                  {lang === 'FR' ? 'Stage Fév. 2027' : 'Internship Feb 2027'}
                </span>
              </motion.div>
            </motion.div>

            {/* MESSAGE DE BIENVENUE ÉDITORIAL & IMPACTANT */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-2 mt-1"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#d97736]/15 border border-[#d97736]/30 text-[#e5a86d] text-[11px] font-medium tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-[#ffba7a]" />
                <span>
                  {lang === 'FR'
                    ? 'Bienvenue dans mon univers'
                    : 'Welcome to my creative space'}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
                {personalInfo.name}
              </h1>

              <p className="text-xs sm:text-sm font-semibold text-[#e5a86d] flex items-center justify-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#d97736]" />
                <span>Polytechnique Douala (2024–2027)</span>
              </p>

              <div className="pt-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#94522a]/30 border border-[#d97736]/40 text-[#ffba7a] text-[10px] font-mono uppercase tracking-wider">
                  {lang === 'FR' ? 'Ingénieur Fullstack • Rigueur & Agilité' : 'Fullstack Engineer • Rigor & Agility'}
                </span>
              </div>

              <p className="text-xs text-white/80 leading-relaxed pt-1 max-w-sm mx-auto">
                {lang === 'FR' ? (
                  <>
                    Architecture de solutions de bout en bout. Découvrez un écosystème alliant{' '}
                    <span className="text-[#ffba7a] font-medium">
                      dossiers 3D interactifs
                    </span>
                    , apprentissage méthodique pas à pas et synergie d’équipe.
                  </>
                ) : (
                  <>
                    Architecting end-to-end software solutions. Explore an ecosystem blending{' '}
                    <span className="text-[#ffba7a] font-medium">
                      3D interactive dossiers
                    </span>
                    , structured step-by-step learning, and strong team synergy.
                  </>
                )}
              </p>
            </motion.div>

            {/* APERÇU RAPIDE DES 3 FORCES CLÉS (FULLSTACK, APPRENTISSAGE, ÉQUIPE) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-3 gap-2 w-full mt-4"
            >
              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-[#d97736]/30 backdrop-blur-md flex flex-col items-center text-center">
                <Layers className="w-4 h-4 text-[#e5a86d] mb-1" />
                <span className="text-[10px] font-bold text-white">Fullstack</span>
                <span className="text-[9px] text-white/50">React & Node</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-amber-500/30 backdrop-blur-md flex flex-col items-center text-center">
                <Zap className="w-4 h-4 text-amber-400 mb-1" />
                <span className="text-[10px] font-bold text-white">
                  {lang === 'FR' ? 'Pas à pas' : 'Step-by-step'}
                </span>
                <span className="text-[9px] text-white/50">
                  {lang === 'FR' ? 'Apprentissage' : 'Fast learner'}
                </span>
              </div>

              <div className="p-2.5 rounded-xl bg-white/[0.04] border border-emerald-500/30 backdrop-blur-md flex flex-col items-center text-center">
                <Users className="w-4 h-4 text-emerald-400 mb-1" />
                <span className="text-[10px] font-bold text-white">
                  {lang === 'FR' ? 'En équipe' : 'Teamwork'}
                </span>
                <span className="text-[9px] text-white/50">
                  {lang === 'FR' ? 'Synergie & Agile' : 'Synergy & Agile'}
                </span>
              </div>
            </motion.div>
          </main>

          {/* =========================================================
              4. BAS DE PAGE MOBILE : CTA PRINCIPAL & INDICATION SWIPE
             ========================================================= */}
          <footer className="relative z-10 w-full px-5 pb-6 pt-2 flex flex-col items-center max-w-md mx-auto">
            {/* Grand bouton d'entrée dans le portfolio avec vague fluide lumineuse */}
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              onClick={handleEnter}
              whileTap={{ scale: 0.97 }}
              className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#94522a] via-[#c46328] to-[#94522a] p-[1.5px] shadow-xl shadow-[#000000]/60 active:opacity-95"
            >
              <div className="relative w-full py-3.5 px-6 rounded-2xl bg-gradient-to-b from-[#2a1309] to-[#120703] flex items-center justify-center gap-3 transition-colors group-hover:from-[#35180c] group-hover:to-[#170a04]">
                {/* Lueur fluide au hover / tap */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d97736]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                <span className="text-sm font-bold tracking-wide text-white">
                  {lang === 'FR' ? "Découvrir le Portfolio" : "Explore Portfolio"}
                </span>

                <div className="w-6 h-6 rounded-full bg-[#d97736]/30 flex items-center justify-center text-[#ffba7a] group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.button>

            {/* Micro-interaction : swipe up ou tape direct */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="mt-3 flex items-center gap-1.5 text-[11px] text-white/40 cursor-pointer hover:text-white/70 transition-colors"
              onClick={handleEnter}
            >
              <ChevronUp className="w-3.5 h-3.5 animate-bounce" />
              <span>
                {lang === 'FR'
                  ? 'Tapez ou glissez pour explorer'
                  : 'Tap or swipe up to explore'}
              </span>
            </motion.div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default WelcomeScreen

