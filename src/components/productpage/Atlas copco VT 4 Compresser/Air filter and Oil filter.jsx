import React, { useEffect, useState } from "react";
import { ChevronRight, MessageCircle, PhoneCall, MapPin, ShieldCheck, Filter, Zap } from "lucide-react";

// 🔹 DYNAMIC PRODUCT IMAGE IMPORTS (Air & Oil Filters)
import FiltersImg1 from "../../../assests/productimg/Air filter and Oil filter/1.webp";
import FiltersImg2 from "../../../assests/productimg/Air filter and Oil filter/2.webp";
import FiltersImg3 from "../../../assests/productimg/Air filter and Oil filter/3.webp";
import FiltersImg4 from "../../../assests/productimg/Air filter and Oil filter/4.webp";
import FiltersImg5 from "../../../assests/productimg/Air filter and Oil filter/5.webp";

import hero from "../../../assests/Hero3.webp";

const productImages = [FiltersImg1, FiltersImg2, FiltersImg3, FiltersImg4, FiltersImg5];

export default function FilterProductPage() {
  const [activeImg, setActiveImg] = useState(FiltersImg1);
  const [slideIndex, setSlideIndex] = useState(0);

  // 🔹 B2B Contact Info Handlers
  const whatsappNumber = "919443439096";
  const phoneNumber = "+919994468589";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi Sri Kumar Drill Rods, I am inquiring about the Atlas Copco VT 4 Air and Oil Filters. Please provide B2B pricing.`;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % productImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white font-['Inter'] text-slate-900 overflow-x-hidden antialiased">
      {/* SEO META DATA */}
      <head>
        <title>VT4 Air & Oil Filter Supplier Tamil Nadu | Sri Kumar Drill Rods</title>
        <meta name="description" content="Buy Air Filter & Oil Filter for Atlas Copco VT4 Compressor in Tamil Nadu. Sri Kumar Drill Rods supplies durable compressor filters at B2B pricing." />
        <link rel="canonical" href="https://srikumardrillrods.com/atlas-copco-vt4-air-oil-filter-tamil-nadu" />
      </head>

      {/* --- HERO SECTION --- */}
      <section id="hero" className="relative pt-32 pb-24 lg:pt-48 lg:pb-48 overflow-hidden bg-[#fafafa]">
        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-12 bg-orange-600"></div>
                <span className="text-slate-400 font-semibold tracking-[0.4em] uppercase text-[10px]">
                  VT4 Filtration Systems
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-light uppercase tracking-tighter leading-[1.1] mb-10 text-slate-900">
                Air Filter & Oil Filter for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-light italic">
                  Atlas Copco VT 4
                </span>
              </h1>

              <div className="flex items-start gap-6 mb-12">
                <div className="pt-1">
                  <ShieldCheck className="text-orange-600 w-7 h-7" />
                </div>
                <h2 className="text-xl lg:text-2xl font-light text-slate-700 leading-tight tracking-wide">
                  Heavy-Duty Compressor Filter Supplier in Tamil Nadu
                </h2>
              </div>

              <div className="max-w-xl space-y-10">
                <p className="text-slate-500 text-lg lg:text-xl leading-relaxed border-l border-slate-200 pl-8 font-light italic">
                  Sri Kumar Drill Rods supplies high-quality Air Filter & Oil Filter for Atlas Copco VT 4 Compressor, designed to ensure clean airflow, proper lubrication, and extended compressor life. As a trusted compressor spare parts supplier in Tamil Nadu, we provide premium-quality filters at competitive B2B pricing.
                </p>
                
                <div className="pl-8 flex items-center gap-4 text-slate-400">
                  <QuoteIcon className="w-6 h-6 opacity-20 text-orange-600" />
                  <p className="italic text-base lg:text-lg leading-relaxed font-light">
                    Our compressor filters are built to maintain optimal performance even in dusty and high-load working environments.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-16">
                <button 
                  onClick={() => window.open(whatsappLink, '_blank')}
                  className="px-12 py-5 bg-slate-900 text-white font-semibold uppercase text-[10px] tracking-[0.3em] hover:bg-orange-600 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                >
                  WhatsApp Pricing <MessageCircle size={16} />
                </button>
                <button 
                  onClick={handleCall}
                  className="px-12 py-5 border border-slate-200 text-slate-900 font-semibold uppercase text-[10px] tracking-[0.3em] hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  Call Support <PhoneCall size={16} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[550px] aspect-square bg-white shadow-2xl border border-slate-100 p-8 lg:p-12 group overflow-hidden">
                <div className="w-full h-full flex items-center justify-center relative z-10">
                  <img src={activeImg} className="max-h-full w-auto object-contain filter drop-shadow-2xl transition-all duration-700" alt="VT4 Compressor Filters" />
                </div>
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-[85%] bg-white/90 backdrop-blur-md border border-white/40 py-5 px-6 text-center shadow-lg">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-orange-600 block mb-1">Industrial Grade</span>
                  <h3 className="text-sm font-light uppercase text-slate-800 tracking-widest leading-none">VT4 Filtration Kit</h3>
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
              <h2 className="text-4xl lg:text-[3.5rem] font-light uppercase italic tracking-tighter mb-8 text-slate-900 leading-[1]">
                Product <span className="text-slate-300 font-light">Overview</span>
              </h2>
              <div className="space-y-6 text-xl lg:text-2xl text-slate-500 leading-relaxed font-light max-w-3xl mb-12">
                <p>
                  The Air Filter prevents dust, debris, and contaminants from entering the compressor system, ensuring clean air intake and protecting internal components.
                </p>
                <p>
                  The Oil Filter removes impurities from lubricating oil, maintaining proper lubrication and reducing internal wear in the Atlas Copco VT 4 Compressor.
                </p>
                <p>
                  Manufactured using industrial-grade filtration materials, these filters ensure stable compressor efficiency and improved operational reliability.
                </p>
              </div>
              <div className="flex items-center gap-6 p-10 bg-[#fafafa] border border-slate-100 max-w-2xl shadow-sm">
                <div className="h-10 w-[1px] bg-orange-600"></div>
                <p className="text-slate-600 text-sm font-semibold uppercase tracking-widest leading-relaxed">
                  Sri Kumar Drill Rods maintains ready stock for quick dispatch across Tamil Nadu.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
              <div className="bg-[#fafafa] p-10 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100">
                <Filter className="text-orange-600 mb-3 w-9 h-9" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mt-2">Pure Intake</span>
              </div>
              <div className="bg-[#fafafa] p-10 flex flex-col items-center justify-center text-center hover:bg-white hover:shadow-xl transition-all border border-slate-100 mt-6">
                <Zap className="text-slate-900 mb-3 w-9 h-9" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mt-2">Low Wear</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: PRODUCT DYNAMIC SLIDESHOW --- */}
      <section className="py-32 bg-slate-950 overflow-hidden relative">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img 
            src={hero} 
            className="w-full h-full object-cover grayscale brightness-50" 
            alt="Industrial Backdrop" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-full">
              <h2 className="text-4xl lg:text-[4rem] font-light text-white uppercase italic tracking-tighter leading-none mb-8">
                Visual <br /> <span className="text-orange-600 font-semibold">Inventory Registry</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 max-w-2xl">
                Explore our high-precision VT4 filter catalog. We prioritize visual transparency for all our industrial spares, ensuring OES standards are met for every component dispatched across the state.
              </p>
              <div className="flex items-center gap-4">
                <div className="text-white font-light text-5xl italic">0{slideIndex + 1}</div>
                <div className="h-[1px] w-24 bg-orange-600"></div>
                <div className="text-slate-400 font-medium uppercase tracking-[0.4em] text-[9px]">OES Component Catalog</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: KEY FEATURES --- */}
      <section className="py-24 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-5xl lg:text-[4.5rem] font-light uppercase italic tracking-tighter leading-none mb-4">
              Key Features
            </h2>
            <p className="text-slate-400 font-semibold uppercase tracking-[0.4em] text-[10px]">Optimized for Dusty and High-Load Environments</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Compatible with Atlas Copco VT 4 Compressor",
              "High-efficiency filtration performance",
              "Durable industrial-grade filter media",
              "Protects internal compressor components",
              "Improves compressor efficiency",
              "Reduces maintenance downtime",
              "Designed for heavy-duty industrial use",
              "Bulk supply available"
            ].map((feature, idx) => (
              <div key={idx} className="p-10 bg-[#fafafa] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group duration-500">
                <ChevronRight className="text-slate-300 group-hover:text-orange-600 mb-8 w-11 h-11 transition-colors" />
                <p className="font-semibold uppercase text-xs tracking-widest leading-tight text-slate-700">{feature}</p>
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
                  <div className="w-10 h-[1px] bg-orange-600"></div>
                  <h2 className="text-4xl lg:text-[2.8rem] font-light uppercase italic tracking-tighter leading-[1]">Technical <br /> <span className="font-semibold">Details</span></h2>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "Compatible With", val: "Atlas Copco VT 4 Compressor", detail: "Exact Fit" },
                    { label: "Product Type", val: "Air Filter & Oil Filter", detail: "Dual Pack" },
                    { label: "Application", val: "Industrial Air Compressors", detail: "Universal" },
                    { label: "Filtration Type", val: "High-efficiency industrial", detail: "Grade A" },
                    { label: "Performance", val: "Dust removal & oil purification", detail: "Verified" },
                    { label: "Availability", val: "Standard models (Custom on request)", detail: "Ready" }
                  ].map((spec, i) => (
                    <div key={i} className="group flex items-center justify-between py-5 border-b border-slate-100 hover:bg-slate-50 transition-all px-2">
                      <div className="flex flex-col">
                        <span className="text-slate-400 uppercase font-semibold text-[8px] tracking-[0.3em] group-hover:text-orange-600 transition-colors">{spec.label}</span>
                        <span className="font-semibold text-lg uppercase italic text-slate-800">{spec.val}</span>
                      </div>
                      <div className="px-3 py-1 border border-slate-200"><span className="text-[8px] font-semibold text-slate-400 uppercase tracking-widest">{spec.detail}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-7/12 flex flex-col gap-6">
              <div className="flex-grow bg-white border border-slate-200 shadow-sm relative group overflow-hidden flex flex-col items-center justify-center p-12">
                <img src={activeImg} className="max-h-[350px] w-auto object-contain transition-all duration-1000 group-hover:scale-105" alt="VT4 Filter Asset" />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {productImages.map((img, index) => (
                  <button 
                    key={index} 
                    onClick={() => setActiveImg(img)} 
                    className={`aspect-square bg-white border transition-all duration-300 overflow-hidden p-2 ${activeImg === img ? 'border-orange-600 shadow-xl' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
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
          <h2 className="text-5xl lg:text-[4rem] font-light uppercase italic tracking-tighter mb-20 leading-[0.8]">
            Industry <span className="text-orange-600 font-semibold">Applications</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
            {[
              "Granite Quarry Operations",
              "Mining & Drilling Sites",
              "Construction Projects",
              "Industrial Manufacturing Units",
              "Heavy Equipment Service Centers"
            ].map((app, i) => (
              <div key={app} className="group p-10 bg-[#fafafa] border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <span className="font-light text-6xl text-slate-100 group-hover:text-orange-600/10 transition-colors leading-none block mb-6">0{i+1}</span>
                <p className="font-semibold uppercase text-xs tracking-widest leading-tight text-slate-700">{app}</p>
              </div>
            ))}
          </div>
          <p className="mt-20 text-center text-slate-400 italic text-lg font-light tracking-wide">Designed to perform efficiently in Tamil Nadu’s dusty quarry and industrial environments.</p>
        </div>
      </section>

      {/* --- SECTION 5: WHY CHOOSE US --- */}
      <section className="py-24 bg-[#fafafa] border-y border-slate-100">
        <div className="max-w-screen-2xl mx-auto px-6 text-center">
          <h2 className="text-5xl lg:text-[3.5rem] font-light uppercase italic tracking-tighter mb-24 leading-none">
            Why Choose Sri Kumar?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-xl text-center">
            {[
              { text: "Trusted Compressor Spare Parts Supplier", icon: "ph:handshake-light" },
              { text: "Competitive Bulk Pricing", icon: "ph:currency-inr-light" },
              { text: "Quality-Assured Industrial Components", icon: "ph:certificate-light" },
              { text: "Fast Delivery Support", icon: "ph:truck-light" },
              { text: "Reliable B2B Service", icon: "ph:briefcase-light" },
              { text: "Strong Industry Network", icon: "ph:globe-hemisphere-east-light" }
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-16 flex flex-col items-center group transition-all">
                <p className="font-semibold uppercase text-[10px] tracking-[0.3em] text-slate-800">{reason.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-16 text-slate-400 italic text-xl font-light">We supply durable compressor spare parts that enhance equipment life and reduce operational breakdowns.</p>
        </div>
      </section>

      {/* --- SECTION 6: LOCATIONS --- */}
      <section className="py-24 bg-white text-center border-b border-slate-50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <h2 className="text-4xl lg:text-[2.8rem] font-light uppercase italic mb-16 tracking-tighter text-slate-900 text-center">Supplying Across <span className="text-orange-600">Tamil Nadu</span></h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-9 gap-4 text-center">
            {["Coimbatore", "Salem", "Chennai", "Madurai", "Trichy", "Erode", "Namakkal", "Tirunelveli", "Hosur"].map((city) => (
              <div key={city} className="py-8 border border-slate-100 flex flex-col items-center gap-3 group hover:border-orange-600 transition-all bg-[#fafafa]">
                <MapPin className="w-5 h-5 text-slate-300 group-hover:text-orange-600" /> 
                <span className="font-semibold text-[9px] uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-900">{city}</span>
              </div>
            ))}
          </div>
          <p className="mt-10 text-slate-400 font-semibold uppercase tracking-[0.4em] text-[10px]">All Major Mining & Industrial Zones</p>
        </div>
      </section>

      {/* --- SECTION 7: CTA --- */}
      <section className="py-40 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-slate-900 opacity-50"></div>
        <div className="max-w-screen-2xl mx-auto px-6 text-center relative z-10 text-white">
          <h2 className="text-6xl lg:text-[5rem] font-light uppercase italic tracking-tighter mb-8 leading-none text-white">Bulk Orders <br /> <span className="font-semibold text-orange-600">& Enquiry</span></h2>
          <div className="w-20 h-[1px] bg-orange-600 mx-auto mb-16"></div>
          <p className="text-2xl font-light mb-10 uppercase tracking-[0.4em] opacity-60 italic">Looking for a dependable Atlas Copco VT 4 Compressor Filter Supplier?</p>
          <p className="text-xl mb-12 italic opacity-80 font-light tracking-wide">Contact Sri Kumar Drill Rods today for pricing and bulk supply support.</p>
          
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <button 
              onClick={handleCall}
              className="w-full sm:w-auto px-16 py-8 bg-white text-slate-900 font-semibold uppercase text-[10px] tracking-[0.4em] hover:bg-orange-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-6 active:scale-95"
            >
              <PhoneCall size={22} /> Call Technical Team
            </button>
            <button 
              onClick={() => window.open(whatsappLink, '_blank')}
              className="w-full sm:w-auto px-16 py-8 border border-white/20 text-white font-semibold uppercase text-[10px] tracking-[0.4em] hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-6"
            >
              Contact via WhatsApp <MessageCircle size={22} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM4.017 21L4.017 18C4.017 16.8954 4.91242 16 6.017 16H9.017C9.56928 16 10.017 15.5523 10.017 15V9C20.017 8.44772 9.56928 8 9.017 8H5.017C4.46472 8 4.017 8.44772 4.017 9V12C4.017 12.5523 3.56928 13 3.017 13H1.017C0.464722 13 0.017 12.5523 0.017 12V9C0.017 7.34315 1.36015 6 3.017 6H9.017C10.6739 6 12.017 7.34315 12.017 9V15C12.017 18.3137 9.33072 21 6.017 21H4.017Z" />
    </svg>
  );
}