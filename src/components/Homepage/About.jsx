import { useEffect, useState } from "react";
import { Shield, Hammer, HardHat, TrendingUp, ChevronRight, Zap,Drill } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

const industrialValues = [
  {
    icon: Shield,
    title: "Durability First",
    description: "Our high-quality products are sourced from leading brands to ensure maximum performance and safety on every job site.",
    accent: "from-orange-500 to-red-600"
  },
  {
    icon: Hammer,
    title: "Precision Spares",
    description: "Critical jackhammer components like pistons and bush kits are always in stock to eliminate operational downtime.",
    accent: "from-red-600 to-orange-400"
  },
  {
    icon: HardHat,
    title: "Safety Standard",
    description: "Every part we supply is tested for quality and compatibility, giving mining contractors complete peace of mind.",
    accent: "from-orange-400 to-yellow-500"
  },
  {
    icon: TrendingUp,
    title: "Peak Productivity",
    description: "We help you get equipment back to the site quickly, minimizing delays across Tamil Nadu's active mining belts.",
    accent: "from-yellow-500 to-orange-500"
  },
];

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="about" className="py-20 md:py-32 bg-white relative overflow-hidden text-slate-900 font-['Inter']">
      
      {/* 1. DYNAMIC BACKGROUND INTERACTION */}
      <div 
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-orange-500/5 to-yellow-500/5 rounded-full blur-[150px] pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * 0.03}px)` }}
      ></div>

      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        
        {/* Section Header: Mining Tools Supplier Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24 lg:mb-40">
          <div className="lg:col-span-7 relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[3px] w-16 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <span className="text-orange-600 font-['Poppins'] font-bold tracking-[0.4em] uppercase text-[10px] lg:text-xs">
                Mining Tools Suppliers in Tamilnadu
              </span>
            </div>
            <h2 className="text-5xl md:text-5xl lg:text-[5.5rem] font-['Poppins'] font-black uppercase tracking-tighter leading-[0.9] italic mb-10">
              Your Trusted <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-500 to-yellow-500">
                Partner.
              </span>
            </h2>
            <button 
              onClick={() => navigate('/drill-rods')}
              className="flex items-center gap-8 group text-slate-900 transition-all uppercase font-['Poppins'] font-black tracking-widest text-xs"
            >
              <span className="group-hover:text-orange-600 transition-colors">Explore Product Range</span>
              <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shadow-lg">
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
          
          <div className="lg:col-span-5 lg:pt-16 space-y-10">
            <p className="text-slate-600 text-xl lg:text-2xl leading-[1.4] italic font-semibold">
              With years of experience, Sri Kumar Drill Rod Works takes pride in being one of the most respected mining tools suppliers in Tamilnadu, serving infrastructure and quarry sectors with integrity.
            </p>
            <div className="relative p-10 border-l-8 border-orange-500 bg-slate-50/80 backdrop-blur-md shadow-xl shadow-slate-200/50">
                <Zap className="absolute top-6 right-6 text-orange-500/10 w-16 h-16" />
                <p className="text-slate-500 text-base lg:text-lg leading-relaxed font-medium">
                  Whether you are a <span className="text-slate-900 font-black uppercase">Contractor</span> on a large infrastructure project, a <span className="text-slate-900 font-black uppercase">Quarry Owner</span>, or a repair shop looking for <span className="text-slate-900 font-black uppercase">Authentic Spares</span>, we are here to serve you professionally.
                </p>
            </div>
          </div>
        </div>

        {/* Section 2: Jackhammer Spare Parts Distributor */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
            <div className="order-2 lg:order-1 relative group">
                <div className="absolute inset-0 bg-orange-600/10 blur-[80px] rounded-full scale-75 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <div className="bg-slate-900 p-12 lg:p-20 border border-white/10 rounded-3xl relative overflow-hidden">
                    <Factory className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64" />
                    <h3 className="text-white text-3xl lg:text-5xl font-['Poppins'] font-black uppercase tracking-tighter italic mb-8 leading-none">
                        Jackhammer <br /><span className="text-orange-500">Distributor</span>
                    </h3>
                    <p className="text-slate-400 text-lg lg:text-xl font-medium italic leading-relaxed mb-10">
                        When it comes to maintaining your equipment, downtime is not an option. We operate as a dedicated jackhammer spare parts distributor in Tamilnadu, ensuring critical components are always available.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {['Pistons', 'Bush Kits', 'Valve Assemblies', 'Retainer Locks'].map((part) => (
                            <div key={part} className="flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest border-b border-white/10 pb-2">
                                <Shield className="w-4 h-4 text-orange-500" /> {part}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-5xl font-['Poppins'] font-black uppercase tracking-tighter mb-8 leading-tight">
                    Your Trusted <br /> Spare Parts Partner
                </h2>
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed font-medium border-l-4 border-slate-100 pl-8 italic">
                    Our team understands the urgency of repair work across Tamilnadu's active mining sites. We help you get your equipment back to work quickly, maximizing productivity with quality-tested parts.
                </p>
                <div className="mt-12">
                   <button 
                     onClick={() => navigate('/jack-hammer')}
                     className="px-12 py-5 bg-slate-900 text-white font-black uppercase text-xs tracking-[0.3em] hover:bg-orange-600 transition-all shadow-2xl active:scale-95"
                    >
                     Browse Jackhammer Parts
                   </button>
                </div>
            </div>
        </div>

        {/* Section 3: Tapered Button Bits Supplier */}
        <div className="mb-32">
            <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 border-b border-slate-100 pb-12">
                <div className="max-w-3xl">
                    <h2 className="text-4xl lg:text-6xl font-['Poppins'] font-black uppercase tracking-tighter italic leading-none mb-6">
                        Tapered <span className="text-orange-500">Button Bits</span>
                    </h2>
                    <p className="text-slate-500 text-xl font-medium leading-relaxed italic">
                        Precision and durability define our tapered button bits. We offer various sizes and angles for granite quarrying in Tamilnadu's rich mining belts and infrastructure road projects.
                    </p>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 bg-slate-50 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">Mining Belt Ready</div>
                    <div className="px-6 py-3 bg-slate-50 border border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">Road Infrastructure</div>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-slate-100 border border-slate-100 shadow-xl">
                {['Sandco', 'Blue Tapper', 'Pulanka', 'LT', 'Nanchang', 'PLKS'].map((brand) => (
                    <div key={brand} className="bg-white p-10 flex flex-col items-center group hover:bg-slate-900 transition-all cursor-default">
                        <Drill className="w-8 h-8 text-orange-500 mb-6 group-hover:scale-125 transition-transform" />
                        <span className="text-slate-900 group-hover:text-white font-['Poppins'] font-black uppercase tracking-widest text-xs text-center">{brand}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Core Capabilities Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {industrialValues.map((value, index) => (
            <div 
              key={index} 
              className="group relative bg-white p-12 lg:p-14 border border-slate-100 transition-all duration-700 overflow-hidden shadow-sm hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.accent} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out`}></div>
              <div className="relative z-10 transition-colors duration-500 group-hover:text-white">
                <value.icon className="w-14 h-14 text-orange-600 group-hover:text-white mb-12 transition-colors duration-500" />
                <h3 className="text-2xl font-['Poppins'] font-black uppercase tracking-tight mb-6">
                  {value.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/80 text-sm lg:text-base leading-relaxed italic font-medium">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="relative group overflow-hidden border border-slate-100 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-600 to-yellow-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000 ease-out"></div>
          <div className="relative p-12 lg:p-32 text-center transition-colors duration-700 lg:group-hover:text-white flex flex-col items-center">
            <h3 className="text-4xl md:text-6xl lg:text-[4rem] font-['Poppins'] font-black uppercase italic mb-10 tracking-tighter text-slate-900 group-hover:text-white transition-colors leading-[0.9]">
              SECURE YOUR <br className="sm:hidden" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 group-hover:bg-none group-hover:text-white transition-all">
                SITE EFFICIENCY.
              </span>
            </h3>
            <p className="text-slate-600 lg:group-hover:text-white/80 mb-16 max-w-3xl italic text-lg lg:text-2xl transition-colors leading-relaxed font-semibold">
              Deploy the state's most reliable mining equipment. Contact our Coimbatore headquarters for specialized bulk quotes and priority field support across Tamil Nadu.
            </p>
            <button
              onClick={() => navigate("/contactus")}
              className="relative overflow-hidden w-full sm:w-auto px-20 py-6 lg:py-8 bg-slate-900 text-white font-['Poppins'] font-black uppercase text-xs lg:text-sm tracking-[0.4em] transition-all group-hover:bg-white group-hover:text-black shadow-2xl active:scale-95"
            >
              Get B2B Pricing
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

function Factory({ className }) {
    return (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
        </svg>
    );
}