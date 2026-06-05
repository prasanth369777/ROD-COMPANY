import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin,} from 'lucide-react';
import Logo from '../../assests/logo.png'; 
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { name: 'Tapper Bits', path: '/tapper-bits' },
    { name: 'Jack Hammers', path: '/jack-hammer' },
    { name: 'VT 4 Compressors', path: '/compressor' },
    { name: 'Drill Rods', path: '/drill-rods' },
    { name: 'Industrial Hoses', path: '/hoses' },
  ];

  const companyLinks = [
    { name: 'About Sri Kumaran', path: '/aboutus' },
    { name: 'Technical Blog', path: '/blog' },
    { name: 'Contact Support', path: '/contactus' },
    { name: 'Bulk Enquiry', path: '/contactus' },
  ];

  // Animated Social Button Component
  const SocialButton = ({ Icon, color }) => (
    <div className="group [perspective:180px] w-10 h-10 md:w-12 md:h-12 flex justify-center items-center">
      <div className="relative w-full h-full rounded-full flex justify-center items-center transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:bg-white group-hover:[transform:rotateX(60deg)_translateY(2px)] group-hover:shadow-[0px_10px_10px_rgba(249,115,22,0.5)] bg-slate-900 border border-white/5">
        <button className="bg-transparent border-none p-0 flex justify-center items-center transition-all duration-500 group-hover:[transform:translate3d(0px,0px,15px)_rotateX(-35deg)_translateY(2px)]">
          <Icon className="w-[18px] h-[18px]" style={{ color: color }} />
        </button>
      </div>
    </div>
  );

  return (
    <footer className="bg-slate-950 border-t border-white/5 font-['Inter']">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-12 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <img src={Logo} alt="Sri Kumaran Rod Logo" className="h-12 md:h-16 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-bold text-xl md:text-2xl tracking-tighter uppercase">
                  SRI KUMARAN <span className="text-orange-500">ROD</span>
                </span>
                <span className="text-[10px] font-semibold tracking-[0.3em] text-slate-500 uppercase">Industrial Solutions</span>
              </div>
            </div>
            <p className="text-slate-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg max-w-sm font-normal">
              Coimbatore's trusted supplier of high-performance drill rods, compressor spares, and pneumatic accessories since 2025. 
            </p>
            
            {/* 3D ANIMATED SOCIAL ICONS */}
            <div className="flex items-center gap-4">
              <SocialButton Icon={Facebook} color="#4267B2" />
              <SocialButton Icon={Twitter} color="#1e90ff" />
              <SocialButton Icon={Instagram} color="#ff00ff" />
              <SocialButton Icon={Linkedin} color="#0077b5" />
            </div>
          </div>

          {/* Products Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 md:mb-8 text-xs md:sm italic">Product Range</h4>
            <ul className="space-y-3 md:space-y-4">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-orange-500 transition-colors text-xs md:text-sm font-medium uppercase tracking-wider">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 md:mb-8 text-xs md:sm italic">Company</h4>
            <ul className="space-y-3 md:space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-orange-500 transition-colors text-xs md:text-sm font-medium uppercase tracking-wider">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
<div className="lg:col-span-4 bg-slate-900/50 p-6 md:p-8 rounded-3xl border border-white/5 relative overflow-hidden">
  {/* Subtle background glow replacing the icon */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-600/10 blur-[60px] pointer-events-none"></div>
  
  <h4 className="text-white font-bold uppercase tracking-widest mb-6 md:mb-8 text-xs md:sm italic">Technical Hub</h4>
  
  <div className="space-y-6">
    <div className="flex flex-col gap-1">
      <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Office Address</p>
      <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-normal">
        Industrial Estate Road, Coimbatore,<br /> 
        Tamil Nadu - 641001, India
      </p>
    </div>

    <div className="flex flex-col gap-1">
      <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest">Direct Line</p>
      <p className="text-slate-400 text-xs md:text-sm font-semibold tracking-widest">+91 98765 43210</p>
    </div>

    <div className="flex items-center gap-4 pt-4 border-t border-white/5">
      <div className="flex-1">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Request technical catalog</p>
        <div className="flex">
          <input
            type="email"
            placeholder="Engineering Email"
            className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-slate-950 border border-white/10 rounded-l-xl text-white text-[10px] md:text-xs placeholder-slate-600 focus:outline-none focus:border-orange-500"
          />
          <button className="px-6 md:px-8 py-2 md:py-3 bg-orange-600 text-white rounded-r-xl hover:bg-orange-500 transition-all shadow-lg active:scale-95 font-bold uppercase text-[10px] tracking-widest">
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 md:pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.1em] md:tracking-[0.2em] text-center lg:text-left leading-relaxed">
              © {currentYear} SRI KUMARAN ROD COMPANY. ALL RIGHTS RESERVED. <br className="md:hidden" />
              <span className="text-slate-700 mx-2 hidden lg:inline">|</span> 
              DESIGNED FOR INDUSTRIAL EXCELLENCE.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {['Privacy Policy', 'Terms of Supply', 'Sitemap'].map((item) => (
                <a key={item} href="/" className="text-slate-500 hover:text-white text-[9px] md:text-11px] font-semibold uppercase tracking-widest transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}