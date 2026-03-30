import React, { useEffect, useState } from "react";

import Tilt from "react-parallax-tilt";
import Lenis from "@studio-freight/lenis";
import { ShieldCheck, Hammer, Drill, Award, Factory, Truck, Settings2, HardHat, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Values section tailored to Sri Kumar Drill Rod Works
const values = [
  { 
    icon: ShieldCheck, 
    title: "Authentic Quality", 
    description: "Every item we sell meets rigorous quality standards to ensure longevity and reliable performance on every job site." 
  },
  { 
    icon: Settings2, 
    title: "Expert Guidance", 
    description: "Our team has hands-on experience in the mining and construction sectors across Tamilnadu to help you select the right tools." 
  },
  { 
    icon: Hammer, 
    title: "Reliable Supply", 
    description: "Whether you are a contractor or a quarry owner, you can count on us for consistent quality and integrity." 
  },
  { 
    icon: Award, 
    title: "Leading Brands", 
    description: "Stocked with high-quality products sourced from reputed brands like Sandco, Blue Tapper, Pulanka, and LT." 
  },
];

// Process roadmap updated to Supply & Distribution flow
const processSteps = [
  { 
    title: "Requirement Analysis", 
    description: "Our professionals listen to your requirements and rock conditions to provide custom solutions that fit your budget.", 
    icon: HardHat 
  },
  { 
    title: "Quality Testing", 
    description: "Every part, from pistons to tapered bits, is tested for compatibility and quality before distribution.", 
    icon: ShieldCheck 
  },
  { 
    title: "Technical Support", 
    description: "Assisting customers in identifying exact spare parts to minimize downtime at active mining sites.", 
    icon: Factory 
  },
  { 
    title: "Fast State-Wide Service", 
    description: "Supporting urgent requirements with quick turnaround times across Tamilnadu—from Chennai to Coimbatore.", 
    icon: Truck 
  },
];

export default function Aboutus() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  // Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Cursor background effect
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
    
      {/* About Section */}
      <section id="about" className="py-32 bg-slate-50 relative overflow-hidden font-['Inter']">
        
        {/* Interactive background circles - Adjusted to Brand Orange */}
        <div className="absolute rounded-full w-96 h-96 bg-orange-500/5 blur-3xl pointer-events-none transition-transform duration-300" style={{ transform: `translate(${cursorPos.x * 0.01}px, ${cursorPos.y * 0.01}px)` }} />
        
        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-16">
          
          {/* Section 1: Intro */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-600/10 rounded-full border border-orange-600/20 mb-6">
                <span className="text-orange-600 font-bold uppercase tracking-widest text-xs">Mining Tools Suppliers in Tamilnadu</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 uppercase italic tracking-tighter leading-none">
                SRI KUMAR <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">DRILL ROD WORKS</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed italic font-medium border-l-4 border-orange-500 pl-6">
                With years of experience in the industry, we take pride in being one of the most respected mining tools suppliers in Tamilnadu. Our shop is stocked with a wide range of high-quality products sourced from leading brands to ensure durability, performance, and safety on every job site.
              </p>
            </div>
            <div className="bg-slate-900 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <Factory className="absolute -right-10 -bottom-10 text-white/5 w-64 h-64" />
                <p className="text-white text-lg leading-relaxed relative z-10">
                    Whether you are a contractor working on a large infrastructure project, a quarry owner needing consistent supply, or a repair shop looking for authentic spare parts, we are here to serve you with integrity and professionalism.
                </p>
                <button 
                  onClick={() => navigate('/contactus')}
                  className="mt-8 flex items-center gap-3 px-8 py-4 bg-orange-600 text-white font-black uppercase text-xs tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Consult an Expert <ChevronRight size={16} />
                </button>
            </div>
          </div>

          {/* Section 2: Jackhammer Spares (H2 Integration) */}
          <div className="mb-32">
             <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight italic">
                    Your Trusted Jackhammer <span className="text-orange-600">Spare Parts Distributor</span>
                </h2>
                <p className="max-w-4xl mx-auto text-slate-500 text-lg">
                    When it comes to maintaining your equipment, downtime is not an option. Ensuring critical components are always available when you need them across Tamilnadu's active mining and construction sites.
                </p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {values.map((value, index) => (
                 <Tilt key={index} glareEnable={true} glareMaxOpacity={0.1} scale={1.02} className="w-full">
                   <div className="h-full bg-white rounded-2xl p-10 border border-slate-100 shadow-xl hover:border-orange-500/30 transition-all duration-500">
                     <div className="inline-flex p-4 rounded-xl bg-slate-900 mb-6">
                       <value.icon className="w-6 h-6 text-orange-500" />
                     </div>
                     <h3 className="text-xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">{value.title}</h3>
                     <p className="text-slate-500 text-sm leading-relaxed italic">{value.description}</p>
                   </div>
                 </Tilt>
               ))}
             </div>
          </div>

          {/* Section 3: Tapered Button Bits (H2 Integration) */}
          <div className="bg-slate-900 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden mb-32">
            <div className="absolute top-0 right-0 p-20 opacity-5">
                <Drill size={400} />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-none">
                        Quality Tapered <br /><span className="text-orange-500">Button Bits Suppliers</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8 italic font-medium">
                        As a leading tapered button bits supplier in Tamilnadu, we offer a variety of sizes and angles to match different rock conditions and drilling equipment. From granite quarrying in Tamilnadu's rich mining belts to road construction along state highways.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {['Sandco', 'Blue Tapper', 'Pulanka', 'LT', 'Nanchang', 'PLKS'].map(brand => (
                            <span key={brand} className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">{brand}</span>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md">
                        <p className="text-slate-300 italic">
                            "Every part we supply is tested for quality and compatibility, giving you complete peace of mind."
                        </p>
                    </div>
                    <p className="text-orange-500 font-bold uppercase tracking-widest text-xs">Consistent performance under high-impact conditions.</p>
                </div>
            </div>
          </div>

          {/* Vertical Process Roadmap */}
          <div className="mb-32">
            <h3 className="text-4xl md:text-5xl font-black text-center text-slate-900 mb-20 uppercase italic tracking-tighter">
              Our Service <span className="text-orange-600">Standards</span>
            </h3>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-slate-200"></div>
              <div className="space-y-24">
                {processSteps.map((step, idx) => (
                  <div key={idx} className={`flex items-center w-full ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                    <div className="md:w-1/2 relative pl-16 md:pl-0">
                      <div className={`absolute top-0 bg-slate-900 p-4 rounded-xl shadow-xl z-20 ${idx % 2 === 0 ? "md:-right-10" : "md:-left-10"}`}>
                        <step.icon className="w-6 h-6 text-orange-500" />
                      </div>
                      <div className={`bg-white p-8 rounded-3xl shadow-2xl border border-slate-50 transition-all duration-500 hover:border-orange-500/20 ${idx % 2 === 0 ? "md:mr-16" : "md:ml-16"}`}>
                        <h4 className="text-xl font-black text-slate-900 mb-3 uppercase italic tracking-tighter">{step.title}</h4>
                        <p className="text-slate-500 text-sm italic font-medium leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-[3rem] p-12 lg:p-20 text-center text-white shadow-2xl shadow-orange-500/20">
            <h3 className="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter">Ready to Start Your Project?</h3>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto font-medium italic">
                From pistons and bush kits to retainer locks, let us help you get your equipment back to the site quickly.
            </p>
            <button 
                onClick={() => navigate('/contactus')} 
                className="px-12 py-6 bg-slate-900 text-white rounded-2xl font-black uppercase text-sm tracking-[0.3em] transition-all hover:bg-white hover:text-black hover:scale-105 active:scale-95"
            >
              Get Bulk Pricing
            </button>
          </div>
        </div>
      </section>

     
    </>
  );
}