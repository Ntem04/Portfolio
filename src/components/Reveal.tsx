import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export type RevealDirection = 'up' | 'down' | 'left' | 'right' | 'none' | 'zoom'

export interface RevealProps {
  children: React.ReactNode
  direction?: RevealDirection
  delay?: number
  duration?: number
  distance?: number
  className?: string
  width?: 'full' | 'auto' | 'fit'
  once?: boolean
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 32,
  className = '',
  width = 'auto',
  once = true,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    once,
    margin: '0px 0px -50px 0px',
  })

  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: distance, x: 0, scale: 1 }
      case 'down':
        return { opacity: 0, y: -distance, x: 0, scale: 1 }
      case 'left':
        return { opacity: 0, x: distance, y: 0, scale: 1 }
      case 'right':
        return { opacity: 0, x: -distance, y: 0, scale: 1 }
      case 'zoom':
        return { opacity: 0, scale: 0.94, x: 0, y: 0 }
      case 'none':
      default:
        return { opacity: 0, x: 0, y: 0, scale: 1 }
    }
  }

  const animate = isInView
    ? { opacity: 1, x: 0, y: 0, scale: 1 }
    : getInitial()

  return (
    <div
      ref={ref}
      className={`${width === 'full' ? 'w-full' : width === 'fit' ? 'w-fit' : ''} ${className}`}
    >
      <motion.div
        initial={getInitial()}
        animate={animate}
        transition={{
          duration,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={width === 'full' ? 'w-full' : ''}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default Reveal

