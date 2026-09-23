import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  Sun, 
  Moon, 
  Coffee, 
  Zap, 
  ShieldCheck, 
  Calendar, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { TIMINGS_SCHEDULE, GYM_DETAILS } from '../data/gymData';

export default function TimingsSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'morning' | 'evening'>('all');

  return (
    <section id="timings" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/25 text-red-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Clock className="w-3.5 h-3.5 text-red-400" />
          <span>Flexible Daily Schedule</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          TRAIN ON YOUR <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">TERMS</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          Two high-energy sessions every Monday through Saturday. Pick the time slot that matches your peak physical rhythm.
        </p>
      </div>

      {/* Sessions Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Morning Session Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative p-7 rounded-2xl bg-[#0e121a] border border-amber-500/30 hover:border-amber-500/60 shadow-xl group transition-all"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
              <Sun className="w-7 h-7" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-400/10 text-amber-300 border border-amber-400/20">
              Morning Batch
            </span>
          </div>

          <h3 className="text-2xl font-bold font-display text-white mb-2">
            5:30 AM – 10:00 AM
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            {TIMINGS_SCHEDULE.morning.description}
          </p>

          <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Low-congestion, uninterrupted equipment access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Optimal for fasted cardio & metabolic boost</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Fresh mind & full focus before work/study</span>
            </div>
          </div>
        </motion.div>

        {/* Evening Session Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative p-7 rounded-2xl bg-[#0e121a] border border-red-500/40 hover:border-red-500/70 shadow-xl group transition-all"
        >
          <div className="flex items-center justify-between mb-5">
            <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-400 group-hover:scale-110 transition-transform">
              <Moon className="w-7 h-7" />
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-red-400/10 text-red-300 border border-red-400/20">
              Evening Batch
            </span>
          </div>

          <h3 className="text-2xl font-bold font-display text-white mb-2">
            4:00 PM – 9:30 PM
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed mb-6">
            {TIMINGS_SCHEDULE.evening.description}
          </p>

          <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
              <span>Peak core body temperature & muscular strength</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
              <span>Heavy progressive overload & spotter support</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
              <span>Electrifying soundtrack & high-drive community</span>
            </div>
          </div>
        </motion.div>

        {/* Sunday Closed Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative p-7 rounded-2xl bg-[#0d0f15] border border-zinc-800 hover:border-zinc-700 shadow-xl group transition-all flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="p-3 rounded-xl bg-zinc-800 text-zinc-400 border border-zinc-700 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase bg-zinc-800 text-zinc-400 border border-zinc-700">
                Weekly Rest
              </span>
            </div>

            <h3 className="text-2xl font-bold font-display text-zinc-200 mb-2">
              Sunday: CLOSED
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed mb-6">
              {TIMINGS_SCHEDULE.sunday.description}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Central nervous system recovery & muscle hypertrophy</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Deep cleaning, sanitization & equipment tuning</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-800">
            <p className="text-xs text-zinc-500 text-center font-medium">
              Gym re-opens every Monday at <strong className="text-amber-400 font-semibold">5:30 AM sharp</strong>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Timing FAQ or Batch Guide */}
      <div className="bg-[#0b0e14] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white mb-2">
            Can I switch between morning and evening sessions?
          </h4>
          <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
            Yes! All LAS VEGAS membership plans grant <strong className="text-zinc-200">unrestricted dual-session access</strong>. You can train in the morning on one day and in the evening the next day to match your rotating work or college routine.
          </p>
        </div>

        <a
          href={`${GYM_DETAILS.whatsappUrl}?text=${encodeURIComponent("Hi LAS VEGAS, I have a question regarding gym timings and batch slots.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs sm:text-sm font-bold border border-zinc-600 transition-colors"
        >
          Ask Timing Query
        </a>
      </div>
    </section>
  );
}
