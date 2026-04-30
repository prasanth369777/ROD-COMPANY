import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Images
import Hero1_Image from "../../assests/Hero1-1.webp";
import Hero2_Image from "../../assests/Hero 2-1.webp";
import Hero3_Image from "../../assests/Hero 3-1.webp";

// Product Data
const eliteProductsData = [
  {
    title: "Tapper Button Bits",
    image: Hero1_Image,
    path: "/tapper-bits"
  },
  {
    title: "Jack Hammer Spares",
    image: Hero2_Image,
    path: "/jack-hammer"
  },
  {
    title: "VT4 Comp Spares",
    image: Hero3_Image,
    path: "/compressor"
  },
];

export default function IndustrialHeroGrid() {
  return ( 
    <section className="bg-[#ffffff] py-10 md:py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-10">
        <h1 className="text-black text-2xl md:text-4xl font-bold uppercase tracking-wide">
          Industrial Equipment & Spares
        </h1>
        <p className="text-slate-700 text-sm mt-2 max-w-xl">
          Built for mining, construction, and infrastructure performance.
        </p>
      </div>

      {/* 🔹 Grid Layout: Changed to 2 columns on medium/large screens to increase card width */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        
        {eliteProductsData.map((item, i) => (
          <Link to={item.path} key={i}>
            
            {/* Height set to a widescreen rectangle format with larger height and width */}
            <div className="relative group overflow-hidden bg-black h-[280px] md:h-[340px] lg:h-[420px] border border-slate-200 hover:border-orange-500 transition duration-300">
              
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />

            
              {/* Top Title */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <h3 className="text-white text-xs md:text-sm font-semibold uppercase tracking-wide drop-shadow">
                  {item.title}
                </h3>

                <ArrowRight 
                  size={16} 
                  className="text-white opacity-0 group-hover:opacity-100 transition" 
                />
              </div>

              {/* Bottom Product Strip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div></div>

                {/* CTA */}
                <span className="text-[10px] text-white uppercase tracking-widest opacity-70 group-hover:opacity-100 drop-shadow">
                  View More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
} 