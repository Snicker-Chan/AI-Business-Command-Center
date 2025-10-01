import { useAnimation } from '../../hooks/useAnimation'
import { BarChart3, TrendingUp, DollarSign, Users } from 'lucide-react'
import Card from '../UI/Card'

const PerformanceChart = () => {
  const ref = useAnimation('fadeInUp')

  const performanceData = [
    { month: 'Jan', revenue: 65000, users: 1200 },
    { month: 'Feb', revenue: 72000, users: 1450 },
    { month: 'Mar', revenue: 68000, users: 1380 },
    { month: 'Apr', revenue: 81000, users: 1620 },
    { month: 'May', revenue: 79000, users: 1580 },
    { month: 'Jun', revenue: 85000, users: 1750 },
    { month: 'Jul', revenue: 82000, users: 1680 },
    { month: 'Aug', revenue: 88000, users: 1820 },
    { month: 'Sep', revenue: 91000, users: 1950 },
    { month: 'Oct', revenue: 95000, users: 2100 },
    { month: 'Nov', revenue: 98000, users: 2250 },
    { month: 'Dec', revenue: 105000, users: 2450 }
  ]

  const maxRevenue = Math.max(...performanceData.map(d => d.revenue))
  const maxUsers = Math.max(...performanceData.map(d => d.users))

  return (
    <Card>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white">Performance Overview</h3>
        <BarChart3 className="w-5 h-5 text-gray-400" />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Total Revenue</span>
            <DollarSign className="w-4 h-4 text-neon-green" />
          </div>
          <p className="text-2xl font-bold text-white">$956,000</p>
          <p className="text-neon-green text-sm">+28.5% this year</p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Active Users</span>
            <Users className="w-4 h-4 text-neon-blue" />
          </div>
          <p className="text-2xl font-bold text-white">21,580</p>
          <p className="text-neon-blue text-sm">+42% growth</p>
        </div>
        
        <div className="bg-white/5 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-sm">Avg. Growth</span>
            <TrendingUp className="w-4 h-4 text-neon-purple" />
          </div>
          <p className="text-2xl font-bold text-white">28.5%</p>
          <p className="text-neon-purple text-sm">Monthly average</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Revenue Trend</h4>
        <div className="h-48 flex items-end space-x-1 pb-4">
          {performanceData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-neon-blue to-neon-purple rounded-t transition-all hover:opacity-80 group relative cursor-pointer"
                style={{ height: `${(data.revenue / maxRevenue) * 80}%`, minHeight: '20px' }}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  ${data.revenue.toLocaleString()}
                </div>
              </div>
              <span className="text-xs text-gray-400 mt-1">{data.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Growth Chart */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">User Growth</h4>
        <div className="h-32 flex items-end space-x-1">
          {performanceData.map((data, index) => (
            <div key={data.month} className="flex-1 flex flex-col items-center">
              <div
                className="w-full bg-gradient-to-t from-neon-green to-cyan-500 rounded-t transition-all hover:opacity-80 group relative cursor-pointer"
                style={{ height: `${(data.users / maxUsers) * 80}%`, minHeight: '15px' }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  {data.users} users
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default PerformanceChart