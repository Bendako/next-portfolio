"use client"

import { createContext, useCallback, useContext, useEffect, useSyncExternalStore } from 'react'
import type { Locale } from '@/data/portfolio'

type LocaleContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const STORAGE_KEY = 'portfolio-locale'
const LocaleContext = createContext<LocaleContextType | undefined>(undefined)
let volatileLocale: Locale | null = null

const getStoredLocale = (): Locale => {
  try {
    const savedLocale = localStorage.getItem(STORAGE_KEY)
    if (savedLocale === 'en' || savedLocale === 'he') return savedLocale
  } catch {
    return volatileLocale ?? 'he'
  }
  return volatileLocale ?? 'he'
}

const subscribeToLocale = (onStoreChange: () => void) => {
  window.addEventListener('storage', onStoreChange)
  window.addEventListener('locale-change', onStoreChange)
  return () => {
    window.removeEventListener('storage', onStoreChange)
    window.removeEventListener('locale-change', onStoreChange)
  }
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeToLocale, getStoredLocale, () => 'he' as const)

  const setLocale = useCallback((nextLocale: Locale) => {
    volatileLocale = nextLocale
    try {
      localStorage.setItem(STORAGE_KEY, nextLocale)
    } catch {
      // The in-memory fallback keeps the control usable for this session.
    }
    document.documentElement.lang = nextLocale
    document.documentElement.dir = nextLocale === 'he' ? 'rtl' : 'ltr'
    window.dispatchEvent(new Event('locale-change'))
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr'
  }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used within a LocaleProvider')
  return context
}
