import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LogoImg from "../../assests/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Standard flat navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Products", path: "/products" },
    { name: "Industry We Serve", path: "/industries" },
    { name: "Contact Us", path: "/contactus" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-[100] px-0 py-0">
      <nav
        className={`w-full transition-all duration-500 border-b border-white/10 shadow-2xl ${
          scrolled 
            ? "bg-slate-900/95 backdrop-blur-xl py-2 md:py-3" 
            : "bg-slate-800/40 backdrop-blur-md py-4 md:py-5"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 flex justify-between items-center text-white w-full">
          {/* Logo Section */}
          <Link to="/" className="group flex items-center gap-2 md:gap-3 shrink-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-lg md:rounded-xl border border-white/20">
              <img src={LogoImg} alt="Sri Kumaran Rod" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg md:text-xl tracking-tighter uppercase">
                Sri Kumaran <span className="text-orange-500">Rod</span>
              </span>
              <span className="text-[8px] md:text-[9px] font-semibold tracking-[0.2em] md:tracking-[0.3em] text-slate-400 uppercase">Industrial Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-[11px] md:text-[12px] font-bold uppercase tracking-widest transition-colors ${
                    isActive ? "text-orange-500" : "hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center">
            <Link to="/contactus">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 lg:px-8 py-2.5 md:py-3 rounded-none font-bold text-xs uppercase transition-all transform hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="xl:hidden p-2 rounded-lg bg-white/5" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`xl:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[85vh] opacity-100 border-t border-white/10 mt-3" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col p-5 md:p-8 space-y-3 bg-slate-950/50 backdrop-blur-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-orange-500 font-bold text-[13px] uppercase tracking-widest py-3 border-b border-white/5 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contactus" onClick={() => setIsOpen(false)} className="pt-2">
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3.5 rounded-none font-bold uppercase text-xs tracking-wider">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}