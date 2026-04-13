import { useState, useEffect, useMemo } from 'react'
import { supabase } from '../../../lib/supabase'
import { useAuth } from '../../../context/AuthContext'
import ReactQuill from 'react-quill-new'
import 'react-quill-new/dist/quill.snow.css'

export default function MarketingBlogManagement() {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [viewMode, setViewMode] = useState('list') // 'list' | 'edit'
  
  // Blog Form State
  const [currentId, setCurrentId] = useState(null)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [category, setCategory] = useState('News')
  const [imageUrl, setImageUrl] = useState('')
  
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  
  const { userName } = useAuth()

  // Memoize Quill Editor configuration to prevent re-renders crashing the editor
  const quillModules = useMemo(() => ({
    toolbar: [
      [{ 'header': [1, 2, 3, false] }, { 'font': [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }]
    ],
  }), [])

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100)
        
      if (!error && data) {
        setBlogs(data)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const generateSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
    if (!slug || slug === generateSlug(title)) {
      setSlug(generateSlug(e.target.value))
    }
  }

  const initNewBlog = () => {
    setCurrentId(null)
    setTitle('')
    setSlug('')
    setExcerpt('')
    setContent('')
    setCategory('News')
    setImageUrl('')
    setViewMode('edit')
    setError('')
    setMessage('')
  }

  const editBlog = (blog) => {
    setCurrentId(blog.id)
    setTitle(blog.title)
    setSlug(blog.slug)
    setExcerpt(blog.excerpt || '')
    setContent(blog.content || '')
    setCategory(blog.category || 'News')
    setImageUrl(blog.image_url || '')
    setViewMode('edit')
    setError('')
    setMessage('')
  }

  const handleSaveBlog = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError('')
    setMessage('')

    try {
      const blogData = {
        title,
        slug,
        excerpt,
        content,
        category,
        image_url: imageUrl,
        author: userName || 'Marketing Team',
        published_at: new Date().toISOString()
      }

      if (currentId) {
        // Update
        const { error: dbError } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', currentId)

        if (dbError) throw dbError
        
        setBlogs(blogs.map(b => b.id === currentId ? { ...b, ...blogData } : b))
        setMessage('Blog post updated successfully!')
      } else {
        // Insert
        const { data, error: dbError } = await supabase
          .from('blogs')
          .insert([blogData])
          .select()

        if (dbError) throw dbError
        setBlogs([data[0], ...blogs])
        setMessage('Blog post published successfully!')
      }
      
      setTimeout(() => {
        setMessage('')
        setViewMode('list')
      }, 1500)
    } catch (err) {
      setError(err.message || 'Failed to save blog post.')
    }
    setSaving(false)
  }

  const handleDelete = async (blogId) => {
    if (!window.confirm('Are you sure you want to delete this blog post?')) return
    try {
      const { error: dbError } = await supabase.from('blogs').delete().eq('id', blogId)
      if (dbError) throw dbError
      setBlogs(blogs.filter(b => b.id !== blogId))
    } catch (err) {
      alert("Failed to delete blog: " + err.message)
    }
  }

  return (
    <div className="h-full bg-[#f1f3f4] dark:bg-[#1a1b1e] text-[#3c4043] dark:text-gray-300 font-sans absolute inset-0 left-64 overflow-hidden flex flex-col">
      {/* Blogger-style Header bar */}
      <header className="h-[64px] border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1f1f1f] flex items-center justify-between px-6 flex-shrink-0 z-10 shadow-sm relative">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded text-white bg-[#f35b25] flex items-center justify-center font-bold text-xl">
             B
          </div>
          <span className="text-[22px] text-gray-700 dark:text-gray-200 truncate hidden md:block">
            {viewMode === 'list' ? 'Marketing Blogs' : title || 'Untitled'}
          </span>
        </div>
        <div className="flex items-center gap-4">
           {viewMode === 'edit' && (
             <>
               <button onClick={() => setViewMode('list')} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium rounded transition">
                 Cancel
               </button>
               <button 
                 onClick={(e) => {
                   if (!title || !content) {
                     setError("Title and content are required")
                     return
                   }
                   handleSaveBlog(e)
                 }} 
                 disabled={saving}
                 className="px-6 py-2 bg-[#f35b25] hover:bg-[#e04f1e] text-white font-medium rounded shadow transition disabled:opacity-50"
               >
                 {saving ? 'Publishing...' : (currentId ? 'Update' : 'Publish')}
               </button>
             </>
           )}
           {viewMode === 'list' && (
             <button onClick={initNewBlog} className="px-5 py-2.5 bg-[#f35b25] hover:bg-[#e04f1e] text-white font-medium rounded-full shadow-md transition flex items-center gap-2">
                <span className="text-xl mb-0.5">+</span> NEW POST
             </button>
           )}
        </div>
      </header>

      {/* Blogger-style Main Content Area */}
      <div className="flex-1 overflow-hidden relative">
        {viewMode === 'list' ? (
          // POSTS LIST VIEW (Google Keep / Blogger Posts List vibe)
          <div className="h-full overflow-y-auto p-4 md:p-8 bg-[#f1f3f4] dark:bg-[#1a1b1e]">
            <div className="max-w-[1000px] mx-auto">
               
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400">All Posts ({blogs.length})</h2>
              </div>

               {loading ? (
                 <div className="text-center py-20 text-gray-500">Loading your posts...</div>
               ) : blogs.length === 0 ? (
                 <div className="text-center py-20 text-gray-500 bg-white dark:bg-gray-800 rounded shadow">There are no posts here yet.</div>
               ) : (
                 <div className="flex flex-col gap-3">
                   {blogs.map(blog => (
                     <div key={blog.id} className="group bg-white dark:bg-[#1f1f1f] border border-gray-200 dark:border-gray-800 rounded-lg p-0 flex items-center shadow-sm hover:shadow-md transition cursor-pointer">
                        <div onClick={() => editBlog(blog)} className="w-[80px] h-[80px] bg-gray-50 dark:bg-gray-900 border-r border-gray-100 flex items-center justify-center flex-shrink-0 text-3xl text-gray-300 font-serif rounded-l-lg object-cover">
                          {blog.image_url ? (
                            <img src={blog.image_url} alt="" className="w-full h-full object-cover rounded-l-lg opacity-80" />
                          ) : (
                            blog.title.charAt(0)
                          )}
                        </div>
                        <div onClick={() => editBlog(blog)} className="flex-1 px-5 py-3 overflow-hidden">
                           <h3 className="text-[15px] font-medium text-[#3c4043] dark:text-gray-200 truncate mb-1">
                             {blog.title || '(Untitled)'}
                           </h3>
                           <div className="flex items-center text-[12px] text-gray-500 dark:text-gray-400 gap-2">
                             <span className="text-[#f35b25] font-medium">Published</span>
                             <span>•</span>
                             <span>{new Date(blog.published_at || blog.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric'})}</span>
                             <span>•</span>
                             <span className="truncate">{blog.category}</span>
                           </div>
                        </div>
                        <div className="px-4 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-3">
                           <button onClick={(e) => { e.stopPropagation(); editBlog(blog) }} className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 flex items-center justify-center" title="Edit">
                             ✎
                           </button>
                           <button onClick={(e) => { e.stopPropagation(); handleDelete(blog.id) }} className="w-8 h-8 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 flex items-center justify-center" title="Delete">
                             🗑
                           </button>
                        </div>
                     </div>
                   ))}
                 </div>
               )}
            </div>
          </div>
        ) : (
          // POST EDITOR VIEW
          <div className="flex flex-col lg:flex-row h-full">
            {/* Editor Workspace (Left) */}
            <div className="flex-1 flex flex-col bg-white dark:bg-[#1f1f1f] shadow-[1px_0_4px_rgba(0,0,0,0.05)] z-10">
               {error && <div className="bg-red-50 text-red-600 px-4 py-2 text-sm">{error}</div>}
               {message && <div className="bg-green-50 text-green-600 px-4 py-2 text-sm">{message}</div>}
               
               {/* Title Input */}
               <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800">
                 <input 
                   type="text" 
                   placeholder="Title" 
                   value={title} 
                   onChange={handleTitleChange}
                   className="w-full text-3xl text-[#3c4043] dark:text-white bg-transparent border-none outline-none placeholder:text-gray-300 dark:placeholder:text-gray-600 font-serif"
                 />
               </div>
               
               {/* Rich Text Area */}
               <div className="flex-1 p-2 md:p-6 overflow-y-auto custom-quill-wrapper">
                 <ReactQuill 
                   theme="snow"
                   value={content}
                   onChange={setContent}
                   modules={quillModules}
                   placeholder="Start writing..."
                   className="h-full border-none"
                 />
               </div>
            </div>

            {/* Post Settings Sidebar (Right) */}
            <div className="w-full lg:w-[320px] bg-[#f1f3f4] dark:bg-[#1a1b1e] border-l border-gray-200 dark:border-gray-800 flex flex-col overflow-y-auto">
               <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-800 text-sm font-medium text-gray-500 dark:text-gray-400 capitalize tracking-wider">
                  Post settings
               </div>

               {/* Labels / Category */}
               <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                 <label className="text-[13px] font-medium text-[#3c4043] dark:text-gray-300 flex items-center justify-between cursor-pointer mb-3">
                   <span>Category (Labels)</span>
                   <span className="text-gray-400 transform rotate-180">^</span>
                 </label>
                 <select 
                   value={category} 
                   onChange={e => setCategory(e.target.value)}
                   className="w-full px-3 py-2 bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-700 rounded outline-none text-sm text-[#3c4043] dark:text-gray-200 focus:border-[#f35b25]"
                 >
                    <option value="News">News</option>
                    <option value="ERP & Cloud">ERP & Cloud</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                 </select>
               </div>

               {/* Permalink / Slug */}
               <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                 <label className="text-[13px] font-medium text-[#3c4043] dark:text-gray-300 flex items-center justify-between cursor-pointer mb-3">
                   <span>Permalink</span>
                   <span className="text-gray-400 transform rotate-180">^</span>
                 </label>
                 <div className="text-[12px] text-gray-500 mb-2">Automated permalink or custom permalink</div>
                 <div className="flex bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-700 rounded overflow-hidden">
                    <span className="bg-gray-50 dark:bg-gray-800 px-3 py-2 text-gray-500 text-xs border-r border-gray-300 dark:border-gray-700 whitespace-nowrap">/blog/</span>
                    <input 
                      type="text" 
                      value={slug} 
                      onChange={e => setSlug(e.target.value)}
                      className="w-full px-3 py-2 bg-transparent outline-none text-sm text-[#3c4043] dark:text-gray-200"
                    />
                 </div>
               </div>

               {/* Excerpt */}
               <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                 <label className="text-[13px] font-medium text-[#3c4043] dark:text-gray-300 flex items-center justify-between cursor-pointer mb-3">
                   <span>Search Description</span>
                   <span className="text-gray-400 transform rotate-180">^</span>
                 </label>
                 <textarea 
                   rows={3} 
                   value={excerpt} 
                   onChange={e => setExcerpt(e.target.value)}
                   placeholder="Enter a brief description for SEO..."
                   className="w-full px-3 py-2 bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-700 rounded outline-none text-sm text-[#3c4043] dark:text-gray-200 focus:border-[#f35b25] resize-none"
                 />
               </div>

               {/* Cover Image */}
               <div className="p-5 border-b border-gray-200 dark:border-gray-800">
                 <label className="text-[13px] font-medium text-[#3c4043] dark:text-gray-300 flex items-center justify-between cursor-pointer mb-3">
                   <span>Cover Image Thumbnail</span>
                   <span className="text-gray-400 transform rotate-180">^</span>
                 </label>
                 <input 
                   type="url" 
                   value={imageUrl} 
                   onChange={e => setImageUrl(e.target.value)}
                   placeholder="https://..."
                   className="w-full px-3 py-2 bg-white dark:bg-[#1f1f1f] border border-gray-300 dark:border-gray-700 rounded outline-none text-sm text-[#3c4043] dark:text-gray-200 focus:border-[#f35b25] mb-3"
                 />
                 {imageUrl && (
                   <div className="aspect-video w-full rounded bg-gray-100 border border-gray-200 overflow-hidden">
                     <img src={imageUrl} alt="Cover Preview" className="w-full h-full object-cover" />
                   </div>
                 )}
               </div>

            </div>
          </div>
        )}
      </div>

      {/* Global CSS fixes for Quill toolbar to match Blogger style inside our scrollable container */}
      <style dangerouslySetInnerHTML={{__html: `
        .custom-quill-wrapper .quill {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .custom-quill-wrapper .ql-toolbar.ql-snow {
          border: none;
          border-bottom: 1px solid #e5e7eb;
          padding: 12px;
          background: white;
          position: sticky;
          top: 0;
          z-index: 10;
        }
        .dark .custom-quill-wrapper .ql-toolbar.ql-snow {
          background: #1f1f1f;
          border-bottom-color: #374151;
        }
        .dark .custom-quill-wrapper .ql-snow .ql-stroke {
          stroke: #d1d5db;
        }
        .dark .custom-quill-wrapper .ql-snow .ql-fill {
          fill: #d1d5db;
        }
        .dark .custom-quill-wrapper .ql-snow .ql-picker {
          color: #d1d5db;
        }
        .custom-quill-wrapper .ql-container.ql-snow {
          border: none;
          font-family: inherit;
          font-size: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .custom-quill-wrapper .ql-editor {
          max-width: 800px;
          margin: 0 auto;
          width: 100%;
          min-height: 100%;
          padding: 24px;
        }
      `}} />
    </div>
  )
}