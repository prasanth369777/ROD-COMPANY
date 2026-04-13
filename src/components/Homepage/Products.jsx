import React, { useState, useMemo } from 'react';
import { ChevronRight, HardHat, MapPin, Search, Menu, Box, MessageCircle, PhoneCall } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 🔹 PRODUCT IMAGE IMPORTS
import PulakanaImg from "../../assests/productimg/Pulakana/1.webp";
import LTImg from "../../assests/productimg/LT (1)/1.webp";
import NanchangImg from "../../assests/productimg/Nanchang +/1.webp";
import PLKSImg from "../../assests/productimg/PLKS/1.webp";
import BushImg from "../../assests/productimg/Bush/1.webp";
import PistonImg from "../../assests/productimg/Piston/1.webp";
import SideBoldImg from "../../assests/productimg/Side bold-/1.webp";
import RetainerLockImg from "../../assests/productimg/Piston-/1.webp";
import LinerSetImg from "../../assests/productimg/Liner set/1.webp";
import ConnectRodImg from "../../assests/productimg/Connect Rod/1.webp";
import FiltersImg from "../../assests/productimg/Air filter and Oil filter/1.webp";
import RingsImg from "../../assests/productimg/Rings/1.webp";
import ValvesImg from "../../assests/productimg/Valves/1.webp";
import SandcoRodsImg from "../../assests/productimg/Sandco Tapper drill rods/1.webp";

const ALL_PRODUCTS = [
  // Tapper Bits
  { name: 'Pulanka', img: PulakanaImg, sku: 'PK-BIT', cat: 'bits', path: '/tapper-bits/pulanka' },
  { name: 'LT Tapper', img: LTImg, sku: 'LT-BIT', cat: 'bits', path: '/tapper-bits/lt' },
  { name: 'Nanchang Plus', img: NanchangImg, sku: 'NC-BIT', cat: 'bits', path: '/tapper-bits/nanchang-plus' },
  { name: 'PLKS Precision', img: PLKSImg, sku: 'PL-BIT', cat: 'bits', path: '/tapper-bits/plks' },
  
  // Jack Hammer
  { name: 'Hammer Bush', img: BushImg, sku: 'JH-BSH', cat: 'jack', path: '/jack-hammer/bush' },
  { name: 'Ranger Box', img: BushImg, sku: 'JH-RBX', cat: 'jack', path: '/jack-hammer/ranger-box' },
  { name: 'JH Piston', img: PistonImg, sku: 'JH-PST', cat: 'jack', path: '/jack-hammer/piston' },
  { name: 'Side Bolt', img: SideBoldImg, sku: 'JH-SBT', cat: 'jack', path: '/jack-hammer/side-bolt' },
  { name: 'Retainer Lock', img: RetainerLockImg, sku: 'JH-RLK', cat: 'jack', path: '/jack-hammer/retainer-lock' },

  // Compressor
  { name: 'Liner Set', img: LinerSetImg, sku: 'VT4-LNR', cat: 'comp', path: '/compressor/liner-set' },
  { name: 'Comp Piston', img: PistonImg, sku: 'VT4-PST', cat: 'comp', path: '/compressor/piston' },
  { name: 'Connect Rod', img: ConnectRodImg, sku: 'VT4-CRD', cat: 'comp', path: '/compressor/connect-rod' },
  { name: 'Filters', img: FiltersImg, sku: 'VT4-FLT', cat: 'comp', path: '/compressor/filters' },
  { name: 'Rings', img: RingsImg, sku: 'VT4-RNG', cat: 'comp', path: '/compressor/rings' },
  { name: 'Valves', img: ValvesImg, sku: 'VT4-VLV', cat: 'comp', path: '/compressor/valves' },

  // Drill Rods
  { name: 'Sandco Rods', img: SandcoRodsImg, sku: 'DR-SND', cat: 'rods', path: '/drill-rods/sandco' },
  { name: 'Blue Tapper', img: SandcoRodsImg, sku: 'DR-BLU', cat: 'rods', path: '/drill-rods/blue-tapper' },
  { name: 'Imported Rods', img: SandcoRodsImg, sku: 'DR-IMP', cat: 'rods', path: '/drill-rods/imported' },

  // Hoses
  { name: 'Durlon Hose', img: FiltersImg, sku: 'HS-DUR', cat: 'hose', path: '/hoses/durlon' },
  { name: 'Standard Hose', img: FiltersImg, sku: 'HS-STD', cat: 'hose', path: '/hoses/standard' },
  { name: 'Drillon Hose', img: FiltersImg, sku: 'HS-DRL', cat: 'hose', path: '/hoses/drillon' },
];

