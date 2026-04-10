import React from 'react';


// 🔹 Automated Imports for all categories (1.webp and 2.webp)
import AirFilter1 from "../../assests/productimg/Air filter and Oil filter/1.webp";
import AirFilter2 from "../../assests/productimg/Air filter and Oil filter/2.webp";
import Bush1 from "../../assests/productimg/Bush/1.webp";
import Bush2 from "../../assests/productimg/Bush/2.webp";
import ConnectRod1 from "../../assests/productimg/Connect Rod/1.webp";
import ConnectRod2 from "../../assests/productimg/Connect Rod/2.webp";
import LinerSet1 from "../../assests/productimg/Liner set/1.webp";
import LinerSet2 from "../../assests/productimg/Liner set/2.webp";
import Piston1 from "../../assests/productimg/Piston/1.webp";
import Piston2 from "../../assests/productimg/Piston/2.webp";
import Rings1 from "../../assests/productimg/Rings/1.webp";
import Rings2 from "../../assests/productimg/Rings/2.webp";
import Valves1 from "../../assests/productimg/Valves/1.webp";
import Valves2 from "../../assests/productimg/Valves/2.webp";

const products = [
  { id: 1, name: "Air & Oil Filters", img: AirFilter1, sku: "AF-101", size: "tall" },
  { id: 2, name: "Premium Bushing", img: Bush1, sku: "BS-101", size: "short" },
  { id: 3, name: "Connect Rod v1", img: ConnectRod1, sku: "CR-101", size: "tall" },
  { id: 4, name: "Liner Set Pro", img: LinerSet1, sku: "LS-101", size: "short" },
  { id: 5, name: "Piston Engine", img: Piston1, sku: "PS-101", size: "tall" },
  { id: 6, name: "Sealing Rings", img: Rings1, sku: "RG-101", size: "short" },
  { id: 7, name: "Intake Valves", img: Valves1, sku: "VL-101", size: "tall" },
  { id: 8, name: "Secondary Filters", img: AirFilter2, sku: "AF-202", size: "short" },
  { id: 9, name: "Industrial Bush", img: Bush2, sku: "BS-202", size: "tall" },
  { id: 10, name: "Connect Rod v2", img: ConnectRod2, sku: "CR-202", size: "short" },
  { id: 11, name: "Liner Set Elite", img: LinerSet2, sku: "LS-202", size: "tall" },
  { id: 12, name: "Piston Core", img: Piston2, sku: "PS-202", size: "short" },
  { id: 13, name: "Compression Rings", img: Rings2, sku: "RG-202", size: "tall" },
  { id: 14, name: "Exhaust Valves", img: Valves2, sku: "VL-202", size: "short" },
];

export default function ProductGridScroll() {
  const row1 = products.filter(p => p.id <= 7);
  const row2 = products.filter(p => p.id > 7);

  const ProductCard = ({ item, isTall }) => (
    <div className={`flex-shrink-0 ${isTall ? 'w-[300px] h-[450px]' : 'w-[280px] h-[380px]'} relative group cursor-pointer`}>
      <div className="relative w-full h-full rounded-none bg-white border border-slate-200 transition-all duration-500 group-hover:border-orange-500 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2">
        
        {/* Technical Header */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-20">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-orange-600 transition-colors">
                Series_{item.sku}
            </span>
            <div className="h-4 w-4 border-t-2 border-r-2 border-slate-200 group-hover:border-orange-500 transition-colors"></div>
        </div>

        {/* Main Image Area */}
        <div className="absolute inset-0 z-0 p-10 flex items-center justify-center">
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-auto max-h-[70%] object-contain filter drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
          />
        </div>

        {/* Info Overlay (Sliding up on hover) */}
        <div className="absolute bottom-0 left-0 w-full p-8 z-10 bg-gradient-to-t from-white via-white/90 to-transparent">
          <p className="text-[9px] font-bold text-orange-600 uppercase tracking-[0.3em] mb-1">Authentic Component</p>
          <h4 className="text-xl font-bold text-slate-900 uppercase tracking-tighter leading-tight italic">
            {item.name}
          </h4>
          
          <div className="mt-4 flex items-center gap-2 overflow-hidden">
            <div className="h-[2px] w-full bg-slate-100 relative">
                <div className="absolute inset-0 bg-orange-600 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
            </div>
            <span className="text-[8px] font-bold text-slate-300 uppercase whitespace-nowrap">Spec_Verified</span>
          </div>
        </div>

        {/* Corner Accent */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-slate-50 group-hover:bg-orange-500 transition-colors flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-white animate-pulse"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="relative w-full py-24 bg-slate-50 overflow-hidden font-['Inter']">
      
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#000 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 mb-24 relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-slate-300"></div>
            <span className="text-orange-600 font-bold uppercase tracking-[0.4em] text-[10px]">Industrial Distribution Hub</span>
            <div className="h-[1px] w-12 bg-slate-300"></div>
        </div>
        <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase italic text-center leading-none">
          GLOBAL SPARES <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">CERTIFIED INVENTORY.</span>
        </h2>
      </div>

      <div className="flex flex-col gap-12 relative z-10">
        {/* Row 1 Scrolling Left to Right */}
        <div className="flex gap-12 animate-scroll-right">
          {[...row1, ...row1, ...row1].map((item, idx) => (
            <ProductCard key={`${item.id}-${idx}`} item={item} isTall={idx % 2 === 0} />
          ))}
        </div>

        {/* Row 2 Scrolling Right to Left */}
        <div className="flex gap-12 animate-scroll-left">
          {[...row2, ...row2, ...row2].map((item, idx) => (
            <ProductCard key={`${item.id}-${idx}`} item={item} isTall={idx % 2 !== 0} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-right { animation: scroll-right 60s linear infinite; width: max-content; }
        .animate-scroll-left { animation: scroll-left 65s linear infinite; width: max-content; }
        .animate-scroll-right:hover, .animate-scroll-left:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}