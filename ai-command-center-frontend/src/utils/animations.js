import anime from 'animejs'

export const fadeInUp = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [50, 0],
    duration: 800,
    delay,
    easing: 'easeOutCubic'
  })
}

export const staggerFadeIn = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 600,
    delay: anime.stagger(100),
    easing: 'easeOutCubic'
  })
}

export const pulseGlow = (targets) => {
  return anime({
    targets,
    boxShadow: [
      '0 0 0px rgba(0, 245, 255, 0)',
      '0 0 20px rgba(0, 245, 255, 0.8)',
      '0 0 0px rgba(0, 245, 255, 0)'
    ],
    duration: 2000,
    easing: 'easeInOutSine',
    loop: true
  })
}

export const slideInLeft = (targets, delay = 0) => {
  return anime({
    targets,
    opacity: [0, 1],
    translateX: [-50, 0],
    duration: 600,
    delay,
    easing: 'easeOutCubic'
  })
}