import { useAnimation } from '../../hooks/useAnimation'
import { useLocation, Link } from 'react-router-dom'
import { 
  Home, 
  Inbox, 
  FileText, 
  Sparkles, 
  BarChart3,
  Shield,
  Database,
  Cpu,
  Users as UsersIcon,
  Zap,
  BarChart,
  X
} from 'lucide-react'

const Sidebar = ({ isMobileOpen, onMenuToggle }) => {
  const location = useLocation()
  const ref = useAnimation('slideInLeft')

  const menuItems = [
    { path: '/', icon: Home, label: 'Dashboard', description: 'Overview' },
    { path: '/inbox', icon: Inbox, label: 'Inbox', description: 'Messages' },
    { path: '/invoices', icon: FileText, label: 'Invoices', description: 'Billing' },
    { path: '/ai', icon: Sparkles, label: 'AI Studio', description: 'Content' },
  ]

  const analyticsItems = [
    { path: '/analytics', icon: BarChart, label: 'Analytics', description: 'Metrics' },
    { path: '/users', icon: UsersIcon, label: 'Users', description: 'Team' },
    { path: '/automation', icon: Zap, label: 'Automation', description: 'Workflows' },
  ]

  const handleLinkClick = () => {
    // Close sidebar on mobile when a link is clicked
    if (window.innerWidth < 1024) {
      onMenuToggle()
    }
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
          onClick={onMenuToggle}
        />
      )}

      {/* Sidebar */}
      <aside 
        ref={ref} 
        className={`fixed left-0 top-0 h-full w-64 bg-dark-200 border-r border-gray-800 z-40 transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Header */}
        <div className="p-5 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white">AI Command</h2>
                <p className="text-xs text-gray-400">Business Platform</p>
              </div>
            </div>
            <button 
              onClick={onMenuToggle}
              className="lg:hidden p-1 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto h-[calc(100vh-12rem)]">
          <nav className="p-4 space-y-1">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 py-2">Main</p>
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{item.label}</div>
                    <div className="text-xs text-gray-500 truncate">{item.description}</div>
                  </div>
                </Link>
              )
            })}
          </nav>

          {/* Analytics Section */}
          <nav className="p-4 space-y-1 border-t border-gray-800/50">
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider px-3 py-2">Analytics</p>
            {analyticsItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group ${
                    isActive 
                      ? 'bg-neon-green/20 text-neon-green border border-neon-green/20' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">{item.label}</div>
                    <div className="text-xs text-gray-500 truncate">{item.description}</div>
                  </div>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* System Status */}
        <div className="p-4 border-t border-gray-800/50">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-neon-green" />
                <span className="text-xs text-gray-400">Security</span>
              </div>
              <div className="w-2 h-2 bg-neon-green rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-neon-blue" />
                <span className="text-xs text-gray-400">Systems</span>
              </div>
              <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar