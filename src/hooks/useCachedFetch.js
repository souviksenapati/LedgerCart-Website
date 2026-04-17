import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

// Global cache object mapping signatures to data payloads
const SWR_CACHE = new Map()

export function useCachedFetch(table, selectQuery = '*', orderBy = null, filterEq = null) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Stable dependency keys (avoid object reference traps in deps)
  const orderByKey = orderBy ? JSON.stringify(orderBy) : ''
  const filterEqKey = filterEq ? JSON.stringify(filterEq) : ''

  // Create a unique deterministic signature for this specific query
  const cacheKey = JSON.stringify({ table, selectQuery, orderBy: orderByKey, filterEq: filterEqKey })

  useEffect(() => {
    let isMounted = true

    const fetchData = async () => {
      // 1. Immediately return cache if it exists (Stale-While-Revalidate)
      if (SWR_CACHE.has(cacheKey)) {
        if (isMounted) {
          setData(SWR_CACHE.get(cacheKey))
          setLoading(false) // Give instant UX
        }
      }

      // 2. Secretly fetch fresh data from database
      try {
        const resolvedOrderBy = orderByKey ? JSON.parse(orderByKey) : null
        const resolvedFilterEq = filterEqKey ? JSON.parse(filterEqKey) : null

        let query = supabase.from(table).select(selectQuery)
        
        if (resolvedOrderBy) {
          query = query.order(resolvedOrderBy.column, { ascending: resolvedOrderBy.ascending })
        }
        if (resolvedFilterEq) {
           query = query.eq(resolvedFilterEq.column, resolvedFilterEq.value)
        }

        const { data: remoteData, error: remoteError } = await query

        if (remoteError) throw remoteError

        // 3. Update cache and UI if mounted
        SWR_CACHE.set(cacheKey, remoteData)
        
        // Prevent Memory Leak: Max 50 items in cache (simple LRU eviction)
        if (SWR_CACHE.size > 50) {
          const firstKey = SWR_CACHE.keys().next().value // Oldest key
          SWR_CACHE.delete(firstKey)
        }
        
        if (isMounted) {
          setData(remoteData)
          setLoading(false)
        }
      } catch (err) {
        if (isMounted) {
          setError(err)
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [cacheKey, table, selectQuery, orderByKey, filterEqKey]) 
  // We stringify the key to avoid object reference traps in dependencies

  return { data, loading, error, setData } // Expose setData for optimistic updates
}
