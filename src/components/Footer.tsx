import React from 'react';
import { 
  MessageCircle, 
  Mail, 
  Instagram, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';
import { GYM_DETAILS, GYM_RULES } from '../data/gymData';

export default function Footer() {
  return (
    <footer className="bg-[#05070b] border-t border-white/10 pt-16 pb-24 lg:pb-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-500/40 p-0.5 bg-black/80">
                <img 
                  src={GYM_DETAILS.logoPath} 
                  alt="LAS VEGAS Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-xl font-black text-white tracking-wider">
                LAS VEGAS
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
              A high-end private fitness facility built for athletes and fitness enthusiasts demanding top-grade equipment and genuine results.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={GYM_DETAILS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-emerald-900/40 border border-zinc-800 text-zinc-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={GYM_DETAILS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-pink-900/40 border border-zinc-800 text-zinc-300 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${GYM_DETAILS.email}`}
                className="p-2.5 rounded-xl bg-zinc-900 hover:bg-amber-900/40 border border-zinc-800 text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Timings Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Gym Timings</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-400 block text-xs">Morning Batch</span>
                <strong className="text-zinc-100">5:30 AM – 10:00 AM</strong>
              </li>
              <li className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-zinc-400 block text-xs">Evening Batch</span>
                <strong className="text-zinc-100">4:00 PM – 9:30 PM</strong>
              </li>
              <li className="p-2.5 rounded-xl bg-red-950/20 border border-red-900/30">
                <span className="text-red-400 block text-xs">Sunday</span>
                <strong className="text-red-300">CLOSED (Weekly Rest)</strong>
              </li>
            </ul>
          </div>

          {/* Membership Quick Summary */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Membership Tiers
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span>1 Month (₹700 adm + ₹800 fee)</span>
                <strong className="text-white">₹1,500</strong>
              </li>
              <li className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span>3 Months (Zero admission fee)</span>
                <strong className="text-white">₹2,500</strong>
              </li>
              <li className="flex justify-between items-center py-1.5 border-b border-white/5">
                <span className="text-amber-300 font-semibold">6 Months (Most Popular)</span>
                <strong className="text-amber-400">₹3,999</strong>
              </li>
              <li className="flex justify-between items-center py-1.5">
                <span className="text-emerald-300 font-semibold">1 Year (Best Value)</span>
                <strong className="text-emerald-400">₹6,000</strong>
              </li>
            </ul>
          </div>

          {/* Gym Rules / Etiquette */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Gym Etiquette</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {GYM_RULES.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-400 shrink-0">•</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>
            © {new Date().getFullYear()} <strong className="text-zinc-200">LAS VEGAS GYM</strong>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#plans" className="hover:text-white transition-colors">Plans</a>
            <span>•</span>
            <a href="#timings" className="hover:text-white transition-colors">Schedule</a>
            <span>•</span>
            <a href="#location" className="hover:text-white transition-colors">Location</a>
            <span>•</span>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
