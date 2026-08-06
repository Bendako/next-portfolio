import PortfolioShell from '@/components/PortfolioShell'

export default function HomePage() {
  return <PortfolioShell currentYear={new Date().getFullYear()} />
}
