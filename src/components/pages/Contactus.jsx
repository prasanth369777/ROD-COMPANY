import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ShieldCheck,} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    productCategory: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Industrial Inquiry submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="relative min-h-screen py-24 bg-slate-50 overflow-hidden font-['Inter'] flex flex-col justify-center mt-16">
      
      {/* --- INDUSTRIAL DECORATION --- */}
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[25rem] font-black leading-none translate-x-20">COIMBATORE</h2>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full">
        
        {/* --- SECTION 7 HEADER: VISIT OUR SHOP --- */}
        <div className="grid lg:grid-cols-2 gap-10 items-end mb-24">
            <div>
                <div className="flex items-center gap-4 mb-8">
                    <div className="h-[2px] w-16 bg-gradient-to-r from-orange-500 to-red-600"></div>
                    <span className="text-orange-600 font-black tracking-[0.4em] uppercase text-[10px]">Section 7: Visit Our Shop</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic">
                    Building Lasting <br /> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Relationships.</span>
                </h2>
            </div>
            <div className="max-w-xl lg:pb-4 border-l-2 border-orange-500/30 pl-10">
                <p className="text-xl text-slate-500 italic font-medium leading-relaxed">
                    Managed by experienced professionals who understand your work. Whether you prefer to visit us in person or need technical assistance, we provide solutions that fit your budget and timeline.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* --- CONTACT INFO SIDEBAR --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-2xl relative overflow-hidden group">
               <h3 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-tighter italic">Get In Touch</h3>
               <div className="space-y-10">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <MapPin className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">HQ & Shop Location</h4>
                      <p className="text-slate-800 font-bold leading-tight uppercase">Industrial Estate Road,<br /> Coimbatore, Tamil Nadu, 641001</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <Phone className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Direct Technical Line</h4>
                      <p className="text-slate-800 font-bold text-xl tracking-widest">+91 85319 85733</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                      <Mail className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Inquiries</h4>
                      <p className="text-slate-800 font-bold">muhafx369@gmail.com</p>
                    </div>
                  </div>
               </div>
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white border border-white/5 shadow-2xl relative overflow-hidden">
               <ShieldCheck className="absolute top-5 right-5 text-orange-500/20" size={60} />
               <h3 className="text-xl font-black uppercase tracking-tighter italic mb-6">Support Window</h3>
               <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                     <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Monday - Saturday</span>
                     <span className="font-bold text-xs">9:00 AM - 6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                     <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">Sunday</span>
                     <span className="text-red-500 font-black text-xs uppercase tracking-widest italic">Site Closed</span>
                  </div>
               </div>
            </div>
          </div>

          {/* --- INQUIRY FORM (SECTION 7 CONTENT) --- */}
          <div className="lg:col-span-8 bg-white rounded-[3rem] p-8 md:p-16 border border-slate-100 shadow-2xl">
            <div className="mb-10">
               <h4 className="text-slate-900 font-black uppercase text-xs tracking-[0.3em] mb-4">Contractor & Agency Inquiries</h4>
               <p className="text-slate-500 italic text-sm">We welcome inquiries from contractors, government agencies, and repair workshops looking for a dependable mining tools supplier in Tamilnadu.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Contact Person</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-slate-50 border-none rounded-2xl text-slate-900 font-bold focus:ring-2 focus:ring-orange-500 transition-all shadow-inner"
                    placeholder="Full Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Email / Business ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-slate-50 border-none rounded-2xl text-slate-900 font-bold focus:ring-2 focus:ring-orange-500 transition-all shadow-inner"
                    placeholder="email@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Technical Category</label>
                  <select
                    name="productCategory"
                    value={formData.productCategory}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 bg-slate-50 border-none rounded-2xl text-slate-900 font-bold focus:ring-2 focus:ring-orange-500 transition-all shadow-inner appearance-none cursor-pointer"
                  >
                    <option value="">Select Requirement</option>
                    <option value="drill-rods">Rock Drill Spare Parts</option>
                    <option value="jackhammers">Jackhammer Spares</option>
                    <option value="bulk">Bulk Contractor Order</option>
                    <option value="identifying">Identifying Right Part</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-2">Message & Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-5 bg-slate-50 border-none rounded-3xl text-slate-900 font-bold focus:ring-2 focus:ring-orange-500 transition-all shadow-inner resize-none"
                  placeholder="Tell us about your project requirements, budget, or timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black uppercase text-sm tracking-[0.4em] transition-all hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-600 hover:shadow-2xl flex items-center justify-center gap-4 group"
              >
                Send Direct Message <Send className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        {/* --- SECTION 8: FINAL CTA --- */}
        <div className="relative z-10 bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center overflow-hidden">
            <h3 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter italic leading-none">
                Contact Sri Kumar <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Drill Rod Works Today</span>
            </h3>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 italic font-medium">
                If you are looking for a reliable partner to keep your operations running smoothly, your search ends here. Let us be your partner in keeping your operations running smoothly.
            </p>
            <div className="flex justify-center relative z-10">
                <Link to="/" className="text-slate-500 font-black uppercase text-xs tracking-widest border-b-2 border-slate-700 pb-1 hover:text-white transition-colors">
                    Back to Catalog
                </Link>
            </div>
        </div>
      </div>
    </section>
  );
}