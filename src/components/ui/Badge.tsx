import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'orange' | 'dark' | 'neutral' | 'outline'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const variants = {
    orange: 'bg-[#6a3c20]/15 text-[#6a3c20] border-[#6a3c20]/25',
    dark: 'bg-[#161a1d] text-white border-transparent',
    neutral: 'bg-black/5 text-[#161a1d]/80 border-black/10',
    outline: 'border border-[#161a1d]/20 text-[#161a1d]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold font-mono uppercase tracking-wider border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

