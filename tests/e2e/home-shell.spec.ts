import { expect, test } from '@playwright/test'

test('publishes the BTDLabs company identity', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('BTDLabs / Product & Technology')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'בונים מוצרים דיגיטליים שעובדים בעולם האמיתי.',
  )
  await expect(page.locator('footer strong')).toHaveText('BTDLabs / PRODUCT & TECHNOLOGY')
  expect(
    await page.locator('body').evaluate((element) => getComputedStyle(element).fontFamily),
  ).toMatch(/Heebo/i)
})

test('presents two engines and four process steps', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('[data-engine-card]')).toHaveCount(2)
  await expect(page.locator('[data-process-step]')).toHaveCount(4)
  await expect(page.locator('#engines')).toContainText('מוצרים בבעלות BTDLabs')
  await expect(page.locator('#engines')).toContainText('מערכות end-to-end נבחרות')
})

test('switches language without moving the layout', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 })
  await page.goto('/')

  await expect(page.locator('html')).toHaveAttribute('lang', 'he')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')

  const stableSelectors = ['.brand', '.header-controls', '.hero-actions', '.hero-mark', '#engines .section-heading > div', '#work .section-heading > div', '.footer-inner strong']
  const xPositions = async () =>
    Promise.all(
      stableSelectors.map(async (selector) => (await page.locator(selector).boundingBox())?.x),
    )
  await page.evaluate(() => document.fonts.ready)
  const hebrewPositions = await xPositions()

  await page.getByRole('button', { name: 'English' }).click()

  await expect(page).toHaveURL(/\/en$/)
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
  await page.evaluate(() => document.fonts.ready)
  // Firefox can choose slightly different generic-font metrics per language.
  // The longer BTDLabs lockup rounds to one pixel; still reject a visible shift.
  const englishPositions = await xPositions()
  for (const [index, x] of englishPositions.entries()) {
    expect(x).toBeDefined()
    expect(hebrewPositions[index]).toBeDefined()
    expect(Math.abs(x! - hebrewPositions[index]!)).toBeLessThanOrEqual(1)
  }
})

test('preserves the locale URL and theme preference across reloads', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')

  await expect(page.locator('html')).toHaveClass(/dark/)

  await page.getByRole('button', { name: 'English' }).click()
  await page.getByRole('button', { name: 'Switch to light theme' }).click()
  await page.reload()

  await expect(page).toHaveURL(/\/en$/)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
  await expect(page.locator('html')).toHaveClass(/light/)
})

test('presents five work items with their published links', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('[data-work-card]')).toHaveCount(5)
  const firstProject = page.locator('[data-work-card]').first()
  await expect(firstProject.getByRole('heading')).toHaveText('Shiftbook')
  await expect(firstProject.getByRole('link', { name: 'הורדת גרסת בדיקה' })).toHaveAttribute(
    'href', 'https://github.com/btdlabs/shiftbook-android-updates/releases',
  )
  await expect(page.getByRole('heading', { name: 'React Quiz App' })).toHaveCount(0)
  await expect(page.locator('a[href="https://letter-blast.vercel.app/"]')).toBeVisible()
  await expect(
    page.locator('a[href="https://next-starter-mcp-landing-page.vercel.app/"]'),
  ).toBeVisible()
  await expect(
    page.locator('a[href="https://github.com/btdlabs/next-starter-script"]'),
  ).toBeVisible()
  await page.getByRole('button', { name: 'English' }).click()
  await expect(firstProject.getByRole('heading')).toHaveText('Shiftbook')
  await expect(firstProject.getByRole('link', { name: 'Testing download' })).toHaveAttribute(
    'href', 'https://github.com/btdlabs/shiftbook-android-updates/releases',
  )
  await expect(firstProject.getByRole('link')).toHaveCount(1)
})

test('introduces who is behind BTDLabs and offers a real contact path', async ({ page }) => {
  await page.goto('/')

  await expect(page.locator('#founder')).toContainText('מי מאחורי BTDLabs')
  await expect(page.locator('#founder')).toContainText('מאחורי BTDLabs')
  await expect(page.locator('body')).not.toContainText('המייסד')
  await expect(page.locator('body')).not.toContainText('founder-led')
  await expect(page.locator('body')).not.toContainText('the founder')
  await expect(page.locator('body')).not.toContainText('בן דאקו')
  await expect(page.locator('body')).not.toContainText('Ben Dako')
  await expect(
    page.locator('#founder a[href="https://github.com/btdlabs"]'),
  ).toBeVisible()
  await expect(page.locator('a[href*="linkedin.com"]')).toHaveCount(0)
  await expect(
    page.locator('#contact a[href="mailto:bendk1994@gmail.com"]'),
  ).toBeVisible()
  await expect(page.locator('#contact')).toContainText('bendk1994@gmail.com')

  await page.getByRole('button', { name: 'English' }).click()
  await expect(page.locator('#founder')).toContainText('Who is behind BTDLabs')
  await expect(page.locator('#founder')).toContainText('Behind BTDLabs')
  await expect(page.locator('body')).not.toContainText('המייסד')
  await expect(page.locator('body')).not.toContainText('founder-led')
  await expect(page.locator('body')).not.toContainText('the founder')
  await expect(page.locator('body')).not.toContainText('Ben Dako')
  await expect(page.locator('a[href*="linkedin.com"]')).toHaveCount(0)
})

