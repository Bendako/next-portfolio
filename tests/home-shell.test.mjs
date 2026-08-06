import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')

test('home shell replaces the legacy composition with the required section contract', () => {
  const page = read('app/page.tsx')
  const shell = read('components/PortfolioShell.tsx')

  assert.match(page, /PortfolioShell/)
  assert.doesNotMatch(page, /HeroSection|AboutmeSection|TechStack|ProjectsSection/)
  assert.equal((shell.match(/<header\b/g) ?? []).length, 1)
  assert.equal((shell.match(/<footer\b/g) ?? []).length, 1)
  assert.match(shell, /id="work"/)
  assert.match(shell, /id="about"/)
  assert.match(shell, /id="contact"/)
  assert.match(shell, /data-capability-panel/)
  assert.match(shell, /data-work-card/)
  assert.match(shell, /data-public-project/)
  assert.doesNotMatch(shell, /<form\b|<input\b|<textarea\b/)
})

test('typed bilingual content contains the approved capability, case study, and public proof sets', () => {
  const content = read('data/portfolio.ts')

  assert.match(content, /satisfies Record<Locale, PortfolioContent>/)
  assert.match(content, /Hybrid Product Builder/)
  assert.match(content, /נווה בשדרה/)
  assert.match(content, /AI-agent\/SBEA/)
  assert.match(content, /Jobs Center/)
  assert.match(content, /LetterBlast/)
  assert.doesNotMatch(content, /Expense Tracker|React Quiz/)

  for (const locale of ['he', 'en']) {
    const localeBlock = content.split(`${locale}: {`)[1]?.split(locale === 'he' ? '\n  en: {' : '\n} satisfies')[0]
    assert.ok(localeBlock, `missing ${locale} locale`)
    assert.equal((localeBlock.match(/capabilityId:/g) ?? []).length, 3)
    assert.equal((localeBlock.match(/workId:/g) ?? []).length, 2)
    assert.equal((localeBlock.match(/publicWorkId:/g) ?? []).length, 3)
  }
})

test('brand uses the SYSTEMS / BTD identity throughout the active shell', () => {
  const shell = read('components/PortfolioShell.tsx')
  const content = read('data/portfolio.ts')

  assert.match(shell, /SYSTEMS <span className="brand-suffix">\/ BTD<\/span>/)
  assert.doesNotMatch(shell, /BEN\.DAKO/)
  assert.equal((content.match(/SYSTEMS \/ BTD — HYBRID PRODUCT BUILDER/g) ?? []).length, 2)
})

test('document keeps a stable RTL layout while initializing persisted locale and theme safely', () => {
  const layout = read('app/layout.tsx')
  const localeProvider = read('components/Locale-Provider.tsx')
  const shell = read('components/PortfolioShell.tsx')
  const themeProvider = read('components/Theme-Provider.tsx')

  assert.match(layout, /<html lang="he" dir="rtl"/)
  assert.match(layout, /portfolio-locale/)
  assert.match(layout, /prefers-color-scheme: dark/)
  assert.match(localeProvider, /savedLocale === 'en' \|\| savedLocale === 'he'/)
  assert.match(shell, /dir="auto"/)
  assert.doesNotMatch(layout, /document\.documentElement\.dir/)
  assert.doesNotMatch(localeProvider, /document\.documentElement\.dir/)
  assert.match(themeProvider, /savedTheme === 'dark' \|\| savedTheme === 'light'/)
})

test('contact destinations and custom 404 are honest and usable', () => {
  const content = read('data/portfolio.ts')
  const notFound = read('app/not-found.tsx')

  assert.match(content, /mailto:bendk1994@gmail\.com/)
  assert.match(content, /https:\/\/github\.com\/Bendako/)
  assert.match(content, /https:\/\/www\.linkedin\.com\/in\/bendako\//)
  assert.match(notFound, /href="\/"/)
  assert.match(notFound, /useLocale/)
})
