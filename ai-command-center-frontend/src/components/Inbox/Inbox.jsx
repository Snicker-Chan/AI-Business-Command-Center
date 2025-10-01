import { useState, useEffect } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { Search, Filter, Mail, Star, Clock } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'

const Inbox = () => {
  const ref = useAnimation('fadeInUp')
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)

  useEffect(() => {
    // Mock data - replace with API call
    const mockMessages = [
      {
        id: 1,
        sender: 'John Doe',
        email: 'john@example.com',
        subject: 'Project Update Required',
        message: 'We need your input on the latest project developments. The team has made significant progress and we require your approval before moving forward with the next phase.',
        timestamp: '2024-01-15T10:30:00Z',
        read: false,
        starred: true
      },
      {
        id: 2,
        sender: 'Sarah Wilson',
        email: 'sarah@company.com',
        subject: 'Meeting Scheduled',
        message: 'The quarterly review meeting has been scheduled for next Wednesday at 2:00 PM. Please confirm your availability and prepare the performance metrics.',
        timestamp: '2024-01-15T09:15:00Z',
        read: true,
        starred: false
      },
      {
        id: 3,
        sender: 'AI System',
        email: 'ai@commandcenter.com',
        subject: 'Automated Report Generated',
        message: 'Your weekly performance report has been generated and is ready for review. Key metrics show a 15% improvement in user engagement.',
        timestamp: '2024-01-15T08:00:00Z',
        read: false,
        starred: false
      }
    ]
    setMessages(mockMessages)
  }, [])

  return (
    <div ref={ref} className="space-y-6 pt-16 lg:pt-0">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">Unified Inbox</h1>
          <p className="text-gray-400 mt-2">Manage all your communications in one place</p>
        </div>
        <div className="flex space-x-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search messages..."
              className="glass pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-neon-blue focus:outline-none w-48 lg:w-64"
            />
          </div>
          <Button variant="secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Message List */}
        <Card className="lg:col-span-1">
          <div className="space-y-3">
            {messages.map(message => (
              <div
                key={message.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedMessage?.id === message.id
                    ? 'bg-neon-blue/20 border border-neon-blue/30'
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                onClick={() => setSelectedMessage(message)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">{message.sender}</p>
                      <p className="text-sm text-gray-400 truncate max-w-[150px]">
                        {message.subject}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </p>
                    {!message.read && (
                      <div className="w-2 h-2 bg-neon-blue rounded-full mt-1 ml-auto"></div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-300 mt-2 line-clamp-2">
                  {message.message}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Message Detail */}
        <Card className="lg:col-span-2">
          {selectedMessage ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold">{selectedMessage.subject}</h2>
                  <p className="text-neon-blue">{selectedMessage.sender} • {selectedMessage.email}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">
                    {new Date(selectedMessage.timestamp).toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div className="p-4 bg-white/5 rounded-lg">
                <p className="text-gray-300 leading-relaxed">
                  {selectedMessage.message}
                </p>
              </div>

              <div className="flex space-x-3">
                <Button>Reply</Button>
                <Button variant="secondary">Forward</Button>
                <Button variant="danger">Delete</Button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <Mail className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-400">Select a message to read</h3>
              <p className="text-gray-500 mt-2">Choose a message from the list to view its contents</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}

export default Inbox