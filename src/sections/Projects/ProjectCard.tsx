import React from 'react'
import { ArrowUpRight, Folder, Code2 } from 'lucide-react'
import type { Project } from '../../types'

export interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="relative w-full rounded-3xl bg-white border border-[#161a1d]/15 p-6 sm:p-10 shadow-lg shadow-black/5 flex flex-col justify-between overflow-hidden group">
      {/* Folder Tab Effect (top right accent) */}
      <div className="absolute top-0 right-12 transform -translate-y-1/2 px-3.5 py-1.5 rounded-md bg-[#161a1d] text-white text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 shadow-md">
        <Folder className="w-3 h-3 text-[#6a3c20]" />
        <span>DOSSIER // {project.number}</span>
      </div>

      <div>
        {/* Top bar with Sticker Emoji and Year */}
        <div className="flex items-center justify-between mb-8">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl shadow-inner border border-black/5 transform group-hover:scale-105 group-hover:rotate-3 transition-transform"
            style={{ backgroundColor: `${project.accentColor}15` }}
          >
            <span>{project.stickerEmoji}</span>
          </div>
          <span className="text-xs font-mono font-bold text-[#161a1d]/50">
            [{project.year}]
          </span>
        </div>

        {/* Project category & title */}
        <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#6a3c20] block mb-2">
          {project.category}
        </span>
        <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#161a1d] mb-4">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base text-[#161a1d]/75 leading-relaxed mb-6 max-w-xl">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono font-medium px-3 py-1 rounded-md bg-slate-100 text-[#161a1d] border border-black/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="flex items-center gap-4 pt-6 border-t border-black/10">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#161a1d] text-white text-xs font-bold hover:bg-black transition-all active:scale-95 group/btn"
          >
            <span>Voir le projet</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#161a1d]/20 text-[#161a1d] text-xs font-bold hover:bg-black/5 transition-all active:scale-95"
            title="Code source"
          >
            <Code2 className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
