import React, { useState, useMemo, useEffect } from 'react';
import { ChevronRight, Search, Menu, MessageCircle, PhoneCall, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 🔹 PRODUCT IMAGE IMPORTS
import PulakanaImg from "../../assests/productimg/Pulakana/1.webp";
import LTImg from "../../assests/productimg/LT (1)/1.webp";
import NanchangImg from "../../assests/productimg/Nanchang +/1.webp";
import PLKSImg from "../../assests/productimg/PLKS/1.webp";
import BushImg from "../../assests/productimg/Bush/1.webp";
import PistonImg from "../../assests/productimg/Piston/1.webp";
import SideBoldImg from "../../assests/productimg/Side bold-/1.webp";
import RetainerLockImg from "../../assests/productimg/Retainer lock/1.webp"; 
import LinerSetImg from "../../assests/productimg/Liner set/1.webp";
import ConnectRodImg from "../../assests/productimg/Connect Rod/1.webp";
import FiltersImg from "../../assests/productimg/Air filter and Oil filter/1.webp";
import RingsImg from "../../assests/productimg/Rings/1.webp";
import ValvesImg from "../../assests/productimg/Valves/1.webp";
import SandcoRodsImg from "../../assests/productimg/Sandco Tapper drill rods/1.webp";

// 🔹 NEWLY ADDED FROM SCREENSHOT
import BlueTapperImg from "../../assests/productimg/Blue Tapper drill rods/1.webp";
import ImportedRodsImg from "../../assests/productimg/Imported drill rods/1.webp";
import DrillonImg from "../../assests/productimg/Drillon/1.webp";
import StandardHoseImg from "../../assests/productimg/Starndard/1.webp";

const ALL_PRODUCTS = [
  { name: 'Pulanka', img: PulakanaImg, sku: 'PK-BIT', cat: 'bits', path: '/tapper-bits/pulanka' },
  { name: 'LT Tapper', img: LTImg, sku: 'LT-BIT', cat: 'bits', path: '/tapper-bits/lt' },
  { name: 'Nanchang Plus', img: NanchangImg, sku: 'NC-BIT', cat: 'bits', path: '/tapper-bits/nanchang-plus' },
  { name: 'PLKS Precision', img: PLKSImg, sku: 'PL-BIT', cat: 'bits', path: '/tapper-bits/plks' },
  { name: 'Hammer Bush', img: BushImg, sku: 'JH-BSH', cat: 'jack', path: '/jack-hammer/bush' },
  { name: 'Ranger Box', img: BushImg, sku: 'JH-RBX', cat: 'jack', path: '/jack-hammer/ranger-box' },
  { name: 'JH Piston', img: PistonImg, sku: 'JH-PST', cat: 'jack', path: '/jack-hammer/piston' },
  { name: 'Side Bolt', img: SideBoldImg, sku: 'JH-SBT', cat: 'jack', path: '/jack-hammer/side-bolt' },
  { name: 'Retainer Lock', img: RetainerLockImg, sku: 'JH-RLK', cat: 'jack', path: '/jack-hammer/retainer-lock' },
  { name: 'Liner Set', img: LinerSetImg, sku: 'VT4-LNR', cat: 'comp', path: '/compressor/liner-set' },
  { name: 'Comp Piston', img: PistonImg, sku: 'VT4-PST', cat: 'comp', path: '/compressor/piston' },
  { name: 'Connect Rod', img: ConnectRodImg, sku: 'VT4-CRD', cat: 'comp', path: '/compressor/connect-rod' },
  { name: 'Filters', img: FiltersImg, sku: 'VT4-FLT', cat: 'comp', path: '/compressor/filters' },
  { name: 'Rings', img: RingsImg, sku: 'VT4-RNG', cat: 'comp', path: '/compressor/rings' },
  { name: 'Valves', img: ValvesImg, sku: 'VT4-VLV', cat: 'comp', path: '/compressor/valves' },
  { name: 'Sandco Rods', img: SandcoRodsImg, sku: 'DR-SND', cat: 'rods', path: '/drill-rods/sandco' },
  { name: 'Blue Tapper', img: BlueTapperImg, sku: 'DR-BLU', cat: 'rods', path: '/drill-rods/blue-tapper' },
  { name: 'Imported Rods', img: ImportedRodsImg, sku: 'DR-IMP', cat: 'rods', path: '/drill-rods/imported' },
  { name: 'Durlon Hose', img: FiltersImg, sku: 'HS-DUR', cat: 'hose', path: '/hoses/durlon' },
  { name: 'Standard Hose', img: StandardHoseImg, sku: 'HS-STD', cat: 'hose', path: '/hoses/standard' },
  { name: 'Drillon Hose', img: DrillonImg, sku: 'HS-DRL', cat: 'hose', path: '/hoses/drillon' },
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
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  
  const navigate = useNavigate();

  useEffect(() => {
    // Preserved interval logic
  }, []);

  const filteredItems = useMemo(() => {
    const list = filter === 'all' 
      ? ALL_PRODUCTS 
      : ALL_PRODUCTS.filter(item => item.cat === filter);

    if (searchQuery) {
      return list.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return list;
  }, [filter, searchQuery]);

  const handleWhatsApp = (e, productName) => {
    e.stopPropagation();
    window.open(`https://wa.me/919443439096?text=I'm interested in ${productName}`, '_blank');
  };

  const handleCall = (e) => {
    e.stopPropagation();
    window.location.href = "tel:+919994468589";
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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input 
            type="text" 
            placeholder="Search parts..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
                ? 'border-orange-500 bg-slate-600 pl-4' 
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
        
        <div className="w-full max-w-[1600px] p-4 md:p-10 lg:p-12">
          <header className="mb-16 px-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="h-[1px] w-12 bg-orange-600"></div>
               <p className="text-orange-600 font-bold uppercase text-[10px] tracking-[0.4em]">
                 {filter === 'all' ? 'Engineering Catalog' : `Category: ${CATEGORIES.find(c => c.id === filter)?.name || ''}`}
               </p>
            </div>
            <h1 className="text-4xl md:text-7xl font-normal tracking-tighter uppercase leading-none text-black">
              {CATEGORIES.find(c => c.id === filter)?.name || 'All Products'}
            </h1>
          </header>

          {/* 🔹 3 Products in a single line on medium and larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 will-change-transform">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white border border-slate-200 p-4 md:p-7 flex flex-col cursor-pointer transition-all transform-gpu overflow-hidden"
                onClick={() => navigate(item.path)}
              >
                <div className="mb-5 md:mb-6 flex justify-between items-start px-1 relative z-10">
                  <div className="max-w-[85%]">
                    <h3 className="text-xs md:text-sm font-normal tracking-tight uppercase truncate leading-none text-slate-900">
                      {item.name}
                    </h3>
                    <p className="text-[10px] md:text-[11px] font-light text-slate-400 mt-2 uppercase tracking-tighter">{item.sku}</p>
                  </div>
                  <div className="bg-slate-50 px-2 py-1 rounded border border-slate-100">
                    <span className="text-[8px] font-light uppercase text-slate-400">OES</span>
                  </div>
                </div>

                <div className="aspect-square bg-[#F8FAFC] flex items-center justify-center p-0 md:p-2 relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    loading="lazy"
                    className="w-full h-full object-contain filter drop-shadow-md will-change-transform z-10" 
                  />
                  
                  <div className="absolute inset-x-4 bottom-4 flex justify-center gap-3 z-20">
                    <button onClick={(e) => handleWhatsApp(e, item.name)} className="bg-green-500 text-white p-3 md:p-4 hover:bg-green-600 transition-all active:scale-90">
                      <MessageCircle size={18} />
                    </button>
                    <button onClick={(e) => handleCall(e)} className="bg-blue-600 text-white p-3 md:p-4 hover:bg-blue-700 transition-all active:scale-90">
                      <PhoneCall size={18} />
                    </button>
                  </div>
                </div>

                <div className="mt-6 md:mt-8 flex items-center justify-between bg-slate-950 p-4 md:p-5 group/btn transition-all duration-300">
                  <div className="flex flex-col">
                      <p className="text-[8px] text-slate-500 font-light uppercase tracking-widest leading-none mb-1.5">Status</p>
                      <p className="text-[10px] md:text-[11px] font-normal text-white uppercase leading-none">Stock Ready</p>
                  </div>
                  <div className="p-2 md:p-3 bg-white/10 text-white transition-all duration-300">
                     <ChevronRight size={18} />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>
    </section>
  );
}