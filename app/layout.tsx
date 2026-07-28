import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { LocaleProvider } from "@/components/Locale-Provider";

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
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('portfolio-locale');if(l!=='he'&&l!=='en')l='he';document.documentElement.lang=l;document.documentElement.dir=l==='he'?'rtl':'ltr';var t=localStorage.getItem('theme');if(t!=='dark'&&t!=='light')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(t)}catch(e){document.documentElement.lang='he';document.documentElement.dir='rtl'}})()`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
