import { Star, Quote, ChevronRight, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Arun Kumar",
    company: "TN Mining Corp",
    role: "Site Manager",
    content: "The Tapper button bits from MUHA have doubled our drilling speed in hard granite. Zero breakage in 3 months of continuous operation.",
    rating: 5,
    tag: "Mining"
  },
  {
    name: "Suresh Raina",
    company: "Skyline Foundations",
    role: "Project Engineer",
    content: "Switching to PSI/MDS pistons for our jackhammers reduced downtime by 40%. The build quality is significantly better than OEM.",
    rating: 5,
    tag: "Construction"
  },
  {
    name: "Vikram Seth",
    company: "AquaDrill India",
    role: "Operations Head",
    content: "Reliable sourcing for Sandco rods. Their logistics team handled our urgent order for a deep-bore project in record time.",
    rating: 5,
    tag: "Borewell"
  },
  {
    name: "Priya Sharma",
    company: "Global Infra Ltd",
    role: "Procurement Lead",
    content: "The Atlas Copco VT 4 spares are 100% genuine. Performance remains steady even at peak PSI. Highly recommended for industrial use.",
    rating: 5,
    tag: "Pneumatics"
  }
];

function TestimonialCard({ t }) {
  return (
    <div className="flex-shrink-0 w-[350px] lg:w-[450px] group bg-[#111112] border border-white/5 p-8 relative overflow-hidden transition-all hover:border-yellow-400/30">
      {/* Industrial Quote Icon - Correctly wrapped in braces */}
      <Quote className="absolute -top-2 -right-2 w-20 h-20 text-white/5 group-hover:text-yellow-400/5 transition-colors" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-1 mb-6">
          {[...Array(t.rating)].map((_, i) => (
            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-[10px] font-black uppercase tracking-widest text-gray-500 italic">
            {t.tag} Verified
          </span>
        </div>

        <p className="text-gray-400 mb-8 leading-relaxed italic text-lg lg:text-xl">
          &quot;{t.content}&quot;
        </p>

        <div className="flex items-center justify-between border-t border-white/5 pt-6">
          <div>
            <h4 className="text-white font-black uppercase tracking-tighter text-sm italic">{t.name}</h4>
            <p className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">
              {t.role} {`//`} {t.company}
            </p>
          </div>
          <CheckCircle2 className="w-5 h-5 text-yellow-400/50" />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0a0b] relative overflow-hidden border-t border-white/5">
      {/* Background Tech Lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-yellow-400"></div>
              <span className="text-yellow-400 font-bold tracking-[0.3em] uppercase text-xs">Field Reports</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-black text-white uppercase italic tracking-tighter leading-none">
              TRUSTED IN <br /> <span className="text-gray-700">THE FIELD.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
             <div className="text-right">
                <p className="text-2xl font-black text-white italic">4.9/5</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Global Rating</p>
             </div>
             <div className="h-10 w-[1px] bg-white/10"></div>
             <div className="text-right">
                <p className="text-2xl font-black text-white italic">2.5k+</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Supplies Delivered</p>
             </div>
          </div>
        </div>

        <div className="relative flex overflow-hidden group">
          <div className="flex gap-6 animate-scroll-x py-4 px-6 group-hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 flex justify-center">
            <button className="group flex items-center gap-4 text-gray-500 hover:text-yellow-400 transition-all font-black uppercase text-[10px] tracking-[0.4em]">
                View Full Service History <ChevronRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </button>
        </div>
      </div>

      <style>{`
        @keyframes scroll-x {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-x {
          animation: scroll-x 30s linear infinite;
        }
      `}</style>
    </section>
  );
}