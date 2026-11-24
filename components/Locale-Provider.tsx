"use client"

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import type { Locale } from '@/data/portfolio'
import { localePaths } from '@/lib/locale-paths'

type LocaleContextType = { locale: Locale; setLocale: (locale: Locale) => void }
const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children, initialLocale }: { children: React.ReactNode; initialLocale: Locale }) {
  const router = useRouter()
  const pathname = usePathname()
  const [fallbackLocale, setFallbackLocale] = useState(initialLocale)
  const locale = pathname === '/en' ? 'en' : (pathname === '/' || pathname === '/he') ? 'he' : fallbackLocale

  const setLocale = useCallback((nextLocale: Locale) => {
    if (pathname === '/' || pathname === '/he' || pathname === '/en') {
      router.push(localePaths[nextLocale] + window.location.hash, { scroll: false })
    } else {
      setFallbackLocale(nextLocale)
    }
  }, [pathname, router])

  useEffect(() => { document.documentElement.lang = locale }, [locale])

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used within a LocaleProvider')
  return context
}
