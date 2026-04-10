import { useState } from 'react';
import {  Phone, MapPin, Send, ShieldCheck, Factory, HardHat, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    equipment: '',
    message: ''
  });

  // WhatsApp Redirection Config
  const whatsappNumber = "+918531985733";
  const whatsappMsg = "Hello Sri Kumar Drill Rod Works, I need assistance with rock drill spare parts / technical queries.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Industrial Inquiry submitted:', formData);
    // Logic for form submission
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-16 md:py-32 bg-white overflow-hidden text-slate-900 font-['Inter']">
      
      {/* Background Technical Decoration */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none select-none hidden lg:block">
          <h2 className="text-[20rem] font-bold leading-none uppercase translate-x-32 translate-y-[-10%] tracking-tighter">TAMILNADU</h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Section 7 Header: Visit Our Shop */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-16 md:mb-24">
            <div>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                    {/* CHANGED TO LOGO GRADIENT */}
                    <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-red-600"></div>
                    <span className="text-orange-600 font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Visit Our Shop or Get in Touch</span>
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold uppercase italic tracking-tighter leading-[1.1] md:leading-[0.9] mb-8">
                    BUILDING <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">RELATIONSHIPS.</span>
                </h2>
            </div>
            <div className="max-w-xl lg:pb-4 border-l-4 border-orange-500/30 pl-6 md:pl-10">
                <p className="text-lg md:text-xl text-slate-500 italic font-medium leading-relaxed">
                    Managed by experienced professionals who understand the demands of your work. We provide solutions that fit your budget and timeline for bulk orders, urgent requirements, or technical queries.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-slate-200 border border-slate-200 shadow-2xl overflow-hidden mb-12 md:mb-20 rounded-xl md:rounded-none">
          
          {/* 1. Technical Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-20 relative">
            <div className="flex items-center gap-4 mb-10 md:mb-12">
                {/* CHANGED TO LOGO COLOR */}
                <HardHat className="text-orange-500" size={24} />
                <h3 className="text-xl md:text-2xl font-bold uppercase italic tracking-tighter">Inquiry Specification</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 md:space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="relative group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2 block group-focus-within:text-orange-500 transition-colors">Contractor / Client Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-lg md:text-xl text-slate-900 focus:border-orange-500 focus:outline-none transition-all italic font-semibold"
                    placeholder="Full Name"
                  />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2 block group-focus-within:text-orange-500 transition-colors">Business Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-lg md:text-xl text-slate-900 focus:border-orange-500 focus:outline-none transition-all italic font-semibold"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                <div className="relative group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2 block group-focus-within:text-orange-500 transition-colors">Organization Type</label>
                  <select
                    name="company"
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-lg md:text-xl text-slate-900 focus:border-orange-500 focus:outline-none transition-all italic font-semibold appearance-none cursor-pointer"
                  >
                    <option value="" className="text-slate-900">Select Category</option>
                    <option value="contractor">Contractor</option>
                    <option value="government">Government Agency</option>
                    <option value="workshop">Repair Workshop</option>
                    <option value="mining">Mining / Quarry Owner</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2 block group-focus-within:text-orange-500 transition-colors">Equipment Range</label>
                  <select
                    name="equipment"
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-slate-200 py-3 text-lg md:text-xl text-slate-900 focus:border-orange-500 focus:outline-none transition-all italic font-semibold appearance-none cursor-pointer"
                  >
                    <option value="" className="text-slate-900">Select Category</option>
                    <option value="drill-rods">Rock Drill Spares</option>
                    <option value="jackhammers">Jackhammer Parts</option>
                    <option value="mining-tools">Mining Tools Support</option>
                  </select>
                </div>
              </div>

              <div className="relative group">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-4 block group-focus-within:text-orange-500 transition-colors">Message / Part Details</label>
                <textarea
                  name="message"
                  rows="4"
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-2 border-slate-100 p-4 md:p-6 text-lg md:text-xl text-slate-900 focus:border-orange-500 focus:outline-none transition-all italic resize-none font-medium"
                  placeholder="Tell us about your requirements or help us identify a spare part..."
                />
              </div>

              {/* CHANGED TO LOGO GRADIENT BUTTON */}
              <button className="w-full py-6 md:py-8 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold uppercase text-xs md:text-sm tracking-[0.3em] md:tracking-[0.5em] flex items-center justify-center gap-4 hover:opacity-90 transition-all transform active:scale-[0.98] shadow-2xl shadow-orange-500/20">
                Send Inquiry <Send size={20} />
              </button>
            </form>
          </div>

          {/* 2. Global Distribution Sidebar (5 Columns) */}
          <div className="lg:col-span-5 bg-slate-50 p-8 md:p-12 lg:p-20 flex flex-col justify-between relative">
            <div className="space-y-12 md:space-y-16">
                <div>
                    <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] md:tracking-[0.5em] text-orange-500 mb-8 md:mb-10 italic">Section 8: Contact Sri Kumar Today</h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4 md:gap-6 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors">
                                <MapPin className="text-orange-500" size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">HQ & Shop Visit</p>
                                <p className="text-base md:text-lg font-semibold italic leading-tight uppercase">Industrial Estate Road,<br /> Coimbatore, Tamil Nadu, 641001</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 md:gap-6 group">
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-white border border-slate-200 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors">
                                <Phone className="text-orange-500" size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Direct Technical Line</p>
                                <p className="text-xl md:text-2xl font-bold italic tracking-widest text-slate-900">+91 85319 85733</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logistics Badge */}
                <div className="p-6 md:p-8 bg-white border border-slate-200 rounded-none relative overflow-hidden group hover:border-orange-500/30 transition-all">
                    <ShieldCheck className="absolute -right-4 -bottom-4 text-slate-100" size={120} />
                    <div className="flex items-center gap-4 mb-4 relative z-10">
                        <Factory className="text-orange-500" size={20} />
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest italic">Mining Tools Supplier in Tamilnadu</span>
                    </div>
                    <p className="text-slate-500 text-sm italic font-medium relative z-10">Providing solutions for contractors and government agencies to keep operations running smoothly.</p>
                </div>
            </div>

            {/* Field Status */}
            <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-slate-400">Technical Support Hub Active</span>
                </div>
                <div className="flex items-center gap-3 text-orange-500/30">
                    <HardHat size={16} />
                </div>
            </div>
          </div>
        </div>

        {/* Section 8: CTA Whatsapp Redirection */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 md:p-12 bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-2xl rounded-xl md:rounded-none">
           <h3 className="text-2xl md:text-3xl font-bold uppercase italic tracking-tighter mb-4">Let us be your partner in success.</h3>
           <p className="text-[10px] md:text-sm font-semibold uppercase tracking-widest mb-8">Click below to connect with our experts via WhatsApp.</p>
           <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full md:w-auto flex items-center justify-center gap-4 px-8 md:px-12 py-5 md:py-6 bg-slate-900 text-white font-bold uppercase text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl active:scale-95"
           >
             Connect on WhatsApp <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
           </a>
        </div>
      </div>
    </section>
  );
}