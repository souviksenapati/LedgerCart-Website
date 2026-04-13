import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase credentials are not fully configured in the environment.')
}

// -----------------------------------------------------------------------------
// SECURE TAB ISOLATION FOR SUPABASE
// -----------------------------------------------------------------------------
// We want independent authenticated sessions in different tabs (e.g. HR in Tab 1,
// Superadmin in Tab 2) without them forcefully logging each other out.
// 
// Supabase automatically uses `BroadcastChannel` to tell other tabs to log out.
// To stop this without breaking the default storage keys or OAuth redirects, 
// we simply mock the BroadcastChannel locally just long enough to fool the 
// Supabase client during initialization.
//
let OriginalBroadcastChannel = null;
if (typeof window !== 'undefined' && globalThis.BroadcastChannel) {
  OriginalBroadcastChannel = globalThis.BroadcastChannel;
  // Mock it out temporarily
  globalThis.BroadcastChannel = function() {
    return {
      postMessage: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      close: () => {}
    };
  };
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseAnonKey || 'placeholder',
  {
    auth: {
      storage: typeof window !== 'undefined' ? window.sessionStorage : undefined,
    }
  }
)

// Restore the original BroadcastChannel so we don't break other libraries
if (OriginalBroadcastChannel) {
  globalThis.BroadcastChannel = OriginalBroadcastChannel;
}
// -----------------------------------------------------------------------------
