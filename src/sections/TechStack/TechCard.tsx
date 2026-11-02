import React from 'react'

export interface TechItemDef {
  name: string
  icon: React.ReactNode
}

interface TechCardProps {
  item: TechItemDef
}

export const TechCard: React.FC<TechCardProps> = ({ item }) => {
  return (
    <div className="h-[74px] sm:h-[82px] min-w-[200px] sm:min-w-[220px] px-6 rounded-xl bg-white border border-black/[0.09] shadow-[0_2px_6px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.06)] hover:border-black/25 flex items-center gap-3.5 transition-all duration-300 select-none group/card cursor-default">
      <div className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0 text-[#161a1d] group-hover/card:scale-110 transition-transform">
        {item.icon}
      </div>
      <span className="font-semibold text-sm sm:text-base text-[#161a1d] tracking-tight whitespace-nowrap">
        {item.name}
      </span>
    </div>
  )
}

export default TechCard