test('serves a bilingual 404 that links back home without moving its controls', async ({ page }) => {
  const response = await page.goto('/definitely-missing')

  expect(response?.status()).toBe(404)
  await expect(page.getByRole('heading', { name: 'העמוד הזה לא נמצא' })).toBeVisible()
  const hebrewControlsX = (await page.locator('.not-found-controls').boundingBox())?.x

  await page.getByRole('button', { name: 'English' }).click()

  await expect(page.getByRole('heading', { name: 'This page could not be found' })).toBeVisible()
  await expect(page.getByRole('link', { name: 'Back to homepage' })).toHaveAttribute('href', '/en')
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


test('renders shareable locales and matching metadata without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  for (const [path, lang, heading, ogLocale] of [
    ['/', 'he', 'בונים מוצרים דיגיטליים שעובדים בעולם האמיתי.', 'he_IL'],
    ['/en', 'en', 'We build digital products that work in the real world.', 'en_US'],
  ]) {
    await page.goto(path)
    await expect(page.locator('html')).toHaveAttribute('lang', lang)
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(heading)
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `https://next-portfolio-nine-chi.vercel.app${path === '/' ? '' : path}`)
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute('content', ogLocale)
    await expect(page.locator('meta[name="author"]')).toHaveAttribute('content', 'BTDLabs')
    await expect(page.locator('meta[name="creator"]')).toHaveAttribute('content', 'BTDLabs')
    await expect(page.locator('meta[name="keywords"]')).toHaveAttribute('content', /^BTDLabs,/)
    await expect(page.locator('meta[name="keywords"]')).not.toHaveAttribute('content', /Ben Dako|Dako|דאקו/)
    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute('href', 'https://next-portfolio-nine-chi.vercel.app/en')
  }
  await context.close()
})

test('announces successful copying and a useful error when clipboard access is denied', async ({ page }) => {
  await page.goto('/en')
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText: async (text: string) => { (window as Window & { copiedEmail?: string }).copiedEmail = text } },
  }))
  await page.getByRole('button', { name: 'Copy address' }).click()
  await expect(page.getByRole('status')).toHaveText('Address copied')
  expect(await page.evaluate(() => (window as Window & { copiedEmail?: string }).copiedEmail)).toBe('bendk1994@gmail.com')
  await page.evaluate(() => Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText: async () => { throw new Error('Denied') } },
  }))
  await page.getByRole('button', { name: 'Address copied' }).click()
  await expect(page.getByRole('status')).toContainText('Could not copy.')
  await expect(page.getByRole('button', { name: 'Copy address' })).toBeVisible()
})

test('keeps language and theme controls usable when storage is blocked', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked') } })
  })
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await expect(page.locator('html')).toHaveClass(/dark/)
  await page.getByRole('button', { name: 'English' }).click()
  await expect(page).toHaveURL(/\/en$/)
  await page.getByRole('button', { name: 'Switch to light theme' }).click()
  await expect(page.locator('html')).toHaveClass(/light/)
  await page.getByRole('button', { name: 'Switch to dark theme' }).click()
  await expect(page.locator('html')).toHaveClass(/dark/)
})

test('language navigation preserves the active section and browser history', async ({ page }) => {
  await page.goto('/#work')
  await page.getByRole('button', { name: 'English' }).click()
  await expect(page).toHaveURL(/\/en#work$/)
  await page.goBack()
  await expect(page.locator('html')).toHaveAttribute('lang', 'he')
  await expect(page).toHaveURL(/\/#work$/)
})


test('keeps English 404 recovery in English', async ({ page }) => {
  const response = await page.goto('/en/missing')
  expect(response?.status()).toBe(404)
  await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  await page.getByRole('link', { name: 'Back to homepage' }).click()
  await expect(page).toHaveURL(/\/en$/)
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('We build digital products that work in the real world.')
})

test('skip link moves keyboard focus into main content', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await page.keyboard.press('Enter')
  await expect(page.locator('#main-content')).toBeFocused()
})

test('serves social images with production URLs for both locales', async ({ page, request }) => {
  for (const path of ['/', '/en']) {
    await page.goto(path)
    for (const selector of ['meta[property="og:image"]', 'meta[name="twitter:image"]']) {
      const content = await page.locator(selector).getAttribute('content')
      expect(content).toBeTruthy()
      const url = new URL(content!)
      expect(url.origin).toBe('https://next-portfolio-nine-chi.vercel.app')
      const response = await request.get(url.pathname + url.search)
      expect(response.ok()).toBe(true)
      expect(response.headers()['content-type']).toContain('image/png')
    }
  }
})
