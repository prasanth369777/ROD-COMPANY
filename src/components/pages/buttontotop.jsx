import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Button appears after scrolling 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-[100] flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-lg shadow-2xl transition-all duration-300 hover:bg-orange-600 active:scale-90 border border-white/10 group"
          aria-label="Scroll to top"
        >
          <ChevronUp 
            size={24} 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
          />
        </button>
      )}
    </>
  );
}