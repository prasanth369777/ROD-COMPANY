import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// 🔹 ASSET IMPORTS
import bgGridPattern from "../../assests/grid.svg"; 

const INDUSTRIES = [
  {
    id: "mining",
    title: "Mining Operations",
    description: "High-impact drilling systems and Tapper button bits engineered for abrasive subterranean conditions and heavy-duty extraction.",
    icon: "ph:pickaxe-light",
    stats: "250+ Sites",
    region: "Tamil Nadu, Kolar Fields",
    accent: "from-orange-500 to-red-600",
  },
  {
    id: "construction",
    title: "Infrastructure & Civil",
    description: "Robust pneumatic spares and jackhammer components built to minimize downtime across Tier-1 active urban developments.",
    icon: "ph:building-office-light",
    stats: "45 Projects",
    region: "Chennai, Coimbatore",
    accent: "from-red-600 to-orange-400",
  },
  {
    id: "quarry",
    title: "Quarrying & Aggregate",
    description: "Precision rock drill systems and genuine replacement parts providing high-velocity fragmentation for base materials.",
    icon: "ph:mountain-light",
    stats: "80+ Plants",
    region: "Hoysala Belt, Salem",
    accent: "from-orange-400 to-yellow-500",
  },
  {
    id: "drilling",
    title: "Water-well Drilling",
    description: "Deep-hole drilling consumables, heavy-duty rod strings, and compressor valves capable of high-pressure liquid extraction.",
    icon: "ph:drop-light",
    stats: "1.2M Feet",
    region: "Southern Aquifers",
    accent: "from-yellow-500 to-orange-500",
  },
];

export default function IndustriesWeServe() {
  const navigate = useNavigate();
  const [activeIndustry, setActiveIndustry] = useState("mining");

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <section
      id="industries"
      className="py-16 md:py-28 bg-[#04040a] relative overflow-hidden text-slate-100 font-['Inter'] antialiased min-h-screen flex items-center select-none"
    >
      {/* 🔹 Background Grid System */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: `url(${bgGridPattern})`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full filter blur-[150px] pointer-events-none z-0 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-red-600/5 rounded-full filter blur-[150px] pointer-events-none z-0" />

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full relative z-10">
        
        {/* 🔹 Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-orange-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-3 block">
              04 // Sectors of Operation
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light uppercase tracking-tighter italic leading-none mb-6 text-white font-['Poppins']">
              Industries <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-normal not-italic">We Serve</span>
            </h2>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed max-w-xl font-light">
              Built for high-velocity operations. Supplying rock-solid mining, quarry, and infrastructure parts across Tamil Nadu's active industrial corridors.
            </p>
          </div>
          <button
            onClick={() => navigate("/contactus")}
            className="group relative overflow-hidden bg-transparent text-white border border-white/20 px-8 py-4 font-bold uppercase text-[10px] tracking-[0.2em] transition-all duration-300 hover:border-orange-500 active:scale-95 flex items-center gap-3"
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-orange-600 to-red-600 transition-all duration-500 ease-out group-hover:w-full" />
            <span className="relative z-10 group-hover:text-white transition-colors">Request B2B Pricing</span>
            <span className="relative z-10 text-orange-500 group-hover:text-white">&rarr;</span>
          </button>
        </div>

        {/* 🔹 Interactive Module Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center min-h-[480px]">
          {/* Left Column - Navigation */}
          <div className="lg:col-span-5 space-y-4">
            {INDUSTRIES.map((industry) => (
              <div
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`group p-6 md:p-8 border transition-all duration-500 cursor-pointer relative overflow-hidden ${
                  activeIndustry === industry.id
                    ? "bg-white/5 border-orange-500/30"
                    : "bg-[#080812] border-white/5 hover:border-white/20"
                }`}
              >
                <div className={`absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-30 ${activeIndustry === industry.id ? "opacity-100" : ""}`} />
                
                <div className="flex items-start gap-6 relative z-10">
                  <div className="p-3 bg-white/5 border border-white/10 text-orange-500 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shrink-0">
                    <Icon icon={industry.icon} className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-sm md:text-base font-bold uppercase tracking-tight text-white group-hover:text-orange-500 transition-colors">
                        {industry.title}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-orange-500">
                        {industry.stats}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed transition-colors duration-500 ${
                      activeIndustry === industry.id ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {industry.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-[8px] font-mono uppercase tracking-widest text-slate-600">
                        Hub: <span className="text-slate-400">{industry.region}</span>
                      </span>
                      <span className={`text-[8px] font-black uppercase text-orange-500 transition-opacity ${
                        activeIndustry === industry.id ? "opacity-100" : "opacity-30"
                      }`}>
                        View Solutions
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Large 3D Holographic Model Display */}
          <div className="lg:col-span-7 h-[450px] md:h-[550px] relative border border-white/5 bg-[#080812] flex items-center justify-center p-12 group">
            <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.95, rotateY: 10 }}
                transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                className="w-full h-full flex flex-col justify-between relative z-10 text-center lg:text-left"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <span className="text-[10px] font-mono text-red-500 tracking-[0.4em] uppercase bg-red-500/10 border border-red-500/20 px-3 py-1">
                      Holographic Global_Node 03
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      System-Status // ONLINE
                    </span>
                  </div>

                  <div className="mt-12 md:mt-20">
                    <span className="text-orange-600 text-6xl md:text-8xl font-black italic opacity-10 leading-none">
                      {INDUSTRIES.find(i => i.id === activeIndustry)?.stats}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter text-white mt-2 font-['Poppins']">
                      {INDUSTRIES.find(i => i.id === activeIndustry)?.title}
                    </h3>
                    <p className="text-slate-400 text-xs md:text-sm max-w-xl mx-auto lg:mx-0 mt-4 leading-relaxed font-light">
                      {INDUSTRIES.find(i => i.id === activeIndustry)?.description}
                    </p>
                  </div>
                </div>

                {/* 3D Model Display Platform (Simulated with Minimalist UI) */}
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-between border-t border-white/5 pt-8">
                  <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-orange-500 animate-spin-slow">
                      <Icon icon="ph:globe-stand-light" className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono text-slate-500 uppercase">Hologram Engine</p>
                      <p className="text-xs font-bold text-slate-300 font-['Poppins']">3D Viewport Standard</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate("/industries")}
                    className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-slate-900 border border-slate-900 transition-all active:scale-95 text-center"
                  >
                    Explore Nodes
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
      `}</style>
    </section>
  );
}