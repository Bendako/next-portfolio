import Link from 'next/link'
import { Github, Linkedin } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Social media links configuration
  const socialLinks = [
    {
      href: "https://github.com/Bendako",
      icon: Github,
      label: "GitHub Profile"
    },
    {
      href: "https://www.linkedin.com/in/bendako/",
      icon: Linkedin,
      label: "LinkedIn Profile"
    },
  ]

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col items-center justify-center gap-4 py-6">
        {/* Upper section with navigation and social links */}
        <div className="flex flex-col items-center gap-4 md:gap-6">
          <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
            <Link 
              href="/" 
              className="text-sm font-medium transition-colors hover:text-primary"
              aria-label="Go to homepage"
            >
              Portfolio
            </Link>
            <p className="text-sm text-muted-foreground">
              Built with Next.js & Tailwind
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Link
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-primary"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
        
        {/* Copyright section */}
        <div className="flex items-center justify-center border-t w-full pt-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Ben Dako. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}