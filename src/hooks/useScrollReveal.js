import { useEffect } from 'react';

/**
 * Robust IntersectionObserver hook for viewport entrance animations.
 * Observes all elements with `.reveal-on-scroll` and adds `.is-revealed`.
 * Automatically re-evaluates when route or DOM content changes.
 */
export function useScrollReveal(dependency) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      if (prefersReducedMotion) {
        elements.forEach((el) => el.classList.add('is-revealed'));
        return;
      }

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      });

      elements.forEach((el) => {
        // If element is already in viewport, reveal immediately to prevent blank sections
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else if (!el.classList.contains('is-revealed')) {
          observer.observe(el);
        }
      });

      return observer;
    };

    // Run immediately and also after next frame to catch any newly rendered components
    let observer = revealElements();
    const frameId = requestAnimationFrame(() => {
      observer = revealElements();
    });

    return () => {
      cancelAnimationFrame(frameId);
      if (observer && typeof observer.disconnect === 'function') {
        observer.disconnect();
      }
    };
  }, [dependency]);
}
