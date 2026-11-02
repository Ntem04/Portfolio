import React from 'react'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-xs font-mono font-bold uppercase text-[#161a1d]/70">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 rounded-xl bg-slate-50 border border-[#6a3c20]/30 focus:outline-none focus:border-[#6a3c20] focus:ring-1 focus:ring-[#6a3c20] focus:bg-white text-sm font-sans transition-all ${
          error ? 'border-red-500' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  )
}

export default Input

