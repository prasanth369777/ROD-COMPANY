import { useEffect, useState } from 'react';
import { Plus, Minus, HelpCircle, MapPin } from 'lucide-react';

const faqs = [
  {
    question: 'Where is Sri Kumar Drill Rods located and do you supply across India?',
    answer: 'Our main distribution hub is located in Coimbatore, Tamil Nadu. We supply high-quality drill rods and compressor spares across all major industrial zones in Tamil Nadu (Salem, Chennai, Madurai) and provide shipping to mining sites throughout India.'
  },
  {
    question: 'Are your Atlas Copco VT 4 spares genuine or high-quality replacements?',
    answer: 'We provide precision-engineered replacement spare parts that meet or exceed OEM specifications. Our VT 4 pistons, valves, and liner sets are manufactured from high-strength industrial alloys to ensure maximum durability in heavy-duty mining environments.'
  },
  {
    question: 'What is the typical lead time for bulk orders of Rock Drill Hoses?',
    answer: 'For standard sizes of Durlon or Drillon Rock Drill Hoses, we maintain ready stock for immediate dispatch. Bulk orders for specialized lengths typically take 3-5 business days to process for delivery across Tamil Nadu.'
  },
  {
    question: 'How do I choose between Sandco Tapper and Blue Tapper drill rods?',
    answer: 'Selection depends on the rock hardness and the impact frequency of your jack hammer. Sandco rods are optimized for high-energy transfer in medium-hard rock, while Blue Tapper rods offer enhanced wear resistance for extremely abrasive granite quarrying.'
  },
  {
    question: 'Do you offer technical support for Jack Hammer spare parts installation?',
    answer: 'Absolutely. Our technical team in Coimbatore provides guidance on the proper fitment of Ranger Boxes, Side Bolts, and Retainer Locks to help reduce your operational downtime.'
  },
  {
    question: 'What are your B2B payment terms for mining contractors?',
    answer: 'We typically follow a standard industrial payment cycle: 50% advance for order confirmation and the balance against proforma before dispatch. For long-term contract partners in Tamil Nadu, we offer customized credit arrangements.'
  },
  {
    question: 'Can you supply custom-sized Imported Drill Rods?',
    answer: 'Yes, we specialize in supplying imported top-hammer drill rods in various thread types (R25, R32, T38). Custom lengths can be sourced or configured based on your specific drilling rig requirements.'
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 bg-slate-50 overflow-hidden font-['Inter']">
      {/* SEO Structured Data Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>

      {/* Background Decorative Blobs */}
      <div
        className="absolute w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${cursorPos.x * 0.01}px, ${cursorPos.y * 0.01}px)` }}
      />

      {/* Header - Center Aligned but Full Width capable */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center mb-24 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
           <MapPin className="text-orange-500 w-4 h-4" />
           <span className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Industrial Hub: Coimbatore, Tamil Nadu</span>
        </div>
        <h2 className="text-5xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-none">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Support & FAQ</span>
        </h2>
        <p className="text-slate-500 max-w-3xl mx-auto font-medium text-lg leading-relaxed italic">
          Everything you need to know about our Atlas Copco spares, rock drill rods, and mining logistics.
        </p>
      </div>

      {/* FAQ Grid - Now using 2 columns on 2xl screens to fill the 1800px width beautifully */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-2xl border transition-all duration-500 hover:border-orange-500/40 ${
                openIndex === idx ? 'border-orange-500/30 shadow-2xl shadow-orange-500/10' : 'border-slate-200 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-8 py-8 flex items-start justify-between text-left"
              >
                <div className="flex gap-5">
                   <HelpCircle className={`w-7 h-7 shrink-0 mt-0.5 ${openIndex === idx ? 'text-orange-500' : 'text-slate-300'}`} />
                   <span className="text-xl font-black text-slate-800 uppercase tracking-tight leading-tight">{faq.question}</span>
                </div>
                <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  openIndex === idx ? 'bg-orange-600 rotate-180 text-white shadow-lg shadow-orange-600/30' : 'bg-slate-50 text-slate-400'
                }`}>
                  {openIndex === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out px-20 overflow-hidden ${
                  openIndex === idx ? 'max-h-[600px] opacity-100 pb-12' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-slate-500 text-lg font-medium leading-relaxed italic border-l-4 border-orange-500/20 pl-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bulk Inquiry CTA - Full Width Optimized */}
      <div className="mt-32 max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="bg-slate-900 rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden relative p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 rounded-full blur-[150px]"></div>
          
          <div className="text-left relative z-10 max-w-2xl">
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter leading-none">Need a Bulk <br /> Quotation?</h3>
            <p className="text-slate-400 text-xl font-medium">For large-scale mining projects or dealership enquiries across Tamil Nadu, our sales team is ready to assist.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8 relative z-10 w-full lg:w-auto">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-16 py-6 bg-orange-600 text-white rounded-2xl font-black uppercase text-sm tracking-widest transition-all duration-300 hover:bg-orange-500 hover:scale-105 active:scale-95 shadow-2xl shadow-orange-600/40"
            >
              Request B2B Pricing
            </button>
            <div className="h-[1px] w-12 bg-white/10 hidden sm:block"></div>
            <a href="tel:+91XXXXXXXXXX" className="text-white font-black uppercase text-sm tracking-[0.3em] border-b-2 border-orange-500 pb-2 hover:text-orange-500 transition-colors">
               Call Technical Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}