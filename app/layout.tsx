import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { Footer } from "@/components/Footer";
import ContactMe from "@/components/ContactMe";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ben Dako | Full Stack Developer | Next.js & React Expert",
  description: "Full-stack developer specializing in Next.js, React, and automation tools. View my portfolio of web applications, games, and developer tools.",
  keywords: "Ben Dako, Full Stack Developer, Next.js, React, TypeScript, Web Development, Portfolio, JavaScript, Three.js, Automation Tools",
  authors: [{ name: "Ben Dako" }],
  creator: "Ben Dako",
  openGraph: {
    title: "Ben Dako | Full Stack Developer",
    description: "Full-stack developer specializing in Next.js, React, and automation tools. Building scalable web applications and interactive experiences.",
    url: "https://next-portfolio-nine-chi.vercel.app",
    siteName: "Ben Dako Portfolio",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
          <ThemeProvider>
            <div className="relative flex min-h-screen flex-col bg-background">
              <main className="flex-1">
                {children}
              </main>
              <ContactMe />
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
    
  );
}
