import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:items-start md:px-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold">Portfolio</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-primary"
              aria-label="Twitter Profile"
            >
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © {currentYear} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  )
}