import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { X, ArrowUpRight, Play, ExternalLink, ZoomIn } from 'lucide-react'
import type { Project } from '../../types'
import MediaModal, { type MediaItem } from './MediaModal'
import { useLanguage } from '../../context/LanguageContext'

interface ProjectDetailDrawerProps {
  project: Project
  onClose: () => void
}

export const ProjectDetailDrawer: React.FC<ProjectDetailDrawerProps> = ({ project, onClose }) => {
  const { lang, t } = useLanguage()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)

  const displayTitle = lang === 'EN' ? (project.titleEn || project.title) : project.title
  const displayCategory = lang === 'EN' ? (project.categoryEn || project.category) : project.category
  const displayDescription = lang === 'EN' ? (project.descriptionEn || project.description) : project.description
  const displayFeatures = lang === 'EN' ? (project.featuresEn || project.features) : project.features
  const displayAdditionalInfo = lang === 'EN' ? (project.additionalInfoEn || project.additionalInfo) : project.additionalInfo
  const displayStatus = project.status === 'In production' ? t.projects.inProduction : t.projects.inDevelopment

  const imageUrl =
    project.previews?.[0]?.url ||
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85'

  const videoPosterUrl =
    project.previews?.[1]?.url ||
    project.previews?.[0]?.url ||
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85'

  const videoUrl = project.previews?.[1]?.videoUrl

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl flex flex-col justify-between py-2"
      >
        {/* Scrollable Content Container */}
        <div
          ref={scrollContainerRef}
          className="w-full max-h-[72vh] overflow-y-auto pr-4 space-y-6 scrollbar-thin scrollbar-thumb-black/20 scrollbar-track-transparent"
          style={{ scrollbarWidth: 'thin' }}
        >
          {/* Top Action Bar (Close button & Discover button) */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le tiroir"
              className="w-8 h-8 rounded-full border border-black/20 hover:border-black flex items-center justify-center text-sm font-semibold transition-all hover:bg-black/5 active:scale-95 cursor-pointer text-[#161a1d]"
            >
              <X className="w-4 h-4" />
            </button>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#161a1d] text-white text-xs font-semibold hover:bg-black transition-all active:scale-95 shadow-sm"
              >
                <span>{t.projects.discover}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          {/* Project Header Info */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#161a1d]/60 block">
              {displayCategory}
            </span>

            <h3 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#161a1d]">
              {displayTitle}
              <span className="text-[#b85d34]">.</span>
            </h3>

            <div className="pt-1">
              <span
                className={`inline-block px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider ${
                  project.status === 'In production'
                    ? 'bg-[#dcfce7] text-[#15803d]'
                    : 'bg-[#f8ded4] text-[#b85d34]'
                }`}
              >
                {displayStatus}
              </span>
            </div>
          </div>

          {/* Description & Feature List */}
          <div className="space-y-4 text-xs sm:text-sm text-[#161a1d]/80 leading-relaxed font-normal">
            <p>{displayDescription}</p>

            {displayFeatures && displayFeatures.length > 0 && (
              <ul className="space-y-2 pl-1">
                {displayFeatures.map((feat, idx) => {
                  const parts = feat.split(':')
                  return (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#b85d34] font-bold mt-0.5">•</span>
                      <span>
                        {parts.length > 1 ? (
                          <>
                            <strong className="font-bold text-[#161a1d]">{parts[0]}:</strong>
                            {parts.slice(1).join(':')}
                          </>
                        ) : (
                          feat
                        )}
                      </span>
                    </li>
                  )
                })}
              </ul>
            )}

            {displayAdditionalInfo && (
              <p className="pt-2 text-[#161a1d]/75 border-t border-black/5">
                {displayAdditionalInfo}
              </p>
            )}
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2 pt-2">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono font-medium px-2.5 py-1 rounded bg-white/70 text-[#161a1d] border border-black/15 shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Preview Cards / Screenshots Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
            {/* Card 1: UI Dashboard Mockup (Cliquable pour agrandir l'image) */}
            <div
              onClick={() =>
                setSelectedMedia({
                  type: 'image',
                  title: `${project.title} — Aperçu de l'interface`,
                  url: imageUrl,
                })
              }
              className="group relative rounded-xl overflow-hidden border border-black/15 bg-white shadow-sm hover:shadow-md hover:border-black/35 transition-all cursor-pointer"
              title="Cliquer pour afficher l'image en grand"
            >
              <div className="h-6 bg-[#f4f2eb] border-b border-black/10 px-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-[9px] font-mono text-black/40 ml-2 truncate">
                    app.{project.id}.io
                  </span>
                </div>
                <ZoomIn className="w-3 h-3 text-black/40 group-hover:text-black transition-colors" />
              </div>
              <div className="h-44 sm:h-48 bg-gradient-to-br from-slate-100 to-slate-200 relative overflow-hidden flex items-center justify-center p-3">
                <img
                  src={imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover rounded shadow-sm group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/75 backdrop-blur-sm text-white px-3 py-1 rounded text-xs font-mono font-medium shadow-md">
                    {t.projects.zoomImage}
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Interactive Video Preview Mockup (Cliquable pour visionner la vidéo) */}
            <div
              onClick={() =>
                setSelectedMedia({
                  type: 'video',
                  title: `${project.title} — Démo Vidéo`,
                  url: videoPosterUrl,
                  videoUrl: videoUrl,
                })
              }
              className="group relative rounded-xl overflow-hidden border border-black/15 bg-[#161a1d] shadow-sm hover:shadow-md hover:border-black/50 transition-all cursor-pointer"
              title="Cliquer pour lancer la vidéo"
            >
              <div className="h-6 bg-black/40 border-b border-white/10 px-3 flex items-center justify-between">
                <span className="text-[9px] font-mono text-white/60 uppercase tracking-wider">
                  Vidéo Démo
                </span>
                <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white transition-colors" />
              </div>
              <div className="h-44 sm:h-48 relative overflow-hidden flex items-center justify-center">
                <img
                  src={videoPosterUrl}
                  alt={`${project.title} démo`}
                  className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <button
                    type="button"
                    className="w-12 h-12 rounded-full bg-white/95 text-[#161a1d] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform active:scale-95 cursor-pointer"
                    aria-label="Lire la vidéo"
                  >
                    <Play className="w-5 h-5 ml-0.5 fill-[#161a1d]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* MODAL LIGHTBOX / LECTEUR VIDÉO */}
      <MediaModal media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </>
  )
}

export default ProjectDetailDrawer
