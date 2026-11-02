import React from 'react'
import { Phone, Mail, ArrowUp } from 'lucide-react'
import heroImg from '../assets/images/hero-developer.webp'
import { personalInfo } from '../data/portfolioData'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

// Icônes SVG fidèles
const GithubIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`}>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.73 1.25-.07 2.37-.87 2.77-2.05.18-.5.25-1.03.25-1.56V.02z" />
  </svg>
)

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.87a1.45 1.45 0 1 0 0 2.9 1.45 1.45 0 0 0 0-2.9z" />
  </svg>
)

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#0d0e12] text-white pt-16 sm:pt-20 pb-10 px-6 sm:px-12 lg:px-20 border-t border-white/10 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal direction="up" delay={0.1} width="full">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
            
            {/* Colonne Gauche : Avatar circulaire orange + Nom & Rôle */}
            <div className="flex items-center gap-4">
              {/* Avatar circulaire avec fond orange vif - prêt à recevoir votre photo */}
              <div
                className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#f65f19] overflow-hidden flex items-center justify-center flex-shrink-0 border border-white/10 shadow-lg shadow-[#f65f19]/20"
                title="Photo de profil"
              >
                <img
                  src={heroImg}
                  alt={personalInfo.name}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-full h-full object-cover object-top scale-125 translate-y-1.5 filter drop-shadow"
                />
              </div>

              {/* Nom & Titre */}
              <div className="flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  NTEM Dilane
                </h3>
                <p className="text-sm text-white/50 font-sans mt-0.5">
                  {lang === 'FR' ? 'Développeur Fullstack' : 'Fullstack Developer'}
                </p>
              </div>
            </div>

            {/* Colonnes Droite : Explorer & Réseaux Sociaux */}
            <div className="flex flex-wrap sm:flex-nowrap items-start gap-12 sm:gap-20 lg:gap-28">
              
              {/* Colonne 1 : EXPLORER */}
              <div className="flex flex-col space-y-3">
                <span className="text-xs font-mono font-medium tracking-[0.2em] text-white/40 uppercase mb-2">
                  {t.footer.explorer}
                </span>

                <a
                  href="#projects"
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.footer.projects}
                </a>

                <a
                  href="#about"
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.footer.about}
                </a>

                <a
                  href="#stack"
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.footer.stack}
                </a>

                <a
                  href="#contact"
                  className="text-sm text-white/80 hover:text-white transition-colors cursor-pointer"
                >
                  {t.footer.contact}
                </a>
              </div>

              {/* Colonne 2 : RÉSEAUX SOCIAUX */}
              <div className="flex flex-col space-y-3">
                <span className="text-xs font-mono font-medium tracking-[0.2em] text-white/40 uppercase mb-2">
                  {t.footer.socials}
                </span>

                {/* Github */}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors cursor-pointer group"
                >
                  <GithubIcon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  <span>Github</span>
                </a>

                {/* TikTok */}
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors cursor-pointer group"
                >
                  <TikTokIcon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  <span>TikTok</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors cursor-pointer group"
                >
                  <LinkedinIcon className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  <span>LinkedIn</span>
                </a>

                {/* Téléphone */}
                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors cursor-pointer group"
                >
                  <Phone className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  <span>{personalInfo.phone}</span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2.5 text-sm text-white/80 hover:text-white transition-colors cursor-pointer group"
                >
                  <Mail className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                  <span>{personalInfo.email}</span>
                </a>

                {/* Ville / Pays */}
                <span className="text-sm text-white/50 pt-1">
                  {personalInfo.location}
                </span>
              </div>

            </div>
          </div>

          {/* Bandeau inférieur avec séparateur fin */}
          <div className="border-t border-white/10 pt-8 mt-16 sm:mt-20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/50">
            <div>
              © {new Date().getFullYear()} NTEM Dilane. {t.footer.rights}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-white/70 hover:text-white transition-colors cursor-pointer group select-none"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}

export default Footer
