import { useEffect, useState } from "react";
import { ExternalLink, BookOpen, Clock, User, ShieldCheck, Factory } from "lucide-react";
import Lenis from "@studio-freight/lenis";

const blogs = [
  {
    title: "Optimizing Atlas Copco VT 4 Performance",
    description: "A comprehensive guide on maintaining piston and valve efficiency for the VT 4 compressor series in heavy mining environments.",
    author: "Technical Team",
    date: "Mar 15, 2026",
    image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Atlas Copco", "Maintenance", "Compressors"],
  },
  {
    title: "Choosing the Right Taper Drill Rod",
    description: "Comparing Sandco vs. Blue Tapper drill rods: Which alloy steel grade offers the best energy transfer for hard rock quarrying?",
    author: "S. Kumaran",
    date: "Feb 28, 2026",
    image: "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Drill Rods", "Mining", "Sandco"],
  },
  
  {
    title: "Jack Hammer Spare Parts: Reducing Downtime",
    description: "Essential spares to keep on-site: From Ranger Boxes to Side Bolts. How precision-fit parts extend the life of MDS Jack Hammers.",
    author: "Maintenance Pro",
    date: "Jan 22, 2026",
    image: "https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Jack Hammer", "Spares", "Efficiency"],
  },
  
  {
    title: "Top Hammer vs. DTH: Choosing Your Rig",
    description: "A deep dive into drilling mechanics: When to use Imported top hammer rods versus traditional down-the-hole configurations.",
    author: "Technical Team",
    date: "Nov 30, 2025",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Drilling", "Rigs", "Engineering"],
  },
];

export default function BlogSectionClassic() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.1 });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-16 md:py-32 bg-slate-50 overflow-hidden font-['Inter']">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none hidden lg:block">
        <h2 className="text-[10rem] xl:text-[20rem] font-bold leading-none">TECHNICAL</h2>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
             <Factory className="text-orange-500 w-4 h-4 md:w-5 md:h-5" />
             <span className="text-slate-400 font-semibold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[11px]">Industrial Knowledge Base</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 uppercase tracking-tighter italic leading-tight md:leading-none">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-bold">Insights</span>
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto font-normal text-base md:text-lg leading-relaxed border-t border-slate-200 pt-6 md:pt-8 italic">
            Engineering guides, maintenance protocols, and logistical updates for the mining and drilling sectors across Tamil Nadu and Pan-India.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-700 flex flex-col md:flex-row h-full"
            >
              {/* Image Container */}
              <div className="w-full md:w-[45%] h-60 sm:h-72 md:h-auto overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4">
                    <div className="bg-orange-600 text-white p-2 rounded-lg shadow-xl">
                        {/* Responsive sizing via Tailwind className */}
                        <ShieldCheck className="w-[18px] h-[18px] md:w-[20px] md:h-[20px]" />
                    </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 md:p-10 md:w-[55%] flex flex-col justify-between">
                <div>
                    <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {blog.tags.map((tag, tid) => (
                        <span
                        key={tid}
                        className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest px-3 md:px-4 py-1.5 bg-slate-900 text-white rounded-full"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight hover:text-orange-600 transition-colors cursor-pointer tracking-tighter uppercase italic">
                    {blog.title}
                    </h3>
                    
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-normal border-l-2 md:border-l-4 border-orange-500/10 pl-4 md:pl-6 italic">
                    {blog.description}
                    </p>
                </div>
                
                <div className="flex items-center justify-between pt-6 md:pt-8 border-t border-slate-50">
                  <div className="flex flex-wrap items-center gap-3 md:gap-6">
                    <div className="flex items-center gap-2 text-[9px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                      <User size={12} className="text-orange-500" /> {blog.author}
                    </div>
                    <div className="flex items-center gap-2 text-[9px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-widest">
                      <Clock size={12} className="text-orange-500" /> {blog.date}
                    </div>
                  </div>
                  
                  <a
                    href="/"
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-slate-50 text-slate-900 hover:bg-orange-600 hover:text-white transition-all rounded-xl shadow-inner group/btn"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cursor Interactive Element */}
        <div
          className="absolute w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-orange-400/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none transition-transform duration-1000 ease-out hidden sm:block"
          style={{
            left: cursorPos.x - 400,
            top: cursorPos.y - 400,
          }}
        />
        
        {/* Bottom CTA */}
        <div className="mt-16 md:mt-32 text-center relative z-10">
          <button className="w-full sm:w-auto px-10 md:px-20 py-6 md:py-8 bg-slate-900 text-white font-bold text-[11px] md:text-[13px] uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-orange-600 transition-all active:scale-95 flex items-center justify-center gap-4 md:gap-6 mx-auto group rounded-xl md:rounded-2xl shadow-2xl">
              Explore Full Archive <BookOpen className="w-[18px] h-[18px] md:w-[20px] md:h-[20px] group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}