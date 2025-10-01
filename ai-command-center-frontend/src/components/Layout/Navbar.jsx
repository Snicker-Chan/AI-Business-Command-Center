import { useState } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { Brain, Bell, User, Settings, Cpu, Menu, X } from 'lucide-react'

const Navbar = ({ onMenuToggle, isMobileOpen }) => {
  const ref = useAnimation('slideInLeft')
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <nav ref={ref} className="glass-dark fixed top-0 right-0 left-0 h-16 z-50 border-b border-gray-800 lg:left-64">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        {/* Left Section - Logo & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-gray-400 hover:text-neon-blue transition-colors rounded-lg"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
              <Cpu className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-lg font-bold text-white">AI Command</h2>
              <p className="text-xs text-gray-400">Business Center</p>
            </div>
          </div>
        </div>

        {/* Center Section - Status (Desktop only) */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-neon-green bg-neon-green/10 px-3 py-1 rounded-full">
            <Brain className="w-4 h-4" />
            <span>Systems Online</span>
          </div>
        </div>

        {/* Right Section - Actions & User */}
        <div className="flex items-center space-x-2 lg:space-x-3">
          {/* Notifications */}
          <button className="relative p-2 text-gray-400 hover:text-neon-blue transition-colors rounded-lg">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-neon-pink rounded-full"></span>
          </button>

          {/* Settings */}
          <button className="p-2 text-gray-400 hover:text-neon-blue transition-colors rounded-lg">
            <Settings className="w-5 h-5" />
          </button>

          {/* User Menu */}
          <div className="relative">
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center space-x-2 glass rounded-lg px-3 py-2 min-w-0"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <div className="hidden lg:block text-left min-w-0 max-w-32">
                <span className="text-sm font-medium text-white truncate block">Admin User</span>
                <span className="text-xs text-neon-green truncate block">Connected</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar