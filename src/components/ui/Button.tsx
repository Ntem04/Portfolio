import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none'
  
  const variants = {
    primary: 'bg-[#161a1d] hover:bg-black text-white shadow-md shadow-black/10',
    secondary: 'bg-white hover:bg-slate-100 text-[#161a1d] shadow-sm',
    outline: 'border border-[#161a1d]/20 hover:border-[#161a1d] text-[#161a1d] bg-transparent hover:bg-black/5',
    ghost: 'text-[#161a1d] hover:bg-black/5 bg-transparent',
  }

  const sizes = {
    sm: 'text-xs h-8 px-3 gap-1.5',
    md: 'text-xs sm:text-sm h-10 px-5 gap-2',
    lg: 'text-sm sm:text-base h-12 px-6 gap-2.5',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  )
}

