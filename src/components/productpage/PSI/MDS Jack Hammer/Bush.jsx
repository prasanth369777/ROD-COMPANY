import React, { useEffect, useState } from "react";
import { 
  ShieldCheck, 
  ChevronRight,
  MessageCircle,
  PhoneCall,
 
  Maximize2,
  MapPin,
  Filter,
  Settings
} from "lucide-react";

import Lenis from "@studio-freight/lenis";

// Importing Assets from the LT directory as requested
import img1 from "../../../../assests/productimg/Bush/1.webp";
import img2 from "../../../../assests/productimg/Bush/2.webp";
import img3 from "../../../../assests/productimg/Bush/3.webp";
import img4 from "../../../../assests/productimg/Bush/4.webp";
import img5 from "../../../../assests/productimg/Bush/5.webp";

const productImages = [img1, img2, img3, img4, img5];

export default function BushProductPage() {
  const [activeImg, setActiveImg] = useState(img1);
  const [slideIndex, setSlideIndex] = useState(0);


  // B2B Contact Handlers
  const whatsappNumber = "919443439096";
  const phoneNumber = "+919994468589";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Sri Kumar Drill Rods, I am inquiring about the PSI/MDS Jack Hammer Bush. Please provide B2B pricing and delivery timelines.`;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    // Slideshow update logic
    const interval = setInterval(() => {
      setActiveImg((prev) => {
        const currentIndex = productImages.indexOf(prev);
        return productImages[(currentIndex + 1) % productImages.length];
      });
      setSlideIndex((prev) => (prev + 1) % productImages.length);
    }, 3500);

    return () => {
      lenis.destroy();
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="bg-white font-['Inter'] text-slate-900 overflow-x-hidden antialiased">
      {/* SEO META DATA */}
      <head>
        <title>PSI MDS Jack Hammer Bush Supplier Tamil Nadu | Sri Kumar Drill Rods</title>
        <meta name="description" content="Buy PSI and MDS Jack Hammer Bush in Tamil Nadu at competitive prices. Trusted B2B supplier of jack hammer spare parts for mining and construction use." />
        <link rel="canonical" href="https://srikumardrillrods.com/psi-mds-jack-hammer-bush-tamil-nadu" />
      </head>

      {/* --- HERO SECTION: REFINED MINIMALISM --- */}
      <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-48 overflow-hidden bg-[#fafafa]">
        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] w-12 bg-orange-600"></div>
                <span className="text-slate-400 font-['Poppins'] font-medium tracking-[0.4em] uppercase text-[10px]">
                  Precision Spare Parts
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-['Poppins'] font-bold uppercase tracking-tighter leading-[1] mb-10 text-slate-900">
                Bush for PSI / <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-medium">
                  MDS Jack Hammer
                </span>
              </h1>

              <div className="flex items-start gap-6 mb-12">
                 <div className="pt-1">
                    <ShieldCheck className="text-orange-600 w-6 h-6 stroke-[1px]" />
                 </div>
                 <h2 className="text-xl lg:text-2xl font-['Poppins'] font-medium text-slate-700 leading-tight">
                    Reliable Jack Hammer Bush Supplier in Tamil Nadu
                 </h2>
              </div>

              <div className="max-w-xl space-y-10">
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed border-l-2 border-slate-200 pl-8 font-light italic">
                  Sri Kumar Drill Rods supplies high-quality Bush for PSI / MDS Jack Hammers, designed to ensure smooth operation and extended equipment life. As a trusted Jack Hammer spare parts supplier in Tamil Nadu, we provide durable and precision-fit components at competitive B2B pricing.
                </p>
                
                <div className="pl-8 flex items-center gap-4 text-slate-400">
                   <p className="italic text-base lg:text-lg leading-relaxed font-light">
                    Our PSI/MDS Jack Hammer Bush is suitable for heavy-duty drilling applications in mining, quarrying, and construction environments.
                   </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-16">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="px-12 py-5 bg-green-600 text-white font-['Poppins'] font-medium uppercase text-[11px] tracking-[0.2em] hover:bg-green-700 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                  <MessageCircle size={16} /> Get Price on WhatsApp
                </a>
                <button onClick={handleCall} className="px-12 py-5 bg-slate-900 text-white font-['Poppins'] font-medium uppercase text-[11px] tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3">
                  Call Support <PhoneCall size={16} />
                </button>
              </div>
            </div>

            {/* --- PREMIUM IMAGE MODULE --- */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
               <div className="relative w-full max-w-[550px] aspect-square bg-white shadow-2xl border border-slate-100 p-8 lg:p-12 group overflow-hidden">
                  <div className="absolute top-6 right-6 z-20">
                     <div className="p-3 bg-orange-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <Maximize2 size={18} />
                     </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center relative z-10 transition-transform duration-700 group-hover:scale-105">
                     <img src={activeImg} className="max-h-full w-auto object-contain filter drop-shadow-xl" alt="PSI MDS Bush Main" />
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[80%] bg-white/70 backdrop-blur-md border border-white/40 py-4 px-6 text-center shadow-lg">
                     <span className="text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 block mb-1">Genuine Spares</span>
                     <h3 className="text-sm font-['Poppins'] font-bold uppercase text-slate-800 tracking-tighter italic leading-none">MDS / PSI Series Bush</h3>
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
              <h2 className="text-4xl lg:text-[4rem] font-['Poppins'] font-medium uppercase italic tracking-tighter mb-8 text-slate-900 leading-[1]">
                Product <span className="font-light">Overview</span>
              </h2>
              <div className="space-y-6 text-xl lg:text-2xl text-slate-500 leading-relaxed font-normal max-w-3xl mb-12">
                <p>
                  The Bush is an essential internal component in PSI and MDS Jack Hammers, supporting stable alignment and reducing wear between moving parts. Manufactured using high-grade materials, this bush ensures proper impact transfer and minimizes equipment downtime.
                </p>
              </div>
              <div className="flex items-center gap-6 p-8 bg-[#fafafa] border border-slate-100 max-w-2xl shadow-sm">
                <div className="h-12 w-1.5 bg-orange-600"></div>
                <p className="text-slate-600 text-lg font-medium tracking-tight leading-tight">
                  Sri Kumar Drill Rods maintains ready stock availability for fast supply across Tamil Nadu.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
               <div className="bg-[#fafafa] p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                  <Settings className="text-orange-600 mb-3 w-8 h-8 stroke-[1px]" />
                  <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 mt-2">Precision Fit</span>
               </div>
               <div className="bg-[#fafafa] p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100 mt-6">
                  <Filter className="text-slate-900 mb-3 w-8 h-8 stroke-[1px]" />
                  <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 mt-2">High Grade</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW SECTION: DYNAMIC PRODUCT CATALOG SLIDER --- */}
      <section className="py-32 bg-slate-950 overflow-hidden relative">
        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <h2 className="text-4xl lg:text-[4rem] font-['Poppins'] font-light text-white uppercase italic tracking-tighter leading-none mb-8">
                 Visual <br /> <span className="text-orange-600 font-semibold">Showcase</span>
               </h2>
               <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 max-w-md">
                 Explore our high-precision cylinder components through our automated showcase. We prioritize visual transparency for all our industrial OES spares.
               </p>
               <div className="flex items-center gap-4">
                  <div className="text-white font-light text-5xl italic">0{slideIndex + 1}</div>
                  <div className="h-[1px] w-24 bg-orange-600"></div>
                  <div className="text-slate-500 font-semibold uppercase tracking-[0.4em] text-[9px]">Registry Index</div>
               </div>
            </div>
            <div className="lg:w-1/2 w-full">
               <div className="relative aspect-square md:aspect-video bg-black/40 border border-white/5 overflow-hidden rounded-xl group shadow-2xl">
                  {productImages.map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      className={`absolute inset-0 w-full h-full object-contain p-12 transition-all duration-1000 ease-in-out ${slideIndex === i ? 'opacity-100 scale-105' : 'opacity-0 scale-95'}`}
                      alt="Catalog Showcase" 
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 text-white">
                      <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-orange-600 mb-2">Live Registry</p>
                      <h4 className="text-xl font-light tracking-widest uppercase italic">Hardware Components</h4>
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
            <p className="text-slate-400 font-medium uppercase tracking-[0.4em] text-[10px]">Optimized for Spare Performance</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Precision-fit design for PSI / MDS Jack Hammers",
              "High-strength and wear-resistant material",
              "Supports smooth hammer operation",
              "Reduces vibration and misalignment",
              "Improves equipment lifespan",
              "Reliable performance under heavy-duty usage",
              "Available for bulk supply"
            ].map((feature, idx) => (
              <div key={idx} className="p-10 bg-white border border-slate-100 hover:border-orange-600 hover:shadow-2xl transition-all group duration-500">
                <ChevronRight className="text-slate-300 group-hover:text-orange-600 mb-8 w-10 h-10 transition-colors stroke-[1px]" />
                <p className="font-['Poppins'] font-medium uppercase text-xs tracking-tight text-slate-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TECHNICAL DETAILS & GALLERY --- */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            <div className="lg:w-5/12 bg-white p-10 lg:p-16 border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-12">
                  <div className="w-10 h-[2px] bg-orange-600"></div>
                  <h2 className="text-4xl lg:text-[3rem] font-['Poppins'] font-black uppercase italic tracking-tighter leading-[0.9]">Technical <br /> <span className="font-light text-slate-300">Details</span></h2>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Compatible With", val: "PSI Jack Hammer / MDS Jack Hammer", detail: "Universal Fit" },
                    { label: "Application", val: "Rock drilling, Quarrying, Mining", detail: "Heavy Duty" },
                    { label: "Usage Type", val: "Replacement spare part", detail: "OEM Standard" },
                    { label: "Material", val: "High-strength industrial grade steel", detail: "Forged" },
                    { label: "Availability", val: "Standard sizes (Custom on request)", detail: "Ready Stock" }
                  ].map((spec, i) => (
                    <div key={i} className="group flex items-center justify-between py-5 border-b border-slate-100 hover:bg-slate-50 transition-all px-2">
                      <div className="flex flex-col">
                        <span className="text-slate-400 uppercase font-semibold text-[8px] tracking-[0.3em] group-hover:text-orange-600 transition-colors">{spec.label}</span>
                        <span className="font-['Poppins'] font-semibold text-lg uppercase italic text-slate-800">{spec.val}</span>
                      </div>
                      <div className="px-3 py-1 border border-slate-200 rounded-none"><span className="text-[8px] font-semibold text-slate-400 uppercase tracking-widest">{spec.detail}</span></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 p-6 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest text-center">
                Bulk quantity supply available for dealers and contractors.
              </div>
            </div>

            <div className="lg:w-7/12 flex flex-col gap-6">
              <div className="flex-grow bg-white border border-slate-200 shadow-sm relative group overflow-hidden flex flex-col items-center justify-center p-12">
                 <img src={activeImg} className="max-h-[350px] w-auto object-contain transition-all duration-700 group-hover:scale-105" alt="Bush Asset" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                 {productImages.map((img, index) => (
                    <button 
                       key={index} 
                       onClick={() => setActiveImg(img)} 
                       className={`aspect-square p-4 bg-white border transition-all duration-300 ${activeImg === img ? 'border-orange-600 shadow-xl scale-95' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
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
          <h2 className="text-5xl lg:text-[4rem] font-['Poppins'] font-semibold uppercase italic tracking-tighter mb-20 leading-[0.8]">
            Spare <span className="text-orange-600 font-semibold">Applications</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {["Granite Quarry Operations", "Blue Metal Quarry Drilling", "Mining Projects", "Road & Infrastructure Works", "Construction Rock Breaking"].map((app, i) => (
              <div key={app} className="group p-10 bg-[#fafafa] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <span className="font-['Poppins'] font-light text-6xl text-slate-100 group-hover:text-orange-600/10 transition-colors leading-none block mb-6">0{i+1}</span>
                <p className="font-['Poppins'] font-medium uppercase text-xs tracking-tight text-slate-700">{app}</p>
              </div>
            ))}
          </div>
          <p className="mt-20 text-center text-slate-400 italic text-lg font-medium">Designed to withstand tough working conditions in Tamil Nadu.</p>
        </div>
      </section>

      {/* --- SECTION 5: WHY CHOOSE US --- */}
      <section className="py-24 bg-[#fafafa] border-y border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-[3.5rem] font-['Poppins'] font-semibold uppercase italic tracking-tighter mb-24 leading-none">
            Why Sri Kumar Drill Rods?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-xl">
            {[
              "Trusted Jack Hammer Spare Parts Supplier in Tamil Nadu",
              "Competitive Bulk Pricing",
              "Ready Stock & Quick Delivery",
              "Quality-Assured Products",
              "Reliable B2B Support",
              "Strong Network in Mining & Quarry Sector"
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-16 flex flex-col items-center group transition-all">
                <ShieldCheck className="w-10 h-10 text-slate-200 group-hover:text-orange-600 transition-colors mb-8 stroke-[1px]" />
                <p className="font-['Poppins'] font-semibold uppercase text-[10px] tracking-[0.3em] text-slate-800">{reason}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-slate-400 italic text-xl font-light">We focus on supplying durable spare parts that reduce downtime and improve productivity.</p>
        </div>
      </section>

      {/* --- SECTION 6: LOCATIONS --- */}
      <section className="py-24 bg-white text-center border-b border-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-4xl lg:text-[2.8rem] font-['Poppins'] font-light uppercase italic mb-16 tracking-tighter text-slate-900 text-center">Supplying Across <span className="text-orange-600">Tamil Nadu</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-4 text-center">
            {["Coimbatore", "Salem", "Chennai", "Madurai", "Trichy", "Erode", "Namakkal", "Tirunelveli", "Hosur"].map((city, index) => (
              <div key={index} className="py-8 border border-slate-100 flex flex-col items-center gap-3 group hover:border-orange-600 transition-all bg-[#fafafa]">
                 <MapPin className="w-4 h-4 text-slate-300 group-hover:text-orange-600 stroke-[1px]" /> 
                 <span className="font-['Poppins'] font-semibold text-[9px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900">{city}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-400 font-semibold uppercase tracking-[0.4em] text-[10px]">All Major Quarry & Mining Regions</p>
        </div>
      </section>

      {/* --- SECTION 7: CTA --- */}
      <section className="py-40 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-slate-900 opacity-50"></div>
        <div className="max-w-screen-2xl mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-6xl lg:text-[5rem] font-['Poppins'] font-light uppercase italic tracking-tighter mb-8 leading-none">Bulk Orders <br /> <span className="font-semibold text-orange-600">& Enquiry</span></h2>
          <div className="w-20 h-[1px] bg-orange-600 mx-auto mb-16"></div>
          <p className="text-2xl font-['Poppins'] font-light mb-10 uppercase tracking-[0.4em] opacity-60 italic">Looking for a reliable PSI / MDS Jack Hammer Bush Supplier?</p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
             <button 
               onClick={handleCall}
               className="w-full sm:w-auto px-20 py-8 bg-white text-slate-900 font-['Poppins'] font-semibold uppercase text-[10px] tracking-[0.4em] hover:bg-orange-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-6 active:scale-95"
             >
                <PhoneCall size={22} /> Call Technical Team
             </button>
             <button 
               onClick={() => window.open(whatsappLink, '_blank')}
               className="w-full sm:w-auto px-20 py-8 border border-white/20 text-white font-['Poppins'] font-semibold uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-6"
             >
                Contact via WhatsApp <MessageCircle size={22} />
             </button>
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