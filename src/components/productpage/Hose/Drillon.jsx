import React, { useEffect, useState } from "react";
import { 
  ShieldCheck, 
  ChevronRight,
  MessageCircle,
  PhoneCall,
  Zap,
  Maximize2,
  MapPin,
  Wind,
} from "lucide-react";

import Lenis from "@studio-freight/lenis";

// Importing Assets from the LT directory as requested
import img1 from "../../../assests/productimg/Drillon/1.webp";
import img2 from "../../../assests/productimg/Drillon/2.webp";
import img3 from "../../../assests/productimg/Drillon/3.webp";
import img4 from "../../../assests/productimg/Drillon/4.webp";
import img5 from "../../../assests/productimg/Drillon/5.webp";

const productImages = [img1, img2, img3, img4, img5];

export default function DrillonHoseProductPage() {
  const [activeImg, setActiveImg] = useState(img1);
 

  // B2B Contact Handlers
  const whatsappNumber = "919443439096";
  const phoneNumber = "+919994468589";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Sri Kumar Drill Rods, I am inquiring about the Drillon Rock Drill Hose. Please provide B2B pricing and delivery timelines.`;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);

    // Update active image module in a slideshow fashion
    const interval = setInterval(() => {
      setActiveImg((prev) => {
        const currentIndex = productImages.indexOf(prev);
        return productImages[(currentIndex + 1) % productImages.length];
      });
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
        <title>Drillon Rock Drill Hose Supplier in Tamil Nadu</title>
        <meta name="description" content="Buy Drillon Rock Drill Hose in Tamil Nadu. Trusted supplier of high-pressure pneumatic drilling hoses for mining and quarry industries." />
        <link rel="canonical" href="https://srikumardrillrods.com/drillon-rock-drill-hose-tamil-nadu" />
      </head>

      {/* --- HERO SECTION: REFINED MINIMALISM --- */}
      <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-48 overflow-hidden bg-[#fafafa]">
        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[2px] w-12 bg-orange-600"></div>
                <span className="text-slate-400 font-['Poppins'] font-medium tracking-[0.4em] uppercase text-[10px]">
                  Professional Pneumatic Distribution
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-['Poppins'] font-medium uppercase tracking-tighter leading-[1] mb-10 text-slate-900">
                Drillon Rock <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-medium">
                  Drill Hose
                </span>
              </h1>

              <div className="flex items-start gap-6 mb-12">
                 <div className="pt-1">
                    <ShieldCheck className="text-orange-600 w-6 h-6" />
                 </div>
                 <h2 className="text-xl lg:text-2xl font-['Poppins'] font-medium text-slate-700 leading-tight">
                    Premium Quality Drillon Rock Drill Hose Supplier in Tamil Nadu
                 </h2>
              </div>

              <div className="max-w-xl space-y-10">
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed border-l-2 border-slate-200 pl-8 font-light italic">
                  Sri Kumar Drill Rods supplies Drillon Rock Drill Hose designed for high-pressure pneumatic drilling applications in mining, quarrying, and construction industries. As a trusted Drillon Rock Drill Hose supplier in Tamil Nadu, we provide durable and high-performance hoses for contractors and drilling operators across Tamil Nadu and India.
                </p>
                
                <div className="pl-8 flex items-center gap-4 text-slate-400">
                   <p className="italic text-base lg:text-lg leading-relaxed font-light">
                    Our hoses are engineered to handle tough working conditions while ensuring smooth airflow and reliable drilling efficiency.
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
               <div className="relative w-full max-w-[550px] aspect-square bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-slate-100 p-8 lg:p-12 group overflow-hidden">
                  <div className="absolute top-6 right-6 z-20">
                     <div className="p-3 bg-orange-600 text-white rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <Maximize2 size={18} />
                     </div>
                  </div>
                  <div className="w-full h-full flex items-center justify-center relative z-10 transition-transform duration-700 group-hover:scale-105">
                     <img src={activeImg} className="max-h-full w-auto object-contain filter drop-shadow-xl" alt="Drillon Hose Main View" />
                  </div>
                  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[80%] bg-white/70 backdrop-blur-md border border-white/40 py-4 px-6 text-center shadow-lg">
                     <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-orange-600 block mb-1">Heavy Duty Series</span>
                     <h3 className="text-sm font-['Poppins'] font-medium uppercase text-slate-800 tracking-tighter italic leading-none">Drillon High-Pressure Hose</h3>
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
                  The Drillon Rock Drill Hose is manufactured using reinforced synthetic rubber with strong inner lining to withstand high air pressure during rock drilling operations. This high-pressure rock drill hose ensures excellent flexibility, reduced air leakage, and long operational life.
                </p>
                <p>
                  Sri Kumar Drill Rods is a high-yield provider of heavy-duty pneumatic supplies, making sure your site applications in Tamil Nadu run continuously with reduced downtime.
                </p>
              </div>
              <div className="flex items-center gap-6 p-8 bg-[#fafafa] border border-slate-100 max-w-2xl shadow-sm">
                <div className="h-12 w-1.5 bg-orange-600"></div>
                <p className="text-slate-600 text-lg font-medium tracking-tight leading-tight">
                  Sri Kumar Drill Rods supplies bulk quantities across Tamil Nadu with ready stock availability and fast dispatch support.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
               <div className="bg-[#fafafa] p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                  <Wind className="text-orange-600 mb-3 w-8 h-8" />
                  <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 mt-2">Zero Leakage</span>
               </div>
               <div className="bg-[#fafafa] p-8 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100 mt-6">
                  <Zap className="text-slate-900 mb-3 w-8 h-8" />
                  <span className="text-[10px] font-medium uppercase tracking-widest text-slate-400 mt-2">High PSI</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: KEY FEATURES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-5xl lg:text-[4.5rem] font-['Poppins'] font-medium uppercase italic tracking-tighter leading-none mb-4">
              Key Features
            </h2>
            <p className="text-slate-400 font-medium uppercase tracking-[0.4em] text-[10px]">Optimized for Reliable Air Compression</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Heavy-duty high-pressure hose",
              "Reinforced rubber construction",
              "Excellent flexibility and durability",
              "Resistant to abrasion and harsh environments",
              "Suitable for pneumatic drilling equipment",
              "Long service life",
              "Available in multiple sizes"
            ].map((feature, idx) => (
              <div key={idx} className="p-10 bg-[#fafafa] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group duration-500">
                <ChevronRight className="text-slate-300 group-hover:text-orange-600 mb-8 w-10 h-10 transition-colors" />
                <p className="font-['Poppins'] font-medium uppercase text-xs tracking-widest leading-tight text-slate-700">{feature}</p>
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
                  <h2 className="text-4xl lg:text-[3rem] font-['Poppins'] font-medium uppercase italic tracking-tighter leading-[0.9]">Technical <br /> Specifications</h2>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Inner Diameter", val: "Standard Industry Sizes", detail: "Universal" },
                    { label: "Length", val: "Standard & Custom Options", detail: "Flexible" },
                    { label: "Working Pressure", val: "High-Pressure Range", detail: "Industrial" },
                    { label: "Material", val: "Reinforced Synthetic Rubber", detail: "Premium" },
                    { label: "Application", val: "Pneumatic Rock Drilling", detail: "Drilling" }
                  ].map((spec, i) => (
                    <div key={i} className="group flex items-center justify-between py-5 border-b border-slate-100 hover:bg-slate-50 transition-all px-2">
                      <div className="flex flex-col">
                        <span className="text-slate-400 uppercase font-medium text-[8px] tracking-[0.3em] group-hover:text-orange-600 transition-colors">{spec.label}</span>
                        <span className="font-['Poppins'] font-semibold text-lg uppercase italic text-slate-800">{spec.val}</span>
                      </div>
                      <div className="px-3 py-1 border border-slate-200 rounded-none"><span className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">{spec.detail}</span></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 p-6 bg-slate-900 text-white text-[10px] font-medium uppercase tracking-widest text-center">
                Bulk supply options available for contractors and dealers.
              </div>
            </div>

            <div className="lg:w-7/12 flex flex-col gap-6">
              <div className="flex-grow bg-white border border-slate-200 shadow-sm relative group overflow-hidden flex flex-col items-center justify-center p-12">
                 <img src={activeImg} className="max-h-[350px] w-auto object-contain transition-all duration-700 group-hover:scale-105" alt="Drillon Hose Showcase" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                 {productImages.map((img, index) => (
                    <button 
                       key={index} 
                       onClick={() => setActiveImg(img)} 
                       className={`aspect-square p-4 bg-white border transition-all duration-300 ${activeImg === img ? 'border-orange-600 shadow-xl' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
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
      <section className="py-24 bg-white text-center">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-5xl lg:text-[4rem] font-['Poppins'] font-medium uppercase italic tracking-tighter mb-20 leading-[0.8]">
            Sector <span className="text-orange-600">Applications</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {[
              "Mining Operations",
              "Granite & Blue Metal Quarrying",
              "Borewell Drilling",
              "Construction Projects",
              "Underground Drilling"
            ].map((app, i) => (
              <div key={app} className="group p-10 bg-[#fafafa] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <span className="font-['Poppins'] font-light text-6xl text-slate-100 group-hover:text-orange-600/10 transition-colors leading-none block mb-6">0{i+1}</span>
                <p className="font-['Poppins'] font-medium uppercase text-xs tracking-widest leading-tight text-slate-700">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: WHY CHOOSE US --- */}
      <section className="py-24 bg-[#fafafa] border-y border-slate-100 text-center">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-5xl lg:text-[3.5rem] font-['Poppins'] font-medium uppercase italic tracking-tighter mb-24 leading-none text-slate-900">
            Why Choose Sri Kumar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-xl text-center">
            {[
              "Trusted Rock Drill Hose Distributor",
              "Competitive Bulk Pricing",
              "Strict Quality Inspection",
              "Fast Delivery Across Tamil Nadu",
              "Dedicated B2B Support",
              "Ready Stock Availability"
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-16 flex flex-col items-center group transition-all">
                <ShieldCheck className="text-orange-600 w-10 h-10 transition-colors mb-8 stroke-[1px]" />
                <p className="font-['Poppins'] font-medium uppercase text-[10px] tracking-[0.3em] text-slate-800">{reason}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-slate-400 italic text-xl font-light">We supply durable, high-pressure industrial parts that improve performance and reduce maintenance downtime.</p>
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
                 <span className="font-['Poppins'] font-medium text-[9px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900">{city}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-400 font-medium uppercase tracking-[0.4em] text-[10px]">All Major Industrial & Mining Zones</p>
        </div>
      </section>

      {/* --- SECTION 7: CTA --- */}
      <section className="py-40 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-slate-900 opacity-50"></div>
        <div className="max-w-screen-2xl mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-6xl lg:text-[5rem] font-['Poppins'] font-light uppercase italic tracking-tighter mb-8 leading-none text-white">Bulk Orders <br /> <span className="font-semibold text-orange-600">& Enquiry</span></h2>
          <div className="w-20 h-[1px] bg-orange-600 mx-auto mb-16"></div>
          <p className="text-2xl font-['Poppins'] font-light mb-10 uppercase tracking-[0.4em] opacity-60 italic">Looking for a dependable Drillon Rock Drill Hose Supplier?</p>
          
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
             <button 
               onClick={handleCall}
               className="w-full sm:w-auto px-16 py-8 bg-white text-slate-900 font-['Poppins'] font-medium uppercase text-[10px] tracking-[0.4em] hover:bg-orange-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-6 active:scale-95"
             >
                <PhoneCall size={22} /> Call Technical Team
             </button>
             <button 
               onClick={() => window.open(whatsappLink, '_blank')}
               className="w-full sm:w-auto px-16 py-8 border border-white/20 text-white font-['Poppins'] font-medium uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-6"
             >
                Contact via WhatsApp <MessageCircle size={22} />
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}