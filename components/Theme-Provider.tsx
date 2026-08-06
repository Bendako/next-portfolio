"use client"

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from 'react'

type Theme = 'dark' | 'light'

type ThemeContextType = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
let volatileTheme: Theme | null = null

const getSystemTheme = (): Theme => {
  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  } catch {
    return 'light'
  }
}

const getStoredTheme = (): Theme => {
  try {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
  } catch {
    return volatileTheme ?? getSystemTheme()
  }
  return volatileTheme ?? getSystemTheme()
}

const subscribeToTheme = (onStoreChange: () => void) => {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  window.addEventListener('storage', onStoreChange)
  window.addEventListener('theme-change', onStoreChange)
  mediaQuery.addEventListener('change', onStoreChange)

  return () => {
    window.removeEventListener('storage', onStoreChange)
    window.removeEventListener('theme-change', onStoreChange)
    mediaQuery.removeEventListener('change', onStoreChange)
  }
}

const getThemeSnapshot = () => getStoredTheme()
const getServerThemeSnapshot = (): Theme => 'light'

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  )

  const setTheme = useCallback((nextTheme: Theme) => {
    volatileTheme = nextTheme
    try {
      localStorage.setItem('theme', nextTheme)
    } catch {
      // The in-memory fallback keeps the control usable for this session.
    }
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(nextTheme)
    window.dispatchEvent(new Event('theme-change'))
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}