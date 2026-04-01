import { useEffect, useRef } from 'react';
import { ArrowRight, Settings} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import HeroImage from '../../assests/hero-image.png'; 

export default function Hero() {
  const containerRef = useRef(null);
  const navigate = useNavigate();



  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || window.innerWidth < 1024) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24 pb-12 lg:pt-20 lg:pb-0 font-['Inter']"
    >
      {/* 1. BACKGROUND WATERMARK */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="opacity-[0.03] lg:opacity-[0.05] select-none pointer-events-none text-center">
          <h2 
            className="text-[25vw] lg:text-[20vw] font-black uppercase tracking-tighter text-transparent leading-none" 
            style={{ WebkitTextStroke: '2px #0f172a' }}
          >
            TAMILNADU
          </h2>
        </div>
      </div>

      {/* 2. MAIN CONTENT GRID */}
      <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        
        {/* Left Column: Content */}
        <div className="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
            <div className="h-[2px] w-12 bg-orange-500"></div>
            <span className="text-slate-400 font-black tracking-[0.4em] uppercase text-[10px] lg:text-xs">
              Industrial Excellence // Since 2025
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-7xl xl:text-8xl font-black text-slate-900 leading-[0.95] tracking-tighter mb-8 uppercase italic">
            Drill Rod Dealers <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-600 to-slate-900">
              in Tamilnadu
            </span>
          </h1>

          <p className="max-w-2xl mx-auto lg:mx-0 text-slate-500 text-lg lg:text-2xl leading-relaxed mb-10 lg:border-l-4 lg:border-orange-500/20 lg:pl-8 font-medium italic">
            Sri Kumar Drill Rod Works, your trusted drill rod dealers in Tamilnadu and a reliable partner for the mining, construction, and infrastructure sectors across the state.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            {/* Redirect to Products */}
            <button 
              onClick={() => navigate('/drill-rods')}
              className="group px-10 py-6 bg-slate-900 text-white font-black uppercase text-xs tracking-[0.3em] transition-all hover:bg-orange-600 active:scale-95 shadow-2xl flex items-center justify-center gap-4"
            >
              Browse Inventory <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Redirect to Contact Page */}
            <Link 
              to="/contactus"
              className="px-10 py-6 border-2 border-slate-200 text-slate-900 font-black uppercase text-xs tracking-[0.3em] hover:bg-slate-50 transition-all text-center flex items-center justify-center"
            >
              Request Quotation
            </Link>
          </div>

          {/* Quick Support Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 border-t border-slate-100 pt-10 max-w-lg mx-auto lg:mx-0">
            {[
              { val: '24HR', label: 'Dispatch' },
              { val: 'TN Wide', label: 'Network' },
              { val: 'B2B', label: 'Pricing' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-2xl font-black text-slate-900 italic tracking-tighter">{stat.val}</p>
                <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Image */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative group perspective-1000">
          <div ref={containerRef} className="relative z-20 transition-transform duration-500 ease-out flex justify-center">
            <div className="absolute inset-0 bg-orange-500/10 blur-[120px] rounded-full scale-90 opacity-40"></div>
            
            <img 
              src={HeroImage} 
              alt="Sri Kumar Drill Rod Works Tamilnadu" 
              className="relative z-10 w-[80%] lg:w-full drop-shadow-[0_50px_100px_rgba(0,0,0,0.15)] transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Badges */}
            <div className="hidden xl:block absolute top-10 -right-12 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100">
              <Settings className="text-orange-500 mb-2" size={24} />
              <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest">Alloy Grade</p>
              <p className="text-slate-900 font-black text-sm italic">High Impact Steel</p>
            </div>
          </div>
        </div>
      </div>

     
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-200 to-transparent"></div>
        <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.5em]">Explore Catalog</span>
      </div>
    </section>
  );
}