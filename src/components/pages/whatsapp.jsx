import React from 'react';

export default function QuickContact() {
  const phoneNumber = "+919994468589";
  const whatsappMsg = "Hello Sri Kumar Drill Rod Works, I have a technical inquiry regarding rock drill spare parts.";
  
  const whatsappLink = `https://wa.me/919443439096?text=${encodeURIComponent(whatsappMsg)}`;
  const callLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      
      {/* FLOATING CALL ICON */}
      <a 
        href={callLink}
        className="group flex items-center justify-center bg-slate-900 border border-white/10 text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:bg-orange-600 active:scale-90"
        aria-label="Call Now"
      >
        <div className="relative">
             <svg 
               className="w-6 h-6 group-hover:animate-pulse" 
               fill="none" 
               stroke="currentColor" 
               viewBox="0 0 24 24"
             >
               <path 
                 strokeLinecap="round" 
                 strokeLinejoin="round" 
                 strokeWidth={2} 
                 d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
               />
             </svg>

             {/* Subtle notification ping */}
             <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
             </span>
        </div>
      </a>

      {/* FLOATING WHATSAPP ICON */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 text-white w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:brightness-110 active:scale-90"
        aria-label="WhatsApp Chat"
      >
        <svg 
          className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            fillRule="evenodd" 
            d="M1.5 4.5c3.3-3.3 8.6-3.3 11.9 0 3.3 3.3 3.3 8.6 0 11.9l-1.3 1.3-4.1.3-1.3-3.8 2.3-2.3a8.8 8.8 0 01-3.6-3.6L4.7 7.7l-3.2 1.3C1.5 9 1.5 7.8 1.5 4.5zm10.6 8.5c.3 0 .6-.1.8-.3l2-2c.4-.4.4-1 0-1.4l-2-2a1.2 1.2 0 00-1.7 1.7l1.1 1.1-1.1 1.1c-.2.2-.3.5-.3.8s.1.6.3.8l.8.5c.2.2.5.3.8.3z" 
            clipRule="evenodd" 
          />
        </svg>
      </a>


    </div>
  );
}