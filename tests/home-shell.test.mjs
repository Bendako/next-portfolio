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
  assert.doesNotMatch(shell, /<form\b|<input\b|<textarea\b/)
})

test('typed bilingual content contains exactly three capabilities and two approved works', () => {
  const content = read('data/portfolio.ts')

  assert.match(content, /satisfies Record<Locale, PortfolioContent>/)
  assert.match(content, /Hybrid Product Builder/)
  assert.match(content, /נווה בשדרה/)
  assert.match(content, /AI-agent\/SBEA/)
  assert.doesNotMatch(content, /Jobs Center|LetterBlast|Expense Tracker/)

  for (const locale of ['he', 'en']) {
    const localeBlock = content.split(`${locale}: {`)[1]?.split(locale === 'he' ? '\n  en: {' : '\n} satisfies')[0]
    assert.ok(localeBlock, `missing ${locale} locale`)
    assert.equal((localeBlock.match(/capabilityId:/g) ?? []).length, 3)
    assert.equal((localeBlock.match(/workId:/g) ?? []).length, 2)
  }
})

test('document defaults to Hebrew RTL and initializes persisted locale and theme safely', () => {
  const layout = read('app/layout.tsx')
  const localeProvider = read('components/Locale-Provider.tsx')
  const themeProvider = read('components/Theme-Provider.tsx')

  assert.match(layout, /<html lang="he" dir="rtl"/)
  assert.match(layout, /portfolio-locale/)
  assert.match(layout, /prefers-color-scheme: dark/)
  assert.match(localeProvider, /savedLocale === 'en' \|\| savedLocale === 'he'/)
  assert.match(localeProvider, /document\.documentElement\.dir/)
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
