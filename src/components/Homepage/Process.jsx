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
    <section className="relative py-16 md:py-32 bg-white overflow-hidden text-slate-900 font-['Inter']">
      
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
                className="w-full max-w-[600px] h-fit flex flex-col bg-white border border-slate-200 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex justify-between items-center mb-6 md:mb-8">
                    <motion.div 
                      layoutId={`icon-${active.title}-${id}`}
                      className="w-12 h-12 md:w-16 md:h-16 bg-orange-600 flex items-center justify-center rounded-2xl"
                    >
                      <active.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
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
                    className="text-orange-600 font-semibold text-[10px] tracking-[0.4em] uppercase mb-4 block"
                  >
                    {active.tag}
                  </motion.span>
                  
                  <motion.h3 
                    layoutId={`title-${active.title}-${id}`}
                    className="text-2xl md:text-4xl font-bold uppercase italic text-slate-900 mb-6 tracking-tighter"
                  >
                    {active.title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-500 italic text-base md:text-xl leading-relaxed"
                  >
                    {active.longDescription}
                    <div className="mt-8 relative">
                        {/* 🔹 DOODLE: "Action Required" */}
                        <div className="absolute -top-10 right-0 font-['Caveat'] text-orange-500 text-2xl -rotate-6 hidden md:block">
                           Let's talk business! ↴
                        </div>
                        <button 
                            onClick={() => navigate('/contactus')}
                            className="w-full md:w-auto bg-orange-600 text-white px-8 py-4 font-semibold uppercase tracking-widest text-xs hover:bg-orange-700 transition-colors shadow-lg shadow-orange-600/20"
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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 md:mb-24 border-b border-slate-100 pb-12 md:pb-16 relative">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[3px] bg-orange-600"></div>
                <span className="text-orange-600 font-semibold uppercase tracking-[0.5em] text-[10px]">Section 05</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase italic tracking-tighter leading-[1.1] md:leading-[0.9] mb-8">
              Why Choose <br /> <span className="text-orange-600">Sri Kumar Drill Rod Works?</span>
            </h2>
            <p className="text-slate-500 text-base md:text-lg lg:text-xl italic font-medium leading-relaxed max-w-3xl">
               As established drill rod dealers in Tamilnadu, we have built our reputation on trust, availability, and customer-centric service. Here is what sets us apart:
            </p>
          </div>
          {/* 🔹 DOODLE: "Tamil Nadu's Best" */}
          <div className="font-['Caveat'] text-orange-400 text-3xl md:text-4xl -rotate-12 absolute -top-4 right-10 hidden lg:block select-none">
            #1 in Tamil Nadu
          </div>
        </div>

        {/* Feature Grid with Layout Transitions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden">
          {chooseUsSteps.map((step, idx) => (
            <motion.div 
              layoutId={`card-${step.title}-${id}`}
              key={step.title} 
              onClick={() => setActive(step)}
              className="group relative bg-white p-10 md:p-12 lg:p-16 transition-all duration-700 hover:bg-slate-50 cursor-pointer overflow-hidden"
            >
              <span className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 text-[8rem] md:text-[15rem] font-bold text-slate-900/[0.03] group-hover:text-orange-600/[0.05] transition-colors duration-700 select-none pointer-events-none uppercase italic leading-none">
                  {idx + 1}
              </span>

              <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8 md:mb-12">
                      <motion.div 
                        layoutId={`icon-${step.title}-${id}`}
                        className="w-14 h-14 md:w-16 md:h-16 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-2xl group-hover:border-orange-600 group-hover:bg-orange-600 transition-all duration-500"
                      >
                          <step.icon className="w-6 h-6 md:w-8 md:h-8 text-orange-600 group-hover:text-white transition-colors duration-500" />
                      </motion.div>
                      <motion.span 
                        layoutId={`tag-${step.title}-${id}`}
                        className="text-orange-600 font-semibold text-[10px] tracking-[0.4em] uppercase opacity-50 group-hover:opacity-100"
                      >
                        {step.tag}
                      </motion.span>
                  </div>

                  <motion.h3 
                    layoutId={`title-${step.title}-${id}`}
                    className="text-xl md:text-2xl font-bold uppercase italic text-slate-900 mb-6 tracking-tight group-hover:text-orange-600 transition-colors leading-tight"
                  >
                      {step.title}
                  </motion.h3>
                  
                  <p className="text-slate-500 italic leading-relaxed text-sm md:text-base group-hover:text-slate-700 transition-colors relative">
                      {step.description}
                      {/* 🔹 DOODLE Underline for index 4 and 5 */}
                      {(idx === 3 || idx === 4) && (
                        <svg className="absolute -bottom-1 left-0 w-24 text-orange-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="6" />
                        </svg>
                      )}
                  </p>

                  <div className="mt-8 md:mt-12 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-widest text-slate-300 group-hover:text-orange-600 transition-all">
                      <span>Expand Details</span>
                      <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Block */}
          <div 
            className="group relative bg-orange-600 p-10 md:p-12 lg:p-16 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-500 hover:bg-orange-700"
            onClick={() => navigate('/contactus')}
          >
            {/* 🔹 DOODLE: Circle around Icon */}
            <div className="relative">
              <Factory className="text-white mb-6 md:mb-8 w-10 h-10 md:w-12 md:h-12 relative z-10" />
              <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10,5" />
              </svg>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold uppercase italic text-white mb-6 tracking-tighter leading-none">
                Start Your <br /> Project Now.
            </h3>
            
            <div className="relative">
              <button className="flex items-center gap-4 bg-white text-orange-600 px-6 md:px-8 py-3 md:py-4 font-semibold uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl">
                  Get B2B Quote
              </button>
              {/* 🔹 DOODLE: "Fastest Response" */}
              <div className="absolute -right-16 top-0 font-['Caveat'] text-white text-xl rotate-12 hidden lg:block opacity-70">
                Quick Reply!
              </div>
            </div>
          </div>
        </div>

        {/* Global Logistics Stats */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 border-t border-slate-100 pt-12">
            {[
                { label: "State Coverage", val: "Tamil Nadu Wide", icon: MapPinned, doodle: "Statewide" },
                { label: "Quality Control", val: "100% Authentic", icon: ShieldCheck, doodle: "Verified" },
                { label: "Stock Availability", val: "Immediate Dispatch", icon: PackageSearch, doodle: "Ready" },
                { label: "Technical Support", val: "Field Assistance", icon: UserCog, doodle: "Expert" }
            ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2 relative">
                    <div className="flex items-center gap-3">
                        <item.icon className="text-orange-600 w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-[8px] md:text-[10px] font-semibold uppercase tracking-widest text-slate-400">{item.label}</span>
                    </div>
                    <p className="text-base md:text-xl font-bold italic uppercase tracking-tight text-slate-900">{item.val}</p>
                    {/* 🔹 Subtle Doodle Text in background */}
                    <div className="absolute -top-4 left-0 font-['Caveat'] text-orange-500/10 text-4xl select-none pointer-events-none uppercase">
                      {item.doodle}
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="absolute bottom-[-2%] md:bottom-[-5%] left-[-2%] opacity-[0.03] select-none pointer-events-none">
         <h4 className="text-[20vw] md:text-[25vw] font-bold uppercase text-slate-900 leading-none tracking-tighter italic">LEADERSHIP</h4>
      </div>

      {/* 🔹 IMPORTING HANDWRITTEN FONT FOR DOODLES */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap');
      `}</style>
    </section>
  );
}

