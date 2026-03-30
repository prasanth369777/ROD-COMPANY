
import { PackageSearch, BadgeCheck, CircleDollarSign, UserCog, MapPinned, ChevronRight, ShieldCheck, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";

const chooseUsSteps = [
  { 
    title: "Wide Product Selection", 
    description: "We carry one of the most extensive inventories of mining tools and equipment in Tamilnadu. From drill rods to pneumatic accessories, we are a one-stop shop for all your drilling needs.", 
    icon: PackageSearch, 
    tag: "Benefit 01" 
  },
  { 
    title: "Authentic Quality", 
    description: "We source products only from verified manufacturers and authorized distributors. Every item we sell meets rigorous quality standards to ensure longevity and reliable performance.", 
    icon: BadgeCheck, 
    tag: "Benefit 02" 
  },
  { 
    title: "Competitive Pricing", 
    description: "By maintaining strong relationships with suppliers and optimizing our operations, we offer competitive prices without compromising on quality.", 
    icon: CircleDollarSign, 
    tag: "Benefit 03" 
  },
  { 
    title: "Expert Guidance", 
    description: "Our team has hands-on experience in the mining and construction sectors across Tamilnadu. We provide practical advice to help you select the right tools for your specific application.", 
    icon: UserCog, 
    tag: "Benefit 04" 
  },
  { 
    title: "Fast Service & Location", 
    description: "Located in Tamilnadu, we are easily accessible from Chennai to Kanyakumari. We support urgent requirements with quick turnaround times.", 
    icon: MapPinned, 
    tag: "Benefit 05" 
  },
];

export default function WhyChooseUs() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 bg-[#080809] overflow-hidden text-white font-['Inter']">
      
      {/* Background Technical Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '80px 80px' }}>
      </div>
      {/* Gradient Overlay adjusted to Brand Red/Orange */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-600/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        
        {/* Section Header - Bold & Asymmetric */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-24 border-b border-white/5 pb-16">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
                {/* Brand Red Highlight */}
                <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-red-600"></div>
                <span className="text-orange-500 font-black uppercase tracking-[0.5em] text-[10px]">The Sri Kumar Advantage</span>
            </div>
            <h2 className="text-6xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.85]">
              WHY <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">CHOOSE US?</span>
            </h2>
          </div>
          <p className="text-gray-500 text-xl lg:text-2xl max-w-md italic font-medium leading-tight text-right lg:pb-4">
            Established drill rod dealers in Tamilnadu. Built on trust, availability, and service.
          </p>
        </div>

        {/* New Feature Grid UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 shadow-2xl">
          {chooseUsSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <div 
                key={idx} 
                className="group relative bg-[#0f0f11] p-12 lg:p-16 transition-all duration-700 hover:bg-[#141416] cursor-pointer overflow-hidden"
                onClick={() => navigate('/contactus')}
              >
                {/* Visual Numbering Background - Ghosted Orange */}
                <span className="absolute -bottom-10 -right-10 text-[15rem] font-black text-white/[0.02] group-hover:text-orange-600/[0.03] transition-colors duration-700 select-none pointer-events-none uppercase italic leading-none">
                    {idx + 1}
                </span>

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-12">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-red-600 transition-all duration-500">
                            <StepIcon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-500" />
                        </div>
                        <span className="text-orange-500 font-black text-[10px] tracking-[0.4em] uppercase opacity-50 group-hover:opacity-100">{step.tag}</span>
                    </div>

                    <h3 className="text-3xl font-black uppercase italic text-white mb-6 tracking-tighter group-hover:text-orange-500 transition-colors leading-none">
                        {step.title}
                    </h3>
                    
                    <p className="text-gray-500 italic leading-relaxed text-lg lg:text-xl group-hover:text-gray-300 transition-colors">
                        {step.description}
                    </p>

                    <div className="mt-12 flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-orange-500 transition-all">
                        <span>Read Technical Specs</span>
                        <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </div>
                </div>
              </div>
            );
          })}

          {/* Specialized CTA Block - Using Brand Red/Orange Gradient */}
          <div 
            className="group relative bg-gradient-to-br from-orange-500 to-red-600 p-12 lg:p-16 flex flex-col justify-center items-center text-center cursor-pointer transition-all duration-500 hover:brightness-110"
            onClick={() => navigate('/contactus')}
          >
            <Factory className="text-white mb-8 w-12 h-12" />
            <h3 className="text-4xl font-black uppercase italic text-white mb-6 tracking-tighter leading-none">
                Start Your <br /> Project Now.
            </h3>
            <button className="flex items-center gap-4 bg-white text-red-600 px-8 py-4 font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl">
                Get B2B Quote
            </button>
          </div>
        </div>

        {/* Global Logistics Recognition - Brand Colored Icons */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-white/5 pt-12">
            {[
                { label: "State Coverage", val: "Tamil Nadu Wide", icon: MapPinned },
                { label: "Quality Control", val: "100% Authentic", icon: ShieldCheck },
                { label: "Stock Availability", val: "Immediate Dispatch", icon: PackageSearch },
                { label: "Technical Support", val: "Field Assistance", icon: UserCog }
            ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                        <item.icon className="text-orange-500 w-4 h-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{item.label}</span>
                    </div>
                    <p className="text-xl font-black italic uppercase tracking-tight">{item.val}</p>
                </div>
            ))}
        </div>
      </div>

      {/* Background Watermark Branding */}
      <div className="absolute bottom-[-5%] left-[-2%] opacity-[0.03] select-none pointer-events-none">
         <h4 className="text-[25vw] font-black uppercase text-white leading-none tracking-tighter italic">LEADERSHIP</h4>
      </div>
    </section>
  );
}