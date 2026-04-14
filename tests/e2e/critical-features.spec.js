import { test, expect } from '@playwright/test'

test.describe('Critical Feature Validation', () => {
  test('home page loads and consultation modal opens', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByText('Welcome to LedgerCart')).toBeVisible()

    await page.getByRole('button', { name: /Get a free Consultation/i }).first().click()
    await expect(page.getByRole('heading', { name: /Get a Free Consultation/i })).toBeVisible()
    await expect(page.getByRole('button', { name: /Send Message/i })).toBeVisible()
  })

  test('contact page shows official contact channels and office address', async ({ page }) => {
    await page.goto('/contact')

    const contactInfoCard = page
      .locator('div')
      .filter({ has: page.getByRole('heading', { name: 'Contact Information' }) })
      .first()

    await expect(contactInfoCard).toContainText('support@ledgercart.in')
    await expect(contactInfoCard).toContainText('sales@ledgercart.in')
    await expect(contactInfoCard).toContainText('info@ledgercart.in')
    await expect(contactInfoCard).toContainText('Moni Bhander, Module C')
    await expect(contactInfoCard).toContainText('Salt Lake, Kolkata, West Bengal 700091, India')
  })

  test('footer has the correct LinkedIn URL', async ({ page }) => {
    await page.goto('/')

    const linkedin = page.getByLabel('LinkedIn')
    await expect(linkedin).toBeVisible()
    await expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/company/ledgercart/')
  })

  test('important public routes render successfully', async ({ page }) => {
    const routes = [
      '/pricing',
      '/service',
      '/solution',
      '/product',
      '/careers',
      '/about',
      '/partners',
      '/blog',
      '/case-studies',
      '/legal/privacy',
      '/legal/terms',
      '/legal/cookies',
      '/legal/security',
    ]

    for (const route of routes) {
      await page.goto(route)
      await expect(page.locator('#root')).toBeVisible()
      await expect(page).toHaveTitle(/LedgerCart/i)
    }
  })
})
