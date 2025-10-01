import { useAnimation } from '../../hooks/useAnimation'

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  animate = true 
}) => {
  const ref = useAnimation(animate ? 'fadeInUp' : null)

  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95'
  
  const variants = {
    primary: 'bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-lg hover:shadow-neon-blue/30',
    secondary: 'glass text-white border border-neon-blue hover:bg-neon-blue/10',
    danger: 'bg-gradient-to-r from-neon-pink to-red-500 text-white hover:shadow-lg hover:shadow-neon-pink/30'
  }

  return (
    <button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button