import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Sticky Bottom Contact Bar (Visible only on mobile screens < 640px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#07090e]/95 backdrop-blur-lg border-t border-white/10 p-2.5 px-4 flex items-center justify-between gap-2 shadow-2xl">
        <a
          id="mobile-call-action"
          href={`tel:${GYM_DETAILS.phone}`}
          className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 flex items-center justify-center gap-1.5 text-xs font-bold transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400" />
          <span>Call</span>
        </a>

        <a
          id="mobile-map-action"
          href={GYM_DETAILS.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-100 flex items-center justify-center gap-1.5 text-xs font-bold transition-colors"
        >
          <MapPin className="w-3.5 h-3.5 text-emerald-400" />
          <span>Map</span>
        </a>

        <a
          id="mobile-whatsapp-action"
          href={`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent("Hello LAS VEGAS! I want to inquire about gym membership plans.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] py-2.5 px-3 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white flex items-center justify-center gap-1.5 text-xs font-black shadow-lg shadow-emerald-950/50"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* Desktop & Tablet Floating WhatsApp Button */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to Top"
            className="p-3 rounded-full bg-zinc-800/90 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-white/10 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          id="desktop-floating-whatsapp"
          href={`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent("Hello LAS VEGAS! I want to inquire about gym membership plans.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 py-3 px-4 rounded-full bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 text-white font-bold text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all hover:scale-105 active:scale-95"
        >
          <div className="relative">
            <span className="animate-ping absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-300 opacity-75" />
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="tracking-wide">Chat with LAS VEGAS</span>
        </a>
      </div>
    </>
  );
}
