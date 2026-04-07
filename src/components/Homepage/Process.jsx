"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../components/Homepage/use-outside-click";
import { PackageSearch, BadgeCheck, CircleDollarSign, UserCog, MapPinned, ChevronRight, ShieldCheck, Factory, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const chooseUsSteps = [
  { 
    title: "Wide Product Selection", 
    description: "Extensive inventories of mining tools in Tamilnadu.", 
    longDescription: "We carry one of the most extensive inventories of mining tools and equipment in Tamilnadu. From drill rods to pneumatic accessories, we are a one-stop shop for all your drilling needs. Our warehouse is stocked with ready-to-ship inventory to minimize your project downtime.",
    icon: PackageSearch, 
    tag: "Benefit 01" 
  },
  { 
    title: "Authentic Quality", 
    description: "Products only from verified manufacturers.", 
    longDescription: "We source products only from verified manufacturers and authorized distributors. Every item we sell meets rigorous quality standards to ensure longevity and reliable performance in the toughest rock conditions of Tamilnadu.",
    icon: BadgeCheck, 
    tag: "Benefit 02" 
  },
  { 
    title: "Competitive Pricing", 
    description: "Strong relationships with suppliers for better rates.", 
    longDescription: "By maintaining strong relationships with suppliers and optimizing our operations, we offer competitive prices without compromising on quality. We understand the budget constraints of major infrastructure projects.",
    icon: CircleDollarSign, 
    tag: "Benefit 03" 
  },
  { 
    title: "Expert Guidance", 
    description: "Hands-on experience in the mining sector.", 
    longDescription: "Our team has hands-on experience in the mining and construction sectors across Tamilnadu. We provide practical advice to help you select the right tools and spare parts for your specific application, ensuring maximum efficiency.",
    icon: UserCog, 
    tag: "Benefit 04" 
  },
  { 
    title: "Convenient Location & Fast Service", 
    description: "Easily accessible from Chennai to Kanyakumari.", 
    longDescription: "Located in Tamilnadu, we are easily accessible to customers across the state—from Chennai to Kanyakumari, and from Coimbatore to Madurai. We also support urgent requirements with quick turnaround times.",
    icon: MapPinned, 
    tag: "Benefit 05" 
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();
  const navigate = useNavigate();

  useOutsideClick(ref, () => setActive(null));

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") setActive(null);
    }
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <section className="relative py-32 bg-white overflow-hidden text-slate-900 font-['Inter']">
      
      {/* Background Technical Elements */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '80px 80px' }}>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-50 via-transparent to-transparent pointer-events-none"></div>

      {/* EXPANDED CARD OVERLAY */}
      <AnimatePresence>
        {active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md h-full w-full z-[100]"
            />
            <div className="fixed inset-0 grid place-items-center z-[101] px-4">
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[600px] h-fit flex flex-col bg-white border border-slate-200 rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex justify-between items-center mb-8">
                    <motion.div 
                      layoutId={`icon-${active.title}-${id}`}
                      className="w-16 h-16 bg-orange-600 flex items-center justify-center rounded-2xl"
                    >
                      <active.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.button
                      onClick={() => setActive(null)}
                      className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
                    >
                      <X className="h-5 w-5 text-slate-900" />
                    </motion.button>
                  </div>

                  <motion.span 
                    layoutId={`tag-${active.title}-${id}`}
                    className="text-orange-600 font-bold text-[10px] tracking-[0.4em] uppercase mb-4 block"
                  >
                    {active.tag}
                  </motion.span>
                  
                  <motion.h3 
                    layoutId={`title-${active.title}-${id}`}
                    className="text-4xl font-black uppercase italic text-slate-900 mb-6 tracking-tighter"
                  >
                    {active.title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-500 italic text-xl leading-relaxed"
                  >
                    {active.longDescription}
                    <div className="mt-8">
                        <button 
                            onClick={() => navigate('/contactus')}
                            className="bg-orange-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20"
                        >
                            Discuss Requirements
                        </button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24 border-b border-slate-100 pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[3px] bg-orange-600"></div>
                <span className="text-orange-600 font-bold uppercase tracking-[0.5em] text-[10px]">Section 05</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
              Why Choose <br /> <span className="text-orange-600">Sri Kumar Drill Rod Works?</span>
            </h2>
            <p className="text-slate-500 text-lg lg:text-xl italic font-medium leading-relaxed max-w-3xl">
               As established drill rod dealers in Tamilnadu, we have built our reputation on trust, availability, and customer-centric service. Here is what sets us apart:
            </p>
          </div>
        </div>

        {/* Feature Grid with Layout Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl rounded-[3rem] overflow-hidden">
          {chooseUsSteps.map((step, idx) => (
            <motion.div 
              layoutId={`card-${step.title}-${id}`}
              key={step.title} 
              onClick={() => setActive(step)}
              className="group relative bg-white p-12 lg:p-16 transition-all duration-700 hover:bg-slate-50 cursor-pointer overflow-hidden"
            >
              <span className="absolute -bottom-10 -right-10 text-[15rem] font-black text-slate-900/[0.03] group-hover:text-orange-600/[0.05] transition-colors duration-700 select-none pointer-events-none uppercase italic leading-none">
                  {idx + 1}
              </span>

              <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                      <motion.div 
                        layoutId={`icon-${step.title}-${id}`}
                        className="w-16 h-16 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-2xl group-hover:border-orange-600 group-hover:bg-orange-600 transition-all duration-500"
                      >
                          <step.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-500" />
                      </motion.div>
                      <motion.span 
                        layoutId={`tag-${step.title}-${id}`}
                        className="text-orange-600 font-bold text-[10px] tracking-[0.4em] uppercase opacity-50 group-hover:opacity-100"
                      >
                        {step.tag}
                      </motion.span>
                  </div>

                  <motion.h3 
                    layoutId={`title-${step.title}-${id}`}
                    className="text-2xl font-black uppercase italic text-slate-900 mb-6 tracking-tight group-hover:text-orange-600 transition-colors leading-tight"
                  >
                      {step.title}
                  </motion.h3>
                  
                  <p className="text-slate-500 italic leading-relaxed text-base group-hover:text-slate-700 transition-colors">
                      {step.description}
                  </p>

                  <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-orange-600 transition-all">
                      <span>Expand Details</span>
                      <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Block */}
          <div 
            className="group relative bg-orange-600 p-12 lg:p-16 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-500 hover:bg-orange-700"
            onClick={() => navigate('/contactus')}
          >
            <Factory className="text-white mb-8 w-12 h-12" />
            <h3 className="text-4xl font-black uppercase italic text-white mb-6 tracking-tighter leading-none">
                Start Your <br /> Project Now.
            </h3>
            <button className="flex items-center gap-4 bg-white text-orange-600 px-8 py-4 font-bold uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl">
                Get B2B Quote
            </button>
          </div>
        </div>

        {/* Global Logistics Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-100 pt-12">
            {[
                { label: "State Coverage", val: "Tamil Nadu Wide", icon: MapPinned },
                { label: "Quality Control", val: "100% Authentic", icon: ShieldCheck },
                { label: "Stock Availability", val: "Immediate Dispatch", icon: PackageSearch },
                { label: "Technical Support", val: "Field Assistance", icon: UserCog }
            ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <item.icon className="text-orange-600 w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</span>
                    </div>
                    <p className="text-xl font-black italic uppercase tracking-tight text-slate-900">{item.val}</p>
                </div>
            ))}
        </div>
      </div>

      <div className="absolute bottom-[-5%] left-[-2%] opacity-[0.03] select-none pointer-events-none">
         <h4 className="text-[25vw] font-black uppercase text-slate-900 leading-none tracking-tighter italic">LEADERSHIP</h4>
      </div>
    </section>
  );
}