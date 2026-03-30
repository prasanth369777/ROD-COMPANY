import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import LogoImg from "../../assests/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 const menuData = [
  {
    name: "Tapper Bits",
    path: "/tapper-bits", // Parent path
    subItems: [
      { name: "Pulanka", path: "/tapper-bits/pulanka" },
      { name: "LT", path: "/tapper-bits/lt" },
      { name: "Nanchang +", path: "/tapper-bits/nanchang-plus" },
      { name: "PLKS", path: "/tapper-bits/plks" },
    ],
  },
  {
    name: "Jack Hammers",
    path: "/jack-hammer",
    subItems: [
      { name: "Bush", path: "/jack-hammer/bush" },
      { name: "Ranger Box", path: "/jack-hammer/ranger-box" },
      { name: "Piston", path: "/jack-hammer/piston" },
      { name: "Side Bold", path: "/jack-hammer/side-bolt" },
      { name: "Retainer Lock", path: "/jack-hammer/retainer-lock" },
    ],
  },
  {
    name: "Compressors",
    path: "/compressor",
    subItems: [
      { name: "Liner Set", path: "/compressor/liner-set" },
      { name: "Piston", path: "/compressor/piston" },
      { name: "Connect Rod", path: "/compressor/connect-rod" },
      { name: "Air & Oil Filter", path: "/compressor/filters" }, // Fixed to match /compressor/filters
      { name: "Rings", path: "/compressor/rings" },
      { name: "Valves", path: "/compressor/valves" },
    ],
  },
  {
    name: "Drill Rods",
    path: "/drill-rods",
    subItems: [
      { name: "Sandco Tapper", path: "/drill-rods/sandco" }, // Fixed to match /drill-rods/sandco
      { name: "Blue Tapper", path: "/drill-rods/blue-tapper" },
      { name: "Imported Rods", path: "/drill-rods/imported" }, // Fixed to match /drill-rods/imported
    ],
  },
  {
    name: "Hose",
    path: "/hoses",
    subItems: [
      { name: "Durlon Rock Drill", path: "/hoses/durlon" }, // Fixed to match /hoses/durlon
      { name: "Standard", path: "/hoses/standard" },
      { name: "Drillon", path: "/hoses/drillon" },
    ],
  },
];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-8">
      <nav
        className={`mx-auto max-w-screen-2xl transition-all duration-500 rounded-3xl border border-white/10 shadow-2xl
        ${scrolled ? "bg-slate-900/95 backdrop-blur-xl py-3" : "bg-slate-800/40 backdrop-blur-md py-5"}`}
      >
        <div className="px-6 lg:px-10 flex justify-between items-center text-white">
          <Link to="/" className="group flex items-center gap-3 shrink-0">
            <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-white/20">
              <img src={LogoImg} alt="Sri Kumaran Rod" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-xl tracking-tighter uppercase">
                Sri Kumaran <span className="text-orange-500">Rod</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-slate-400 uppercase">Industrial Solutions</span>
            </div>
          </Link>

          <div className="hidden xl:flex items-center space-x-1">
            <NavLink to="/" className="px-4 py-2 text-[12px] font-black uppercase tracking-widest hover:text-orange-500">Home</NavLink>
            
            {menuData.map((category) => (
              <div 
                key={category.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 px-4 py-2 text-[12px] font-black uppercase tracking-widest hover:text-orange-500">
                  {category.name} <ChevronDown size={14} />
                </button>

                {/* Fixed Dropdown Mapping */}
                <div className={`absolute top-full left-0 pt-4 w-64 transition-all ${activeDropdown === category.name ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                  <div className="bg-slate-900 border border-white/10 p-6 rounded-2xl shadow-2xl">
                    <div className="grid gap-3">
                      {category.subItems.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.path} // Fixed: Using sub.path instead of generating it
                          className="text-[11px] font-bold text-slate-400 hover:text-orange-500 uppercase tracking-widest flex items-center gap-2 group/link"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 scale-0 group-hover/link:scale-100 transition-transform"></div>
                          {sub.name} {/* Fixed: Using sub.name */}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

         <Link to="/contactus">
  <button className="hidden md:block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase transition-all transform hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95">
    Get Quote
  </button>
</Link>

          <button className="xl:hidden p-3 rounded-xl bg-white/5" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Fix */}
        <div className={`xl:hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-[80vh] opacity-100 border-t border-white/10 mt-4 overflow-y-auto" : "max-h-0 opacity-0 overflow-hidden"}`}>
          <div className="flex flex-col p-6 space-y-6 bg-slate-900">
            {menuData.map((category) => (
              <div key={category.name} className="space-y-3">
                <p className="text-orange-500 font-black text-xs uppercase tracking-widest">{category.name}</p>
                <div className="grid grid-cols-1 gap-2 pl-4 border-l border-white/10">
                  {category.subItems.map((sub) => (
                    <Link 
                      key={sub.name} 
                      to={sub.path} // Fixed for mobile
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 font-bold text-[11px] uppercase tracking-widest hover:text-white"
                    >
                      {sub.name} {/* Fixed for mobile */}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}