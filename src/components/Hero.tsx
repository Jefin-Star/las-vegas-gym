import React from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, 
  Clock, 
  CheckCircle2, 
  MessageCircle, 
  Flame, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07090e]"
    >
      {/* Background Graphic & Atmosphere Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle hero image backdrop with dark overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${GYM_DETAILS.heroImagePath})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-transparent to-[#07090e]" />
        
        {/* Glow Spheres matching Gold & Red brand colors */}
        <div className="absolute -top-32 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center z-10">
        {/* Top Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-red-500/15 to-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold mb-8 shadow-[0_0_20px_rgba(245,158,11,0.15)]"
        >
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Special Offer: Zero Admission Fee on 3, 6 & 12 Month Plans</span>
        </motion.div>

        {/* Logo Showcase with Brand Crest Frame */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative group">
            {/* Outer golden halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-500 via-red-600 to-amber-500 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-700" />
            
            {/* Logo container */}
            <div className="relative p-2.5 sm:p-3 bg-black/90 rounded-2xl border border-amber-500/40 shadow-2xl backdrop-blur-xl">
              <img
                src={GYM_DETAILS.logoPath}
                alt="LAS VEGAS Official Gym Emblem"
                className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display tracking-tight text-white uppercase mb-4 leading-none">
            LAS <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-red-500 bg-clip-text text-transparent">VEGAS</span>
          </h1>
          <p className="text-lg sm:text-2xl font-medium text-zinc-300 max-w-2xl mx-auto tracking-wide mb-6">
            The Elite Fitness Destination for Unstoppable Physique & Strength
          </p>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed">
            Train with heavy-duty Olympic equipment, specialized hypertrophy machinery, and dedicated guidance. Flexible plans starting from just <span className="text-amber-400 font-bold">₹1,500</span>.
          </p>
        </motion.div>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            id="hero-view-plans-btn"
            href="#plans"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Explore Membership Plans</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <a
            id="hero-whatsapp-btn"
            href={`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent("Hello LAS VEGAS! I am interested in joining your gym. Please share membership and admission details.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-[#121620] hover:bg-[#192030] text-emerald-400 border border-emerald-500/40 shadow-lg shadow-black/50 transition-all hover:scale-[1.03] active:scale-[0.98]"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Chat on WhatsApp ({GYM_DETAILS.phone})</span>
          </a>
        </motion.div>

        {/* Quick Highlights Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-6 border-t border-white/10"
        >
          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-amber-400 font-bold text-lg sm:text-xl font-display">₹1,500</span>
            <span className="text-xs text-zinc-400">Plans Starting From</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-red-400 font-bold text-lg sm:text-xl font-display">₹0 Fee</span>
            <span className="text-xs text-zinc-400">Admission on 3+ Months</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-zinc-100 font-bold text-lg sm:text-xl font-display">5:30 AM</span>
            <span className="text-xs text-zinc-400">Early Morning Batch</span>
          </div>

          <div className="flex flex-col items-center p-3 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-emerald-400 font-bold text-lg sm:text-xl font-display">4:00 PM</span>
            <span className="text-xs text-zinc-400">Evening Training Batch</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
