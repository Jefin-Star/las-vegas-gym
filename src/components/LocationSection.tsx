import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Phone, MessageCircle } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export default function LocationSection() {
  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5" />
          <span>Prime Location & Access</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          FIND <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">LAS VEGAS</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          Conveniently located with dedicated two-wheeler and vehicle parking, accessible transit, and a vibrant neighborhood.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Location Information Card (Left 5 Cols) */}
        <div className="lg:col-span-5 bg-[#0d1017] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  LAS VEGAS Fitness Club
                </h3>
                <p className="text-xs text-zinc-400">
                  Coordinates: <span className="text-amber-400 font-mono font-bold">{GYM_DETAILS.coordinates}</span>
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm text-zinc-300 mb-8">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-bold uppercase text-zinc-400 block mb-1">Workout Batches:</span>
                <p className="text-zinc-200">
                  Morning: <strong className="text-amber-400">5:30 AM – 10:00 AM</strong>
                </p>
                <p className="text-zinc-200">
                  Evening: <strong className="text-red-400">4:00 PM – 9:30 PM</strong>
                </p>
                <p className="text-zinc-400 text-xs mt-1">
                  Sunday: Closed (Recovery Day)
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-bold uppercase text-zinc-400 block mb-1">Direct Contact:</span>
                <p className="text-zinc-200">
                  WhatsApp: <strong className="text-emerald-400 font-mono">{GYM_DETAILS.phone}</strong>
                </p>
                <p className="text-zinc-200 mt-1">
                  Email: <strong className="text-zinc-300 font-mono">{GYM_DETAILS.email}</strong>
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-xs font-bold uppercase text-zinc-400 block mb-1">Facility Perks:</span>
                <ul className="text-xs text-zinc-300 space-y-1 list-disc list-inside">
                  <li>Dedicated bike and car parking space</li>
                  <li>Filtered chilled drinking water</li>
                  <li>High-airflow ventilation</li>
                  <li>Personal storage lockers available</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              id="google-maps-directions-btn"
              href={GYM_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-black flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-900/30"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Get Live Directions</span>
            </a>

            <a
              href={`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent("Hi LAS VEGAS! Can you share landmark guidance for reaching the gym?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl text-xs sm:text-sm font-bold bg-zinc-800 hover:bg-zinc-700 text-emerald-400 border border-emerald-500/30 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Landmark</span>
            </a>
          </div>
        </div>

        {/* Embedded Google Map (Right 7 Cols) */}
        <div className="lg:col-span-7 bg-[#0d1017] border border-white/10 rounded-2xl p-2 sm:p-3 overflow-hidden shadow-2xl relative min-h-[420px] flex flex-col">
          <div className="relative w-full h-full min-h-[400px] rounded-xl overflow-hidden">
            <iframe
              title="LAS VEGAS Gym Location"
              src={GYM_DETAILS.mapEmbedSrc}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[420px] rounded-xl border-0"
              style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
