import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';

export default function QuickContact() {
  const phoneNumber = "+918531985733";
  const whatsappMsg = "Hello Sri Kumar Drill Rod Works, I have a technical inquiry regarding rock drill spare parts.";
  
  const whatsappLink = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMsg)}`;
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
             <PhoneCall size={24} className="group-hover:animate-pulse" />
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
        <MessageCircle size={26} className="group-hover:rotate-12 transition-transform duration-300" />
      </a>

    </div>
  );
}