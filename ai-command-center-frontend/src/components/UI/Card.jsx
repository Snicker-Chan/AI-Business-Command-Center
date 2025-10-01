import { useAnimation } from '../../hooks/useAnimation'

const Card = ({ children, className = '', animate = true }) => {
  const ref = useAnimation(animate ? 'fadeInUp' : null)

  return (
    <div
      ref={ref}
      className={`glass rounded-xl p-6 shadow-2xl hover:shadow-neon-blue/20 transition-all duration-300 hover:scale-105 ${className}`}
    >
      {children}
    </div>
  )
}

export default Card