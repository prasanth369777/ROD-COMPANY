import React, { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

// 🔹 PRODUCT IMAGE IMPORTS
import img1 from "../../assests/Hero1-1.webp";
import img2 from "../../assests/Hero 2-1.webp"; 
import img3 from "../../assests/Hero 3-1.webp";

const productImages = [img1, img2, img3];

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

      </section>

    </div>
  );
}