import { useAnimation } from '../../hooks/useAnimation'
import { MessageSquare, DollarSign, Users, TrendingUp, BarChart3, Zap } from 'lucide-react'
import Card from '../UI/Card'
import StatsCard from './StatsCard'
import ActivityFeed from './ActivityFeed'
import PerformanceChart from './PerformanceChart'

const Dashboard = () => {
  const ref = useAnimation('fadeInUp')

  const stats = [
    { title: 'Unread Messages', value: '1,234', change: 12, icon: MessageSquare, color: 'blue' },
    { title: 'Revenue', value: '$45,678', change: 8, icon: DollarSign, color: 'green' },
    { title: 'Active Users', value: '3,456', change: -2, icon: Users, color: 'purple' },
    { title: 'Growth Rate', value: '24.5%', change: 15, icon: TrendingUp, color: 'pink' }
  ]

  const quickActions = [
    { label: 'Check Inbox', icon: MessageSquare, color: 'blue', path: '/inbox' },
    { label: 'Create Invoice', icon: DollarSign, color: 'purple', path: '/invoices' },
    { label: 'Generate Report', icon: TrendingUp, color: 'green', path: '/analytics' },
    { label: 'AI Assistant', icon: Users, color: 'pink', path: '/ai' }
  ]

  return (
    <div ref={ref} className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-4 lg:mb-0">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome to your AI Business Command Center</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Current Status</p>
          <p className="text-neon-green font-semibold">All Systems Operational</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Chart - Takes 2/3 on desktop */}
        <div className="lg:col-span-2">
          <PerformanceChart />
        </div>

        {/* Activity Feed - Takes 1/3 on desktop */}
        <div className="lg:col-span-1">
          <ActivityFeed />
        </div>
      </div>

      {/* Quick Actions & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">Quick Actions</h3>
            <Zap className="w-5 h-5 text-gray-400" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={action.label}
                className="p-4 rounded-lg bg-white/5 hover:bg-white/10 border border-gray-700 hover:border-neon-blue transition-all duration-300 group text-left"
                onClick={() => window.location.href = action.path}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${
                  action.color === 'blue' ? 'bg-neon-blue/20' :
                  action.color === 'purple' ? 'bg-neon-purple/20' :
                  action.color === 'green' ? 'bg-neon-green/20' :
                  'bg-neon-pink/20'
                }`}>
                  <action.icon className={`w-5 h-5 ${
                    action.color === 'blue' ? 'text-neon-blue' :
                    action.color === 'purple' ? 'text-neon-purple' :
                    action.color === 'green' ? 'text-neon-green' :
                    'text-neon-pink'
                  }`} />
                </div>
                <p className="font-medium text-white text-sm">{action.label}</p>
                <p className="text-xs text-gray-400">Quick access</p>
              </button>
            ))}
          </div>
        </Card>

        {/* System Status */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">System Status</h3>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-neon-green rounded-full pulse-glow"></div>
              <span className="text-xs text-neon-green">Live</span>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { service: 'AI Services', status: 'operational', latency: '98ms' },
              { service: 'Database', status: 'stable', latency: '45ms' },
              { service: 'API Gateway', status: 'optimal', latency: '67ms' },
              { service: 'File Storage', status: 'healthy', latency: '89ms' }
            ].map((system, index) => (
              <div key={system.service} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <div>
                  <p className="font-medium text-white text-sm">{system.service}</p>
                  <p className="text-xs text-gray-400 capitalize">{system.status}</p>
                </div>
                <span className="text-neon-green font-semibold text-sm">{system.latency}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard