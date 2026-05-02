import { useEffect, useState, useMemo } from "react";
import { Icon } from "@iconify/react"; 
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// 🔹 IMPORTED ASSET
import Hero1 from "../../assests/Hero1.webp";

export default function About() {
  const [, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  // Memoize industrial values to prevent unnecessary re-renders (Performance Fix)
  const industrialValues = useMemo(() => [
    {
      icon: "solar:shield-check-bold", // Professional solid black style
      title: "Durability First",
      description: "Our high-quality products are sourced from leading brands to ensure maximum performance and safety on every job site.",
      accent: "from-orange-500 to-red-600"
    },
    {
      icon: "solar:hammer-bold",
      title: "Precision Spares",
      description: "Critical jackhammer components like pistons and bush kits are always in stock to eliminate operational downtime.",
      accent: "from-red-600 to-orange-400"
    },
    {
      icon: "solar:helmet-bold",
      title: "Safety Standard",
      description: "Every part we supply is tested for quality and compatibility, giving mining contractors complete peace of mind.",
      accent: "from-orange-400 to-yellow-500"
    },
    {
      icon: "solar:graph-up-bold",
      title: "Peak Productivity",
      description: "We help you get equipment back to the site quickly, minimizing delays across Tamil Nadu's active mining belts.",
      accent: "from-yellow-500 to-orange-500"
    },
  ], []);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="py-12 md:py-24 bg-white relative overflow-hidden text-slate-900 font-['Inter'] antialiased">
      
      {/* 🔹 Background Grid Lines Removed as requested */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
          
          <div className="relative order-2 lg:order-1 will-change-transform">
            <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 w-12 md:w-16 h-[80%] bg-orange-600/10 hidden lg:block -z-10"></div>
            <div className="relative bg-gray-100 p-2 shadow-2xl">
                <img 
                    src={Hero1} 
                    alt="Industrial Equipment" 
                    className="w-full h-auto object-cover transform-gpu"
                />
                <div className="absolute top-6 md:top-10 right-0 lg:-right-10 bg-orange-600 p-4 md:p-8 text-white max-w-[200px] md:max-w-xs shadow-xl">
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-2 text-white">Technical Excellence</h3>
                    <p className="text-[10px] md:text-xs opacity-90 leading-relaxed uppercase font-semibold tracking-widest text-white">
                        Sri Kumar uses precision concepts throughout the process of supply.
                    </p>
                    <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 text-orange-600 font-['Caveat'] text-xl md:text-3xl -rotate-6 whitespace-nowrap bg-white px-2 py-1 shadow-sm">
                      ~ Precision Guaranteed!
                    </div>
                </div>
            </div>
          </div>

          <div className="flex flex-col items-start order-1 lg:order-2">
            <div className="flex items-baseline gap-2 mb-4">
                <span className="text-6xl md:text-7xl lg:text-8xl font-bold text-slate-900 leading-none">20</span>
                <div className="flex flex-col">
                    <span className="text-xl md:text-2xl lg:text-4xl font-bold text-orange-600 leading-none">Years</span>
                    <span className="text-xl md:text-2xl lg:text-4xl font-light italic text-slate-400">Experience</span>
                </div>
            </div>
            
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-400 mb-6 md:mb-8 border-b-2 border-orange-500 pb-2">
                Production of Rock Drill Bits for Mining
            </p>
            
            <p className="text-base md:text-lg lg:text-xl text-slate-600 italic font-medium leading-relaxed mb-6 md:mb-8 relative">
                &quot;Every piece, it&apos;s a classic!&quot; With years of experience, Sri Kumar Drill Rod Works takes pride in being one of the most respected mining tools suppliers in Tamilnadu.
                <svg className="absolute -bottom-2 left-0 w-32 md:w-48 text-orange-500/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
            </p>

            <p className="text-slate-500 text-sm leading-relaxed mb-8 md:mb-10 max-w-xl">
                Whether you are a <span className="text-slate-900 font-bold">Contractor</span> on a large infrastructure project, a <span className="text-slate-900 font-bold">Quarry Owner</span>, or a repair shop looking for <span className="text-slate-900 font-bold relative">Authentic Spares 
                  <svg className="absolute -top-1 -left-1 w-full h-full text-orange-500/20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <ellipse cx="50" cy="50" rx="48" ry="40" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>, we are here to serve you professionally.
            </p>

            <button 
                onClick={() => navigate('/aboutus')}
                className="w-full md:w-auto inline-flex items-center justify-center gap-4 bg-orange-600 text-white px-8 md:px-10 py-4 md:py-5 font-bold uppercase text-xs tracking-widest hover:bg-slate-900 transition-all shadow-lg active:scale-95 transform-gpu"
            >
                Read More
            </button>
          </div>
        </div>

        <div className="border-y border-gray-100 py-12 md:py-20 mb-20 md:mb-32 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative">
            <div className="absolute -top-6 left-4 font-['Caveat'] text-orange-400 text-2xl md:text-3xl rotate-3">
              The Hub of Spares ↓
            </div>
            
            <div className="lg:col-span-8">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold uppercase tracking-tighter italic mb-4 md:mb-6 text-slate-900">
                    Trusted <span className="text-orange-600">Jackhammer</span> <br /> Spare Parts Distributor
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed italic max-w-3xl">
                    Downtime is not an option. We operate as a dedicated distributor in Tamilnadu, ensuring critical components like <span className="text-slate-900 font-bold">Pistons</span> and <span className="text-slate-900 font-bold">Bush Kits</span> are always available.
                </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <button 
                    onClick={() => navigate('/aboutus')}
                    className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 border-2 border-orange-600 text-orange-600 font-bold uppercase text-xs tracking-widest hover:bg-orange-600 hover:text-white transition-all transform-gpu"
                >
                    View Catalog
                </button>
            </div>
        </div>

        <div className="mb-24 md:mb-40">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
                <h2 className="text-3xl md:text-4xl font-bold uppercase italic tracking-tight text-slate-900">
                    Tapered <span className="text-orange-600">Button Bits</span>
                </h2>
                <div className="flex flex-wrap gap-3 md:gap-4 relative">
                    <div className="px-3 md:px-4 py-2 bg-slate-50 text-[8px] md:text-[10px] font-bold text-slate-400 border border-slate-200 uppercase tracking-widest">Mining Belt Ready</div>
                    <div className="px-3 md:px-4 py-2 bg-slate-50 text-[8px] md:text-[10px] font-bold text-slate-400 border border-slate-200 uppercase tracking-widest">High-Impact Steel</div>
                    <div className="absolute -top-10 -right-4 font-['Caveat'] text-slate-400 text-lg hidden md:block">
                      Industry Favorites ↴
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                {['Sandco', 'Blue Tapper', 'Pulanka', 'LT', 'Nanchang', 'PLKS'].map((brand) => (
                    <div key={brand} className="group border border-gray-100 p-6 md:p-8 flex flex-col items-center justify-center hover:bg-slate-900 hover:border-slate-900 transition-all transform-gpu cursor-default">
                        <Icon icon="solar:settings-minimalistic-bold" className="text-black mb-3 md:mb-4 w-7 h-7 group-hover:text-white" />
                        <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white text-center">{brand}</span>
                    </div>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100 mb-24 md:mb-32 shadow-xl">
          {industrialValues.map((value, index) => (
            <div key={index} className="bg-white p-8 md:p-12 hover:bg-slate-50 transition-colors group">
              <Icon icon={value.icon} className="w-8 h-8 md:w-10 md:h-10 text-black mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mb-3 md:mb-4 text-slate-900">{value.title}</h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium italic">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="relative bg-slate-900 p-10 md:p-16 lg:p-24 text-center rounded-none overflow-hidden">
            <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 uppercase italic tracking-tighter leading-tight md:leading-none relative z-10">
                SECURE YOUR <br /> <span className="text-orange-600 relative">
                  SITE EFFICIENCY.
                  <svg className="absolute -top-4 -left-2 w-[110%] h-[150%] text-white opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M5,50 Q50,5 95,50 Q50,95 5,50" fill="none" stroke="currentColor" strokeWidth="1" />
                  </svg>
                </span>
            </h3>
            <p className="text-slate-400 text-base md:text-lg lg:text-xl mb-8 md:mb-12 max-w-3xl mx-auto italic relative z-10 leading-relaxed text-slate-400">
                Contact our Coimbatore headquarters for specialized bulk quotes and priority field support across Tamil Nadu.
            </p>
            
            <div className="relative inline-block w-full md:w-auto">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-['Caveat'] text-orange-400 text-2xl hidden md:block">
                Start Today!
              </div>
              <button
                onClick={() => navigate("/contactus")}
                className="relative z-10 w-full md:w-auto bg-orange-600 text-white px-10 md:px-20 py-5 md:py-6 font-bold uppercase text-xs tracking-[0.2em] md:tracking-[0.4em] hover:bg-white hover:text-orange-600 transition-all shadow-2xl active:scale-95 transform-gpu"
              >
                Get B2B Pricing
              </button>
            </div>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
      `}</style>
    </section>
  );
}