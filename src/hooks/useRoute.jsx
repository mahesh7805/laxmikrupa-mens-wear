import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const RouterContext = createContext(null);

export function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((url, options = {}) => {
    const { scrollToTop = true, immediate = false } = options;

    // Handle in-page anchors if on home
    if (url.startsWith('#')) {
      const targetId = url.replace('#', '');
      const el = document.getElementById(targetId);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el, { offset: -70 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    // Push new history entry if different
    if (window.location.pathname !== url) {
      window.history.pushState({}, '', url);
      setCurrentPath(url);
    }

    if (scrollToTop) {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { immediate });
      } else {
        window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
      }
    }
  }, []);

  // Parse route parameters
  const parseRoute = () => {
    const path = currentPath.replace(/\/$/, '') || '/';

    if (path === '/') {
      return { route: 'home', params: {} };
    }

    if (path === '/collections') {
      return { route: 'collections-index', params: {} };
    }

    const collectionMatch = path.match(/^\/collections\/([a-zA-Z0-9_-]+)$/);
    if (collectionMatch) {
      return { route: 'collection', params: { categorySlug: collectionMatch[1] } };
    }

    // Default fallback to home
    return { route: 'home', params: {} };
  };

  const routeInfo = parseRoute();

  return (
    <RouterContext.Provider value={{ currentPath, navigate, ...routeInfo }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRoute() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRoute must be used within a RouterProvider');
  }
  return context;
}
