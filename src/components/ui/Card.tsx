import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'white' | 'dark' | 'glass'
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'white',
  className = '',
  ...props
}) => {
  const variants = {
    white: 'bg-white text-[#161a1d] border border-black/10 shadow-lg shadow-black/5',
    dark: 'bg-[#161a1d] text-white border border-white/10 shadow-xl',
    glass: 'bg-white/20 backdrop-blur-md text-[#161a1d] border border-white/30',
  }

  return (
    <div
      className={`rounded-3xl p-6 sm:p-8 transition-all ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card

