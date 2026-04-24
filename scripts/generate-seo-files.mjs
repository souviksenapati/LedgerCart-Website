import fs from 'node:fs/promises'
import path from 'node:path'

function normalizeBaseUrl(raw) {
  if (!raw) return ''
  const trimmed = raw.trim().replace(/\/+$/, '')
  if (!trimmed) return ''
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) return trimmed
  return `https://${trimmed}`
}

function toAbsoluteUrl(baseUrl, pathname) {
  if (!baseUrl) return ''
  const safePath = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${baseUrl}${safePath}`
}

function buildSitemapXml(urls) {
  const now = new Date().toISOString()
  const entries = urls
    .filter(Boolean)
    .map((loc) => {
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${now}</lastmod>\n  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
}

async function main() {
  const outDir = process.env.SITEMAP_OUT_DIR || 'dist'

  const baseUrl = normalizeBaseUrl(
    process.env.SITE_URL ||
      process.env.VITE_SITE_URL ||
      process.env.URL ||
      process.env.DEPLOY_PRIME_URL ||
      process.env.DEPLOY_URL
  )

  const resolvedBaseUrl = baseUrl || 'http://localhost:4173'

  const routes = [
    '/',
    '/pricing',
    '/service',
    '/solution',
    '/product',
    '/product/ledgercart-erp',
    '/case-studies',
    '/blog',
    '/partners',
    '/about',
    '/careers',
    '/contact',
    '/legal/privacy',
    '/legal/terms',
    '/legal/cookies',
    '/legal/security',

    // Static case studies (blog posts are dynamic via Supabase)
    '/case-studies/transglobal-logistics-erp',
    '/case-studies/healthprime-telehealth',
  ]

  const urls = routes.map((pathname) => toAbsoluteUrl(resolvedBaseUrl, pathname))

  const sitemapXml = buildSitemapXml(urls)
  const robotsTxt = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /admin',
    'Disallow: /admin/',
    `Sitemap: ${toAbsoluteUrl(resolvedBaseUrl, '/sitemap.xml')}`,
    '',
  ].join('\n')

  await fs.mkdir(outDir, { recursive: true })
  await fs.writeFile(path.join(outDir, 'sitemap.xml'), sitemapXml, 'utf8')
  await fs.writeFile(path.join(outDir, 'robots.txt'), robotsTxt, 'utf8')

  // Helpful log for CI without being noisy
  console.log(`[seo] wrote sitemap.xml and robots.txt to ${outDir} (base: ${resolvedBaseUrl})`)
}

main().catch((err) => {
  console.error('[seo] failed to generate seo files:', err)
  process.exitCode = 1
})
