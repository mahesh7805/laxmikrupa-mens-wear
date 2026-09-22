import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook to initialize Lenis smooth scrolling with motion preference respect.
 * Desktop: Smooth subtle lerp (0.1)
 * Reduced-Motion: Disabled cleanly
 */
export function useLenis() {
  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.5,
        infinite: false,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      const animationFrameId = requestAnimationFrame(raf);

      // Expose globally for manual scroll triggers if needed
      window.__lenis = lenis;

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis.destroy();
        delete window.__lenis;
      };
    } catch (err) {
      console.warn('Lenis initialization skipped:', err);
    }
  }, []);
}
