import React from 'react'

export interface ProjectNavProps {
  total: number
  currentIndex: number
  onSelect: (index: number) => void
  onPrev: () => void
  onNext: () => void
}

export const ProjectNav: React.FC<ProjectNavProps> = ({
  total,
  currentIndex,
  onSelect,
  onPrev,
  onNext,
}) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 select-none">
      {/* Left Arrow */}
      <button
        type="button"
        onClick={onPrev}
        disabled={currentIndex === 0}
        aria-label="Projet précédent"
        className="text-base sm:text-lg font-mono font-bold text-[#161a1d] hover:text-black disabled:opacity-20 disabled:pointer-events-none px-1 transition-all active:scale-95 cursor-pointer"
      >
        ←
      </button>

      {/* Numbered Pagination */}
      <div className="flex items-center gap-1 sm:gap-2">
        {Array.from({ length: total }, (_, i) => {
          const numStr = (i + 1).toString().padStart(2, '0')
          const isActive = i === currentIndex

          return (
            <button
              key={numStr}
              type="button"
              onClick={() => onSelect(i)}
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full text-xs font-mono font-bold transition-all flex items-center justify-center cursor-pointer ${
                isActive
                  ? 'bg-[#161a1d] text-white shadow-sm'
                  : 'text-[#161a1d]/60 hover:text-black hover:bg-black/5'
              }`}
            >
              {numStr}
            </button>
          )
        })}
      </div>

      {/* Right Arrow */}
      <button
        type="button"
        onClick={onNext}
        disabled={currentIndex === total - 1}
        aria-label="Projet suivant"
        className="text-base sm:text-lg font-mono font-bold text-[#161a1d] hover:text-black disabled:opacity-20 disabled:pointer-events-none px-1 transition-all active:scale-95 cursor-pointer"
      >
        →
      </button>
    </div>
  )
}

export default ProjectNav