const CATEGORIES = [
  { id: 'all', name: 'All Products' },
  { id: 'rods', name: 'Drill Rods' },
  { id: 'bits', name: 'Tapper Bits' },
  { id: 'jack', name: 'Jack Hammer' },
  { id: 'comp', name: 'Compressor' },
  { id: 'hose', name: 'Industrial Hoses' }
];

export default function IndustrialSolutions() {
  const [filter, setFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 🚀 Performance Optimization: Memoize filtered list to prevent lag during menu toggles
  const filteredItems = useMemo(() => {
    return filter === 'all' 
      ? ALL_PRODUCTS 
      : ALL_PRODUCTS.filter(item => item.cat === filter);
  }, [filter]);

  // 🔹 SHARED CONTACT HANDLERS
  const handleWhatsApp = (e, productName) => {
    e.stopPropagation();
    window.open(`https://wa.me/919876543210?text=I'm interested in ${productName}`, '_blank');
  };

  const handleCall = (e) => {
    e.stopPropagation();
    window.location.href = "tel:+919876543210";
  };

  return (
    <section className="bg-white min-h-screen flex font-['Inter'] relative items-start antialiased">
      
      {/* MOBILE HEADER */}
      <div className="xl:hidden fixed top-0 left-0 w-full bg-white border-b z-50 p-4 flex justify-between items-center shadow-sm">
        <h2 className="font-bold text-slate-900 italic uppercase tracking-tighter">SRI KUMAR<span className="text-orange-600">.</span></h2>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-slate-50 rounded-lg text-slate-900 border border-slate-200 active:scale-95 transition-transform">
          <Menu size={20} />
        </button>
      </div>

      {/* --- 🔹 STICKY SIDEBAR NAVIGATION --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-100 p-8 transform transition-all duration-300 ease-in-out xl:sticky xl:top-0 xl:h-screen xl:translate-x-0 flex flex-col will-change-transform
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="mb-10 hidden xl:block">
          <h2 className="text-xl font-black text-slate-900 tracking-tighter uppercase italic">
            SRI KUMAR<span className="text-orange-600">.</span>
          </h2>
          <p className="text-[8px] font-bold text-slate-600 uppercase tracking-[0.3em] mt-1">Industrial Portal</p>
        </div>

        <div className="relative mb-10 mt-12 xl:mt-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
          <input 
            type="text" 
            placeholder="Search parts..." 
            className="w-full bg-[#f8fafc] border-b border-slate-600 py-2 pl-9 pr-4 text-[10px] focus:outline-none focus:border-orange-500 text-slate-600 transition-colors"
          />
        </div>

        <nav className="space-y-1 overflow-y-auto pr-1 flex-grow scrollbar-hide">
          {CATEGORIES.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left py-3 rounded-lg transition-all duration-200 group flex items-center justify-between border-l-2
              ${filter === cat.id 
                ? 'border-orange-500 bg-slate-50 pl-4' 
                : 'border-transparent pl-2 text-slate-900 hover:text-slate-900'}`}
            >
              <div className="flex items-center gap-4">
                <span className={`text-[8px] font-black ${filter === cat.id ? 'text-orange-500' : 'text-slate-900'}`}>
                  0{index + 1}
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.1em]">{cat.name}</span>
              </div>
              <div className={`w-1 h-1 rounded-full bg-orange-500 transition-opacity ${filter === cat.id ? 'opacity-100' : 'opacity-50'}`}></div>
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-slate-500">
          <div className="flex items-center gap-3 text-slate-400">
            <MapPin size={12} />
            <span className="text-[8px] font-bold uppercase tracking-widest leading-none">Tamil Nadu, IN</span>
          </div>
        </div>
      </aside>

      {/* --- 🔹 MAIN CONTENT GRID --- */}
      <main className="flex-1 overflow-y-auto pt-24 xl:pt-10 flex flex-col items-center translate-z-0">
        
        <div className="w-full max-w-[1500px] p-4 md:p-10 lg:p-12">
          <header className="mb-12 px-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="h-[1px] w-8 bg-orange-600"></div>
               <p className="text-orange-600 font-bold uppercase text-[9px] tracking-[0.4em]">
                 {filter === 'all' ? 'Engineering Catalog' : `Category: ${CATEGORIES.find(c => c.id === filter).name}`}
               </p>
            </div>
            <h1 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
              {CATEGORIES.find(c => c.id === filter).name}
            </h1>
          </header>

          {/* 🔹 ENHANCED PRODUCT GRID (5 in 1 Desktop) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 will-change-transform">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-[1.5rem] md:rounded-[2rem] p-3 md:p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-200/60 flex flex-col cursor-pointer border border-slate-50 transform-gpu"
                onClick={() => navigate(item.path)}
              >
                <div className="mb-3 md:mb-4 flex justify-between items-start px-1">
                  <div className="max-w-[80%]">
                    <h3 className="text-[10px] md:text-[11px] font-bold text-slate-900 tracking-tight uppercase italic truncate leading-none">
                      {item.name}
                    </h3>
                    <p className="text-[8px] md:text-[9px] font-black text-orange-600 mt-1 uppercase tracking-tighter">{item.sku}</p>
                  </div>
                  <div className="bg-slate-50 px-1.5 py-0.5 rounded-md border border-slate-100">
                    <span className="text-[6px] font-black uppercase text-slate-400">OES</span>
                  </div>
                </div>

                <div className="aspect-square bg-[#F8FAFC] rounded-[1.2rem] md:rounded-[1.8rem] flex items-center justify-center p-4 md:p-8 relative overflow-hidden transition-all group-hover:bg-white border border-transparent group-hover:border-slate-100">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    loading="lazy"
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110 drop-shadow-xl will-change-transform" 
                  />
                  
                  <div className="absolute inset-x-2 bottom-2 md:bottom-4 flex justify-center gap-1.5 md:gap-2 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      <button onClick={(e) => handleWhatsApp(e, item.name)} className="bg-green-500 text-white p-2 md:p-3 rounded-lg md:rounded-2xl hover:bg-green-600 shadow-xl transition-all hover:-translate-y-1 active:scale-95">
                        <MessageCircle size={16} />
                      </button>
                      <button onClick={(e) => handleCall(e)} className="bg-blue-600 text-white p-2 md:p-3 rounded-lg md:rounded-2xl hover:bg-blue-700 shadow-xl transition-all hover:-translate-y-1 active:scale-95">
                        <PhoneCall size={16} />
                      </button>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 flex items-center justify-between bg-[#0f172a] rounded-xl md:rounded-2xl p-3 md:p-4 group/btn transition-colors duration-300">
                  <div className="flex flex-col">
                      <p className="text-[6px] text-slate-500 font-bold uppercase tracking-widest leading-none mb-1">Status</p>
                      <p className="text-[8px] md:text-[9px] font-black text-white uppercase leading-none">Stock Ready</p>
                  </div>
                  <div className="p-1.5 md:p-2 bg-orange-600 rounded-lg text-white group-hover/btn:scale-110 transition-transform duration-300">
                     <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* --- 🔹 FOOTER ACTIONS (ANIMATED BACKGROUND ICONS REMOVED) --- */}
          <footer className="mt-24 pt-16 border-t border-slate-100 grid lg:grid-cols-2 gap-8 pb-20 px-2">
            <div className="relative group overflow-hidden bg-white border border-slate-100 p-1 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="bg-[#f8fafc] rounded-[2.3rem] p-10 h-full flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-slate-900 mb-8 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                            <HardHat size={28} />
                        </div>
                        <h4 className="text-slate-900 font-black uppercase tracking-[0.2em] text-xs mb-3">Project Consultation</h4>
                        <p className="text-slate-500 text-[11px] leading-relaxed max-w-xs font-medium">Technical support for custom engine sizing and on-site hardware selection across Tamil Nadu.</p>
                    </div>
                    <div className="relative z-10 mt-10 flex items-center gap-3 text-orange-600 font-black uppercase text-[10px] tracking-widest cursor-pointer group/link">
                        Speak to Expert <ChevronRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </div>
                </div>
            </div>

            <button className="relative group overflow-hidden bg-[#0f172a] p-1 rounded-[2.5rem] shadow-2xl transition-all duration-500 text-left">
                <div className="bg-gradient-to-br from-slate-900 to-[#0f172a] rounded-[2.3rem] p-10 h-full flex flex-col justify-between relative overflow-hidden border border-white/5">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-orange-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Box size={28} />
                        </div>
                        <h4 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-3">B2B Volume Contracts</h4>
                        <p className="text-slate-400 text-[11px] leading-relaxed max-w-xs font-medium">Secure competitive B2B volume pricing for large-scale industrial contracts and state-wide logistics.</p>
                    </div>
                    <div className="relative z-10 mt-10 flex items-center justify-between">
                        <span className="bg-orange-600 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest group-hover:bg-white group-hover:text-slate-900 transition-all">Request Quote</span>
                        <div className="text-white/20 font-light text-4xl italic opacity-20 group-hover:opacity-40 transition-opacity">SRI KUMAR</div>
                    </div>
                </div>
            </button>
          </footer>
        </div>
      </main>
    </section>
  );
}