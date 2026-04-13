import React, { createContext, useContext, useState, useEffect, useMemo } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Get stored theme or default to system
    return localStorage.getItem('ledgercart-theme') || 'system'
  })

  useEffect(() => {
    const root = window.document.documentElement
    
    // Function to apply the correct theme class
    const applyTheme = (currentTheme) => {
      let actualTheme = currentTheme
      
      if (currentTheme === 'system') {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        actualTheme = isDark ? 'dark' : 'light'
      }
      
      if (actualTheme === 'dark') {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }

    applyTheme(theme)
    localStorage.setItem('ledgercart-theme', theme)

    // Listen for system theme changes if set to system
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => applyTheme('system')
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
