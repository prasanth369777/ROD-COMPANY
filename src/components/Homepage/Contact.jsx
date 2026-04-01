import { useState } from 'react';
import {  Phone, MapPin, Send,ShieldCheck, Factory, HardHat, MessageCircle } from 'lucide-react';

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
    <section id="contact" className="relative py-32 bg-[#0a0a0b] overflow-hidden text-white font-['Inter']">
      
      {/* Background Technical Decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>
      <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none select-none">
          <h2 className="text-[20rem] font-black leading-none uppercase translate-x-32 translate-y-[-10%] tracking-tighter">TAMILNADU</h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Section 7 Header: Visit Our Shop */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-24">
            <div>
                <div className="flex items-center gap-4 mb-8">
                    {/* CHANGED TO LOGO GRADIENT */}
                    <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-red-600"></div>
                    <span className="text-orange-500 font-black tracking-[0.4em] uppercase text-[10px]">Visit Our Shop or Get in Touch</span>
                </div>
                <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.9] mb-8">
                    BUILDING <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">RELATIONSHIPS.</span>
                </h2>
            </div>
            <div className="max-w-xl lg:pb-4 border-l-2 border-orange-500/30 pl-10">
                <p className="text-xl text-gray-400 italic font-medium leading-relaxed">
                    Managed by experienced professionals who understand the demands of your work. We provide solutions that fit your budget and timeline for bulk orders, urgent requirements, or technical queries.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/5 border border-white/5 shadow-2xl overflow-hidden mb-20">
          
          {/* 1. Technical Inquiry Form (7 Columns) */}
          <div className="lg:col-span-7 bg-[#0f0f11] p-10 lg:p-20 relative">
            <div className="flex items-center gap-4 mb-12">
                {/* CHANGED TO LOGO COLOR */}
                <HardHat className="text-orange-500" size={24} />
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Inquiry Specification</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block group-focus-within:text-orange-500 transition-colors">Contractor / Client Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl text-white focus:border-orange-500 focus:outline-none transition-all italic font-bold"
                    placeholder="Full Name"
                  />
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block group-focus-within:text-orange-500 transition-colors">Business Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl text-white focus:border-orange-500 focus:outline-none transition-all italic font-bold"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block group-focus-within:text-orange-500 transition-colors">Organization Type</label>
                  <select
                    name="company"
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl text-white focus:border-orange-500 focus:outline-none transition-all italic font-bold appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Select Category</option>
                    <option value="contractor" className="bg-black">Contractor</option>
                    <option value="government" className="bg-black">Government Agency</option>
                    <option value="workshop" className="bg-black">Repair Workshop</option>
                    <option value="mining" className="bg-black">Mining / Quarry Owner</option>
                  </select>
                </div>
                <div className="relative group">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block group-focus-within:text-orange-500 transition-colors">Equipment Range</label>
                  <select
                    name="equipment"
                    onChange={handleChange}
                    className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl text-white focus:border-orange-500 focus:outline-none transition-all italic font-bold appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Select Category</option>
                    <option value="drill-rods" className="bg-black">Rock Drill Spares</option>
                    <option value="jackhammers" className="bg-black">Jackhammer Parts</option>
                    <option value="mining-tools" className="bg-black">Mining Tools Support</option>
                  </select>
                </div>
              </div>

              <div className="relative group">
                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-4 block group-focus-within:text-orange-500 transition-colors">Message / Part Details</label>
                <textarea
                  name="message"
                  rows="4"
                  onChange={handleChange}
                  className="w-full bg-white/5 border-2 border-white/5 p-6 text-xl text-white focus:border-orange-500 focus:outline-none transition-all italic resize-none font-medium"
                  placeholder="Tell us about your requirements or help us identify a spare part..."
                />
              </div>

              {/* CHANGED TO LOGO GRADIENT BUTTON */}
              <button className="w-full py-8 bg-gradient-to-r from-orange-500 to-red-600 text-white font-black uppercase text-sm tracking-[0.5em] flex items-center justify-center gap-4 hover:opacity-90 transition-all transform active:scale-[0.98] shadow-2xl shadow-orange-500/20">
                Send Inquiry <Send size={20} />
              </button>
            </form>
          </div>

          {/* 2. Global Distribution Sidebar (5 Columns) */}
          <div className="lg:col-span-5 bg-[#141416] p-10 lg:p-20 flex flex-col justify-between relative">
            <div className="space-y-16">
                <div>
                    <h3 className="text-xs font-black uppercase tracking-[0.5em] text-orange-500 mb-10 italic">Section 8: Contact Sri Kumar Today</h3>
                    <div className="space-y-8">
                        <div className="flex items-start gap-6 group">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors">
                                <MapPin className="text-orange-500" size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">HQ & Shop Visit</p>
                                <p className="text-lg font-bold italic leading-tight uppercase">Industrial Estate Road,<br /> Coimbatore, Tamil Nadu, 641001</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 group">
                            <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors">
                                <Phone className="text-orange-500" size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Direct Technical Line</p>
                                <p className="text-2xl font-black italic tracking-widest">+91 85319 85733</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Logistics Badge */}
                <div className="p-8 bg-black/40 border border-white/5 rounded-none relative overflow-hidden group hover:border-orange-500/30 transition-all">
                    <ShieldCheck className="absolute -right-4 -bottom-4 text-white/5" size={120} />
                    <div className="flex items-center gap-4 mb-4">
                        <Factory className="text-orange-500" size={20} />
                        <span className="text-xs font-black uppercase tracking-widest italic">Mining Tools Supplier in Tamilnadu</span>
                    </div>
                    <p className="text-gray-400 text-sm italic font-medium">Providing solutions for contractors and government agencies to keep operations running smoothly.</p>
                </div>
            </div>

            {/* Field Status */}
            <div className="mt-16 pt-8 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">Technical Support Hub Active</span>
                </div>
                <div className="flex items-center gap-3 text-orange-500/50">
                    <HardHat size={16} />
                </div>
            </div>
          </div>
        </div>

        {/* Section 8: CTA Whatsapp Redirection - CHANGED TO LOGO GRADIENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-2xl">
           <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">Let us be your partner in success.</h3>
           <p className="text-sm font-bold uppercase tracking-widest mb-8">Click below to connect with our experts via WhatsApp.</p>
           <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-12 py-6 bg-black text-white font-black uppercase text-sm tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-2xl"
           >
              Connect on WhatsApp <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
           </a>
        </div>
      </div>

    
    </section>
  );
}