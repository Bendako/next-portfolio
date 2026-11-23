import PortfolioShell from '@/components/PortfolioShell'
import { localeMetadata } from '@/lib/site'

export const metadata = localeMetadata('he')

export default function HomePage() {
  return <PortfolioShell />
}
