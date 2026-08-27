import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { LocaleProvider } from "@/components/Locale-Provider";

const siteTitle = "BTD / Product & Technology";
const siteDescription =
  "BTD builds and operates digital products and selected end-to-end systems.";
const siteUrl = "https://next-portfolio-nine-chi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: ["BTD", "product", "technology", "full stack", "automation", "AI", "operations"],
  openGraph: {
    title: siteTitle,
    description: "Digital products and selected end-to-end systems.",
    url: siteUrl,
    siteName: "BTD",
    locale: "he_IL",
    alternateLocale: ["en_US"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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
