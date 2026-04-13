import React, { useEffect, useState } from "react";
import { 
 
  ShieldCheck,  
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// 🔹 PRODUCT IMAGE IMPORTS
import img1 from "../../assests/Hero1.webp";
import img2 from "../../assests/Hero2.webp"; 
import img3 from "../../assests/Hero3.webp";

const productImages = [img1, img2, img3];

// 🔹 REFINED INDUSTRIAL BUTTON COMPONENT
const IndustrialButton = ({ children, onClick, variant = "primary", className = "" }) => {
  const baseStyles = "relative group overflow-hidden px-8 md:px-10 py-4 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 uppercase font-bold tracking-[0.2em] text-[10px] md:text-[11px]";
  
  const variants = {
    primary: "bg-red-600 text-white hover:bg-white hover:text-red-600 border border-red-600",
    secondary: "bg-transparent text-white border border-white/30 hover:border-red-600 hover:text-red-600 backdrop-blur-sm"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {/* Animated background fill effect */}
      <div className={`absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-out ${variant === 'primary' ? 'bg-white' : 'bg-red-600'}`}></div>
      
      <span className="relative z-10 flex items-center gap-3">
        {children}
      </span>
    </button>
  );
};

export default function CompressorValvesProductPage() {
  const [slideIndex, setSlideIndex] = useState(0);

  const whatsappNumber = "919876543210"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Sri Kumar Drill Rods, I am inquiring about Drill Rods in Tamilnadu. Please provide B2B pricing.`;

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % productImages.length);
    }, 5000);

    return () => {
      lenis.destroy();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-white font-['Inter'] text-slate-900 overflow-x-hidden">
      <head>
        <title>Drill Rod Dealers in Tamilnadu – Sri Kumar Drill Rod Works</title>
        <meta name="description" content="Sri Kumar Drill Rod Works, your trusted drill rod dealers in Tamilnadu. Reliable partner for mining, construction, and infrastructure." />
      </head>

      {/* --- HERO SECTION: FULL BACKGROUND CAROUSEL --- */}
      <section id="hero" className="relative h-[75vh] md:h-[85vh] min-h-[550px] md:min-h-[750px] w-full overflow-hidden bg-black flex items-center">
        
        {/* BACKGROUND IMAGES CAROUSEL */}
        {productImages.map((img, i) => (
          <div 
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${slideIndex === i ? 'opacity-50' : 'opacity-0'}`}
          >
            <img src={img} className="w-full h-full object-cover" alt="Drill Rod Banner" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-transparent"></div>
          </div>
        ))}

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 relative z-20 w-full">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6 md:mb-10">
              <div className="h-[1px] w-12 bg-red-600"></div>
              <span className="text-slate-300 font-['Poppins'] font-semibold tracking-[0.4em] uppercase text-[8px] md:text-[10px]">
                Industrial Excellence Since 2025
              </span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-[4.5rem] font-['Poppins'] font-light uppercase tracking-tighter leading-[1.1] mb-6 md:mb-10 text-white">
              Drill Rod Dealers in Tamilnadu – <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 font-normal italic">
                Sri Kumar Drill Rod Works
              </span>
            </h1>

            <div className="flex items-start gap-4 md:gap-6 mb-8 md:mb-12">
               <div className="pt-1 text-red-500">
                  <ShieldCheck size={20} className="md:w-7 md:h-7" strokeWidth={1.5} />
               </div>
               <h2 className="text-sm md:text-lg lg:text-xl font-['Poppins'] font-light text-slate-300 leading-tight tracking-wide max-w-2xl">
                  Sri Kumar Drill Rod Works, your trusted drill rod dealers in Tamilnadu and a reliable partner for the mining, construction, and infrastructure sectors across the state.
               </h2>
            </div>

            {/* 🔹 NEW BUTTONS IN HERO */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-8 md:mt-16">
              <IndustrialButton onClick={() => window.open(whatsappLink, "_blank")}>
                <MessageCircle size={14} strokeWidth={2.5} /> B2B Pricing
              </IndustrialButton>
              <Link to="/contactus">
                <IndustrialButton variant="secondary">
                  Contact Sales <ArrowRight size={14} strokeWidth={2.5} />
                </IndustrialButton>
              </Link>
            </div>
          </div>
        </div>

        {/* PROGRESS INDICATOR */}
        <div className="absolute bottom-6 md:bottom-10 left-6 right-6 flex gap-2 md:gap-4 max-w-[250px] md:max-w-sm z-30">
          {productImages.map((_, i) => (
            <div key={i} className="h-[1px] md:h-[2px] flex-1 bg-white/10 relative overflow-hidden">
               <div className={`absolute top-0 left-0 h-full bg-red-600 transition-all duration-[5000ms] linear ${slideIndex === i ? 'w-full' : 'w-0'}`}></div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function QuoteIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91242 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 7.34315 1.36015 6 3.017 6H9.017C10.6739 6 12.017 7.34315 12.017 9V15C12.017 18.3137 9.33072 21 6.017 21H4.017Z" />
    </svg>
  );
}