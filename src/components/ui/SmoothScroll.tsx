'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function SmoothScroll() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Reset scroll behavior to smooth when component mounts
    document.documentElement.style.scrollBehavior = 'smooth';

    // Handle hash links
    const handleHashClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link?.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        
        if (targetElement) {
          // Special handling for featured products, categories and location sections
          const isSpecialSection = link.hash === '#featured-products' || link.hash === '#categories' || link.hash === '#location';
          const headerOffset = isSpecialSection ? 0 : 100; // No offset for special sections
          const windowHeight = window.innerHeight;
          const elementHeight = targetElement.getBoundingClientRect().height;
          
          // Calculate position to center the element in the viewport
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          // For special sections, scroll to the top of the section instead of centering
          const scrollPosition = isSpecialSection 
            ? offsetPosition 
            : offsetPosition - (windowHeight / 2) + (elementHeight / 2);

          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });

          // Update URL without scrolling
          window.history.pushState(null, '', link.hash);
        }
      }
    };

    // Add click event listener
    document.addEventListener('click', handleHashClick);

    // Handle initial hash on page load
    const handleInitialHash = () => {
      if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
          setTimeout(() => {
            // Special handling for featured products, categories and location sections
            const isSpecialSection = window.location.hash === '#featured-products' || window.location.hash === '#categories' || window.location.hash === '#location';
            const headerOffset = isSpecialSection ? 0 : 100; // No offset for special sections
            const windowHeight = window.innerHeight;
            const elementHeight = targetElement.getBoundingClientRect().height;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // For special sections, scroll to the top of the section instead of centering
            const scrollPosition = isSpecialSection 
              ? offsetPosition 
              : offsetPosition - (windowHeight / 2) + (elementHeight / 2);

            window.scrollTo({
              top: scrollPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Run initial hash handler
    handleInitialHash();

    // Cleanup
    return () => {
      document.removeEventListener('click', handleHashClick);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [pathname, searchParams]); // Re-run effect when route changes

  return null;
} 