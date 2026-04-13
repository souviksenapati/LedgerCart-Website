import { useState, useEffect } from 'react'
import { supabase } from '../../../lib/supabase'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// We instantiate a secondary non-persisting client so creating users 
// doesn't overwrite the active admin's local storage session.
let adminClient = null
function getAdminSupabase() {
  if (!adminClient) {
    adminClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false, autoRefreshToken: false }
    })
  }
  return adminClient
}

export default function UserManagement() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  
  // Form State
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('hr')

  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const { data, error } = await supabase.from('admin_users').select('*').order('created_at', { ascending: false }).limit(100)
      if (!error && data) {
        setUsers(data)
      } else if (error) {
        console.error(error)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleAddUser = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')

    try {
      // 1. Create User in Secondary Auth Instance (doesn't log out main admin!)
      const client = getAdminSupabase()
      const { error: authError } = await client.auth.signUp({ email, password })
      if (authError) throw authError

      // 2. Add Role mapping to Supabase Database
      const { error: dbError } = await supabase.from('admin_users').insert([{ email, name, role }])
      if (dbError) throw dbError

      // Update UI securely
      setUsers([{ email, name, role }, ...users])
      
      // Clear form
      setEmail('')
      setName('')
      setPassword('')
      setMessage(`User ${email} created successfully.`)
    } catch (err) {
      setError(err.message || 'Failed to create user.')
    }
    setSaving(false)
  }

  const handleDelete = async (userEmail) => {
    if (!window.confirm(`Are you sure you want to remove role mapping for ${userEmail}? They will instantly lose admin portal access.`)) return
    
    try {
      const { error: dbError } = await supabase.from('admin_users').delete().eq('email', userEmail)
      if (dbError) throw dbError

      setUsers(users.filter(u => u.email !== userEmail))
    } catch (err) {
      alert("Failed to delete mapping: " + err.message)
    }
  }

  return (
    <div className="p-8 pb-32">
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-4 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Super Admin
        </div>
        <h1 className="text-[clamp(32px,4vw,48px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">User</span> Management
        </h1>
        <p className="text-gray-500 dark:text-slate-400 text-[15px]">Create and manage internal accounts for HR, Sales, and Superadmins.</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* Create User Form */}
        <div className="xl:col-span-1">
          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl p-6 shadow-sm sticky top-8">
            <h2 className="text-lg font-bold text-gray-900 dark:text-slate-100 mb-6">➕ Add New Admin User</h2>
            
            <form onSubmit={handleAddUser} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" required value={name} onChange={e => setName(e.target.value)}
                  placeholder="e.g. Sarah Connor"
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all" />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-2">Email Address</label>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)}
                  placeholder="hr@ledgercart.com"
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-2">Temporary Password</label>
                <input type="text" required value={password} onChange={e => setPassword(e.target.value)}
                  placeholder="Min 6 characters" minLength={6}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 dark:text-slate-400 uppercase tracking-widest mb-2">Role Access</label>
                <select value={role} onChange={e => setRole(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-slate-100 text-sm outline-none focus:border-orange-500 transition-all">
                  <option value="hr">HR (Job Openings & Applications)</option>
                  <option value="sales">Sales (Enquiries & Leads)</option>
                  <option value="marketing">Marketing (Blog Management)</option>
                  <option value="superadmin">Super Admin (All Access + User Mgmt)</option>
                </select>
              </div>

              {error && <div className="text-red-500 text-xs bg-red-50 p-3 rounded-lg border border-red-100">{error}</div>}
              {message && <div className="text-green-600 text-xs bg-green-50 p-3 rounded-lg border border-green-100">{message}</div>}

              <button type="submit" disabled={saving}
                className="w-full mt-2 py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm rounded-xl transition-all disabled:opacity-50">
                {saving ? 'Creating User...' : 'Create Account & Map Role'}
              </button>
            </form>
          </div>
        </div>

        {/* Existing Users List */}
        <div className="xl:col-span-2">
          <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-100 dark:border-slate-800 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 dark:text-slate-100">👥 Active Portal Users</h2>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">{users.length} Users</span>
            </div>

            {loading ? (
              <div className="flex flex-col animate-pulse">
                <div className="h-12 border-b border-gray-100 dark:border-slate-800 bg-gray-50/60 dark:bg-slate-800/40"></div>
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-slate-800">
                    <div className="h-4 w-32 bg-gray-200 dark:bg-slate-800 rounded"></div>
                    <div className="h-4 w-40 bg-gray-200 dark:bg-slate-800 rounded"></div>
                    <div className="h-6 w-20 bg-gray-200 dark:bg-slate-800 rounded flex-shrink-0"></div>
                    <div className="h-6 w-24 bg-gray-100 dark:bg-slate-800/50 rounded flex-shrink-0"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50/50 dark:bg-slate-800/40">
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Name</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Email Area</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Access Role</th>
                      <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-widest text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user) => (
                      <tr key={user.email} className="border-t border-gray-100 dark:border-slate-800 hover:bg-gray-50 dark:hover:bg-slate-800/50">
                        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-slate-100">{user.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-slate-400">{user.email}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wider
                            ${user.role === 'superadmin' ? 'bg-purple-100 text-purple-700' : 
                              user.role === 'hr' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                            {user.role}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button onClick={() => handleDelete(user.email)} className="text-sm font-semibold text-red-500 hover:text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors">
                            Revoke Access
                          </button>
                        </td>
                      </tr>
                    ))}
                    {users.length === 0 && (
                      <tr className="border-t border-gray-100"><td colSpan={4} className="px-6 py-12 text-center text-gray-400">No users found. Note: Ensure Supabase rules allow reading from admin_users collection.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}
