import { expect, test } from '@playwright/test'

test('publishes the SYSTEMS / BTD portfolio identity', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('SYSTEMS / BTD | Hybrid Product Builder')
})

test('presents three working public proofs under the canonical brand', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('[data-public-project]')).toHaveCount(3)
  await expect(page.locator('a[href="https://github.com/Bendako/next-starter-script"]')).toBeVisible()
  await expect(page.locator('a[href="https://next-starter-mcp-landing-page.vercel.app/"]')).toBeVisible()
  await expect(page.locator('a[href="https://letter-blast.vercel.app/"]')).toBeVisible()
  await expect(page.locator('footer strong')).toHaveText('SYSTEMS / BTD — HYBRID PRODUCT BUILDER')
})

test('switches text direction without mirroring the page layout', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/')

  const stableSelectors = [
    '.brand',
    '.header-controls',
    '.hero-copy',
    '.console-panel',
    '.capability-panel:nth-child(1)',
    '.capability-panel:nth-child(3)',
  ]
  const xPositions = async () => Promise.all(
    stableSelectors.map(async (selector) => (await page.locator(selector).boundingBox())?.x),
  )

  await expect(page.locator('html')).toHaveAttribute('lang', 'he')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  expect(await page.locator('.hero-copy h1').evaluate((element) => getComputedStyle(element).direction)).toBe('rtl')
  const hebrewPositions = await xPositions()

  await page.getByRole('button', { name: 'English' }).click()

  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  expect(await page.locator('.hero-copy h1').evaluate((element) => getComputedStyle(element).direction)).toBe('ltr')
  expect(await xPositions()).toEqual(hebrewPositions)
})

test('persists language and theme preferences without changing layout direction', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')

  await page.getByRole('button', { name: 'English' }).click()
  await page.getByRole('button', { name: 'Switch to light theme' }).click()
  await page.reload()

  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  await expect(page.locator('html')).toHaveClass(/light/)
  expect(await page.locator('.hero-copy h1').evaluate((element) => getComputedStyle(element).direction)).toBe('ltr')
})

test('serves a bilingual 404 without moving its controls', async ({ page }) => {
  const response = await page.goto('/definitely-missing')

  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: 'העמוד הזה לא נמצא' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'חזרה לדף הבית' })).toHaveAttribute('href', '/')
  const hebrewControlsX = (await page.locator('.not-found-controls').boundingBox())?.x

  await page.getByRole('button', { name: 'English' }).click()

  await expect(page.getByRole('heading', { name: 'This page could not be found' })).toBeVisible()
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  expect(await page.locator('.not-found-panel h1').evaluate((element) => getComputedStyle(element).direction)).toBe('ltr')
  expect((await page.locator('.not-found-controls').boundingBox())?.x).toBe(hebrewControlsX)
})

test('avoids horizontal overflow across the documented viewport matrix', async ({ page }) => {
  await page.goto('/')

  for (const width of [360, 768, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth),
      `Hebrew horizontal overflow at ${width}px`,
    ).toBe(false)

    await page.getByRole('button', { name: 'English' }).click()
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth),
      `English horizontal overflow at ${width}px`,
    ).toBe(false)
    await page.getByRole('button', { name: 'עברית' }).click()
  }
})

test('supports keyboard focus, anchors, reduced motion, and a clean console', async ({ page }) => {
  const consoleErrors: string[] = []

  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')

  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'דילוג לתוכן הראשי' })).toBeFocused()

  await page
    .getByRole('navigation', { name: 'ניווט ראשי' })
    .getByRole('link', { name: 'עבודות' })
    .click()

  await expect(page).toHaveURL(/#work$/)
  await expect(page.locator('#work')).toBeInViewport()

  const motionStyles = await page
    .getByRole('link', { name: 'לצפייה בעבודות' })
    .evaluate((element) => {
      const style = getComputedStyle(element)
      return {
        animationDuration: Number.parseFloat(style.animationDuration),
        transitionDuration: Number.parseFloat(style.transitionDuration),
      }
    })

  expect(motionStyles.animationDuration).toBeLessThanOrEqual(0.00001)
  expect(motionStyles.transitionDuration).toBeLessThanOrEqual(0.00001)
  expect(consoleErrors).toEqual([])
})

test('keeps the server-rendered footer year stable during hydration', async ({ page, request }) => {
  const response = await request.get('/')
  const serverHtml = await response.text()
  const serverYear = serverHtml.match(/©\s*(?:<!--\s*-->)?\s*(\d{4})/)?.[1]
  const consoleErrors: string[] = []

  expect(serverYear).toMatch(/^\d{4}$/)
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  await page.addInitScript(() => {
    Date.prototype.getFullYear = () => 2099
  })
  await page.goto('/')

  await expect(page.getByText(`© ${serverYear}`, { exact: true })).toBeVisible()
  expect(consoleErrors.filter((message) => message.toLowerCase().includes('hydration'))).toEqual([])
})
