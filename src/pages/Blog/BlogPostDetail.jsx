import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { supabase } from '../../lib/supabase'
import DOMPurify from 'dompurify'
import { applySeo, setJsonLd, removeJsonLd } from '../../lib/seo'

export default function BlogPostDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    const fetchPost = async () => {
      setLoading(true)
      try {
        const { data, error } = await supabase
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .single()

        if (data && !error) {
          setPost(data)

          const origin = window.location.origin
          const absImg = data.image_url || `${origin}/og-image.webp`

          applySeo({
            title: `${data.title} | LedgerCart Blog`,
            description: data.excerpt || 'Read the latest insights from LedgerCart on engineering, ERP, and secure software delivery.',
            canonicalUrl: `${origin}/blog/${data.slug}`,
            robots: 'index, follow',
            ogType: 'article',
            imageUrl: absImg,
            imageAlt: data.title,
          })

          // Article JSON-LD — enables Google rich results (author, date, image in SERP)
          setJsonLd('article', {
            '@context': 'https://schema.org',
            '@type': 'Article',
            '@id': `${origin}/blog/${data.slug}#article`,
            headline: data.title,
            description: data.excerpt || 'LedgerCart Blog',
            image: absImg,
            author: { '@type': 'Person', name: data.author || 'LedgerCart Team', url: origin },
            publisher: { '@type': 'Organization', name: 'LedgerCart', url: origin, logo: { '@type': 'ImageObject', url: `${origin}/og-image.webp` } },
            datePublished: data.published_at || data.created_at,
            dateModified: data.updated_at || data.published_at || data.created_at,
            mainEntityOfPage: { '@type': 'WebPage', '@id': `${origin}/blog/${data.slug}` },
            url: `${origin}/blog/${data.slug}`,
            articleSection: data.category || 'Technology',
            inLanguage: 'en-IN',
          })
        }
      } catch (err) {
        console.error('Error fetching post:', err)
      }
      setLoading(false)
    }

    fetchPost()

    // Clean up article JSON-LD when unmounting / navigating away
    return () => removeJsonLd('article')
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0f1a] flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a0f1a] flex flex-col items-center justify-center">
        <p className="text-xl text-gray-500 mb-4">Post not found</p>
        <Link to="/blog" className="text-orange-600 hover:underline">← Back to Blog</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <AnnouncementBar />
      <Navbar />

      <main className="animate-[fadeInUp_0.4s_ease-out] pt-8 pb-20 px-6">
        <article className="max-w-3xl mx-auto">
          {post.image_url && (
            <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden mb-10 shadow-lg border border-gray-100 dark:border-slate-800">
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full h-full object-cover"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          )}
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 mb-8 no-underline uppercase tracking-widest">
            ← Back to Blog
          </Link>
          
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[11px] font-extrabold uppercase tracking-widest mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 dark:text-slate-100 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-slate-500">
               <span className="font-bold text-gray-900 dark:text-slate-300">{post.author}</span>
               <span className="w-1 h-1 bg-gray-300 dark:bg-slate-700 rounded-full"></span>
               <span>{new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          <div 
            className="legal-content text-lg leading-relaxed text-gray-700 dark:text-slate-300 prose dark:prose-invert prose-orange max-w-none"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />

          <div className="mt-16 pt-10 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 font-bold">LC</div>
                <div>
                   <p className="text-sm font-bold text-gray-900 dark:text-slate-100">{post.author || 'LedgerCart Engineering'}</p>
                   <p className="text-xs text-gray-500 dark:text-slate-500">Driving the future of Enterprise Systems.</p>
                </div>
             </div>
             <Link to="/contact" className="px-6 py-3 bg-orange-600 text-white text-sm font-bold rounded-xl shadow-lg hover:shadow-orange-600/20 transition-all no-underline">Start a Project with Us</Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
