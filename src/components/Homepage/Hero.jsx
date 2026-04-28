import React, { useEffect, useState } from "react";
import { 
  ShieldCheck,   
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// 🔹 PRODUCT IMAGE IMPORTS
import img1 from "../../assests/Hero1-1.webp";
import img2 from "../../assests/Hero 2-1.webp"; 
import img3 from "../../assests/Hero 3-1.webp";

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
    }, 5500);

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

      {/* --- ELITE BENTO EDITORIAL HERO SLIDER --- */}
      <section id="hero" className="relative h-[75vh] md:h-[85vh] min-h-[550px] md:min-h-[800px] w-full overflow-hidden bg-black flex items-center">
        
        {/* 🔹 BACKGROUND LAYER: LAYERED MASKING & REVOLUTION ANIMATION */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {productImages.map((img, i) => (
            <div 
              key={i}
              className={`absolute inset-0 transition-all duration-[1500ms] cubic-bezier(0.645, 0.045, 0.355, 1) transform ${
                slideIndex === i 
                  ? 'opacity-40 scale-105 rotate-0 blur-0 z-10' 
                  : 'opacity-0 scale-125 rotate-1 blur-xl z-0'
              }`}
            >
              <img src={img} className="w-full h-full object-cover grayscale-[40%]" alt="Industrial Background" />
            </div>
          ))}
          {/* Subtle overlay grid for texture */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `linear-gradient(to right, #ffffff11 1px, transparent 1px), linear-gradient(to bottom, #ffffff11 1px, transparent 1px)`, backgroundSize: '60px 60px' }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        </div>

        {/* 🔹 CONTENT LAYER: THE EDITORIAL GRID */}
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 relative z-20 w-full">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Content Column (Bento Left) */}
            <div className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-6 md:mb-8 overflow-hidden">
                <div className="h-[2px] w-12 bg-red-600 transform-gpu animate-slide-in-left"></div>
                <span className="text-red-500 font-['Poppins'] font-black tracking-[0.4em] uppercase text-[9px] md:text-[11px] animate-fade-in">
                  Industrial Excellence Since 2025
                </span>
              </div>
              
              <div className="relative mb-6 md:mb-10 overflow-hidden">
                <h1 key={`title-${slideIndex}`} className="text-3xl md:text-6xl lg:text-[5.5rem] font-['Poppins'] font-bold uppercase tracking-tighter leading-[0.95] text-white animate-revolution-text">
                  Drill Rod Dealers in <br /> 
                  <span className="text-slate-400">Tamilnadu –</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 font-bold italic">
                    Sri Kumar Drill Rod Works
                  </span>
                </h1>
              </div>

              <div className="flex items-start gap-4 md:gap-8 mb-8 md:mb-12 max-w-3xl border-l border-white/10 pl-6 md:pl-10 py-2 transform-gpu transition-all duration-700">
                 <div className="pt-1 text-red-400 shrink-0">
                    <ShieldCheck size={28} strokeWidth={1} />
                 </div>
                 <h2 key={`sub-${slideIndex}`} className="text-sm md:text-lg lg:text-xl font-['Poppins'] font-light text-slate-300 leading-relaxed tracking-wide animate-fade-in-up">
                    Sri Kumar Drill Rod Works, your trusted drill rod dealers in Tamilnadu and a reliable partner for the mining, construction, and infrastructure sectors across the state.
                 </h2>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
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

            {/* Bento Sidebar (Technical Info/Navigation) */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-8 pt-12 border-t border-white/5 lg:border-t-0">
              <div className="bg-white/5 backdrop-blur-xl p-8 border border-white/10 rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10">
                
                  </div>
                  <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-4">Stock Status</p>
                  <h4 className="text-2xl font-bold text-white mb-2">READY TO SHIP</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">High-volume inventory available for immediate dispatch across Tamil Nadu industrial zones.</p>
              </div>

              {/* Vertical Thumb Navigation */}
              <div className="flex flex-col gap-4">
                {productImages.map((_, i) => (
                  <button 
                    key={i}
                    onClick={() => setSlideIndex(i)}
                    className="group flex items-center gap-6 text-left transition-all"
                  >
                    <span className={`text-xs font-bold font-mono transition-colors duration-500 ${slideIndex === i ? 'text-red-600' : 'text-slate-600 group-hover:text-white'}`}>
                      0{i + 1}
                    </span>
                    <div className="flex-1 h-[1px] bg-white/10 relative overflow-hidden">
                       <div className={`absolute inset-0 bg-red-100 transition-transform duration-500 origin-left ${slideIndex === i ? 'scale-x-100' : 'scale-x-0'}`}></div>
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-widest transition-opacity duration-500 ${slideIndex === i ? 'text-white' : 'text-slate-600 group-hover:text-white opacity-40 group-hover:opacity-100'}`}>
                      {i === 0 ? 'Tapper Bits' : i === 1 ? 'Jack Hammer' : 'Comp Spares'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 🔹 BOTTOM NAVIGATION OVERLAY */}
        <div className="absolute bottom-6 md:bottom-10 left-6 right-6 flex items-center gap-6 z-30 max-w-7xl mx-auto">
          <div className="flex-1 h-[1px] bg-white/5 relative overflow-hidden">
             <div 
              key={slideIndex}
              className="absolute top-0 left-0 h-full bg-red-600 animate-timer-progress origin-left"
              style={{ animationDuration: '5500ms' }}
             ></div>
          </div>
          <div className="text-white font-mono text-[10px] tracking-[0.3em] uppercase opacity-40">
             Scroll Down
          </div>
        </div>
      </section>

      <style>{`
        @keyframes timer-progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes revolution-text {
          0% { opacity: 0; transform: translateY(40px) skewY(2deg); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0) skewY(0); filter: blur(0); }
        }
        .animate-timer-progress { animation: timer-progress linear forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; }
        .animate-slide-in-left { animation: slide-in-left 1s ease-out forwards; }
        .animate-revolution-text { animation: revolution-text 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; }
      `}</style>

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