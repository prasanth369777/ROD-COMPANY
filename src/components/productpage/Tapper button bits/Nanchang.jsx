import React, { useEffect, useState } from "react";
import { 
  Award, 
  CheckCircle2, 
  Phone, 
  ArrowRight, 
  MapPin, 
  ShieldCheck,  
  ChevronRight,
  Target, 
  Maximize2,
  Zap
} from "lucide-react";
import Lenis from "@studio-freight/lenis";

// Importing Pulakana assets
import img1 from "../../../assests/productimg/Nanchang +/1.webp";
import img2 from "../../../assests/productimg/Nanchang +/2.webp";
import img3 from "../../../assests/productimg/Nanchang +/3.webp";
import img4 from "../../../assests/productimg/Nanchang +/4.webp";
import img5 from "../../../assests/productimg/Nanchang +/5.webp";

const productImages = [img1, img2, img3, img4, img5];

export default function NanchangProductPage() {
  const [activeImg, setActiveImg] = useState(img1);

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-white font-['Inter'] text-slate-900 overflow-x-hidden">
      {/* SEO META DATA */}
      <head>
        <title>Nanchang Tapper Button Bits Supplier Tamil Nadu | Sri Kumar Drill Rods</title>
        <meta name="description" content="Buy Nanchang Tapper Button Bits in Tamil Nadu at competitive prices. Trusted B2B supplier for mining, quarrying and borewell drilling tools." />
        <link rel="canonical" href="https://srikumardrillrods.com/nanchang-plus-tapper-button-bits-tamil-nadu" />
      </head>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-48 overflow-hidden bg-[#fafafa]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }}>
        </div>
        
        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] w-12 bg-red-600"></div>
                <span className="text-slate-400 font-['Poppins'] font-bold tracking-[0.4em] uppercase text-[10px]">
                  Nanchang+ Series Distribution
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-['Poppins'] font-black uppercase tracking-tighter leading-[1] mb-10 text-slate-900">
                Nanchang+ Tapper <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Button Bits
                </span>
              </h1>

              <div className="flex items-start gap-6 mb-12">
                 <div className="pt-1">
                    <ShieldCheck className="text-red-600 w-6 h-6" />
                 </div>
                 <h2 className="text-xl lg:text-2xl font-['Poppins'] font-medium text-slate-700 leading-tight">
                   Durable & Cost-Effective Tapper Button Bits Supplier in Tamil Nadu
                 </h2>
              </div>

              <div className="max-w-xl space-y-10">
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed border-l-2 border-slate-200 pl-8 font-medium italic">
                  Sri Kumar Drill Rods supplies high-quality Nanchang+ Tapper Button Bits designed for efficient and consistent rock drilling performance. As a reliable Tapper Button Bits supplier in Tamil Nadu, we provide strong, wear-resistant drilling solutions for mining contractors, quarry operators, and borewell drilling companies.
                </p>
                <div className="pl-8 flex items-center gap-4 text-slate-400">
                   <QuoteIcon className="w-6 h-6 opacity-20 text-red-600" />
                   <p className="italic text-base lg:text-lg leading-relaxed font-medium">
                    The Nanchang+ model is known for its durability, stable drilling accuracy, and reliable performance in hard and medium-hard rock formations.
                   </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-16">
                <button className="px-12 py-5 bg-slate-900 text-white font-['Poppins'] font-bold uppercase text-[11px] tracking-[0.2em] hover:bg-red-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                  Bulk Enquiry <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* --- PREMIUM IMAGE MODULE --- */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
               <div className="relative w-full max-w-[550px] aspect-square bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 p-8 lg:p-12 group overflow-hidden">
                  <div className="absolute top-6 right-6 z-20">
                     <div className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <Maximize2 size={18} />
                     </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center relative z-10 transition-transform duration-700 group-hover:scale-105">
                     <img src={activeImg} className="max-h-full w-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.1)]" alt="Nanchang+ Main" />
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[80%] bg-white/70 backdrop-blur-md border border-white/40 py-4 px-6 text-center shadow-lg">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 block mb-1">Heavy Duty Series</span>
                     <h3 className="text-sm font-['Poppins'] font-bold uppercase text-slate-800 tracking-tighter italic leading-none">Nanchang+ Tapper Bit</h3>
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
              <h2 className="text-4xl lg:text-[4rem] font-['Poppins'] font-black uppercase italic tracking-tighter mb-8 text-slate-900 leading-[1]">
                Product <span className="text-slate-300">Overview</span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-500 leading-relaxed font-normal max-w-3xl mb-12">
                Nanchang+ Tapper Button Bits are engineered using high-grade alloy steel combined with premium tungsten carbide button inserts. These bits are designed to deliver improved impact energy transfer and extended operational life.
              </p>
              <div className="flex items-center gap-6 p-8 bg-[#fafafa] border border-slate-100 max-w-2xl">
                <div className="h-12 w-1 bg-red-600"></div>
                <p className="text-slate-600 text-lg font-bold uppercase tracking-tight leading-tight">
                  Sri Kumar Drill Rods ensures ready stock availability and competitive bulk pricing across Tamil Nadu.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
               <div className="bg-[#fafafa] p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                  <Zap className="text-red-600 mb-3 w-8 h-8" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">High Impact</span>
               </div>
               <div className="bg-[#fafafa] p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100 mt-6">
                  <Target className="text-slate-900 mb-3 w-8 h-8" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Precision</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: KEY FEATURES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-5xl lg:text-[4.5rem] font-['Poppins'] font-black uppercase italic tracking-tighter leading-none mb-4">
              Key Features
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[10px]">Optimized for Hard Rock Performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "High-strength alloy steel body",
              "Premium tungsten carbide buttons",
              "Excellent penetration rate",
              "Strong resistance to impact and abrasion",
              "Accurate tapper angle compatibility",
              "Reduced drilling vibration",
              "Longer service life",
              "Suitable for tough rock formations"
            ].map((feature) => (
              <div key={feature} className="p-10 bg-white border border-slate-100 hover:border-red-500 hover:shadow-2xl transition-all group duration-500">
                <CheckCircle2 className="text-slate-200 group-hover:text-red-600 mb-8 w-10 h-10 transition-colors" />
                <p className="font-['Poppins'] font-bold uppercase text-lg leading-tight text-slate-800 tracking-tighter">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TECHNICAL SPECIFICATIONS & GALLERY --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            
            <div className="lg:w-5/12 bg-white p-10 lg:p-16 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-10 h-[2px] bg-red-600"></div>
                  <h2 className="text-4xl lg:text-[3rem] font-['Poppins'] font-black uppercase italic tracking-tighter leading-[0.9]">Technical <br /> Specifications</h2>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Diameter Range", val: "28mm – 42mm", detail: "Custom Available" },
                    { label: "Tapper Angles", val: "7°, 11°, 12°", detail: "Angles" },
                    { label: "Button Type", val: "Spherical / Ballistic", detail: "Tungsten" },
                    { label: "Drilling Type", val: "Top Hammer Drilling", detail: "Hammer" },
                    { label: "Compatible With", val: "Standard Tapper Drill Rods", detail: "Fit" },
                    { label: "Application", val: "Mining, Quarry, Borewell", detail: "Industry" }
                  ].map((spec, i) => (
                    <div key={i} className="group flex items-center justify-between py-5 border-b border-slate-100 hover:bg-slate-50 transition-all px-2">
                      <div className="flex flex-col">
                        <span className="text-slate-400 uppercase font-black text-[8px] tracking-[0.3em]">{spec.label}</span>
                        <span className="font-['Poppins'] font-bold text-xl uppercase italic text-slate-800">{spec.val}</span>
                      </div>
                      <div className="px-3 py-1 border border-slate-200 rounded-none"><span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{spec.detail}</span></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 p-6 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest text-center">
                 Bulk and dealer supply available across Tamil Nadu.
              </div>
            </div>

            <div className="lg:w-7/12 flex flex-col gap-6">
              <div className="flex-grow bg-white border border-slate-200 shadow-sm relative group overflow-hidden flex flex-col items-center justify-center p-12">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] text-[18rem] font-['Poppins'] font-black pointer-events-none select-none">NANC</div>
                 <img src={activeImg} className="max-h-[350px] w-auto object-contain transition-all duration-700 group-hover:translate-y-[-20px]" alt="Active View" />
              </div>

              <div className="grid grid-cols-5 gap-4">
                 {productImages.map((img, index) => (
                    <button 
                       key={index} 
                       onClick={() => setActiveImg(img)} 
                       className={`aspect-square p-4 bg-white border transition-all duration-300 ${activeImg === img ? 'border-red-600 shadow-xl' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
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
          <h2 className="text-5xl lg:text-[4rem] font-['Poppins'] font-black uppercase italic tracking-tighter mb-20 leading-[0.8]">
            Industry <span className="text-red-600">Applications</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Granite Quarry Drilling",
              "Blue Metal Quarry Operations",
              "Mining Projects",
              "Borewell Drilling",
              "Infrastructure & Road Construction",
              "Underground Rock Drilling"
            ].map((app, i) => (
              <div key={app} className="group p-10 bg-[#fafafa] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <span className="font-['Poppins'] font-black text-6xl text-slate-100 group-hover:text-red-600/10 transition-colors leading-none block mb-6">0{i+1}</span>
                <p className="font-['Poppins'] font-black uppercase text-base tracking-tighter leading-tight text-slate-800">{app}</p>
              </div>
            ))}
          </div>
          <p className="mt-20 text-center text-slate-400 italic text-lg font-medium">Suitable for demanding geological conditions found in Tamil Nadu quarry and mining sectors.</p>
        </div>
      </section>

      {/* --- SECTION 5: WHY CHOOSE US --- */}
      <section className="py-24 bg-[#fafafa] border-y border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-[4rem] font-['Poppins'] font-black uppercase italic tracking-tighter mb-24 leading-none">
            Why Choose Sri Kumar Drill Rods?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-xl">
            {[
              "Trusted Drill Tools Supplier in Tamil Nadu",
              "Competitive Bulk Pricing",
              "Consistent Quality Assurance",
              "Quick Dispatch & Delivery Support",
              "Reliable B2B Service",
              "Strong Market Experience"
            ].map((reason) => (
              <div key={reason} className="bg-white p-16 flex flex-col items-center group transition-all">
                <Award className="w-10 h-10 text-slate-200 group-hover:text-red-600 transition-colors mb-8" />
                <p className="font-['Poppins'] font-bold uppercase text-[11px] tracking-[0.2em] text-slate-800 leading-snug">{reason}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-slate-400 italic text-xl">We provide cost-effective drilling tools that help improve productivity and reduce downtime.</p>
        </div>
      </section>

      {/* --- SECTION 6: LOCATIONS --- */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-4xl lg:text-[3rem] font-['Poppins'] font-black uppercase italic mb-16 tracking-tighter text-slate-900">Serving Across <span className="text-red-600">Tamil Nadu</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-4 text-center">
            {["Coimbatore", "Salem", "Chennai", "Madurai", "Trichy", "Erode", "Namakkal", "Tirunelveli", "Hosur"].map((city) => (
              <div key={city} className="py-8 border border-slate-100 flex flex-col items-center gap-3 group hover:border-red-600 transition-all bg-[#fafafa]">
                 <MapPin className="w-4 h-4 text-slate-300 group-hover:text-red-600" /> 
                 <span className="font-['Poppins'] font-bold text-[10px] uppercase tracking-widest text-slate-500 group-hover:text-slate-900">{city}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-400 font-bold uppercase tracking-widest text-[10px]">All Major Mining & Quarry Regions</p>
        </div>
      </section>

      {/* --- SECTION 7: CTA --- */}
      <section className="py-40 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-slate-900 opacity-50"></div>
        <div className="max-w-screen-2xl mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-6xl lg:text-[5.5rem] font-['Poppins'] font-black uppercase italic tracking-tighter mb-10 leading-none">Bulk Orders <br /> & Enquiry</h2>
          <div className="w-20 h-[1px] bg-red-600 mx-auto mb-16"></div>
          <p className="text-2xl font-['Poppins'] font-bold mb-10 uppercase tracking-[0.4em] opacity-60 italic">Looking for a reliable Nanchang+ Tapper Button Bits Supplier?</p>
          <p className="text-xl mb-12 italic opacity-80">Contact Sri Kumar Drill Rods today for pricing and bulk order support.</p>
          
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
             <button className="w-full sm:w-auto px-20 py-8 bg-white text-slate-900 font-['Poppins'] font-black uppercase text-[11px] tracking-[0.4em] hover:bg-red-600 hover:text-white transition-all shadow-2xl flex items-center gap-6 active:scale-95">
                <Phone size={20} /> Call Technical Team
             </button>
             <button className="w-full sm:w-auto px-20 py-8 border border-white/20 text-white font-['Poppins'] font-black uppercase text-[11px] tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all flex items-center gap-6">
                Send Enquiry <ChevronRight size={20} />
             </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
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