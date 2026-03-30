import React, { useState } from 'react';
import { Drill, Hammer, Wind, Cog, Droplets, Box, ChevronRight, HardHat, MapPin } from 'lucide-react';
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
    name: 'Jack Hammer Spares',
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
    <section className="py-24 bg-slate-50 font-['Inter']">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 uppercase tracking-tight">
            Our Core <span className="text-orange-600">Strategic Solutions</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium">
            Sri Kumar Drill Rod Works offers complete rock drill and mining solutions under one roof. 
            Click on any service to explore detailed technical inventory.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Side: Navigation Tabs */}
          <div className="w-full lg:w-1/4 space-y-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat)}
                className={`w-full flex items-center gap-4 px-6 py-5 rounded-2xl transition-all duration-300 text-left border shadow-sm
                ${activeTab.id === cat.id 
                  ? 'bg-orange-600 border-orange-600 text-white shadow-orange-200' 
                  : 'bg-white border-slate-100 text-slate-600 hover:bg-slate-50'}`}
              >
                <cat.icon size={20} className={activeTab.id === cat.id ? 'text-white' : 'text-orange-600'} />
                <span className="font-bold text-sm uppercase tracking-wider">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Right Side: Content Display Card */}
          <div className="w-full lg:w-3/4 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl p-10 lg:p-16 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                <activeTab.icon size={300} className="text-slate-900" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">
                {activeTab.title}
              </h3>
              <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-4xl italic font-medium">
                {activeTab.description}
              </p>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
                {activeTab.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-5 bg-slate-50 rounded-xl border border-slate-100 group hover:border-orange-500/30 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                    <span className="text-sm font-bold text-slate-700 uppercase tracking-tight">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button 
                onClick={() => navigate(activeTab.path)}
                className="flex items-center gap-4 px-10 py-5 bg-orange-600 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl active:scale-95 group"
              >
                Explore {activeTab.name} <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Technical Identification Support Footer */}
        <div className="mt-20 p-8 bg-slate-900 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
            <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-orange-600/10 rounded-2xl flex items-center justify-center border border-orange-600/20">
                    <HardHat className="text-orange-500" />
                </div>
                <div>
                    <h4 className="text-white font-black uppercase tracking-widest text-sm mb-1">Unsure of technical specs?</h4>
                    <p className="text-slate-400 text-xs italic">Our knowledgeable staff can help you identify the exact rock drill part you need.</p>
                </div>
            </div>
            <div className="flex items-center gap-4 text-white">
                <MapPin className="text-orange-500" size={18} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">HQ: Coimbatore, Tamil Nadu</span>
            </div>
        </div>
      </div>
    </section>
  );
}