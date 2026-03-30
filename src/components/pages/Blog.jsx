import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ExternalLink } from "lucide-react";
import Lenis from "@studio-freight/lenis";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    title: "Choosing Drill Rods for Tamilnadu Mining",
    description:
      "A guide to selecting Sandco and Blue Tapper rods for the specific granite and limestone belts found across the state.",
    author: "Technical Team",
    date: "Mar 20, 2026",
    image:
      "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Drill Rods", "Tamilnadu", "Mining"],
  },
  {
    title: "Maximizing Jackhammer Piston Life",
    description:
      "Essential maintenance tips for PSI and MDS jackhammer spares to ensure zero downtime on construction sites.",
    author: "Service Dept",
    date: "Mar 15, 2026",
    image:
      "https://images.pexels.com/photos/2209524/pexels-photo-2209524.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Jackhammer", "Maintenance", "Spares"],
  },
  {
    title: "The Science of Tapered Button Bits",
    description:
      "How different angles and carbide grades affect drilling performance in high-impact road construction projects.",
    author: "Engineering Lead",
    date: "Mar 05, 2026",
    image:
      "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Button Bits", "Drilling", "Tamilnadu"],
  },
  {
    title: "Air Compressor Efficiency at High Altitude",
    description:
      "Optimizing your Atlas Copco VT 4 settings for tunnel boring and dam infrastructure projects in hilly terrains.",
    author: "Tech Support",
    date: "Feb 28, 2026",
    image:
      "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Atlas Copco", "Infrastructure", "Pneumatics"],
  },
];

const popularNews = [
  {
    title: "New Supply Hub in Coimbatore",
    description: "Expanding our reach to provide faster service and authentic parts across South Tamilnadu.",
    image: "https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Road Infrastructure Standards 2026",
    description: "How our drill rods meet the new durability requirements for state highway expansions.",
    image: "https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Authentic Parts vs. Counterfeits",
    description: "Why genuine spare parts are critical for the safety and longevity of your pneumatic tools.",
    image: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function BlogSectionClassic() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1, wheelMultiplier: 1.2 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Floating background effect
  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Navigation />

      {/* Blog Section */}
      <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
        <div className="text-center mb-16 px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4 uppercase italic tracking-tighter">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Insights</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium italic">
            Sri Kumar Drill Rod Works provides expert guidance on mining tools, 
            infrastructure drilling, and jackhammer maintenance for Tamilnadu's workforce.
          </p>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="bg-white rounded-none border border-slate-100 shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase italic leading-tight">{blog.title}</h3>
                <p className="text-slate-500 flex-1 mb-6 text-sm leading-relaxed">{blog.description}</p>
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {blog.tags.map((tag, tid) => (
                    <span
                      key={tid}
                      className="text-[9px] px-3 py-1 font-bold rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/contactus')}
                  className="inline-flex items-center gap-2 text-orange-600 font-black uppercase text-xs tracking-widest hover:text-red-600 transition-colors"
                >
                  Read Technical Guide
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Circles - Adjusted to Logo Orange */}
        <div
          className="absolute w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"
          style={{ transform: `translate(${cursorPos.x * 0.01}px, ${cursorPos.y * 0.01}px)` }}
        />
        <div
          className="absolute w-80 h-80 bg-red-600/5 rounded-full blur-3xl pointer-events-none"
          style={{ transform: `translate(${cursorPos.x * -0.01}px, ${cursorPos.y * -0.01}px)` }}
        />
      </section>

      {/* Popular News Section with Glassmorphism */}
      <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
        <div className="text-center mb-20 px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase italic tracking-tighter">
            Regional <span className="text-orange-500">News</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic">
            Stay informed with the latest logistical updates and industry changes in Tamilnadu.
          </p>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-6 lg:px-16">
          {popularNews.map((news, idx) => (
            <div
              key={idx}
              onClick={() => navigate('/contactus')}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-none p-8 hover:bg-white/10 transition-all duration-500 relative group overflow-hidden cursor-pointer"
            >
              <div className="h-60 overflow-hidden mb-6">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <h3 className="text-2xl font-black mb-4 text-orange-500 uppercase italic tracking-tight">{news.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed italic">{news.description}</p>
              
              {/* Logo Glow Border */}
              <div className="absolute inset-0 pointer-events-none border border-orange-500/0 group-hover:border-orange-500/50 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Technical Watermark */}
        <div className="absolute bottom-0 left-0 p-10 opacity-5 select-none pointer-events-none">
           <h4 className="text-[15vw] font-black text-white leading-none tracking-tighter italic">LATEST</h4>
        </div>
      </section>

      <Footer />

      <style>{`
        .shadow-neon {
          box-shadow: 0 0 15px rgba(249, 115, 22, 0.4), 0 0 30px rgba(239, 68, 68, 0.2);
        }
      `}</style>
    </>
  );
}