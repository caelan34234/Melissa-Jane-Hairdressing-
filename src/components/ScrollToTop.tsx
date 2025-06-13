import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component that scrolls the window to the top when navigating between pages
 * unless an anchor is specified in the URL.
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL (anchor), let the browser handle the scrolling
    if (hash) {
      // Optional: You can add custom smooth scrolling to the anchor here if needed
      return;
    }
    
    // Otherwise, scroll to the top of the page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // Use smooth scrolling for a better user experience
    });
  }, [pathname, hash]); // Re-run this effect when the path or hash changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;