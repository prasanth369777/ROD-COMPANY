import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react'; // 🔹 Using Iconify for high-precision stroke icons

// Product Image Imports based on your folder structure
import PulakanaImg from "../../assests/productimg/Pulakana/1.webp";
import LTImg from "../../assests/productimg/LT (1)/1.webp";
import NanchangImg from "../../assests/productimg/Nanchang +/1.webp";
import PLKSImg from "../../assests/productimg/PLKS/1.webp";
import BushImg from "../../assests/productimg/Bush/1.webp";
import RangerBoxImg from "../../assests/productimg/Bush/2.webp"; // Used for Ranger Box
import PistonImg from "../../assests/productimg/Piston/1.webp";
import SideBoldImg from "../../assests/productimg/Side bold-/1.webp";
import RetainerLockImg from "../../assests/productimg/Piston-/1.webp"; // Using Piston- as Retainer placeholder if needed
import LinerSetImg from "../../assests/productimg/Liner set/1.webp";
import ConnectRodImg from "../../assests/productimg/Connect Rod/1.webp";
import FiltersImg from "../../assests/productimg/Air filter and Oil filter/1.webp";
import RingsImg from "../../assests/productimg/Rings/1.webp";
import ValvesImg from "../../assests/productimg/Valves/1.webp";
import SandcoRodsImg from "../../assests/productimg/Sandco Tapper drill rods/1.webp";

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const productData = [
    {
      id: 'bits',
      category: 'Tapper button bits',
      icon: "ph:nut-light", // 🔹 Professional Stroke Icon
      items: [
        { name: 'Pulanka', code: 'SK-B1', path: "/tapper-bits/pulanka", img: PulakanaImg },
        { name: 'LT', code: 'SK-B2', path: "/tapper-bits/lt", img: LTImg },
        { name: 'Nanchang +', code: 'SK-B3', path: "/tapper-bits/nanchang-plus", img: NanchangImg },
        { name: 'PLKS', code: 'SK-B4', path: "/tapper-bits/plks", img: PLKSImg }
      ]
    },
    {
      id: 'jack',
      category: 'PSI/MDS Jack Hammer',
      icon: "ph:hammer-light", 
      items: [
        { name: 'Bush', code: 'SK-J1', path: "/jack-hammer/bush", img: BushImg },
        { name: 'Ranger Box', code: 'SK-J2', path: "/jack-hammer/ranger-box", img: RangerBoxImg },
        { name: 'Piston', code: 'SK-J3', path: "/jack-hammer/piston", img: PistonImg },
        { name: 'Side bold', code: 'SK-J4', path: "/jack-hammer/side-bolt", img: SideBoldImg },
        { name: 'Retainer lock', code: 'SK-J5', path: "/jack-hammer/retainer-lock", img: RetainerLockImg }
      ]
    },
    {
      id: 'comp',
      category: 'Atlas Copco VT 4 Compressor',
      icon: "ph:wind-light",
      items: [
        { name: 'Liner set', code: 'SK-C1', path: "/compressor/liner-set", img: LinerSetImg },
        { name: 'Piston', code: 'SK-C2', path: "/compressor/piston", img: PistonImg },
        { name: 'Connect Rod', code: 'SK-C3', path: "/compressor/connect-rod", img: ConnectRodImg },
        { name: 'Air & Oil filter', code: 'SK-C4', path: "/compressor/filters", img: FiltersImg },
        { name: 'Rings', code: 'SK-C5', path: "/compressor/rings", img: RingsImg },
        { name: 'Valves', code: 'SK-C6', path: "/compressor/valves", img: ValvesImg }
      ]
    },
    {
      id: 'rods',
      category: 'Drill Rods',
      icon: "ph:columns-light",
      items: [
        { name: 'Sandco Tapper drill rods', code: 'SK-R1', path: "/drill-rods/sandco", img: SandcoRodsImg },
        { name: 'Blue Tapper drill rods', code: 'SK-R2', path: "/drill-rods/blue-tapper", img: SandcoRodsImg },
        { name: 'Imported drill rods', code: 'SK-R3', path: "/drill-rods/imported", img: SandcoRodsImg }
      ]
    },
    {
      id: 'hose',
      category: 'Hose',
      icon: "ph:waves-light",
      items: [
        { name: 'Durlon Rock drill hose', code: 'SK-H1', path: "/hoses/durlon", img: FiltersImg },
        { name: 'Standard', code: 'SK-H2', path: "/hoses/standard", img: FiltersImg },
        { name: 'Drillon', code: 'SK-H3', path: "/hoses/drillon", img: FiltersImg }
      ]
    }
  ];

  // Helper to map sidebar with Icons
  const sidebarItems = [
    { name: 'All', icon: "ph:squares-four-light" },
    ...productData.map(p => ({ name: p.category, icon: p.icon }))
  ];

  const getVisibleProducts = () => {
    let list = [];
    if (activeCategory === 'All') {
      productData.forEach(cat => {
        cat.items.forEach(item => list.push({ ...item, parentCat: cat.category }));
      });
    } else {
      const found = productData.find(p => p.category === activeCategory);
      if (found) {
        found.items.forEach(item => list.push({ ...item, parentCat: found.category }));
      }
    }
    if (searchQuery) {
      return list.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return list;
  };

  const visibleProducts = getVisibleProducts();

  return (
    <div className="bg-white min-h-screen font-['Inter'] flex text-slate-900 antialiased">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-80 border-r border-slate-100 h-screen sticky top-0 hidden xl:flex flex-col bg-[#FDFDFD] pt-32">
        <div className="px-8 flex-1 overflow-y-auto">
          <div className="relative mb-8">
            <Icon icon="ph:magnifying-glass-light" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" width="14" />
            <input 
              type="text" 
              placeholder="Search components..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-lg py-2.5 pl-9 pr-4 text-xs font-light focus:outline-none focus:ring-1 focus:ring-orange-600/20"
            />
          </div>

          <nav className="space-y-1 pb-10">
            <p className="text-[10px] font-semibold text-slate-300 uppercase tracking-[0.2em] mb-4 px-2">Registry</p>
            {sidebarItems.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`w-full text-left px-4 py-3 rounded-lg text-[11px] font-semibold uppercase tracking-widest transition-all flex items-center justify-between group ${activeCategory === cat.name ? 'bg-slate-900 text-white shadow-lg translate-x-2' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                <div className="flex items-center gap-3">
                  <Icon icon={cat.icon} width="18" className={activeCategory === cat.name ? "text-orange-500" : "text-slate-300"} />
                  {cat.name}
                </div>
                <Icon icon="ph:caret-right-light" width="12" className={`${activeCategory === cat.name ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`} />
              </button>
            ))}
          </nav>
        </div>

        <div className="p-8 border-t border-slate-50 mb-10">
           <div className="bg-orange-50 p-6 rounded-2xl">
              <Icon icon="ph:shield-check-light" className="text-orange-600 mb-3" width="20" />
              <p className="text-[10px] font-semibold text-orange-900 uppercase mb-1 tracking-tight">Technical Support</p>
              <p className="text-[10px] text-orange-700/70 font-light leading-relaxed">Expert assistance for all drilling site requirements.</p>
           </div>
        </div>
      </aside>

      {/* RIGHT SIDE - PRODUCTS */}
      <main className="flex-1 bg-white pt-32 pb-32">
        <header className="px-8 lg:px-12 mb-12 flex justify-between items-center">
            <div>
                <h1 className="text-sm font-semibold uppercase tracking-[0.3em] flex items-center gap-3">
                   {activeCategory} 
                   <span className="bg-slate-100 text-slate-400 text-[10px] font-medium px-2 py-0.5 rounded-full">{visibleProducts.length}</span>
                </h1>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
                <button className="p-2 hover:text-slate-900 transition-colors"><Icon icon="ph:grid-four-light" width="18" /></button>
                <button className="p-2 hover:text-slate-900 transition-colors border-l border-slate-100 pl-4"><Icon icon="ph:list-light" width="18" /></button>
            </div>
        </header>

        <div className="px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16">
            {visibleProducts.map((product, idx) => (
              <div 
                key={idx} 
                className="group cursor-pointer"
                onClick={() => navigate(product.path)}
              >
                <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden mb-6 relative border border-slate-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-slate-200 group-hover:-translate-y-1">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[8px] font-semibold tracking-widest border border-slate-100 uppercase shadow-sm text-slate-500">
                    {product.code}
                  </div>
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-orange-600 text-white p-3 rounded-xl shadow-xl flex items-center justify-center">
                        <Icon icon="ph:arrow-right-light" width="16" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      {product.parentCat}
                    </span>
                  </div>
                  <h3 className="text-sm font-medium uppercase tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">In Stock</span>
                    </div>
                    <span className="text-[9px] font-semibold text-slate-900 border border-slate-900 px-2 py-0.5 rounded italic uppercase font-mono">M-Series</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="mt-32 bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden group">
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white">
                            <Icon icon="ph:truck-light" width="20" />
                        </div>
                        <span className="text-orange-500 text-[10px] font-semibold uppercase tracking-[0.4em]">Direct Site Delivery</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-light uppercase italic tracking-tighter leading-none mb-6">
                        Bulk Logistics <br /> For Quarry Sites.
                    </h2>
                    <p className="text-slate-400 text-lg italic max-w-md font-light">Immediate dispatch for high-volume orders to major mining hubs across Tamil Nadu.</p>
                </div>
                <div className="flex flex-col lg:items-end gap-8">
                    <div className="flex items-center gap-4 text-right">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 mb-1 text-white/40">Service Hours</p>
                            <p className="text-sm font-semibold uppercase tracking-tighter">24/7 Supply Support</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center shadow-inner">
                            <Icon icon="ph:clock-light" width="20" className="text-orange-600" />
                        </div>
                    </div>
                    <button 
                      onClick={() => navigate('/contactus')}
                      className="bg-white text-slate-900 px-10 py-5 rounded-full font-semibold uppercase text-xs tracking-widest hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
                    >
                        Request Site Quote
                    </button>
                </div>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-orange-600/5 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;