import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to the top of the page immediately upon route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth', // Change to 'auto' for an instant jump
    });
  }, [pathname]);

  return null; // This component doesn't render any UI
}