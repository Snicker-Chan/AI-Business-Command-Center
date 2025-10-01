import { useState } from 'react'
import { useAnimation } from '../../hooks/useAnimation'
import { Users as UsersIcon, UserPlus, Shield, Mail, MoreVertical } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'

const UserManagement = () => {
  const ref = useAnimation('fadeInUp')
  const [users, setUsers] = useState([
    { id: 1, name: 'Alex Johnson', email: 'alex@company.com', role: 'Admin', status: 'active', avatar: 'AJ' },
    { id: 2, name: 'Sarah Chen', email: 'sarah@company.com', role: 'Editor', status: 'active', avatar: 'SC' },
    { id: 3, name: 'Mike Rodriguez', email: 'mike@company.com', role: 'Viewer', status: 'inactive', avatar: 'MR' },
    { id: 4, name: 'Emma Wilson', email: 'emma@company.com', role: 'Editor', status: 'active', avatar: 'EW' },
  ])

  return (
    <div ref={ref} className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold gradient-text">User Management</h1>
          <p className="text-gray-400 mt-2">Manage team members and permissions</p>
        </div>
        <Button className="mt-4 lg:mt-0">
          <UserPlus className="w-4 h-4 mr-2" />
          Invite User
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card>
          <div className="text-center">
            <UsersIcon className="w-8 h-8 text-neon-blue mx-auto mb-2" />
            <p className="text-2xl font-bold">24</p>
            <p className="text-gray-400 text-sm">Total Users</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <Shield className="w-8 h-8 text-neon-green mx-auto mb-2" />
            <p className="text-2xl font-bold">8</p>
            <p className="text-gray-400 text-sm">Admins</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <Mail className="w-8 h-8 text-neon-purple mx-auto mb-2" />
            <p className="text-2xl font-bold">14</p>
            <p className="text-gray-400 text-sm">Editors</p>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <UsersIcon className="w-8 h-8 text-neon-pink mx-auto mb-2" />
            <p className="text-2xl font-bold">2</p>
            <p className="text-gray-400 text-sm">Viewers</p>
          </div>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-4 gradient-text">Team Members</h3>
        <div className="space-y-4">
          {users.map(user => (
            <div key={user.id} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center text-white font-semibold">
                  {user.avatar}
                </div>
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-400">{user.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  user.status === 'active' 
                    ? 'bg-neon-green/20 text-neon-green' 
                    : 'bg-gray-600 text-gray-400'
                }`}>
                  {user.status}
                </span>
                <span className="text-sm text-gray-400">{user.role}</span>
                <button className="p-2 text-gray-400 hover:text-neon-blue transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

export default UserManagement