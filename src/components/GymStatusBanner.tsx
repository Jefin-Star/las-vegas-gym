import React, { useState, useEffect } from 'react';
import { Clock, Sun, Moon, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { getGymCurrentStatus, GymStatusResult } from '../utils/statusHelper';
import { TIMINGS_SCHEDULE, GYM_DETAILS } from '../data/gymData';

export default function GymStatusBanner() {
  const [status, setStatus] = useState<GymStatusResult>(getGymCurrentStatus());

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getGymCurrentStatus());
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-20 -mt-6 max-w-5xl mx-auto px-4 sm:px-6">
      <div className={`p-4 sm:p-6 rounded-2xl border transition-all duration-500 backdrop-blur-xl shadow-2xl ${
        status.isOpen 
          ? 'bg-[#0f1722]/90 border-emerald-500/40 shadow-emerald-950/40' 
          : 'bg-[#12141a]/95 border-amber-500/25 shadow-black/60'
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          {/* Status Indicator Left */}
          <div className="flex items-start sm:items-center gap-3.5">
            <div className={`p-3 rounded-xl flex items-center justify-center shrink-0 ${
              status.isOpen 
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                : 'bg-zinc-800 text-amber-400 border border-zinc-700'
            }`}>
              <Clock className="w-6 h-6 animate-pulse" />
            </div>

            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                  status.isOpen 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${status.isOpen ? 'bg-emerald-400' : 'bg-red-400'}`} />
                  {status.label}
                </span>

                <span className="text-xs text-zinc-400 font-medium">
                  {status.currentTimeString}
                </span>
              </div>

              <p className="text-sm sm:text-base font-semibold text-zinc-200 mt-1">
                {status.subtext}
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                {status.nextOpenText}
              </p>
            </div>
          </div>

          {/* Quick Schedule Reference Right */}
          <div className="flex items-center gap-3 self-stretch md:self-auto justify-between md:justify-end border-t md:border-t-0 border-white/10 pt-3 md:pt-0">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
              <Sun className="w-4 h-4 text-amber-400" />
              <div>
                <p className="text-zinc-400 font-medium text-[11px]">Morning</p>
                <p className="font-bold text-zinc-200">5:30 – 10:00 AM</p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs">
              <Moon className="w-4 h-4 text-indigo-400" />
              <div>
                <p className="text-zinc-400 font-medium text-[11px]">Evening</p>
                <p className="font-bold text-zinc-200">4:00 – 9:30 PM</p>
              </div>
            </div>

            <a
              href="#timings"
              className="p-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
              title="View full timings details"
            >
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
