import React from 'react';
import { motion } from 'motion/react';
import { 
  Dumbbell, 
  Shield, 
  Activity, 
  Flame, 
  Award, 
  Sparkles,
  CheckCircle,
  Zap
} from 'lucide-react';
import { FACILITIES, GYM_DETAILS } from '../data/gymData';

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell className="w-6 h-6 text-amber-400" />,
  Shield: <Shield className="w-6 h-6 text-red-400" />,
  Activity: <Activity className="w-6 h-6 text-amber-400" />,
  Flame: <Flame className="w-6 h-6 text-red-400" />,
  Award: <Award className="w-6 h-6 text-amber-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-emerald-400" />,
};

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>Engineered For Maximum Output</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          BUILT FOR <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-red-500 bg-clip-text text-transparent">SERIOUS LIFTERS</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          From competition Olympic barbells to precision selectorized muscle machines, LAS VEGAS delivers the ultimate iron environment.
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FACILITIES.map((facility, index) => (
          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative p-7 rounded-2xl bg-[#0c0f16] border border-white/10 hover:border-amber-500/40 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-black"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                {iconMap[facility.icon] || <Dumbbell className="w-6 h-6 text-amber-400" />}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 text-zinc-400 border border-white/5">
                {facility.badge}
              </span>
            </div>

            <h3 className="text-xl font-bold font-display text-white mb-2 group-hover:text-amber-300 transition-colors">
              {facility.title}
            </h3>

            <p className="text-sm text-zinc-400 leading-relaxed">
              {facility.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Atmospheric Gallery Banner */}
      <div className="mt-12 relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
        <div 
          className="h-64 sm:h-80 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${GYM_DETAILS.heroImagePath})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex items-end p-6 sm:p-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2 block">
              The LAS VEGAS Atmosphere
            </span>
            <h4 className="text-2xl sm:text-3xl font-black font-display text-white mb-3">
              No Gimmicks. Just Raw Iron, Precision Form, & Real Gains.
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Step onto the gym floor and feel the energy. Whether you are a beginner picking up your first set of dumbbells or an experienced powerlifter hitting PRs, our community elevates your standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
