import React from 'react';

const brands = [
  { name: "Atlas Copco", url: "https://upload.wikimedia.org/wikipedia/commons/8/80/Atlas_Copco_logo.svg" },
  { name: "Sandvik", url: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Sandvik_logo.svg" },
  { name: "Caterpillar", url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Caterpillar-logo.svg" },
  { name: "Komatsu", url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Komatsu_logo.svg" },
  { name: "Liebherr", url: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Liebherr_logo.svg" },
  { name: "Volvo CE", url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Volvo_Construction_Equipment_logo.svg" },
];

export default function LogoScroll() {
  // Triple the array to ensure zero gaps on ultra-wide screens
  const allLogos = [...brands, ...brands, ...brands];

  return (
    <div className="py-20 bg-white overflow-hidden border-t border-slate-100 font-['Manrope']">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h3 className="font-['Satoshi'] font-black uppercase tracking-[0.3em] text-[10px] text-slate-400">
          Authorized Parts & Global Partners
        </h3>
      </div>

      <div className="relative flex items-center group">
        {/* Side Fades for smooth entry/exit */}
        <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* The Scrolling Container */}
        <div className="flex w-max animate-logo-scroll gap-16 lg:gap-32 items-center px-10 group-hover:[animation-play-state:paused]">
          {allLogos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            >
              <img
                src={logo.url}
                alt={logo.name}
                // Increased size for industrial visibility
                className="h-8 lg:h-12 w-auto object-contain filter drop-shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Embedded Animation Logic - Place this anywhere in your global CSS or inside a <style> tag */}
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); } /* Adjusted for tripled array */
        }
        .animate-logo-scroll {
          animation: logo-scroll 40s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
}