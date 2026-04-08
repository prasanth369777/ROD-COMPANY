import React, { useState, useEffect } from "react";
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
    <div className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:px-8">
      <nav
        className={`mx-auto max-w-screen-2xl transition-all duration-500 rounded-3xl border border-white/10 shadow-2xl
        ${scrolled ? "bg-slate-900/95 backdrop-blur-xl py-3" : "bg-slate-800/40 backdrop-blur-md py-5"}`}
      >
        <div className="px-6 lg:px-10 flex justify-between items-center text-white">
          {/* Logo Section */}
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

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-[12px] font-black uppercase tracking-widest transition-colors ${
                    isActive ? "text-orange-500" : "hover:text-orange-500"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Button */}
          <Link to="/contactus">
            <button className="hidden md:block bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-xl font-black text-xs uppercase transition-all transform hover:shadow-[0_10px_20px_rgba(249,115,22,0.3)] active:scale-95">
              Get Quote
            </button>
          </Link>

          {/* Mobile Menu Toggle */}
          <button className="xl:hidden p-3 rounded-xl bg-white/5" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`xl:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[80vh] opacity-100 border-t border-white/10 mt-4" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col p-6 space-y-4 bg-slate-900">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-orange-500 font-black text-[14px] uppercase tracking-widest py-2 border-b border-white/5 last:border-0"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contactus" onClick={() => setIsOpen(false)} className="pt-4">
              <button className="w-full bg-orange-500 text-white py-4 rounded-xl font-black uppercase text-xs">
                Get Quote
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}