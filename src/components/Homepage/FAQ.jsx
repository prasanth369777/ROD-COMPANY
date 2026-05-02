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
    <section className="relative py-16 md:py-32 bg-slate-50 overflow-hidden font-['Inter']">
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
        className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none transition-transform duration-700 ease-out hidden sm:block"
        style={{ transform: `translate(${cursorPos.x * 0.01}px, ${cursorPos.y * 0.01}px)` }}
      />

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center mb-16 md:mb-24 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
           <MapPin className="text-orange-500 w-3 h-3 md:w-4 md:h-4" />
           <span className="text-slate-400 font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px]">Industrial Hub: Coimbatore, Tamil Nadu</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 md:mb-8 uppercase tracking-tighter italic leading-tight md:leading-none">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Support & FAQ</span>
        </h2>
        <p className="text-slate-500 max-w-3xl mx-auto font-normal text-base md:text-lg leading-relaxed italic">
          Everything you need to know about our Atlas Copco spares, rock drill rods, and mining logistics.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4 md:gap-6 items-start">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`group bg-white rounded-xl md:rounded-2xl border transition-all duration-500 hover:border-orange-500/40 ${
                openIndex === idx ? 'border-orange-500/30 shadow-2xl shadow-orange-500/10' : 'border-slate-200 shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 md:px-8 py-6 md:py-8 flex items-start justify-between text-left"
              >
                <div className="flex gap-3 md:gap-5">
                   <HelpCircle className={`w-6 h-6 md:w-7 md:h-7 shrink-0 mt-0.5 ${openIndex === idx ? 'text-orange-500' : 'text-slate-300'}`} />
                   <span className="text-lg md:text-xl font-bold text-slate-800 uppercase tracking-tight leading-tight">{faq.question}</span>
                </div>
                <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center transition-all duration-500 ${
                  openIndex === idx ? 'bg-orange-600 rotate-180 text-white shadow-lg shadow-orange-600/30' : 'bg-slate-50 text-slate-400'
                }`}>
                  {openIndex === idx ? <Minus className="w-5 h-5 md:w-6 md:h-6" /> : <Plus className="w-5 h-5 md:w-6 md:h-6" />}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out px-10 md:px-20 overflow-hidden ${
                  openIndex === idx ? 'max-h-[800px] md:max-h-[600px] opacity-100 pb-8 md:pb-12' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="text-slate-500 text-sm md:text-lg font-normal leading-relaxed italic border-l-2 md:border-l-4 border-orange-500/20 pl-4 md:pl-8">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bulk Inquiry CTA */}
      <div className="mt-16 md:mt-32 max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
        <div className="bg-slate-900 rounded-[2rem] md:rounded-[4rem] border border-white/5 shadow-2xl overflow-hidden relative p-8 md:p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-orange-600/10 rounded-full blur-[100px] md:blur-[150px]"></div>
          
          <div className="text-center lg:text-left relative z-10 max-w-2xl">
            <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 uppercase italic tracking-tighter leading-tight md:leading-none">Need a Bulk <br /> Quotation?</h3>
            <p className="text-slate-400 text-base md:text-xl font-normal">For large-scale mining projects or dealership enquiries across Tamil Nadu, our sales team is ready to assist.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 relative z-10 w-full lg:w-auto">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-orange-600 text-white rounded-xl md:rounded-2xl font-bold uppercase text-xs md:text-sm tracking-widest transition-all duration-300 hover:bg-orange-500 hover:scale-105 active:scale-95 shadow-2xl shadow-orange-600/40"
            >
              Request B2B Pricing
            </button>
            <div className="h-[1px] w-12 bg-white/10 hidden sm:block"></div>
            <a href="tel:+919443439096" className="text-white font-bold uppercase text-xs md:text-sm tracking-[0.2em] md:tracking-[0.3em] border-b-2 border-orange-500 pb-2 hover:text-orange-500 transition-colors text-center">
                Call Technical Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}