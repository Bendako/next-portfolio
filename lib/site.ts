import type { Metadata } from 'next'
import { portfolioContent, type Locale } from '@/data/portfolio'

export const siteUrl = 'https://next-portfolio-nine-chi.vercel.app'
export const siteHost = new URL(siteUrl).host
import { localePaths } from './locale-paths'
export { localePaths } from './locale-paths'

export function localeMetadata(locale: Locale): Metadata {
  const content = portfolioContent[locale]
  return {
    title: 'BTD / Product & Technology',
    description: content.hero.description,
    alternates: {
      canonical: localePaths[locale],
      languages: { he: '/', en: '/en', 'x-default': '/' },
    },
    openGraph: {
      title: 'BTD / Product & Technology',
      description: content.hero.description,
      url: localePaths[locale],
      siteName: 'BTD',
      locale: locale === 'he' ? 'he_IL' : 'en_US',
      alternateLocale: [locale === 'he' ? 'en_US' : 'he_IL'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'BTD / Product & Technology',
      description: content.hero.description,
    },
  }
}
