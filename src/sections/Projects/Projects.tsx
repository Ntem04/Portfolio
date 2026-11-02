import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projectsData } from '../../data/portfolioData'
import Folder3D from './Folder3D'
import ProjectDetailDrawer from './ProjectDetailDrawer'
import ProjectNav from './ProjectNav'
import { ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import Reveal from '../../components/Reveal'

export const Projects: React.FC = () => {
  const { lang, t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(true) // Open by default as demonstrated in video

  const currentProject = projectsData[currentIndex]
  const displayTitle = lang === 'EN' ? (currentProject.titleEn || currentProject.title) : currentProject.title

  const handleSelect = (newIndex: number) => {
    setCurrentIndex(newIndex)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < projectsData.length - 1) {
      setCurrentIndex((prev) => prev + 1)
    }
  }

  // Generate watermark text from title (first word or snippet)
  const watermarkText = displayTitle.split(' ')[0]

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#eeede7] text-[#161a1d] py-14 sm:py-20 px-6 sm:px-12 lg:px-20 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Ghost Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
        <motion.span
          key={currentProject.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.045, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[18vw] font-black uppercase text-[#161a1d] tracking-tighter whitespace-nowrap pl-10"
        >
          {watermarkText}
        </motion.span>
      </div>

      {/* Vertical Rotated Text on Far Left */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none select-none">
        <span className="block transform -rotate-90 origin-center text-[10px] font-mono tracking-[0.28em] text-[#161a1d]/45 uppercase whitespace-nowrap">
          {lang === 'FR' ? 'UN PROJET, UNE EXCLUSIVITÉ.' : 'ONE PROJECT, ONE EXCLUSIVITY.'}
        </span>
      </div>

      {/* TOP HEADER */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <Reveal direction="up" delay={0.1}>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs font-mono font-bold tracking-[0.25em] text-[#161a1d]/60 uppercase">
              {t.projects.tag}
            </span>
            <div className="flex items-baseline">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#161a1d]">
                {t.projects.title}
              </h2>
              <span className="text-xs sm:text-sm font-mono font-bold text-[#b85d34] ml-2 -translate-y-3 sm:-translate-y-5">
                ( 0{projectsData.length} )
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* MAIN CAROUSEL STAGE (Folder + Detail Drawer) */}
      <Reveal direction="up" delay={0.2} width="full" className="flex-1 flex items-center justify-center">
        <div className="relative z-10 max-w-7xl mx-auto w-full my-8 flex items-center justify-center">
          <div
            className={`w-full flex flex-col items-center justify-center transition-all duration-500 gap-8 ${
              isOpen
                ? 'lg:flex-row lg:items-start lg:justify-between'
                : 'lg:flex-row lg:justify-center'
            }`}
          >
            {/* FOLDER COMPONENT */}
            <motion.div
              layout
              transition={{ type: 'spring', stiffness: 260, damping: 28 }}
              className={`w-full flex justify-center ${
                isOpen ? 'lg:w-[45%] lg:justify-start' : 'max-w-[460px]'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                  className="w-full flex justify-center"
                >
                  <Folder3D
                    project={currentProject}
                    isOpen={isOpen}
                    onClick={() => setIsOpen((prev) => !prev)}
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* DETAIL DRAWER */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key={currentProject.id}
                  className="w-full lg:w-[55%] flex justify-end"
                >
                  <ProjectDetailDrawer
                    project={currentProject}
                    onClose={() => setIsOpen(false)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>

      {/* BOTTOM CONTROL & PAGINATION BAR */}
      <Reveal direction="up" delay={0.25} width="full">
        <div className="relative z-10 max-w-7xl mx-auto w-full pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-black/10">
        {/* Bottom Left Link */}
        <div className="flex items-center">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(true)
            }}
            className="group inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-[#161a1d]/70 hover:text-black transition-colors"
          >
            <span>{t.projects.ignoredProjects}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Bottom Right Pagination Bar */}
        <ProjectNav
          total={projectsData.length}
          currentIndex={currentIndex}
          onSelect={handleSelect}
          onPrev={handlePrev}
          onNext={handleNext}
        />
        </div>
      </Reveal>
    </section>
  )
}

export default Projects
