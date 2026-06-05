import { ArrowUpRight, Factory, HardHat, Mountain, Building2, Truck, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const industries = [
  {
    title: 'Mining & Quarrying',
    category: 'Regional Belts',
    description: 'Supporting granite quarries, limestone mines, and stone quarries across Tamilnadu with reliable drilling supply.',
    image: 'https://images.pexels.com/photos/2892618/pexels-photo-2892618.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Granite Quarries', 'Limestone', 'Regional Belts'],
    icon: Mountain,
    gradient: "from-orange-600 to-orange-700" // Unified to single brand color
  },
  {
    title: 'Road Construction',
    category: 'State Infrastructure',
    description: 'Trusted partner for NH projects, state highways, and rural road development across the district networks.',
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['NH Projects', 'Highways', 'Rural Roads'],
    icon: HardHat,
    gradient: "from-orange-600 to-orange-700"
  },
  {
    title: 'Infrastructure',
    category: 'Urban Mobility',
    description: 'Providing parts for tunnel boring, dam construction, and metro rail projects in Chennai and Coimbatore.',
    image: 'https://images.pexels.com/photos/3136673/pexels-photo-3136673.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Metro Rail', 'Tunneling', 'Dams'],
    icon: Factory,
    gradient: "from-orange-600 to-orange-700"
  },
  {
    title: 'Real Estate & Foundation',
    category: 'Urban Centers',
    description: 'Specialized gear for building excavation and heavy-duty piling work across Tamilnadu’s growing urban centers.',
    image: 'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Excavation', 'Piling', 'Urban Centers'],
    icon: Building2,
    gradient: "from-orange-600 to-orange-700"
  },
  {
    title: 'Equipment Repair',
    category: 'Maintenance Hub',
    description: 'Reliable supply of authentic spare parts for service centers and workshops throughout Tamilnadu.',
    image: 'https://images.pexels.com/photos/5431536/pexels-photo-5431536.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Service Centers', 'Maintenance', 'Authentic Spares'],
    icon: Truck,
    gradient: "from-orange-600 to-orange-700"
  }
];

export default function Industries() {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  return (
    <section id="industries" className="relative py-16 md:py-36 bg-white overflow-hidden text-slate-900 font-['Inter']">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '60px 60px' }}>
      </div>

      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-end mb-16 md:mb-32">
          <div>
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[2px] md:h-[3px] w-12 md:w-16 bg-orange-600"></div> {/* Single Color Accent */}
              <span className="text-orange-600 font-['Poppins'] font-semibold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-xs">
                Industries We Serve Across Tamilnadu
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl lg:text-[6rem] font-['Poppins'] font-bold uppercase tracking-tighter md:tracking-[calc(-0.05em)] leading-[1.1] md:leading-[0.85] italic mb-6">
              POWERING <br /> 
              <span className="text-slate-900"> {/* Unified Text Color */}
                TAMILNADU.
              </span>
            </h2>
          </div>
          <div className="lg:pb-12">
            <p className="text-lg lg:text-2xl max-w-2xl text-slate-500 italic border-l-4 md:border-l-8 border-orange-600 pl-6 md:pl-8 leading-relaxed md:leading-tight font-normal"> {/* Unified Border Color */}
              Supporting the mining, construction, and infrastructure sectors that build and power our state.
            </p>
          </div>
        </div>

        {/* Technical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 perspective-1000">
          {industries.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => navigate('/contactus')}
              className={`group relative bg-white border border-slate-100 overflow-hidden transition-all duration-700 shadow-sm cursor-pointer hover:shadow-2xl lg:hover:-translate-y-4 ${
                activeItem !== null && activeItem !== index ? 'opacity-40 scale-[0.98] lg:grayscale' : 'opacity-100 scale-100'
              }`}
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-orange-600 opacity-0 group-hover:opacity-40 transition-opacity duration-700`}></div>
                
                <div className="absolute bottom-6 left-6 p-3 md:p-4 bg-white shadow-xl border border-slate-100 group-hover:bg-slate-900 group-hover:border-slate-800 transition-all duration-500">
                   <item.icon className="w-5 h-5 md:w-6 md:h-6 text-orange-600 group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700" /> {/* Unified Icon Color */}
                </div>
                
                <div className="absolute top-6 right-6 p-2 md:p-3 bg-white text-slate-900 shadow-lg lg:translate-y-4 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-500 delay-100 hover:bg-orange-600 hover:text-white">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>

              <div className="p-8 md:p-10 relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className={`w-2 h-2 rounded-full bg-orange-600`}></div> {/* Unified Dot Color */}
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-orange-600"> {/* Unified Category Color */}
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-['Poppins'] font-bold uppercase tracking-tight text-slate-900 group-hover:text-orange-600 transition-all duration-500 mb-4 md:mb-6 leading-none">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm italic leading-relaxed mb-6 md:mb-8 opacity-80 group-hover:opacity-100 group-hover:text-slate-700 transition-all">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[8px] md:text-[9px] font-semibold uppercase tracking-wider px-2 md:px-3 py-1 bg-slate-50 border border-slate-100 text-slate-400 group-hover:border-orange-200 group-hover:text-orange-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 h-1 md:h-1.5 w-0 bg-orange-600 transition-all duration-[1s] ease-out group-hover:w-full`}></div>
            </div>
          ))}
        </div>

        {/* Footer Area */}
        <div className="mt-16 md:mt-32 pt-12 md:pt-16 border-t border-slate-100 flex flex-col xl:flex-row justify-between items-center gap-8 md:gap-12">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-center md:text-left">
            <div className="p-3 md:p-4 bg-orange-50 rounded-full">
              <MapPin className="text-orange-600 w-6 h-6 md:w-8 md:h-8 animate-pulse" />
            </div>
            <div>
              <p className="text-slate-400 font-['Poppins'] font-semibold uppercase text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] mb-1">
                State-Wide Logistics
              </p>
              <p className="text-slate-900 font-bold uppercase italic text-base md:text-lg tracking-tighter">
                Reliable supply and consistent quality for projects of any scale.
              </p>
            </div>
          </div>
          <button 
            onClick={() => navigate('/contactus')}
            className="w-full md:w-auto relative overflow-hidden group/btn px-10 md:px-16 py-5 md:py-6 bg-slate-900 text-white font-['Poppins'] font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] transition-all hover:bg-orange-600 active:scale-95 shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              Request Sector Quote <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover/btn:translate-y-0 transition-transform duration-500 mix-blend-difference"></div>
          </button>
        </div>
      </div>
    </section>
  );
}