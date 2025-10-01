import { useAnimation } from '../../hooks/useAnimation'
import { ArrowRight, Zap, Shield, Brain, Rocket, CheckCircle, Star, Users, BarChart3, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const ref = useAnimation('fadeInUp')

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent business recommendations powered by advanced machine learning algorithms.'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Monitor your business performance with live dashboards and comprehensive reporting.'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline operations with intelligent automation and customizable business processes.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance with industry standards.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless team management with role-based access control and real-time collaboration.'
    },
    {
      icon: Sparkles,
      title: 'Smart Content',
      description: 'Generate professional content instantly with our AI-powered content studio.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CEO, TechFlow Inc',
      content: 'AI Command Center transformed how we manage our business. The insights are incredible!',
      rating: 5
    },
    {
      name: 'Marcus Johnson',
      role: 'Operations Director',
      content: 'The automation features saved us 20+ hours per week. Game changer for our team.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Lead',
      content: 'Content generation alone is worth the subscription. Professional quality in seconds.',
      rating: 4
    }
  ]

  return (
    <div ref={ref} className="min-h-screen bg-dark-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,245,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,245,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          <div className="absolute top-20 left-10 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center space-x-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full px-4 py-2 mb-6">
            <Rocket className="w-4 h-4 text-neon-blue" />
            <span className="text-neon-blue text-sm font-medium">AI Business Platform Launched</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Command Your
            <span className="block gradient-text">Business Future</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The all-in-one AI-powered platform that transforms how you manage, analyze, and grow your business. 
            Get enterprise-grade tools with the simplicity of modern design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform flex items-center space-x-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-neon-blue transition-colors">
              Watch Demo
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">2.5K+</div>
              <div className="text-gray-400 text-sm">Businesses</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">45%</div>
              <div className="text-gray-400 text-sm">Faster Growth</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From AI-powered insights to automated workflows, we've built the complete toolkit for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="glass rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-neon-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-400">
              See what businesses are saying about their transformation with AI Command Center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.name} className="glass rounded-xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Join thousands of businesses already using AI Command Center to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dashboard"
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white px-8 py-4 rounded-lg font-semibold hover:scale-105 transition-transform"
              >
                Start Free Trial
              </Link>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:border-neon-blue transition-colors">
                Schedule Demo
              </button>
            </div>
            <div className="mt-6 text-gray-400 text-sm">
              <CheckCircle className="w-4 h-4 inline mr-2 text-neon-green" />
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">AI Command Center</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 AI Command Center. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage