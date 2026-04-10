import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HeroImage1 from '../../assests/hero-image.png'; 

const Spotlight = ({ className, fill }) => {
  return (
    <svg
      className={`animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8"></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export default function ProfessionalHero() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      title: "Drill Rod Dealers",
      subtitle: "Industrial Excellence // Since 2025",
      highlight: "in Tamilnadu",
      description: "Sri Kumar Drill Rod Works: Your trusted partner for mining, construction, and infrastructure sectors across the state.",
      image: HeroImage1,
      accent: "from-blue-600/20 via-blue-900/40 to-black",
      tag: "President's Choice Deal"
    },
    {
      title: "Premium Alloy Steel",
      subtitle: "High Impact Resistance",
      highlight: "Global Standards",
      description: "Engineered for the toughest terrains. Our drill rods ensure 30% more durability in high-pressure environments.",
      image: HeroImage1, 
      accent: "from-zinc-800/20 via-zinc-900/40 to-black",
      tag: "Limited Time Offer"
    },
    {
      title: "TN Wide Network",
      subtitle: "Fastest Logistics",
      highlight: "24HR Dispatch",
      description: "Strategic distribution hubs across Tamilnadu ensuring your project never stops. B2B pricing guaranteed.",
      image: HeroImage1, 
      accent: "from-orange-600/20 via-red-900/40 to-black",
      tag: "New Arrival"
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen lg:h-[90vh] min-h-[700px] w-full overflow-hidden bg-black/[0.96] antialiased font-['Inter']">
      
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />

      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] select-none opacity-10 [background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]" />

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`}></div>
          
          <div className="relative z-10 max-w-[1400px] mx-auto h-full px-6 lg:px-16 flex items-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full pt-16 lg:pt-0">
              
              <div className={`order-2 lg:order-1 transition-all duration-700 delay-300 transform ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <span className="inline-block px-4 py-1 rounded-full bg-white/5 backdrop-blur-md text-white text-[10px] md:text-xs font-medium tracking-[0.2em] mb-4 md:mb-6 border border-white/10 uppercase">
                  {slide.tag}
                </span>
                
                {/* 🔹 Changed font-black to font-semibold and removed forced italic for a cleaner look */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] tracking-tight mb-6 uppercase">
                  {slide.title} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 to-neutral-500 font-light">
                    {slide.highlight}
                  </span>
                </h1>
                
                {/* 🔹 Changed to text-neutral-400 and font-light */}
                <p className="text-base md:text-lg text-neutral-400 max-w-lg mb-8 md:mb-10 leading-relaxed font-light">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button onClick={() => navigate('/drill-rods')} className="w-full sm:w-auto px-10 py-3.5 bg-white text-black font-medium rounded-full hover:bg-orange-500 hover:text-white transition-all transform active:scale-95 uppercase text-[11px] tracking-widest">
                    Explore Inventory
                  </button>
                  <button onClick={() => navigate('/contactus')} className="w-full sm:w-auto px-10 py-3.5 border border-white/10 text-white font-medium rounded-full hover:bg-white/5 transition-all active:scale-95 uppercase text-[11px] tracking-widest">
                    Technical Specs
                  </button>
                </div>
              </div>

              <div className={`order-1 lg:order-2 relative transition-all duration-1000 delay-500 transform ${index === currentSlide ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
                <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full animate-pulse"></div>
                <img src={slide.image} alt="Industrial Product" className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(255,255,255,0.05)] object-contain max-h-[350px] md:max-h-[450px] lg:max-h-[600px]" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows with thinner icons */}
      <div className="absolute top-1/2 w-full flex justify-between px-4 md:px-8 -translate-y-1/2 z-30 pointer-events-none">
          <button onClick={prevSlide} className="pointer-events-auto p-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all active:scale-90">
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button onClick={nextSlide} className="pointer-events-auto p-3 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md transition-all active:scale-90">
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
      </div>

      {/* Progress Bars - Using thinner strokes */}
      <div className="absolute bottom-10 left-0 w-full z-30 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-3 w-full max-w-2xl">
          {slides.map((_, i) => (
            <div key={i} onClick={() => setCurrentSlide(i)} className="flex-1 cursor-pointer py-4">
              <div className="h-[1px] bg-white/10 relative overflow-hidden">
                <div className={`absolute top-0 left-0 h-full bg-white transition-all ease-linear ${i === currentSlide && isPlaying ? "w-full duration-[5000ms]" : "w-0 duration-0"} ${i < currentSlide ? "w-full" : ""}`} />
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)} className="text-white/50 hover:text-white transition-colors p-2">
          {isPlaying ? <Pause size={14} strokeWidth={1.5} /> : <Play size={14} strokeWidth={1.5} />}
        </button>
      </div>

      <style>{`
        @keyframes spotlight {
          0% { opacity: 0; transform: translate(-72%, -62%) scale(0.5); }
          100% { opacity: 1; transform: translate(-50%,-40%) scale(1); }
        }
        .animate-spotlight {
          animation: spotlight 2s ease .75s 1 forwards;
        }
      `}</style>
    </section>
  );
}