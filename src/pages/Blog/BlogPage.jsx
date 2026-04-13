import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnnouncementBar from '../../components/layout/AnnouncementBar'
import Navbar from '../../components/layout/Navbar'
import Footer from '../../components/layout/Footer'
import { supabase } from '../../lib/supabase'

export default function BlogPage() {
  const [filter, setFilter] = useState('All')
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })
      if (data && !error) {
        setPosts(data)
      } else if (error) {
        console.error(error)
      }
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.category === filter)

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f1a] transition-colors duration-300">
      <AnnouncementBar />
      <Navbar />

      <main className="animate-[fadeInUp_0.4s_ease-out]">
        {/* Header Section */}
        <section className="pt-6 pb-[80px] bg-gradient-to-b from-[#f8f9fb] to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 text-center border-b border-gray-100 dark:border-slate-800 transition-colors">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40 text-orange-600 text-[13px] font-bold uppercase tracking-wider mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Insights
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold tracking-[-1px] leading-[1.05] text-gray-900 dark:text-slate-100 max-w-[800px] mx-auto mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Perspectives</span> in Engineering
            </h1>
            <p className="text-lg text-gray-500 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
              Stay ahead of the competition with the latest from LedgerCart's world-class engineering team.
            </p>
          </div>
        </section>

        {/* Blog Post List */}
        <section className="py-20 px-6 max-w-[1280px] mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {['All', 'ERP & Cloud', 'Healthcare', 'AI & Machine Learning'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-xs font-bold rounded-full transition-all border ${
                  filter === cat 
                    ? 'bg-orange-600 text-white border-orange-600' 
                    : 'bg-white dark:bg-slate-900 text-gray-500 border-gray-200 dark:border-slate-800 hover:border-orange-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {loading ? (
              <div className="col-span-full py-20 text-center text-gray-500">Loading insights...</div>
            ) : filteredPosts.length === 0 ? (
              <div className="col-span-full py-20 text-center text-gray-500">No blog posts found for this category.</div>
            ) : filteredPosts.map(post => (
              <Link key={post.id} to={`/blog/${post.slug}`} className="flex flex-col group cursor-pointer transition-transform hover:-translate-y-2 no-underline h-full">
                <article className="flex flex-col h-full bg-white dark:bg-slate-950 p-4 rounded-[32px] border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
                  <div className="aspect-[16/10] overflow-hidden rounded-[24px] mb-6 relative border border-gray-100 dark:border-slate-800">
                    <img 
                      src={post.image_url || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1280&auto=format&fit=crop'} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-orange-600 rounded-lg shadow-sm">{post.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[11px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">
                      {new Date(post.published_at || post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    <span className="w-1 h-1 bg-gray-300 dark:bg-slate-700 rounded-full"></span>
                    <span className="text-[11px] font-bold text-gray-400 dark:text-slate-500 uppercase tracking-widest">{post.author}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-slate-100 mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-slate-400 leading-relaxed mb-6 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-orange-600 uppercase tracking-widest mt-auto">
                    Read Full Post <span className="text-lg">→</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gray-50 dark:bg-slate-900/50 py-20 px-6 border-y border-gray-100 dark:border-slate-800 text-center">
           <div className="max-w-2xl mx-auto">
             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 mb-4">Subscribe to the LedgerCart Engineering Letter</h2>
             <p className="text-sm text-gray-500 dark:text-slate-400 mb-8 leading-relaxed">Get the latest insights on cloud-native ERP delivered directly to your inbox. No spam. Just high-quality technical content.</p>
             <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="yourname@company.com" 
                 className="flex-1 px-5 py-3 rounded-xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-orange-500 outline-none transition-all placeholder:text-[13px]"
               />
               <button className="px-8 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-all shadow-md shadow-orange-600/20 active:scale-95">Subscribe</button>
             </form>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
