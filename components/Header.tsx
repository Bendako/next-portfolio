"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from './Theme-Provider'
import { useScrollTo } from '@/hooks/useScrollTo'

type NavigationItem = {
    name: string;
    href: string;
  }
  
  const navigation: NavigationItem[] = [
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ]

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const scrollToElement = useScrollTo()

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // 768px is the md breakpoint in Tailwind
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const handleThemeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleMobileNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const handleContactScroll = () => {
    scrollToElement('contact')
    handleMobileNavClick()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold ml-2">Portfolio</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden flex-1 md:flex md:justify-center">
          <ul className="flex items-center space-x-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={item.name === 'Contact' ? (e) => {
                    e.preventDefault()
                    handleContactScroll()
                  } : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThemeToggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] bg-background/95 backdrop-blur md:hidden">
          <nav className="container h-full">
            <div className="flex h-full flex-col items-center justify-center">
              <ul className="w-full space-y-6 px-4">
                {navigation.map((item) => (
                  <li 
                    key={item.name}
                    className="transform transition-all duration-200 hover:scale-105"
                  >
                    <Link
                      href={item.href}
                      className="flex w-full justify-center rounded-lg py-3 text-lg font-medium transition-colors hover:bg-primary/10 hover:text-primary"
                      onClick={item.name === 'Contact' ? (e) => {
                        e.preventDefault()
                        handleContactScroll()
                      } : handleMobileNavClick}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}