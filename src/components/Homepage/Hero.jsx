import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import your assets
import HeroImage1 from '../../assests/hero-image.png'; 
// Add your other carousel images here
// import HeroImage2 from '../../assests/hero-2.png';

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
      accent: "from-blue-600 via-blue-800 to-slate-900",
      tag: "President's Choice Deal"
    },
    {
      title: "Premium Alloy Steel",
      subtitle: "High Impact Resistance",
      highlight: "Global Standards",
      description: "Engineered for the toughest terrains. Our drill rods ensure 30% more durability in high-pressure environments.",
      image: HeroImage1, // Replace with HeroImage2
      accent: "from-slate-800 via-gray-900 to-black",
      tag: "Limited Time Offer"
    },
    {
      title: "TN Wide Network",
      subtitle: "Fastest Logistics",
      highlight: "24HR Dispatch",
      description: "Strategic distribution hubs across Tamilnadu ensuring your project never stops. B2B pricing guaranteed.",
      image: HeroImage1, // Replace with HeroImage3
      accent: "from-orange-600 via-red-700 to-slate-900",
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
  }, [isPlaying, slides.length]); // Added missing dependencies to clear ESLint warning

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[85vh] min-h-[600px] w-full overflow-hidden bg-[#0a0a0a] font-['Inter']">
      
      {/* Main Slide Container */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent} opacity-90`}></div>
          
          {/* Decorative Stars/Elements */}
          <div className="absolute top-10 left-10 opacity-20">
             <svg width="100" height="100" viewBox="0 0 24 24" fill="white"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>

          <div className="relative max-w-[1400px] mx-auto h-full px-6 lg:px-16 flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              
              {/* Left Content */}
              <div className={`transition-all duration-700 delay-300 transform ${index === currentSlide ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest mb-6 border border-white/20">
                  {slide.tag}
                </span>
                
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4">
                  {slide.title} <br/>
                  <span className="text-blue-400">{slide.highlight}</span>
                </h1>
                
                <p className="text-lg text-gray-300 max-w-lg mb-8 leading-relaxed">
                  {slide.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <button 
                    onClick={() => navigate('/drill-rods')}
                    className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105"
                  >
                    Buy now
                  </button>
                  <button 
                    onClick={() => navigate('/contactus')}
                    className="px-8 py-3 border border-white/50 text-white font-bold rounded-full hover:bg-white/10 transition-all"
                  >
                    View deals
                  </button>
                </div>
              </div>

              {/* Right Image Container */}
              <div className={`relative transition-all duration-1000 delay-500 transform ${index === currentSlide ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
                <div className="absolute inset-0 bg-blue-500/20 blur-[120px] rounded-full"></div>
                <img 
                  src={slide.image} 
                  alt="Industrial Product" 
                  className="relative z-10 w-full h-auto drop-shadow-2xl object-contain max-h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/20 hover:bg-black/50 text-white backdrop-blur-sm transition-all"
      >
        <ChevronRight size={32} />
      </button>

      {/* Progress Indicators & Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        <div className="flex gap-3">
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className="group cursor-pointer py-4"
            >
              <div className="w-16 lg:w-24 h-[2px] bg-white/20 relative overflow-hidden">
                <div 
                  className={`absolute top-0 left-0 h-full bg-white transition-all duration-[5000ms] ease-linear ${
                    i === currentSlide && isPlaying ? "w-full" : "w-0"
                  } ${i < currentSlide ? "w-full" : ""}`}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => setIsPlaying(!isPlaying)}
          className="text-white hover:text-blue-400 transition-colors"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>
    </section>
  );
}