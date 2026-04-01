import React, { useState } from 'react';
import { Drill, Hammer, Wind, Cog, Droplets, Box, ChevronRight, HardHat, MapPin, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 'drill-rods',
    name: 'Drill Rods',
    icon: Cog,
    title: 'Drill Rod Dealers in Tamilnadu',
    description: 'Sri Kumar Drill Rod Works, your trusted drill rod dealers in Tamilnadu. We offer a full range of high-performance rods for mining, construction, and infrastructure projects across the state.',
    items: ['Sandco Tapper Drill Rods', 'Blue Tapper Drill Rods', 'Imported Drill Rods', 'Precision Heat-Treated Rods'],
    path: '/drill-rods/sandco'
  },
  {
    id: 'taper-bits',
    name: 'Tapered Button Bits',
    icon: Drill,
    title: 'Quality Tapered Button Bits Suppliers',
    description: 'As a leading tapered button bits supplier in Tamilnadu, we offer a variety of sizes and angles to match different rock conditions. Perfect for granite quarrying and road construction.',
    items: ['Pulanka Series', 'LT Button Bits', 'Nanchang +', 'PLKS', '7 Degree 34mm Taper Bit'],
    path: '/tapper-bits/pulanka'
  },
  {
    id: 'jackhammer',
    name: 'Jackhammer Spares',
    icon: Hammer,
    title: 'Jackhammer Spare Parts Distributor',
    description: 'Dedicated jackhammer spare parts distributor in Tamilnadu. We stock critical components for MDS and PSI models to ensure your equipment gets back to the site quickly.',
    items: ['Pistons', 'Bush Kits', 'Ranger Box', 'Side Bolt', 'Retainer Lock', 'Valve Assemblies'],
    path: '/jack-hammer/bush'
  },
  {
    id: 'compressor',
    name: 'Compressor Parts',
    icon: Wind,
    title: 'Atlas Copco VT 4 Spares',
    description: 'Preferred source for rock drill spare parts in Tamilnadu. We maintain a strong stock of genuine compressor spares to minimize downtime and maximize productivity.',
    items: ['Liner Set', 'Piston Rings', 'Valve Sets', 'Air Filters', 'Oil Filters', 'Connect Rods'],
    path: '/compressor/liner-set'
  },
  {
    id: 'hoses',
    name: 'Hose Systems',
    icon: Droplets,
    title: 'Durlon & Standard Hoses',
    description: 'High-pressure rock drill hoses designed for extreme pneumatic environments. Our shelves are always stocked with durable assemblies for professional execution.',
    items: ['Durlon Rock Drill Hose', 'Standard Hoses', 'High-Pressure Assemblies', 'Abrasive Resistant Hoses'],
    path: '/hoses/durlon'
  },
  {
    id: 'pneumatic',
    name: 'Pneumatic Tools',
    icon: Box,
    title: 'Heavy Duty Pneumatic Tools',
    description: 'Catering to a diverse clientele from individual owners to mining contractors. Quality tools designed for durability, performance, and safety on every job site.',
    items: ['Chipping Hammer', 'Pavement Breaker Spares', 'Pneumatic Rammer', 'Technical Identification Support'],
    path: '/contactus'
  }
];

export default function IndustrialSolutions() {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen flex font-['Inter']">
      
      {/* LEFT SIDEBAR - Matching the Image */}
      <aside className="w-80 border-r border-gray-100 p-8 hidden xl:flex flex-col sticky top-0 h-screen">
        <div className="mb-10">
          <h2 className="text-2xl font-black text-slate-900 tracking-tighter">
            SRI KUMAR<span className="text-orange-600">.</span>
          </h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Industrial Tech 2026</p>
        </div>

        {/* Sidebar Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
          <input 
            type="text" 
            placeholder="Search catalogue..." 
            className="w-full bg-slate-50 border border-slate-100 rounded-lg py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-1 overflow-y-auto pr-2">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Product Inventory</p>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 group flex items-center justify-between
              ${activeTab.id === cat.id 
                ? 'bg-orange-50 text-orange-600 shadow-sm' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
            >
              <span className="text-xs font-bold uppercase tracking-wider">{cat.name}</span>
              {activeTab.id === cat.id && <div className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse"></div>}
            </button>
          ))}
        </nav>

        {/* Sidebar Footer Info */}
        <div className="mt-auto pt-8 border-t border-gray-100">
            <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Coimbatore, TN</span>
            </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 p-8 lg:p-16 bg-slate-50/50">
        
        {/* Catalog Header */}
        <header className="mb-16">
          <div className="flex items-baseline gap-4">
             <h1 className="text-6xl font-black text-slate-900 tracking-tighter">
                All <span className="font-light italic text-slate-300">Products.</span>
             </h1>
          </div>
          <div className="flex items-center gap-3 mt-4">
              <div className="h-[1px] w-8 bg-orange-600"></div>
              <p className="text-orange-600 font-black uppercase text-[10px] tracking-[0.3em]">
                {activeTab.name} — {activeTab.items.length} units in stock
              </p>
          </div>
        </header>

        {/* Dynamic Product Detail Card */}
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl overflow-hidden p-8 lg:p-12 mb-12 relative">
            <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                <activeTab.icon size={350} />
            </div>

            <div className="max-w-4xl relative z-10">
                <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">
                    {activeTab.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium italic">
                    {activeTab.description}
                </p>

                {/* Sub-item Grid with Bullet UI */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {activeTab.items.map((item, index) => (
                        <div key={index} className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-orange-200 transition-all">
                            <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]"></div>
                            <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{item}</span>
                        </div>
                    ))}
                </div>

                <button 
                  onClick={() => navigate(activeTab.path)}
                  className="flex items-center gap-4 px-12 py-5 bg-orange-600 text-white rounded-full font-black uppercase text-xs tracking-[0.3em] hover:bg-slate-900 transition-all shadow-xl active:scale-95 group"
                >
                  Explore Detailed Solutions <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
        </div>

        {/* Technical Footer Branding */}
        <footer className="grid lg:grid-cols-2 gap-8 mt-20">
            <div className="bg-slate-900 p-8 rounded-3xl flex items-center gap-6 group hover:bg-slate-800 transition-all cursor-default text-left">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-orange-500 transition-all shrink-0">
                    <HardHat className="text-orange-500" />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">Technical Consultation</h4>
                    <p className="text-slate-400 text-[11px] leading-relaxed italic">Our professionals listen to your requirements and provide rock-drill solutions that fit your budget.</p>
                </div>
            </div>

            <button className="bg-orange-600 p-8 rounded-3xl flex items-center gap-6 group hover:brightness-110 transition-all text-left w-full" onClick={() => navigate('/contactus')}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center border border-white/20 shrink-0">
                    <Box className="text-white" />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-xs mb-1">Bulk Sourcing Assistance</h4>
                    <p className="text-white/80 text-[11px] leading-relaxed italic underline decoration-white/30 underline-offset-4">Inquiries from contractors and government agencies are welcome.</p>
                </div>
            </button>
        </footer>

      </main>
    </section>
  );
}