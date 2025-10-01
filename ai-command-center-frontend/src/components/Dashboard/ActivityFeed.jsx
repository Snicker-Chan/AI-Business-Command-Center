import { useAnimation } from '../../hooks/useAnimation'
import { Clock, User, Zap, FileText, MessageSquare, Sparkles } from 'lucide-react'
import Card from '../UI/Card'

const ActivityFeed = () => {
  const ref = useAnimation('fadeInUp')

  const activities = [
    {
      id: 1,
      type: 'invoice',
      action: 'Invoice #INV-001 generated',
      user: 'You',
      time: '2 minutes ago',
      icon: FileText,
      color: 'blue'
    },
    {
      id: 2,
      type: 'ai',
      action: 'AI content created successfully',
      user: 'AI System',
      time: '5 minutes ago',
      icon: Sparkles,
      color: 'purple'
    },
    {
      id: 3,
      type: 'message',
      action: 'New message from Sarah Chen',
      user: 'Sarah Chen',
      time: '10 minutes ago',
      icon: MessageSquare,
      color: 'green'
    },
    {
      id: 4,
      type: 'system',
      action: 'System backup completed',
      user: 'System',
      time: '15 minutes ago',
      icon: Zap,
      color: 'pink'
    },
    {
      id: 5,
      type: 'user',
      action: 'New team member added',
      user: 'Admin',
      time: '1 hour ago',
      icon: User,
      color: 'blue'
    }
  ]

  const getIconColor = (color) => {
    switch (color) {
      case 'blue': return 'text-neon-blue';
      case 'green': return 'text-neon-green';
      case 'purple': return 'text-neon-purple';
      case 'pink': return 'text-neon-pink';
      default: return 'text-neon-blue';
    }
  }

  const getBackgroundColor = (color) => {
    switch (color) {
      case 'blue': return 'bg-neon-blue/20';
      case 'green': return 'bg-neon-green/20';
      case 'purple': return 'bg-neon-purple/20';
      case 'pink': return 'bg-neon-pink/20';
      default: return 'bg-neon-blue/20';
    }
  }

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
        <Clock className="w-5 h-5 text-gray-400" />
      </div>
      <div className="space-y-3">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div
              key={activity.id}
              className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${getBackgroundColor(activity.color)}`}>
                <Icon className={`w-4 h-4 ${getIconColor(activity.color)}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white leading-tight">
                  {activity.action}
                </p>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-xs text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">
                    {activity.user}
                  </span>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-700">
        <button className="w-full text-center text-sm text-neon-blue hover:text-neon-purple transition-colors">
          View All Activity
        </button>
      </div>
    </Card>
  )
}

export default ActivityFeed