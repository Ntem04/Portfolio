import React from 'react'

export interface HeroHeaderProps {
  name: string
  volume?: string
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({
  name = 'NTEM DILANE LA VICTOIRE',
  volume = 'VOL. 01',
}) => {
  const parts = name.split(' ')
  const firstName = parts[0]
  const restName = parts.slice(1).join(' ')

  return (
    <div className="relative z-20 pt-24 sm:pt-28 px-6 sm:px-12 flex flex-col gap-2.5">
      <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#161a1d]/75 font-mono">
        PORTFOLIO — {volume}
      </span>
      <div className="text-xl sm:text-2xl tracking-tight text-[#161a1d]">
        <span className="font-extrabold">{firstName}</span>{' '}
        <span className="font-medium opacity-85">{restName}</span>
      </div>
    </div>
  )
}

export default HeroHeader

