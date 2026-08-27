import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { LocaleProvider } from "@/components/Locale-Provider";

export const metadata: Metadata = {
  title: "BTD / Product & Technology",
  description: "BTD builds and operates digital products and selected end-to-end systems.",
  keywords: ["BTD", "product", "technology", "full stack", "automation", "AI", "operations"],
  openGraph: {
    title: "BTD / Product & Technology",
    description: "Digital products and selected end-to-end systems.",
    type: "website",
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
