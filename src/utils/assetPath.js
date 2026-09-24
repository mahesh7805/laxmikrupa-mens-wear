/**
 * Resolves public asset URLs with proper Vite BASE_URL prefix
 * for seamless support on GitHub Pages (/laxmikrupa-mens-wear/)
 * and local development (/).
 */
export const getAssetPath = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env.BASE_URL || '/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${cleanBase}${cleanPath}`;
};
