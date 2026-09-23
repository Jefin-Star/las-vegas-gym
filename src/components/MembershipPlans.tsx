import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  Sparkles, 
  MessageCircle, 
  ShieldAlert, 
  HelpCircle,
  Zap,
  TrendingDown
} from 'lucide-react';
import { MEMBERSHIP_PLANS, GYM_DETAILS } from '../data/gymData';
import { MembershipPlan } from '../types';

export default function MembershipPlans() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-6m');

  const handleWhatsAppJoin = (plan: MembershipPlan) => {
    let message = `Hello LAS VEGAS! I want to enroll in the ${plan.name} (${plan.duration}) for ₹${plan.totalPrice.toLocaleString('en-IN')}.`;
    if (plan.hasAdmissionFee) {
      message += ` (Includes ₹${plan.admissionFee} admission fee + ₹${plan.membershipFee} membership fee).`;
    } else {
      message += ` (Zero admission fee package).`;
    }
    message += ` Please guide me through registration and timing batch selection.`;

    const encoded = encodeURIComponent(message);
    window.open(`${GYM_DETAILS.whatsappUrl}?text=${encoded}`, '_blank');
  };

  return (
    <section id="plans" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-950/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Transparent Membership Tiers</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-display tracking-tight text-white mb-4">
          INVEST IN YOUR <span className="bg-gradient-to-r from-amber-400 to-red-500 bg-clip-text text-transparent">GREATEST FORM</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
          No hidden charges. Choose from flexible single-month access or lock in massive savings with our 
          <span className="text-zinc-200 font-semibold"> zero-admission fee long-term passes</span>.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {MEMBERSHIP_PLANS.map((plan) => {
          const isSelected = selectedPlanId === plan.id;
          const isPopular = plan.popular;
          const isAnnual = plan.id === 'plan-1y';

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`relative rounded-2xl flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                isPopular
                  ? 'bg-gradient-to-b from-[#181a24] to-[#0f1118] border-2 border-red-500/80 shadow-[0_0_35px_rgba(239,68,68,0.2)] md:-translate-y-2'
                  : isAnnual
                  ? 'bg-gradient-to-b from-[#1a1815] to-[#0f1118] border-2 border-amber-500/80 shadow-[0_0_35px_rgba(245,158,11,0.2)]'
                  : 'bg-[#0f1219] border border-white/10 hover:border-white/20'
              } p-6 sm:p-7`}
            >
              {/* Badge for Popular or Best Value */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-lg ${
                    isPopular 
                      ? 'bg-red-600 text-white shadow-red-900/50' 
                      : isAnnual 
                      ? 'bg-amber-500 text-black shadow-amber-900/50' 
                      : 'bg-zinc-800 text-zinc-300 border border-zinc-700'
                  }`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Title & Duration */}
              <div>
                <div className="mb-4">
                  <h3 className="text-xl font-bold font-display text-white mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Duration: <span className="text-zinc-200 font-semibold">{plan.duration}</span>
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-zinc-400">₹</span>
                    <span className={`text-4xl sm:text-5xl font-black font-display ${
                      isAnnual ? 'text-amber-400' : isPopular ? 'text-red-400' : 'text-white'
                    }`}>
                      {plan.totalPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">/ total</span>
                  </div>

                  {/* Effective Monthly Price */}
                  {plan.pricePerMonth && (
                    <div className="mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] text-xs font-semibold text-zinc-300">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      <span>Equivalent: <strong className="text-amber-300">₹{plan.pricePerMonth}/month</strong></span>
                    </div>
                  )}

                  {/* Fee Breakdown Notice */}
                  <div className="mt-3 text-xs">
                    {plan.hasAdmissionFee ? (
                      <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300">
                        <p className="font-semibold">Fee Breakdown:</p>
                        <p className="text-[11px] text-amber-200/90 mt-0.5">
                          ₹{plan.admissionFee} admission fee + ₹{plan.membershipFee} membership fee
                        </p>
                      </div>
                    ) : (
                      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-semibold flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 shrink-0 text-emerald-400" />
                        <span>ZERO Admission Fee (100% Waived)</span>
                      </div>
                    )}
                  </div>

                  {plan.savingsText && (
                    <p className="text-[11px] text-zinc-400 mt-2 italic">
                      {plan.savingsText}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <button
                id={`join-btn-${plan.id}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleWhatsAppJoin(plan);
                }}
                className={`w-full py-3.5 px-4 rounded-xl text-sm font-black flex items-center justify-center gap-2 transition-all duration-200 shadow-md ${
                  isPopular
                    ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-red-900/40'
                    : isAnnual
                    ? 'bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black shadow-amber-900/40'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:text-white border border-zinc-700'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Plan via WhatsApp</span>
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Value Comparison Callout */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-zinc-900/90 via-[#131722] to-zinc-900/90 border border-white/10 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="text-base font-bold text-white flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-emerald-400" />
            <span>Why our 6-Month & 1-Year plans are the smartest choice</span>
          </h4>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Paying month-to-month with renewals costs ₹18,000+ per year. With our 1-Year Elite plan at ₹6,000, you save <strong className="text-amber-400">₹12,000</strong> with zero admission fees.
          </p>
        </div>

        <button
          onClick={() => handleWhatsAppJoin(MEMBERSHIP_PLANS[3])}
          className="shrink-0 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-amber-500 hover:bg-amber-400 text-black transition-colors"
        >
          Claim 1-Year Offer (₹6,000)
        </button>
      </div>
    </section>
  );
}
