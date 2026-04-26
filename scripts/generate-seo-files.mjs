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

// Route config with SEO priority and change frequency
// priority: 1.0 = most important, 0.1 = least
// changefreq: how often Google should re-crawl
const ROUTES = [
  // Core pages — highest crawl priority
  { path: '/',                                        changefreq: 'daily',   priority: '1.0' },
  { path: '/blog',                                    changefreq: 'daily',   priority: '0.9' },
  // Product/service pages — high value
  { path: '/service',                                 changefreq: 'monthly', priority: '0.85' },
  { path: '/solution',                                changefreq: 'monthly', priority: '0.85' },
  { path: '/product',                                 changefreq: 'monthly', priority: '0.85' },
  { path: '/product/ledgercart-erp',                  changefreq: 'monthly', priority: '0.85' },
  // Conversion pages
  { path: '/pricing',                                 changefreq: 'weekly',  priority: '0.8' },
  { path: '/contact',                                 changefreq: 'monthly', priority: '0.8' },
  // Trust/authority pages
  { path: '/about',                                   changefreq: 'monthly', priority: '0.75' },
  { path: '/case-studies',                            changefreq: 'weekly',  priority: '0.75' },
  { path: '/partners',                                changefreq: 'monthly', priority: '0.7' },
  { path: '/careers',                                 changefreq: 'weekly',  priority: '0.7' },
  // Case study detail pages
  { path: '/case-studies/intugine-logistics-erp',    changefreq: 'monthly', priority: '0.65' },
  { path: '/case-studies/arka2050-cleantech-portal', changefreq: 'monthly', priority: '0.65' },
  // Legal — low priority, rarely changes
  { path: '/legal/privacy',                           changefreq: 'yearly',  priority: '0.2' },
  { path: '/legal/terms',                             changefreq: 'yearly',  priority: '0.2' },
  { path: '/legal/cookies',                           changefreq: 'yearly',  priority: '0.2' },
  { path: '/legal/security',                          changefreq: 'yearly',  priority: '0.2' },
  // NOTE: /admin is intentionally excluded — noindex/nofollow
]

function buildSitemapXml(baseUrl, routes) {
  const now = new Date().toISOString().split('T')[0] // YYYY-MM-DD format (date only)
  const entries = routes
    .filter(r => r.path)
    .map(({ path: pathname, changefreq, priority }) => {
      const loc = toAbsoluteUrl(baseUrl, pathname)
      if (!loc) return ''
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${now}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n')
    })
    .filter(Boolean)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries}
</urlset>
`
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

  const sitemapXml = buildSitemapXml(resolvedBaseUrl, ROUTES)

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

  console.log(`[seo] wrote sitemap.xml (${ROUTES.length} URLs) and robots.txt to ${outDir} (base: ${resolvedBaseUrl})`)
}

main().catch((err) => {
  console.error('[seo] failed to generate seo files:', err)
  process.exitCode = 1
})
