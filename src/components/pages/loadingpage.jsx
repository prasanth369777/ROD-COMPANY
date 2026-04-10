import React from 'react';

const Loader = () => {
  const text = "SriKumarDrill";

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0a0a0a] overflow-hidden p-4">
      {/* Responsive Container:
          - text-3xl on mobile
          - text-5xl on tablet
          - text-6xl on desktop
          - Tracking-tighter on small screens to prevent overflow
      */}
      <div className="relative flex items-center justify-center font-['Poppins'] font-bold select-none text-white 
                      text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                      tracking-tight sm:tracking-widest h-auto py-10">
        
        {/* Render each letter with calculated delay */}
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block opacity-0 animate-loader-letter"
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {char}
          </span>
        ))}

        {/* The Animated "Light Sweep" Loader Element */}
        <div className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay overflow-hidden">
          <div className="absolute inset-0 loader-mask" />
        </div>
      </div>

      <style>{`
        /* Letter Pop-in Animation */
        @keyframes loader-letter-anim {
          0% { opacity: 0; transform: scale(1); }
          5% { 
            opacity: 1; 
            text-shadow: 0 0 15px rgba(255,255,255,0.9); 
            transform: scale(1.1) translateY(-5%); 
          }
          20% { opacity: 0.3; transform: translateY(0); }
          100% { opacity: 0; }
        }

        .animate-loader-letter {
          animation: loader-letter-anim 4s infinite linear;
        }

        /* Light Sweep Effect */
        .loader-mask {
          background-image: radial-gradient(circle at 50% 50%, #ff0 0%, transparent 50%),
            radial-gradient(circle at 45% 45%, #f00 0%, transparent 45%),
            radial-gradient(circle at 55% 55%, #0ff 0%, transparent 45%),
            radial-gradient(circle at 45% 55%, #0f0 0%, transparent 45%),
            radial-gradient(circle at 55% 45%, #00f 0%, transparent 45%);
          
          /* Adjusted mask for better visibility on different screen sizes */
          mask: radial-gradient(circle at 50% 50%, transparent 0%, transparent 20%, black 40%);
          -webkit-mask: radial-gradient(circle at 50% 50%, transparent 0%, transparent 20%, black 40%);
          
          animation: transform-animation 2.5s infinite alternate, opacity-animation 4s infinite;
          animation-timing-function: cubic-bezier(0.6, 0.8, 0.5, 1);
        }

        @keyframes transform-animation {
          0% { transform: translateX(-60%); }
          100% { transform: translateX(60%); }
        }

        @keyframes opacity-animation {
          0%, 100% { opacity: 0; }
          15% { opacity: 1; }
          65% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Loader;