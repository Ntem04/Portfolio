import React from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import type { Project } from '../../types'
import { useLanguage } from '../../context/LanguageContext'

interface Folder3DProps {
  project: Project
  isOpen: boolean
  onClick?: () => void
}

export const Folder3D: React.FC<Folder3DProps> = ({ project, isOpen, onClick }) => {
  const { lang } = useLanguage()
  const displayTitle = lang === 'EN' ? (project.titleEn || project.title) : project.title
  const displayCategory = lang === 'EN' ? (project.categoryEn || project.category) : project.category
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer transition-all duration-300 bg-transparent p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center select-none group w-full max-w-[460px] mx-auto`}
    >
      {/* 3D Folder Container */}
      <div className="relative w-full max-w-[340px] sm:max-w-[370px] h-[250px] sm:h-[275px] flex items-end justify-center">
        {/* BACK OF FOLDER (Tab + Back panel) */}
        <div className="absolute inset-x-0 bottom-0 top-3 flex flex-col pointer-events-none">
          {/* Top Tab on Left */}
          <div className="w-[46%] h-8 sm:h-9 bg-[#bd7150] rounded-tl-2xl rounded-tr-xl relative -mb-1 shadow-sm flex items-center px-4">
            <span className="text-[9px] font-mono font-bold tracking-widest uppercase text-white/70 truncate">
              {displayCategory}
            </span>
          </div>

          {/* Back Body */}
          <div className="w-full flex-1 bg-[#ba6d4b] rounded-tr-2xl rounded-tl-none rounded-b-2xl shadow-inner border-t border-[#d88764]" />
        </div>

        {/* DOCUMENTS / PAPERS PEEKING OUT */}
        <div className="absolute inset-x-4 top-0 h-[120px] pointer-events-none flex items-start justify-center overflow-visible">
          {/* Back paper (rotated left) */}
          <motion.div
            initial={{ y: 8, rotate: -6 }}
            animate={{
              y: isOpen ? 0 : [0, -3, 0],
              rotate: -6,
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-2 w-[78%] h-[95px] bg-[#fbf9f5] rounded-t-lg shadow-sm border border-black/10 origin-bottom-left flex flex-col p-3 gap-1.5"
          >
            <div className="w-12 h-1 bg-black/15 rounded" />
            <div className="w-24 h-1 bg-black/10 rounded" />
            <div className="w-16 h-1 bg-black/10 rounded" />
          </motion.div>

          {/* Middle paper (slightly taller, straight) */}
          <motion.div
            initial={{ y: 4, rotate: 0 }}
            animate={{
              y: isOpen ? -3 : [-3, 2, -3],
              rotate: 0,
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="absolute w-[86%] h-[105px] bg-white rounded-t-lg shadow-md border border-black/10 origin-bottom flex flex-col p-3.5 gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono font-bold uppercase tracking-wider text-black/40">
                DOC // {project.number}
              </span>
              <span className="text-[8px] font-mono font-semibold text-black/30">
                [{project.year}]
              </span>
            </div>
            <div className="w-32 h-1.5 bg-black/20 rounded" />
            <div className="w-48 h-1 bg-black/10 rounded" />
            <div className="w-36 h-1 bg-black/10 rounded" />
          </motion.div>

          {/* Front paper (rotated right) */}
          <motion.div
            initial={{ y: 6, rotate: 4 }}
            animate={{
              y: isOpen ? -1 : [-1, 3, -1],
              rotate: 4,
            }}
            transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
            className="absolute right-2 w-[80%] h-[98px] bg-[#f8f6f0] rounded-t-lg shadow-sm border border-black/10 origin-bottom-right flex flex-col p-3 gap-1.5"
          >
            <div className="w-20 h-1 bg-black/15 rounded" />
            <div className="w-28 h-1 bg-black/10 rounded" />
          </motion.div>
        </div>

        {/* FRONT FLAP OF FOLDER */}
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative z-10 w-full h-[185px] sm:h-[205px] rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center p-6 overflow-hidden border border-black/5"
          style={{
            background: 'linear-gradient(180deg, #e59a7b 0%, #db8b6b 100%)',
            boxShadow:
              '0 20px 35px -12px rgba(110, 45, 15, 0.28), 0 2px 6px rgba(0,0,0,0.06), inset 0 1px 1px rgba(255,255,255,0.4)',
          }}
        >
          {/* Subtle top edge highlight */}
          <div className="absolute top-0 inset-x-0 h-[1.5px] bg-white/40 pointer-events-none" />

          {/* Embossed bottom crease */}
          <div className="absolute bottom-5 inset-x-6 h-[1px] bg-black/10 shadow-[0_1px_0_rgba(255,255,255,0.3)] pointer-events-none" />

          {/* Circular Badge / Sticker in center */}
          <motion.div
            key={project.id}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-xl shadow-orange-950/20 flex items-center justify-center border border-black/5 relative z-10 group-hover:scale-105 transition-transform"
          >
            {project.stickerSvg === 'box' && (
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#f97316] flex items-center justify-center text-white shadow-inner">
                {/* 3D Box Icon matching Logivite sticker */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                >
                  <path d="m7.5 4.27 9 5.15" />
                  <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                  <path d="m3.3 7 8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
              </div>
            )}

            {project.stickerSvg === 'afrisecure' && (
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white flex items-center justify-center">
                {/* Afrisecure blue monogram */}
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  className="w-8 h-8 sm:w-9 sm:h-9"
                >
                  <path
                    d="M16 4L6 9V17C6 23.5 10.3 28.5 16 30C21.7 28.5 26 23.5 26 17V9L16 4Z"
                    fill="#0284c7"
                  />
                  <path
                    d="M16 9L11 18H14L16 13L18 18H21L16 9Z"
                    fill="white"
                  />
                  <circle cx="16" cy="22" r="1.5" fill="white" />
                </svg>
              </div>
            )}

            {project.stickerSvg === 'portfolio' && (
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#6a3c20] flex items-center justify-center text-white shadow-inner font-extrabold text-sm tracking-tighter">
                NV
              </div>
            )}

            {project.stickerSvg === 'gateway' && (
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#10b981] flex items-center justify-center text-white shadow-inner font-extrabold">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                  <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" strokeLinecap="round" />
                </svg>
              </div>
            )}

            {project.stickerSvg === 'taskflow' && (
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#8b5cf6] flex items-center justify-center text-white shadow-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-6 h-6">
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
            )}

            {project.stickerSvg === 'commerce' && (
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#ec4899] flex items-center justify-center text-white shadow-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
              </div>
            )}

            {!project.stickerSvg && (
              <span className="text-2xl sm:text-3xl">{project.stickerEmoji || '📁'}</span>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Under Folder: Globe icon + Project title */}
      <div className="mt-6 flex items-center gap-2 text-center text-[#161a1d] font-bold text-sm sm:text-base tracking-tight group-hover:text-black">
        <Globe className="w-4 h-4 text-[#161a1d]/70 flex-shrink-0" />
        <span className="truncate max-w-[280px]">{displayTitle}</span>
      </div>
    </div>
  )
}

export default Folder3D

