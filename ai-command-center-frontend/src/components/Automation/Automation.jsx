import { useState } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { Zap, Play, Pause, Plus, Trash2, Edit3 } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'

const Automation = () => {
  const ref = useAnimation('fadeInUp')
  const [workflows, setWorkflows] = useState([
    { id: 1, name: 'Invoice Reminder', trigger: 'Due Date', action: 'Send Email', status: 'active' },
    { id: 2, name: 'Welcome Sequence', trigger: 'New User', action: 'Send Series', status: 'active' },
    { id: 3, name: 'Low Balance Alert', trigger: 'Balance < $100', action: 'Send Notification', status: 'paused' },
    { id: 4, name: 'Weekly Report', trigger: 'Every Monday', action: 'Generate Report', status: 'active' },
  ])

  const toggleWorkflow = (id) => {
    setWorkflows(workflows.map(wf => 
      wf.id === id 
        ? { ...wf, status: wf.status === 'active' ? 'paused' : 'active' }
        : wf
    ))
  }

  return (
    <div ref={ref} className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Automation</h1>
          <p className="text-gray-400 mt-2">Automate workflows and business processes</p>
        </div>
        <Button className="mt-4 lg:mt-0">
          <Plus className="w-4 h-4 mr-2" />
          New Workflow
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <Zap className="w-8 h-8 text-neon-blue mx-auto mb-2" />
            <p className="text-2xl font-bold">12</p>
            <p className="text-gray-400 text-sm">Active Workflows</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <Play className="w-8 h-8 text-neon-green mx-auto mb-2" />
            <p className="text-2xl font-bold">347</p>
            <p className="text-gray-400 text-sm">Executions Today</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <Zap className="w-8 h-8 text-neon-purple mx-auto mb-2" />
            <p className="text-2xl font-bold">98.7%</p>
            <p className="text-gray-400 text-sm">Success Rate</p>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-4 gradient-text">Workflows</h3>
        <div className="space-y-4">
          {workflows.map(workflow => (
            <div key={workflow.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-neon-blue/10">
                  <Zap className="w-5 h-5 text-neon-blue" />
                </div>
                <div>
                  <p className="font-medium">{workflow.name}</p>
                  <p className="text-sm text-gray-400">
                    When: {workflow.trigger} → Then: {workflow.action}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => toggleWorkflow(workflow.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    workflow.status === 'active' 
                      ? 'text-neon-green hover:bg-neon-green/10' 
                      : 'text-gray-400 hover:bg-gray-600'
                  }`}
                >
                  {workflow.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                
                <button className="p-2 text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10 rounded-lg transition-colors">
                  <Edit3 className="w-4 h-4" />
                </button>
                
                <button className="p-2 text-gray-400 hover:text-neon-pink hover:bg-neon-pink/10 rounded-lg transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-lg font-semibold mb-4 gradient-text">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-neon-blue/10 border border-gray-700 hover:border-neon-blue transition-all group">
              <Zap className="w-5 h-5 text-neon-blue mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium">Create Email Sequence</p>
              <p className="text-sm text-gray-400">Automated email campaigns</p>
            </button>
            
            <button className="w-full text-left p-4 rounded-lg bg-white/5 hover:bg-neon-green/10 border border-gray-700 hover:border-neon-green transition-all group">
              <Zap className="w-5 h-5 text-neon-green mb-2 group-hover:scale-110 transition-transform" />
              <p className="font-medium">Set Up Notifications</p>
              <p className="text-sm text-gray-400">Real-time alerts and updates</p>
            </button>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold mb-4 gradient-text">Recent Activity</h3>
          <div className="space-y-3">
            {[
              'Invoice reminder sent to 5 clients',
              'Welcome email sequence started for new user',
              'Weekly report generated and distributed',
              'Low balance alert triggered'
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-white/5">
                <div className="w-2 h-2 bg-neon-green rounded-full pulse-glow"></div>
                <span className="text-sm text-gray-300">{activity}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Automation