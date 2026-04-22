import { useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import HRDashboard from './HRDashboard'
import SalesDashboard from './SalesDashboard'
import UserManagement from './UserManagement'
import HRJobManagement from './HRJobManagement'
import MarketingBlogManagement from './MarketingBlogManagement'
import faviconImg from '../../../assets/favicon.png'
import faviconDarkImg from '../../../assets/favicon_dark.png'

export default function AdminLayout() {
  const { role, userName, logout } = useAuth()
  
  const defaultTab = role === 'sales' ? 'leads' 
                   : role === 'marketing' ? 'blogs' 
                   : role === 'superadmin' ? 'users' : 'applications'
  const [activeTab, setActiveTab] = useState(defaultTab)

  const TABS = []

  if (role === 'superadmin') {
    TABS.push({ id: 'users', label: 'User Management', icon: '👥' })
    TABS.push({ id: 'applications', label: 'Career Applications', icon: '📄' })
    TABS.push({ id: 'jobs', label: 'Job Openings', icon: '💼' })
    TABS.push({ id: 'leads', label: 'Sales Leads', icon: '🤝' })
    TABS.push({ id: 'blogs', label: 'Blog Management', icon: '📝' })
  } else if (role === 'hr') {
    TABS.push({ id: 'applications', label: 'Career Applications', icon: '📄' })
    TABS.push({ id: 'jobs', label: 'Job Openings', icon: '💼' })
  } else if (role === 'marketing') {
    TABS.push({ id: 'blogs', label: 'Blog Management', icon: '📝' })
  } else if (role === 'sales') {
    TABS.push({ id: 'leads', label: 'Enquiries & Leads', icon: '🤝' })
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'users': return <UserManagement />
      case 'applications': return <HRDashboard />
      case 'jobs': return <HRJobManagement />
      case 'leads': return <SalesDashboard />
      case 'blogs': return <MarketingBlogManagement />
      default: return null
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb] dark:bg-[#0a0f1a] transition-colors duration-300 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-800 flex flex-col fixed h-full z-20">
        <div className="p-6 border-b border-gray-100 dark:border-slate-800">
          <div className="flex items-center gap-3 mb-2">
            <img src={faviconDarkImg} alt="LC" className="w-6 h-6 object-contain dark:hidden" />
            <img src={faviconImg}     alt="LC" className="w-6 h-6 object-contain hidden dark:block" />
            <span className="font-bold text-gray-900 dark:text-slate-100 uppercase tracking-wide">Admin Portal</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-slate-400 mb-0">Logged in as <span className="font-semibold text-orange-600">{userName}</span></p>
          <div className="inline-block mt-2 px-2 py-0.5 bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400 text-[10px] uppercase font-bold rounded">
            Role: {role}
          </div>
        </div>

        <div className="p-4 flex-1 overflow-y-auto space-y-1">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === tab.id 
                  ? 'bg-orange-50 dark:bg-orange-950/30 text-orange-600' 
                  : 'text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800/50 hover:text-gray-900 dark:hover:text-slate-200'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-gray-100 dark:border-slate-800">
          <button 
            onClick={logout} 
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-gray-600 dark:text-slate-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 transition-all font-medium border border-transparent hover:border-red-200 dark:hover:border-red-900/40"
          >
            Sign Out
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 min-h-screen">
        {renderContent()}
      </div>
    </div>
  )
}
