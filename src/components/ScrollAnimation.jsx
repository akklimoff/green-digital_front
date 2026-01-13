import React from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const ScrollAnimation = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className = ''
}) => {
  const [ref, isVisible] = useIntersectionObserver()

  const animations = {
    'fade-up': 'opacity-0 translate-y-10',
    'fade-down': 'opacity-0 -translate-y-10',
    'fade-left': 'opacity-0 translate-x-10',
    'fade-right': 'opacity-0 -translate-x-10',
    'scale': 'opacity-0 scale-95',
    'fade': 'opacity-0'
  }

  const activeAnimations = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-down': 'opacity-100 translate-y-0',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    'scale': 'opacity-100 scale-100',
    'fade': 'opacity-100'
  }

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${isVisible ? activeAnimations[animation] : animations[animation]}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default ScrollAnimation
