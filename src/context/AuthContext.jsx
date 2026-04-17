import { createContext, useContext, useState, useEffect, useMemo } from 'react'
import { supabase } from '../lib/supabase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [userName, setUserName] = useState('')
  const [loading, setLoading] = useState(true)

  const handleUserResult = async (supabaseUser) => {
    if (supabaseUser) {
      setUser(supabaseUser)
      try {
        const { data, error } = await supabase
          .from('admin_users')
          .select('role, name')
          .eq('email', supabaseUser.email)
          .single()

        if (data && !error) {
          setRole(data.role)
          setUserName(data.name)
        } else {
          await supabase.auth.signOut()
          setUser(null)
          setRole(null)
          setUserName('')
        }
      } catch {
        setRole(null)
      }
    } else {
      setUser(null)
      setRole(null)
      setUserName('')
    }
    setLoading(false)
  }

  useEffect(() => {
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      handleUserResult(session?.user || null)
      
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          handleUserResult(session?.user || null)
        }
      )
      return () => subscription.unsubscribe()
    }
    
    getSession()
  }, [])

  const login = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      throw error 
    }
    return data
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  const value = useMemo(() => ({ user, role, userName, loading, login, logout }), [user, role, userName, loading])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
