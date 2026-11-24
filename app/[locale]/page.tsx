import PortfolioShell from '@/components/PortfolioShell'
import { localeMetadata } from '@/lib/site'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return localeMetadata((await params).locale === 'en' ? 'en' : 'he')
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  return <PortfolioShell locale={(await params).locale === 'en' ? 'en' : 'he'} />
}
