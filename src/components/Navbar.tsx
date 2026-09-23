import React, { useState, useEffect } from 'react';
import { MessageCircle, Clock, Menu, X, Phone, MapPin, Instagram } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData';
import { getGymCurrentStatus, GymStatusResult } from '../utils/statusHelper';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [gymStatus, setGymStatus] = useState<GymStatusResult>(getGymCurrentStatus());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setGymStatus(getGymCurrentStatus());
    }, 15000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { label: 'Plans & Pricing', href: '#plans' },
    { label: 'Timings', href: '#timings' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'BMI Calculator', href: '#calculator' },
    { label: 'Location & Map', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#07090e]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3' 
          : 'bg-gradient-to-b from-[#07090e]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-amber-500/40 p-0.5 bg-black/80 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:border-amber-400 transition-all">
              <img 
                src={GYM_DETAILS.logoPath} 
                alt="LAS VEGAS Gym Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  LAS VEGAS
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-red-600/20 text-red-400 border border-red-500/30">
                  GYM
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-amber-400 rounded-lg transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Live Status Badge & Quick CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Real-time Status Badge */}
            <div 
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold border ${
                gymStatus.isOpen 
                  ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300' 
                  : 'bg-zinc-900/80 border-zinc-700/60 text-zinc-400'
              }`}
              title={gymStatus.nextOpenText}
            >
              <span className="relative flex h-2 w-2">
                {gymStatus.isOpen && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${gymStatus.isOpen ? 'bg-emerald-500' : 'bg-zinc-500'}`}></span>
              </span>
              <span className="truncate max-w-[150px]">
                {gymStatus.isOpen ? 'Open Now' : gymStatus.isSunday ? 'Closed (Sunday)' : 'Closed'}
              </span>
            </div>

            {/* WhatsApp CTA Button */}
            <a
              id="nav-whatsapp-btn"
              href={`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent("Hi LAS VEGAS team! I want to inquire about gym membership plans.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent("Hi LAS VEGAS, I would like to join the gym.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600/90 text-white"
              aria-label="WhatsApp Us"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0a0c12] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200"
        >
          {/* Status in mobile drawer */}
          <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${gymStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-red-500'}`} />
              <span className="font-semibold text-zinc-200">{gymStatus.label}</span>
            </div>
            <span className="text-[11px] text-zinc-400">{gymStatus.currentTimeString.split(' ')[0]} IST</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-zinc-200 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-zinc-600 text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:${GYM_DETAILS.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-100"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Gym</span>
            </a>
            <a
              href={GYM_DETAILS.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-900/60 to-pink-900/60 border border-pink-500/30 text-xs font-semibold text-pink-200"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
