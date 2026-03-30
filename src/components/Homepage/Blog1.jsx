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
    title: "Preventing Hose Failure in High-Pressure Drilling",
    description: "Why Durlon and Drillon hoses are the industry standard for pneumatic safety. Understanding PSI limits and abrasion resistance.",
    author: "Operations Lead",
    date: "Feb 10, 2026",
    image: "https://images.pexels.com/photos/162539/pexels-photo-162539.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Hoses", "Safety", "Pneumatics"],
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
    title: "The Science of Rock Drill Bit Sharpening",
    description: "Extend the lifespan of your button bits by up to 40% with proper grinding techniques and frequency schedules.",
    author: "Bit Specialist",
    date: "Jan 05, 2026",
    image: "https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Button Bits", "Grinding", "Tools"],
  },
  {
    title: "Mining Safety: Pneumatic System Integrity",
    description: "Identifying micro-leaks in compressor valves before they lead to catastrophic equipment failure in underground sites.",
    author: "Safety Officer",
    date: "Dec 18, 2025",
    image: "https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Safety", "Compressors", "Audit"],
  },
  {
    title: "Top Hammer vs. DTH: Choosing Your Rig",
    description: "A deep dive into drilling mechanics: When to use Imported top hammer rods versus traditional down-the-hole configurations.",
    author: "Technical Team",
    date: "Nov 30, 2025",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Drilling", "Rigs", "Engineering"],
  },
  {
    title: "Supply Chain Solutions for Tamil Nadu Mining",
    description: "How Sri Kumar Drill Rods ensures 24-hour delivery of critical spares to Salem, Coimbatore, and Chennai industrial zones.",
    author: "Logistics Mgr",
    date: "Nov 12, 2025",
    image: "https://images.pexels.com/photos/2209524/pexels-photo-2209524.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Logistics", "B2B", "Tamil Nadu"],
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
    <section className="relative py-32 bg-slate-50 overflow-hidden font-['Inter']">
      
      {/* BACKGROUND WATERMARK */}
      <div className="absolute top-10 left-10 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[20rem] font-black leading-none">TECHNICAL</h2>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
             <Factory className="text-orange-500 w-5 h-5" />
             <span className="text-slate-400 font-bold uppercase tracking-[0.4em] text-[11px]">Industrial Knowledge Base</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 uppercase tracking-tighter italic leading-none">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-black">Insights</span>
          </h2>
          <p className="text-slate-500 max-w-3xl mx-auto font-medium text-lg leading-relaxed border-t border-slate-200 pt-8 italic">
            Engineering guides, maintenance protocols, and logistical updates for the mining and drilling sectors across Tamil Nadu and Pan-India.
          </p>
        </div>

        {/* Blog Grid - 2 columns on Desktop, wider cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="group bg-white border border-slate-100 overflow-hidden hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col md:flex-row h-full"
            >
              {/* Image Container */}
              <div className="md:w-[45%] h-72 md:h-auto overflow-hidden relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors duration-500"></div>
                <div className="absolute top-4 left-4">
                    <div className="bg-orange-600 text-white p-2 rounded-lg shadow-xl">
                        <ShieldCheck size={20} />
                    </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-10 md:w-[55%] flex flex-col justify-between">
                <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                    {blog.tags.map((tag, tid) => (
                        <span
                        key={tid}
                        className="text-[10px] font-black uppercase tracking-widest px-4 py-1.5 bg-slate-900 text-white rounded-full"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                    
                    <h3 className="text-3xl font-black text-slate-900 mb-4 leading-[1.1] hover:text-orange-600 transition-colors cursor-pointer tracking-tighter uppercase italic">
                    {blog.title}
                    </h3>
                    
                    <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium border-l-4 border-orange-500/10 pl-6 italic">
                    {blog.description}
                    </p>
                </div>
                
                <div className="flex items-center justify-between pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      <User size={14} className="text-orange-500" /> {blog.author}
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      <Clock size={14} className="text-orange-500" /> {blog.date}
                    </div>
                  </div>
                  
                  <a
                    href="/"
                    className="w-12 h-12 flex items-center justify-center bg-slate-50 text-slate-900 hover:bg-orange-600 hover:text-white transition-all rounded-xl shadow-inner group/btn"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Cursor Interactive Element */}
        <div
          className="absolute w-[800px] h-[800px] bg-orange-400/5 rounded-full blur-[150px] pointer-events-none transition-transform duration-1000 ease-out"
          style={{
            left: cursorPos.x - 400,
            top: cursorPos.y - 400,
          }}
        />
        
        {/* Bottom CTA */}
        <div className="mt-32 text-center relative z-10">
          <button className="px-20 py-8 bg-slate-900 text-white font-black text-[13px] uppercase tracking-[0.4em] hover:bg-orange-600 transition-all active:scale-95 flex items-center gap-6 mx-auto group rounded-2xl shadow-2xl">
             Explore Full Archive <BookOpen size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}