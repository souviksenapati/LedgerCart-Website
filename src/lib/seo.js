const DEFAULT_SITE_NAME = 'LedgerCart'
const DEFAULT_OG_IMAGE_PATH = '/og-image.png'

function upsertMetaTag(selector, createAttrs) {
  if (typeof document === 'undefined') return null

  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(createAttrs).forEach(([key, value]) => el.setAttribute(key, value))
    document.head.appendChild(el)
  }
  return el
}

function upsertLinkTag(selector, createAttrs) {
  if (typeof document === 'undefined') return null

  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    Object.entries(createAttrs).forEach(([key, value]) => el.setAttribute(key, value))
    document.head.appendChild(el)
  }
  return el
}

function upsertScriptTag(selector, createAttrs) {
  if (typeof document === 'undefined') return null

  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('script')
    Object.entries(createAttrs).forEach(([key, value]) => el.setAttribute(key, value))
    document.head.appendChild(el)
  }
  return el
}

export function setMetaByName(name, content) {
  const el = upsertMetaTag(`meta[name="${name}"]`, { name })
  if (!el) return
  el.setAttribute('content', content)
}

export function setMetaByProperty(property, content) {
  const el = upsertMetaTag(`meta[property="${property}"]`, { property })
  if (!el) return
  el.setAttribute('content', content)
}

export function setCanonicalUrl(url) {
  const el = upsertLinkTag('link[rel="canonical"]', { rel: 'canonical' })
  if (!el) return
  el.setAttribute('href', url)
}

export function setJsonLd(id, json) {
  if (typeof document === 'undefined') return
  if (!id) return

  const selector = `script[type="application/ld+json"][data-jsonld="${id}"]`
  const el = upsertScriptTag(selector, { type: 'application/ld+json', 'data-jsonld': id })
  if (!el) return

  try {
    el.textContent = JSON.stringify(json)
  } catch {
    // If JSON serialization fails, remove content rather than leaving stale data.
    el.textContent = ''
  }
}

export function applySeo({
  title,
  description,
  canonicalUrl,
  robots,
  ogType = 'website',
  imageUrl,
  imageAlt,
  siteName = DEFAULT_SITE_NAME,
}) {
  if (typeof document === 'undefined') return

  if (title) document.title = title
  if (description) setMetaByName('description', description)
  if (robots) setMetaByName('robots', robots)

  const origin = typeof window !== 'undefined' ? window.location.origin : ''
  const canonical = canonicalUrl || (origin ? `${origin}${window.location.pathname}` : '')
  if (canonical) setCanonicalUrl(canonical)

  const resolvedImageUrl = imageUrl || (origin ? `${origin}${DEFAULT_OG_IMAGE_PATH}` : DEFAULT_OG_IMAGE_PATH)

  // Open Graph
  setMetaByProperty('og:site_name', siteName)
  setMetaByProperty('og:type', ogType)
  if (canonical) setMetaByProperty('og:url', canonical)
  if (title) setMetaByProperty('og:title', title)
  if (description) setMetaByProperty('og:description', description)
  if (resolvedImageUrl) setMetaByProperty('og:image', resolvedImageUrl)
  if (imageAlt) setMetaByProperty('og:image:alt', imageAlt)

  // Twitter
  setMetaByName('twitter:card', 'summary_large_image')
  if (title) setMetaByName('twitter:title', title)
  if (description) setMetaByName('twitter:description', description)
  if (resolvedImageUrl) setMetaByName('twitter:image', resolvedImageUrl)
  if (imageAlt) setMetaByName('twitter:image:alt', imageAlt)
}
