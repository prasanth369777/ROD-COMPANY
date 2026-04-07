import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, Package, Settings, Wind, Cog, Droplets, ShieldCheck, Truck, LayoutGrid, List, ChevronRight } from 'lucide-react';

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const productData = [
    {
      id: 'bits',
      category: 'Tapper button bits',
      path: "/tapper-bits",
      icon: <Cog size={18} />,
      items: [
        { name: 'Pulanka', code: 'SK-B1', path: "/tapper-bits/pulanka", img: 'https://images.unsplash.com/photo-1581094120913-20739c9081bc?q=80&w=400' },
        { name: 'LT', code: 'SK-B2', path: "/tapper-bits/lt", img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400' },
        { name: 'Nanchang +', code: 'SK-B3', path: "/tapper-bits/nanchang-plus", img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400' },
        { name: 'PLKS', code: 'SK-B4', path: "/tapper-bits/plks", img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' }
      ]
    },
    {
      id: 'jack',
      category: 'PSI/MDS Jack Hammer',
      path: "/jack-hammer",
      icon: <Settings size={18} />,
      items: [
        { name: 'Bush', code: 'SK-J1', path: "/jack-hammer/bush", img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400' },
        { name: 'Ranger Box', code: 'SK-J2', path: "/jack-hammer/ranger-box", img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400' },
        { name: 'Piston', code: 'SK-J3', path: "/jack-hammer/piston", img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400' },
        { name: 'Side bold', code: 'SK-J4', path: "/jack-hammer/side-bolt", img: 'https://images.unsplash.com/photo-1581094120913-20739c9081bc?q=80&w=400' },
        { name: 'Retainer lock', code: 'SK-J5', path: "/jack-hammer/retainer-lock", img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400' }
      ]
    },
    {
      id: 'comp',
      category: 'atlas copco VT 4 Compressor',
      path: "/compressor",
      icon: <Wind size={18} />,
      items: [
        { name: 'Liner set', code: 'SK-C1', path: "/compressor/liner-set", img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400' },
        { name: 'Piston', code: 'SK-C2', path: "/compressor/piston", img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' },
        { name: 'Connect Rod', code: 'SK-C3', path: "/compressor/connect-rod", img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400' },
        { name: 'Air filter and Oil filter', code: 'SK-C4', path: "/compressor/filters", img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400' },
        { name: 'Rings', code: 'SK-C5', path: "/compressor/rings", img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400' },
        { name: 'Valves', code: 'SK-C6', path: "/compressor/valves", img: 'https://images.unsplash.com/photo-1581094120913-20739c9081bc?q=80&w=400' }
      ]
    },
    {
      id: 'rods',
      category: 'Drill Rods',
      path: "/drill-rods",
      icon: <Package size={18} />,
      items: [
        { name: 'Sandco Tapper drill rods', code: 'SK-R1', path: "/drill-rods/sandco", img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=400' },
        { name: 'Blue Tapper drill rods', code: 'SK-R2', path: "/drill-rods/blue-tapper", img: 'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=400' },
        { name: 'Imported drill rods', code: 'SK-R3', path: "/drill-rods/imported", img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400' }
      ]
    },
    {
      id: 'hose',
      category: 'Hose',
      path: "/hoses",
      icon: <Droplets size={18} />,
      items: [
        { name: 'Durlon Rock drill hose', code: 'SK-H1', path: "/hoses/durlon", img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400' },
        { name: 'Standard', code: 'SK-H2', path: "/hoses/standard", img: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=400' },
        { name: 'Drillon', code: 'SK-H3', path: "/hoses/drillon", img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400' }
      ]
    }
  ];

  const sidebarCategories = ['All', ...productData.map(p => p.category)];

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
    <div className="bg-white min-h-screen font-['Inter'] flex text-slate-900">
      
      {/* LEFT SIDEBAR - TOPICS */}
      <aside className="w-80 border-r border-slate-100 h-screen sticky top-0 hidden xl:flex flex-col bg-[#FDFDFD] pt-32">
        <div className="px-8 flex-1 overflow-y-auto">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
            <input 
              type="text" 
              placeholder="Search components..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-lg py-2.5 pl-9 pr-4 text-xs font-medium focus:outline-none focus:ring-1 focus:ring-orange-600/20"
            />
          </div>

          <nav className="space-y-1 pb-10">
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.2em] mb-4">Product Groups</p>
            {sidebarCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`w-full text-left px-4 py-3 rounded-lg text-[11px] font-bold uppercase tracking-widest transition-all flex items-center justify-between group ${activeCategory === cat ? 'bg-slate-900 text-white shadow-lg translate-x-2' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                {cat}
                <ChevronRight size={12} className={`${activeCategory === cat ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 transition-opacity`} />
              </button>
            ))}
          </nav>
        </div>

        <div className="p-8 border-t border-slate-50 mb-10">
           <div className="bg-orange-50 p-6 rounded-2xl">
              <ShieldCheck className="text-orange-600 mb-3" size={20} />
              <p className="text-[10px] font-black text-orange-900 uppercase mb-1 tracking-tight">Technical Support</p>
              <p className="text-[10px] text-orange-700/70 font-medium leading-relaxed">Expert assistance for all drilling site requirements.</p>
           </div>
        </div>
      </aside>

      {/* RIGHT SIDE - PRODUCTS */}
      <main className="flex-1 bg-white pt-32 pb-32">
        
        <header className="px-8 lg:px-12 mb-12 flex justify-between items-center">
            <div>
                <h1 className="text-sm font-black uppercase tracking-[0.3em] flex items-center gap-3">
                   {activeCategory} 
                   <span className="bg-slate-100 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded-full">{visibleProducts.length}</span>
                </h1>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
                <button className="p-2 hover:text-slate-900 transition-colors"><LayoutGrid size={18} /></button>
                <button className="p-2 hover:text-slate-900 transition-colors border-l border-slate-100 pl-4"><List size={18} /></button>
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
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-[8px] font-black tracking-widest border border-slate-100 uppercase shadow-sm">
                    {product.code}
                  </div>
                  <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="bg-orange-600 text-white p-3 rounded-xl shadow-xl">
                        <ArrowRight size={16} />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                      {product.parentCat}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">In Stock</span>
                    </div>
                    <span className="text-[9px] font-black text-slate-900 border border-slate-900 px-2 py-0.5 rounded italic uppercase">M-Series</span>
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
                        <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                            <Truck size={20} />
                        </div>
                        <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">Direct Site Delivery</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black uppercase italic tracking-tighter leading-none mb-6">
                        Bulk Logistics <br /> For Quarry Sites.
                    </h2>
                    <p className="text-slate-400 text-lg italic max-w-md">Immediate dispatch for high-volume orders to major mining hubs across Tamil Nadu.</p>
                </div>
                <div className="flex flex-col lg:items-end gap-8">
                    <div className="flex items-center gap-4 text-right">
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Service Hours</p>
                            <p className="text-sm font-bold uppercase tracking-tighter">24/7 Supply Support</p>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center shadow-inner">
                            <Wind size={20} className="text-orange-600" />
                        </div>
                    </div>
                    <button 
                      onClick={() => navigate('/contactus')}
                      className="bg-white text-slate-900 px-10 py-5 rounded-full font-black uppercase text-xs tracking-widest hover:bg-orange-600 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
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