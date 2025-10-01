import { useEffect } from 'react'
import anime from 'animejs'

const Loading = () => {
  useEffect(() => {
    anime({
      targets: '.loading-dot',
      scale: [1, 1.5, 1],
      opacity: [0.5, 1, 0.5],
      duration: 1000,
      delay: anime.stagger(200),
      loop: true,
      easing: 'easeInOutSine'
    })
  }, [])

  return (
    <div className="flex items-center justify-center space-x-2">
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className="loading-dot w-3 h-3 bg-neon-blue rounded-full"
        />
      ))}
    </div>
  )
}

export default Loading