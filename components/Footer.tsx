import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub Profile"
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn Profile"
    },
    {
      href: "https://twitter.com",
      icon: Twitter,
      label: "Twitter Profile"
    }
  ]

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-col gap-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
          <div className="flex items-center gap-8">
            <Link 
              href="/" 
              className="text-sm font-medium hover:text-primary transition-colors"
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
        
        <div className="flex items-center justify-center border-t pt-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}