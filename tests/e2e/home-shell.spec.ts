import { expect, test } from '@playwright/test'

test('publishes the BTD company identity', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('BTD / Product & Technology')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'בונים מוצרים דיגיטליים שעובדים בעולם האמיתי.',
  )
  await expect(page.locator('footer strong')).toHaveText('BTD / PRODUCT & TECHNOLOGY')
})

test('presents two engines and four process steps', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('[data-engine-card]')).toHaveCount(2)
  await expect(page.locator('[data-process-step]')).toHaveCount(4)
  await expect(page.locator('#engines')).toContainText('מוצרים בבעלות BTD')
  await expect(page.locator('#engines')).toContainText('מערכות end-to-end נבחרות')
})

test('switches language without moving the layout', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/')

  await expect(page.locator('html')).toHaveAttribute('lang', 'he')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')

  const stableSelectors = ['.brand', '.header-controls', '.hero-actions', '.hero-mark']
  const xPositions = async () =>
    Promise.all(
      stableSelectors.map(async (selector) => (await page.locator(selector).boundingBox())?.x),
    )
  const hebrewPositions = await xPositions()

  await page.getByRole('button', { name: 'English' }).click()

  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'We build digital products that work in the real world.',
  )
  expect(
    await page
      .getByRole('heading', { level: 1 })
      .evaluate((element) => getComputedStyle(element).direction),
  ).toBe('ltr')
  expect(await xPositions()).toEqual(hebrewPositions)
})

test('persists language and theme preferences across reloads', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')

  await expect(page.locator('html')).toHaveClass(/dark/)

  await page.getByRole('button', { name: 'English' }).click()
  await page.getByRole('button', { name: 'Switch to light theme' }).click()
  await page.reload()

  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  await expect(page.locator('html')).toHaveClass(/light/)
})

test('presents five live work items with working links', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('[data-work-card]')).toHaveCount(5)
  await expect(page.locator('a[href="https://letter-blast.vercel.app/"]')).toBeVisible()
  await expect(
    page.locator('a[href="https://next-starter-mcp-landing-page.vercel.app/"]'),
  ).toBeVisible()
  await expect(
    page.locator('a[href="https://github.com/Bendako/next-starter-script"]'),
  ).toBeVisible()
})

test('introduces the founder and offers a real contact path', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('#founder')).toContainText('בן דאקו')
  await expect(
    page.locator('#founder a[href="https://github.com/Bendako"]'),
  ).toBeVisible()
  await expect(
    page.locator('#founder a[href="https://www.linkedin.com/in/bendako/"]'),
  ).toBeVisible()
  await expect(
    page.locator('#contact a[href="mailto:bendk1994@gmail.com"]'),
  ).toBeVisible()
  await expect(page.locator('#contact')).toContainText('bendk1994@gmail.com')
})

test('serves a bilingual 404 that links back home without moving its controls', async ({ page }) => {
  const response = await page.goto('/definitely-missing')

  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: 'העמוד הזה לא נמצא' })).toBeVisible()
  const hebrewControlsX = (await page.locator('.not-found-controls').boundingBox())?.x

  await page.getByRole('button', { name: 'English' }).click()

  await expect(page.getByRole('heading', { name: 'This page could not be found' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Back to homepage' })).toHaveAttribute('href', '/')
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
    .getByRole('link', { name: 'איך עובדים' })
    .click()

  await expect(page).toHaveURL(/#process$/)
  await expect(page.locator('#process')).toBeInViewport()

  const motionStyles = await page
    .getByRole('link', { name: 'לראות מה בנינו' })
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
