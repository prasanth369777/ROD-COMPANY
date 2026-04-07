import React, { useState } from 'react';
import { Drill, Hammer, Wind, Cog, Droplets, Box, ChevronRight, HardHat, MapPin, Search} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'drill-rods',
    name: 'Drill Rods',
    icon: Cog,
    title: 'Drill Rod Dealers in Tamilnadu',
    description: 'Sri Kumar Drill Rod Works, your trusted drill rod dealers in Tamilnadu.',
    items: [
      { name: 'Sandco Tapper Drill Rods', img: 'https://images.unsplash.com/photo-1581094120913-20739c9081bc?q=80&w=400' },
      { name: 'Blue Tapper Drill Rods', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400' },
      { name: 'Imported Drill Rods', img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400' }
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
      { name: 'Pulanka', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' },
      { name: 'LT', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400' },
      { name: 'Nanchang', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400' },
      { name: 'PLKS', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400' },
      { name: '7 Degree 34mm Taper Button Bit', img: 'https://images.unsplash.com/photo-1581094120913-20739c9081bc?q=80&w=400' }
    ],
    path: '/tapper-bits'
  },
  {
    id: 'jack-hammer',
    name: 'Jack Hammer Spares',
    icon: Hammer,
    items: [
      { name: 'PSI/MDS Jack Hammer', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400' },
      { name: 'Bush', img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400' },
      { name: 'Ranger Box', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' },
      { name: 'Piston', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400' },
      { name: 'Side Bolt', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400' },
      { name: 'Retainer Lock', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400' }
    ],
    path: '/jack-hammer'
  },
  {
    id: 'compressor',
    name: 'Compressor Parts',
    icon: Wind,
    items: [
      { name: 'Atlas Copco VT 4 Compressor Parts', img: 'https://images.unsplash.com/photo-1581094120913-20739c9081bc?q=80&w=400' },
      { name: 'Liner Set', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400' },
      { name: 'Rings', img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400' },
      { name: 'Valves', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' },
      { name: 'Air Filters', img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400' },
      { name: 'Oil Filters', img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400' }
    ],
    path: '/compressor'
  },
  {
    id: 'hoses',
    name: 'Hoses',
    icon: Droplets,
    items: [
      { name: 'Durlon Rock Drill Hose', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400' },
      { name: 'Standard Hoses', img: 'https://images.unsplash.com/photo-1581094120913-20739c9081bc?q=80&w=400' }
    ],
    path: '/hoses'
  },
  {
    id: 'pneumatic',
    name: 'Pneumatic Tools',
    icon: Box,
    items: [
      { name: 'Chipping Hammer', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400' },
      { name: 'Pavement Breaker Spares', img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400' },
      { name: 'Pneumatic Rammer', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' }
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
      <aside className="w-80 bg-white border-r border-gray-200 p-8 hidden xl:flex flex-col sticky top-0 h-screen">
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

       {/* SUBTOPICS GRID (SMALLER CARD VARIANT) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activeTab.items.map((subItem, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-[2rem] p-3 pb-4 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col cursor-pointer hover:-translate-y-1.5"
              onClick={() => navigate(activeTab.path)}
            >
              {/* Product Info Header - Reduced Spacing/Size */}
              <div className="px-4 py-5 text-center">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-tight mb-1 line-clamp-1">
                  {subItem.name}
                </h3>
                <div className="flex items-center justify-center gap-1.5 text-slate-400">
                   <div className="w-1 h-1 rounded-full bg-green-500"></div>
                   <span className="text-[8px] font-black uppercase tracking-widest">In Stock</span>
                </div>
              </div>

              {/* Image Container - Adjusted Aspect Ratio for Compactness */}
              <div className="aspect-[4/5] bg-[#E8EAEF] rounded-[1.5rem] flex items-center justify-center p-6 relative overflow-hidden transition-all group-hover:bg-[#E2E4E9]">
                <img 
                  src={subItem.img} 
                  alt={subItem.name} 
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-white opacity-20 blur-3xl rounded-full"></div>
              </div>

              {/* Bottom Action Bar - Scaled Down Elements */}
              <div className="mt-4 px-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                    <activeTab.icon size={12} />
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-[9px] font-black text-slate-900 uppercase leading-none">SP-0{index + 1}</p>
                    <p className="text-[8px] text-slate-400 font-medium">12m ago</p>
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