import React from 'react'
import heroImg from '../../assets/images/hero-developer.webp'
import { personalInfo } from '../../data/portfolioData'

export const PortraitCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto py-8 flex items-center justify-center select-none group">
      {/* =================================================================
          1. ANNEAUX ORBITAUX VECTORIELS (ARRIÈRE-PLAN)
         ================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
        viewBox="0 0 420 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="orbitGradPurple" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6a3c20" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="orbitGradAccent" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        {/* Grand anneau orbital incliné */}
        <ellipse
          cx="210"
          cy="260"
          rx="175"
          ry="210"
          transform="rotate(-22 210 260)"
          stroke="url(#orbitGradPurple)"
          strokeWidth="1.6"
          className="opacity-70"
        />

        {/* Second anneau orbital (pointillé) */}
        <ellipse
          cx="210"
          cy="265"
          rx="195"
          ry="135"
          transform="rotate(18 210 265)"
          stroke="url(#orbitGradAccent)"
          strokeWidth="1.4"
          strokeDasharray="6 4"
          className="opacity-55"
        />

        {/* Trajectoire cosmique fluide */}
        <path
          d="M 30 140 C 90 30, 330 20, 390 170 S 340 460, 200 490"
          stroke="#818cf8"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
      </svg>

      {/* =================================================================
          2. LA FORME ARRONDE / CAPSULE (EN MARRON AVEC L'IMAGE À L'INTÉRIEUR)
         ================================================================= */}
      <div className="relative z-10 w-[230px] xs:w-[260px] sm:w-[290px] md:w-[320px] h-[330px] xs:h-[370px] sm:h-[420px] md:h-[460px] rounded-[115px] xs:rounded-[130px] sm:rounded-[145px] md:rounded-[160px] overflow-hidden bg-gradient-to-b from-[#7b4626] via-[#6a3c20] to-[#502b15] shadow-[0_20px_50px_rgba(106,60,32,0.35)] border-2 border-[#6a3c20]/40 flex items-end justify-center transition-transform duration-500 group-hover:scale-[1.02]">
        {/* Halo de lumière interne chaude en arrière-plan */}
        <div className="absolute top-10 inset-x-8 h-48 rounded-full bg-white/15 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 inset-x-4 h-32 rounded-full bg-black/25 blur-xl pointer-events-none" />

        {/* Image du développeur NTEM Dilane à l'intérieur de la forme */}
        <img
          src={heroImg}
          alt={personalInfo.name}
          width={320}
          height={460}
          loading="lazy"
          className="relative z-10 w-full h-[95%] object-contain object-bottom filter drop-shadow-[0_16px_28px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
      </div>

      {/* =================================================================
          3. COURBE ORBITALE AU PREMIER PLAN (POUR EFFET DE PROFONDEUR 3D)
         ================================================================= */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible"
        viewBox="0 0 420 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 65 330 C 145 390, 275 390, 355 320"
          stroke="#9333ea"
          strokeWidth="2"
          strokeOpacity="0.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default PortraitCard
