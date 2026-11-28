import { siteUrl } from "@/lib/site";
import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/Theme-Provider";
import { LocaleProvider } from "@/components/Locale-Provider";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-heebo",
});

const siteTitle = "BTDLabs / Product & Technology";
const siteDescription =
  "BTDLabs builds and operates digital products and selected end-to-end systems.";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "BTDLabs",
    "product",
    "technology",
    "full stack",
    "automation",
    "AI",
    "operations",
  ],
  authors: [{ name: "BTDLabs" }],
  creator: "BTDLabs",
  openGraph: {
    title: siteTitle,
    description: "Digital products and selected end-to-end systems.",
    url: siteUrl,
    siteName: "BTDLabs",
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

export function generateStaticParams() { return [{ locale: "he" }, { locale: "en" }]; }

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const locale = (await params).locale === "en" ? "en" : "he";
  return (
    <html lang={locale} dir="rtl" className={heebo.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}if(t!=='dark'&&t!=='light')t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(t)})()`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
