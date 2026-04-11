import React, { useEffect, useState } from "react";
import { 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  MapPin, 
  ShieldCheck,  
  Cog,
  ChevronRight,
  Maximize2,
  Zap,
  MessageCircle,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

// 🔹 UPDATED ASSETS: Pointing to the specific Piston directory
import img1 from "../../../assests/productimg/Piston/1.webp";
import img2 from "../../../assests/productimg/Piston/1.webp"; // Using available index for set
import img3 from "../../../assests/productimg/Piston/1.webp";
import img4 from "../../../assests/productimg/Piston/1.webp";
import img5 from "../../../assests/productimg/Piston/1.webp";

const productImages = [img1, img2, img3, img4, img5];

export default function CompressorPistonProductPage() {
  const [activeImg, setActiveImg] = useState(img1);
  const [slideIndex, setSlideIndex] = useState(0);

  // WhatsApp Redirection Configuration
  const whatsappNumber = "919876543210"; // Replace with your verified business number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Sri Kumar Drill Rods, I am inquiring about the Atlas Copco VT 4 Compressor Piston. Please share the B2B pricing and stock availability.`;

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    // Auto-slideshow logic for the new visual inventory section
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % productImages.length);
    }, 3500);

    return () => {
      lenis.destroy();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-white font-['Inter'] text-slate-900 overflow-x-hidden">
      {/* SEO META DATA */}
      <head>
        <title>Atlas Copco VT 4 Piston Supplier Tamil Nadu | Sri Kumar Drill Rods</title>
        <meta name="description" content="Buy Atlas Copco VT 4 Compressor Piston in Tamil Nadu. Sri Kumar Drill Rods supplies durable compressor spare parts for mining and industrial use." />
        <link rel="canonical" href="https://srikumardrillrods.com/atlas-copco-vt4-compressor-piston-tamil-nadu" />
      </head>

      {/* --- HERO SECTION: REFINED MINIMALISM --- */}
      <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-48 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
        </div>
        
        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-red-600"></div>
                <span className="text-slate-400 font-['Poppins'] font-semibold tracking-[0.4em] uppercase text-[10px]">
                  VT 4 Compressor Spares
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-['Poppins'] font-light uppercase tracking-tighter leading-[1.1] mb-10 text-slate-900">
                Piston for Atlas <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-normal italic">
                  Copco VT 4
                </span>
              </h1>

              <div className="flex items-start gap-6 mb-12">
                 <div className="pt-1">
                    <ShieldCheck className="text-red-600 w-6 h-6 stroke-[1.5px]" />
                 </div>
                 <h2 className="text-xl lg:text-2xl font-['Poppins'] font-light text-slate-700 leading-tight tracking-wide">
                    Atlas Copco VT 4 Compressor Piston Supplier in Tamil Nadu
                 </h2>
              </div>

              <div className="max-w-xl space-y-10">
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed border-l border-slate-200 pl-8 font-light italic">
                  Sri Kumar Drill Rods supplies high-quality Piston for Atlas Copco VT 4 Compressor, suitable for mining, quarry, and industrial air compression applications. We provide durable compressor spare parts at competitive B2B pricing across Tamil Nadu.
                </p>
                
                <div className="pl-8 flex items-center gap-4 text-slate-400">
                   <QuoteIcon className="w-6 h-6 opacity-20 text-red-600" />
                   <p className="italic text-base lg:text-lg leading-relaxed font-light">
                    Our compressor pistons are designed for efficient air compression, reduced wear, and stable performance under demanding working conditions.
                   </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-16">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-12 py-5 bg-green-600 text-white font-['Poppins'] font-semibold uppercase text-[10px] tracking-[0.3em] hover:bg-green-700 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                  <MessageCircle className="w-4 h-4" /> Get Price on WhatsApp
                </a>
                <Link to="/contactus" className="px-12 py-5 bg-slate-900 text-white font-['Poppins'] font-semibold uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                  Contact Sales <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* --- PREMIUM IMAGE MODULE --- */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
               <div className="relative w-full max-w-[550px] aspect-square bg-white shadow-2xl border border-slate-100 p-8 lg:p-12 group overflow-hidden">
                  <div className="absolute top-6 right-6 z-20">
                     <div className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <Maximize2 size={18} strokeWidth={1.5} />
                     </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center relative z-10 transition-transform duration-1000 group-hover:scale-105">
                     <img src={activeImg} className="max-h-full w-auto object-contain filter drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700" alt="VT 4 Compressor Piston Main" />
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[85%] bg-white/90 backdrop-blur-md border border-white/40 py-5 px-6 text-center shadow-lg">
                     <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-red-600 block mb-1">Industrial Grade</span>
                     <h3 className="text-sm font-['Poppins'] font-light uppercase text-slate-800 tracking-widest leading-none">VT 4 Piston Assembly</h3>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 1: PRODUCT OVERVIEW --- */}
      <section className="py-24 bg-white border-b border-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <h2 className="text-4xl lg:text-[3.5rem] font-['Poppins'] font-semibold uppercase italic tracking-tighter mb-8 text-slate-900 leading-[1]">
                Product <span className="text-slate-300 font-light">Overview</span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mb-12">
                The Piston is a key internal component in the Atlas Copco VT 4 Compressor. It plays a vital role in air compression by converting mechanical motion into compressed air energy. Manufactured using high-strength industrial-grade materials, this piston ensures reliable operation, improved efficiency, and extended compressor life.
              </p>
              <div className="flex items-center gap-6 p-10 bg-[#fafafa] border border-slate-100 max-w-2xl shadow-sm">
                <div className="h-10 w-[1px] bg-red-600"></div>
                <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest leading-relaxed">
                  Sri Kumar Drill Rods maintains ready stock for quick dispatch across Tamil Nadu.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
               <div className="bg-[#fafafa] p-10 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                  <Zap className="text-red-600 mb-3 w-8 h-8 stroke-[1px]" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">High Efficiency</span>
               </div>
               <div className="bg-[#fafafa] p-10 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100 mt-6">
                  <Cog className="text-slate-900 mb-3 w-8 h-8 stroke-[1px] animate-spin-slow" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Precision Alloy</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 🆕 NEW SECTION: DYNAMIC PRODUCT CATALOG SLIDER --- */}
      <section className="py-32 bg-slate-950 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none">
            <Layers size={400} className="text-white animate-spin-slow" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-4xl lg:text-[4rem] font-['Poppins'] font-light text-white uppercase italic tracking-tighter leading-none mb-8">
                 Visual <br /> <span className="text-red-600 font-semibold">Inventory</span>
               </h2>
               <p className="text-slate-500 text-lg font-light leading-relaxed mb-12 max-w-md">
                 Explore our high-precision cylinder components through our automated showcase. We prioritize visual transparency for all our industrial OES spares.
               </p>
               <div className="flex items-center gap-4">
                  <div className="text-white font-light text-5xl italic">0{slideIndex + 1}</div>
                  <div className="h-[1px] w-24 bg-red-600"></div>
                  <div className="text-slate-600 font-medium uppercase tracking-[0.4em] text-[9px]">Registry Index</div>
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="relative aspect-square md:aspect-video bg-black/40 border border-white/5 overflow-hidden rounded-xl group shadow-2xl">
                  {productImages.map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      className={`absolute inset-0 w-full h-full object-contain p-12 transition-all duration-1000 ease-in-out ${slideIndex === i ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}`}
                      alt="Piston Showcase" 
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-red-600 mb-2">Live Registry</p>
                      <h4 className="text-xl font-light tracking-widest uppercase italic">VT4 Hardware Components</h4>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: KEY FEATURES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-5xl lg:text-[4.5rem] font-['Poppins'] font-semibold uppercase italic tracking-tighter leading-none mb-4">
              Key Features
            </h2>
            <p className="text-slate-400 font-semibold uppercase tracking-[0.4em] text-[10px]">Optimized for Reliable Air Compression</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Compatible with Atlas Copco VT 4 Compressor",
              "High-strength and wear-resistant material",
              "Supports efficient air compression",
              "Precision-fit replacement part",
              "Suitable for continuous industrial use",
              "Durable performance under heavy workload",
              "Bulk supply available"
            ].map((feature) => (
              <div key={feature} className="p-10 bg-[#fafafa] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group duration-500">
                <CheckCircle2 className="text-slate-200 group-hover:text-red-600 mb-8 w-10 h-10 transition-colors stroke-[1px]" />
                <p className="font-['Poppins'] font-semibold uppercase text-xs tracking-widest leading-tight text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TECHNICAL DETAILS & GALLERY --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            {/* TECHNICAL DATA PANEL */}
            <div className="lg:w-5/12 bg-white p-10 lg:p-16 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-10 h-[1px] bg-red-600"></div>
                  <h2 className="text-4xl lg:text-[2.8rem] font-['Poppins'] font-light uppercase italic tracking-tighter leading-[1]">Technical <br /> <span className="font-semibold text-slate-300">Details</span></h2>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Compatible With", val: "Atlas Copco VT 4 Compressor", detail: "Universal Spare" },
                    { label: "Usage Type", val: "Replacement Spare Part", detail: "Internal" },
                    { label: "Application", val: "Mining, Quarry, Industrial Air", detail: "Heavy Duty" },
                    { label: "Material", val: "High-strength industrial alloy", detail: "Industrial" },
                    { label: "Availability", val: "Standard models (Custom on request)", detail: "Ready Stock" }
                  ].map((spec, i) => (
                    <div key={i} className="group flex items-center justify-between py-5 border-b border-slate-100 hover:bg-slate-50 transition-all px-2">
                      <div className="flex flex-col">
                        <span className="text-slate-400 uppercase font-semibold text-[8px] tracking-[0.3em] group-hover:text-red-600 transition-colors">{spec.label}</span>
                        <span className="font-['Poppins'] font-semibold text-lg uppercase italic text-slate-800">{spec.val}</span>
                      </div>
                      <div className="px-3 py-1 border border-slate-200 rounded-none"><span className="text-[8px] font-semibold text-slate-400 uppercase tracking-widest">{spec.detail}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* INTERACTIVE GALLERY */}
            <div className="lg:w-7/12 flex flex-col gap-6">
              <div className="flex-grow bg-white border border-slate-200 shadow-sm relative group overflow-hidden flex flex-col items-center justify-center p-12">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[18rem] font-['Poppins'] font-semibold pointer-events-none select-none text-red-600 uppercase">PISTON</div>
                 <img src={activeImg} className="max-h-[350px] w-auto object-contain transition-all duration-1000 group-hover:scale-105 shadow-2xl" alt="Compressor Piston Asset" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                 {productImages.map((img, index) => (
                    <button 
                       key={index} 
                       onClick={() => setActiveImg(img)} 
                       className={`aspect-square bg-white border transition-all duration-300 overflow-hidden p-2 ${activeImg === img ? 'border-red-600 shadow-xl scale-95' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
                    >
                       <img src={img} className="w-full h-full object-contain" alt="thumbnail" />
                    </button>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: APPLICATIONS --- */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-[4rem] font-['Poppins'] font-light uppercase italic tracking-tighter mb-20 leading-[0.8]">
            Industry <span className="text-red-600 font-semibold">Applications</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {["Mining Operations", "Quarry Drilling Sites", "Industrial Air Compressor Systems", "Construction & Infrastructure Projects"].map((app, i) => (
              <div key={app} className="group p-10 bg-[#fafafa] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <span className="font-['Poppins'] font-light text-6xl text-slate-100 group-hover:text-red-600/10 transition-colors leading-none block mb-6">0{i+1}</span>
                <p className="font-['Poppins'] font-semibold uppercase text-xs tracking-widest leading-tight text-slate-700">{app}</p>
              </div>
            ))}
          </div>
          <p className="mt-20 text-center text-slate-400 italic text-lg font-light tracking-wide">Designed for reliable performance in Tamil Nadu’s industrial environments.</p>
        </div>
      </section>

      {/* --- SECTION 5: WHY CHOOSE US --- */}
      <section className="py-24 bg-[#fafafa] border-y border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-[3.5rem] font-['Poppins'] font-semibold uppercase italic tracking-tighter mb-24 leading-none">
            Why Choose Sri Kumar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-200 border border-slate-200 shadow-xl">
            {[
              "Trusted Compressor Spare Parts Supplier",
              "Competitive Bulk Pricing",
              "Ready Stock Availability",
              "Quick Delivery Support",
              "Reliable B2B Service"
            ].map((reason) => (
              <div key={reason} className="bg-white p-16 flex flex-col items-center group transition-all text-center">
                <Award className="w-10 h-10 text-slate-200 group-hover:text-red-600 transition-colors mb-8 stroke-[1px]" />
                <p className="font-['Poppins'] font-semibold uppercase text-[10px] tracking-[0.3em] text-slate-800">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: LOCATIONS --- */}
      <section className="py-24 bg-white text-center border-b border-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-4xl lg:text-[2.8rem] font-['Poppins'] font-light uppercase italic mb-16 tracking-tighter text-slate-900 text-center">Supplying Across <span className="text-red-600">Tamil Nadu</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-4 text-center">
            {["Coimbatore", "Salem", "Chennai", "Madurai", "Trichy", "Erode", "Namakkal", "Tirunelveli", "Hosur"].map((city) => (
              <div key={city} className="py-8 border border-slate-100 flex flex-col items-center gap-3 group hover:border-red-600 transition-all bg-[#fafafa]">
                 <MapPin className="w-4 h-4 text-slate-300 group-hover:text-red-600 stroke-[1px]" /> 
                 <span className="font-['Poppins'] font-semibold text-[9px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900">{city}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: CTA --- */}
      <section className="py-40 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-slate-900 opacity-50"></div>
        <div className="max-w-screen-2xl mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-6xl lg:text-[5rem] font-['Poppins'] font-light uppercase italic tracking-tighter mb-8 leading-none">Bulk Orders <br /> <span className="font-semibold text-red-600">& Enquiry</span></h2>
          <div className="w-20 h-[1px] bg-red-600 mx-auto mb-16"></div>
          <p className="text-2xl font-['Poppins'] font-light mb-10 uppercase tracking-[0.4em] opacity-60 italic">Looking for a reliable Atlas Copco VT 4 Compressor Piston Supplier?</p>
          
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
             <a href={whatsappLink} target="_blank" rel="noreferrer" className="w-full sm:w-auto px-16 py-8 bg-white text-slate-900 font-['Poppins'] font-semibold uppercase text-[10px] tracking-[0.4em] hover:bg-green-600 hover:text-white transition-all shadow-2xl flex items-center gap-6 active:scale-95">
                <MessageCircle size={20} /> Get Pricing on WhatsApp
             </a>
             <Link to="/contactus" className="w-full sm:w-auto px-16 py-8 border border-white/20 text-white font-['Poppins'] font-semibold uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all flex items-center gap-6">
                Contact Technical Team <ChevronRight size={20} />
             </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
      `}</style>
    </div>
  );
}

function QuoteIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91242 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C10.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 7.34315 1.36015 6 3.017 6H9.017C10.6739 6 12.017 7.34315 12.017 9V15C12.017 18.3137 9.33072 21 6.017 21H4.017Z" />
    </svg>
  );
}