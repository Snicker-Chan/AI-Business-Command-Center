import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import anime from 'animejs'

// Layout Components
import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'

// Page Components
import Dashboard from './components/Dashboard/Dashboard'
import Inbox from './components/Inbox/Inbox'
import InvoiceForm from './components/Invoices/InvoiceForm'
import AIContent from './components/AI/AIContent'
import Analytics from './components/Analytics/Analytics'
import UserManagement from './components/Users/UserManagement'
import Automation from './components/Automation/Automation'
import LandingPage from './components/Landing/Landing'

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    // Enhanced background animations
    anime({
      targets: '.background-element',
      translateY: [0, -20],
      duration: 4000,
      easing: 'easeInOutSine',
      loop: true,
      direction: 'alternate'
    })

    // Grid animation
    anime({
      targets: '.grid-pattern',
      opacity: [0.3, 0.6],
      duration: 3000,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate'
    })
  }, [])

  const toggleMobileMenu = () => {
    console.log('Toggle mobile menu:', !isMobileOpen); // Debug log
    setIsMobileOpen(!isMobileOpen)
  }

  const closeMobileMenu = () => {
    console.log('Close mobile menu'); // Debug log
    setIsMobileOpen(false)
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark-300 relative overflow-x-hidden">
        {/* Enhanced Background */}
        <div className="fixed inset-0 z-0">
          {/* Main Grid */}
          <div className="grid-pattern absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.15)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          
          {/* Animated Background Elements */}
          <div className="background-element absolute top-20 left-10 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="background-element absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" style={{animationDelay: '2000ms'}}></div>
          <div className="background-element absolute top-1/2 left-1/2 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl" style={{animationDelay: '4000ms'}}></div>
          
          {/* Animated Lines */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="animated-line" style={{left: '15%'}}></div>
            <div className="animated-line" style={{left: '50%', animationDelay: '2s'}}></div>
            <div className="animated-line" style={{left: '85%', animationDelay: '4s'}}></div>
          </div>
        </div>
        
        {/* Layout Components */}
        <Navbar onMenuToggle={toggleMobileMenu} isMobileOpen={isMobileOpen} />
        <Sidebar onMenuToggle={closeMobileMenu} isMobileOpen={isMobileOpen} />
        
        {/* Main Content */}
        <main className="lg:ml-64 pt-16 min-h-screen pb-12">
          <div className="container mx-auto px-4 py-6 max-w-7xl">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/invoices" element={<InvoiceForm />} />
              <Route path="/ai" element={<AIContent />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<UserManagement />} />
              <Route path="/automation" element={<Automation />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
    
  )
}

export default App