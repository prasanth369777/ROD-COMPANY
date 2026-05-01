import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

// 🔹 PRODUCT IMAGE IMPORTS
import img1 from "../../assests/Hero Image1.webp";
import img2 from "../../assests/Hero image2.webp"; 
import img3 from "../../assests/Hero Image3.webp";
import img4 from "../../assests/Hero Image4.webp";

const productImages = [img1, img2, img3, img4];

export default function CompressorValvesProductPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % productImages.length);
    }, 5500);

    return () => {
      lenis.destroy();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-white font-['Inter'] text-slate-900 overflow-x-hidden mt-16">
      <head>
        <title>Drill Rod Dealers in Tamilnadu – Sri Kumar Drill Rod Works</title>
        <meta name="description" content="Sri Kumar Drill Rod Works, your trusted drill rod dealers in Tamilnadu. Reliable partner for mining, construction, and infrastructure." />
      </head>

      {/* --- ELITE BENTO EDITORIAL HERO SLIDER --- */}
      <section id="hero" className="relative h-[75vh] md:h-[85vh] min-h-[550px] md:min-h-[800px] w-full overflow-hidden bg-black flex items-center">
        
        {/* 🔹 BACKGROUND LAYER: LAYERED MASKING & REVOLUTION ANIMATION */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {productImages.map((img, i) => (
            <div 
              key={i}
              className={`absolute inset-0 transition-all duration-[1500ms] cubic-bezier(0.645, 0.045, 0.355, 1) transform ${
                slideIndex === i 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
            >
              <img src={img} className="w-full h-full object-cover" alt="Industrial Background" />
            </div>
          ))}
        </div>

        {/* 🔹 CALL TO ACTION BUTTONS - BOTTOM CENTERED */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-wrap items-center justify-center gap-6">
          <a
            href="https://wa.me/919876543210?text=Hi Sri Kumar Drill Rods, I am inquiring about Drill Rods in Tamilnadu. Please provide B2B pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-green-500 text-white px-10 py-5 font-bold text-sm tracking-widest uppercase transition-all shadow-2xl hover:bg-green-600 active:scale-95 transform-gpu"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
               <path d="M1.5 4.5c3.3-3.3 8.6-3.3 11.9 0 3.3 3.3 3.3 8.6 0 11.9l-1.3 1.3-4.1.3-1.3-3.8 2.3-2.3a8.8 8.8 0 01-3.6-3.6L4.7 7.7l-3.2 1.3C1.5 9 1.5 7.8 1.5 4.5zm10.6 8.5c.3 0 .6-.1.8-.3l2-2c.4-.4.4-1 0-1.4l-2-2a1.2 1.2 0 00-1.7 1.7l1.1 1.1-1.1 1.1c-.2.2-.3.5-.3.8s.1.6.3.8l.8.5c.2.2.5.3.8.3z" />
            </svg>
            WhatsApp
          </a>

          <a
            href="tel:+919876543210"
            className="flex items-center gap-4 bg-red-600 text-white px-10 py-5 font-bold text-sm tracking-widest uppercase transition-all shadow-2xl hover:bg-red-700 active:scale-95 transform-gpu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now
          </a>
        </div>
      </section>

    </div>
  );
}