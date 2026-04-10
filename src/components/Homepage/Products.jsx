import React, { useState } from 'react';
import { ChevronRight, HardHat, MapPin, Search, Menu, Box, Zap, Factory, Cog, Drill, Hammer, Wind, Droplets } from 'lucide-react';
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
  { id: 'all', name: 'All Products', icon: Box },
  { id: 'rods', name: 'Drill Rods', icon: Cog },
  { id: 'bits', name: 'Tapper Bits', icon: Drill },
  { id: 'jack', name: 'Jack Hammer', icon: Hammer },
  { id: 'comp', name: 'Compressor', icon: Wind },
  { id: 'hose', name: 'Industrial Hoses', icon: Droplets }
];

export default function IndustrialSolutions() {
  const [filter, setFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const filteredItems = filter === 'all' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(item => item.cat === filter);

  return (
    <section className="bg-white min-h-screen flex font-['Inter'] relative">
      
      {/* MOBILE HEADER */}
      <div className="xl:hidden fixed top-0 left-0 w-full bg-white border-b z-50 p-4 flex justify-between items-center shadow-sm">
        <h2 className="font-bold text-slate-900 italic uppercase tracking-tighter">SRI KUMAR<span className="text-orange-600">.</span></h2>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-slate-50 rounded-lg text-slate-900 border border-slate-200">
          <Menu size={20} />
        </button>
      </div>

      {/* --- 🔹 LEFT SIDEBAR NAVIGATION --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-slate-100 p-6 transform transition-transform duration-300 xl:relative xl:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="mb-8 hidden xl:block">
          <h2 className="text-xl font-black text-slate-900 tracking-tighter uppercase italic flex items-center gap-1">
            SRI KUMAR<span className="text-orange-600">.</span>
          </h2>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">Certified Spares 2026</p>
        </div>

        <div className="relative mb-8 mt-12 xl:mt-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
          <input 
            type="text" 
            placeholder="Search SKU..." 
            className="w-full bg-[#f8fafc] border border-slate-100 rounded-lg py-2.5 pl-9 pr-4 text-xs focus:outline-none focus:ring-1 focus:ring-slate-200 text-slate-600"
          />
        </div>

        <nav className="space-y-1.5 overflow-y-auto pr-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setFilter(cat.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 group flex items-center justify-between
              ${filter === cat.id 
                ? 'bg-[#0f172a] text-white shadow-lg' 
                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'}`}
            >
              <div className="flex items-center gap-3">
                <cat.icon size={16} className={filter === cat.id ? 'text-orange-500' : 'text-slate-300'} />
                <span className="text-[10px] font-bold uppercase tracking-widest">{cat.name}</span>
              </div>
              <ChevronRight size={12} className={`${filter === cat.id ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-50 flex items-center gap-3 text-slate-400">
          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center">
            <MapPin size={12} className="text-slate-300" />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 leading-tight">Hub: Coimbatore, TN</span>
        </div>
      </aside>

      {/* --- 🔹 MAIN CONTENT GRID --- */}
      <main className="flex-1 p-6 md:p-10 lg:p-12 bg-[#F9FBFC] overflow-y-auto pt-24 xl:pt-10">
        
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-3">
             <div className="h-[1px] w-6 bg-orange-600"></div>
             <p className="text-orange-600 font-bold uppercase text-[9px] tracking-[0.3em]">
               {filter === 'all' ? 'Full Spares Inventory' : `Filtered: ${CATEGORIES.find(c => c.id === filter).name}`}
             </p>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic leading-none">
            {CATEGORIES.find(c => c.id === filter).name}
          </h1>
        </header>

        {/* 🔹 Product Gallery (No logos in containers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-[2rem] p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col cursor-pointer hover:-translate-y-1 border border-slate-50"
              onClick={() => navigate(item.path)}
            >
              <div className="mb-4 text-center">
                <h3 className="text-sm font-bold text-slate-900 tracking-tight uppercase italic mb-1 truncate px-2">
                  {item.name}
                </h3>
                <div className="flex items-center justify-center gap-1.5">
                   <div className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                   <span className="text-[7px] font-black uppercase tracking-[0.2em] text-slate-400">Verified Stock</span>
                </div>
              </div>

              <div className="aspect-square bg-[#F1F5F9] rounded-[1.8rem] flex items-center justify-center p-8 relative overflow-hidden transition-all group-hover:bg-white border border-transparent group-hover:border-slate-100">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 drop-shadow-xl"
                />
              </div>

              {/* Minimalist Bottom Info */}
              <div className="mt-5 flex items-center justify-between bg-[#0f172a] rounded-xl p-3">
                <div>
                   <p className="text-[9px] font-black text-white leading-none tracking-widest">{item.sku}</p>
                   <p className="text-[6px] text-slate-500 font-bold uppercase tracking-widest mt-1">Available for Quote</p>
                </div>
                <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white group-hover:bg-orange-500 transition-colors">
                   <ChevronRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER ACTIONS */}
        <footer className="mt-24 pt-12 border-t border-slate-100 grid lg:grid-cols-2 gap-6">
            <div className="bg-white p-10 rounded-[3rem] shadow-sm flex items-center gap-8 border border-slate-100 group hover:border-orange-500/10 transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <HardHat size={28} />
                </div>
                <div>
                    <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-1 leading-none">Consultation</h4>
                    <p className="text-slate-400 text-[10px] italic font-medium leading-relaxed mt-2">Technical support for custom engine sizing and infrastructure projects.</p>
                </div>
            </div>
            <button className="bg-[#0f172a] p-10 rounded-[3rem] flex items-center gap-8 group hover:bg-orange-600 transition-all text-left shadow-xl shadow-slate-200">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-white">
                    <Box size={28} />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-1 leading-none">Bulk Orders</h4>
                    <p className="text-white/40 text-[10px] italic font-medium leading-relaxed mt-2">Competitive B2B volume pricing for industrial contracts across TN.</p>
                </div>
            </button>
        </footer>
      </main>
    </section>
  );
}