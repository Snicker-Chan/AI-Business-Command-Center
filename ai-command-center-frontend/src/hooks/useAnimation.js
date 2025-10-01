import { useEffect, useRef } from 'react'
import { fadeInUp, staggerFadeIn, pulseGlow, slideInLeft } from '../utils/animations'

export const useAnimation = (animationType, dependencies = []) => {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current && animationType) {
      switch (animationType) {
        case 'fadeInUp':
          fadeInUp(ref.current)
          break
        case 'staggerFadeIn':
          staggerFadeIn(ref.current)
          break
        case 'pulseGlow':
          pulseGlow(ref.current)
          break
        case 'slideInLeft':
          slideInLeft(ref.current)
          break
        default:
          fadeInUp(ref.current)
      }
    }
  }, dependencies)

  return ref
}