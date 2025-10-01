import { useState, useEffect } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { BarChart3, TrendingUp, Users, DollarSign, Eye, Zap } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'

const Analytics = () => {
  const ref = useAnimation('fadeInUp')
  const [timeRange, setTimeRange] = useState('7d')
  const [metrics, setMetrics] = useState({})

  useEffect(() => {
    // Mock analytics data
    setMetrics({
      visitors: { current: 12457, change: 12.5 },
      revenue: { current: 45289, change: 8.2 },
      conversions: { current: 2345, change: 15.7 },
      engagement: { current: 67.8, change: 5.3 }
    })
  }, [])

  const chartData = {
    '7d': [65, 59, 80, 81, 56, 55, 40],
    '30d': [45, 78, 65, 90, 67, 45, 78, 89, 76, 65, 87, 90, 67, 45, 78, 89, 76, 65, 87, 90, 67, 45, 78, 89, 76, 65, 87, 90, 67, 45],
    '90d': [55, 65, 70, 75, 80, 85, 90, 85, 80, 75, 70, 65]
  }

  return (
    <div ref={ref} className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Analytics Dashboard</h1>
          <p className="text-gray-400 mt-2">Real-time business intelligence and metrics</p>
        </div>
        <div className="flex space-x-2 mt-4 lg:mt-0">
          {['7d', '30d', '90d'].map(range => (
            <Button
              key={range}
              variant={timeRange === range ? 'primary' : 'secondary'}
              onClick={() => setTimeRange(range)}
              className="text-sm"
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Visitors</p>
              <p className="text-2xl font-bold mt-2">{metrics.visitors?.current?.toLocaleString()}</p>
              <p className="text-xs text-neon-green mt-1">
                ↗ {metrics.visitors?.change}% from last period
              </p>
            </div>
            <div className="p-3 rounded-lg bg-neon-blue/10">
              <Eye className="w-6 h-6 text-neon-blue" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Revenue</p>
              <p className="text-2xl font-bold mt-2">${metrics.revenue?.current?.toLocaleString()}</p>
              <p className="text-xs text-neon-green mt-1">
                ↗ {metrics.revenue?.change}% from last period
              </p>
            </div>
            <div className="p-3 rounded-lg bg-neon-green/10">
              <DollarSign className="w-6 h-6 text-neon-green" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Conversions</p>
              <p className="text-2xl font-bold mt-2">{metrics.conversions?.current?.toLocaleString()}</p>
              <p className="text-xs text-neon-green mt-1">
                ↗ {metrics.conversions?.change}% from last period
              </p>
            </div>
            <div className="p-3 rounded-lg bg-neon-purple/10">
              <TrendingUp className="w-6 h-6 text-neon-purple" />
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Engagement Rate</p>
              <p className="text-2xl font-bold mt-2">{metrics.engagement?.current}%</p>
              <p className="text-xs text-neon-green mt-1">
                ↗ {metrics.engagement?.change}% from last period
              </p>
            </div>
            <div className="p-3 rounded-lg bg-neon-pink/10">
              <Zap className="w-6 h-6 text-neon-pink" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts and Additional Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 gradient-text">Performance Overview</h3>
          <div className="h-64 flex items-end space-x-2 pb-4">
            {chartData[timeRange].map((value, index) => (
              <div
                key={index}
                className="flex-1 bg-gradient-to-t from-neon-blue to-neon-purple rounded-t transition-all hover:opacity-80"
                style={{ height: `${value}%` }}
              />
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4 gradient-text">Top Pages</h3>
          <div className="space-y-3">
            {['/dashboard', '/ai-studio', '/invoices', '/analytics', '/settings'].map((page, index) => (
              <div key={page} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
                <span className="text-sm">{page}</span>
                <span className="text-xs text-neon-blue bg-neon-blue/10 px-2 py-1 rounded">
                  {Math.floor(Math.random() * 1000)} views
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4 gradient-text">User Demographics</h3>
          <div className="space-y-4">
            {['United States', 'United Kingdom', 'Germany', 'Canada', 'Australia'].map((country, index) => (
              <div key={country}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{country}</span>
                  <span>{25 - index * 5}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full"
                    style={{ width: `${25 - index * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Analytics