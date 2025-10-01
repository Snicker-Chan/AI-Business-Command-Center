import { useAnimation } from '../../hooks/useAnimation'
import { TrendingUp } from 'lucide-react'
import Card from '../UI/Card'

const StatsCard = ({ title, value, change, icon: Icon, color = 'blue' }) => {
  const ref = useAnimation('fadeInUp')

  const colorClasses = {
    blue: {
      bg: 'bg-neon-blue/20',
      text: 'text-neon-blue',
      icon: 'text-neon-blue'
    },
    green: {
      bg: 'bg-neon-green/20',
      text: 'text-neon-green',
      icon: 'text-neon-green'
    },
    purple: {
      bg: 'bg-neon-purple/20',
      text: 'text-neon-purple',
      icon: 'text-neon-purple'
    },
    pink: {
      bg: 'bg-neon-pink/20',
      text: 'text-neon-pink',
      icon: 'text-neon-pink'
    }
  }

  const colors = colorClasses[color]

  return (
    <Card className="hover:transform hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
          <p className="text-2xl font-bold text-white mb-1">{value}</p>
          <p className={`text-xs flex items-center ${change >= 0 ? 'text-neon-green' : 'text-neon-pink'}`}>
            {change >= 0 ? (
              <TrendingUp className="w-3 h-3 mr-1" />
            ) : (
              <TrendingUp className="w-3 h-3 mr-1 transform rotate-180" />
            )}
            {Math.abs(change)}% from last week
          </p>
        </div>
        <div className={`p-3 rounded-xl ${colors.bg}`}>
          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>
      </div>
    </Card>
  )
}

export default StatsCard