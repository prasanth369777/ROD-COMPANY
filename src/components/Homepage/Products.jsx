import React, { useState } from 'react';
import { Drill, Hammer, Wind, Cog, Droplets, Box, ChevronRight, HardHat, MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// PRODUCT IMAGE IMPORTS (Adjusting to your folder structure)
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

const categories = [
  {
    id: 'drill-rods',
    name: 'Drill Rods',
    icon: Cog,
    title: 'Drill Rod Dealers in Tamilnadu',
    description: 'Sri Kumar Drill Rod Works, your trusted drill rod dealers in Tamilnadu.',
    items: [
      { name: 'Sandco Tapper Drill Rods', img: SandcoRodsImg },
      { name: 'Blue Tapper Drill Rods', img: SandcoRodsImg }, 
      { name: 'Imported Drill Rods', img: SandcoRodsImg } // DUPLICATE AS REQUESTED
    ],
    path: '/drill-rods'
  },
  {
    id: 'tapered-bits',
    name: 'Tapered Button Bits',
    icon: Drill,
    title: 'Quality Tapered Button Bits Suppliers',
    description: 'Variety of sizes and angles to match different rock conditions.',
    items: [
      { name: 'Pulanka', img: PulakanaImg },
      { name: 'LT', img: LTImg },
      { name: 'Nanchang', img: NanchangImg },
      { name: 'PLKS', img: PLKSImg },
      { name: '7 Degree 34mm Taper Button Bit', img: PulakanaImg }
    ],
    path: '/tapper-bits'
  },
  {
    id: 'jack-hammer',
    name: 'Jack Hammer Spares',
    icon: Hammer,
    items: [
      { name: 'PSI/MDS Jack Hammer', img: BushImg },
      { name: 'Bush', img: BushImg },
      { name: 'Ranger Box', img: BushImg }, // DUPLICATE AS REQUESTED
      { name: 'Piston', img: PistonImg },
      { name: 'Side Bolt', img: SideBoldImg },
      { name: 'Retainer Lock', img: RetainerLockImg }
    ],
    path: '/jack-hammer'
  },
  {
    id: 'compressor',
    name: 'Compressor Parts',
    icon: Wind,
    items: [
      { name: 'Atlas Copco VT 4 Compressor Parts', img: LinerSetImg },
      { name: 'Liner Set', img: LinerSetImg },
      { name: 'Connect Rod', img: ConnectRodImg },
      { name: 'Air & Oil Filters', img: FiltersImg },
      { name: 'Rings', img: RingsImg },
      { name: 'Valves', img: ValvesImg }
    ],
    path: '/compressor'
  },
  {
    id: 'hoses',
    name: 'Hoses',
    icon: Droplets,
    items: [
      { name: 'Durlon Rock Drill Hose', img: FiltersImg }, // DUPLICATE AS REQUESTED
      { name: 'Standard Hoses', img: FiltersImg },      // DUPLICATE AS REQUESTED
      { name: 'Drillon', img: FiltersImg }             // DUPLICATE AS REQUESTED
    ],
    path: '/hoses'
  },
  {
    id: 'pneumatic',
    name: 'Pneumatic Tools',
    icon: Box,
    items: [
      { name: 'Chipping Hammer', img: BushImg },
      { name: 'Pavement Breaker Spares', img: SideBoldImg },
      { name: 'Pneumatic Rammer', img: PistonImg }
    ],
    path: '/pneumatic'
  }
];

export default function IndustrialSolutions() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const navigate = useNavigate();

  return (
    <section className="bg-slate-100 min-h-screen flex font-['Inter']">
      
      {/* LEFT SIDEBAR - MASTER TOPICS */}
      <aside className="w-80 bg-white border-r border-gray-200 p-8 hidden xl:flex flex-col sticky top-0 h-screen shadow-sm">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">
            SRI KUMAR<span className="text-orange-600">.</span>
          </h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Industrial Tech 2026</p>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
          <input 
            type="text" 
            placeholder="Filter categories..." 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
        </div>

        <nav className="space-y-1 overflow-y-auto pr-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat)}
              className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 group flex items-center justify-between
              ${activeTab.id === cat.id 
                ? 'bg-slate-900 text-white shadow-xl translate-x-2' 
                : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <div className="flex items-center gap-3">
                <cat.icon size={16} className={activeTab.id === cat.id ? 'text-orange-500' : 'text-slate-300'} />
                <span className="text-[11px] font-black uppercase tracking-wider">{cat.name}</span>
              </div>
              <ChevronRight size={14} className={activeTab.id === cat.id ? 'opacity-100' : 'opacity-0'} />
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-8 border-t border-gray-100 flex items-center gap-3 text-slate-400">
          <MapPin size={14} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Coimbatore, TN</span>
        </div>
      </aside>

      {/* RIGHT SIDE - SUBTOPICS GRID */}
      <main className="flex-1 p-8 lg:p-16 bg-[#F2F4F7] overflow-y-auto">
        
        {/* Dynamic Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-[2px] w-8 bg-orange-600"></div>
             <p className="text-orange-600 font-black uppercase text-[10px] tracking-[0.4em]">Current Selection</p>
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter">
            {activeTab.name.split(' ')[0]} <span className="font-light italic text-slate-300">{activeTab.name.split(' ').slice(1).join(' ')}</span>
          </h1>
        </header>

        {/* SUBTOPICS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeTab.items.map((subItem, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-[2rem] p-3 pb-4 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col cursor-pointer hover:-translate-y-1.5"
              onClick={() => navigate(activeTab.path)}
            >
              <div className="px-4 py-5 text-center">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-tight mb-1 line-clamp-1">
                  {subItem.name}
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-slate-400">
                   <div className="w-1 h-1 rounded-full bg-green-500"></div>
                   <span className="text-[8px] font-black uppercase tracking-widest">In Stock</span>
                </div>
              </div>

              <div className="aspect-[4/5] bg-[#E8EAEF] rounded-[1.5rem] flex items-center justify-center p-6 relative overflow-hidden transition-all group-hover:bg-[#E2E4E9]">
                <img 
                  src={subItem.img} 
                  alt={subItem.name} 
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-white opacity-20 blur-3xl rounded-full"></div>
              </div>

              <div className="mt-4 px-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                    <activeTab.icon size={12} />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-[9px] font-black text-slate-900 uppercase leading-none">SP-0{index + 1}</p>
                    <p className="text-[8px] text-slate-400 font-medium">Updated 12m ago</p>
                  </div>
                </div>
                
                <button className="bg-slate-900 hover:bg-orange-600 text-white px-4 py-2 rounded-xl transition-all">
                  <span className="text-[9px] font-bold uppercase tracking-tight">Details</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Interaction */}
        <footer className="mt-20 border-t border-slate-200 pt-12 grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-[3rem] shadow-sm flex items-center gap-6 group hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-900">
                    <HardHat size={24} />
                </div>
                <div>
                    <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-1">Consultation Available</h4>
                    <p className="text-slate-400 text-[10px] italic">Expert support for {activeTab.name} sizing and application.</p>
                </div>
            </div>
            <button className="bg-slate-900 p-8 rounded-[3rem] flex items-center gap-6 group hover:bg-orange-600 transition-all text-left">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white">
                    <Box size={24} />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-1">Bulk Sourcing</h4>
                    <p className="text-white/60 text-[10px] italic">Inquire about volume pricing for industrial contracts.</p>
                </div>
            </button>
        </footer>
      </main>
    </section>
  );
}