const DEFAULT_SITE_NAME = 'LedgerCart'
const DEFAULT_OG_IMAGE_PATH = '/og-image.webp'

// IDs that are global and must NEVER be removed on route change
const GLOBAL_JSON_LD_IDS = new Set(['org', 'website'])

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
    el.textContent = ''
  }
}

/**
 * Remove a specific JSON-LD block by its data-jsonld id.
 * Safe to call even if the element doesn't exist.
 */
export function removeJsonLd(id) {
  if (typeof document === 'undefined') return
  const el = document.querySelector(`script[type="application/ld+json"][data-jsonld="${id}"]`)
  if (el) el.remove()
}

/**
 * Remove all page-specific JSON-LD blocks (i.e., everything except 'org' and 'website').
 * Call this at the START of each route change before injecting new page schemas.
 */
export function removePageJsonLd() {
  if (typeof document === 'undefined') return
  const all = document.querySelectorAll('script[type="application/ld+json"][data-jsonld]')
  all.forEach(el => {
    const id = el.getAttribute('data-jsonld')
    if (!GLOBAL_JSON_LD_IDS.has(id)) {
      el.remove()
    }
  })
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

  // Always use absolute URL for OG image
  let resolvedImageUrl = imageUrl || (origin ? `${origin}${DEFAULT_OG_IMAGE_PATH}` : DEFAULT_OG_IMAGE_PATH)
  if (resolvedImageUrl && resolvedImageUrl.startsWith('/') && origin) {
    resolvedImageUrl = `${origin}${resolvedImageUrl}`
  }

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
