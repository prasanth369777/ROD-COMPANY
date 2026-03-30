import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Logo from '../../assests/logo.png'; // matches your project structure
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

  return (
    <footer className="bg-slate-950 border-t border-white/5 font-['Inter']">
      {/* Ultra-Wide Container */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column (Col Span 4) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-8">
              <img src={Logo} alt="Sri Kumaran Rod Logo" className="h-16 w-auto" />
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-2xl tracking-tighter uppercase">
                  SRI KUMARAN <span className="text-orange-500">ROD</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase">Industrial Solutions</span>
              </div>
            </div>
            <p className="text-slate-400 mb-10 leading-relaxed text-lg max-w-sm">
              Coimbatore's trusted supplier of high-performance drill rods, compressor spares, and pneumatic accessories since 2025. 
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="/"
                  className="w-12 h-12 bg-slate-900 border border-white/5 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm italic">Product Range</h4>
            <ul className="space-y-4">
              {productLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium uppercase tracking-wider">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Column (Col Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm italic">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-slate-400 hover:text-orange-500 transition-colors text-sm font-medium uppercase tracking-wider">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (Col Span 4) */}
          <div className="lg:col-span-4 bg-slate-900/50 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <ShieldCheck size={80} className="text-orange-500" />
            </div>
            <h4 className="text-white font-black uppercase tracking-widest mb-8 text-sm italic">Technical Hub</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 shrink-0" size={20} />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Industrial Estate Road, Coimbatore,<br /> Tamil Nadu - 641001, India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-orange-500 shrink-0" size={20} />
                <p className="text-slate-400 text-sm font-bold tracking-widest">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <div className="flex-1">
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Request technical catalog</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Engineering Email"
                            className="flex-1 px-4 py-3 bg-slate-950 border border-white/10 rounded-l-xl text-white text-xs placeholder-slate-600 focus:outline-none focus:border-orange-500"
                        />
                        <button className="px-5 py-3 bg-orange-600 text-white rounded-r-xl hover:bg-orange-500 transition-all shadow-lg active:scale-95">
                            <Mail size={16} />
                        </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <p className="text-slate-500 text-[11px] font-bold uppercase tracking-[0.2em] text-center lg:text-left">
              © {currentYear} SRI KUMARAN ROD COMPANY. ALL RIGHTS RESERVED. <br className="md:hidden" />
              <span className="text-slate-700 mx-2 hidden lg:inline">|</span> 
              DESIGNED FOR INDUSTRIAL EXCELLENCE.
            </p>
            <div className="flex flex-wrap justify-center space-x-8">
              {['Privacy Policy', 'Terms of Supply', 'Sitemap'].map((item) => (
                <a key={item} href="/" className="text-slate-500 hover:text-white text-[11px] font-bold uppercase tracking-widest transition-colors">
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